const combineRouters = require('koa-combine-routers');

//Routes
const usuariosRoutes = require('./usuarios.routes');
const proveedoresRoutes = require('./proveedores.routes');

const router = combineRouters(
    usuariosRoutes,
    proveedoresRoutes
);

module.exports = router;