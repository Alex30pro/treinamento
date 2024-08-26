const {clientes} = require('../data');

function removerCliente(index, id){
    if (index !== -1) {
        clientes[index] = {id, ...clientes};
        clientes.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };

module.exports = removerCliente;