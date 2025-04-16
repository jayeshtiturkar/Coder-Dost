const fs = require('fs')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.posts
const Jayesh = require('../model/Product')
const Product = Jayesh.ProuctSchema


exports.getALLProduct = async (req, res) => {
    if (req.query.value && req.query.sort) {
        const query = Product.find()
        const v1 = req.query.value
        const products = await query.sort({ [v1]: req.query.sort }).exec();
        res.json(products)

    } else if (req.query.page) {
        const query = Product.find()
        const numberOfProduct = 4
        const pageNumber = req.query.page
        const products = await query.skip(numberOfProduct*(pageNumber-1)).limit(numberOfProduct).exec();
        res.json(products)

    } else {
        const products = await Product.find()
        res.json(products)
    }
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
exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const products = await Product.findByIdAndDelete({ _id: id })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }

}