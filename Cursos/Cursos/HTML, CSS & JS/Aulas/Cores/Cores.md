---
Capitulo: 13
Data: Invalid date
Modulo: "2"
tags:
  - CSS
  - Cores
---
![[notion-bakcup/02/Captura_de_tela_2024-02-01_133648.png|Captura_de_tela_2024-02-01_133648.png]]

todas as cores podem passar um sentido uma emoção no site.

# **Sentidos das cores**

Para criar um site bom é necessário usar a psicologia das cores, a partir do sentido que elas trazem **instintivamente.**

---

|   |   |
|---|---|
|**COR**|**SENTIDO QUE ELA TRAZ**|
|**AZUL**|Competência, sabedoria, calma, confiança, profissionalismo, segurança, integridade.|
|**VERMELHO**|Amor, emoção, energia, raiva, perigo.|
|**VERDE**|Saúde, natureza, dinheiro, sorte, inveja.|
|**AMARELO**|Felicidade, alegria, otimismo, covardia|

A cor **Azul,** estatisticamente a cor mais aceita do mundo com _**46%**_ de aprovação. E com a menor taxa de rejeição de apenas _**1%.**_

A cor **vermelha** normalmente é utilizada em sites de comida, entretenimento e moda.

**IMPORTANTE:** o **fundo preto** com **letra branca**, não é recomendável para sites com muito conteúdo, por causar um certo desconforto visual.

Veja a imagem para mais detalhes da psicologia das cores.

**Estilo Monocromático:** quando é usado diferentes tons de uma cor num site.

# **Fato interessante**

A comida está relacionada ao vermelho, e a alegria ao amarelo, por isso o McDonalds, possui essas duas cores.

- Existem mais de 75 milhões de cores possíveis.

# **FORMAS DE REPRESENTAR AS CORES EM CSS**

---

- **Nomes:** **como por exemplo white, black, red e etc.**
- **Hexadecimal:** **cor feita a partir de combinação feita a partir dos algarismos Hexadecimais que são: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. onde vai do 0(nada), ao F máximo. Ele tiza o padrão RGB, que é a quantidade de vermelho, verde e azul onde por exemplo a cor azul é \#0000FF, que é 00 (nada) de vermelho, 00 (que é nada) de verde, FF (que é o máximo) de azul**
- **RGB****: Quantidade vermelho, verde e azul, por exemplo style=”color: rgb(255, 255, 255)” que dá a cor branca.**
- **HSL:** **quantidade de matiz que é hue em inglês que é o h, saturação que é s e luminosidade que é l, onde por exemplo a cor azul é hsl(240, 100%, 50%) e o branco é por exemplo hsl(0, 0%, 100%)**

![[notion-bakcup/02/Untitled 9.png|Untitled 9.png]]

**IMPORTANTE:** rgb e hsl, é em minúsculo no html.

**DICA:** Caso esteja usando o Visual Studio code, você pode passar por cima de onde está escrito a cor, e ir para o local de sua cor, e ele vai colocar um **RGB** automaticamente para você. E se você clicar no lugar que está escrito RGB, você pode mudar para Hexadecimal e HSL. onde na primeira barra é do tom, na segunda a transparência e a terceira cor.

E você pode colocar a transparência assim fica o Hexadecimal com mais dois dígitos, o HSL fica HSLA, e o RGB fica RGBA, o A é de Alpha(transparência que vai de 0 a 1).

# Harmonia e divisão de cores

o circulo cromático:

![[notion-bakcup/02/Captura_de_tela_2024-02-01_140232.png|Captura_de_tela_2024-02-01_140232.png]]

pode ser representado utilizando vários padrões nesse caso se utiliza o modo RGB.

![[Untitled 1 5.png|Untitled 1 5.png]]

nesse caso foi pego as 12 e principais cores.

a maioria das vezes quando você acha alguma coisa bonita e não sabe explicar o porque você pode explicar de duas maneiras:

- Simetria: algo simétrico, que está em harmonia.
- Cor: pois como visto antes as cores podem causar sensações.

## Divisão das cores

### Cores primarias

são as cores amarela, vermelha e azul:

![[Untitled 2 3.png|Untitled 2 3.png]]

