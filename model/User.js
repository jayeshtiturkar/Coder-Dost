const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }], 
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    token: String
})

exports.UserSchema = mongoose.model("User", UserSchema)