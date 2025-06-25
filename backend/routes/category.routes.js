const express = require('express');
const router = express.Router();
const { Category } = require('../models'); // Adjust path as needed

// GET /categories - fetch all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll(); // Assumes you have a Category model
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET /categories/:id - fetch a single category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category); // Returns { id: ..., name: ... }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
