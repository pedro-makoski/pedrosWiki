# Para que serve
Funções relacionadas com o sistema operacional. Já vimos isso com a função os.Exit. 
# Ler arquivo
```go
func lerSitesDoArquivo() []string {
    file, err := os.Open("sites.txt")
    if err != nil {
        return []string{}
    }
    fmt.Println(file)
    return []string{}

	file.Close()
}
```
O file é um tipo, que te devolve o caminho da memória, que está o arquivo. Quando o arquivo não existe ele retorna `nil`, que é como null em outras linguagens. 

A função também retorna um erro, e quando ele é nil não tem erro. E quando é diferente de nil então ocorreu algum erro, por isso err != nil. Por convenção, o ultimo parâmetro é sempre o erro, quando necessita.

Lembrando que como boa prática, para que outros programas consigam ler o arquivo, é de extrema importância ler e depois fecha-lo. Com o file.Close()
# Ler arquivo de forma mais eficiente
Você obter os bytes de um arquivo. Usando o `os.ReadFile()` que retorna um array e uma lista de bytes que podem ser transformados em uma string:
```go
file, err := os.ReadFile("sites.txt")
if err != nil {
	fmt.Println("Ocorreu o erro", err)
    return 
}
fmt.Println(string(file))
```