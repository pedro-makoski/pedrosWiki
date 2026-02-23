Um contrato entre tipos. Pense assim, dois tipos precisam ter uma mesma função, e para que essa funcione é necessário que ela tenha uma função, por exemplo, chamada de:
```go
(c *Conta) Sacar(numero float64) string 
```
E então eu quero que uma função aceite quaisquer tipos, que contenham a função sacar. Para isso, você cria uma interface:
```go
type verificarConta interface {
    Sacar(valor float64) string
}

func PagarBoleto(conta verificarConta, valorDoBoleto float64) {
    conta.Sacar(valorDoBoleto)
}
```
E assim você pode criar uma função que receba como parâmetro um valor que concorde com a interface.

Uma interface é a definição de um conjunto de métodos comuns a um ou mais tipos. É o que permite a criação de tipos polimórficos em Go.
