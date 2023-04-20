function retornaMaior() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    document.getElementById('maior').value = calcMaior(num1, num2, num3);
}

function calcMaior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordenaCresc(num1, num2, num3) {
    var array = [num1, num2, num3];

    const len = array.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos de posição
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;

}

function retornaCresc(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    document.getElementById('crescente').value = ordenaCresc(num1, num2, num3).join('-');
    
}

function limpar(){
    document.getElementById("crescente").value = null;
    document.getElementById("num1").value = null
    document.getElementById("num2").value= null;
    document.getElementById("num3").value= null;
    document.getElementById("maior").value = null
}