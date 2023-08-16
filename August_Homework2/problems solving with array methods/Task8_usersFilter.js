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

const userCheck = user => user.lang !== 'ru';

const usersFilter = (users, callback) => users.filter(callback);

// console.log(usersFilter(users, userCheck)); // [{ username: "Nil Armstrong, lang: "ENG" }]