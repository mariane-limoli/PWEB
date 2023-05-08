function calcularMedia() {
	// Obter os valores dos inputs
	var nome = document.getElementById("nome").value;
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var nota3 = parseFloat(document.getElementById("nota3").value);

	// Calcular a média
	var media = (nota1 + nota2 + nota3) / 3;

	// Mostrar a média no input correspondente
	document.getElementById("media").value = media.toFixed(2);

	if (media < 5){
		document.getElementById('media').style.background='red';
		document.getElementById('media').style.color='white';
	}
	else if(5 <= media && media<6){
		document.getElementById('media').style.background='yellow';
		document.getElementById('media').style.color='black';
	}
	else{
		document.getElementById('media').style.background='green';
		document.getElementById('media').style.color='white';
	}
}

function limpar(){
    document.getElementById("nome").value = null;
    document.getElementById("nota1").value = null
    document.getElementById("nota2").value= null;
    document.getElementById("nota3").value= null;
    document.getElementById("media").value = null;
}
