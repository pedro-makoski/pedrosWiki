O pacote bufio:
```go
import "bufio"
```
# New Reader
Possui funcionalidades que podem ajudar no processo de desenvolvimento. Uma delas, é o newReader, que retorna um conjunto de funções a partir de um arquivo. 
```go
arquivo, err := os.Open("sites.txt")
if err != nil {
	fmt.Println("Ocorreu o erro", err)
	return sites
}
leitor := bufio.NewReader(arquivo)
```
Uma dessa funções é a:
## Read String
```go
linha, err := leitor.ReadString('\n')
if err != nil {
	fmt.Println("Ocorreu o erro", err)
	return sites
}
fmt.Println(linha)
```
Que retorna uma string, que contem desde o início até o delimitador indicado no parâmetro da função. 
E você pode fazer isso, por exemplo num for para obter todas as linhas, por exemplo, e parar quando existir o erro io.EOF, ou final de arquivo.
```go
for {
	linha, err := leitor.ReadString('\n')
	linha = strings.TrimSpace(linha)
	if err == io.EOF {
		break
	}
	if err != nil {
		fmt.Println("Ocorreu o erro", err)
		return sites
	}
}
```
E perceba esse [[Strings#TrimSpace|Trim Space]], ele existe para remover \n no final e os espaço extras. 
