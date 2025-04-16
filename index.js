// Importing things Here
const express = require('express');
const fs = require('fs')
const productRouter = require('./routes/Product');
const authRouter = require('./routes/Auth');
const userRouter = require('./routes/User');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const jwt = require('jsonwebtoken');
const publicKey = fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8');



// Creating an Instatce of Express Or ( Creating Server)
const server = express();

// Middleware setup
server.use(cors())
server.use(express.json())

// Serve static files from the directory defined in the environment variable
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)))

// Route for handling product requests
const auth = ((req, res, next) => {
  try {
    const token = req.get('Authorization').split(' ')[1]
    var decoded = jwt.verify(token, publicKey);
    console.log(decoded.email);
    if (decoded.email) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    res.sendStatus(401)
  }

})

server.use("/auth", authRouter)
server.use("/products" , productRouter)
server.use("/user", userRouter)

// Catch-all route for single-page applications (SPA) like React
server.use("/*splat", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
// Start the server on port 2000 or the value from the environment variable
server.listen(5000)
main().catch(err => console.log("Not Connecting...", err));

// Connect to MongoDB database
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
