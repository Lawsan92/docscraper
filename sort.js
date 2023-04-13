class Sort {
  constructor() {

  }

  alphabet(arr) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let [pt, check] = [0, 0];
    for (let i = 0, j = i + 1; i < arr.length, j < arr.length + 1; i++, j++) {
        if (j == arr.length) {
        break;
      }
      let [str1, str2] = [arr[i], arr[j]];
      while (str1[pt] === str2[pt] && (str1[pt] || str2[pt])) {
        pt++;
      }
      let [letter1, letter2] = [alphabet.indexOf(str1[pt].toUpperCase()), alphabet.indexOf(str2[pt].toUpperCase())];
        if (letter2 < letter1) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          check++;
        }
        if (check > 0 && j === arr.length -1) {
         [i, j, pt, check] = [-1, 0, 0, 0];
        }
      pt = 0;
    }
    console.log('arr:', arr);
    return arr;
  }


}

const sort = new Sort;


// let arr = ['ABA', 'BCB', 'AAB', 'BBC', 'BAC', 'ABC'];

// sort.alphabet(arr);

// ['AAB', 'ABA', 'ABC', 'BAC', 'BBC', 'BCB'];

module.exports = Sort;

/**
 *   i      j
 * ['ABA', 'BCB', 'AAB', 'BBC', 'BAC', 'ABC'] alphabet[i] < alphabet[j] TRUE, alphabet[i] === alphabet[j] FALSE
 *
 *            i      j
 *  ['ABA', 'BCB', 'AAB', 'BBC', 'BAC', 'ABC'] alphabet[i] < alphabet[j] FALSE, alphabet[i] === alphabet[j] FALSE
 *
 *
 *                  i      j
 *  ['ABA', 'AAB', 'BCB', 'BBC', 'BAC', 'ABC'] alphabet[i] < alphabet[j] FALSE, alphabet[i] === alphabet[j] TRUE
 *
 *                   i      j
 *  ['ABA', 'AAB', 'BCB', 'BBC', 'BAC', 'ABC'] alphabet[i] < alphabet[j] FALSE, alphabet[i] === alphabet[j] FALSE
 *
 *
 *  *                   i      j
 *  ['ABA', 'AAB', 'BBC', 'BCB', 'BAC', 'ABC'] alphabet[i] < alphabet[j] FALSE, alphabet[i] === alphabet[j] FALSE
 *
 */