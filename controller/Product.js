const fs = require('fs')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.posts
const Jayesh = require('../model/Product')
const Product = Jayesh.ProuctSchema


exports.getALLProduct = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

exports.getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const products = await Product.findById({ _id: id })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.send("Wait For Mon")
    }

}
exports.postProduct = (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(savedProduct => {
            console.log("✅ Saved:", savedProduct);
        })
        .catch(err => {
            console.error("❌ Error:", err);
        });
    res.json(product)
}

exports.replaceproduct = async (req, res) => {
    const id = req.params.id
    try {
        const products = await Product.findOneAndReplace({ _id: id }, req.body, {
            runValidators: true,
            new: true
        })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }

}

exports.updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const products = await Product.findByIdAndUpdate({ _id: id }, req.body, { runValidators: true, new: true })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
}
exports.deleteProduct = async(req, res) => {
    const id = req.params.id
    try {
        const products = await Product.findByIdAndDelete({ _id: id })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }

}