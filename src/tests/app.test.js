const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
	  it('should return Hello, CI/CD!', async () => {
		      const res = await request(app).get('/');
		      expect(res.text).toBe('Hello, CI/CD!');
		      expect(res.statusCode).toBe(200);
		    });
});

