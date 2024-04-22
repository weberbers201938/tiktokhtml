const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/tiksearch', async (req, res) => {
  const { search } = req.query; // Use req.query to access query parameters
  
  try {
    const response = await axios.get(`http://65.109.58.118:26011/api/tiksearch?search=${search}`);
    const result = response.data;
    res.json(result);
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
