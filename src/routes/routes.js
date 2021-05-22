const combineRouters = require('koa-combine-routers');

//Routes
const usuariosRoutes = require('./usuarios.routes');
const proveedoresRoutes = require('./proveedores.routes');
const authRoutes = require('./auth.routes');

const router = combineRouters(
    usuariosRoutes,
    proveedoresRoutes,
    authRoutes
);

module.exports = router;