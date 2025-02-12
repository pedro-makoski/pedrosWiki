# document
Se trata de todo o documento HTML do código. A partir dele você consegue várias propriedades e funções pertencentes a página. 
## document.querySelector()
Dentro dele você passa como parâmetro o seletor de um elemento da página HTML. Pode ser por meio de:
- Classes: iniciados com ponto. `.classe`
- IDs: inciados com Hashtag. `#id`
- Elemento HTML, elementos como button, img, div, section, main, body e afins são colocados sem inicialização. 
- Você também pode selecionar a partir de atributos HTML. Colocando entre colchetes assim: ``elemento[atributo="valor"]``. E então você seleciona tal elemento com tal propriedade e valor. 
Quando elemento do Query selector não existe, é retornado null. E quando existe ele retorna o elemento, permitindo controla-lo. 
# Funções das TAGs
## Da tag audio
```js
document.querySelector("#id-do-elemento").play() 
```
Isso inicia o áudio. 
>[!Atenção]
>
>Uma política do navegador é não permitir que o áudio toque quando o JS é carregado. Ou seja, se você tentar colocar o .play() de um áudio no escopo principal do código, isso vai retornar um erro.


