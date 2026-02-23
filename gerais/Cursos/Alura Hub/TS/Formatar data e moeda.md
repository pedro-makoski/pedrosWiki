# Formatar data
```ts
const dataAcesso:Date = new Date()
elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br", {

	weekday: "long",    

	day:"2-digit",

	month:"2-digit",

	year:"numeric",

});
```
Essa função permite você criar uma formatação da data com o seguinte formato:
Nome do dia da semana, dia do mês em 2 dígitos/número do mês em 2 dígitos/número do ano. 
# Formatar moeda
```ts
saldo.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
```
Para isso funcionar o valor saldo deve ser do tipo número. Essa formatação acontece na formatação de moeda, real(BRL) no estilo moeda mesmo. 