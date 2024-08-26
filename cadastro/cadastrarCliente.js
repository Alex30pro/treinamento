const {clientes} = require('../data');

function cadastrarClientes(cadastrar) {
    cadastrar.id = clientes.length + 1;
    clientes.push(cadastrar);
};

module.exports = cadastrarClientes;