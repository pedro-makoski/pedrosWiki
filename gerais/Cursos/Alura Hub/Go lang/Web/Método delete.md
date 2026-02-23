```go
r.HandleFunc("/api/personalidades/{id}", controllers.DeletaUmaPersonalidade).Methods("DELETE")
```
Verbo responsável por deletar alguém no banco de dados. 
```go
func DeletaUmaPersonalidade(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id := vars["id"]//Obtem o id da qury
    var personalidade models.Personalidade
    database.DB.Delete(&personalidade, id)
    json.NewEncoder(w).Encode(personalidade)
}
```
```go
database.DB.Delete(&personalidade, id)
```
O primeiro argumento DB.Delete é o lugar que vai ser armazenado o deletador atual, provavelmente será vazio, pois você ira deletar. E por ultimo as condições, neste caso quando o id for igual ao id. 