possui uma harmonia um pouco grosseira, a ponto de não ficar bonito na tela.

### Cores secundarias

formada por laranja, violeta e verde.

![[Untitled 3 3.png|Untitled 3 3.png]]

eles também são meio grosseiros.

### Cores terciarias

são todas as outras cores. que são misturas das cores primarias com as secundarias. e por isso toda cor terciaria você sempre dá o nome de uma cor primária e depois da secundaria, temos exemplos como.

![[Untitled 4 3.png|Untitled 4 3.png]]

elas parecem mas não são as cores pasteis, mas elas são parecidas com a cores pasteis de forma grosseira.

### Temperatura de cores

![[Untitled 5 3.png|Untitled 5 3.png]]

podemos dividir ao meios as palhetas, e assim no lado esquerdo as cores frias e no direito as cores quentes.

as cores frias são análogas e as quentes também.

## Harmonia das cores

uma paleta geralmente possui tem de 3 a 5 cores, com um valor recomendado de 4 cores. desconsiderando o branco e o preto. e normalmente quando um cliente tem um logo, você pegar o cor primaria do logo dele para colocar no seu site.

### Cores complementares

cores que possui mais contraste entre si. por exemplo se o fundo é rocha a letra tem que ser o amarelo. mas lembrando que isso muito provavelmente não vai ficar bonito. mas é o que tem mais contraste.

![[Untitled 6 3.png|Untitled 6 3.png]]

se obtém a partir de uma linha reta no circulo cromático.

### Cores análogas

não possui contraste muito grande entre si. mas são perceptíveis, possui uma harmonia. para saber quais são e só pegar as cores vizinhas.

![[Untitled 7 2.png|Untitled 7 2.png]]

como nesse exemplo pegado a partir da violeta.

e você também pode usar as:

### Cores análogas e complementares

que pega 2 cores análogas 1 complementar.

![[Untitled 8 2.png|Untitled 8 2.png]]

e assim você cria um paleta como essa por exemplo:

![[Untitled 9 2.png|Untitled 9 2.png]]

### Cores Análogas Relacionadas

![[notion-bakcup/02/Untitled 10.png|Untitled 10.png]]

![[notion-bakcup/02/Untitled 11.png|Untitled 11.png]]

ela pega duas cores análogas entre si, e pega outra com um contras mas não tão grande, pegando a ideia de pegar uma do lado outro depois você pula uma e depois pega a outra.

### Cores intercaladas

tipo as análogas relacionadas, só que a cor de contraste é ainda maior, entre as cores.

![[notion-bakcup/02/Untitled 12.png|Untitled 12.png]]

onde você vai e pega uma cor pula uma pega outra e pula outra e pega a outra. e elas são um pouco mais duras, por isso não é muito recomendável.

### Cores triádicas

![[notion-bakcup/02/Untitled 13.png|Untitled 13.png]]

elas estão dividas simetricamente, que também resultam nas cores primárias e secundarias a partir dessas. elas se baseiam na ideia de pegar uma, pular 3 pegar outra pular mais 3 e pegar outra.

### Cores em quadrado

![[notion-bakcup/02/Untitled 14.png|Untitled 14.png]]

você pega quatro itens pegando uma cor, pulando 2 e pega e assim vai, até ser quatro, e as cores podem ser utilizadas quando quero utilizar cores forte e bem balanceadas.

### Cores tetrádicas

eu escolho duas cores, e pego as complementares delas e junto com as outras que tinha pegado antes.

![[notion-bakcup/02/Untitled 15.png|Untitled 15.png]]

com isso nós garantimos dois pares de cores com bastante contraste entre si.

### Monocromia

você pega uma cor e modifica a saturação e o brilho. ela normalmente cria um efeito que agente normalmente chama de degrade.

![[notion-bakcup/02/Untitled 16.png|Untitled 16.png]]

## Sites para aplicar conceito de cores aprendidos anteriormente

> [!important]  
> Interessante as impressoras usam o modo CMYK que é ciano, magenta, amarelo e preto, sendo k de chave - preto, e não RGB  

