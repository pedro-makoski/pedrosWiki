# Iniciar uma variável
Existem diversas formas de iniciar uma variável, em Go.
Uma das formas é primeiro usa o comando ``var`` depois passe o nome da variável e depois passe o tipo dela, ficando assim:
```go
var nome string = "Pedro Makoski"
```
Além do tipo string, que é um conjunto de caracteres alfa numéricos também existem outros tipos como:
- float32 - número com casa flutuante, o tamanho dele é 32 bits.
- float64 - número com casa flutuante, o tamanho dele é 64 bits.
- int - define um número inteiro.
Quando você não define uma variável em Go, ela assume o valor 0 do tipo, no int é 0, no float é 0.0, na string é uma string vazia: "", no bool é false, e assim vai. 

Se você criar uma variável, em Go e não a usa, ela retorna um erro. Isso é uma outra **convenção** que é feita, onde toda variável declarada deve ser usada. 
# Inferência de tipos 
O Go tem uma facilidade, para variáveis que possui valores, com tipos inferiveis, por exemplo `"string"` isso é obviamente do tipo string, "10" isso é obviamente um valor inteiro, então você pode omitir, o tipo da variável nestes casos. 
```go
var nome = "Pedro Makoski"
```
Mas o tipo continuará sendo string, e não retornará erro. Para números flutuantes pode até funcionar, mas tem que tomar cuidado com o tamanho da variável, pois fica a escolha, do Go, se vai ser float32 ou float64.
## Saber o tipo de uma variável que foi inferida 
Use a biblioteca `reflex`:
```go 
import "reflect" 
```
E então, insira o comando:
```go
fmt.Println("O tipo da variável versao é ", reflect.TypeOf(versao))
```
Dentro do parâmetro de TypeOf, deve estar a variável que você quer saber o tipo. E então ele retornará, O tipo da variável versão é float32, pois a variável é do tipo float32. 

Sabendo disso, existe um jeito ainda melhor para simplificar o código, usando :=, ele utiliza como base, a inferência de tipos, podendo declarar sem usar o var. Ou seja, ao invés de ser assim:
```go
var nome = "Pedro Makoski"
```
Você faz assim:
```go
nome := "Pedro Makoski"
```
Isso se chama operador declarador curto de variáveis. Está última abordagem com := (dois pontos, igual), usamos apenas quando vamos criar e atribuir um valor **dentro do escopo de uma função**.
# fmt.Scanf
Tem como função, obter um valor de entrada do usuário. Ele recebe dois parâmetros, o primeiro é o modificador, indicando o tipo de entrada do usuário, e o segundo é o ponteiro indicando a variável que será atribuída:
```go
var comando int
fmt.Scanf("%d", &comando)
fmt.Println("O comando escolhido foi:", comando)
```
O %d, faz o programa esperar um valor inteiro. Também temos %f para float. 

Perceba também, que é &comando, o operador & faz com que o parâmetro seja o endereço da variável. Permitindo assim com que a função tenha o endereço e consiga manipula-lo, podendo assim mudar a variável.

Perceba, também que ao usar o modificador %d, repetimos a ideia que já é passada ao colocar comando como tipo inteiro. Por isso, podemos usar o comando **fmt.Scan**, da seguinte forma:
```go
var comando int
fmt.Scan(&comando)
```
E funcionará corretamente, como antes. 

Quando você coloca um valor que não participa do tipo da variável, ele muda para o valor padrão dela, que neste caso é o valor 0. 
# Definir mais de uma variável em uma mesma linha
Quando se trata do mesmo tipo isso é sim possível desse jeito, veja:
```go
var idade, dia int = 15, 29
```
Quando possuem tipos diferentes, faça assim:
```go
var ( 
idade int 
altura float32 
nome string 
)
idade = 15 
altura = 1.78
nome = "Guilherme"
```
E você pode inferir os dados assim:
```go
var ( 
idade = 15 
altura = 1.78 
nome = "Guilherme" 
)
```
# O que acontece quando nenhum valor é atribuído
A linguagem Go sempre inicializa a variável com valor 0. Ou seja 0 para número, false para bool, "" para string. Mas é sempre bom nos mesmos atribuirmos as variáveis, para que nosso código não pare de funcionar, caso a linguagem mude. 
