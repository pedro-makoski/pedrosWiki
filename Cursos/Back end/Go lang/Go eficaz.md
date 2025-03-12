---
tags:
  - Golang
---
# Go fmt
No terminal insira:
```
go fmt
```
E assim o arquivo go, vai ser formatado, criando alinhamentos e tals.
# Pacotes
Deve estar em apenas letras minúsculas. Deve conter apenas uma palavra. 
# Getters
Para criar uma função getter em go, você deve chama-lo de **owner**.
# Setters 
Para criar uma função setter em go, você deve chama-lo de **SetOwner**.
# Nomes de interface
Se um interface tem **apenas um método** você deve terminar com o sufixo -er. 
# Nomes com mais de uma palavra
Não use sublinhados. Use para exportados MixedCaps ou para não exportados mixedCaps. 
# Ponto e vírgula 
É necessário. Porém pode ser facultativo, na maioria dos casos.
A regra é esta. Se o último token antes de uma nova linha for um identificador (que inclui palavras como `int`e `float64`), um literal básico como um número ou constante de string, ou um dos tokens break continue fallthrough return ++ -- ) }, é inserido automaticamente o ponto e vírgula na hora de compilar. 
Uma consequência das regras de inserção de ponto e vírgula é que você não pode colocar a chave de abertura de uma estrutura de controle ( `if`, `for`, `switch`, ou `select`) na próxima linha. Se você fizer isso, um ponto e vírgula será inserido antes da chave, o que pode causar efeitos indesejados. Escreva-os assim

```go
if i < f() {
	g() 
}
```
E não assim:
```go
if i < f()  // wrong!
{           // wrong!
    g()
}
```
O if não depende de parênteses. E o corpo da consequência do if, deve estar entre chaves. 

Você pode reatribuir o err várias vezes, e isso é legal. 

Em uma `:=`declaração, uma variável `v`pode aparecer mesmo que já tenha sido declarada, desde que:

