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
    return consultaDB().usuarios;
}

exports.getOne = (id) => {
    let usuarios = consultaDB().usuarios;
    return usuarios.filter( item => {
        return (item.id == id)
    });
}

exports.create = (newUsuario) => {
    let bd = consultaDB();
    let usuario = bd.usuarios;
    let newItem = {
        id: uuidv4(),
        ...newUsuario
    }
    usuario.push(newItem);
    bd.usuarios = usuario;
    actualizaDB(bd);
    return newItem;
}

exports.update = (id, data) => {
    let bd = consultaDB();
    let usuarios = bd.usuarios;

    var idBuscar = usuarios.map((item) => { return item.id; }).indexOf(id);

    var respuesta = 0;

    if (idBuscar == -1) {
        respuesta = 1;
    } else {
        data.id = id;
        usuarios[idBuscar] = data;
        bd.usuarios = usuarios;
        actualizaDB(bd);
    }
    return respuesta;
}

exports.delete = (id) => {
    let bd = consultaDB();
    let usuario = bd.usuarios;
    
    var idBuscar = usuario.map((item) => { return item.id; }).indexOf(id);
    
    var dataResult = {
        status: 0,
        mensaje: '',
        response: null
    }
    
    if (idBuscar == -1) {
        dataResult.status = 1;
        dataResult.mensaje = 'No existe el id.';
    } else {
        usuario.splice(idBuscar, 1);
        bd.usuarios = usuario;
        actualizaDB(bd);
        dataResult.mensaje = 'Elemento eliminado con éxito.';
    }
    return dataResult;
}