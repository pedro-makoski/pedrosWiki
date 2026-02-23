Os testes são de extrema importância para que se tenha certeza de que o programa está tendo a saída exatamente como esperado.
# Criando arquivo
O arquivo de teste deve terminar com `_test.go`.
# Criando função
Deve começar com `Test` e recebe um ponteiro do tipo ``Testing.T``.
```go
func TestFalhador(t *testing.T) {
   t.Fatalf("Teste falhou de prpósito, não se preocupe")//Imprime log de erro, demonstrando que o teste falhou
}
```
# Fazendo verificação de Status Gin e http
```go
package main

  

import (

    "net/http"

    "net/http/httptest"

    "testing"

  

    "github.com/gin-gonic/gin"

    "github.com/pedro-makoski/alura-Go/curso-6-gin/controllers"

)

  

func SetupDasRotasDeTeste() *gin.Engine {

    rotas := gin.Default()// Cria uma instância de rotas gin

    return rotas

}

  

func TestVerificaStatusCodeDaSaudacaoComParametro(t *testing.T) {

    r := SetupDasRotasDeTeste()//Istancia as rotas

    r.GET("/:nome", controllers.Saudacao)//Adiciona uma rota a partir de uma função externa

    req, _ := http.NewRequest("GET", "/pedro", nil)//Informa que vai ser feito uma requisição GET, na rota "/pedro", e vai ter nada no body, por isso nil.

    resposta := httptest.NewRecorder()// Cria um novo recorder para salvar as informações da requisição

    r.ServeHTTP(resposta, req)//Serve o HTTP, em função da resposta para salvar e a requisição com o request

    if resposta.Code != http.StatusOK {//Verifica se o statusCode é diferente de 200

        t.Fatalf("Status Error: valor recebido foi %d e o esperado era %d", resposta.Code, http.StatusOK)

    }

}
```