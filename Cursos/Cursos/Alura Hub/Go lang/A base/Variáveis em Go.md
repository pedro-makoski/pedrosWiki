# Iniciar uma variável
Existem diversas formas de iniciar uma variável, em Go.
Uma das formas é primeiro usa o comando ``var`` depois passe o nome da variável e depois passe o tipo dela, ficando assim:
```go
var nome string = "Pedro Makoski"
```
Além do tipo string, que é um conjunto de caracteres alfa numéricos também existem outros tipos como:
- float32 - número com casa flutuante, o tamanho dele é 32 bits.
- float64 - número com casa flutuante, o tamanho dele é 64 bits.
- int - define um número inteiro.
Quando você não define uma variável em Go, ela assume o valor 0 do tipo, no int é 0, no float é 0.0, na string é uma string vazia: "", e assim vai. 

Se você criar uma variável, em Go e não a usa, ela retorna um erro. Isso é uma outra **convenção** que é feita, onde toda variável declarada deve ser usada. 