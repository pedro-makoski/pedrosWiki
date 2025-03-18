# Python
- Alto nível
	- Enxuta com poucas regras
- Sintaxe simples e direta
- dá possibilidade de programar usando o paradigma de programação orientada a objetos. 
- Possui muitas libs.
- Tipagem dinâmica. Com os tipos inferiveis. 
- Linguagem case-sensitive.
- Linguagem versátil e portátil. 
- Tem como regra a identação, que é obrigátoria. E são 4 espaços. 
# O que é IDE
Ambiente de desenvolvimento integrado. 
# Importante
No email a professora sempre mandar pelo campo assunto o nome e a turma.
# Tipos primitivos
- int: números inteiros
- float: numeros reais
- string: textos
- bool: valores lógicos, True ou False.
# Operadores aritméticos 
- +  soma
- - subtração 
- / divisão 
- `*` multiplicação 
- ** exponenciação 
# Operadores de comparação 
- == - é igual a 
- != é diferente de
- <  é menor que
- > é maior que
- <= é menor ou igual
- >= é maior ou igual
# Operadores lógicos
- and - operador e
- or - operador ou 
- not - operador de negação 
# Entrada do terminal
```python
nome_var = input("mensagem-antes-do-usuário digitar")
```
Assim o valor retornado será a string digitada pela usuário, para converter em inteiro, caso queira, ou float, pode se usar o tipo como método assim, por exemplo:
```python
idade = int(input("Digite sua idade: "))
```
# Saída no terminal
```python
print(f"Teste {nome}")
```
Imprime um valor do terminal. Não precisa do f no começo, esse f é usado para poder chamar variáveis, quando colocadas dentro de {}. O print também pode ter \n para quebrar a linha. Inclusive por padrão no python tem um valor end="\n", antes de fechar os parênteses você pode colocar o end=" ", para dar um espaço ao invés de quebrar a linha.