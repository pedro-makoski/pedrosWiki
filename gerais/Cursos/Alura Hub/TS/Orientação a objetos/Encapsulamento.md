Para garantir o encapsulamento adequado em TypeScript é possível fazer uso dos modificadores de acesso, que são palavras-chave que controlam a visibilidade dos membros das classes. Os principais modificadores são: public, private e protected. Aqui está uma explicação de cada um desses modificadores:
- **public**: O modificador public permite que os membros sejam acessados livremente de qualquer lugar. É o modificador padrão caso nenhum seja especificado.
- **private**: O modificador private restringe o acesso aos membros somente à própria classe. Isso significa que eles não podem ser acessados ou modificados fora da classe.
- **protected**: O modificador protected permite que os membros sejam acessados dentro da classe e também pelas classes derivadas (subclasses). No entanto, eles não são acessíveis fora das classes derivadas.
Para definir, você coloca antes do atributo ou método:
```ts
import { GrupoTransacao } from "./GrupoTransacao.js";

import { TipoTransacao } from "./TipoTransacao.js";  

import { Transacao } from "./Transacao.js";

  

export class Conta {

  protected nome: string;

  protected saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;

  private transacoes: Transacao[] =

    JSON.parse(

      localStorage.getItem("transacoes"),

      (key: string, value: any) => {

        if (key === "data") {

          return new Date(value);

        }

  

        return value;

      }

    ) || [];

  

  constructor(nome: string) {

    this.nome = nome;

  }

  

  public getTitular(): string {

    return this.nome

  }

  

  public getGruposTransacoes(): GrupoTransacao[] {

    const gruposTransacoes: GrupoTransacao[] = [];

    const listaTransacoes: Transacao[] = structuredClone(this.transacoes);

    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort(

      (t1, t2) => t2.data.getTime() - t1.data.getTime()

    );

    let labelAtualGrupoTransacao: string = "";

  

    for (let transacao of transacoesOrdenadas) {

      let labelGrupoTransacao: string = transacao.data.toLocaleDateString(

        "pt-br",

        { month: "long", year: "numeric" }

      );

      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {

        labelAtualGrupoTransacao = labelGrupoTransacao;

        gruposTransacoes.push({

          label: labelGrupoTransacao,

          transacoes: [],

        });

      }

      gruposTransacoes.at(-1).transacoes.push(transacao);

    }

  

    return gruposTransacoes;

  }

  

  public getSaldo() {

    return this.saldo;

  }

  

  public getDataAcesso(): Date {

    return new Date();

  }

  

  public debitar(valor: number): void {

    if (valor <= 0) {

        throw new Error("O valor a ser debitado deve ser maior que zero!");

    }

    if (valor > this.saldo) {

        throw new Error("Saldo insuficiente!");

    }

  

    this.saldo -= valor;

    localStorage.setItem("saldo", this.saldo.toString());

}

  

public depositar(valor: number): void {

    if (valor <= 0) {

        throw new Error("O valor a ser depositado deve ser maior que zero!");

    }

  

    this.saldo += valor;

    localStorage.setItem("saldo", this.saldo.toString());

}

  

  public registrarTransacao(novaTransacao: Transacao): void {

    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {

      this.depositar(novaTransacao.valor);

    } else if (

      novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||

      novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO

    ) {

      this.debitar(novaTransacao.valor);

      novaTransacao.valor *= -1;

    } else {

      throw new Error("Tipo de Transação é inválido!");

    }

  

    this.transacoes.push(novaTransacao);

    console.log(this.getGruposTransacoes());

    localStorage.setItem("transacoes", JSON.stringify(this. transacoes));

  }

}

  

const conta = new Conta("Pedro Makoski");

  

export default conta;
```

A solução para esse problema é aplicar o conceito de encapsulamento em TypeScript. O encapsulamento permite ocultar a implementação interna de uma classe e fornecer apenas interfaces bem definidas para acessar e manipular seus dados.
