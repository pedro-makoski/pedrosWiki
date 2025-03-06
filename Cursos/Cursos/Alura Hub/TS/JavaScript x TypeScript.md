**Javascript é uma linguagem de programação fácil de começar.** Pode ser usado do lado do cliente e/ou do lado do servidor, é uma linguagem dinâmica, flexível, tem um ecossistema maduro, possui primitivos de linguagem como string, número e objeto, porém ela não verifica se você atribuiu os tipos de forma consistente e é aí que começa o debate.

Sendo uma linguagem dinamicamente tipada, isso significa que o JavaScript não sabe qual é o tipo de uma variável até que seja realmente instanciada em tempo de execução. Isso também significa que pode ser tarde demais.
# Type Script
TypeScript mantém uma relação incomum com o [JavaScript](https://www.alura.com.br/artigos/javascript), ou seja, oferece todos os recursos do JavaScript e uma camada adicional sobre eles: o sistema de tipos TypeScript.
em JavaScript é muito comum nós criarmos objetos e passar algumas características, como por exemplo:

```js
const produto = {
  id:  1,
  nome:  "Copo",
};
```

Com **TypeScript** mantemos a mesma estrutura, porém utilizamos uma **interface**:

```ts
interface Produto {
  id: number;
  name: string;  
}
```
## Usar TypeScript vai te trazer algumas vantagens como:

- Feedback mais rápido de erros;
- Processo de refatoração mais fácil;
- Autocomplete da linguagem, muito boa no vscode;
- Poder adotar gradualmente typescript em uma base de código;
isto é, todo seu código JavaScript é válido em TypeScript (mas não o contrário). A principal diferença vai ser em relação a tipagem de dados, ao uso de classes, aos mecanismos de abstração, que são bem mais fortes.