**são as principais**: decimal, binário, octal, hexadecimal.
## Lei de formação
$$
A_{n}B^{n} + A_{n-1}B^{n-1} + A_{n-2}B^{n-2} + ~~ ... ~~ A_0B^{0}
$$
onde:
- A<sub>n</sub> é o algarismo de acordo com a posição.
- B é a base numérica, por exemplo Decimal é 10, octal é 8, binário é 2 e assim vai.
- n: quantidade de algarismos menos 1.
### Exemplo com 259 em decimal
- n é 3-1 = 2; pois são três algarismos.
- b é 10, pois estamos usando a base decimal.
- A<sub>0</sub> = 9; pois na posição(n) zero temos o o valor 9.
- A<sub>1</sub> = 5; na posição 1 temos o valor 2;
- A<sub>2</sub> = 2; na posição 2 temos o valor 2.

| 2   | 1   | 0   |
| --- | --- | --- |
| 2   | 5   | 9   |
calculando:
$$
2.10^{2} + 5.10 + 9. 10^{0} = 200 + 50 + 9 . 1 = 200 + 50 + 9 = 259
$$
## Decimal
os agrupamentos são feitos de 10 em 10. os algarismos utilizados são de 0 á 9. esse é o sistema mais comum. á base de 10.
## Binários
Apenas dois números 0 e 1. chave aberta/chave fechada; ligado/desligado. cada valor binário é chamado de bit(binary digit ou digito binário em tradução livre), um conjunto de 8 bits formam um byte. inclusive 1 byte pode formar um caractere. á base 2.
### Conversão Decimal para Binário
Dividir o número de forma sucessiva por 2 até chegar ao ultimo quociente possível, o número convertido será composto pelo último quociente e os restos na ordem invertida. 
### Conversão Binário para Decimal
usamos a lei da formação para descobrir, por exemplo o número 100101 que no caso o ultimo seria 0, e o primeiro seria 5.
$$
100101_{2} = 1.2^{5} + 0.2^{4} + 0.2^{3} + 1.2^{2} + 0.2^{1} + 1.2^{0} = 32 + 0 + 0 +  4 + 0 + 1 = 37_{10}
$$
perceba-se que o expoente indica a posição de trás para frente começando com zero.
Para fazer devemos Multiplicar cada número por 2 e elevar ao expoente de acordo com a posição que ele ocupa([[#Lei de formação]]).
## Octal
Oito algarismos de 0 á 7. cada digito octal corresponde a três dígitos binários. O sistema octal é á base de 8. 
### Decimal para Octal
Faz o mesmo que no do decimal para binário, só que invés de dividir por dois consecutivamente, se divide por 8 até chegar a um valor menor que 8 no resultado da divisão.
### Conversão Octal para decimal
Fazer o mesmo do binário para decimal, só que ao invés da base 2, seria a base 8, que eleva um valor de acordo com a posição do número multiplicado. E depois de tudo some os valores multiplicados. 
### Conversão de Octal para binário
Deve se converter cada algarismo no seu correspondente binário, caso a conversão resulte em um valor com menos de três dígitos, complete com 0 a esquerda. Para ser mais fácil, use essa tabela:

| Decimal | Binário | Octal |
| ------- | ------- | ----- |
| 0       | 000     | 0     |
| 1       | 001     | 1     |
| 2       | 010     | 2     |
| 3       | 011     | 3     |
| 4       | 100     | 4     |
| 5       | 101     | 5     |
| 6       | 110     | 6     |
| 7       | 111     | 7     |
Exemplo: 
$$
534: 5, 3, 4:101, 11, 100; 101~011~100_2 = 534_8
$$
### Conversão de Binário para octal
Fazemos o contrário, separamos de três em três dígitos, e calculamos cada um desses grupos. 
$$
101~011~100_2 : 101_2 = 5_{10}; 100_{2} = 4_{10}; 011_2 = 3_{10} 
$$
Então o resultado na ordem é **534**, ou seja 101 011 100 é igual a 534.
## Hexadecimal 
16 algarismos. 0 á 9, A, B, C, D, E, F. Cada digito hexadecimal é representado por 4 binários. á base de 16. 

São numerados da seguinte forma: 

| Decimal | Binário | Octal | Hexadecimal |
| ------- | ------- | ----- | ----------- |
| 0       | 0       | 0     | 0           |
| 1       | 1       | 1     | 1           |
| 2       | 10      | 2     | 2           |
| 3       | 11      | 3     | 3           |
| 4       | 100     | 4     | 4           |
| 5       | 101     | 5     | 5           |
| 6       | 110     | 6     | 6           |
| 7       | 111     | 7     | 7           |
| 8       | 1000    | 10    | 8           |
| 9       | 1001    | 11    | 9           |
| 10      | 1010    | 12    | A           |
| 11      | 1011    | 13    | B           |
| 12      | 1100    | 14    | C           |
| 13      | 1101    | 15    | D           |
| 14      | 1110    | 16    | E           |
| 15      | 1111    | 17    | F           |
| 16      | 10000   | 20    | 10          |
### Decimal para hexadecimal
Se multiplica sucessivas vezes por 16. Até o valor no resultado ser menor que 16. E se faz como o decimal para o binário pegando da chave da ultima divisão, até o o primeiro resto. Lembre-se que se der um resto ou um resultado de 10 para cima, você troca de acordo com a tabela, por exemplo, se der 10 vai ser A. 
### Hexadecimal para decimal 
Aplica-se a [[#Lei de formação]], igual aos outros, mas mudando a base de 2 ou 8 para **16**.
### Hexadecimal para binário 
Converta cada número do hexadecimal(incluindo as letras), para seu respectivo em binário, com 4 dígitos, não havendo 4 preenche com 0 a esquerda. 
1 = 0001
2 = 0010
3 = 0011
B<sub>16</sub> = 1011<sub>2</sub> = 11<sub>10</sub> 
### Conversão de binário para hexa 
Separe-se os dígitos de 4 em 4, da direita para a esquerda. E depois converta cada grupo no seu respectivo hexadecimal. 
