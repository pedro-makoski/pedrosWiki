Primeiro precisamos verificar se o método usado foi realmente o método post. Para isso:
```go
func Insert(w http.ResponseWriter, r *http.Request) {
    if r.Method == "POST" {
    }
 }
```
O r.Method, e o método de requisição. Para obter os parâmetros do método post você coloca:
```go
value := r.FormValue("<name-do-input>")
```
Todos os valores convertidos são transformados em string. 

