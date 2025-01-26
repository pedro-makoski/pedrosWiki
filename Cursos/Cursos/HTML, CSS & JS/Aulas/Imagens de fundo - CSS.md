---
Capitulo: 19
Modulo: "3"
tags:
  - CSS
---
Não são consideradas como conteúdo do site, é apenas para o estilo dele. Apenas é considerado como uma composição visual do site.
## Colocando imagens no fundo
---
Utiliza se a propriedade **background-image***, e como valor colocamos o caminho dentro do método url().
```css
background-image: url('seu/caminho.png')
```
você também pode colocar imagens da internet, por URLs da internet, ou seja você não precisa baixar(mas é recomendável), você pode apenas colocar a imagem a partir de uma URL da internet.
Pode acontecer de quebrar a imagem, ou demore para carrega-la, nesse caso, então coloque também um background-color, de acordo com o que você quer. 
## Background-size
---
Define o tamanho de cada imagem de fundo.
por exemplo:
```css
background-size: 100px 100px;
```
Essa linha do CSS, faz com que cada imagem tenha 100px largura e altura, ou seja cada imagem a ser repetida vai ter esse tamanho.
**Importante**: o tamanho da viewport não altera o tamanho da imagem.
Se não tiver background-size, terá o tamanho da imagem padrão.
Se os dois valores forem iguais como no exemplo acima você pode colocar só um que será para os dois.
```css
background-size: 100px;
```
Você pode também colocar em porcentagem, só que para ser definido na largura e na altura, coloque nos dois parâmetros, mas tem a chance da imagem ficar esticada.
### Contain
Faz que com que a imagem fique 100% exibida. Mostra ela inteira, todas as vezes.
```css
background-size: contain;
```
### Cover
Vai cobrir a tela inteira, mesmo que para isso tenha que tirar algumas partes dela, para não ficar esticada. 
```css
background-size: cover;
```
## Background repeat
---
Por padrão tem o valor repeat, ou seja vai ser repetido. Mas você também colocar no-repeat e imagem não repetirá. 
```css
background-repeat: no-repeat;
```
Também temos os valores repeat-x, que repete apenas na abcissa, no eixo horizontal. E o repeat-y que repete apenas na ordenada, no eixo y, vertical. Todos começando do canto superior esquerdo, do componente, e sim dá para mudar isso.
## Background-position
---
Define a posição da imagem de fundo, que será começado, se for left top que é o padrão, ele vai começar a imagem no ponto superior esquerdo dela, se for center center, vai começar a imagem a partir do centro.
O primeiro valor é como se fosse a coluna que você quer colocar, e o segundo é a linha que você quer colocar.
## Background-attachment
---
Attachment - vínculo.
Temos alguns valores, que poder ser por exemplo:
### Scroll
O fundo acompanha o scroll, ou seja ele anda junto com o scroll.
```css
background-attachment: scroll;
```
### Fixed
Ele fica fixo, o fundo continua igual independente do scroll. 
```css
background-attachment: fixed;
```
## Shorthand
---
A shorthand do background segue a ordem:
Color > image > position > repeat > [size] > attachment.
Por mais de estar na regra, os navegadores dão erro, quando se coloca o background-size, então tire ele e coloque background-size separado.
# Centralização vertical com CSS
---
O margin: auto só serve para alinhamento horizontal. Então utilizaremos outra forma.
Vai ter elemento .pai, e o .filho que está dentro do .pai. O .pai tem um position: relative, tem uma posição relativa. E o .filho tem um position: absolute, sobre o posicionamento relativo, .pai.
No elemento .filho, você pode agora com o absolute, usar a propriedade left e top, colocando 50% nas duas, eles vão ter uma distância de 50% do canto esquerdo, e 50% de distância do topo. Porém ele vai centralizar a partir do canto superior esquerdo dele, então você usa um transform: translate(-50%, -50%), onde ele vai se mover 50% do seu tamanho para a esquerda(por causa do negativo), e 50% da sua altura para cima(por causa do negativo). Ficando assim no centro.
```css
.pai {

            background-image: url('imgs/target001.png');
            background-position: center;
            background-size: 100% 100%;
            height: 100vh;
            background-color: purple;
            position: relative; 
}  
     
       .filho {

            background-image: url('imgs/target001.png');
            background-position: center;
            background-size: 100% 100%;
            position: absolute;
            height: 200px;
            width: 300px;
            background-color: yellow;
            
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
}
```
