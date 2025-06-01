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

function filterByCharacter(author) {
  return quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
}

function filterByTag(tag) {
  return quotes.filter(q => q.tags.includes(tag.toLowerCase()));
}

function searchQuotes({ author, text }) {
  return quotes.filter(q => {
    const matchesAuthor = author ? q.author.toLowerCase().includes(author.toLowerCase()) : true;
    const matchesText = text ? q.quote.toLowerCase().includes(text.toLowerCase()) : true;
    return matchesAuthor && matchesText;
  });
}

module.exports = { getRandomQuote, getMultipleQuotes, filterByCharacter, filterByTag, searchQuotes };
