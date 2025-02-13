---
Capitulo: 16
Data: Invalid date
Modulo: "2"
tags:
  - CSS
  - HTML
---
eu posso pegar uma caixa HTML colocar dentro uma caixa e colocar dentro dessa caixa outra caixa. o termo que se dá para quando um elemento está dentro do outro é **aninhamento**.

# Box-sizing
Quando coloca o valor border-box, a borda vai fazer parte da caixa.
# Anatomia da caixa

uma caixa pode ter variações de tamanho caso você deseje. a altura de um elemento é height, já a largura é width.

na imagem a baixo, a parte pontilhada é a parte de conteúdo, que é basicamente a altura e a largura que fica o content. na parte que tá um risco solido é chamado de border. que por padrão a linha do border é bem grudada a parte do conteúdo, e os espaço entre a border e o conteúdo é chamado de padding, que em português serie acolchoamento ou preenchimento, na imagem o padding é representado pela cor um pouco avermelhado e transparente. e o padding pode ser definido tanto na esquerda, quanto na direita em cima e embaixo, e definir uma medida para cada um. o padding é um espaço interno.

![[Untitled 19.png|Untitled 19.png]]

além do espaço interno eu também posso criar um espaço externo chamado de margin que é a margem, sem a margem os objetos ficam colados um no outro, por padrão.

![[Untitled 1 6.png|Untitled 1 6.png]]

outra coisa que fora da borda temos algo chamado outline, que fica na parte de fora da borda, o que está representado de amarelo.

![[Untitled 2 4.png|Untitled 2 4.png]]

você pode verificar os elemento no devtools do chrome, pode clicando em ctrl + shift + i, ou em ferramentas do desenvolvedor em mais ferramentas nos três pontos. ou em botão direito e inspecionar. e você pode notar caso não apreça uma opção chamada computed, ela vai aparecer assim:

![[Untitled 3 4.png|Untitled 3 4.png]]

onde você já pode ver o valor do margin, border e padding para o elemento selecionado, por esse botão.

![[Untitled 4 4.png|Untitled 4 4.png]]

ou selecionando a tag HTML

para dar zoom no devtools você pode usar as teclas ctrl + +, enquanto o mouse estiver dentro do devtools.

o user-agent que aparece as vezes no style, é que foi criado por padrão no seu navegador.

esses tracinhos que estão ai no padding por exemplo diz que não tem aquela a propriedade que está situada.

  

e clicando no valor de width ou height dentro da aba style dessa vez não é computed você pode alterar a largura e a altura sem ter problemas com o arquivo original, e você pode também rodar a rodinha do mouse, para mudar rapidamente.

## padding

tem como colocar o padding-top que é para cima, padding-left que é para o lado esquerdo o padding-right que para á direita e o padding-bottom que é para baixo.

e para resumir tudo em apenas um padding segue a ordem primeiro cima e gira no sentido horário para a direita, baixo e esquerda. isso se replica para o margin.

## Margin

tem como colocar o margin-top que é para cima, margin-left que é para o lado esquerdo o margin-right que para á direita e o margin-bottom que é para baixo.

quando você define margin como auto ele vai deixar no meio. caso seja uma caixa se for um texto é só definir um text-align:center; que deixa no centro.

## Outline

o outline fica entre a borda e a margem. e dentro da margem, ele é configurado igual á borda. mas ele não tem o poder de aumentar a margem.

## Bordas

border-width é a propriedade que define o largura da borda.

border-style define o estilo da borda o mais comum é solid que é toda prenchida, o dashed é mais pontilhado digamos assim só que é quadrado esses pontos, o dotted é pontilhado com pontos circulares, também existe o double que é uma linha dupla, o groove pareca mais um 3d.

e o border-color é a propriedade da cor da borda.

## Shorthands

### padding

padding: (topo) (direita) (embaixo) (esquerda); - quatro valores

padding: (topo e baixo) (esquerda e direita); - dois valores

padding: (topo, direita, embaixo esquerda); - 1 valor

### border

border: (valor do border-width) (estilo da border - valor do border-width) (valor border-color - cor da borda)

### margin

margin: (topo) (direita) (embaixo) (esquerda); - quatro valores

margin: (topo e baixo) (esquerda e direita); - dois valores

margin: (topo, direita, embaixo esquerda); - 1 valor

### Outline

