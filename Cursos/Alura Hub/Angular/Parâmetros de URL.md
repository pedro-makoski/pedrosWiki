Você pode criar um objeto de parâmetros de URL no Typescript que contenha todos os atributos. O nome é `HttpParams` do pacote '@angular/common/http'. 
E para adicionar atributos, basta usar o método append passando como primeiro parâmetro a chave o segundo o valor.
Exemplo:
```ts
const params = new HttpParams().append('q', valorDigitado)
```
