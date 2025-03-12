# Gin
Manuseia, e ajuda no processo de criar uma API restful. 
```go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"//Importa o gin
    "fmt"
)
/*Cria uma estrura para o banco de dados que será perdido ao encerrar a API*/
type Album struct {
    ID string `json:"id"`
    Title string `json:"title"`
    Artist string `json:"artist"`
    Price float64 `json:"price"`
}

  

var albums = []Album{//Criará um conjunto de valores para a estrutura 
    {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
    {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},

}

  

func main() {
    router := gin.Default()//Inicializa o gin 
    
    router.GET("/albums", getAlbuns)//Usa o get, na rota /albuns, e realiza a função getAlbuns
    router.GET("/albums/:id", getElementByID)////Usa o get, na rota /albuns/:id, e realiza a função getElementById, onde id na rota seria qualquer valor inserido pelo usuário. 
    router.POST("/albums", postAlbuns)//Cria uma rota post /albuns, e ao ser ativado essa rota com o verbo chama a função post albuns.
    router.Run("localhost:8080")//Roda a instância, no localhost como a porta 8080, iniciando o código. 
}

func getAlbuns(c *gin.Context) {//gin.Context oferece uma serie de funções para usarmos a partir da rota, e contexto em que foi enviado.
    c.IndentedJSON(http.StatusOK, albums)//Retorna no site um JSON identado, com o status ok, 200, e a resposta é albuns. 
}

  

func postAlbuns(c *gin.Context) {
    var newAlbum Album

    if err := c.BindJSON(&newAlbum); err != nil {//err := c.BindJSON(&newAlbum), o erro retorna se aconteceu algum problema ao atribuir, e se tudo der certo o newAlbum recebe o valor enviado pelo método post. 
        return;
    }
  
    albums = append(albums, newAlbum)//Insere em albums o novo album
    c.IndentedJSON(http.StatusCreated, newAlbum)//E mostra o novo album de forma identada. 

}

  

func getElementByID(c *gin.Context) {
    id := c.Param("id")//Obtem o parâmetro id da rota. 

    for _, album := range albums {
        if album.ID == id {
	        /*Aqui ele achou o album com o id */
            c.IndentedJSON(http.StatusOK, album)//Mostra o o album achado, com o status ok
            return
        }

    }

  

    c.IndentedJSON(http.StatusNotFound, gin.H{"message": fmt.Sprintf("O album %v não pode ser encontrado", id)})//Caso não tenha achado retorna com status not found, um erro escrito em gin.H com o message. 
}
```
# Escrever arquivo em go
```go
func (p *Page) save() error {//Isso é obtido a partir de uma estrutura a qual não está aqui
    filename := p.Title + ".txt"//Define o título 
    return os.WriteFile(filename, p.Body, 0600)//Escreve no arquivo. Se dar errado retornar um erro, se não retorna nil((o valor zero para ponteiros, interfaces e alguns outros tipos). O valor octal 0600 diz que o arquivo só permite que o arquivo seja gravado e lido somente pelo usuário atual. 
}
```
# Ler arquivo em GO
```go
func loadPage(titulo string) *Page {
    fileName := titulo + ".txt"
    body, _ := os.ReadFile(fileName)//Ele retorna o corpo do arquivo em []byte, e depois retorna um erro
    return &Page{Title: fileName, Body: body}
}
```
# Realizar build em Go
```
go build nomeDoArquivo.go
```
Depois para executar no windows(precisa de ./):
```
./NomeDoArquivo
```
# Servidor web simples exemplo
```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {//Responsewriter - ele reune o valor de resposta no servidor, ao escrever nele, enviamos os dados ao cliente http. 
//http.Request, representa os dados de solicitação do usuário. 
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])//Ele está aqui basicamente procurando macacos, que está no r.URL.path, porém usamos os valores a partir de 1, pois tem também a barra, e não queremos ela. O w, do primeiro parâmetro é para ele escrever na resposta do usuário. 
}

func main() {
    http.HandleFunc("/", handler)//Diz para a função handler, cuidar de todas as solicitações para a rota principal "/"
    log.Fatal(http.ListenAndServe(":8080", nil))//Deve escutar na porta 8080. Ele está dentro do log.Fatal, pois o listen and serve pode retornar um erro, e quando isso acontecer ele realiza o log.Fatal desse exemplo. Graças ao pacote log. A função listenAndServe só retorna quando o erro ocorre. 
}
```
Outro comando para tratar erro é o redirect, que você pode fazer que ao dar um erro redirecionar para uma página existente, tipo a de um erro ou de criar. 
```go
http.Redirect(w, r, "/edit/"+title, http.StatusFound)//w é do http.ResponseWritter, r é de *http.Request, "/edit/"+title é o caminho que vai levar ao redirecionar. E o http.StatusFound é o status de quando for enviado com sucesso de status found, 302. 
```
Outro uso do request:
```go
body := r.FormValue("body")//procura o unico campo de formulário na página
```
Para enviar status de erro você deve:
```go
http.Error(w, err.Error(), http.StatusInternalServerError)//w é o http.ResponseWritter, err.Error() é a mensagem de erro, http.StatusInternalServerError é o status de erro interno do servidor. 
```
# html/template
Pacote a qual você pode usar para executar código HTML em servidor http em Go. 
```go
func editHandler(w http.ResponseWriter, r *http.Request) {
    title := r.URL.Path[len("/edit/"):]
    p, err := loadPage(title)
    if err != nil {
        p = &Page{Title: title}
    }
    t, _ := template.ParseFiles("edit.html")//Retorna a t, um tipo de ponteiro, que permitirá utilizar o HTML de alguma forma.
    t.Execute(w, p)//Por exemplo, aqui ele usa o t para executar dentro da resposta w. O t.execute retorna um valor de erro, não estamos atribuindo, pois não vamos usa-lo.  usando o objeto para formatar o html que você verá a seguir: 
}
```
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar</title>
</head>
<body>
    <h1>Edição {{.Title}}</h1><!-->.title seria o p.Title</!-->
    <form action="/save/{{.Title}}" method="post">

        <div>

            <textarea name="body" rows="20" cols="80">
                {{printf "%s" .Body}}<!-->.Body seria p.Body, mas o printf %s é para converter o argumento em string ao invés de um fluxo de bytes.</!-->
            </textarea>

        </div>

        <div>

            <input type="text" value="save">

        </div>

    </form>

