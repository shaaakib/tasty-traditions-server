const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Tasty Traditions is running');
});

app.listen(port, () => {
  console.log(`Tasty Traditions API is running on port: ${port}`);
});
