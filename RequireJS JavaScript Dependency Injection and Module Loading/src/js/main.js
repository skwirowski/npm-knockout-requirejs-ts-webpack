// require.config({
//     paths: {
//         // baseUrl: '',
//         jquery: 'jquery-2.1.1.min',
//         templates: '../templates/',
//         textPlugin: '../../build/',
//         hbs: '../../node_modules/require-handlebars-plugin/hbs/'
//         underscore: 'underscore-2.1.1.min', // (1) requirejs will look for the underscore module; it will build the URL to the file using the value in paths, so underscore-2.1.1.min will be loaded
//     },
//     shim: {
//         underscore: {   // name of the module being shimed in
//             exports: '_',   // value of this property is a string that matches the name of the variable in global scope that we want to use as the module
//                             // (2) after the script is finished loading requirejs will get the underscore character variable from the window object and finally pass that value to the require function callback
//             deps: ['jquery']   // includes an array of other modules
//         }
//     },
//     config: {
//         url: 'some configuration'
//     },
//     waitSeconds: 7, // number of seconds to wait before giving up on loading a script; 0 disables the timeout;
//     deps: ['moduleOne', 'moduleTwo'],
//     callback: function(moduleOne, moduleTwo) {
//         // function body
//     },
//     urlArgs: 'bust=' + (new Date()).getDate(),  // common use case for this option is for catche busting; by appending a changing string to the query string, the browser is prevented form caching the result
// });

// ! shrim
// * Shim config is roughly equivalent to this code that defines a normal AMD module named 'underscore'
// define('underscore', ['jquery'], function($) {
//     return window['_'];
// });

// ! config
// * How to use config from config object
// define('courseDataModule', ['module'], function(module) {
//     const url = module.config().url;
// });

// * We can create separate file with global configuration that can be used by several moudules
// * config.js file
// define([], function() {
//     return {
//         url: 'some configuration',
//     }
// });
// * courseDataModule.js file
// define(['config'], function(config) {
//     const url = config.url
// });

require(['app'], function(app) {
    /* initialize application */

    app.init();
});