Elas são dispostas entre colchetes, onde estão os múltiplos valores de uma lista. Uma lista pode um Array(tipo mais comum), NodeList(múltiplos elementos).
# Obter elementos específicos de uma lista
Começa do 0 e termina na quantidade de elementos(-1). Você pode colocar entre colchetes após a chamada da lista com o índice do elemento.
```js
lista[0]
```
Retorna o primeiro elemento da lista. 
# Exemplos com querySelectorAll
Ele retorna uma node list, onde você pode obter cada elemento que possui aquele seletor. É só colocar `lista[0]`, por exemplo. E depois usar algo deste elemento por exemplo:
```js
lista[0].innerHTML = "aaaa"
```
