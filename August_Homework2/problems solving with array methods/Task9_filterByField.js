'use strict'

// Task 9.
// Write a function which filters object by field.

const users = [
 {
    username: 'Yuri Gagarin',
    lang: 'ru',
    isAstronaut: true,
 },
 {
    username: 'Nil Armstrong',
    lang: 'ENG',
    isAstronaut: true,
 },
 {
    username: 'Elon Musk',
    isAstronaut: false,
 },
];

const userCheck = user => user[key];

const filterByField = (users, key, callback) => users.filter(callback);

// console.log(filterByField(users, "isAstronaut", userCheck)); 
// [{ username: "Yuri Gagarin", lang:"ru", isAstronaut: true, }, 
// { username: "Nil Armstrong, lang: "ENG" }]