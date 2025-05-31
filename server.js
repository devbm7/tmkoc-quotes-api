const express = require('express');
const app = express();
const { getRandomQuote, getMultipleQuotes } = require('./quotesRepository');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Welcome to TMKOC Quotes API!");
});

app.get('/v1/quotes', (req, res) => {
  res.json(getRandomQuote());
});

app.get('/v1/quotes/:count', (req, res) => {
  const count = parseInt(req.params.count);
  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ error: "Invalid count value" });
  }
  res.json(getMultipleQuotes(count));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
