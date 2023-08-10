'use strict'

// Task 5.
// Write a function which returns array of lengths of user names.

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

function createArrayLengthOfUsernames(users) {
    const usernames = e => Object.values(e)[0].length;
    
    return users.map(usernames);
}

// console.log(createArrayLengthOfUsernames(users));