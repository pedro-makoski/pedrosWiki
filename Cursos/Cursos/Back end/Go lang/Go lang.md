---
tags:
  - Golang
---
Cada programa Go é composto de pacotes.

Programas começam rodando pelo pacote `main`.

Este programa está usando os pacotes com caminhos de importação `"fmt"` e `"math/rand"`.

Por convenção, o nome do pacote é o mesmo que o último elemento do caminho de importação. Por exemplo, o pacote `"math/rand"` compreende arquivos que começam com `package rand`.

As funções exportadas em Go precisam começar com letra maiúscula, caso contrário não poderão ser acessadas fora do arquivo. 
# Função em Go
Elas podem ter 0 ou mais argumentos, e 0 ou mais retornos:
```go
package main//vai ser o pacote que será executado, ao usuar o comando go run .

import "fmt"

func diference(x int, y int) (int, string) {// o tipo vai após o nome da variável
	return x-y, "Banana";
} 

func main() {//É a primeira função a ser executada
	value, text := diference(10, 5)
	fmt.Println(diference(10, 5))//Mostra 5
	fmt.Println(text)// mostra Banana
}
```
Como x e y compartilham o mesmo tipo, eles podem ser descritos assim:
```go
func diference(x, y int) (int, string) {// o tipo vai após o nome da variável
	return x-y, "Banana"
} 
```
Assim tanto x quanto y serão do tipo int, e você digitou três char a menos.
Quando a função é curta você pode usar o chamado retorno limpo. Onde você já define a variável de retorno lá em cima, e manipula no código normalmente, e o return fica sozinho. 
```go
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
```
A instrução `var` declara uma lista de variáveis, como em listas de argumentos de função, o tipo é o último passado.
# Variáveis
A declaração `var` pode estar num pacote ou a nível de função.
```go
var i int
var bananaIsGood, appleIsGood, googleIsGood bool
```
A declaração var pode incluir inicializadores, uma por variável.

Se um inicializador está presente, o tipo pode ser omitido; a variável terá o tipo do inicializador.
```go
var i, j int = 5, 6
//ou
var k, l = 5, 7
```
Dentro de uma função a instrução de atribuição curta `:=` pode ser utilizada em lugar de uma declaração `var` com o tipo implícito.

Fora de uma função cada estrutura começa com uma palavra-chave (`var`, `func`, e assim por diante) e não é possível usar o `:=`.
```go
i := 5; 
```
## Tipos
```
bool // chave lógica

string // texto

int /*Int deve ser usado em casos quando você não tem o tamanho especificado*/ int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr // uint significa inteiro sem sinal, uintptr representa o endereço da memória de um objeto. 

byte // pseudônimo para uint8

rune // pseudônimo para int32
     // representa um ponto de código Unicode

float32 float64

complex64 complex128 // Valores com parte real grande e que podem ter uma parte imaginária(i que é raiz quadrada de -1, por exemplo). 
```
Quando o valor não é inicializado, se começa com 0, que pode ser representada como:
- `0` para tipos numéricos,
- `false` para tipos boleanos, e
- `""` (string vazia) para strings.
### Converter tipos
O tipo que você quer(vamos chamar de t) e o valor que você tem:
```go
var i int = 0; 
var iNew float32 = float32(i);// var  iNew t = t(i)
```
## Constantes
Constantes são declaradas como variáveis, mas com a palavra-chave `const`.
```go
const name = "My name"
const (
	number = 10 
	isWell = false 
)
```

Constantes podem ser seqüências de caracteres, booleanos, ou valores numéricos.

Constantes não podem ser declaradas usando a sintaxe `:=`.
# Operações
value << value2, adiciona value2 0s na frente do value. Por exemplo, 1 << 2, adiciona 2 0s na frente do valor binário do 1, ou seja o resultado seria 100, que seria 4. 
value >> value2, move value2 casas, o value1. 
^ - potência. 
# Formatar string
%T - informa o tipo da variável. 
# Loop for
Go tem apenas uma estrutura de laço, o `for`.

O laço `for` básico tem três componentes separados por ponto e vírgula:

- a instrução inicial: executada antes da primeira iteração
- a expressão de condição: avaliada antes de cada iteração
- a pós-instrução: executado no final de cada iteração

A instrução inicial será freqüentemente uma declaração de variável curta, e variáveis declaradas são visíveis apenas no escopo da declaração do `for`.

O loop irá parar de iterar quando a condição booleana for avaliada como 'false'.

_Nota_: Ao contrário de outras linguagens como C, Java ou JavaScript, não há parênteses rodeando os três componentes da declaração `for` e as chaves `{ }` 
são sempre necessárias.
```go
sum := 0
for i := 0; i < 1000; i++ {
	sum += i
}
```
A instrução inicial e a pós-instrução são opcionais.
```go
sum := 1
for ; sum < 1000; {
	sum += sum
}
// ou 
sum = 1
for sum < 1000 {
	sum += sum
}
```
Nesse ponto, você pode tirar as vírgulas: o `while` do C é escrito com `for` em Go.
Para fazer um loop infinito você pode:
```go
for {
}
```
E isso é bem simples.
# Condição
A declaração `if` parece com os laços `for`; a expressão não precisa ser cercada de `( )` mas os chaves `{ }` são obrigatórios.
```go
if 10 < 5 {
	fmt.Println("wtf, how it happened?")
}
```
Como o `for`, a instrução `if` pode começar com uma breve declaração antes de executar a condição.

