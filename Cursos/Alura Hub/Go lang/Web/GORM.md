O ORM do Go. Para baixar use:
```bash
go get -u gorm.io/gorm
```
E como estamos desenvolvendo com postgress, insira também:
```bash
gorm.io/driver/postgres
```
```GO
package database

  

import (

    "log"

  

    "gorm.io/driver/postgres"

    "gorm.io/gorm"

)

  

var (

    DB  *gorm.DB

    err error

)

  

func ConectaComBancoDeDados() {

    stringDeConexao := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"//String para conectar com o banco de dados

    DB, err = gorm.Open(postgres.Open(stringDeConexao), &gorm.Config{})//Conecta com o banco de dados

    if err != nil {
        log.Panic("Erro ao conectar com banco de dados")
    }

}
```
# Consultar todos os dados
```go
var p []models.Personalidade
database.DB.Find(&p)
```
Para saber qual tabela o GORM deve usar ele pluraliza uma versão minúscula, do nome da struct.
# Consultar o primeiro de item da tabela com certo valor
```go
var personalidade models.Personalidade

database.DB.First(&personalidade, id)
```
Encontra a primeira personalidade com o mesmo id.
# Inserir item numa tabela
## Método POST - Gorilla Mux
```go
r.HandleFunc("/api/personalidades", controllers.CriaUmaNovaPersonalidade).Methods("POST")
```
## Criando função
```go
func CriaUmaNovaPersonalidade(w http.ResponseWriter, r *http.Request) {

    var personalidade models.Personalidade

    json.NewDecoder(r.Body).Decode(&personalidade)

    database.DB.Create(&personalidade)

    json.NewEncoder(w).Encode(personalidade)

}
```
Não se esqueça de colocar o &, no DB create, isso faz com que ele colocará todos os dados faltantes que você não prencheu na tabela.
O r.Body, é o corpo da requisição, por exemplo, no postman, podemos colocar em Body, um raw no formato JSON, e esse JSON é colocado no r.Body, que é convertido no tipo estruturado.