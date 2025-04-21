Definição é um número que associa-se a uma matriz quadrada. 
# Determinante de primeira ordem
O det é o valor do próprio elemento, que é o único.
# Determinante de segunda ordem
Multiplica-se os valores da diagonal principal(quando o i é igual a j) e subtrai-se com a secundária(quando não é a principal).
$$
\begin{vmatrix}
a_{11} & a_{12}\\
a_{21}& b_{22} 
\end{vmatrix} = Dp-Ds = (a_{11}*a_{22})-(a_{12}*a_{21})
$$
Perceba esse traços que não são colchetes nem parênteses, eles indicam que a igualdade do valor devera ser a determinante da matriz que ele acopla.
# Determinante de terceira ordem
## Regra de Samus
Monta-se uma matriz estendida, colocando ou as duas primeiras coluns a direita da matriz, ou as duas primeiras linhas abaixo da matriz. Então se traça três diagonais com três valores, multiplica-se os valores da diagonais, soma os resultados da diagonal principal e secundária, e depois subtrai Dp-Ds.
## Teorema de Laplace
Funciona para qualquer matriz quadrada maior ou igual a 2.
Melhor quando temos uma fileira com muitos zeros. A ideia trata-se de primeiro escolher uma filieira(linha ou coluna - de preferência com menor quantidade de 0s). E calcular o menor complementar de cada valor, exceto quando é 0. E depois calcular o complementar, dessa forma:
$$
C_{ij} = (-1)^{i+j}*\begin{vmatrix} MC_{ij} \end{vmatrix}
$$
Lembrando que esses dois traços são a determinante, do menor complementar. i+j é a linha atual, mais a coluna. Então quando a soma de i+j for par a determinante continua igual, mas quando for impar vai inverter o sinal. 
E depois é só multiplicar os complementares de cada valor com o valor, e somar todos. E assim ter a determinante. 
### O que é menor complementar
É a matriz que sobra quando excluímos a linha e a coluna de um valor. Por exemplo o menor complementar de C_11, vai ser a matriz sem a linha 1 e a coluna 1.
# Propriedades
## Primeira
Quando se repete as duas primeiras fileiras(linha ou coluna), o det será 0. 