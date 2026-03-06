# Todos os conjuntos
![[Pasted image 20260112102322.png]]
## Naturais(N)
$$
N = \{0, 1, 2, 3, ...\}
$$
Não engloba valores negativos, nem com virgula.
$$
N^* = \{1, 2, 3, 4, 5...\}
$$
O `*` indica os não nulos. Ou seja não inclui 0.
$$
N_p = \{0, 2,4,6, ...\}
$$
<- Números naturais pares.
$$
Np={n \in N  / n*2}
$$
$$
Ni={n \in N  / n*2+1}
$$
<- Números impares.
## Inteiros(Z)
Os naturais, só que incluindo valores inteiros negativos.
$$
Z = \{..., -3,-2,-1,0,1,2,3,...\}
$$
$$
Z^* = \{..., -3,-2,-1,1,2,3,...\}
$$
$$
Z_+ = \{0,1,2,3,...\}
$$
O + indica os inteiros não negativos.
O - indica os números não positivos.
$$
Z_- = \{..., -3,-2,-1, 0\}
$$
Também tem os `*+` que indica os positivos. E os `*-` que indica os negativos.
## Racionais(Q)
Todo os números racionais podem estar escritos em forma de fração entre dois números inteiros, e o denominador não pode ser 0. Eles incluem os inteiros e além disso os valores quebrados ou decimais. Além disso incluem as dizimais periódicas, um número de até três algarismos que se repete após a virgula infinitamente.
### Números decimais exatos e dizimas periódicas
- Exatos: não é infinito
- Periódico: é infinito, porém tem uma sequência padrão
Para saber se a fração gera um ou outro
Verifique o denominador, quando a divisão não é exata:
- Se for 2 ou 5 sempre será exato
- Se não for vai ser uma dizima periódica 
### Achar a fração geratriz
Simples:
$$
0.555... = \frac{5}{9}
$$
$$
2,232323... = \frac{233-2}{99} = \frac{221}{99}
$$
Esse dois que está subtraindo é a parte que não faz parte do 0.
Composta:
quando tem uma parte a mais antes da dizima.
$$
0,2555 = \frac{25-2}{90}
$$
O -2 seria do valor antes da dizima. E o 25 não é a dizima mas sim os primeiros valores antes de começar a repetir.
$$
2,4232323... = \frac{2423-24}{990}
$$

## Irracionais(I)
Não podem ser escritos em formas de fração.
Exemplos: Pi, Euler, sqrt(3).
Se incluem dizimas não periódicas.
## Reais
Incluem os racionais e os irracionais.
### Intervalos reais
$$
\{x \in R |2<x<5\} = ]2,5[
$$
$$
\{x \in R |2\leq x<5\} = [2,5[
$$
$$
\{x \in R |2\leq x\leq 5\} = [2,5]
$$



# Operações de conjuntos
## Diagrama de Venn
![[Pasted image 20260112104030.png]]
![[Pasted image 20260112104122.png]]
## Resultante de conjuntos
**Interseção:**
$$
A~\cap~B
$$
O que tem nos dois.
Quando não tem é igual a um conjunto vazio.
**União:**
$$
A~\cup~B
$$
A junção dos dois, sem se repetir valores.
**Diferença:**
$$
A-B
$$
O que tem no A mas não tem no B.
**Complementar:**
$$
C^B_A = A-B
$$
O de baixo menos o de cima.
Isso só serve quando B está contido em A.
## Resultante booleanas 
- Pertinência(∈): um número está dentro de um conjunto
- Contido: A **⊂** B - todos os elementos de A estão em B. Mas não são iguais. Todos os conjuntos tem contido nele os conjuntos vazios.
- Contém: A **⊃** B - todos elementos de B estão em A. Mas não são iguais.
- **⊆**: "Está contido ou é igual" (inclui a possibilidade de os conjuntos serem idênticos).
# Valor aproximado de um raiz
$$
\sqrt{x} \cong \frac{x+q}{2\sqrt{q}}
$$
Sendo q o valor mais próximo que você escolhe.