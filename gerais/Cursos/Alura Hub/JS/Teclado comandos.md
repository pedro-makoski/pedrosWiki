Quando você usa as funções do seu site, com o teclado. Usando tab, espaço e enter eles não só se diferem de navegador para navegador, mas também é diferente em relação ao Mouse. Por isso é importante usar o JS para tirar sua incossistência.  
Quando o usuário clica num botão. Ele dispara a pseudo-classe active. E esse é o nosso problema. Por isso vamos criar a mesma configuração CSS da :active, com a classe .active. 
# Evento para quando uma tecla do teclado é pressionada
```js
elemento.onkeydown = () => {
	
}
```
A função executada, sempre acontece quando com o elemento selecionado(em focus), e clicado em qualquer tecla do teclado. 
Esse evento visto é quando a tecla é pressionada. Mas você pode fazer quando a tecla é solta:
```js
elemento.onkeyup = () => {
	
}
```
Você pode colocar nesses eventos e:
```js
elemento.onkeydown = (e) => {
	
}
```
Esse e pode ter várias propriedades que podem nos ajudar como:
- code: o código, por exemplo: Tab, Enter, Espace, KeyA, KeyG e assim vai. 
- key: retorna o valor do teclado: " ", "A", "Tab", "Enter" e assim vai. 
	- keyCode: retorna o número referente aquela tecla. 