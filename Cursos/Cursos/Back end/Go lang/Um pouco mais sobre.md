---
tags:
  - Golang
---
# Literais numéricos 
Você pode fazer potência a base de 2 em go direto no número assim:
```go
v := 0x2p-2 //2*2^-2 = 0,25*2=0,5. Precisa ter o 0x para se em exadecimal. E da mesma forma o 0x precisa do p// Quando o p está sozinho, a base é automaticamente 2

```
E 10 como potência:
```go
v:= 2.e+3 // 2*10^3 = 2000 - tem ponto para forçar a ser float
```
```go
0. 
72.40
072.40 // == 72,40
2.71828 
1.e+0 // 1 * 10^0 = 0
6.67428e-11 // 6.67428 ^ 10^-11
1E6 // 1*10^6
.25 // 0.25
.12345E+5 // 0.12345*10^5

0x1p-2 // == 0.25
0x2.p10 // == 2048.0
0x1.Fp+0     // == 1.9375//.F significa 15/16 em hexadecimal
0X.8p-0      // == 0.5
0X_1FFFP-16  // == 0.1249847412109375, o 1fff é um valor em hexadecimal, 1*16^3+15*16^2... 
0x15e-2      // == 0x15e - 2 (integer subtraction) = 348. Ele subtrai pois o e é só base 2 quando não tem o 0x no começo indicando que é hexadecimal.
0x.p1        // invalid: mantissa has no digits
1p-2         // invalid: p exponent requires hexadecimal mantissa
0x1.5e-2     // invalid: hexadecimal mantissa requires p exponent
1_.5         // invalid: _ must separate successive digits
1._5         // invalid: _ must separate successive digits
1.5_e1       // invalid: _ must separate successive digits
1.5e_1       // invalid: _ must separate successive digits
1.5e1_       // invalid: _ must separate successive digits

42
4_2
0600
0_600
0o600
0O600       // second character is capital letter 'O'
0xBadFace
0xBad_Face
0x_67_7a_2f_cc_40_c6
170141183460469231731687303715884105727
170_141183_460469_231731_687303_715884_105727
```
Você pode colocar valores antes do número para indicar bases não decimais:
0x - hexadecimal - [[Sistemas de numeração#Hexadecimal|Veja aqui]], 0 a f ou F. 
 0b - binário
0o - octal. 
Nada - decimal.
Para facilitar a leitura, um caractere de sublinhado `_`pode aparecer depois de um prefixo base ou entre dígitos sucessivos; esses sublinhados não alteram o valor do literal.
## Literais imaginários 
Para números complexos, você pode usar a constante i, que indica sqrt(-1), e assim fazer as operações tranquilamente. 
```go
0i
0123i         // == 123i for backward-compatibility
0o123i        // == 0o123 * 1i == 83i
0xabci        // == 0xabc * 1i == 2748i
0.i
2.71828i
1.e+0i
6.67428e-11i
1E6i
.25i
.12345E+5i
0x1p-2i       // == 0x1p-2 * 1i == 0.25i
```
# Literais do rune
Estabelece um caractere com ponto unicode. Que tem como base um número que vai de 0 a 255, cada um apontando para um digito como string. Alguns tem funções especiais como: 
```
\a U+0007 alerta ou campainha 
\b U+0008 backspace 
\f U+000C avanço de formulário 
\n U+000A avanço de linha ou nova linha 
\r U+000D retorno de carro - volta ao inicio da linha, onde começou-se a escrever. 
\t U+0009 tabulação horizontal 
\v U+000B tabulação vertical \\ U+005C barra invertida 
\' U+0027 aspas simples (escape válido somente em literais de runa) 
\" U+0022 aspas duplas (escape válido somente em literais de string)
```
Se o valor não compreende esses citados, isso pode retornar um erro. Veja outros exemplos ilegais:
```go
'aa'         // illegal: too many characters
'\k'         // illegal: k is not recognized after a backslash
'\xa'        // illegal: too few hexadecimal digits
'\0'         // illegal: too few octal digits
'\400'       // illegal: octal value over 255
'\uDFFF'     // illegal: surrogate half
'\U00110000' // illegal: invalid Unicode code point
```
Vários escapes de barra invertida permitem que valores arbitrários sejam codificados como texto ASCII. Há quatro maneiras de representar o valor inteiro como uma constante numérica: `\x`seguido por exatamente dois dígitos hexadecimais; `\u`seguido por exatamente quatro dígitos hexadecimais; `\U`seguido por exatamente oito dígitos hexadecimais e uma barra invertida simples `\`seguida por exatamente três dígitos octais. Em cada caso, o valor do literal é o valor representado pelos dígitos na base correspondente.

O len(string("á")) aponta para dois, pois o acento é como se fosse um caractere separado. 
# Keywords

The following keywords are reserved and may not be used as identifiers.

break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var

# Operators and punctuation

The following character sequences represent [operators](https://go.dev/ref/spec#Operators) (including [assignment operators](https://go.dev/ref/spec#Assignment_statements)) and punctuation [[Go 1.18](https://go.dev/ref/spec#Go_1.18)]:

```
`+    &     +=    &=     &&    ==    !=    (    )
-    |     -=    |=     ||    <     <=    [    ]
*    ^     *=    ^=     <-    >     >=    {    }
/    <<    /=    <<=    ++    =     :=    ,    ;
%    >>    %=    >>=    --    !     ...   .    :
     &^          &^=          ~`
```
# Types
uint8       o conjunto de todos os inteiros de 8 bits sem sinal (0 a 255)
uint16      o conjunto de todos os inteiros de 16 bits sem sinal (0 a 65535)
uint32     o conjunto de todos os inteiros de 32 bits sem sinal (0 a 4294967295)
uint64      o conjunto de todos os inteiros de 64 bits sem sinal (0 a 18446744073709551615)

int8         o conjunto de todos os inteiros de 8 bits com sinal (-128 a 127)
int16       o conjunto de todos os inteiros de 16 bits com sinal (-32768 a 32767)
int32       o conjunto de todos os inteiros de 32 bits com sinal (-2147483648 a 2147483647)
int64    o conjunto de todos os inteiros de 64 bits com sinal inteiros (-9223372036854775808 a 9223372036854775807)

float32   o conjunto de todos os números de ponto flutuante IEEE 754 de 32 bits
float64    o conjunto de todos os números de ponto flutuante IEEE 754 de 64 bits

complex64   o conjunto de todos os números complexos com partes reais e imaginárias float32
complex128   o conjunto de todos os números complexos com partes reais e imaginárias float64

byte        versão de caracteres para o uint8
rune         versão de caracteres para o int32

uint 32 ou 64 bits 
int mesmo tamanho que uint 
uintptr um inteiro sem sinal grande o suficiente para armazenar os bits não interpretados de um valor de ponteiro

bool - pode ser true ou false
string - conjunto de elementos do tipo byte. Elas são imutáveis, ou seja você não pode alterar o conteúdo de uma string. Para saber o comprimento de uma string, você pode usar a função len. É ilegal pegar o endereço de tal elemento; se `s[i]`for o `i`'ésimo byte de uma string, `&s[i]`é inválido.
Matrizes - também pode se obter o parâmetro len() de uma matriz. [10]int, cria um array/matriz unidimensional de possíveis vários valores inteiros. Se quiser ser além do unidimensional você pode acrescentar um colchete antes de começar o int ``[10][10]int`` .  Dessa forma:
```go
[2][2][2]float64 // o mesmo que [2]([2]([2]float64))
```
Slices - enquanto matrizes possuem valores determinados. Slices podem possuir qualquer quantidade de valores. 
	Uma fatia, uma vez inicializada, é sempre associada a um array subjacente que contém seus elementos. Uma fatia, portanto, compartilha armazenamento com seu array e com outros slices do mesmo array; por outro lado, arrays distintos sempre representam armazenamento distinto. O array subjacente a uma fatia pode se estender além do fim da fatia. A _capacidade_ é uma medida dessa extensão: é a soma do comprimento da fatia e do comprimento do array além da fatia; uma fatia de comprimento até essa capacidade pode ser criada cortando [_uma_](https://go.dev/ref/spec#Slice_expressions) nova fatia da fatia original. A capacidade de uma fatia `a`pode ser descoberta usando a função interna [`cap(a)`](https://go.dev/ref/spec#Length_and_capacity).
Esses dois comando possuem o mesmo proposito:
```go
make([]int, 50, 100)
new([100]int)[0:50]
```
Estruturas, algo interessante é:
```go
struct { 
	T1 // o nome do campo é T1 
	*T2 // o nome do campo é T2 
	P.T3 // o nome do campo é T3 
	*P.T4 // o nome do campo é T4 
	x, y int // os nomes dos campos são x e y 
}

struct {
	x, y float64 ""  // an empty tag string is like an absent tag
	name string  "any string is permitted as a tag"
	_    [4]byte "ceci n'est pas un champ de structure"
}

// A struct corresponding to a TimeStamp protocol buffer.
// The tag strings define the protocol buffer field numbers;
// they follow the convention outlined by the reflect package.
struct {
	microsec  uint64 `protobuf:"1"`
	serverIP6 uint64 `protobuf:"2"`
}


// tipos de struct inválidos 
type ( 
	T1 struct{ T1 } // T1 contém um campo de T1 
	T2 struct{ f [10]T2 } // T2 contém T2 como componente de um array 
	T3 struct{ T4 } // T3 contém T3 como componente de um array em struct 
	T4 T4 struct{ f [10]T3 } // T4 contém T4 como componente de struct T3 em um array )
```
# Arrays invalidos
```go
type (
	T1 [10]T1                 // element type of T1 is T1
	T2 [10]struct{ f T2 }     // T2 contains T2 as component of a struct
	T3 [10]T4                 // T3 contains T3 as component of a struct in T4
	T4 struct{ f T3 }         // T4 contains T4 as component of array T3 in a struct
)

// valid array types
type (
	T5 [10]*T5                // T5 contains T5 as component of a pointer
	T6 [10]func() T6          // T6 contains T6 as component of a function type
	T7 [10]struct{ f []T7 }   // T7 contains T7 as component of a slice in a struct
)
```
# Diferença de new e make
Enquanto `new` é usado para alocar memória para tipos simples ou compostos (e retorna um ponteiro), `make` é específico para inicializar slices, maps e channels.
# Comentários
Comentários servem como documentação do programa. Existem duas formas:

1. _Os comentários de linha_ começam com a sequência de caracteres `//` e param no final da linha.
2. _Comentários gerais_ começam com a sequência de caracteres `/*` e param na primeira sequência de caracteres subsequente `*/`.
# Indentificadores
Indicam uma variável, tipo ou função. O nome não pode começar com um número. Alguns já são predeclarados:
```go
Types:
	any bool byte comparable
	complex64 complex128 error float32 float64
	int int8 int16 int32 int64 rune string
	uint uint8 uint16 uint32 uint64 uintptr

Constants:
	true false iota

Zero value:
	nil

Functions:
	append cap clear close complex copy delete imag len
	make max min new panic print println real recover
```
Não podem ser usados os seguintes nomes no programa:
```go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var
```
E os operadores, que vamos ver a seguir não podem ser usados nem no meio da variável:
```go
+    &     +=    &=     &&    ==    !=    (    )
-    |     -=    |=     ||    <     <=    [    ]
*    ^     *=    ^=     <-    >     >=    {    }
/    <<    /=    <<=    ++    =     :=    ,    ;
%    >>    %=    >>=    --    !     ...   .    :
     &^          &^=          ~
```
# Contantes
Em go constantes numéricas representam valores exatos de precisão arbitrária e não transbordam. Consequentemente, não há constantes denotando os valores IEEE 754 zero negativo, infinito e não-um-número. Ou seja não temos expressões como no JS: infinity e NaN.

O tipo padrão de uma constante não tipada é `bool`, `rune`, `int`, `float64`, `complex128`, ou `string` respectivamente. Ou seja ele começa como bool, se não for vai ser rune e assim vai. 

 Dito isso, toda implementação deve:

- Representam constantes inteiras com pelo menos 256 bits.
- Representam constantes de ponto flutuante, incluindo as partes de uma constante complexa, com uma mantissa de pelo menos 256 bits e um expoente binário com sinal de pelo menos 16 bits.
- Emite um erro se não for possível representar uma constante inteira com precisão.
- Emite um erro se não for possível representar uma constante de ponto flutuante ou complexa devido a estouro.
- Arredonde para a constante representável mais próxima se não for possível representar uma constante de ponto flutuante ou complexa devido a limites de precisão.
# Em funções temos o ...T
Isso serve para obter 0 ou mais elementos em uma variável, por exemplo:
```go
func showValues(valores ...int) {
	return 
}
```
# Funções interessante
- Min pega o menor valor dentre os argumentos passados. 
- Max pega o maior valor dentre os argumentos passados. 
- Make inicializa a variável. Normalmente usado para maps/slices/structs. Diferente do new que zera, o make inicializa, preparando para o uso, com configurações antes não estabelecidas. Lembre-se de que `make`se aplica somente a mapas, fatias e canais e não retorna um ponteiro
- New aloca a variável num espaço do computador. Normalmente usados para tipos simples como int, float32, bool e assim vai. É uma função interna que aloca memória, mas, diferentemente de seus homônimos em algumas outras linguagens, ela não _inicializa_ a memória, apenas a _zera_.
## Panic e recover
Panic insere um erro. E recover serve para verificar se houve algum erro antes de fechar o sistema, por isso usado no defer, se recover for diferente de nil então ocorreu algum erro. 
```go
package main

import "fmt"

func main() {
    fmt.Println("Início do programa")
    
    // Função que tenta recuperar do panic
    safeFunction()
    
    fmt.Println("Fim do programa")
}

func safeFunction() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recuperado do panic:", r)
        }
    }()
    
    fmt.Println("Antes do panic")
    panic("Algo deu errado!")
    fmt.Println("Depois do panic (não será executado)")
}

```
# Prints do pacote fmt
Todos produzem a mesma saída
```go
fmt.Printf("Hello %d\n", 23)
fmt.Fprint(os.Stdout, "Hello ", 23, "\n")
fmt.Println("Hello", 23)
fmt.Println(fmt.Sprint("Hello ", 23))
fmt.Pritnln(fmt.Sprintf("Hello %d\n", 23))
```
Os que começam com s retorna e não preenche o buffer. O println quebra a linha, o print não quebra, e o printf pode formatar com %d e %v. Os valores divididos por vírgulas são divididos entre espaços na saída, tanto no print quanto no println. 

As funções de impressão formatadas `fmt.Fprint` e amigas recebem como primeiro argumento qualquer objeto que implemente a `io.Writer`interface; as variáveis `os.Stdout`​​e `os.Stderr`são instâncias familiares.

Na formatação:
%d - decimal
%x - hexadecimal, funciona também para strings. 
%v - qualquer valor.

Você pode fazer o seguinte na formatação `%v`:
```go
type T struct {
    a int
    b float64
    c string
}
t := &T{ 7, -2.35, "abc\tdef" }
fmt.Printf("%v\n", t)
fmt.Printf("%+v\n", t)
fmt.Printf("%#v\n", t)
fmt.Printf("%#v\n", timeZone)
```
E o resultado será o seguinte:
```
&{7 -2.35 abc   def}//%v - mostra apenas os valores
&{a:7 b:-2.35 c:abc     def}// %+v - mostra as chaves juntos com os valores
&main.T{a:7, b:-2.35, c:"abc\tdef"} // %#v além dos anteriores, adiciona ainda a origem que é o pacote main. 
map[string]int{"CST":-21600, "EST":-18000, "MST":-25200, "PST":-28800, "UTC":0}
```
Também temos:
%q - quando aplicado a uma int ou string, mostra o formato original, do tipo. Por exemplo, na string mostra as aspas também na impressão. Se aplicado a um valor inteiro ou runa ela ficará entre aspas simples, o valor equivalente a ele em hexadecimal, que é uma string, mas quando o valor equivale a um escape, tipo \n ele vai mostra o escape nesse caso \n.
Já o %#q pode mostra a string entre crases.
%T - impre o tipo do valor. 
%f - valor float - com valor delimitado.
%.2f - exemplo - float com duas casas decimais. 
%g - responsivo a partir do valor original. E pode compactar usando notações. 

Quando usar o método Sprintf, e passa como parâmetro um valor do tipo não string, ou subjacente de uma string, e nas aspas tem o %s referente a esse valor, não coloque dentro de uma função String, que vai fazer com que entre em um loop, pois o comando Sprintf chama o comando String(). Para corrigir isso converta diretamente a variável para o tipo string, assim: string(variavel).
# Append
```go
x := []int{1,2,3}
y := []int{4,5,6}
x = append(x, y...)//Tranforma todos os elementos do array y, em argumentos. Pois a função espera argumentos e não, uma slice completa. 
fmt.Println(x)
```
# Contantes
Mesmo as definidas dentro de funções, são definas em tempo de compilação. Todas são definidas neste estágio da compilação. Elas só podem ser: números, caracteres (runas), strings ou booleanos.

