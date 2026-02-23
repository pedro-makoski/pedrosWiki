Permitem alterar as funções. Colocando mais funcionalidades a elas, sem a necessidade de escreve-las novamente.
A função que tem um decorator deve ter o seguinte formato:
```typescript
export function LogTempo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Guarda uma referência ao método original
    const originalMethod = descriptor.value;

    // Substitui o método original por uma nova função
    descriptor.value = function (...args: any[]) {
        // Obtém o tempo inicial
        const startTime = Date.now();

        // Chama o método original com os argumentos originais
        const result = originalMethod.apply(this, args);

        // Obtém o tempo final
        const endTime = Date.now();

        // Calcula a diferença em milissegundos
        const duration = endTime - startTime;

        // Registra o tempo de execução no console
        console.log(`O método ${propertyKey} levou ${duration} ms para executar.`);

        // Retorna o resultado original
        return result;
    }

    // Retorna o descritor modificado
    return descriptor;
}
```
A função de decorator tem os seguintes parâmetros:
- target: é a classe em que o decorator está.
- propertyKey - é o nome da função do método
- descriptor, do tipo PropertyDescriptor, contêm vários parâmetros, inclusive o value, que uma forma de recuperar a função a ser executada, neste caso.
```ts
const result = originalMethod.apply(this, args);
```
Isso indica que é para função preservada, ser executada. Com o os argumentos da função. 
E não se esqueça de retornar novamente o descriptor. 
Outro exemplo:
```ts
export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value

    descriptor.value = function (valorDoDebito: number) {

        if(valorDoDebito <= 0) {

            throw new Error("O valor a ser debitado precisa ser maior que 0")

        }

  

        if(valorDoDebito > this.saldo) {

            throw new Error("Seu saldo é insuficiente para realizar a operação")

        }

  

        return originalMethod.apply(this, [valorDoDebito])

    }

  

    return descriptor;

}
```
Para aplicar basta:
```ts
 @ValidaDebito

  public debitar(valor: number): void {

    this.saldo -= valor;

    Armazenador.salvar("saldo", this.saldo.toString());

  }
```
Talvez retorne um erro, isso acontece porque os decarator é algo experimental do typescript. Então por isso, no compiller options do src, coloque 
```ts
"experimentalDecorators": true
```
Para permitir decorators. 
Para entender mais sobre o tsconfig.json, veja mais aqui:
https://www.typescriptlang.org/tsconfig/
