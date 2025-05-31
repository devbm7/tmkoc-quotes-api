const quotes = require('./quotes');

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function getMultipleQuotes(count) {
  let results = [];
  for (let i = 0; i < count; i++) {
    results.push(getRandomQuote());
  }
  return results;
}

module.exports = { getRandomQuote, getMultipleQuotes };
