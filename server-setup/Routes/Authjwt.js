const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../Authentication/AuthJwt');
const User = require('../Model/User');

const SECRET_KEY = 'your_secret_key';

router.post('/register-user', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json(user);
    alert("register succesfull!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

router.post('/login-user', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username }, SECRET_KEY);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'username or password incorrect!' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'something wrong!' });
  }
});

module.exports = router;