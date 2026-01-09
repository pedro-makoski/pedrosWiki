## Transcrição

**Jacqueline:** Vamos retomar agora para realizar mais algumas pesquisas no banco de dados.

Notamos que o _JPA Repository_ já inclui alguns métodos de uso padrão, como o `Save` e o `Find All`, que utilizamos para recuperar todas as séries do banco. No entanto, temos a capacidade de **personalizar essas consultas**. Para isso, vamos aproveitar um recurso chamado _Derivate Queries_, ou seja, consultas derivadas.

## Derivate Queries (Consultas Derivadas)

**Jacqueline:** O que isso significa é que podemos, a partir do nome do método criado no repositório, permitir que a JPA infira e transforme isso em consultas.

Temos as consultas tradicionais do banco que usam a linguagem SQL, e também outra consulta chamada JPQL, que será abordada posteriormente neste curso e é um pouco mais **complexa**. No entanto, ao usar consultas derivadas, podemos alcançar resultados semelhantes utilizando apenas o nome do método.

Vamos à documentação para facilitar, e posteriormente partiremos para a prática.

> [Working with Spring Data Repositories](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories)

Ao trabalharmos com repositórios, temos alguns métodos, como o `findById`, `findAll`, `delete`, entre outros métodos. São métodos que realizam operações baseadas no nome do método. A partir do que temos no nome do método, conseguimos inferir as consultas.

Porém, temos a capacidade de **personalizar**. Se formos até a opção de mais detalhes, em "_Appendix C: Repository query keywords_", possuímos algumas palavras-chave como o `Find By`, `Exists`, `Delete`. Dessa forma, podemos fazer algumas composições como o `Find Buy` tal coisa, `End tal` outra coisa.

Serão apresentados diversos exemplos e exercícios para aprimorar a compreensão. Vamos começar. Vamos iniciar a aplicação que a Iasmin já havia iniciado anteriormente.

A Iasmin implementou algumas funcionalidades. Pretendo analisar quais séries estão disponíveis em nosso repositório, em nosso banco de dados, para iniciarmos as consultas.

As séries disponíveis podem incluir "The Boys" e outras séries voltadas para um público jovem. Minhas séries podem ser diferentes.

Para isso, vamos ao terminal do VSCode e clicamos no botão de play na parte superior. Obtemos como retorno:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 0 - Sair

No terminal, listamos as séries que já buscamos para o nosso banco digitando "3". Serão exibidas algumas como _Game of Thrones_, _The Boys_, _Mandalorian_, _Last of Us_, _Gilmore Girls_.

Suponhamos que desejamos buscar apenas **uma série a partir do nome**. No curso anterior, fizemos isso usando o _Streams_. Passávamos o nome, buscávamos a série e retornávamos, fazíamos um filtro. Inclusive, fazemos isso quando buscamos os episódios, escolhemos a série pelo nome e a transformamos.

Entretanto, como essa ação será executada por meio de um comando do repositório? Vamos ao arquivo `SerieRepository.java`.

