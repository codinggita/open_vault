const { StatusCodes } = require('http-status-codes');
const { nanoid } = require('nanoid');
const crypto = require('crypto');

const Drop = require("../models/drop");
const User = require("./../models/user");

const getUserEmail = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) throw new Error('Id not found.');

        const email = user.email;
        return email;
    } catch (err) {
        console.log('Error Fetching email from db', err);
        process.exit(1);
    }
};

const generateKey = async () => {
    try {
        // Generate key pair using the 'rsa' algorithm
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 1024, // The length of the key in bits
            publicKeyEncoding: {
                type: 'spki', // SubjectPublicKeyInfo (SPKI)
                format: 'pem', // Privacy-Enhanced Mail (PEM)
            },
            privateKeyEncoding: {
                type: 'pkcs8', // Private-Key Information Syntax Standard #8 (PKCS#8)
                format: 'pem', // Privacy-Enhanced Mail (PEM)
            },
        });

        return { publicKey, privateKey };

    } catch (err) {
        console.log(`Error generating key`, err);
        process.exit(1);
    }
};

const encrypt = async (dataToEncrypt, publicKey) => {
    try {
        const encryptedData = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING }, Buffer.from(dataToEncrypt, 'utf-8')).toString('base64');
        return encryptedData;
    } catch (err) {
        console.log(`Error encrypting data`, err);
        process.exit(1);
    }
};

const decrypt = async (encryptedData, privateKey) => {
    try {
        const decryptedData = crypto.privateDecrypt({ key: privateKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING }, Buffer.from(encryptedData, 'base64'));
        return decryptedData.toString('utf-8');
    } catch (err) {
        console.log(`Error Decrypting data`, err);
        process.exit(1);
    }
};

const visitDrop = async (req, res) => {
    try {
        const did = req.params.did;
        const drop = await Drop.findOne({ did });

        if (!drop) {
            return res.status(StatusCodes.NO_CONTENT).send(`Drop expired or Invalid`);
        }

        const isOpened = drop.openedOn;
        if (isOpened) {
            return res.status(StatusCodes.GONE).send(`Drop already opened`);
        }

        return res.status(StatusCodes.OK).send(`Drop available, provide key`);
    } catch (err) {
        console.log(`Error visiting(verifying drop)`, err);
        process.exit(1);
    }
};

const createDrop = async (req, res) => {
    try {
        const { eData } = req.body;

        if (!eData) {
            return res.status(StatusCodes.BAD_REQUEST).send('All Fields required');
        }

        const mongoId = req.user.id;
        const email = await getUserEmail(mongoId);

        const did = nanoid();
        const oldId = await Drop.findOne({ did });

        while (!oldId) {
            did = nanoid();
            oldId = await Drop.findOne({ did });
        }

        // did is unique.

        // create {public key, private key} pair
        const keys = await generateKey();

        // Encrypt data 
        const encryptedData = await encrypt(eData, keys.publicKey);

        // Create entry
        const newData = {
            did,
            createdBy: email,
            privateKey: keys.privateKey,
            data: encryptedData
        }

        const drop = await Drop.create({ ...newData });

        // return private key and did to the user
        const pass = keys.privateKey;

        return req.status(StatusCodes.OK).json({ did, pass });

    } catch (err) {
        console.log(`Error creating drop`, err);
        process.exit(1);
    }
};

const openDrop = async (req, res) => {
    try {
        const { dId, pass } = req.body;

        if (!dId || !pass) {
            return res.status(StatusCodes.BAD_REQUEST).send("All fields required");
        }

        const dataPresent = Drop.findOne({ dId });

        if (!dataPresent) {
            return res.status(StatusCodes.NO_CONTENT).send(`Drop expired or Invalid`);
        }

        // Check if data is already accessed. 
        if (dataPresent.openedOn) {
            return res.status(StatusCodes.NO_CONTENT).send(`Drop already looted`);
        }

        const encryptedData = dataPresent.eData;
        const key = dataPresent.privateKey;

        if (key != pass) {
            return res.status(StatusCodes.FORBIDDEN).send('Incorrect Pass');
        }

        const decryptedData = await decrypt(encryptedData, key);

        const mongoId = req.user.id;
        const email = await getUserEmail(mongoId);

        const updatedActivity = await UserActivity.updateOne(
            { did: dId },
            { $set: { timestamp: new Date(), openedBy: email } }
        );

        return res.status(StatusCodes.OK).json({ decryptedData });
    } catch (err) {
        console.log('Error Opening drop', err);
        process.exit(1);
    }
};

module.exports = { visitDrop, createDrop, openDrop };