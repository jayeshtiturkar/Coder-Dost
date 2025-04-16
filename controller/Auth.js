const fs = require('fs')
const Jayesh = require('../model/User')
const User = Jayesh.UserSchema
var jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8');

exports.createUser = async (req, res) => {
    const user = new User(req.body)
    const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
    const password = await bcrypt.hash(String(req.body.password), saltRounds);
    user.token = token
    user.password = password
    user.save()
        .then(saveUser => {
            console.log("✅ Saved:", saveUser);
        })
        .catch(err => {
            console.error("❌ Error:", err);
        });
    res.json(token)
}

exports.loginUser = async (req, res) => {
    const userData = await User.findOne({ email: req.body.email })
    const isAuth = bcrypt.compareSync(String(req.body.password), userData.password); //isAuth Return True or False
    try {
        if (isAuth) {
            const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
            userData.token = token;
            userData.save()
                .then(saveUser => {
                    console.log("✅ Saved:", saveUser);
                    res.json(token)
                })
                .catch(err => {
                    console.error("❌ Error:", err);
                });
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        res.sendStatus(401)
    }
}