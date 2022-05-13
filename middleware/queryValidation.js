export const queryValidation = (req, res, next) => {
     const { tags, sortBy='id', direction='asc' } = req.query;
     
     // VALIDATE TAGS
     if (!tags) res.status(400).json({ error: 'Tags parameter is required' });

     // VALIDATE SORTBY
     if (!sortBy) res.status(400).json({ error: 'SortBy parameter is required' });

     // VALIDATE DIRECTION
     if (direction && direction !== 'asc' && direction !== 'desc') res.status(400).json({ error: 'Direction parameter is invalid' });

     next();
};
