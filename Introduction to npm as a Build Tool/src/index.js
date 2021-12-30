const Koa = require('koa');
const app = module.exports = new Koa();
const coffee = require('../lib//coffeeCode.js');
const typescript = require('../lib//tsCode.js');

app.use(async ctx => {
  ctx.body = 'Hello World!';
});

console.log('coffee', coffee);
console.log('typescript', typescript);

const port = process.env.PORT || (process.argv[2] || 3000);

if(!module.parent) {
  app.listen();
}
// app.listen(port);
// console.log(`Application is running. Listening on port ${port}...`);
