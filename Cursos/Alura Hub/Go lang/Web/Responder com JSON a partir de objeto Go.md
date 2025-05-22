```go
func TodasPersonalidades(w http.ResponseWriter, r *http.Request) {

    err := json.NewEncoder(w).Encode(models.Personalidades)

    if err != nil {

        panic(err.Error())

    }

}
```
O newEncoder cria um enconder, e você passa um objeto como parâmetro do encoder.