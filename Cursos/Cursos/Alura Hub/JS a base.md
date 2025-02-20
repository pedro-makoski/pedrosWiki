# Hoisting
Variáveis começada com var, tem essa propriedade, onde quando ela é definida, ele é levantada para o início do projeto, por isso ela é global e pode ser usada antes de ser definida. Mas isso tem problemas de segurança e coesão do código, por isso use let ao invés de var.
# Alto nível x baixo nível
Quanto mais baixo o nível, mais próximo da linguagem de maquina a programação é, por isso muitas vezes as coisas podem ser um pouco difíceis. Já uma linguagem mais de alto nível, facilita o processo de entendimento por um humano. Normalmente linguagens de baixo nível são mais extensas, e possuem grande nível de detalhamento. 
# JS é uma linguagem multi paridgma
Javascript é interessante, pois é uma linguagem multi paradigma, ou seja, possui várias formas para resolver um problema, e essas são:
1. Programação Procedural, 
2. Programação Funcional; e
3. Programação Orientada a Objetos.
# Cuidados no desempenho
Desenvolvedores JavaScript, precisam sempre tomar cuidados ao desenvolver suas aplicações, assim como outros desenvolvedores de outras linguagens, e esse cuidados são:
- Falta de uso de _APIs_ ( que significa “_Application Programming Interface_”, ou em português “Interface de Programação de Aplicação”) para economizar processamento do servidor;
- Código mal estruturado e sem eficácia;
- Uso incorreto ou completo desuso de frameworks e bibliotecas;
- Muitas solicitações ao HTTP (a sigla vem do inglês “_Hypertext Transfer Protocol_”, que é o protocolo de transferência de dados da internet);
- Falta de cache de scripts e de objetos.
# Vulnerabilidades
É possível que o JavaScript, ou seja seu site, possa ser atacado, e ficar indisponível, alguns problemas são:
- Cross-Site Scripting (XSS);
- Injeção de SQL;
- Cross-Site Request Forgery (CSRF).
O mais importante é que você deve entender que **uma aplicação Web não pode confiar em nenhum dado do navegador**, ou seja, em nenhum dado que venha de um usuário externo. Nesse caso, todos os dados devem ser **validados antes de serem exibidos ou usados na aplicação**, evitando consultas e chamadas maliciosas dos arquivos.
# Funções declaradas x funções expressas
- **Funções declaradas:** funções que tem seu próprio escopo, e devem ser chamadas. Elas são criadas com a famosa estrutura ``funcion name() {}``, definindo o nome, para ser utilizada depois. 
- **Funções expressas**: funções que são colocadas dentro de variáveis, ou parâmetros de função. Elas pode ser usando funções anônimas, assim const nameFunc = function() {}, ou como arrow function, assim: const nameFunc () => {}.
# Framework x biblioteca
O framework vai conter **elementos de código, estruturas e métodos que vão guiar o desenvolvimento da sua aplicação**, eles vão **otimizar todo o processo**. Além disso, o seu código deve seguir os padrões estabelecidos pelo framework. De certa forma, podemos dizer que **o framework controla como sua aplicação deve ser desenvolvida**.

A biblioteca vai possuir **recursos que você pode utilizar durante o desenvolvimento da sua aplicação**, mas você vai decidir quando e onde chamar as funções da biblioteca. Então, a biblioteca é uma **ferramenta**, que você pode optar por utilizar ou não.

Um outro detalhe é que os **frameworks podem conter diversas bibliotecas dentro deles**, porque como acabamos de ver, as bibliotecas são ferramentas que trazem alguma funcionalidade para nossa aplicação, e simplificam a criação de funções complexas.
# Frameworks, bilbiotecas e tecnologias 
## Angular
Framework interessante para aplicações de apenas uma página, que muda dinamicamente, as chamadas SPAs. 

O Angular usa o TypeScript, pois o TypeScript é mais organizado e completo que o JS. Com funções como tipos, polimorfismo e interfaces. Mas para rodar no navegador, o código Angular é transformado num JS.

No Angular você pode ter várias bibliotecas que podem te ajudar no processo de desenvolvimento. Como o RxJS, que te permite ter controle melhor do fluxo, de programação assincrono, de emitir um dado para receber uma resposta. 

Os módulos no Angular carregam todos os componentes do SPA. E você fazer por exemplo, o LAZY LOADING MODULES que carregam os módulos, onde estão os componentes apenas quando chamados. 

Uma característica do SPA é que a página não é recarregada. Apenas o módulo é, a parte do conteúdo principal. 
## Node.JS
Ferramenta que roda JavaScript fora do navegador. Com comunidade ativa, ganha ferramentas da comunidade rapidamente. 
## React e React Native
O primeiro é uma das mais populares bibliotecas, e permite a criação de sites, de forma componentizada. O segundo baseado no React, também é capas de desenvolver além de sites, aplicativos, tanto para Android quanto IOS.
## JQuery
Biblioteca para JavaScript web, DOM, que busca facilitar a vida do programador JS, permitindo uma maior facilidade na interpretação do código. 
# Veja mais:
- [[Propriedades JS]]
- [[estudos/Cursos/Cursos/Alura Hub/JS/DOM]]
- [[Funções js]]
- [[Eventos]]
- [[Comentários em JS]]
- [[Listas em JS]]
- [[Referências - variáveis e seus tipos]]
- [[Loop JS]]
- [[Função anônima]]
- [[Template string]]
- [[classList]]
- [[Teclado comandos]]
- [[Condições]]
- [[Classe Audio]]
- [[Objeto DATE]]
# Node JS
- [[Por que usar]]
- [[Es lint]]
# Dica
>[!info]
>
>No final de todo código deixar uma linha vázia
