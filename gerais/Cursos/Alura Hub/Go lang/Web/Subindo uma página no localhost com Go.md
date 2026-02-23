Primeiramente é necessário criar um arquivo HTML, preferencialmente numa pasta templates.
Você precisará importar os seguintes pacotes:
```go
import (
    "net/http"
    "html/template"
)
```
E depois precisará indicar os templates existentes, assim, globalmente:
```go
var templates = template.Must(template.ParseGlob("templates/*.html"))
```
Isso trás todos os templates, que atendem ao retorno do parseGlob, que é basicamente um jeito de trazer arquivos a partir de um pattern. 
Na função main:
```go
func main() {
    http.HandleFunc("/", index)
    http.ListenAndServe(":8000", nil)
}
```
Os handlefuncs devem estar antes do listenAndServe. O handleFunc, chama uma função para executar numa rota específica. E o listenAndServer, executa tudo numa porta localhost.
Na função index, pode ser ter o seguinte:
```go
func index(w http.ResponseWriter, r *http.Request) {
    templates.ExecuteTemplate(w, "index", nil)
}
```
Que coloca na resposta, a execução do template que foi definido com index, passando nenhum dado adicional, por isso nil. Para que funcione o HTML precisa começar com
```html
{{define "index"}}
```
Isso é necessário para indicar que o nome do template é index. E no final insira o seguinte:
```html
{{end}}
```
Naquele execute template, onde agente coloca nil, podemos colocar dados, como por exemplo, esse slice:
```go
produtos := []Produto{
	{
		Nome: "Camiseta",
		Descricao: "Azul, Bem bonita",
		Preco: 19,
		Quantidade: 15,
	},
	{
		Nome: "Tênis",
		Descricao: "Confortável",
		Preco: 90,
		Quantidade: 3,
	},
	{"Fone", "Muito bom", 60, 2},
	{"Produto novo", "Muito leal", 1999, 1},
}
```
```go
templates.ExecuteTemplate(w, "index", produtos)
```
E podemos usar esses dados dentro do index, para coisas, como por exemplo, fazer um range e colocar várias trs:
```go
{{range .}}
	<tr>
		<td>{{.Nome}}</td>
		<td>{{.Descricao}}</td>
		<td>{{.Preco}}</td>
		<td>{{.Quantidade}}</td>
	</tr>
{{end}}
```
Isso basicamente diz para percorrer todos os itens da lista principal de parâmetro indicada com ``.``, e então acessamos cada valor colocando o campo, por exemplo .Nome, do campo nome. E o end para indicar que acabou o range.
