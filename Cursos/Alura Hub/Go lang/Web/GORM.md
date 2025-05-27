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