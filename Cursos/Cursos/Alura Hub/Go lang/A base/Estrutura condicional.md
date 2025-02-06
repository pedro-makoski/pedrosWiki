# IF/ELSE IF/ELSE
Você pode fazer estrutura de controles em Go, da seguinte forma: 
```go
if comando == 1 {
        fmt.Println("Monitorando...")
} else if comando == 2 {
	fmt.Println("Exibindo logs...")
} else if comando == 0{
	fmt.Println("Saindo do programa")
} else {
        fmt.Println("Não conheço este comando")
}
```
Perceba algumas regras:
- Não se tem por convenção, o uso dos parênteses no ``if`` nem no else if nem no else.
- O parâmetro passado dentro do If, deve sempre retornar um valor boleano. Ou seja, o valor qie você passa após o if, deve retornar ou true ou false, qualquer coisa diferente disso retorna um erro. 
- As chaves devem sempre estar na linha do if ou do else if ou do else.
# Instrução switch 
No exemplo acima, existe uma forma mais simples, de resolver o problema. Você pode usar o switch, que testa vários casos diferentes, para uma variável:
```go
switch comando {
	case 1:
		fmt.Println("Monitorando...")
	case 2:
		fmt.Println("Exibindo logs...")
	case 0:
		fmt.Println("Saindo do programa")
	default:
		fmt.Println("Não conheço este comando")
}
```
Perceba que não tem break, ele já encerra por padrão. Diferente de outras linguagens o switch funciona com qualquer tipo. E diferente de outras linguagem, que quando você quer que uma seria de casos de valores resulte num caso, você coloca vários cases em linha em sequência no Go, você coloca entre virgulas, assim:
```go
switch comando {
	case 1, 10:
		fmt.Println("Monitorando...")
	case 2, 20:
		fmt.Println("Exibindo logs...")
	case 0, 30, 40:
		fmt.Println("Saindo do programa")
	default:
		fmt.Println("Não conheço este comando")
}
```
Assim o mesmo comando que executa quando o valor é 1, também executará quando o valor é 10. O padrão se repete em 2 e 20. E no 0, 30, 40 testa para ver se é 0, 30 ou 40. E assim executa o comando. 
