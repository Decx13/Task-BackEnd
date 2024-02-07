const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create or insert user
router.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Read or get user
router.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Update User
router.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, password } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.username = username;
    user.password = password;
    await user.save();
    res.json(user);
    alert("update succesfull!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

module.exports = router;