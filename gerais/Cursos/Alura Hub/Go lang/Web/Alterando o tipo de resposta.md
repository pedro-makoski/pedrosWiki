Por padrão o tipo, é um tipo de txt, que não formata o JSON como esperado. Porém, você pode alterar o ContentType do Header, para JSON, por exemplo, assim:
```go
w.Header().Set("Content-type", "application/json")
```
Assim agente muda para o modo Content-type como JSON. Colocando isso no inicio da função.
Porém colocar, isso em todas as funções poder ser um pouco complicado. Por isso é super interessante, colocar um Middleware, que vai acontecer toda vez que uma rota for chamada. 
# Criando Middleware em Go
1. Crie uma pasta e um pacote. Num dos arquivos do pacote Faça o seguinte:
```go
func ContentTypeMiddleWare(next http.Handler) http.Handler {

    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

        w.Header().Set("Content-type", "application/json")


        next.ServeHTTP(w, r)

    })

}
```
Esse next é a função que vem depois do middleware, ele retorna uma função de handler também. Que tem um wr padrão, depois agente aplica tudo que era para fazer no middleware, e falamos para executar o que vem depois usando next.ServeHTTP(w, r).