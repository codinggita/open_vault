const { StatusCodes } = require('http-status-codes');
const uuid = require('uuid');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const Drop = require("../models/drop");
const User = require("./../models/user");

const getSecureKey = async (key) => {
    try {
        let hashedKey = await bcrypt.hash(key, 10);
        return hashedKey;
    } catch (err) {
        console.log(`Error Hashing password`, err);
        process.exit(1);
    }
}

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

        const responseObject = {
            isVerified: false,
            msg: 'default-obj-msg'
        };

        if (!drop) {
            responseObject.msg = `Drop with id: ${did} is invalid or expired.`;
            return res.status(StatusCodes.NO_CONTENT).send(responseObject);
        }

        const isOpened = drop.openedOn;
        if (isOpened) {
            responseObject.msg = `Drop with id: ${did} is already looted`;
            return res.status(StatusCodes.GONE).send(responseObject);
        }

        responseObject.isVerified = true;
        responseObject.msg = `Drop with id: ${did} is available, provide Key`;

        return res.status(StatusCodes.OK).send(responseObject);

    } catch (err) {
        console.log(`Error visiting(verifying drop)`, err);
        process.exit(1);
    }
};

const createDrop = async (req, res) => {
    try {
        const { eData } = req.body;

        const responseObject = {
            isVerified: false,
            msg: 'default-obj-msg'
        };

        if (!eData) {
            responseObject.msg = `All fields are required`;
            return res.status(StatusCodes.BAD_REQUEST).send(responseObject);
        }

        
        const did = uuid.v4().replace(/-/g, '').substring(0, 10);
        const oldId = await Drop.findOne({ did });

        while (!oldId) {
            did = uniqid();
            oldId = await Drop.findOne({ did });
        }

        // did is unique.

        // create {public key, private key} pair
        const keys = await generateKey();

        // Encrypt data 
        const encryptedData = await encrypt(eData, keys.publicKey);

        // Get User email
        const mongoId = req.user.id;
        const email = await getUserEmail(mongoId);

        // Get secureKey
        const secureKey = await getSecureKey(keys.privateKey);

        // Create entry
        const newData = {
            did,
            createdBy: email,
            privateKey: secureKey,
            data: encryptedData
        }

        const drop = await Drop.create({ ...newData });

        // return private key and did to the user
        const pass = keys.privateKey;

        responseObject.isVerified = true;
        responseObject.did = did;
        responseObject.msg = `Drop created Successfully`;
        responseObject.pass = pass;

        return res.status(StatusCodes.OK).send(responseObject);

    } catch (err) {
        console.log(`Error creating drop`, err);
        process.exit(1);
    }
};

const openDrop = async (req, res) => {
    try {
        const { dId, pass } = req.body;

        const responseObject = {
            isVerified: false,
            msg: 'default-obj-msg'
        };

        if (!dId || !pass) {
            responseObject.msg = `All fields required`;
            return res.status(StatusCodes.BAD_REQUEST).send(responseObject);
        }

        const dataPresent = Drop.findOne({ dId });

        if (!dataPresent) {
            responseObject.msg = `Drop with id: ${did} is invalid or expired.`;
            return res.status(StatusCodes.NO_CONTENT).send(responseObject);
        }

        // Check if data is already accessed. 
        if (dataPresent.openedOn) {
            responseObject.msg = `Drop with id: ${did} is already looted.`;
            return res.status(StatusCodes.NO_CONTENT).send(responseObject);
        }

        const encryptedData = dataPresent.eData;
        const key = dataPresent.privateKey;

        const isKeyCorrect = await bcrypt.compare(key, pass);
        if (!isKeyCorrect) {
            responseObject.msg = `Incorrect private key`;
            return res.status(StatusCodes.FORBIDDEN).send(responseObject);
        }

        const decryptedData = await decrypt(encryptedData, key);

        const mongoId = req.user.id;
        const email = await getUserEmail(mongoId);

        const updatedActivity = await UserActivity.updateOne(
            { did: dId },
            { $set: { timestamp: new Date(), openedBy: email } }
        );

        responseObject.msg = decryptedData;
        responseObject.isVerified = true;

        return res.status(StatusCodes.OK).send(responseObject);

    } catch (err) {
        console.log('Error Opening drop', err);
        process.exit(1);
    }
};

module.exports = { visitDrop, createDrop, openDrop };