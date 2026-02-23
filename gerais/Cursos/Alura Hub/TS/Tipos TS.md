```ts
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer:any = 3000;
```
Variáveis não podem ter tipos alterados ao longo do caminho(exceto any). Os tipos primitivos são aqueles, e o any, que é um pouco mais desconhecido é um tipo que pode possuir qualquer tipo. 
# Arrays
Por padrão arrays são do tipo ``any[]`` ou seja podem possuir qualquer valor. Para adicionar outros tipos, você deve colocar o tipo e depois `[]`, para indicar que é um array. 
```ts
const lista: number[] = [];

lista.push(25, 10, 13, 15);
```
# Criando tipos
Você pode criar tipos em TS, de forma bem simples usando um sistema de type. E assim definir uma estrutura para aquele tipo. 
```ts
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor:number;
}

const transacao:Transacao = {
    tipoTransacao:"",
    data:new Date(),
    valor:0
}

type Text = string
type TextOrNumber = string | number
```
Perceba que quando definido a estrutura com o type, o valor digitado deve ser daquele estrutura. Passamos de forma bem semelhante o type colocando as chaves e seus tipos, e depois ao chamar o tipo as suas chaves e valores, nada de um tipo diferente ou com nome não especificado. Também podemos definir os tipos com outros nomes para outros tipos, e também podemos criar tipos que mesclam dois tipos ou mais, separando os por |. 

Esses tipos personalizados são chamados de type Alias.
# Enums 
Permitem colocar um valor fixo dentro de um tipo, que pode ser apenas um certo conjunto de valores possíveis.
```ts
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor:number;
}

enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO= "Pagamento de Boleto"
}

const transacao:Transacao = {
    tipoTransacao:TipoTransacao.DEPOSITO,
    data:new Date(),
    valor:0
}
```
O tipo transação é um tipo que pode ter apenas um conjunto de valores, caso ao contrário da erro de compilação. E então quando querer acessar os valores de uma enum, para estar correto em relação ao tipo proposto, você coloca o nomedaenum.NOME_DA_VARIAVEL.
