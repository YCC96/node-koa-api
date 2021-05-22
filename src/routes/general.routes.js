const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
    ctx.body = {
        status: 0,
        message: "Welcome to Yordy's services.",
        response: {
            message: 'Successful connection.'
        }
    };
});

module.exports = router;