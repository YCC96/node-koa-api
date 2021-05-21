const UsuariosService = require('../service/usuario.service');

exports.consulta = () => {
    return {
        response: UsuariosService.getAll()
    }
}

exports.agregar = (newData) => {
    return {
        response: UsuariosService.create(newData)
    }
}

exports.eliminar = (id) => {
    return {
        response: UsuariosService.delete(id)
    }
}