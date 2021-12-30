// * 'Module' design pattern

const myModule = (function() {
  'use strict';

  // * define 'private' members
  const iAmPrivate = 'private';

  // return an object exposing 'public' members

  return {
    iAmPublic: 'public',
  };
})();

console.log(myModule.iAmPublic); // * public
console.log(myModule.iAmPrivate); // * undefined

// * example

const logger = (function() {
  'use strict';

  const messages = [];

  return {
    add: function(message) {
      messages.push(message);
    },
    clear: function() {
      messages = [];
    },
  };
})();
