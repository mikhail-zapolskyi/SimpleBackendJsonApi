export const cacheControl = (req, res, next) => {
     const cacheTime = 60 * 60 * 24 * 1000;

     if (req.method === 'GET') {
          res.set('cache-control', `public, max-age=${cacheTime}`);
     } else {
          res.set('cache-control', 'no-store');
     }

     next();
};
