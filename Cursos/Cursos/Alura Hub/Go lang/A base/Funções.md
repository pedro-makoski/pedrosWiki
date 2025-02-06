# Funções básicas 
Você pode criar funções em Go, existem diversas estruturas, para isso, a básica é a seguinte:
```go
func exibeMenu() {
    fmt.Println("1 - Iniciar monitoramento")
    fmt.Println("2 - Exibir os logs")
    fmt.Println("0 - sair do programa")
}
```
Onde temos a função, depois o nome da função(por padrão em camelCase, a primeira minuscula, e o inicio de cada palavra a seguir maiúscula, isso na maioria das vezes. 

E depois para chamar, coloque na função main:
```go
exibeMenu() 
```
Onde coloca-se o nome da função, e os parênteses, com seus parâmetros caso o tenha(a função).
# Funções com retorno 
Você pode retornar valores em Go da seguinte forma:
```go
func getComando() int {
    var comandoLido int
    fmt.Print("Insira o comando: ")
    fmt.Scan(&comandoLido)
    fmt.Println("O comando escolhido foi:", comandoLido)
    return comandoLido
}
```
Você deve especificar o valor de retorno no final da declaração da função, na primeira linha. Caso você queira que retorne mais de um valor, você pode colocar entre parênteses, por exemplo: `(int, string)` para retornar um valor inteiro e uma ``string``. E então você pode obter o retorno assim:
```go
comando := getComando()
//Comando é inteiro por inferência a partir do retorna da função
```
Ou no segundo caso:
```go
comando, comandoText := getComando()
//O primeiro vai ser int e o segundo vai ser uma string.
```
# Encerrar o programa corretamente
Você pode encerrar um programa usando o pacote os:
```go
import "os"
```
E com esse pacote, você usa o comando:
```go
os.Exit(0)
```
Isso informa que o programa foi encerrado com sucesso. Já caso tenha dado algo errado, você pode encerrar:
```go
os.Exit(-1)
```
Para informar que o programa saiu sem sucesso. E deu algum erro. 
O parâmetro passado passado no os.Exit, é chamado de status.