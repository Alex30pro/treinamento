let {agendamentos} = require('..data/');

function agendarServico(agendar) {
    agendar.id = agendamentos.length + 1;
    agendamentos.push(agendar);
};

module.exports = agendarServico;