Variáveis ​​declaradas pela instrução são válidas somente no escopo até o final do `if`.

(Tente usar `v` na última instrução `return`.)
```go
if v := math.Pow(x, n); v < lim {
		return v
}
```
O v também fica disponível dentro do escopo do else:
```go
if v := math.Pow(x, n); v < lim {
		return v
} else {
	return v-5
}
```
## Switch
Uma instrução `switch` é uma forma mais curta de escrever uma sequência de declarações `if - else`. Ele executa o primeiro caso cujo valor é igual à expressão de condição.

O switch do Go é como o do C, C ++, Java, JavaScript e PHP, exceto que o Go apenas executa o caso selecionado, não todos os casos que seguem. De fato, a declaração `break` que é necessária no final de cada caso naquelas linguagens é fornecido automaticamente no Go. Outra diferença importante é que os cases dos switchs do Go não precisam ser constantes, e os valores envolvidos não precisam ser inteiros.
```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```
Switch cases avaliam casos de cima para baixo, parando quando um caso for bem-sucedido.
Outro exemplo:
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("When's Saturday?")
	today := time.Now().Weekday()
	switch time.Saturday {
	case today + 0:
		fmt.Println("Today.")
	case today + 1:
		fmt.Println("Tomorrow.")
	case today + 2:
		fmt.Println("In two days.")
	default:
		fmt.Println("Too far away.")
	}
}
```
Switch sem uma condição é o mesmo que `switch true`.

Essa estrutura pode ser uma maneira limpa para escrever longas cadeias if-then-else.
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}
```
# Defer 
A declaração defer adia a execução de uma função até o final do retorno da função.

Os argumentos das chamadas adiadas são avaliados imediatamente, mas a função chamada não é executada até o retorno da função.
```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```
Resultado:
Hello
World
As chamadas defer são colocadas em pilha, onde a ultima a entra é a primeira a sair. 
# Ponteiros
Go tem ponteiros. Um ponteiro guarda na memória o endereço de uma variável.
O tipo `*T` é um ponteiro para um valor `T`. Seu valor zero é `nil`.

```go
var p *int

i := 42
p = &i
```
O operador `&` gera um ponteiro para seu operando. Colocando o endereço da memoria. 
O operador `*` indica valor subjacente do ponteiro.

```go
fmt.Println(*p) // lê i através do ponteiro p
*p = 21         // defina i através do ponteiro p
```
Isto é conhecido como "desreferenciamento" ou "indirecionamento". Diferente de C, Go não faz aritimética de ponteiros.
# Structs
É uma coleção de campos.
```go
type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})
}
```
Campos Struct são acessados ​​através de um ponto.
```go
func main() {
	v := Vertex{1, 2}
	v.X = 4//variável.campo
	fmt.Println(v.X)
}
```
Para acessar o campo `X` de uma struct quando tivermos o ponteiro `p` da struct podemos escrever `(*p).X`. No entanto, essa notação é incômoda, então a linguagem nos permite escrever apenas `p.X`, sem a referência explícita:
```go
func main() {
	v := Vertex{1, 2}
	p := &v
	p.X = 1e9
	fmt.Println(v)
}
```
## Structs literais
A struct literal indica um valor struct recém-alocado, ao enumerar os valores de seus campos.

Você pode listar apenas um subconjunto de campos usando o `Name:` sintaxe. (E a ordem dos campos nomeados é irrelevante.)

O prefixo especial `&` constrói um ponteiro para uma struct literal.
```go
type Vertex struct {
	X, Y int
}


var (
	v1 = Vertex{1, 2}  // has type Vertex
	v2 = Vertex{X: 1}  // Y:0 is implicit
	v3 = Vertex{}      // X:0 and Y:0
	p  = &Vertex{1, 2} // has type *Vertex
)

func main() {
	fmt.Println(v1, p, v2, v3)
}
```
# Matrizes
O tipo `[n]T` é uma matriz de `n` valor do tipo `T`.
O tamanho da matriz é parte de seu tipo, logo, matrizes não podem ser redimensionadas. Isso parece uma limitação, mas não se preocupe; Go dispõe de uma maneira conveniente para trabalhar com matrizes.

Por exemplo:
```go
var a [10]int
b := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```
# Slices
Uma matriz tem um tamanho fixo. Uma slice, por outro lado, é dinamicamente redimensionada, uma visão flexível dos elementos de uma matriz. Na prática, as slices são muito mais comuns do que as matrizes.
```go
var slice []int
```
Uma slice é formada pela especificação de dois indices, um limite menor e maior, separados por dois pontos:
```go
a[low : high]
```
Este código acima seleciona os valores do slice a partir do valor low, e vai até um antes do high, por exemplo: ``a[1:4]`` seleciona os valores de 1 a 3. 
Se eu atribuir os valores de uma slice/matriz para uma variável, ao eu alterar essa variável eu vou alterar o valor raiz, que eu atribui a variável.
Uma slice literal é como um array literal, sem o comprimento.

Esta é uma matriz literal:
``[3]bool{true, true, false}``

E isso cria a mesma matriz como acima, em seguida, constrói uma slice que faz referência a ela:
``[]bool{true, true, false}``

