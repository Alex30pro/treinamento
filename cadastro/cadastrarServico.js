let {servicos} = require('..data/');

function cadastrarServicos(cadastrar) {
    cadastrar.id = servicos.length + 1;
    servicos.push(cadastrar);
};

module.exports = cadastrarServicos;