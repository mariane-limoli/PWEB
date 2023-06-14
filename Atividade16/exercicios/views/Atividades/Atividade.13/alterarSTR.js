/*function checarDados() {
  if (
    document.forms.formularioNome.elements[0].value == "" ||
    document.forms.formularioNome.elements[0].lenth < 3
  ) {
    alert("✏️ Preencha o campo Nome corretamente!");
    document.forms.formularioNome.elements[0].focus();
    return false;
  }
  //   if (
  //     document.forms.formularioNome.elements[1].value == "" ||
  //     document.forms.formularioNome.elements[1].lenth < 3
  //   )
  //     alert("✏️ Preencha o campo Sobrenome corretamente!");

  //   document.forms.formularioNome.elements[1].focus();
  //   return false;
}*/
function Maisculo() {
  document.getElementById("idNome").value = document
    .getElementById("idNome")
    .value.toUpperCase();
  document.getElementById("idSobreNome").value = document
    .getElementById("idSobreNome")
    .value.toUpperCase();
  document.forms.formularioNome.Upp;
}

function Minusculo() {
  document.getElementById("idNome").value = document
    .getElementById("idNome")
    .value.toLowerCase();
  document.getElementById("idSobreNome").value = document
    .getElementById("idSobreNome")
    .value.toLowerCase();
  document.forms.formularioNome.Down;
}
