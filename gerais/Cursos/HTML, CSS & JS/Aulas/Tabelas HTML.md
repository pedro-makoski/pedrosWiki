---
tags:
  - HTML
Modulo: "3"
Capitulo: 21
---
## Importância da Tabela no sites
---
De fato tem importância, mas muitas pessoas usam de maneiras erradas a tabela. Pois muita gente usa tabelas para criar estruturas dos sites. Pois a criação de layouts com tabelas, não é semântico. A tabela do jeito certo, é de dados, de tabulação. 
## Tabelas em HTML
---
Por padrão as tabelas não tem borda.
- A tag table, delimita a tabela, dentro dela é onde vai estar as informações.
- tr = TABLE ROWS. As linhas da tabela.
- td = Os dados que ficam dentro das linhas da tabelas.

## Hierarquias de tabelas - simples
---
table = tabela.
	TABLE ROWS  = linha de tabela.
		TABLE HEADER = cabeçalho de tabela.
		TABLE DATA = dado de tabela. 
Atualmente no HTML 5 não é necessário colocar as tags de fechamento, mas é importante para não haver confusão, e fazer algo na hierarquia errada. Se a hierarquia não for obedecida, os elementos que foram errados, vão aparecer antes ou depois da tabela.
Você não precisa colocar todos os elementos de uma linha, a partir da quantidade de colunas, caso assim se faça, a célula que você não escreveu, por padrão, vai ficar faltando.
Por padrão o th, fica em negrito.
## Border colapse
---
Por padrão é separate, que são as bordas entre elementos separadas. Mas se você colocar colapse, ele vai juntar as linhas próximas, e fazer com que fique com mais cara de tabela. **O border colapse, é aplicado sobre as bordas dos elementos filhos de um elemento.**
## Centralizando td
---
O text-align(center, left, right), faz a centralização horizontal, enquanto o vertical align(middle, top, bottom) na vertical. 
## Semântica para tabelas com muitos conteúdos
---
TABLE
	CAPTION - título da tabela, a legenda da tabela.
	THEAD
		TR, TD, TH.
	TBODY - você pode só o TBODY, dependendo dos casos.
		TR, TD, TH.
	TFOOT - coloca-se coisas como a soma dos valores da tabela por exemplo.
		TR, TD, TH.

Mesmo que faça em ordens diferentes, ele sempre vai ser primeiro head, depois body depois foot.
## Scope - de tabelas
---
Valor colocado na tag HTML a propriedade **scope**, para determinar onde um th(table header) age em um td(table data), se é pela coluna ou pela linha. Se for pela coluna **col**, ou seja os valores(td) abaixo do th com esse scope, são pertencentes ao mesmo. Caso em linha **row**, todos os TDs ao lado direito dele, pertence ao th. 

O rowgroup e o colgroup, é quando um th determina através de um rowspan ou colspan para mais de uma linha(rowgroup) e mais de uma coluna(colgroup).
## Efeito zebrado de tabelas 
---
Esse efeito é útil para ficar mais fácil a leitura.
Você pode fazer usando a [[ID, CLASS, pseudo-elementos e pseudo-classes#Pseudo classe|pseudo classe]] nth-child, e colocando como valor 2n, isso significa que vai aplicar o estilo de 2 em 2.
```css
tbody > tr:nth-child(2n) {
	background-color: lightblue;
}
```
você também pode usar no lugar de 2n, por exemplo o odd, que significa impar, ou seja todos os nth-childs impares.
```css
tbody > tr:nth-child(odd) {
	background-color: lightblue;
}
```
ou você pode usar o 2n - 1, que é o mesmo resultado que odd. Se você quiser o mesmo resultado que 2n utilize a palavra even que é par, em tradução. 
## Cabeçalho fixo
---
Para caso de tabelas grandes. Existe um recurso que não funciona em todos os navegadores.
No elemento pai coloque position: relative, para que o elementos dentro fique relativo à ele. Depois coloque um position:sticky, no elemento do theader, e coloque um top como 0, ou -1, para que fique no topo. 
```css
table {
	position:relative;
}

table > theader {
	position:sticky;
	top:0;
}
```
## Mesclagem de células
---
Para fazer isso é necessário que se pense se é expansão em coluna(colspan), ou em linha(rowspan), onde se expande em coluna um elemento vai ocupar a quantidade de colunas passadas.
```html
<td colspan=2 rowspan=2></td>
```
Ele só vai expandir se tiver dados em baixo, para colocar. 
## Selecionar colunas
---
Para fazer isso utilize a tag colgroup, e dentro dela coloque as colunas à serem selecionadas. 
```css
<colgroup>
            <col class="grupo2">
            <col class="grupo1">
            <col class="grupo2">
            <col class="grupo1">
</colgroup>
```
Cada col equivale à uma coluna. Caso queira que um col valha mais de uma coluna, utilize a propriedade span, e coloque em seguida entre aspas a quantidade de colunas que ela interfira. 
```css
<colgroup>
            <col class="grupo2">
            <col class="grupo1" span="3">
</colgroup>
```
## Responsividade de tabelas 
---
Você pode envelopar a tabela com uma div, e essa div usar a propriedade overflow-x(item que transbordam no eixo x - horizontal - abcissa), com o valor auto(fazer scroll se for necessário a partir do tamanho, apenas na div.)
```css
div.container {
	overflow-x: auto;
}
```
