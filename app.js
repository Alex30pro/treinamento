const prompt = require('prompt-sync')();

const agendarServico = require('./cadastro/agendarServico');
const cadastrarClientes = require('./cadastro/cadastrarCliente');
const cadastrarServico = require('./cadastro/cadastrarServico');



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
            const idCliente = prompt('Qual o id do Cliente que deseja agendar: ');
            const idServico = prompt('Qual o id do Serviço que deseja agendar: ');
            agendarServico({idCliente, idServico});
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
            cadastrarServico(nomeServico, preco);      
            console.log('Serviço cadastrado com sucesso!');
            menuSalao();
            break;
        case '4':  
            index = prompt('Digite o número do agendamento que deseja atualizar: ');
        
    }
}    