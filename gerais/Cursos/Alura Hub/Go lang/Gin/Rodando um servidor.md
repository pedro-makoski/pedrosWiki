```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()//Cria um servidor gin padrão

    r.Run(":5000")// roda na porta :5000, caso você não informe, ela rodará na 8080 por padrão.

}
```