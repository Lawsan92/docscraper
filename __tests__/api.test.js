const express = require('express');
const app = express();
const axios = require('axios');


describe('portfolio API', () => {
  test('should return visits object from http://lawrence-sanzogni.com/visits ', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://lawrence-sanzogni.com/visits'});
      const data = await response.data
      console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('object');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })
})

describe('DocScraper API', () => {
  test('should return fileData with -GET @ /getFiles', async () => {
    expect.assertions(1);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/getFiles'
      });
      const data = await response.data
      console.log('data:', data, 'received @', response.config.url);
      expect(typeof data).toBe('string');
    } catch(e) {
      expect(e).toMatch('error');
    }
  })
})