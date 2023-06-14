var cont = 4; //45 pessoas na pesquisa
var mediaIdade = 0,
  valId = 0,
  maisVelho = 0,
  maisNovo = 200,
  qtdePessimo = 0,
  qtdeOt = 0,
  qtdeBm = 0,
  perOt = 0,
  perBm = 0,
  mulher = 0,
  homem = 0;
// valId = 0;

alert("🎼 Iniciando Pesquisa 🎼");
for (var i = 0; i < cont; i++) {
  var idade, sexo, opiniao, n, id;

  idade = prompt("Pessoa " + (i + 1) + "\n\nDigite a Idade: ");
  sexo = prompt(
    "Pessoa " +
      (i + 1) +
      "\n\nF ou f - Feminino\nM ou m - Masculino\n\nDigite o Sexo: "
  );
  opiniao = prompt(
    "Pessoa " +
      (i + 1) +
      "\n\n 4 - Ótimo\n 3 - Bom\n 2 - Regular\n 1 - Péssimo\n\n Digite a Opinião: "
  );

  n = parseInt(opiniao);
  id = parseInt(idade);

  //validando opiniao
  if (n == 1) qtdePessimo++;

  if (n == 3) qtdeBm++;

  if (n == 4) qtdeOt++;

  // idade
  if (id > maisVelho) maisVelho = id;

  if (id < maisNovo) maisNovo = id;

  //sexo
  if (sexo == "F" || sexo == "f") mulher++;

  if (sexo == "M" || sexo == "m") homem++;

  valId += id;
}

mediaIdade = valId / cont;
perOt = (qtdeOt * 100) / cont;
perBm = (qtdeBm * 100) / cont;
if (maisVelho == 0) maisNovo = 0;

if (isNaN(mediaIdade)) {
  mediaIdade = 0;
}

var resultads = `📊 Resultados 📊<br><br>
Média Idade: ${mediaIdade}<br>
Maior Idade: ${maisVelho}<br>
Menor Idade: ${maisNovo}<br>
 😡 Quantidade de Péssimo: ${qtdePessimo}<br>
 😍 Porcentagem de BOM e ÓTIMO: ${perBm + perOt}%<br>
 👩‍🦰 Quantidade Mulheres: ${mulher}<br>
 🤠 Quantidade Homens: ${homem}`;

var respesquisa = document.querySelector("resultads").value;
// document.getElementById("resultado").innerHTML = resultads;
