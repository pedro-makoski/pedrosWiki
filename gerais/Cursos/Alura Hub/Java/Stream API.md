Junto com as funções lambda, foi criado os streams, que permitem trabalhar com coleções, fluxos de dados, de forma mais inteligente.
Cada operação da stream gera outra stream, outro fluxo de dados.
# Operações que você pode fazer
- sorted: ordena os elementos.
- limit(n): limit n primeiros valores
- filter(lambda_function): filtra todos os elementos onde a lambda_function retorna true
- map(lambda_function): altera todos os elementos usando uma mesma função.
# Mais infos
As streams são uma nova forma de trabalhar com coleções de dados no Java, introduzidas a partir do Java 8. Elas permitem realizar operações de forma mais eficiente e concisa, utilizando uma abordagem funcional.

Uma stream é uma sequência de elementos que pode ser processada em paralelo ou em série. Ela pode ser criada a partir de uma coleção, um array, um arquivo, entre outros. A partir daí, podemos realizar diversas operações nessa stream, como filtrar, mapear, ordenar, entre outras.

As operações intermediárias são aquelas que podem ser aplicadas em uma stream e retornam uma nova stream como resultado. Essas operações não são executadas imediatamente, mas apenas quando uma operação final é chamada.

Vamos ver alguns exemplos de operações intermediárias:

- Filter: permite filtrar os elementos da stream com base em uma condição. Por exemplo, podemos filtrar uma lista de números para retornar apenas os números pares.

```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> numerosPares = numeros.stream()
                                   .filter(n -> n % 2 == 0)
                                   .collect(Collectors.toList());

System.out.println(numerosPares); // Output: [2, 4, 6, 8, 10]
```

- Map: permite transformar cada elemento da stream em outro tipo de dado. Por exemplo, podemos transformar uma lista de strings em uma lista de seus respectivos tamanhos.

```java
List<String> palavras = Arrays.asList("Java", "Stream", "Operações", "Intermediárias");

List<Integer> tamanhos = palavras.stream()
                                .map(s -> s.length())
                                .collect(Collectors.toList());

System.out.println(tamanhos); // Output: [4, 6, 11, 14]
```

As operações finais são aquelas que encerram a stream e retornam um resultado concreto. Algumas operações finais comuns são o forEach, collect e count.

Vamos ver alguns exemplos de operações finais:

- ForEach: permite executar uma ação em cada elemento da stream. Por exemplo, podemos imprimir cada elemento da lista.

```java
List<String> nomes = Arrays.asList("João", "Maria", "Pedro", "Ana");

nomes.stream()
     .forEach(nome -> System.out.println("Olá, " + nome + "!"));

// Output:
// Olá, João!
// Olá, Maria!
// Olá, Pedro!
// Olá, Ana!
```

- Collect: permite coletar os elementos da stream em uma coleção ou em outro tipo de dado. Por exemplo, podemos coletar os números pares em um conjunto.

```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

Set<Integer> numerosPares = numeros.stream()
                                   .filter(n -> n % 2 == 0)
                                   .collect(Collectors.toSet());

System.out.println(numerosPares); // Output: [2, 4, 6, 8, 10]
```

Por fim, As streams e suas operações intermediárias e finais são uma forma poderosa de manipular coleções de dados no Java de maneira mais eficiente e concisa. Elas permitem escrever código mais legível e expressivo, facilitando o processamento e a transformação de dados.

Além das operações intermediárias e finais mencionadas, existem muitas outras disponíveis, como distinct (que remove elementos duplicados), limit (que limita o número de elementos da stream), skip (que pula os primeiros elementos da stream), reduce (que combina os elementos da stream em um único resultado) e muitas outras.

Streams no Java são uma poderosa ferramenta para manipulação de coleções de dados. As operações intermediárias permitem filtrar, mapear e ordenar os elementos da stream, enquanto as operações finais encerram a stream e retornam um resultado concreto. Combinando essas operações, podemos realizar transformações e ações de forma concisa e eficiente.
# Mais operações
- flatMap: função que retorna outra stream para inserir no fluxo de dados atual.
- toList(): gera uma lista imutável a partir da String, que não pode ser alterada. 
# Peek
Função do stream, que é executada sobre cada elemento, para fazer o debug.
Como temos estudado no curso, Streams nos permitem manipular coleções de elementos (como Lists ou Sets) de forma mais sofisticada e eficiente do que os métodos tradicionais. Eles são especialmente úteis quando precisamos realizar operações em massa nesses elementos, como filtrar, transformar ou agregar.

