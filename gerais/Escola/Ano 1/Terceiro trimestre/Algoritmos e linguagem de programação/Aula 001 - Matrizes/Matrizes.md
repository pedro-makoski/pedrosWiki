Conjunto de vetores. ![[Pasted image 20241025151425.png]]
As linhas desses elementos são os vetores. E as colunas os valores de cada vetor em sua respectiva linha. 
# Código
Não é possível fazer matriz no flowGorithm.
```c
int matriz[3][4];
```
Com esse código cria se uma matriz, com 3 linhas(vetores) e 4 valores cada.
```c
matriz[0][0] = 1;
matriz[0][1] = 2;
matriz[0][2] = 3;
matriz[0][3] = 4;
matriz[1][0] = 1;
matriz[1][1] = 2;
matriz[1][2] = 3;
matriz[1][3] = 4;
matriz[2][0] = 1;
matriz[2][1] = 2;
matriz[2][2] = 3;
matriz[2][3] = 4;
```
Assim a matriz fica:
$$
\left[
\begin{matrix}
1 & 2& 3 & 4\\  
1 & 2& 3 & 4\\
1 & 2& 3 & 4\\
\end{matrix}\right]
$$
Podemos também fazer assim:
```c
int linha, coluna;
for(linha = 0; linha < 3; linha++) {
	for(coluna = 0; coluna < 4; coluna++) {
		matriz[linha][coluna] = coluna;
	}
}
```
$$
\left[
\begin{matrix}

0 & 1& 2 & 3\\  
0 & 1& 2 & 3\\
0 & 1& 2 & 3\\
\end{matrix}\right]
$$
## Iniciar matriz C
```c
int matriz[3][4] = {{1, 2, 3, 4}, {1,2,3,4}, {1,2,3,4}}
```
Cada chave equivale a uma linha. Exceto a chave principal que conjunta tudo. E cada valor é um valor de cada linha, formando assim as colunas.  
$$
\left[
\begin{matrix}

1 & 2& 3 & 4\\  
1 & 2& 3 & 4\\
1 & 2& 3 & 4\\
\end{matrix}\right]
$$
# Matriz transposta
O que é coluna vira linha e o que é linha vira coluna. Uma matriz invertida. 
$$
a =\left[
\begin{matrix}
1 &2&3\\
4&5&6\\
7&8&9
\end{matrix}
\right]
$$
$$
a^t =\left[
\begin{matrix}
1 &4&7\\
2&5&8\\
3&6&9
\end{matrix}
\right]
$$
A ideia do código é essa:
```c
int matriza[3][3] = {{1, 2, 3}, {4,5,6}, {7, 8,9}};
int matrizat[3][3];

for(int linha = 0; linha < 3; linha++) {
	for(int coluna = 0; coluna < 3; coluna++) {
			matrizat[linha][coluna] = matriza[coluna][linha];
	}
}
```
>[!error] Atenção
>Matrizes transpostas só funcionam quando a matriz original é quadrada, ou seja mesma quantidade de linhas e colunas
