```go
func particionar(numeros []int, pivo int) (menores []int, maiores []int) {
    for _, n := range numeros {
        if n <= pivo {
            menores = append(menores, n)
            continue
        }
        maiores = append(maiores, n)
    }

    return
}
```
Em funções pequenas em Go, você pode criar variáveis diretamente lá no retorno, e manipular elas. E depois é só colocar `return`, e ele retornará os valores da variáveis automaticamente. 