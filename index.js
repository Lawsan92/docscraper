const { readFileSync } = require('fs');
const testFile = readFileSync('./test.txt', {encoding: 'utf8'});

// console.log('testFile:', testFile);
// console.log('emailGrep:', ...emailGrep)

const matchEmails = (file) => {
  const regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
  const emailGrep = testFile.matchAll(file);
  console.log('emailGrep:', ...emailGrep);
  // let result = '';
  // for (let value of emailGrep) {
  //   result += value[0] + "\n";
  // }
  // return result;
}

console.log('emails:', matchEmails(testFile));

// REFERENCES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator