const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
    it('should return Hello, GitHub Actions!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, GitHub Actions!');
    });
});
