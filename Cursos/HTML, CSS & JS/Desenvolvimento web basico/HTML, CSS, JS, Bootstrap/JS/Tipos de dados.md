O JavaScript é uma linguagem não tipada. Ou seja, ela define o tipo da variável, dependendo do valor que atribuímos à ela. 
![[Pasted image 20241007141536.png]]
# Tipeof 
Função no JS, para descobrimos o tipo, definido pelo JS para alguma variável.
```js
let idade = 5; 
console.log(typeof(idade))
```
Resultado: number.
# Casting 
O processo do JS por trás da conversão de tipo, quando é necessário que seja alterado, por exemplo "14"``*2``, ele retorna 28, pois fez um casting de "14", para 14 do tipo number. Se for, por exemplo, "14,5"``*2``, ele retorna NaN(not a number), pois 14,5 não pode ser um número, pois ele só reconhece ponto e não vírgula, portanto não é um número. Outro exemplo "14,5o"/2, retorna também NaN, pois o não é um número.