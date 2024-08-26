const {servicos} = require('../data');

function listarServico() {
    servicos.forEach((servico) => {
    console.log(`ID: ${servico.id} , Nome do Serviço: ${servico.nomeServico}, Preço: ${servico.preco}`);
    });
};

    module.exports = listarServico;