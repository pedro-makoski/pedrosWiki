```go
func AtualizarProduto(id int, nome string, descricao string, preco float64, quantidade int) {

    db := db.ConectaComBancoDeDados()

    defer db.Close()

  

    atualizaProduto, err := db.Prepare("update produtos set nome=$1, descricao=$2, preco=$3, quantidade=$4 where id=$5")//Altere todas essas propriedades com seus valores na linha que tem um id específico. 

    if err != nil {

        panic(err.Error())

    }

  

    atualizaProduto.Exec(nome, descricao, preco, quantidade, id)

}
```
Perceba, que quando fazemos isso é possível que você espere um valor do id, no formValue, só que disponível no controllers. Para colocar o id no formulário, sem permitir que os usuários mecham. Crie um input com o type="hidden", que não aparecerá. 
