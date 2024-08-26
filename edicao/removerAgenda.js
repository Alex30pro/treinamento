const {agendamentos} = require('../data');

function deletarAgendamento(index, id){
    if (index !== -1) {
        agendamentos[index] = {id, ...agendamentos};
        agendamentos.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };

module.exports = deletarAgendamento;