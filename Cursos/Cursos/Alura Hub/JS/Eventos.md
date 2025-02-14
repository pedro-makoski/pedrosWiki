Pode ser na linha, pelo comando on e depois o evento, por exemplo onClick. Mas isso não é muito recomendável. 
Você pode colocar uma função de evento, usando o objeto de retorno de um quertSelector ou getElementById, por exemplo, trocando a função de evento. O nome do parâmetro começa com on e termina com o nome do evento, por exemplo:
```js
elemento.onclick = funcao
```
Então a função vai ser executada quando o elemento for clicado. E algo importante, é que a função não deve conter os parênteses na maioria dos casos, pois se tiver o onclick vai receber o retorno da função e não a função. Então coloque sem os parênteses para passar a função. 

As funções de eventos, recebem uma função, e essa função tem como primeiro parâmetro, o evento. Um objeto, onde tem todos os detalhes do evento. 
Você pode chamar(conveção) de e/evento/event e entre outros. 
```js
element.addEventListener(evento, (e) => {
	
})
```
# Os eventos
- click: quando o usuário clica no botão.
- submit: evento que ocorre quando o envio de formulário acontece. Para não enviar, você pode usar a função e.preventDefault(), para evitar o envio do formulário. 
- Eventos do teclado:
	- keydown: quando a tecla foi pressionada.
	- keyup: quando a tecla foi solta.
	- keypress: quando a tecla foi pressionada, mas não solta.
- Eventos do foco:
	- focus: quando o elemento ganha foco.
	- blur: quando o elemento perde o foco. 
- 