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
            type: Date,
            default: Date.now
        },
        openedBy: {
            type: String,
            default: null
        },
        openedOn: {
            type: Date,
            default: null
        },
        privateKey: {
            type: String
        },
        data: {
            type: String
        },
        pass: {
            type: String
        }
    }
);

module.exports = mongoose.model("Drop", dropSchema);