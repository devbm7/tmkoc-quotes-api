const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const { getRandomQuote, getMultipleQuotes, searchQuotes, filterByCharacter, filterByTag } = require('./quotesRepository');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

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

app.get('/v1/quotes/character/:author', (req, res) => {
  const author = req.params.author;
  res.json(filterByCharacter(author));
});

app.get('/v1/quotes/tag/:tag', (req, res) => {
  const tag = req.params.tag;
  res.json(filterByTag(tag));
});

app.get('/v1/quotes/search', (req, res) => {
  const { author, text } = req.query;
  res.json(searchQuotes({ author, text }));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;