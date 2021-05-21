const Router = require('koa-router');
const Usuarios = require('../business/usuarios.business');

const prefix = 'usuarios';
const router = new Router({
    prefix: `/${prefix}`,
});

router.get('/', async ctx => {
    ctx.body = Usuarios.consulta();
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
    ctx.body = Usuarios.agregar(ctx.request.body);
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
    ctx.body = Usuarios.eliminar(ctx.params.id);
});

module.exports = router;