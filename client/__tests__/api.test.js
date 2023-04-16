const express = require('express');
const app = express();
const axios = require('axios');

test('-GET to /test should return OK', () => {
  const request = axios({
    method: 'get',
    url: '/test'
  })
  .catch((err) => {
    throw err;
  })
  .then((response) => {
    console.log(response);
  })
  expect(request).rejects.toMatch('err');
  expect(request).resolves.toBe('OK');
});

test('failed GET to /test shoudl throw an error', () => {
  const request = axios({
    method: 'get',
    url: '/test'
  })
  .catch((err) => {
    if (err) throw 'err';
  })
  .then((response) => {
    console.log(response);
  })


  expect(request).rejects.toMatch('err');
});



// test('should return a grepKey', () => {
//   app.post('/grepFiles', (req, res) => {

//     const [file, grepKey, hasNumberLines] = [req.body.data, '', req.body.options.param['line numbers']];
//     const log = console.log.bind(console);

//     log('grepKey:', grepKey);


//   })

// })