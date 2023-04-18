const express = require('express');
const path = require('path');
const app = express();
const getFiles = require('./routes/getFiles');
const grepFiles = require('./routes/grepFiles');
const test = require('./routes/test');

//--------------------MIDDLEWARE--------------------*/
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//--------------------ROUTES--------------------*/
app.get('/', (req, res) => {
  try {
    res.setHeader('content-type', 'text/javascript')
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  } catch (err) {
    throw err;
  }
});
app.use('/getFiles', getFiles);
app.use('/grepFiles', grepFiles);
app.use('/test', test);

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening to port 3000')
});