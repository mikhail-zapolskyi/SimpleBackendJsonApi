import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { cacheControl } from '../middleware/cacheControl.js';
const router = express.Router();

router.get('/posts', cacheControl, getPosts);

export default router;