Trata-se de manter os mesmos campos. Sem necessidade de criar múltiplas variáveis para uma mesma entidade.
```go
type ContaCorrente struct {
    titular         string
    numeroAgencia   int
    numeroConta     int
    saldo           float64
}
```
Isso que você acabou de ver é um tipo de estrutura. Indo a fundo, você define que está criando um novo tipo primeiro ao colocar type, e depois do nome do type se passa struct com um conjunto de campos e seus respectivos tipos entre as chaves. Isso é uma estrutura.
Quando você inicia uma estrutura, sem passar nenhum valor:
```go
ContaCorrente{}
```
Os valores todos, serão 0. Ou seja, os valores de números serão 0, a string será "", o booleano será false. 
# Iniciar estruturas
No modo declaração curta:
```go
contaDoPedro := ContaCorrente{

        titular:"Pedro Makoski",

        numeroAgencia: 589,

        numeroConta: 123456,

        saldo: 1700.90,

    }
contaDaBia := ContaCorrente{"Beatriz Makoski", 111, 198, 200}
```
Perceba que o ContaCorrente é um tipo, e posso coloca no lado do var nomeDaVariavel. Assim `var contaDoPedro ContaCorrente`.
E perceba que você pode tanto colocar com o nome do campo:valor do campo, quanto passar na ordem de criação dos campos. 