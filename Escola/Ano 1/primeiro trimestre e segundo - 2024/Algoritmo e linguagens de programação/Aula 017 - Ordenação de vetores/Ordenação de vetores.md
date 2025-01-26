# Método bolha - Bubble sort
Passar por todos os elementos do vetor a partir de um valor, e verificar se é maior se for troca. 
```c
#include "stdio.h"
#define QUANTIDADE_DE_VALORES 10

void main()
{
    int valores[QUANTIDADE_DE_VALORES], temp;

    for(int i = 0; i < QUANTIDADE_DE_VALORES; i++) {
        printf("Informe o valor: ");
        scanf("%d", &valores[i]);
    }

    printf("----------Valores Desordenados----------------\n");
    for(int i = 0; i < QUANTIDADE_DE_VALORES; i++) {
        printf("%d\n", valores[i]);
    }

    for(int i = 0; i < QUANTIDADE_DE_VALORES; i++) {
        for(int j = i+1; j < QUANTIDADE_DE_VALORES; j++) {
            if(valores[i] > valores[j]) {
                temp = valores[j];
                valores[j] = valores[i];
                valores[i] = temp;
            }
        }
    }

    printf("----------Valores Ordenados----------------\n");
    for(int i = 0; i < QUANTIDADE_DE_VALORES; i++) {
        printf("%d\n", valores[i]);
    }
}

```