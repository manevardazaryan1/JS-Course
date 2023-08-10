'use strict'

// Task 8.
// Write a function which remove users with language equals to 'ru'.

const users = [
 {
    username: 'Yuri Gagarin',
    lang: 'ru',
 },
 {
    username: 'Nil Armstrong',
    lang: 'ENG',
 },
];

const usersFilter = function(users) {
    const userCheck = user => user.lang !== 'ru';
    
    return users.filter(userCheck);

}

// console.log(usersFilter(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]