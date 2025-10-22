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