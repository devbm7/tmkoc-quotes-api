const request = require('supertest');
const express = require('express');
const app = express();
const routes = require('../server');

app.use('/', routes);

describe('TMKOC Quotes API', () => {
  it('should return a random quote', async () => {
    const res = await request(app).get('/v1/quotes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('quote');
    expect(res.body).toHaveProperty('author');
  });

  it('should return quotes by character', async () => {
    const res = await request(app).get('/v1/quotes/character/Daya');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return quotes by tag', async () => {
    const res = await request(app).get('/v1/quotes/tag/classic');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should search quotes by text', async () => {
    const res = await request(app).get('/v1/quotes/search?text=paise');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
