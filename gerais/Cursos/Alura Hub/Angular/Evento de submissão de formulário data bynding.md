```html
<form [formGroup]="contatoForm" (ngSubmit)="salvarContato()">
```
Quando for feito a submissão será realizado a função salvarContato. Que pode ser algo como:
```ts
salvarContato() {
   console.log(this.contatoForm.value);
  }
```
O contatoForm.value é um objeto com os campos do elemento.