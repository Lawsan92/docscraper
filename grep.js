const { readFileSync } = require('fs');
const testFile = readFileSync('./test.txt', {encoding: 'utf8'});

// console.log('testFile:', testFile);
// console.log('emailGrep:', ...emailGrep)

const matchEmails = (file) => {

  let lineCount = 1;

  if (typeof file === 'object') {
    file = file.data
  }
  const regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
  const emailGrep = file.matchAll(regEmail);

  const print = () => {
    let list = '';
    for (let value of emailGrep) {
      let line = `${lineCount}:${value[0]}"\n"`;
      lineCount++;
      console.log('line:', line);
      list += line;
    }
    return list;
  };

  return print();

};

const matchIPs = (file) => {

  if (typeof file === 'object') {
    file = file.data
  }

  const regIP = /\b\d+\.\d+\.\d+\.\d+\b/g;
  const IPgrep = file.matchAll(regIP);

  const print = () => {
    let list = '';
    for (let value of IPgrep) {
      let line = value[0] + "\n";
      console.log('line:', line);
      list += line;
    }
    return list;
  };

  return print();

}

const GrepClass = {
  'email': matchEmails,
  'ip address': matchIPs
};

// console.log('matchIPs(testFile):', matchIPs(testFile));
// console.log('matchIPs(testFile):', matchEmails(testFile));

// file && console.log('emails:', matchEmails(file));

module.exports = {matchEmails, matchIPs, GrepClass};

// REFERENCES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// https://www.pluralsight.com/guides/uploading-files-with-reactjs
// https://stackoverflow.com/questions/51272255/how-to-use-filereader-in-react