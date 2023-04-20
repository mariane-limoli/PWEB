function iniciar() {
    var idade = [];
    var sexo = [];
    var op = [];

    var mediaIdade = 0;
    var idadeMaior = idadeMenor = totPessimo= totOtimo_bom= totH= totM= porcOtimo_bom= totIdade=0;

    for (var i = 0; i < 45; i++) {
        idade[i] = parseInt(prompt("Sua idade:"));
        sexo[i] = prompt('Seu sexo:').toUpperCase();
        op[i] = parseInt(prompt('Opinião (ótimo=4,bom=3,regular=2,péssimo=1):'));

        totIdade += idade[i];

        if (op[i] == 1) {
            totPessimo += 1;
        }

        if (op[i] == 3 || op[i] == 4) {
            totOtimo_bom += 1;
        }

        if (sexo[i] == 'M') 
            totH += 1;
        else totM += 1;
    }

    mediaIdade = totIdade/idade.length;
    porcOtimo_bom = totOtimo_bom*0.01/op.length;
    idadeMaior = Math.max(...idade);
    idadeMenor = Math.min(...idade);


    alert("Média da idade: " + mediaIdade + "\n" +
          "Pessoa mais velha: " + idadeMaior + '\n' +
          "Pessoa mais nova: " + idadeMenor + '\n' +
          "Quantidadede péssimo: " + totPessimo + '\n' +
          "Porcentagem de ótimo e bom: " + porcOtimo_bom + "%"+'\n' +
          "Quantidade homens: " + totH + '\n' +
          "Quantidade mulheres: " + totM   );
}
