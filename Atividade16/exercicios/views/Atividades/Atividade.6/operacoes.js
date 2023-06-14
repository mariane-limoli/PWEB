alert(
  "  Click em OK para inserir dois numeros para \n que sejam realizadas algumas operações"
);
num1 = prompt(" 1ª numero: ");
num2 = prompt(" 2ª numero: ");

function soma() {
  return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
}
function subtracao() {
  return (parseFloat(num1) - parseFloat(num2)).toFixed(2);
}
function produto() {
  return (parseFloat(num1) * parseFloat(num2)).toFixed(2);
}
function divisao() {
  return (parseFloat(num1) / parseFloat(num2)).toFixed(2);
}
function resto() {
  return (parseFloat(num1) % parseFloat(num2)).toFixed(2);
}
