import request from "supertest";
import app from './app.js';

const object = {}

describe('GET /api/ping', () => {
     
     test('is response 200, object, succsses: true', async () => {
          const res = await request(app).get('/api/ping')
          expect(res.statusCode).toBe(200)
          expect(res.body).toEqual(expect.objectContaining(object))
          expect(res.body).toEqual({ success: true })
     })
});

describe('GET /api/posts', () => {
     test('is signle tag statusCode 200, content-type: json, object, defined', async () => {
          const res = await request(app).get('/api/posts?tags=tech')
          expect(res.statusCode).toBe(200);
          expect(res.headers['content-type']).toEqual(expect.stringContaining('json'))
          expect(res.body).toEqual(expect.objectContaining(object))
          expect(res.body).toBeDefined()
     })

     test('is tags missing', async () => {
          const res = await request(app).get('/api/posts?tags=')
          expect(res.statusCode).toBe(400)
          expect(res.body).toEqual({ error: "Tags parameter is required" })
     })

     test('is sortBy correct', async () => {
          const res = await request(app).get('/api/posts?tags=tech&sortBy=')
          expect(res.statusCode).toBe(400)
          expect(res.body).toEqual({ error: "sortBy parameter is invalid" })
     })

})
