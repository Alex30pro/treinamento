const prompt = require('prompt-sync')();

const agendarServico = require('./cadastro/agendarServico');
const cadastrarClientes = require('./cadastro/cadastrarCliente');
const cadastrarServicos = require('./cadastro/cadastrarServico');
const atualizarAgenda = require('./edicao/atualizarAgenda');
const removerAgenda = require('./edicao/removerAgenda');
const removerCliente = require('./edicao/removerCliente');
const removerServico = require('./edicao/removerServico');
const listarAgendamentos = require('./listar/listarAgendamentos');
const listarCliente = require('./listar/listarCliente');
const listarServico = require('./listar/listarServico');


menuSalao();

function menuSalao(){
    console.log(`
    "Menu do Salão"
    1. Agendar serviço
    2. Cadastrar Cliente
    3. Cadastrar Serviço
    4. Atualizar Agendamento
    5. Remover Agendamento
    6. Remover Cliente
    7. Remover Serviço
    8. Listar Agendamento
    9. Listar Cliente
    10. Listar Serviço
    0. Sair
    `)
    
    const opcao = prompt('Digite o número que deseja interagir com o menu: ');

    let index

    switch(opcao) {

        case '1':
            const data = prompt('Qual a data do agendamento: ');
            const horario = prompt('Qual o horário do agendamento: ');
            const idCliente = prompt('Qual o id do Cliente que deseja agendar: ');
            const idServico = prompt('Qual o id do Serviço que deseja agendar: ');
            agendarServico({data, horario, idCliente, idServico});
            console.log('Agendamento adicionando com sucesso!');
            menuSalao();
            break;

        case '2':    
            const nome = prompt('Digite o nome do cliente a cadastrar: '); 
            const cpf = prompt('Digite o cpf do cliente a cadastrar: '); 
            const email = prompt('Digite o email do cliente a cadastrar: '); 
            let telefones = [];
            let adicionarMais = true;

            while (adicionarMais) {
                const telefone = prompt('Digite o número de telefone: ');
                telefones.push(telefone);
                adicionarMais = prompt('Deseja adicionar telefone? (s/n): ').toLowerCase() === 's';
            };
            cadastrarClientes(nome, cpf, email, telefones);
            console.log('Cliente cadastrado com sucesso!');  
            menuSalao();
            break;

        case '3':
            const nomeServico = prompt('Digite o nome do serviço a cadastrar: ');
            const preco = prompt('Digite o valor do serviço cadastrado: ');
            cadastrarServicos(nomeServico, preco);      
            console.log('Serviço cadastrado com sucesso!');
            menuSalao();
            break;

        case '4':
            const novaData = prompt('Qual a nova data do agendamento: ');
            const novoHorario = prompt('Qual o novo horário do agendamento: ');
            const novoIdCliente = prompt('Qual o novo id do Cliente que deseja agendar: ');
            const novoIdServico = prompt('Qual o novo id do Serviço que deseja agendar: ');
            atualizarAgenda({data: novaData, horario: novoHorario, idCliente: novoIdCliente, idServico: novoIdServico});
            console.log('Agendamento atualizado com sucesso!');
            menuSalao();
            break;
            
        case '5':
            index = parseInt(prompt('Número do ID do agendamento que deseja remover: ')) -1;
            removerAgenda(index);
            console.log('Agendamento removido com sucesso!');
            menuSalao();
            break;

        case '6': 
            index = parseInt(prompt('Número do ID do cliente que deseja remover: ')) -1;
            removerCliente(index);
            console.log('Cliente removido com sucesso!');
            menuSalao();
            break;

        case '7':
            index = parseInt(prompt('Número do ID do serviço que deseja remover: ')) -1;
            removerServico(index);
            console.log('Serviço removido com sucesso!');
            menuSalao();
            break; 
         
        case '8':
            listarAgendamentos();
            menuSalao();
            break;   
            
        case '9':
            listarCliente();
            menuSalao();
            break;   
            
        case '10':
            listarServico();
            menuSalao();
            break;     

        case '0':
            console.log('Saindo do sistema...');
            process.exit(); 
            break;

        default:
            console.log('Opção inválida, tente novamente.');
            menuSalao(); 
            break;
        
    }
}    