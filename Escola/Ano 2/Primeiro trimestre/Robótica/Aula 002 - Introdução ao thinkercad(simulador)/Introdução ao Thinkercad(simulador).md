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