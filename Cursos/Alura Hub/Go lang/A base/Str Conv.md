```go
import "strconv"
```
Permite converter vários formatos diferentes de arquivos. 
Já o pacote strconv fornece uma grande variedade de funções para a conversão de strings para outros formatos e vice-versa.
# strconv.FormatBool()
Transforma string em booleano. 
```go
strconv.FormatBool(status)
```
# Atoi - Texto para inteiro
```go
salario := 1000
salarioConvertido, err := strconv.Atoi(salario)
```
As funções de conversão sempre retornam um erro. E para evita-los colocamos o seguinte:
```go
if err != nil { 
fmt.Println(err) 
}
```
# Itoa - inteiro para texto
```go
novoSalarioInt := 2019 
salarioConvertido := strconv.Itoa(novoSalarioInt) 
fmt.Println(numeroConvertido)
```
# parseFloat
```go
salarioConvertido, err := strconv.ParseFloat(salario, 64)
```
Retorna o convertido e o possível erro. Passamos como parâmetros o valor decimal, e o tamanho, podendo ser 32 ou 64.