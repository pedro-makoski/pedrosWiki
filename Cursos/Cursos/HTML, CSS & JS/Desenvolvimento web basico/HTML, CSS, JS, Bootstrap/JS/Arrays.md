**Arrays** ou vetores são formas de organizar um conjunto de valores de maneira ordenada e estruturada numa única variável. Nessa estrutura, cada posição tem uma identificação numérica, sempre iniciando em zero. Esta posição é chamada de índice (index). 

Para criar um **array** com **JavaScript**, fazemos o mesmo como em uma variável qualquer, colocando seus múltiplos valores entre colchetes e separados por vírgula, conforme exemplo a seguir:
![[Pasted image 20241012173348.png]]
![[Pasted image 20241012173412.png]]
![[Pasted image 20241012173552.png]]
![[Pasted image 20241012173645.png]]
![[Pasted image 20241012173728.png]]
![[Pasted image 20241012173758.png]]
# Slice metodo 
Funciona com Arrays e strings. O metodo slice fatia um array/string, em um menor, a partir de um intervalo definido. O primeiro parâmetro do método indica o valor inicial do intervalo, o segundo parâmetro indica o ultimo valor do intervalo, a qual não é considerado no mesmo. Se colocarmos esse ultimo valor como negativo, ele mostrará até o final menos a quantidade definida pelo intervalo. 
# Métodos de remoção
## Pop 
Remove o ultimo elemento do array. Ao ser atribuído a alguma variável o método pop, fica na variável o valor que foi removido.
## Shift
Remove o primeiro elemento do Array. 
## Splice
Remove um elemento especifico de um Array. O Primeiro parâmetro é a posição inicial da remoção e o segundo é a quantidade de elementos que serão removidos. 
# Propriedade Length 
Usado para obter a quantidade de elementos que tem um array. 
```js
let valores = [1, 2, 3, 4, 5]
console.log(valores.length)
// resultado no console: 5.
```
# Metodo sort 
Quando adicionamos elementos em um Array, eles são organizados por ordem de inserção. Ou seja, o primeiro valor adicionado ocupará o índice 0 , o segundo valor estará no índice 1, assim sucessivamente.
Para colocar na ordem alfabética e/ou numérica usa-se o método Sort. Como se vê a seguir:
![[Pasted image 20241012175149.png]]
Primero números depois letras maiúsculas depois minusculas, as letras por sua vez a cada letra na ordem.
# Classe Array
Você pode fazer assim também, para definir um array:
```js
let arr = Array(1, 2, 3, 4, 5)
```

# Método Map 
![[Pasted image 20241012180126.png]]
O método map, recebe como parâmetro uma função, que possui um parâmetro, que vai ser o valor de cada index, que vai ser usada em várias iterações. 