# Iniciando circuito
Em criar>circuito. Clique no select, que tem várias opções de produtos no simulador, e você vê que tem a parte dos disparadores, e lá clique em Arduino e assim você poderá ver vários Arduinos. 
# Escolhendo código
Na opção de código, fora da simulação. Clique onde está escrito blocos e clique em texto, para ver o código em C.
## Funções do script
- ``pinMode(<numero-pino>, <output|input>)``: O output|input define o modo do pino, o que ele fazerá. 
- `digitalWrite(<pino>, <LOW|HIGH>)`: Pode ser LOW de nenhuma energia e HIGH de com energia, isso para quando o pino é digital(true/false).
- ``delay(<tempo-em-milisegundos>)``: Tempo em milissegundos, 1000 milissegundos é igual 1 segundo. 
- ``Serial.begin(<taxa-de-frequência-de-bits-de-comunicação-serial-com-computador-padrao-9600>)``: Estabelece uma comunicação serial com o computador conectado ao USB.
	- `Serial.println(<msg>)`: Imprime no console serial do computador.
# O que é uma resistência
Resiste a energia vinda. Para evitar problemas de queimar. A resistência 0, resiste nada, e quanto maior ele vai resistindo mais. 
# O que são sensores
Fazem as leituras do ambiente e passam para o Arduino. 
## Sensor de ultrassom
Presente em morcegos, baleias belugas e afins. Tem como função medir a distância de um objeto, medindo através do tempo de demora de um som, a partir da velocidade do som. Esse sensor possui uma facha específica que ele pode capturar. 
A função do ultrassom é:
```c
distance = readUltrassonicDistance(7, 7)
```
A distância deve ser convertida em cm ou linches, pois não está em nenhuma delas. O primeiro 7 é o pino de entrada, e o ultimo 7 é o pino de saída do dado.
# Atuadores 
Realizam ações no ambiente. A partir de comandos no Arduino. Por exemplo: servo motor, lampadas, ventiladores e afins.
## Servo motor
- Instale a biblioteca Servo.
- Defina uma variável do tipo Servo. `Servo servo_9;`
- Anexe o pino ao servo: `servo_9.attach(<pino>, 500, 2500)`
- ``int pos`` - posição do servo vai ser colocada aqui, pode ser até 180 graus. 
	- Na vida real é bom colocar 15 como mínimo da variável pos, para não haver nenhuma falha.
## Buzzer
Pode reproduzir sons simples e modulares. O buzzer tem as melódias.
No código deve ser definido a lista de melodias. Junto com a duração das notas. 
E assim pode-se colocar o código:
```c
tone(8, melody[thisNote], noteDuration);
```
Para realizar um tom no pino 1, com a melódia, e o tempo em milisegundos. 
# Componentes eletrônicos
## Protoboard 
![[Pasted image 20250321142722.png]]
Com a protoboard você pode expandir seus circuitos, sem necessidade de solda.
Algo muito importante é que quando você conecta um elemento com um ou mais ferros, numa mesma protoboard, ela precisa estar em colunas diferentes, pois se não, não adianta nada, pois é uma para a entrada positiva e outra saída negativa. 
Quando vamos usar um LED, por exemplo, devemos colocar um resistor tanto na ida pro GND:
![[Pasted image 20250321143228.png]]
Ou você pode colocar num circuito para filtrar a entrada de energia 5V ou pino.
O led, como podemos ver na imagem tem o ferro maior(anodo) aonde entra(positivo), e cátodo, o ferro menor, que é aonde sai a energia(negativo) para o GND.
Perceba que também pode se colocar a resistência na ida pro GND, ou na entrada de energia. Issp acontece pois a energia é cíclica, ou seja ela não pode apenas entrar ela precisa sair para funcionar.
Agente pode fazer a seguinte analogia, um rio vai e vem: a água é a corrente, as pedras são as resistências, quanto mais inclinado o rio, maior vai ser sua voltagem. 
## Botão
Fica no meio do Arduino, conectando duas fileiras de grupos distintos. O botão tem algo a se considerar, quando pressionado o pino da direita que é o GND, é usado, retornando 0, e quando não estiver pressionado ele vai usar o pino da esquerda, que não retorna nada, sendo um problema para dar 1, uma forma de fazer sem dar um curto circuito é colocar um resistor que conecta a entrada positiva, ou usar o método de entrada chamado `INPUT_PULLUP` ao invés de INPUT apenas, permitindo resolver esse problema.
```c++
pinMode(pino, INPUT_PULLUP);
```
E para ler um valor digital, se usa o comando:
```c++
int res = digitalRead(pino);
```
Retornando zero se estiver ligado, e 1 se desligado. Ou seja res deve ser do tipo inteiro ou booleano.  
## Potenciômetro 
Retorna um valor analógico entre 0 e 1023, sendo 0 direita e 1023 esquerda. O pino da esquerda conecta ao 5V, o do meio leva para um pino que deve começar com A, de entrada analógica, e o da direita é conectado com o GND.
```c++
pinMode(A0|A1|A2|A3|A4|A5, INPUT);
```
Sendo o |, de ou, podendo ser cada uma das possibilidades ao escrever, e podendo ser mais, dependendo do Arduino. 
```c++
int value = analogRead(A0|A1|A2|A3|A4|A5);
```
Retorna um valor de 0 a 1023. Para poder usar em outros elementos talvez seja necessário usar o map, para converter em bases diferentes:
```c++
map(valorAConverter, origemmin, origemmax, destinomin, destinomax)
```
Assim podendo ser convertido de uma base a outra. No caso 1023 de 10 bits, e por exemplo 255 de 8 bits. Você pode perceber que quanto mais para a esquerda maior, que não é comum, por isso você pode trocar origemmin e origemmax. 
# Comandos Arduino 
```c++
analogicalWrite(pino, valor_de_0_a_255_mas_depende_do_equipamento_usado);
```

