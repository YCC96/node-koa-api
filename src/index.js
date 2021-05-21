const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

//routes
const router = require('./routes/routes');

const app = new Koa();

const port = process.env.PORT || 3010;
require('dotenv').config();

app.use(bodyParser());
app.use(router());

app.listen(port, () => {
  console.log('server running in port: ', port);
});