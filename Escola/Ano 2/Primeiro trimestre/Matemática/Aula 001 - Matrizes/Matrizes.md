São nada mais nada menos que tabelas.  

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

Que possuem as colunas(j) e as linhas(i). Todas as: I x J = ordem das matrizes, A ordem por sua vez indica o tamanho da matriz. Ou seja quantidade de linhas x quantidade de colunas, e é sempre assim nenhuma vez diferente. 
$$
\begin{pmatrix}  
1 & 2 & 3\\  
3 & 4 & 5
\end{pmatrix}
$$
Essa matriz vista tem uma ordem 2x3. E matriz de conter números [[Conjuntos#Conjunto dos números reais|reais]]. 
$$
\begin{bmatrix}  
1 \\
2\\
3
\end{bmatrix}
$$
Essa é uma matriz 3x1. As matrizes podem ser representadas por colchetes ou parênteses, nada mais. Tem que ser ou colchetes ou parênteses. 

Numa representação da ordem matriz deve se ter primeiro a quantidade de linhas depois a de colunas, não importa a letra IxJ ou NxM.
# Tipo de matrizes
## Matriz linha
$$
A = \begin{bmatrix}  
1 &2 &3
\end{bmatrix}
$$
## Matriz coluna
$$
B =\begin{bmatrix}  
1 \\
2\\
3
\end{bmatrix}
$$
## Matriz quadrada
$$
A = \begin{bmatrix}
1 &2 &3\\
1&1&1\\
5&4&2
\end{bmatrix}
$$
## Matriz nula
$$
A= \begin{pmatrix}
0&0\\
0&0
\end{pmatrix}
$$
Possui só zeros. É nula. 
## Matriz identidade 
Ela começa sempre com I. Ela é uma matriz quadrada, ou seja para cada linha tem uma coluna. Os valores na diagonal principal são iguais. 
$$
I_3=\begin{pmatrix}
1&0&0\\
1&1&1\\
2&3&1
\end{pmatrix}
$$
Temos também esse índice, que indica a quantidade de linhas/colunas.
### O que é diagonal principal
Aonde o I e o J são iguais. Ou seja o índice de linhas é o mesmo que o da coluna. 
## Matriz diagonal superior e inferior
Quando os valores em cima ou em baixo da diagonal principal são iguais a 0. 
$$
A = \begin{pmatrix}
1&3&4\\
0&2&x\\
0&0&-1
\end{pmatrix}
$$
Esse foi um exemplo de matriz diagonal superior. 
$$
A = \begin{pmatrix}
1&0&0\\
1&2&0\\
2&3&-1
\end{pmatrix}
$$
Esse foi um exemplo de matriz diagonal inferior. 

# Posição de um valor da matriz
Se coloca o nome da variável da matriz, junto com o ij, ou seja o número da linha e da coluna. Por exemplo, se um elemento está na linha 1 e na coluna 2, de uma matriz A, então a sua posição é 
$$
A_{11}
$$Então:
$$
A_{ij}
$$
# Determinação de um exemplo de matriz por enumeração 
Por exemplo:
$$
A= (a_{ij})_{2x2}/a_{ij}=i+j
$$
Traduzindo:
Determine uma matriz A, sendo que as linhas são i, e as colunas são j, tal que cada posição da matriz 2x3, é o valor de i+j. 
A matriz genérica:
$$
A = \begin{pmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}\\
\end{pmatrix}
$$
O resultado:
$$
A = \begin{pmatrix}
2&3\\
3&4\\
\end{pmatrix}
$$
# Igualdade das matrizes
**Definição**: duas ou mais matrizes são iguais se possuem a mesma ordem e seus elementos são exatamente iguais, na mesma posição. 
# Adição e subtração de matrizes 
Para isso funcionar, é necessário que tenha a mesma ordem. 
Para realizar a soma de duas matrizes, pegam-se cada posição tipo a11 e b11 e depois soma cada um, ou subtrai cada um, dependendo da operação. Sempre quando houver um + ou um -, você deve pegar cada elemento e fazer a operação com seu respectivo. 
## Matriz oposta
Podem ser representada por -{Letra da matriz}, ou colocando um traço em cima do A/B/C/Ou qualquer letra que representa a matriz. Se trata de multiplicar todos os elementos da matriz por -1. 
# Multiplicação de um número escalar(Número real) com uma matriz
**Definição**: a multiplicação de um número escalar(real) por uma matriz, é igual a todos os valores da matriz multiplicados por aquele valor. Por exemplo 
$$
A = \begin{pmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}\\
\end{pmatrix}*x
$$
$$
A = \begin{pmatrix}
a_{11}*x&a_{12}*x\\
a_{21}*x&a_{22}*x\\
\end{pmatrix}
$$
# Multiplicação das matrizes
## Passo a passo
1. Verifique se as duas matrizes é do tipo nxm. Se não for não funcionará
2. Verifique se a matriz do primeiro termo tem o mesmo número de colunas que o número de linhas do segundo termo
3. Crie uma matriz com ordem de número de linhas do primeiro termo x número de colunas do segundo termo. 
4. A cada posição da matriz faça o seguinte cálculo, pegando o número da linha e da coluna. O número da linha você pega a linha do primeiro termo, e pegando o número da coluna, você pega a coluna do segundo termo. Então você com esses valores você multiplica os correspondentes(ex.:posição 1 linha, posição 1 da coluna), e soma tudo, obtendo assim o valor da matriz resultante.
## Importante
Diferente da propriedade comutátiva, vista em números normais, isso não existe para matrizes, a posição dos termos da multiplicação das matrizes importa. 

