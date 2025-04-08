const express = require("express");
const {
  deleteProduct,
  updateProduct,
  getProduct,
  listProduct,
  addProduct,
} = require("../controllers/product.controller");
const route = express.Router();

route.post("/", addProduct);

route.get("/", listProduct);

route.get("/:id", getProduct);

route.put("/:id", updateProduct);

route.delete("/:id", deleteProduct);

module.exports = route;
