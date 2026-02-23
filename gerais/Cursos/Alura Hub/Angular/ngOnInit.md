Para isso funcionar a sua classe precisa implementar o OnInit da biblioteca @angular/core:
```ts
export class ListaContatosComponent implements OnInit
```
E então você pode criar a função `ngOnInit` para que quando o componente iniciar que ela seja executada.