Ao "fatiar", você pode omitir as posições de limite altas ou baixas para usar seus padrões em seu lugar.

O padrão é igual a zero para o limite baixo e o comprimento da slice para o limite alto.
```go
var a [10]int
a[0:10]//mostra tudo
a[:10]//mostra tudo 
a[0:]//mostra tudo
a[:]//mostra tudo
```
- Comprimento de uma slice é o número de elementos que ela tem, e é pode ser obtida através da função len(slice).
- Capacidade: é o número de elementos da matriz original/subjacente, e pode ser obtido através de cap(slice).
Você pode estender o comprimento de uma slice "refatiando-a", desde que tenha capacidade suficiente. Ou seja se você altera um slice, e fatia-o nessa alteração, e depois queira obter uma parte fora dessa fatia, ele vai obter a capacidade original. 
O valor zero de uma slice é `nil`.

Uma slice nula tem o comprimento e a capacidade igual 0.
## Make
As slices podem ser criadas com a função make. Com ela você pode criar matrizes dinamicamente.

A função `make` aloca uma matriz zerada e retorna uma slice que se refere a essa matriz:

```go
a := make([]int, 5)  // len(a)=5
```
Para especificar a capacidade, passe o terceiro argumento no `make`:
```go
b := make([]int, 0, 5) // len(b)=0, cap(b)=5

b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4
```
As slices podem conter qualquer tipo, incluindo outras slices. 
```go
board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
}
```
## Append
Adicionar valores à lista. O primeiro parâmetro `s` do `append` é uma slice do tipo `T`, e o resto são valores de `T` para acrescentar na slice.
Se a matriz anterior de `s` for muito pequena para caber todos os valores uma matriz gigante será alocada. A slice retornada apontará para a nova matriz alocada.
## Range
O `range` do laço `for` itera sobre uma slice ou map.

Ao variar sobre uma slice, dois valores são retornados para cada iteração. O primeiro é o índice, o segundo uma cópia do elemento daquele índice.
```go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}
```
Você pode ignorar o índice ou valor, atribuindo o `_`.

Se você só quiser o índice, deixe inteiramente sem o ", value".
```go
func main() {
	pow := make([]int, 10)
	for i := range pow {
		pow[i] = 1 << uint(i) // == 2**i
	}
	for _, value := range pow {
		fmt.Printf("%d\n", value)
	}
}
```
# Map
Um mapa associa chaves a valores.

O valor zero de um mapa é `nil`. Um `nil`mapa não tem chaves, nem chaves podem ser adicionadas.

O tipo de chave não deve ser uma função, mapa ou fatia.

A `make`função retorna um mapa do tipo fornecido, inicializado e pronto para uso.
```go
type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex//Perceba o padrão map[tipo da chave]tipo do valor

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
}

```
A forma literal é:
```go
var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}
```
Se o tipo de nível superior for apenas um nome de tipo, você poderá omiti-lo dos elementos do literal. Então o código acima pode ser assim:
```go
var m = map[string]Vertex{
	"Bell Labs":  {40.68433, -74.39967},
	"Google": {7.42202, -122.08408},
}
```
**Inserir** ou mudar elemento de um mapa:
```go
m[key]=value
```
Obter um elemento de um mapa:
```go
elem = m[key]
//pode retornar dois valores também:
valor, estaPresente := m[key]
//esta presente vai ser true se o elemento existir e falso se não exisitir. 
```
Você pode verificar também da seguinte forma:
```go
if compareceu[pessoa] { // será falso se a pessoa não estiver no mapa 
	fmt.Println(pessoa, "estava na reunião") 
}
```
Deletar um elemento
```go
delete(m, key)//Deleta o elemento em especifico 
clear(m)//Deleta todos os elementos
```
Se a chave não existir, o valor correspondente a essa chava vai ser 0. 
Você pode usar a função make, para definir o mapa:
```go
v := make(map[byte]int)
```
Caso queira limitar a quantidade de chave/valor, você pode passar a quantidade no segundo parâmetro:
```go
v := make(map[byte]int, 100)//cria um mapa com 100 chave/valor. 
```
Você obter a quantidade de elementos criados num mapa, usando a função len. 
# Funções como retorno e parâmetro
Funções também são valores. Elas podem ser passadas adiante assim como outros valores.

Valores de função podem ser usados ​​como argumentos de função e valores de retorno.
```go
func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}

```
# Closures
Funções Go podem ser closures. Um closure é um valor de função que referencia variáveis ​​de fora do seu corpo. A função pode acessar e atribuir às variáveis ​​referenciadas; nesse sentido, a função é "vinculada" às variáveis.
```go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}
```
Go não tem classes. No entanto, você pode definir métodos em tipos.

Um método é uma função com um argumento _receptor_ especial .

O receptor aparece em sua própria lista de argumentos entre a `func`palavra-chave e o nome do método.

Neste exemplo, o `Abs`método tem um receptor do tipo `Vertex`chamado `v`.
```go
type Vertex struct {
	X, Y float64
}

func (v Vertex) Hipotenusa() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(Hipotenusa(v))
}
```
Lembre-se: um método é apenas uma função com um argumento receptor.
Você também pode declarar um método em tipos não-struct.

Neste exemplo, vemos um tipo numérico `MyFloat`com um `Abs`método.

