## Transcrição

Boas-vindas ao curso **Boas práticas de Programação em Java: melhore o código de uma API** da Alura! Meu nome é Rodrigo Ferreira, sou um dos instrutores da escola de programação, e vou te acompanhar ao longo dessa jornada.

> **Audiodescrição:** Rodrigo é um homem de pele clara, cabelo curto e liso castanho-escuro, sobrancelhas castanhas, e olhos castanhos. Ele usa um fone de ouvido branco e está sentado em uma cadeira preta vestindo uma camisa preta. No ambiente ao fundo, há uma parede branca iluminada em gradiente de azul para roxo com dois quadros de moldura preta à esquerda.

## Qual o objetivo do curso?

Vamos falar um pouco sobre esse curso, qual é o objetivo dele, e o que você vai aprender conosco. Como o próprio nome já diz, aprenderemos boas práticas que podemos aplicar em uma aplicação Java, que no caso desse curso, será uma **API REST**.

Esse é um tipo de aplicação comum de trabalhar nas empresas. Em uma API REST, existem vários pontos em que podemos aplicar boas práticas, e ao longo do curso, aprenderemos que práticas são essas.

Para começar, vamos analisar uma frase de um autor chamado **Martin Fowler**, originalmente em inglês, que funciona como inspiração para esse curso:

> "Qualquer tolo pode escrever um código que um computador possa entender. Bons programadores escrevem códigos que os humanos possam entender."

Essa frase é a essência do nosso curso. Com isso, Martin Fowler quis dizer que programar, isto é, escrever códigos, qualquer pessoa consegue fazer, seja ele bonito e seguindo boas práticas ou não. O computador, ao executar um código, não se preocupa com isso; ele irá executar o código de qualquer forma.

Porém, além de escrever o código que o computador irá executar, é extremamente importante escrever um código simples, fácil de ler, e fácil de dar manutenção, para que outras pessoas sejam capazes de entender e ajustá-lo da melhor maneira possível.

## O que vamos aprender?

Na prática, iremos aplicar boas práticas em um projeto. Entenderemos que existem zilhões de possibilidades que podemos aplicar a um projeto. Então, em quais **boas práticas** iremos focar nesse curso?

### _Refactoring_

Começaremos pela famosa _refactoring_, ou **refatoração**, que nada mais é do que melhorar um código existente. Temos um código com determinada funcionalidade, mas que não está tão legal em termos de estrutura. Nesse caso, podemos aplicar uma técnica de refatoração, melhorando o código do ponto de vista estrutural.

> Note que não falamos em mudar o comportamento; a funcionalidade deverá continuar fazendo o que fazia antes. Estamos melhorando apenas a estrutura para deixar o código mais legível, entendível e simples para receber manutenção.

Aplicaremos o tempo inteiro as refatorações, que são melhorias em códigos existentes.

### _Design Patterns_

Além disso, eventualmente, as melhorias que faremos irão implicar a utilização de **padrões de projeto**, chamados também de _design patterns_. Ao longo do curso, aprenderemos alguns dos padrões de projeto que podem ser aplicados em uma API REST.

Em alguma prática, poderemos pensar em resolver determinado problema utilizando uma solução comum, que já é adotada no mundo inteiro e é padronizada.

Porém, existe um catálogo gigantesco com dezenas de padrões de projeto, e não iremos aprender todos eles. Aplicaremos apenas os que forem necessários e fizerem sentido para o nosso contexto.

### SOLID

Além dos padrões de projeto, também iremos aplicar princípios **SOLID**, sigla que representam cinco princípios de programação relacionados a boas práticas.

> Da mesma forma, iremos aplicar apenas os que fizerem sentido no contexto do nosso projeto.

### Otimizações

Por fim, faremos otimizações no código da nossa aplicação, principalmente na parte de acesso a banco de dados, para evitar problemas relacionados a performance. Aprenderemos a identificar esses pontos de melhoria e aplicar as otimizações, também no acesso ao banco de dados.

## Requisitos

Para que você consiga aproveitar esse curso com a maior tranquilidade possível, existem alguns requisitos que não iremos ensinar aqui e exigimos como conhecimento prévio para acompanhar o conteúdo. São eles:

> - API REST

Como o projeto em que iremos trabalhar no decorrer do curso é uma API REST, não vamos ensinar o que é uma API REST. Esse não é o foco do curso. Você já precisa saber o que ela é, como ela funciona, conhecer requisições, verbos do protocolo HTTP, e assim por diante.

Iremos apenas usar os conceitos, e não aprendê-los.

> - _Spring Boot_

O _framework_ mais utilizado no mundo Java é usado na nossa aplicação e não iremos ensinar a usar o Spring Boot e a criar um projeto com ele. Você já precisa conhecer a ferramenta.

> - JPA

Junto ao Spring Boot, é importante que você conheça a JPA, especificação que cuida da parte de persistência e de acesso a banco de dados.

