function calcular() {
	// Obter os valores dos inputs
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	// Calcular os resultados
	var soma = num1 + num2;
	var subtracao = num1 - num2;
	var produto = num1 * num2;
	var divisao = num1 / num2;
	var resto = num1 % num2;

	// Mostrar os resultados nos inputs correspondentes
	document.getElementById("soma").value = soma;
	document.getElementById("subtracao").value = subtracao;
	document.getElementById("produto").value = produto;
	document.getElementById("divisao").value = divisao;
	document.getElementById("resto").value = resto;
}

function limpar(){
    document.getElementById("nome").value = null;
    document.getElementById("nota1").value = null
    document.getElementById("nota2").value= null;
    document.getElementById("nota3").value= null;
    document.getElementById("media").value = null
}