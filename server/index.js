const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'MERN blog post' });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
