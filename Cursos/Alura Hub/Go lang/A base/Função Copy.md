Coloca os valores numa lista a partir de outra. A fim de que os valores da outra lista não sejam alterados ao mudar esta.
```go
numerosCopy := make([]int, len(numeros))
copy(numerosCopy, numeros)
```
É criado uma variável ``numerosCopy``, e nesta variável colocamos os valores de ``numeros``. 
# Explicando um código
```go
numerosCopy = append(numerosCopy[:indicePivo], numeros[indicePivo+1:]...)
```
Esse código basicamente removemos o pivô. Sabendo a posição dele, agente adiciona a lista que tem todos os elementos antes do pivô os valores depois do pivô.

Essa operação ... significa que queremos colocar os valores da lista como parâmetros do append. 