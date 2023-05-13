
const btnEnviar = document.querySelector('form[name="form1"]')
const btnLimpar = document.getElementById('btnLimpar');

btnEnviar.addEventListener('submit', validar);
btnLimpar.addEventListener('click', limpar);


function validar() {

  if (document.forms.form1.elements[2].value == "" || 
      document.forms.form1.elements[2].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.form1.elements[2].focus();
        return false;
    };

    if (document.forms.form1.elements["email"].value == "" || 
    document.forms.form1.elements["email"].value.indexOf('@') == -1 || 
    document.forms.form1.elements["email"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formu1.elements.email.focus();
       return false;
    }

    if (document.forms.form1.elements.comentarios.value == "" || 
        document.forms.form1.elements.comentarios.value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIOS com mais de 20 caracteres!");
        document.getElementById("comentarios").focus();
        return false;
    }


    var radios = document.getElementsByName("radio");
    var selecionado = false;
    for (var i = 0; i < 1; i++) {
      if (radios[i].checked) {
        selecionado = true;
        break;
      }
    }
    if(i == 0){
        alert('Seja bem vindo');
    }else if(i==1){
        alert('Que bom que vc está de volta!')
    }

    if (!selecionado) {
      alert("Selecione uma opção");
    }

   return true;
}

function limpar() {
    document.querySelector('.elementosContainer').value = null;
    document.querySelector('.radio').value = null;
}