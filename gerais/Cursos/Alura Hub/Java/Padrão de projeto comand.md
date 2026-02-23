- Cria o padrão de chamadas de comando.
- Cria-se uma classe um CommandExecutor que recebe numa função um parametro um Comand que é uma interface com um método execute, esse método execute, deve estar em várias classe comand, para ter como função.
Durante a refatoração do nosso código, utilizamos o padrão de projeto Command. Este padrão é comumente confundido com outro padrão de projeto: o Strategy. Apesar de ambos serem padrões comportamentais, eles possuem diferenças e servem para casos diferentes. Que tal conhecer as diferenças e prós e contras de cada um?

Tanto o padrão de projeto Command quanto o Strategy são padrões comportamentais, isso significa que eles se concentram na forma como as classes interagem e delegam responsabilidades. No entanto, eles têm propósitos diferentes e são usados em contextos diferentes.

## Padrão Command

O padrão Command é usado para encapsular uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar solicitações, registrar o log de solicitações e até mesmo desfazer as operações. Ele separa o remetente (quem faz a solicitação) do receptor (quem executa a ação), permitindo flexibilidade em adicionar novos comandos e mantendo o acoplamento baixo.

### Exemplo em Java:

Um sistema de controle remoto possui botões que podem executar diferentes ações, como ligar a TV, ligar o som, aumentar o volume etc. Cada botão é um comando encapsulado.

```csharp
interface Command {
    void execute();
}

class TVOnCommand implements Command {
    private TV tv;

    public TVOnCommand(TV tv) {
        this.tv = tv;
    }

    public void execute() {
        tv.turnOn();
    }
}
```

## Padrão Strategy:

O padrão Strategy é usado para definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Isso permite que os algoritmos variem independentemente dos clientes que os usam. Ele é particularmente útil quando você tem várias estratégias ou formas de realizar uma tarefa e deseja escolher dinamicamente a estratégia correta.

### Exemplo em Java:

Um sistema de pagamentos aceita diferentes formas de pagamento, como cartão de crédito, PayPal, transferência bancária etc. Cada forma de pagamento é uma estratégia encapsulada.

```java
interface PaymentStrategy {
    void pay(int amount);
}

class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void pay(int amount) {
        // Process credit card payment
    }
}
```

## Propósitos

- O Command é usado para encapsular solicitações como objetos, permitindo controle e gerenciamento de ações.
- O Strategy é usado para definir algoritmos intercambiáveis, permitindo escolher a estratégia certa em tempo de execução.

## Usos

- Command é frequentemente usado para históricos, filas de comandos e operações desfazer/refazer.
    
- Strategy é usado para escolher entre diferentes algoritmos ou estratégias de execução.
    

## Flexibilidade

- Command tem flexibilidade na execução de ações e histórico de comandos.
    
- Strategy tem flexibilidade na escolha de algoritmos.
    

> Ambos os padrões podem ser úteis em diferentes situações e contextos. A escolha entre eles depende da natureza do problema que você está resolvendo e das necessidades do seu design.