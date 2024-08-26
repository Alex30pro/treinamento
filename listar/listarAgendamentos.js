const {agendamentos} = require('../data');

function listarAgendamentos() {
    agendamentos.forEach((agenda) => {
    console.log(`ID: ${agenda.id} , Data: ${agenda.data}, Horário: ${agenda.horario}, ID do Cliente: ${agenda.clienteId}, ID do Serviço: ${agenda.servicoId} `);
    });
};

    module.exports = listarAgendamentos;