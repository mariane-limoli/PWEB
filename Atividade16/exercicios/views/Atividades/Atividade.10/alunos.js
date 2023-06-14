// 1ª Forma
var Aluno = {};
Aluno.Nome = "Genilson";
Aluno.Ra = "0012313212321";
Aluno.Periodo = "Noturno";
var pri = `Aluno: ${Aluno.Nome}<br>RA: ${Aluno.Ra} <br> Periodo: ${Aluno.Periodo}`;

// 2ª Forma
var Aluno1 = {};
var nome_Aluno1 = "nome";
var Ra_Aluno1 = "Ra";
var Periodo_Aluno1 = "Periodo";
Aluno1[nome_Aluno1] = "Natalia da Rosa";
Aluno1[Ra_Aluno1] = "0004818123123";
Aluno1[Periodo_Aluno1] = "Diurno";
var seg = `Aluno: ${Aluno1.nome}<br> RA: ${Aluno1.Ra}<br> Periodo: ${Aluno1.Periodo}`;

// 3ª Forma
var Aluno2 = {};
Aluno2["Nome"] = "Julia Munari";
Aluno2["Ra"] = "003128000000";
Aluno2["Periodo"] = "Noturno";
var ter = `Aluno:${Aluno2.Nome} <br> RA: ${Aluno2.Ra} <br> Periodo: ${Aluno2.Periodo}`;

var vaiparaoHTML = document.querySelector("pri, seg, ter").value;
