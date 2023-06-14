function Maior()
{
    var maior = " ";
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var num3 = document.getElementById('n3').value;

    var arr = [num1, num2, num3];
    var maior = arr.reduce(function(a, b) {
    return Math.max(a, b);
    }, -Infinity);

        alert("Maior Valor: " + maior);
}

function Ordenar()
{
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var num3 = document.getElementById('n3').value;

    //var array = new array(num1, num2, num3);

    var array = [num1, num2, num3];

    array.sort((a,b) => a - b);

    document.getElementById('n1').value = array[0];
    document.getElementById('n2').value = array[1];
    document.getElementById('n3').value = array[2];
}

