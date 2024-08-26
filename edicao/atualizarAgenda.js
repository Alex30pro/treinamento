const {agendamentos} = require('../data');

function atualizarAgenda(id, novaAgenda){
    const index = agendamentos.findIndex(agenda => agenda.id === id);
    if (index !== -1) {
        agendamentos[index] = {id, ...novaAgenda};
    } else {
        console.log('Usuário não encontrado');
    };

    };

module.exports = atualizarAgenda;