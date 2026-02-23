```go
r.GET("/alunos", ExibeTodosOsAlunos)
```
Isso indica o método que queremos(GET), a rota no local que queremos e a função que será executada ao acontecer a rota, que deve seguir o seguinte:
```go
func ExibeTodosOsAlunos(c *gin.Context) 
```
Se quiser, por exemplo, retornar um JSON você pode fazer assim:
```go
func ExibeTodosOsAlunos(c *gin.Context) {

    c.JSON(200, gin.H{

        "id":   1,

        "nome": "Pedro Makoski",

    })

}
```
E isso retornará na rota o JSON especificado.
# Métodos para os verbos HTTP
- GET
- POST
- DELETE
- PATCH: para atualizar algo