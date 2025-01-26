---
tags:
  - Matemática
Dia: 2024-08-10
---
## Conjuntos
Designados em geral, por uma letra latina maiúscula. (A, B, C ... Z).
## Elemento
**não pode ser repetido dentro de um conjunto**, designado em geral por uma letra minúscula(a, b, c ... z).
## Pertinência
Relação entre elemento e conjunto, denotado pelo símbolo ∈, que se lê como pertence à.

### Exemplo
$$
A = \{v, a, z,b\}
$$
$$
v \in A
$$
$$
a \in A
$$
$$
v \neq A
$$
$$
p \notin A
$$
## Igualdades dos conjuntos
Dois conjuntos A e B são iguais quando todo elemento de A, pertence a B, reciprocamente(de ambos os lados) todos os elemento de B pertence a A.
se:
$$
A = \{ a, b, c\}
$$
e
$$
B = \{ b, c, a\}
$$
então 
$$
A = B
$$
e se
$$
A = \{x/x - 2 = 5\}  
$$
e
$$
B = \{7\}
$$
então
$$
A = B
$$
**Só para constar**: / significa tal que.
## Conjuntos unitários
possuem apenas um elemento dentro do conjunto, por exemplo:
$$
A = \{5\}
$$
B = {x / x é a capital da França}
## Conjuntos vazio
Não possuem elementos dentro de si, são chamados de conjuntos vazios, podem ser representado por **{}** ou **Ø**. exemplo
$$D = \{x / x:0\}$$
### Importante
{Ø} não é vazio, e {0} também não é vazio, pois eles possuem elementos dentro deles. portanto sempre quando for vazio se escreve sem chaves assim Ø, ou com apenas as chaves vazias assim {}.
## Conjuntos e subconjuntos
Há conjuntos que dentro deles há outros conjuntos ou sub conjuntos no caso.
$$
F = \{Ø, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{a, b, c\}\}
$$
Assim
$$
Ø \in F,~\{a\} \subset F, ~\{c\} \subset F.
$$
$$
a \notin F, ~c \notin F, ~a\neq \{a\}, ~c \neq \{c\}.
$$
Portanto quando tiver um sub conjunto dentro de um conjunto, o sub conjunto está **contido** no conjunto, mas os elementos do sub conjunto não pertencem ao conjunto.
## Contém e contido 
---
Contém - um conjunto contém outro elemento. O conjunto A contém o B, por exemplo. Ou seja, todos os itens do conjunto B estão no conjunto A.
$$
A\supset B
$$
Contido - um elemento está contido dentro de outro, por exemplo, o conjunto A está contido no conjunto B, isso significa que todos os elementos do conjunto A estão presente no conjunto B.
$$
A \subset B
$$
Um conjunto pode estar contido, mas um elemento não. Um elemento pode apenas pertencer à um conjunto. 
### Propriedades
---
$$
\oslash \subset A
$$
$$
Reflexiva:~A \subset A
$$
$$
Transitiva:~se~A\subset B~e~B\subset C~então~A\subset C 
$$
$$
Assimétrica:~A\subset B~e~B\subset A, ~então~A=B
$$
## Interseção
---
A partir de dois conjuntos A e B, por exemplo, pode-se construir novos conjuntos.
$$
A~\cap~B = \{x/x \in A~e~x\in B\}
$$
![[Pasted image 20240704135849.png]]
### Casos particulares
$$
A\subset~B~então~A~\cap~B = A
$$
Elementos que não possuem elementos em comum a interseção é igual a conjunto vazio.
## União/reunião
---
$$
A~\cup~B = \{x/x \in A~ou~x\in~B\}
$$
### Casos particulares
$$
A\subset B~então~A~\cup~B = B
$$
$$
A~\cap B = \oslash~então~A~\cup B = A~e~B
$$
Conectivo ou(v) - x pertence a A, pertence a B, ou aos dois.
Em todos os conjuntos A e B:$$A\subset (A~\cup B)~e~B\subset (A~\cup B) $$
### Quantidade de itens
Temos a quantidade de A, de B e de A e B, juntas. Quantos tem uma união, já que temos itens repetidos. O n(y) é o número da diferença de A por B, todos que estão em A, mas não estão em B.
Podemos calcular essa diferença por:
$$
N(Y) = N(A)-N(A~\cap~B)
$$
Então temos os valor que tem apenas no conjunto A, que é o Y. A soma com o número de elemento de B, faz com que temos o valor certo de quantos elementos tem no total, sem repetir. Lembrando que o B, ele está com a interseção, que tiramos de A em Y, para evitar repetição.
$$
N(A~\cup~B) = N(Y) +N(B)
$$
Portanto:
$$
N(A~\cup~B) =  N(A)-N(A~\cap~B) +N(B)
$$
## Diferença 
---
$$
A - B = \{x/x\in A~e~x\notin B\}
$$
A diferença é esse sinal de menos, onde é todo o elemento do primeiro conjunto, menos os elementos que estejam no segundo conjunto. 
### Casos particulares 
   1.
