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
Acontece sempre quando os dados atrelados a um input são alterados. Algo interessante é que se o componente recebe um elemento de entrada através do input, o onChanges é realizado antes do onInit. 
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
# DoCheck
Hook que ouve qualquer alteração do componente e seus filhos. Ele é diferente do onChanges pois o onChanges ouve apenas as prorpriedades Input.
Mas tome cuidado, pois o DoCheck pode prejudicar a perfomace do código. 
# OnDestroy
Quando um componente sai da tela, é executado o método ngOnDestroy. 

O OnDestroy serve basicamente para limpar os rastros, ou seja, para realizar lógicas de limpeza. Um exemplo de lógica de limpeza é cancelar assinatura de inscrições do Observable para liberar memória.

O código de exemplo abaixo, mostra o método `ngOnDestroy()` realizando a desinscrição de dados do usuário e a chamada do método de logout.

```kotlin
ngOnDestroy() {
 if (this.userSub) {
   this.userSub.unsubscribe();
 }
 this.authService.logout();
}
```

Isso faz com que quando o componente estiver prestes a ser destruído, seja realizada a desalocação da memória e não acumule espaço com informações desnecessárias, assim melhorando o desempenho da aplicação após sua destruição. Esse tipo de problema é chamado de Memory leak.

O Memory Leak é um tipo de vazamento de recurso causado pelo mal gerenciamento da alocação de memória, em que a memória não é limpa quando não é mais necessária, podendo causar mal funcionamento da aplicação como travamentos, lentidão e até o encerramento da aplicação. O vazamento de memória é um dos piores problemas que os desenvolvedores podem ter, pois é muito difícil depurar e detectar.

Para resolver esse tipo de problema é importante sempre que um componente realizar um Observable, quando este componente for retirado do DOM ele realize a desinscrição deste Observable. Como no exemplo de código acima. Isso trará uma melhor fluidez da aplicação.

Para saber mais sobre o OnDestroy, leia a documentação do Angular [OnDestroy](https://angular.io/api/core/OnDestroy).
# AfterViewInit
Este hook é acionado após a visualização do componente ser totalmente inicializada. É útil para realizar ações específicas relacionadas à visualização, como manipulações no DOM ou integrações com bibliotecas externas.
# AfterViewChecked
Ativado após cada verificação da visualização do componente, permitindo a execução de ações adicionais nesse momento específico do ciclo de vida.
# AfterContentInit
Executado após a inicialização do conteúdo do componente. É útil quando operações dependem do conteúdo projetado no componente.
# AfterContentChecked
Ativado após cada verificação do conteúdo do componente, proporcionando oportunidades para ações adicionais relacionadas ao conteúdo.
# Veja mais em:
https://v17.angular.io/guide/lifecycle-hooks