# Arrays e slices
Em Go, sem tem os array e os slices. Os arrays tem tamanho fixo, que é passado nos colchetes, por exemplo:
```go
var nomes [4]string
```
Assim se terá um array com quatro strings. E caso você não defina cada valor do array, o valor será 0. Ou seja, se eu tenho uma capacidade de 4 elementos, e não defina nenhum, a quantidade de elementos é 4, e cada elemento é 0. 
Mas se você quiser variar a quantidade de itens você pode usar um slice, que funciona em cima de um array. 
```go
nomes := []string{"nome1", "nome2", "nome3"}
```
Ou seja quando definimos um slice, ele cria um array, por baixo dos panos. E quando você adiciona um elemento através do append:
```go
nomes = append(nomes, "nome4")
```
E assim ao aumentar o slice, o array por baixo dos panos aumenta também. O nome do tamanho do slice, é tamanho(len) e o tamanho do array por baixo dos panos é a capacidade. Sempre quando você extrapola o len do array, o cap dobra.
Para obrer o len:
```go
len(sliceName)
```
E para obter a capacidade:
```go
cap(sliceName)
```
Mas caso enquanto você faça o append, adicionar mais itens que o dobro, ele encaixará com a quantidade. 
Ou seja, len obtem o tamanho do slice, quantos elementos ele possui, e cap a capacidade, quantos espaços o array por baixo dos panos tem. 