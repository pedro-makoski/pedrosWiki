Funções com um ou mais parâmetros. 
Para criar uma variadic function, devemos preceder o tipo do argumento com reticências, conforme o exemplo abaixo:
```go
func Somando(numeros ...int) int {
    resultadoDaSoma := 0
    for _, numero := range numeros {
        resultadoDaSoma += numero
    }
    return resultadoDaSoma
}
```
```go
func main() {
    fmt.Println(Somando(1))
    fmt.Println(Somando(1,1))
    fmt.Println(Somando(1,1,1))
    fmt.Println(Somando(1,1,2,4))
}
```
Note o uso das reticências na declaração do parâmetro número: `numeros ...int`. Portanto, podemos criar uma função sem parâmetro, com um, dois, três, ou uma quantidade indeterminada de parâmetros com Go.
Você pode também passar uma lista como parâmetro assim, por exemplo:
```go
Somando([]int{1, 2, 3, 4, 5}...)
```
Colocando três reticência a frente. 
