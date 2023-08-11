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

function getAverageAge(users) {
    const sumOfAges = (acc, user) => acc + user.age;
    
    return users.reduce(sumOfAges, 0) / users.length;
}

// console.log(getAverageAge(users)); // 55