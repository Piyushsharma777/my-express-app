const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

router.get('/api', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/'); 
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

module.exports = router;
