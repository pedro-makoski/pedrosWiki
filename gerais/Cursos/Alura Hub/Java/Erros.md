Stack Trace - rastro da pilha de execução, de onde aconteceu o erro.
# Tratamento de erros
Você pode colocar dentro de um bloco try, algo sensivel que pode acarretar erros, e depois tratar uma excessão específica no bloco catch, podendo ter vários catchs, para possíveis excessões diferentes.
Exemplo:
```java
try {  
    Titulo meuTitulo = new Titulo(meuTituloOMDB);  
    System.out.println(meuTitulo);  
} catch (NumberFormatException e) {  
    System.out.println("Aconteceu um erro: " + e.getMessage());  
}
```
Quando você não sabe exatamente a Exceção você pode colocar no final Exception, como tipo da classe.
## Finally
Aprendemos que quando ocorre uma exceção, o Java permite tratar o erro usando a declaração **try-catch**. Entretanto, existe ainda o bloco **finally**, que é opcional, mas pode ser útil em certas situações.

O finally é usado para executar um bloco de código independentemente de ocorrer uma exceção ou não, ou seja, ele sempre é executado. Isso pode ser útil quando precisamos executar um código tanto no try, caso não ocorra uma exceção, quanto no catch, caso uma exceção seja lançada. Por exemplo, suponha que você tenha o seguinte código:

```csharp
try {
  metodoQuePodeLancarExcecao();
  System.out.println("Executou");

  System.out.println("Finalizou!");
} catch (Exception e) {
  System.out.println("Deu erro!");

  System.out.println("Finalizou!");
}
```

Perceba no código anterior que a instrução `System.out.println("Finalizou!");` deve ser sempre executada, independente de ter acontecido ou exception ou não. Mas o problema é que ela acabou tendo de ser duplicada tanto no try quanto no catch. O bloco finally nos ajuda justamente a evitar essa duplicação de código:

```csharp
try {
  metodoQuePodeLancarExcecao();
  System.out.println("Executou");
} catch (Exception e) {
  System.out.println("Deu erro!");
} finally {
  System.out.println("Finalizou!");
}
```

Repare que agora a instrução aparece apenas uma vez, dentro do bloco finally, evitando com isso uma duplicação de código desnecessária.

O finally é muito utilizado em situações onde é necessário limpar recursos, fechar conexões de banco de dados ou fechar arquivos que foram abertos no bloco try.

# Diferença de Erro e excessão
- Excessões: pode ser prevista, e tratar de forma antecipada
- Erro: não pode ser tratado, não pode ser resolvido.
# Hierarquia
No Java, as exceções são organizadas em uma hierarquia de classes. Todas as exceções são subclasses da classe **Throwable**, sendo que ela possui duas subclasses principais: **Exception** e **Error**.

![Alt: Diagrama demonstrando a hierarquia de classes de exceções do Java](https://cdn3.gnarususercontent.com.br/2944-java/aula3-img1.png)

As exceções que herdam da classe **Exception** são chamadas de exceções verificadas (checked exceptions). Isso significa que essas exceções devem ser tratadas explicitamente em um bloco try-catch ou declaradas em uma cláusula throws na assinatura do método. Um exemplo é a classe de exceção `IOException`, que indica algum problema relacionado com leitura/escrita de dados.

As exceções que herdam da classe **Error** representam erros irrecuperáveis pelo sistema, como falta de memória ou falhas internas. Um exemplo é a classe de exceção `OutOfMemoryError`, que indica que o Java não conseguiu memória suficiente do sistema operacional para executar corretamente a aplicação.

Além disso, existe ainda a classe de exceção **RuntimeException**, que é uma subclasse direta de `Exception`, e as classes que herdam dela são chamadas de exceções não verificadas (unchecked exception). As exceções não verificadas indicam erros lógicos no código, como a `NullPointerException`, que indica o acesso a algum atributo ou método de um objeto que é nulo, ou seja, que não foi instanciado ou foi atributo ao valor `null`.

Ao lidar com exceções em um bloco try-catch, é importante considerar a hierarquia de exceções. É possível capturar exceções de uma classe mãe em um bloco catch que captura exceções de uma classe filha. No entanto, o inverso não é possível. Isso significa que, se um bloco catch captura exceções de uma classe filha, ele não será capaz de capturar exceções de uma classe mãe.

Exemplo: Imagine uma exceção `IOException` (classe mãe) e uma exceção `FileNotFoundException` (classe filha). Um bloco catch que captura `IOException` irá capturar tanto `IOException` quanto `FileNotFoundException`, pois `FileNotFoundException` é um tipo específico de `IOException`. No entanto, um bloco catch que captura `FileNotFoundException` **não** irá capturar `IOException`.

É importante lembrar que, ao usar a hierarquia de classes para tratar exceções, devemos priorizar o tratamento específico de exceções de classes filhas. Em seguida, podemos incluir um bloco catch mais genérico para tratar exceções de classes mães.
# Multi-catch
A partir do Java 7, a linguagem introduziu uma nova funcionalidade chamada "multi-catch", que permite capturar várias exceções em um único bloco catch. Essa funcionalidade pode tornar o código mais conciso e legível, reduzindo a repetição de código.

O uso de multi-catch é muito simples. Em vez de ter vários blocos catch para lidar com diferentes exceções, você pode agrupá-las em um único bloco usando o caractere | para separar as exceções. Por exemplo, suponha que você tenha escrito o seguinte código:

```csharp
try {
    metodoQuePodeLancarExcecao();
} catch (NumberFormatException e) {
    System.out.println("tratando erro...");
} catch (IllegalArgumentException e) {
    System.out.println("tratando erro...");
}
```

Como o tratamento do erro é o mesmo para ambas as exceções, o código anterior poderia ter sido escrito utilizando o multi-catch:

```csharp
try {
    metodoQuePodeLancarExcecao();
} catch (NullPointerException | IllegalArgumentException e) {
    System.out.println("tratando erro...");
}
```

No exemplo anterior, estamos lidando com duas exceções diferentes: `NullPointerException` e `IllegalArgumentException`. Se qualquer uma dessas exceções for lançada dentro do bloco try, o mesmo bloco catch será executado.

Uma observação importante de lembrar, é que o uso de multi-catch só é permitido para exceções que não estão relacionadas por uma hierarquia de herança. Se duas exceções compartilham uma hierarquia de herança, você deve lidar com elas em blocos catch separados.
# Criando erro
Exemplo:
```java
throw new ErroDeConversaoDeAnoException("Não consegui converter o ano, pois tem mais 4 caracteres");
```
```java
package exceptions;  
  
public class ErroDeConversaoDeAnoException extends RuntimeException {  
    private String mensagem;  
  
    public ErroDeConversaoDeAnoException(String message) {  
        this.mensagem = message;  
    }  
  
    @Override  
    public String getMessage() {  
        return mensagem;  
    }  
}
```