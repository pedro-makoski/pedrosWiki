# Princípio Da Casa dos Pombos
Qual é o valor mínimo para garantir que dentre n lugares, tenha um com x ocupações:
$$
r = (x-1)*n+1
$$
# Princípio fundamental da contagem
Se um evento M1 acontece de N1 formas diferentes, o evento M2 de N2 formas diferentes ... e o evento MX de NX formas diferentes a quantidade de possibilidade de acontecer M1, M2, ... e MX é:
$$
n_1*n_2*...*n_x
$$
# Fatorial
$$
n! = n*(n-1)*(n-2)*...*1
$$
## Por que 0! = 1
Pois, se n! = n(n-1)!, então 1!=1*(1-1)!, ou seja 1!=1 * 0!, passando pro lado 1 = 0!.
# Permutação
Quantidade de possiblidades de n elementos se permutarem entre si:
$$
P_n=n!
$$
## Com repetição
Quando alguns elementos se repetem não faz diferença a troca dos valores entre si. Portanto:
$$
P_n^{(\alpha, \beta, \theta)} = \frac{n!}{\alpha!\beta!\theta!}
$$
## Permutação Circular

Quando os elemento se dispõe de forma circular e que se girar a mesma coisa, neste caso seria: (n-1)!. 
# Anagramas 
Quantidade de palavras sem ou com sentido possíveis de se formas com as letras de uma palavra.
## Posições Ordinais
Para descobrir o anagrama da posição em ordem alfabética, você pode:
- Relacionar a números
- Fixar os valores iniciais somando até chegar no valor atual
# Combinação
$$
C^p_n = Cp,n = \dbinom{n}{m}
$$
## Propriedades
$$
C^0_n = 1
$$
$$
C^1_n = n
$$
$$
C^n_n=1
$$
$$
C^{p}_{n}+ C^{p+1}_{n} = C^{n+1}_{p+1}
$$
$$
C^0_n+C^1_n+...+C^n_n= 2^n
$$
# Arranjo 
$$
A^p_m = \frac{m!}{(m-p)!}
$$
## Propriedades
$$
A_m^0 = 1
$$
$$
A^1_m=m
$$
$$
A^m_m=m!
$$
# Pelo menos um
Do total de possibilidades menos a quantidade dos possíveis do contrário.