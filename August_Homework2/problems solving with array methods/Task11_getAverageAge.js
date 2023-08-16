'use strict'

// Task 11.
// Write a function which calculates average age of users.

const users = [
     {
        username: 'Yuri Gagarin',
        lang: 'ru',
        age: 56,
     },
     {
        username: 'Nil Armstrong',
        lang: 'ENG',
        age: 54,
     },
];

const sumOfAges = (acc, user) => acc + user.age;

const getAverageAge = (users, callback) => users.reduce(callback, 0) / users.length;

// console.log(getAverageAge(users, sumOfAges)); // 55