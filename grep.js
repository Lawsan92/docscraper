const { readFileSync } = require('fs');
const testFile = readFileSync('./test.txt', {encoding: 'utf8'});
const file = require('./server.js');

// console.log('testFile:', testFile);
// console.log('emailGrep:', ...emailGrep)

const matchEmails = (file) => {

  if (typeof file === 'object') {
    file = file.data
  }
  const regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
  const emailGrep = file.matchAll(regEmail);
  // console.log('emailGrep:', ...emailGrep);
  let result = '';
  for (let value of emailGrep) {
    result += value[0] + "\n";
  }
  console.log('result:', result);
  return result;
}

// file && console.log('emails:', matchEmails(file));

module.exports = matchEmails;

// REFERENCES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// https://www.pluralsight.com/guides/uploading-files-with-reactjs
// https://stackoverflow.com/questions/51272255/how-to-use-filereader-in-react