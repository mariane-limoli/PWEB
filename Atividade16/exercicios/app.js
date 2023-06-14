var express = require("express");
var app = express(); // executando o express

const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home/index");
});
app.get("/historia", function (req, res) {
  res.end(
    "<html><body><center><h2>História da Fatec Sorocaba</h2></center></body></html>"
  );
});
app.get("/cursos", function (req, res) {
  res.end(
    "<html><body><center><h2>Cursos da Fatec Sorocaba</h2></center></body></html>"
  );
});
app.get("/professores", function (req, res) {
  res.end(
    "<html><body><center><h2>Professores da Fatec Sorocaba</h2></center></body></html>"
  );
});

app.get("/Atividade5", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.5/index.ejs`);
});

app.get("/Atividade6/media", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.6/media.ejs`);
});
app.get("/Atividade6/oparacoes", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.6/oparacoes.ejs`);
});

app.get("/Atividade7", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.7/Jogo.ejs`);
});

app.get("/Atividade8", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.8/index.ejs`);
});

app.get("/Atividade9", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.9/index.ejs`);
});

app.get("/Atividade10", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.10/index.ejs`);
});

app.get("/Atividade11/ContaBancaria", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.11/ContaBancaria.ejs`);
});
app.get("/Atividade11/Retangulo", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.11/Retangulo.ejs`);
});

app.get("/Atividade12", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.12/janela.ejs`);
});

app.get("/Atividade13", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.13/alterarSTR.ejs`);
});

app.get("/Atividade14", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.14/formulario.ejs`);
});
app.get("/Atividade15", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.15/cursosFATEC.ejs`);
});

app.listen(port, function () {
  console.log("Servidor rodando na porta: ", port);
});
