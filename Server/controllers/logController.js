const { StatusCodes } = require('http-status-codes');

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

const fetchData = async (email) => {
    try {
        const drops = await Drop.find(
            { createdBy: email }
        );

        const dataFormat = {
            did: '',
            createdON: '',
            isOpened: false
        };

        const data = [];

        drops.forEach((doc) => {
            dataFormat.did = doc.did;
            dataFormat.createdON = doc.createdOn;
            dataFormat.isOpened = (doc.openedOn != null);

            data.push(dataFormat);
        });

        return data;

    } catch (err) {
        console.log('Error fetching user Logs', err);
        process.exit(1);
    }
}

const getUserLogs = async (req, res) => {
    try {

        const responseObject = {
            isVerified: false,
            msg: 'default-obj-msg'
        };

        const mongoId = req.user.id;
        const email = await getUserEmail(mongoId);

        const data = await fetchData(email);

        responseObject.logs = data;

        return res.status(StatusCodes.OK).send(responseObject);
    } catch (err) {
        console.log('Error Opening drop', err);
        process.exit(1);
    }
};

module.exports = getUserLogs;