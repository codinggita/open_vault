const express = require('express');
const router = express.Router();

const getUserLogs = require('./../controllers/logController');

router.get("/", getUserLogs);

module.exports = router;