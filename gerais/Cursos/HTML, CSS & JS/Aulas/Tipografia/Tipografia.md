---
Capitulo: 14
Data: Invalid date
Modulo: "2"
tags:
  - CSS
---
> [!important]  
> É importante sempre se preocupar com as fontes.  

a Tipografia surgiu lá no século 15 quando surgiu a imprensa.

antigamente antes do século 15 quem fazia os livros eram os monges copistas ou Amanuences(feito a mão) , e ele basicamente copiava livros.

e em 1450 o inventor alemão Johannes Gutenberg inventou a prensa mecânica de tipos moveis, que basicamente os tipos são carimbos de letra que com isso você pode fazer combinações de letra e carimbar uma página sem ter que escrever. por isso Gutenberg é considerado o pai da imprensa mecânica, por mais de terem descoberto depois que na verdade a primeira imprensa mecânica foi feita por chineses.

e no momento da criação dessa prensa as pessoas pensavam em como construir uma letra bonita e que não ocupasse muito espaço, surgindo assim os estudos de tipografia.

o nome tipografia vem de

tipo - typos colocar coisas no papel

grafia - graphia - escrita.

> [!important]  
> e as fontes, os tipos também podem passar informações  

# Anatomia do tipo

normalmente quando começam á desenhar uma fonte nova se utiliza o x minúsculo como base, pois ele define a altura base de todas as letras minúsculas. chamado a altura x. e a altura das maiúsculas é chamado de altura das maiúsculas. algumas letras minúsculas podem ter vazamentos da altura x, essas letras que vazaram por cima é chamado de ascendente, já que vazam por baixo são chamadas de descendentes. e juntando todas a alturas é chamado da altura do corpo. e esses itens de altura são chamados métricos. e todos os outros são os anatômicos.

## Anatômicos geométricos

![[notion-bakcup/02/Untitled 6.png|Untitled 6.png]]

esse pezinho que está ai circulado de amarelo, que não tem em todas são fontes, são chamados de serifa:

![[Untitled 1 4.png|Untitled 1 4.png]]

a importância da serifa: ela serve para guiar o seu cérebro para onde ir, a serifa e muito mais importante no papel porque tem estudos que dizem que tem que ser um pouco a diferente a fonte na tela.

![[Untitled 2 2.png|Untitled 2 2.png]]

o filete une duas hastes ou dois ou 1 ou mais hastes e arcos.

![[Untitled 3 2.png|Untitled 3 2.png]]

o arco que por exemplo está no n, utilizando um conceito barriga para cima. no caso do n.

o esporão serve para fazer com que a letra não pareça que vai cair. para segurar, criar uma base para a letra.

![[Untitled 4 2.png|Untitled 4 2.png]]

a parte de cima do A por exemplo tem uma vértice como se fosse uma ponta.

e também tem um terminal, que tem um elemento e que só está preso em um lugar:

![[Untitled 5 2.png|Untitled 5 2.png]]

## Anatômicos Humanizados

o braço é um elemento que sai de uma haste e vai para cima.

perna é o elemento que sai de um haste e vai para baixo.

e no pé embaixo das pernas é onde tem as serifas.

também tem um componente que só existe na letra s que são as curvas dele, que se chama de espinha.

e no b por exemplo que sai de uma haste, sai dois arcos que vai para o que se chama de barriga a área interna da letra fechada por todos os lados como no Q é chamado de olho.

e também tem a orelha que é a parte de cima do g por exemplo.

e na letra Q e no g na parte de baixo tem uma parte que agente chama de cauda.

![[Untitled 6 2.png|Untitled 6 2.png]]

o glifo é basicamente a forma que representa a letra naquela fonte. ou seja é basicamente a letra.

o conjunto de todos os glifos de uma determinada família é chamada de fonte.

e dentro de cada grifo pode ter vários tipos de grifos como é o caso da open Sans por exemplo:

![[notion-bakcup/02/Untitled 7.png|Untitled 7.png]]

e assim as fontes possuem uma família tipográfica que é o conjunto de tipo de fontes, mas nem todas as fontes tem uma muito grande.

## Categorias de fontes

fontes serifadas são as que tem serifas. como é o caso da times new romans.

as sans-serif são as fontes sem serifas.

> [!important]  
> em textos muito longos em tela é melhor usar as fontes sem serifa  

tem as fontes monoespaçadas também, que pode ser com ou sem serifa, que tem o mesmo espaço em cada letra. ou seja a mesma largura em todos os grifos.

