Isso é bom para ocultar várias informações que nem sempre são uteis, afim de deixar o terminal mais limpo.
Para fazer isso, antes de instanciar o gin.Default(), coloque:
```go
gin.SetMode(gin.ReleaseMode)
```