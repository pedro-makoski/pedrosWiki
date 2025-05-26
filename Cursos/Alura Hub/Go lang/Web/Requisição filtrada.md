Vamos supor, que usando o gorilla mux, queremos criar um método GET, que retorne um filtro específico a partir de um valor da URL.
Para fazer isso, no seu arquivo de routes.go, coloque:
```go
r.HandleFunc("/api/personalidades/{id}", controllers.RetornaUmaPersonalidade).Methods("GET")
```
Perceba que colocamos {id}, isso vai trazer para nós a variável id. 
E a função RetornaUmaPersonalidade, faz o seguinte:
```go
func RetornaUmaPersonalidade(w http.ResponseWriter, r *http.Request) {

    vars := mux.Vars(r)

    id := vars["id"]

  

    for _, personalidade := range models.Personalidades {

        if strconv.Itoa(personalidade.Id) == id {

            json.NewEncoder(w).Encode(personalidade)

            return

        }

    }

  

    json.NewEncoder(w).Encode(map[string]string{"message": "Personalidade não encontrada"})

    w.WriteHeader(http.StatusNotFound)

}
```
mux.Vars(r), consegue obter a partir da requisição, as variáveis do id, a partir de um map. 
# O que é WriteHeader
Isso permite colocar um status code(inteiro) para a resposta, como 200, 404 e afins. 
```go
w.WriteHeader(http.StatusNotFound)
```
Você pode colocar qualquer valor inteiro que seja um status code como parâmetro.