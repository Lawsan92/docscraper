const { readFileSync } = require('fs');
const testFile = readFileSync('__tests__/data/test.txt', {encoding: 'utf8'});

// console.log('testFile:', testFile);
// console.log('emailGrep:', ...emailGrep)

const GrepClass = {
  'email': (file, lines, text) => {

    let regEmail;

    if (text) {
      regEmail = new RegExp(`${text['0'] || ''}[a-zA-Z0-9_.]+@${text['1'] || ''}[a-zA-Z0-9_.]+.[${text['2'] || 'a-zA-Z0-9_.'}]`, 'g');
      console.log('regEmail:', regEmail)
    } else {
      regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
    }

    if (typeof file === 'object') {
      file = file.data
    }

    const emailGrep = file.matchAll(regEmail);

    const print = () => {
      let list = '';
      let lineCount = 1;
      for (let value of emailGrep) {
        if (lines) {
          let line = `${lineCount}:${value[0]}"\n"`;
          lineCount++;
          // console.log('line:', line);
          list += line;
        } else {
          let line = `${value[0]}"\n"`;
          // console.log('line:', line);
          list += line;
        }
      }
      console.log('list:', list);
      return list;
    };

    return print();

  },
  'ip address': (file, lines) => {

    if (typeof file === 'object') {
      file = file.data
    }

    const regIP = /\b\d+\.\d+\.\d+\.\d+\b/g;
    const IPgrep = file.matchAll(regIP);

    const print = () => {
      let list = '';
      let lineCount = 1;
      for (let value of IPgrep) {
        if (lines) {
          let line = `${lineCount}:${value[0]}"\n"`;
          lineCount++;
          // console.log('line:', line);
          list += line;
        } else {
          let line = `${value[0]}"\n"`;
          // console.log('line:', line);
          list += line;
        }
      }
      return list;
    };

    return print();

  },
  'phone number': (file, lines) => {

    if (typeof file === 'object') {
      file = file.data
    }

    const regNumber = /\b\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}\b/g;
    const numberGrep = file.matchAll(regNumber);

    const print = () => {
      let list = '';
      let lineCount = 1;
      for (let value of numberGrep) {
        if (lines) {
          let line = `${lineCount}:${value[0]}"\n"`;
          lineCount++;
          // console.log('line:', line);
          list += line;
        } else {
          let line = `${value[0]}"\n"`;
          // console.log('line:', line);
          list += line;
        }
      }
      return list;
    };

    return print();

  }
};


// TESTS
// console.log('matchIPs(testFile):', matchIPs(testFile, true));
// console.log('matchIPs(testFile):', matchEmails(testFile, true));
// console.log('matchIPs(testFile):', matchNumbers(testFile, true));

//  console.log('matchNuberss(testFile):', GrepClass['ip address'](testFile));

// file && console.log('emails:', matchEmails(file));

module.exports = { GrepClass };

// REFERENCES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// https://www.pluralsight.com/guides/uploading-files-with-reactjs
// https://stackoverflow.com/questions/51272255/how-to-use-filereader-in-react