## E a função Peek, o que é?

A função”peek” é uma operação intermediária de uma stream. Uma operação intermediária é aquela que processa os dados da stream, mas não a finaliza, ou seja, ela permite que mais operações sejam feitas depois dela. A função peek é usada para "espiar" os elementos da stream sem alterá-los, o que pode ser muito útil para depuração. Essa função vai receber cada elemento da stream e realizar alguma operação de efeito colateral (como imprimir o elemento), mas vai devolver o mesmo elemento sem alterar nada.

## Por que eu deveria usar isso?

O uso de Streams e a função peek podem te ajudar a escrever códigos mais elegantes, fáceis de ler, e diminuir a possibilidade de erros. Além disso, eles podem fazer seu código rodar mais rápido em certos casos, pois os Streams permitem a paralelização das operações, ou seja, executar várias operações ao mesmo tempo.

## Exemplos de código

Vamos ver agora um exemplo simples de como podemos usar a função peek com streams. Imagine que temos uma lista com números e queremos multiplicar cada um deles por 2 e depois somar os resultados.

```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

int soma = numeros.stream()
                .peek(n -> System.out.println("Elemento: " + n))
                .map(n -> n * 2)
                .peek(n -> System.out.println("Conteúdo depois do map: " + n))
                .reduce(0, (total, numero) -> total + numero);

System.out.println("A soma dos números é: " + soma);
```

Nesse código, nós criamos uma stream com a lista de números, espiamos cada número para imprimir (com a função.peek), multiplicamos o valor por dois, espiamos também para conferir o valor da multiplicação e depois somamos os resultados.

Veja como aparece no terminal após a execução da aplicação:

```vbnet
Elemento: 1
Conteúdo depois do map: 2
Elemento: 2
Conteúdo depois do map: 4
Elemento: 3
Conteúdo depois do map: 6
Elemento: 4
Conteúdo depois do map: 8
Elemento: 5
Conteúdo depois do map: 10
A soma dos números é: 30

Process finished with exit code 0
```

Isso nos ajuda a ter certeza de que o processo está sendo feito corretamente. Aqui conseguimos perceber que a soma dos números 2 + 4 + 6 + 8 + 10 foi calculada corretamente, resultando em 30. Ou seja, a função lambda em nosso método `reduce` está fazendo exatamente o que era planejado. E pudemos conferir isso, com o peek.

Esse é apenas um exemplo básico, mas lembre-se que a função peek pode ser usada em qualquer lugar dentro da sua stream, sempre que você quiser ver quais elementos estão passando por aquele ponto.
# Criando um MAP a partir de uma lista:
```java
private Map<Integer, Double> getAvaliacoesPorTemporada(List<EpisodioSample> episodios) {  
    return episodios.stream()  
            .filter(e -> e.getAvaliacao() > 0.0)  
            .collect(  
                    Collectors.groupingBy(EpisodioSample::getTemporada,  // Agrupa os itens para cada temporada na Chave, e coleta um valor geral da média da avaliacação da temporada
                    Collectors.averagingDouble(EpisodioSample::getAvaliacao))  
            );  
}
```
# Analise
Quando se trata de gerar estatísticas em Java, existem classes que podem simplificar bastante o trabalho. Duas delas são DoubleSummaryStatistics e IntSummaryStatistics, que são usadas para calcular estatísticas básicas em coleções de valores do tipo double e int, respectivamente.

A classe DoubleSummaryStatistics é uma classe utilitária que permite calcular estatísticas como soma, média, valor mínimo e máximo, além do total de elementos em uma coleção de valores do tipo double. Ela possui métodos como getSum(), getAverage(), getMin(), getMax() e getCount(), que retornam os respectivos valores estatísticos.

Da mesma forma, a classe IntSummaryStatistics é usada para calcular estatísticas básicas em coleções de valores do tipo int. Ela também possui métodos como getSum(), getAverage(), getMin(), getMax() e getCount() para obter as estatísticas desejadas.

Essas classes são especialmente úteis quando você precisa realizar cálculos estatísticos em uma coleção de valores. Por exemplo, se você tem uma lista de preços de produtos e deseja calcular a média, o valor mínimo e o valor máximo, você pode utilizar a classe DoubleSummaryStatistics para obter essas informações de forma simples e eficiente, de forma bem similar ao que fizemos ao pegar as estatísticas dos episódios com maior e menor avaliação, a média e o total de itens levados em consideração na montagem de estatísticas.

