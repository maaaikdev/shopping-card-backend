const express = require("express");
const cors = require("cors");

const products = require("./products")

const app = express();
const mercadopago = require("mercadopago");
const path = require("path")

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our online sho API...")
});

app.get("/products", (req, res) => {
    res.send(products)
});

const port = process.env.PORT || 5001;

app.listen(port, console.log(`Server running on port ${port}`));