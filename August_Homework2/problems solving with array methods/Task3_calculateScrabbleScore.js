'use strict'

// Task 3.
// Given a word, compute the scrabble score for the given word. 
// To calculate scrabble score use the following table of scores

const scoreObj = {
    'a, e, i, o, u, l, n, r, s, t': 1,
    'd, g': 2,
    'b, c, m, p': 3,
    'f, h, v, w, y': 4,
    'k': 5,
    'j, x': 6,
    'q, z': 7
};

const calculate = (x, y) => x + y;
    
const getValue = key => scoreObj[key];
    
const serachLetter = letter => Object.keys(scoreObj).find(key => key.search(letter) !== -1);

const functionsObject = {
    'calculate': calculate,
    'getValue': getValue,
    'serachLetter': serachLetter
};

const calculateScrabbleScore = (word, fObj) => word.split('').map(fObj.serachLetter).map(fObj.getValue).reduce(fObj.calculate, 0);

// console.log(calculateScrabbleScore('jscourse', functionsObject)); // 15