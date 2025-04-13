const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProuctSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
    total: Number,
    quantity: { type: Number, min: [1, 'Too few eggs'], max: [50, 'Too Less eggs'] },
    discountPercentage: Number,
    thumbnail:String
})

exports.ProuctSchema = mongoose.model("Product", ProuctSchema)