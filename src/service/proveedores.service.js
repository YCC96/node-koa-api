const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const urlDBJson = 'bd.json';

function consultaDB(){
    let rawdata = fs.readFileSync(urlDBJson);
    return JSON.parse(rawdata);
}

function actualizaDB(data){
    fs.writeFileSync(urlDBJson, JSON.stringify(data));
}

exports.getAll = () => {
    return consultaDB().proveedores;
}

exports.getOne = (id) => {
    let proveedores = consultaDB().proveedores;
    return proveedores.filter( item => {
        return (item.id == id)
    });
}

exports.create = (newProveedor) => {
    let bd = consultaDB();
    let proveedores = bd.proveedores;
    let newItem = {
        id: uuidv4(),
        ...newProveedor
    }
    proveedores.push(newItem);
    bd.proveedores = proveedores;
    actualizaDB(bd);
    return newItem;
}

exports.update = (id, data) => {
    let bd = consultaDB();
    let proveedores = bd.proveedores;

    var idBuscar = proveedores.map((item) => { return item.id; }).indexOf(id);

    var respuesta = 0;

    if (idBuscar == -1) {
        respuesta = 1;
    } else {
        data.id = id;
        proveedores[idBuscar] = data;
        bd.proveedores = proveedores;
        actualizaDB(bd);
    }
    return respuesta;
}

exports.delete = (id) => {
    let bd = consultaDB();
    let proveedores = bd.proveedores;
    
    var idBuscar = proveedores.map((item) => { return item.id; }).indexOf(id);
    
    var dataResult = {
        status: 0,
        mensaje: '',
        response: null
    }
    
    if (idBuscar == -1) {
        dataResult.status = 1;
        dataResult.mensaje = 'No existe el id.';
    } else {
        proveedores.splice(idBuscar, 1);
        bd.proveedores = proveedores;
        actualizaDB(bd);
        dataResult.mensaje = 'Elemento eliminado con éxito.';
    }
    return dataResult;
}