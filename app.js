import express from 'express';
import 'dotenv/config';
import ping from './routes/ping.js';
import posts from './routes/posts.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));

app.use('/api', ping);
app.use('/api', posts);

export default app;
