// Import Libraries
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Import Modules
const {connectDB, disconnectDB} = require('./db/connect');
const userAuthRouter = require('./routes/userAuthRouters');
const dropRouter = require('./routes/dropRouter');
const logRouter = require('./routes/logRouter');
const authenticate = require('./middlewares/authenticate');


// Configure Env Variables.
dotenv.config();
const port = process.env.PORT || 5500;
const mongoURI = process.env.MONGO_URI;
const live = process.env.LIVE;

const publicDirectoryPath = path.join(__dirname, 'public');

// Get an instance of express.
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(publicDirectoryPath));

// Serve the root 
app.get("/", (req, res)=>{
    res.status(200).sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Router
app.use("/user/auth", userAuthRouter);
app.use("/drop", authenticate, dropRouter);
app.use("/log", authenticate, logRouter);

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