Transforma um objeto em um conjunto de bytes:
```ts
valorJson, _ := json.Marshal(aluno)
```
Ele também retorna um erro.
# Criando buffer a partir de bytes
Eu posso criar um io.Reader a partir de uma lista de bytes usando bytes.NewBuffer(), exemplo:
```go
req, _ := http.NewRequest("PATCH", pathParaEditar, bytes.NewBuffer(valorJson))
```