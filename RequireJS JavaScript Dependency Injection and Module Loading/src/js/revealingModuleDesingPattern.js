// * 'Revealing Module' design pattern

const myModule = (function() {
  'use strict';

  // * define all members
  const iAmPrivate = 'private';
  const iAmPublic = 'public';

  // return an object exposing 'public' members

  return {
    iAmPublic: iAmPublic,
  };
})();

console.log(myModule.iAmPublic); // * public
console.log(myModule.iAmPrivate); // * undefined

// * example
// ! We can use underscore '_' to define which of the variables supposed to be private

const logger = (function() {
  'use strict';

  const _messages = [];
  const add = function(message) {
    _messages.push(message);
  };
  const clear = function() {
    _messages = [];
  }

  return {
    add: add,
    clear: clear,
  };
})();