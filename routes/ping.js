import express from 'express';
const router = express.Router({ strict: true });

router.get('/ping', (req, res, next) => {
     res.status(200).json({ success: true });
});

export default router;
