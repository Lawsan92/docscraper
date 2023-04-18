const Sort = require('./sort.js');
const { readFileSync } = require('fs');
const testFile = readFileSync('./test2.txt', {encoding: 'utf8'});
const sortedFile = readFileSync('./sorted.txt', {encoding: 'utf8'});

test('alphabetizes strings', () => {
  const sort = new Sort;
  let array = ['ABA', 'BCB', 'AAB', 'BBC', 'BAC', 'ABC'];
  let result = ['AAB', 'ABA', 'ABC', 'BAC', 'BBC', 'BCB'];
  expect((sort.alphabet(array))).toStrictEqual(result);
});

test('alphabetizes email addresses', () => {
  const sort = new Sort;
  let emails = [
    'cscamadin0@yahoo.com,Polygender',
    'adriuzzi1@dell.com,Female',
    'dgoodnow2@nyu.edu,Male',
    'cbloor3@google.com.br,Female',
    'qhowbrook4@networksolutions.com,Male',
    'ngossage5@nydailynews.com,Female',
    'ljellico6@163.com,Female',
    'smazella7@guardian.co.uk,Male',
    'bodoohaine8@shutterfly.com,Male'
  ];
  let result = [
    'adriuzzi1@dell.com,Female',
    'bodoohaine8@shutterfly.com,Male',
    'cbloor3@google.com.br,Female',
    'cscamadin0@yahoo.com,Polygender',
    'dgoodnow2@nyu.edu,Male',
    'ljellico6@163.com,Female',
    'ngossage5@nydailynews.com,Female',
    'qhowbrook4@networksolutions.com,Male',
    'smazella7@guardian.co.uk,Male'
  ];
  expect((sort.alphabet(emails))).toStrictEqual(result);
});

test('convert file to array, sort it then join the array into a string', () => {
  const sort = new Sort;
  expect(sort.sortEmails(testFile)).toEqual(sortedFile);
})