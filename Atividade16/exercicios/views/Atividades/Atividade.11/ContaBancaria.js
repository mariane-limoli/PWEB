function ContaBancaria() {
  var nomeCorrentista, banco, numeroConta, saldo;

  //   GETs
  this.getNome = function () {
    return nomeCorrentista;
  };
  this.getBanco = function () {
    return banco;
  };
  this.getNumero = function () {
    return numeroConta;
  };
  this.getSaldo = function () {
    return saldo;
  };
  //   SETs
  this.setNome = function (value) {
    nomeCorrentista = value;
  };
  this.setBanco = function (value) {
    banco = value;
  };
  this.setNumero = function (value) {
    numeroConta = value;
  };
  this.setSaldo = function (value) {
    saldo = value;
  };
}
function ContaCorrente() {
  var saldoEspecial;

  // ******** GET
  this.getSaldoEspecial = function () {
    return saldoEspecial;
  };
  // ******** SET

  this.setSaldoEspecial = function (value) {
    saldoEspecial = value;
  };
}
function Poupanca() {
  var SaldoJuros, DataVencimento;

  // ******** GET
  this.getSaldoJuros = function () {
    return SaldoJuros;
  };
  this.getDataVencimento = function () {
    return DataVencimento;
  };

  // ******** SET
  this.setSaldoJuros = function (value) {
    SaldoJuros = value;
  };
  this.setDataVencimento = function (value) {
    DataVencimento = value;
  };
}
ContaCorrente.prototype = new ContaBancaria();
Poupanca.prototype = new ContaBancaria();

// ******** Setando dados dos Objetos
contaCC = new ContaCorrente();
contaPoupanca = new Poupanca();
// CONTA CORRENTE
contaCC.setNome("👤 Genilson do Carmo ");
contaCC.setBanco("🏛️ Banco iNTER ");
contaCC.setNumero(0987);
contaCC.setSaldo(2000.56);
contaCC.setSaldoEspecial(5000.0);

// CONTA POUPANCA

contaPoupanca.setNome("👤 Genilson do Carmo ");
contaPoupanca.setBanco("🏛️ Banco iNTER ");
contaPoupanca.setNumero(0987);
contaPoupanca.setSaldo(22400.26);
contaPoupanca.setSaldoJuros(360.0);

// ******** coletando e mostrando o dados dos Objetos no innerHtml do html

var cc = ` ${contaCC.getNome()} <br> ${contaCC.getBanco()} <br> Numero conta corrente: ${contaCC.getNumero()} <br> Saldo: ${contaCC.getSaldo()} <br> Saldo especial: ${contaCC.getSaldoEspecial()}`;

var cp = ` ${contaPoupanca.getNome()} <br> ${contaPoupanca.getBanco()} <br> Numero poupança: ${contaPoupanca.getNumero()}<br> Saldo: ${contaPoupanca.getSaldo()} <br> Saldo juros: ${contaPoupanca.getSaldoJuros()}`;

var any = document.querySelector("cc", "cp").value;
