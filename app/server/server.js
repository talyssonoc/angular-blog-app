import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8000, () => {
  console.log('Listening at 8000');
});

export default app;
