const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth")
const Category = require("../models/Category");

// @route POST api/category
// @desc Create a new Category
// @access private
router.post("/",verifyToken, async (req, res) => {
  const { name, url, code } = req.body;

  if (!name || !code) {
    return res
      .status(404)
      .json({ success: false, message: "Name category is required" });
  }
  try {
    // Check if name already exists
    const categoryname = await Category.findOne({ name });
    if (categoryname) {
      return res
        .status(400)
        .json({ success: false, message: "Category already exists" });
    }
    // Check if code category already exists
    const codeValid = await Category.findOne({ code });
    if (codeValid) {
      return res
        .status(400)
        .json({ success: false, message: "Category's code already exists" });
    }
    const newCategory = new Category({
      name,
      url: url.startsWith("http://") ? url : `http://${url}`,
      code
    });

    await newCategory.save();
    res.json({
      success: true,
      message: "Create category successfully",
      post: newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
