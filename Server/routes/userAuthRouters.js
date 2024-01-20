const express = require('express');
const router=express.router();

const {registerUser, loginUser, emailVerification} = require("./../controllers/userAuthController")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", emailVerification);

module.exports(router);