Você só pode declarar um método com um receptor cujo tipo é definido no mesmo pacote que o método. Você não pode declarar um método com um receptor cujo tipo é definido em outro pacote (que inclui os tipos internos como `int`).
```go
package main

import (
	"fmt"
	"math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
}
```
## Receptores de ponteiro
Você pode declarar métodos com receptores de ponteiros.

Isso significa que o tipo do receptor tem a sintaxe literal `*T`para algum tipo `T`. (Além disso, `T`ele próprio não pode ser um ponteiro como `*int`.)

Por exemplo, o `Scale`método aqui é definido em `*Vertex`.

**Métodos com receptores de ponteiro podem *modificar* o valor para o qual o receptor aponta (como `Scale`aqui). Como os métodos geralmente precisam modificar seu receptor, receptores de ponteiro são mais comuns do que receptores de valor.**
```go
func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}
```
# Funções com passagem por referência
```go
func Scale(v *Vertex/*Obtem o endereço do valor para poder manipula-lo*/, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	Scale(&v, 10)// manda o endreço
	fmt.Println(Abs(v))
}
```
Comparando os dois programas anteriores, você pode notar que funções com um argumento de ponteiro devem receber um ponteiro:
```go
var v Vertex ScaleFunc(v, 5) // Erro de compilação! 
ScaleFunc(&v, 5) // OK
```
enquanto métodos com receptores de ponteiro recebem um valor ou um ponteiro como receptor quando são chamados:
```go
var v Vertex v.Scale(5) // OK p := &v 
p.Scale(10) // OK
```
Para a declaração `v.Scale(5)`, mesmo que `v`seja um valor e não um ponteiro, o método com o receptor de ponteiro é chamado automaticamente. Ou seja, por conveniência, Go interpreta a declaração `v.Scale(5)`como `(&v).Scale(5)`já que o `Scale`método tem um receptor de ponteiro.
O mesmo acontece na direção inversa.

Funções que aceitam um argumento de valor devem aceitar um valor desse tipo específico:
```go
var v Vertex fmt.Println(AbsFunc(v)) // OK 
fmt.Println(AbsFunc(&v)) // Erro de compilação!
```
enquanto métodos com receptores de valor recebem um valor ou um ponteiro como receptor quando são chamados:
```go
var v Vértice fmt.Println(v.Abs()) // OK p := &v 
fmt.Println(p.Abs()) // OK
```
Neste caso, a chamada do método `p.Abs()`é interpretada como `(*p).Abs()`.
Há dois motivos para usar um receptor de ponteiro.

A primeira é para que o método possa modificar o valor que seu receptor aponta.

A segunda é evitar copiar o valor em cada chamada de método. Isso pode ser mais eficiente se o receptor for uma struct grande, por exemplo.
# Interfaces
Um _tipo de interface_ é definido como um conjunto de assinaturas de métodos.

Um valor do tipo interface pode conter qualquer valor que implemente esses métodos.
```go
package main

import (
	"fmt"
	"math"
)

type Abser interface {
	Abs() float64
}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f  // a MyFloat implements Abser
	a = &v // a *Vertex implements Abser

	// se você colocar a = v, ele dá problema pois o tipo abser espera o &vertex não apenas vertex

	fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

```
Um tipo implementa uma interface implementando seus métodos. Não há declaração explícita de intenção, nem palavra-chave "implements".

Interfaces implícitas separam a definição de uma interface de sua implementação, que pode então aparecer em qualquer pacote sem pré-arranjo.
```go
package main

import "fmt"

type I interface {
	M()// não tem retorno portanto não precisa de nada ao lado
}

type T struct {
	S string
}

// Este método significa que o tipo T implementa a interface I
// mas não precisamos declarar explicitamente que isso acontece.
func (t T) M() {
	fmt.Println(t.S)
}
```
Uma interface sempre tem um valor concreto e um tipo. 
Um valor de interface nulo não contém valor nem tipo concreto.

Chamar um método em uma interface nula é um erro de tempo de execução porque não há nenhum tipo dentro da tupla da interface para indicar qual método _concreto_ chamar.

O tipo de interface que especifica zero métodos é conhecido como _interface vazia_ :

interface{}

Uma interface vazia pode conter valores de qualquer tipo. (Cada tipo implementa pelo menos zero métodos.)

Interfaces vazias são usadas por código que manipula valores de tipo desconhecido. Por exemplo, `fmt.Print`recebe qualquer número de argumentos do tipo `interface{}`.
```go
package main

import "fmt"

func main() {
	var i interface{}
	describe(i)

	i = 42
	describe(i)

	i = "hello"
	describe(i)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```
Isso que agente acabou de ver são **interfaces basicas**. Também temos as incorporadas onde agente coloca outras interfaces dentro dessa interface.
```go
type Reader interface {
	Read(p []byte) (n int, err error)
	Close() error
}

type Writer interface {
	Write(p []byte) (n int, err error)
	Close() error
}

// ReadWriter's methods are Read, Write, and Close.
type ReadWriter interface {
	Reader  // includes methods of Reader in ReadWriter's method set
	Writer  // includes methods of Writer in ReadWriter's method set
}
```

