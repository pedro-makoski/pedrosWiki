```go
package database

  

import (

    "log"

  

    "github.com/pedro-makoski/alura-Go/curso-5-gin/models"

    "gorm.io/driver/postgres"

    "gorm.io/gorm"

)

  

var (

    DB  *gorm.DB

    err error

)

  

func ConectaComBancoDeDados() {

    stringDeConexao := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"

    DB, err = gorm.Open(postgres.Open(stringDeConexao))

    if err != nil {

        log.Panic("Erro ao conectar com banco de dados")

    }

    DB.AutoMigrate(&models.Aluno{})//Pega a struct aluno e cria uma tabela sobre ele
}
```
```go
type Aluno struct {

    gorm.Model//Inclui o ID, o createdAt, updatedAt e deletedAt no banco de dados

    Nome string `json:"nome"`

    CPF  string `json:"cpf"`

    RG   string `json:"rg"`

}
```
# Função de criar item na tabela
```go
func CriaNovoAluno(c *gin.Context) {

    var aluno models.Aluno

    if err := c.ShouldBindJSON(&aluno); err != nil {// O ShouldBind conecta o JSOM do body e coloca a partir do tipo aluno

        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})//Envia um erro

        return

    }

    database.DB.Create(&aluno)//Adiciona o novo aluno

    c.JSON(http.StatusOK, aluno)//Da um status ok e retorna aluno

}
```
```go
r.POST("/alunos", controllers.CriaNovoAluno)
```
# Atualizando colunas
```go
database.DB.Model(&aluno).UpdateColumns(aluno)
```
Procura a partir do modelo do aluno, e altera as colunas em função das colunas de aluno.
# Where no GORM
```go
database.DB.Where(&models.Aluno{CPF: cpf}).First(&aluno)
```
Ele procura o aluno que tem os mesmos dados que a entidade criada. E coloca o primeiro elemento em ``aluno``