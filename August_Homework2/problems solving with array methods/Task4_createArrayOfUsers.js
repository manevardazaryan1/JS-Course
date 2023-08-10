'use strict'

// Task 4.
// Write a function which returns array of usernames.

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

const createArrayOfUsernames = function(users) {
   const usernames = e => Object.values(e)[0];
  
   return users.map(usernames);
}

// console.log(createArrayOfUsernames(users)); // [ 'Yuri Gagarin', 'Nil Armstrong' ]