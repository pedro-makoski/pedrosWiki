Existem tabelas de representação, que utiliza o sistema hexadecimal, vamos ver uma delas a cor, a tabela de cores.
- Temos as cores primária: são as cores azul, vermelho e amarelo.
- Temos as cores secundárias: junções das cores primárias.
- E terciarias: junção de uma cor secundária com uma cor primária.
![[Pasted image 20240712140804.png]]7
Porém essa forma talvez não seja tão precisa, de identificar como primária, vamos ver dois casos usados para representar cores no computador.
## CMYK
Com base nas cores Ciano(C), Magenta(M), Amarelo(Y) e preto(K para não confundir com B de blue). Esse padrão é muito utilizado em impressoras, que tem cartuchos, com as cores ciano, amarelo e magenta, que juntas temos a cor preta.
![[Pasted image 20240712141228.png]]
Perceba-se que nessa imagem, a mistura das cores R(vermelho), G(verde) e B(blue), misturadas formam as cores C(ciano), M(magenta) e Y(amarelo), e o mesmo acontece quando misturamos as cores C, M e Y, temos as cores R, G e B.
## Cores RGB
Utilizado na tela de monitores, televisão e celular, utiliza-se nesse sistemas as cores base, R, G e B, vermelho, verde e azul, respectivamente. E a partir delas se representa todas as outras cores, a mistura de todas elas, é a cor branca, e a ausência de todas elas é a cor preta.

Os valores podem ser representados de 0 a 1 byte, que podem ser quebrados, sabendo que 1 byte é 8 bits, que podem representar valores de 0 a 255, e esse são os valores que cada canal, o R, o G e o B, podem ter um valor de 0 a 255.

Aqui uma imagem de algumas variações.
![[Pasted image 20240712142058.png]]
## Hexadecimal
Podemos representar as cores R, G e B, com valores hexadecimais, tendo uma diminuição de caracteres, onde 0 e 00 e FF é 255, então concatene os valores R, G e B em Hexadecimal, e coloque um # no inicio, a cor branca, por exemplo, é `#ffffff`. Permitindo assim, que a tabela fique mais padronizada, com sempre 7 dígitos.
