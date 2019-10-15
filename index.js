const express = require('express');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

app.get('/search/:term', (req, res) => {
  const searchTerm = req.params.term;
  const part = 'snippet';

  fetch(`${BASE_URL}?part=${part}&q=${searchTerm}&key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => res.json(data));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
