const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Tasty Traditions is running');
});

app.get('/chef', (req, res) => {
  res.send(chef);
});

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = chef.find((n) => n.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Tasty Traditions API is running on port: ${port}`);
});
