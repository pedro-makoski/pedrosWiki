Você pode atribuir em parâmetros, variáveis funções anônimas. Ou seja, funções sem nome. 
Você pode fazer por padrão assim:
```js
const funcao = function() {
	
}
```
Ou de uma forma ainda mais simples com arrow functions:
```js
const funcao = () => {
	
}
```
Elas podem ser uteis para colocar como parâmetros de funções:
```js
setTimeout(function() {
    console.log("Olá mundo!");
}, 1000);
```
E principalmente quando é necessário colocar os parâmetros da função, e você quer passar ela com os parâmetros e não a função:
```javascript
const umaMensagem = "Sou uma mensagem de Olá mundo!";

function imprime(mensagem) {
    console.log(mensagem);
};

setTimeout(function () {imprime(umaMensagem)}, 3000);
```
