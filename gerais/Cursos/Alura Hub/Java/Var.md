A partir da versão 10 do Java, foi adicionada uma nova funcionalidade para a declaração de variáveis chamada **var**. Essa nova palavra-chave permite que o compilador infira automaticamente o tipo da variável com base no valor atribuído a ela. Isso pode tornar o código mais limpo e legível, além de reduzir a digitação de código redundante.

## Sintaxe básica

A sintaxe básica para declarar uma variável com `var` é a seguinte:

```csharp
var nomeDaVariavel = valorInicial;
```

Onde `nomeDaVariavel` é o nome que você quer dar à variável e `valorInicial` é o valor que você quer atribuir a ela. O tipo da variável será inferido automaticamente pelo compilador com base no valor atribuído.

Exemplo:

```csharp
var numero = 10;
```

Nesse exemplo, a variável `numero` será inferida como sendo do tipo _int_, já que o valor atribuído é um número inteiro.

## Limitações

A declaração de variáveis com `var` possui algumas limitações:

1. O tipo da variável deve ser inferido automaticamente pelo compilador. Isso significa que não é possível utilizar `var` em variáveis cujo tipo não possa ser inferido automaticamente.
    
2. Não é possível usar `var` em variáveis sem valor inicial. É necessário atribuir um valor à variável na mesma linha em que ela é declarada.
    

A declaração de variáveis com `var` é uma funcionalidade relativamente nova no Java, mas que pode trazer diversos benefícios para o código, como a redução de digitação e melhor legibilidade do código. No entanto, é importante lembrar que existem limitações e que nem sempre é possível utilizar esse recurso.