# time.Sleep
Para dar um tempo, ela faz com que o programa espere tanto tempo, para que algo aconteça.
```go
import "time"
```
Faça isso para usar o pacote.
```go
time.Sleep(10 * time.Minute)
```
Essa constante minute, converte para o tempo, a qual esta o time.Sleep. Também temos a constante time.Second, que converte para segundos: `time.Second`, ou para milésimos, e assim vai. 
# Simplificação no import
Ao invés de criar vários imports em sequência, você pode criar da seguinte forma:
```go
import (
    "fmt"
    "os"
    "net/http"
    "time"
)
```
Colocando vários pacotes em sequência dentro de imports. 