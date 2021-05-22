const Router = require('koa-router');
const AuthBusiness = require('../business/auth.business');

const prefix = 'auth';
const router = new Router({
    prefix: `/${prefix}`,
});

router.post('/login', async ctx => {
    ctx.body = AuthBusiness.login(ctx.request.body);
});

router.post('/valida-token', async ctx => {
    ctx.body = AuthBusiness.validaJWT(ctx.request.body.token);
});

module.exports = router;