import Koa from 'koa';
import Router from 'koa-router';

process.env.DEBUG = 'finpo:*';

const debug = require('debug')('finpo:index');

const app = new Koa();
const router = new Router();

router
  .get('/', (ctx) => {
    ctx.body = { success: true, msg: 'koa-router' };
  });

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
debug(`server is started on PORT:${'3000'}`);
