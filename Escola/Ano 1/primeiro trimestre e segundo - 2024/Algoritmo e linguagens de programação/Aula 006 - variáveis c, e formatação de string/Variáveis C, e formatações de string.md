## Formatando strings
### Números inteiros
para colocar números inteiros formatados, que variam, na string se usa o ==%d.==
```c
printf("%4d", 10);
```
resultado:
  10
quando colocamos um 4(ou qualquer outro número) atrás do d, significa que vai caber quatro espaços(que podem ficar vazios ou com numero depende do numero do format) daquele número lá.
```c
printf("%04d", 10);
```
resultado
0010
quando colocamos um 0{o numero}, os espaços vazios ficam preenchidos com o número 0.
### Números Reais ou Float
podemos colocar os números Reais, usando ==%f==.
usa se a mesma regra do que antes do 04 e 4 por exemplo, lembrando que esses espaços também contam com a virgula.
inclusive você pode limitar o número de valores que vão estar depois da virgula, podendo que fique como zero(para o que você não preencheu), ou dependendo que se for menor o espaço arredonde. usando o %.{valor de casa a pós a virgula}f
```c
printf("%.2f", 2.99);
```
resultado: 
2.99
```c
printf("%.1f", 2.99)
```
resultado:
3
```c
printf("05.1f", 2.55);
```
resultado:
002.5
### Caracteres
se usa o ==%c==. o caractere é em aspas simples.
```c
printf("%c", 'O');
```
resultado:
O
### Strings
se usa o ==%s==. a string é em aspas duplas.
```c
printf("%s", "banana");
```
resultado:
banana
### Importante
se coloco "%d, %d, %d, %f, %s, %c" vai ser nessa ordem que deve ser colocada nos parâmetros, ou seja 1, 2, 3, 4.1, "banana", 'O'. e assim aparecera:
1, 2, 3, 4.1, banana, O

## Variáveis
### Inteira - int
valores **sem casa decimal**, em números podem ser eles: -5, -6, 5, 6 e etc.
```c
int x;
x = 1;
```
o int x; define a variável, o x = 1, atribui 1 á variável.
### Real - decimal - Float
valores **com casa decimal**, são exemplos deles: -5.5, 5.6, 8.995, 1.245 e assim vai. Lembrando que esse ponto seria o equivalente a , nos nosso números.
```c
float x;
x = 1.5;
```
o float x cria a variável x, e x = 1.5 atribui 1.5 á x.
### Char - caractere
define um caractere, ou seja uma letra, numero ou símbolo só que não pode ser somado, ele fica entre aspas simples.
```c
char x;
x = 'A';
```
o char x cria a variável x, e x = 'A' atribui A, para a variável x.
