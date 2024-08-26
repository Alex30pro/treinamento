const {clientes} = require('../data');

function listarCliente() {
    clientes.forEach((cliente) => {
    console.log(`ID: ${cliente.id} , Nome: ${cliente.nome}, CPF: ${cliente.cpf}, E-mail: ${cliente.email}, Telefone: ${cliente.telefones} `);
    });
};

    module.exports = listarCliente;