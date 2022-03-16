const express = require("express");
const router = express.router();

const Product = require("../models/Product");

// @route POST api/product
// @desc Create a new Product
// @access private
router.post("/api/product", async (req, res) => {
  const { name, price, description, url, category } = req.body;

  if (!name) {
    return res
      .status(404)
      .json({ success: false, message: "Name product is required" });
  }
  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      url: url.startsWith("http://") ? url : `http://${url}`
    });
  } catch (error) {}
});
