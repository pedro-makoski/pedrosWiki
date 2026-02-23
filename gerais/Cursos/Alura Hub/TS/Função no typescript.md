```ts
function fomatarMoeda(valor:number): string {
    return valor.toLocaleString("pt-br", {style:"currency", currency:"BRL"});
}
```
Perceba que devemos colocar o tipo dos parâmetros, e também do retorno. Caso seja mais de um retorno, ou seja numa lista de retorno, você coloca assim: `: [number, string]`, por exemplo. 
Você pode também retornar void, de nada. 
Você pode criar um objeto com funções assim:
```ts
const Conta = {
    getSaldo() {
        return saldo
    },
    
    getDataDeAcesso(): Date {
        return new Date()
    },

    registrarTransacao(novaTransacao: Transacao): void {
        const tipoTransacao = novaTransacao.tipoTransacao
        const valor = novaTransacao.valor
        switch(tipoTransacao) {
            case TipoTransacao.DEPOSITO:
                saldo += valor;
                break;
            case TipoTransacao.TRANSFERENCIA:
            case TipoTransacao.PAGAMENTO_BOLETO:
                saldo -= valor;
                break;
            default:
                alert("Tipo de transação inválido");
                return;
        }  
        
        console.log(novaTransacao)
    }
}
```
Da mesma forma que pode fazer assim: 
```ts
const Conta = {
    getSaldo: () => {
        return saldo
    },
    
    getDataDeAcesso: (): Date => {
        return new Date()
    },

    registrarTransacao: (novaTransacao: Transacao): void => {
        const tipoTransacao = novaTransacao.tipoTransacao
        const valor = novaTransacao.valor
        switch(tipoTransacao) {
            case TipoTransacao.DEPOSITO:
                saldo += valor;
                break;
            case TipoTransacao.TRANSFERENCIA:
            case TipoTransacao.PAGAMENTO_BOLETO:
                saldo -= valor;
                break;
            default:
                alert("Tipo de transação inválido");
                return;
        }  
        
        console.log(novaTransacao)
    }
}
```