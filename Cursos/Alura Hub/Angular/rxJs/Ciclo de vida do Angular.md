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
# onChanges
Acontece sempre quando os dados são alterados. Algo interessante é que se o componente recebe um elemento de entrada através do input, o onChanges é realizado antes do onInit. 
```ts
ngOnChanges(changes: SimpleChanges): void {
```
O SimpleChanges carrega um objeto, com todas as variáveis do componente, com a seguinte interface cada:
```ts
export declare class SimpleChange {

    previousValue: any;

    currentValue: any;

    firstChange: boolean;

    constructor(previousValue: any, currentValue: any, firstChange: boolean);

    /**

     * Check whether the new value is the first value assigned.

     */

    isFirstChange(): boolean;

}
```