const promp = require('prompt-sync')();

function saudacao (nome){
    console.log('aqui 2')
    console.log('Oi  '+nome);
}

function entradaNome(callback){
    console.log('aqui 1')
    var nome = promp('Digite seu nome: ');
    callback(nome);
    console.log('aqui 3')
}

entradaNome(saudacao);