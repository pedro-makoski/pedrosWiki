# Iniciar
Em Go pode se ter vários pacotes. Mas o principal é o main, que é o pacote que será executado primeiro, defina que o pacote principal, assim: 
```go
package main 
```
E depois todo pacote principal tem **uma** função principal, definida assim:
```go
func main() {
	/*Seu código*/
}
```
Essa função é a primeira a ser executada. 
Perceba a estrutura da função padrão em Go. Você define o comando func, depois de o espaço coloque o nome da função e logo em seguida coloque os parênteses, onde estará os argumentos. E depois dentro das chaves coloque o código da função. As chaves devem ser começadas na mesma linha do func main. Mais em breve veremos que existem mais propriedades que você **pode** colocar na função. 
A função main, não recebe nada como parâmetro, e não retorna nenhum valor. Mas quando retorna, o programa é encerrado.
# Importar pacote
Neste programa, precisaremos usar o pacote fmt, um pacote usado para formatação, impressão no terminal e scanear tecla do terminal. Então você pode fazer assim embaixo do `package main`
```go
import "fmt"
```
# Imprimindo
Dentro da função principal, coloque o seguinte código:
```go
fmt.Println("Olá, mundo")
```
Perceba a estrutura, primeiro coloca-se o pacote fmt, depois chame a função       **P**rintln passando como argumento dentro dos parênteses, a mensagem que você deseja passar. Perceba que o p é maiúsculo, isso serve em Go, como convenção, para indicar que a função vem de um pacote externo, como Println vem de um pacote externo colocamos a primeira letra maiúscula. 
# Executando
Você pode compilar, gerando .exe, dessa forma:
```sh
go build hello.go
```
Isso considerando que o nome do arquivo é hello.go. A partir disso se gera um hello.exe, e depois para executar:
```sh
./hello
```
E agora veja o "Olá, mundo" aparecendo na sua tela.
Você pode também simplificar o processo, executando apenas o comando:
```sh
go run hello.go 
```
E assim ele compila e executa diretamente. 
# Convenção em Go
Uma convenção em Go, é que você não deve colocar o ponto e vírgula em Go, no final das linhas. Apenas em alguns casos, como, por exemplo, ao colocar duas expressões na mesma linha ou um for. 