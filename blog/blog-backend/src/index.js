const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// Router 설정
router.use('/api', api.routes()); // api route 적용

// Router 적용 전에 bodyParser 적용
app.use(bodyParser());

// app instance에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
//