Para usar essas classes, você pode criar uma instância delas e, em seguida, percorrer a coleção de valores, atualizando as estatísticas conforme necessário. Ao final do processo, você pode chamar os métodos apropriados para obter as estatísticas desejadas. Vamos ver um exemplo onde temos uma lista de estudantes e queremos pegar dados sobre suas idades.

Para a classe Aluno teremos o seguinte código:

```csharp
public class Aluno {
    private String nome;
    private LocalDate nascimento;

    public Aluno(String nome, LocalDate nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }

    public int getIdade() {
        Period periodo = Period.between(nascimento, LocalDate.now());
        return periodo.getYears();
    }

    //getters, setters e toString omitidos

}
```

Criamos um método getIdade(), onde estamos usando o `Period`, que assim como o `LocalDate` é uma classe do pacote `java.time`, para calcular a idade do estudante de acordo com o dia que a aplicação está sendo executada.

Em nossa classe Principal teremos o seguinte código:

```typescript
public class Principal {
    public static void main(String[] args) {
        List<Aluno> alunos = Arrays.asList(
                new Aluno("Alice", LocalDate.of(2002, 10, 20)),
                new Aluno("Bob", LocalDate.of(1980, 8, 9)),
                new Aluno("Carlos", LocalDate.of(2001, 01, 28)),
                new Aluno("David", LocalDate.of(2003, 05, 12)),
                new Aluno("Eva", LocalDate.of(2005, 12, 03))
        );

        IntSummaryStatistics stats = alunos.stream()
                .mapToInt(Aluno::getIdade)
                .summaryStatistics();

        // Exibindo as estatísticas
        System.out.println("Idade média: " + stats.getAverage());
        System.out.println("Mínima idade: " + stats.getMin());
        System.out.println("Máxima idade: " + stats.getMax());
        System.out.println("Total de alunos: " + stats.getCount());
    }
}
```

	Em resumo, as classes DoubleSummaryStatistics e IntSummaryStatistics são ferramentas úteis para facilitar a geração de estatísticas básicas em coleções de valores do tipo double e int. Elas fornecem métodos simples e eficientes
# Mais detalhes:
O Java Streams é uma característica poderosa que oferece a capacidade de realizar operações de processamento de dados complexas de forma eficiente e em paralelo, sobre collections, arrays e I/O channels. Quando você começa a entender o Java Streams melhor, você nota que ele pode ser usado em muitas maneiras diferentes para fazer seu código mais limpo e mais eficiente. Vamos olhar mais a fundo para os usos avançados de Java Streams e como você pode começar a integrá-los em seus projetos.

## Uso avançado de Java Streams

Quando trabalhamos com Java Streams, muitas vezes vamos além do uso básico e adentramos em conceitos mais avançados e complexos. Vamos ver alguns exemplos:

**1 - Streams Infinitos**

Streams infinitos, ou “infinite Streams”, são streams que não têm um tamanho definido. Eles são úteis quando queremos gerar uma sequência de números ou valores. Aqui está um exemplo de como criamos um Stream infinito com o método iterate:

```java
Stream.iterate(0, n -> n + 1)
     .limit(10)
     .forEach(System.out::println);
```

No exemplo acima, começamos com o número 0 e adicionamos 1 a cada iteração para gerar uma sequência numérica. Utilizamos o método limit() para restringir o Stream infinito a 10 elementos e usamos forEach para imprimi-los.

**2 - FlatMap**

O método flatMap é uma operação intermediária que é usada para transformar um Stream de coleções em um Stream de elementos. Aqui está um exemplo de como o flatMap é usado:

```java
List<List<String>> list = List.of(
  List.of("a", "b"),
  List.of("c", "d")
);

Stream<String> stream = list.stream()
  .flatMap(Collection::stream);

stream.forEach(System.out::println);
```

Neste exemplo, transformamos um Stream de List para um Stream de Strings.

**3 - Redução de Streams**

Stream.reduce() é uma operação terminal que é utilizada para reduzir o conteúdo de um Stream para um único valor.

```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
Optional<Integer> result = numbers.stream().reduce(Integer::sum);
result.ifPresent(System.out::println); //prints 15
```

No exemplo acima, somamos todos os números da lista usando o método reduce().

	Lembre-se que o Java Streams é uma ferramenta poderosa que pode tornar seu código mais elegante e eficiente. Continue praticando e explorando todas as diferentes operações e métodos disponíveis para você com Java Streams para se tornar mais hábil em lidar com dados em suas aplicações.