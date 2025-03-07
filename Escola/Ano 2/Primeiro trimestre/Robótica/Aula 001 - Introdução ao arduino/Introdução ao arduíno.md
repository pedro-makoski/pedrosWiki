O arduino tem uma estrutura semelhante de um computador. Existem diferentes versões do arduino de diferentes marcas. Inclusive empresas pegam a ideia e reconstroem o sistema melhorando-o, como o Raspbery pi, que tem um OS(Sistema operacional) integrado. 
O arduino tem como vantagem que na maioria das vezes ele é leve e barato. 
Alguns exemplos:
- Arduino UNO.
- Arduino NANO.
- Arduino MEGA.
Os arduinos na sua maioria não suporta uma grande quantidade de energia, para poder suportar se usa uma energia externa ou shield. 
Arduino NANO e UNO possuem o mesmo chip. Mas formato de pinos diferentes. 
# Protoboard
Essa é uma das ferramentas, que permitem facilitar no processo de desenvolvimento de um robo. Sendo não necessário a soldagem. Ela é um cartão perfurado que consegue conectar com diferentes cabos, que saem ou recebem energia. 
![[19414386ea97456c0c.webp]]
# Shield expansor
Ferramenta que se acopla com arduino e turbina-o. Dando o mais ferramentas como bateria externa, sistema de saída de áudio e afins. 
# Sistema de conexão com o Arduino 
O arduino conecta com o computador em USB, ou seja o sistema é feito em serie, uma serie de bits. Porém para outra conexões como bluetooth, ele usa USART, que faz de forma em serie mas assincrono, deixando o processo mais lento.
Para essa porta USART, tem duas no Arduino, a:
- Tx: transmissor de dados.
- Rx: receber dados. 
# Entradas/saídas analógicas e digitais
Todos os pinos que começam com A ou D, podem ser digitais. Com algumas excessões, ver no slide. Digitais significa que pode ser true ou false, uma entrada/saída boolena. 
Já os que começam com A além de entrada/saída digital, consegue receber entrada analógica, ou seja valores que vão além da relação true ou false, no caso números/letras e afins. Já os que começam com ~ e depois vem o D, tem capacidade PMW, ou seja tem saída analógica. 
# O que é um pino
Sistema que transfere ou receber energia, de forma serial. Ou seja recebe valores binários em formato de energia. 
# PinOut
Visualização que indica o que cada porta faz em um sistema como arduino ou afins. 
Por exemplo aqui está do arduino NANO:
![[Arduino-Pinout.png]]
# O que é firmware
Software que roda em dispositivos embarcados. Como por exemplo, num Arduino. 
# Thinkercad
Programa que permite simular um sistema que usa o Arduino, ou correntes elétricas. 
# IDE do Arduino 
Facilita o ambiente de desenvolvimento em Arduino. A flecha -> carrega o código compilado no Arduino, que é compilado a partir do seu código. 
## Ferramentas
arquivos>exemplos - você encontra várias códigos pre-feitos antes.
ferramentas>placa "nome-da-placa-atual" - permite trocar a placa atual, pela sua, e assim conseguir fazer as configurações de build e afins de forma mais correta.
## Estrutura do código
void setup - o primeiro código a ser rodado. Feito sempre no inicio da aplicação. 
void loop - função que acontece várias vezes em loop. 
# Versões da internet
4.0 - IoT - internet das coisas. 
5.0 - IA.