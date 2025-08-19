O Angular nasce, é colocado na tela, ele cresce, conecta e depois é destruído. Toda vez que isso acontece acontece os hooks ou ganchos, chamando um método específico do Angular.
# OnInit
Primeiro momento do ciclo de vida, quando o componente já é carregado pelo elemento.
Primeiro importe OnInit do Angular Core.
Depois coloque o implements na classe:
```ts
export class AppComponent implements OnInit
```
E depois defina a função:
```ts
ngOnInit(): void {

}
```