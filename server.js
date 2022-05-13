import app from './app.js';

app.listen(process.env.PORT, () => {
     console.log(`Server runs on port ${process.env.PORT}`);
});
