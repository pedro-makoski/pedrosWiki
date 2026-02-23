Para validar que uma entrada esteja correta pelo GIN podemos usar a biblioteca:
```bash
go get gopkg.in/validator.v2
```
# Exemplo uso
```go
package models

  

import (

    "gopkg.in/validator.v2"

    "gorm.io/gorm"

)

  

type Aluno struct {

    gorm.Model

    Nome string `json:"nome" validate:"nonzero"`//Valida que não pode ser um valor nil para ponteiro, zero para int ou float e não pode ser "" para string

    CPF  string `json:"cpf" validate:"len=11, regexp=^[0-9]*$"`// O len deve ser 9, e o regexp está indicando que só pode receber números

    RG   string `json:"rg" validate:"len=9, regexp=^[0-9]*$"` // O len deve ser 11

}

  

func ValidaDadosDeAlunos(aluno *Aluno) error {// Criar uma função que valida se o aluno está certo com o Validate

    if err := validator.Validate(aluno); err != nil {

        return err

    }

  

    return nil

}
```
# Verificando
```go
if err := models.ValidaDadosDeAlunos(&aluno); err != nil {

        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

        return

    }
```
Assim ele valida os dados de um alunos usando aquela função, e retorna um erro caso contrário.