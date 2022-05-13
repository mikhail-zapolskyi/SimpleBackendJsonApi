import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { cacheControl } from '../middleware/cacheControl.js';
import { queryValidation } from '../middleware/queryValidation.js';

const router = express.Router();

router.get('/posts', queryValidation, cacheControl, getPosts);

export default router;
