Você pode colocar arquivos Estaticos no gin da seguinte forma:
```go
r.Static("/assets", "./assets")
```
O primeiro parâmetro indica o que vai ser o caminho que vai ser digitado no navegador, ja o segundo é o caminho do CSS.