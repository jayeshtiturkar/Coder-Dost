const express = require('express');
const userController = require('../controller/User')

const router = express.Router()
// REST API

// router.get("/",userController.getALLProduct)
router.get("/:id",userController.getUser)
// router.put("/:id", userController.replaceproduct)
// router.patch("/:id", userController.updateProduct)
// router.delete("/:id", userController.deleteProduct)

module.exports = router;