Interfaces gerais, você pode criar interfaces para restringir tipos, e você pode informar um tipo dentro da interface, assim ao colocar numa generic ela se registrira aquele tipo:
```go
type inteiro interface {
	int
}

func show[T Numero](value T) T{
	return value
}
```
E você pode também fazer a união de vários possíveis tipos, se você não colocar nenhum tipo fica inferido que pode ser qualquer tipo, mesma coisa que any. 
```go
type numero interface {
	int | float32 | float64
}

func show[T Numero](value T) T{
	return value
}
```
O codigo acima permite valores tanto do tipo int, quanto do tipo float32 e float64. E se você quiser que valores derivados do tipo possam funcionar também insira um ~ antes do tipo:
```go
type numero interface {
	~int | ~float32 | ~float64
}

type inteiro int

func show[T Numero](value T) T{
	return value
}

func main() {
	show[inteiro]()//Não funcionaria se não tivesse um ~ lá em cima.
}
```
Isso que fizemos agora se chamam constraints, veja alguns exemplos, e se pode ser usado:
```go
type argument      type constraint                // constraint satisfaction

int                interface{ ~int }              // satisfied: int implements interface{ ~int }
string             comparable                     // satisfied: string implements comparable (string is strictly comparable)
[]byte             comparable                     // not satisfied: slices are not comparable
any                interface{ comparable; int }   // not satisfied: any does not implement interface{ int }
any                comparable                     // satisfied: any is comparable and implements the basic interface any
struct{f any}      comparable                     // satisfied: struct{f any} is comparable and implements the basic interface any
any                interface{ comparable; m() }   // not satisfied: any does not implement the basic interface interface{ m() }
interface{ m() }   interface{ comparable; m() }   // satisfied: interface{ m() } is comparable and implements the basic interface interface{ m() }
```


