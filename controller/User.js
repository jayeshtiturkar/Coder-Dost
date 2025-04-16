const fs = require('fs')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.posts
const Jayesh = require('../model/User')
const User = Jayesh.UserSchema
var jwt = require('jsonwebtoken');
require('dotenv').config();



exports.getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById({ _id: id }).populate('cart').exec();
        res.json(user)
    } catch (error) {
        console.log(error);
        res.send("Wait For Mon")
    }

}


// exports.replaceproduct = async (req, res) => {
//     const id = req.params.id
//     try {
//         const products = await Product.findOneAndReplace({ _id: id }, req.body, {
//             runValidators: true,
//             new: true
//         })
//         res.json(products)
//     } catch (error) {
//         console.log(error);
//         res.json(error)
//     }

// }

// exports.updateProduct = async (req, res) => {
//     const id = req.params.id
//     try {
//         const products = await Product.findByIdAndUpdate({ _id: id }, req.body, { runValidators: true, new: true })
//         res.json(products)
//     } catch (error) {
//         console.log(error);
//         res.json(error)
//     }
    
// }
// exports.deleteProduct = async(req, res) => {
//     const id = req.params.id
//     try {
//         const products = await Product.findByIdAndDelete({ _id: id })
//         res.json(products)
//     } catch (error) {
//         console.log(error);
//         res.json(error)
//     }

// }