</body>

</html>
```

# Cache dos modelos
Fazer a importação dos modelos toda vez que a função é chamada é um processo que envolve muito processamento. Por isso criamos uma variável templates assim:
```go
var templates = template.Must(template.ParseFiles("edit.html", "view.html"))
```
O parsefiles já vimos, sim eles podem receber mais de um valor. O templates.Must, é para que caso de algum tipo de erro, aconteça uma espécie de panico, dando erro quando o valor não for nulo. 
Então para executar os templates você faz o seguinte:
```go
func renderTemplate(w http.ResponseWriter, nameTemplate string, p *Page) {
    err := templates.ExecuteTemplate(w, nameTemplate+".html", p)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}
```
# Título obtido usando regexp
```go
var validPath = regexp.MustCompile("^/(edit|save|view)/([a-zA-Z0-9]+)$")
m := validPath.FindStringSubmatch(r.URL.Path)//Se for nil é porque aconteceu algum erro de correspondência. Se for correto ele vai retornar, nesse caso, um array com duas substrings, que são tiradas a partir de cada parênteses, o primeiro se é edit, save ou view. E depois o título realmente. 
```
```go
func getTitle(w http.ResponseWriter, r *http.Request) (string, error) {
    m := validPath.FindStringSubmatch(r.URL.Path)
    if m == nil {
        http.NotFound(w, r)
        return "", errors.New("invalid Page Title")//Retorna um erro, se o valor for nil. 
    }
    return m[2], nil // The title is the second subexpression.
}
```
Você pode então ao invés de ficar tratando função por função o erro, você pode apenas inserir em cada função o parâmetro tipo, e então realizar essa função:
```go
func makeHandler(fn func (http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        m := validPath.FindStringSubmatch(r.URL.Path)
        if m == nil {
            http.NotFound(w, r)
            return
        }
        fn(w, r, m[2])
    }
}
```
Aqui:
```go
func main() {
    http.HandleFunc("/view/", makeHandler(viewHandler))
    http.HandleFunc("/edit/", makeHandler(editHandler))
    http.HandleFunc("/save/", makeHandler(saveHandler))
    log.Fatal(http.ListenAndServe(":8080", nil))

}
```
Basicamente aqui agente obtem como parâmetro uma função daquele tipo que fizemos antes, com o parâmetro string, então você retorna a função handler de fato, com a string já tratada, e se tudo der certo ele executa a função de parâmetro a partir dos dados do handler tratatados, nesse caso o título. 