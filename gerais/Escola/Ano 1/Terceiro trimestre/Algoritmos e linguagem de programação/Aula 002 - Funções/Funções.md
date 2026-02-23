Existem dois tipos de função priicipal em c. 
```c
int main() {
	//codigo
	return 0;
}
```
```c
void main() 
{
	//codigo.
}
```
Perceba que o int main, tem um return, isso pois a função int, retorna um valor inteiro. Por isso return 0. Já o void main, ele retorna algo vázio, ou seja não precisa de return, mas se quiser pode ter. 
# função padrão
Você pode criar uma função assim:
```c
void cabecalho()
{
	printf("Ola mundo");
}

void main() 
{
	cabecalho()
}
```
Perceba-se que foi criado uma função chamada cabecalho, que imprime na tela Ola mundo. E quando chamamos cabecalho, é feito exatamente o que aquela função faz.

Se eu chamasse cabecalho() duas vezes, ele imprimiria Ola mundoOla mundo.
## Parâmetros 
Dentro dos parênteses você define os parâmetros, que podem ser maleados de acordo com quando você usa uma determinada função. Para colocar você coloca nos parênteses do função o tipo e o nome do parâmetro, se tiver mais separe entre vírgulas os diferentes parâmetros.
```c
void sum(int valor1, int valor2) {
	int res = valor1+valor2;
	printf("%d", res);
}

void main() {
	sum(1, 2);//resultado: 3
	int n;
	printf("Informe n: ");
	scanf("%d", &n);

	sum(n, 5); //vai ser o valor de n+5;
}
```
## Retorno
Lembra quando era a função void main(), que usavamos o retorno vázio. Isso pois era void, ou seja vázio. Agora, se fosse int x(), por exemplo retornária um valor inteiro, se fosse float x(), retornará um valor do tipo flutuante, e assim vai. Para enteder melhor veja: [[variáveis e operações matemáticas#Variáveis|Tipos]]. 
Veja um exemplo:
```c
int sum(int valor1, int valor2) {
	int res;
	res = valor1+valor2;
	return res;
}
```
Você pode tanto fazer return res, quanto return(res).
Para chamar a função:
```c
void main() {
	int x = 5;
	int y;
	int soma;
	printf("Informe y: ");
	scanf("%d", &y);

	soma = sum(x, y); //atribui a variável x+y
	printf("%d", soma);//imprime x+y ou soma.
}
```
# Cor no terminal
Com o comando system você pode colocar qualquer comando que pode ser usada no terminal. Inclusive colocar cores.
```c
system("Color xy");
```
O x define a cor de fundo, e o y a cor da letra. Se fosse só um valor, ele seria a cor da letra. 
As cores dentro do parâmetro x ou y, pode ser para as cores:

|Código|Valor  <br>Numérico|Cor|
|---|---|---|
|BLACK|0|Preto|
|BLUE|1|Azul|
|GREEN|2|Verde|
|CYAN|3|Ciano|
|RED|4|Vermelho|
|MAGENTA|5|Magenta|
|BROWN|6|Marrom|
|LIGHTGRAY|7|Cinza-claro|
|DARKGRAY|8|Cinza-escuro|
|LIGHTBLUE|9|Azul-claro|
|LIGHTGREEN|10|Verde-claro|
|LIGHTCYAN|11|Ciano-claro|
|LIGHTRED|12|Vermelho-claro|
|LIGHTMAGENTA|13|Magenta-claro|
|YELLOW|14|Amarelo|
|WHITE|15|Branco|
# Página de funções
Isso serve para criar uma estrutura de arquivos em C. Afim de termos uma melhor organização. 
Em Code Blocks você clica em File > new Project > Console Aplication > Go. Depois disso faça suas configurações como o nome do arquivo e localização do arquivo. Depois acesse no lado esquerdo em:
manegement > projects > o título que você nas configurações ao seu projeto > sources. 
Então você coloca no int main, a função principal, que chama as funções. Crie também um funcoes.c, pode fazer com outros nomes, mas tem que terminar com .c. Depois crie um funcoes.h, onde tera a assinatura das funcoes da funcoes.c. Depois no arquivo main você deve importar o funcoes.h, assim
```c
#include <funcoes.h>
```
Lembrando que nem sempre você tem que definir como funções, pode ser qualquer outro nome. 
# Assinatura de funções
Se esta é a função:
```c
int calcSum(int n1, int n2) {
	return n1+n2;
}
```
A assinatura é esta: 
```c
int calcSum(int n1, int n2);
```
Não se esqueça do ponto e vírgula.
# Função com passagem por referência
A função por padrão, pode ter variáveis, com valores. E mesmo que essa função tenha uma variável com o mesmo nome que outra, elas não vão se confundir entre nomes. Porque o endereço é diferente. Mas agora e se quisermos usar a mesma variável, você pode então fazer uma passagem por referência onde passamos como parâmetro o endereço do elemento, que pode ser obtido com o e comercial &. Por exemplo a variável a, tem como descobrir o endereço com &a.

Depois na função você coloca depois do tipo e antes da chamada do parâmetro, um asterrisco(``*``). E sempre quando for chamar a variável do endereço, você passa o asterrisco(``*``) antes dela.

```c
void mudarValores(int *a, int *b, int *c) {
	int status;
	status = *a;
	*a = *b;
	*b  = *c;
	*c = status;
}

void main() {
	int a, b,c;
	a = 5; b = 6; c=7;
	mudarValores(&a, &b, &c);
	printf("A: %d;B: %d; C: %d", a, b, c); //res: A: 6; B: 7; C: 5; 
}
```
# Funções recursivas 
---
É uma função que como característica, a chamada da própria dentro dela mesma. Fazendo assim um certo tipo de repetição. Mas para evitar, problemas de loop infinito é necessário usar um ponto de parada ou melhor dizendo um return. 
```c
#include "stdio.h"

int  pedirValueInt(char* msg) {
    int value;
    printf("%s", msg);
    scanf("%d", &value);
    return value;

}  

int calcFatorial(int number) {
    int res;
    if(number==1||number==0) {
        return 1;
    }

    res=number*calcFatorial(number-1);
    return res;

}

  

void main() {
    int number, res;
    number = pedirValueInt("Informe o numero: ");
    res = calcFatorial(number);
    printf("Resultado: %d", res);

}
```
A função ``calcFatorial()``, por exemplo, quando o number não for 1, vai multiplicar pela mesma função, só que com um parâmetro menor. Fazendo tipo uma pilha, onde o primeiro a entre, é o ultima a ter o retorno. E assim vai se multiplicando até a volta da primeira execução, que vai ter todas as multiplicações.