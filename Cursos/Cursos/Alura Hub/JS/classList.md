É um objeto que tem as classes de um elemento. Por exemplo, [0] é a primeira classe e assim vai. Você tem funções também como .add() para adiconar classes, .remove() para remover classes, .update() para mudar classes e assim por diante. O tipo da lista não é array é DOMTokenList.
# Funções
## Adicionar classes 
```js
const element = document.getElementById('meuElemento');
element.classList.add('minhaClasse');
```
Serve para adicionar classes a uma TAG HTML. 
## Remover classes 
```js
const element = document.getElementById('meuElemento');
element.classList.remove('minhaClasse');
```
Serve para remover classes de uma TAG HTML. 
## Sobre o add e o remove
Nesses dois é possível adicionar mais de um elemento como parâmetro.
```js
const element = document.getElementById('meuElemento');
element.classList.add('classe1', 'classe2', 'classe3');
element.classList.remove('classe2', 'classe3');
```
## Toggle de classes 
```js
const element = document.getElementById('meuElemento');
element.classList.toggle('minhaClasse');
```
Se tiver remove, se não tiver adiciona, a classe na TAG HTML.
## Verificar se uma classe existe
```javascript
const element = document.getElementById('meuElemento');
if (element.classList.contains('minhaClasse')) {
  // A classe 'minhaClasse' está presente no elemento
  // Faça algo aqui...
}
```
Usando .contains, você pode verificar se uma classe existe. 