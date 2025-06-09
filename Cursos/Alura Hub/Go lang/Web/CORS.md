Quando um site tenta acessar uma API de origem diferente da dele. E no header dessa API não tem nada para permitir que tal site o acesse. O CORS, uma política de segurança bloqueia essa requisição em formato de erro.
# Como aplicar em Go
Primeiro faça o go get da biblioteca: github.com/gorilla/handlers. Depois importe a biblioteca github.com/gorilla/handlers nos imports. E depois disso na linha do listen and serve coloque:
```go
log.Fatal(http.ListenAndServe(":8000", handlers.CORS(handlers.AllowedOrigins([]string{"*"}))(r)))
```
Perceba essa lista com `*`, isso indica que qualquer site pode acessar a página. Caso só queira um específico coloque eles nesta lista de strings. 