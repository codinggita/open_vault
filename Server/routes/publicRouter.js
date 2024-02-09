const express = require('express');
const router = express.Router();

const {getWebsiteStat, increaseEncryptCount} = require('./../controllers/publicController');

router.get("/getWebsiteStat", getWebsiteStat);
router.patch("/increaseEncryptCount", increaseEncryptCount);

module.exports = router;