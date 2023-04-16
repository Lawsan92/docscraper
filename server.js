const express = require('express');
const app = express();
const path = require('path');
const { getS3List, getS3Object } = require('./AWS.js');
const { matchEmails, GrepClass } = require('./grep.js');
const Sort = require('./sort.js');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));
console.log('Sort:', Sort);
app.get('/', (req, res) => {
  try {
    res.setHeader('content-type', 'text/javascript')
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  } catch (err) {
    throw err;
  }
});

app.get('/test', async (req, res, next) => {
  try {
    await next(res.sendStatus(200));
  } catch (err) {
    await next(err);
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
});

app.post('/grepFiles', (req, res) => {

  console.log('req.body.options:', req.body.options);
  const [file, grepKey, hasNumberLines] = [req.body.data, '', req.body.options.param['line numbers']];
  const paramKeys = req.body.options.param;
  for (let key in paramKeys) {
    if (paramKeys[key]) {
      grepKey = key;
    }
  };
  const result = GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]);
  const log = console.log.bind(console);
  console.group('/---------------------------/')
    log('hasNumberLines:', hasNumberLines);
    log('grepKey:', grepKey)
    log('result:', result);
  console.groupEnd('/---------------------------/');
  //  const sort = req.body.options.sort.alphabet;
  //  console.log('sort:', sort);
  //  if (sort) {
  //   console.log('GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]):', GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]));
  //   console.log('DONE!!!')
  //   const sortFile = new Sort;
  //   res.send(sortFile.sortEmails(GrepClass[grepKey](file, Object.keys(req.body.options.param)[0])));
  //  }
  // const result = GrepClass[grepKey](file, Object.keys(req.body.options.param)[0]);
  // console
   res.send(result);
})

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening to port 3000')
});