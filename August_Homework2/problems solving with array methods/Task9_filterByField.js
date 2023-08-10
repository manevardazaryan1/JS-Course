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

const filterByField = function(users, key) {
    const userCheck = user => user[key];
    
    return users.filter(userCheck);
}


// console.log(filterByField(users, "isAstronaut")); 
// [{ username: "Yuri Gagarin", lang:"ru", isAstronaut: true, }, 
// { username: "Nil Armstrong, lang: "ENG" }]