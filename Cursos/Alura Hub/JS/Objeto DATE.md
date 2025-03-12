É uma classe que recebe no construtor o valor em milésimos ou vázia, com a sequência: ano, mês, dia, hora, minuto, segundo, milissegundo ou uma string informando a data. E oferece uma series de funções como:
# toLocaleString
```js
const tempo = new Date(tempoDecorridoEmSegundos * 1000);
const tempoFormatado = tempo.toLocaleString('pt-br', {minute: "2-digit", second:"2-digit"});
```
Permite formatar o tempo a partir do sistema de uma língua. E depois você pode passar num objeto quanto cada elemento da data vai ter de dígitos. 
# Obter o tempo atual
Você pode obter o tempo atual de forma fragmentada, assim:
```js
const currentDate = new Date();

const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds(
```
# Definir horário para classe 
Usando as funções set:
```js
const data = new Date();

data.setFullYear(2024);  // Define o ano
data.setMonth(10); // Define o mês
data.setDate(25); // Define o dia
data.setHours(10);  // Define as horas
data.setMinutes(30); // Define os minutos
data.setSeconds(0); // Define os segundos
```
