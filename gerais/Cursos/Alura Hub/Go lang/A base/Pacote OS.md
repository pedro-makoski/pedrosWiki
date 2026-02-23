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
O readFile já abre e fecha o arquivo por padrão.
# Ler caminho do arquivo de forma mais inteligente
Você pode usar o método do OS:
```go
os.OpenFile(file, flag, fileMode)
```
O primeiro é o arquivo que você quer ler. O segundo é a flag:
![[Pasted image 20250213180414.png]]
Que indica o que você quer que ele faça, você pode juntar flags com o operador |. Assim por exemplo:
```go
os.O_RDWR|os.O_CREATE
```
Que poder tanto um, quanto outro.
Já no file mode, tem um número em octal que indica as permissões do arquivo, por exemplo:
- 0666: permite com que o arquivo seja escrito e criado. 
Por exemplo, esse código cria ou abre um arquivo:
```go
func createOrOpen(path string) {

    arquivo, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE, 0666)
    defer arquivo.Close()
    if err != nil {
        fmt.Println("Ocorreu o erro", err)
        return
    }

    fmt.Println(arquivo)
}
```
## write file
```go
arquivo.WriteString(site + "- online:" + strconv.FormatBool(status))
```
Esse código tem um problema, pois se você usa o WriteString ele sobrescreve o arquivo, sobrescrevendo a primeira linha, nos primeiros caracteres. 
Você pode resolver isso, adicionando nas flags, ``os.O_APPEND`` que faz com que o arquivo faça appends, ao invés de sobrescrever. 
```go
arquivo, err := os.OpenFile("log.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
defer arquivo.Close()
if err != nil {
	fmt.Println("Ocorreu o erro", err)
	return
}

arquivo.WriteString(site + "- online:" + strconv.FormatBool(status) + "\n")
```
# os.Args
Retorna uma lista de argumentos usadas no terminal, para executar o programa. Por exemplo:
```sh
arquivo test oi
```
Retorna uma slice com:
- arquivo
- test
- oi
# os.Create(path)
Cria um arquivo. 





