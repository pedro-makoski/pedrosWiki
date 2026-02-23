Feitos para fazer condições de computador, por exemplo se uma variável for maior que tanto faz isso, se não faz aquilo, ou se é igual, menor, etc... 
Em C eles podem ser representados assim, vamos supor que tenhamos uma variável, se ela for menor que 0, ou seja negativa, executa uma ação, se não faz outra ação.
```c
#include "stdio.h"

void main() 
{
	int x;
	x = 0;

	if(x < 0) 
	{
		//x é negativo. Aqui vai o código caso seja negativo
	} else {
		//x não é negativo. Aqui caso não seja.
	}
}
```
## Outros métodos  de comparação
---
!== - É diferente

== - É igual
< - é menor que
`> `- é maior que,
`>=` - é maior ou igual. 
<= é menor ou igual. 
## Condições no flow
---
![[Pasted image 20240725170441.png]]
Perceba que é feito uma ação se for verdadeira(a **expressão no losango**), e outra ação se for falso(**expressão no losango**). 
## Tabela verdade
Imagine que seja necessário criar uma expressão, contendo condições, e a partir disso é feito true ou false. Você pode usar o and/&&/e ou or/||/ou, com suas respectivas funções. 

| Condição 1 | Condição 2 | Resultado And | Resultado Or |
| ---------- | ---------- | ------------- | ------------ |
| V          | V          | V             | V            |
| F          | V          | F             | V            |
| V          | F          | F             | V            |
| F          | F          | F             | F            |
O not em linguagem de programação, pode ser representado por !, o not/! pode contrariar, ou seja: !V = F e !F = V.