let { agendamentos, clientes, servicos } = require('../data');

function agendarServico({ data, horario, idCliente, idServico }) {
    // Converta IDs para números
    idCliente = parseInt(idCliente);
    idServico = parseInt(idServico);

    // Verifica se o cliente existe
    let cliente = clientes.find(c => c.id === idCliente);
    if (!cliente) {
        console.log("Cliente não encontrado.");
        return;
    }

    // Verifica se o serviço existe
    let servico = servicos.find(s => s.id === idServico);
    if (!servico) {
        console.log("Serviço não encontrado.");
        return;
    }

    // Cria o objeto de agendamento
    let agendamento = {
        id: agendamentos.length + 1,
        data: data,
        horario: horario,
        clienteId: idCliente,
        servicoId: idServico
    };

    // Adiciona o agendamento
    agendamentos.push(agendamento);

    console.log("Serviço agendado com sucesso!");
    console.log(`Data: ${data}`);
    console.log(`Horário: ${horario}`);
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Serviço: ${servico.nomeServico}`);
}

module.exports = agendarServico;
