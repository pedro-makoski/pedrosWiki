# Projeto inicial do curso

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147704/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147704/question)

Neste curso, vamos utilizar uma API Rest desenvolvida utilizando Spring Boot. Você pode fazer o download do projeto inicial por meio do seguinte link:

- [Projeto inicial do curso](https://github.com/alura-cursos/java-exceptions/archive/refs/heads/projeto_inicial.zip)

A aplicação utiliza o **MySQL** como banco de dados, portanto, será necessário que você o instale em seu computador. Em caso de dúvidas, você pode consultar o tutorial disponível no artigo: [MySQL: da instalação até a configuração](https://www.alura.com.br/artigos/mysql-instalacao-configuracao).

Para realizar testes nos endpoints da API, vamos utilizar o **Postman**. Você também pode conferir um artigo que ensina como fazer a instalação: [Postman: saiba como instalar e dar seus primeiros passos](https://www.alura.com.br/artigos/postman-como-instalar-dar-seus-primeiros-passos).
## Transcrição

**Então, vamos começar o curso?**

No meu visor, está aparecendo a IDE que vamos utilizar, o _IntelliJ_. Também teremos uma atividade para vocês baixarem o material deste curso de exceções. Já estou com o projeto aberto na IDE do _IntelliJ_. Vamos navegar um pouco para descobrirmos o que há na API.

## Visão Geral da API Adopet

Estamos trabalhando no contexto da **Adopet**, uma empresa especializada em solicitações e aprovações de adoções de pets. Temos uma API no _SpringBoot_ e estamos com essas pastas: `src`, `main`, `java` e vamos clicar no pacote da `adopet.api`.

Lembrando que o foco do curso não é ensinar o que é o _SpringBoot_ e como usá-lo desde o início. Existem outros cursos específicos de para isso.

Temos os pacotes de `controller`, `dto`, `model`, `repository` e `service`. Vamos clicar no `controller`. Abriram-se três novos arquivos: `AdocaoController`, `PetController` e `TutorController`. O `AdocaoController` é como o coração da Adopet API, pois ela é especializada em adoções de pets. Então, vamos dar um duplo clique e abrir sua visualização.

Então, abrimos o `controller` e estamos mapeando-o para os verbos HTTP. Possuímos métodos `@GetMapping`, responsáveis por buscar alguns dados na API, por exemplo, buscar todas as adoções, buscar uma única adoção, solicitar, aprovar e reprovar.

> Para consultar o pacote `adopet.api`, basta acessar o [Github do curso](https://github.com/vinelouzada/java-exceptions/blob/main/src/main/java/adopet/api/controller/AdocaoController.java)

Conforme avançarmos, entenderemos como as exceções aparecerão no nosso código.

Durante este curso, como estamos trabalhando com uma API no _Spring Boot_ que precisa armazenar dados, como os de adoção, vamos utilizar um banco de dados _MySQL_. Na pasta `main`, acessando `resources`, encontraremos um arquivo chamado `application.properties`. Vamos dar um duplo clique em `application.properties`, minimizar os projetos do _IntelliJ_ e dar zoom.

```ini
spring.datasource.url=jdbc:mysql://localhost/adopet_api?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=123
```

Pela URL é possível conferir que o _MySQL_ já está instalado na minha máquina.

> Há um material disponível no **Para Saber Mais** da aula que você pode consultar para baixar e instalar o MySQL na sua máquina.

Temos o `username` e o `password`. Coloquei a configuração da minha máquina, ou seja, o meu usuário é `root` e a senha é `123`. Mas pode ser que na sua máquina isso seja diferente. Então, não deixe de configurar de acordo com a sua máquina.

## Início da Aplicação e Testes com Postman

Está tudo correto. Passamos pelo `AdocaoController.java` e vamos iniciar nossa API. No canto superior direito, encontraremos um botão de "Play" escrito "Run 'ApiApplication'". Ao apertá-lo, aparecerá uma mensagem pedindo para habilitarmos o _Lombok_. Vamos clicar e habilitar. No canto inferior do visor, é possível conferir que a aplicação está iniciando.

A aplicação foi iniciada e agora precisamos testá-la. Se tivéssemos um _front-end_, teríamos um formulário de inputs para preencher e fazer requisições para a API. Mas como não temos, vamos utilizar o **Postman**.

> Também disponibilizaremos um material complementar para você instalar e configurar o _Postman_ no seu computador. Ele pedirá que você tenha uma conta. É possível logar com sua conta do Google ou criar uma. Quando abrir o _Postman_, você encontrará um botão chamado "Import". Peço que importe uma coleção de requisições que preparei para você não ter que escrever manualmente.
> 
> Você clicará em "Import" e depois em "Files". O próximo passo é voltar ao projeto e minimizar a parte inferior do console. Voltando no diretório de arquivos, você perceberá que na raiz do projeto que disponibilizei, existe um arquivo chamado `Adopet.Postman_Collection.json`. Basta abrir esse arquivo no Postman.

Voltando ao _Postman_, localizaremos uma pasta chamada "Adopet". Dentro dela, haverá outras pastas, como a de `Pet`, `Tutor`, `Adoção`, e algumas requisições que preparamos, com métodos `POST`, `GET` e `PUT`. Por exemplo, temos o `POST Cadastrar Tutor`. Ao selecioná-lo, abriremos uma janela na parte direita.

Nesta janela, selecionaremos "Body", como o arquivo já foi disponibilizado, não será necessário preparar o `JSON` que enviaremos para a API. No corpo, estamos enviando um arquivo "raw", um "corpo cru", do tipo `JSON`, passando a chave `"nome"` e também o `"email"`.

```perl
"nome": "Vinicius Louzada", 
"email": "email@example.com"
```

Podemos disparar uma requisição. No canto direito, há um botão azul chamado "Send". Vamos apertá-lo e, na parte inferior, notaremos que ele retornou um "200 OK", e informou que conseguimos cadastrar o tutor.

Vale lembrar que na nossa API do _Spring Boot_, temos um método responsável por cadastrar o tutor. Para saber se tudo deu certo, podemos ir na rota de buscar todos os tutores. Está com a URL `localhost:8080/tutor`, enviando pelo verbo `GET`. Clicaremos em "Send" e, pronto, ele cadastrou:

```perl
{
  {
      "id": 1,
      "nome": "Vinicius Louzada",
        "email": "email@example.com"
     }
}
```

Também precisamos cadastrar um pet, então, vamos na rota do pet, `POST Cadastrar Pet` e selecionaremos o "Body". Um ponto importante nesta parte, é: quando temos um pet, precisamos cadastrar uma imagem também. Mas como enviar uma imagem através do _Postman_? Se estivéssemos em um ambiente front-end, teríamos um botão de seleção e arquivos.

Temos a parte do "Body", e clicaremos na opção "form-data". Enviaremos duas chaves,:

1 - **Imagem** (selecionando o tipo de arquivo como "file"). Em "Value", apertaremos "Select Files", abriremos o projeto e selecionaremos a imagem "gato.jpg". O "content-Type" precisamos mandar do "multipart/form-data", assim informaremos ao navegador que estamos enviando arquivos de multimidia.

2 - **Dados**. Em "Value", teremos os dados do pet. Já no "content-Type", teremos "application/json".

Vamos voltar ao _IntelliJ_. Na "src > main > java > Adopet API" abriremos o `PetController`. Minimizaremos o diretório de arquivos do _IntelliJ_. Na nossa rota, temos o método `cadastrar`, que espera receber uma chave `dados` e outra `imagem`, que é exatamente o que estamos passando no _Postman_.

```less
// Código omitido. 

 @PostMapping
    @Transactional
    public ResponseEntity<String> cadastrar(@RequestPart @Valid CadastroPetDTO dados,
                                            @RequestParam MultipartFile imagem){
        try{
            service.cadastrar(dados, imagem);
        }catch (IOException ex){
            ResponseEntity.badRequest().body(ex.getMessage());
        }
        return ResponseEntity.ok().build();
    }
}
```

Voltando ao _Postman_, clicaremos em "Send" no canto superior direito. Ele retornou "200 OK", logo, o pet foi cadastrado. Para confirmar, podemos clicar em "Buscar todos os Pets" e, em seguida, no botão "Send".

Ele cadastrou o pet no nosso banco de dados, com nome, idade, tipo e se foi adotado. Em relação à imagem, ele criou um novo nome com a extensão e foi enviada para a API, que a gravará em um diretório raiz. Vamos ao _IntelliJ_ entender melhor este contexto. Temos a pasta `main`, e uma outra chamada `resource`, que contém a pasta `storage`, de armazenamento. Nela, está cadastrada a imagem que enviamos, a fotografia de um gato.

Até aqui, cadastramos o tutor e o pet na nossa API, no nosso banco de dados. Com essas informações, podemos solicitar uma adoção e isso já está preparado. Na pasta de "adoção", vamos clicar em "Body". Podemos solicitar a adoção do pet 1 e do tutor 1, que foram os primeiros registros no nosso banco de dados. Precisamos também passar um motivo. Dispararemos essa requisição clicando em "Send". Ele retorna uma mensagem: "adoção solicitada com sucesso".

```json
{
   "idPet": 1,
     "idTutor": 1,
     "motivo": "Um motivo qualquer"
}
```

> Adoção solicitada com sucesso!

Agora, para testar, precisamos aprovar essa adoção. Antes disso, vamos buscar todas as adoções. Clicaremos no botão "Send" para enviar. Ele retornou um `JSON`:

```json
[
  {
      "id": 1,
       "tutor": 1,
       "pet": 1,
       "motivo": "Um motivo qualquer",
       "status": "AGUARDANDO_AVALIAÇÃO", 
       "justificativa": null
     }
]
```

Então, alguém da Adopet avaliará se a justificativa é plausível e se a pessoa pode adotar o pet. Vamos testar e aprovar essa adoção. Clicaremos em `PUT Aprovar Adoção` e acessaremos "Body". Aprovaremos a adoção 1, que foi a primeira solicitação.

```json
{
    "idAdocao": 1
 }
```

Clicaremos em "Send". O retorno é "200 OK". Se voltarmos a `GET Buscar todas as adoções` e dispararmos novamente, o status aparecerá como aprovado.

```json
[
  {
      "id": 1,
       "tutor": 1,
       "pet": 1,
       "motivo": "Um motivo qualquer",
       "status": "APROVADO", 
       "justificativa": null
     }
]
```

## Tratamento de Exceções

Mas imagine um caso onde alguém tenta aprovar uma adoção que não existe. O que acontecerá? Vamos fazer um teste. Na `PUT Aprovar Adoção`, temos apenas uma solicitação, já aprovada, a solicitação 1. Colocaremos o número 2, que ainda não existe e testar clicando em "Send".

```json
{
    "idAdocao": 2
 }
```

O _Postman_ retornou um erro interno da API, com status "500". Há um rastro de erro e ele menciona "EntityNotFoundException". Significa que ele não encontrou a adoção.

Voltando ao _IntelliJ_, no `AdocaoController`, temos o método `aprovar` e uma `service` com um método de `aprovar`. Vamos abri-lo. Ele faz uma busca pelo `id` que passamos no banco de dados e tenta criar uma entidade. Depois, tenta marcá-la como aprovada. Mas, como não encontrou, retorna um "EntityNotFoundException".

```java
// Código omitido. 

 public void aprovar(AprovarAdocaoDTO dto){
        Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
        adocao.marcarComoAprovada();
        adocao.getPet().marcarComoAdotado();
    }

    public void reprovar(ReprovarAdocaoDTO dto){
        Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
        adocao.marcarComoReprovada(dto.justificativa());
    }
}
```

Portanto, temos um erro acontecendo em tempo de execução, pois a API não conseguiu lidar com a situação e estourou uma exceção. Isso não é bom no desenvolvimento, principalmente em produção, pois retornamos todo o rastro da API, o que podemos considerar como uma falha de segurança. Na sequência, entenderemos melhor sobre essas exceções.
## Transcrição

No último vídeo, conseguimos fazer a população do nosso banco de dados. Conhecemos um pouco sobre a _API_ (Interface de Programação de Aplicações) da Adopet, cadastramos pets na nossa aplicação e cadastramos tutores, que são pessoas que gostariam de fazer solicitações de adoções. Também conhecemos a parte de adoção, realizando os cadastros e as solicitações de adoção.

Quando tentamos aprovar uma adoção que não existe, uma _exception_ foi retornada, junto a um rastro gigantesco com classes e métodos.

## Entendendo o que é uma Stack

Antes de prosseguirmos nos nossos estudos sobre exceções, vamos explorar um conceito importante, de Stack. Para isso, voltaremos ao nosso projeto no _IntelliJ_ e abriremos o diretório de pastas e acessaremos a pasta `Java`. Nela, existe uma classe chamada `PilhaDeExecucao.java`. Vamos dar duplo clique e entrar.

Essa classe, `PilhaDeExecucao.java`, é uma classe genérica criada para entendermos o que acontece quando iniciamos uma aplicação em _Java_.

```csharp
public class PilhaDeExecucao {
    public static void metodo1() {
        System.out.println("[Inicio] - metodo1");

        metodo2();

        System.out.println("[Fim] - metodo1");
    }

    public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = new Usuario(nome: "Vinicius");

            System.out.println(usuario.nome);


        System.out.println("[Fim] - metodo2");
    }

    public static void main(String[] args) {
        System.out.println("[Inicio] - main");

        try {
            metodo1();
        }catch (NullPointerException ex){
            System.out.println("Usuário não encontrado");
        }

        System.out.println("[Fim] - main");
    }
}

class Usuario {
    public String nome;
    public Usuario(String nome) {
        this.nome = nome;
    }
}
```

Mais abaixo no código, temos o método `main`, que é por onde começa a nossa aplicação _Java_. Estamos _printando_ com `System.out.println`. Por exemplo, quando formos iniciar essa nossa aplicação, que será só o arquivo `PilhaDeExecucao.java`, ele vai iniciar na `main`, depois vai chamar o `metodo1()` e não vai executar o fim da `main`, porque entrará no `metodo1()`. O método está na parte de cima do nosso código.

```csharp
public class PilhaDeExecucao {
    public static void metodo1() {
        System.out.println("[Inicio] - metodo1");

        metodo2();

        System.out.println("[Fim] - metodo1");
    }

// Código omitido. 
```

Dentro do `metodo1()`, vamos printar o início `metodo1()`. Em seguida, perceba que há outro método, que é o `metodo2()`. Então ele vai entrar no `metodo2()`, printar o início do `metodo2()`, e fazer uma busca, por exemplo, uma instância de `Usuario`, classe genérica que está no final.

```kotlin
// Código omitido. 

class Usuario {
    public String nome;
    public Usuario(String nome) {
        this.nome = nome;
    }
}
```

Temos só um nome, e ele está recebendo esse nome no construtor.

Voltando para o `metodo2()`, ele vai pegar esse nome e vai _printar_ o nome de Vinícius. Depois finalizará o `metodo2()`, volta para o `metodo1()`, que chamou o `metodo2()`, e printa o fim do `metodo1()`. Por fim, volta para a `main` e finaliza a `main`.

No canto superior direito, vamos parar a _API_ apertando o botão de "stop". Na lateral direita, ao lado do método `main`, temos o botão de "Play", vamos clicar nele e rodar `PilhaDeExecucao.main()`. Ele printou o que está acontecendo:

```css
[Inicio] - main
[Início] - metodo1
[Início] - metodo2
Vinícius 
[Fim] - metodo2
[Fim] - metodo1
[Fim]  - main
```

Portanto, temos:

- O início da `main`;
    
- O início do `metodo1()`;
    
- O `metodo1()` chama o `metodo2()`;
    
- Executa uma regra, algo do nosso código, uma busca no banco de dados, por exemplo.
    
- _Printa_ o nome "Vinicius";
    
- Apresenta o `metodo2()` e o `metodo1()`;
    
- Finaliza a `main`.
    

Para entendermos, a partir de um recurso visual, o que está acontecendo. Estou com um slide aberto e no canto superior esquerdo, está escrito "Console". Quando iniciamos a nossa aplicação, ele vai _printar_ o início do método `main`: "[Inicio] - main".

Na parte direita do nosso visual, há uma espécie de livro que sobre uma mesa. Então, ele inicia o método `main`, que por sua vez, vai executar o que precisa ser executado, por exemplo, alguma regra de negócio ou validação.

A `main`, neste caso, vai chamar o `metodo1()`. Então, o `metodo1()` fica sobre a `main`, ou seja, no topo dessa execução. É como se fosse uma pilha de livros. Seguindo, o `metodo1()` também vai executar o que ele precisa.

Só que o `metodo1()`, ele chama o `metodo2()`. Sendo assim, gora quem está no comando, ou seja, que está sendo executado, é o `metodo2()`. E o `metodo2()` vai executar toda a regra de negócio que ele precisa. Nesse caso, seria criar uma instância: printar o nome "Vinícius". Feito isso, ele vai finalizar o `metodo2()` e volta para o `metodo1()`. Quando o `metodo1()` termina tudo o que precisava fazer, a `main` continua. Neste caso, apenas finaliza.

Tudo isso que acompanhamos acontecendo é uma **stack** (pilha de execução), muito comum em Java e também no mundo da programação. Quando vamos iniciar uma aplicação, ele vai organizar a nossa execução no formato de uma pilha.

## Entendendo a exceção

Agora vamos criar um cenário em que ele vai ao banco de dados e não encontra "Vinicius". Então, vamos passar `null`.

```csharp
// Código omitido. 

    }

    public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;

            System.out.println(usuario.nome);


        System.out.println("[Fim] - metodo2");
    }
```

Então, o objeto `usuario` vai receber `null`. O que vai acontecer quando tentarmos _printar_ o nome desse usuário? Vamos executar e testar. O método `main` foi iniciado e `Inicio` também. O `metodo1()` vai fazer o `Inicio` do `metodo1()` e depois vai entrar no `metodo2`.

No `metodo2()`, ele _printou_ o `Inicio` do `metodo2` Só que, na hora de mostrar o nome desse usuário, o que aconteceu? Ele retornou o `NullPointerException`. Essa exceção é muito comum no mundo _Java_.

Ele não conseguiu encontrar o atributo `nome`, porque o usuário é nulo. Na parte inferior, ele mostra uma pilha de execução. Podemos notar que ele passou pela `main`. Em cima da `main`, temos o `metodo1()`. Acima dele, o `metodo2()`. Então, no `metodo2` aconteceu a exceção.

Portanto, o nosso código não conseguiu lidar com o caso de erro que aconteceu em tempo de execução e a nossa aplicação parou. E isso não é o que queremos. Aprenderemos a tratar esse erro na sequência.

## Transcrição

No último vídeo, estudamos um pouco sobre a pilha de execução do nosso programa. Entendemos como a execução do Java vai encadeando cada um dos métodos. Também estudamos uma exceção sendo lançada e que ocasionou a interrupção do nosso programa. Não é isso que queremos!

Agora, precisamos verificar, ou seja, informar ao Java que queremos que ele execute um código, mas sabendo que ele pode gerar alguma exceção. Antes, vamos acompanhar outra apresentação!

## Entendendo a exceção

Esta apresentação nos ajudará a entender o que de fato aconteceu na exceção. Quando iniciamos o programa, visualizamos a stack representada por um retângulo vazio. Dentro dela, o bloco da `main` iniciando. A `main` chama o `metodo1()` e o fluxo segue normalmente. Depois, ela chama o `metodo2()`.

Lembrando que isso é genérico. Comparando, por exemplo, ao _Spring Boot_ ou outra aplicação, poderíamos imaginar que essa `main` é um controller, portanto o controller chamaria uma classe de _service_ ou outra classe que realizaria uma validação e a pilha de execução vai sendo criada.

No momento em que estamos, no `metodo2()`, ocorreu a exceção. É como se fosse uma bomba. Uma bomba cai no topo da pilha e o `metodo2()` gerou essa bomba. O Java então verificará se o `metodo2()` sabe desarmar essa bomba.

Ele não sabe, então estoura o `metodo2()` e cai para o método que o chamou. O `metodo1()` também não sabe. Então, ele estoura também o `metodo1()` e cai na nossa `main`. A `main` também não sabe resolver. Então, ele estoura a nossa pilha, gerando a exceção. Com isso, a execução do nosso programa é encerrada.

## Resolvendo o problema da exceção com try/catch

Vamos voltar lá para o _IntelliJ_. Precisamos falar para o Java: "sei que esse código é perigoso, porque pode retornar uma exceção." Então, o que vamos fazer? Temos uma palavra reservada, que é `try`. Com ele, informamos ao Java: "tente executar os códigos a seguir." Quais códigos? Precisamos aqui envolver entre chaves: `{}`.

Então, vamos envolver o `System.out.println(usuario.nome)`, que é o usuário tentando imprimir o nome do usuário.

```csharp
// Código omitido. 

 public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;
        try {

            System.out.println(usuario.nome);
        }

        System.out.println("[Fim] - metodo2");
    }

// Código omitido. 
```

O _IntelliJ_ até identa corretamente o código. Então, informamos: "Java, tente executar essa instrução. Se você não conseguir, quero que você capture essa exceção." E podemos utilizar outra palavra reservada, que é `catch`. Que é para capturarmos.

```csharp
// Código omitido. 

 public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;
        try {

            System.out.println(usuario.nome);
        }catch ()

        System.out.println("[Fim] - metodo2");
    }

// Código omitido. 
```

Neste momento, precisamos informar qual é a exceção. Você lembra qual exceção foi lançada quando ocorreu o erro de execução? Vamos voltar no nosso "Run" e analisar. Foi a da classe `NullPointerException`, logo, podemos informar `NullPointerException`.

```csharp
// Código omitido. 

 public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;
        try {

            System.out.println(usuario.nome);
        }catch (NullPointerException)

        System.out.println("[Fim] - metodo2");
    }

// Código omitido. 
```

Como isso é uma classe, esse `catch()` espera que criemos também um objeto. Então, vamos colocar `ex`, que é uma padronização e serve para simbolizar que se trata de uma exceção. Quando ele capturar a exceção, temos que informar para ele executar algo. Então, podemos envolver também entre chaves `{}`.

```csharp
// Código omitido. 

 public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;
        try {

            System.out.println(usuario.nome);
        }catch (NullPointerException ex) {
        
        }

        System.out.println("[Fim] - metodo2");
    }

// Código omitido. 
```

E dentro do bloco `catch()`, temos que informar o que ele faz quando essa exceção for causada. Nesse caso, podemos imprimir outra mensagem. Sendo assim, vamos escrever `System.out.println()` e passar `"Usuário não encontrado"`.

```csharp
// Código omitido. 

 public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;
        try {

            System.out.println(usuario.nome);
        }catch (NullPointerException ex) {
              System.outr.println("Usuário não encontrado");
        }

        System.out.println("[Fim] - metodo2");
    }

// Código omitido. 
```

Recapitulando, estamos informando ao Java: "Tente executar o `usuario.nome`, que é esse código perigoso. Se acontecer uma exceção durante a execução desse código, quero que você capture e imprima 'Usuário não encontrado'".

Dessa forma que programamos, esperamos que o fluxo siga normalmente, informando que o usuário não foi encontrado. Vamos conferir isso acontecendo?

Então, no método `main`, apertaremos o botão de "play" e em "Run 'PilhaDeExecucao.main()'". Ele iniciou a `main`, o `metodo1()`, `metodo2()`, "Usuário não encontrado" e continuou o fluxo normalmente, `metodo2()`, `metodo1()` e o fim da `main`.

Como estamos entendendo essa parte da pilha de execução e de que forma ela vai nos auxiliar? Colocamos o `try-catch` dentro do `metodo2()`, ou seja, no topo da pilha e ele seguiu a execução normalmente. Mas o que acontece se colocarmos esse `try-catch` no método `main`? Vamos fazer isso. Vamos pegar esse bloco do `try` e colocá-lo envolvendo o `metodo1()`.

```csharp
        System.out.println("[Fim] metodo2");
   }

   public static void main(String[] args) {
        System.out.println("[Inicio] main");
         
   try {
        metodo1();
   }catch (NullPointerException ex) { 
          System.out.println("Usuário não encontrado");
    }
          System.out.println("[Fim] main");
  }

/// Código omtido. 
```

Agora, quando inicia o método `main`, estamos falando: "Quando for chamar o `metodo1()`, pode ser que ao longo do caminho aconteça uma exceção. A exceção é a `NullPointerException`. Quando isso acontecer, 'Usuário não encontrado'".

Então, vamos fazer essa execução. Temos o início da `main`, o início do `metodo1()`, o início do `metodo2()`, e deu um problema. Ele não conseguiu executar a parte `System.out.println(Usuario.nome)`.

Então, o `metodo2()` verificou e não soube resolver. Então, chamou o `metodo1()`. O `metodo1()` também não sabe resolver. E caiu na `main`. A `main` sabe resolver. Ela sabe desarmar essa bomba. Então, vemos o `try-catch` acontecendo, "Usuário não encontrado", e depois ele só finaliza a `main`.

Portanto, dependendo de onde colocamos o bloco do `try-catch`, mudamos o que irá acontecer durante nossa aplicação.

Agora que já entendemos sobre o `try-catch`, como utilizá-lo, e entendemos sobre a pilha de execução, conseguimos encontrar melhor onde estão ocorrendo os erros no nosso código. Mas, vocês devem estar se perguntando como fazer isso na API. É o que aprenderemos na sequência!

# Faça como eu fiz: capturando uma NullPointerException

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147708/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147708/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula.

- Navegue pelos arquivos do projeto da **Adopet API**;
- Configure o arquivo `application.properties` com suas credenciais do MySQL;
- Importe o arquivo `Adopet.postman_collection.json` no Postman;
- Realize requisições para cadastrar: _Pet_, _Tutor_ e _Solicitação de adoção_;
- Tente aprovar uma adoção inexistente;
- Simule uma exceção do tipo `NullPointerException` na classe `Pilha de Execucao`;
- Capture a exceção `NullPointerException` na classe `PilhaDeExecucao`.

> Já fez a importação da coleção de requisições no Postman e as requisições necessárias para obter uma `NullPointerException`? Se tiver alguma dúvida, basta clicar em **Opinião da pessoa instrutora**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147708/opinion)

### Navegue pelos arquivos do projeto da Adopet API

Realize o download do projeto e depois abra os arquivos em sua IDE. Dê uma navegada nas pastas de: controller, dto, model, repository, service e também na classe `PilhaDeExecução`. Este é um processo importante para você se ambientar com a API.

### Configure o arquivo `application.properties` com suas credenciais do MySQL

Vimos que o arquivo `application.properties` guarda algumas configurações de aplicação Spring Boot; entre elas, temos as credenciais do banco de dados. Por isso, adicione suas credenciais nas propriedades abaixo:

```ini
spring.datasource.username=ADICIONE_SEU_USUARIO_AQUI
spring.datasource.password=ADICIONE_SUA_SENHA_AQUI
```

### Importe o arquivo `Adopet.postman_collection.json` no Postman

Para você não criar as requisições manualmente, você pode importar as coleções de requisições que estão no arquivo `Adopet.postman_collection.json`, localizado no projeto inicial do curso. Para isso, abra o Postman e selecione a opção `import`, conforme a imagem abaixo:

![alt text: Janela do Postman aberta no Menu “Collections”, destacando a opção “Import”,  localizada no canto superior esquerdo.](https://cdn3.gnarususercontent.com.br/3441-excecoes-topicos-avancados-java/Imagem+01.png)

Na sequência, será aberta uma janela semelhante e você deverá selecionar a opção `files`:

![alt text: Janela de importar arquivo com um destaque aplicado na opção `files`, localizado no centro da tela.](https://cdn3.gnarususercontent.com.br/3441-excecoes-topicos-avancados-java/Imagem+02.png)

Agora navegue até a coleção `Adopet.postman_collection.json`, que se encontra no projeto do curso:

![alt text: Pasta do projeto aberta na IDE do IntelliJ, destacando o arquivo `Adopet.postman_collection.json`.](https://cdn3.gnarususercontent.com.br/3441-excecoes-topicos-avancados-java/Imagem+03.png)

Pronto! Feito isso, já conseguimos importar nossas requisições!

![alt text: Coleção importada no Postman. Na imagem, são exibidas as pastas “Pet”, “Tutor” e “Adoção”, onde em cada uma delas são recebidas requisições do tipo: POST, GET e PUT.](https://cdn3.gnarususercontent.com.br/3441-excecoes-topicos-avancados-java/Imagem+04.png)

### Realize requisições para cadastrar: Pet, Tutor e Solicitação de adoção

No Postman, você deve selecionar as requisições de `Cadastrar Pet`, `Cadastrar Tutor` e `Solicitar Adoção`. Em cada uma delas você deve clicar no botão de `Send` para realizar o envio.

> **Observação:** Lembre-se de que sua API da ADOPET precisa estar rodando para receber as requisições.

![alt text: Tela do Postman com destaques para 3 requisições: Cadastrar Pet, Cadastrar Tutor e Solicitar Adoção, todas localizadas no canto esquerdo. Por fim, no canto superior direito, há um destaque no botão de “Send”.](https://cdn3.gnarususercontent.com.br/3441-excecoes-topicos-avancados-java/Imagem+05.png)

### Tente aprovar uma adoção inexistente

No Postman, use agora a requisição `Aprovar Adoção` e tente passar para o `id` o **valor 2** ou algum valor que você saiba que não existe no seu banco de dados. Dessa forma, conseguimos ver uma exceção sendo lançada e nossa API não conseguindo lidar com ela.

### Simule uma exceção do tipo `NullPointerException` na classe `PilhaDeExecucao`

Vimos na aula, através da classe `PilhaDeExecucao`, como a exceção ocorre e como ela está ligada à pilha de execução do nosso programa Java. Por isso, vamos fazer o Java lançar uma `NullPointerException` quando tentamos acessar algum recurso de um objeto nulo.

No `método 2`, faça uma instância de um objeto da classe `Usuário` com o valor de nulo, conforme o código abaixo:

```csharp
    public static void metodo2() {
        System.out.println("[Inicio] - metodo2");

        Usuario usuario = null;

        System.out.println(usuario.nome);


        System.out.println("[Fim] - metodo2");
    }
```

Feito isso, rode o programa desta classe e veja a exceção sendo lançada.

### Capture a exceção `NullPointerException` na classe `PilhaDeExecucao`

Agora que vimos a exceção sendo lançada e que ela “explodiu” a nossa pilha de execução, devemos usar o bloco `try-catch` para avisar ao Java que vamos tentar executar o código do `método 1` e que, se acontecer a `NullPointerException`, nós sabemos lidar com ela.

O código abaixo mostra a solução feita na aula:

```csharp
    public static void main(String[] args) {
        System.out.println("[Inicio] - main");

        try {
            metodo1();
        }catch (NullPointerException ex){
            System.out.println("Usuário não encontrado");
        }

        System.out.println("[Fim] - main");
    }
```

Na solução em código acima, conseguimos capturar essa exceção e tratá-la no método `main`, que é o método base da nossa pilha de execução. Portanto, ao realizar essa adaptação no método main, nossa aplicação não será interrompida por causa da exceção, pois estamos capturando-a e tratando-a.

 [Discutir no Fórum](https://cursos.alura.com.br/forum/curso-java-excecoes-aprenda-criar-lancar-controlar-excecoes/exercicio-faca-como-eu-fiz-capturando-uma-nullpointerexception/147708/novo)
## Transcrição

Agora que já entendemos mais sobre as sessões e a pilha de execução, aprendemos um cenário onde tentamos mostrar o nome de uma pessoa usuária, mas essa pessoa usuária não existe, sendo nulo. E estamos utilizando o `try-catch` para poder tratar essa `NullPointerException` que ocorreu.

Mas agora, precisamos ver isso no cenário da nossa aplicação Adopet.

### Tratando uma exceção

Abrindo o diretório de arquivos do lado esquerdo do IntelliJ, navegamos para "main > java > adopet.api > controller". Selecionamos o arquivo [AdocaoController](https://github.com/vinelouzada/java-exceptions/blob/main/src/main/java/adopet/api/controller/AdocaoController.java) .

> AdocaoController

```javascript
// código omitido

@PutMapping("/aprovar")
@Transactional
public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto){
this.service.aprovar(dto);
return ResponseEntity.ok().build();
}

// código omitido
```

No _controller_ temos esse _service_ e ocorreu esse erro dentro do método `aprova()r`. Clicamos neste método para entrarmos no método `aprovar()`.

Então, agora estou dentro da classe [AdocaoService.java](https://github.com/vinelouzada/java-exceptions/blob/aula_2/src/main/java/adopet/api/service/AdocaoService.java) e dentro desta classe temos o métodoo `aprovar`.

> AdocaoService

```javascript
// código omitido

public void aprovar(AprovarAdocaoDTO dto){
Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
adocao.marcarComoAprovada();
adocao.getPet().marcarComoAdotado();
}

// código omitido
```

Esse método `aprovar` está fazendo essa busca pelo `idAdocao` no banco de dados e está retornando essa `adocao`, esse objeto. Mas o problema acontece quando tentamos marcar como aprovado (`marcarComoAprovada`) ou então recuperar o pet para poder marcar como adotado (`marcarComoAdotado`).

É neste ponto que está o problema. E vamos fazer como fizemos na nossa pilha de execução. Vamos envolver com um `try-catch`. Qual é o código perigoso aqui? É justamente essa linha 48 e 49, que é quando tentamos utilizar métodos desse objeto de adoção. Portanto, podemos envolver com a palavra reservada `try`.

Lembrando, precisamos aplicar um `catch`, ou seja, capturar essa exceção. Mas nós vamos capturar uma `NullPointerException` nesse caso? Não, porque não é a exceção que está ocorrendo nesse caso.

Por enquanto, temos:

> AdocaoService

```javascript
// código omitido

public void aprovar(AprovarAdocaoDTO dto){
Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
try {
adocao.marcarComoAprovada();
adocao.getPet().marcarComoAdotado();
} catch ()
}

// código omitido
```

Qual é a exceção que está ocorrendo? Voltamos ao _Postman_ para lembrar qual é a exceção que está ocorrendo. Voltei aqui para o _Postman_ e no _Postman_ vemos que a exceção que está ocorrendo é a: `EntityNotFoundException`.

Com essa `EntityNotFoundException` sendo lançada, será que precisamos capturá-la? E sim, vamos fazer isso. Voltamos para o IntelliJ. O Java possui diversas classes para podermos utilizar neste caso, por exemplo, para capturar a exceção.

Aprendemos `NullPointerException`, aprendemos essa `EntityNotFoundException ex`, que é esse objeto, mas há outras classes de exceção, por exemplo, quando tentamos dividir um número por zero, isso não existe, então será lançada também uma exceção, o Java lança essa exceção. Quando capturamos essa exceção `EntityNotFoundException`, o que desejamos fazer?

Podemos, nesse momento, exibir na tela. Digitamos então o `System.out.println()` passando "adoção não encontrada". E, teoricamente, só fazendo essa adaptação do nosso código já deveria funcionar.

> AdocaoService

```javascript
// código omitido

public void aprovar(AprovarAdocaoDTO dto){
Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
try {
adocao.marcarComoAprovada();
adocao.getPet().marcarComoAdotado();
} catch (EntityNotFoundException ex) {
System.out.println("Adoção não encontrada");
}
}

// código omitido
```

Vamos **subir** a API, no canto superior central em "PilhaDeExecucao" alteramos para "ApiApplication" e selecionamos o botão de play do lado direito de "ApiApplication".

Vamos verificar isso acontecendo?

No _Postman_, dentro da aba "Aprovar adoção" iremos disparar essa requisição normalmente. Então, vamos disparar agora essa requisição do ID número . Do lado superior direito clicamos no botão azul "Send" (em português, "enviar").

> Endereço na aba "Aprovar adoção"

```bash
http://localhost:8080/adocao/aprovar
```

Observem que o retorno foi um "Ok" no canto inferior direito:

> 200 OK

Não retornou mais aquela _stack trace_, aquela pilha de execução nossa, com aquela _trace_ enorme. Isso quer dizer que aconteceu, mas não foi mostrado pela resposta.

Por que será que não foi mostrado? Vamos voltar lá para o nosso IntelliJ, observem que ele mostrou no _console_, então não é isso que queremos: **devolver uma resposta para a nossa API**.

E como será que vamos fazer isso?

Lembrando que, como entendemos sobre a pilha de execução, estamos capturando a exceção na _service_. Será que conseguimos também capturar essa exceção que vai ocorrer aqui, lá no método do nosso _controller_? Para tratarmos e devolvermos uma resposta melhor? Sim, mas isso aprenderemos logo na sequência.

Até mais!
## Transcrição

No último vídeo, terminamos conseguindo fazer o tratamento de uma exceção que estava ocorrendo, a `EntityNotFoundException`, nesta rota onde estamos aprovando uma adoção que não existe. Porém, quando disparamos essa requisição para nossa API clicando no botão "Send", observamos que não foi retornada nenhuma mensagem e foi retornado ainda o _status_ `HTTP 200 OK`.

Nesse caso, não é recomendado retornarmos esse `200 OK`. É uma boa prática retornarmos os códigos HTTP corretos. Portanto, vamos fazer essa modificação no nosso código.

## Lidando com exceções

Voltamos ao _IntelliJ_.

> AdocaoService

```csharp
// código omitido

public void aprovar(AprovarAdocaoDTO dto){
Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
try {
adocao.marcarComoAprovada();
adocao.getPet().marcarComoAdotado();
} catch (EntityNotFoundException ex) {
System.out.println("Adoção não encontrada");
}
}

// código omitido
```

No arquivo `AdocaoService`, observamos que fizemos o tratamento dessa exceção nesse código perigoso, onde pode ocorrer a exceção. Mas, assim como aprendemos nas outras aulas, podemos realizar o tratamento dessa exceção no método que chamou esse método `aprovar()`. Ou seja, podemos fazer o tratamento numa classe mais externa, que é a classe [AdocaoController](https://github.com/vinelouzada/java-exceptions/blob/aula_2/src/main/java/adopet/api/controller/AdocaoController.java) .

Faremos isso agora.

Na chamada da linha 48, onde temos o `this.service.aprovar(dto)`, podemos envolver essa parte do código com um `try-catch`. Para isso, inserimos o `try{}` antes de `this.service`. Envolvemos toda essa linha 49, porque lembre-se, nesse cenário, ele vai chamar apenas um método, que seria esse método a aprovar.

Mas, o aprovar da `AdocaoService` poderia chamar outras funcionalidades. Outro método que realiza a validação, outro método que faz, por exemplo, um envio de e-mail. Nesse caso, podemos centralizar essa captura de erros na `Controller`, que é a partir daqui que ela vai chamando os outros métodos.

Colocamos o `catch()` após o fechamento das chaves logo na linha 49, passando o `EntityNotFoundException`. Na sequência, abrimos e fechamos as chaves.

No entanto, nesse caso, podemos verificar na linha 46, que o método a aprovar, ele espera receber um `ResponseEntity` como tipo _string_. Como podemos fazer isso? Na linha 53, possuímos ainda um `ResponseEntity.ok()`. É isso que está retornando aquele `status 200`.

Podemos, então, se conseguirmos capturar essa exceção, ou seja, se essa exceção `EntityNotFound` for lançada, podemos retornar uma `ResponseEntity`. Portanto, dentro das chaves do `catch()` digitamos `return ResponseEntity`.

Se incluirmos um ponto (`.`), observem que ele vai me retornar vários métodos. Podemos optar pelo método `status()`. E esse método `status()`, podemos, nesse caso, retornar qual status HTTP desejamos retornar. Com isso, podemos utilizar a classe `HttpStatus` dentro dos parênteses. Assim, possuímos esse de `NOT_FOUND`.

Nesse caso, ficaria melhor retornarmos um `404`, pois não conseguimos encontrar esse recurso na nossa aplicação. Podemos utilizar o ponto para retornarmos um `body("")`, retornando agora uma _string_.

E podemos até voltar na classe `AdoçãoService` e copiar o que já tínhamos escrito, que era "adoção não encontrada". Copiamos e voltamos para o _controller_ e colamos dentro do `body`. Por fim, inserimos ponto e vírgula, `;`.

> AdocaoController

```less
// código omitido

@PutMapping("/aprovar")
@Transactional
public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto){
try{
this.service.aprovar(dto);
}catch (EntityNotFoundException ex){
return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Adocao não encontrada");
}

return ResponseEntity.ok().build();
}

// código omitido
```

Como estamos tratando essa exceção no método da `AdoçãoController`, podemos tirar da `AdocaoService`, porque na classe mais externa já está fazendo esse tratamento. Então,removemos o trecho do método aprovar da classe `AdocaoService`.

> AdocaoService

```javascript
// código omitido

public void aprovar(AprovarAdocaoDTO dto){
Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
adocao.marcarComoAprovada();
adocao.getPet().marcarComoAdotado();
}

// código omitido
```

Observem que agora o nosso método aprovar aqui, na classe `AdoçãoService`, fica muito mais enxuto.

Vamos testar no _Postman_ para verificar se isso funcionou.

No Postman, disparamos a requisição clicando no botão "send" do lado superior direito.Observem o que aconteceu agora.

> Adocao não encontrada

Ele retornou uma mensagem no _Postman_: "Adoção não encontrada". No canto superior direito desta mensagem, ele retorna um `404 not found`. Bem legal essas modificações que fizemos e elas já refletiram na resposta da nossa API.

## Conclusão

Agora, voltando para o nosso código no arquivo `AdocaoController`, estamos colocando, nesse caso, uma resposta manual. No próximo vídeo, vamos ver como podemos fazer com que ele retorne uma mensagem padrão da exceção. Mas isso, aprenderemos logo na sequência.

## Transcrição

Agora que conseguimos tratar essa exceção na nossa classe de _controller_, fomos empurrando que apenas estávamos colocando esse objeto da exceção, mas não estávamos utilizando-o.

### Explorando o objeto de exceção

Em que sentido podemos utilizar esse objeto? Como ele é um objeto do tipo exceção, ele tem muitos métodos que podemos utilizar para nos auxiliar no desenvolvimento.

Nesse caso, que é o caso onde não queremos que ocorra a `EntityNotFoundException`, que é quando uma adoção não é encontrada, podemos personalizar essa mensagem. Mas se quisermos que essa exceção lance uma mensagem padrão, podemos fazer isso.

Como podemos fazer? No `body()` do arquivo `AdocaoController`, vamos excluir toda essa parte de adoção não encontrada, colocar esse objeto `ex` e apertar um ponto. Veja que ele vai nos retornar muitos métodos. Podemos utilizar esses métodos para auxiliar no desenvolvimento. Um deles que podemos colocar é o `getMessage()`.

> AdocaoController

```kotlin
// código omitido

return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());

// código omitido
```

Usando exceções, em um cenário mais genérico, podemos utilizar isso ao nosso favor. Aprenderemos nos próximos vídeos onde precisaremos capturar uma exceção mais genérica, e esse método vai nos auxiliar bastante. Mas vamos verificar como ele vai ajudar neste caso de quando a entidade não é encontrada.

Voltamos ao _Postman_ para poder disparar essa requisição e novamente clicamos no botão de "Send", nessa parte onde queremos aprovar uma adoção. Observem que retornou uma mensagem padrão.

> Unable to find adopet.api.model.Adocao with id 2

Ele disse que na parte inferior, está escrito em inglês, mas ele fala que não foi capaz de encontrar um modelo de adoção com o ID 2. Ele ainda retornou o status `404`, como configuramos.

Há casos em que teremos uma exceção mais genérica, e podemos utilizar os métodos dessa classe `Exception` para nos auxiliar no desenvolvimento. Voltando para o código, vamos remover o `getMessage()`, só para apertar o ponto, e possuímos outros métodos, como `getStackTrace`, `toString`, `getLocalizedMessage`.

Todos esses métodos têm mais funcionalidades. Vamos deixar aqui no curso "Para saber mais", explicando um pouco sobre a funcionalidade de cada um desses métodos. Mas, por padrão, em linha de regras, utilizamos muito o `getMessage()`.

Mas como não queremos deixar uma mensagem padrão nesse caso, vamos deixar aquela que já estava, que é a de adoção não encontrada. Mas poderíamos muito bem utilizar também o `getMessage()`.

> AdocaoController

```kotlin
// código omitido

return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Adocao não encontrada");

// código omitido
```

Aprendemos agora, no nosso código, que já estamos capturando as exceções nesse método de `aprovar()`. Mas todas essas exceções que estamos recebendo, é o _Spring Boot_ que está lançando. Como será que podemos fazer para lançar exceções? Isso descobrimos logo na sequência.

# Faça como eu fiz: tratando exceções na API

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147713/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147713/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula.

- Use o bloco `Try-Catch` para capturar a exceção que está acontecendo no método `aprovar()` da classe `AdocaoService`;
- Use o bloco `Try-Catch` para capturar a exceção que está acontecendo no método `aprovar` da classe `AdocaoController`;
- Use o objeto de exceção para exibir a mensagem do ocorrido.

> Já fez as alterações necessárias para tratar exceções no nosso código? Se tiver alguma dúvida, basta clicar em **Opinião do instrutor**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147713/opinion)

### Use o bloco `Try-Catch` para capturar a exceção que está acontecendo no método `aprovar()` da classe `AdocaoService`

Assim como vimos na aula anterior, podemos capturar e tratar exceções que ocorrem no nosso código. E não é diferente em uma API feita com Spring Boot.

No método `aprovar` vamos envolver o código perigoso que está lançando a exceção de `EntityNotFoundException`com Try-Catch:

```csharp
public void aprovar(AprovarAdocaoDTO dto){
        Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());	        

       try{
            adocao.marcarComoAprovada();
            adocao.getPet().marcarComoAdotado();
        }catch (EntityNotFoundException ex){
            System.out.println("Adocao não encontrada");
        }

    }
```

Pronto! Agora conseguimos contornar o problema de tentar aprovar uma adoção que não existe.

### Use o bloco `Try-Catch` para capturar a exceção que está acontecendo no método `aprovar` da classe `AdocaoController`

Imagine um cenário no qual vamos precisar usar mais `try-catches` durante a classe service. Não é muito prático, pois vamos precisar tornar o código mais poluído visualmente devido ao bloco de declarações necessários.

E lembre-se de que se o método atual do topo da pilha de execução não consegue lidar com a situação, já que ele irá chamar o método que o invocou. Ou seja, podemos tratar essa exceção na classe `Controller`.

No método `aprovar()` da classe `AdocaoController` implemente o código abaixo:

```less
    @PutMapping("/aprovar")
    @Transactional
    public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto){

        try{
            this.service.aprovar(dto);
        }catch (EntityNotFoundException ex){
            return ResponseEntity.badRequest().body("Adocão não encontrada");
        }

        return ResponseEntity.ok().build();
    }
```

Então, quando a exceção for lançada no método `aprovar()` da classe `AdocaoService`, ela não vai executar nada da sua regra de negócio, ela irá procurar o método que a invocou para resolver a exceção.

### Use o objeto de exceção para exibir a mensagem do ocorrido

Podemos usar o objeto que foi criado da exceção para retornar uma mensagem, da seguinte maneira:

```less
@PutMapping("/aprovar")
    @Transactional
    public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto){

        try{
            this.service.aprovar(dto);
        }catch (EntityNotFoundException ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
        return ResponseEntity.ok().build();
    }
```

Agora toda vez que essa exceção ocorrer, teremos uma mensagem descrevendo-a.

## Transcrição

Para dar continuidade ao conteúdo do nosso curso, vamos simular uma demanda fictícia.

## Adicionando validações

Começaremos com o _Trello_ aberto. Caso não saiba, o Trello é uma plataforma onde podemos gerenciar equipes e atividades. Muitos times de desenvolvimento o utilizam para organizar quais atividades serão desenvolvidas na semana.

No canto esquerdo, temos uma coluna chamada "_Backlog_". São tarefas que precisamos realizar. Nessa coluna, há um _card_ chamado "[Implementar validações] solicitar adoção". Clicando nele, encontramos uma descrição do que precisamos executar:

> O sistema não deve permitir a **solicitação de adoção** nos seguintes casos:
> 
> - Pet **já adotado**;
> - Pet com solicitação de **adoção em andamento**;
> - Tutor com **2 adoções aprovadas**.

Vamos trabalhar agora com o método para solicitar adoção. Vamos copiar os casos mencionados na descrição e retornar ao _IntelliJ_. Na classe `AdocaoService`, temos o método `solicitar()` que precisamos utilizar. Ao realizar uma solicitação, devemos garantir algumas validações para não comprometer os dados do sistema.

Após a declaração do `tutor`, vamos colar as condições com comentários para que possamos fazer as verificações necessárias.

> _`AdocaoService.java`:_

```java
public void solicitar(SolicitacaoDeAdocaoDTO dto){
    Pet pet = petRepository.getReferenceById(dto.idPet());
    Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

    //Pet já adotado;

    //Pet com solicitação de adoção em andamento;

    //Tutor com 2 adoções aprovadas.

    adocaoRepository.save(new Adocao(tutor,pet, dto.motivo()));
}
```

### Pet já adotado

A primeira verificação será a de **pet já adotado**. Na linha 39, fazemos uma busca pelo ID de um pet (`idPet()`). Com o objeto `pet`, podemos utilizar o método `getAdotado()` para nos auxiliar na verificação.

Para verificar se o pet foi adotado, faremos um `if`. Se o pet já tiver sido adotado, lançaremos uma **exceção**. Mas antes, vamos realizar todas as verificações necessárias.

```java
//Pet já adotado;
if(pet.getAdotado()){

}
```

### Pet com solicitação de adoção em andamento

Sobre **pet com solicitação de adoção em andamento**, precisamos fazer uma busca no banco de dados na tabela de adoção para checar se o pet solicitado tem uma adoção em andamento. Nesse caso, podemos usar a `adocaoRepository`. No início da classe `AdocaoService`, já fizemos a inclusão dessa classe.

Podemos escrever uma _query_ utilizando o _Spring Data JPA_, como `existsPetIdAndStatus()`. Com `adocaoRepository.existsByPetIdAndStatus()`, pedimos para o Spring Data JPA fazer uma busca e verificar o ID do pet (`dto.idPet()`) e o status de adoção (`StatusAdocao.AGUARDANDO_AVALIACAO`) passados como parâmetros.

Dessa forma, conseguimos verificar se existe uma adoção em andamento para o pet em questão.

Como `existsByPetIdAndStatus()` retorna um booleano, podemos adicionar ao início da linha uma variável `Boolean` chamada `petAdocaoEmAndamento`. Se o pet estiver com adoção em andamento (`if(petAdocaoEmAndamento)`), haverá alguma ação.

```java
//Pet com solicitação de adoção em andamento;
Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

if(petAdocaoEmAndamento){

}
```

Nesse momento, o método `existsByPetIdAndStatus()` reclamará um erro, pois na classe `AdocaoRepository` ele ainda não existe, então precisamos criá-lo. Vamos usar o IntelliJ para nos auxiliar: após clicar sobre o método, teclaremos o atalho "Alt + Enter" e selecionaremos a opção de criar método ("_Create method 'existsPetIdAndStatus' in 'AdocaoRepository'_").

> _`AdocaoRepository.java`:_

```java
public interface AdocaoRepository extends JpaRepository<Adocao,Long> {

    Integer countByTutorId();

    Boolean existsByPetIdAndStatus(Long aLong, StatusAdocao statusAdocao);
}
```

### Tutor com duas adoções aprovadas

Seguindo a mesma linha de raciocínio que usamos para o pet com solicitação em andamento, podemos adicionar a verificação se o **tutor tem duas adoções aprovadas**. Nesse caso, teremos um `Integer` chamado `tutorAdocoes`, que recebe `adocaoRepository.` seguida do método `countByTutorIdAndStatus()`. Passaremos como primeiro parâmetro `dto.idTutor()` e como segundo o `StatusAdocao.APROVADO`.

> Da mesma forma que fizemos anteriormente, precisamos criar o método `countByTutorIdAndStatus()` na classe `AdocaoRepository`.
> 
> ```java
> Integer countByTutorIdAndStatus(Long aLong, StatusAdocao statusAdocao);
> ```

Se o número de adoções aprovadas for igual a dois (`if (tutorAdocoes == 2)`), precisamos lançar uma exceção.

> _`AdocaoService.java`:_

```java
//Tutor com 2 adoções aprovadas.
Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

if (tutorAdocoes == 2){

}
```

## Conclusão

Na sequência, daremos continuidade ao nosso processo!

## Transcrição

Agora que conseguimos adicionar todas as verificações, precisamos **lançar exceções**, porque esses casos comprometem a integridade e não estão de acordo com as regras de negócio da Adopet.

## Lançando exceções

> Antes de dar continuidade, como foi o _IntelliJ_ que criou os métodos `existsByPetIdAndStatus()` e `countByTutorIdAndStatus()`, ele usou como primeiro parâmetro o `aLong`. Para manter o código mais organizado, podemos padronizar para `idPet` no primeiro e `idTutor` no segundo.

> _`AdocaoRepository.java`:_

```java
Boolean existsByPetIdAndStatus(Long idPet, StatusAdocao statusAdocao);
Integer countByTutorIdAndStatus(Long idTutor, StatusAdocao statusAdocao);
```

### Pet já adotado

De volta para a classe `AdocaoService`, quando o `if` verificar que um pet já está adotado, queremos lançar uma exceção. Para isso, podemos utilizar uma palavra reservada muito comum em várias linguagens de programação: `throw`. Com ela, dizemos que vamos lançar uma exceção.

Como uma exceção é uma classe, podemos usar `throw new` e o IntelliJ já sugere exceções. Nesse caso, vamos escolher a opção `IllegalStateException()`. Podemos passar uma mensagem no construtor dessa classe, algo como "Pet já adotado".

> _`AdocaoService.java`:_

```java
//Pet já adotado;
if(pet.getAdotado()){
    throw new IllegalStateException("Pet já adotado");
}
```

### Pet com solicitação de adoção em andamento

Agora que fizemos essa validação e lançamos essa exceção, precisamos também lançá-la na verificação abaixo, quando o pet está com uma adoção em andamento. Podemos utilizar novamente o `throw new` e agora escolher a opção `UnsupportedOperationException()`. Vamos inserir a mensagem "Pet com adoção em andamento".

> _`AdocaoService.java`:_

```java
//Pet com solicitação de adoção em andamento;
Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

if(petAdocaoEmAndamento){
    throw new UnsupportedOperationException("Pet com adocão em andamento");
}
```

### Tutor com duas adoções aprovadas

Na terceira verificação, quando o tutor já excedeu o limite de adoções aprovadas, podemos fazer novamente um `throw new IllegalStateException()`, agora com a mensagem "Tutor com máximo de adoções".

> _`AdocaoService.java`:_

```java
//Tutor com 2 adoções aprovadas.
Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

if (tutorAdocoes == 2){
    throw new IllegalStateException("Tutor com máximo de adocoes");
}
```

### Capturando as exceções

Com isso, lançamos todas as exceções. Como estamos lançando, precisamos capturá-las. Podemos fazer a captura na classe `AdocaoController`. Então, vamos até o arquivo `AdocaoController.java`.

No método `solicitar()`, quando temos a linha 41 em que `this.service.solicitar()` pede `dados`, podemos envolver com um bloco _try…catch_. Dessa forma, indicamos que nessa parte pode ser lançada uma exceção. No bloco `try` teremos o `this.service.solicitar(dados)`, e no `catch` vamos capturar entre parênteses a `IllegalStateException ex`.

Feito isso, vamos abrir e fechar as chaves, copiar o `return ResponseEntity` da linha 56, usado no método `aprovar()`, e colar em `solicitar()`. Nesse caso, podemos retornar o status como `Http.Status.BAD_REQUEST` e pegar a mensagem com `getMessage()` do objeto.

> _`AdocaoController.java`:_

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados){

    try {
        this.service.solicitar(dados);
    }catch (IllegalStateException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    return ResponseEntity.ok("Adoção solicitada com sucesso!");
}
```

### Testando no _Postman_

Após essas adaptações, quando fizermos a solicitação de um pet que já foi adotado, queremos receber a mensagem "Pet já adotado". Vamos testar? Para isso, acessaremos o _Postman_.

Observe que, na rota GET de buscar todas as adoções, temos o pet 1 que já foi adotado, conforme indicado pelo `status` "APROVADO". Vamos buscar todos os pets para confirmar?

> GET [http://localhost:8080/pets](http://localhost:8080/pets)

> **Retorno da requisição:**

```json
[
    {
        "id": 1,
        "nome": "Lua",
        "idade": 5,
        "tipo": "GATO",
        "adotado": true,
        "imagem": "d0fe3800-7c9d-4a84-b937-16f7220a10b3.jpg"
    }
]
```

Note que o pet cadastrado já está com o valor `true` para `adotado`, o que significa que esse pet já foi adotado. Vamos fazer uma solicitação de adoção para esse pet para testar. Na requisição POST de solicitar adoção, vamos enviar uma requisição com o `idPet` igual a 1 e o `idTutor` também igual a 1.

> POST [http://localhost:8080/adocao](http://localhost:8080/adocao)

```json
{
    "idPet": 1,
    "idTutor": 1,
    "motivo": "Um motivo qualquer"
}
```

No Postman, é retornado um status 400 _Bad Request_ e recebemos a mensagem "Pet já adotado".

No código, nós lançamos duas exceções diferentes. Se pegarmos um pet com adoção em andamento, precisamos fazer essa validação. Vamos testar para conferir se é capturada a exceção?

Cadastraremos um novo pet e mudaremos apenas o nome para "Miau".

> POST [http://localhost:8080/pets](http://localhost:8080/pets)

```json
{"nome": "Miau",""idade": 5,"tipo": "GATO","porte": "MÉDIO"}
```

Após disparar a requisição, vamos solicitar a adoção do pet número 2, o segundo que cadastramos no banco de dados.

> POST [http://localhost:8080/adocao](http://localhost:8080/adocao)

```json
{
    "idPet": 2,
    "idTutor": 1,
    "motivo": "Um motivo qualquer"
}
```

Como retorno, temos a mensagem "Adoção solicitada com sucesso!".

E se tentarmos fazer outra solicitação de adoção para o mesmo pet e o mesmo tutor? Será retornado um status 500 e toda a _stack trace_ (pilha de erros), não conseguindo capturar a exceção.

O que será que aconteceu? Se voltarmos ao código e analisarmos a classe `AdocaoController`, notamos que é capturada apenas uma exceção. Lembre que, na classe `AdocaoService`, no método `solicitar()`, lançamos outras exceções, não apenas uma.

## Conclusão

Como fazemos para **capturar duas exceções**? Descobriremos isso na sequência!


## Transcrição

Vimos que, quando tentamos fazer a solicitação de uma adoção de um pet, sendo que esse pet já está com uma adoção em andamento e lançamos uma `UnsupportedOperationException`, ela não é capturada em `AdocaoController`.

Isso acontece porque capturamos apenas exceções do tipo `IllegalStateException`. O que fazemos nesse caso para **capturar mais de uma exceção**?

## Lidando com múltiplas exceções

Podemos utilizar outro bloco `catch`. Então, vamos adicionar outro `catch` logo após o fechamento do último na linha 45, para o qual passaremos `UnsupportedOperationException ex`.

Feito isso, podemos pegar o mesmo código de `return` da linha 44 e colar nesse novo `catch`, pois em cada um desses casos, pode ocorrer uma exceção. A depender do tipo de exceção lançada, podemos ter um tratamento diferente nos blocos `catch`.

> _`AdocaoController.java`:_

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados){

    try {
        this.service.solicitar(dados);
    }catch (IllegalStateException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }catch (UnsupportedOperationException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    return ResponseEntity.ok("Adoção solicitada com sucesso!");
}
```

Isso já resolveria o problema. Porém, note que temos repetição no código, o que não é muito interessante. Então, podemos utilizar o operador _pipe_ (`|`). Com ele, indicamos que queremos que seja capturada a exceção `IllegalStateException` e também a `UnsupportedOperationException`. Assim, podemos remover o bloco `catch` redundante.

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados){

    try {
        this.service.solicitar(dados);
    }catch (IllegalStateException | UnsupportedOperationException  ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    return ResponseEntity.ok("Adoção solicitada com sucesso!");
}
```

Essas são duas formas: podemos utilizar um _**multi-catch**_, com vários blocos `catch`, ou então o operador pipe. Vamos agora testar novamente no _Postman_ para conferir se não vai mostrar toda a _stack trace_ e vai retornar o que esperamos.

### Testando no _Postman_

De volta ao Postman, temos o pet de número 2, tutor 1, e vamos fazer a solicitação de adoção novamente.

> POST [http://localhost:8080/adocao](http://localhost:8080/adocao)

```json
{
    "idPet": 2,
    "idTutor": 1,
    "motivo": "Um motivo qualquer"
}
```

Agora é retornada a mensagem "Pet com adoção em andamento". Conseguimos finalizar nossa demanda.

## Conclusão

Nesta aula, abordamos muita coisa interessante. Conseguimos capturar mais de uma exceção através do bloco try…catch e lançar as nossas exceções próprias. Vimos que isso é muito importante para proteger nossa aplicação em diversas situações, para não comprometer os dados.

De volta ao _Trello_, vamos abrir novamente o cartão. Conseguimos concluir a demanda destinada para nós, de realizar as validações se um pet já foi adotado, se a solicitação está em andamento e se o tutor está com duas adoções aprovadas.

Bem legal, não é? Vimos muita coisa bacana e entendemos na prática como fazer isso em um cenário mais real, utilizando essas exceções e tratando-as.

Porém, de volta ao código, na classe `AdocaoService`, você concorda comigo que as exceções estão muito genéricas? `IllegalStateException()`, `UnsupportedOperationException()`, cada uma dessas exceções poderia ter um nome mais adequado para determinada situação. Como podemos **criar nossas próprias exceções**? Vamos descobrir no próximo vídeo!
# Faça como eu fiz: lançando exceções na aplicação

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147719/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147719/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula.

- Siga a demanda do Trello para realizar as implementações solicitadas;

- O sistema não deve permitir a solicitação de Adoção nos seguintes casos:
    - Pet já adotado;
    - Pet com solicitação de adoção em andamento;
    - Tutor com 2 adoções aprovadas.

- Lance exceções quando as validações falharem na solicitação de uma adoção
    
- Lide com múltiplas exceções.
    

> Já fez as alterações necessárias para isso? Se tiver alguma dúvida, basta clicar em **Opinião do instrutor**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147719/opinion)

### Siga a demanda do Trello para realizar as implementações solicitadas

- **Pet já adotado**

No método `solicitar()` da `AdocaoService` precisamos verificar se um Pet já foi adotado, para isso podemos usar o método `getAdotado()` do objeto Pet. Da seguinte maneira:

```markdown
        if(pet.getAdotado()){

        }
```

- **Pet com solicitação de adoção em andamento**

No método `solicitar()` da `AdocaoService` precisamos verificar se o pet que estamos tentando adotar já possui alguma adoção em andamento. Para isso, podemos realizar uma busca no banco de dados.

Podemos usar os poderes da Spring Data JPA para fazer a busca no banco e realizar uma verificação com um `if`.

```java
Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){

        }
```

Agora, precisamos criar o método `existsByPetIdAndStatus()` na classe AdocaoRepository:

```kotlin
Boolean existsByPetIdAndStatus(Long idPet, StatusAdocao statusAdocao);
```

- **Tutor com 2 adoções aprovadas**

No método `solicitar()` da `AdocaoService`, precisamos verificar se o tutor que está tentando adotar já possui 2 adoções aprovadas. Para isso, podemos realizar uma busca no banco de dados.

Usando os poderes da Spring Data JPA, temos:

```markdown
Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){

        }
```

Agora, precisamos criar o método `countByTutorIdAndStatus()` na classe AdocaoRepository:

```scss
   Integer countByTutorIdAndStatus(Long idTutor, StatusAdocao statusAdocao);
```

### Lance exceções quando as validações falharem na solicitação de uma adoção

Agora que já realizamos as condicionais das implementações das validações, conforme o código abaixo:

```markdown
        if(pet.getAdotado()){

        }

        Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){

        }

        Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){

        }
```

Vamos lançar exceções padrão do Java e podemos utilizar as palavras reservadas `throw new` além da classe de exceção:

```java
        if(pet.getAdotado()){
            throw new IllegalStateException("Pet já adotado");
        }

        Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){
            throw new UnsupportedOperationException("Pet com adocão em andamento");
        }

        Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){
            throw new IllegalStateException("Tutor com máximo de adocoes");
        }
```

Pronto! Agora conseguimos lançar exceções quando alguma dessas validações falharem, fazendo este método chamar `aprovar()` da classe Controller para resolver o problema.

### Lide com múltiplas exceções

Precisamos lidar com duas exceções: `IllegalStateException` e `UnsupportedOperationException`. Faremos isso informando ao bloco `try-catch` para capturar e lidar com elas.

Podemos utilizar o recurso de _multi-catch_:

```kotlin
        try {
            this.service.solicitar(dados);
        }catch (IllegalStateException ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }catch (UnsupportedOperationException  ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
```

Ou utilizar o _operador pipe_:

```kotlin
        try {
            this.service.solicitar(dados);
        }catch (IllegalStateException | UnsupportedOperationException  ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
```

Ambas as formas são válidas. Vale lembrar que, dependendo do tipo de exceção, pode ser mais apropriado o uso do **multi-catch** para realizar um tratamento diferente, não apenas retornar uma mensagem.
## Transcrição

No último vídeo, terminamos com um questionamento de que estamos lançando exceções, só que nós estamos utilizando exceções de classes padrões do Java. Nesse momento, seria mais interessante criarmos a nossa própria exceção. Mas como podemos criar a nossa própria exceção?

## Entendo a hierarquia das classes de exceção

Antes de vermos como fazer isso, vamos analisar a classe `IllegalStateException()`. Para isso, com o "Ctrl" pressionado, clicamos com o botão esquerdo do mouse no nome da classe. Com isso, abrimos a classe no IntelliJ. Podemos ver que temos uma classe em Java que utiliza herança, estendendo da classe `RuntimeException`.

Usando o mesmo comando de "Ctrl + Clique do mouse", vamos abrir a classe `RuntimeException`. Observamos que essa classe também usa herança, estendendo da classe `Exception`. Novamente usamos "Ctrl + Clique do mouse" para acessar a classe `Exception`, que também usa o recurso da herança para estender a classe `Throwable`, criando algo "jogável", no sentido de arremessar. Entrando na classe `Throwable`, percebemos que ela implementa a classe `Serializable`. Sendo assim, a classe `Throwable` é a que está no começo da herança.

Trouxe um slide para mostrar esse funcionamento, onde, na parte inferior, temos duas classes de exceções padrões do Java: **`NullPointerException`**, que vimos nas primeiras aulas, e **`ArithmeticException`**, que ocorre durante erros de cálculo aritmético. Essas classes herdam de **`RuntimeException`**, que por sua vez herda de **`Exception`**, que herda de **`Throwable`**, que indica algo que vamos "jogar".

![Hierarquia de classes de exceção em Java com fundo branco sobreposto com linhas de grade esféricas no lado direito. Na base estão "NullPointerException" e "ArithmeticException". De cada um sai uma seta par acima, que se conecta a "RuntimeException". De "RuntimeException" sai uma seta que leva a "Exception", de onde sai uma seta para "Throwable", que está no topo da hierarquia. Todos os elementos estão em caixas verdes com texto preto.](https://cdn1.gnarususercontent.com.br/1/795715/c66811fd-0d5c-472c-8f84-55e0a8de15b3.png)

Isso significa que, para termos uma classe de exceção própria, ela precisa usar a herança da `RuntimeException`, ou seja, estendê-la. Vamos fazer isso.

## Criando uma classe de exceção própria

Retornando ao código, fecharemos todas as classes que abrimos para entender a hierarquia. Agora, na coluna da esquerda do IntelliJ, abrimos o diretório de arquivos e navegaremos para "src > main > java > adopet.api". Para deixarmos os pacotes mais dividido, criaremos um novo pacote chamado "exception", contendo as exceções personalizadas que criaremos.

Então clicamos com o botão direito em "adopet.api" e selecionaremos para "_New > Package_". Na janela de nomeação, escreveremos "_exception_". Clicando com o botão direito nessa pasta, selecionaremos "_New > Java Class_". Na janela de nomeação, escolheremos "_Class_" (Classe) e nomearemos de "_**AdocaoException**_", uma vez que estamos trabalhado com adoção, certificando-nos de que o nome está correto. Uma vez que a classe foi criada, podemos minimizar a coluna de diretórios.

Lembrando que, como criamos uma classe normal, precisamos usar a herança para fazer com que ela seja uma classe de exceção. Para isso, após o nome da classe, antes da abertura de chaves, escreveremos `extends RuntimeException`. Reparem que o IntelliJ, inclusive, auxilia nisso, fazendo a sugestão dessa classe. Após isso, lembrem-se de que, quando temos uma exceção, normalmente passamos uma mensagem no construtor. Portanto, também posso criar um construtor na nossa `AdocaoException` para receber essa mensagem.

Para isso, dentro das chaves, escrevemos `public AdocaoException(String mensagem){}`. Dentro das chaves desse construtor que acabamos de criar, chamaremos a `super()`, que é o construtor da classe mãe, onde passaremos a mensagem, ou seja, `super(mensagem)`.

```java
package adopet.api.exception;

public class AdocaoException extends RuntimeException{
    public AdocaoException(String mensagem){
        super(mensagem);
    }
}
```

Se entrarmos na classe `RuntimeException`, usando o comando "Ctrl + Clique do mouse" sobre o nome da classe, podemos observar que ela possui um construtor semelhante ao que criamos, chamando o construtor das classes-mãe. Portanto, feito esse código, concluímos a criação da nossa exceção.

Na sequência, voltaremos para lançar essa exceção e faremos uma pequena discussão.
## Transcrição

Agora criamos nossa exceção `AdocaoException` e gostaríamos de lançá-la. Então, vamos para a classe `AdocaoService`, onde estamos realizando o lançamento dessas exceções. Dentro da função `solicitar()`, na linha `throw new IllegalStateException()`, mudaremos a exceção para `AdocaoException`. Inclusive, quando começamos a escrever `Adocao`, o IntelliJ sugere a importação do `AdocaoException`, então podemos apenas selecionar e pressionar "Enter".

```java
// código omitido
import adopet.api.exception.AdocaoException;

        //Pet já adotado;
        if(pet.getAdotado()){
            throw new AdocaoException("Pet já adotado");
        }
```

Em seguida, podemos copiar o `AdocaoPet` e colar nas outras validações, onde também estamos fazendo o lançamento das exceções `UnsupportedOperationException` e `IllegalStateException`. Então, usamos o "Ctrl + V" nessas duas linhas.

```java
public void solicitar(SolicitacaoDeAdocaoDTO dto){
        Pet pet = petRepository.getReferenceById(dto.idPet());
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

        //Pet já adotado;
        if(pet.getAdotado()){
                throw new AdocaoException("Pet já adotado");
        }

        //Pet com solicitação de adoção em andamento;
        Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){
                throw new AdocaoException("Pet com adoção em andamento");
        }

        //Tutor com 2 adoções aprovadas.

        Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){
                throw new AdocaoException("Tutor com máximo de adoções");
        }

        adocaoRepository.save(new Adocao(tutor, pet, dto.motivo()));
}

public void aprovar(AprovarAdocaoDTO dto){
        Adocao adocao = adocaoRepository.getReferenceById(dto.idAdocao());
        adocao.marcarComoAprovada();
        adocao.getPet().marcarComoAdotado();
}
```

Agora, estamos lançando nossa própria exceção, a `AdocaoException`. Notem que as mensagens continuam as mesmas, por exemplo "Pet já adotado". O compilador do Java, no IntelliJ, não indicou nenhum erro, então está tranquilo. O único detalhe é que precisamos acessar o `AdocaoController.java`, porque estamos lançando uma exceção, então precisamos capturá-la caso ocorra.

No `AdocaoController.java`, ao solicitarmos uma adoção, dentro da anotação `@PostMapping,`, chamamos o método `solicitar()` da `service`, onde podem ocorrer duas exceções, que substituímos pela nossa: a `IllegalStateException` e a `UnsupportedOperationException`. Como essas exceções não existem mais no nosso código, precisamos substituí-las pela `AdocaoException`.

> Arquivo `AdocaoController.java`

```java
//código omitido

@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados){

        try {
                this.service.solicitar(dados);
        }catch (AdocaoException ex){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }

//código omitido
```

Teoricamente, com essas modificações, o código deve funcionar como antes, ou seja, se tentarmos fazer uma solicitação que não siga as regras de negócio adicionadas na `AdocaoService`, uma exceção deve ser lançada. Então vamos fazer um teste no Postman. E ao abrirmos o Postman, nos deparamos com um teste que resultava em erro:

```json
{
    "idPet": 2,
    "idTutor": 1,
    "motivo": "Um motivo qualquer"
}
```

Já tínhamos um erro ao fazer a solicitação do pet de ID 2. Vamos disparar essa requisição novamente, clicando no botão "_Send_" (Enviar), no lado direito da barra de endereço da requisição POST. Ele retornou um _Bad Request_ (Solicitação inválida), que é um erro 400 e a mensagem "_Pet com adoção em andamento_". Isso porque já tínhamos feito a solicitação desse pet, e ele está em andamento, ou seja, precisamos aprovar ou reprovar. Nossa regra de negócio não permite tentar adotar um pet com uma adoção em andamento, então o mesmo cenário permanece.

Voltando ao IntelliJ, agora que capturamos nossa exceção `AdocaoException`, lembrem-se que mencionei que levantaríamos uma pequena discussão sobre a criação de exceções. Por exemplo, criamos a `AdocaoException`, que é uma exceção que engloba todo o serviço de adoção, mas poderíamos criar uma exceção para cada um dos cenários.

Particularmente, eu prefiro essa segunda opção, onde criaríamos, por exemplo, a classe de exceção `PetAdotadoException`, para exceção com a mensagem "Pet já adotado". Acho essa forma muito mais descritiva, mas você pode fazer isso para praticar mais seus conhecimentos de criação de classe de exceção, criando suas próprias exceções para cada um desses cenários, como `PetJaAdotadoException` e `PetEmAndamentoException`.

Agora que levantei esse questionamento, temos dois tipos de exceções em Java, e vamos descobrir mais sobre isso a seguir.

## Transcrição

No último vídeo, terminamos com o questionamento de que existem dois tipos de exceções no Java. Essas exceções que estamos lançando são exceções _unchecked_ (não verificadas).Isso significa que são exceções que não são verificadas pelo compilador do Java. Sabemos que isso pode ter ficado um pouco confuso, mas vamos mostrar um exemplo de outro tipo de exceção para você entender melhor essas diferenças.

Abrindo as pastas do projeto no IntelliJ, navegaremos para "src > main > java > adopet.api > controller > `PetController.java`". Nesse arquivo, possuímos um método responsável por cadastrar um pet, que é o `cadastrar()`. Dentro desse método, chamamos a classe `service.cadastrar()`.

Usando o atalho "Ctrl + Clique do mouse" no `cadastrar()` do `service.cadastrar()`, encontramos outro método, que é da classe chamada `ImageStorageService`, que está no arquivo `PerService.java`. Essa classe lida com o armazenamento de imagens. Lembrem-se que, no nosso sistema, precisamos passar a imagem do pet ao cadastrá-lo. O método `upload()` que está dentro desse `cadastrar()` é o responsável por receber esse _upload_.

Pressionando "Ctrl + Clique do mouse" sobre o método `upload()`, acessamos esse método, que está dentro do arquivo `ImageStorageService.java`. Logo notamos que já existe um bloco "_try-catch_" dentro do método `upload()` e, se for uma pessoa curiosa, deve estar se perguntando porque não usamos esse bloco ao longo do curso, então faremos um teste. Vamos retirar esse bloco "_try-catch_" e deixar apenas o conteúdo do `try`, onde pegamos a imagem e fazemos a transferência dela para um local no nosso projeto.

```java
//código omitido

public String upload(MultipartFile imagem) {

    String novoNome = this.gerar NovoNome(imagem.getOriginalFilename());

    String caminhoCompletoDoArquivo PASTA UPLOAD + novoNome;

    imagem.transferTo(new File(caminhoCompletoDoArquivo));

    return novoNome;
}

//código omitido
```

Percebam que o IntelliJ já nos informa a existência de um erro, sublinhando o `transferTo()` de vermelho. Passando o mouse sobre esse erro, descobrimos que indica que não estamos lidando com a exceção `IOException`. Nesse caso, temos outro tipo de exceção: a **_checked_ (verificada)**, que são as exceções verificadas pelo compilador do Java. No caso, o Java verifica se estamos fazendo o tratamento dessa exceção e nos obriga a usar o bloco "_try-catch_" ou a lançar esse problema para o método que chamou o `upload()`.

Não queremos tratar essa exceção usando o bloco "_try-catch_", então, na assinatura do método `public String upload()`, escreveremos `throws IOException`, usando a palavre reservada. Assim indicamos que vamos lançar para "cima" a exceção `IOException`, que é a exceção que pode ser lançada nesse trecho do código.

```java
//código omitido

public String upload(MultipartFile imagem) throws IOException {

    String novoNome = this.gerar NovoNome(imagem.getOriginalFilename());

    String caminhoCompletoDoArquivo PASTA UPLOAD + novoNome;

    imagem.transferTo(new File(caminhoCompletoDoArquivo));

    return novoNome;
}

//código omitido
```

Dessa forma, não é mais requisitado usar o bloco "_try-catch_". Em vez disso, temos a observação do IntelliJ de um problema relatado na chamada do método `upload()`. Ao clicarmos no aviso "_1 related problem_", acima da linha de declaração do método, voltamos para chamada do `upload()` no `cadastrar()`, do arquivo `PetService.java`.

Foi o `PetService.java` quem chamou o método da `ImageStorageService` e, ao passarmos o mouse sobre o `upload()`, que está sublinhado de vermelho, recebemos a informação de que não estamos lidando com a exceção. Portanto, precisamos tratar a exceção envolvendo o bloco _try-catch_.

Podemos adicionar `throws` na assinatura do método `cadastrar()`, ou seja, podemos continuar lançando para "cima" quem irá tratar a exceção, ou podemos tratar agora. Neste momento, vamos adicionar essa exceção na assinatura do método, clicando no link "_Add exception to method signature_" (Adicionar exceção a assinatura do método) no aviso de erro. Fazendo isso, ele adiciona o `throws IOException` ao método `cadastrar()`.

```java
//código omitido

public void cadastrar(CadastrarPetDTO dto, MultipartFile imagem) throws IOException {

    String nomeImagem = imagemService.upload(imagem);
    
    repository.save(new Pet(dto, nomeImagem));

}
```

Com isso, ele passa esse problema para cima, querendo que a classe `PetController` resolva. Então, ao clicarmos novamente no link que leva ao problema relatado, voltamos para o arquivo `PetController.java`, onde chamamos o método `service.cadastrar()`. Dessa vez, precisamos tratar, usando o bloco _try-catch_, capturando uma `IOException`. e retornando a `ResponseEntity.badRequest().body(e.getMessage())`.

```java
//código omitido

@PostMapping
@Transactional
public ResponseEntity<String> cadastrar(@RequestPart @Valid CadastroPetDTO dados, @RequestParam MultipartFile imagem){
        try{
                service.cadastrar(dados, imagem);
        }catch (IOException ex){
                ResponseEntity.badRequest().body(ex.getMessage());
        }
        return ResponseEntity.ok().build();
}
```

Teoricamente, é isso que precisávamos fazer, mas ao entrarmos na classe `IOException`, usando o "Ctrl + Clique do mouse" sobre ela, notaremos que ela não está utilizando a herança da `RuntimeException`, que utilizamos para criar nossa própria classe de exceção. Nela estendemos a classe `Exception`, que aparece na hierarquia do slide, então vamos recapitular.

![Hierarquia de classes de exceção em Java com fundo branco sobreposto com linhas de grade esféricas no lado direito. Na base estão "NullPointerException" e "ArithmeticException". De cada um sai uma seta par acima, que se conecta a "RuntimeException". De "RuntimeException" sai uma seta que leva a "Exception", de onde sai uma seta para "Throwable", que está no topo da hierarquia. Todos os elementos estão em caixas verdes com texto preto.](https://cdn1.gnarususercontent.com.br/1/795715/c66811fd-0d5c-472c-8f84-55e0a8de15b3.png)

Quando criamos nossa exceção `AdocaoException`, utilizamos a herança da classe `RuntimeException`. Por regra, todas as classes que herdam dessa `RuntimeException` são exceções não verificadas, ou seja, o compilador do Java não nos obriga a tratá-la ou passar para outra classe da hierarquia tratar. Agora, usarmos a herança da classe `Exception`, teremos uma exceção verificada.

Voltando ao arquivo `PetController.java`, conseguimos fazer essa captura utilizando o _try-catch_ para a `IOException`. Recapitulando, temos exceções _**checked**_, que são as exceções verificadas pelo compilador do Java, onde ele não vai deixar você compilar o código se não lançar esse problema para cima ou tratá-lo onde ele acontece. E temos as exceções _**unchecked**_, que são as não verificadas, como a nossa `AdocaoException`, que criamos, e uma `NullPointerException`.

Agora, quero levantar outro questionamento. Voltando à `AdocaoController.java`, possuímos um bloco _try-catch_. Isso significa que, sempre que temos essa _controller_, teremos um _try-catch_ para cada um desses métodos, que são `solicitar`, `aprovar` e `reprovar`.

Imagine se tivéssemos uma `AdocaoController` com muitos métodos. Isso deixaria o código com bastantes blocos de _try-catch_. Como será que podemos usar o Spring para nos auxiliar nessa remoção? Isso vamos descobrir logo na sequência.

# Faça como eu fiz: criando nossa exceção

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147725/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147725/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula.

- Crie sua própria classe de exceção (`AdocaoException`);
- Lance a exceção criada (`AdocaoException`).

> Já fez as alterações necessárias para isso? Se tiver alguma dúvida, basta clicar em **Opinião do instrutor**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147725/opinion)

### Crie sua própria classe de exceção (AdocaoException)

Vimos que podemos usar as classes de exceções padrão do Java, mas neste momento, gostaríamos de criar nossa própria exceção.

Para isso, vamos gerar um novo pacote `Exception` e dentro dele, nossa classe `AdocaoException`. Em seguida, vamos estender da classe `RuntimeException`, como mostra o código abaixo:

```java
package adopet.api.exception;

public class AdocaoException extends RuntimeException{
    public AdocaoException(String mensagem){
        super(mensagem);
    }
}
```

Repare que adicionamos um construtor que recebe um parâmetro correspondente à mensagem que desejamos informar para a exceção.

### Lance a exceção criada (AdocaoException)

Agora precisamos substituir as exceções padrão do Java do código abaixo e substituí-las pela `AdocaoException`:

```java
        if(pet.getAdotado()){
            throw new IllegalStateException("Pet já adotado");
        }

        Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){
            throw new UnsupportedOperationException("Pet com adocão em andamento");
        }

        Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){
            throw new IllegalStateException("Tutor com máximo de adocoes");
        }
```

Realizando as substituições teremos um resultado parecido como este:

```java
        if(pet.getAdotado()){
            throw new AdocaoException("Pet já adotado");
        }

        Boolean petAdocaoEmAndamento = adocaoRepository.existsByPetIdAndStatus(dto.idPet(),StatusAdocao.AGUARDANDO_AVALIACAO);

        if(petAdocaoEmAndamento){
            throw new AdocaoException("Pet com adocão em andamento");
        }

        Integer tutorAdocoes = adocaoRepository.countByTutorIdAndStatus(dto.idTutor(),StatusAdocao.APROVADO);

        if (tutorAdocoes == 2){
            throw new AdocaoException("Tutor com máximo de adocoes");
        }

        adocaoRepository.save(new Adocao(tutor,pet, dto.motivo()));
```

Ainda precisamos capturar esta exceção no método `solicitar()` da `AdocaoController`:

```kotlin
   try {
            this.service.solicitar(dados);
        }catch (AdocaoException ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
```

Pronto! Realizadas essas modificações conseguimos criar, lançar, capturar e tratar nossa própria exceção.

## Transcrição

Terminamos o último vídeo com um questionamento: se houvesse outros métodos utilizando esse bloco `try-catch`, nós poderíamos estar **poluindo** o nosso código.

O _framework Spring Boot_ traz uma facilidade para esses casos: um **Controller** específico que podemos utilizar para capturar todas as exceções que ocorrem no nosso código, de maneira **global**. Esse controlador se chama _**Global Exception Handler**_ (Manipulador Global de Exceções).

## Criando a classe `GlobalExceptionHandler`

Para criá-lo, vamos abrir o diretório de arquivos do _IntelliJ_. Já temos a pasta "_exception_", e vamos criar essa nova classe dentro dela, clicando nela com o botão direito e selecionando "New > Java Class". Essa classe se chamará `GlobalExceptionHandler`. Após criá-la, podemos minimizar o diretório de arquivos e partir para a área de código.

Como pretendemos que essa classe lide com as exceções de maneira global, e ela é do _Spring Boot_, então precisamos utilizar uma anotação do _Spring Boot_. Acima da linha `public class GlobalExceptionHandler`, vamos digitar um `@` selecionar a anotação sugerida pelo _IntelliJ_: `@RestControllerAdvice`. Esse "Conselho de Controlador" vai ser responsável por **capturar** e **tratar** nossas exceções de maneira global.

Agora que criamos essa classe, precisamos criar os **métodos** que serão responsáveis por lidar com cada tipo de exceção.

## Método `adocaoException()`

Para começar, digitamos `public`. Tratando-se de uma API, precisamos ter um retorno semelhante ao que está acontecendo no `AdocaoController`. Precisamos de uma `ResponseEntity` com uma `String`, e é exatamente isso que faremos. Então, adicionamos: `ResponseEntity<String>`. O nome desse método pode ser `adocaoException() { }`.

> `GlobalExceptionHandler.java`

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    public ResponseEntity<String> adocaoException() { 
        
    }
}
```

Analisando o código implementado no `AdocaoController.java`, lembramos que, ao capturar essa `AdocaoException`, retornamos uma `ResponseEntity` com o status de `BAD_REQUEST`, com a mensagem que foi retornada. Podemos até recortar esse código com "Ctrl + X", já que não utilizaremos mais nesse código, e colamos no `GlobalExceptionHandler` com um "Ctrl + V".

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    public ResponseEntity<String> adocaoException() { 
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}
```

Mas, nesse cenário, ele está indicando que não conseguiu identificar o objeto da exceção, marcando o `ex` em vermelho.

Para resolver, podemos adicionar uma anotação `@ExceptionHandler()`. Com isso, dizemos ao _Spring_: "_Esse método é um manipulador de exceção_".

Mas qual é a exceção? Vamos indicar que é uma `AdocaoException.class` dentro dos parênteses dessa anotação.

```java
@ExceptionHandler(AdocaoException.class)
public ResponseEntity<String> adocaoException() { 
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
}
```

Agora ele saberá que, quando uma exceção `AdocaoException` for lançada, deverá chamar o método `adocaoException()` para tratar.

Mas, o problema persiste: **não conseguimos obter o objeto da exceção**. Podemos recebê-lo "magicamente" como parâmetro do método, com `adocaoException ex`:

```java
@ExceptionHandler(AdocaoException.class)
public ResponseEntity<String> adocaoException(adocaoException ex) { 
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
}
```

Teoricamente, fazendo apenas isso, já conseguimos **capturar** e **lidar** com a exceção.

## Excluindo o `try-catch` localizado

Vamos voltar para o `AdocaoController.java`. Não capturaremos mais as exceções nesse código, então podemos retirar o bloco `try-catch`, deixando apenas a chamada de `solicitar()` e o retorno.

Com isso, nosso método `solicitar()` ficou bem mais enxuto ao retirar toda aquela bagunça do `try-catch` e criar uma classe específica para lidar com essa situação.

> `AdocaoController.java`

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados){
        this.service.solicitar(dados);
        return ResponseEntity.ok("Adoção solicitada com sucesso!");
}
```

## Teste

Agora, podemos fazer um teste no _Postman_ para verificar se o comportamento será mantido; ou seja, se ainda será devolvida uma resposta com código 400 diante de uma exceção.

No _Postman_, então, enviamos a mesma requisição `POST Solicitar Adoção`, clicando em "Send" no canto superior direito da tela para dispará-la. Ele retornou o mesmo resultado:

> _Pet com adoção em andamento_. Código: 400 Bad Request.

Isso significa que mantivemos o mesmo comportamento. Perfeito!

Vamos voltar para o _IntelliJ_, no arquivo `GlobalExceptionHandler.java`. Ao examinar nosso código, podemos perceber que estamos retornando uma string no método `adocaoException()`. Seria interessante se déssemos mais **detalhes** na resposta sobre o que está acontecendo.

Abordaremos isso na sequência!
## Transcrição

No último vídeo, terminamos com um questionamento: estamos retornando a nossa resposta apenas com uma única mensagem, uma _string_. Seria interessante se **detalhássemos** melhor o que aconteceu para a pessoa que está consumindo a nossa API.

## Classe `ResponseError`

Para isso, podemos criar uma classe _Record_ do Java, logo acima do retorno do nosso método `adocaoException()`, com a palavra `new`. Vamos nomear essa classe como `ResponseError()` e criar apenas a sua estrutura, pedindo para o IntelliJ gerar de maneira automática.

> `GlobalExceptionHandler.java`

```java
@ExceptionHandler(AdocaoException.class)
public ResponseEntity<String> adocaoException(adocaoException ex) { 
    
    new ResponseError(
    );
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
}
```

Queremos ter aqui a **mensagem** do erro que ocorreu, então vamos colocar `ex.getMessage()`. Vamos passar também um `HttpStatus`, definindo esse **status** como `BAD_REQUEST`. Podemos também passar um `LocalDateTime.now()`, ou seja, o **horário** em que o erro ocorreu.

```java
new ResponseError(
        ex.getMessage(),
        HttpStatus.BAD_REQUEST,
        LocalDateTime.now()
);
```

Você poderá perceber que o `ResponseError` está marcado em vermelho, indicando erro, porque essa classe ainda não existe. Vamos clicar nele e pressionar "Alt + Enter", depois clicar na opção "**Create record 'ResponseError'**". Vamos criar essa classe no pacote "exception" e dar "OK".

O IntelliJ pode para **tipar** corretamente todos os parâmetros de `ResponseError`: `message` como `String`, `HttpStatus` como `httpStatus` e `LocalDateTime` como `time`:

> `ResponseError.java`

```java
public record ResponseError(String message, HttpStatus httpStatus, LocalDateTime time) {
}
```

Classe _record_ criada! Vamos voltar ao nosso `GlobalExceptionHandler.java`.

Vamos receber a classe `ResponseError()` na variável `response`:

> `GlobalExceptionHandler.java`

```java
ResponseError response = new ResponseError(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST,
                LocalDateTime.now()
);
```

Agora, precisamos **devolver** essa resposta. E lembre-se, estamos criando uma **padronização** das nossas respostas de erro. Então, vamos retornar a mensagem no corpo de `adocaoException()`, ou seja, em `.body(ex.getMessage())`. Não vamos mais retornar apenas a mensagem como uma string, mas o `response`:

```java
return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
```

Temos agora um erro nessa linha de retorno. O IntelliJ indicou que precisamos devolver um `ResponseError`, enquanto estamos devolvendo uma `String`. Então, em nosso método, vamos trocar `ResponseEntity<String>` por `ResponseEntity<ResponseError>`, que corresponde ao nosso tipo de retorno.

```java
public ResponseEntity<ResponseError> adocaoException(AdocaoException ex){

// código omitido
```

Agora precisamos fazer o teste no Postman novamente, para verificar se estamos retornando todos esses dados que adicionamos nessa resposta.

Vamos disparar novamente os dados inseridos em `POST Solicitar Adoção`, solicitando a adoção de um pet (de ID 2) que já está com uma adoção em andamento. Vamos clicar no botão "Send" no canto superior direito da tela para disparar essa requisição.

Agora, ele retornou uma mensagem muito mais amigável e muito mais detalhada do que ocorreu, em vez de apenas o texto "Pet com adoção em andamento":

> Retorno da requisição "Solicitar Adoção" no Postman

```json
{
    "message": "Pet com adoção em andamento",
    "httpStatus": "BAD_REQUEST",
    "time": "2023-11-16T10:23:49.71961688"
}
```

Temos a mensagem, o status do erro e a hora em que ele ocorreu!

## Conclusões

Poderíamos incluir mais parâmetros para essa resposta. Deixaremos um material extra na atividade "Para saber mais" desta aula, sobre o **padrão RFC** que pode ser aplicado para essas respostas de erro da sua API.

Vamos voltar rapidamente para o IntelliJ. Estamos capturando, de maneira global, todas as exceções que ocorrem dessa `AdocaoException`.

Mas, imaginem um cenário onde, por exemplo, ocorra uma exceção com a qual não estamos lidando, nem com o bloco `try-catch` e nem nessa nossa classe.

Nesse caso, criamos um manipulador de "**exceção coringa**". Ou seja, se não houver nenhum outro manipulador para lidar com esse erro, ele vai cair nessa exceção.

Vamos explorar isso na sequência.


## Transcrição

Terminamos o último vídeo com um questionamento: podemos criar um método para capturar **exceções genéricas**, aquelas que não estávamos esperando? Como podemos fazer isso?

Você deve se lembrar da nossa **hierarquia de exceções**, que conhecemos na última aula:

![Diagrama representando a hierarquia de classes de exceção em Java. Na base estão NullPointerException e ArithmeticException. De cada um sai uma seta par acima, que se conecta a RuntimeException. De RuntimeException sai uma seta que leva a Exception, de onde sai uma seta para Throwable, que está no topo da hierarquia. Todos os elementos estão em caixas verdes com texto preto.](https://cdn1.gnarususercontent.com.br/1/795715/828b1c39-76a3-4ca7-af45-2945411c2074.png)

Ou seja, podemos capturar exceções de maneira mais **específica**, como quando capturar apenas `NullPointerException` ou `ArithmeticException`, por exemplo. E temos também as exceções de `RuntimeException` e apenas `Exception`. Já entendemos bem as diferenças entre essas duas.

Para englobar de maneira mais geral todas essas exceções, podemos capturar a classe `Exception`. Então, vamos fazer isso.

## Classe `Exception` e método coringa

Voltando para o arquivo `GlobalExceptionHandler` no _IntelliJ_, vamos criar um novo método ao final do código. Vamos digitar `public ResponseEntity` e retornar um `ResponseError`. Podemos nomear o método como `trataException`. Após abrir e fechar as chaves `{}`, podemos copiar todo o `ResponseError` que criamos anteriormente para o método `adocaoException()` e colar:

> `GlobalExceptionHandler.java`

```java
public ResponseEntity<ResponseError> trataException(){

        ResponseError response = new ResponseError(
                        ex.getMessage(),
                        HttpStatus.BAD_REQUEST,
                        LocalDateTime.now()
        );
}
```

Agora, precisamos informar a este método **qual exceção** ele vai capturar. Então, vamos adicionar `@ExceptionHandler()` logo acima e dizer, como parâmetro, que ele vai capturar `Exception.class`, ou seja, a exceção genérica. Depois adicionamos `Exception ex` como parâmetro do método para obter esse objeto.

```java
@ExceptionHandler(Exception.class)
public ResponseEntity<ResponseError> trataException(Exception ex){

// código omitido
```

Para o **retorno**, podemos fazer o mesmo que fizemos no método `AdocaoException()`, então vamos copiar a linha 22 e colar na linha 34.

Com isso, temos pronto um **método coringa para tratar nossas exceções**:

```java
@ExceptionHandler(Exception.class)
public ResponseEntity<ResponseError> trataException(Exception ex){

        ResponseError response = new ResponseError(
                        ex.getMessage(),
                        HttpStatus.BAD_REQUEST,
                        LocalDateTime.now()
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
}
```

Podemos fazer um **teste**.

No código de `AdocaoController.java`, temos o método `aprovar()`. Lembrem-se: é possível usar `EntityNotFoundException` utilizando `try-catch`. Mas, vamos remover todo esse bloco de `try-catch` desse código para usar apenas a classe `Exception`. Teremos apenas:

> `AdocaoController.java`

```java
@PutMapping("/aprovar")
@Transactional
public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto){
        this.service.aprovar(dto);
        return ResponseEntity.ok().build();
}
```

Agora, ao tentar realizar uma requisição falha utilizando o tratamento na `GlobalExceptionHandler`, não teremos a impressão daquela _stack trace_ com `Internal Server Error` e `httpStatus 500`.

Quando dispararmos uma requisição para **aprovar uma adoção com um ID inexistente**, ele retornará a mensagem definida na `GlobalExceptionHandler` como `ResponseError`, que é a nossa resposta padrão.

Vamos voltar para o Postman para testar. Na requisição `PUT Aprovar Adoção`, estamos passando o ID 2, mas agora vamos passar o ID 7, que temos certeza de que **não existe**:

> Input da requisição "Aprovar Adoção" no Postman

```json
{
    "idAdocao": 7
}
```

Ao enviar a requisição clicando em "Send" no canto superior direito, temos o `400 Bad Request` como status do retorno, a hora em que a exceção ocorreu e a mensagem de que não foi possível encontrar a adoção com ID 7:

> Retorno da requisição "Aprovar Adoção" no Postman

```json
{
    "message": "Unable to find adopet.api.model.Adocao with id 7",
    "httpStatus": "BAD_REQUEST",
    "time": "2023-11-16T10:40:00.391172345"
}
```

**Ótimo!**

Conseguimos capturar exceções de maneira geral e criamos um método coringa!

No próximo vídeo, voltaremos para concluir o curso.
# Para saber mais: RFC Problem Details

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147731/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147731/question)

Durante o vídeo, citamos que há um padrão de respostas de erro para garantir a confiabilidade e robustez da nossa aplicação. A `RFC 7807` define uma estrutura de resposta de erros em APIs, contendo: tipo de erro, título, detalhes e assim por diante.

Caso queira saber mais, você pode acessar o site do [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807).
# Para saber mais: Stack trace

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147732/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147732/question)

Durante nossa jornada, vimos que não é uma boa prática retornar a **stack trace** para o usuário que está consumindo nossa API, pois isso expõe detalhes internos da nossa aplicação. Podemos mudar essa configuração no arquivo `application.properties`.

Para isso, você deve adicionar a seguinte propriedade:

```ini
server.error.include-stacktrace=never
```

Pronto! Agora podemos garantir que essas informações não sejam reveladas por este recurso.

# Faça como eu fiz: usando um Controller Advice

 [Próxima Atividade](https://cursos.alura.com.br/course/java-excecoes-aprenda-criar-lancar-controlar-excecoes/task/147734/next)

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147734/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula.

- Crie a classe `GlobalExceptionHandler` para manipular exceções globalmente;
- Crie um record `ResponseError` para padronizar e detalhar melhor as respostas de erro;
- Crie um método para capturar exceções que não lidamos explicitamente.

> Já fez as alterações necessárias para isso? Se tiver alguma dúvida, basta clicar em **Opinião do instrutor**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-excecoes-aprenda-criar-lancar-controlar-excecoes/147734/opinion)

### Crie a classe `GlobalExceptionHandler` para manipular exceções globalmente

Dentro do pacote de `exceptions` vamos criar a classe `GlobalExceptionHandler` para manipular exceções globalmente, ou seja, vamos eliminar o uso do `try-catch`.

O código a seguir mostra a implementação da classe `GlobalExceptionHandler`:

```kotlin
package adopet.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AdocaoException.class)
    public ResponseEntity<String> adocaoException(AdocaoException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}
```

Repare que criamos um método para capturar e lidar com a `AdocaoException` sem usar o `try-catch` em nenhuma outra parte do código.

### Crie um record `ResponseError` para padronizar e detalhar melhor as respostas de error

Podemos criar a record `ResponseError` no pacote de `exception` com o seguinte código:

```java
package adopet.api.exception;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public record ResponseError(String message, HttpStatus httpStatus, LocalDateTime time) {
}
```

Veja que este record possui 3 parâmetros: “mensagem”, “status http” e “hora”.

O código abaixo mostra como usar este record no método da `GlobalExceptionHandler`:

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AdocaoException.class)
    public ResponseEntity<ResponseError> adocaoException(AdocaoException ex){

        ResponseError response = new ResponseError(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST,
                LocalDateTime.now()
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
```

Pronto! Agora conseguimos criar um record que representa a resposta de erros na nossa API.

### Crie um método para capturar exceções que não lidamos explicitamente

Podemos criar um método “coringa” para capturar e lidar com qualquer outra exceção que não lidamos explicitamente.

Para isso, vamos gerar um outro método na classe `GlobalExceptionHandler` para lidar com a classe `Exception`, conforme o código a seguir:

```java
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseError> trataException(Exception ex){

        ResponseError response = new ResponseError(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST,
                LocalDateTime.now()
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
```

Dessa forma, qualquer outra exceção que não lidamos explicitamente irá cair neste método.

## Transcrição

Fizemos todas as alterações necessárias no método `listarAbrigo()` para utilizar na nossa classe de domínio `Abrigo`.

Agora, precisamos fazer um trabalho similar na nossa classe `PetService` para trabalhar com o objeto `Pet` quando estiver listando os pets do abrigo. O processo é o mesmo que realizamos anteriormente.

Quando chamamos o `response.body()`, estamos pegando um Json, que é o retorno da nossa API, e sabemos que é retorno de um Json. Agora, ao invés de transformar esse Json em um JsonArray para fazer esse for, sabemos que podemos utilizar o Jackson para transformar esse retorno em um array de Pet. Assim, conseguimos manipular nosso objeto com mais flexibilidade.

Na classe `PetService`, após o `response.body` podemos remover esta linha do `JsonArray`.

Nosso código vai parar de compilar, não tem problema, pois a intenção é utilizar o `new ObjectMapper` utilizando o método `readValue()`. Vamos passar o `response.body` como primeiro parâmetro e o segundo parâmetro será um array de Pet, `Pet[]`. Preciso definir, colocando `.class`, porque precisamos passar qual classe o Jackson utilizará como referência para executar essa conversão por baixo dos panos.

```cpp
Pet[] pets = new ObjectMapper().readValue(responseBody, Pet[].class);
```

Mais uma vez, para evitar trabalharmos com o array, podemos converter para uma lista, já que temos mais métodos e flexibilidade ao trabalhar com uma lista do Java, com uma coleção do Java. Para fazer isso, utilizamos a API de streams que começou a ser vista no Java 8, muito famosa e útil para auxiliar nessa transformação.

```cpp
 Pet[] pets = new ObjectMapper().readValue(responseBody, Pet[].class);
 List<Pet> petList = Arrays.stream(pets).toList();
```

O que precisamos fazer agora é pegar o `id`, pois vimos que o Pet, quando buscamos na API, terá um `id`, então precisaremos mapear o `id` na classe `Pet`. Vamos pegar `tipo`, `nome` e `racionalidade` através dos métodos de acesso, que são os métodos getters. Ainda não criamos, então não vai compilar, mas vamos preparar a nossa classe aqui e criaremos na classe `Pet`.

```java
        String responseBody = response.body();
        Pet[] pets = new ObjectMapper().readValue(responseBody, Pet[].class);
        List<Pet> petList = Arrays.stream(pets).toList();
        System.out.println("Pets cadastrados:");
        for (Pet pet : petList) {
            long id = pet.getId();
            String tipo = pet.getTipo();
            String nome = pet.getNome();
            String raca = pet.getRaca();
            int idade = pet.getIdade();
            System.out.println(id +" - " +tipo +" - " +nome +" - " +raca +" - " +idade +" ano(s)");
        }
```

Concluímos tudo o que precisamos dentro do nosso _for_, para fornecer o retorno quando quisermos listar os Pets. Agora vamos retornar à nossa classe `Pet`.

A primeira coisa que vamos fazer é criar a nova propriedade que precisamos, um `private Long id`. Agora precisamos identificar quais são as outras propriedades necessárias. Ao revisar `PetService`, vejo que precisaremos de `id`, `tipo`, `nome`, `raça` e `idade`. Acredito que todas serão necessárias, incluindo `peso`.

```typescript
    private Long id;
    private String tipo;
    private String nome;
    private String raca;
    private int idade;
    private String cor;
    private Float peso;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public Float getPeso() {
        return peso;
    }
        
    public String getRaca() {
        return raca;
    }

    public String getTipo() {
        return tipo;
    }

    public int getIdade() {
        return idade;
    }
```

Perceba que não utilizamos `getCor` e `getPeso`, então, por enquanto, se não usarmos o `getPeso`, não criaremos esse método. Vamos manter a lógica de apenas criar métodos que estão de fato sendo utilizados. Não precisamos fornecer acesso a uma propriedade que não será utilizada por enquanto. Então evitamos criá-la.

Beleza! Nosso sistema foi refatorado para utilizar o objeto `pet` em `PetService` e o objeto `abrigo` aqui em `AbrigoService`.

Agora, o que precisamos é realizar alguns testes em nosso sistema para assegurar que tudo está funcionando corretamente.

Fizemos diversas alterações desde o início, então, agora, será que consigo cadastrar um pet? Será que consigo listar, cadastrar um abrigo, etc? Vamos verificar se as modificações estão sendo bem sucedidas.## Transcrição

Desde o início de nosso curso, houveram várias mudanças em nossa aplicação. Inicialmente, havia um código com uma única classe e função que, aos poucos, se dividiu em várias classes com funções reaproveitadas. Nós utilizamos princípios de orientação a objetos, **SOLID**, e outros padrões de programação.

No entanto, algo que não fizemos ainda foi testar a nossa aplicação. Será que está funcional? Será que a aplicação continua funcionando? Pois não adianta refatorar o código se ele parar de funcionar.

Agora, a minha proposta é que passemos a avaliar e testar o cadastro e a listagem de abrigo para ver se a nossa aplicação está funcionando normalmente.

Para isso, precisamos ir à nossa IDE, na classe `AdopetConsoleApplication.java`. Se rolar um pouco para cima, veremos a função `main`. No lado esquerdo, temos um botão "Play", onde iniciamos a nossa aplicação.

No IntelliJ, se clicarmos com o botão esquerdo sobre esse botão de "Play", aparecerá a opção para iniciarmos a nossa aplicação `AdopetConsoleApplication`. Podemos clicar na opção "Run AdopetConsoleApplication". Após clicarmos será aberto o console para digitarmos os números das opções desejadas.

> DIGITE O NÚMERO DA OPERAÇÃO DESEJADA:
> 
> 1 -> Listar abrigos cadastrados
> 
> 2 -> Cadastrar novo abrigo
> 
> 3 -> Listar pets do abrigo
> 
> 4 -> Importar pets do abrigo
> 
> 5 -> Sair

Primeiro, vamos testar clicando na opção 1. Ela nos perguntará se queremos listar os abrigos cadastrados. Como não temos nenhum cadastrado, nada será listado. Agora, precisamos cadastrar um abrigo para testar se vai funciona.

Voltamos para as opções, então vamos selecionar a opção "2 - cadastrar novo abrigo". Vamos preencher da seguinte forma:

> Digite o nome do abrigo: `Petmais`
> 
> Digite o telefone do abrigo: `61987456789`
> 
> Digite o email do abrigo: `petmais@gmail.com`

Após pressionar "Enter", receberemos uma mensagem informando que o abrigo foi cadastrado com sucesso.

Em teoria, se listarmos os abrigos cadastrados agora, ele deverá aparecer. Se clicarmos na opção "1- listar abrigos cadastrados" e pressionar "Enter", nossa aplicação falha e apresenta um erro. Aqui que percebemos a importância de testar a aplicação regularmente.

> com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `br.com.slura.domain.Abrigo`

O código de erro está indicando a existência de uma exceção no Jackson Databind, especificamente um `InvalidDefinitionException`. Ele está mostrando que o Jackson não conseguiu construir uma instância de `Abrigo`, pois não tem construtor padrão. E, então, não consegue desserializar aquele objeto para o objeto `Abrigo`.

Ainda precisamos verificar outro ponto. Quando buscamos a nossa API, além do id que já mapeamos e o nome, telefone e e-mail, temos também uma lista de pets, `pets[]`. Portanto, precisamos fazer 2 coisas:

1. Criar um construtor default em Abrigo
2. Mapear uma nova propriedade

Ao acessar o código da classe `Abrigo`, vemos que o código aponta a falta de um construtor default (padrão), que é um construtor sem nenhum parâmetro passado. Isso ocorre porque criamos um novo. Quando criamos um novo construtor com parâmetros, o construtor padrão deixa de existir. Se quisermos manter o padrão, precisamos declará-lo explicitamente.

Portanto, abaixo de `public class Abrigo`, criaremos um novo construtor, `public abrigo()`, sem nenhum parâmetro, sem nenhum corpo. Este é o construtor padrão — que vem por padrão quando não temos nenhum novo construtor criado.

```kotlin
package br.com.alura.domain;

public class Abrigo {

    public Abrigo() {

    }

    public Abrigo(String nome, String telefone, String email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
        // código omitido
```

Além disso, precisamos criar uma nova propriedade, que é de um array de pets `private Pet[] pets`.

Agora, como precisamos acessar as informações de nome, telefone, e-mail e a lista de pets, precisamos criar todos os _getters_. Já temos o `getId` e o `getNome`, então precisaremos do `getTelefone`, `getEmail` e `getPets`.

Nosso código vai ficar assim:

```typescript
package br.com.alura.domain;

public class Abrigo {

    public Abrigo() {

    }

    public Abrigo(String nome, String telefone, String email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    private Long id;
    private String nome;
    private String telefone;
    private String email;
    private Pet[] pets;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getEmail() {
        return email;
    }

    public Pet[] getPets() {
        return pets;
    }
}
```

Com isso, a nossa classe `Abrigo` estará preparada para ser executada quando iniciarmos a aplicação e solicitarmos a listagem dos abrigos.

Como a nossa aplicação deu erro, precisamos acessar o `AdopetConsoleApplication` e iniciar a aplicação novamente.

Como nós estamos trabalhando com API, não precisamos cadastrar um abrigo novamente, pois quando registramos pela primeira vez, ele foi salvo. O problema ocorreu apenas quando tentamos listar. Então, o que precisamos fazer agora é listar e verificar se a API retornará o que foi salvo.

Portanto, ao selecionarmos a opção "1- Listar abrigos cadastrados", não pode mais constar que o abrigo está vazio.

E de fato, retornou o abrigo que nós cadastramos! Agora temos o abrigo cadastrado com id "1" e o nome "Petmais".

## Cadastrar Pets

Agora precisamos cadastrar pets. No entanto, diferentemente do abrigo, que cadastramos diretamente, os pets são cadastrados por meio de um arquivo. Se observarmos a arquitetura dos pacotes do nosso projeto, temos um arquivo chamado `pet.csv`. Este arquivo contém uma lista com alguns pets, com informações se é um cachorro ou um gato, o nome do animal, a raça, a idade, a cor e o peso.

> pets.csv

```plaintext
CACHORRO, Rex, Poodle, 5, Marrom, 10.5
GATO, Mia, Siamês, 3, Cinza, 3.2
CACHORRO, Luna, Bulldog Francês, 2, , Preto,8.7
GATO, Felix, Persa, 4, Branco,4.1
www
CACHORRO, Bella, Labrador Retriever, 6, Chocolate, 22.0
GATO, Lucy, Sphynx, 2, Cinza, 3.8
CACHORRO, Apollo, Husky Siberiano,3, Cinza e Branco, 18.5
GATO, Leopoldo, Siamês, 4, Cinza,6.5
```

Então, o que devemos fazer?

Na área inferior esquerda podemos clicar em "Run" para acessar a tela em que a nossa aplicação está sendo executada. Nós precisamos importar os dados do arquivo pets.csv, então na nossa aplicação vamos selecionar a opção "4 - Importar pets dos abrigos". Ao digitar "4" e pressionar "Enter", o sistema solicitará o ID ou o nome do abrigo onde desejo registrar esses pets. Vamos digitar "1" (pois esse é o ID do abrigo Petmais), e em seguida, o nome do arquivo `pets.csv`.

> Digite o id ou nome do abrigo: `1`
> 
> Digite o nome do arquivo CSV: pets`.csv`

Ao pressionar "Enter", recebo uma resposta de que os pets foram cadastrados com sucesso. Trata-se de todos os pets que tínhamos e que foram registrados.

O próximo passo agora é tentar listar e ver se os pets aparecem no abrigo. Vamos selecionar a opção "1 - listar abrigos cadastrados".

Infelizmente, a aplicação parou de funcionar novamente porque não fizemos o mapeamento do pet. Esse problema é semelhante ao que tivemos com o `Abrigo`. Precisamos corrigir isso no `Pet.java`.

E por que ocorreu esse erro ao listar os abrigos? Porque, além das informações do abrigo, também tentamos listar seus pets. As informações do pet precisam ser convertidas pelo Jackson para serem exibidas quando listamos os abrigos. Mas como não temos todas as informações mapeadas, nem um construtor padrão e nem todas as opções nos getters, a lista falhou.

Então, o que precisamos fazer é acessar `Pet.java` e criar um novo construtor padrão, sem nenhum parâmetro. Já temos os _getters_ `getId`, `getNome`, `getRaca`, `getTipo` e `getIdade`. Agora precisamos criar o `getPeso` e o `getCor`. Creio que, com isso, já poderemos iniciar a aplicação e listar os pets no abrigo.

O código de `Pet.java` ficou assim:

```typescript
package br.com.alura.domain;

public class Pet {

    public Pet() {

    }

    public Pet(String tipo, String nome, String raca, int idade, String cor, Float peso) {
        this.tipo = tipo;
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.cor = cor;
        this.peso = peso;
    }

    private Long id;
    private String tipo;
    private String nome;
    private String raca;
    private int idade;
    private String cor;
    private Float peso;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getRaca() {
        return raca;
    }

    public String getTipo() {
        return tipo;
    }

    public int getIdade() {
        return idade;
    }

    public Float getPeso() {
        return peso;
    }

    public String getCor() {
        return cor;
    }
}
```

Vamos retornar à `AdopetConsoleApplication`, reiniciaremos a aplicação e tentaremos listar os pets por meio dos abrigos. Após selecionar a opção "1- Listar abrigos cadastrados", podemos ver que a função de listar abrigos está funcionando corretamente.

> Abrigos cadastrados:
> 
> 1 - Petmais

Se eu escolher listar os pets na opção "3- Listar pets do abrigo", a aplicação deverá retornar a lista. Quando perguntado sobre o ID do abrigo, basta digitar "1" e a lista de pets cadastrados será exibida.

> Digite o id ou nome do abrigo:
> 
> 1
> 
> Pets cadastrados:
> 
> 1 - CACHORRO Rex - Poodle 5 ano(s)
> 
> 2 - GATO - Mia - Siamês - 3 ano(s)
> 
> 3 - CACHORRO Luna - Bulldog Francês - 2 ano(s)
> 
> 4 - GATO Felix Persa - 4 ano(s)
> 
> 5 - CACHORRO - Bella - Labrador Retriever - 6 ano(s)
> 
> 6 - GATO Lucy - Sphynx - 2 ano(s)
> 
> 7 - CACHORRO - Apollo - Husky Siberiano - 3 ano(s)
> 
> 8 - GATO - Leopoldo - Siamês 4 ano(s)

Agora, de volta ao menu de opções, digitarei "5" para encerrar e finalizar o programa.

## Conclusão

Após as mudanças realizadas no código e alguns ajustes e testes que precisamos fazer neste vídeo, podemos concluir que nossa aplicação está funcional. O código agora está mais organizado, mais coeso e ainda assim funcional.
#   
Mão na massa: usando JsonObject para criar objetos

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138305/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138305/question)

Durante a aula, conhecemos uma biblioteca chamada Jackson, que nos auxilia na deserialização de objetos. Ao adicionar a linha:

```cpp
Abrigo[] abrigos = new ObjectMapper().readValue(responseBody, Abrigo[].class);`
```

Estamos dizendo "pega o `responseBody`, que é uma string, e transforme-o em um array de `Abrigo`”. Toda a mágica de transformação é feita por baixo dos panos pelo Jackson, cabendo a nós pegar a variável de resultado e trabalhar com ela da forma que quisermos.

Porém, antes de usar o Jackson, usávamos um objeto `JsonObject` para nos auxiliar nessas transformações. Vamos ver, na seção Opinião do instrutor, como ficaria o nosso código se usássemos o `JsonObject`?

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138305/opinion)

Para criar um novo `Abrigo`, precisamos criar uma instância do objeto e fornecer algumas informações para o construtor. O código ficaria assim:

```java
private static void listarAbrigos() throws IOException, InterruptedException {
        HttpResponse<String> response = dispararRequisicaoGet("http://localhost:8080/abrigos");
        String responseBody = response.body();
        JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
        System.out.println("Abrigos cadastrados:");
        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            String nome = jsonObject.get("nome").getAsString();
            String telefone = jsonObject.get("telefone").getAsString();
            String email = jsonObject.get("email").getAsString();

            System.out.println(id +" - " +nome);
            Abrigo abrigo = new Abrigo(nome, telefone, email);
        }
    }
```

Como podemos reparar, o trabalho fica bem mais manual e bem mais propenso a erros, por isso, **o ideal é sempre usarmos bibliotecas para serialização e deserialização**, pois além de deixar o código mais legível, diminui as chances de bugs.

## Transcrição

No último vídeo, conseguimos testar a aplicação após realizar uma grande refatoração no código. Para realizar o teste, inicializamos a aplicação e testamos cada uma das opções para interagir com ela.

Registramos um novo abrigo, importamos os pets para o abrigo por meio de arquivos, listamos abrigos e listamos os pets. Mesmo após todas essas modificações, após separarmos o código em classes, criar classes de configuração e de domínio, e organizar o código de forma que se tornou mais legível e fácil de manter, o código continuou funcionando normalmente.

Mas então, surge uma questão. Toda vez que adicionamos uma nova funcionalidade à aplicação ou surgir uma nova demanda, e precisamos adicionar novas opções, sempre teremos que apertar "play" na função `main()`, iniciar a aplicação e testar todos os fluxos novamente?

Imagina se nosso sistema crescer de forma indiscriminada, ou ainda, se precisarmos continuar refatorando nosso código. Quanto trabalho!

Para uma aplicação console como a nossa, que tem poucas opções de interação por enquanto, pode até ser rápido, mas mesmo assim leva tempo. Agora imagine para aplicações maiores, com múltiplas classes e funcionalidades. Fica realmente inviável.

> **Testes manuais** são inviáveis em aplicações complexas.

## Testes automatizados

Como podemos automatizar e melhorar o tempo de teste da aplicação? Será que é possível testar sem realmente iniciar a aplicação e usá-la de fato? A resposta é sim.

> Temos o conceito de **testes automatizados**, que são testes que nós, pessoas desenvolvedoras, podemos criar por meio de código, com a ajuda de algumas bibliotecas, para **validar cenários do código**.

Por exemplo, temos testes que vão validar a menor parte do código, ou seja, um método de uma classe.

Com um tipo de teste automatizado, poderíamos abrir a classe `PetService`, chamar o método `listarPetsDoAbrigo()` e verificar se o retorno será um `System.out.println()`, onde temos o ID, tipo, nome com uma _string_ de anos de idade no final.

Assim, conseguimos validar cenários do código. Também podemos fazer testes de integração, que é quando conseguimos testar a integração da aplicação com algum recurso externo, como um banco de dados ou um recurso de mensageria. Portanto, temos vários tipos de testes automatizados.

> Para quem não compreende esse conceito ou nunca ouviu falar, na Alura temos alguns materiais explicando detalhadamente quais tipos de testes existem, o que fazem, como executar e quais são as diferenças entre eles.

Para esse curso, o objetivo não é falar de todos os tipos de testes, nem discutir testes automatizados. Vamos usar um tipo de teste automatizado para nos auxiliar na validação do código e facilitar a refatoração.

Com nossos códigos testados, conseguimos refatorar com muito mais tranquilidade, pois temos um feedback rápido.

Por exemplo, modificamos algo no código que não deveria alterar em relação à regra e executamos o teste. Se ele continua válido, significa que a refatoração passou. No entanto, se o teste falha, precisaremos reconsiderar e checar se modificamos algo que não deveria.

## Teste de unidade com JUnit

O teste que iremos fazer é o **teste de unidade**, que verifica a menor unidade, ou seja, a menor parte do código, como os comportamentos de uma classe.

Por exemplo, os comportamentos da classe `PetService` são `listarPetsDoAbrigo()` e `importarPetsDoAbrigo()`. Vamos validar se realmente esses métodos estão se comportando como deveriam.

Existem algumas bibliotecas que auxiliam a fazer esse tipo de teste, como o **JUnit**, muito famoso para testes de unidade em Java.

Para isso, precisaremos baixar essa biblioteca do [Maven Repository](https://mvnrepository.com/) e adicioná-la no arquivo `pom.xml` da aplicação, pois ela possui algumas anotações, classes e interfaces que nos auxiliarão a criar esse teste.

No Maven Repository, basta buscar por "junit" no caixa de pesquisa. Vamos clicar na opção "JUnit Jupiter API" e escolher a opção mais recente, nesse caso, a `5.10.0`.

Vamos dar um "Ctrl + C" no código da dependência do JUnit:

```xml
<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

Vamos abrir a aba de projetos da IDE (Alt + 1), vamos abrir o `pom.xml` e colar esse código depois da dependência do `jackson-databind`, ainda dentro da tag `<dependencies></dependencies>`.

## Simulação com Mockito

Ao aplicar um teste de unidade, testaremos uma unidade específica. Por exemplo, o método `importarPetsDoAbrigo()`.

Porém, este método possui atualmente uma chamada para o `dispararRequisicaoPost()` que está em outra classe. Assim, percebemos que existe uma dependência com a classe de configuração, pois é necessário realizar essa chamada para API e retornar o conteúdo para executar nossa regra de negócios.

Quando falamos de teste de unidade, essa dependência não é realizada. Ou seja, no teste, não vamos de fato chamar a classe que contém a função `dispararRequisicaoPost()`. O que faremos é simular essa chamada e o retorno dessa API, para que consigamos testar apenas a unidade, no caso o método `importarPetsDoAbrigo()`.

Para simular esse comportamento, usaremos um recurso chamado _**Mock**_ (Simulação), disponível nos testes de unidade. _Mock_ é uma biblioteca que nos auxilia a simular algum recurso externo, como uma classe externa.

A biblioteca mais renomada de Java seria o **Mockito**. Vamos verificar como essas duas bibliotecas interagem quando desenvolvemos os testes.

Vamos voltar ao Maven Repository e procurar por "mockito" na caixa de pesquisa. Ao clicar na primeira opção que aparece é o "Mockito Core", escolheremos a versão mais recente, `5.4.0`.

Podemos copiar a dependência na aba do Maven para acrescentar esse código à aplicação.

```xml
<!-- https://mvnrepository.com/artifact/org.mockito/mockito-core -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.4.0</version>
    <scope>test</scope>
</dependency>
```

Novamente, vamos acessar o arquivo `pom.xml`, abaixo da `junit-jupiter-api`, adicionamos a dependência do `mockito-core`.

Com isso, já aparece o ícone de "M" do Maven ("Ctrl + Shift + O") para fazer o _reload_ do arquivo `pom.xml` para acrescentar os recursos dessas duas bibliotecas ao _Class Path_, para poder usar esses recursos em nossos testes.

## Próximos passos

Já preparamos a aplicação para começar a desenvolver os testes de unidade, mas não vamos começar a desenvolver agora. O objetivo deste vídeo era criar toda essa estrutura, colocar as dependências na aplicação.

No próximo vídeo, começaremos a criar os testes para aprender como podemos validar esses comportamentos.

## Transcrição

Agora que temos as dependências, tanto a `junit-jupiter-api`, quanto a `mockito-core`, o próximo passo é escrever os testes para validar os cenários do nosso código.

## Estrutura de pacotes

O primeiro ponto a ser identificado é que os testes criados não ficam no mesmo nível de pacote da estrutura de pacotes atual, ou seja, onde temos "src > main > java".

> Devemos ter um **diretório específico para testes** onde vamos criar as classes de teste para validar os cenários necessários.
> 
> Mas não precisamos criar isso manualmente. O Maven já nos fornece essa estrutura de pacotes e diretórios, por isso é uma ferramenta tão útil.

Para criar essa estrutura de pacotes de teste do Maven, podemos clicar com o botão direito no pacote "src" e escolher "New > Directory" para adicionar um novo diretório.

Dessa forma, já aparecem algumas opções de _Maven Source Directories_. Com isso, podemos adicionar os "resources" dentro de "main", que são arquivos de configuração que não estamos usando nesse projeto por enquanto. Também tem "test\java", "test\resources".

O que precisamos é essa estrutura de "test\java". Após clicar duas vezes nessa opção, perceba que dentro de "src", no nível de "main", temos também um novo diretório chamado "test" que tem uma pasta "java". O diretório de "test\java".

> Por padrão, de estrutura e de código, geralmente **replicamos a mesma estrutura de pacotes** de onde está o código principal.

Por exemplo, se tenho um pacote "br.com.alura", terei dentro do "test" o mesmo pacote "br.com.alura". Porque, dentro dos testes de unidade, podemos testar qualquer uma dessas classes que fizerem sentido para o contexto.

Podemos ter uma um pacote chamado "client" dentro dos pacotes de teste, onde haverá uma `ClientHttpConfigurationTest`, onde fazemos testes do comportamento dessa classe. Então, a ideia é que mantenhamos a mesma estrutura.

## Criação de testes de unidade

Vamos testar os _services_, porque geralmente os testes de unidades são bons para testar alguma regra de negócio. E as regras de negócio do nosso projeto estão nos _services_.

Vamos clicar com o botão direito no diretório "Test > Java", adicionarei o novo pacote com a opção "Package", que será chamado "br.com.alura.service".

Agora, dentro de "service", vamos criar a classe que queremos testar. Com o botão direito, escolhemos "New > Java Class", pois teste será um _Java class_ - o que vai mudar são alguns conjuntos de anotações e classes que vamos utilizar.

Como vamos testar `AbrigoService`, vamos escrever o nome da classe como `AbrigoServiceTest`, seguindo um padrão. Se você conferir grandes _players_ no mercado, o costume é criar nomes de classe de teste com esse sufixo `Test` em inglês, ou seja, sem a letra "e" no final.

Após dar um "Enter", temos a primeira classe de teste:

```java
package br.com.alura.service;

public class AbrigoServiceTest {
}
```

Nesta classe que criamos, podemos testar todos os comportamentos de `AbrigoService`. Atualmente, `AbrigoService` tem basicamente dois métodos: `listarAbrigo()` e `cadastrarAbrigo()`. Então, podemos ter métodos que validam diferentes cenários desses dois métodos.

O que vamos fazer primeiro é testar `listarAbrigo()`. O que `listarAbrigo()` faz atualmente?

> `AbrigoService.java`:

```java
public void listarAbrigo() throws IOException, InterruptedException {
        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = client.dispararRequisicaoGet(uri);
        String responseBody = response.body();
        Abrigo[] abrigos = new ObjectMapper().readValue(responseBody, Abrigo[].class);
        List<Abrigo> abrigoList = Arrays.stream(abrigos).toList();
        System.out.println("Abrigos cadastrados:");
        for (Abrigo abrigo : abrigoList) {
                long id = abrigo.getId();
                String nome = abrigo.getNome();
                System.out.println(id +" - " +nome);
        }
}
```

Ele tem uma `uri`, que passamos para `dispararRequisicaoGet()` do nosso `client`. Portanto, esta é a primeira dependência que temos com outra classe externa, cujo comportamento teremos que simular, porque no teste de unidade testamos apenas a regra de `listarAbrigo()`.

Depois de fazer uma requisição para o `client` utilizando o método GET, que por sua vez, retorna uma `HttpResponse`. A partir dessa `response`, extraímos o corpo (`body`), que é um JSON retornado pela API.

Transformamos então, o `response.body()` em um _array_ de `abrigos`, pois podemos ter mais de um abrigo. Utilizamos a API de `stream` para converter esse _array_ em uma lista.

Em seguida, vamos imprimir a _string_ `Abrigos cadastrados` e seus respectivos ID's e nomes.

Primeiramente, temos que fazer todos os _mocks_ do `dispararRequisicaoGet()`, ou seja, do `client`. Queremos garantir que ao chamar o método `listarAbrigo()` e simular o retorno do `response.body()`, os abrigos cadastrados serão listados corretamente. Portanto, precisamos verificar a mensagem de "abrigos cadastrados" e a saída do ID e nome do abrigo de teste que criamos.

Assim, os dois cenários que quero validar são:

1. Se a mensagem de "abrigos cadastrados" está sendo exibida;
2. Se o ID e nome do meu abrigo estão corretos.

No entanto, para agilizar o processo, já deixamos o teste pronto. Vamos copiar e colar na classe `AbrigoServiceTest` para depois passar etapa por etapa do teste para entender como essa validação funcionará.

Vamos colar o conteúdo do teste dentro das chaves do `AbrigoServiceTest`:

```java
private ClientHttpConfiguration client = mock(ClientHttpConfiguration.class);
private AbrigoService abrigoService = new AbrigoService(client);
private HttpResponse<String> response = mock(HttpResponse.class);
private Abrigo abrigo = new Abrigo("Teste", "61981880392", "abrigo_alura@gmail.com");

@Test
public void deveVerificarSeDispararRequisicaoGetSeraChamado() throws IOException, InterruptedException {
        abrigo.setId(0L);
        String expectedAbrigosCadastrados = "Abrigos cadastrados:";
        String expectedIdENome = "0 - Teste";

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream printStream = new PrintStream(baos);
        System.setOut(printStream);

        when(response.body()).thenReturn("[{"+abrigo.toString()+"}]");
        when(client.dispararRequisicaoGet(anyString())).thenReturn(response);

        abrigoService.listarAbrigo();

        String[] lines = baos.toString().split(System.lineSeparator());
        String actualAbrigosCadastrados = lines[0];
        String actualIdENome = lines[1];

        Assertions.assertEquals(expectedAbrigosCadastrados, actualAbrigosCadastrados);
        Assertions.assertEquals(expectedIdENome, actualIdENome);
}
```

Repare que temos vários códigos em vermelho, como os _mocks_, que são os objetos que estamos simulando,`abrigo`, `setId()` e as anotações de teste.

Por isso, primeiro vamos importar essas classes. Vamos importar a `ClientHttpConfiguration`. Vamos importar o método estático `mock`, a classe `HttpResponse`, a classe `Abrigo` onde simulamos o objeto de teste.

Também a anotação `@Test`, que permite executar os testes. Nota-se que o `setId()` não compila, o que nos obriga a criá-lo.

Em seguida, vamos importar as classes `ByteArrayOutputStream()`, `PrintStream()`, os métodos estáticos `when()` e `anyString()`.

O `disparaRequisicaoGet()` está gerando uma exceção `IOException`, que não foi importada e está no nosso `throws`. Por isso, vamos importá-la também.

Para encerrar, só precisamos importar o `Assertions`.

```java
import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.domain.Abrigo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.net.http.HttpResponse;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
```

Com isso, o único detalhe que não está compilando no teste é o `setId()`, porque vamos precisar criá-lo na classe de `Abrigo`.

Terminamos o nosso primeiro teste.

## Próximo passo

No próximo vídeo, abordaremos os recursos desse código, para que possamos entendê-lo melhor o que o teste irá fazer.

Depois, vamos executar o teste para validar e entender como funciona essa validação do nosso cenário. Isso envolve verificar o comportamento de `AbrigoService` que é responsável por listar abrigos.

## Transcrição

Agora que temos o teste `AbrigoServiceTest`, que vai avaliar o comportamento do método `listarAbrigo()`, necessitamos entender o que estamos fazendo nesse teste.

## Entendendo o teste

Como mencionamos anteriormente, precisamos criar alguns dados que simulam um comportamento que é uma dependência do método que queremos testar.

No nosso caso, ao revisitar `AbrigoService`, identificamos que uma dependência externa ao método é o `dispararRequisicaooGet()`. No teste, não realizamos uma requisição para o método real do `dispararRequisicaoGet()` do `ClientHttpConfiguration`.

Por isso, temos que _mockar_, ou seja, criar um objeto simulado. Para isso, utilizamos o método `mock()` do Mockito. Ao executar o teste, ele simulará uma instância desse objeto de `ClientHttpConfiguration`. Portanto, não faz a chamada real para `ClientHttpConfiguration`, mas uma simulação.

```java
private ClientHttpConfiguration client = mock(ClientHttpConfiguration.class);
```

Já a classe `AbrigoService`, que tem o método que desejamos testar, é instanciada passando o `client` no construtor, que é o _mock_.

```java
private AbrigoService abrigoService = new AbrigoService(client);
```

Também precisamos _mockar_ a resposta, porque se observarmos em `AbrigoService` novamente, no retorno do `dispararRequisicaoGet()`, temos um `response` que é um `HttpResponse`, dentro do qual pego o `body`, que é uma _string_.

É essencial simular esse objeto `body` para que ele seja utilizado no método. Por exemplo, se `body` estiver vazio, ocorrerá um erro, porque ele tentará transformar e indicará que o `response.body()` está vazio.

Por isso, precisamos fazer todas as simulações desse objeto, simulando um `response` e um `body`, para então validar o comportamento do método.

Por essas razões, dentro do `AbrigoServiceTest`, utilizamos também o `mock()` do `HttpResponse`. Adiante, aprenderemos como fazer o _mock_ do `body`.

```java
private HttpResponse<String> response = mock(HttpResponse.class);
```

Também temos um `new Abrigo()`, que é um objeto de teste. Quando recebemos o `body`, teremos uma simulação desse abrigo, que tem o nome `Teste`, um determinado telefone e e-mail.

```java
private Abrigo abrigo = new Abrigo("Teste", "61981880392", "abrigo_alura@gmail.com");
```

No método, criamos o que esperamos que seja retornado no comportamento do método. Dessa forma, validamos se o que está acontecendo é realmente o esperado.

Por exemplo, queremos validar se, ao retornar os dados simulados, será impressa a _string_ "Abrigos cadastrados", e o abrigo de teste que estamos criando, que é o abrigo com ID "0" de nome "Teste".

No método do `AbrigoServiceTest`, teremos `expectedAbrigosCadastrados`, que é _string_ "Abrigos cadastrados". E também temos `expectedIdENome`, que é uma _string_ de ID e nome separados por um traço. Ou seja, "0 - Teste".

Usamos o `setId()` para definir o ID como 0. Portanto, precisamos criar o `setId()` na nossa classe `Abrigo`.

```java
@Test
    public void deveVerificarSeDispararRequisicaoGetSeraChamado() throws IOException, InterruptedException {
        abrigo.setId(0L);
        String expectedAbrigosCadastrados = "Abrigos cadastrados:";
        String expectedIdENome = "0 - Teste";

// código omitido…

}
```

Ao chamar a função pelo teste, ele vai pegar todos os retornos do `System.out.println`. Para isso, precisamos pegar como um `ByteArrayOutputStream()`. Por isso, temos uma instância que é um _array_ de bytes chamado `baos`, que é como pegamos o retorno do `System.out.println`, do método `listarAbrigo()`.

Criamos uma instância de `PrintStream`, que é para escrever no _array_ de bytes. E também configuramos este `printSream`, que está sendo escrito no nosso _array_ de bytes, no `setOut`().

```java
ByteArrayOutputStream baos = new ByteArrayOutputStream();
PrintStream printStream = new PrintStream(baos);
System.setOut(printStream);
```

De forma resumida, isso é para pegar, em um _array_ de bytes, aquelas duas _strings_ que estão no `System.out.println`. Dessa forma, vamos conseguir verificar se as _strings_ que esperamos estão sendo retornadas pelo método.

Em seguida, precisamos simular o comportamento do `.body()`.

```java
when(response.body()).thenReturn("[{"+abrigo.toString()+"}]");
when(client.dispararRequisicaoGet(anyString())).thenReturn(response);
```

Portanto, quando for chamado o `body` do `response`, que é o `HttpResponse`, retornaremos `abrigo.toString()`. Ou seja, uma _string_ do abrigo de teste. Desta forma, estamos criando o `body` do `response`.

Quando o `client` for chamado no teste com o método `dispararRequisicaoGet()`, retornaremos esse `response` com o `body` mockado.

```java
abrigoService.listarAbrigo();
```

Basicamente, quando chamamos o `abrigoService,listarAbrigo()`, ele vai me retornar o `response` simulado que terá `abrigo.toString`, no momento que chamar esse `dispararRequisicaoGet()`.

```java
String[] lines = baos.toString().split(System.lineSeparator());
String actualAbrigosCadastrados = lines[0];
String actualIdENome = lines[1];
```

Dentro do _array_ de _bytes_ `baos` que contém as duas _strings_ que retornam no `System.out.println`, devemos pegar o `actualAbrigosCadastrados` no espaço `0` do _array_. Ou seja, a mesma mensagem de "Abrigos cadastrados" para o teste passar.

No espaço `1`, precisamos pegar a _string_ "0 - Teste" para que é o `actualIdENome`. Somente assim o teste poderá passar.

```java
Assertions.assertEquals(expectedAbrigosCadastrados, actualAbrigosCadastrados);
Assertions.assertEquals(expectedIdENome, actualIdENome);
```

Na linha de baixo, realizamos a asserção. A _string_ de "abrigos cadastrados" que estamos esperando deve ser igual à _string_ que o método `listarAbrigo()` está retornando. O mesmo serve para o nome e o ID.

## Executar o teste de unidade

Para que o teste passe, vamos precisar criar o `setId()` no arquivo `Abrigo.java`. Assim, abrimos a estrutura do projeto, acessamos a classe `Abrigo` dentro de "src > main > java > br.com.alura > domain".

Nele, precisamos criar o `setId()`. Ao escrever `set` na classe `Abrigo`, ele já nos dá a opção de escrever o `setId()`.

> `Abrigo.java`:

```java
public class Abrigo {

   // código omitido…

    public void setId(Long id) {
        this.id = id;
    }
}
```

Se voltamos agora para a classe de teste, todo o teste está compilando. Assim como fizemos com a função `main()`, podemos executar o teste clicando no ícone de "play" à esquerda do nome do método (ou "Ctrl + Shift + F10").

Após clicar em "Run", ele deveria retornar algum "OK" dizendo que o teste passou. Contudo, o teste não passou.

Por quê? Deu uma `JsonMappingException`, porque era esperado um formato JSON, já que o `body` do `client` é um JSON. E o `ObjectMapper()` faz a transformação de um JSON para um objeto.

Mas estamos simulando o objeto de retorno do `body` como um `abrigo.toString()`, que não é um formato JSON.

Portanto, como simular um formato JSON? Podemos usar o próprio método `toString()`. Podemos fazer o `@Override` do `toString()` na classe `Abrigo`, simulando como se fosse um JSON.

Essa simulação já está pronta, basta copiar o seguinte código:

```java
@Override
public String toString() {
        return """
                     "id":%s,"nome":"%s","telefone":"%s","email":"%s"
                     """.formatted(this.id, this.nome, this.telefone, this.email);
}
```

Na classe `Abrigo`, após o método `setId()` que acabamos de criar, vamos colar o código copiado para fazer o `@Override` do método `toString()`.

Basicamente, simulamos o retorno do `toString`() como se fosse um JSON. Em um JSON, temos sempre pares de chave e valor.

Dessa forma, vamos criar o `id`, seguido de dois pontos `:`. Estamos usando uma formatação de strings, onde utilizamos `%s` e posteriormente formatamos o `%s`, substituindo-o pelo `id`. Nesse caso, é o valor zero que atribuímos no teste.

O mesmo é feito para o `nome`, `telefone` e `email`. Portanto, estamos simulando um retorno do `body` como se fosse um JSON.

Agora, podemos voltar ao `AbrigoServiceTest.java`. Quando executamos a aplicação novamente, todos os testes passaram com sucesso.

> - AbrigoServiceTest (296 ms)
>     - deveVerificarSeDispararRequisicaoGetSeraChamado (296 ms)

Ou seja, as asserções estão funcionando.

Agora, qual é a **vantagem** disso?

Por exemplo, suponha que alguém acidentalmente removeu a exibição do nome do `System.out.println`, deixado apenas o `id` na classe `AbrigoService`.

Se precisamos verificar se isso está causando algum problema, sem os testes que criamos, teríamos que iniciar a aplicação, realizar todos aqueles testes manuais, para finalmente constatar que não está mais mostrando o `id` e o nome, apenas o `id` quando iniciamos a classe `Abrigo`.

Agora com o teste automático da classe `AbrigoServiceTest`, é esperado o `id` e o `nome` do abrigo. Nessa situação, o teste não seria aprovado e indicaria que algo deu errado:

> org.opentest4j.AssertionFailedError:
> 
> - Expected: 0 - Teste
> - Actual: 0

O feedback com o teste automático fica muito mais rápido.

O intuito era mostrar para vocês a rapidez do feedback que temos com os testes de unidade. Podemos realizar testes de vários comportamentos, mas vamos fazer somente esse teste nesse vídeo.

Ao longo dos próximos vídeos, vamos conferir se é necessário realizar outros testes para continuar a melhorar a aplicação.

## Transcrição

Bom, agora que criamos nosso primeiro teste, é hora de verificar se há alguma refatoração adicional que podemos fazer nesse teste que criamos para o método `listarAbrigo()` do `AbrigoService`.

## Melhorar comportamento `AbrigoService`

Na classe `AbrigoService`, podemos conferir que no método `listarAbrigo()` existe um comportamento que pode ser melhorado.

Vamos analisar: qual é o comportamento atual? Quando o `listarAbrigo()` é chamado, uma requisição GET é disparada para a API. Essa API fornece uma resposta, cujo corpo capturamos e inserimos no `responseBody`. Por fim, transforma em um _array_ de `abrigos`, de modo que possamos ter um ou mais abrigos.

No entanto, nada impede que retorne um _array_ vazio. Por exemplo, a lista de abrigos pode estar vazia. Se essa lista `abrigoList` estiver vazia, ainda será mostrada a mensagem "Abrigos cadastrados: nenhum".

Idealmente, quando existem abrigos, a mensagem é "Abrigos cadastrados" e, em seguida, o ID e o nome dos abrigos são mostrados.

Por isso, seria bom adicionar uma validação. Se não tem nenhum abrigo cadastrado, deve exibir uma mensagem "Não há abrigos cadastrados". Mas, se há pelo menos um abrigo cadastrado, é permitido a entrada no bloco `for` e executar uma lógica diferente para apresentar o ID e o nome do abrigo.

Vamos começar a aprimorar essa lógica. Para isso, vamos criar uma condicional, um `if`.

Após o `abrigoList` onde transformamos o _array_ em lista, vamos abrir `if` e usamos o método `isEmpty()` em `abrigoList`.

Em seguida, vamos definir que se `abrigoList` estiver vazio, vamos usar `System.out.println()` e mostrar a mensagem `Não há abrigos cadastrados` entre aspas.

Depois, para a condição de senão (`else`), movemos todo o conteúdo do segundo `System.out.println()` até o final do bloco `for` para dentro do bloco `else`.

> `AbrigoService.java`:

```java
public void listarAbrigo() throws IOException, InterruptedException {
        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = client.dispararRequisicaoGet(uri);
        String responseBody = response.body();
        Abrigo[] abrigos = new ObjectMapper().readValue(responseBody, Abrigo[].class);
        List<Abrigo> abrigoList = Arrays.stream(abrigos).toList();
        if (abrigoList.isEmpty()) {
                System.out.println("Não há abrigos cadastrados");
        } else {
                System.out.println("Abrigos cadastrados:");
                for (Abrigo abrigo : abrigoList) {
                                long id = abrigo.getId();
                                String nome = abrigo.getNome();
                                System.out.println(id +" - " +nome);
        }
}
```

Assim, o código fica mais legível. Com essa validação conseguimos economizar algum processamento, pois, antes, íamos até o bloco `for`. Agora, se verificarmos que a lista está vazia, nem entramos no bloco `for`, apenas exibimos a mensagem "Não há abrigos cadastrados".

Para melhorar ainda mais, vamos separar toda essa lógica do bloco `for` e de exibição da mensagem "Abrigos cadastrados" em uma função.

Na linha abaixo, vamos criar uma função `private void` chamada `mostrarAbrigos()`. Vamos mover toda a lógica do `System.out.println()` até o final do bloco `for`, que está dentro do `else`, para dentro da função `mostrarAbrigos()`.

Teremos que passar a lista como parâmetro para `mostrarAbrigos()`, já que vamos iterar sobre essa lista dentro do `for`. Como parâmetro, vamos receber um `List<Abrigo>` que chamaremos de `abrigos`.

No `for`, ao invés de `abrigoList`, usamos a variável `abrigos` que acabamos de criar, a qual recebe a lista como parâmetro.

No `else` de `listarAbrigo()`, podemos chamar `mostrarAbrigos()` e passar `abrigoList`.

```java
public void listarAbrigo() throws IOException, InterruptedException {
        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = client.dispararRequisicaoGet(uri);
        String responseBody = response.body();
        Abrigo[] abrigos = new ObjectMapper().readValue(responseBody, Abrigo[].class);
        List<Abrigo> abrigoList = Arrays.stream(abrigos).toList();
        if (abrigoList.isEmpty()) {
                System.out.println("Não há abrigos cadastrados");
        } else {
                mostrarAbrigos(abrigoList);
        }
}

private void mostrarAbrigos(List<Abrigo> abrigos) {
        System.out.println("Abrigos cadastrados:");
        for (Abrigo abrigo : abrigos) {
                long id = abrigo.getId();
                String nome = abrigo.getNome();
                System.out.println(id +" - " +nome);
        }
}
```

O código está muito melhor agora, com a devida validação, evitando processamento desnecessário.

Outro detalhe que podemos fazer nessa classe é verificar as importações. Existem alguns `imports` que não estão mais sendo referenciados, pois não usamos mais o `gson` para trabalhar com objetos, estamos usando nossos próprios objetos.

> Devemos deletar os `imports` não referenciados, o que torna a classe muito mais limpa. Podemos usar o atalho "Ctrl + Alt + O" no IntelliJ.

Apesar dessas refatorações do código, não mudamos o comportamento de `listarAbrigo()`. Continuamos a ter toda a lógica de exibir os abrigos, mas agora temos uma melhoria para quando não houver abrigos. Pois, podemos exibir a mensagem "não há abrigos cadastrados".

Já que não modificamos o comportamento, vamos voltar ao teste `AbrigoServiceTest` e mandar executar essa classe. Esse teste precisa estar funcional, ou seja, não pode falhar.

Portanto, quando apertamos "Run" (ou "Ctrl + Shift + F10"), o teste passa. Porque no cenário do teste, continuamos recebendo um abrigo como resposta simulada da API. Assim, no final, devemos ver a mensagem "abrigos cadastrados" e o ID e nome do teste.

## Validar `responseBody`

Mas, vamos renomear esse teste? Vamos mudar `deveVerificarSeDispararRequisicaoGetSeraChamado()` para `deveVerificarQuandoHaAbrigo()`. Portanto, quando há abrigo, ele precisa ser validado e fornecer o resultado esperado. Ou seja, a mensagem "abrigos cadastrados" precisa ser igual ao retorno da função.

Com isso, podemos testar agora também quando não há abrigo, que seria quando o `body` estivesse vazio. Ou seja, quando não houvesse um retorno da API e precisasse receber a mensagem "não há abrigos cadastrados".

Para isso, o que vamos fazer? Vamos copiar todo esse teste `deveVerificarQuandoHaAbrigo()` porque eles serão bem semelhantes. Vamos apenas mudar alguns detalhes e o nome. Após copiar o teste, pulamos duas linhas e colamos o teste.

Agora, vamos modificar o nome do teste para `deveVerificarQuandoNaoHaAbrigo()`.

> `AbrigoServiceTest.java`:

```java
public class AbrigoServiceTest {

    // código omitido…

    @Test
    public void deveVerificarQuandoHaAbrigo() throws IOException, InterruptedException {
        // código copiado
    }

    @Test
    public void deveVerificarQuandoNaoHaAbrigo() throws IOException, InterruptedException {
        // código colado
    }
}
```

Quando não há abrigo, só vamos obter uma única mensagem, que é "não há abrigos cadastrados". Portanto, vamos adaptar todo o código do teste para que ele tenha apenas uma mensagem para validar.

Antes tínhamos `expectedAbrigosCadastrados` e `ExpectedIdENome`. Vamos apagar `ExpectedIdENome` e renomear `expectedAbrigosCadastrados` para `expected`, pois agora só esperaremos por uma mensagem. Em vez do `expected` receber a _string_ "Abrigos cadastrados", vamos colocar "Não há abrigos cadastrados".

No `thenReturn()` do `when(response.body())`, antes ele passava o `abrigo.toString()`, que era naquele formato JSON simulado. Mas agora queremos simular quando o _array_ vazio retorna.

Basta tirar tudo que está entre as chaves de dentro do colchetes do `thenReturn()`. Assim, vamos deixar só os colchetes vazios `[]` entre aspas. Dessa forma, simulamos um retorno vazio da API.

Vamos chamar `abrigoService.listarAbrigo()` do mesmo jeito. Não precisamos modificar essa linha.

Em `String[] lines`, pegávamos o _array_ de strings que vinha com as duas _strings_ quando há retorno da API. Agora, quando não há retorno da API, só vamos ter um retorno que é aquela mensagem "Não há abrigos cadastrados".

Portanto, não precisamos pegar `lines[0]` e salvar em `actualAbrigosCadastrados` e pegar `lines[1]` e salvar em `actualIdENome`. Só vamos salvar o `line[0]`, pois só precisamos pegar o primeiro espaço do _array_ que contém a mensagem.

Por isso, apagamos a linha `actualIdENome` e também renomeamos a variável que recebia `lines[0]` para somente `actual`. Portanto, o `actual` é a `lines[0]`.

Por fim, não precisamos de duas `Assertions`. Por isso, deixamos apenas uma linha com `Assertions.assertEquals()`. Em `assertEquals()`, vamos passsar o `expected` e o `actual`.

Desse modo, o teste precisa garantir que o `expected` é igual ao `actual`. Portanto, o `expected` é a _string_ "não há abrigos cadastrados" e o retorno da API deve ser a mesma mensagem.

```java
@Test
public void deveVerificarQuandoNaoHaAbrigo() throws IOException, InterruptedException {
        abrigo.setId(0L);
        String expected = "Não há abrigos cadastrados";

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream printStream = new PrintStream(baos);
        System.setOut(printStream);

        when(response.body()).thenReturn("[]");
        when(client.dispararRequisicaoGet(anyString())).thenReturn(response);

        abrigoService.listarAbrigo();

        String[] lines = baos.toString().split(System.lineSeparator());
        String actual = lines[0];

        Assertions.assertEquals(expected, actual);
}
```

O que vamos fazer agora? Vamos executar o teste. Para isso, clicamos no botão de "play" à esquerda do método e apertamos `Run deveVerificarQuandoNaoHaAbrigo()`.

Ao fazer isso, o teste precisa passar.

> - AbrigoServiceTest (271 ms)
>     - deveVerificarQuandoNaoHaAbrigo (271 ms)

## Conclusão

Estamos obtendo feedbacks muito mais rapidamente agora. Fizemos todas aquelas alterações de validação, extraímos o `for` para um método. Realizamos algumas mudanças úteis, mesmo sem alterar o comportamento.

Anteriormente, precisaríamos iniciar a aplicação para poder verificar a mensagem de "Não há abrigos cadastrados". Teríamos que cadastrar um abrigo, e depois teríamos que apagar esse abrigo para receber a mensagem.

Portanto, com os testes automatizados não só ganhamos mais segurança, como também o feedback é muito mais rápido.

A ideia era, além de melhorar o nosso código de `AbrigosService`, era criar um novo teste e mostrar para você as vantagens de aplicar testes na aplicação.

# Mão na massa: criando teste do método importarPetsDoAbrigo

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138309/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138309/question)

Durante os vídeos, vimos como criar testes de unidade usando jUnit e mockito. Com os recursos dessas bibliotecas, conseguimos criar os testes `deveVerificarQuandoHaAbrigo` e `deveVerificarQuandoNaoHaAbrigo`. Uma característica desses testes, é que fomos capazes de validar se a String retornada pelo `System.out.println` da classe era correta. Aprendemos a pegar essas Strings nos testes, através de um objeto do tipo `ByteArrayOutputStream`. Se olharmos como para outros métodos, como o `importarPetsDoAbrigo` da classe `PetService`, que tem uma entrada de dados, com o `Scanner`, como faríamos para para passar essas Strings através do nosso teste? Veja a solução na Opinião do Instrutor

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138309/opinion)

Para criar este tipo de teste, precisamos usar um objeto do tipo `ByteArrayInputStream`, ficando com um código semelhante a esse.

```java
@Test
    public void deveVerificarSeDispararRequisicaoPostSeraChamado() throws IOException, InterruptedException {
        String userInput = String.format("Teste%spets.csv",
                System.lineSeparator());
        ByteArrayInputStream bais = new ByteArrayInputStream(userInput.getBytes());
        System.setIn(bais);

        when(client.dispararRequisicaoPost(anyString(), any())).thenReturn(response);

        petService.importarPetsDoAbrigo();
        verify(client.dispararRequisicaoPost(anyString(), anyString()), atLeast(1));
    }
```

Como podemos ver, foi simulado as Strings que serão passadas para o `Scanner`, as separando em Teste, que será a primeira entrada e pets.csv, que será a segunda entrada. Após isso, adicionamos o objeto como byte em um `ByteArrayInputStream` e fazemos o `System.setIn`. A partir deste momento, podemos criar a lógica do que queremos validar do método, pois quando executarmos o teste, as informações de entrada que simulamos, serão enviadas e o teste funcionará. Para testar, você pode tentar executar o teste sem as 3 primeiras linhas e observar o resultado.

## Transcrição

Agora nosso código está significativamente melhor. Fizemos a refatoração, separando em classes com responsabilidades bem definidas. Além disso, criamos **testes de unidade** que nos dão mais confiança para proceder com a refatoração.

Os testes de unidade garantem que, se estivermos refatorando um comportamento de uma classe que não deve ser alterado, qualquer erro de refatoração será destacado. A partir disso é possível ter um feedback quase instantâneo, assim não corremos o risco de liberar algo para a produção e descobrir em seguida que o código está errado ou que tem bugs. Portanto, avançamos bastante nas boas práticas.

> `AdopetConsoleApplication.java`

Se analisarmos todo o código da `AdopetConsoleApplication` e compararmos como era no início do curso, também conseguimos notar que teve uma grande melhora.

Antes, a função `main()` tinha todos os códigos da aplicação. Agora essa função `main` contém apenas a amostra dos menus, além dos `ifs` e `else` que direcionam o fluxo do programa, dependendo da opção escolhida pelo usuário, gerenciando para onde a requisição vai.

Porém, mesmo com esse progresso ainda podemos realizar mais **aprimoramentos**. Se analisarmos essa classe, encontramos alguns _bad smells_.

Por exemplo, dentro da função `main()` temos a instância de vários objetos, como a instância `ClientHttpConfiguration()`, pois precisamos passá-lo para o `AbrigoService()`, que também está sendo instanciado. Além disso, o mesmo acontece com o `PetService()`.

A `main` aqui está acoplada com essas três classes, quando há esse forte acoplamento é ruim até mesmo para a evolução do código. Pois, se quisermos mudar algo no construtor de `AbrigoService()`, ela está ligada a `AdopetConsoleApplication`. Sendo assim, onde estiver instanciada, teremos que alterar o código.

Isso acaba causando muitos problemas. Podemos ter um código muito grande com esse acoplamento entre classes de maneira descontrolada. Assim, acabamos não evoluindo o código, pois não sabemos o que será impactado ao alterar o `AbrigoService()`. O acoplamento é ruim nesse sentido.

Portanto, precisamos melhorar isso, fazer com que as instâncias estejam em um local que possua mais controle, ou seja, que seja mais específico para instanciar essa classe. Esse é um ponto que precisamos melhorar nesse acoplamento.

Além disso, os `ifs` e `elses` também são _bad smells_ no código. Suponha que temos 5 opções no código, se amanha tivermos 10, teremos mais `elses` e se tivermos 20, mais ainda, piorando a legibilidade.

Então, esses serão os dois pontos de melhoria que trabalharemos a partir de agora. Para melhorar a parte do acoplamento precisamos entender que estamos instanciando essas classes por algum motivo.

Nesse caso, instanciamos `ClientHttpConfiguration()` para passar como parâmetro de `AbrigoService()` e `PetService()`. Instanciamos `AbrigoService()` e `PetService()`, pois precisamos, dentro dos `ifs` das opções, chamar os métodos específicos de cada opção.

Por exemplo, opção 1 é `listarAbrigo()` que está em `AbrigoService()`. Então, precisamos dessa instância para conseguir apontar para esse método, assim como acontece com as demais opções.

Para começar a diminuir esse acoplamento e melhorar a legibilidade do código, transformaremos a chamada de cada um dos métodos em um objeto único.

Por exemplo, teremos um comando que vai direcionar para o método `listarAbrigo()` e outro para `cadastrarAbrigo()`. Teremos um objeto único que será o responsável por saber qual classe e objeto irá direcionar e esse objeto terá o comportamento de chamar o `ListarAbrigo()`.

Dessa maneira, teremos uma única instância de um objeto chamado `command` e cada um desses comandos terão a responsabilidade de instanciar o `PetService()` ou o `AbrigoServic()e` e chamar o método esperado.

# Padrão de projeto Command

Faremos isso aplicando o padrão de projeto `command`, que é um _Design pattern_, ou seja, um **padrão de projeto** que resolve problemas frequentes.

Então, quando começamos a perceber _bad smells_ no nosso código, é o momento ideal para buscar padrões de projetos, pois sempre terá algum que resolverá o problema.

Usaremos o `command` para que ao invés de chamar o método do `AbrigoService()` ou o método do `PetService()`, invoque um comando que será o responsável por implementar a lógica de chamada desses métodos.

O primeiro passo é abrir a estrutura de projetos. Em `br.com.alura`, clicamos com o botão direito e depois em "New > Java Class". Nomeamos de `Command` e selecionamos a opção `Interface`.

> `Command.java`

Essa interface terá somente um `public void execute()`, ou seja, um método `execute`.

```csharp
public inteface Command {

        public void execute()
}
```

Em seguida, novamente em `br.com.alura`, clicamos com o botão direito e depois em "New > Java Class" chamada `CommandExecute` do tipo `Class`. Ela será responsável por chamar o comando que será executado.

Dentro das chaves de `CommandExecutor {}` escrevemos `public void executeCommand()` que receberá `Command command`, a interface. Adicionamos chaves e dentro passamos `command.execute()`.

A ideia é ter uma instância de `command.execute()`, que ao ser instanciada receberá um `Command`, pois estamos trabalhando com polimorfismo aqui, que será uma implementação da interface. Essa implementação terá um método `execute` que terá a lógica de chamar o comando correto.

Agora, precisamos criar os comandos que implementarão o `Command`. Desta forma, naa aplicação `AdopetConsoleApplication`, vamos referenciar o `CommandExecute` ao invés de todos os métodos e instâncias.

Agora que criamos a interface e o `CommandExecute`, precisamos criar os comandos. Porém, daremos continuidade no vídeo seguinte.

Recomendamos que você analise o código nesse estado atual, assim você poderá perceber o quanto vamos melhorá-lo.

**Até lá!**

## Transcrição

Na aula anterior, conhecemos o padrão `Command` e criamos a interface com o método `execute()`.

Repare que ao abrir o arquivo `Command.java` a palavra `public` que vem antes do método está cinza. Isso acontece, pois não precisamos explicitar, a interface já é pública por padrão. Sendo assim, podemos apagar.

# Aplicando o padrão Command

Para aplicar o padrão `command` e melhorar o código, criaremos uma classe. Para isso, em `br.com.alura`, clicamos com o botão direito e depois em "New > Java Class", nomeamos de `ListarAbrigoCommand` e selecionamos "Class".

Logo após a classe `ListarAbrigoCommand` escrevemos `implements Command`. Feito isso, repare que aparece um sublinhado vermelho na classe, indicando que não está compilando.

Ao passar o mouse no sublinhado, a ferramenta indica que é preciso implementar um método. Ao clicar nessa opção abre uma janela indicando que é o método `execute()`, clicamos em "Ok" e a ferramenta insere a estrutura no código.

```java
package br.com.alura;

public class ListarAbrigoCommand implements Command {

    @Override
    public void execute() {
}
```

No método `Execute` teremos a lógica de chamar `abrigoService` e o método `listarAbrigo()`.

> `AdopetConsoleApplication.java`

Para isso, precisamos do `ClientHTTPConfiguration`, sua instância e a instância de `AbrigoService()`. Então, no arquivo `AdopetConsoleApplication.java`, copiamos as linhas 11 e 12.

> `ListarAbrigoCommand.java`

Feito isso, abaixo de `public void execute ()`, colamos. Repare que a ferramenta já realiza automaticamente o `import`.

Na linha abaixo, escrevemos `abrigoService.listarAbrigo()`. Feito isso, a ferramenta indica novamente um erro de compilação. Ao passar o mouse, descobrimos que precisamos adicionar as `exceptions` na assinatura do método e tratar por meio do `Try/Catch`, caso contrário é preciso deixar explícito que método pode lançar uma dessas duas exceções.

Nesse caso, não adicionaremos na assinatura do método, pois precisaríamos alterar a interface `Command` r pode ser que esse método nem sempre terá um comando que pode lançar esse tipo de exceção.

O que faremos é tratar com o `TryCatch`. Então, abaixo de `public void execute()`, dentro de chaves, passamos `try{}`. Em seguida, copiamos todo o conteúdo de instância e colamos nas chaves.

```java
package br.com.alura;

import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.service.AbrigoService;

public class ListarAbrigoCommand implements Command {

    @Override
    public void execute() {
        try {
            ClientHttpConfiguration client = new ClientHttpConfiguration();
            AbrigoService abrigoService = new AbrigoService(client);
                        
                         abrigoService.listarAbrigo();
        }
}
```

Na linha abaixo, dentro de `try`, passamos o `catch()`. Dentro dos parênteses passamos `IOException` seguido da barra reta e `InterruptedException e`.

Na linha abaixo, escrevemos `System.out.println()` e nos parênteses passamos `e.getMessage()`.

```java
package br.com.alura;

import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.service.AbrigoService;

import java.io.IOException;

public class ListarAbrigoCommand implements Command {

    @Override
    public void execute() {
        try {
            ClientHttpConfiguration client = new ClientHttpConfiguration();
            AbrigoService abrigoService = new AbrigoService(client);

            abrigoService.listarAbrigo();
        } catch (IOException | InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

Se houver exceção no momento em que eu chamar o `ListarAbrigoCommand`, se ocorrer `IOException` ou `InterruptedException` será imprimida a mensagem da exceção no meu método `Execute`.

> `AdopetConsoleApplication`

Para usarmos o comando na classe `AdopetConsoleApplication`, abrimos o arquivo. Na linha 11, dentro de `main()`, vamos instanciar uma `CommandExecutor ececutor` igual à `new CommandExecutor()`.

```csharp
 public static void main(String[] args) {
        CommandExecutor executor = new CommandExecutor();
        System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
        try {
            int opcaoEscolhida = 0;
            while (opcaoEscolhida != 5) {
                exibirMenu();
                                
//Trecho omitido
```

Em seguida, dentro de `if(opcaoEscolhida ==1)`, apagamos a linha 30 e escrevemos `executor.executeCommand()` passando `new ListarAbrigoCommand()` nos parênteses.

```csharp
//Trecho omitido

if (opcaoEscolhida == 1) {
        executor.executeCommand(new ListarAbrigoCommand());
} else if (opcaoEscolhida == 2) {
        abrigoService.cadastrarAbrigo();
} else if (opcaoEscolhida == 3) {
        petService.listarPetsDoAbrigo();
} else if (opcaoEscolhida == 4) {
        petService.importarPetsDoAbrigo();
} else if (opcaoEscolhida == 5) {
        break;
} else {
        System.out.println("NÚMERO INVÁLIDO!");
        opcaoEscolhida = 0;
}
}

//Trecho omitido
```

Assim, quando passarmos o `ListarAbrigoCommand()`, ele será enviado para o `ExecuteCommand()`, que chama o método `execute`. O método `execute` do `ListarAbrigoCommand()` chama o `ListarAbrigo()`. Assim, temos uma lógica para fazer essas chamadas.

Criamos essa estrutura para a opção escolhida 1, porém após implementar esses comandos para todas as demais opções, não precisaremos mais dessas instâncias aqui, de `ClientHTTPConfiguration`, `AbrigoService` e `PatchService`, porque essas estarão contidas em cada um dos comandos individuais.

Vocês pode estar se perguntando, mas essa estratégia não irá resultar em repetição de código? Porém esse é um caso aceitavel, pois se precisarmos alterar qualquer coisa nos comandos, temos os locais específicos para isso. Portanto, temos controle de onde eles estarão para que possam ser alterados.

A próxima etapa será seguir a mesma lógica e criar as classes `CadastrarAbrigo()`, `listarPetsDoAbrigo()` e `ImportarPerDoAbrigo()` com o sufixo `Command`.

> `CadastrarAbrigoCommand.java`

Para isso, em `br.com.alura`, clicamos com o botão direito e depois em "New > Java Class", nomeamos de `CadastrarAbrigoCommand` e selecionamos a opção class.

Na primeira linha, após a classe, escrevemos `implements Command`. Clicamos no sublinhado da ferramenta e inserimos o método `execute()`.

```java
package br.com.alura;

public class CadastrarAbrigoCommand implements Command {

    @Override
    public void execute() {
    }
}
```

Dentro das chaves, na linha abaixo passamos o `try` e abaixo o `catch()`. Nas chaves, escrevemos `IOException | InterrupterException e`.

Adicionamos chaves e passamos `System.out.println()`, nos parênteses escrevemos `e.getMessage()`.

Em seguida, abrimos o arquivo `ListarAbrigoCommand.java` e copiamos o conteúdo de `try`. Feito isso, voltamos para o `CadastrarAbrigoCommand` e colamos em `try`.

Por fim, na linha acima de `catch()` escrevemos `abrigoService.cadastrarAbrigo()`.

```java
package br.com.alura;

import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.service.AbrigoService;

import java.io.IOException;

public class CadastrarAbrigoCommand implements Command {

    @Override
    public void execute() {
        try {
            ClientHttpConfiguration client = new ClientHttpConfiguration();
            AbrigoService abrigoService = new AbrigoService(client);

            abrigoService.cadastrarAbrigo();
        } catch (IOException | InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

> `AdopetConsoleApplication.java`

Agora, quando voltamos para a classe `AdopetConsoleApplication`, dentro de `else if (opcaoescolhida ==2)`, apagamos a linha 32 e escrevemos `executor.executeCommand(new CadastrarAbrigoCommand())`.

```csharp
//Trecho omitido

if (opcaoEscolhida == 1) {
        executor.executeCommand(new ListarAbrigoCommand());
} else if (opcaoEscolhida == 2) {
        executor.executeCommand(new CadastrarAbrigoCommand());
} else if (opcaoEscolhida == 3) {
        petService.listarPetsDoAbrigo();
} else if (opcaoEscolhida == 4) {
        petService.importarPetsDoAbrigo();
} else if (opcaoEscolhida == 5) {
        break;
} else {
        System.out.println("NÚMERO INVÁLIDO!");
        opcaoEscolhida = 0;
}
}

//Trecho omitido
```

Ao fazer isso, na linha 13, o `abrgoService` fica cinza, pois perde a referência. Então apagamos toda essa linha de código.

```java
//Trecho omitido
public static void main(String[] args) 
        { CommandExecutor executor = new CommandExecutor(); 
        ClientHttpConfiguration client = new ClientHttpConfiguration(); 
        PetService petService = new PetService(client); 
        System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
        try {
        }

//Trecho omitido
```

Portanto, quando fizermos isso com as demais classes, poderemos fazer o mesmo com `PetService` e `ClientHttpConfiguration`, pois não será mais necessário passar como parâmetro de nenhuma classe que esteja instanciada.

Agora, nossa meta é criar os outros comandos para a `PetService`. Deixaremos essa atividade como desafio para você.

No próximo vídeo, analisaremos esse código e verificar se há mais melhorias para serem feitas.

## Transcrição

No vídeo anterior conhecemos o padrão `command` que utilizamos para aprimorar a classe `AdopetConsoleApplication` e também deixamos um desafio, que era implementar os comandos `listarPetsDoAbrigoCommand` e `ImportarPetsDoAbrigoCommand`.

Sendo assim, no arquivo `AdopetConsoleApplication.java`, as classes ficaram da seguinte forma:

```csharp
//Trecho omitido

if (opcaoEscolhida == 1) { 
        executor.executeCommand(new ListarAbrigoCommand());
} else if (opcaoEscolhida == 2) {
        executor.executeCommand(new CadastrarAbrigoCommand());
} else if (opcaoEscolhida 3) {
        executor.executeCommand(new ListarPetsDoAbrigo Command());
}else if (opcaoEscolhida == 4) { 
        executor.executeCommand(new ImportarPetsDoAbrigoCommand());
} else if (opcaoEscolhida == 5) { 
        break;
} else {
        System.out.println("NÚMERO INVÁLIDO!");
        opcaoEscolhida = 0;

//Trecho omitido
```

> `ListarPetsDoAbrigoCommand`

Se acessarmos a classe `ListarPetsDoAbrigoCommand`, encontramos o método `execute()`, pois implementamos `Command`, abaixo, instanciamos o `ClientHttpConfiguration` o `PetService`, tudo isso dentro de `try/catch` pois não queremos mudar a assinatura do método da interface.

```java
package br.com.alura;

import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.service.PetService;

import java.io.IOException;

public class ListarPetsDoAbrigoCommand implements Command {

    @Override
    public void execute() {
        try {
            ClientHttpConfiguration client = new ClientHttpConfiguration();
            PetService petService = new PetService(client);

            petService.listarPetsDoAbrigo();
        } catch (IOException | InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

Ao abrir `ImportarPetAbrigoCommand`, temos um código similar, mas com a chamada de método modificada para importar patches do abrigo.

```java
package br.com.alura;

import br.com.alura.client.ClientHttpConfiguration;
import br.com.alura.service.PetService;

import java.io.IOException;

public class ImportarPetsDoAbrigoCommand implements Command {

    @Override
    public void execute() {
        try {
            ClientHttpConfiguration client = new ClientHttpConfiguration();
            PetService petService = new PetService(client);

            petService.importarPetsDoAbrigo();
        } catch (IOException | InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

> `AdopetConsoleApplication`

Ao acessar a `AdopetConsoleApplication`, notamos que na linha 14 o `petService` está cinza, ou seja, não é mais referenciado. Então, podemos apagar essa linha. Ao fazer isso, o client, da linha 13 também passa a não ser referenciado, também apagamos essa linha.

```typescript
//Trecho omitido

 public static void main(String[] args) {
        CommandExecutor executor = new CommandExecutor();
        System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
        try {
                }

//Trecho omitido
```

Ao remover as referências, reduzimos o acoplamento entre diferentes classes na aplicação. Além disso, ao analisarmos os imports, percebemos que a classe está se tornando mais eficiente.

Com o código atual, executamos o comando apropriado com base na opção escolhida através do nosso `CommandExecutor`. Portanto, se escolhermos a opção 1 para listar abrigos cadastrados, será executado o comando correspondente de maneira isolada.

# Testando o padrão Command

Para verificar se tudo está funcionando, vamos iniciar nossa aplicação. Para isso, clicamos no botão play, localizado na lateral esquerda da tela. Feito isso, observamos que tudo está funcionando corretamente.

Em seguida, abrimos o terminal e passamos o comando `java -ajar api.jar` para subir a API.

```undefined
java -ajar api.jar
```

Embora não temos mais salvo os dados anteriores, se novamente rodarmos o código clicando no botão play e depois passarmos o número `1` referente a opção de listar abrigos cadastrados, temos o retorno:

> Não há abrigos cadastrados

Assim, a classe principal está mais enxuta, com pouco acoplamento e as mesmas funcionalidades.

Agora, precisamos tratar os `ifs`e `elses`, afinal, sempre que precisamos acrescentar um novo comando ou opção, somos obrigados a criar novos, deixando o código extenso.

Faremos isso na próxima aula. **Até lá!**


## Transcrição

Na classe `AdopetConsoleApplication` identificamos outro _bad smell_, que são os `ifs` e `elses`. Sendo assim, vamos refatora-los. Para isso, utilizaremos um recurso da linguagem Java conhecido como `switch`, que foi aprimorado nas versões mais recentes.

Para ilustrar, abrimos o Google Chrome e acessamos a [documentação da Oracle](https://docs.oracle.com/en/java/javase/17/language/pattern-matching-switch-expressions-and-statements.html#GUID-E69EEA63-E204-41B4-AA7F-D58B26A3B232). Nele, encontramos informações sobre o *Pattern Matching for Switch Expressions and Statements.

Antes o `switch` tinha limitações, só podíamos utilizar números, _strings_ ou constantes do tipo `enum`. Com a melhora do `switch` temos mais flexibilidade e podemos trabalhar com código mais avançado.

Por exemplo, podemos receber um objeto, do tipo `shape` e verificar se é do tipo `Rectangle` ou `Circle`, utilizando polimorfismo e aplicando operações variáveis conforme o tipo. Isso representa uma grande melhoria no uso do `switch`.

Esse documento destaca como podemos refatorar código que antes utilizava condicionais `if` e `else`. De fato, antes, se quiséssemos realizar essas operações, teríamos que criar diversos `ifs` para verificar o tipo de `shape`.

Se acessarmos nosso código, encontraremos várias semelhanças, pois temos muitos `if` e `else`. Por isso, usaremos o`switch` para refatorar nosso código.

# Melhorando o código

> `AdopetConsoleApplication.java`

Na linha 24, escrevemos `smitch ()`. Nos parênteses passamos `opcaoEscolhida`. Na linha abaixo, ao invés de `if`, passamos `case 1 ->`seguido do trecho que estava no `if`, nesse caso `executor.executeCommand(new ListarAbrigoCommand())`.

Na linha abaixo, escrevemos `case 2 ->` seguido de `executor.executeCommand(new CadastrarAbrigoCommand())`. Repetimos o mesmo processo com o `case 3` e `case '4`.

Depois, na opção 5 que iriamos finalizar o programa, podemos passar `case 5` e chamar o `opcaoEscolhida = 0;`. assim, se um número inválido for inserido, o sistema retorne=ará para o menu inicial. Isso melhora a experiência do usuário, já que é mais efetivo do que apenas mostrar uma mensagem de erro.

Feito isso, podemos apagar a estrutura anterior de `if` e `else`.

```csharp
package br.com.alura;

import java.util.Scanner;

public class AdopetConsoleApplication {

    public static void main(String[] args) {
        CommandExecutor executor = new CommandExecutor();
        System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
        try {
            int opcaoEscolhida = 0;
            while (opcaoEscolhida != 5) {
                                System.out.println("\nDIGITE O NÚMERO DA OPERAÇÃO DESEJADA:");
                                System.out.println("1 -> Listar abrigos cadastrados");
                                System.out.println("2 -> Cadastrar novo abrigo");
                                System.out.println("3 -> Listar pets do abrigo");
                                System.out.println("4 -> Importar pets do abrigo");
                                System.out.println("5 -> Sair");

                String textoDigitado = new Scanner(System.in).nextLine();
                opcaoEscolhida = Integer.parseInt(textoDigitado);

                switch (opcaoEscolhida) {
                    case 1 -> executor.executeCommand(new ListarAbrigoCommand());
                    case 2 -> executor.executeCommand(new CadastrarAbrigoCommand());
                    case 3 -> executor.executeCommand(new ListarPetsDoAbrigoCommand());
                    case 4 -> executor.executeCommand(new ImportarPetsDoAbrigoCommand());
                    case 5 -> System.exit(0);
                    default -> opcaoEscolhida = 0;
                }
            }
            System.out.println("Finalizando o programa...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

Agora o código está muito mais legível, organizado e estamos utilizando um recurso da linguagem para melhorar a legibilidade do código.

Para evitar a confusão de ter tudo dentro do `while`, na linha 39 criamos a função `private static void exibirMenu()`. Feito isso, copiamos todo o código `System.out.println()` e colamos dentro dessa função.

Então, agora, dentro do `while`, ao invés de termos todas as strings, chamaremos o `exibirMenu()`.

```csharp
package br.com.alura;

import java.util.Scanner;

public class AdopetConsoleApplication {

    public static void main(String[] args) {
        CommandExecutor executor = new CommandExecutor();
        System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
        try {
            int opcaoEscolhida = 0;
            while (opcaoEscolhida != 5) {
                exibirMenu();

                String textoDigitado = new Scanner(System.in).nextLine();
                opcaoEscolhida = Integer.parseInt(textoDigitado);

                switch (opcaoEscolhida) {
                    case 1 -> executor.executeCommand(new ListarAbrigoCommand());
                    case 2 -> executor.executeCommand(new CadastrarAbrigoCommand());
                    case 3 -> executor.executeCommand(new ListarPetsDoAbrigoCommand());
                    case 4 -> executor.executeCommand(new ImportarPetsDoAbrigoCommand());
                    case 5 -> System.exit(0);
                    default -> opcaoEscolhida = 0;
                }
            }
            System.out.println("Finalizando o programa...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void exibirMenu() {
        System.out.println("\nDIGITE O NÚMERO DA OPERAÇÃO DESEJADA:");
        System.out.println("1 -> Listar abrigos cadastrados");
        System.out.println("2 -> Cadastrar novo abrigo");
        System.out.println("3 -> Listar pets do abrigo");
        System.out.println("4 -> Importar pets do abrigo");
        System.out.println("5 -> Sair");
    }
}
```

Agora nosso código está refatorado e com uma classe mais estruturada. Para iniciar novamente o projeto, clicamos no botão de play. Feito isso, no terminal notamos que o console aparece da mesma forma.

Nele, passaremos o número `1` referente a opção "Listar abrigos cadastrados". Como retorno temos a mensagem:

> Não hpa abrigos cadastrados.

Isso significa que funcionou sem problemas. Se digitarmos `5` para sair, o programa é finalizado.

Agora temos apenas o `executor()` que realiza a lógica de receber um comando e chama o responsável por executar o método do comando.

Utilizamos ao `case` com o `expressions` do Java 17 e também extraímos o menu para uma função privada, evitando que nosso código fique confuso.

Assim, melhoramos o código e mantivemos o mesmo comportamento.

**Te esperamos no último vídeo!**

# Mão na massa: usando switch antes do Java 12

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138313/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138313/question)

Vimos como utilizar o pattern matching of switch, do Java 12, para refatorar o nosso código e remover os vários if e elses que tinha na classe `AdopetConsoleApplication`. Por se tratar de uma feature mais recente, você pode estar se perguntando "e se eu tiver usando o Java antes do 12, não posso refatorar meu código?". A resposta para essa pergunta é sim, você pode.

O switch faz parte do Java desde os primórdios, tendo sido melhorado no Java 12 para aceitar lambdas e outras coisas mais. Para utilizar no Java antes da versão 12, precisaremos fazer algumas alterações no nosso código. Vamos ver na Opinião do instrutor como utilizar?

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138313/opinion)

```cpp
switch (opcaoEscolhida) {
                case 1 :
                    commandExecutor.executeCommand(new ListarAbrigoCommand());
                    break;
                case 2 :
                    commandExecutor.executeCommand(new CadastrarAbrigoCommand());
                    break;
                case 3 :
                    commandExecutor.executeCommand(new ListarPetsDoAbrigoCommand());
                    break;
                case 4 :
                    commandExecutor.executeCommand(new ImportarPetsDoAbrigoCommand());
                    break;
                default : System.exit(0);
```

Como podemos observar, o código fica um pouco mais verboso, porém, ainda é melhor do que com os if's e else's.

> Um ponto de atenção: antes do Java 12, o switch só aceita tipos short, byte, long, int, enum, string. Outro ponto de atenção é que os breaks precisam estar no código, caso contrário, ele não "para" quando entrar no case correto, indo até o default.

# Para saber mais: diferença entre Command e Strategy

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138314/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138314/question)

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

