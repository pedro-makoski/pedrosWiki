Use nas rotas o noRoute, assim:
```go
r.NoRoute(controllers.RotaNaoEncontrada)
```
Isso acontecerá sempre que não tiver uma rota pronta feita.