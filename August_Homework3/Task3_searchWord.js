// Task 3.
// Տրված է տողերի մատրիցա (nxm) եւ բառ: 
// Հայտնաբերել արդյոք բառը գոյություն ունի մատրիցայում թե ոչ:

// variant 1.

const searchWord = function(word, matrix) {
    let colChars = '';
    for (let row = 0; row < matrix.length; ++row) {
        colChars = '';
        if (matrix[row].join('').search(word) !== -1)
            return true;
        for (let col = 0; col < matrix[row].length; ++col) {
            colChars += matrix[col][row];
        }
        if (colChars.search(word) !== -1)
            return true;
    }
    return false;
}

// variant 2.

const searchWord2 = function(word, matrix) {
    return Boolean(matrix.map(row => row.join('')).find(item => item.search(word) !== -1) || matrix.map((row, rIdx) => row.map((col, cIdx) => matrix[cIdx][rIdx]).join('')).find(item => item.search(word) !== -1));
}