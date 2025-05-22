Normalmente a formatação do texto do JSON é diferente da estrutura Go. Para o Go entender os dois casos, você pode colocar entre crases json:"" e dentro das aspas duplas o nome que fica no JSON.
```go
type Personalidade struct {
    Nome     string `json:"nome"`
    Historia string `json:"historia"`
}
```