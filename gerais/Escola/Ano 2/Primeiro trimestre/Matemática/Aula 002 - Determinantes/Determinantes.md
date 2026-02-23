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
## 1. Matriz transposta
Def. sendo A uma matriz quadrada. O determinante de A é igual à determinante da transposta de A.
## 2. Fila nula
Se uma fila(linha ou coluna) tiverem todos os seus elementos igual a 0, e a matriz for quadrada o determinante será 0.
## 3. Multiplicação de uma fila por uma constante
Se multiplicar uma linha ou uma coluna de uma matriz quadrada, por uma constante o determinante dessa matriz será a matriz original vezes a mesma constante.
## 4. Troca de filas paralelas
Dada uma matriz quadrada com ordem maior ou igual a dois, quando trocado fila paralelas(linha com linha, coluna com coluna), a determinante será a oposta da versão original(multiplicar por -1).
## 5. Filas paralelas iguais
Se uma matriz de ordem n>=2, possui pelo menos duas fileiras paralelas iguais, o determinante será 0.
## 6. Teorema de Cauchy
Se pegarmos uma fila de uma matriz quadrada e multiplicarmos os valores de cada uma delas pelos cofatores de uma fila paralela o determinante será 0.
## 7. Filas paralelas proporcionais 
Quando duas filas paralelas(duas linhas ou duas colunas) são proporcionais, a determinante será 0. Isso só funciona em matriz quadradas de ordem maior ou igual a 2.
## 8. Adição de determinantes
A determinante de uma matriz quadrada, a qual uma das filas é a soma de duas matrizes iguais exceto por essa fila, é igual a soma dos determinantes dessas matrizes.
## 9. Teorema da combinação linear
Quando temos uma fila(linha ou coluna) que é a combinação linear das outras filas paralelas. O determinante é 0.
## 10. Teorema de Jacobi
Sendo A uma matriz quadrada B a qual uma fila multiplicada por uma constante foi adicionada por uma fila paralela. |A| = |B|
## 11. Matriz triangular
Sendo A uma matriz quadrada triangular.
![[images.png]]
O determinante da matriz A é a multiplicação dos valores da diagonal principal
## 12. Teorema de benet
Sendo A e B quadradas de mesma ordem 
$$
det(A*B) = det(A)*det(B)
$$
