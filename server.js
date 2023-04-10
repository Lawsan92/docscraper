const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (req, res) => {
  try {
    res.setHeader('content-type', 'text/javascript')
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  } catch (err) {
    throw err;
  }
})

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening to port 3000')
})