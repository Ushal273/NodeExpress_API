const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route");

const app = express();

// Middleware   Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Ushal");
});

// Database Connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://koiralaushal13:O5v21UT5Iw0ef5KV@backend-db.5cdcwzs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend-DB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });
