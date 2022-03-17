const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// @route GET api/product
// @desc Get product
// @access private
router.get("/", async (req, res) => {
  const { category } = req.body;
  try {
    const products = await Product.find({ category: category });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/product
// @desc Create a new Product
// @access private
router.post("/", async (req, res) => {
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
      url: url.startsWith("http://") ? url : `http://${url}`,
    });
    await newProduct.save();
    res.json({
      success: true,
      message: "Create product successfully",
      post: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/product/:id
// @desc Put product
// @access private

router.put("/:id",async (req, res) => {
    const { name, price, description, url, category } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Name product is required" });
    }
    try {
      let updatedProduct = {
        name,
        price,
        description: description || "",
        url: url.startsWith("http://") ? url : `http://${url}`,
        category,
      };
      const productUpdateCondition = { _id: req.params.id };
      updatedProduct = await Product.findOneAndUpdate(
        productUpdateCondition,
        updatedProduct,
        { new: true }
      );

      if (!updatedProduct) {
        return res
          .status(401)
          .json({ success: false, message: "Product not found" });
      }
      res.json({ success: true, message: "Updated product successfully",updatedProduct });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  });

// @route Delete api/product/:id
// @desc delete product
// @access private

router.delete('/:id',async (req, res)=>{
  try {
    const productDeleteCondition = { _id: req.params.id}
    const deleteProduct = await Product.findOneAndDelete(productDeleteCondition)
    // Check if product not found
    if (!deleteProduct) {
      return res
        .status(401)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Deleted product successfully",deleteProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
    
})

module.exports = router;