> [Arquivo `SerieRepository.java` no repositório do GitHub](https://github.com/iasminaraujoc/3355-java-screenmatch-com-jpa/blob/aula03/src/main/java/br/com/alura/screenmatch/repository/SerieRepository.java)

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SerieRepository extends JpaRepository<Serie, Long> {
}
```

Primeiramente, para compormos o nome deste método, utilizaremos `find`. Portanto, estamos especificando que o método será chamado de `find` e seremos responsáveis por buscar informações com base em um critério.

Qual será o critério? Queremos realizar a busca pelo **nome da série**. Na classe [Serie.java](https://github.com/iasminaraujoc/3355-java-screenmatch-com-jpa/blob/aula03/src/main/java/br/com/alura/screenmatch/model/Serie.java) , o nome da série é definido pelo atributo `titulo`.

O que precisamos fazer? `findByTitulo`. Precisamos usar exatamente o **nome do atributo da classe**. Assim, não importa o que está no banco de dados. Pode ser que no banco tenhamos colocado o nome dessa coluna como "nome da série", pode ser diferente, mas para utilizarmos com a JPA, deve ser exatamente o nome do atributo.

**Iasmin:** Estamos nos referindo à aplicação, não, Jaque? Assim, estamos olhando para a classe Java e não para a tabela do banco de dados.

**Jacqueline:** Exatamente, a JPA vai se basear nisso. Portanto, faremos um `findByTitulo`. Queremos buscar uma série pelo título.

> SerieRepository.java

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SerieRepository extends JpaRepository<Serie, Long> {
    findByTitulo
}
```

No entanto, lembramos que o título contém letras maiúsculas e minúsculas, e, às vezes, não queremos o título completo. Por exemplo, temos "_The Last of Us_," mas queremos pesquisar apenas por "_Last_" para verificar se ele encontra para nós.

Portanto, o que precisamos fazer é usar um método `contains`, da mesma forma que fazíamos com _streams_.

### Usando o método `Containing`

**Jacqueline:** Neste ponto, realizaremos a verificação se o conjunto de dados contém a palavra-chave que estamos buscando.

Usaremos o comando`findByTituloContainingIgnoreCase()`. Este comando é **insensível a letras maiúsculas e minúsculas**, ou seja, ele ignora essa diferença ao realizar a comparação.

Vamos passar o nome da série como parâmetro para esta _query_. Desta forma, a nova estrutura será algo como: `findByTituloContainingIgnoreCase(String nomeSerie)`.

Como resultado deste comando, podemos ter duas situações:

1. Encontrar uma série que corresponda à palavra-chave;
2. Não encontrar.

Portanto, definimos que o retorno deste método será um `Optional` de série, `Optional<Serie>`. Importaremos a biblioteca `Optional` em nosso código.

> SerieRepository.java

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SerieRepository extends JpaRepository<Serie, Long> {
    Optional<Serie> findByTituloContainingIgnoreCase(String nomeSerie);
}
```

Agora, é hora de testar! Usaremos o método `findByTituloContainingIgnoreCase()`.

Do lado esquerdo do editor de código, clicamos no arquivo [Principal.java](https://github.com/iasminaraujoc/3355-java-screenmatch-com-jpa/blob/aula04/src/main/java/br/com/alura/screenmatch/principal/Principal.java) .

Nesse arquivo, criaremos uma nova opção de menu chamada "Buscar série por título", que será a opção número 4 (linha 45).

> Principal.java

```java
// código omitido

while(opcao != 0) {
var menu = """
    1 - Buscar séries
    2 - Buscar episódios
    3 - Listar séries buscadas
    4 - Buscar série por título


// código omitido
```

No bloco `switch-case`, teremos um `case 4` que irá chamar o método `buscarSeriePorTitulo`.

> Principal.java

```java
// código omitido

case 4:
        buscarSeriePorTitulo();
        break;

// código omitido
```

Observem que `buscarSeriePorTitulo` está na cor vermelha. Para ajustar, selecionamos o ícone de lâmpada vermelha do lado esquerdo da linha e escolhemos a opção "_Create method "buscarSeriePorTitulo" in 'Principal'_".

Seremos redirecionados para a linha 76, onde teremos o método. Vamos copiá-lo e colá-lo no final do arquivo.

> Principal.java

```java
// código omitido

private void buscarSeriePorTitulo() {

}

// código omitido
```

Este método fará algo muito similar ao que temos na busca de episódios: iremos mostrar todas as séries existentes, perguntar pelo nome de uma série e executar um _stream_ da lista de todas as séries.

Copiamos as linhas 95 e 96 do método `buscarEpisodePorSerie()` e colamos no método `buscarSeriePorTitulo()`:

```csharp
// código omitido

System.out.println("Escolha um série pelo nome: ");
var nomeSerie = leitura.nextLine();

// código omitido
```

No entanto, vamos manter esse fluxo em uma lista separada, ao invés de trabalhar com a lista geral de séries.

> Principal.java

```java
// código omitido

private void buscarSeriePorTitulo() {
System.out.println("Escolha um série pelo nome: ");
var nomeSerie = leitura.nextLine();
}

// código omitido
```

Na linha seguinte, inserimos um `Optional<Serie>` chamada `serieBuscada` que receberá `repositorio.findByTituloContainingIgnoreCase()` e passamos o `nomeSerie`.

> Principal.java

```java
// código omitido

private void buscarSeriePorTitulo() {
System.out.println("Escolha um série pelo nome: ");
var nomeSerie = leitura.nextLine();
Optional<Serie> serieBuscada = repositorio.findByTituloContainingIgnoreCase(nomeSerie);
}

// código omitido
```

Se a série for encontrada, exibiremos seus dados. Caso contrário, exibiremos a mensagem "Série não encontrada". Isso é possível porque a opção de retorno do nosso método `find` é um `Optional`, que também poderia ser uma lista (`List`) ou a própria série (`Serie`).

Digitamos então `if(serieBuscada.isPresent())` e exibimos uma mensagem `"Dados da série:"`. Na sequência, exibimos os dados da série. Para isso, usaremos a **concatenação** com `serieBuscada.get()`.

Posteriormente, faremos o `else{}` imprimindo a mensagem `"Série não encontrada!"`.

> Principal.java

```java
// código omitido

private void buscarSeriePorTitulo() {
System.out.println("Escolha um série pelo nome: ");
var nomeSerie = leitura.nextLine();
Optional<Serie> serieBuscada = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

if (serieBuscada.isPresent()) {
        System.out.println("Dados da série: " + serieBuscada.get());

} else {
        System.out.println("Série não encontrada!");
}
}

// código omitido
```

**Iasmin:** É legal comentar que nós escolhemos o retorno do `find` seria um `Optional`. Poderíamos ter optado por um `list` ou pela própria série, a JPA nos permite fazer isso.

**Jacqueline:** Vamos executar a busca por título e analisar o que acontece. Para isso, clicamos no botão de play na parte superior.

No terminal, obtemos:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 4 - Busca série por título
> 
> 0 - Sair

Digitamos a opção "4" e obtemos mais uma pergunta:

> Escolha uma série pelo nome:

Digitamos "game".

Como a série "Game of Thrones" consta em nosso banco de dados, a pesquisa retornou as informações referentes a ela, como gênero, título, total de temporadas e atores.

Ao observar a saída do programa, podemos perceber que foi gerado um `select` com um `like` e `upper`. Isto é, a consulta ao banco foi feita de forma insensível a maiúsculas e minúsculas e utilizou o método `contains`, assim como fazemos nos _streams_.

De maneira implícita, a partir do nome dado ao método e dos itens inseridos nele, ele determinou e executou a _query_ de acordo com o que precisamos.

**Iasmin:** Isto finaliza tudo de forma mais rápida, pois ao invés de usar _streams_, teríamos que dar um `findAll()`, trazendo todos os dados do banco e depois utilizar as _streams_ para filtrar o que desejamos.

Agora, nós vamos diretamente ao banco e usamos uma _query_ para realizar a busca, certo? Exatamente.

**Jacqueline:** Inclusive, para encerrarmos o conteúdo deste vídeo, utilizaremos o que fizemos e substituiremos na nossa busca de episódios.

> Trecho de código copiado pela instrutora no arquivo `Principal.java`

```scss
repositorio.findByTituloContainingIgnoreCase(nomeSerie);
```

Isso ocorre porque a busca de episódios está executando exatamente essa função que explicamos.

Observem que o `buscarEpisodioPorSerie` obtém a lista completa de séries, filtra pelo título, converte para minúsculas e verifica se contém o nome da série em minúsculo. Assim, encontra o primeiro.

Dessa forma, vamos remover as linhas dentro de `serie` e inserir o repositório. Assim, quando o aplicativo mostrar todas as séries pesquisadas, iremos buscar diretamente do banco o que queremos na hora de selecionar e atribuir no `Optional`.

> Principal.java

```swift
// código omitido

Optional<Serie> serie = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

// código omitido
```

Portanto, este é o primeiro exemplo que discutimos, iremos explorar vários outros.

Porém, é um recurso muito importante para se conhecer quando estiver trabalhando com _Spring Data JPA_, que são as consultas derivadas, ou _derived queries_ (Consultas derivadas), como são chamadas em inglês.

Até mais!

## Para saber mais: consultas derivadas ("derived queries")

A JPA tem diversos recursos, e um dos mais legais que podemos utilizar são as derived queries, em que trabalhamos com métodos específicos que consultam o banco de forma personalizada. Esses métodos são criados na interface que herda de JpaRepository. Neles, utilizaremos palavras-chave (em inglês) para indicar qual a busca que queremos fazer.

A estrutura básica de uma derived query na JPA consiste em:

`verbo introdutório + palavra-chave “By” + critérios de busca`

Como verbos introdutórios, temos _find_, _read_, _query_, _count_ e _get_. Já os critérios são variados. Veremos alguns exemplos em vídeo, mas você pode explorar bastante a prática para entendê-los melhor.

Os critérios mais simples envolvem apenas os atributos da classe mapeada no Repository. No nosso caso, um exemplo desse critério seria o `findByTitulo`, em que fazemos uma busca por séries com um atributo específico da classe `Serie`. Mas podemos acrescentar condições a esses critérios. É aí que surge o `findByTituloContainingIgnoreCase()`. Para fazer os filtros, poderíamos utilizar várias outras palavras. Dentre elas, podemos citar:

- Palavras relativas à igualdade:
    
    - `Is`, para ver igualdades
    - `Equals`, para ver igualdades (essa palavra-chave e a anterior têm os mesmos princípios, e são mais utilizadas para a legibilidade do método).
    - `IsNot`, para checar desigualdades
    - `IsNull`, para verificar se um parâmetro é nulo
- Palavras relativas à similaridade:
    
    - `Containing`, para palavras que contenham um trecho
    - `StartingWith`, para palavras que comecem com um trecho
    - `EndingWith`, para palavras que terminem com um trecho
    - Essas palavras podem ser concatenadas com outras condições, como o `ContainingIgnoreCase`, para não termos problemas de Case Sensitive.
- Palavras relacionadas à comparação:
    
    - `LessThan`, para buscar registros menores que um valor
    - `LessThanEqual`, para buscar registros menores ou iguais a um valor
    - `GreaterThan`, para identificar registros maiores que um valor
    - `GreaterThanEqual`, para identificar registros maiores ou iguais a um valor
    - `Between`, para saber quais registros estão entre dois valores

Essas são apenas algumas das palavras que podemos utilizar, e podemos combiná-las de muitas formas! Ao longo dos próximos vídeos, vamos exercitar nossos conhecimentos fazendo várias buscas com essas palavras-chave, mas também te convidamos a testar com vários exemplos para ver na prática como funciona!
## Transcrição

**Jacqueline:** Seguindo na mesma linha de criar consultas dinâmicas no repositório com base no nome do método, uma das abordagens interessantes que poderíamos explorar, tal como fizemos com a lista de atores, seria buscar uma série pelo nome da pessoa atuante.

Por exemplo, quais séries um determinado ator trabalhou? Parece uma ideia interessante, não acha, Iasmin?

**Iasmin:** Notei que temos "_Mandalorian_" e "_The Last of Us_", então podemos buscar por Pedro Pascal.

**Jacqueline:** Vamos então buscar por Pedro Pascal, principalmente porque essa pessoa atuante também aparece em "_Game of Thrones_".

Vamos ver então.

## Buscando séries pelo ator ou atriz

**Jacqueline:** No arquivo `Principal.java`, deixaremos essa consulta como a **opção 5**, que será "Buscar séries por ator".

> Principal.java

```php
// código omitido

while(opcao != 0) {
        var menu = """
                        1 - Buscar séries
                        2 - Buscar episódios
                        3 - Listar séries buscadas
                        4 - Buscar série por título
                        5 - Buscar séries por ator

// código omitido
```

No `case 5`, inserimos "buscar séries por ator". Então, adicionamos o comando `break` para evitar que o código continue sendo executado após sua chamada.

> Principal.java

```cpp
// código omitido

case 5:
        buscarSeriesPorAtor();
        break;

// código omitido
```

Vamos descer até o final do nosso código para criar o método. Logo após a função de `buscarSeriePorTitulo()`, adicionamos outro `private void`, chamado `buscarSeriesPorAtor()`.

> Principal.java

```csharp
// código omitido

private void buscarSeriesPorAtor() {

}
```

O que esperamos como retorno? Desejamos uma lista, mencionamos como exemplo o Pedro Pascal. Sabemos que essa pessoa atuante trabalhou em "_Game of Thrones_", "_Mandalorian_" e "_The Last of Us_".

O que imaginamos é que ao digitarmos o nome dele, Pedro Pascal, devem aparecer todas as séries em nosso banco de dados e aquelas fornecidas pela OMDB (_Open Movie Database_) em que ele tenha atuado.

O OMDB nos forneceu uma lista com três, quatro atores no máximo, então não sei se o nome de Pedro Pascal vai aparecer em todas as séries. Vamos verificar em tempo real e descobrir em quais séries Pedro Pascal vai aparecer.

Dentro do nosso método `buscarSeriesPorAtor()`, se esperamos que a pessoa apareça em uma lista de séries, que pode conter várias séries ou nenhuma, essa lista pode ser vazia: `List<Serie>`. Essa é uma dica de como será o retorno do nosso método quando o criarmos no repositório.

Quando mencionamos `seriesEncontradas` e chamamos nosso `.`, sabemos que quando formos criar esse método, ele precisa retornar uma lista de séries.

De fato, vamos realizar o processo oposto, vamos criar e deixar o repositório criar lá. Como esperamos que seja a busca? Realizaremos um `find`, pois é o que queremos buscar, então será um `findBy`.

Desejamos buscar pelo nome do ator, portanto, será um `findBy atores` (Classe `Serie.java`), semelhante ao que usamos para o título, ignorando diferenças entre maiúsculas e minúsculas e também considerando partes do nome.

Digitamos `findByAtoresContainingIgnoreCase()`, passando o `nomeAtor`, sendo o que vamos perguntar neste método.

Faremos uma chamada `System.out.println()`, para perguntar "`qual o nome para a busca?`". Na sequência, iremos ler a variável `nomeAtor`, que irá receber a variável de `leitura.nextLine()`. E, após isso, realizamos um `System.out.println` em nossas `seriesEncontradas`, caso haja alguma, certo?

> Principal.java

```csharp
// código omitido

private void buscarSeriesPorAtor() {
    System.out.println("Qual o nome para a busca?");
    var nomeAtor = leitura.nextLine();
    List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCase(nomeAtor);
    System.out.println(seriesEncontradas);
    
}
```

Neste ponto, a IDE já identificou que criamos um método, mas ele ainda não existe no nosso repositório. Observamos isso pelo fato do `findByAtoresContainingIgnoreCase()` estar na cor vermelha.

Podemos instruir a IDE a criá-lo clicando no ícone de lâmpada do lado esquerdo e escolhendo a opção "_Create method ''findByAtoresContainingIgnoreCase' in 'SerieRepository'_".

Assim, o método será gerado automaticamente de acordo com nossa definição.

Portanto, tanto faz criar no `SerieRepository` e chamar no repositório, ou chamar no repositório e já mandar criar nesse arquivo, certo Iasmin?

**Iasmin:** Sim, a IDE realmente simplifica muito esse processo.

**Jacqueline:** Vamos executar o código clicando no botão "▶" na parte superior. Obtemos o seguinte retorno no terminal:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 4 - Buscar série por título
> 
> 5 - Buscar série por ator
> 
> 0 - Sair

Digitamos a opção 5, que é buscar séries por ator.

> Qual o nome para a busca?

Digitamos o nome "Pedro Pascal".

Observem que ficou tudo na mesma linha. Isso porque também fizemos um `System.out.println()` em uma única linha. Faremos depois um `for each` para ficar mais apresentável.

Mas, observem, surgiram duas séries. Iremos corrigir isso, pois a visualização assim não é agradável.

Vamos voltar ao arquivo `Principal.java`. Escrevemos na linha 153, `System.out.println("Séries em que " + nomeAtor + trabalhou)`. Concatenamos o nome da pessoa ator e "trabalhou".

> Principal.java

```csharp
// código omitido

private void buscarSeriesPorAtor() {
    System.out.println("Qual o nome para a busca?");
    var nomeAtor = leitura.nextLine();
    List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCase(nomeAtor);
    System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
    System.out.println(seriesEncontradas);
    
}
```

Removemos o `System.out.println(seriesEncontradas)` e para cada série encontrada, faremos um `seriesEncontradas.forEach()`, onde colocaremos o seguinte: para cada série encontrada, vamos exibir apenas o nome da série com sua respectiva avaliação.

Utilizaremos `System.out.println()`, o nome da série, e concatenaremos com a avaliação, para visualizarmos a avaliação dessa série.

> Principal.java

```csharp
// código omitido

private void buscarSeriesPorAtor() {
    System.out.println("Qual o nome para a busca?");
    var nomeAtor = leitura.nextLine();
    List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCase(nomeAtor);
    System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
    seriesEncontradas.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    
}
```

Executamos a aplicação novamente, e obtemos a seguinte retorno no terminal:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 4 - Buscar série por título
> 
> 5 - Buscar série por ator
> 
> 0 - Sair

Digitamos "5". E obtemos:

> Qual o nome para a busca?

Digitamos o nome "Pedro Pascal".

Foi exibida a série _Mandalorian_ com `8.7` e _The Last of Us_ com `8.8`.

Nesse momento, há um detalhe que mencionei. Sabemos que ele trabalhou em _Game of Thrones_. Entretanto, o MDB, que só forneceu para nós três ou quatro atores, não o inclui na lista de atores de _Game of Thrones_.

Repare, fizemos uma busca por uma pessoa, mas também podemos fazer uma **composição**. Poderíamos, por exemplo, especificar que desejamos apenas as séries nas quais essa pessoa atuou e que tenham uma avaliação igual ou superior a `8.8`.

Essa ideia nos permitiria obter somente as séries mais bem avaliadas, evitando aquelas em que ela tenha trabalhado e que tenham sido mal avaliadas.

Neste caso, considerando que temos uma série com classificação `8.7` e outra com `8.8`, vamos informar que desejamos visualizar apenas as séries cuja classificação seja maior ou igual a `8.8`.

Isso permitirá verificar se a consulta no banco de dados está sendo feita corretamente, e apenas uma série será exibida.

## Aplicando a composição na consulta

**Iasmin:** Vamos utilizar apenas algumas palavras-chave, correto?

**Jacqueline:** Conforme indicado na documentação, a intenção é concatenar determinadas palavras-chave, e em teoria, todas as etapas devem ser executadas de forma adequada.

Vamos parar a aplicação clicando no botão "■" na parte superior. Logo após, abrimos o arquivo `SerieRepository` e no método `findByAtoresContainIgnoreCase`, concatenamos e informamos que também desejamos que a avaliação seja maior que um determinado valor.

Após a utilização do `findByAtoresContainIgnoreCase`, procederemos com o uso do operador `AND` para adicionar outra condição que deve ser verdadeira em conjunto com a primeira.

Nesse caso, o campo que desejamos verificar é a avaliação, sendo necessário que o nome seja utilizado exatamente dessa forma. Portanto, a condição será `AndAvaliacao`.

Para especificar que desejamos que o campo `avaliacao` seja maior ou igual a um determinado critério, utilizaremos a palavra-chave `greaterThanEqual`, a qual representa o símbolo "maior ou igual" utilizado em SQL.

Isso implica que a avaliação deve ser maior ou igual ao parâmetro `double avaliacao` o que será fornecido ao método.

> SerieRepository.java

```javascript
// código omitido

    Lista<Serie> findByAtoresContainIgnoreCaseAndAvaliacaoGreaterThanEqual(String nomeAtor, double avaliacao) {
    
    }

// código omitido
```

Neste método, será necessário fornecer o nome do ator e a avaliação mínima das séries que desejamos obter. Em outras palavras, buscamos séries com avaliações iguais ou superiores a um determinado valor; caso contrário, elas não serão incluídas no resultado.

No arquivo `Principal.java`, teremos que substituir o método `findByAtoresContainingIgnoreCase`, que não mais existe, por `findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual`.

Precisaremos passar um segundo parâmetro a esse método. Logo, vamos também perguntar usando o `System.out.println()`: "Avaliações a partir de que valor?".

Para isso, vamos criar uma variável `avaliacao` que receberá um `leitura.nextDouble()` e passá-la ao método junto com o nome do ator dentro dos parênteses.

Ficamos com o seguinte trecho de código:

> Principal.java

```csharp
// código omitido

private void buscarSeriesPorAtor() {
        System.out.println("Qual o nome para busca?");
        var nomeAtor = leitura.nextLine();
        System.out.println("Avaliações a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(nomeAtor, avaliacao);
        System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
        seriesEncontradas.forEach(s ->
                        System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
}

// código omitido
```

Ao executarmos a aplicação, iremos verificar se será exibido apenas o resultado com avaliação `8,8.`. Na realidade, uma delas era `8,7` e a outra `8,8`, e apenas uma delas deve ser exibida.

Portanto, clicamos no botão "▶" na parte superior para executar a aplicação e obtemos como retorno as seguintes opções:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 4 - Buscar série por título
> 
> 5 - Buscar série por ator
> 
> 0 - Sair

Escolhemos a opção 5.

> Qual o nome para a busca?

Digitamos "Pedro Pascal".

> Avaliações a partir de qual valor?

Digitamos "8,8".

**Iasmin:** É importante lembrar que estamos utilizando uma vírgula em nosso terminal, enquanto no banco de dados o valor é representado com um ponto decimal.

Isso acontece porque no terminal estamos usando o Português como idioma, enquanto o padrão no banco de dados é o Inglês, que utiliza o ponto decimal. Portanto, é crucial digitar os valores corretamente para evitar exceções.

**Jacqueline:** Se digitássemos `8.8`, teríamos problemas e não conseguiríamos recuperar.

Analisando o retorno, obtemos:

> Séries que Pedro Pascal trabalhou:
> 
> The Last of Us: 8.8

Temos somente a série com avaliação maior que 8.8.

Agora, ao observarmos a consulta, ela terá a seguinte forma: `like upper` and `s1_0.avaliacao>=?` (avaliação maior ou igual) ao parâmetro.

Dessa forma, apenas utilizando palavras-chave no nome do método, conseguimos que ele crie consultas dinâmicas automaticamente para nós, sem a necessidade de escrever SQL ou JPQL manualmente.

**Iasmin:** É interessante ter conhecimento em _SQL_ pois isso nos dará uma vantagem, já que sabemos a sintaxe básica, como o uso de `AND`, por exemplo.

**Jacqueline:** É por isso que a busca constante pelo aprendizado é fundamental. Se você gostou deste curso e deseja trabalhar com bancos de dados, é importante aprimorar seus conhecimentos, como por exemplo, fazendo um curso de Postgres.

## Conclusão

**Jacqueline:** A partir deste ponto, exploraremos mais alguns exemplos de consultas derivadas.

Até o próximo vídeo, pessoal!
## Transcrição

**Jacqueline:** Olá, vamos prosseguir com o desenvolvimento e implementação de recursos para aprimorar nosso projeto, que está em constante crescimento.

Estamos avançando rapidamente, e cada novo recurso que implementamos acrescenta valor ao nosso projeto.

**Iasmin:** Essas adições serão particularmente úteis quando iniciarmos o desenvolvimento das aplicações web.

**Jacqueline:** Isso, já que é altamente provável que tudo o que estamos fazendo será solicitado na versão _web_ do aplicativo. As pessoas usuárias poderão, por exemplo, buscar uma série pelo título, ator ou avaliação. Portanto, com a evolução do aplicativo em mente, podemos adicionar uma nova opção, a opção 6, que exibirá as 5 séries mais bem avaliadas.

## Buscando as top 5 séries

**Jacqueline:** Assim, vamos começar a implementar essa funcionalidade de "Top 5 Séries", que será o nosso caso 6. No arquivo `Principal.java` e inserimos `6 - Top 5 Séries` e em `case` será o de número `6` e repetimos a estrutura dos `cases` anteriores.

> Principal.java

```php
// código omitido

while(opcao != 0) {
var menu = """
    1 - Buscar séries
    2 - Buscar episódios
    3 - Listar séries buscadas
    4 - Buscar série por título
    5 - Buscar séries por ator
    6 - Top 5 Séries

// código omitido

case 6:
        buscarTop5Series();
        break;

// código omitido
```

Utilizaremos consultas de derivados para obter uma lista de séries.

Descendo o arquivo até a linha 164, declaramos um método privado chamado `private void buscarTop5Series()`. Dentro deste método, criaremos uma lista de séries chamada `serieTop` , `List<Serie> serieTop`.

A pergunta que se apresenta é: como podemos buscar as cinco séries mais bem avaliadas? Ao buscar séries por ator ou por algum outro atributo da classe, simplesmente inserimos o nome do atributo no comando, como `findByAtores`, `findByTitulo`, `findByAvaliacao`, `findByID`.

Mas e quando queremos as top 5 séries? Será que é suficiente apenas adicionar um comando `top`?

Podemos tentar usar o comando `repositorio.findTop5`, porém, precisamos especificar o critério pelo qual as séries serão classificadas como as cinco melhores. A chave neste caso é informar ao código que desejamos um top 5 ordenado pelo campo de **avaliação**. Portanto, a consulta deve ser algo como `top5ByOrderByAvaliacao`.

**Iasmin:** Podemos fazer um paralelo com _streams_ que usamos para passar um _comparator_ e, em seguida, exatamente o parâmetro que usaremos para a comparação. Neste caso, estamos fazendo o mesmo, mas no banco de dados.

**Jacqueline:** Queremos que o algoritmo encontre as séries pela avaliação e as ordene pela avaliação.

Portanto, não precisamos de `findTop5ByAvaliacao`, `orderByAvaliacao`, fazemos `findTop5ByOrderByAvaliacao`, pois os dois critérios são baseados no campo de **avaliação**.

> Principal.java

```csharp
// código omitido

private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacao();
}

// código omitido
```

Teoricamente, está pronto.

Na sequência, imprimimos o resultado usando `serieTop.forEach(s -> System.out.println()` e um loop for similar ao que fizemos na busca por ator: `s.getTitulo() + " avaliação: " + s.getAvaliacao())`.

> Principal.java

```csharp
// código omitido

private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacao();
        serieTop.forEach(s ->
                        System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
}

// código omitido
```

Precisamos criar este método `findTop5ByOrderByAvaliacao` em nosso repositório. Para tal, selecionamos o ícone de lâmpada vermelha e escolhemos a opção "_Create Method 'findTop5ByOrderByAvaliacao' in 'SerieRepository'_".

Seremos redirecionados para o final do arquivo `SerieRepository`:

> SerieRepository

```csharp
// código omitido

List<Serie> findTop5ByOrderByAvaliacao();

// código omitido
```

Realizamos a avaliação e obtivemos o seguinte resultado no terminal:

> 1 - Buscar series
> 
> 2 - Buscar episódios
> 
> 3 - Listar séries buscadas
> 
> 4 - Buscar série por título
> 
> 5 - Buscar série por ator
> 
> 6 - Top 5 Séries
> 
> 0 - Sair

Digitamos o valor 6.

Temos como retorno a série _Grey's Anatomy_ com a avaliação sendo `7.6`.

**Iasmin:** Parece que o critério está um tanto confuso.

**Jacqueline:** Parece que ele está buscando em ordem crescente. Precisamos das top 5 em ordem **decrescente**.

Assim como fizemos com _streams_, onde filtramos pela avaliação e usamos um ponto reverso para informar: quero que traga ordenado, mas do **maior para o menor**.

Portanto, devemos especificar isso no repositório também. Faremos isso adicionando mais um termo após a avaliação no arquivo `SerieRepository`, que é `desc`, para ordenar de forma decrescente.

> SerieRepository

```csharp
// código omitido

List<Serie> findTop5ByOrderByAvaliacaoDesc();

// código omitido
```

Vamos também atualizar o código principal para usar a busca pelo nome correto, que é findTop5, e verificar se ele realmente trará as melhores séries.

Iremos descobrir quais são as melhores séries no banco de dados. Assim, poderemos determinar se registramos uma série de qualidade ou apenas séries com avaliações baixas.

> Principal.java

```csharp
// código omitido

private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacaoDesc();
        serieTop.forEach(s ->
                        System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
}

// código omitido
```

Executamos novamente e no terminal selecionamos a opção 6.

Obtemos como retorno o _Game of Thrones_ com 9.2, _Last of Us_, _The Boys_, _Mandalorian_, e _Gilmore Girls_.

Conseguimos trazer de forma **decrescente**. Para as _derived queries_ temos inúmeros recursos que podem ser utilizados:

- `findBy`;
- `containing`;
- `ignoreCase`;
- `and` para compor como será a consulta;
- `greaterThanEqual`.

**Iasmin:** Também existe o `get Reference`. Quando queremos apenas referenciar em vez de usar o `find`. Portanto, existem muitas opções.

**Jacqueline:** Foi o que fizemos no arquivo `SerieRepository`: `findTop5ByOrderByAvaliacaoDesc`.

Isso nos permite compor a busca e essa inferência gera as consultas para nós. Isso economiza muito o nosso tempo, não é necessário pensar em modificar a consulta. Para mudar, alteramos apenas um termo. Isso facilita muito o nosso trabalho como pessoa desenvolvedora.

## Conclusão

**Jacqueline:** Em breve, apresentaremos outro recurso: como realizar uma busca um pouco diferente, usando um `enum`, por exemplo, para a **categoria**. Como posso fazer isso utilizando um `enum` de categorias?

Vamos explorar isso em breve, certo, Iasmin?

**Iasmin:** Sim, continuaremos a expandir esta aplicação cada vez mais.

Até mais!

# Para saber mais: ordenações e outras palavras chaves das consultas derivadas

 [Próxima Atividade](https://cursos.alura.com.br/course/java-persistencia-dados-consultas-spring-data-jpa/task/142240/next)

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142240/question)

Para trabalhar com a ordenação de registros pesquisados, também existem algumas palavras-chave. Podemos utilizar o `OrderBy` para ordenar os registros por algum atributo deles, como a série pela avaliação. Também podemos encadear atributos. Se uma Série tem um Ator e queremos ordenar pelo nome do ator, podemos utilizar `OrderByAtorNome`, por exemplo.

Além do OrderBy, ainda existem alguns outros recursos de filtros que podem ser utilizados:

- **Distinct**, para remover dados duplicados
- **First**, para pegar o primeiro registro
- **Top**, para limitar o número de dados

Ainda existe uma infinidade de palavras-chave e recursos que podemos utilizar com as derived queries. Sugerimos que você leia a documentação e exercite a prática.

A documentação da Spring Data JPA está no [link](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/).

Boa leitura!

## Transcrição

**Jacqueline**: Daremos continuidade aos nossos estudos sobre consultas derivadas ou _derived queries_. Suponha que queiramos **buscar as séries por categoria ou gênero**, afinal foi por isso que as categorizamos.

## Buscar séries por categoria

**Jacqueline**: Dentro do nosso pacote "model", temos um `enum Categoria`. Nele, colocamos gêneros como ação, romance e comédia para poder buscar as séries pela categoria.

Enquanto na classe `Serie` temos um atributo chamado `genero`. Assim, para que a JPA resolva isso de forma automática e dinâmica com consultas derivadas, o que precisamos fazer?

Em `SerieRepository`, vamos criar um `List<Serie>` dizendo para `findByGenero()`, ou seja, encontrar pelo atributo `genero`. Então, teremos que passar qual é a `Categoria categoria`. Por quê? É um `enum` do tipo `Categoria`.

> `SerieRepository.java`:

```java
public interface SerieRepository extends JpaRepository<Serie, Long> {
// código omitido…

    List<Serie> findByGenero(Categoria categoria);
}
```

Teoricamente, o JPA deveria resolver o problema do `findByGenero()`. Mas será que é tão simples assim? Como passamos um `enum` para lá?

A pessoa usuária será capaz de digitar qual gênero que deseja. Então, devemos entender o que essa pessoa quer, encontrar o `enum` que representa essa escolha e, aí, sim, mandá-lo para o repositório.

**Iasmin**: Novamente, vamos falar sobre algo dinâmico. Afinal, não queremos selecionar o `findByCategoria.acao`. Desejamos ler o que a pessoa usuária está digitando e atribuir de uma forma dinâmica.

**Jacqueline**: Exatamente. Por isso, o sétimo item do menu será `Buscar séries por categoria`.

> `Principal.java`:

```java
    public void exibeMenu() {
        var opcao = -1;
        while(opcao != 0) {
            var menu = """
                    1 - Buscar séries
                    2 - Buscar episódios
                    3 - Listar séries buscadas
                    4 - Buscar série por título
                    5 - Buscar séries por ator
                    6 - Top 5 Séries
                    7 - Buscar séries por categoria
                    8 - Filtrar séries 
                                    
                    0 - Sair
                    """;

// código omitido…
    }
```

No bloco `switch-case`, teremos um `case 7` que irá chamar o método `buscarSeriesPorCategoria()` seguido de um `break`.

```java
// código omitido…

case 7:
    buscarSeriesPorCategoria();
    break;

// código omitido…
```

Agora, vamos criar esse método no final do arquivo `Principal.java`. Novamente, faremos um `private void` para `buscarSeriesPorCategoria()`.

Sabemos que ele vai nos devolver uma lista de série, populada ou vazia. Por isso, definimos que a `List<Serie>` chamada `seriesPorCategoria` vai ser trazida através de `repositorio.findByGenero()`, onde devemos passar uma `categoria`.

Antes disso, devemos perguntar a pessoa usuária qual a série deseja buscar, usando um `System.out.println()`. Devemos ler essa resposta utilizando um `var nomeGenero` igual à `leitura.nextLine()`.

```java
    private void buscarSeriesPorCategoria() {
            System.out.println("Deseja buscar séries de que categoria/gênero? ");
            var nomeGenero = leitura.nextLine();

            List<Serie> seriesPorCategoria = repositorio.findByGenero(categoria);
    }
```

Porém, isso vai nos passar uma _string_. Quando a pessoa usuária digita algo como "comédia", "ficção" ou "drama", precisamos saber qual item do `enum` essa escolha representa.

No `enum Categoria`, criamos os atributos para ler o que vem do OMDb. Podemos fazer o mesmo para ler o que imaginamos que virá da pessoa usuária.

Imaginamos que a pessoa usuária vai escrever uma categoria em português. Por isso, podemos criar mais um parâmetro para o `enum` para a categoria em português.

Assim, poderemos transformar o que a pessoa digitou em um item do `enum`. Por exemplo, quando alguém digitar "ação", saberemos que devemos passar o _enum_ `ACAO` para o repositório fazer a consulta.

Em `enum Categoria`, vamos criar um novo atributo `private String` chamado `categoriaPortugues`. Em seguida, vamos passá-las para cada um, inclusive com acentos.

O `Action` é a `categoriaOmdb` e a `Ação` será a `categoriaPortugues`. Já `Romance` será traduzido para `Romance`, `Comedy` será `Comédia` com acento, `Drama` vai permanecer `Drama` e `Crime` também como `Crime`.

No construtor, também precisamos passar a `categoriaPortugues` como `String`. Dentro, vamos escrever que `this.categoriaPortugues` recebe o valor de `categoriaPortugues`, exatamente como o que foi feito para `categoriaOmdb`.

> `Categoria.java`:

```java
public enum Categoria {
    ACAO("Action", "Ação"),
    ROMANCE("Romance", "Romance"),
    COMEDIA("Comedy", "Comédia"),
    DRAMA("Drama", "Drama"),
    CRIME("Crime", "Crime");

    private String categoriaOmdb;
    private String categoriaPortugues;

    Categoria(String categoriaOmdb, String categoriaPortugues){
        this.categoriaOmdb = categoriaOmdb;
        this.categoriaPortugues = categoriaPortugues;
    }

// código omitido…
}
```

Nosso método será muito parecido com o `fromString()`. Vamos receber um texto e precisamos fazer o quê? Identificar se corresponde a uma daquelas categorias em português, baseado no texto desconsiderando maiúsculas e minúsculas.

Portanto, podemos criar o mesmo método estático, copiando e colando no final do arquivo. Porém, em vez de `fromString()`, vamos chamar o novo método de `fromPortugues`.

Em vez de `categoriaOmdb`, vamos trabalhar com `categoriaPortugues`.

```java
    public static Categoria fromPortugues(String text) {
            for (Categoria categoria : Categoria.values()) {
                    if (categoria.categoriaPortugues.equalsIgnoreCase(text)) {
                            return categoria;
                    }
            }
            throw new IllegalArgumentException("Nenhuma categoria encontrada para a string fornecida: " + text);
    }
```

Desse modo, se digitamos "comédia", o programa deve entender que é para coletar todas as séries salvas no banco que contém a categoria "comédia".

Inclusive, vamos entrar banco de dados para verificar isso. No _query tools_, vamos selecionar todas as séries e verificar se temos a categoria `COMEDIA`.

```csharp
select * from series
```

Em _data ouput_, temos dois registros com `COMEDIA` e quatro com `ACAO`. Portanto, se digitamos "comédia" ou "ação" em português do Brasil, o programa deve nos retornar corretamente todas as séries baseado no gênero que foi salvo.

Com isso, já temos o método `fromString()` e `fromPortugues()`. Se ocorrer algum erro, ele exibirá uma mensagem igual nos dois métodos. Literalmente copiamos e colamos o mesmo método, alterando apenas o atributo com a qual estamos trabalhando.

Agora, na classe `Principal`, vamos dar continuidade no método `buscarSeriesPorCategoria()`. Devemos criar um _enum_ do tipo `Categoria` que vai ser `categoria`, o qual irá chamar o método `Categoria.fromPortugues()` com o `nomeGenero`.

Ou seja, vamos pegar a palavra que a pessoa digitou e tentar transformar em uma categoria. Se tudo der certo e nenhuma exceção for lançada, uma busca pela categoria será feita com o método `findByGenero()`.

Em seguida, vamos imprimir a lista. Para isso, vamos usar `System.out.println()`. Entre aspas, vamos escrever o texto `Séries da categoria` e concatenar com `nomeGenero` que será a categoria escolhida.

Na próxima linha, vamos fazer um `seriesPorCategoria.forEach()` para imprimir usando o `System.out::println`.

> `Principal.java`:

```java
    private void buscarSeriesPorCategoria() {
            System.out.println("Deseja buscar séries de que categoria/gênero? ");
            var nomeGenero = leitura.nextLine();
            Categoria categoria = Categoria.fromPortugues(nomeGenero);
            List<Serie> seriesPorCategoria = repositorio.findByGenero(categoria);
            System.out.println("Séries da categoria " + nomeGenero);
            seriesPorCategoria.forEach(System.out::println);
    }
```

Vamos testar nosso programa e conferir se ao escolher "comédia", ele mostrará apenas duas séries.

**Iasmin**: Vamos ver se a correspondência está funcionando.

**Jacqueline**: Para buscar séries por categoria, escolhemos a opção `7`.

> Deseja buscar séries de que categoria/gênero? **Comédia**.

Ao digitar "comédia", ele trouxe duas séries: "Gilmore Girls" e "Never Have I Ever".

> Séries da categoria comédia
> 
> genero=COMEDIA, titulo='Gilmore Girls', totalTemporadas=7, avaliacao=8.2, atores='Lauren Gragam, Alexis Bledel' […] genero=COMEDIA, titulo='Never Have I Ever', totalTemporadas=4, avaliacao=7.9, atores='Maitreyi Ramakrishnan' […]

Se procuramos por "ação", ele trará quatro séries:"Game of Thrones", "The Boys" e outros.

O que acontece se buscamos por um gênero que não existe? Por exemplo, "ficção". Como esperado, ele retornou um erro. Isso era completamente previsto, já não temos nenhuma categoria de ficção.

> Deseja buscar séries de que categoria/gênero? **Ficção**.

> Error starting ApplicationContext.[…]
> 
> Caused by: java.lang.IllegalArgumentException: Nenhuma categoria encontrada para a string fornecida: Ficção

Claro, poderíamos ter tratado de maneira diferente. Mas essa foi a estratégia que escolhemos para demonstrar neste momento. A ideia central é que o repositório já resolve essa questão para nós.

Quando fazemos um `findByGenero()`, não importa se estamos passando um _enum_ ou um parâmetro do tipo _string_, _double_, ele será tratado da mesma maneira.

Se estivermos passando um _enum_ válido, ele vai conseguir buscar todas as nossas séries a partir daquele item de _enum_ que foi determinado.

**Iasmin**: Incrível, não é? Estou adorando essas _derived queries_.

## Desafio

**Jacqueline**: Vamos abordar algo interessante também, que é o JPQL (_Java Persistence Query Language_). Nós vamos entender o que é esse tal de JPQL que mencionamos o todo o tempo. Para isso, inclusive, podemos deixar um desafio para quem está assistindo e fazendo o curso conosco.

Vamos fazer algo bem parecido com o que fizemos para os atores. Para os atores, escolhemos o nome de um ator e o valor da avaliação que queríamos obter. Queríamos avaliação acima de um determinado valor.

> O **desafio** será fazer uma _derived query_ onde podemos fazer uma busca pelas séries que tenham até um número máximo de temporadas e com uma avaliação maior ou igual a um determinado valor.

Por exemplo, queremos séries com até três temporadas, porque só temos um fim de semana para maratonar, e que sejam com avaliação acima de 8 ou 8.5.

Você pode perguntar: "Você quer ver séries com até quantas temporadas?" Se a pessoa usuária digitar 3, você vai ter que buscar séries com até 3 temporadas e que tenham uma avaliação fixa de maior ou igual a 8.5 ou para um valor digitado.

Depois desse desafio, vamos estudar muito mais conteúdos! Vamos mergulhar ainda mais nessa parte de JPA, Banco de Dados e JPQL. Te esperamos na próxima aula!


Agora é com você! Te desafiamos a criar uma busca personalizada. Nela, deveremos buscar no banco todas as séries que contenham um número máximo de temporadas e uma avaliação mínima. Desenvolva uma derived query que atenda a esses recursos.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142242/opinion)

Na interface `SerieRepository`, crie um novo método, chamado `findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual()` com os parâmetros `totalTemporadas` e `avaliacao`.

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SerieRepository extends JpaRepository<Serie, Long> {
    Optional<Serie> findByTituloContainingIgnoreCase(String nomeSerie);

    List<Serie> findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(String nomeAtor, double avaliacao);

    List<Serie> findTop5ByOrderByAvaliacaoDesc();

    List<Serie> findByGenero(Categoria categoria);

    List<Serie> findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual(int totalTemporadas, double avaliacao);
}
```

Agora, poderemos criar a opção de filtrar séries por temporadas e avaliação no nosso menu. Assim, você pode alterar sua classe Principal para ter essa opção no menu, e mais um método para lidar com as entradas de séries, notas e avaliações do usuário.

`Principal.java`

```java
package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.*;
import br.com.alura.screenmatch.repository.SerieRepository;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {

    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();
    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apikey=6585022c";
    private List<DadosSerie> dadosSeries = new ArrayList<>();

    private SerieRepository repositorio;
    private List<Serie> series = new ArrayList<>();

    public Principal(SerieRepository repositorio) {
        this.repositorio = repositorio;
    }

    public void exibeMenu() {
        var opcao = -1;
        while(opcao != 0) {
            var menu = """
                    1 - Buscar séries
                    2 - Buscar episódios
                    3 - Listar séries buscadas
                    4 - Buscar série por título
                    5 - Buscar séries por ator
                    6 - Top 5 Séries
                    7 - Buscar séries por categoria
                    8 - Filtrar séries 
                                    
                    0 - Sair                                 
                    """;

            System.out.println(menu);
            opcao = leitura.nextInt();
            leitura.nextLine();

            switch (opcao) {
                case 1:
                    buscarSerieWeb();
                    break;
                case 2:
                    buscarEpisodioPorSerie();
                    break;
                case 3:
                    listarSeriesBuscadas();
                    break;
                case 4:
                    buscarSeriePorTitulo();
                    break;
                case 5:
                    buscarSeriesPorAtor();
                    break;
                case 6:
                    buscarTop5Series();
                    break;
                case 7:
                    buscarSeriesPorCategoria();
                    break;
                case 8:
                    filtrarSeriesPorTemporadaEAvaliacao();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        }
    }

    private void buscarSerieWeb() {
        DadosSerie dados = getDadosSerie();
        Serie serie = new Serie(dados);
        //dadosSeries.add(dados);
        repositorio.save(serie);
        System.out.println(dados);
    }

    private DadosSerie getDadosSerie() {
        System.out.println("Digite o nome da série para busca");
        var nomeSerie = leitura.nextLine();
        var json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        return dados;
    }

    private void buscarEpisodioPorSerie(){
        listarSeriesBuscadas();
        System.out.println("Escolha uma série pelo nome");
        var nomeSerie = leitura.nextLine();

        Optional<Serie> serie = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if(serie.isPresent()) {

            var serieEncontrada = serie.get();
            List<DadosTemporada> temporadas = new ArrayList<>();

            for (int i = 1; i <= serieEncontrada.getTotalTemporadas(); i++) {
                var json = consumo.obterDados(ENDERECO + serieEncontrada.getTitulo().replace(" ", "+") + "&season=" + i + API_KEY);
                DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
                temporadas.add(dadosTemporada);
            }
            temporadas.forEach(System.out::println);

            List<Episodio> episodios = temporadas.stream()
                    .flatMap(d -> d.episodios().stream()
                            .map(e -> new Episodio(d.numero(), e)))
                    .collect(Collectors.toList());

            serieEncontrada.setEpisodios(episodios);
            repositorio.save(serieEncontrada);
        } else {
            System.out.println("Série não encontrada!");
        }
    }

    private void listarSeriesBuscadas(){
        series = repositorio.findAll();
        series.stream()
                .sorted(Comparator.comparing(Serie::getGenero))
                .forEach(System.out::println);
    }

    private void buscarSeriePorTitulo() {
        System.out.println("Escolha um série pelo nome: ");
        var nomeSerie = leitura.nextLine();
        Optional<Serie> serieBuscada = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if (serieBuscada.isPresent()) {
            System.out.println("Dados da série: " + serieBuscada.get());

        } else {
            System.out.println("Série não encontrada!");
        }

    }

    private void buscarSeriesPorAtor() {
        System.out.println("Qual o nome para busca?");
        var nomeAtor = leitura.nextLine();
        System.out.println("Avaliações a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(nomeAtor, avaliacao);
        System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
        seriesEncontradas.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacaoDesc();
        serieTop.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarSeriesPorCategoria() {
        System.out.println("Deseja buscar séries de que categoria/gênero? ");
        var nomeGenero = leitura.nextLine();
        Categoria categoria = Categoria.fromPortugues(nomeGenero);
        List<Serie> seriesPorCategoria = repositorio.findByGenero(categoria);
        System.out.println("Séries da categoria " + nomeGenero);
        seriesPorCategoria.forEach(System.out::println);
    }

    private void filtrarSeriesPorTemporadaEAvaliacao(){
        System.out.println("Filtrar séries até quantas temporadas? ");
        var totalTemporadas = leitura.nextInt();
        leitura.nextLine();
        System.out.println("Com avaliação a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        leitura.nextLine();
        List<Serie> filtroSeries = repositorio.findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual(totalTemporadas, avaliacao);
        System.out.println("*** Séries filtradas ***");
        filtroSeries.forEach(s ->
                System.out.println(s.getTitulo() + "  - avaliação: " + s.getAvaliacao()));
    }
}
```

Feito isso, poderemos dar segmentos utilizando essa busca de uma forma um pouquinho diferente. Te aguardamos na próxima aula!

# Faça como eu fiz: fazendo buscas com consultas derivadas

 [Próxima Atividade](https://cursos.alura.com.br/course/java-persistencia-dados-consultas-spring-data-jpa/task/142243/next)

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142243/question)

Utilize as diversas palavras-chave da JPA para criar métodos personalizados de busca na interface `SerieRepository`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142243/opinion)

Você pode fazer várias buscas:

- O usuário digitará o nome de uma série, e você buscará essa série no banco de dados a partir desse nome.
    
- Dado um ator e uma avaliação, você deverá pesquisar no banco por séries que contenham aquele ator e que tenham uma avaliação maior ou igual à fornecida.
    
- Outro dado interessante a se fornecer são as top 5 séries (as mais bem avaliadas) que estão no seu banco.
    
- Dado um gênero, você pode categorizar as séries por aquele gênero. Lembre-se de que queremos que o usuário digite “Ação”, e não “ACAO”. Assim, precisaremos tratar esses dados de forma especial!
    
- Por fim, queremos todas as séries com um número máximo de temporadas (para maratonar, hehehe) e uma avaliação mínima.
    

Feitas todas essas buscas, teremos os seguintes métodos na interface SerieRepository.

`SerieRepository.java`

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SerieRepository extends JpaRepository<Serie, Long> {
    Optional<Serie> findByTituloContainingIgnoreCase(String nomeSerie);

    List<Serie> findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(String nomeAtor, double avaliacao);

    List<Serie> findTop5ByOrderByAvaliacaoDesc();

    List<Serie> findByGenero(Categoria categoria);

    List<Serie> findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual(int totalTemporadas, double avaliacao);
}
```

Também precisaremos modificar nossa classe `Principal`, adicionando métodos relacionados a essas buscas.

`Principal.java`

```java
package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.*;
import br.com.alura.screenmatch.repository.SerieRepository;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {

    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();
    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apikey=6585022c";
    private List<DadosSerie> dadosSeries = new ArrayList<>();

    private SerieRepository repositorio;
    private List<Serie> series = new ArrayList<>();

    public Principal(SerieRepository repositorio) {
        this.repositorio = repositorio;
    }

    public void exibeMenu() {
        var opcao = -1;
        while(opcao != 0) {
            var menu = """
                    1 - Buscar séries
                    2 - Buscar episódios
                    3 - Listar séries buscadas
                    4 - Buscar série por título
                    5 - Buscar séries por ator
                    6 - Top 5 Séries
                    7 - Buscar séries por categoria
                    8 - Filtrar séries 
                                    
                    0 - Sair                                 
                    """;

            System.out.println(menu);
            opcao = leitura.nextInt();
            leitura.nextLine();

            switch (opcao) {
                case 1:
                    buscarSerieWeb();
                    break;
                case 2:
                    buscarEpisodioPorSerie();
                    break;
                case 3:
                    listarSeriesBuscadas();
                    break;
                case 4:
                    buscarSeriePorTitulo();
                    break;
                case 5:
                    buscarSeriesPorAtor();
                    break;
                case 6:
                    buscarTop5Series();
                    break;
                case 7:
                    buscarSeriesPorCategoria();
                    break;
                case 8:
                    filtrarSeriesPorTemporadaEAvaliacao();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        }
    }

    private void buscarSerieWeb() {
        DadosSerie dados = getDadosSerie();
        Serie serie = new Serie(dados);
        //dadosSeries.add(dados);
        repositorio.save(serie);
        System.out.println(dados);
    }

    private DadosSerie getDadosSerie() {
        System.out.println("Digite o nome da série para busca");
        var nomeSerie = leitura.nextLine();
        var json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        return dados;
    }

    private void buscarEpisodioPorSerie(){
        listarSeriesBuscadas();
        System.out.println("Escolha uma série pelo nome");
        var nomeSerie = leitura.nextLine();

        Optional<Serie> serie = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if(serie.isPresent()) {

            var serieEncontrada = serie.get();
            List<DadosTemporada> temporadas = new ArrayList<>();

            for (int i = 1; i <= serieEncontrada.getTotalTemporadas(); i++) {
                var json = consumo.obterDados(ENDERECO + serieEncontrada.getTitulo().replace(" ", "+") + "&season=" + i + API_KEY);
                DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
                temporadas.add(dadosTemporada);
            }
            temporadas.forEach(System.out::println);

            List<Episodio> episodios = temporadas.stream()
                    .flatMap(d -> d.episodios().stream()
                            .map(e -> new Episodio(d.numero(), e)))
                    .collect(Collectors.toList());

            serieEncontrada.setEpisodios(episodios);
            repositorio.save(serieEncontrada);
        } else {
            System.out.println("Série não encontrada!");
        }
    }

    private void listarSeriesBuscadas(){
        series = repositorio.findAll();
        series.stream()
                .sorted(Comparator.comparing(Serie::getGenero))
                .forEach(System.out::println);
    }

    private void buscarSeriePorTitulo() {
        System.out.println("Escolha um série pelo nome: ");
        var nomeSerie = leitura.nextLine();
        Optional<Serie> serieBuscada = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if (serieBuscada.isPresent()) {
            System.out.println("Dados da série: " + serieBuscada.get());

        } else {
            System.out.println("Série não encontrada!");
        }

    }

    private void buscarSeriesPorAtor() {
        System.out.println("Qual o nome para busca?");
        var nomeAtor = leitura.nextLine();
        System.out.println("Avaliações a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(nomeAtor, avaliacao);
        System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
        seriesEncontradas.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacaoDesc();
        serieTop.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarSeriesPorCategoria() {
        System.out.println("Deseja buscar séries de que categoria/gênero? ");
        var nomeGenero = leitura.nextLine();
        Categoria categoria = Categoria.fromPortugues(nomeGenero);
        List<Serie> seriesPorCategoria = repositorio.findByGenero(categoria);
        System.out.println("Séries da categoria " + nomeGenero);
        seriesPorCategoria.forEach(System.out::println);
    }

    private void filtrarSeriesPorTemporadaEAvaliacao(){
        System.out.println("Filtrar séries até quantas temporadas? ");
        var totalTemporadas = leitura.nextInt();
        leitura.nextLine();
        System.out.println("Com avaliação a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        leitura.nextLine();
        List<Serie> filtroSeries = repositorio.findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual(totalTemporadas, avaliacao);
        System.out.println("*** Séries filtradas ***");
        filtroSeries.forEach(s ->
                System.out.println(s.getTitulo() + "  - avaliação: " + s.getAvaliacao()));
    }
}
```

Lembre-se também de adicionar um método ao enum Categoria, adicionando um atributo relacionado à entrada do usuário e um método para trabalhar com ele.

`Categoria.java`

```typescript
package br.com.alura.screenmatch.model;

public enum Categoria {
    ACAO("Action", "Ação"),
    ROMANCE("Romance", "Romance"),
    COMEDIA("Comedy", "Comédia"),
    DRAMA("Drama", "Drama"),
    CRIME("Crime", "Crime");

    private String categoriaOmdb;
    private String categoriaPortugues;

    Categoria(String categoriaOmdb, String categoriaPortugues){
        this.categoriaOmdb = categoriaOmdb;
        this.categoriaPortugues = categoriaPortugues;
    }

    public static Categoria fromString(String text) {
        for (Categoria categoria : Categoria.values()) {
            if (categoria.categoriaOmdb.equalsIgnoreCase(text)) {
                return categoria;
            }
        }
        throw new IllegalArgumentException("Nenhuma categoria encontrada para a string fornecida: " + text);
    }

    public static Categoria fromPortugues(String text) {
        for (Categoria categoria : Categoria.values()) {
            if (categoria.categoriaPortugues.equalsIgnoreCase(text)) {
                return categoria;
            }
        }
        throw new IllegalArgumentException("Nenhuma categoria encontrada para a string fornecida: " + text);
    }
}
```

Exercite sua criatividade e crie outras buscas que achar interessante. Não se esqueça que praticar nos faz fixar melhor os conteúdos!

## Transcrição

**Iasmin:** No arquivo `SerieRepository.java`, temos o método desenvolvido no desafio.

Um deles é um grande método chamado `findByTotalTemporadasLessThanEqualAndAvaliaçãoGreaterThanEqual()`, que nos permite fazer comparações utilizando um menor ou igual e um "maior ou igual.

Muito bacana que a JPA fez tudo isso funcionar. Agora, testaremos para checar se o desafio foi concluído corretamente.

Para isso, no topo superior direito da tela, clicamos em "Run" para executar o código.

Em seguida, passamos o número `8` que se refere a opção "filtrar séries" e apertamos "Enter". Assim, a ferramenta pergunta até quantas temporadas deverá ser filtrada. Digitamos `5` seguido de "Enter". Em seguida, definimos a avaliação com a nota a partir de `7,5`.

Feito isso, temos o seguinte retorno:

> The Mandalorian - avaliação 8.7

Voltaremos ao banco de dados, para verificar quais séries cadastramos. Então, no pgAdmin 4, acessamos "Tabelas". Na tabela `series`, clicamos com o botão direito e depois em "Query Tool".

Passamos `selec *from series` e rodamos. Feito isso, temos a seguinte tabela:

|iD [PK] bigint|atores character varying (255)|avaliacao double precision|Poster character varying|titulo character varying|total_temporadas|
|---|---|---|---|---|---|
|1|Jennifer Aniston, Courteney Cox, Lisa...|8.9|//Dado omitido|Friends|10|
|2|Steve Carell, Jenna Fischer, John Krasinski...|9|//Dado omitido|The Office|9|
|3|Pedro Pascal, Chris Bartlett, Katee Sackh...|8.7|//Dado omitido|The Mandalorian|3|
|4|Lauren Graham, Alexis Bledel, Keiko Agena...|8.2|//Dado omitido|Gilmore Girls|7|
|5|5 Emilia Clarke, Peter Dinklage, Kit Harington...|9.2|//Dado omitido|Game of Thrones|8|

Repare que temos cinco séries e todas são avaliadas com mais que 7.5. Mas, apenas The Mandalorian possui três temporadas, o restante são séries longas que não seriam possíveis de se assistir em um final de semana. Então, o nosso filtro está funcionando!

Mas, estou incomodada com o tamanho do método. Está tão extenso que não cabe nem na tela. Podemos fazer algumas alterações para torná-lo mais legível e mais fácil de digitar.

**Jacqueline:** Exatamente! Isso também é muito válido, por exemplo, para pessoas desenvolvedoras que talvez não tenham um vasto conhecimento do inglês.

Seria mais difícil entender o que esse repositório está fazendo e onde usá-lo, pois contém muitos termos em inglês. Sendo assim, pode ser melhor personalizar o nome do método para ficar mais legível para todo o time ao invés de deixar com que gere o nome.

Precisamos avaliar os prós e contras ao optar por essa opção na qual o nome é criado automaticamente.

**Iasmin:** Se fôssemos até o banco de dados, teríamos que escrever um SQL para obter nossas séries. Portanto, na nossa consulta SQL, queremos um número máximo de temporadas e um mínimo na avaliação.

Criaremos nossa consulta. Começamos passando o `select * from series` que terá como condição `WHERE series.total_temporadas`.

> Lembrando que no banco de dados os atributos são salvos com `_` ao invés do CamelCase.

Em seguida, passamos `<= 5`, ou seja, menor ou igual a 5. Por fim, precisamos filtrar pela variação, portanto, passamos `AND series.avaliacao >= 7.5`.

```sql
select * from series WHERE series.total_temporadas <= 5 AND series.avaliacao >= 7.5
```

Com isso, esperamos ter um resultado igual ao da aplicação.

Para executar, no topo central da tela, clicamos no botão "Execute/Refresh" identificado por um triângulo deitado.

Assim, temos o seguinte retorno:

|iD [PK] bigint|atores character varying (255)|avaliacao double precision|Poster character varying|titulo character varying|total_temporadas|
|---|---|---|---|---|---|
|3|Pedro Pascal, Chris Bartlett, Katee Sackh...|8.7|//Dado omitido|The Mandalorian|3|

Deu certo, apareceu a mesma série. Essa é a consulta que está sendo executada por baixo dos panos. Porém, replicaremos essa consulta na nossa aplicação.

Para isso, copiamos o código. Depois, abrimos o arquivo `SerieRepository.java`.

Na linha abaixo de `findBy`, criaremos outro método. Escrevemos `List<Serie>` e definiremos um nome menor para o método. Essa é uma vantagem ao utilizar o **JPQL**. Então, definimos como `seriesPorTemporadaEAvaliacao()`.

Após declarar o método, podemos utilizar a consulta que utilizamos no banco de dados. Então, na linha acima, passamos `@Query()`. Nos parênteses e entre aspas duplas, colamos o código.

```java
//Código omitido

@Query("select s from Serie s WHERE s.totalTemporadas <= :totalTemporadas AND s.avaliacao >= :avaliacao")
List<Serie> seriesPorTemporadaEAValiacao(int totalTemporadas, double avaliacao);

//Código omitido
```

Vamos tentar executar isso para verificar o que vai acontecer, Jacque?

**Jacqueline:** Sim! Vamos checar o que teremos como mensagem.

**Iasmin:** Em `Principal.java`, na linha 191, apagamos o método grande. Chamamos o `repositório.seriesPorTemporadaEAvaliacao()`.

```swift
//Código omitido

List<Serie> filtroSeries = repositorio.seriesPorTemporadaEAValiacao();

//Código omitido
```

Feito isso, no topo direito ta tela clicamos no botão "Stop", indicado pelo ícone de um quadrado vermelho, para parar a execução. Depois, clicamos no botão "Run".

Observe que como retorno temos muitas exceções. Temos algo relacionado à dependência e também outro problema relacionado com a criação do `beans`. Mas o mais interessante para nós é o erro na criação da consulta.

O retorno indica que quando tenta realizar a `seriesPorTemporadaEAvaliacao`, não é possível, porque estamos passando uma consulta SQL e nada informamos para nossa aplicação.

Para solucionar esse problema, poderíamos utilizar essa consulta exatamente da maneira que ela foi feita no banco de dados. Então, no arquivo `SerieRepository.java`, na linha 22, podemos passar dentro de `@Query`, a propriedade `value`e no fim acrescentar `nativeQuery = true`.

> Note que ao fazer isso, o valor padrão é falso, então, precisamos alterar isso.

```java
//Código omitido

@Query(value = "select * from series WHERE series.total_temporadas <= 5 AND series.avaliacao >= 7.5, nativeQuery = true)

//Código omitido
```

Fazendo essas implementações, conseguiremos executar nosso programa com SQL. Então fazemos isso.

Selecionamos a opção 8 que se refere a opção "Filtrar séries" . Após, precisamos digitar quantas temporadas serão filtradas. Colocamos `9`, definimos o mesmo valor para a avaliação.

Como resultado, temos os dados da consulta SQL feita exatamente como no banco de dados.

Poderíamos trabalhar dessa forma, mas estamos ficando muito preso ao banco de dados. Então, se em algum momento decidirmos trocar os atributos e definir que `total_Temporadas` terá outro nome, por exemplo, precisaríamos voltar na aplicação e fazer as alterações.

**Jacqueline:** Exatamente! Poderíamos colocar os atributos, temporadas, assim como fizemos no método do desafio. Porém, ainda ficamos presos ao nome da tabela e colunas do banco.

Apesar de existirem vários bancos do tipo SQL, eles possuem pequenas variações na forma como fazemos as consultas. Então, se fizermos uma consulta no Postgres, por exemplo, não funcionará no SQL Server, pois possuem diferenças de sintaxe.

Isso dificulta nossa perspectiva de desacoplamento e portabilidade. Como fazemos para a aplicação funcionando apenas com o banco de dados Postgres? Se quisermos mudar para outro banco, precisamos ter a flexibilidade de fazer isso apenas no `Application Properties`.

Por isso não recomendamos tanto trabalhar com o `Native Query`. O JPA tem a JPQL, que utilizaremos aqui justamente para eliminar esse problema.

# Trabalhando com JQPL

**Iasmin:** Já discutimos bastante sobre essa funcionalidade, mas o que é JPQL? Como usá-la?

Para isso, no arquivo `SerieRepository.java`, apagamos as últimas implementações que fizemos, ou seja, o `value` e `nativeQuery = true`.

Agora, faremos as alterações necessárias para trabalhar com atributos ao invés de colunas da tabela. Essa é basicamente a função da JPQL.

**Jacqueline:** JPQL se refere a _Java Persistence Query Language_, ou seja, **Linguagem de Consulta de Persistência Java**. Portanto, é uma linguagem de consulta própria do JPA, do controle de persistência do Java.

Escreveremos as consultas de maneira diferente, mas notaremos que fará total sentido, afinal, estaremos trabalhando com classes e atributos.

**Iasmin:** Na linha 22, dentro de `@Query`, ao invés de usarmos o `*` passamos `s`, ou seja, precisa ser algo que descreva o que desejamos recuperar.

Feito isso, trabalharemos com a entidade. Portanto, apagamos a tabela `series` e passamos a classe da aplicação que representa a entidade `Serie s`.

Após o `WHERE`, apagamos `series` e passamos `s`. Também substituímos o underscore por `s.totalTemporadas`. Faremos o mesmo em `avaliacao`, apagamos o `serie` e passamos `s`.

Repare que estamos trabalhando com os números `5` e `7.5` fixos, mas queremos trabalhar com parâmetros. Para isso, podemos utilizar os que estão sendo utilizados na linha de cima. Então, copiamos `int totalTemporadas, double avaliacao` e colamos como método de `seriesPorTemporadaEAvaliacao()`.

Feito isso, apagamos o `5` e passamos `totalTemporadas`. Fazemos o mesmo com o `7.5`, passando avaliação. Para indicar que estamos trabalhando com um parâmetro, adicionamos dois pontos antes de`totalTemporadas`.

Assim, dizemos que na consulta, os parâmetros estão vindo do método e serão atribuídos no momento da consulta de forma dinâmica. Faremos isso na avaliação também, passando os dois pontos. Pronto! Temos a nossa _query_ JPQL.

```java
//Código omitido

@Query("select s from Serie s WHERE s.totalTemporadas <= :totalTemporadas AND s.avaliacao >= :avaliacao")
List<Serie> seriesPorTemporadaEAValiacao(int totalTemporadas, double avaliacao);

//Código omitido
```

Analisando o código, pode parecer um pouco confuso, afinal, por que temos uma série `s` ao invés de muitas séries? Porém, isso ocorre, pois vai pegando uma série por vez. Isso é semelhante com a forma feita no banco, porém nesse caso estamos descrevendo com a JPQL.

Novamente, vamos na classe principal `PRincipal.java`. Na linha 191, em `seriesPorTemporadaEAvaliacao()`, passamos os parâmetros `totalTemporadas` seguido de `avaliacao`.

```csharp
//Código omitido

private void filtrarSeriesPorTemporadaEAvaliacao(){
        System.out.println("Filtrar séries até quantas temporadas? ");
        var totalTemporadas = leitura.nextInt();
        leitura.nextLine();
        System.out.println("Com avaliação a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        leitura.nextLine();
        List<Serie> filtroSeries = repositorio.seriesPorTemporadaEAValiacao(totalTemporadas, avaliacao);
        System.out.println("*** Séries filtradas ***");
        filtroSeries.forEach(s ->
                        System.out.println(s.getTitulo() + "  - avaliação: " + s.getAvaliacao()));
}
```

Vamos testar. Para isso, paramos a aplicação e rodamos novamente. Selecionamos a opção filtrar séries passando `8` e definimos que o filtro seja feito em séries com `5` temporadas. Por fim, definimos a avaliação a partir de `7.5`.

Assim, temos o seguinte retorno:

> The Mandalorian - avaliação 8.7

Temos o filtro com JPQL!

**Jacqueline:** Muito bom! Descobrimos que esse é um recurso importante e poderoso. Por meio dele escrevemos nossas próprias consultas, personalizamos como desejamos e conseguimos fazer isso **independente do banco**. Trabalhamos com **entidades mapeadas**, o que é muito interessante.

Há possibilidade de ocorrer uma queda de performance em relação a uma _query_ nativa? Pode ser que ocorra, mas isso depende muito do contexto de sua aplicação.

Se, por exemplo, você tem certeza que sua aplicação rodará em um banco de dados específico, sem possibilidade de mudança, e prefira trabalhar com _query_ nativa, tudo bem. Não estamos desaconselhando, apenas mostrando as **vantagens e desvantagens** de usar um ou outro.

**Iasmin:** Concordo, tudo depende do contexto, de como você como desenvolvedora está trabalhando.

Se você realmente tem um banco de dados fixo, talvez seja melhor utilizar as _querys_ nativas. Mas se você quer trabalhar com essa variação das _querys_, é interessante utilizar o JPQL.

**Jacqueline:** Em breve vamos explorar muito mais recursos interessantes com JPQL. **Te esperamos no vídeo seguinte!**

# Para saber mais: SQL, native queries e JPQL

 [Próxima Atividade](https://cursos.alura.com.br/course/java-persistencia-dados-consultas-spring-data-jpa/task/142213/next)

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142213/question)

Quando começamos a aprender sobre o desenvolvimento web com Java, em algum momento, nos deparamos com a necessidade de interagir com bancos de dados. Dentro deste universo, podemos fazer vários tipos de busca, como as derived queries, a JPQL (Java Persistence Query Language) e o próprio SQL nativo.

Mas qual é a diferença entre elas e como isso afeta a portabilidade entre diferentes bancos de dados? Iremos analisar aqui as queries nativas e a JPQL.

A JPQL é uma linguagem de consulta orientada a objetos que foi definida como parte da especificação JPA (Java Persistence API). Ela é usada para fazer consultas em bancos de dados relacionais de maneira similar ao SQL, mas com uma diferença fundamental: em vez de trabalhar com tabelas e colunas, como no SQL, a JPQL trabalha com classes e atributos que fazem parte do seu modelo de domínio.

```java
// Exemplo de Query JPQL
String jpql = "select c from Customer c where c.name like :name";
```

## 2. Entendendo o SQL Nativo

O SQL Nativo, por outro lado, é a linguagem padrão usada para interagir com bancos de dados relacionais. Com ela, você escreve consultas que são específicas para a estrutura e sintaxe do banco de dados que está usando.

```sql
-- Exemplo de Query SQL Nativo
SELECT * FROM Customer WHERE name LIKE '%John%';
```

Para utilizá-las no repositório, devemos usar o atributo `nativeQuery` da anotação `@Query`, conforme visto em vídeo.

A principal diferença entre JPQL e SQL Nativo é, portanto, o nível de abstração. A JPQL abstrai os detalhes do banco de dados, permitindo que você trabalhe no nível do modelo de domínio. Isso pode tornar o código mais legível e fácil de manter.

O SQL Nativo, por outro lado, permite um controle mais detalhado e direto sobre as consultas ao banco de dados. Isso pode ser útil se você precisa otimizar suas consultas para um banco de dados específico.

Porém, há a questão da portabilidade. Como a JPQL é uma abstração de alto nível, ela é compatível com qualquer banco de dados que suporte a especificação JPA. Se você precisar mudar seu aplicativo de um banco de dados para outro, a maioria das suas consultas JPQL continuarão funcionando sem alterações.

Já com o SQL Nativo, se você decidir mudar de um banco de dados para outro, provavelmente terá que reescrever uma parte das suas consultas, visto que cada banco tem suas particularidades de sintaxe e funcionamento.

A escolha entre JPQL e SQL Nativo muitas vezes depende das necessidades do seu projeto. Se a portabilidade é uma prioridade e se o seu modelo de domínio é complexo e rico de informações, a JPQL pode ser a melhor escolha. Se o desempenho é uma prioridade e você precisa de controle detalhado sobre suas consultas, o SQL Nativo pode ser a melhor opção.

Entender esses conceitos possibilitará que você tome decisões mais acertadas, minimizando problemas futuros e otimizando a performance de suas aplicações. Então, continue estudando e aprofundando seus conhecimentos!
## Transcrição

**Iasmin:** Vamos prosseguir com nossas buscas utilizando o JPQL. Agora, podemos voltar a explorar os episódios para recuperarmos informações a partir da tabela de séries.

Podemos começar buscando os episódios pelo trecho. O que você acha, Jacque?

**Jacqueline:** Acho excelente! Lembra que eu sabia de alguns episódios marcantes de _Game of Thrones_? Acho bem legal.

**Iasmin:** Podemos recuperar algum que você assistiu nessa maratona do fim de semana.

# Busca de episódios por trecho

> `Principal.java`

**Iasmin:** Começaremos pelo menu, mas, antes disso, após o `case 8`, na linha 80, passamos `case 9`. Na linha abaixo passamos `buscarEpisodioPorTrecho()` e em seguida `break`.

```cpp
//Código omitido

case 9
    buscarEpisodioPorTrecho();
    break;
    
//Código omitido
```

Copiamos esse método e descemos até o fim do código. Na linha 199, escrevemos `private void` e colamos.

A pessoa usuária precisará digitar o trecho que uma série, que será buscada no repositório. Então, na mesma linha adicionamos chaves. Dentro, passamos o mesmo trecho de código das linhas 162 e 163.

Feito isso, faremos as alterações necessárias. Mudamos a mensagem para `Qual o nome do episódio para busca?` e mudamos o nome da variável para `trechoEpisodio`.

O código fica da seguinte forma:

```csharp
//Código omitido

private void buscarEpisodioPorTrecho() {
    System.out.println("Qual o nome do episódio para busca?");
    var trechoEpisodio = leitura.nextLine();
}
```

Feito isso, precisamos trabalhar com as consultas. Como queremos vários episódios que tenham determinado trecho, precisaremos de uma lista de episódios.

Então, na linha 203, passamos `List<Episodio>`. Em seguida, escrevemos `episodiosEncontrados` igual à `repositorio.episodiosPorTrecho()`. Nos parênteses, passamos `trechoEpisodio`.

```csharp
//Código omitido

private void buscarEpisodioPorTrecho(){
        System.out.println("Qual o nome do episódio para busca?");
        var trechoEpisodio = leitura.nextLine();
        List<Episodio> episodiosEncontrados = repositorio.episodiosPorTrecho(trechoEpisodio);
```

Semelhante como fizemos anteriormente, podemos criar o método a partir do trecho que estamos chamando ele. Para isso, na lateral esquerda de `List<Episodio>`, clicamos no ícone identificado por uma lâmpada vermelha e uma seta para baixo. Em seguida, clicamos em "Create method".

`SerieRepository.java`

Assim, o método é declarado na linha 26 do arquivo `SerieRepository.java`.

```scss
//Código omitido

List<Episodio> episodiosPorTrecho(String trechoEpisodio);
```

Agora, precisamos apenas precisar criar a query. Então, na linha acima, escrevemos `@Query()`. Vamos refletir sobre o que precisamos passar.

Estamos no repositório da série, a partir dessas séries, queremos buscar por episódios específicos. Sendo assim, nos parênteses passamos entre aspas duplas `SELECT e FROM Serie s`

> Precisamos fazer um SELECT em episódiosm pois a lista é de episódios, diferente do cósigo anterior que era `select s` da série.

Além disso, queremos juntar a tabela `series` com a tabela de `episodios` para conseguirmos trazer os episódios a partir das séries. Então, na mesma linha, usaremos outra cláusula SQL que é o `JOIN` seguido de `s.episodios`.

Fazemos isso justamente porque a classe `series` possui uma lista de `episodios` dentro dela. Em seguida, passamos `e`, pois essa lista será chamada assim.

Após, passamos a condição `WHERE` seguido de `e.titulo`.

**Jacqueline:** Repare que há uma característica similar quando fazemos consultas nativas no banco.

Quando unimos duas tabelas, e queremos dados de colunas de uma com algumas colunas da outra, usamos o apelido, o _alias_, após o nome da tabela. Nesse caso, seria o `series` como `s` e a tabela `episodios` como `e`.

Devemos fazer essas junções, então, tudo que quero daquela tabela será `e.algumaCoisa` e da outra `s.algumaCoisa`.

Poderíamos trazer coisas específicas se tivéssemos uma classe diferenciada. Então, poderia ser `s.título` seguido de `episodio.algumaCoisa`.

> Caso essa seja a primeira vez que você está aprendendo esse conteúdo, pode parecer confuso. Mas essa é uma característica muito usada nas _querys_ nativas, sendo assim, quando você se aprofundar em banco de dados ficará mais claro também como fazer esse pareamento.

**Iasmin:** Então, aqui estamos utilizando `e.título`, porque é como se fosse um `s.episódios.título`.

Se voltarmos na classe `Episodio`, estamos chamando o título que corresponde ao atributo `private String titulo`. É esse atributo deve conter o trecho que estamos digitando.

Então, no `SerieRepository.java`, precisaremos fazer isso de alguma forma. Ao invés de utilizar o `ContainingIgnoreCase` usaremos algo do SQL.

Nesse caso, na mesma linha de código, passamos o `ILIKE`, que trará tudo que seja igual. Então, se quiséssemos digitar o nome todo do episódio, ele conseguiria trazer exatamente. Porém, nesse caso, queremos trazer apenas um trecho.

> Lembrando que o `ILIKE` faz a parte do `ignore case`.

Agora, queremos o `contains`, para isso usaremos `%%`, entre os símbolos adicionamos dois pontos e passamos o parâmetro `trechoEpisodio`.

```less
//Código omitido

@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE e.titulo ILIKE %:trechoEpisodio%")
List<Episodio> episodiosPorTrecho(String trechoEpisodio);

//Código omitido
```

Fazendo isso conseguimos simular, em JPQL, o que estava sendo feito anteriormente em`findByType`.

Já declaramos a consulta e já temos o método configurado. Agora, vamos imprimir esses episódios que buscamos.

> `Principal.java`

Então, na linha 204, escrevemos `episodiosEncontrados.forEach()`. Nos parênteses passamos `System.out::println`.

```typescript
//Código omitido

 private void buscarEpisodioPorTrecho(){
        System.out.println("Qual o nome do episódio para busca?");
        var trechoEpisodio = leitura.nextLine();
        List<Episodio> episodiosEncontrados = repositorio.episodiosPorTrecho(trechoEpisodio);
        episodiosEncontrados.forEach(System.out::println)
```

Feito isso, rodamos a aplicação. Selecionamos a opção `9` que se refere ao nome do episódio para busca. Depois, buscamos pelo nome de episódio `the one`.

Feito isso, como retorno, temos uma lista grande de episódios da série _Friends_. Nossa busca por episódios está pronta.

Mas, repare que não temos o nome da série, apenas a temporada e o título. Então, podemos configurar essa parte também.

> `Episodio.java`

Para isso, voltamos para o arquivo `Episodio.java`. Na linha 26, temos o atributo `Serie`, portanto, esse mapeamento está sendo bidirecional. Portanto, conseguiremos recuperar as informações da série a partir do episódio.

> `Principal.java`

Então, na linha 204, em `episodiosEncontrados`ao invés de passamos `System.out::println`, podemos formatar a impressão.

Para isso, para facilitar, copiaremos uma **impressão personalizada**, que já está pronta, e colaremos nos parênteses. O código fica da seguinte forma:

```csharp
//Código omitido

private void buscarEpisodioPorTrecho(){
        System.out.println("Qual o nome do episódio para busca?");
        var trechoEpisodio = leitura.nextLine();
        List<Episodio> episodiosEncontrados = repositorio.episodiosPorTrecho(trechoEpisodio);
        episodiosEncontrados.forEach(e ->
                        System.out.printf("Série: %s Temporada %s - Episódio %s - %s\n",
                                        e.getSerie().getTitulo(), e.getTemporada(),
                                        e.getNumeroEpisodio(), e.getTitulo()));
```

Assim, temos um episódio `e` e estamos imprimindo uma saída personalizada, utilizando o `printf()`. Nos parênteses, temos as informações da série, incluindo título da série, temporada, número do episódio e título. Esta saída facilita a compreensão do que está ocorrendo.

Rodamos novamente essa impressão para verificarmos o resultado.

**Jacqueline:** Essa é a vantagem do relacionamento bidirecional. Da mesma forma que podemos acessar a lista de episódios de uma série por meio do método `getEpisodes`, também podemos pegar o título e demais dados da série a partir de uma lista de episódios, utilizando `getSerie`. Isso agiliza muito qualquer atividade que vamos fazer.

**Iasmin:** Isso mesmo! Após rodar o código, passamos o nome do episódio `the one` novamente.

Agora, no retorno temos primeiro o nome da série, seguido da temporada, episodio e nome do episódio. Antes, precisávamos verificar o ID da série, agora com a impressão do relacionamento bidirecional, essas informações são exibidas de forma mais fácil na tela. Assim, temos o filtro de episódios funcionando.

Aproveitamos para acessar o arquivo `Principal.java` e incluir essa opção de filtro. Então, na linha 47, escrevemos `9 - Buscar episódios pro trecho`.

```python
//Código omitido

public void exibeMenu() {
        var opcao = -1;
        while(opcao != 0) {
                var menu = """
                                1 - Buscar séries
                                2 - Buscar episódios
                                3 - Listar séries buscadas
                                4 - Buscar série por título
                                5 - Buscar séries por ator
                                6 - Top 5 Séries
                                7 - Buscar séries por categoria
                                8 - Filtrar séries
                                9 - Buscar episódios por trecho

                                0 - Sair
                                """;

//Código omitido
```

Pronto! O menu e a busca estão configurados. Agora podemos explorar outros tipos de busca pelos episódios.

**Jacqueline:** Ansiosa para a busca do item 10. Faremos isso na aula seguinte, até lá!

# Para saber mais: os comandos LIKE e ILIKE

 [Próxima Atividade](https://cursos.alura.com.br/course/java-persistencia-dados-consultas-spring-data-jpa/task/142214/next)

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142214/question)

LIKE é um comando SQL usado na cláusula WHERE para procurar um padrão específico em uma coluna. Em outras palavras, é uma maneira de fazer uma pesquisa em uma tabela, da mesma maneira que você pode usar um filtro de pesquisa em uma planilha do Excel, ou utilizar o método `contains()` do Java.

Você pode estar se perguntando: "Por que eu deveria aprender sobre LIKE se eu simplesmente posso procurar diretamente a informação que quero na minha tabela?". Bom, imagine que você tem uma tabela com milhares de registros, e você precisa encontrar todos os nomes que começam com a letra 'A'. Fazer isso manualmente levaria muito tempo, não é? É aqui que o comando LIKE é realmente útil!

Com o comando LIKE, você pode simplificar essa tarefa fazendo uma consulta que retorna apenas os registros que correspondem ao padrão que você define.

A sintaxe básica para usar o comando LIKE é a seguinte:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE column LIKE pattern;
```

O 'pattern' é o padrão que você está procurando. Para definir esse padrão, você usa os caracteres curinga `%` e `_`. O `%` substitui zero ou mais caracteres, enquanto `_` substitui um único caractere.

Por exemplo, para encontrar todos os nomes em uma tabela de clientes que começam com 'A', você usaria:

```sql
SELECT nome
FROM clientes
WHERE nome LIKE 'A%';
```

Isso retornará todos os registros na coluna 'nome' que começam com 'A'.

Se você quiser todos os nomes com 'A' em qualquer lugar do nome, você usaria:

```sql
SELECT nome
FROM clientes
WHERE nome LIKE '%A%';
```

Mas onde se encaixa o comando ILIKE que utilizamos em aula? O comando LIKE é sensível a maiúsculas e minúsculas em alguns bancos de dados. Portanto, se você quiser uma busca que não leve isso em consideração, como se fosse o `IgnoreCase` em Java, você deve utilizar o ILIKE.

Novamente, é importante que a gente entenda o uso dos dois comandos para conseguir compará-los e escolher o que melhor se adequa à nossa realidade de pessoas desenvolvedoras.

## Transcrição

**Iasmin:** Nossa aplicação está crescendo! Desenvolvemos várias buscas, incluindo busca de série e episódio.

Nesse vídeo, vamos exercitar nossa criatividade e trabalhar com mais buscas de episódios.

**Jacqueline:** Como criamos o Top 5 Séries, seria muito interessante se fizéssemos o Top 5 Episódios.

Por exemplo, você filtrou vários episódios de _Friends_, mas quais são os 5 Melhores Episódios? Seria uma ótima sugestão para quem quer começar a assistir.

**Iasmin:** Ótimo, Jaque!

# Filtrando o top 5 episódios de uma série

> `Principal.java`

**Iasmin:** Então, começamos criando o `case 10` na linha 84. Na linha abaixo, definimos o método `topEpisodiosPorSerie()`, seguido de `break`.

```cpp
//Código omitido

case 10:
        topEpisodiosPorSerie();
        break;

//Código omitido
```

Copiamos esse método e descemos até o fim do código. Para declará-lo, passamos `private void` e colamos.

```csharp
//Código omitido

private void topEpisodiosPorSerie();
```

Na linha abaixo, usaremos o método `buscarSeriePorTitulo()`. Assim fazemos a busca da série para depois filtrar pelos 5 melhores episódios.

Porém, esse método é um `void`, para utilizá-lo, precisaremos de um método que tenha um retorno do tipo _optional_ de série. Não sei se ele vai nos ajudar.

**Jacqueline:** Como ele é um `void`, uma alternativa é tornar a variável de séries que recebe a série por título para usá-la de forma global nesse método.

**Iasmin:** É uma boa opção, Jacque! Então, na linha 31, vamos declarar esse atributo. Então, passamos `Private Optional<Serie>` chamado `serieBusca`.

```swift
//Código omitido

private Optional<Serie> serieBusca;

//Código omitido
```

Em seguida, em `buscarSeriePorTitulo()`, na linha 156, ao invés de usarmos `Optional<Serie> serieBuscada` apagamos e passamos o atributo da classe `serieBusca`. Feito isso, na linha 158, em `if()`, também trocamos o `serieBuscada` por `serieBusca`. Ficando da seguinte forma:

```csharp
//Código omitido

private void buscarSeriePorTitulo() {
        System.out.println("Escolha um série pelo nome: ");
        var nomeSerie = leitura.nextLine();
        serieBusca = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if (serieBusca.isPresent()) {
                System.out.println("Dados da série: " + serieBusca.get());

        } else {
                System.out.println("Série não encontrada!");
        }

}

//Código omitido
```

Ao executar esse método temos a variável configurada. Então, voltamos ao `topEpisodiosPorSerie()`. Agora, precisamos verificar Nos resta verificar se esse _optional_ existe ou não.

Para isso, abaixo de `buscarSeriePorTitulo()`, passamos `if ()`. Nos parênteses, passamos `serieBusca.isPresente()`, fora adicionamos chaves para abrir a função.

Se essa série estiver presente, trabalharemos com a busca de episódios. Então, dentro de `if()`, podemos chamar`sérieBusca.get()`. Nessa série que buscamos, precisamos passar um método que utilizaremos no repositório.

Então, criaremos uma variável para representar essa série. Para isso, ao lado esquerda da linha de código `serieBusca.get()`, clicamos no ícone de lâmpada e depois em "Introduce local variable".

Feito isso, na linha abaixo, passamos `List<Episodio> topEpisodios` igual à `repositorio.topEpisodiosPorSerie()`. Nos parênteses, passamos `serie`.

```csharp
//Código omitido

private void topEpisodiosPorSerie(){
        buscarSeriePorTitulo();
        if(serieBusca.isPresent()){
                Serie serie = serieBusca.get();
                List<Episodio> topEpisodios = repositorio.topEpisodiosPorSerie(serie);
```

Feito isso, criaremos esse método no repositório. Clicamos nele com o botão direito e depois em "Show Context Actions". Depois clicamos novamente no método e em "Create method".

**Jacqueline:** Um ponto muito importante é que quando reutilizamos métodos, não precisamos tratar o `else`, pois temos ele na busca. Se a série não for encontrada, o sistema já informará que não existe essa série. Caso contrário, uma mensagem indicando que a série não foi encontrada será exibida.

Portanto, o reaproveitamento de código é ótimo. Não precisamos repetir procedimentos, nem corrigi-los em vários pontos, caso seja preciso realizar alguma alteração.

**Iasmin:** Isso mesmo, Jacque. É para isso que serve a orientação a objetos. Queremos criar componentes bem separados para que, por exemplo, se precisarmos alterar algo em `buscarSeriePorTitulo()` não precisamos nos preocupar com o `topEpisodiosPorSerie()`, pois há um único lugar que lida com isso. Portanto, fazendo a manutenção, não será necessário se preocupar com vários lugares.

> `SerieRepository.java`

**Iasmin:** Vamos retomar! Ao fazer isso, a IDE cria o método automaticamente no arquivo `SerieRepository.java`. Sendo assim, agora precisamos criar uma `query`.

Na linha 29 escrevemos `@Query()`. Como essa query será semelhante com a que está acima, copiamos o trecho de código que está nos parênteses, na linha 26.

Feito isso, colamos e passamos a clausulá `s = :serie`. Não precisaremos de mais cláusulas, apenas dos resultados de forma ordenada. Então, passamos `ORDER BY avaliacao`.

> Novamente, esse é o atributo que vem do arquivo `Episodio.java`, por isso passamos ele.

Além disso, a `avaliacao` deve ser ordenada de forma **descendente**, da mesma forma que utilizamos o `Desc` no `findTop5ByOrderByAvaliacaoDesc()`, precisaremos passá-lo novamente.

Então, passamos `DESD`, seguido da quantidade de episódios que queremos da série escolhida. No nosso caso, queremos um top5, então, escrevemos `LIMIT 5`. Feito isso, temos nossa _query JPL_.

```less
//Código omitido

@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie ORDER BY e.avaliacao DESC LIMIT 5")
List<Episodio> topEpisodiosPorSerie(Serie serie);

//Código omitido
```

> `Principal.java`

Voltamos no método. Vamos imprimir essa lista dos top 5 episódios. Na linha 221, escrevemos `topEpisodios.forEach()`. Nos parênteses, passaremos o mesmo código que usamos para imprimir o anterior.

Então, copiamos o código dentro de `forEach()`, entre a linha 210 e 213 e colamos. Dessa forma:

```csharp
//Código omitido

private void topEpisodiosPorSerie(){
        buscarSeriePorTitulo();
        if(serieBusca.isPresent()){
                Serie serie = serieBusca.get();
                List<Episodio> topEpisodios = repositorio.topEpisodiosPorSerie(serie);
                topEpisodios.forEach(e ->
                                System.out.printf("Série: %s Temporada %s - Episódio %s - %s Avaliação %s\n",
                                                e.getSerie().getTitulo(), e.getTemporada(),
                                                e.getNumeroEpisodio(), e.getTitulo() ));
        }
}

//Código omitido
```

Feito isso, podemos identificar os top episódios.

**Jacqueline:** Vamos lá! Quero ver quais são os melhores episódios de Friends.

**Iasmin:** Vamos rodar a aplicação novamente.

**Jacqueline:** Deu erro. Repare que no `SerieRepository.java`, na linha 29, tanto a `serie` quanto `episodios` tem um tributo chamado `avaliacao`.

Então, se analisarmos o log de erro, ele menciona a existência de alguma duplicidade. Isso ocorre porque o critério de avaliação que desejamos usar não está claro.

> Esse erro de duplicidade geralmente ocorre quando estamos fazendo consultas no banco de dados.

**Iasmin:** Portanto, precisamos especificar de qual das opções essa avaliação está vindo. Então, na linha 29, após `ORDER BY` passamos `e.avaliacao`.

```less
//Código omitido

@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie ORDER BY avaliacao DESC LIMIT 5")
List<Episodio> topEpisodiosPorSerie(Serie serie);

//Código omitido
```

Feito essa correção, rodamos novamente para verificar se deu certo. Repare que não definimos o nome desse filtro, porém, se digitarmos a opção `10` ela será selecionada.

Depois, escolhemos a série `Friends` e como retorno temos a lista com o top 5 episódios, contendo o nome da ´serie, temporada, episódio e nome do episódio.

Para imprimirmos a avaliação, no `Principal.java`, na linha 224 após o `e.getTitulo()`, chamamos `e.getAvaliacao()`.

```csharp
//Código omitido

private void topEpisodiosPorSerie(){
        buscarSeriePorTitulo();
        if(serieBusca.isPresent()){
                Serie serie = serieBusca.get();
                List<Episodio> topEpisodios = repositorio.topEpisodiosPorSerie(serie);
                topEpisodios.forEach(e ->
                                System.out.printf("Série: %s Temporada %s - Episódio %s - %s Avaliação %s\n",
                                                e.getSerie().getTitulo(), e.getTemporada(),
                                                e.getNumeroEpisodio(), e.getTitulo(), e.getAvaliacao() ));
        }
}

//Código omitido
```

Rodamos o código novamente e tudo certo. Os episódios possuem avaliações ótimas, de 9.7 até 9.2.

Novamente, continuaremos explorando novas opções de busca por episódios.

**Jacqueline:** Isso ai! JPQL é um tema muito interessante. É incrível o que podemos fazer com ele de forma simples.

Você perceberá que gradualmente ficará cada vez mais fácil de montar suas consultas.

**Te esperamos no próximo vídeo!**

## Transcrição

**Iasmin:** Continuando a nossa busca por episódios, tínhamos uma busca muito interessante na parte de _streams_, que era buscar episódios após uma data específica.

Por exemplo, queremos episódios que tenham sido lançados depois de 2010. A partir desta data, traremos uma lista de episódios. Podemos incluir essa busca em nossa aplicação, o que será muito útil para nós no futuro.

## Filtrando episódios por data de lançamento

Na classe `Principal`, continuaremos da mesma forma: vamos retornar ao menu na linha 50 e começar a criar o `case 10`, que não criamos antes. Adicionaremos a opção 10 com o título "Top 5 episódios por série". Agora, queremos episódios a partir de uma data, então vamos para o `case 11`, que é "Buscar episódios a partir de uma data".

> _`Principal.java`:_

```java
var menu = """
        1 - Buscar séries
        2 - Buscar episódios
        3 - Listar séries buscadas
        4 - Buscar série por título
        5 - Buscar séries por ator
        6 - Top 5 Séries
        7 - Buscar séries por categoria
        8 - Filtrar séries
        9 - Buscar episódios por trecho
        10 - Top 5 episódios por série
        11 - Buscar episódios a partir de uma data 

        0 - Sair                                 
        """;
```

No `switch case`, após o `case 10`, vamos adicionar o `case 11`, onde podemos ter `buscarEpisodiosDepoisDeUmaData()`. Para finalizar, daremos um `break`.

```java
case 11:
    buscarEpisodiosDepoisDeUmaData();
    break;
```

### Criando o método `buscarEpisodiosDepoisDeUmaData()`

Em seguida, criaremos o método `buscarEpisodiosDepoisDeUmaData()` ao final do código. Na linha 233, podemos declarar um `private void` chamado `buscarEpisodiosDepoisDeUmaData()`.

```java
private void buscarEpisodiosDepoisDeUmaData(){

}
```

Teremos algo muito parecido com o que fizemos no método `topEpisodiosPorSerie()`, porque precisaremos buscar uma série pelo título e, se ela existir, traremos os episódios. Se não encontrarmos uma série, não conseguiremos buscar os episódios. Portanto, usaremos a mesma estrutura.

No escopo do método, vamos chamar `buscarSeriePorTitulo()` e, após isso, faremos `if(serieBusca.isPresent())`. Ou seja, se a série for encontrada, então trabalharemos com os nossos dados.

```java
private void buscarEpisodiosDepoisDeUmaData(){
    buscarSeriePorTitulo();
    if(serieBusca.isPresent()){
    
    }
}
```

Se encontramos a série, queremos saber a partir de que ano de lançamento iremos trazer os episódios. Sendo assim, precisaremos solicitar para a pessoa usuária qual é data ela espera encontrar.

Dentro do `if`, usaremos `System.out.println()` e colocaremos o texto "Digite o ano limite de lançamento". Armazenaremos esse ano em uma variável `anoLancamento`, que receberá `leitura.nextInt()`. Lembrando que depois precisaremos de fazer um `leitura.nextLine()`.

```java
private void buscarEpisodiosDepoisDeUmaData(){
    buscarSeriePorTitulo();
    if(serieBusca.isPresent()){
        System.out.println("Digite o ano limite de lançamento");
        var anoLancamento = leitura.nextInt();
        leitura.nextLine();
    }
}
```

Agora podemos declarar o nosso método. Teremos uma lista de episódios (`List<Episodio>`) novamente, que podemos chamar de `episodiosAno`, e essa lista virá do nosso repositório. Então, chamaremos `repositorio.episodiosPorSerieEAno()`.

Antes de criar o método `episodiosPorSerieEAno()`, precisamos passar os parâmetros. Nesse caso, passaremos dois: `serie` e `anoLancamento`. Além disso, na linha 236, logo abaixo do `if`, vamos declarar `Serie` recebendo `serieBusca.get()`.

```java
private void buscarEpisodiosDepoisDeUmaData(){
    buscarSeriePorTitulo();
    if(serieBusca.isPresent()){
        Serie serie = serieBusca.get();
        System.out.println("Digite o ano limite de lançamento");
        var anoLancamento = leitura.nextInt();
        leitura.nextLine();
        
        List<Episodio> episodiosAno = repositorio.episodiosPorSerieEAno(serie, anoLancamento);
    }
}
```

### Criando o método `episodiosPorSerieEAno()`

Feito isso, podemos usar a IDE para criar o método `episodiosPorSerieEAno()`.

> _`SerieRepository.java`:_

```java
List<Episodio> episodiosPorSerieEAno(Serie serie, int anoLancamento);
```

Temos uma lista de episódios `episodiosPorSerieEAno()` e os nossos parâmetros.

Podemos fazer a `@Query`, que será muito parecida com a que temos no método `topEpisodiosPorSerie()`. Copiaremos o conteúdo entre parênteses até `WHERE s = :serie`, porque também precisaremos buscar os episódios fazendo o `JOIN` e utilizando a busca por `Serie`.

Na segunda parte, precisaremos utilizar mais alguns filtros. Adicionaremos um `AND`, pois já filtramos até a parte da série. Dada uma série, temos vários episódios. Porém, vamos filtrar e escolher aqueles que tenham um ano de lançamento maior do que o parâmetro passado. Para isso, utilizaremos o `AND` e então trabalhar com `e.dataLancamento`.

Estamos nos referindo à data de lançamento completa, ou seja, a data com dia, ano e mês. Entretanto, vamos trabalhar apenas com o ano. Para fazer isso, utilizaremos `YEAR()`, que é um método semelhante ao que utilizamos com Java puro, mas agora no SQL.

Nesse contexto, `YEAR(e.dataLancamento)` precisa ser maior ou igual ao ano de lançamento passado como parâmetro, ou seja, `:anoLancamento`. Feito isso, temos o nosso filtro.

```java
@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie AND YEAR(e.dataLancamento) >= :anoLancamento")
List<Episodio> episodiosPorSerieEAno(Serie serie, int anoLancamento);
```

### Finalizando o método `buscarEpisodiosDepoisDeUmaData()`

Vamos retornar à classe `Principal` e imprimir os episódios por ano. Para isso, vamos adicionar a linha `episodiosAno.forEach()` abaixo de `List<Episodio>`, e podemos imprimir todos esses episódios usando `System.out::println`.

> _`Principal.java`:_

```java
private void buscarEpisodiosDepoisDeUmaData(){
    buscarSeriePorTitulo();
    if(serieBusca.isPresent()){
        Serie serie = serieBusca.get();
        System.out.println("Digite o ano limite de lançamento");
        var anoLancamento = leitura.nextInt();
        leitura.nextLine();

        List<Episodio> episodiosAno = repositorio.episodiosPorSerieEAno(serie, anoLancamento);
        episodiosAno.forEach(System.out::println);
    }
}
```

**Jacqueline:** Vamos testar a opção 11 no terminal com a série "_Friends_", que é considerada antiga, e escolher o ano 2002. Após a consulta, teremos todos os episódios.

## Conclusão

**Iasmin:** Durante esta aula, trabalhamos muito com consulta.

**Jacqueline:** Isso é notável, principalmente quando trabalhamos com a lista em memória, buscando todas as informações e trabalhando com coisas no formato de streams, e temos determinada estratégia.

Por exemplo, na questão da data, nós criávamos um `LocalDate`, passávamos uma data, fazíamos a comparação. Já nesse caso, usamos outra estratégia, a estratégia do banco de dados. Do banco, extraímos o ano do lançamento de determinado episódio e comparamos com o ano que inserimos.

Tudo isso vem para aprofundar nosso conhecimento e melhorar a forma como buscamos dados e fazemos nossas consultas.

> Na próxima aula, temos um **desafio**! Será uma aula para consolidar conhecimento, onde vamos propor uma nova aplicação para você trabalhar com tudo que abordamos até o momento no curso.

Esperamos você para nosso desafio. A prática ajuda muito para consolidarmos, de fato, os conhecimentos e nos tornarmos cada vez melhores na profissão que queremos seguir e no que nos propusemos a aprender!


# Faça como eu fiz: utilizando JPQL para fazer consultas

 [Próxima Atividade](https://cursos.alura.com.br/course/java-persistencia-dados-consultas-spring-data-jpa/task/142218/next)

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142218/question)

Agora continuaremos com nossas buscas, mas vamos usar a linguagem específica da JPA para buscas: o JPQL.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-persistencia-dados-consultas-spring-data-jpa/142218/opinion)

Dentre as buscas que você pode fazer, temos:

- Buscar séries por número máximo de temporadas e mínimo de avaliação, como tínhamos feito anteriormente com derived queries.
- A partir do trecho do nome de um episódio, trazer os episódios que tenham aquele trecho no seu nome. É legal exibir qual a série desse episódio também!
- Tendo uma série, trazer seus top 5 episódios.
- Dada uma série, exibir todos os episódios dela que foram lançados a partir de um ano escolhido pelo usuário.

Para realizar essas buscas, deveremos acrescentar alguns métodos na interface SerieRepository, além de também adicionar opções no nosso menu.

`SerieRepository.java`

```java
package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Episodio;
import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SerieRepository extends JpaRepository<Serie, Long> {
    Optional<Serie> findByTituloContainingIgnoreCase(String nomeSerie);

    List<Serie> findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(String nomeAtor, double avaliacao);

    List<Serie> findTop5ByOrderByAvaliacaoDesc();

    List<Serie> findByGenero(Categoria categoria);

    List<Serie> findByTotalTemporadasLessThanEqualAndAvaliacaoGreaterThanEqual(int totalTemporadas, double avaliacao);
    @Query("select s from Serie s WHERE s.totalTemporadas <= :totalTemporadas AND s.avaliacao >= :avaliacao")
    List<Serie> seriesPorTemporadaEAValiacao(int totalTemporadas, double avaliacao);
    @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE e.titulo ILIKE %:trechoEpisodio%")
    List<Episodio> episodiosPorTrecho(String trechoEpisodio);

    @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie ORDER BY e.avaliacao DESC LIMIT")
    List<Episodio> topEpisodiosPorSerie(Serie serie);

    @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie AND YEAR(e.dataLancamento) >= :anoLancamento")
    List<Episodio> episodiosPorSerieEAno(Serie serie, int anoLancamento);
}
```

`Principal.java`

```java
package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.*;
import br.com.alura.screenmatch.repository.SerieRepository;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {

    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();
    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apikey=6585022c";
    private List<DadosSerie> dadosSeries = new ArrayList<>();

    private SerieRepository repositorio;
    private List<Serie> series = new ArrayList<>();
    private Optional<Serie> serieBusca;

    public Principal(SerieRepository repositorio) {
        this.repositorio = repositorio;
    }

    public void exibeMenu() {
        var opcao = -1;
        while(opcao != 0) {
            var menu = """
                    1 - Buscar séries
                    2 - Buscar episódios
                    3 - Listar séries buscadas
                    4 - Buscar série por título
                    5 - Buscar séries por ator
                    6 - Top 5 Séries
                    7 - Buscar séries por categoria
                    8 - Filtrar séries
                    9 - Buscar episódios por trecho
                    10 - Top 5 episódios por série
                    11 - Buscar episódios a partir de uma data 
                                    
                    0 - Sair                                 
                    """;

            System.out.println(menu);
            opcao = leitura.nextInt();
            leitura.nextLine();

            switch (opcao) {
                case 1:
                    buscarSerieWeb();
                    break;
                case 2:
                    buscarEpisodioPorSerie();
                    break;
                case 3:
                    listarSeriesBuscadas();
                    break;
                case 4:
                    buscarSeriePorTitulo();
                    break;
                case 5:
                    buscarSeriesPorAtor();
                    break;
                case 6:
                    buscarTop5Series();
                    break;
                case 7:
                    buscarSeriesPorCategoria();
                    break;
                case 8:
                    filtrarSeriesPorTemporadaEAvaliacao();
                    break;
                case 9:
                    buscarEpisodioPorTrecho();
                    break;
                case 10:
                    topEpisodiosPorSerie();
                    break;
                case 11:
                    buscarEpisodiosDepoisDeUmaData();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        }
    }

    private void buscarSerieWeb() {
        DadosSerie dados = getDadosSerie();
        Serie serie = new Serie(dados);
        //dadosSeries.add(dados);
        repositorio.save(serie);
        System.out.println(dados);
    }

    private DadosSerie getDadosSerie() {
        System.out.println("Digite o nome da série para busca");
        var nomeSerie = leitura.nextLine();
        var json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        return dados;
    }

    private void buscarEpisodioPorSerie(){
        listarSeriesBuscadas();
        System.out.println("Escolha uma série pelo nome");
        var nomeSerie = leitura.nextLine();

        Optional<Serie> serie = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if(serie.isPresent()) {

            var serieEncontrada = serie.get();
            List<DadosTemporada> temporadas = new ArrayList<>();

            for (int i = 1; i <= serieEncontrada.getTotalTemporadas(); i++) {
                var json = consumo.obterDados(ENDERECO + serieEncontrada.getTitulo().replace(" ", "+") + "&season=" + i + API_KEY);
                DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
                temporadas.add(dadosTemporada);
            }
            temporadas.forEach(System.out::println);

            List<Episodio> episodios = temporadas.stream()
                    .flatMap(d -> d.episodios().stream()
                            .map(e -> new Episodio(d.numero(), e)))
                    .collect(Collectors.toList());

            serieEncontrada.setEpisodios(episodios);
            repositorio.save(serieEncontrada);
        } else {
            System.out.println("Série não encontrada!");
        }
    }

    private void listarSeriesBuscadas(){
        series = repositorio.findAll();
        series.stream()
                .sorted(Comparator.comparing(Serie::getGenero))
                .forEach(System.out::println);
    }

    private void buscarSeriePorTitulo() {
        System.out.println("Escolha um série pelo nome: ");
        var nomeSerie = leitura.nextLine();
        serieBusca = repositorio.findByTituloContainingIgnoreCase(nomeSerie);

        if (serieBusca.isPresent()) {
            System.out.println("Dados da série: " + serieBusca.get());

        } else {
            System.out.println("Série não encontrada!");
        }

    }

    private void buscarSeriesPorAtor() {
        System.out.println("Qual o nome para busca?");
        var nomeAtor = leitura.nextLine();
        System.out.println("Avaliações a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        List<Serie> seriesEncontradas = repositorio.findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(nomeAtor, avaliacao);
        System.out.println("Séries em que " + nomeAtor + " trabalhou: ");
        seriesEncontradas.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarTop5Series() {
        List<Serie> serieTop = repositorio.findTop5ByOrderByAvaliacaoDesc();
        serieTop.forEach(s ->
                System.out.println(s.getTitulo() + " avaliação: " + s.getAvaliacao()));
    }

    private void buscarSeriesPorCategoria() {
        System.out.println("Deseja buscar séries de que categoria/gênero? ");
        var nomeGenero = leitura.nextLine();
        Categoria categoria = Categoria.fromPortugues(nomeGenero);
        List<Serie> seriesPorCategoria = repositorio.findByGenero(categoria);
        System.out.println("Séries da categoria " + nomeGenero);
        seriesPorCategoria.forEach(System.out::println);
    }

    private void filtrarSeriesPorTemporadaEAvaliacao(){
        System.out.println("Filtrar séries até quantas temporadas? ");
        var totalTemporadas = leitura.nextInt();
        leitura.nextLine();
        System.out.println("Com avaliação a partir de que valor? ");
        var avaliacao = leitura.nextDouble();
        leitura.nextLine();
        List<Serie> filtroSeries = repositorio.seriesPorTemporadaEAValiacao(totalTemporadas, avaliacao);
        System.out.println("*** Séries filtradas ***");
        filtroSeries.forEach(s ->
                System.out.println(s.getTitulo() + "  - avaliação: " + s.getAvaliacao()));
    }

    private void buscarEpisodioPorTrecho(){
        System.out.println("Qual o nome do episódio para busca?");
        var trechoEpisodio = leitura.nextLine();
        List<Episodio> episodiosEncontrados = repositorio.episodiosPorTrecho(trechoEpisodio);
        episodiosEncontrados.forEach(e ->
                System.out.printf("Série: %s Temporada %s - Episódio %s - %s\n",
                        e.getSerie().getTitulo(), e.getTemporada(),
                        e.getNumeroEpisodio(), e.getTitulo()));
    }

    private void topEpisodiosPorSerie(){
        buscarSeriePorTitulo();
        if(serieBusca.isPresent()){
            Serie serie = serieBusca.get();
            List<Episodio> topEpisodios = repositorio.topEpisodiosPorSerie(serie);
            topEpisodios.forEach(e ->
                    System.out.printf("Série: %s Temporada %s - Episódio %s - %s Avaliação %s\n",
                            e.getSerie().getTitulo(), e.getTemporada(),
                            e.getNumeroEpisodio(), e.getTitulo(), e.getAvaliacao()));
        }
    }
    private void buscarEpisodiosDepoisDeUmaData(){
        buscarSeriePorTitulo();
        if(serieBusca.isPresent()){
            Serie serie = serieBusca.get();
            System.out.println("Digite o ano limite de lançamento");
            var anoLancamento = leitura.nextInt();
            leitura.nextLine();

            List<Episodio> episodiosAno = repositorio.episodiosPorSerieEAno(serie, anoLancamento);
            episodiosAno.forEach(System.out::println);
        }
    }
}
```

Fique à vontade para criar mais buscas! Vale também converter para JPQL o que fizemos com derived queries anteriormente. Caso queira, teste também as queries nativas para entender bem as particularidades de cada tipo de busca.

