1. eleger um elemento da lista como pivô e removê-lo da lista; 
2. particionar a lista em duas listas distintas: uma contendo elementos menores que o pivô, e outra contendo elementos maiores; 
3. ordenar as duas listas recursivamente;
4. retornar a combinação da lista ordenada de elementos menores, o próprio pivô, e a lista ordenada de elementos maiores
```go
package main  

import (
    "fmt"
    "os"
    "strconv"
)
  
func convertAllToNumber(list []string) []int {
    var result []int = make([]int, len(list))
    for index, value := range list {
        value, err := strconv.Atoi(value)
        if err != nil {
            return result
        }
        result[index] = value
    }
    return result
}

  

func main() {
    input := os.Args[1:]
    valoresInteiros := convertAllToNumber(input)
    fmt.Println(quicksort(valoresInteiros))

}

func quicksort(numeros []int) []int {
    if(len(numeros) <= 1) {
        return numeros
    }
    numerosCopy := make([]int, len(numeros))
    copy(numerosCopy, numeros)

    indicePivo := len(numerosCopy) / 2
    pivo := numerosCopy[indicePivo]

    numerosCopy = append(numerosCopy[:indicePivo], numeros[indicePivo+1:]...)
    menores, maiores := particionar(numerosCopy, pivo)

    return append(append(quicksort(menores), pivo), quicksort(maiores)...)
}

  

func particionar(numeros []int, pivo int) (menores []int, maiores []int) {
    for _, n := range numeros {
        if n <= pivo {
            menores = append(menores, n)
            continue
        }
        maiores = append(maiores, n)
    }
    
    return
}
```