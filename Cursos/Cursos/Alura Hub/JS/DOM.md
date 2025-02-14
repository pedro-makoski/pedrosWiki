# document
Se trata da referências todo o documento HTML do código, e mais alguns outros elementos. A partir dele você consegue várias propriedades e funções pertencentes a página. 
## document.querySelector()
Dentro dele você passa como parâmetro o seletor de um elemento da página HTML. Pode ser por meio de:
- Classes: iniciados com ponto. `.classe`
- IDs: inciados com Hashtag. `#id`
- Elemento HTML, elementos como button, img, div, section, main, body e afins são colocados sem inicialização. 
- Você também pode selecionar a partir de atributos HTML. Colocando entre colchetes assim: ``elemento[atributo="valor"]``. E então você seleciona tal elemento com tal propriedade e valor. 
Quando elemento do Query selector não existe, é retornado null. E quando existe ele retorna o elemento, permitindo controla-lo. 
## document.querySelectorAll()
Retorna uma lista(do tipo node não do tipo array) com todos os elementos com a seleção do parâmetro. 
## .localName
Obtem o nome da tag em minúsculo. 
## .tagName, .nodeName
Obteo o nome da tag em maiúsculo. 
## document.getElementsByClassName:
Retorna todos os elementos com aquela classe. 
## document.getElementById
Pega o elemento com aquele ID. 

# Funções/propriedades das TAGs
## Da tag audio
```js
document.querySelector("#id-do-elemento").play() 
```
Isso inicia o áudio. 
>[!Atenção]
>
>Uma política do navegador é não permitir que o áudio toque quando o JS é carregado. Ou seja, se você tentar colocar o .play() de um áudio no escopo principal do código, isso vai retornar um erro.
## Da tag input
É possível obter o value usando, o .value.
```js
document.querySelector("#id-do-elemento").value
```
Você pode inclusive trocar um elemento usando do outro lado da igualdade.
## De qualquer tag:
- .setAttribute: muda o atributo HTML pelo JS. O primeiro parâmetro é o nome do atributo e o segundo é novo valor. 
- .getAttribute: recebe o atributo, e retorna o valor dele.
- .hasAttribute: recebe um atributo, e retorna true se tem o atributo e retorna false se não tem o atributo. 
- .removeAttribute: recebe um atributo como parâmetro e remove ele da tag.
- .innerHTML, pode ser tanto para obter quanto para mudar, colocando do outro lado da igualdade. Permite controlar o texto dentro da TAG HTML.
