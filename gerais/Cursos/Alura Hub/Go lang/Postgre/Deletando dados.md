```go
func DeletaProduto(id string) {

    db := db.ConectaComBancoDeDados()

    defer db.Close()

  

    deletaNoBancoDeDados, err := db.Prepare("delete from produtos where id=$1")

    if err != nil {

        panic(err.Error())

    }

  

    deletaNoBancoDeDados.Exec(id)

}
```
Esse código foi baseado num id do tipo string que é passado como parâmetro para deletar.