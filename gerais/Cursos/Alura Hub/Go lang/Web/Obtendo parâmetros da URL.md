```go
idDoProduto := r.URL.Query().Get("id")
```
O URL.Query() retorna um tipo com métodos como por exemplo, o .Get para obter os query params da URL, por exemplo:
```
teste.com/?id=1
```
O id que será retornado será 1, do tipo string.