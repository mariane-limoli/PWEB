function media() {
  var nome;
  var nota1;
  var nota2;
  var nota3;
  nome = prompt("Qual o seu nome?");
  nota1 = prompt("Sua 1ª nota?");
  nota2 = prompt("Sua 2ª nota?");
  nota3 = prompt("Sua 3ª nota?");

  return (
    (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /
    3
  ).toFixed(2);
}
