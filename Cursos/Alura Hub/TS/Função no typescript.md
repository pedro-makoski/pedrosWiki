```ts
function fomatarMoeda(valor:number): string {
    return valor.toLocaleString("pt-br", {style:"currency", currency:"BRL"});
}
```
Perceba que devemos colocar o tipo dos parâmetros, e também do retorno. Caso seja mais de um retorno, ou seja numa lista de retorno, você coloca assim: `: [number, string]`, por exemplo. 