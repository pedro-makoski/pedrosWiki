## Como usar comentários
// -> faz comentários que só acontece em código fonte, você pode usa-los para os leitores do seu código entenderem melhor ele. Esse comentário em 2 barras só comenta uma linha.
/*  coloca se aqui comentário que podem ter mais de uma linha
linha 2
linha 3*/
## Resolvendo o problema do acento
cada caractere ou letra do alfabeto, símbolo ou numero está numa tabela ASC, que por exemplo o ç fica numa posição que dependendo da língua pode aparecer outra coisa. então precisamos mudar a configuração de letra para português.
Para fazer inclua a biblioteca locale.h.
```c
#include "locale.h"
```
depois mude a configuração para português, colocando o conjunto de caracteres o ASC da máquina em português.
```C
setlocale(LC_ALL, "Portuguese");
```
## Algumas formatações de texto
\\" é usado para colocar aspas numa string, onde dentro da string você pode colocar aspas sem ter erro.
%d numa string, faz com que ele espere um valor numérico no próximo argumento, que vai colocar no lugar do %d.
```c
printf("\"%d\"", 34);
```
resultado do programa:
"34"