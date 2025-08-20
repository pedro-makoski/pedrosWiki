Criação de eventos dos seus próprios componentes.
Os elementos podem ter eventos, e você pode criar os seus usando o `@Output`, assim:
```ts
@Output() emitidoItemParaEditar = new EventEmitter();
```
O EventEmitter é um objeto do angular core.
O nome do evento neste caso é: emitidoItemParaEditar.
E quando quisermos acionar o evento, com o método disponível, agente pode:
```ts
this.emitidoItemParaEditar.emit(this.item)
```
Assim ele emite e passa como parâmetro da função item.