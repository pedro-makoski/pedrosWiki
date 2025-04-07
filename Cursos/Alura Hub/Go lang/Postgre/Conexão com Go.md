Você pode procurar várias libs em Go aqui: https://pkg.go.dev/?utm_source=godoc
Para fazer isso use a bilbioteca pq, através da instalação feita da seguinte forma:
```cmd
go get github.com/lib/pq
```
Depois é necessário criar uma string de conexão:
```go
conexao := fmt.Sprintf("user=postgres dbname=alura_loja password=%s host=localhost sslmode=disable", password)
```
Ela deve conter esse parâmetros para funcionar. Para obter os dados, basta ir no sistema pgAdmin, em PostgreeSQL ``<versao>``. Deve se clicar em properties e depois connection, para ver os dados.
# Função panic
```go
panic(msg)
```
Cria um erro com a mensagem.
# Comando defer
```go
defer funcao()
```
Coloca para executar por ultimo.
# Função de conexão:
```go
func conectaComBancoDeDados() *sql.DB {
    err := godotenv.Load()
    if err != nil {
        panic(err.Error())
	}
    password := os.Getenv("PASSWORD_DB")
    conexao := fmt.Sprintf("user=postgres dbname=alura_loja password=%s host=localhost sslmode=disable", password)
    db, err := sql.Open("postgres", conexao)
    if err != nil {
        panic(err.Error())
    }
    
    return db
}
```
O sql.Open abre um servidor, em tal banco de dados, com tal string de conexão. 
Depois para fechar, você pode pegar o retorna função e executar o método `.Close()`.
# Procurar itens em uma coluna 
```go
func index(w http.ResponseWriter, r *http.Request) {

    db := conectaComBancoDeDados() // conecta com o banco de dados

    defer db.Close()

  

    selectDeTodosOsProdutos, err := db.Query("select * from produtos") // faz o query da tabela produtos e retorna as linhas

    if err != nil {

        panic(err.Error())

    }

  

    p := Produto{}

    produtos := []Produto{}

  

    for selectDeTodosOsProdutos.Next() {//Vai procurando novos itens até que acabe, as linhas. 

        var id, quantidade int

        var nome, descricao string

        var preco float64

  

        err := selectDeTodosOsProdutos.Scan(&id, &nome, &descricao, &preco, &quantidade)// Faz o scan de todos as linhas da coluna atual. Precisa estar na ordem certa. 

        if err != nil {

            panic(err.Error())

        }  

  

        p.Id = id

        p.Nome = nome

        p.Descricao = descricao

        p.Preco = preco

        p.Quantidade = quantidade

  

        produtos = append(produtos, p)

    }

  

    templates.ExecuteTemplate(w, "index", produtos)

}
```