'use strict'

// Task 2. 
// Convert a long phrase to its acronym.

const convert = e => e[0].toUpperCase();

const acronym = (phrase, convertFunc) => phrase.split(' ').map(convertFunc).join('');

// console.log(acronym('Prisoner of War', convert)); // 'POW'
// console.log(acronym('Have a good night', convert)); // 'HAGN'