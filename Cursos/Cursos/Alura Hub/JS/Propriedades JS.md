# Dentro da TAG
Coloque como qualquer propriedade no HTML, colocando uma função(com parâmetros ou não) que faça algo. Existem vários eventos, eles normalmente começam com on, e depois o evento a qual acontece. Por exemplo, onclick, ao aquele elemento ser clicado pelo usuário:
```html
<button onclick="alert('clicou')">Clique</button>
```
Ao o botão click, ser clicado, é disparado uma Janela com o botão OK, para sair, escrito assim: clique. 

Essa forma não é boa. Ela propõe dificuldades, como a repetição de código exaustiva, quando for replicar algo.
# Dentro do arquivo 
Dentro da tag head, insira o seguinte:
```html
<script src="./scripts/main.js" defer></script>
```
Não se esqueça de usar a propriedade ``defer``, para adiar o script para ser executado depois de executar a página. Dentro do ``main.js``, é onde vai ser executado os códigos JS.

Se você não colocar defer vai acontecer erro ao usar TAGs HTML. Outra forma de resolver isso é colocar os scripts lá no final. Antes do fechamento da TAG body. 