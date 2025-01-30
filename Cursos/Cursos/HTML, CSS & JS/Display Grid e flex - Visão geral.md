Aqui vai um resumo simples sobre os métodos de organização de layout flex e grid. Mais em breve aprenderei mais sobre, então provavelmente terá mais um md falando sobre o assunto.
# Flex
Organiza os elementos ou em linhas ou em colunas, com propriedades que permitem manipular essa organização.
Por exemplo:
- Justify-content: justifica os conteúdos, ou seja organiza os conteúdos ao longo do eixo do flex. Ou seja, quando colocamos, por exemplo: center e o flex-direction é row, ele alinha o conteúdo no centro horizontalmente. No justifiy temos outros valores como 
	- start(esquerda, considerando o modo de escrita)
	- end(para a direita do arquivo, considerando o modo de escrita
	- flex-start(também a linha à esquerda mas considera a ordenação via flex, é o padrão)
	- flex-end(a linha à direita, mas considera o flex-direction) 
	- space-betweem(distribui os elementos ao longo de toda a largura/altura do elemento, do início ao fim)
	- center(centraliza)
	- space-arround: distribui os elementos com um espaço igual entre si, mas sem considerar a largura/altura completa.
- align-items: a linha os elementos no eixo contrário do flex-direction, center centraliza, start coloca no início, end coloca no fim. 
- flex-direction: coloca a direção de escrita dos elementos, column - um em cima do outro, row - um ao lado do outro, column-reverse - um em cima do outro  só que os últimos são os primeiros, e os primeiros são os últimos.  , row-reverse - um ao lado do outro, só que os últimos são os primeiros, e os primeiros são os últimos. 
- flex-wrap, pode ser wrap que indica que caso não caiba, os elementos se dividem ao longo de colunas, ou ao contrário caso o flex-direction seja column. E pode ser nowrap, que não quebra, e vasa.
# Display grid 
Diferente do flex, divide os elementos em linhas e colunas simultaneamente:
Temos o
## grid-template-row
Essa propriedade recebe vários valores em sequência indicando o tamanho de cada linha, assim, por exemplo:
```css
grid-template-rows: 1fr 1fr 1fr;
```
Ele define 3 linhas para o display-grid, e cada linha possui 1fr de tamanho, 1fr seria uma unidade fracionária em relação ao elemento pai, ou seja se o elemento pai possui 300px de altura, cada 1fr vai ter 100px. Você pode simplificar o código da seguinte maneira:
```css
grid-template-rows: repeat(3, 1fr)
```
Primeiro a quantidade de elementos e depois o tamanho de cada um deles. 
## grid-template-columns
Essa propriedade recebe vários valores em sequência indicando o tamanho de cada coluna, assim, por exemplo:
```css
grid-template-columns: 1fr 1fr 1fr;
```
Ele define 3 colunas para o display-grid, e cada coluna possui 1fr de tamanho, 1fr seria uma unidade fracionária em relação ao elemento pai, ou seja se o elemento pai possui 300px de largura, cada 1fr vai ter 100px. Você pode simplificar o código da seguinte maneira:
```css
grid-template-columns: repeat(3, 1fr)
```
Primeiro a quantidade de elementos e depois o tamanho de cada um deles. 
## grid-columns-start e grid-columns-end
O primeiro define a coluna em que o elemento começa, e o segundo define a primeira coluna em que o elemento não vai estar, ou seja o a ultima coluna que ela vai estar vai ser na coluna grid-colum-end-1.
## grid-rows-start e grid-rows-end
O primeiro define a linha em que o elemento começa, e o segundo define a primeira linha em que o elemento não vai estar, ou seja a ultima linha que ela vai estar vai ser na linha grid-colum-end-1.
# gap
Propriedade CSS que pode ser usada tanto em elementos display:flex, quando display:grid, ela define o espaçamento entre os elementos do corpo, ou seja, por exemplo, se: 
```css
gap:20px;
```
O espaço entre os elementos do display:flex e display:grid, vão ter 20px. Sendo mais eficiente do que usar margin, nestes casos. 

