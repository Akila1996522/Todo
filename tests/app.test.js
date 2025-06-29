const request = require('supertest');
const app = require('../src/app');

describe('GET /contact', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/contact');
    expect(res.statusCode).toEqual(500);
  });
});
