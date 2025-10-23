Não é exatamente paralelo, ele consome recursos de um, depois consume uns recursos do outro.
Para iniciar, coloque antes da função a palavra chave: go
Crie um channel para comunicar entre go routines, usando ``make(chan <tipo>)``.
Acesse um channel quando disponível: colocando ``<-variavel``
Altere uma variável usando `variavel <- novo_valor`.
Você pode bloquear locais da memória também.

- **1. [Concorrência em Go: Go Concurrency Patterns](https://blog.golang.org/concurrency-is-not-parallelism)**
    
    > Um artigo oficial do Go que explora como o Go lida com concorrência e os padrões comuns utilizados para gerenciar múltiplas tarefas.
    
- **2. [Go Concurrency Patterns - Rob Pike](https://www.youtube.com/watch?v=f6kdp27TYZs)**
    
    > Um vídeo sobre concorrência em Go feito por um de seus criadores.
    
- **9. [DevOps e Go: O Papel de Go na Automação e CI/CD](https://www.linkedin.com/pulse/golang-e-devops-um-guia-para-iniciantes-paulo-roberto/)**
    
    > Um artigo sobre como Go é utilizado na automação e nos pipelines de CI/CD, destacando suas capacidades e vantagens para DevOps.
    
# Crie uma goroutine
Código assincrono, que roda em "paralelo" com outros códigos.
Exemplo:
```go
go func() {

        defer wg.Done()

        price1 = fetcher.FetchPriceFromSite1()

    }()
```
# Criando waitgroup
Permite com que um fluxo sincrono sejá rodado depois de todos os processos rodarem.
```go
var wg sync.WaitGroup
```
## Adicione processos
```go
wg.Add(1)
```
Ele adiciona um processo no wait group.
## Finalizando um processo
```go
wg.Done()
```
Ele finaliza um processo no wait group.
## Esperando todos os processos acabarem
```go
wg.Wait()
```
Ele só permite o próximo fluxo continuar quando todos os processos finalizarem. 
# Problema de dead lock
Foi adicionado processos, mas eles nunca acabaram.
# Para saber mais
Concorrência é o termo da ciência da computação para dividir um único processo em componentes independentes e especificar como esses componentes compartilham dados com segurança. A maioria das linguagens fornece essa simultaneidade por meio de uma biblioteca usando threads de nível de sistema operacional que compartilham dados tentando adquirir bloqueios.

Mas em Go é diferente. Seu principal modelo de simultaneidade, sem dúvida o recurso mais famoso de Go, é baseado em Processos Sequenciais de Comunicação (CSP). Esse estilo de simultaneidade foi descrito em 1978 em um [artigo de Tony Hoare (artigo em inglês)](https://dl.acm.org/doi/pdf/10.1145/359576.359585) , o homem que inventou o algoritmo [Quicksort](https://pt.wikipedia.org/wiki/Quicksort). Os padrões implementados com CSP são tão poderosos quanto os padrões, mas são muito mais fáceis de entender.

Vou criar uma analogia deste artigo, para melhor entendimento. Imagine que você está organizando uma festa de aniversário e precisa decidir:

- **Variáveis**: Quem convidar (cada pessoa é uma variável), o que servir (cada comida é uma variável), que música tocar (cada música é uma variável).
- **Domínios**: Para cada variável, você tem um conjunto de opções possíveis (por exemplo, para "quem convidar", você tem uma lista de amigos, para "o que servir", você tem uma lista de comidas e para "que música tocar", você tem uma lista de músicas).
- **Restrições**: Existem regras que limitam suas escolhas. Por exemplo, você só pode convidar pessoas que você sabe que se dão bem (restrição entre a variável "quem convidar" e outras variáveis). Você também pode ter restrições quanto ao preço da comida, por exemplo.

O CSP tenta encontrar um conjunto de valores para todas as variáveis que satisfaçam todas as restrições. Para isso, ele utiliza algoritmos de busca que exploram as possíveis combinações de valores para as variáveis.

> Em resumo, o CSP é uma técnica que ajuda a resolver problemas complexos com muitas variáveis e restrições, encontrando a melhor combinação de soluções que satisfazem todas as condições.

O [artigo de Tony](https://pt.wikipedia.org/wiki/Charles_Antony_Richard_Hoare) destaca a importância do trabalho de Hoare no desenvolvimento de algoritmos de ordenação e pesquisa, como o Quicksort. Embora o Quicksort não seja diretamente aplicado na resolução de CSPs, seus princípios de dividir e conquistar e recorrência podem ser considerados relevantes no contexto da Busca em Profundidade com Backtracking, onde o espaço de busca é dividido recursivamente em subproblemas menores que são resolvidos individualmente.

Muitas pessoas acreditam que adicionar concorrência automaticamente torna os programas mais rápidos, mas isso nem sempre é verdade. A concorrência é uma ferramenta que ajuda a estruturar problemas complexos, mas não necessariamente leva à execução paralela, que depende do hardware e das condições do algoritmo. É importante distinguir a concorrência de paralelismo: enquanto a primeira organiza o fluxo de trabalho, a segunda refere-se à execução real de múltiplas tarefas ao mesmo tempo.

Em termos gerais, todos os programas seguem três etapas principais: capturam dados, processam essas informações e, finalmente, geram o resultado. A decisão de usar concorrência em um programa depende de como os dados se movem entre essas etapas. Em algumas situações, duas etapas podem ser executadas em paralelo, pois uma não depende da saída da outra. Em outras, é necessário que elas ocorram em sequência, pois uma etapa depende dos dados gerados pela anterior. A concorrência é útil quando é preciso combinar dados de várias operações que podem ser realizadas de forma independente.

> E aí, legal né? Então, bora aprender mais