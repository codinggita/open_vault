const express = require('express');
const router = express.Router();

const {createDrop, visitDrop, openDrop} = require("./../controllers/dropController");

router.get("/:did", visitDrop);
router.post("/create", createDrop);
router.post("/open", openDrop);


module.exports = router;