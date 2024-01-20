// Import Libraries
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Import Modules
const {connectDB, disconnectDB} = require('./db/connect');
const userAuthRouter = require('./routes/userAuthRouters');


// Configure Env Variables.
dotenv.config();
const port = process.env.PORT || 5500;
const mongoURI = process.env.MONGO_URI;
const live = process.env.LIVE;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("OpenVault");
});

// Router
app.use("/user/auth", userAuthRouter);

const start = async () => {
    try {
        // Check if required environment variables are set
        
        if (!mongoURI) {
            console.error('MONGO_URI environment variable is not set.');
            process.exit(1);
        }

        await connectDB(mongoURI);
        app.listen(port, () => {
            console.log(`Server is listening to port ${port} happily`);
            console.log(`GO Live: ${live}${port}/`)
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

start();

// ShutDown on SIGINT signal.
process.on('SIGINT', () => {
    console.log('Shutting down gracefully');

    try {
        disconnectDB();
    } catch (err) {
        console.log("Error disconnecting mongoDB", err);
    }

    process.exit(0);
});