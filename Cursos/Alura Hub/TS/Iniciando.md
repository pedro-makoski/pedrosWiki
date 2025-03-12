Ao criar um arquivo TS. Você deve ter que notar alguns erros, por exemplo, com elementos HTML, você deve especificar com um as o formato do objeto, por exemplo, se for input as HTMLInputElement.
```js
const inputTipoTransacao = document.getElementById("tipoTransacao") as HTMLSelectElement;

const inputValor = document.querySelector("#valor") as HTMLInputElement;

const inputData = document.querySelector("#data") as HTMLInputElement;
const saldoElement = document.querySelector(".saldo-valor .valor") as HTMLElement
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
```
O comando as faz com que elementos tenha um tipo convertido, mesmo que tenha sido diferente do retorno. Outro é a conversão dos tipos, você pode definir : tipo da variável, e converter a variável corretamente:
```js
let tipoTransacao : string = inputTipoTransacao.value; 
let valor : number = inputValor.valueAsNumber;
let data : Date = new Date(inputData.value);
```
# Compilar e transformar em JS
Instale o TS:
```sh
npm i -g typescript
```
E depois rode:
```js
tsc arquivo.ts
```
E assim será gerado um arquivo JS.