Interfaces que não são [básicas](https://go.dev/ref/spec#Basic_interfaces) podem ser usadas apenas como restrições de tipo, ou como elementos de outras interfaces usadas como restrições. Elas não podem ser os tipos de valores ou variáveis, ou componentes de outros tipos não-interface.
Um tipo de interface `T`não pode incorporar um elemento de tipo que seja, contenha ou incorpore `T`, direta ou indiretamente.

```go
// illegal: Bad may not embed itself
type Bad interface {
	Bad
}

// illegal: Bad1 may not embed itself using Bad2
type Bad1 interface {
	Bad2
}
type Bad2 interface {
	Bad1
}

// illegal: Bad3 may not embed a union containing Bad3
type Bad3 interface {
	~int | ~string | Bad3
}

// illegal: Bad4 may not embed an array containing Bad4 as element type
type Bad4 interface {
	[10]Bad4
}
```

## Type assertion 
A _type assertion_ fornece acesso ao valor concreto subjacente de um valor de interface.

``t := i.(T)``

Esta declaração afirma que o valor de interface `i` detém o tipo concreto `T` e atribui o valor de `T` subjacente à variável `t`.

Se `i` não detém uma `T`, a declaração irá desencadear um erro pânico.

Para _testar_ se um valor de interface possui um tipo específico, uma _type_ assertion_ pode retornar dois valores: o valor subjacente e um valor booleano que informa se a afirmação é correta.

``t, ok := i.(T)``

Se `i` detém `T`, então `t` será o valor subjacente e `ok` será _true_.

Se não, `ok` será falso e `t` será o valor zero do tipo `T`, e sem ocorrer erro pânico.

Note a semelhança entre esta sintaxe e da leitura de um map.
### Type stwitches 
```go
func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}
```
## Exercício 
```go
package main

import (
	"fmt"
)

type ErrNegativeSqrt float64

func Sqrt(x float64) (float64, error) {
	if x < 0 {
		p := ErrNegativeSqrt(x)
		return 0, &p
	}

	z := x/2
	zBefore := x
	dif := zBefore-z
	
	for dif>0.000000000000001 {
		zBefore = z
		z-=(z*z-x)/(2*z)
		dif = zBefore-z
		if dif < 0 {
			dif*=-1
		}
	}
	
	return z, nil
}

func (e ErrNegativeSqrt) Error() string {
	return fmt.Sprintf("cannot Sqrt negative number: %v", float64(e))
}

func main() {
	fmt.Println(Sqrt(10))
	fmt.Println(Sqrt(-10))
}
```
```go
package main

import "golang.org/x/tour/reader"

type MyReader struct{}

// TODO: Add a Read([]byte) (int, error) method to MyReader.

func (r MyReader) Read(p []byte) (int, error) {
	cont:= 0
	
	for i, _ := range p {
		p[i]='A'
		cont++
	}
	return cont, nil
}

func main() {
	reader.Validate(MyReader{})
}
```
```go
package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

var alfabeto = []byte{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
var ALFABETO = []byte{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'}
const (
	valorMeio = 12//Comeca com 0
	valorTotal = 25
)

func find(list []byte, value byte) int{
	for i, v := range list {
		if(v == value) {
			return i
		}
	}
	
	return -1
}

func (rot13 rot13Reader) Read(b []byte) (int, error) {
	n, err := rot13.r.Read(b)

	for i, v := range b {
		pos := find(alfabeto, v)
		if(pos != -1) {
			if(pos <= valorMeio) {
				b[i] = alfabeto[valorMeio+pos+1]
				continue
			}
		
			b[i] = alfabeto[pos-valorMeio-1]
			continue 
		}
		
		pos = find(ALFABETO, v)
		if(pos != -1) {
			if(pos <= valorMeio) {
				b[i] = alfabeto[valorMeio+pos+1]
				continue
			}
		
			b[i] = alfabeto[pos-valorMeio-1]
			continue 
		}
	}
	
	return n, err
}

func main() {
	s := strings.NewReader("URYYB")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
```
```go
package main

import (
	"golang.org/x/tour/pic"
	"image"
	"image/color"
)

func (img Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, 100, 100)
}

func (img Image) ColorModel() color.Model {
	return color.RGBAModel 
}

func (img Image) At(x, y int) color.Color {
	valor := uint8(x^y)
	return color.RGBA{valor, valor,255, 255}
}


type Image struct{
	Width, Height int
}

func main() {
	m := Image{50, 50}
	pic.ShowImage(m)
}

```
# Generics
## Parâmetros de tipo - funções genéricas
As funções Go podem ser escritas para funcionar em vários tipos usando parâmetros de tipo. Os parâmetros de tipo de uma função aparecem entre colchetes, antes dos argumentos da função.

func Index[T comparable](s []T, x T) int

Esta declaração significa que `s` é um slice de qualquer tipo `T` que cumpre o restrição interna `comparable`. `x` também é um valor do mesmo tipo.

`comparable` é uma restrição útil que torna possível usar os operadores == e != em valores do tipo, ela pode ser usada quando se trata de uma chave de mapa. Neste exemplo, usamos para comparar um valor para todos os elementos da slice até que uma correspondência seja encontrada. Esta função `Index` funciona para qualquer tipo que suporte comparação.
```go
func Index[T comparable](s []T, x T) int {
	for i, v := range s {
		// v and x are type T, which has the comparable
		// constraint, so we can use == here.
		if v == x {
			return i
		}
	}
	return -1
}

func main() {
	// Index works on a slice of ints
	si := []int{10, 20, 15, -10}
	fmt.Println(Index(si, 15))

	// Index also works on a slice of strings
	ss := []string{"foo", "bar", "baz"}
	fmt.Println(Index(ss, "hello"))
}
```
Você pode criar restrições de tipo, a partir de tipos de nossa preferência, assim deve ficar os colchetes: `[V float64 | int64]` - indica que pode ser tanto um valor float64 quanto um int64, caso você queira que também inclua os valores derivados de float64 e int64, você pode: `[V ~float64 | ~int64]`, adicionando o ~ para realizar. 
Você pode criar uma interface e simplificar o código de restrição, podendo utiliza-lo em vários outros códigos, por exemplo:
```go
type Number interface {
	int64 | float64 
}
```
Dai você pode restringir em colchetes `[V Number]` substituindo pela interface. 
O que acabamos de fazer é criar uma constraint. 
## Omissão de genéricos
Ao chamar uma função genérica, em alguns casos, quando os tipos genéricos são todos definidos nos parâmetros, o compilador consegue inferir os tipos, e você pode omitir os colchetes onde estão os tipos do genérico. 
## Tipos genéricos 
Além das funções genéricas, Go também oferece suporte a tipos genéricos. Um tipo pode ser parametrizado com um parâmetro de tipo, que pode ser útil para implementar estruturas de dados genéricas.
```go
package main

import "fmt"
// List represents a singly-linked list that holds
// values of any type.
type List[T any] struct {
	next *List[T]
	val  T
}

func (lista *List[T]) Add(value T) {
	current := lista 
	for current.next != nil {
		current = current.next
	}

	current.next = &List[T]{
		next: nil,
		val:value,
	}
}

func (lista List[T]) Imprimir() {
	current := lista
	for current.next != nil {
		fmt.Println(current.val)
		current = *current.next
	}
	
	fmt.Println(current.val)
}

func main() {
	valores := List[int]{
		next:nil,
		val:0,
	}
	
	valores.Add(1)
	valores.Add(2)
	valores.Add(3)
	
	valores.Imprimir()
}
```
# Go routine 
Uma _goroutine_ é um segmento leve e gerenciado pelo runtime de Go.

Goroutines executam no mesmo espaço de endereço, para que o acesso à memória compartilhada seja sincronizada. O pacote [`sync`](http://golang.org/pkg/sync/) fornece as primitivas úteis, embora você não vá precisar muito deles em Go, pois há outras primitivas. (Veja o próximo slide).

Em outras palavras quando você insere o comando go antes de um argumento, o resto do código é executado, enquanto o comando go é executado de forma separada e paralela.
# Canais
Canais são um conduto tipado através do qual você pode enviar e receber valores com o operador de canal, `<-`.
```go
ch <- v    // v envia para o canal ch.
v := <-ch  // Recebe do ch, e atribui o valor de v.
```
(Os dados fluem na direção da seta.)
Como maps e slices, os canais devem ser criados antes de se usar:
```go
ch := make(chan int)
```
```go
package main

import "fmt"

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y)
}
```
Por padrão, enviam e recebem bloco até o outro lado estar pronto. Isso permite que goroutines sincronizem sem bloqueios explícitos ou variáveis ​​de condição.

Os canais agem como filas first-in-first-out. Por exemplo, se uma goroutine envia valores em um canal e uma segunda goroutine os recebe, os valores são recebidos na ordem em que foram enviados.
## Canais bufferizados
Os canais podem ser _bufferizados_. Fornecendo o tamanho do buffer como o segundo argumento para `make` para inicializar um canal bufferizado:
```go
ch := make(chan int, 2)
```
Você pode preencher o ch apenas duas vezes. Se você fazer assim:
```go
func main() {
	ch := make(chan int, 2)
	ch <- 1
	ch <- 2
	ch <- 3
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
```
Irá dar erro. 
Para resolver mude de 2 para três:
```go
func main() {
	ch := make(chan int, 3)
	ch <- 1
	ch <- 2
	ch <- 3
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
```
Um remetente pode `close` um canal para indicar que os valores não serão mais enviados. Receptores podem testar se um canal foi fechado através da atribuição de um segundo parâmetro para a expressão de recepção: depois

```go
v, ok := <-ch
```

`ok` é `false` se não há mais valores a receber e o canal está fechado.

O laço `for i := range c` recebe valores do canal repetidamente até que seja fechado.

**Nota:** Apenas o remetente deve fechar um canal, nunca o receptor. O envio em um canal fechado irá causar um pânico.

**Outra nota**: Canais não são como arquivos, você geralmente não precisa fechá-los. O encerramento só é necessário quando o receptor precisa saber que não há mais valores chegando, como para terminar um laço `range`.
```go
package main

import (
	"fmt"
)

func fibonacci(n int, c chan int) {
	x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}

func main() {
	c := make(chan int, 10)
	go fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i)
	}
}
```
## Select
A instrução `select` permite uma espera na goroutine sobre as operações de comunicação múltiplas.

O bloco `select` aguarda até que um de seus cases possam executar, então ele executa esse case. Ele escolhe um ao acaso se vários estiverem prontos.
```go
package main

import "fmt"

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x://Caso o valor c possua um valor e esteja pronta o comando é executado
			x, y = y, x+y
		case <-quit://Caso o comando quit exista e esteja pronto, ele executa. 
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```
### Default
O case `default` em um `select` é executado se nenhum outro caso está pronto.

Utilize um case `default` para tentar um enviar ou receber sem bloqueio:
```go
select {
case i := <-c:
    // use i
default:
    // recebendo c bloquearia
}
```
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(100 * time.Millisecond)
	boom := time.After(500 * time.Millisecond)
	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("BOOM!")
			return
		default:
			fmt.Println("    .")
			time.Sleep(50 * time.Millisecond)
		}
	}
}
```
```go
package main

