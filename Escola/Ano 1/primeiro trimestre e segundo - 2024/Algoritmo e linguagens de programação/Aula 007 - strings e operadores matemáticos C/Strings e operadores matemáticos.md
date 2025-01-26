## Strings
***São nada mais do que um ==conjunto== de caracteres ou char***
<hr>
por exemplo char a tem como valor 'O', perceba que está em aspas simples, nele só cabem um caractere, se eu quiser mais, eu necessito colocar na memoria, para reservar mais caracteres.
para criar um conjunto de caracteres criamos uma variável char a[numero de caracteres maximo da string], o valor em colchetes define quanto de espaço ele vai reservar para a variável a, quantas caracteres cabem, que podemos por exemplo definir como char a[40], que vai fazer com que tenha 40 caracteres no máximo, podemos atribuir a isso um valor do tipo: "Batata azul", ==perceba-se que está em aspas duplas==.
se eu colocar um valor maior que 40 caracteres ele vai colocar até onde dá, e vai colocar um colchete, ou as vezes colocar outra variável.
exemplo:
```c
char a[40] = "Banana azul";
```
## Operadores matemáticos em C
---
por enquanto não muda no que vimos no [[variáveis e operações matemáticas#Operações matemáticas|flowgorithms]], mas vamos retomar.
- * - multiplicação.
- + - soma
- / - divisão.
- % - resto.
- -  subtração.
- () - dá prioridade para ser resolvida os cálculos que estão dentro dos parenteses, primeiro.
- pow() - potenciação
### Sobre o pow
método para potenciação, colocamos o valor da base no primeiro termo, e o expoente no segundo.
```c
int potencia = pow(5, 2);
```
a potência nesse caso vai ser de 25, pois 5 ao quadrado é 25.
só não se esqueça de fazer o include do math.h. caso ao contrário não funcionara.
```c
#include "math.h"
```