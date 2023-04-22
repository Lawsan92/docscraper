const { readFileSync } = require('fs');
const testFile = readFileSync('__tests__/data/test2.txt', {encoding: 'utf8'});

test('should split a document into an array of strings', () => {

  const fileToArray = () => {
    let arr = [];
    let line = '';
    for (let i = 0; i < testFile.length; i ++) {
      line += testFile[i];
      if (testFile[i] === '\n') {
        arr.push(line);
        line = '';
      }
    }
    // console.log('arr:', arr);
    return arr;
  };

  expect(fileToArray(testFile)).toStrictEqual([
    'cscamadin0@yahoo.com,Polygender\n',
    'adriuzzi1@dell.com,Female\n',
    'dgoodnow2@nyu.edu,Male\n',
    'cbloor3@google.com.br,Female\n',
    'qhowbrook4@networksolutions.com,Male\n',
    'ngossage5@nydailynews.com,Female\n',
    'ljellico6@163.com,Female\n',
    'smazella7@guardian.co.uk,Male\n',
    'bodoohaine8@shutterfly.com,Male\n'
  ]);
})