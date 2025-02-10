# document
Se trata de todo o documento HTML do código. A partir dele você consegue várias propriedades e funções pertencentes a página. 
## document.querySelector()
Dentro dele você passa como parâmetro o seletor de um elemento da página HTML. Pode ser por meio de:
- Classes: iniciados com ponto. `.classe`
- IDs: inciados com Hashtag. `#id`
- Elemento HTML, elementos como button, img, div, section, main, body e afins são colocados sem inicialização. 
- Você também pode selecionar a partir de atributos HTML. Colocando entre colchetes assim: ``elemento[atributo="valor"]``. E então você seleciona tal elemento com tal propriedade e valor. 
Quando elemento do Query selector não existe, é retornado null. 