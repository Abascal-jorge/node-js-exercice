const express = require("express");
const app = express();
const producto = require("../controllers/product");


app.post("/product", 
    producto.agregarProducto
)

module.exports = app;