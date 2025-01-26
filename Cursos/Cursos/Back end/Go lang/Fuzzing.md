Este tutorial apresenta os conceitos básicos de fuzzing em Go. Com o fuzzing, dados aleatórios são executados em seu teste em uma tentativa de encontrar vulnerabilidades ou entradas causadoras de travamento. Alguns exemplos de vulnerabilidades que podem ser encontradas por fuzzing são injeção de SQL, estouro de buffer, negação de serviço e ataques de script entre sites.
# Testing unitário
Antes de falarmos do teste fuzzing, vamos mostrar o test unitário, que deve estar num arquivo que termina com `_test`, e para executa-lo você usa o comando `go test` apenas, sem precisar especificar o caminho. 
```go
package main

import (
    "testing"//pacote testing, para testes. 
)

func TestReverse(t *testing.T) {//A função deve começar com Test, para ser testada. O *testing.T, é parte do testing, que te dá algumas funções. 
    testCases:=[]struct{
        in, want string
    }{
        {"Hello, world", "dlrow ,olleH"},
        {" ", " "},
        {"!12345", "54321!"},
    }

    for _, caseTest := range testCases {
        rev := Reverse(caseTest.in)
        if rev != caseTest.want {
            t.Errorf("Reverse %q, want %q", rev, caseTest.want)//Caso de algum erro do que era esperado ele vai mostrar essa mensagem. 
        }
    }
}
```
# Teste fuzzing
O teste unitário tem limitações, a saber, que cada entrada deve ser adicionada ao teste pelo desenvolvedor. Um benefício do fuzzing é que ele cria entradas para seu código e pode identificar casos extremos que os casos de teste que você criou não alcançaram.
```go
package main

import (
    "testing"
    "unicode/utf8"
)

func FuzzReverse(f *testing.F) {//Perceba que começa com Fuzz e não teste, e além disso você usa testing.F e não testing.T. 
    testCases := []string{"Hello, world", " ", "!12345"}
    
    for _, caseTest := range testCases {
        f.Add(caseTest)//Adiciona ao corpus de teste as strings. 
    }
   
    f.Fuzz(func(t *testing.T, origin string){//Executa essa função para cada valor corpus. Voc~e tem uma função com t.testing.T e a origin que foi adicionada ao corpus. 
        rev := Reverse(origin)
        doubleReverse := Reverse(rev)
        if origin != doubleReverse {//Faz a verificação para ver se o valor foi corretamente invertido, invertendo mais uma vez.
            t.Errorf("Antes: %q, Depois %q", origin, doubleReverse)
        }
        
        if utf8.ValidString(origin) && !utf8.ValidString(rev) {//Verifica se a origem e a reversão ficou uma string valida. 
            t.Errorf("A reversão produziu uma UTF-8 invalido:  %q", rev)
        }
    })
}
```
Você pode fazer a verificação do go test, e ele passará, porém se executarmos o seguinte:
```
go test -fuzz=Fuzz
```
Ele adicionará ao corpus, strings aleatórias, e ao realizar isso acontecerá um erro, que você poderá ver em testdata/fuzz/FuzzReverse, para esse caso em específico. Quando executar o go test novamente, o corpus ficará salvo e continuará dando erro. Neste caso o erro se dá por a reversão produziu uma UTF-8 invalida.

Adicionar  `t.Logf` na linha será impressa na linha de comando se ocorrer um erro ou se o teste for executado com `-v`, o que pode ajudar a depurar esse problema específico.

O problema se dá, percebendo assim, que o valor em bytes não cabe toda o caractere, sendo necessário 2 caracteres, podendo assim mudar o byte por rune, possibilitando assim caracteres maiores. Fazendo o `go test -fuzz=Fuzz`. 
E agora o erro está dando por causa da reversão incorreta. Antes e depois. 

Você pode depurar e testar, adicionando um printf na função reverse. E verificar o erro indicando o caminho da pasta pelo {nome-da-funcao}/{nome-do-arquivo}, o nome do arquivo a qual foi registrado o erro. Então você executa então o seguinte o comando: `go test -run={nome-da-funcao}/{nome-do-arquivo}`
Para resolver isso você pode retornar um erro se o caractere não for um UTF-8, fazendo assim:
```go
if !utf8.ValidString(str) {
       return str, errors.New("Input is not valid UTF-8")
 }
```
E então na hora de receber os valores atribua também o segundo retorno a variável err, a todas as chamadas, e no testing, verifique se o erro é diferente de nil, se for diferente, então use o return para seguir para o próximo. E então execute novamente: `go test -fuzz=Fuzz` e assim ele rodará infinitamente até achar um erro, e muito provavelmente não achará, para encerrar clique em ctrl+c, para não ser infinito defina um tempo máximo usando o fuzztime: `go test -fuzz=Fuzz -fuzztime 30s`, agora ele rodará por 30 segundos o teste e depois parará. Você também pode usar ao invés do return t.Skip(). Veja o código completo:
```go
//main.go
package main

import (
    "errors"
    "fmt"
    "unicode/utf8"
)
  
func main() {
    input := "The quick brown fox jumped over the lazy dog"
    input = "v"
    rev, revErr := Reverse(input)
    doubleRev, doubleRevErr := Reverse(rev)
    fmt.Printf("original: %q\n", input)
    fmt.Printf("reversed: %q, err %v\n", rev, revErr)
    fmt.Printf("reversed again: %q, err %v\n", doubleRev, doubleRevErr)
}

  

func Reverse(str string) (string, error) {
    if !utf8.ValidString(str) {
        return str, errors.New("Input is not valid UTF-8")
    }
    
    r := []rune(str)
  
    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }

    return string(r), nil
}
```
```go
//reverse_test.go
package main

import (
    "testing"
    "unicode/utf8"
)
  
func FuzzReverse(f *testing.F) {
    testCases := []string{"Hello, world", " ", "!12345"}

    for _, caseTest := range testCases {
        f.Add(caseTest)
    }
    
    f.Fuzz(func(t *testing.T, origin string){
        rev, err := Reverse(origin)
        if err != nil {
            return
        }

        doubleReverse, err := Reverse(rev)
        if err != nil {
            return
        }
        t.Logf("Number of runes: orig=%d, rev=%d, doubleRev=%d", utf8.RuneCountInString(origin), utf8.RuneCountInString(rev), utf8.RuneCountInString(doubleReverse))
        if origin != doubleReverse {
            t.Errorf("Antes: %q, Depois %q", origin, doubleReverse)
        }

        if utf8.ValidString(origin) && !utf8.ValidString(rev) {
            t.Errorf("A reversão produziu uma UTF-8 invalido:  %q", rev)
        }
    })
}
	```
# Fazer go test de função especifica
```
go test -run=FuzzReverse
```
Depois do igual se insere o nome da função.