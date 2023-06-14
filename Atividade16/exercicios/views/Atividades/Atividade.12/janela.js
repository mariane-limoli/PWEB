function fecharJnanela(fechar) {
  fechar.src = "./img/aberta.png";
  document.getElementById("mudarH1").innerHTML = "🥶 <br>  Janela aberta ";
}
function abrirJanela(abrir) {
  abrir.src = "./img/fechada.png";
  document.getElementById("mudarH1").innerHTML =
    "😌✌️ <br> Janela fechada!<br> click duas vezes ";
}
function quebrarJanela(quebrar) {
  quebrar.src = "./img/broken.png";
  document.getElementById("mudarH1").innerHTML = "😱 <br> Janela Quebrada ";
}