handwriting é uma fonte que tenta simular a escritura á mão, ela simula a caligrafia humana.

fontes comemorativas ou display é uma fonte que não tem nenhuma das características das categorias vistas antes. inclusive nelas que se possui fontes que nem são letras e sim simbolos. como webding e a windding.

![[notion-bakcup/02/Untitled 8.png|Untitled 8.png]]

# Aplicando fontes

para mudar a família da fonte você usar a propriedade font-family, caso o nome tiver uma espaço ou seja duas palavras ou mais separada por um espaço se usa entre aspas.

> [!important]  
> Nem todo computador vai ter Arial, e sim pode ter helvetica ou verdana  

```CSS
font-family: Arial, Helvetica, sans-serif;
```

então você pode usar safe combination que permite que caso você não consiga uma tente a próxima.

> [!info] CSS Web Safe Fonts  
> W3Schools offers free online tutorials, references and exercises in all the major languages of the web.  
> [https://www.w3schools.com/cssref/css_websafe_fonts.php](https://www.w3schools.com/cssref/css_websafe_fonts.php)  

nesse site mostra todas as safe combinations, combinações seguras.

e se você colocar uma coisa como: sans-serif, serif e monospace, ele vai procurar a fonte que faça parte dessa categoria que tenha no dispositivo.

para pesquisar fontes no VS code você pode clicar em ctrl + espaço, isso caso você esteja escrevendo o valor de uma font-family, vai aparecer algumas opções já prontas do VS code.

para aplicar um estilo para dois itens no CSS, e só você colocar uma virgular entre os dois itens no seletor.

quando no body está uma família fonte e os elementos que não tem isso mudado ficam com essa família de fonte, isso é chamado de herança, quando a tag herda uma propriedade do elemento pai(principalmente propriedades de textos).

## Tamanho de fontes

> [!important]  
> é sempre importante seguir a recomendação da W3C para quando for seguir os tamanhos no CSS.  

o tamanho da fonte é feito a partir da propriedade font-size.

### Medidas absolutas

cm, mm, in(polegada), px, pt, pc(paica). pt(utilzada no word por exemplo) e pc são medidas do papel, cujo não são muito recomandeveis.

medidas absolutas são difíceis pelo fato de serem diferentes para cada tipo de dispositivo.

### Medidas relativas

em(medida relativa ao atual tamanho da fonte - tamanho do m maiúsculo - o tamanho do elemento pai), ex(relativo á altura x de uma fonte - do x minúsculo de uma fonte), rem(relativo a fonte que está configurada no body no root), vw(porcentagem da largura da tela - relativo a largura da tela), vh(porcentagem da altura da tela - relativo a altura da tela), % e entre outras.

> [!important]  
> é recomendável de acordo com a W3C usar para tamanho de texto o em e o px.  
  
> [!important]  
> a medida padrão das fontes é 16px.  

16px geralmente é = 1em

## mais propriedades da fonte

para isso utilizamos a propriedade `font-weight`, mas lembre se nem toda as fontes tem vários font-weight muito amplo por exemplo Arial, helvetica e a sans-serif só tem a opção normal e a bold, mas tem algumas mais diversificadas como a ‘Work Sans’ que não está disponivel no computador de ninguém por tanto tem que ser importada.

na work-sans temos todos esses tipos de tipo de peso: o light, normal, bold e o bolder.

e também pode ter as opções numéricas que vão do 100 - 900, de 100 em 100, ou seja são os valores: 100, 200, 300, 400, 500, 600, 700, 900.

também tem a propriedade `font-style` que pode ser normal ou `italic` .

também tem o text-decoration que pode ter como valor o underline que deixa o texto com uma underline. mas nem todas as fontes tem essas propriedades.

Text-transform:uppercase, deixa tudo em letra maiúscula. Font-variant small-caps, deixa a primeira letra da palavra maiúscula e o resto maiúscula só que menos que as primeiras.
## Shorthand font

shorthand é como se fosse uma forma de simplificar vairas propriedades em uma fontes no caso do font-family, font-size, font-weight e font-style. se usa a propriedade shorthand font:

com a seguinte ordem font-style(primeira propriedade do shorthand), depois font-weight, font-size, font-family.

## Onde conseguir fontes

> [!info] Browse Fonts - Google Fonts  
> Making the web more beautiful, fast, and open through great typography  
> [https://fonts.google.com/](https://fonts.google.com/)  

você pode clicar em categorias/classification e escolher as categorias já vistas antes.

então você escolhe a sua fonte, clica nela e depois clicando em testador de tipo, e depois em uma das opções 400 normais.

vai aparecer uma barra lateral que você pode fazer aparecer ela no símbolo de compra de cima, então você clica na opção @import caso esteja na opção <link>.

e você pode fazer quantos imports forem nescessarios com suas fontes.

> [!important]  
> Tome sempre cuidado com as licenças. mas no google fonts é tudo gratuito.  

lembre se que o import é uma regra.

não exagere não quantidade de fontes no máximo uns 3 ou 4.

# Baixando fontes, e colocando as nas paginas CSS

você pode usar o site dafont para baixar fontes:

> [!info] DaFont - Baixar fontes  
> Arquivos de fonte disponíveis gratuitamente.  
> [https://www.dafont.com/pt/](https://www.dafont.com/pt/)  

> [!important]  
> tome cuidado, porque algumas fontes da dafont pode não ter glifos com acento.  

tipos de format()

- opentype - otf mas tem casos que pode ser ttf.
- truetype - ttf
- embed-opentype
- truetype-aat(apple advanced typography)
- svg

para utilizar no seu arquivo css você pode usar o font-face para importar

```CSS
@font-face {
            font-family: 'avocado';
            src: url('./fonts/aAvocadoTaco.otf') format('opentype'), url('./fonts/aAvocadoTaco.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
}
```

onde agente dá um nome no font-family, cujo vamos utilizar nas tags.

colocamos os locais onde estão as fontes otf e ttf em src, e algumas navegadores não entendem todos os formatos por isso é interessante dar tentativas para ele funcionar bem, colocando em cada tentativa em ordem de tentativa com o url indicando o local e o format para indicar o formato, que já falamos ali em cima.

e você pode colocar algumas propriedades que estão por padrão.

## Usando Font-ninja

uma extensão que permite com que você capture a fonte que está sendo usada no site. mas isso não conta para imagens. só paginas mesmo. ou seja você pode capturar fontes de um site.

para baixar acesse:

> [!info] Fonts Ninja  
> Speed up your design workflow!  
> [https://chromewebstore.google.com/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh?hl=en-US&utm_source=ext_sidebar](https://chromewebstore.google.com/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh?hl=en-US&utm_source=ext_sidebar)  

e você baixa, lembrando que o font ninja é um serviço de assinatura para você ter acesso á varias fontes, mas a extensão é gratuita.

inclusive você também pode ver as propriedades cada fonte passando por cima dela, e clicando nas fontes você pode testar como seria de tal jeito.

## Detectando fontes de imagens

lembrando que os resultados desses sites não são 100% precisos.

> [!info] Font Finder 🔎 by What Font Is  
> Font finder that helps you to identify fonts from any image.  
> [http://whatfontis.com](http://whatfontis.com)  

nessa que de acordo com o Guanabara foi a melhor você segue os seguintes passos:

- jogue ou selecione sua imagem.
- caso necessário edite o crop que ele fez de cada texto.
- selecione a fonte que você deseja, e clique em next step.
- melhore o contraste e o brilho, e divida as letras em linhas para que o sistema entenda melhor.
- depois clicando em next step, digite as letras que você está vendo em cada input.
- e dai mostra as opções de fontes

também tem o fontsquirrel

> [!info] Identify Fonts - The Font Squirrel Matcherator  
> The Font Matcherator will help you identify what the font is in any image.  
> [https://www.fontsquirrel.com/matcherator](https://www.fontsquirrel.com/matcherator)  

- faça o upload da sua imagem clicando em upload image.
- faça o crop do texto que está fonte que tu está pesquisando.
- clique em matcherateit.
- e então escolha a fonte que mais se paressa.

também tem o myfonts:

> [!info] WhatTheFont | MyFonts’ AI-Powered Font Finder  
> To identify a font from an image, use a font finder or font identifier.  
> [https://www.myfonts.com/pages/whatthefont](https://www.myfonts.com/pages/whatthefont)  

faça o upload ou coloque a URL da imagem.

escolha o texto em que está a fonte que você deseja.

e depois é só escolher a cor que você quer.

## Alinhamento de fontes

> [!important]  
> nunca utilize a opção center, pois esse tag não é semântica  

você pode usar a propriedade `text-align` para alinhar textos usando os valores.

- center: alinhar no centro.
- left: para deixar á esquerda, já é o padrão.
- right: deixa á direita.
- justify: deixa justificado tanto do lado esquerdo quanto direito.

e você ainda pode usar a propriedade `text-indent`, que permite com que você defina o tamanho de espaçamento do inicio do parágrafo.