const mongoose = require('mongoose');

const publicSchema = new mongoose.Schema(
    {
        count: {
            type: Number,
            default: null
        }
    }
);

module.exports = mongoose.model("Public", publicSchema);