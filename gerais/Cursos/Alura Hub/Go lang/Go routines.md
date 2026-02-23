
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
# Diferença de concorrencia e paralelismo
Concorrência - não é realmente executado ao mesmo tempo.
	Avançam de formas alternadas.
Paralelismo - Simultaneamente, ao mesmo tempo.
# Beneficios
São mais leves que as threads. E são gerenciadas diretamente pela runtime do Go.
![[Pasted image 20251024175645.png]]
Goroutine: É uma abstração leve sobre threads, gerenciada pelo runtime do Go. Ela é muito mais leve e eficiente em termos de recursos do que as threads tradicionais do sistema operacional. O Go pode executar milhares de goroutines em um único programa sem grandes impactos de memória ou processamento.

**Thread**: Uma thread é uma unidade de execução do sistema operacional. Criar e gerenciar threads pode ser custoso, pois o sistema operacional precisa reservar mais recursos (como memória e tempo de CPU) para cada uma.

**Principais diferenças**

**Leveza**

As goroutines são muito mais leves que as threads tradicionais. Cada goroutine começa com um stack de apenas 2 KB, enquanto uma thread do sistema operacional normalmente inicia com um stack de 1 MB ou mais. Isso significa que você pode criar milhares de goroutines sem problemas de consumo de memória, algo impraticável com threads devido ao alto custo de criação e consumo de memória.

**Escalonamento**

No Go, o runtime gerencia as goroutines e as distribui automaticamente para um número limitado de threads do sistema operacional, usando um escalonador cooperativo. Isso significa que o runtime decide quando cada goroutine deve ser pausada ou retomada. Em contraste, as threads são escalonadas diretamente pelo sistema operacional, o que pode ser menos eficiente, especialmente em programas com muitas threads.

**Múltiplas goroutines por thread**

Em uma thread do sistema operacional, apenas uma tarefa pode ser executada por vez. O runtime do Go permite que várias goroutines sejam executadas dentro de uma única thread e, quando necessário, ajusta dinamicamente o uso das threads. Isso economiza recursos e reduz a sobrecarga em comparação com as threads, onde cada tarefa exige uma thread exclusiva e um contexto separado.

**Gerenciamento pelo Go runtime**

As goroutines são inteiramente gerenciadas pelo runtime de Go, enquanto as threads são gerenciadas pelo sistema operacional. Esse gerenciamento direto pelo Go oferece mais controle e eficiência para lidar com a concorrência. Como resultado, o uso de goroutines é mais leve e simplificado, permitindo que o runtime ajuste as goroutines conforme as necessidades do programa sem depender diretamente das capacidades do sistema operacional.

> Portanto, goroutines não são threads diretamente, mas são executadas sobre threads, oferecendo uma forma mais eficiente e escalável de lidar com a concorrência em comparação com o uso direto de threads.

Quanta informação legal, mas calma que ainda tem muito mais!
# Canais
Permitem a comunicação com a go routines. 
Os valores escritos num canal pode ser lido apenas uma única vez.
Para criar um canal(neste exemplo com o tipo float64) faça:
```go
variavel :=  make(chan float64)
```
Para escrever use o operador <-.
Exemplo:
```go
priceChannel <- fetcher.FetchPriceFromSite3()
```
Você pode ler um canal, e seus valores usado um for range.
Exemplo:
```go
go func() {

        for price := range priceChannel {

            fmt.Printf("Preço recebido: R$ %.2f\n", price)

        }

    }()
```
Detalhe: a cada momento que for adiciona um valor ao canal, esse for será adiconado.
## Fechando um channel
Para ele parar de consumir recursos use a função close.
```go
close(channel)
```
## Channels como parâmetro
Você pode indicar o que você vai fazer com o channel, se você vai realizar entradas ou saídas. Quando o operador <- está para o lado direito ele entra, quando está pro lado esquedo ele indica que ele vai apenas obter o valor.
Exemplos:
```go
func FetchPrices(priceChannel chan<- float64) {

    var wg sync.WaitGroup

  

    wg.Add(3)

  

    go func() {

        defer wg.Done()

        priceChannel <- FetchPriceFromSite1()

    }()

  

    go func() {

        defer wg.Done()

        priceChannel <- FetchPriceFromSite2()

    }()

  

    go func() {

        defer wg.Done()

        priceChannel <- FetchPriceFromSite3()

    }()

  

    wg.Wait()

    close(priceChannel)

}
```

```go
func ShowPriceAvg(priceChannel <-chan float64, done chan<- bool) {

    var totalPrice float64

    countPrices := 0.0

    for price := range priceChannel {

        totalPrice += price

        countPrices++

        avgPrices := totalPrice / countPrices

        fmt.Printf("Preço recebido: R$ %.2f | Preço médio até agora: R$ %.2f\n", price, avgPrices)

    }

  

    done <- true

}
```

## Ler um channel somente quando algo estiver nele
Você pode fazer uma leitura de um channel, usando o operados <- no lado esquerdo. Isso vai interromper o fluxo, e ele vai continuar apenas quando existir algum valor no channel.
## Mais sobre
O operador de canal (<-) é uma das ferramentas mais poderosas em Go quando se trata de comunicação entre goroutines, as rotinas concorrentes da linguagem. Em Go, os canais funcionam como uma ponte entre goroutines, permitindo que uma rotina envie dados para outra de forma sincronizada e segura. O operador <- é essencial para essa comunicação, pois ele define claramente se o valor está sendo enviado para um canal ou lido dele. Essa distinção ajuda a evitar erros comuns de concorrência e torna o fluxo de dados previsível e controlado, o que é crucial para o desenvolvimento de software robusto e eficiente.

**Enviando Dados com o Operador de Canal**

Quando usamos o operador <- para enviar dados, colocamos o valor à esquerda do operador e o canal à direita. Por exemplo, em uma expressão como channel <- value, o valor será enviado para o canal, aguardando até que outra goroutine esteja pronta para recebê-lo. Isso garante que o envio de dados só ocorra quando a leitura for possível, o que evita problemas como perda de dados ou erros de sincronização. Essa mecânica de envio sincronizado é particularmente útil em aplicações que exigem que dados sejam processados em uma sequência específica, como no caso de pipelines de processamento de dados.

**Lendo Dados com o Operador de Canal**

Para ler dados de um canal, o operador <- é usado com o canal à direita, como em value := <-channel. Essa sintaxe indica que estamos extraindo um valor do canal, e a goroutine vai aguardar até que um valor esteja disponível. Esse comportamento bloqueante é vantajoso em muitos cenários, pois garante que os dados estejam sempre prontos para serem processados no momento da leitura. O uso do operador <- para leitura é uma maneira eficiente de coordenar a execução de várias goroutines, tornando possível que o programa lide com grandes volumes de dados de forma simultânea, mas controlada.

**A Importância do Operador <- para Concorrência Segura**

O operador <- é crucial para garantir a segurança na concorrência, especialmente em situações onde várias goroutines precisam acessar dados compartilhados. Sem um mecanismo de controle como o <-, o acesso simultâneo a variáveis compartilhadas poderia resultar em condições de corrida, onde o comportamento do programa se torna imprevisível. O operador de canal impede esse problema ao coordenar o acesso entre goroutines, permitindo que cada rotina acesse os dados de maneira sequencial e ordenada, garantindo que o processamento ocorra de forma segura e previsível.

> O operador permite que os dados fluam de forma sincronizada e coordenada entre goroutines, possibilitando a criação de sistemas complexos e de alto desempenho. Dessa forma, o <- é fundamental para qualquer desenvolvedor que queira aproveitar ao máximo a concorrência em Go.