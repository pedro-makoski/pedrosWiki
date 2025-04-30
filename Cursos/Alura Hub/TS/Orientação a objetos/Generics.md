```typescript
interface Produto { 
nome: string; preco: number; quantidade: number; 
}

function calcularValorTotal<T extends Produto>(produtos: T[]): number { 
let valorTotal = 0; 
for (let x = 0; x < produtos.length; x++) { 
valorTotal += produtos[x].preco * produtos[x].quantidade; 
} 
return valorTotal; 
}
```
ou:
```ts
function nome<T>() {}
```
Os generics permitem sabermos qual tipo, a pessoa que está usando a função deseja que seja usada. Por exemplo:
```ts
 static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any):T | null {

        const valor = localStorage.getItem(chave);

        if(valor === null) {

            return null

        }

  

        if(reviver) {

            return JSON.parse(valor, reviver) as T;

        }

  

        return JSON.parse(valor) as T;

    }
```
Aqui tudo está sendo tratado como tipo T, você pode manipular o que pode ser esse tipo com extends. E depois quando chamar você pode, se quiser, colocar o seguinte:
```ts
armazenador.obter<number>("saldo") || 0
```
Aqui estou especificando que quero o retorno do tipo number. E que tudo deverá ser convertido. 
