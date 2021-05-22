const combineRouters = require('koa-combine-routers');

//Routes
const generalRoutes = require('./general.routes');
const authRoutes = require('./auth.routes');
const usuariosRoutes = require('./usuarios.routes');
const proveedoresRoutes = require('./proveedores.routes');

const router = combineRouters(
    generalRoutes,
    authRoutes,
    usuariosRoutes,
    proveedoresRoutes,
);

module.exports = router;