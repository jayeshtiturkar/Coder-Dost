const express = require('express');
const productController = require('../controller/Product')

const router = express.Router()
// REST API

router.get("/",productController.getALLProduct)
router.get("/:id",productController.getProduct)
router.post("/", productController.postProduct)
router.put("/:id", productController.replaceproduct)
router.patch("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)

module.exports = router;

