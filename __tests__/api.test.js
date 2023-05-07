const axios = require('axios');
const { readFileSync } = require('fs');
const path = require('path');
const log = process.argv[process.argv.length - 1] === '-log'; // jest __tests__/api.test.js -log

log && console.log('process.argv:', process.argv, 'process.argv[process.argv.length - 1:', process.argv[process.argv.length - 1]);

describe('portfolio API', () => {

  test('should return visits object from http://lawrence-sanzogni.com/visits ', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://lawrence-sanzogni.com/visits'});
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('object');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

});

describe('DocScraper API', () => {

  test('should return 200 status with -GET @ /test', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/test'
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })


  test('should return 200 status with -GET @ /test', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/test'
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should return fileData with -GET @ /getFiles', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/getFiles'
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should filter emails from fileData with -POST @ /grepFiles', async () => {
    expect.assertions(1);
    const file = readFileSync(path.join(__dirname, 'data/test3.txt'), {encoding: 'utf-8'});
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/grepFiles',
        data: {
          data: file,
          options: {
            param: {
              email: true
            }
          }
        }
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should filter ip addresses from fileData with -POST @ /grepFiles', async () => {
    expect.assertions(1);
    const file = readFileSync(path.join(__dirname, 'data/test3.txt'), {encoding: 'utf-8'});
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/grepFiles',
        data: {
          data: file,
          options: {
            param: {
            'ip address': true
            }
          }
        }
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should filter phone numbers from fileData with -POST @ /grepFiles', async () => {
    expect.assertions(1);
    const file = readFileSync(path.join(__dirname, 'data/test3.txt'), {encoding: 'utf-8'});
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/grepFiles',
        data: {
          data: file,
          options: {
            param: {
            'phone number': true
            }
          }
        }
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should filter emails from fileData and sort alphabetically with -POST @ /grepFiles', async () => {
    expect.assertions(1);
    const file = readFileSync(path.join(__dirname, 'data/test3.txt'), {encoding: 'utf-8'});
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/grepFiles',
        data: {
          data: file,
          options: {
            sort: {
              alphabet: true
            },
            param: {
              email: true
            }
          }
        }
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

  test('should find a single email address from fileData using text input with -POST @ /grepFiles', async () => {
    expect.assertions(1);
    const file = readFileSync(path.join(__dirname, 'data/test3.txt'), {encoding: 'utf-8'});
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/grepFiles',
        data: {
          data: file,
          options: {
            param: {
              email: true
            },
            text: {
              '0': 'csc',
              '1': 'yahoo',
              '2': 'com'
            }
          }
        }
      });
      const data = await response.data
      log && console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })

});

