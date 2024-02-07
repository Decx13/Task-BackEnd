const express = require('express');
const router = express.Router();
const Products = require('../Model/Products');

// Create or insert product
router.post('/products', async (req, res) => {
  try {
    const { Productname,PValue } = req.body;
    const product = await Products.create({  Productname,PValue });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Read or get product
router.get('/products/:id', async (req, res) => {
  try {
    const PId = req.params.id;
    const product = await Products.findByPk(PId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Update product
router.put('/products/:id', async (req, res) => {
  try {
    const PId = req.params.id;
    const { Productname,PValue } = req.body;
    const product = await Products.findByPk(PId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.Productname= Productname;
    product.PValue= PValue;
    await Products.save();
    res.json(product);
    alert("update succesfull!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Delete product
router.delete('/products/:id', async (req, res) => {
  try {
    const PId = req.params.id;
    const product = await Products.findByPk(PId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

module.exports = router;