import (
	"golang.org/x/tour/tree"
	"fmt"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
/*type Tree struct {
    Left  *Tree
    Value int
    Right *Tree
}*/
func Walk(t *tree.Tree, ch chan int) {
	var actualTree = t
	
	if actualTree != nil {
		if t.Left != nil {
			Walk(actualTree.Left, ch)
		}
			
		ch <- t.Value
		
		if t.Right != nil {
			Walk(actualTree.Right, ch)
		}
	}
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int, 10)
	ch2 := make(chan int, 10)
	Walk(t1, ch1)
	close(ch1)
	Walk(t2, ch2)
	close(ch2)
	
	for i := 0; i < 10; i++ {
		fmt.Println(<-ch1, <-ch2)
		if <-ch1 != <-ch2 {
			return false
		}
	} 
	
	return true
}

func main() {
	ch := make(chan int, 10)
	go func(){
		Walk(tree.New(1), ch)
		close(ch)
	}()
	fmt.Println(Same(tree.New(10), tree.New(10)))
}
```
```go
package main

import (
	"golang.org/x/tour/tree"
	"fmt"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
/*type Tree struct {
    Left  *Tree
    Value int
    Right *Tree
}*/
func Walk(t *tree.Tree, ch chan int) {
	var actualTree = t
	
	if actualTree != nil {
		if t.Left != nil {
			Walk(actualTree.Left, ch)
		}
			
		ch <- t.Value
		
		if t.Right != nil {
			Walk(actualTree.Right, ch)
		}
	}
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int, 10)
	ch2 := make(chan int, 10)
	go Walk(t1, ch1)
	go Walk(t2, ch2)
	
	for i := 0; i < 10; i++ {
		if <-ch1 != <-ch2 {//O loop fica travado esperando até que a go routine execute e atribua o valor ao canal
			return false
		}
	} 
	
	return true
}

