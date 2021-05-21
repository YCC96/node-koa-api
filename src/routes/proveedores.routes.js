const Router = require('koa-router');

const prefix = 'proveedores';
const router = new Router({
    prefix: `/${prefix}`,
});

router.get('/', async ctx => {
    let response = {
        message: 'Service ' + prefix,
        response: ctx.request
    }
    ctx.body = response;
});

router.get('/:id', async ctx => {
    let response = {
        message: 'Service ' + prefix,
        response: {
            response1: ctx.request,
            response2: ctx.params
        }
    }
    ctx.body = response;
});

router.post('/', async ctx => {
    let response = {
        message: 'Service ' + prefix,
        response: ctx.request
    }
    ctx.body = response;
});

router.put('/:id', async ctx => {
    let response = {
        message: 'Service ' + prefix,
        response: {
            response1: ctx.request,
            response2: ctx.params
        }
    }
    ctx.body = response;
});

router.delete('/:id', async ctx => {
    let response = {
        message: 'Service ' + prefix,
        response: {
            response1: ctx.request,
            response2: ctx.params
        }
    }
    ctx.body = response;
});

module.exports = router;