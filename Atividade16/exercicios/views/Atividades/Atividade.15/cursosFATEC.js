function run() {
  // Usuario confirma abrir nova janela
  let confirmation = confirm(
    `🚀 Dseja ir a página referente ao curso selecionado?`
  );

  if (!confirmation) {
    return;
  }

  // logic for windows
  let course = document.getElementById("courses").value;
  standardWindow = window.open(
    `http://fatecsorocaba.edu.br/curso_${course}.asp`,
    "width = 600",
    "height = 300"
  );
}
