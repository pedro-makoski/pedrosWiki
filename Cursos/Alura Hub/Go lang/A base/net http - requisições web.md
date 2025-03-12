Agora vamos falar sobre como fazer requisições na WEB, usando o net/http. Permitindo assim verificar se um site está no ar ou não. 
# Get response
Você pode obter a resposta de um site HTTP, da seguinte forma:
```go
resp, err := http.Get("urlDoSite")
```
Onde o resp é a resposta do site, e o err, para ver se aconteceu algum erro na obtenção. 
# response.StatusCode
Ele retorna o status Code do site. Ou seja, se for statusOk, vai ser 200, pode dar um erro 404, e assim vai. 
Você pode testar, assim: 
```go
func iniciarMonitoramento() {
    fmt.Println("Monitorando...")
    site := "https://httpbin.org/status/404"
    resposta, _ := http.Get(site)
    if resposta.StatusCode == 200 {
        fmt.Println("Site:", site, "foi carregado com sucesso!")
    } else {
        fmt.Println("Site:", site, "está com problemas. Status code:", resposta.StatusCode)
    }
}
```
Neste caso a url usada, vai ser sempre 404, ou seja vai cair no else. Mas podemos mudar para `"https://httpbin.org/status/200"` afim de que caia no if prinicipal: foi carregado com sucesso.  