func main() {
	ch := make(chan int, 10)
	go func(){
		Walk(tree.New(1), ch)
		close(ch)
	}()
	fmt.Println(Same(tree.New(2), tree.New(1)))
}
```
O comando:
```go
<-ch
```
Faz com que ele espere a existência desse canal. 
## sync.Mutex
Temos visto como os canais são bons para a comunicação entre goroutines.

Mas e se nós não precisássemos de comunicação? E se nós apenas quiséssemos ter certeza que uma única goroutine pode acessar uma variável de cada vez para evitar conflitos?

Este conceito é chamado _exclusão mútua_, e o nome convencional para a estrutura de dados que a fornece é _mutex_.

A biblioteca padrão do Go que fornece exclusão mútua com [`sync.Mutex`](https://golang.org/pkg/sync/#Mutex) e seus dois métodos:

- `Lock`
- `Unlock`

Podemos definir um bloco de código a ser executado em exclusão mútua pelo que o rodeia com uma chamada para `Lock` e `Unlock` como mostrado no método `Inc`.

Nós também podemos usar `defer` para garantir que o mutex será desbloqueado como no método `Value`.
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// SafeCounter is safe to use concurrently.
type SafeCounter struct {
	mu sync.Mutex
	v  map[string]int
}

// Inc increments the counter for the given key.
func (c *SafeCounter) Inc(key string) {
	c.mu.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	c.v[key]++
	c.mu.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeCounter) Value(key string) int {
	c.mu.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	defer c.mu.Unlock()
	return c.v[key]
}

func main() {
	c := SafeCounter{v: make(map[string]int)}
	for i := 0; i < 1000; i++ {
		go c.Inc("somekey")
	}

	time.Sleep(time.Second)
	fmt.Println(c.Value("somekey"))
}
```
```go
package main

import (
	"fmt"
	"sync"
)

type Fetcher interface {
	// Fetch returns the body of URL and
	// a slice of URLs found on that page.
	Fetch(url string) (body string, urls []string, err error)
}

var (
	mu sync.Mutex
	urlUsed = make(map[string]bool)
	wg sync.WaitGroup
)

// Crawl uses fetcher to recursively crawl
// pages starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetcher Fetcher) {
	defer wg.Done()//Tira um item que deve se esperar
	// TODO: Fetch URLs in parallel.
	// TODO: Don't fetch the same URL twice.
	// This implementation doesn't do either:
	if depth <= 0 {
		return
	}
	mu.Lock()
	if _, used := urlUsed[url]; used {
		mu.Unlock()
		return
	}
	urlUsed[url]=true
	mu.Unlock()	

	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("found: %s %q\n", url, body)
	for _, u := range urls {
		wg.Add(1)
		go Crawl(u, depth-1, fetcher)
	}
	return
}

func main() {
	wg.Add(1)//Adiciona um item que deve se esperar
	Crawl("https://golang.org/", 4, fetcher)
	
	wg.Wait()
}

// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string	
	urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
	if res, ok := f[url]; ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = fakeFetcher{
	"https://golang.org/": &fakeResult{
		"The Go Programming Language",
		[]string{
			"https://golang.org/pkg/",
			"https://golang.org/cmd/",
		},
	},
	"https://golang.org/pkg/": &fakeResult{
		"Packages",
		[]string{
			"https://golang.org/",
			"https://golang.org/cmd/",
			"https://golang.org/pkg/fmt/",
			"https://golang.org/pkg/os/",
		},
	},
	"https://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
	"https://golang.org/pkg/os/": &fakeResult{
		"Package os",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
}
```
# Goto golang
Você pode usar o goto para sair do escopo, e executar um rótulo. Por exemplo:
```go
package main

import "fmt"

func main() {
    fmt.Println("Início")
    
    goto Rotulo//Sai daqui e vai para o que está escrito depois do rotulo: 
    
    fmt.Println("Este texto será ignorado")
    
Rotulo:
    fmt.Println("Chegou aqui com o goto!")//Finaliza quando sai da identação. 
}
```
Mas sempre siga essas regras:
- O label precisa estar no escopo da função na parte principal, ou do escopo atual. 
- Não faça modificações importantes após o goto na mesmo escopo, pois elas não serão realizadas. 
# Fallthrough 
Executa o próximo caso do switch case. Ou seja quando um case é avaliado como verdadeiro, o próximo case, mesmo falso vai ser executado de qualquer maneira. Mas apenas o próximo.
```go
valor := 1

switch valor {
case 1:
    fmt.Println("Caso 1")
    fallthrough
case 2:
    fmt.Println("Caso 2")
case 3:
    fmt.Println("Caso 3")
default:
    fmt.Println("Padrão")
}
```
Resultado:
Caso 1 
Caso 2

Importante:
- `fallthrough` só pode ser usado no final de um caso de `switch`.
- Ele não verifica a condição do próximo `case`, apenas força a execução do próximo bloco de código.
- Você pode usar `fallthrough` apenas dentro de um `switch`.
# Regexp 
## Must compile
Cria um estrutura, que deve ser seguida aos elementos da string. O regexp, é uma forma de definir um padrão. Por exemplo:
```go
re := regexp.MustCompile(`(\w+)/(\d{4}) (\d{2}) (\d{2}):(\d{2})`)
```
Aquela string, indica o seguinte, (\w+) é uma sequência de caracteres alfa numéricos que pode ser infinita ou não. Depois \d indica que é o digito e {4} ou {2} significa que tem ser quatro dígitos no primeiro caso, e dois dígitos no segundo exemplo. Perceba que outros elementos que estão fora dos parênteses são partes fixas que devem estar presente exatamente igual no padrão. Os elementos dentro dos parênteses, é para que agente possa capturar várias substrings, na função que veremos a seguir. 
## Find substring match 
```go
match := re.FindStringSubmatch(input)
```
A partir do regexp criado, colocamos uma string, como parâmetro, para retornar todas as substrings, ou seja ele vai retornar:
- (\w+) - uma sequência de dígitos alfa numéricos. 
- (\d{4}) - uma a sequência de 4 dígitos numéricos.
- (\d{2}) - uma a sequência de 2 dígitos numéricos.
- (\d{2}) - uma a sequência de 2 dígitos numéricos.
- (\d{2}) - uma a sequência de 2 dígitos numéricos.
## re.Match
```go
if re.Match(input)
```
Verifica se segue o padrão definido no pattern regexp. 