Esses são os três conhecimentos que você precisa ter para conseguir acompanhar o curso. Existem outros materiais na Alura que ensinam cada um desses requisitos. Explore a [escola de Programação](https://www.alura.com.br/escola-programacao) e descubra!

Esperamos que você goste do conteúdo! Ao longo do curso, além dos vídeos, você terá acesso a materiais complementares e às atividades. É muito importante que você as realize, e se surgir alguma dúvida, lembre-se de usar o [fórum](https://cursos.alura.com.br/forum/categoria-programacao/todos/1) ou a [comunidade no Discord](https://discord.gg/SK9bj7hEYD).

Vamos começar nosso curso? **Te vejo na primeira aula!**

#   
Preparando o ambiente: projeto do curso

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/136532/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/136532/question)

Neste curso utilizaremos o projeto de uma API Rest desenvolvida utilizando o Spring Boot. Você pode fazer o download do projeto inicial nesse link: [Projeto inicial](https://github.com/alura-cursos/3238-boas-praticas-java/archive/refs/heads/projeto_inicial.zip)

Após baixar o arquivo zip, descompacte-o em algum diretório do seu computador e na sequência importe o projeto em sua IDE. No curso será utilizado o [IntelliJ](https://www.jetbrains.com/idea/download/) como IDE, sendo recomendado que você também utilize essa mesma IDE para facilitar o seu aprendizado.

A aplicação utiliza o MySQL, na versão 8, como banco de dados, portanto será necessário que você também o instale em seu computador, caso ainda não o tenha instalado. Caso tenha dificuldades na instalação, pode seguir o tutorial disponível nesse artigo: [Artigo MySQL](https://www.alura.com.br/artigos/mysql-instalacao-configuracao)

Bons estudos!
## Transcrição

Vamos começar nosso curso? Conforme comentado no vídeo anterior, neste curso, focaremos em boas práticas de programação com Java.

No curso anterior, focamos bastante na parte da aplicação _console_, aplicação que pessoas funcionárias da AdoPet vão utilizar para fazer o cadastro dos abrigos, a listagem dos pets, e principalmente, fazer a importação do arquivo que contém os pets.

Nesse projeto, eram feitas chamadas HTTP para uma API. Porém, nesse curso anterior, o foco não era na API, e sim no projeto console. Agora vamos focar justamente no projeto da API.

> Na atividade anterior, deixamos um material explicando como baixar e configurar o projeto.

## Conhecendo o projeto

Começaremos com o IntelliJ aberto e com o projeto `adopet-api` importado. Neste vídeo, iremos conhecer o projeto que era utilizado no projeto do curso anterior.

Nesse primeiro momento, vamos explorar o código-fonte do projeto para entender quais são os problemas e o que podemos fazer para melhorar o código.

Na aba "Project" à esquerda, a princípio, identificamos ser uma aplicação que utiliza o Maven, então ela possui a estrutura de diretórios padrão do Maven. No diretório "src", temos os caminhos "main > java" (onde fica o código-fonte, as classes, e interfaces Java), "main > resources" (onde ficam os arquivos de configuração), e "test > java" (onde ficam os testes automatizados).

No diretório raiz, temos o arquivo `pom.xml`, que tem as dependências da aplicação. No caso, é uma API que usa o Spring Boot, seus módulos, JPA, o banco de dados MySQL, o padrão para aplicações que utilizam o Spring Boot.

Vamos ao que interessa: o código. No diretório "src > main > java", encontramos um pacote principal chamado `br.com.alura.adopet.api` que contém três subpacotes:

- O `controller`, contendo quatro classes;
- O `model`, contendo outras seis classes;
- E o `repository`, contendo quatro interfaces.

De forma solta no diretório da API, temos o arquivo `AdopetApiApplication.java`, classe que contém o método `main()` e onde rodamos a aplicação.

> Conforme mencionado anteriormente, o foco desse curso não será Spring Boot e JPA, não iremos aprender o que eles são e como desenvolver uma API REST usando o Spring Boot e o JPA. Então, precisamos que você já tenha esse conhecimento bem consolidado, para podermos focar na parte de boas práticas de Programação em uma API que usa essas tecnologias.

Abaixo, temos o código da classe principal `AdopetApiApplication`, que executa o projeto:

```java
package br.com.alura.adopet.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdopetApiApplication {

  public static void main(String[] args) {
    SpringApplication.run(AdopetApiApplication.class, args);
  }

}
```

Nesse projeto, temos basicamente três camadas: os controladores, os modelos, e os repositórios.

### Camada de controladores

Vamos acessar, por exemplo, o arquivo `AbrigoController.java`. Trata-se de uma classe controller onde chegam as requisições na API relacionadas a abrigos.

Essa é a classe utilizada pelo projeto console, então todas as requisições que ele disparar, cairão em `AbrigoController`. Nesse arquivo, temos as funcionalidades relacionadas com `Abrigo`, então existem métodos, por exemplo, para cadastrar um novo abrigo (`cadastrar()`), para listar os pets de determinado abrigo (`listarPets()`), para cadastrar pets do abrigo (`cadastrarPet()`), e assim por diante.

É nesse arquivo em especial que o projeto console faz o consumo.

No projeto, além da parte de abrigos, tem também a parte de adoção (arquivo `AdocaoController.java`), que corresponde ao coração do sistema, onde encontramos outras funcionalidades.

Temos, por exemplo, a funcionalidade de solicitar uma adoção (`solicitar()`), a de aprovar uma adoção (`aprovar()`), e outra para reprovar uma adoção (`reprovar()`).

Além disso, há o arquivo `PetController.java`, que possui uma funcionalidade para `listarTodosDisponiveis()`, e o arquivo `TutorController.java`, que contém as funcionalidades para a pessoa tutora se cadastrar (`cadastrar()`) e atualizar seus dados pessoais (`atualizar()`).

A nível de funcionalidade, é bastante simples. Temos as funcionalidades do abrigo, utilizadas pelo projeto console, bem como outras funcionalidades que não são usadas pelo projeto console, como as de `PetController`, `TutorController`, e principalmente a de `AdocaoController`.

### Funcionalidade `AdocaoController`

Como a funcionalidade mais importante é a de adoção, vamos começar analisando o arquivo `AdocaoController.java`. Visto que o foco deste curso são boas práticas de programação, nosso objetivo é explorar o código-fonte e encontrar onde não são seguidas as boas práticas e, aos poucos, fazer mudanças e melhorias em cima dos códigos.

Qual é o objetivo de uma classe `Controller`? Controlar o fluxo de execução da aplicação, então em uma classe `Controller`, não deveríamos ter códigos de regra de negócio e de validação. A classe deve apenas coordenar o fluxo de execução de uma requisição.

Então, ao chegar uma requisição, será chamada a classe que vai executar uma lógica, em seguida outra classe para executar outra lógica, e com base em um retorno, ela devolverá uma informação ou outra. Esse é o objetivo de uma classe `Controller`.

Porém, analisando a classe `AdocaoController`, identificamos alguns métodos com as funcionalidades de `solicitar()`, `aprovar()` e `reprovar()` uma adoção.

Avaliando o escopo do método `solicitar()`, por exemplo, percebemos que não são é seguida a boa prática de uma classe `Controller`.

```java
public ResponseEntity<String> solicitar(@RequestBody @Valid Adocao adocao) {
    if (adocao.getPet().getAdotado() == true) {
        return ResponseEntity.badRequest().body("Pet já foi adotado!");
    } else {
        List<Adocao> adocoes = repository.findAll();
        for (Adocao a : adocoes) {
            if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                return ResponseEntity.badRequest().body("Tutor já possui outra adoção aguardando avaliação!");
            }
        }
        for (Adocao a : adocoes) {
            if (a.getPet() == adocao.getPet() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                return ResponseEntity.badRequest().body("Pet já está aguardando avaliação para ser adotado!");
            }
        }
        for (Adocao a : adocoes) {
            int contador = 0;
            if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.APROVADO) {
                contador = contador + 1;
            }
            if (contador == 5) {
                return ResponseEntity.badRequest().body("Tutor chegou ao limite máximo de 5 adoções!");
            }
        }
    }
```

Toda a regra de negócio está solta dentro do controller. Nesse caso, temos todo um algoritmo que faz uma verificação em cima da `Adocao`, consulta as informações no banco de dados, percorre uma lista, faz os blocos condicionais `if`, faz validações, lança erros, ou seja, um **código de regra de negócio** dentro do controller, o que não é uma boa prática.

> Já encontramos um ponto de melhoria! Nos vídeos seguintes, faremos as melhorias no código.

Para os outros métodos, temos o mesmo: é executada uma lógica, feito o disparo de um e-mail, tudo dentro do controller, o que não é considerado boa prática.

```java
@PutMapping("/aprovar")
@Transactional
public ResponseEntity<String> aprovar(@RequestBody @Valid Adocao adocao) {
    adocao.setStatus(StatusAdocao.APROVADO);
    repository.save(adocao);

    SimpleMailMessage email = new SimpleMailMessage();
    email.setFrom("adopet@email.com.br");
    email.setTo(adocao.getTutor().getEmail());
    email.setSubject("Adoção aprovada");
    email.setText("Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
    emailSender.send(email);

    return ResponseEntity.ok().build();
}
```

Os outros controllers, como `PetController.java`, por exemplo, fazem o mesmo: executam os algoritmos e a regras de negócio no código em si do controller.

Esse é o primeiro ponto de melhoria que identificamos. Em breve, aprenderemos a solucionar essa questão usando boas práticas em uma classe `Controller`.

### Camada de repositórios

No pacote `repository`, existem algumas interfaces. Vamos acessar, por exemplo, a interface `AdocaoRepository.java`. Trata-se do _repository_ do Spring Boot, do módulo _Spring Data JPA_, que apenas herda da interface `JpaRepository<>` e no momento está vazia, pois ela herda os métodos das operações CRUD (cadastrar, excluir, atualizar no banco de dados).

```java
package br.com.alura.adopet.api.repository;

import br.com.alura.adopet.api.model.Adocao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdocaoRepository extends JpaRepository<Adocao, Long> {

}
```

A princípio, não identificamos nenhuma má prática no código. Afinal, essa interface é o tipo de código mais simples no Spring Boot. Existem outros repositórios, como o `AbrigoRepository`, que têm alguns métodos, mas eles seguem as boas práticas do Spring: eles recebem parâmetros e o Spring cria as consultas no banco de dados.

```java
package br.com.alura.adopet.api.repository;

import br.com.alura.adopet.api.model.Abrigo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AbrigoRepository extends JpaRepository<Abrigo, Long> {
    boolean existsByNome(String nome);

    boolean existsByTelefone(String telefone);

    boolean existsByEmail(String email);

    Abrigo findByNome(String nome);
}
```

Aparentemente, não há problemas nos repositórios.

### Camada de modelos

Por fim, temos o pacote `models`, onde estão as entidades JPA do projeto. Podemos acessar, por exemplo, a entidade `Adocao` (`Adocao.java`) para tentar identificar alguma má prática.

No código, temos os atributos e as anotações. Alguns pontos podem ser ajustados, como os atributos que estão anotados com `@Column`, pois nem sempre é obrigatório utilizá-la.

Observe o trecho abaixo:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
private Long id;
```

Quando o nome do atributo é igual ao nome da coluna do banco de dados, no caso, `id`, não precisamos incluir a anotação `@Column`. Então, temos trechos de código desnecessários.

Além disso, temos anotações do _Bean Validation_ na entidade, como `@NotNull` e outras anotações de validação. Há também anotações do JSON (`@JsonBackReference`), da biblioteca _Jackson_, usada pelo Spring para converter para JSON.

Então, a entidade está um pouco poluída. Além de ter elementos de JPA, ela tem outros de validação e do JSON, o que não é considerado boa prática.

A entidade `Adocao` tem alguns relacionamentos com outras entidades, e não segue algumas boas práticas quanto ao carregamento desses relacionamentos.

## Conclusão

É um código pequeno e simples, porém, talvez você já tenha trabalhado em um projeto de API e Java dessa forma ou escrito um código parecido com o que temos, e conseguimos identificar algumas más práticas.

Nosso objetivo ao longo do curso será aprender como resolver essas práticas, de modo a melhorar os códigos, seja em um controller, em um repository, em uma entidade JPA, ou em outros trechos da aplicação.

Abordaremos tudo isso com calma na sequência. Pegaremos cada um desses pontos da aplicação para aplicar as boas práticas. **Te vejo lá!**


## Transcrição

Já identificamos os pontos de melhoria no projeto. Existem várias classes e códigos que não seguem as boas práticas, e atacaremos cada problema por vez. A primeira classe que iremos trabalhar para fazer melhorias será a _**controller**_.

## Boas práticas na classe controller

Vamos usar, por exemplo, o arquivo `AdocaoController.java`. Conforme mencionado, o objetivo de uma classe controller é controlar o fluxo de uma requisição. Porém, em `AdocaoController`, os métodos contidos nele executam regras de negócio, o que consideramos uma má prática.

Dessa forma, toda a lógica do método `solicitar()`, por exemplo, os blocos `if`, os _loops_, tudo o que entendemos como regra de negócio não deveria estar no controller.

Geralmente, colocamos esse tipo de código dentro de uma classe `Service` e o controller apenas a chama. É exatamente isso que faremos: vamos extrair todo o código para a classe `Service`.

### Extraindo a camada `Service`

Para seguir o mesmo padrão de organização de código do nosso projeto, vamos abrir a aba "_Project_" à esquerda e criar um novo pacote chamado `service`, onde ficarão as classes `Service` do projeto. Para isso, clicaremos sobre o pacote raiz `br.com.alura.adopet.api` com o botão direito, selecionaremos a opção "_Package_", e digitaremos `.service` na janela aberta.

Agora, com o pacote `service` selecionado, vamos usar o atalho "Alt + Insert" e selecionar a opção "_Java Class_" para criar uma classe Java chamada `AdocaoService`.

> Seguimos esse padrão de nomenclatura, com o nome da classe `Adocao` seguido do sufixo `Service`, para facilitar a identificação.

Feito isso, teremos a seguinte estrutura de código:

> _`AdocaoService.java`:_

```java
package br.com.alura.adopet.api.service;

public class AdocaoService {
}
```

Como o projeto está usando o Spring, precisamos adicionar uma anotação acima da classe. Caso contrário, não conseguiremos chamá-la da classe controller. A anotação será `@Service` justamente para dizer que é uma classe de serviço.

```java
package br.com.alura.adopet.api.service;

import org.springframework.stereotype.Service;

@Service
public class AdocaoService {
}
```

### Declarando os métodos

Agora, no escopo da classe `AdocaoService`, precisamos criar os mesmos métodos que existem no controller, mas nesse caso, trataremos apenas da regra de negócio.

Em `AdocaoController`, temos três métodos: o `solicitar()`, o `aprovar()`, e o `reprovar()`. Precisamos ter os três na classe `AdocaoService`. Vamos escrevê-los vazios por enquanto, e depois iremos extrair do controller para a classe.

Começaremos criando um método `public` com o retorno vazio (`void`) chamado `solicitar()`. Em seguida, faremos o mesmo com os métodos `aprovar()` e `reprovar()`.

```java
// código omitido

@Service
public class AdocaoService {

    public void solicitar() {
    
    }
    
    public void aprovar() {
    
    }
    
    public void reprovar() {
    
    }

}
```

Temos os três métodos declarados na classe `Service`, porém, vazios. Agora precisamos retornar ao arquivo `AdocaoController.java` e extrair todo o código dos métodos para o arquivo `AdocaoService.java`, a princípio, recortando e colando. Vamos fazer isso?

### Criando o método `solicitar()`

Do método `solicitar()`, recortaremos todo o escopo abaixo:

> _`AdocaoController.java`:_

```java
if (adocao.getPet().getAdotado() == true) {
    return ResponseEntity.badRequest().body("Pet já foi adotado!");
} else {
    List<Adocao> adocoes = repository.findAll();
    for (Adocao a : adocoes) {
        if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
            return ResponseEntity.badRequest().body("Tutor já possui outra adoção aguardando avaliação!");
        }
    }
    for (Adocao a : adocoes) {
        if (a.getPet() == adocao.getPet() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
            return ResponseEntity.badRequest().body("Pet já está aguardando avaliação para ser adotado!");
        }
    }
    for (Adocao a : adocoes) {
        int contador = 0;
        if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.APROVADO) {
            contador = contador + 1;
        }
        if (contador == 5) {
            return ResponseEntity.badRequest().body("Tutor chegou ao limite máximo de 5 adoções!");
        }
    }
}
adocao.setData(LocalDateTime.now());
adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
repository.save(adocao);

SimpleMailMessage email = new SimpleMailMessage();
email.setFrom("adopet@email.com.br");
email.setTo(adocao.getPet().getAbrigo().getEmail());
email.setSubject("Solicitação de adoção");
email.setText("Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
emailSender.send(email);

return ResponseEntity.ok().build();
```

Uma vez recortado, podemos colar no escopo do método `solicitar()` na classe `AdocaoService`.

### Declarando variáveis

Ao fazer isso, serão marcados erros de compilação, pois precisaremos fazer algumas adaptações. Não basta recortar e colar; devemos adaptar alguns pontos.

São reclamadas, por exemplo, algumas variáveis inexistentes, como `repository` na linha 42 e `emailSender` na linha 49. Sendo assim, precisamos retornar à classe controller, onde era usada injeção de dependências com os seguintes atributos:

> _`AdocaoController.java`:_

```java
@Autowired
private AdocaoRepository repository;

@Autowired
private JavaMailSender emailSender;
```

Vamos recortar esse trecho e mover para o arquivo `AdocaoService.java` declarando como atributos, antes da declaração do método `solicitar()`. Com isso, quem irá usar as variáveis `repository` e `emailSender` não será o controller, e sim a classe `Service`.

### Usando a classe `Service` no controller

No arquivo `AdocaoController.java`, ficamos sem nenhum atributo. Porém, será necessário um atributo da classe `Service`, então `Service` usará `repository` e `emailSender` e o `Controller` usará `adocaoService`.

Para isso, no lugar dos atributos que movemos para a classe `Service`, vamos declarar o atributo `AdocaoService` como `private`, chamaremos ele de `adocaoService` e ele receberá a anotação `@Autowired` para o Spring fazer a injeção de dependências.

```java
@Autowired
private AdocaoService adocaoService;
```

Conforme dito anteriormente, o controller irá usar a classe `Service`, então no método `solicitar()` do controller, vamos chamar o método `solicitar()` do arquivo `AdocaoService.java`. Para isso, digitamos `this.adocaoService.solicitar()`.

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid Adocao adocao) {
    this.adocaoService.solicitar();
}
```

Essa é a ideia do controller: ele não executa a regra de negócio, ele chama a classe que contém essa regra, que no nosso caso, é a classe `Service`.

No momento, ainda temos algumas variáveis faltando na classe `Service`. Para a lógica fazer a adoção (`adocao`), precisamos do objeto que tenha os dados que chegam na requisição.

Na linha 25, por exemplo, ainda há um erro de compilação, pois não temos a variável `adocao`. Então, o método `solicitar()` da classe `Service` precisa receber um parâmetro do tipo `Adocao`. Dessa forma, os dados da adoção chegam como parâmetro.

```java
public void solicitar(Adocao adocao) {

// código omitido
```

No controller, o método `solicitar()` recebe um objeto `Adocao` como parâmetro, e chama o `Service` passando esse parâmetro no método `solicitar()`, então passamos `adocao` entre parênteses.

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid Adocao adocao) {
    this.adocaoService.solicitar(adocao);
}
```

Assim, o parâmetro é recebido e delegado para a classe `Service`, que ficará responsável por lidar com o parâmetro `adocao` executando as regras de negócio.

### Atribuindo responsabilidades ao controller

De volta à classe `Service`, não teremos mais o erro de compilação nas variáveis. Porém, note que na linha 25 do método `solicitar()`, fazemos um `return` de `ResponseEntity.badRequest()`.

> _`AdocaoService.java`:_

```java
return ResponseEntity.badRequest().body("Pet já foi adotado!");
```

Com isso, dizemos que se há um erro de validação, devolvemos `badRequest()`. Porém, esse trecho não deve ficar na `Service`; isso é responsabilidade do controller.

> A classe `Service` não deve lidar com coisas do protocolo HTTP, com aspectos de requisição e resposta, pois essa é a responsabilidade do controller.

Nesse caso, não podemos responder com `ResponseEntity`. Precisamos indicar de alguma forma para o controller que aconteceu um erro e é ele que devolve o `ResponseEntity`.

Faremos a seguinte mudança: se entramos no bloco `if`, é porque alguma regra de negócio foi violada, então jogamos um erro. Para isso, podemos usar a `exception` do Java; vamos digitar `throw new` seguido do nome da exceção, representada por uma classe que chamaremos de `ValidacaoException()`.

Feito isso, moveremos a string com a mensagem "Pet já foi adotado!" para `ValidacaoException()` e removeremos o `return` da linha abaixo.

```java
if (adocao.getPet().getAdotado() == true) {
    throw new ValidacaoException("Pet já foi adotado!");
}
```

Na classe `Service`, não retornamos um objeto `ResponseEntity`. Se houver algum erro de validação, lançamos uma `exception`, a qual o controller captura e devolve o `ResponseEntity`.

### Criando a classe `ValidacaoException`

Nesse momento, teremos um erro de compilação, pois a classe `ValidacaoException` ainda não existe. Vamos usar o atalho "Alt + Enter" e selecionar a primeira opção para o IntelliJ criar a classe em um pacote chamado `exception`.

Feito isso, teremos a seguinte estrutura de código:

> _`ValidacaoException.java`:_

```java
package br.com.alura.adopet.api.exception;

public class ValidacaoException extends Throwable {
    public ValidacaoException(String s) {
    }
}
```

No momento, a classe `Exception` é identificada, porém, ela é herdada de `Throwable`. Geralmente, herdamos de `RuntimeException` quando criamos uma exceção não checada no Java.

```java
public class ValidacaoException extends RuntimeException {
```

Assim, é criado um construtor que recebe uma mensagem (parâmetro `message`), mas no momento, ele não faz nada com o parâmetro. Então, precisamos passá-lo para o construtor da classe que estamos herdando. Para isso, basta chamar `super()` e passar `message` como parâmetro.

```java
package br.com.alura.adopet.api.exception;

public class ValidacaoException extends RuntimeException {
    public ValidacaoException(String message) {
        super(message);
    }
}
```

### Ajustando os demais `return`

Agora precisamos fazer o mesmo processo com os outros `return` do método `solicitar()`. Não podemos retornar um `ResponseEntity`, mas sim lançar uma `Exception`, sendo que cada exceção terá uma mensagem distinta. No caso da linha 32, vamos passar a mensagem "Tutor já possui outra adoção aguardando avaliação!".

> _`AdocaoService.java`:_

```java
if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
    throw new ValidacaoException("Tutor já possui outra adoção aguardando avaliação!");
}
```

Na linha 37, trocamos pela mensagem "Pet já está aguardando avaliação para ser adotado!", e na linha 46, pela mensagem "Tutor chegou ao limite máximo de 5 adoções!".

> _Linha de código 37:_

```java
if (a.getPet() == adocao.getPet() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
    throw new ValidacaoException("Pet já está aguardando avaliação para ser adotado!");
}
```

> _Linha de código 46:_

```java
if (contador == 5) {
    throw new ValidacaoException("Tutor chegou ao limite máximo de 5 adoções!");
}
```

Agora temos um último `return` na linha 62, o qual iremos apagar, afinal, o método `solicitar()` tem o retorno do tipo `void`, ou seja, não devolve nada.

> _Trecho a ser removido:_

```java
return ResponseEntity.ok().build();
```

A única coisa que o método faz é lançar uma `exception` se houver algum erro, e se não houver erro, executar a regra de negócio, isto é, salva a adoção no banco de dados e dispara o envio do e-mail.

### Criando um bloco _try…catch_

Agora teremos um erro de compilação no controller, pois precisamos devolver um `ResponseEntity`. Chamamos o método `solicitar()` e ele pode lançar uma `exception`, então se quisermos capturar a exceção, podemos colocar o código dentro de um bloco **try…catch**.

No bloco `try`, teremos a chamada de `this.adocaoService.solicitar(adocao)`, enquanto no bloco `catch`, se acontecer uma `ValidationException`, iremos capturá-la. No escopo desse bloco, faremos o `return` de `ResponseEntity.badRequest().body()`. Entre os parênteses de `body()`, vamos passar a exceção seguida de `getMessage()` para pegar a string da mensagem de erro.

Se não houver erro, não entraremos no bloco `catch`, mas precisamos devolver algo. Então, abaixo de `adocaoService.solicitar()`, vamos adicionar um `return` de `ResponseEntity.ok()` recebendo a mensagem "Adoção solicitada com sucesso!".

Ao final, teremos o seguinte resultado:

> _`AdocaoController.java`:_

```java
@PostMapping
@Transactional
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoAdocaoDto dto) {
    try {
        this.adocaoService.solicitar(adocao);
        return ResponseEntity.ok("Adoção solicitada com sucesso!");
    } catch (ValidationException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
```

Perceba como o método no controller está muito mais limpo e simples. O método chama a classe `Service`, e se não der `exception`, é devolvido `ok("Adoção solicitada com sucesso!")` como resposta; se der `exception`, a exceção é capturada, é devolvido o código 400 (`badRequest()`), e colocada a mensagem que vem na `exception`.

Temos um código bastante enxuto e simples, seguindo boas práticas para controllers. Ele não executa a regra de negócio; ele chama a classe que executa e apenas controla o fluxo.

> É assim que um controller deve ser: ele não pode ter regras de negócio.

### Criando os métodos `aprovar()` e `reprovar()`

Agora precisamos fazer o mesmo para os métodos `aprovar()` e `reprovar()`.

Começaremos pelo mesmo processo de extrair o escopo do método `aprovar()` do arquivo `AdocaoController.java` para o arquivo `AdocaoService.java`.

> _Trecho a ser copiado de `AdocaoController.java`:_

```java
adocao.setStatus(StatusAdocao.APROVADO);
repository.save(adocao);

SimpleMailMessage email = new SimpleMailMessage();
email.setFrom("adopet@email.com.br");
email.setTo(adocao.getTutor().getEmail());
email.setSubject("Adoção aprovada");
email.setText("Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
emailSender.send(email);
```

O método `aprovar()` também precisa receber como parâmetro um objeto do tipo `Adocao`.

> _`AdocaoService.java`:_

```java
public void aprovar(Adocao adocao) {

// código omitido
```

Em seguida, faremos o mesmo com o método `reprovar()`.

> _`AdocaoController.java`:_

```java
adocao.setStatus(StatusAdocao.REPROVADO);
repository.save(adocao);

SimpleMailMessage email = new SimpleMailMessage();
email.setFrom("adopet@email.com.br");
email.setTo(adocao.getTutor().getEmail());
email.setSubject("Adoção reprovada");
email.setText("Olá " +adocao.getTutor().getNome() +"!\n\nInfelizmente sua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi reprovada pelo abrigo " +adocao.getPet().getAbrigo().getNome() +" com a seguinte justificativa: " +adocao.getJustificativaStatus());
emailSender.send(email);
```

Igualmente, o método `reprovar()` na classe `Service` precisa receber o objeto `Adocao` como parâmetro.

> _`AdocaoService.java`:_

```java
public void reprovar(Adocao adocao) {

// código omitido
```

Assim, é executada a lógica para fazer a reprovação. Nesse caso, não há nenhuma validação de regra de negócio, então não temos o `throw new exception`.

Já no controller, precisamos chamar o método do `Service`. Então, no escopo do método `aprovar()` em `AdocaoController`, vamos digitar `this.adocaoService.aprovar()` passando para ele o objeto `adocao`. O mesmo será feito no método `reprovar()`.

> _Método `aprovar()`:_

```java
@PutMapping("/aprovar")
@Transactional
public ResponseEntity<String> aprovar(@RequestBody @Valid Adocao adocao) {
    this.adocaoService.aprovar(adocao);
    return ResponseEntity.ok().build();
}
```

> _Método `reprovar()`:_

```java
@PutMapping("/reprovar")
@Transactional
public ResponseEntity<String> reprovar(@RequestBody @Valid Adocao adocao) {
    this.adocaoService.reprovar(adocao);
    return ResponseEntity.ok().build();
```

## Conclusão

Com isso, está feita a nossa primeira melhoria no código da API: a classe controller não deve ter regras de negócio. Se você já escreveu algum código de um controller com regras de negócio, ele não segue as boas práticas, algo no sentido de o controller chamar a classe que executa a regra de negócio e essa classe faz todas as validações. Se houver algum erro, ela lança uma `exception` que pode ser capturada no controller.

Conseguimos deixar o código da classe controller muito mais enxuto e simples, seguindo as boas práticas de uma classe controller. Concluímos nosso primeiro objetivo!

Porém, ainda podemos melhorar o código da classe `Service`, que está executando regra de negócio. Por exemplo: essa classe faz o envio do e-mail, e o código se repete nos três métodos.

Nesse caso, poderíamos extrair isso para outra classe, afinal, as outras classes `Service` podem precisar enviar e-mail e queremos evitar a repetição do trecho de código em todas as classes `Service` do projeto.

**Aprenderemos isso na sequência!**

## Transcrição

Vamos dar continuidade ao nosso projeto? Anteriormente, fizemos uma primeira **melhoria na classe controller**, e chegamos a um código bastante simples que segue as boas práticas de que a classe controller não deve ter regras de negócio, mas sim chamar as classes que executam as regras e apenas coordenar o fluxo da requisição.

A classe `AdocaoService` segue o padrão `Service`, que é uma classe que representa um serviço e geralmente tem validação, regras de negócio, algoritmo, cálculos, e outras coisas do gênero.

Porém, analisando o código de `AdocaoService.java`, ela faz algo que poderíamos extrair para evitar a tendência de a classe continuar crescendo e fazendo várias coisas distintas.

Além de executar a regra de negócio de uma adoção (processos de solicitação, aprovação e reprovação), a classe também cuida do **envio de e-mails**. Provavelmente, todo o trecho de código de envio de e-mail será repetido em outras classes `Service`.

Dessa forma, o código tende a ficar duplicado. Então, como se trata de um trecho de código com o objetivo específico de enviar e-mails, isso também poderia estar em uma classe separada que será usada pela `Service`.

> A classe `Service` não precisa ter todo o código de regras de negócio e de infraestrutura. Ela pode chamar outras classes também.

Vamos trabalhar nessa melhoria?

## Extraindo o envio de e-mails

Com o arquivo `AdocaoService.java` aberto, vamos extrair o seguinte código de envio de e-mails para uma classe cujo objetivo será apenas enviar e-mails.

```java
SimpleMailMessage email = new SimpleMailMessage();
email.setFrom("adopet@email.com.br");
email.setTo(adocao.getPet().getAbrigo().getEmail());
email.setSubject("Solicitação de adoção");
email.setText("Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
emailSender.send(email);
```

### Criando a classe `EmailService`

Seguindo o mesmo raciocínio, criaremos uma classe chamada `EmailService` no pacote `service`.

> _`EmailService.java`:_

```java
package br.com.alura.adopet.api.service;

public class EmailService {
}
```

Primeiramente, a classe precisa ter a anotação `@Service` para que o Spring consiga carregá-la.

```java
package br.com.alura.adopet.api.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
}
```

No escopo da classe, faremos o disparo do e-mail, que é feito exatamente na linha 72 do arquivo `AdocaoService.java`. O disparo propriamente dito é feito com a classe `emailSender` e o método `send()`. A classe `emailSender` havia sido declarada como um atributo da classe `Service`.

> _`AdocaoService.java`:_

```java
@Autowired
private JavaMailSender emailSender;
```

Vamos extrair esse trecho com "Ctrl + X" e levar para a classe `EmailService`. Dessa forma, quem irá usar `JavaMailSender` será a classe `EmailService`, afinal, é ela que irá guardar o detalhe do envio do e-mail.

### Criando o método `enviarEmail()`

Abaixo dessa declaração de atributo, criaremos um método `public void` chamado `enviarEmail()`, por enquanto, sem parâmetros e sem retorno.

> _`EmailService.java`:_

```java
package br.com.alura.adopet.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void enviarEmail() {
    
    }

}
```

### Declarando o atributo em `AdocaoService`

Agora, na classe `AdocaoService`, na linha de código 21, vamos declarar um atributo do tipo `EmailService`, lembrando da anotação `@Autowired` acima do atributo para o Spring conseguir injetá-lo na classe.

> _`AdocaoService.java`:_

```java
@Autowired
private EmailService emailService;
```

Perceba que `AdocaoService` não envia o e-mail; nós injetamos a classe que sabe enviar o e-mail, e a partir disso, iremos chamar o método responsável por essa ação. Sendo assim, usaremos o atributo `emailService` nos três métodos que precisarem enviar e-mail.

Em `solicitar()`, na linha 59, já teremos a indicação de um erro, pois removemos a classe `emailSender`. Então, vamos substituir o código a partir da linha 54, correspondente ao envio de um e-mail, por `emailService.enviarEmail()`.

> Esse trecho será recortado e colado no escopo do método `enviarEmail()` da classe `EmailService`, conforme mencionado anteriormente.

```java
emailService.enviarEmail();
```

### Ajustando o método `enviarEmail()`

A partir do código abaixo, precisaremos passar alguns parâmetros para o método.

> _`EmailService.java`:_

```java
public void enviarEmail() {
    SimpleMailMessage email = new SimpleMailMessage();
    email.setFrom("adopet@email.com.br");
    email.setTo(adocao.getPet().getAbrigo().getEmail());
    email.setSubject("Solicitação de adoção");
    email.setText("Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
    emailSender.send(email);
}
```

Precisamos enviar o e-mail para quem? Qual é o destinatário? Qual é o assunto? Qual é o texto? Não podemos simplesmente deixar o texto fixo, por exemplo. No momento, o trecho que trouxemos para a classe `EmailService` corresponde ao e-mail de solicitação de adoção. Porém, se quisermos enviar um e-mail para aprovação de adoção, teremos mensagens diferentes.

Portanto, o método `enviarEmail()` precisa receber como parâmetro `String to` (destinatário), `String subject` (assunto), e `String message` (texto).

```java
public void enviarEmail(String to, String subject, String message) {
```

O `setFrom()` sempre será fixo, então podemos manter como "adopet@email.com.br". Já o `setTo()`, em vez de receber um parâmetro fixo, passaremos o `to`, que chega como parâmetro do método. Da mesma forma, o `setSubject()` receberá o parâmetro `subject` e o `setText()` receberá `message`.

```java
public void enviarEmail(String to, String subject, String message) {
    SimpleMailMessage email = new SimpleMailMessage();
    email.setFrom("adopet@email.com.br");
    email.setTo(to);
    email.setSubject(subject);
    email.setText(message);
    emailSender.send(email);
}
```

A classe de envio de e-mail deve ser **genérica**, ou seja, ela deve enviar um e-mail não fixo, então a tornamos flexível, passando parâmetros para destinatário, assunto, e mensagem.

### Ajustando a chamada do método

Ao fazer isso, teremos erro de compilação na classe `AdocaoService`, pois agora, quando chamarmos o método `enviarEmail()`, precisaremos passar os parâmetros `to`, `subject` e `message`.

Para `emailService.enviarEmail()`, passaremos primeiro as informações de destinatário, então digitaremos `adocao.getPet().getAbrigo().getEmail()`. Em seguida, adicionaremos o assunto entre aspas duplas, e por fim, a mensagem também entre aspas duplas.

> _`AdocaoService.java`:_

```java
emailService.enviarEmail(
        adocao.getPet().getAbrigo().getEmail(),
        "Solicitação de adoção",
        "Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
```

Perceba que agora a classe `AdocaoService` não tem mais o código de envio de e-mail. Ela apenas chama a classe que sabe enviar e-mail, ou seja, a classe `EmailService`. Nesse caso, passamos para ela apenas os parâmetros.

Precisaremos fazer o mesmo processo para os outros dois métodos da classe `AdocaoService`, o `aprovar()` e o `reprovar()`. Mudaremos apenas os parâmetros para cada um deles, pois cada método envia uma mensagem diferente.

> _Método `aprovar()`:_

```java
emailService.enviarEmail(
        adocao.getPet().getAbrigo().getEmail(),
        "Adoção aprovada",
        "Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
```

> _Método `reprovar()`:_

```java
emailService.enviarEmail(
        adocao.getPet().getAbrigo().getEmail(),
        "Adoção reprovada",
        "Olá " +adocao.getTutor().getNome() +"!\n\nInfelizmente sua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi reprovada pelo abrigo " +adocao.getPet().getAbrigo().getNome() +" com a seguinte justificativa: " +adocao.getJustificativaStatus()");
```

## Conclusão

Agora a classe `AdocaoService` tem a regra de negócio da adoção, seja para solicitar, aprovar ou reprovar, mas ela não mais sabe enviar o e-mail, ela apenas chama a classe que sabe fazer isso e recebe os parâmetros de destinatário, assunto e mensagem.

Já a classe `EmailService` faz o envio do e-mail, escondendo o `JavaMailSender`. Para torná-la flexível, declaramos os parâmetros para sabermos o assunto, a mensagem e o destinatário.

Finalizamos mais uma melhoria: **extração de código**. Tudo o que estamos fazendo são refatorações. Trata-se da prática de melhorar um código já existente, mudando a estrutura sem mexer no comportamento.

Assim, as funcionalidades continuarão da mesma forma, pois alteramos apenas a estrutura interna do código para deixá-lo mais simples e enxuto, usando bem a separação de responsabilidades.

Com isso, favorecemos a manutenção do código.

Na sequência, vamos explorar outros trechos de código da nossa aplicação. Até o momento, mexemos nas classes `Controller` e `Service`, mas existem outros pontos que não seguem boas práticas. **Em breve, abordaremos isso com calma!**

#   
Faça como eu fiz: extraindo classes

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/136534/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/136534/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula, extraindo os códigos de regras de negócio da classe `AdocaoController` para uma nova classe chamada `AdocaoService`, e também extraindo a lógica de envio de emails para uma nova classe chamada `EmailService`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/136534/opinion)

Você precisará criar a nova classe chamada `AdocaoService`, no pacote `br.com.alura.adopet.api.service`, contendo os métodos `solicitar`, `aprovar` e `reprovar`:

```java
package br.com.alura.adopet.api.service;

import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class AdocaoService {

    @Autowired
    private AdocaoRepository repository;

    @Autowired
    private EmailService emailService;

    public void solicitar(Adocao adocao) {
        if (adocao.getPet().getAdotado() == true) {
            throw new ValidacaoExcpetion("Pet já foi adotado!");
        } else {
            List<Adocao> adocoes = repository.findAll();
            for (Adocao a : adocoes) {
                if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                    throw new ValidacaoExcpetion("Tutor já possui outra adoção aguardando avaliação!");
                }
            }
            for (Adocao a : adocoes) {
                if (a.getPet() == adocao.getPet() && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                    throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");

                }
            }
            for (Adocao a : adocoes) {
                int contador = 0;
                if (a.getTutor() == adocao.getTutor() && a.getStatus() == StatusAdocao.APROVADO) {
                    contador = contador + 1;
                }
                if (contador == 5) {
                    throw new ValidacaoExcpetion("Tutor chegou ao limite máximo de 5 adoções!");
                }
            }
        }
        adocao.setData(LocalDateTime.now());
        adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
        repository.save(adocao);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
    }

    public void aprovar(Adocao adocao) {
        adocao.setStatus(StatusAdocao.APROVADO);
        repository.save(adocao);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Adoção aprovada",
                "Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
    }

    public void reprovar(Adocao adocao) {
        adocao.setStatus(StatusAdocao.REPROVADO);
        repository.save(adocao);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getTutor().getNome() +"!\n\nInfelizmente sua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi reprovada pelo abrigo " +adocao.getPet().getAbrigo().getNome() +" com a seguinte justificativa: " +adocao.getJustificativaStatus());
    }

}
```

Vai precisar também criar a classe `ValidacaoException`, no pacote `br.com.alura.adopet.api.exception`:

```java
package br.com.alura.adopet.api.excpetion;

public class ValidacaoExcpetion extends RuntimeException {
    public ValidacaoExcpetion(String message) {
        super(message);
    }
}
```

E também precisará criar a classe `EmailService`, no pacote `br.com.alura.adopet.api.service`:

```typescript
package br.com.alura.adopet.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void enviarEmail(String to, String subject, String message) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom("adopet@email.com.br");
        email.setTo(to);
        email.setSubject(subject);
        email.setText(message);
        emailSender.send(email);
    }

}
```

Por fim, será necessário atualizar o código da classe `AdocaoController` para que utilize a classe `AdocaoService`:

```kotlin
package br.com.alura.adopet.api.controller;

import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.service.AdocaoService;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoService adocaoService;

    @PostMapping
    @Transactional
    public ResponseEntity<String> solicitar(@RequestBody @Valid Adocao adocao) {
        try {
            this.adocaoService.solicitar(adocao);
            return ResponseEntity.ok("Adoção solciitada com sucesso!");
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/aprovar")
    @Transactional
    public ResponseEntity<String> aprovar(@RequestBody @Valid Adocao adocao) {
        this.adocaoService.aprovar(adocao);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/reprovar")
    @Transactional
    public ResponseEntity<String> reprovar(@RequestBody @Valid Adocao adocao) {
        this.adocaoService.reprovar(adocao);
        return ResponseEntity.ok().build();
    }

}
```

Prontinho! Agora seu projeto está utilizando o padrão Service e possui uma melhor separação de responsabilidades no código, algo que certamente vai facilitar muito a manutenção futura.

## Transcrição

Na aula anterior criamos a classe `service` para **isolar** as **regras de negócio**.

Além disso, também realizamos mudanças na classe `controller`, que ficou mais enxuta e simples.

Porém, se analisarmos o parâmetro dos métodos dessa classe, notamos que não estão seguindo as boas práticas.

Os métodos `solicitar()`, `aprovar()` e `reprovar()` recebem como parâmetro um objeto do tipo `Adocao`.

A classe `Adocao` é uma entidade com atributos e o espelho da tabela do banco de dados.

Porém, **receber** e **devolver** entidades dentro do **controller** não é uma boa prática, afinal, pode causar diversos problemas, além de vulnerabilidade em relação a segurança.

A **boa prática** seria criar uma nova classe somente para representar os dados que vão chegar na API. Assim conseguimos ter controle e determinar quais as informações chegarão e serão devolvidas.

É isso que faremos nesse vídeo!

# Aplicando o padrão DTO

> `AdocaoController.java`

Precisamos trocar os métodos do controller para não receberem a entidade e sim outra classe com apenas os campos que chegarão na API.

Esse tipo de código, que serve para representar dados, segue um padrão chamado **DTO**, Data Transfer Object, ou seja, um **objeto apenas para transferência de dados**.

Para isso, na lateral esquerda da ferramenta, acessamos o Project. Clicamos em `br.com.alura.adopet.api`, apertamos "Alt + Insert" e clicamos em "Package". Nomeamos o arquivo de `dto`.

Dentro de `dto` criaremos uma nova classe. Apertamos novamente "Alt + Insert" e clicamos em "Java Class" e nomeamos de `SolicitacaoAdocaoDto`. Como estamos usando o Java 17, ao invés de criar como uma classe, escolhemos a opção "Record".

> `SolitacaoAdocaoDto.java`

Nos parênteses de `SolitacaoAdocaoDto.java` passaremos somente os campos que receberemos na requisição.

Seguindo as regras da Adopet, o que precisamos sabe é:

- Qual pet que está recebendo a solicitação de adoção;
- Quem é o tutor;
- Qual o motivo da adoção.

O tutor e o pet, identificamos pelo ID, então, passamos `Long idPet` seguido de `Long idTutor` e `String motivo`.

```csharp
public record SolicitacaoAdocaoDto(Long idPet, Long idTutor, String motivo) {
}
```

> `AdocaoController.java`

Feito isso, acessamos novamente o `AdocaoController.java`. O método `solicitar()` não receberá mais uma `Adocao` como parâmetro e sim `SolicitacaoAdocaoDto`. Em seguida, fazermos o mesmo para os métodos `aprovar()` e `reprovar()`.

```kotlin
    @PostMapping
    @Transactional
    public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoAdocaoDto dto) {
        try {
            this.adocaoService.solicitar(adocao);
            return ResponseEntity.ok("Adoção solicitada com sucesso!");
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/aprovar")
    @Transactional
    public ResponseEntity<String> aprovar(@RequestBody @Valid AprovacaoAdocaoDto dto) {
        this.adocaoService.aprovar(adocao);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/reprovar")
    @Transactional
    public ResponseEntity<String> reprovar(@RequestBody @Valid ReprovacaoAdocaoDto dto) {
        this.adocaoService.reprovar(adocao);
        return ResponseEntity.ok().build();
    }
```

Como esses `dtos` que acabamos de inserir ainda não existem, aparece um **erro de compilação**. Então, vamos criá-los.

Na linha do método `aprovar()`, apertamos "Alt + Enter" e selecionamos "Create record 'AprovacaoAdocaoDto'". No campo "Destination packsge" definimos o pacote `br.com.alura.adopet.api.dto` e clicamos em "OK".

> `AprovacaoAdocaoDto.java`

Para aprovar uma adoção, precisamos apenas de um parâmetro, nesse caso `Long idAdocao`.

```less
public record AprovacaoAdocaoDto(@NotNull Long idAdocao) {
}
```

> `AdocaoController.java`

Feito isso, voltamos no `AdocaoController.java`. Faremos o mesmo procedimento para o método `reprovar()`, seguindo os mesmos passos acima.

> `ReprovacaoAdocaoDto.java`

Como parâmetro passamos `Long idAdocao` seguido de `String justificativa`.

```csharp
public record ReprovacaoAdocaoDto (Long idAdocao, String justificativa) { 
}
```

Esse é o objetivo do `dto`, ter apenas os campos que estão chegando na requisição. Assim o código fica mais simples e possibilita maior controle sobre o que está chegando ou saindo na API. Evitando também a vulnerabilidade no código, afinal, não receberemos campos que não podem ser manipulados.

> `AdocaoController.java`

Porém, repare que ainda há um erro em `this.adocaoService.solicitar(adocao)`. Para corrigir isso, nos três métodos, trocamos o parâmetro para `dto`. Dessa forma:

```kotlin
    @PostMapping
    @Transactional
    public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoAdocaoDto dto) {
        try {
            this.adocaoService.solicitar(dto);
            return ResponseEntity.ok("Adoção solciitada com sucesso!");
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/aprovar")
    @Transactional
    public ResponseEntity<String> aprovar(@RequestBody @Valid AprovacaoAdocaoDto dto) {
        this.adocaoService.aprovar(dto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/reprovar")
    @Transactional
    public ResponseEntity<String> reprovar(@RequestBody @Valid ReprovacaoAdocaoDto dto) {
        this.adocaoService.reprovar(dto);
        return ResponseEntity.ok().build();
    }
```

> `AdocaoService.java`

Repare que o erro ainda não sumiu. Isso acontece, pois os métodos da `AdocaoService.java` ainda estão recebendo `adocao` como parâmetro. Então, no método `solicitar()` passamos o parâmetro `SolicitacaoAdocao dto`.

```typescript
public void solicitar(SolicitacaoAdocaoDto dto) {
}

//Trecho omitido
```

Fazemos o mesmo no método `aprovar()`.

```typescript
public void aprovar(AprovacaoAdocaoDto dto) {
}

//Trecho omitido
```

E também no método `reprovar()`.

```typescript
public void reprovar(ReprovacaoAdocaoDto dto) {
}

//Trecho omitido
```

> `AdocaoController.java`

Se acessarmos novamente o controller, notamos que está compilando. Assim aplicamos mais uma boa prática no nosso projeto.

> `AdocaoSevice.java`

Porém, se acessarmos a `AdocaoSevice.java` notamos que não está funcionando. Isso porque toda regra de negócio estava sendo feita utilizando o objeto `adocao`.

Sendo assim, precisaremos alterar toda essa lógica.

**Faremos isso no próximo vídeo!**

## Transcrição

Fizemos toda alteração para utilizar o `dto`, porém o código da classe `AdocaoService.java` não está compilando.

Isso acontece, pois o algoritmo dos métodos `solicitar()`, `aprovar()` e `reprovar()` foram criados baseados em uma entidade e a trocamos pelo `dto`.

Nesse caso, não podemos simplesmente substituir `adoção` para `dto` no código, pois o `repository` precisa trabalhar com uma **entidade**.

Para corrigir, teremos que alterar o algoritmo da regra de negócio.

# Utilizando DTO na Service

> `AdocaoService.java`

Começaremos alterando o método `solicitar()`. Perceba que agora ele recebe como parâmetro um `dto`.

Nesse trecho de código muitas coisas são feitas no processo de adoção. Porém, o objeto adoção não existe mais, apenas o `dto` que possui apenas os IDs dos pets e tutores.

Nesse caso, precisamos do objeto pet e tutor, ou seja, dessas entidades carregadas no banco de dados par executar a regra de negócio. Isso significa que precisaremos carregar os objetos utilizando o `repository`.

Na classe `AdocaoService`, injetamos apenas o `AdocaoRepository`, precisaremos injetar também o `PetRepository` e o `TutorRepository`.

Então, na linha 24, escrevemos `private PetRepository petRepository` e na linha abaixo `private TutorRepository tutorRepository`.

> Lembre-se de anotar esses dois novos atributos com `@Autowired` para que o o spring os injete automaticamente.

```kotlin
//Trecho omitido

@Service
public class AdocaoService {

@Autowired
private AdocaoRepository repository;

@Autowired
private PetRepository petRepository;

@Autowired
private TutorRepository tutorRepository;

//Trecho omitido
```

Feito isso, na linha abaixo do método `solicitar()`, declaramos a variável `Pet pet` que será igual a `petRepository.getReferenceById()`, assim irá carregar o pet que está sendo solicitado para adoção. Como parâmetro passamos `dto.idPet()`.

Após, faremos o mesmo com o tutor. Declaramos a variável `Tutor tutor` que será igual a `tutorRepository.getReferenceById()`. Nos parenteses, passamos `dto.idTutor()`.

```java
//Trecho omitido

public void solicitar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

//Trecho omitido
```

Agora, precisamos **alterar o algoritmo** para utilizar as variáveis que criamos.

O primeiro `if()` estava chamando `adocao.getPet()`. Apagamos esse trecho e passamos `pet.getAdotado() == true`.

No segundo `if()`, apagamos `adocao.getTutor()` e passamos `tutor`. Depois, no terceiro, mudamos de `adocao.getPet()` para `pet`.

Fazemos isso no restante de todo o código para mudarmos toda a lógica. Dessa forma:

```cpp
//Trecho omitido

if (pet.getAdotado () == true) {
        throw new ValidacaoExcpetion("Pet já foi adotado!");
} else {
        List<Adocao> adocoes = repository.findAll();
        for (Adocao a: adocoes) {
                if (a.getTutor() == tutor && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) { 
                        throw new ValidacaoExcpetion("Tutor já possui outra adoção aguardando avaliação!");
                }
}
for (Adocao a: adocoes) { 
                if (a.getPet() == pet && a.getStatus() == StatusAdocao. AGUARDANDO_AVALIACAO) { 
                        throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!"); 
                }
}
for (Adocao a: adocoes) {
                int contador = 0;
                if (a.getTutor() tutor && a.getStatus() == StatusAdocao.APROVADO) {
                contador = contador + 1;
                }
        if (contador == 5) {
        throw new ValidacaoExcpetion("Tutor chegou ao limite máximo de 5 adoções!");
        }
    }
}

//Trecho omitido
```

Em seguida, logo abaixo, temos o trecho com a chamada para salvar a adoção no banco de dados. Porém, não temos o objeto `adocao`.

Para criá-lo, na linha 66, instanciamos um objeto `Adocao adocao` que será igual a `new Adocao()`. Perceba que não estamos recebendo `adocao` e sim criando-a em **memória**.

Nas linhas seguintes setamos a data da adoção e o status. Agora, também precisamos setar o pet e o tutor. Então, abaixo da linha `adocao.setStatus()`, passamos `adocao.setPet()`.

Nas linhas abaixo passamos `adocao.setTutor()` seguido de `adocao.setMotivo(dto.motivo())`.

```java
//Trecho omitido

Adocao adocao = new Adocao();
adocao.setData(LocalDateTime.now());
adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
adocao.setPet(pet);
adocao.setTutor(tutor);
adocao.setMotivo(dto.motivo());

//Trecho omitido
```

Assim criamos o objeto `adocao` e preenchemos as informações que vem do `dto`. Agora o código está todo adaptado para fazer a lógica a partir do `dto`.

Precisamos fazer o mesmo nos outros métodos. Como em `aprovar()` já temos a adoção criada no banco de dados, na segunda linha passamos `Adocao adocao` que é igual a `repository.getReferenceById(dto.idAdocao)`.

Estamos carregando o objeto do banco de dados, sendo assim, não precisamos salvar as mudanças, já que a JPA irá disparar um update automaticamente. Então, apagamos a linha `repository.save()`.

```java
//Trecho omitido

public void aprovar (AprovacaoAdocaoDto dto) { 
    Adocao adocao = repository.getReferenceById(dto.idAdocao()); 
    adocao.setStatus(StatusAdocao.APROVADO);

//Trecho omitido
```

Após, fazemos o mesmo no método `reprovar()`. Copiamos e colamos toda a linha `public void aprovar()` e colamos logo abaixo de `reprovar()`.

Em seguida apagamos o `save`. Por fim, precisamos setar a justificativa. Então, abaixo de `adocao.setStatus()`, passamos `adocao.setJustificativaStatus(dto.justificativa())`.

```java
//Trecho omitido

public void reprovar (ReprovacaoAdocaoDto dto) { 
    Adocao adocao = repository.getReferenceById(dto.idAdocao()); 
    adocao.setStatus (StatusAdocao.REPROVADO); 
    adocao.setJustificativaStatus (dto.justificativa());

//Trecho omitido
```

O código está **inteiramente adaptado** para utilizar os `repositorys` e os `dtos`.

> Agora, não precisamos mais receber a entidade. Ao invés disso, criamos a entidade, quando for preciso salvar, ou carregamos do banco e mudamos os atributos, conforme as regras de negócio.

O `dto` tem a desvantagem de ser mais trabalhoso, afinal, precisamos escrever mais código. Porém, é uma **boa prática** e tem como vantagem eixar o código mais **flexível e seguro**.

A classe `AdocaoController` está completa, simples e utilizando as boas práticas. Já o `AdocaoService` ainda precisa de melhorias. Repare que o código de regra de negócio possui muitas informações e validações.

No vídeo seguinte vamos descobrir como otimizar esse código.

**Até lá!**

# Para saber mais: retornando DTO no Controller

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/139910/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/139910/question)

Utilizamos o padrão DTO para representar os dados que chegam na API, nas funcionalidades relacionadas com a adoção de pets. Na classe `AdocaoController` alteramos os métodos para receberem como parâmetro objetos DTO, ao invés de objetos que são entidades JPA.

Podemos utilizar também esse mesmo padrão nos métodos que **devolvem** informações da API, como por exemplo na requisição que lista os pets disponíveis para adoção, que está implementada na classe `PetController`:

```swift
@GetMapping
public ResponseEntity<List<Pet>> listarTodosDisponiveis() {
    List<Pet> pets = repository.findAll();
    List<Pet> disponiveis = new ArrayList<>();
    for (Pet pet : pets) {
        if (pet.getAdotado() == false) {
            disponiveis.add(pet);
        }
    }
    return ResponseEntity.ok(disponiveis);
}
```

Repare que esse método está devolvendo como resposta uma lista de objetos do tipo `Pet`, que é uma entidade JPA, sendo que o melhor seria retornar uma lista de objetos DTO.

Podemos então criar um record que representa os dados de um pet:

```scss
public record DadosDetalhesPet(Long id, TipoPet tipo, String nome, String raca, Integer idade) {

    public DadosDetalhesPet(Pet pet) {
        this(pet.getId(), pet.getTipo(), pet.getNome(), pet.getRaca(), pet.getIdade());
    }
}
```

E alterar o método no controller para devolver uma lista de objetos DTO:

```swift
@GetMapping
public ResponseEntity<List<DadosDetalhesPet>> listarTodosDisponiveis() {
    List<Pet> pets = repository.findAll();
    List<DadosDetalhesPet> disponiveis = new ArrayList<>();
    for (Pet pet : pets) {
        if (pet.getAdotado() == false) {
            disponiveis.add(new DadosDetalhesPet(pet));
        }
    }
    return ResponseEntity.ok(disponiveis);
}
```

Dessa forma seguimos a boa prática de utilizar o padrão DTO para representar os dados que chegam e também que saem da API, evitando utilizar as entidades JPA para isso.

## Transcrição

Antes de seguirmos para as validações e regras de negócio, aprenderemos mais alguns conceitos importantes referente aos `dtos` e entidades.

# Analisando o que foi feito

No último vídeo, alteramos o código para que as classes `AdocaoController` e `AdocaoService` recebam classes ou records com o padrão `dto`.

> `AprovacaoAdocaoDto.java`

> Encontramos um pequeno erro de digitação na classe `SolicitacaoAdocaoDto()`. Para corrigir, com o cursor clicado nela, apertamos "Shift + F6". Fazemos a correção necessária e apertamos "Enter".

Repare que o `record` segue o padrão `Dto`, que serve para representar dados que chegam ou são devolvidos pela API.

No nosso caso, como o `AdocaoController` só possui métodos para solicitar, aprovar e reprovar, os `dtos` representam somente os dados que **chegam na API**.

> Para que você possa ter um conhecimento completo sobre o tema, disponibilizamos um material complementar sobre o que precisa ser feito para **devolver** um `dto` pela API.

Trocamos as entidades pelo `dto`. Sendo assim, no controller não recebemos mais entidades.

Na classe `AdocaoService`, temos validações de regras de negócio. Porém, na entidade também tínhamos **validações de formulário**, como campo obrigatório.

Essas validações ficaram na entidade, ou seja, teremos que movê-las para o `dto`. É isso que faremos agora!

# Movendo validações para o DTO

> `Adocao.java`

Antes de utilizarmos o `dto`, usávamos a entidade `Adocao`. Se analisarmos a classe, notamos alguns atributos **bean validation**, a tecnologia utilizada para **validar formulários e campos**.

`Tutor` e `pet`, por exemplo, estão classificados como `@NotNull`, ou seja, campos obrigatórios. O `motivo` está como `NotBlank`, pois é uma string, portanto não pode ser nulo nem uma string vazia.

> `SolicitacaoAdocaoDto.Java`

Essas anotações não devem mais estar na entidade e sim nos `dtos`. Então, vamos movê-las para o arquivo `SolicitacaoAdocaoDto.Java`.

Em `SolicitacaoAdocaoDto()`, passamos `@NotNull` antes dos parâmetros `Long idPet` e `Long idTutor`. Em seguida, passamos `@NotBlank` antes de `String motivo`.

```less
import jakarta.validation.constraints. NotBlank;
import jakarta.validation.constraints. NotNull; 

public record SolicitacaoAdocaoDto (@NotNull Long idPet, @NotNull Long idTutor, @NotBlank String motivo) {
}
```

> `Adocao.java`

Voltamos na entidade e apagamos as anotações, ou seja, todos os `@NotNull` e `@NotBlank`.

> `AprovacaoAdocaoDto.java`

Agora, precisamos fazer isso nos outros `dtos`. Então, em `AprovacaoAdocaoDto()` adicionamos `@NotNull` antes do parâmetro.

```less
import jakarta.validation.constraints. NotNull;

public record AprovacaoAdocaoDto (@NotNull Long idAdocao) {
}
```

> `ReprovacaoAdocaoDto,java`

Fazemos o mesmo em `ReprovacaoAdocaoDto()`. Adicionamos `@NotNull` antes de `Long idAdocao` e `@NotBlank` antes de `String justificativa`.

```less
import jakarta.validation.constraints.NotBlank; 
import jakarta.validation.constraints.NotNull;

public record ReprovacaoAdocaoDto (@NotNull Long idAdocao, @NotBlank String justificativa) { 
}
```

Pronto! Agora o `dto` está com a validação de aprovação. Caso chegue uma requisição para a API e os dados estiverem errados, será feita a validação e o spring devolverá o erro 400, indicando que os campos não seguem as regras.

**Concluímos mais uma melhoria no projeto!**

Lembrando que em `AdocaoService.java` continua com a validação de **regra de negócios** e um código muito extenso.

Sendo assim, no vídeo seguinte aprenderemos como simplificar esse código.

**Te esperamos lá!**

## Transcrição

Agora, sim, vamos trabalhar com a parte do código de validação de regra de negócio dentro da classe `AdocaoService`.

## Validação de regra de negócio

Analisando esse código, vamos perceber que acontecem quatro validações quanto a funcionalidade de solicitar uma adoção.

A primeira regra é que o pet que recebe solicitação para ser adotado, não pode já estar adotado.

Por exemplo, fazemos essa validação para conferir se o pet de ID 30 que recebeu uma requisição de adoção ainda está disponível. Se ele já tiver sido adotado por outra pessoa, não podemos fazer uma nova solicitação, pois o animal só pode ser adotado uma única vez por uma única pessoa.

O `if (pet.getAdotado() == true)` faz essa validação. Se o pet está disponível, entramos no `else` e fazemos outras validações.

A segunda validação é para verificar se o tutor que solicita a adoção já tem outra adoção solicitada anteriormente e que ainda está em andamento.

É uma regra do Adopet: se uma pessoa solicitou a adoção de um pet, ela não pode fazer outra solicitação antes que essa primeira tenha sido finalizada - seja aprovada ou reprovada. Assim, evita-se que a pessoa tente adotar todos os animais disponíveis. Ela só pode solicitar um de cada vez.

A terceira validação verifica se aquele pet não está em uma solicitação em andamento. Já conferimos anteriormente que o pet está disponível e não foi adotado, mas e se outra pessoa fez uma solicitação que ainda não foi aprovada? Nesse caso, também precisamos rejeitar essa nova solicitação.

Por fim, a última validação verifica quantas adoções aprovadas esse tutor tem. Se ele tiver 5, rejeitamos a adoção e não deixamos fazer uma nova solicitação. Existe uma regra do sistema que especifica um limite de 5 pets adotados por tutor.

São quatro validação de quatro regras de negócio. Porém, todas as validações estão soltas e misturadas dentro da classe _service_.

É comum que, ao utilizar uma classe _service_, seja preciso colocar validação, regra de negócio, algoritmo e cálculo. Com isso, a classe fique com um grande número de linhas de código - o que dificulta a manutenção.

> **Atenção**: a classe _service_ tem que isolar regras de negócio, mas não precisa executar cada uma em um mesmo arquivo. Isso deixa o código difícil de entender e de dar manutenção.

Podemos isolar essas validações e a _service_ pode apenas chamá-las de alguma forma. Para isso, vamos aplicar o mesmo princípio de **separar as responsabilidades**.

## Criar classe para cada validação

Temos quatro validações distintas, portanto, vamos separar cada uma em uma classe. Assim, cada classe cuida de uma única validação. Posteriormente, vamos aprender como chamar essas classes de uma forma flexível na _service_.

### Validação de pet disponível

Para começar, vamos extrair a primeira validação de `if (pet.getAdotado() == true)` e criar uma classe para representá-la. No painel "Project" à esquerda, vamos criar um novo pacote para cuidar dessas validações.

Em "br.com.alura.adopet.api", usamos o atalho "Alt + Insert", escolhemos a opção "_Package_" e chamá-lo de `validacoes`. Nele, vamos criar um "Java Class" onde vamos criar a primeira validação para conferir se o pet está disponível. Portanto, vamos criar uma classe com o nome que remeta a essa validação, como `ValidacaoPetDisponivel`.

Dentro dessa classe, vamos criar um método `public void` chamado `validar()` e vamos receber o DTO como parâmetro. Por isso, passamos o `SolicitacaoAdocaoDto` chamado `dto`. Da mesma forma que o _controller_ recebe o DTO e passa para a _service_, a _service_ o recebe e passa para o validador.

Dentro do método, vamos colocar a regra `if` que copiamos.

> `ValidacaoPetDisponivel.java`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoException;

public class ValidacaoPetDisponivel {

    public void validar(SolicitacaoAdocaoDto dto) {
        if (pet.getAdotado() == true) {
            throw new ValidacaoException("Pet já foi adotado!");
        }
    }
}
```

Porém, já teremos um erro de compilação, pois precisamos carregar esse `pet` do banco de dados.

Nesse validador, vamos precisar injetar o `PetRepository`. Vamos declarar um atributo, anotado com `@Autowired`, digitando `private PetRepository petRepository`.

Em `validar()`, precisamos carregá-lo do banco de dados. Para isso, vamos copiar a linha `Pet pet` da _service_ e colá-lo antes do `if`.

O que esse validador faz? Carrega o `pet` do banco de dados, chega o `dto` com o ID do pet e, com isso, fazemos a validação do `if (pet.getAdotado() == true)` para lançar uma _exception_, indicando que esse pet não pode ser adotado.

Inclusive, não precisa do `== true`. Podemos simplificar esse código, deixando somente `pet.getAdotado()`, pois já verifica se é `true`. Melhoramos o código ao tirar um trecho que era redundante.

Porém, para o Spring conseguir carregar essa classe `ValidacaoPetDisponivel`, devemos ter uma anotação antes dela. Nesse caso, vamos usar outra anotação do Spring, o `@Component` para indicar que a classe é um componente - não um _controller_, _repository_ ou _service_. Apesar de que o `@Service` também não estaria errado.

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoException;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidacaoPetDisponivel {

    @Autowired
    private PetRepository petRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        if (pet.getAdotado()) {
            throw new ValidacaoException("Pet já foi adotado!");
        }
    }

}
```

Pronto. Esse validador cuida apenas dessa regra de negócio. Vamos fazer o mesmo com as outras validações. Assim, vamos criar mais classes no pacote "validacoes", seguindo o mesmo padrão.

### Validação de pet com adoção em andamento

Agora, vamos criar a classe `ValidacaoPetComAdocaoEmAndamento`. Antes da classe, já colocamos o `@Component`.

Dentro da classe, vamos precisar criar o método `public void validar()` que recebe o `SolicitacaoAdocaoDto dto`. Nesse método, precisamos colocar uma parte da lógica do `AdocaoService`. Copiamos a linha de `List<Adocao> adocoes` e também o segundo _loop_ `for` que valida se o pet já tem adoção em andamento e colamos dentro dele.

> `ValidacaoPetComAdocaoEmAndamento.java`:

```java
package br.com.alura.adopet.api.validacoes;

import org.springframework.stereotype.Component;

@Component
public class ValidacaoPetComAdocaoEmAndamento {

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = repository.findAll();
        for (Adocao a : adocoes) {
            if (a.getPet() == pet && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                throw new ValidacaoException("Pet já está aguardando avaliação para ser adotado!");

            }
        }
    }

}
```

Mas, o que esse código da lista de adoção chama? Ele chama o `repository` de adoções, portanto, precisamos injetar o `adocaoRepository`.

Antes de `validar()`, vamos anotar o `@Autowired` e declarar o atributo `private AdocaoRepository adocaoRepository`. Assim, ele vai ao banco de dados, carrega todas as adoções, faz um _loop_ e verifica se o _status_ do pet está como aguardando avaliação.

Também verificamos se a adoção é igual ao pet sendo adotado. Assim, também precisamos carregar o `pet`.

Após o atributo `AdocaoRepository`, vamos precisar injetar o `PetRepository`. Por isso, declarar mais um atributo. Após anotar com o `@Autowired`, colocamos o `private PetRepository petRepository`.

Dentro de `validar()`, depois do `List<Adocao> adocoes` e antes do `for`, precisamos desse `petRepository` para carregar o `pet` sendo adotado. Por isso, digitamos `Pet pet` igual à `petRepository.getReferenceById(dto.idPet())`.

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoException;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoPetComAdocaoEmAndamento {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private PetRepository petRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Pet pet = petRepository.getReferenceById(dto.idPet());
        for (Adocao a : adocoes) {
            if (a.getPet() == pet && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                throw new ValidacaoException("Pet já está aguardando avaliação para ser adotado!");

            }
        }
    }

}
```

Com isso, carregamos todas as adoções do banco de dados, carregamos o pet sendo solicitação a adoção e verificamos se o pet não está em nenhuma dessas adoções com _status_ `AGUARDANDO_AVALICAO`. Caso esteja, lançamos uma _exception_, porque não poderá ser adotado.

### Validação de tutor com adoção em andamento

Para facilitar, vamos copiar a classe `ValidacaoPetComAdocaoEmAndamento` para fazer o próximo validador. Basta selecioná-la no painel à esquerda, dar um "Ctrl + C" e "Ctrl + V".

Com isso, abre-se uma janela para mudar o nome da classe, já que não podemos ter duas classes com o mesmo nome. A próxima classe será chamada `ValidacaoTutorComAdocaoEmAndamento`.

A lógica vai ser parecida com a usada na classe `ValidacaoPetComAdocaoEmAndamento`. Vamos até a classe `AdocaoService` e copiar o primeiro _loop_ `for` depois da lista de adoção. Na nova classe, vamos colá-lo no lugar do loop `for` que havia no método `validar()`.

Só que já não precisamos carregar o pet do banco de dados. Na verdade, precisamos carregar o tutor. Portanto, vamos injetar o `TutorRepository tutorRepository` no lugar do `PetRepository petRepository`.

No método `validar()`, vamos trocar a linha `Pet pet` para `Tutor tutor = tutorRepository.getReferenceById(dto.idTutor())`.

> `ValidacaoTutorComAdocaoEmAndamento.java`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoException;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoTutorComAdocaoEmAndamento {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private TutorRepository tutorRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());
        for (Adocao a : adocoes) {
            if (a.getTutor() == tutor && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                throw new ValidacaoException("Tutor já possui outra adoção aguardando avaliação!");
            }
        }
    }

}
```

Pronto! A nossa lógica já foi modificada para carregar as adoções e o tutor, verificando se o tutor não tem outra adoção em andamento no momento.

### Validação de tutor com limite de adoções

Por fim, isolaremos a última validação. Vamos copiar a classe `ValidacaoTutorComAdocaoEmAndamento` com "Ctrl + C" e "Ctrl + V" e renomeá-la para `ValidacaoTutorComLimiteDeAdocoes`. O tutor só pode ter um máximo de 5 adoções aprovadas.

No `AdocaoService`, vamos copiar a lógica do terceiro e último `for`. Após dar um "Ctrl + C", vamos colá-lo no lugar do `for` que havia no método `validar()` da nova classe `ValidacaoTutorComLimiteDeAdocoes`.

Como já temos o `TutorRepository` injetado para carregar o tutor, não precisamos modificar mais nada.

> `ValidacaoTutorComLimiteDeAdocoes`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoException;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoTutorComLimiteDeAdocoes {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private TutorRepository tutorRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());
        for (Adocao a : adocoes) {
            int contador = 0;
            if (a.getTutor() == tutor && a.getStatus() == StatusAdocao.APROVADO) {
                contador = contador + 1;
            }
            if (contador == 5) {
                throw new ValidacaoException("Tutor chegou ao limite máximo de 5 adoções!");
            }
        }
    }

}
```

Essa é a validação que checa se o tutor não tem 5 andações aprovadas.

## Padrão _Strategy_

Extraímos cada validação em uma classe separada. Temos uma classe que valida a regra do tutor com limite de adoções, outra que valida se o tutor tem alguma adoção em andamento, outra que checa se o pet está com adoção em andamento e uma que verifica se o pet ainda está disponível.

Cada classe possui uma única responsabilidade, seguindo o princípio da letra "S" do SOLID, o princípio da responsabilidade única. Desse modo, deixamos o código mais separado, mais fácil de entender e dar manutenção.

Agora, no `AdocaoService`, vamos apagar todo o código das validações do `solicitar()`. No lugar, precisamos chamar as validações de alguma forma.

```java
public void solicitar(Adocao adocao) {
    Pet pet = petRepository.getReferenceById(dto.idPet());
    Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

    //chamar as validacoes

    Adocao adocao = new Adocao();
    adocao.setData(LocalDateTime.now());
    adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
    adocao.setPet(pet);
    adocao.setTutor(tutor);
    adocao.setMotivo(dto.motivo());

    repository.save(adocao);

    emailService.enviarEmail(
            adocao.getPet().getAbrigo().getEmail(),
            "Solicitação de adoção",
            "Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
}
```

Como vamos chamar essas validações? Isso é assunto do próximo vídeo!

Em suma, isolamos cada validador em uma classe separada. Com isso, aplicamos o princípio da responsabilidade única do SOLID, que são princípios de boas práticas de programação.

> Além disso, aplicamos esse princípio ao implementar um padrão de projeto do GoF (_Gang of Four_) chamado _**Strategy**_ que serve para representar uma estratégia.

Cada validador é como se fosse uma estratégia que valida de maneiras diferentes e com responsabilidade únicas.

Eventualmente, quando fazemos uma refatoração e melhoria no código, podemos aplicar um padrão de projeto, seguir boas práticas de orientação a objetos e os princípios SOLID. São conceitos que acabam sendo usados em conjunto.

Agora, fica a dúvida de como fazer para chamar os quatro validadores na _service_. Será que precisamos chamá-los um por um? Será que podemos chamá-lo de uma maneira automática? Vamos te contar na sequência.

## Transcrição

Para fechar essa parte das regras de negócio, faltou apenas chamar os validadores na classe `AdocaoService`.

Já extraímos essas validações, cada uma está em sua respectiva classe. Com isso, o código ficou separado, organizado, pequeno e, portanto, fácil de ser testado e entendido. Mas, o código não funciona no momento, porque não chamamos esses validadores.

Como fazemos isso? Será que vamos ter que injetar os validadores um por um? E depois chamar `PrimeiroValidador.validar()`, `SegundoValidador.validar()` e assim por diante?

Podia ser, mas ia ficar repetitivo. E se futuramente surge uma quinta validação? Por exemplo, temos que validar se o pet está vacinado ou não. Íamos ter que criar a classe que faz essa validação e lembrar de chamá-la no `AdocaoService` - o que poderia ser facilmente esquecido.

Para evitar essa situação, podemos usar um recurso para injetar todos os validadores automaticamente, independente da quantidade. É possível fazê-lo usando o Spring e conceitos de orientação a objetos.

Primeiro, vamos verificar os validadores. Talvez você tenha percebido que todos os validadores tem um método com o mesmo nome e a mesma assinatura.

Por exemplo, na classe `ValidacaoPetDisponivel`, temos apenas o método `public void validar()` que recebe um `SolicitacaoAdocaoDto`. O validador `ValidacaoPetComAdocaoEmAndamento` também tem exatamente o mesmo método e a mesma assinatura.

Todas as classes que criamos têm algo em comum, a assinatura do método `validar()`. Cada uma tem sua validação distinta, mas a ideia é a mesma.

Vamos relembrar as aulas de orientação a objetos: sempre que classes têm um comportamento em comum, mas a implementação deles muda, significa que estão seguindo um mesmo contrato. Com isso, podemos criar uma interface para padronizar esses métodos.

Se utilizamos a interface, conseguimos ganhar o polimorfismo e injetar na classe _service_ de maneira automatizada.

## Criar interface para padronizar validações

A ideia é **criar uma interface para padronizar essas validações**. Para isso, no painel de "Project" à esquerda, vamos criar uma interface dentro do pacote de "validacoes".

Apertamos "Alt + Insert", escolhemos "Java Class" e a chamamos de `ValidacaoSolicitacaoAdocao`. Em seguida, vamos escolher a opção de "Interface" e pressionamos o "Enter".

A interface é criada vazia. Dentro dela, vamos colocar a assinatura do método `validar()`. Para isso, escrevemos `public void validar()` que recebe o `SolicitacaoAdocaoDto` que chamamos de `dto`. Como essa é somente a assinatura do método, vamos colocar ponto e vírgula no final, ao invés das chaves.

Outro detalhe é que o `public` está redundante, não é necessário. Por padrão, todos os métodos são públicos dentro de uma interface. Por isso, podemos apagar `public` antes de `void`.

Por fim, a `SolicitacaoAdocaoDto` foi importada automaticamente.

> `ValidacaoSolicitacaoAdocao.java`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;

public interface ValidacaoSolicitacaoAdocao {

    void validar(SolicitacaoAdocaoDto dto);

}
```

Pronto! Criamos a interface que padroniza todas as classes que quiserem implementar essa interface com esse método.

## Implementar a interface

Agora, vamos em cada um dos validadores para implementar essa interface. Na classe do primeiro validador `ValidacaoPetComAdocaoEmAndamento`, vamos acrescentar um `implements ValidacaoSolicitacaoAdocao`.

```java
@Component
public class ValidacaoPetComAdocaoEmAndamento implements ValidacaoSolicitacaoAdocao {

    // código omitido…

}
```

Podemos dar um "Ctrl + C" nesse trecho `implements ValidacaoSolicitacaoAdocao` que escrevemos e fazer o mesmo com os outros três validadores: `ValidacaoTutorComAdocaoEmAndamento`, `ValidacaoTutorComALimiteDeAdocoes` e `ValidacaoPetDisponivel`.

```java
@Component
public class ValidacaoTutorComAdocaoEmAndamento implements ValidacaoSolicitacaoAdocao {

    // código omitido…

}
```

```java
@Component
public class ValidacaoTutorComALimiteDeAdocoes implements ValidacaoSolicitacaoAdocao {

    // código omitido…

}
```

```java
@Component
public class ValidacaoPetDisponivel implements ValidacaoSolicitacaoAdocao {

    // código omitido…

}
```

Pronto! Todas as classes que quiserem ser validadores de solicitação de adoção tem que implementar essa interface e também, obrigatoriamente, declarar o método `validar()`. Como todas já tinham o método `validar()`, o código continuar compilando.

Se apagamos esse método, vai dar erro de compilação, pois o Java vai detectar que implementamos uma interface só que não sobrescrevemos o método que tem nessa interface.

Com isso, todas as classes têm o mesmo método com a mesma assinatura. O que muda é a implementação, pois cada uma vai implementar a validação de uma maneira.

## Injetar validadores

Após criar e implementar a interface, o que precisamos fazer para injetá-la na classe `AdocaoService`?

Como queremos injetar os validadores, vamos anotar com `@Autowired` e declarar mais um atributo na classe `AdocaoService`.

Porém, não é apenas um validador, são vários. É uma lista de validadores. Por isso, declaramos o atributo `private` do tipo `List` e, nos _generics_, vamos passar a interface `ValidacaoSolicitacaoAdocao`. Por fim, vamos chamar esse atributo de `validacoes`.

O segredo é declarar o atributo sendo uma lista da interface - e não de um validador em específico. E também anotar com `@Autowired`.

O Spring internamente vai detectar que injetamos uma lista do tipo interface. Com isso, vai procurar todas as classes que implementam essa interface, vai instanciar cada uma delas, colocar em uma lista e injetar essa lista na classe `AdocaoService`.

Agora, devemos percorrer essa lista e chamar o método de `validar()`, passando o `dto` como parâmetro. Em `solicitar()`, onde tínhamos deixado o comentário `chamar as validacoes`, vamos percorrer essa lista `validacoes` com o método `.forEach()`.

Entre os parênteses, vamos chamar a variável de cada validador de `v` e usar o operador de flecha `->`. O que queremos fazer com o validador? Fazer `v.validar()`, passando como parâmetro o `dto`.

> `AdocaoService.java`:

```java
@Service
public class AdocaoService {

    // código omitido…

    @Autowired
    private List<ValidacaoSolicitacaoAdocao> validacoes;

    public void solicitar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

        validacoes.forEach(v -> v.validar(dto));

       // código omitido…

    }

    // código omitido…
}
```

Fizemos um _loop_, percorrendo cada um dos validadores da lista com o `forEach()`. Para cada um, vai ser chamada o método `validar()`, passando o `dto`.

Os nossos validadores são `void`, portanto, não têm retorno. Ele vai executar a lógica e se tiver algo errado, uma _exception_ é lançada. Mas, se tiver tudo certo, não vai devolver nada.

Por isso, quando cair na linha do `forEach()` na _service_, se estiver tudo certo, não vai ser lançado _exception_ e vai seguir o fluxo do código. Ou seja, cria a `adocao`, salva no banco de dados e manda o e-mail. Se algumas delas lançar uma _exception_, a execução do programa é interrompida e não vai executar o resto do código.

Essa é a forma de injetar os validadores de maneira automática. A grande vantagem é que o Spring vai buscar todas as classes que implementam essa interface.

Desse modo, no cenário onde temos uma nova validação futuramente, é só criar uma classe implementando a interface `ValidacaoSolicitacaoAdocao` e o método `validar()` e escrever o código da validação. Pronto. Não precisamos mexer na classe `AdocaoService`, pois o Spring detecta automaticamente quantos são os validadores na hora de injetar a lista.

Se uma regra de negócio não existe mais, basta apagar a classe daquela validação e pronto. Se mudou a regra de algum validador, vamos à classe daquele validador em específico e alteramos o código. Em nenhum dos casos precisaríamos mexer no `AdocaoService` ou nos outros demais validadores.

Percebe como o nosso código está flexível? Podemos adicionar, apagar e alterar classes de validação mexendo em apenas um único ponto do sistema.

> Com isso, o código fica flexível, poderoso, fácil de dar manutenção e de estender para adicionar novos comportamentos.

O que acabamos de fazer também é um **padrão de projeto**. Nesse caso, usamos dois padrões de projeto. Como aprendemos anteriormente, usamos o _**Strategy**_, pois cada validador é uma estratégia de validação.

E, para juntá-los em uma cadeia de validadores, usamos o padrão chamado _**Chain of Resposability**_ (cadeias de responsabilidades). Temos várias responsabilidades onde uma está encadeada na outra e queremos chamá-las de maneira sequencial.

## Conclusão

Essa é uma maneira de implementar o _chain of responsability_, usando interface, polimorfismo e injeção de dependência do Spring para deixar o código mais simples.

Com isso, fechamos essa parte de melhorar o código das validações de regra de negócio. Antes, estava tudo solto no método `solicitar()` da classe _service_. Agora, aplicamos dois padrões de projeto, _strategy_ e _chain of responsability_, isolamos essas validações e o _service_ apenas chama os validadores.

Com isso, o código da simples e separado, seguindo o princípio "S" do SOLID de separação de responsabilidade. Ao aplicar padrões de projeto, o código está flexível e extensível. É uma boa prática aplicar esses padrões quando fizer sentido.

Mas, ainda temos vários detalhes para tratar nesse projeto. Focamos no _controller_ e na _service_, mas ainda podemos melhorar as classes _models_ e as entidades JPA. Vamos conferir isso com calma na sequência.


# Para saber mais: outros padrões de projeto

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/139884/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/139884/question)

Neste curso foram abordados apenas alguns padrões de projeto que são comuns em uma API Rest, como os Padrões GoF (Gang of Four) **Strategy** e **Chain of Responsibility**, assim como os padrões DTO (Data Transfer Object) e Service. No entanto, existem muitos outros padrões de projeto disponíveis que podem expandir ainda mais o seu conhecimento e ajudá-lo a projetar sistemas mais flexíveis e escaláveis.

Caso você tenha interesse em conhecer mais detalhes sobre os padrões utilizados no curso, bem como outros padrões que não foram abordados, você pode explorar alguns sites que explicam de maneira detalhada e com exemplos de códigos em Java. Os principais sites que indicamos são:

1. [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns): Um excelente site com explicações detalhadas e exemplos de padrões de projeto, além de também ensinar bastante sobre refatoração de códigos;
2. [TutorialsPoint](https://tutorialspoint.com/design_pattern/index.htm): Oferece tutoriais abrangentes sobre padrões de projeto em Java;
3. [Repositório no GitHub](https://github.com/iluwatar/java-design-patterns): Um repositório que contém uma ampla coleção de implementações de padrões de projeto em Java.


# Aplicando padrões de projeto nas validações

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/139891/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/139891/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula, aplicando os padrões **Strategy** e **Chain of Responsibility** para isolar as validações de regras de negócio da classe `AdocaoService`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/139891/opinion)

Você deve criar a interface `ValidacaoSolicitacaoAdocao` no pacote `br.com.alura.adopet.api.validacoes`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;

public interface ValidacaoSolicitacaoAdocao {

    void validar(SolicitacaoAdocaoDto dto);

}
```

Agora, nesse mesmo pacote, deve criar as classes de validação `ValidacaoPetComAdocaoEmAndamento`, `ValidacaoPetDisponivel`, `ValidacaoTutorComAdocaoEmAndamento` e `ValidacaoTutorComLimiteDeAdocoes`:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoPetComAdocaoEmAndamento implements ValidacaoSolicitacaoAdocao {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private PetRepository petRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Pet pet = petRepository.getReferenceById(dto.idPet());
        for (Adocao a : adocoes) {
            if (a.getPet() == pet && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");

            }
        }
    }

}
```

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidacaoPetDisponivel implements ValidacaoSolicitacaoAdocao {

    @Autowired
    private PetRepository petRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        if (pet.getAdotado()) {
            throw new ValidacaoExcpetion("Pet já foi adotado!");
        }
    }

}
```

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoTutorComAdocaoEmAndamento implements ValidacaoSolicitacaoAdocao {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private TutorRepository tutorRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());
        for (Adocao a : adocoes) {
            if (a.getTutor() == tutor && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                throw new ValidacaoExcpetion("Tutor já possui outra adoção aguardando avaliação!");
            }
        }
    }

}
```

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidacaoTutorComLimiteDeAdocoes implements ValidacaoSolicitacaoAdocao {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private TutorRepository tutorRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        List<Adocao> adocoes = adocaoRepository.findAll();
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());
        for (Adocao a : adocoes) {
            int contador = 0;
            if (a.getTutor() == tutor && a.getStatus() == StatusAdocao.APROVADO) {
                contador = contador + 1;
            }
            if (contador == 5) {
                throw new ValidacaoExcpetion("Tutor chegou ao limite máximo de 5 adoções!");
            }
        }
    }

}
```

Por fim, na classe `AdocaoService`, será necessário realizar as alterações para utilizar os validadores:

```java
package br.com.alura.adopet.api.service;

import br.com.alura.adopet.api.dto.AprovacaoAdocaoDto;
import br.com.alura.adopet.api.dto.ReprovacaoAdocaoDto;
import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.PetRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import br.com.alura.adopet.api.validacoes.ValidacaoSolicitacaoAdocao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class AdocaoService {

    @Autowired
    private AdocaoRepository repository;

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private List<ValidacaoSolicitacaoAdocao> validacoes;

    public void solicitar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

        validacoes.forEach(v -> v.validar(dto));

        Adocao adocao = new Adocao();
        adocao.setData(LocalDateTime.now());
        adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
        adocao.setPet(pet);
        adocao.setTutor(tutor);
        adocao.setMotivo(dto.motivo());

        repository.save(adocao);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
    }

    public void aprovar(AprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.setStatus(StatusAdocao.APROVADO);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Adoção aprovada",
                "Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
    }

    public void reprovar(ReprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.setStatus(StatusAdocao.REPROVADO);
        adocao.setJustificativaStatus(dto.justificativa());

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getTutor().getNome() +"!\n\nInfelizmente sua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi reprovada pelo abrigo " +adocao.getPet().getAbrigo().getNome() +" com a seguinte justificativa: " +adocao.getJustificativaStatus());
    }

}
```

Prontinho! Agora o seu projeto está utilizando mais padrões de projeto, tornando com isso o código facilmente extensível para a inclusão, alteração ou remoção de novas regras de negócio.

## Transcrição

Continuando com o projeto, implementamos várias técnicas recomendadas e aprimoramos significativamente o código, especialmente o do `controller` e da classe `servidor`. Além disso, adotamos padrões de projeto como DTO, _strategy_ e _Chain of Responsibility_.

No entanto, há uma camada específica da aplicação que ainda não mexemos, sendo o pacote `Model` onde ficam as entidades de JPA, e lá temos alguns códigos que precisamos ajustar e aplicar boas práticas. Esse é o objetivo dessa aula.

Do lado esquerdo do IntelliJ, em "Projects", navegamos para "java > br.com.alura.adopet.api > model". Neste, temos as seguintes classes:

- Abrigo.java
- Adocao.java
- Pet.java
- StatusAdocao.jav
- TipoPet.java
- Tutor.java

Ao acessarmos a classe `Adocao`, constatamos que se trata de uma entidade JPA. Essa classe funciona como uma representação de uma tabela no banco de dados e inclui várias anotações da JPA.

Essas anotações informam à JPA que a classe é uma entidade (`@Entity`), que está associada a uma tabela específica no banco de dados chamada `adocoes` (`@Table(name = "adocoes")`), e que o atributo `id` na linha 17 será mapeado para uma coluna e servirá como chave primária (`@Id`). Enfim, temos outras anotações.

Trata-se de um código relativamente simples, com pouca complexidade, mas que pode conter algumas más práticas comuns nesse tipo de implementação.

## Analisando o código

> [Arquivo `Adocao.java` no repositório do GitHub](https://github.com/alura-cursos/3238-boas-praticas-java/blob/aula_2/src/main/java/br/com/alura/adopet/api/model/Adocao.java)

Existem diversas informações que podem ser omitidas nesse contexto. **Como a JPA lida com essas anotações?**

A JPA possui **convenções** estabelecidas. Ao aderir a essas convenções, não é necessário realizar nenhuma configuração adicional. No entanto, caso não sejam seguidas essas convenções, é preciso fazer a configuração manualmente.

Chamamos esse conceito de COC (_convention over configuration_, em português "convenção acima de configuração"). Prefira seguir a convenção para evitar a necessidade de configurar, mas claro que é flexível.

No nosso caso, estamos aderindo às convenções em várias áreas, porém ainda estamos realizando configurações desnecessárias. Quais as convenções da JPA?

> Adocao.java

```less
@Entity
@Table(name = "adocoes")
public class Adocao {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
private Long id;

@Column(name = "data")
private LocalDateTime data;

@ManyToOne
@JsonBackReference("tutor_adocoes")
@JoinColumn(name = "tutor_id")
private Tutor tutor;

@OneToOne
@JoinColumn(name = "pet_id")
@JsonManagedReference("adocao_pets")
private Pet pet;

@Column(name = "motivo")
private String motivo;

@Enumerated(EnumType.STRING)
@Column(name = "status")
private StatusAdocao status;

@Column(name = "justificativa_status")
private String justificativaStatus;
        
// código omitido
```

Analisando o código do arquivo `Adocao.java` a primeira anotação que temos na classe é a `@Entity`. Esta anotação serve para informar ao JPA que essa classe é uma entidade da JPA. Assim, ela assume que essa classe está mapeando uma tabela no banco de dados.

Qual é o nome da tabela no banco de dados? A JPA não possui essa informação, mas segue uma convenção. Se não informarmos o nome da tabela, a convenção é utilizar exatamente o mesmo nome da classe; no caso, `Adocao`. Isto é, ela assume que no banco de dados há uma tabela chamada `Adocao`.

Caso desejemos utilizar o nome da tabela como `adocoes`, por exemplo, e não estejamos seguindo a convenção padrão, seria necessário fazer uma configuração específica. Nesse sentido, a anotação `@Table(name = "adocoes")` está realizando exatamente essa configuração.

O `@Table` é para informar ao JPA que estamos configurando uma tabela, e o `(name= "adocoes")`. Não estamos seguindo a convenção e estamos configurando.

Nesse caso, não podemos tirar a anotação `@Table`, porque não desejamos seguir a convenção com o nome da tabela.

Os atributos da entidade são equivalentes às colunas da tabela. Conforme a convenção, o nome da coluna na tabela é igual ao nome do atributo. Portanto, se o atributo chama `id`, então o nome da coluna também se chama `id`. Se o nome do atributo é `data`, o nome da coluna também.

E observem que há uma anotação `@Column` que podemos configurar para a JPA quando não desejarmos seguir a convenção. Mas notem que no código estamos configurando sabendo que não há a necessidade. É como se estivéssemos informando que a coluna `id` se chama `id`.

Portanto, nesse caso não precisamos do @Column, dado que o nome da coluna é igual ao do atributo. Podemos removê-lo essa anotação do `id` e `data`.

A próxima coluna é `tutor`, que representa um relacionamento com outra entidade e é anotada com `@JoinColumn` quando há uma coluna de relacionamento. Configuramos o nome da coluna como `tutor_id`, mas isso já segue a convenção.

A JPA, ao tratar de relacionamentos, utiliza o nome do atributo seguido por underline e "id" `(_id)`. Portanto, também é possível remover a anotação `@JoinColumn(name = "tutor_id")`.

> Adocao.java

```less
@Entity
@Table(name = "adocoes")
public class Adocao {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private LocalDateTime data;

@ManyToOne
@JsonBackReference("tutor_adocoes")
@JoinColumn(name = "tutor_id")
private Tutor tutor;
        
// código omitido
```

Analisando os demais atributos, podemos aplicar a mesma lógica para o `pet_id`, o qual podemos remover a anotação `@JoinColumn(name = "pet_id")`. Da mesma forma, podemos excluir as anotações `@Column(name = "motivo")`, `@Column(name = "status")` e `@Column(name = "justificativa_status")`.

> Adocao.java

```less
// código omitido

@OneToOne
@JsonManagedReference("adocao_pets")
private Pet pet;

private String motivo;

@Enumerated(EnumType.STRING)
private StatusAdocao status;

private String justificativaStatus;

// código omitido
```

Dessa forma, removemos todos os @Column desnecessários, só precisamos usar essa anotação se o nome do atributo for diferente do nome da coluna na tabela no banco de dados.

No seguinte trecho de código do arquivo `Adocao.java`:

```java
// código omitido

@ManyToOne
private Tutor tutor;

@OneToOne
private Pet pet;
        
// código omitido
```

Observem que temos as anotações `@JsonBackReference` e `@JsonManagedReference`, isso era necessário quando o `controller` estava recebendo e devolvendo de forma direta entidades JPA. Mas lembrando que nas aulas passadas alteramos isso, os `controllers` não recebem mais entidades, e sim classes `DTO`.

Portanto, essas anotações também podem ser removidas, pois não estamos mais retornando entidades, e sim DTOs. Temos controle sobre quais campos desejamos retornar.

Removemos diversas informações desnecessárias do código, mantendo apenas os elementos essenciais para indicar a cardinalidade do relacionamento (`@ManyToOne` e `@OneToOne`). A anotação `@Enumerated` é utilizada porque o padrão é ordinal, mas desejamos que seja do tipo string, ou seja, que seja salvo o texto da constante e não a posição. No caso do atributo `status` que é um `enum`.

Então só configuramos o que não seguir a convenção, caso contrário, fica redundante. Observem que o código ficou mais sucinto, sem tantas anotações.

## Conclusão

Esteja atento a isso no projeto, caso encontre várias dessas anotações desnecessárias em uma entidade JPA, remova-as para deixar o código somente com as informações essenciais.

Ainda há algumas melhorias que podemos fazer nesta entidade, mas iremos abordá-las em seguida. Até mais!


## Transcrição

No arquivo `Adocao.java`, além de eliminar códigos desnecessários, há algumas questões relacionadas aos relacionamentos que precisam ser abordadas.

## Boas Práticas para Carregamento de Relacionamentos `ToOne` no JPA

Ao trabalhar com JPA é comum ter uma entidade se relacionando com outras entidades. Por exemplo, estamos trabalhando com a entidade `Adocao` que deve estar relacionada a um `tutor` e um `pet`, sendo ambos duas entidades diferentes. Isso configura um relacionamento entre entidades, e lá no banco de dados será um relacionamento entre tabelas.

> Adocao.java

```java
// código omitido

@ManyToOne
private Tutor tutor;

@OneToOne
private Pet pet;

// código omitido
```

Sempre que lidamos com relacionamentos, há algumas convenções e boas e más práticas que podemos adotar. É nisso que vamos focar ao longo deste vídeo.

No caso da entidade `Adocao`, ela possui dois tipos de relacionamentos com o `tutor` e o `pet`, sendo `@ManyToOne` e `@OneToOne`, respectivamente. Assim, informamos ao JPA que o relacionamento entre a entidade `Adocao` e a `Tutor` é de muitos para um, ou seja, muitas adoções podem estar vinculadas a um tutor.

No caso do `pet`, a relação é de um para um, o que significa que uma adoção pode acontecer com apenas um pet, e cada pet está vinculado a apenas uma adoção. Dois exemplo de relacionamentos `ToOne`.

Em relacionamentos `ToOne`, como funciona o **carregamento** desse tipo de relacionamento para a JPA? Como assim "carregamento"?

Ao fazermos uma consulta no banco de dados para carregar uma adoção, por exemplo, uma adoção com o ID com o valor 27. Assim chamamos o `repository get reference by id` como vimos em aulas passadas, e passamos o valor 27.

Ao executarmos esse comando, a JPA, no banco de dados, realiza uma consulta (`SELECT`) na tabela de Adocao para obter as informações relacionadas. Porém, os detalhes do tutor e do pet não estão na tabela de adoção, mas sim nas tabelas de tutor e pet, respectivamente.

Será que a JPA carrega tanto as informações de `Adocao` quanto às informações de `tutor` e `pet` associadas a ela? Isso depende da cardinalidade e das convenções. Todo relacionamento `ToOne`, por padrão, a JPA carrega o relacionamento junto.

Isso implica que, ao realizar uma consulta para carregar uma adoção, a JPA executa um `JOIN` nessa consulta para carregar o tutor. Dessa forma, é efetuado um SELECT na tabela de adoção e, automaticamente, é feito um `SELECT` via `JOIN` na tabela de tutor. A mesma coisa ocorre para a tabela de pet.

**Isso não é uma boa prática.**

Suponhamos que estamos carregando uma adoção no banco de dados apenas para exibir a data na tela. Nesse caso, o `SELECT` seria realizado apenas na tabela de adoção, sem a necessidade de envolver tabelas adicionais como `tutor` ou `pet`. No entanto, nessa consulta também serão carregados os dados das tabelas de `tutor` e `pet`.

Isso prejudica a **performance**, então devemos evitar consultas que trazem informações desnecessárias. Por padrão, o relacionamento `ToOne` possui um carregamento denominado de _**eager**_ (impaciente), sendo um carregamento antecipado.

Ou seja, ao carregarmos a adoção não importa se vamos usar ou não esse atributo, ele será carregado junto. Essa é uma má prática.

O ideal é modificar esse comportamento para que seja _lazy_ (tardio). Dessa forma, ao carregarmos a adoção, as tabelas de `tutor` e `pet` não serão carregadas automaticamente, sendo carregadas apenas sob demanda quando forem realmente necessárias e não de forma antecipada.

Para indicarmos isso para a JPA, na indicação do relacionamento `@ManyToOne` abrimos e fechamos parênteses passando o atributo `fetch`, que será igual a `FetchType.LAZY`.

Ao digitar "FetchType", surgem as opções "eager" e "lazy". Todo vínculo `ToOne` é, por padrão, "eager". Isso significa que quando carregamos a entidade principal, esse relacionamento é carregado simultaneamente. Mas como não queremos que isso aconteça, optamos pelo `lazy`. Fazemos a mesma coisa no relacionamento do pet.

Dessa forma, realizamos o carregamento da entidade principal, Adoção, sem a carga automática do tutor e do pet.

> Adocao.java

```java
// código omitido

@ManyToOne(fetch = FetchType.LAZY)
private Tutor tutor;

@OneToOne(fetch = FetchType.LAZY)
private Pet pet;

// código omitido
```

> Essa constitui a prática recomendada: em todos os relacionamentos `ToOne`, definimos o tipo como `lazy`, visto que o padrão é `eager`.

Podemos realizar uma consulta personalizada caso desejarmos carregar esse relacionamento, logo, ainda temos flexibilidade. Ao adicionarmos o atributo fetch não estamos informando para nunca mais carregar o tutor e o pet, mas sim quando for solicitado.

Nesta entidade, encontramos apenas vínculos `ToOne`; no entanto, também existem os vínculos `ToMany`, para quando usamos lista. Nesta entidade, não possuímos uma lista; entretanto, na entidade `Tutor`, temos uma.

Para acessarmos, seguramos a tecla "Ctrl" e clicamos em "Tutor", e somos redirecionados para a entidade.

### Relacionamento `ToMany`

> [Arquivo `Tutor.java` no repositório do GitHub](https://github.com/alura-cursos/3238-boas-praticas-java/blob/aula_3/src/main/java/br/com/alura/adopet/api/model/Tutor.java)

> Tutor.java

```less
// código omitido

@OneToMany(mappedBy = "tutor", fetch = FetchType.EAGER)
@JsonManagedReference("tutor_adocoes")
private List<Adocao> adocoes;

// código omitido
```

Note que há a presença da lista de adoções associada a esse tutor, considerando que uma pessoa tutora pode adotar até cinco pets. Quando se trata de uma lista, o tipo de relacionamento se altera para `ToMany`, podendo ser `OneToMany` (um para muitos) ou `ManyToMany` (muitos para muitos).

No caso de relacionamentos `ToMany`, o carregamento padrão é `lazy`. Essa escolha se deve ao fato de que a JPA reconhece que se trata de uma lista, a qual pode conter **diversos registros**, o que poderia impactar negativamente o desempenho. Assim, quando lidamos com listas, o carregamento é do tipo `lazy` e o relacionamento não é carregado automaticamente.

Analisando o trecho de código, colocamos esse tipo de vínculo como `EAGER`. Podemos alterar para lazy, mas estaríamos sendo redundantes, dado que o padrão é esse. Logo, podemos remover este atributo `fetch`.

> Tutor.java

```less
// código omitido

@OneToMany(mappedBy = "tutor")
@JsonManagedReference("tutor_adocoes")
private List<Adocao> adocoes;

// código omitido
```

Portanto, os relacionamentos `ToMany` já possuem carregamento `lazy` como padrão. Assim, ao buscarmos a entidade `Tutor` no banco de dados, a lista não será carregada automaticamente. Isso acontecerá somente se, posteriormente, acessarmos ou iterarmos por essa lista, ou ainda, se construirmos uma consulta que carregue a entidade tutor juntamente com um `JOIN` para trazer a lista de adoções associada.

## Conclusão

O propósito deste vídeo foi direcionar nossa atenção para os relacionamentos entre entidades e suas práticas recomendadas, bem como as convenções da JPA. As modificações realizadas na entidade Adoção não envolveram grandes mudanças no código; apenas ajustamos alguns atributos e o código permaneceu inalterado.

No entanto, essas mudanças representaram uma melhoria voltada para o aprimoramento de desempenho. Assim, quanto menos dados desnecessários carregarmos no banco de dados, mais rápida será a nossa consulta.

Na sequência, vamos aprender outras boas práticas que podemos aplicar no projeto.

Até mais!

## Transcrição

Prosseguindo nesta seção sobre JPA e acesso ao banco de dados, aprimoramos o código da entidade adoção, adotamos boas práticas para os relacionamentos e eliminamos anotações desnecessárias.

## Otimização de Consultas e Validações

Contudo, ainda existem algumas modificações que necessitam ser efetuadas no projeto. Não exatamente na entidade, mas sim nas consultas ao banco de dados. Essas consultas estão localizadas nas classes de validação que vimos na aula anterior.

> [Pacote `validacoes` no repositório do GitHub](https://github.com/alura-cursos/3238-boas-praticas-java/tree/aula_3/src/main/java/br/com/alura/adopet/api/validacoes)

Dentro do documento chamado `ValidacaoPetComAdocaoEmAndamento`, encontramos uma classe responsável por validar uma regra de negócio no projeto. Para efetuar essa validação, é necessário realizar uma busca no banco de dados. As informações são carregadas, verificadas para garantir sua integridade.

Se estiverem corretas, nenhum procedimento adicional é executado. Entretanto, se forem identificadas inconformidades, uma exceção é disparada.

> ValidacaoPetComAdocaoEmAndamento

```java
// código omitido

public void validar(SolicitacaoAdocaoDto dto) {
    List<Adocao> adocoes = adocaoRepository.findAll();
    Pet pet = petRepository.getReferenceById(dto.idPet());
    for (Adocao a : adocoes) {
            if (a.getPet() == pet && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
                    throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");

            }
```

Portanto, temos um código que realiza consulta no banco de dados. No entanto, o código **não está otimizado**. Ao longo deste vídeo, vamos otimizá-lo.

Ao examinar o código, realizamos uma operação de acesso ao banco de dados. Utilizamos o método `adocaoRepository.findAll()` para buscar todas as adoções. Esse método, proveniente do Spring, recupera todos os registros presentes na tabela de adoções no banco de dados e os carrega na memória.

Logo em seguida, inserimos esses registros em uma lista denominada `List<Adocao>`. Em seguida, buscamos o objeto `Pet` com base em seu id. Esse "Pet" está associado à solicitação de adoção em curso. Após isso, navegamos por essa lista de adoções para verificar se o "Pet" está envolvido em uma adoção que se encontra no estado atual de andamento, ou seja, aguardando avaliação.

Caso o pet esteja com uma adoção em andamento, é lançada uma _exception_ com a mensagem "Pet já está aguardando avaliação para ser adotado!". Dessa forma, este pet não poderá ter uma nova solicitação.

Esse código possui uma má prática na linha 25: `List<Adocao> adocoes = adocaoRepository.findAll();`. **Estamos realizando um `findAll()` no banco de dados,** ou seja, todos os registros da tabela.

Caso a tabela tenha 5 milhões de registros, todas essas informações seriam carregadas para a memória somente para realizar a lógica em memória. Isso não é interessante e não é uma boa prática, embora funcione podemos ter problemas de performance.

Seria mais indicado executarmos uma consulta com **filtros** específicos, como por exemplo, fornecer o ID do pet e o status desejado. Isso permitiria uma busca direcionada e precisa, otimizando a consulta.

Assim, evitamos o carregamento de todos os registros na memória e executamos a lógica diretamente no banco de dados, sem a necessidade de processamento em memória. É justamente isso que faremos agora.

No trecho de código, recebemos um DTO contendo o ID do pet. Suponhamos que uma solicitação de adoção tenha chegado para o pet com ID 30. Nesse contexto, a verificação necessária é a seguinte: Existe uma adoção em andamento, com status "aguardando avaliação", para o pet de ID 30?

Se a resposta for afirmativa, é gerada uma exceção; caso contrário, nenhuma ação é realizada.

Realizamos essa consulta diretamente no banco de dados, evitando carregar todos os dados na memória. A consulta é direcionada: verifica se há um pet com ID 30 e status "aguardando avaliação". Se essa condição for atendida, uma exceção é lançada.

Portanto, não precisamos carregar os registros no banco de dados; carregamos o resultado filtrado. É justamente isso que faremos.

Com esse objetivo, eliminamos a linha que envolvia a lista `List<Adocao>` e o _loop_, restando apenas a estrutura condicional `if()`. Isso ocorre porque precisamos realizar uma verificação específica.

Em teoria também não precisamos carregar o pet, logo, podemos remover a seguinte linha também: `Pet pet = petRepository.getReferenceById(dto.idPet());`.

> ValidacaoPetComAdocaoEmAndamento

```typescript
// código omitido

public void validar(SolicitacaoAdocaoDto dto) {

    if (a.getPet() == pet && a.getStatus() == StatusAdocao.AGUARDANDO_AVALIACAO) {
            throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");

            }
```

Já que não precisamos carregar o pet, podemos remover o PetRepository:

> Trecho de código para ser removido no arquivo `ValidacaoPetComAdocaoEmAndamento`:

```java
@Autowired
private PetRepository petRepository;
```

Isso se deve ao fato de não ser necessário buscar os detalhes do pet no banco de dados; apenas uma consulta à tabela de adoções é suficiente. Por isso, logo acima do `if()`, realizaremos uma consulta específica no banco de dados.

Para isso, vamos analisar a interface [AdocaoRepository:](https://github.com/alura-cursos/3238-boas-praticas-java/blob/aula_3/src/main/java/br/com/alura/adopet/api/repository/AdocaoRepository.java) .

> AdocaoRepository

```kotlin
package br.com.alura.adopet.api.repository;

import br.com.alura.adopet.api.model.Adocao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdocaoRepository extends JpaRepository<Adocao, Long> {

}
```

Note que essa consulta ainda não tem um método definido. Até o momento, estamos simplesmente herdando os métodos `findAll()` e `getReferenceById(`), que fazem parte das operações básicas de CRUD. No entanto, precisamos de um método específico.

Para quem já está familiarizado com o Spring Boot, o Spring Data oferece a capacidade de criar métodos seguindo os padrões de nomenclatura específicos. O Spring Data é capaz de gerar consultas personalizadas no banco de dados com base nesses métodos.

Portanto, na consulta, nossa intenção é retornar um resultado simples: apenas "sim" ou "não", ou seja, _true_ ou _false_. A pergunta que desejamos responder é se há uma adoção pendente para esse pet. Não é necessário trazer todos os registros; apenas o indicativo "sim" ou "não" é suficiente.

Para isso, retornamos um método que devolverá um `boolean` e o nome do método precisa seguir o padrão de nomenclatura do Spring Data: `existsByPetIdAndStatus();`. Nele, passamos `Long idPet, StatusAdocao status`.

> AdocaoRepository

```java
package br.com.alura.adopet.api.repository;

import br.com.alura.adopet.api.model.Adocao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdocaoRepository extends JpaRepository<Adocao, Long> {

        boolean existsByPetIdAndStatus(Long idPet, StatusAdocao status);

}
```

Ao criar o método com o nome `existsByPetIdAndStatus`, o Spring irá automaticamente construir a consulta apropriada no banco de dados. Essa função verifica se há alguma adoção na tabela de adoções associada ao pet especificado pelo `idPet`, e ao mesmo tempo, com o `status` fornecido como parâmetro.

Dessa forma, não precisamos carregar os 5 milhões ou a quantidade de registros que tiver do banco de dados.

Agora, **precisamos chamar esse método na classe de validação.**

Antes do `if()`, introduzimos uma variável booleana denominada `petTemAdocaoEmAndamento`. Esta variável será atribuída com o resultado do método `adocaoRepository.existsByPetIdAndStatus()`. Para isso, utilizamos o ID do pet contido no DTO, obtido através de `dto.idPet()`, e também o status `StatusAdocao.AGUARDANDO_AVALIACAO`.

Assim, podemos remover o `StatusAdocao.AGUARDANDO_AVALIACAO` de dentro do `if()`. Agora, o condicional `if()` será baseado na variável `petTemAdocaoEmAndamento`.

> ValidacaoPetComAdocaoEmAndamento

```typescript
// código omitido

public void validar(SolicitacaoAdocaoDto dto) {
    boolean petTemAdocaoEmAndamento = adocaoRepository
                    .existsByPetIdAndStatus(dto.idPet(), StatusAdocao.AGUARDANDO_AVALIACAO);
                    
    if (petTemAdocaoEmAndamento) {
            throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");
            }
```

O código otimizado está pronto!

Criamos a variável e verificamos `petTemAdocaoEmAndamento`. Realizamos uma consulta específica para determinar se isso é verdade, evitando carregar registros completos de adoções e sem processamento em memória. Isso retornará verdadeiro ou falso.

Se o valor da variável for verdadeiro, isso indica que o pet já está sob uma adoção em andamento, resultando em uma exceção sendo lançada. Caso contrário, se for falso, nenhuma ação é tomada e a adoção é permitida.

Esta é uma otimização crucial para implementar no projeto: é necessário ter cautela com as consultas ao banco de dados. Muitas vezes, desenvolvemos códigos que carregam informações desnecessárias para a memória, quando na verdade poderíamos filtrar diretamente no banco de dados e trazer apenas o resultado final.

> Existem outros validadores no projeto que adotam essa abordagem inadequada, no entanto, deixo isso como um desafio para você.

Mantenha em mente a importância de revisar essas consultas que fazem uso do repositório, a fim de evitar consultas que carreguem registros desnecessários na memória, quando é possível realizar filtragens utilizando SQL direto.

No caso em questão, ao invés de utilizar SQL, criamos um método seguindo o padrão de nomenclatura do Spring Data, que por sua vez gera automaticamente a consulta e a executa com filtragem diretamente no banco de dados.

## Conclusão

Em seguida, é oportuno retomarmos a análise das entidades que estão sendo utilizadas pela JPA (Java Persistence API). Nesse contexto, existem mais ajustes que podem ser aplicados para aprimorar o funcionamento e eficiência do sistema.

É uma etapa importante, já que revisar e otimizar as entidades contribuirá para aperfeiçoar a performance geral do projeto.

Até mais!

## Transcrição

Implementamos aprimoramentos nas operações de consulta ao banco de dados, resultando em uma adaptação na estrutura de persistência do projeto. Essa estrutura engloba entidades, _repository_ e o código responsável por interagir com o banco de dados.

## Analisando a otimização da Classe `Adocao`

Aproveitando a oportunidade da revisão das entidades, identificamos outra modificação na entidade de adoção. Essa alteração não diz respeito à performance nem à redundância de código; trata-se, entretanto, de uma questão ligada ao **encapsulamento** e aos princípios da **orientação a objetos**.

A classe `Adocao` está sendo instanciada e utilizada na classe `AdocaoService.java`, como vimos em aulas anteriores.

> [Arquivo `AdocaoService.java` no repositório do GitHub](https://github.com/alura-cursos/3238-boas-praticas-java/blob/aula_3/src/main/java/br/com/alura/adopet/api/service/AdocaoService.java)

No pacote `service`, clicamos no arquivo `AdocaoService.java` e vamos ao método de solicitar uma adoção. Após carregarmos o pet e o tutor no banco de dados, e rodamos as validações, temos o seguinte trecho:

> AdocaoService.java

```java
// código omitido

Adocao adocao = new Adocao();
adocao.setData(LocalDateTime.now());
adocao.setStatus(StatusAdocao.AGUARDANDO_AVALIACAO);
adocao.setPet(pet);
adocao.setTutor(tutor);
adocao.setMotivo(dto.motivo());

// código omitido
```

Esta é uma das desvantagens que mencionei em relação ao DTO. Anteriormente, o código recebia a entidade de maneira direta, com todos os campos preenchidos. No entanto, agora recebe um DTO e é necessário criar uma entidade adicional, configurando suas informações com base no DTO. Isso representa a desvantagem de adotar o padrão DTO.

Assim, montamos esse trecho de código acima. Porém, podemos melhorá-lo.

Nesse trecho, estamos instanciando o objeto `adocao` e setando as informações, a data, o status, o pet, o tutor e o motivo. Mas observem que estamos aplicando isso via método `setter()`, assim, ficamos com um número maior de linhas de código. Para cada atributo chamamos o `setter()` um por um.

Caso seja necessário efetuar alterações nos atributos da entidade de adoção, isso pode resultar em uma quebra no código da classe `AdocaoService`. Podemos simplificar esse trecho usando os princípios da orientação a objetos, como construtor, melhorar o encapsulamento e criar métodos, é possível aplicar esses tipos de melhorias em entidades JPA.

A entidade JPA não está limitada a ser apenas uma classe com atributos e anotações, acompanhada por métodos `getter()` e `setter()`. Podemos incluir construtores e métodos desde que seja uma lógica simples, em que não acessamos o banco de dados e nem serviço externo.

É viável ampliar as responsabilidades dessa classe, inclusive para reforçar o encapsulamento. Ao analisar o código, percebe-se que a construção de uma adoção não está devidamente encapsulada. Portanto, podemos ocultar esse processo dentro da própria classe de adoção. Vamos fazer isso.

Na classe `Adocao`, toda vez que criarmos uma adoção precisamos passar como parâmetro o tutor, o pet e o motivo. Não é necessário passarmos o `status`, se estamos criando a adoção agora o status é automaticamente "aguardando a avaliação".

A `data` representa a data atual, o que nos permite simplesmente extrair a data do sistema. Já a `justificativaStatus` possui relevância somente ao rejeitarmos uma adoção.

Podemos criar um **construtor** onde recebemos somente as informações necessárias na construção de um objeto `adocao`.

### Criando um construtor na `Adocao`

Após o `justificativaStatus`, vamos criar um construtor clicando com o botão direito (ou usando o atalho "Alt + Insert") e escolhendo a opção "Generate". Será exibido um menu suspenso com a opção "construtor", que ao clicarmos na janela seguinte especificamos quais atributos desejamos inserir no construtor, sendo o `tutor`, o `pet` e o `motivo`. Logo após, clicamos no botão "Ok".

> Para selecionar todos os atributos, asseguramos a tecla "Ctrl".

> Adocao.java

```kotlin
// código omitido

public Adocao(Tutor tutor, Pet pet, String motivo) {
        this.tutor = tutor;
        this.pet = pet;
        this.motivo = motivo;
}

// código omitido
```

É gerado um construtor que recebe os atributos selecionados, e agora dentro do construtor precisamos preencher as outras informações. Abaixo de motivo, seguimos a mesma sintaxe e incluímos `status` (é fixo e preenchemos manualmente) e `data`, sendo o `LocalDateTime.now()` para pegar a data atual do sistema.

> Adocao.java

```kotlin
// código omitido

public Adocao(Tutor tutor, Pet pet, String motivo) {
        this.tutor = tutor;
        this.pet = pet;
        this.motivo = motivo;
        this.status = StatusAdocao.AGUARDANDO_AVALIACAO;
        this.data = LocalDateTime.now();
}

// código omitido
```

A justificativa estará vazia, uma vez que ela somente é relevante ao rejeitar uma adoção, e o ID é gerado pelo banco de dados.

### Refatoração de Construtores e Métodos para Melhor Encapsulamento e Orientação a Objetos

Criamos um construtor para receber as informações necessárias e esconder as outras informações automáticas. Observem que acima do construtor está apontando um erro:

> _1 related problem_

Ao clicarmos, somos redirecionados `AdocaoService.java` para informar que na linha 45 (`Adocao adocao = new Adocao();`) é aplicado um `new()` na classe `adocao` mas não tem os parâmetros. Portanto, passamos os parâmetros `tutor, pet, dto.motivo()` e removemos a linha que seta o pet, o tutor e o motivo.

Além delas, podemos excluir a `data` e o `status` também (porque tudo está escondido dentro do construtor), ficando apenas com:

> AdocaoService.java

```java
// código omitido

Adocao adocao = new Adocao(tutor, pet, dto.motivo());
repository.save(adocao);

// código omitido
```

Use construtores; essa prática é fundamental no Java básico e na orientação a objetos. Podemos ter construtores que recebem parâmetros mesmo sendo uma entidade JPA.

Voltando para a classe `Adocao`, criamos um construtor que recebe parâmetros. Nesse momento, devemos lembrar do básico de Java: toda vez que declaramos um construtor dentro de uma classe, o Java não gera mais o construtor _default_ sem parâmetro e argumento.

Portanto, na ausência de um construtor personalizado, o Java automaticamente criava um construtor padrão, permitindo a utilização do operador `new()` na classe sem a necessidade de fornecer parâmetros. Contudo, ao definirmos um construtor customizado, o Java deixa de gerar o construtor padrão.

No entanto, **a JPA exige que toda entidade possua um construtor padrão.**

> Adocao.java

```kotlin
// código omitido

public Adocao(Tutor tutor, Pet pet, String motivo) {
        this.tutor = tutor;
        this.pet = pet;
        this.motivo = motivo;
        this.status = StatusAdocao.AGUARDANDO_AVALIACAO;
        this.data = LocalDateTime.now();
}

// código omitido
```

> Portanto, mesmo criando o construtor do trecho de código acima; abaixo dele, vamos gerar o construtor padrão: `public Adocao(){}`.

> Adocao.java

```kotlin
// código omitido

public Adocao(Tutor tutor, Pet pet, String motivo) {
        this.tutor = tutor;
        this.pet = pet;
        this.motivo = motivo;
        this.status = StatusAdocao.AGUARDANDO_AVALIACAO;
        this.data = LocalDateTime.now();
}

public Adocao(){}

// código omitido
```

Vamos usar somente o que criamos, esse padrão inserimos apenas por ser uma regra na JPA.

Aproveitando essa abordagem, uma vez que os parâmetros são fornecidos no momento da instanciação do objeto, a utilização dos métodos `setters()` se torna desnecessária. Isso porque já passamos no construtor.

Logo, podemos remover as seguintes linhas do código:

```typescript
    public void setId(Long id) {
        this.id = id;
    }
        
    public void setData(LocalDateTime data) {
        this.data = data;
    }
        
    public void setTutor(Tutor tutor) {
        this.tutor = tutor;
    }
    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }
    public void setStatus(StatusAdocao status) {
        this.status = status;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
    public void setJustificativaStatus(String justificativaStatus) {
        this.justificativaStatus = justificativaStatus;
    }
```

Isso implica na eliminação de todos os métodos com prefixo `set()`, já que esses dados agora são preenchidos através do construtor.

No entanto, se considerarmos um cenário onde desejamos efetuar modificações em uma entidade posteriormente, como no caso de uma adoção em que uma dessas informações precisa ser alterada, podemos implementar métodos destinados a isolar essa lógica de alteração de atributo. Nesse contexto, não é imperativo que esses métodos sigam a convenção de `setters()`.

Depois de realizar a remoção, começam a surgir erros na classe `AdocaoService`. Nela, observamos que os erros estão nos métodos `aprovar` e `reprovar`. Isso porque eles estão setando o status; quando aprovamos uma adoção é necessário alterar o status de "aguardando avaliação" para "Aprovado".

No método aprovar, em ver se termos um `setStatus()` podemos inserir um método com um nome mais descritivo e ocultar a constante `StatusAdocao.APROVADO`. Assim, se um dia desejarmos alterar essa constante não será necessário alterar em vários lugares, apenas na classe `Adocao`.

Podemos nomear o método para `marcarComoAprovada()` no `aprovar`; e no `reprovar` precisamos alterar o status e passar a justificativa; denominamos `marcarComoReprovada()` passando o `dto.justificativa()`.

> AdocaoService.java

```java
// código omitido

public void aprovar(AprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.marcarComoAprovada();

// código omitido

public void reprovar(ReprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.marcarComoReprovada(dto.justificativa());

// código omitido
```

Ao examinarmos esse método, sua funcionalidade fica evidente pelo nome escolhido. Quanto aos atributos que o método 'marcarComoAprovada' está impactando, essa informação não é uma preocupação nem o objetivo central.

Reconhecemos a necessidade de encapsulamento dentro da classe, pois, caso futuramente desejamos modificar essa lógica, não será necessário efetuar alterações na camada de serviço.

Essa abordagem evita que a classe de serviço precise entender a função específica desse método; ela apenas o invoca sem necessidade de compreender seus detalhes.

Isso é para melhorar o **encapsulamento das classes**.

Tanto o `marcarComoAprovada()` quanto o `marcarComoReprovada()` estão escritos na cor vermelha, isso acontece porque ainda não foram criados. Para gerar esse métodos, teclamos "Alt + Enter" sobre `marcarComoAprovada() {}`, e escolhemos a opção "_Create method_".

Seremos redirecionados para o arquivo `Adocao`:

> Adocao.java

```csharp
// código omitido

public void marcarComoAprovada() {}
```

Esse método precisa alterar o status para aprovado, então digitamos `this.status = StatusAdocao.APROVADO`. Voltamos ao `AdocaoService` e teclamos "Alt + Enter" sobre o método `marcarComoReprovada()` e seremos redirecionados para o arquivo `Adocao`.

O método `marcarComoReprovada()` precisa alterar o status para reprovado; e dar a justificativa.

> Adocao.java

```typescript
// código omitido

public void marcarComoAprovada() {
        this.status = StatusAdocao.APROVADO;
}

public void marcarComoReprovada(String justificativa) {
        this.status = StatusAdocao.REPROVADO;
        this.justificativaStatus = justificativa;
}
}
```

Assim, encapsulamos a lógica de manipulação dos atributos da entidade dentro da própria entidade. Isso adere à prática recomendada na orientação a objetos, onde uma classe detém tanto atributos quanto métodos (comportamentos). Os métodos devem ser responsáveis por operar nos atributos internos da classe, em vez de permitir que operações externas os modifiquem.

Consequentemente, as modificações realizadas tiveram como objetivo aprimorar o encapsulamento, resultando em um código mais conciso. Essa otimização é implementada por meio de métodos e construtores.

Voltando ao arquivo `AdocaoService`, tudo está compilando conforme o esperado e o código está menor. A _service_ não seta ou sabe quais são as informações, ela apenas instancia o objeto e passa os parâmetros. Caso tenha mais parâmetros, fica oculto na própria entidade.

Ao aprovar ou reprovar, basta invocar os métodos correspondentes, sem a necessidade de entender os atributos específicos que eles alteram. Esses detalhes não estão relacionados à camada de serviço, a qual não deve ter conhecimento sobre os pormenores internos. Tais particularidades estão protegidas e encapsuladas dentro da própria entidade.

Assim, a classe pode ser equipada com construtores e métodos que contêm lógicas para manipular seus atributos. É importante ressaltar que a responsabilidade de modificar os atributos da classe deve ser atribuída aos métodos.

Seguindo essa abordagem, aderimos à prática sólida da orientação a objetos e fortalecemos o encapsulamento.

## Conclusão

Com isso, concluímos as alterações referentes às entidades JPA e também abordamos as camadas de persistência como um todo, incluindo tanto as entidades quanto às consultas.

No entanto, ainda temos mais pela frente! Aguardo você na próxima aula!

# Faça como eu fiz: otimizando acesso ao banco de dados

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-melhore-codigo-api-java/task/136544/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/136544/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula, realizando as otimizações na camada de persistência da aplicação, que envolve alterar os códigos das entidades JPA, das interfaces Repository e das classes de validação que fazem consultas no banco de dados.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-melhore-codigo-api-java/136544/opinion)

Você precisará alterar o código das entidades `Adocao` e `Tutor`, para remover redundâncias e otimizar o mapeamento dos relacionamentos:

```kotlin
package br.com.alura.adopet.api.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "adocoes")
public class Adocao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime data;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tutor tutor;

    @OneToOne(fetch = FetchType.LAZY)
    private Pet pet;

    private String motivo;

    @Enumerated(EnumType.STRING)
    private StatusAdocao status;

    private String justificativaStatus;

    public Adocao(Tutor tutor, Pet pet, String motivo) {
        this.tutor = tutor;
        this.pet = pet;
        this.motivo = motivo;
        this.status = StatusAdocao.AGUARDANDO_AVALIACAO;
        this.data = LocalDateTime.now();
    }

    public Adocao(){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Adocao adocao = (Adocao) o;
        return Objects.equals(id, adocao.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getData() {
        return data;
    }

    public Tutor getTutor() {
        return tutor;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public String getMotivo() {
        return motivo;
    }

    public StatusAdocao getStatus() {
        return status;
    }

    public String getJustificativaStatus() {
        return justificativaStatus;
    }

    public void marcarComoAprovada() {
        this.status = StatusAdocao.APROVADO;
    }

    public void marcarComoReprovada(String justificativa) {
        this.status = StatusAdocao.REPROVADO;
        this.justificativaStatus = justificativa;
    }
}
```

```typescript
package br.com.alura.adopet.api.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tutores")
public class Tutor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String telefone;

    private String email;

    @OneToMany(mappedBy = "tutor")
    private List<Adocao> adocoes;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tutor tutor = (Tutor) o;
        return Objects.equals(id, tutor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Adocao> getAdocoes() {
        return adocoes;
    }

    public void setAdocoes(List<Adocao> adocoes) {
        this.adocoes = adocoes;
    }
}
```

Vai precisar também criar o método `existsByPetIdAndStatus` na interface `AdocaoRepository`:

```java
package br.com.alura.adopet.api.repository;

import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.StatusAdocao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdocaoRepository extends JpaRepository<Adocao, Long> {

    boolean existsByPetIdAndStatus(Long idPet, StatusAdocao status);

}
```

Atualize a classe `ValidacaoPetComAdocaoEmAndamento` para utilizar o novo método da interface repository:

```java
package br.com.alura.adopet.api.validacoes;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.excpetion.ValidacaoExcpetion;
import br.com.alura.adopet.api.model.StatusAdocao;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidacaoPetComAdocaoEmAndamento implements ValidacaoSolicitacaoAdocao {

    @Autowired
    private AdocaoRepository adocaoRepository;

    public void validar(SolicitacaoAdocaoDto dto) {
        boolean petTemAdocaoEmAndamento = adocaoRepository
                .existsByPetIdAndStatus(dto.idPet(), StatusAdocao.AGUARDANDO_AVALIACAO);

        if (petTemAdocaoEmAndamento) {
            throw new ValidacaoExcpetion("Pet já está aguardando avaliação para ser adotado!");
        }
    }

}
```

Por fim, atualize a classe `AdocaoService` para utilizar o construtor e métodos da entidade `Adocao`:

```java
package br.com.alura.adopet.api.service;

import br.com.alura.adopet.api.dto.AprovacaoAdocaoDto;
import br.com.alura.adopet.api.dto.ReprovacaoAdocaoDto;
import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.PetRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import br.com.alura.adopet.api.validacoes.ValidacaoSolicitacaoAdocao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class AdocaoService {

    @Autowired
    private AdocaoRepository repository;

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private List<ValidacaoSolicitacaoAdocao> validacoes;

    public void solicitar(SolicitacaoAdocaoDto dto) {
        Pet pet = petRepository.getReferenceById(dto.idPet());
        Tutor tutor = tutorRepository.getReferenceById(dto.idTutor());

        validacoes.forEach(v -> v.validar(dto));

        Adocao adocao = new Adocao(tutor, pet, dto.motivo());
        repository.save(adocao);

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getPet().getAbrigo().getNome() +"!\n\nUma solicitação de adoção foi registrada hoje para o pet: " +adocao.getPet().getNome() +". \nFavor avaliar para aprovação ou reprovação.");
    }

    public void aprovar(AprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.marcarComoAprovada();

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Adoção aprovada",
                "Parabéns " +adocao.getTutor().getNome() +"!\n\nSua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi aprovada.\nFavor entrar em contato com o abrigo " +adocao.getPet().getAbrigo().getNome() +" para agendar a busca do seu pet.");
    }

    public void reprovar(ReprovacaoAdocaoDto dto) {
        Adocao adocao = repository.getReferenceById(dto.idAdocao());
        adocao.marcarComoReprovada(dto.justificativa());

        emailService.enviarEmail(
                adocao.getPet().getAbrigo().getEmail(),
                "Solicitação de adoção",
                "Olá " +adocao.getTutor().getNome() +"!\n\nInfelizmente sua adoção do pet " +adocao.getPet().getNome() +", solicitada em " +adocao.getData().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) +", foi reprovada pelo abrigo " +adocao.getPet().getAbrigo().getNome() +" com a seguinte justificativa: " +adocao.getJustificativaStatus());
    }

}
```

Prontinho! Agora o seu projeto está sem códigos redundantes nas classes que são entidades JPA, deixando-as mais limpas e enxutas. Além disso, otimizamos as consultas ao banco de dados nas classes de validações, para evitar problemas de performance no acesso ao banco de dados pela aplicação.