outline: (valor do outline-width) (estilo da outline - valor do outline-width) (valor outline-color - cor da outline)

# Tipos de caixa

sexistem 2 tipos de caixa.
## Display inline-block
Pode ter uma largura, altura, padding e margin. Mas por padrão tem um tamanho a partir do conteúdo, não como 100% da largura da tela. 

## sendo eles o inline-level

ele não vai pular a linha ele sempre vai do lado, até não ter mais espaço de tela. e os objetos digamos assim sempre tem a largura nescessaria.

um exemplo é o span com n no final, ele nunca pula linha portanto é um inline-level.

quando você faz um inline a propriedade width e height não funciona mais.

para fazer ser inline no CSS você usar a propriedade em display como inline.

sendo outros exemplos:

- `` <span>``
- `` <a>``
- ``<code>``
- ``<small>``
- ``<strong>``
- ``<em>``
- ``<sup>- <sub>``
- ``<label>``
- ``<button>``
- <input>
- ``<select>``


## e o box-level

sempre se inicia uma tag em uma linha nova. e que ele sempre vai a largura total da tela, 100% do viewport.

quando se usa uma div, você está usando um box-level.

para fazer no CSS um elemento box-level, você pode usar na propriedade display o valor block no CSS.

outros exemplos:

- ``<div>``
- ``<h1> - <h6>``
- ``<p>``
- ``<main>``
- ``<header>``
- ``<nav>``
- ``<article>``
- ``<aside>``
- ``<footer>``
- ``<form>``
- ``<video>``
- e etc.

# Grouping tags

as grouping-tags são basicamente divs, mas podendo ser semânticas temos as tags com mais significado:

- header: cabeçalho.
- main: conteúdo principal
- footer - cabeçalho.
- section - seção de conteudo, pode estar seu conteúdo dividido em artigos, ou estar diretamente o conteúdo lá dentro.
- article - artigo, contem um conteúdo, uma composição digamos assim independente, que deve ser lido de forma independente.
- aside - conteúdo relativo, periférico e complementar ao artigo ou seção.
- nav - área que possui links de navegação para outras páginas.

# Sombras

> [!important]  
> Não exagere nas sombras, você não precisa que fique muito aparente a sombra. só para criar um efeito que o cérebro nem perceba direito.  

## Usando o box-shadow

box-shadow - propriedade

primeiro valor: deslocamento horizontal

segundo valor: deslocamento vertical

terceiro valor: espalhamento

quarto valor: cor da sombra.

também no início dá para colocar se é interno - inset ou externo outset, e depois do terceiro valor você pode colocar o spread.

você pode clicar em inspencionar, o dev tolls e ir testando por valor de sua preferencia. e clicando nos dois quadradinhos, onde você consegue controlar os itens.

e passando nos dois pontos você tem a possibilidade cria uma box-shadow nova, clicando nos quadradinhos. - função não existe mais.

# border-radius

define o valor de arredondamento da borda, o raio da borda. que pode também ser definido para cada lado da borda começando com a esquerda-cima, depois direita-cima, depois direita-baixo e por ultimo esquerda-baixo.

e se você colocar dois valores vai ser os opostos o esquerda-cima e direita-baixo, e direita-cima, e esquerda-baixo

Quando você coloca 50% como valor, ele fica circular, pois ele arredonda pela metade da largura da caixa.

# Bordas decoradas

coloque uma propriedade border

depois coloque um border-image-source que vai ter o source onde vai estar sua imagem, a partir dos metódo url() no CSS.

depois coloque outra propriedade que é o border-image-slice que vai ser a fatia dos itens do meio da imagem, ou seja das partes que estão entre os cantos.

e depois o border-image-repeat, que fala se a parte do meio da imagem pode repetir ou não. se sim o valor será repeat se não será stretch.

e o shorthand seria o border-image onde primeiro vem o url do local da imagem, depois a quantidade de fatias e depois se repete ou não.

e lembrando que tem que existir uma borda definida antes de criar a imagem decorada.

Outro ponto do border-radius, é que se você colocar um valor separado em /. Assim o border-radius, que seria o raio do círculo, pode ter o primeiro horizontal-radius e depois vertical-radius. Por exemplo:
```css
border-radius: 8px / 20px
```
Cria em todos os lugares da borda, um radius que é 8px na horizontal e 20px na vertical.
