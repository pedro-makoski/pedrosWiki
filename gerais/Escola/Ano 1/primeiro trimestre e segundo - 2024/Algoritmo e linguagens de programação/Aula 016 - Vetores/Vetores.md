Variáveis, que possuem vários valores, dentro de si. 
int nome_da_variável[quantidade_de_valores_que_ela_pode_ter] = {valor_1, valor_2, valor_3};
No fluxo grama, é usado o que seria um arranjo. Onde ao clicar em arranjo, em baixo, na definição, também aparecerá uma caixa, onde você colocará a quantidade máxima de valores que ela pode ter. 
# Índice e valor
Para atribuir um valor, a um local de um vetor, é necessário identificar o Índice que começa do 0, e termina no valor máximo - 1. Então:
x[0] = 1; 
Nesse código acima, ele coloca 1(valor), na posição 0(índice).
# Valores aleatórios em C
Utiliza-se a biblioteca time.h, pois ela tem uma função que gera valores aleatórios a partir do tempo.
Depois é necessário, colocar srand(time(NULL)), para permite, que se gere valores aleatórios de fato. E depois para encontrar um valor aleatório, utiliza-se a função rand(). Para encontrar um valor aleatório entre um intervalo. Você pode colocar rand()%(valor+1), assim ele ficara entre 0 e o valor. 
Isso funciona assim, pois o resto não pode ser maior que valor+1, porque senão poderia ser dividido. Perceba que se trocássemos por valor, ele iria de 0 até valor-1.
```c
#include "stdio.h"
#include "time.h"

void main() {
	srand(time(NULL));
	int x; 
	x = (rand()%60)+1;
}
```
Nesse código, x será um valor entre 1 e 60. 