Permite decodificar um JSON, obtendo o objeto referente a ele diferente de um conjunto de bytes.
Para funcionar o código a seguir, coloque nos imports:
```go
import (
	"encoding/json"
)
```

```go
json.Unmarshal(resposta.Body.Bytes(), &alunoMock)//Ele recebe como parâmetros os bytes do body da resposta, e um ponteiro do lugar que deve colocar a resposta.
```