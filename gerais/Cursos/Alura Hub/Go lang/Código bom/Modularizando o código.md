É sempre importante dividir as responsabilidades do código. Afim de estar mais organizado e escalonável. 
- Podemos criar um pacote que cuida db, o acesso aos bancos de dados. 
- E outro chamado models que controla os tipos de estruturas dos elementos junto com as funções de acesso. 
- Outro chamado controllers que obtem dos models os valores e retornam em páginas e estruturas. Que faz controle dos dados.
- E outro chamado routes que tem as funções que carregam as rotas.