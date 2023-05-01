
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calculaArea() {
        return this.base * this.altura;
    }
}

function retornaArea() {

    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var objRetangulo = new Retangulo(base, altura);

    var area = objRetangulo.calculaArea();

    document.getElementById('area').value = area + " m²";

}

// CONTA

class Conta {

    setNome(nome) {
        this.nome = nome;
    }
    setBanco(banco) {
        this.banco = banco;
    }
    setNumConta(numConta) {
        this.numConta = numConta;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getNome() {
        return this.nome;
    }
    getBanco() {
        return this.banco;
    }
    getNumConta() {
        return this.numConta;
    }
    getSaldo() {
        return this.saldo;
    }

}

class Corrente extends Conta {
    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
    getSaldoEspecial() {
        return this.saldoEspecial;
    }
}

class Poupanca extends Conta {

    setJuros(juros) {
        this.juros = juros;
    }
    getJuros() {
        return this.juros;
    }
    setDtVenc(dtVenc) {
        this.dtVenc = dtVenc;
    }
    getDtVenc() {
        return this.dtVenc;
    }
}

function exibirDadosCorrente() {

    var nome = document.getElementById('nome').value;
    var banco = document.getElementById('banco').value;
    var numConta = document.getElementById('numConta').value;
    var saldo = document.getElementById('saldo').value;
    var saldoEspecial = document.getElementById('saldoEspecial').value;

    var objCorrente = new Corrente;


    objCorrente.setNome(nome);
    objCorrente.setBanco(banco);
    objCorrente.setNumConta(numConta);
    objCorrente.setSaldo(saldo);
    objCorrente.setSaldoEspecial(saldoEspecial);

    alert('---Dados da Conta CORRENTE--- \n'+
        'Nome: '+ objCorrente.getNome() + '\n' +
       'Banco: '+  objCorrente.getBanco() + '\n' +
       'Número da conta: '+  objCorrente.getNumConta() + '\n' +
       'Saldo: R$'+  objCorrente.getSaldo() + '\n' +
       'Saldo especial: R$'+  objCorrente.getSaldoEspecial()
    );

}

function exibirDadosPoupanca() {

    var nome = document.getElementById('nome').value;
    var banco = document.getElementById('banco').value;
    var numConta = document.getElementById('numConta').value;
    var saldo = document.getElementById('saldo').value;
    var juros = document.getElementById('juros').value;
    var dtVenc = document.getElementById('dtVenc').value;

    var objPopanca = new Poupanca;

    objPopanca.setNome(nome);
    objPopanca.setBanco(banco);
    objPopanca.setNumConta(numConta);
    objPopanca.setSaldo(saldo);
    objPopanca.setJuros(juros);
    objPopanca.setDtVenc(dtVenc);

    alert('---Dados da Conta POUPANÇA--- \n'+
        'Nome: '+ objPopanca.getNome() + '\n' +
       'Banco: '+  objPopanca.getBanco() + '\n' +
       'Número da conta: '+  objPopanca.getNumConta() + '\n' +
       'Saldo: R$'+  objPopanca.getSaldo() + '\n' +
       'Juros: '+  objPopanca.getJuros()+ '%'+'\n' +
       'Data de vencimento: '+ objPopanca.getDtVenc()
    );
}



function liberarInputsCorrente() {
    var inputCorrente = document.getElementById("Corrente");
    var inputPoupanca = document.getElementById("Poupanca");
    inputCorrente.style.display = "block";
    inputPoupanca.style.display = "none";
}


function liberarInputsPopanca() {
    var inputCorrente = document.getElementById("Corrente");
    var inputPoupanca = document.getElementById("Poupanca");
    inputCorrente.style.display = "none";
    inputPoupanca.style.display = "block";
}
