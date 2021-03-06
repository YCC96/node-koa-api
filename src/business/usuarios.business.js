const UsuariosService = require('../service/usuario.service');

exports.consulta = () => {
    return {
        status: 0,
        message: 'Éxito al consultar.',
        response: UsuariosService.getAll()
    }
}

exports.consultaPorId = (id) => {
    var response = {
        status: 0,
        message: '',
        response: null
    }
    let usuarios = UsuariosService.getOne(id);
    if (usuarios.length == 0) {
        response.status = 1;
        response.message = 'No se encontro el usuario';
    } else {
        response.message = 'Éxito al consultar';
        response.response = usuarios;
    }
    return response;
}

exports.agregar = (newData) => {
    return {
        status: 0,
        message: 'Usuario se agrego correctamente.',
        response: UsuariosService.create(newData)
    }
}

exports.actualizar = (id, data) => {
    let respuesta = {
        status: 0,
        message: ''
    }
    let resp = UsuariosService.update(id, data);
    if (resp == 0) {
        respuesta.message = 'Usuario actualizado correctamente.';
    } else {
        respuesta.status = 1;
        respuesta.message = 'Error usuario no éxiste.';
        
    }
    return respuesta;
}

exports.eliminar = (id) => {
    return UsuariosService.delete(id);
}