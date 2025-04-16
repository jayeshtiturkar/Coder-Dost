const express = require('express');
const authController = require('../controller/Auth')

const router = express.Router()
// REST API

router.post("/SignUp",authController.createUser)
router.post("/login",authController.loginUser)

module.exports = router;

