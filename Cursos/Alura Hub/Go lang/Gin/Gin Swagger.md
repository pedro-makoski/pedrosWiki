Documentador de APIs feitas com Gin.
Swagger - um framework que possui ferramentas para para documentação do código.
Swagger UI - Renderiza visualmente as APIs feitas com o Gin.
# Como usar
Se faz a partir de comentários
```
// ShowAccount godoc // indica o nome da função, que está em baixo de todos esse comentários, neste caso é ShowAccount o nome da função
//	@Summary		Show an account // Resumo da função
//	@Description	get string by ID // Descrição detalhada da função
//	@Tags			accounts // O que relaciona
//	@Accept			json // O que a rota aceita
//	@Produce		json // O que a rota retorna
//	@Param			id	path		int	true	"Account ID" // Neste exemplo, temos os parâmetros o ID que é passado no path da solução,  o tipo do id é int. esse true indica que é obrigatorio.
//	@Success		200	{object}	model.Account // quando acontece quando é retornado o status 200
//	@Failure		400	{object}	httputil.HTTPError // Em caso de falha 400 retorna o que? 
//	@Failure		404	{object}	httputil.HTTPError // Em caso de falha 404 retorna o que?
//	@Failure		500	{object}	httputil.HTTPError // Em caso de falha 500 retorna o que? O httputil deve ser importado, para evitar o erro de pacote não usado, adicione um _ antes de importar
//	@Router			/accounts/{id} [get] // Rota da função em que é utilizada.
```
# Como baixar?
```bash
go get github.com/swaggo/swag/cmd/swag
go get -u github.com/swaggo/gin-swagger
go get -u github.com/swaggo/files
```
# Como executar
```bash
swag init
```
Se usar GORMs, você precisa fazer:
```bash
swag init --parseDepedency --parseInternal --parseDepth 1
```
Ao fazer isso será gerado um docs.go na pasta docs.
## Como executar os docs
Importe:
```go
import (
   "github.com/gin-gonic/gin"
   docs "github.com/<nome-do-seu-projeto>/docs"
   swaggerfiles "github.com/swaggo/files"
   ginSwagger "github.com/swaggo/gin-swagger"
)
```
Faça isso no arquivo routes.go

Crie um base-path:
```go
docs.SwaggerInfo.BasePath = "/" // Indica o local que vai ser colocado o docs
```
Coloque outro elemento de rota:
```go
r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
```
