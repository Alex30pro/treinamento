const {servicos} = require('../data');

function removerServico(index, id){
    if (index !== -1) {
        servicos[index] = {id, ...servicos};
        servicos.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };

module.exports = removerServico;