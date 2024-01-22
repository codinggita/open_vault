const mongoose = require('mongoose');

const dropSchema = new mongoose.Schema(
    {
        did: {
            type: String,
            unique: true
        },
        createdBy: {
            type: String
        },
        createdOn: {
            type: Date
        },
        openedBy: {
            type: String
        },
        openedOn: {
            type: Date
        },
        privateKey: {
            type: String
        },
        data: {
            type: String
        }
    }
);

module.exports = mongoose.Model("Drop", dropSchema);