> [!info]  
>  
> [https://color.adobe.com/pt/create/color-wheel](https://color.adobe.com/pt/create/color-wheel)  

você pode escolher, o tipo de harmonia que você quer, e ainda pegar os códigos hexadecimais, 1 clique no código entra no input, 2 cliques seleciona apenas o código e três cliques pega o código hexadecimal e a hashtag que fica antes.

dividir complementar - Cores análogas e complementares e você pode colocar na setinha qual é a sua cor base.

você também pode usando esse programa pegar a paleta de cores de uma imagem, subindo em pegar tema, escolhendo os locais que estão as cores que você deseja, e voltando na aba de disco de cores com as cores que já estão lá. e ainda clicando na guia extrair gradiente você pode obter o gradiente daquela imagem. e você pode colocar um limite de gradiente que define quantas cores vão ser obtidas da sua imagem para gerar o gradiente.

e em extrair tema você pode escolher os tipos de cores que o sistema pega para você.

> [!info]  
>  
> [https://color.adobe.com/pt/explore](https://color.adobe.com/pt/explore)  

e clicando em explorar você tem vários exemplos de paletas já prontas para você. e para aparecer melhor todas as paletas, e sem incluir imagens você pode clicar em exibir depois em temas de cores, e escolhendo o tipo de tema que você quer se é popular e assim vai. e clicando na paleta que você preferir você vai ter todas as cores e seus códigos. e ainda você pode copiar como CSS.

também tem o paletton:

> [!info] Paletton - The Color Scheme Designer  
> In love with colors, since 2002.  
> [https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)  

e clicando em examples, você pode inclusive ver exemplos de site, com a paleta de cores.

e também tem o colors.co:

> [!info] Coolors - The super fast color palettes generator!  
> Generate or browse beautiful color combinations for your designs.  
> [https://coolors.co/](https://coolors.co/)  

que clicando em start generation você pode ter exemplos paletas já prontas para você, e é só clicar em espaço que você pode ir para outras paletas. e clicando naquelas três formas, você pode ver exemplos usando aquela paleta. e ainda você pode clicar na cor que você quer que tenha ela, que ela vai aparecer nos outros exemplos também. e também pode clicar em colocar imagem numa câmera que uma cor que você escolheu vai aparecer nas paletas para você.

## Como capturar cores

você pode tirar o print de um site por exemplo, e usar o conta gotas por exemplo do Gimp, por essa é uma maneira ==meio errada==, pois além de ser complicado, tem chance de mudar um pouco o tom da cor ao tirar o print.

uma pratica interessante é usar a extensão ColorZilla:

> [!info] ColorZilla  
> Advanced Eyedropper, Color Picker, Gradient Generator and other colorful goodies  
> [https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-br](https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-br)  

e assim ativando a extensão é só você ativar ela clicando depois de ter clicado no quebra cabeça do Chrome, e depois é só passar aonde está a cor, e ele seleciona para você, e copia: \#2E2816 em hexadecimal, mas ele também mostra em RGB caso queira.

e para apenas desativar a extensão você pode clicar no quebra cabeça no Google Chrome, depois clicar em manager extensions, e depois clicar no botão de ativação para ficar desativado.

# Gradiente em CSS

para colocar gradientes em CSS se utiliza o background-image:

```CSS
background-image: linear-gradient(to right, white, blue);
```

o to right significa que o gradiente é para a direita também pode usar 90deg, deg de graus.

caso você coloque to top é possivel perceber um problema, parecendo que é zebrado, para isso basta colocar esse código utilizando configurações globais, para fazer usa se os *:

```CSS
*{
	 height: 100%;
}
```

```CSS
background-image: radial-gradient(circle, \#8603FB, \#FC00D9, \#FF172D, \#FE5201, \#FE9800, \#FFC700)
```

e o radial gradient pode te dar gradiente tipo em circulos. usando o circle.

e importante não exagere no gradient.

e você também pode colocar porcentagens de quanto aquele gradiente aparece na sua tela.

```CSS
background-image: linear-gradient(-200deg, \#8603FB 1%, \#FC00D9 50%, \#FF172D 80%, \#FE5201, \#FE9800, \#FFC700 100%);
```

> [!important]  
> DICA: se você colocar margin:auto; por exemplo á um main ele vai colocar essa main sempre no centro. criando um espaço que sempre leve ele pro centro.