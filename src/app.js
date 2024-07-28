// app.js
const express = require('express');
const { run } = require('./db');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await run();
    res.send('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to connect to MongoDB');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
