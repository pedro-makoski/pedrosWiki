# Formas de colocar JS no HTML
## Inline
Diferente do CSS, que é usado a propriedade style, o JS é usado em tags a partir de propriedades de eventos, tipo onclick="codigo js".
## Pela tag
Você pode colocar o código JS, na tag script, no final da tag body. Esse uso pode ser interessante quando em uma mesma página, se usa várias funções em eventos. 
## Externamente
Você pode colocar na propriedade src na tag script um arquivo externo, com terminação .js, assim se importara o código script de outro local.
```html
<script src="arquivo.js"></script>
```
Caso a importação desse arquivo localize-se na tag header, o navegador vai baixar os scripts e depois renderizar a página HTML, ou seja tem uma pausa de renderização(parsing paused).
![[Pasted image 20240921182456.png]]
Para resolver esse problema, pode ser feito com o Async, que renderiza o HTML e executa o JS em paralelo, ou seja de forma assíncrona. 
```html
<script async src="script.js">  
```
![[Pasted image 20240921182855.png]]
Ou com o Defer(adiar), onde também ocorre de forma paralela a a execução e dowload do HTML e a dowload do JS, porém a execução do script ocorre posteriormente o dowload da página HTML.
```html
<script defer src="script.js"> 
```
# Keywords
Palavras chave, comandos padrões da linguagem. Uma delas são para a criação de variáveis e constantes: var e const, eram já usadas nos JSs anteriores, já o keyword let foi incrementado só depois com EcmaScript 6.