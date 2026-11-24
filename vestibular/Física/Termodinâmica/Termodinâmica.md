# Estado dos Gases
Os gases tem três propriedades que **definem** seu estado, eles são:
- **Pressão**: força aplicada pela área da superfície pelas partículas gasosas
- **Volume**: espaço em que o gás ocupa, sabendo que o gás ocupa o volume no recipiente em que ele está
- **Temperatura**: nível de agitação das moléculas
## Relação entre as variáveis do estado dos gases - Equação de Clapeyron

$$
pV = nRT
$$
Em que:
p -> é a pressão
V -> é o volume
n -> é o número de mols dado por g/(mol/g) 
T -> é a temperatura
R -> é uma constante dada por:
$$
R = 0,082 \frac{atm*L}{mol*K}
$$
Lembre-se que só funciona essa constante com as mesmas unidades.
## Transformações gasosas
Quando o número de mols é constante, a transformação tem a seguinte relação:
$$
\frac{P_{0}V_{0}}{T_{0}} = \frac{P_{1}V_{1}}{T_{1}}
$$
E quando o número de mols não é constante, pode ser usado a seguinte relação:
$$
\frac{P_{0}V_{0}}{T_{0}n_{0}} = \frac{P_{1}V_{1}}{T_{1}n_{0}}
$$
## Tipos de Transformações
### Isovolumetricas, Isocoricas ou Isométricas
É quando o volume é constante. É dada por:
$$
\frac{P_{0}}{T_{0}} = \frac{P_{1}}{T_{1}}
$$
Ela pode ser facilmente reconhecida por um embolo fixo, em que ao aumentar a pressão do gás a agitação das moléculas sem poderem elevar aumenta e assim aumenta a pressão.
### Isobáricas
Quando a pressão é constante. Dada por:
$$
\frac{V_{0}}{T_{0}} = \frac{V_{1}}{T_{1}}
$$
Isso acontece pois ao aumentar a temperatura, a agitação das moléculas deixa a pressão interna maior que a externa e promove um aumento do volume com o movimento do embulo, deixando a pressão constante.

Ela pode ser chamada, também, de embúlo livre, ou seja que se move sozinho sem intervenção de outra coisa. Ela também pode ser chamada de expansão isobárica.
### Isotermica
Mantém a mesma temperatura em todos os casos. Deve formar uma hiperbóle, sem saber se é uma hiberbole, a multiplicação de pressão e volume em todos os pontos da curva isoterma, formada pela compressão isotermica, deve dar o mesmo valor. 
$$
P_0V_0 = P_1V_1
$$
Isso acontece pois quando é isotérmica e o volume é comprimido lentamente a pressão aumenta de modo que a agitação molecular não se altera. Por isso deve ocorrer por um embulo lento, pois ele não pode agitar as moléculas com o movimento agressivo do embulo.
# Energia Cinética de uma molécula
$$
P = \frac{N*v^{2}*m}{3V}
$$
Onde
P é a pressão
v -> velocidade 
N -> número de moléculas
m -> número da massa da molécula
V -> é o volume 
E é 3, pois ele só afeta uma dimensão.

Se lembrarmos que:
$$
N = N_a*n
$$
Onde N é o número de moléculas, Na é o número de Avogrado e n é o número de mols, então:
$$
P *3V = n*N_a*v^2*m
$$
Portanto
$$
3*nRT = n*N_a*v^2*m
$$
Isolando a mv^2, temos que:
$$
mv^2 = \frac{3*RT}{Na}
$$
Se dividirmos por dois, dos dois lados temos:
$$
\frac{mv^2}{2} = \frac{3*RT}{2Na}
$$
A primeira parte é a energia cinética e a segunda parte R/Na, gera a constante de Bottsmaq, definida por k, portanto a energia cinética de cada molécula particula é:
$$
E_c = \frac{3}{2}*k*T
$$
E quando se trata de todo o gás se multiplica pela quantidade de moléculas que é dada por:
$$
E_c^{gas} = \frac{3}{2}n*R*T
$$
# Primeira lei da termodinâmica
## Variação da energia interna
A variação da energia interna, como vimos a na formula anterior é dependente da variação de temperatura.

Caso a variação seja positiva, significa que o gás aqueceu e se for negativa significa que o gás esfriou e se é igual não houve alteração de temperatura. 
## Variação de calor
Não relaciona a temperatura.

- Aumentou o calor -> houve um aumento de calor que entrou para o sistema
- Diminui o calor -> houve uma diminuição do calor
- Manteve-se igual -> não trocou o calor com o meio externo, pois foi muito rápida, isso é chamada de transformação adiabática
## Variação de trabalho
O gás tende a se expandir
- Caso o trabalho seja positivo: o embulo lenvatou-se para cima, ou seja o gás perdeu energia para o meio externo e se expandiu
- E caso seja negativo: recebeu calor, por meio de uma força externa

$$
\Delta W = \Delta V*P
$$
Essa relação acima só funciona em caso de pressão isobárica, em outros casos deve ser calculado a área do gráfico.
## Relação da energia interna com o trabalho e variação de calor
A energia interna que está relacionada a variação de temperatura acontece pois o calor que entrou aumenta o calor interno e o trabalho feita tira o calor interno, portanto a variação se da por:
$$
\Delta U = \Delta Q - Wgas
$$
Essa é a formula do balanço térmico.
## Aplicações da primeira lei
### Expansão Adiabática/Rápida
- Sem variação de calor
- O trabalho é positivo
- Portanto a variação da temperatura é negativo
- Pois
$$
\Delta U = - Wgas
$$
### Compressão Adiabática/Rápida
- Sem variação de calor
- O trabalho é negativo
- Portanto a variação de temperatura será positiva
### Expansão Isotérmica/Lenta
- Não há variação de temperatura, portanto não há variação da energia interna, isso significa que a variação de calor é igual a variação do trabalho
- Como é expansão a variação de calor será positiva, pois a variação do trabalho positivo
### Compressão Isotérmica/Lenta

### Expansão Isotérmica/Lenta
- Não há variação de temperatura, portanto não há variação da energia interna, isso significa que a variação de calor é igual a variação do trabalho
- Como é expansão a variação de calor será negativa, pois a variação do trabalho será negativa
# Transformações cíclicas 
São um conjunto de transformações especiais (isobáricas, isovolumetricas, isotermicas e adiabáticas) que voltam para o mesmo estado inicial

Em transformações cíclicas:
- A variação da energia interna é 0, pois a variação da temperatura é 0, uma vez que ela começa e termina com a mesma temperatura
- O trabalho exercido pelo gás é positivo quando a área de expansão é maior que a de compressão e negativo quando a área de compressão é maior do que a de expansão
- E a variação de calor é igual ao trabalho exercido
