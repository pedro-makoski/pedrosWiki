# Equação linear
$$
a_1x_1+a_2x_2+a_3x_3+...+a_nx_n=b
$$
Onde a1, a2, a3...., an é chamado de coeficiente. x1, x2, x3...xn é chamado de variável. b é chamado de termo independente.
## Não é equação linear
As que envolvem potenciação a um valor diferente de 1 ou que duas variáveis são multiplicadas.
# Sistema linear
É um sistema da forma:
$$
\begin{equation}  
\left\{  
\begin{array}{lr}  
a_{11}x_1+a_{12}x_2+a_{13}x_3+...+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+a_{23}x_3+...+a_{2n}x_n=b_2\\
.\\
.\\
.\\
a_{m1}x_1+a_{m2}x_2+a_{m3}x_3+...+a_{mn}x_n=b_m
\end{array}  
\right.  
\end{equation}
$$
# Solucionando sistema linear 
Chamamos de solução de um sistema a n-upla de número reais ordenados que é igualmente a solução de todas as equações do sistema.
## Matriz associada a um sistema
Por exemplo, em:
$$
\begin{equation}  
\left\{  
\begin{array}{lr}  
x+-y=3\\
2x+ y = 5
\end{array}  
\right.  
\end{equation}
$$
A matriz completa seria:
$$
\begin{bmatrix}
1&-1 &:&3\\
2&1&:&5
\end{bmatrix}
$$
A matriz incompleta seria:
$$
\begin{bmatrix}
1&-1\\
2&1\\
\end{bmatrix}
$$
## Classificação de uma solução
- **SPD:** Sistema possível determinado, única solução. 
- **SPI**: Sistema possível indeterminado, varias soluções possíveis
- **SI**: Sistema impossível, não tem solução possível.
## Sistema normal
Quando o número de equações é igual ao número de variáveis. E quando a sua matriz incompleta é diferente de 0.
## Formas de solução
### Regra de Cramer
Serve apenas para resolver um sistema normal. 
A única solução do sistema é dada por:
$$
x_i = \frac{Dx_i}{D}
$$
D = det A. Sendo a matriz incompleta do sistema
E Dxi é o determinante da matriz variável onde onde i é os termos independentes. Em outras palavras o Dxi é a matriz incompleta onde no lugar dos coeficiente de i é os termos independentes.
### Método do escalonamento
Trata de fazer uma escadinha. Deixando a matriz incompleta em uma matriz onde depois do primeiro elemento vai aumentando a quantidade de variáveis zeradas a esquerda. Afim de que o ultimo elemento seja apenas fazer operações normais, e com o resultado ir descobrindo as outras variáveis. 
#### Identificando o tipo no método do escalonamento
Sendo m o número de equações e n o número de variáveis. 
Se M = N, estão é SPD
Se M < N, estão n-m é determinado o grau de indeterminação. Onde a quantidade variáveis livres é o resultado de n-m, toda a solução vai depender das variáveis livres.
Quando a ultima equação no sistema escalonado der uma sentença falsa, é sistema impossível. Tipo 0Z = 5
