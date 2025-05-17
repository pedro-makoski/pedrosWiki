Para fazer repetições a partir de uma lista em Angular, podemos usar o @for. Para usa-lo escreva algo parecido com:
```html
@for (letra of alfabeto; track letra) {
     <app-separador>{{ letra }}</app-separador>
}
```
Ele basicamente com isso cria um loop, a partir da variável alfabeto que está lá no objeto do TS. Ele percorre para cada letra do alfabeto, e traqueia a partir da letra, ou seja, caso essa letra altere ele altera apenas essa letra. O track deve ter algo que identifique o elemento.