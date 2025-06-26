Na API, diga que você espera um campo:
```go
r.GET("/:nome", controllers.Saudacao)
```
Você pode colocar qualquer nome para o campo.
E depois dentro da função, Saudacao por exemplo, você obtem pelo nome, por exemplo:
```go
nome := c.Params.ByName("nome")
```