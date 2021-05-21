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
    return consultaDB();
}

exports.create = (newUsuario) => {
    let usuario = consultaDB();
    let newItem = {
        id: uuidv4(),
        ...newUsuario
    }
    usuario.push(newItem);
    actualizaDB(usuario);
    return newItem;
}

exports.delete = (id) => {
    let usuario = consultaDB();
    
    var idBuscar = usuario.map((item) => { return item.id; }).indexOf(id)
    
    var dataResult = {
        status: 0,
        mensaje: '',
        response: null
    }
    
    if (idBuscar == -1) {
        dataResult.status = 1;
        dataResult.mensaje = 'No existe el id';
    } else {
        usuario.splice(idBuscar, 1);
        actualizaDB(usuario);
        dataResult.mensaje = 'Elemento eliminado con éxito';
    }
    return dataResult;
}