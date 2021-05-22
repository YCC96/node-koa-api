const UsuariosService = require('../service/usuario.service');
const jwt = require('jsonwebtoken')

exports.login = (body) => {
    let respuesta = {
        status: 0,
        message: '',
        response: {}
    }
    let usuarios = UsuariosService.getAll();
    var buscar = usuarios.filter( item => {
        return (
            item.email.toLowerCase() == body.email.toLowerCase() &&
            item.password == body.password
        )
    })
    if (buscar.length == 0) {
        respuesta.status = 1;
        respuesta.message = 'Correo y/o contraseña invalidos';
        respuesta.response = null;
    } else {
        respuesta.message = 'Bienvenid@ ' + buscar[0].nombre;
        respuesta.response.token = this.generaJTW(buscar[0].id, buscar[0].nombre, buscar[0].email);
        respuesta.response.nombre = buscar[0].nombre;
        respuesta.response.email = buscar[0].email;
    }
    return respuesta;
}

exports.generaJTW = (id, nombre, email) => {
    const payload = {
        check:  true,
        id: id,
        nombre: nombre,
        email: email
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: +process.env.JWT_EXPIRE_TIME
    });
}

exports.validaJWT = (token) => {
    var response = {
        valid: false,
        response: null
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
        if (err) {
            response.valid = false;
        } else {
            response.valid = true;
            response.response = decode;
          }
    })
    return response;
}