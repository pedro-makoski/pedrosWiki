 **_DOM_**, o Document Object Model ou **modelo de objeto de documento**. Sistema que interage com o documento HTML. O DOM define como os objetos dos HTML são estruturados, além de definir métodos para o acesso e controle total do documento. O DOM é uma documentação padronizada pelo W3C (Wolrd Wide Web Consortium) com as empresas criadoras dos principais navegadores.
 ![[Pasted image 20241025164858.png]]
 Isto significa que o **DOM** permite que o JavaScript modifique, adicione novos elementos, exclua elementos, navegue em sua hierarquia em busca dos seus elementos filhos etc.
# Window
>[!info] Interessante
>Tem um objeto maior que o document, este é o window. 

Com o window podemos acessar várias outras propriedades:
- Abrir uma nova janela no navegador (window.open)
- Fechar uma janela (window.close)
- Definir que site será acessado (window.location)
- Definir o tamanho e posicionamento das janelas (propriedades width, height, top e left de window.open)
- Exibir ou ocultar itens da janela, como barra de endereços, barra de status, barras de rolagens, entre outros
## Propriedades
### Window.innerWidth e window.innerHeight
Obtem a altura e a largura do documento, respectivamente, o tamanho que o seu site está se estabelecendo na navegador.
### Screen.width e Screen.height
Obtem a largura e a altura da tela do computador.
### Eventos
Saber quando uma ação ocorre no seu site. ==Não só o window tem isso, mas o document também.== 
```js
window.onresize = () => {
	console.log("Ola mundo");
}
```
Esse evento faz com que quando você altera o tamanho da janela, ele imprime Ola mundo na tela. O () => {} é uma arr function. 
O código acima pode ser reescrito assim:
```js
window.addEventListener('resize', () => {
	console.log("Ola mundo");
}});
```
Para documents você altera de window para document.
Temos além do resize, também temos o evento scroll(), que é quando for feito uma scrolagem. 
### Scroll
```js
window.scroll(0, 100);
```
O código acima rola para a posição 0px na horizontal(x) em relação a esquerda página, e 100 na vertical(y) em relação ao topo da página. Ou seja, ele vai estar 100px para baixo em relação ao topo da página. 

# Document
Vamos falar agora do objeto document. Com ele podemos:
- Acessar um elemento específico, pelo seu id, nome, tag ou classe (apenas por id retorna um único elemento, os demais podem retornam um array de elementos).  
	- document.getElementById()  
	- document.getElementsByName()  
	- document.getElementsByTagName()  
	- document.getElementsByClassName()
	- document.querySelectorAll() - Pega todos os elementos com o seletor passado lá dentro. Mesma lógica do CSS.
	- document.querySelector() - pega apenas um elemento com o seletor passado lá dentro. Mesma lógica do CSS.
- Acessar o título do documento _**(document.title)**_
- Acessar a URL do documento _**(document.URL)**_
- Criar um elemento HTML pelo JavaScript _**(document.createElement)**_, entre outros
Com a obtenção desses objetos podemos:
- Modificar sua classe CSS **_(elemento.className)_** 
- Modificar seu conteúdo _**(elemento.innerHTML - pega só o conteúdo de dentro e document.outerHTML - pega o conteúdo junto com a tag)**_
- Saber quem são seus elementos filhos **_(document.children)_** 
- Ter acesso a seus atributos **_(document.attributes)_**, entre outros.
## Funções 
### Events
>Os eventos representam toda a força motriz que permite toda a dinâmica da página. Os eventos fazem parte do DOM e podem ser entendidos como “gatilhos” que são disparados sempre que algo acontecer, como um clique do mouse sobre um elemento, a movimentação do mouse, alguma tecla pressionada no teclado ou uma ação de abrir ou fechar uma página. 
>
>O DOM fica sempre observando tudo o que está acontecendo na página, no documento e em seus conteúdos. Assim que houver alguma interação do usuário, o DOM irá disparar o gatilho.

Funciona como os [[#Eventos]] visto anteriormente, mas para documentos. Eles podem ser aplicados tanto para o document, quanto para elementos específicos. Você pode fazer como visto antes tanto atribuido ao on{nome do evento}, ou addEventListener, também visto antes. Outra forma seria colocando no próprio HTML.
```html
<p onclick="fazer()"></p>
```
O fazer(), faz com que a função fazer criada no JS seja executada ao ser clicado no p. Ao invés do fazer(), você também pode colocar um arr function ou uma função inline function(){//realizar ação}, ou um metodo tipo alert().

Além do onclick, temos também: onload(), que seria: quando a página for completamente carregada. 

Algo interessante sobre event, seria que mesmo estando em lugares diferente do código. Um pode chamar o outro, é como se eles fizessem uma sincronia entre si.
#### onclick
Quando o mouse clica no elemento.
#### onscroll
Ao ser feito o scrool. Executa a função a ela atribuída. 
```js
document.onscroll = function(){
//executar função
}
```
#### onmousemove
Ao mover-se o mouse. 
#### onchange
É disparado quando um elemento HTML for alterado.
#### onmouseover
Disparado quando o usuário passa o mouse “por cima” do elemento.
#### onmouseout
Quando o usuário movimenta o mouse para fora do elemento.
#### onkeydown
É disparado quando o usuário clica em alguma tecla do teclado. 
#### onload
Disparado quando o navegador termina de carregar a página. 
#### Mais
https://www.w3schools.com/jsref/dom_obj_event.asp
---
Ao ser atribuído na tag o evento, você pode colocar na função o parâmetro this, isto é a tag atual.
### Write
Escreve no documento da página, algo. Ou seja, ele substitui todos o body da página pelo parâmetro passado nele.
```js
document.write("Pedro Makoski")
```
### GetElementsByTagName
```js
document.getElementsByTagName("p")
```
Pega todos os parágrafos do documento. Retornando em uma lista. 

## Propriedades element
Element são os elementos do HTML, as tags em si, com seu conteúdo e propridades. Obtemos eles a partir das funções já vistas acima. 
### .src
Para imagens obtem o src da mesma.
### Style
Trabalha com o estilo do elemento. Tem vários metodos e propriedades filhos. Porém você pode simplesmente atribuir uma string com o estilo.
```js
element.style = "color:blue";
```
ou 
```js
element.style.color = "blue";
```
# JQuery
Criado com o objetivo de facilitar o DOM. Veja a diferença: 
![[Pasted image 20241025173402.png]]
