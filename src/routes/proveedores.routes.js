const Router = require('koa-router');
const Proveedores = require('../business/proveedores.business');

const prefix = 'proveedores';
const router = new Router({
    prefix: `/${prefix}`,
});

router.get('/', async ctx => {
    ctx.body = Proveedores.consulta();
});

router.get('/:id', async ctx => {
    ctx.body = Proveedores.consultaPorId(ctx.params.id);
});

router.post('/', async ctx => {
    ctx.body = Proveedores.agregar(ctx.request.body);
});

router.put('/:id', async ctx => {
    ctx.body = Proveedores.actualizar(ctx.params.id, ctx.request.body);
});

router.delete('/:id', async ctx => {
    ctx.body = Proveedores.eliminar(ctx.params.id);
});

module.exports = router;