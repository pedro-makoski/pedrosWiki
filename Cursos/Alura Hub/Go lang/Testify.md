Permite fazer testes de forma mais interessante, para baixa-lo use:
```bash
go get github.com/stretchr/testify
go get github.com/stretchr/testify/assert
```
O assert tem um conjunto de métodos que ajudam na construção de testes.
# Exemplo de uso
```go
package main

  

import (

    "io"

    "net/http"

    "net/http/httptest"

    "testing"

  

    "github.com/gin-gonic/gin"

    "github.com/pedro-makoski/alura-Go/curso-6-gin/controllers"

    "github.com/stretchr/testify/assert"

)

  

func SetupDasRotasDeTeste() *gin.Engine {

    rotas := gin.Default()

    return rotas

}

  

func TestVerificaStatusCodeDaSaudacaoComParametro(t *testing.T) {

    r := SetupDasRotasDeTeste()

    r.GET("/:nome", controllers.Saudacao)

    req, _ := http.NewRequest("GET", "/pedro", nil)

    resposta := httptest.NewRecorder()

    r.ServeHTTP(resposta, req)

    assert.Equal(t, http.StatusOK, resposta.Code, "Deveriam ser iguais")//Melhor usar o assert.Equal do que um if de comparação, isso diz que ambos os valores devem ser iguais, e mostra a mensagem de erro com alguns detalhes a mais

    mockDaResposta := `{"API diz:":"E ai pedro, tudo beleza?"}`

    respostaBody, _ := io.ReadAll(resposta.Body)//Obtem um conjunto de bytes a partir do body

    assert.Equal(t, mockDaResposta, string(respostaBody), "Deveriam ser iguais")

}
```