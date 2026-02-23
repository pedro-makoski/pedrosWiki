Permite usar a partir de classes pai(super) as funções e atributos. E a partir disso realizar o *polimorfismo*, alterando partes da classe e mudando um pouco.
```ts
export class ContaPremium extends Conta {

  registrarTransacao(transacao: Transacao): void {

    if(transacao.tipoTransacao === TipoTransacao.DEPOSITO) {

      console.log("ganhou um bonus 0.50 centavos")

      transacao.valor += 0.5

    }

    super.registrarTransacao(transacao)

  }

}
```
Por exemplo, aqui extends Conta, permite com que todos os atributos e métodos junto com o construtor seja posto na conta. E junto com isso colocamos no registrar transação, uma nova funcionalidade. E para chamar a função da classe pai, colocamos super, que seria a classe pai, e chamamos a função original registrarTransação.
Podemos usar o super para o constructor também, por exemplo, em outro exemplo: 
```typescript
class Aluno extends Usuario {
  matricula: number;

  constructor(nome: string, email: string, senha: string, matricula: number) {
    super(nome, email, senha);
    this.matricula = matricula;
  }
}
```
