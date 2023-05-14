function abrirCurso(){
    var cursos = document.getElementById("cursos");
    var cursoSelecionado = cursos.options[cursos.selectedIndex].textContent;

    var confirmar = confirm("Você deseja abrir o curso de " + cursoSelecionado + "?");

    if (confirmar) {
      var janela = window.open(cursoSelecionado + ".html", "Curso", "width=600,height=300");
      
    janela.document.write("<title>Página do Curso " + cursos.options[cursos.selectedIndex].text + "</title>"); 

    switch (cursos.selectedIndex) { 
        case 1: 
            janela.document.writeln("<h1>Análise e Desenvolvimento de Sistemas</h1>"); 
            janela.document.writeln("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas.</p>");     
            break; 
        case 2:
            janela.document.writeln('<h1>Eletrônica Automotiva</h1>')
            janela.document.writeln('<p>Especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio.</p>');
            break;
        case 3:
            janela.document.writeln('<h1>Fabricação Mecânica</h1>')
            janela.document.writeln('<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos.</p>');
            break;
        case 4:
            janela.document.writeln('<h1>Gestão Empresarial - Ensino a Distância</h1>')
            janela.document.writeln('<p>O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos.</p>');
            break;
        case 5:
            janela.document.writeln('<h1>Gestão da Qualidade</h1>')
            janela.document.writeln('<p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas</p>');
            break;
        case 6:
            janela.document.writeln('<h1>Logística</h1>')
            janela.document.writeln('<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos</p>');
            break;
        case 7:
            janela.document.writeln('<h1>Manufatura Avançada</h1>')
            janela.document.writeln('<p>O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares.</p>');
            break;
        case 8:
            janela.document.writeln('<h1>Polímeros</h1>')
            janela.document.writeln('<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo.</p>');
            break;

    }
}

}