Primeiro carregue todos os arquivos de tamplete a partir de sua pasta, por exemplo:
```bash
r.LoadHTMLGlob("templates/*")
```
Neste caso, r é o dono gin.Engine, e loadHTMLGlob carrega todos os templates dentro da pasta templates.
# Exibindo HTML
```go
func ExibePaginaIndex(c *gin.Context) {

    c.HTML(http.StatusOK, "local-do-arquivo.html", gin.H{

        "mensagem": "Boas vindas",//Dados que serão passados para o template

    })

}
```
Dai por exemplo neste caso, o atributo mensagem, pode ser acessado da seguinte forma, por exemplo:
```html
<h1>{{.mensagem}}</h1>
```
# Passando lista no Data
Caso no data(terceiro parâmetro) você passe uma lista no HTML você pode usar o range para percorrer por ela:
```html
{{range .alunos}}
                <li>{{.Nome}}</li>
{{end}}
```
Neste exemplo ele passa por todos alunos e mostra seu nome.
