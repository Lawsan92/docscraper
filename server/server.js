const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening to port ${PORT}`)
});

// REFERENCES

// https://www.youtube.com/watch?v=iM_S4RczozU&ab_channel=SteveGriffith-Prof3ssorSt3v3