  // Importing things Here
  const express = require('express');
  const productRouter = require('./routes/Product')
  const mongoose = require('mongoose');
  const cors = require('cors')
  require('dotenv').config();
  const path = require('path');


  // Creating an Instatce of Express Or ( Creating Server)
  const server = express();

  // Middleware setup
  server.use(cors())
  server.use(express.json())

  // Serve static files from the directory defined in the environment variable
  server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)))

  // Route for handling product requests
  server.use("/products", productRouter)

  // Catch-all route for single-page applications (SPA) like React
  server.use('/{*splat}', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
  // Start the server on port 2000 or the value from the environment variable
  server.listen(5000)
  main().catch(err => console.log("Not Connecting...",err));

  // Connect to MongoDB database
  async function main() {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
