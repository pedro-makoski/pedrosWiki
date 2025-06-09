Matrizes são conjunto de linhas e colunas, que possuem certos números. Dispostos entre as linhas e colunas. Por exemplo:
![[imagem-matriz.png|Imagem de uma matriz 3x3, disposta entrê parênteses]]
Perceba que as matrizes podem ser representadas tanto entre colchetes([]) quanto em parênteses({}).

Nota: perceba que durante este blog falaremos de ordem, ordem é a quantidade de linhas de uma matriz pela quantidade de colunas. Portanto se a ordem é i x j, a quantidade de linhas é i e a quantidade de colunas é j. 


Com as matrizes você pode realizar operações entre elas. Veja algumas delas:
## Soma Ou Subtração De Matrizes
Funciona apenas entre matrizes de exata mesma ordem. O resultado da soma de matrizes de mesma ordem é uma nova matriz onde cada posição é a soma dos elementos da mesma posição das matrizes. O mesmo para subtração, só que ao invés da soma é subtração. 

Portanto, se:
A = B+C
então:
a<sub>ij</sub>= b<sub>ij<sub> + c<sub>ij</sub>
Esse ij ao lado do nome da matiz em minúsculo, indica o valor da linha i e coluna j. 
## Multiplicação De Matrizes 
Muitas pessoas erram e fazem no mesmo estilo da soma e subtração, mas a forma correta é seguindo estes passos:
1. Sendo A<sub>i x j</sub>× B<sub>m x n</sub>, o número de j deve ser igual a m.
2. Crie uma matriz nova com ordem i x n. 
3. A cada valor da matriz indica i x n, pegue cada valor da linha linha i da matiz A e cada valor da coluna n da matriz B, multiplica os respectivos e soma os valores da multiplicação. 
## Testando Cálculos 
Talvez ao fazer essas operações, você esteja se perguntando, será que fiz o cálculo de forma corretamente. Para saber você pode usar o [[https://www.rantool.com/funcoes/Calculos/Calculadora-de-matrizes/|Calculadroa de matrizes]] defina as matrizes do cálculo, e coloque a expressão e clique em calcular. E veja o resultado.