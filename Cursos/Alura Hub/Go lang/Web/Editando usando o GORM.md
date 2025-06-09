```go
r.HandleFunc("/api/personalidades/{id}", controllers.EditaPersonalidade).Methods("PUT")
```
```go
func EditaPersonalidade(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id := vars["id"]
    var personalidade models.Personalidade
    database.DB.First(&personalidade, id)
    json.NewDecoder(r.Body).Decode(&personalidade)
    database.DB.Save(&personalidade)
    json.NewEncoder(w).Encode(personalidade)
}
```
Primeiro é feito a busca para o primeiro elemento com o tal ID. Depois altera-se a partir dos campos novos do usuário, então os alterados serão alterados na personalidade. Depois se usa o save para alterar. 
Se o usuário não preencher todos os campos não haverá problemas, pois já é feito a busca antes.
Você também pode  fazer algo como:
```go
db.Model(&curso).Update("Nome", "Go: Fundamentos de uma aplicação web com GORM")
```
Esse curso, seria um valor anterior obtido com first.