$$
A\subset B~Então~A-B = \oslash
$$
2. A e B disjuntos, sem elementos em relação.
$$
A - B = A
$$
  3.
$$
B\subset A~então~A-B~é~a~área~marcada~de~laranja
$$
![[Pasted image 20240723161113.png]]
## Complementar 
---
Como visto na imagem a cima, um conjunto que pertence a outro, a diferença entre o mesmo é de chamada de complementar. Por exemplo, na imagem a cima o complementar de B para ter A, seria a marca traçada. 
Podemos representar o complementar daquele jeito representado a cima em texto laranja. Onde colocamos o conjunto menor e cima, e o maior embaixo. O complementar de X E Y é Y - X.
# Conjuntos numéricos
## Conjunto dos números naturais
---
Inteiros e positivos. 
$$
N = \{0, 1, 2,3,4,5,6,7, ...\}
$$
$$
N^* = \{1, 2,3,4,5,6,7, ...\} = N -\{0\}
$$
$$
N_p = \{2, 4,6,8, ..\}
$$
P é de par. 
## Conjunto Z - inteiros
---
Todos os valores inteiros. 
$$
Z = \{...,-4,-3,-2,-1,0,1,2,3,4, ...\}
$$
$$
Z^* = Z-\{0\} = \{..., -4, -3, -2, -1, 1, 2, 3, 4, ...\}
$$
$$
Z_+ = \{0, 1, 2, 3, 4, 5, 6,7, ...\} = N
$$
$$
Z_+^* = \{1, 2,3,4,5,6,7, ...\} 
$$
## Modulo de um número inteiro
---
- Se x é maior ou igual a 0, então o modulo é x, portanto: |x| = x.
- Se x for menor ou igual a 0, o modulo de x é o oposto do sinal, portanto: |-x|  = x.
### Exemplos
| - 7 | = 7; |-3| = 3; |7| = 7.
## Conjunto Q, números racionais
---
Exemplos +1/2; -1/3; -1; 0; +5.
São os números que compõe os números inteiros, e também dizimas periódicas e valores flutuantes(decimais). 
## Conjunto I, números irracionais 
---
Números decimais que possuem representação infinita, e não periódica. São exemplo o pi, √2 e √3.

![[Pasted image 20240725165442.png|700]]
# Como encontrar a divisão de uma dizima periódica
$$
x = 0,8888...
$$
$$
10x = 8,888....
$$
$$
10x -x = 8,888...-0,88888.... = 8
$$
$$
9x = 8
$$
$$
x = \frac{8}{9}
$$
# Como encontrar um ponto entre duas frações
Calcule a média, entre ambas, somando-as e as dividindo por 2, assim se encontrar um ponto entre essas duas frações. 
# Representação de uma linha reta
[1, 8] - todos os valores de 1 até 8, incluindo o 1 e o 8. 
[1,8[ = Todos valores de 1 a 8 menos 8, porque o 8 está aberto.
]1-8] - Todos os valores de 1 ao 8 menos o 1, porque o 1 está aberto.
]1-8[ todos os valores entre 1 e 8, sem contar os próprios, porque os mesmos estão fechados. 