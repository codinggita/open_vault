const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url).then(
        () => {
            console.log("Successfully connected to DB");
        }
    ).catch((err) => {
        console.log("Error Connecting to the DB", err);
        process.exit(1);
    });
};

const disconnectDB = () => {
    mongoose.connection.close((err) => {
        if (err) {
            console.error('Error closing MongoDB connection:', err);
        } else {
            console.log('MongoDB connection closed successfully');
        }
    });
};

module.exports = { connectDB, disconnectDB };
