>O pacote `gorilla/mux`implementa um roteador de solicitações e um despachante para corresponder as solicitações recebidas aos seus respectivos manipuladores.

Para baixa-lo use:
```bash
go get -u github.com/gorilla/mux
```
Depois no sua função de rotas, faça algo como:
```go
import (

    "api/rest/controllers"

    "log"

    "net/http"

  

    "github.com/gorilla/mux"

)

  

func HandleRequest() {

    r := mux.NewRouter()//Instância um sistema de rotas

    r.HandleFunc("/", controllers.Home)//Coloca uma função para cuida da routa

    r.HandleFunc("/api/personalidades", controllers.TodasPersonalidades)

    log.Fatal(http.ListenAndServe(":8000", r))//Perceba, que colocamos o r, como handler da função.

}
```
