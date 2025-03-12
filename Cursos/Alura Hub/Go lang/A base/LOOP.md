NO go só existe o loop for. Só que ele pode ser usado de diferentes maneiras, por exemplo:
```go
for {
}
```
É como se fosse um while true. 
```go
for cont < 20 {
}
```
É como se fosse um while cont < 20
```go
for i := 0; i < 20; i++ {

}
```
Esse é o for padrão que já conhecemos(sem parênteses). Que percorre a partir de um valor inicial, condição e incremento. Veja a lógica aqui: [[Loop For]]
E no loop de interação, você pode passar por todos os elementos de um slice/array, usando o range:
```go
for i, v := range slice {
}
```
O i é a posição a qual ele está no slice. E v é o elemento a qual pertence essa posição, definida no i. E assim ele percorre por todos os elementos do slice. 
O range é como se fosse uma função interador, que passa por todos elementos de uma coleção. 
