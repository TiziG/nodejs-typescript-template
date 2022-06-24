import express from 'express';

const server = async () => {
  const port = 5000;
  const app = express();

  app.get('/api/state', async (req, res) => {
    res.send('42');
  });

  app.listen(port, () => {
    console.log(`API initialized and listening on port ${port}`);
  });

  console.log(`Server running on port ${port}`);
};

server().then(() => {
  //  do nothing
});
