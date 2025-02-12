Pode ser na linha, pelo comando on e depois o evento, por exemplo onClick. Mas isso não é muito recomendável. 
Você pode colocar uma função de evento, usando o objeto de retorno de um quertSelector ou getElementById, por exemplo, trocando a função de evento. O nome do parâmetro começa com on e termina com o nome do evento, por exemplo:
```js
elemento.onclick = funcao
```
Então a função vai ser executada quando o elemento for clicado. E algo importante, é que a função não deve conter os parênteses na maioria dos casos, pois se tiver o onclick vai receber o retorno da função e não a função. Então coloque sem os parênteses para passar a função. 