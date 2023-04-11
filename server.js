const express = require('express');
const app = express();
const path = require('path');
const { getS3List, getS3Object } = require('./AWS.js');
const matchEmails = require('./grep.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (req, res) => {
  try {
    res.setHeader('content-type', 'text/javascript')
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  } catch (err) {
    throw err;
  }
});

app.get('/getFiles', (req, res) => {
  // getS3List()
  //   .then((data) => {
  //     console.log('data:', data);
  //   });

  getS3Object()
    .then((data) => {
      res.send(data);
    })
  // res.send({a: 'text'})
});

app.post('/grepFiles', (req, res) => {
  console.log('req:', req.body.data);
   const file = req.body;
  res.send(matchEmails(file));
   module.exports = file;
})

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening to port 3000')
});