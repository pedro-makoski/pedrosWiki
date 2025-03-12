Usamos isso sempre quando precisamos decidir, **se** vamos ou não fazer algo. O funcionamento na computação funciona de forma bem parecida, executamos algo que se for true, e senão(opcional) realiza outra ação.
```js
if (aprovado_na_escola == true) {
	acao = "Vai ganhar uma bicicleta!";**
}else {
	acao = "Vai ficar em casa nas férias.";**
}
```
Nesse caso o if significa se, e e else se não(que é opcional). Onde apenas uma das ações será executada.
E pode se ter mais, pode-se ter, por exemplo, o else if, que é opcional, e testa uma outra condição caso as anteriores não aconteceram, o && significa que dois casos acontecem ao mesmo tempo, ambos tem que ser true, e o || é que o anterior ou a próxima expressão deve ser true.
```js
if (aprovado_na_escola == true && com_recuperação == false) { 
	acao = "Vai ganhar uma bicicleta!";
} else if (aprovado_na_escola == true && com_recuperação == true) {
	acao = "Não vai ganhar a bicicleta, mas vai viajar nas férias.";
}else {
	acao = "Vai ficar em casa nas férias.";
}
```
## Operadores lógicos
Os operadores and e or, servem para verificar mais de uma condição, em um if ou else if. Eles também são chamados de conectivos. Quando temos mais de um condição, chamos de **expressão**. 
### And ou &&
Faz com que a expressão seja verdadeira, se todas as condições dentro dela sejam verdadeiras.
Tabela verdade and.

| Condição 1 | Condição 2 | Resultado  |
| ---------- | ---------- | ---------- |
| Falso      | Falso      | Falso      |
| Verdadeiro | Falso      | Falso      |
| Falso      | Verdadeiro | Falso      |
| Verdadeiro | Verdadeiro | Verdadeiro |
### Or ou ||
Basta pelo menos uma condição ser verdadeira, para que a expressão seja verdadeira. Veja a tabela da verdade.

| Condição 1 | Condição 2 | Resultado  |
| ---------- | ---------- | ---------- |
| Falso      | Falso      | Falso      |
| Verdadeiro | Falso      | Verdadeiro |
| Falso      | Verdadeiro | Verdadeiro |
| Verdadeiro | Verdadeiro | Verdadeiro |
### Not
Inverte o valor da condição, se a condição for falsa vai ser verdadeira, já se for verdadeira vai ser falsa.

Quando o valor é verdadeiro vai ser true, se for falso vai ser false, para a linguagem, esses são os valores lógicos.

==**As condições do if só são executadas quando a expressão ou a condição for true, e o else se a condição ou expressão resultar em false** ==. 