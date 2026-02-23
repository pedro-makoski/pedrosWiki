No Go, a formatação de strings é frequentemente realizada usando o pacote `fmt`, que fornece uma série de interpoladores para diferentes tipos de dados. Abaixo, exploraremos os principais interpoladores usados para formatar saídas.

|Interpolador|Descrição|
|---|---|
|`%d`|Inteiros decimais|
|`%f`|Números de ponto flutuante|
|`%s`|Strings|
|`%q`|Strings com aspas|
|`%x` e `%X`|Hexadecimal (minúsculo e maiúsculo)|
|`%b`|Binário|
|`%p`|Ponteiros|
|`%t`|Booleanos|
|`%v`|Valor padrão|
|`%+v`|Valor padrão com campos|

## Exemplo prático

```go
package main

import "fmt"

func main() {
    idade := 30
    preco := 19.99
    nome := "João"
    status := true
    numero := 255

    fmt.Printf("Idade: %d anos\n", idade)
    fmt.Printf("Preço: %.2f\n", preco)
    fmt.Printf("Nome: %s\n", nome)
    fmt.Printf("Status: %t\n", status)
    fmt.Printf("Número em hexadecimal: %x\n", numero)
}
```

A saída será:

```yaml
Idade: 30 anos
Preço: 19.99
Nome: João
Status: true
Número em hexadecimal: ff
```

> Conhecer e usar interpoladores de forma eficaz permite que você formate e exiba dados de maneira precisa e clara, melhorando a depuração, a usabilidade e a apresentação dos resultados no seu software.