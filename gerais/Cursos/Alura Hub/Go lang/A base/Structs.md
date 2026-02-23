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
# Usando ponteiros para inicializar uma Estrutura
Existe também outra forma de inicializar uma estrutura, que é criando um espaço da memória usando o new. O new ele retorna um ponteiro de um tipo, ou seja ele não retorna os valores, mas sim um local para esses valores, por isso ao definir a variável você deve usar ``*Estrutura``, por exemplo:
```go
var contaDaCris *ContaCorrente
contaDaCris = new(ContaCorrente)

contaDaCris.titular = "Cris"

contaDaCris.saldo = 501

fmt.Println(*contaDaCris)
```
Aqui o new cria um novo espaço na memoria e retorna um ponteiro. Ou seja é necessária que o tipo da variável também seja um ponteiro. E quando queremos acessar o valor da variável e não o ponteiro, devemos colocar o `*` antes. E perceba que se imprimirmos sem o ``*``, ele vai começar com o &. Esse & indica que é um local da memória que possui os valores. 
# Comparando structs 
O GO é inteligente o bastante, para entender que quando o conteúdo de uma struct é igual a de outra. Ou seja quando todos os campos são iguais entre duas variáveis, então `var1 == var2` retorna `true`. Mas lembrando que o ponteiro é diferente, quando você compara o endereço de algo com o endereço de outro, é retornado false, pois são locais diferentes, mesmo sendo com o mesmo conteúdo. Para comparar melhor, coloque um `*`, para pegar o conteúdo.
# Métodos de struct
```go
func (c *ContaCorrente) Sacar(valorDoSaque float64) string {
    podeSacar := valorDoSaque > 0 && valorDoSaque <= c.saldo
    if podeSacar {
        c.saldo -= valorDoSaque
        return "Saque realizado com sucesso"
    }

    return "Saldo insuficiente"
}
```
Permite acessar a função, por meio de uma estrutura como:
```go
tipo.funcao()
```
Uma boa prática é colocar o nome, com a inicial do tipo. 
Além disso perceba que tem um ponteiro, esse ponteiro indica que possamos alterar o valor.]
Perceba o ponteiro, este serve para você poderar alterar os dados da instância. Quando não passado, ele cria um cópia da estrutura, e você não pode altera-la.