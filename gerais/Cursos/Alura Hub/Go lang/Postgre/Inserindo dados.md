Usando a função de conexão com o banco de dados. Exute o seguinte comando numa função:
```go
insereDadosNoBanco, err := db.Prepare("insert into produtos(nome, descricao, preco, quantidade) values($1, $2, $3, $4)")
    if err != nil {
        panic(err.Error())
 }
```
Isso é a partir de um exemplos. Os nomes/campos e suas quantidades podem ser diferentes. Veja que temos $1 e outros semelhantes, isso faz com que possamos passar por parâmetros esses valores depois pelo exec. Uma vez que ele ainda não rodou, só preparou.
```go
insereDadosNoBanco.Exec(nome, descricao, preco, quantidade)
```
Depois a partir disso colocamos o exec, e passamos os parâmetros na ordem dos números que colocamos $1, $2, neste exemplo.