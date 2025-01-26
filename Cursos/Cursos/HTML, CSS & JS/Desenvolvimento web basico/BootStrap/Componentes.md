# Jumbotron 
Aqui, iremos conhecer alguns componentes do Boostrap que podem ser muito úteis para elaboração de páginas. Segundo a própria documentação do Bootstrap, **o Jumbotron é um simples componente para chamar mais atenção a um determinado conteúdo ou informação.**

Para ter um **Jumbotron** em nosso site, precisamos utilizar a classe "**jumbotron**", que cria esta área de fundo cinza para conter os  demais elementos. O código do **jumbotron** acima é o seguinte:
![[Pasted image 20241125150131.png]]
- Jumbotron: Define que o elemento será um jumbotron e, por esse motivo, aplica um estilo diferente do container, possibilitando a cor cinza no fundo e toda a largura da tela. 
- A classe "**_display_**" define cabeçalhos maiores e levemente mais estilizados, onde você escolhe a densidade entre 1 a 4. Funciona de forma semelhante à hierarquia de título do HTML, onde temos de h1 até h6.
- **Lead:** define um tipo de parágrafo mais destacado.
- **_my-4_**: nessa classe temos a letra "**_m_**" para margem e a letra "**_y_**" para indicar que a margem deve ser aplicada tanto na parte superior quanto na inferior, e, por fim, o número que "**_4_**" que indica a medida (o número 4 refere-se a um padrão já definido pelo Bootstrap). Perceba que se você colocar my-sm-4, ele vai aplicar a margem apenas para dispositivos mobile, por isso o sm. 
- _**btn**_, _**btn-primary**_ e **_btn-lg_**: _**btn**_, _**btn-primary**_ e **_btn-lg_** definem um botão, a cor de fundo do botão e o tamanho do botão, respectivamente.
# Alertas
As classes de alertas criam elementos pré-definidos que utilizamos para representar mensagens - os alertas em sites - usando sempre os mesmos padrões (success, danger, warning, info etc):
![[Pasted image 20241125150639.png]]
**Para construir um alerta em sua página, utilize as classes alert e a alert- seguida do padrão pré-definido:**
![[Pasted image 20241125150714.png]]
O alert define que o elemento é um alerta. Já o alert-primary e demais definem as cores do elemento alerta, de acordo com cada padrão.
Já reparou que estes padrões de cores são usados em todos os elementos? Isso cria uma padronização simples de cores em seu projeto.
# Tabelas
A construção de **tabelas** segue a mesma estrutura do HTML, mas estilizar tabelas com CSS não é uma tarefa simples. Com o Bootstrap temos a rapidez para gerar estilos padronizados e profissionais apenas adicionando suas classes.
![[Pasted image 20241125150905.png]]
![[Pasted image 20241125150939.png]]
Se existirem muitas colunas ou o conteúdo da coluna for extenso e você queira exibir sem que haja o encolhimento desse conteúdo, utilize a classe "**_table-responsive_**" envolvendo o elemento com a classe "**_table_**":
**Com isso, teremos um resultado parecido com este:**
![[Pasted image 20241125151044.png]]
![[Pasted image 20241125152409.png]]
table-dark: tabela preta.
thead-dark: cabeçalho preto.
table-striped: tabela zebrada. Com uma cor cinza e a do fundo. Mas se você adicionar table-{cor do padrão} você tera uma tabela zebrada a partir dessa cor.
table-bordered: coloca bordas em todas as celulas da tabela, ao invés do padrão que seria entre as linhas.
table-borderless: sem nenhum tipo de borda, nem entre as celulas, nem entre as linha ou tr.
table-hover: toda linha que você passa o mouse, ele vai deixar com uma cor diferenciada. 
table-sm: tabela pequena.
Nos th e tr você coloca também classes como table-{alguma coisa}.
# Formulários e botões
Vamos falar agora de formulários. Para criar nossos formulários com estilos profissionais usamos a mesma estrutura do HTML com as tags form, input e label.
![[Pasted image 20241125151231.png]]
![[Pasted image 20241125151253.png]]
Basta envolver os componentes que devam ficar numa linha do formulário com uma **_div_** e a classe "**_form-group_**" e colocar a classe "**_form-control_**" em cada elemento input.
- **form-group**: Usada na ``<div>``, agrupa os elementos **label** e **input** em linha. O form group, pode ter um tamanho atrelado também, por exemplo form-group-sm, para pequeno.
- form-control: Usada em controles (**_inputs_**), define seus estilos e alinhamentos, juntamente com seu **_label_** associado.
- **form-check**: Usada quando o elemento é do tipo "**_check_**", deixando os elementos na mesma linha.
- **form-text**: Texto de formulário.
- **text-muted:** texto claro.
- form-inline: definida na tag form. Os itens do formulário são postos em linha, ao menos que a tela diminua e seja necessário criar uma espécie de pilha.
- float-right: vai para o lado direito, da tela.
Estas classes incluem espaçamento entre os componentes, formatação visual e largura de 100%. Para conhecer mais detalhes e construir formulários mais complexos, acesse a documentação, clicando [aqui](https://getbootstrap.com.br/docs/4.1/components/forms/).
![[Pasted image 20241125151555.png]]
## A Classe "btn"
A classe "**_btn_**" define o estilo do nosso botão. Inicialmente ela foi desenvolvida para usar com a tag **_``<button>``_**, mas há diferentes casos de usos em que precisamos, por exemplo, utilizar a tag _**``<a>``**_ (âncora, link) ou o _**``<input>``**_.
![[Pasted image 20241125151715.png]]
## A Classe "btn-{cor}"

A classe "btn-{cor}" define a cor padrão do botão, seguindo a nomenclatura de cores que já conhecemos. Neste caso, utilizamos essa classe em conjunto com a classe "btn", de forma complementar. Veja o exemplo em código:
![[Pasted image 20241125151750.png]]
## Classes para definir tamanhos

Para definir diferentes tamanhos de botões, o Boostrap padronizou 3 estilos: um pequeno, um grande e outro que ocupa toda a linha. Para isso, podemos adicionar suas respectivas classes, a seguir:

- **btg-lg**: define o botão com tamanho grande(large).
- **btn-sm:** o botão com tamanho pequeno(small).
- **btn-block**: define o botão para ocupar toda a largura do elemento pai.
![[Pasted image 20241125151846.png]]
![[Pasted image 20241125151858.png]]