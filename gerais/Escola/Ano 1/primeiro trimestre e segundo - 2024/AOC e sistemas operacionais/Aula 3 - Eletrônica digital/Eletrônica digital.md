O computador consiste em 
Entrada -> Processamento -> Saída. 
Onde dado uma serie de entradas o computador processa e gera uma saída utilizável. 

Divisão dos computadores analógicos e digitais. Os digitais são usados maiormente atualmente, são computadores, celulares e calculadoras, eles utilizam os números binários 0 e 1, permitindo maior precisão. Já os analógicos usam sistemas físicos para indicar algum resultado, podendo ser pouco preciso, um exemplo são os relógios e termômetros. 

Os primeiros computadores eram analógicos, mas como a eletrônica digital é mais fácil de medir, eles passaram a ser digitais. 

A base da eletrônica digital foi criada por George Boole(1815-1864). Ele criou regras para as operações **e**, **ou** e **não**. John Venn(1834-1823) baseado em Boole criou as operações de conjuntos. Apreendemos a fazer operações binárias e o computador como ele faz? [[If e else#Tabela verdade|Tabela verdade]].

Representação do e, ou e não na eletrônica digital: 
![[Pasted image 20240821154227.png]]

Chamamos isso de matemática discreta, tabelas verdade. 
# Proposição
**Proposição:** conjunção de palavras que exprimem um pensamento de sentido completo. Sentença cujo conteúdo pode ser falso ou verdadeiro. 
## Exemplos
- A lua é maior que a terra. - falso. 
- A  neve é fria. - Verdadeiro. 
- Matemática é ciência exata. - Verdadeiro. 

Verdadeiro e falso são os **valores lógicos** das preposições.
## Regras
### Princípio da identidade
- Uma proposição verdadeira é verdadeira.
- Uma proposição falsa é falsa. 
### Princípio da contradição
- Nenhuma proposição pode ser verdadeira e falsa ao mesmo tempo. 
### Princípio do 3º excluído
- Toda expressão é verdadeira ou falsa. Não há um terceiro caso.

As proposições podem ser dividas entre:
## Simples e composta
### Proposição simples
- Uma única sentença. 
- Dignada por uma letra minúscula: p, q, r, s. 
Exemplos:
- p: 5 < 8. V(p) = V.
- q: Pedro é medico.
- r: Maria foi ao teatro ontem. 
### Proposição composta
- Combinação de duas ou mais proposições. 
- Designado por letra maiúscula: P, Q, R, S.
Exemplo:
P(p, q): Carlos é músico **e** João é estudante. 
Q(p, q): Carlos é músico ou João é estudante. 

## Representações de operadores e, ou e não
E ------ ^ ------- conjunção.
Ou ---- v ------- disjunção. 
Não --- ~ ------- Negação.

## Valores lógicos
Será verdadeira se a proposição for verdadeira. Será falsa se a proposição for falsa. 

**Notação**: o valor lógico de uma proposição é representado pela letra v(proposição).

V(p) = 

V(p ^ q) = V.
V(p v q) = V.
V(~p) = F.

O valor lógico de uma proposição composta dependerá de duas coisas:
- O valor lógico das proposições simples que as compõe. 
- O tipo do conectivo que as une. 
## Tabela verdade
Quando não são conhecidos os valores das proposições simples, usamos a tabela verdade, em caso de proposições compostas. 

Para criar uma tabela verdade, a primeira proposição é dividida pela metade entre tudo V e tudo F. Na segunda vai pela metade da anterior e assim por diante até ficar um V e depois um F, em sequência. 
### Número de linhas da tabela verdade
Depende de quantas proposições simples existe, ou seja 2^n. 
- Para 2 proposições 2^2 = 4 linhas. 
- Para 3 proposições 2^3 = 8 linhas.
### Conjunção E 
A conjunção de duas proposições pode ser representada por p^q(lê-se p e q). Seu valor lógico será verdadeiro se ambas os proposições simples forem verdadeiras. 

V(p^q)  = V(p) ^ V(q) = v ^ v = v.

| p   | q   | p^q |
| --- | --- | --- |
| V   | V   | V   |
| V   | F   | F   |
| F   | V   | F   |
| F   | F   | F   |
Em conjuntos a conjunção corresponde a intersecção do conjunto p com o q. 
### Disjunção - ou 
Representado por pvq(lê se p ou q). Seu valor lógico é verdade se ao menos uma das proposições for verdade. 
V(p v q) = V(p) v V(q) = V v V = V.

| p   | q   | p v q |
| --- | --- | ----- |
| V   | V   | V     |
| V   | F   | V     |
| F   | V   | V     |
| F   | F   | F     |
A disjunção seria o equivalente a união dos conjuntos de p e q. 
## Negação ~
- Representado por não p.
- Valor lógico é verdadeiro quando a proposição simples for falso, e o valor lógico é falso quando o proposição simples for verdadeira.
