Podem estar no plural(mediaqueries) ou no singular(mediaquery).
Existem vários formatos onde seu site vai estar, pode ser em algum celular, TV, computador, notebook e etc. Os sites precisam estar disponíveis em diferentes mídias e tamanhos. Os mediaqueries servem para fazer um CSS, a partir de tamanhos e mídias diferentes, fazendo com que seu site possa se adaptar nessas mídias e tamanhos.

Media query = Media type + Media Feature
## Media types
Você pode colocar em diferentes média direto no link, colocando uma propriedade media, que pode ser all(qualquer mídia), screen(mídia de tela), print(mídia para imprimir).
```html
<link rel="stylesheet" href="estilos/tela.css" media="screen">
<link rel="stylesheet" href="estilos/impressora.css" media="print">
```
## Media features 
---
Adaptar um CSS, um site, a partir de um tamanho de tela. Significa característica de mídia. Por exemplo, um tamanho de tela, de media type screen.
### Orientation
Se uma tela está maior para o lado horizontal é landscape, se do lado vértical é portrait. Você pode definir um media feature entre parênteses na propriedade media. Você pode colocar por exemplo (orientation:portrait) - para quando está de pé. (orientation:landscape), e quando está deitado.
```html
<link rel="stylesheet" href="estilos/telaretrato.css" media="screen and (orientation: portrait)">
<link rel="stylesheet" href="estilos/telapaisagem.css" media="screen and (orientation: landscape)">
```
### min-width e max-width
Define um valor mínimo e/ou máximo em que uma media query vai atuar. Ou seja o minimo uma media não pode ser menor que ele, e no maximo não pode ser maior que ele.
```css
@media screen and (max-width: 992px) and (min-width: 769px){

}

@media screen and (min-width: 993px) and (max-width: 1200px){

}

@media screen and (min-width: 1201px) {

}
```
## Media direto no estilo
Você pode usar a regra @media, e colocar depois basicamente as media types e as features(entre parênteses).
```css
@media all {
    * {
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #233eff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center bottom;
    }
    h1 {
        color: white;
        text-shadow: 3px 3px 0px #14249da6;
        padding: 10px;
    }  
}

@media screen and (orientation: portrait){
    body {
        background-image: url('../imgs/cev-portrait.jpg');
    }  
}

@media screen and (orientation: landscape) {
    body {
        background-image: url('../imgs/cev-landscape.jpg');
    }
}
```
O @media all não é necessário.
## Mobile-first
Ideia criada por um engenheiro do Google, onde a proposta é começar a fazer o site na versão do celular, e depois colocar coisas na versão do computador. Mas o site, portanto, seria primeiro pensado na versão do celular.
### Vantagens
1. Facilidade na divulgação, pelo Google.
2. Melhoria na experiencia do usuário.
3. Mais leve - mais performático.
4. Credibilidade.
## Typical Device Breakpoint
---
Acontece que o tamanho padrão de resolução dos dispositivos mudam rapidamente ao longo do tempo. Fazendo com que haja alterações bruscas depois do vídeo assistido, por exemplo.
## Menu hamburguer
```js
function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }
```
- Os dois iguais verifica se é igual. 
- O igual ele muda o valor, ele recebe. Ou seja o ele está mudando o estilo do display, de itens.
- A função clickMenu, tem que estar escrita assim, pois é assim que está escrito na propriedade HTML, onClick.
# Display: none;
Significa que não vai ser exibido. E nem ocupará espaço.
# Cursor
Define o tipo do cursor. Por exemplo, o pointer, que é uma mãozinha.