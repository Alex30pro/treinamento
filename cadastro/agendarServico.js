const { clientes, servicos, agendamentos } = require('../data');

function agendarServico({ data, horario, idCliente, idServico }) {
    
    idCliente = parseInt(idCliente);
    idServico = parseInt(idServico);

    let cliente = clientes.find(c => c.id === idCliente);
    if (!cliente) {
        console.log("Cliente não encontrado.");
        return;
    }

    let servico = servicos.find(s => s.id === idServico);
    if (!servico) {
        console.log("Serviço não encontrado.");
        return;
    }

    let agendamento = {
        id: agendamentos.length + 1,
        data: data,
        horario: horario,
        clienteId: idCliente,
        servicoId: idServico
    };

    agendamentos.push(agendamento);
}

module.exports = agendarServico;
