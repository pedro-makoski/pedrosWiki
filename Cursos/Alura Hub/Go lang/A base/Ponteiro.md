Para poder alterar valores em uma função, não basta apenas passar a variável, é necessário passar o endereço:
```go
status := contaDoGustavo.Transferir(-100, &contaDoPedro)
```
```go
func (c *ContaCorrente) Transferir(valorDaTransferencia float64, contaDestino *ContaCorrente) bool {
    if valorDaTransferencia <= c.saldo && valorDaTransferencia > 0{
        c.saldo -= valorDaTransferencia
        contaDestino.Depositar(valorDaTransferencia)
        return true
    } 

    return false
}
```
O `*` indica que está sendo pegado o endereço da variável, e você vai usar seu conteúdo não seu endereço, mesmo sendo o parâmetro ser um local da memória. O `&` pega o endereço da memória da variável e passa para a função.