const ProveedoresService = require('../service/proveedores.service');

exports.consulta = () => {
    return {
        status: 0,
        message: 'Éxito al consultar.',
        response: ProveedoresService.getAll()
    }
}

exports.consultaPorId = (id) => {
    var response = {
        status: 0,
        message: '',
        response: null
    }
    let proveedores = ProveedoresService.getOne(id);
    if (proveedores.length == 0) {
        response.status = 1;
        response.message = 'No se encontro el proveedor';
    } else {
        response.message = 'Éxito al consultar';
        response.response = proveedores;
    }
    return response;
}

exports.agregar = (newData) => {
    return {
        status: 0,
        message: 'Proveedor se agrego correctamente.',
        response: ProveedoresService.create(newData)
    }
}

exports.actualizar = (id, data) => {
    let respuesta = {
        status: 0,
        message: ''
    }
    let resp = ProveedoresService.update(id, data);
    if (resp == 0) {
        respuesta.message = 'Proveedor actualizado correctamente.';
    } else {
        respuesta.status = 1;
        respuesta.message = 'Error, proveedor no éxiste.';
        
    }
    return respuesta;
}

exports.eliminar = (id) => {
    return ProveedoresService.delete(id);
}