- esta declaração está no mesmo escopo que a declaração existente de `v` (se `v`já estiver declarada em um escopo externo, a declaração criará uma nova variável §),
- o valor correspondente na inicialização é atribuível a `v`, e
- há pelo menos uma outra variável que é criada pela declaração.
# Uso do `_`
Quando você obtem dos valores de retorno, é você não precisa do primeiro retorno, você pode usar o `_`, como variável inutilizável. E quando você não quer obter o ultimo retorno você pode omiti-lo. 
Por exemplo:
```go
for i := range value {
	//codigo
}
```
Nesse código mesmo range value retornando o i e o value, eu quero apenas o i. E se eu quero apenas o v eu faço assim:
```go
for _, v:= range value {
	//codigo
}
```
# Atribuição paralela no for
Você pode usar a atribuição paralela, para poder trabalhar com mais de uma variável. Você não consegue usar apenas ponto e vírgula:
```go
for i, j := 0, len(a)-1; i < j; i, j = i+1, j-1 {
    a[i], a[j] = a[j], a[i]
}
```
# Switch com mais de uma opção
```go
func shouldEscape(c byte) bool {
    switch c {
    case ' ', '?', '&', '=', '#', '+', '%':
        return true
    }
    return false
}
```
Separe os possíveis valores em vírgula. 
# Parar label
Você pode encerrar uma label usando o comando:
```go
break label
```
# Switch de type
Caso você não saiba o type de certa interface, você pode fazer o seguinte:
```go
var t interface{}
t = functionOfSomeType()
switch t := t.(type) {
default:
    fmt.Printf("unexpected type %T\n", t)     // %T prints whatever type t has//Tipo inesperado
case bool:
    fmt.Printf("boolean %t\n", t)             // t has type bool// É true ou false
case int:
    fmt.Printf("integer %d\n", t)             // t has type int // é inteiro
case *bool:
    fmt.Printf("pointer to boolean %t\n", *t) // t has type *bool//É um ponteiro para uma variável boleana
case *int:
	fmt.Printf("pointer to integer %d\n", *t) // t has type *int//É um ponteiro para uma variável inteira
}
```
# Ordem do defer
O defer tem ordem de LIFO, last in, first out. Também chamado de método [[Tipos de estrutura de dados#Pilha|pilha]]
Diferentemente de C, é perfeitamente OK retornar o endereço de uma variável local; o armazenamento associado à variável sobrevive após o retorno da função.
# Interessante
Pegar o endereço de um literal composto aloca uma nova instância cada vez que ele é avaliado. Ou seja sempre quando faço coisas do tipo:
```go
&People{"Pedro", 15, "10/11/2009"}
```
Ele aloca o valor na memória. Se você não passar os valores do elementos de uma estrutura, os valores ficam definidos como zero. Portanto é equivalente essas duas linhas a seguir:
```go
return new(People)
return &People{}
```
# Arrays 
Existem grandes diferenças entre as maneiras como os arrays funcionam em Go e C. Em Go,

- Arrays são valores. Atribuir um array a outro copia todos os elementos.
- Em particular, se você passar um array para uma função, ela receberá uma _cópia_ do array, não um ponteiro para ele.
- O tamanho de um array é parte de seu tipo. Os tipos `[10]int` e `[20]int`são distintos.
# Slices
Slices mantêm referências a um array subjacente, e se você atribuir um slice a outro, ambos se referem ao mesmo array. Se uma função recebe um argumento slice, as alterações que ela faz nos elementos do slice serão visíveis para o chamador, análogo a passar um ponteiro para o array subjacente. Mesmo que você crie fatias do slice, ao alterar essa parte ele altera também o array original. Para copiar você pode copia = append([]int(nil), original...). 

Todo slice tem um array subjacente, o tamanho máximo desse array se chama capacidade, ao aumentar o valor um valor ele dobra sua capacidade original. Se você adicionar mais que o dobro da capacidade, ele vai fazendo recursivamente.  
# Slices of slices
Às vezes é necessário alocar uma fatia 2D, uma situação que pode surgir ao processar linhas de varredura de pixels, por exemplo. Há duas maneiras de fazer isso. Uma é alocar cada fatia independentemente; a outra é alocar uma única matriz e apontar as fatias individuais para ela. Qual usar depende da sua aplicação. Se as fatias podem aumentar ou diminuir, elas devem ser alocadas independentemente para evitar sobrescrever a próxima linha; caso contrário, pode ser mais eficiente construir o objeto com uma única alocação. Para referência, aqui estão esboços dos dois métodos. Primeiro, uma linha de cada vez:
```go
// Alocar a fatia de nível superior. 
picture := make([][]uint8, YSize) // Uma linha por unidade de y. // Fazer um loop nas linhas, alocando a fatia para cada linha. 
for i := range picture { picture[i] = make([]uint8, XSize) 
}
```
E agora como uma alocação, dividida em linhas:
```go
// Allocate the top-level slice, the same as before.
picture := make([][]uint8, YSize) // One row per unit of y.
// Allocate one large slice to hold all the pixels.
pixels := make([]uint8, XSize*YSize) // Has type []uint8 even though picture is [][]uint8.
// Loop over the rows, slicing each row from the front of the remaining pixels slice.
for i := range picture {
    picture[i], pixels = pixels[:XSize], pixels[XSize:]
}
```
# Função init
Antes do programa executar é executado a função init. 
# Asserção de tipo
Lembra quando vimos no switch, o valor.(type), caso você já saiba o valor que quer obter, e que ele está lá dentro, você pode fazer por exemplo: valor.(string), o nome disso é asserção, e eu obtenho a string, mesmo quando o tipo é derivado. Mas se der algum erro e não existir o tipo dentro da variável, tente verificar com ok, v, ok := value.(string), ok será verdadeiro se tiver uma string e será falso se não tiver e o v será 0.
# Dica para não dar problemas de variáveis não utilizadas, apenas para testes
Use o comando `_ = variavelQueVoceNaoQuerUtilizar` Assim não acontecerá nenhum erro, e você lembrará depois de tirar.
# Importação para efeito colateral
Uma importação não utilizada como `fmt`ou `io`no exemplo anterior deve eventualmente ser usada ou removida: atribuições em branco identificam o código como um trabalho em andamento. Mas às vezes é útil importar um pacote apenas para seus efeitos colaterais, sem nenhum uso explícito. Por exemplo, durante sua `init`função, o [net/http/pprof](https://go.dev/pkg/net/http/pprof/)pacote registra manipuladores HTTP que fornecem informações de depuração. Ele tem uma API exportada, mas a maioria dos clientes precisa apenas do registro do manipulador e acessa os dados por meio de uma página da web. Para importar o pacote apenas para seus efeitos colaterais, renomeie o pacote para o identificador em branco:
```go
import _ "net/http/pprof"
```

