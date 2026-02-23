Um map – também conhecido como array associativo ou dicionário – é uma coleção de pares chave/valor sem ordem definida, em que cada chave é única e armazena um único valor.
Defina um map assim:
```go
map[Type]Type
```
O Type entre colchetes é o tipo da key, e o Type fora dos colchetes é o tipo do valor. 
Para pode usar um map é necessário inicializa-lo:
```go
valores:=make(map[Type]Type)
```
Os retornos de um acesso a um map:
```go
valor, encontrado := mapa[chavedomapa]
```
O valor é o valor respectivo da chave. E o segundo retorno é se o elemento existe ou não. 
# Interação sobre maps
```go
for inicial, contador := range estatisticas { 
	fmt.Printf("%s = %d\n", inicial, contador) 
}
```
Temos os padrões chave e valor, que é retornado no range para cada valor, mostrando cada chave e valor.
Lembrando que as ordens dos elementos é aleatória, então não confie na ordem das amostras dos valores de um map. 