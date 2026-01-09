## Transcrição

Boas-vindas ao curso de **Spring Boot 3: desenvolva uma API Rest em Java!**

Me chamo Rodrigo Ferreira e serei o seu instrutor ao longo deste curso, em que vamos aprender como usar o Spring Boot na versão `3`.

> Rodrigo Ferreira é uma pessoa de pele clara, com olhos castanhos e cabelos castanhos e curto. Veste camiseta preta lisa, tem um microfone de lapela na gola da camiseta, e está sentado em uma cadeira preta. Ao fundo, há uma parede lisa com iluminação azul gradiente.

#### Objetivos

- Desenvolvimento de uma API Rest
- CRUD (Create, Read, Update e Delete)
- Validações
- Paginação e ordenação

O objetivo neste curso é usarmos o Spring Boot para desenvolvermos uma API Rest, com algumas funcionalidades. A ideia é desenvolver um CRUD, sendo as quatro operações fundamentais das aplicações: **cadastro, listagem, atualização e exclusão de informações**.

Isto é, aprenderemos a desenvolver um CRUD de uma API Rest usando o Spring Boot.

Vamos ver também como aplicar validações das informações que chegam na nossa API, usando o _Bean Validation_. Depois, vamos aprender a utilizar o conceito de paginação e ordenação das informações que a nossa API vai devolver.

#### Tecnologias

- Spring Boot 3
- Java 17
- Lombok
- MySQL/ Flyway
- JPA/Hibernate
- Maven
- Insomnia

Faremos tudo isso usando algumas tecnologias, como **Spring Boot 3**, sendo a última versão disponibilizada pelo framework. Usaremos, também, o **Java 17** sendo a última versão LTS (_Long-term support_, em português "Suporte de longo prazo") que possui maior tempo de suporte disponível para o Java.

Aprenderemos a usar alguns recursos das últimas versões do Java para deixarmos o nosso código mais simples. Utilizaremos em conjunto com o projeto o **Lombok**, responsável por fazer a geração de códigos repetitivos, como _getters_, _setters_, _toString_, entre outros. Tudo via anotações para o código ficar menos verboso.

Usaremos o banco de dados **MySQL** para armazenar as informações da API e junto com ele utilizaremos a biblioteca **Flyway**. Isso para termos o controle do histórico de evolução do banco de dados, um conceito que chamamos de **_Migration_**.

A camada de persistência da nossa aplicação será feita com a **JPA** (_Java Persistence API_), com o **Hibernate** como implementação dessa especificação e usando os módulos do Spring Boot, para tornar esse processo o mais simples possível.

Usaremos o **Maven** para gerenciar as dependências do projeto, e também para gerar o _build_ da nossa aplicação. Por último, como focaremos na API Rest (apenas no Back-end), não teremos interface gráfica, como páginas HTML e nem Front-end e aplicativo mobile.

Mas para testarmos a API, usaremos o **Insomnia**, sendo uma ferramenta usada para testes em API. Com ela, conseguimos simular a requisição para a API e verificar se as funcionalidades implementadas estão funcionando.

Essas são as tecnologias que usaremos ao longo deste curso.

#### Qual é o nosso projeto?

![Protótipo do aplicativo que será trabalhado ao longo deste curso. Nele, há três telas mostradas lado a lado, da esquerda para direita. A primeira tela é a tela inicial, em que há a logo do aplicativo no canto superior direito. Abaixo há três botões retangulares grande e azuis que ocupam o resto da tela para escolher as seções. De cima para baixo, a ordem dos botões é: Médicos(as), Pacientes e Consultas. A segunda tela é para pesquisar na seção escolhida anteriormente. No caso, mostra os resultados da seção "Médicos(as)". Se não houver um filtro, todos os resultados aparecerão em ordem alfabética. A terceira e última tela é um formulário de cadastro, com os campos a serem preenchidos. Os campos, de cima para baixo, são: Nome completo, especialidade, CRM, e-mail, telefone ou celular, logradouro, número, complemento e cidade](https://cdn1.gnarususercontent.com.br/1/723333/5fadebca-1803-4fa5-90b0-ac1dc9a7718c.png)

Trabalharemos em um projeto de uma clínica médica fictícia. Temos uma empresa chamada **Voll Med**, que possui uma clínica que precisa de um aplicativo para monitorar o cadastro de médicos, pacientes e agendamento de consultas.

Será um aplicativo com algumas opções, em que a pessoa que for usar pode fazer o CRUD, tanto de médicos quanto de pacientes e o agendamento e cancelamento das consultas.

Vamos disponibilizar esse protótipo, mas lembrando que é somente para consultas, para visualizarmos como seria o Front-end. Isso porque o foco deste curso é o Back-end.

A documentação das funcionalidades do projeto ficará em um quadro do Trello com cada uma das funcionalidades. Em cada cartão teremos a descrição de cada funcionalidade, com as regras e validações que vamos implementar ao longo do projeto.

Esse é o nosso objetivo neste curso, aprender a usar o Spring Boot na versão 3 para desenvolvermos o projeto dessa clínica médica, utilizando as tecnologias mencionadas anteriormente.

Vamos lá?

Até a próxima aula!

## Transcrição

O primeiro passo para iniciarmos o nosso projeto é criá-lo, já que neste curso iniciaremos do zero. No caso do Spring Boot, usaremos o Spring Initializr para isso, sendo uma ferramenta disponibilizada pela equipe do Spring Boot para criarmos o projeto com toda estrutura inicial necessária.

Acessaremos o Spring Initializr pelo site [https://start.spring.io/](https://start.spring.io/). Nele, será exibido alguns campos para preenchermos sobre o projeto e na parte inferior da tela, temos três botões, sendo o primeiro "Generate" para gerar o projeto.

Como o projeto vai usar o Maven como ferramenta de gestão de dependências e de _build_, deixaremos marcado a opção "Maven Project". Em "Language" deixaremos marcada a opção "Java", que será a linguagem que usaremos.

Na parte "Spring Boot", vamos selecionar a versão do Spring Boot que desejamos gerar o projeto. No momento da gravação deste curso, a mais atual é a versão `2.7.4`, mas temos a versão `3.0.0` que não está liberada ainda, porém, é a que iremos selecionar.

Provavelmente no momento em que estiver assistindo a este curso, essa versão já estará liberada, sem ser a versão beta.

> Project

- **Maven Project**: `selecionado`

> Language

- **Java**: `selecionado`

> Spring Boot

- 3.0.0: `selecionado`

Em "Project Metadata" são solicitadas informações para o Maven configurar o projeto. No campo "Group" colocaremos "med.voll" por ser o nome da empresa, e em "Artifact" e "Name" colocaremos o nome do projeto, "api".

Na descrição, podemos colocar "API Rest da aplicação Voll.med" e em "Package name" (pacote principal da aplicação) ele já pega o _group_ e o _artifact_, deixaremos como `med.voll.api`.

No campo "Packaging" é para escolhermos como o projeto será empacotado, que vamos deixar a opção `Jar` selecionada. Usaremos a versão `17` do Java, sendo a última versão _LTS - long term support_, que possui maior tempo de suporte.

> Project Metadata

- **Group**: med.voll
- **Artifact**: api
- **Name**: api
- **Description**: API Rest da aplicação Voll.med
- **Package name**: med.voll.api
- **Packaging**: Jar
- **Java**: 17

Agora, à direita da tela temos a seção "Dependencies" e um botão "Add dependencies" (com o atalho "Ctrl + B"). Nela, adicionaremos as dependências do Spring que desejamos incluir no projeto. Para isso, vamos clicar no botão "Add dependencies".

Será aberta uma pop-up com diversas dependências do Spring Boot, e do Spring para selecionarmos. Vamos apertar a tecla "Ctrl" do teclado e clicar em cada uma das dependências que desejamos adicionar, sendo elas:

- Spring Boot DevTools
- Lombok
- Spring Web

O _Spring Boot DevTools_ é um módulo do Spring Boot que serve para não precisarmos reiniciar a aplicação a cada alteração feita no código. Isto é, toda vez que salvarmos as modificações feitas no código, ele subirá automaticamente.

Já o Lombok não é do Spring, é uma ferramenta para gerar códigos, como esses códigos verbosos do Java, de `getter` e `setter`, baseado em anotações. Usaremos o Lombok para deixarmos o código mais simples e menos verboso.

A próxima dependência é a Spring Web, dado que vamos trabalhar com uma API Rest e precisamos do módulo web. A princípio deixaremos somente essas três dependências, sem incluir as de banco de dados, de _migration_ e de segurança. Mas conforme formos desenvolvendo o projeto, podemos ir adicionando de forma manual.

Após isso, apertaremos a tecla "Esc" para fechar a pop-up. À direita, em "Dependencies", perceba que temos as três listadas.

Depois de preenchermos todas as informações e adicionarmos as dependências, podemos selecionar o botão "Generate" na parte inferior da página.

Dessa forma, vamos gerar o projeto e teremos um arquivo `.zip` com o projeto compactado. Após finalizado o download, clicaremos no arquivo `api.zip` para abrir.

Perceba que ele possui uma pasta chamada `api`, o mesmo nome do projeto que digitamos na tela do Spring Initializr. Clicaremos na pasta `api` e depois no botão "Extract", para extrair. Você pode usar a ferramenta que achar necessária para descompactar o arquivo `.zip`.

Criamos o projeto, baixamos o arquivo zip e o descompactamos. O diretório `api`, é o nosso projeto. Agora, podemos importar na IDE e começar a trabalhar no código.

Na próxima aula, vamos entender como funciona a estrutura de diretórios e como esse projeto já foi criado para nós pelo site do Spring Initializr.

Vamos lá?

#   
Para saber mais: Spring e Spring Boot

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116036/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116036/question)

Spring e Spring Boot não são a mesma coisa com nomes distintos.

**Spring** é um **framework** para desenvolvimento de aplicações em Java, criado em meados de 2002 por Rod Johnson, que se tornou bastante popular e adotado ao redor do mundo devido a sua simplicidade e facilidade de integração com outras tecnologias.

O framework foi desenvolvido de maneira **modular**, na qual cada recurso que ele disponibiliza é representado por um módulo, que pode ser adicionado em uma aplicação conforme as necessidades. Com isso, em cada aplicação podemos adicionar apenas os módulos que fizerem sentido, fazendo assim com que ela seja mais leve. Existem diversos módulos no Spring, cada um com uma finalidade distinta, como por exemplo: o módulo **MVC**, para desenvolvimento de aplicações Web e API's Rest; o módulo **Security**, para lidar com controle de autenticação e autorização da aplicação; e o módulo **Transactions**, para gerenciar o controle transacional.

Entretanto, um dos grandes problemas existentes em aplicações que utilizavam o Spring era a parte de configurações de seus módulos, que era feita toda com arquivos XML, sendo que depois de alguns anos o framework também passou a dar suporte a configurações via classes Java, utilizando, principalmente, anotações. Em ambos os casos, dependendo do tamanho e complexidade da aplicação, e também da quantidade de módulos do Spring utilizados nela, tais configurações eram bastante extensas e de difícil manutenção.

Além disso, iniciar um novo projeto com o Spring era uma tarefa um tanto quanto complicada, devido a necessidade de realizar tais configurações no projeto.

Justamente para resolver tais dificuldades é que foi criado um novo módulo do Spring, chamado de **Boot**, em meados de 2014, com o propósito de agilizar a criação de um projeto que utilize o Spring como framework, bem como simplificar as configurações de seus módulos.

O lançamento do Spring Boot foi um marco para o desenvolvimento de aplicações Java, pois tornou tal tarefa mais simples e ágil de se realizar, facilitando bastante a vida das pessoas que utilizam a linguagem Java para desenvolver suas aplicações.

Ao longo do curso aprenderemos como desenvolver uma aplicação utilizando o Spring Boot, em conjunto com diversos outros módulos do Spring, de maneira simples e produtiva.

# Para saber mais: Novidades Spring Boot 3

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/120938/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/120938/question)

A versão 3 do Spring Boot foi lançada em novembro de 2022, trazendo algumas novidades em relação à versão anterior. Dentre as principais novidades, se destacam:

- Suporte ao Java 17
- Migração das especificações do Java EE para o Jakarta EE
- Suporte a imagens nativas

Você pode ver a lista completa de novidades da versão 3 do Spring Boot no site: [Spring Boot 3.0 Release Notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes)

**Atenção!** Este curso não terá como foco principal explorar as novidades e recursos da versão 3 do Spring Boot, mas sim o desenvolvimento de uma API Rest utilizando o Spring Boot como framework, sendo que algumas novidades da versão 3 serão utilizadas apenas quando fizerem sentido no projeto.

## Transcrição

Após descompactarmos o projeto, no Desktop teremos uma pasta chamada `api`, sendo a pasta do nosso projeto e podemos importá-la na IDE.

Neste curso usaremos o Intellij, o ideal é você também usar essa IDE para não termos nenhum problema de configuração ao longo do caminho.

Com o Intellij aberto, na página inicial temos a mensagem "_Welcome to intellij IDEA_", abaixo três botões na cor azul, sendo eles: _New Project_, _Open_ e _Get from VCS_. Clicaremos no segundo botão "Open", para abrirmos o projeto.

Será exibida um pop-up com o título "_Open File or Project_" (em português, "Abrir arquivo ou projeto"), em que vamos até o local que descompactamos o projeto, "Desktop > api". Após selecionar a pasta `api`, basta clicar no botão "Ok", na parte inferior direita.

Com isso, o projeto é importado no Intellij. E a primeira coisa que precisamos fazer ao importar um projeto usando o Maven é verificar se ele baixou as dependências corretamente.

Para fazer essa verificação, na lateral direita do Intellij, escrito da vertical, temos a opção "Maven". Clicaremos nela, será mostrado o projeto `api` com uma seta do lado esquerdo para expandir, vamos selecioná-la.

Temos a pasta `Lifecycle`, mas percebemos que ele ainda está realizando as configurações. Na parte inferior esquerda temos a mensagem: "_Resolving dependencies of api_". Isto é, ele está baixando as dependências do projeto para o computador.

Após aguardar um pouco, no painel do Maven (no canto direito), temos as pastas: `Lifecycle`, `Plugins` e `Dependencies`. Clicaremos na seta à esquerda da pasta `Dependencies`, para expandir.

Perceba que são as dependências que instalamos anteriormente, a do Web, DevTools e Lombox, e também, foi baixado uma `starter-test`. Esta dependência é o Spring que instala de forma automática, usada para testes automatizados.

Caso uma das dependências não aparece, podemos selecionar o botão "_Reload All Maven Projects_" ("Recarregar todos os projetos Maven"), no ícone do canto superior esquerdo do painel do Maven. Assim, o projeto será recarregado e será feita uma nova tentativa para baixar as dependências.

Podemos minimizar o painel do Maven, clicando no ícone "-" na parte superior direita.

No painel à esquerda do Intellij, temos a estrutura de diretórios do projeto. Como foi o Spring Initializr que criou essa estrutura de diretórios e arquivos de uma aplicação com Spring Boot para nós, vamos entendê-la.

É um projeto que usa Maven, logo está seguinte a estrutura de diretórios do Maven. Note que temos a pasta `src`, com os arquivos `main` e `test` dentro. Na pasta `main`, temos o arquivo `resources` e dentro de `test` temos o `java`. E no diretório raiz, temos o projeto `pom.xml`.

Até agora, nada muito diferente do esperado da estrutura de projetos Maven. Vamos clicar em `pom.xml` para visualizarmos o `xml` do Maven para projetos com Spring Boot.

Perceba que as informações que preenchemos no site constam neste arquivo, a partir da linha 11.

> `pom.xml`

```javascript
//código omitido

<groupId>med.voll</groupId>
<artifactId>api</artifactId>
<version>0.0.1</version>
<name>api</name>
<description>API Rest da aplicação Voll.med</description>
<properties>
    <java.version>17</java.version>
</properties>

//código omitido
```

Neste trecho temos o artefato, o nome, a descrição e a versão do Java. Mais para baixo, temos a tag `<dependencies>` com as dependências que incluímos anteriormente também.

Descendo mais o código, temos a tag `<build>` com um _plugin_ do Maven para fazer o `build` do projeto. Em `<exclude>` ele aplica uma configuração devido ao Lombok.

```javascript
//código omitido

<exclude>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</exclude>

//código omitido
```

Abaixo, há as tags `repositories` e `pluginRepositories` por estarmos usando uma versão não finalizada, que ainda está em beta.

Porém, onde está o Spring Boot? Ele não está declarado como uma dependência neste arquivo. Essa é a primeira diferença em relação à aplicação com Spring tradicional.

O Spring Boot não vem como uma dependência, dentro da tag `dependencies`. Se subirmos o código do arquivo `pom.xml`, temos uma tag chamada `parent`:

```xml
//código omitido

<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.0.0-M5</version>
    <relativePath/> <!--lookup parent from repository -->
</parent>

//código omitido
```

A tag `parent` é como uma herança da orientação a objetos. É como se o `pom.xml` estivesse herdando de outro `pom.xml` e dentro dessa tag vem de onde ele vai herdar - sendo o `pom.xml` do Spring Boot.

O Spring Boot vem dentro da tag `parent`, em que declaramos para o projeto herdar do arquivo `pom.xml` do Spring Boot. Nela, passamos a versão, o _group Id_ e o _artifact Id_ do Spring Boot. Isso foi feito de forma automática pelo site do Spring Initializr.

As dependências são os módulos do Spring Boot, ou outras bibliotecas e frameworks que desejarmos usar. Note que nas bibliotecas do Spring Boot não especificamos as versões, colocamos somente o `GroupId` e o `ArtifactId`, como em:

```xml
//código omitido

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web
</dependency>

//código omitido
```

Isso acontece porque ele já sabe qual a versão correta de cada dependência, baseada na versão do Spring Boot. Logo, precisamos especificar somente a versão do Spring Boot e não de cada dependência, é uma facilidade que temos.

Assim que funciona o arquivo `pom.xml` no caso do Maven para um projeto usando o Spring Boot.

Vamos fechar o arquivo `pom.xml` e expandir o menu da pasta `Project`, à esquerda do Intellij. Temos a estrutura de diretórios do Maven, mas em "src > main java", perceba que já foi criado o pacote raiz do projeto, o `med.voll.api`.

Dentro da pasta `med.voll.api`, temos uma classe java chamada `ApiApplication`, selecionaremos ela. Por padrão, ele criou essa classe com o nome `Api` (nome do projeto), `Application`.

> `ApiApplication`

```typescript
package med.voll.api;

//código omitido

@SpringBootApplication
public class ApiApplication {

        public static void main(String[] args) {
            SpringApplication.run(ApiApplication.class, args);
        }

}
```

Note que foi gerada uma classe com o método `main`, logo, essa é a classe que rodará o projeto. Isso foi criado de forma automática para nós.

À esquerda, em "src > main > resources" (diretório do Maven que ficam os arquivos e as configurações do projeto), temos três pastas: `static`, `templates` e `application.properties`.

No arquivo `static` é onde ficam as configurações estáticas da aplicação web, como arquivos de `csv`, JavaScript e imagens. Não usaremos essa pasta, dado que não desenvolveremos uma aplicação web tradicional e sim uma API Rest.

Na pasta `templates`, estão os templates HTML, as páginas do projeto. Não usaremos essa pasta, também, porque essas páginas não ficarão na API Back-end e sim em outra aplicação Front-end.

Por último, na pasta `resources`, temos o arquivo `application.properties`. Clicando nele, note que ele está vazio. Esse é a pasta de configurações do projeto com Spring Boot, usaremos bastante esse arquivo.

Além disso, em "src > test > java", foi criado um pacote com uma classe chamada `ApiApplicationTests`, de exemplos com testes automatizados. Clicando nela, perceba que é um teste que está vazio.

Posteriormente, vamos aprender mais sobre essa parte de testes automatizados e entenderemos como realizá-los em um projeto com Spring Boot.

Essa é a estrutura de diretórios de um projeto com Spring Boot. No caso, estamos usando o Maven e, por isso, a estrutura de diretórios está estruturada dessa forma.

Criando o projeto no site do Spring Boot, o arquivo `pom.xml` é configurado corretamente, com as dependências que escolhemos. Gera as configurações do projeto, como vimos em `resources` e já cria a classe `main ApiApplication`, com a estrutura inicial para rodarmos a nossa aplicação.

O objetivo deste vídeo era importarmos o projeto na IDE e explorar os diretórios e arquivos criados. Agora, podemos rodar esse projeto e inicializá-lo fazendo um "Hello, world".

Veremos como fazer isso no próximo vídeo. Até lá!

## Transcrição

O projeto está importado na IDE e conhecemos um pouco a estrutura dos diretórios e arquivos. Nesta aula, executaremos a aplicação e vamos exibir o "Hello World".

Como mencionado, para executarmos esse projeto com Spring Boot, precisamos rodar a classe `ApiApplication` que possui o método `main`. E essa é uma diferença entre aplicações web tradicionais e usando o Spring Boot.

> `ApiApplication`

```typescript
package med.voll.api;

//código omitido

@SpringBootApplication
public class ApiApplication {

        public static void main(String[] args) {
            SpringApplication.run(ApiApplication.class, args);
        }

}
```

Como funcionava para rodarmos uma aplicação web? Nós adicionávamos um servidor de aplicações, como _TomCat_, _Jetty_, _Glassfish_ e _Weblogic_, e colocávamos o projeto dentro do servidor e o inicializavámos. Dessa forma, ele fazia toda configuração e disponibilizava a aplicação.

No Spring Boot, o processo foi invertido. Ao invés de termos um servidor e colocarmos dentro dele a aplicação, é ao contrário: dentro da aplicação é que vai o servidor de aplicação.

Por padrão, o projeto vem com o TomCat como servidor de aplicação e ele já está embutido dentro das dependências do módulo web. Ele não aparece no arquivo `pom.xml` porque está no `xml` do Spring Boot herdado.

Mas já temos um TomCat embutido no projeto, logo não precisamos configurar e inicializar servidor como fazíamos em aplicações web tradicionais, mesmo utilizando o Spring sem o Boot.

Assim, o servidor está embutido no Boot e para rodá-lo entra a classe com o método `main`. Vamos analisar a classe `ApiApplication`:

```typescript
package med.voll.api;

//código omitido

@SpringBootApplication
public class ApiApplication {

        public static void main(String[] args) {
            SpringApplication.run(ApiApplication.class, args);
        }

}
```

É uma classe com uma anotação `@SpringBootApplication`, com um método `main`. Este chama um método estático denominado `run` de uma classe do Spring nomeada `SpringApplication`.

Portanto, para rodar o projeto, basta rodar essa classe com o método `main`, que estamos chamando essa classe do Spring `SpringApplication` com o método `run`. É este método que inicializa o projeto.

Com isso, fica mais simples executarmos a aplicação. Não temos mais as dependências e não precisamos mais configurar os servidores.

Para rodar a aplicação, clicaremos com o botão direito do mouse nela e escolheremos a opção "Run 'ApiApplication.main()'" ou podemos usar o atalho "Ctrl + Shift + F10".

Após rodar, no canto inferior direito da tela é gerado um alerta "_Enable annotation processing_" ("Ativar processamento de anotação"), porque estamos usando o Lombok no projeto, e precisamos habilitar o _annotation processing_. Para habilitar, basta selecionar "Enable annotation processing".

Perceba que ao rodarmos a classe `main`, na aba "Run", foi gerado alguns logs com informações do Spring Boot. Vamos analisar, note que ele exibiu uma _splash_ do Spring e a versão do projeto: `v3.0.0-M5`, depois gerou vários logs.

Rolando a barra inferior do terminal para a direita, temos os logs:

> Não foram exibidos para os logs

```css
"Starting ApiApplication using Java 17.0.4 on alura with PDI 399646"

"No active profile set, falling back to 1 default profile: "default"

DevTools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable

Tomcat initialized with port(s): 8080 (http)
```

Ele está informando que a aplicação está sendo inicializada usando Java 17, não há _profile_ configurado (aprenderemos sobre profiles mais para frente) e um Tomcat embutido que roda na porta 8080.

No final, ele mostra:

```lua
Started ApiApplication in 1.388 seconds (process running for 1.709)
```

Foi bem rápido para ele inicializar o projeto, dado que ele está vazio. Assim, o nosso servidor já está rodando!

Ao rodarmos a classe com o método `main`, o servidor é inicializado e gerado alguns logs. Se tivéssemos algum problema, seríamos interrompidos, ou seja, o servidor seria parado e apareceria uma mensagem de erro.

Deu tudo certo, o projeto está sendo rodado na porta 8080, por padrão. Vamos acessar essa aplicação, para tentarmos disparar uma requisição para a nossa API.

Para isso, abriremos o navegador e acessaremos o seguinte endereço:

```makefile
localhost:8080
```

Ao apertarmos a tecla "Enter", é exibida a mensagem de erro do Spring: "_Whitelabel Error Page_". Informando que a aplicação foi carregada e que foi recebida a requisição, mas não há nenhum controller, nem endereço mapeado. Assim, retornou o erro 404.

```vbnet
Whitelabel Error Page

This application has no explicit mapping for /error, so you are seeing this as a fallback.

Wed Oct 12 15:03:43 BRT 2022
There was an unexpected error (type=Not Found, status=404).
No message available
```

Essa mensagem era esperada, isso significa que funcionou. Isso porque não mapeamos nenhuma URL no projeto. Agora criaremos o _controller_ e fazer o Hello World.

Voltaremos para o Intellij, e no painel à esquerda criaremos uma classe. Em "src > main > java" com a pasta `med.voll.api` selecionada, usaremos o atalho "Alt + Insert".

Será exibido um menu e nele clicaremos a opção "Java Class". No pop-up seguinte, com o título "New Java Class", digitaremos "HelloController", será o nome da nossa classe.

> HelloController.java

```kotlin
package med.voll.api;

public class HelloController {

}
```

Para não ficarmos com as classes soltas no pacote api, na primeira linha que está sendo definido o pacote, podemos inserir `.controller`. Assim, será gerado um subpacote _controller_ em que ficará as classes controller.

```go
package med.voll.api.controller;
```

Perceba que apareceu um sublinhado na cor vermelha abaixo, isso significa que ele não encontrou esse pacote. Passando o mouse por cima, clicaremos em "_more actions_", será mostrada duas ações:

- Move to package ‘med.voll.api.controller’
- Set package name to ‘med.voll.api’

Selecionaremos a primeira opção, `Move to package ‘med.voll.api.controller’`, para movermos para o pacote mencionado. No pop-up exibido com o título "Choose Destination Directory" ("Escolha o diretório de destino"), vamos selecionar `/src/main/java/med/voll/api/controller` e depois clicar no botão "Ok", na parte inferior direita.

Com isso, o pacote controller foi criado e o sublinhado na cor vermelha sumiu.

Na classe `HelloController`, não há nada do Spring Boot e sim o Spring MVC (_Spring Web model-view-controller_). Usaremos funcionalidades do Spring MVC.

Para comunicarmos o Spring MVC que é uma classe controller, acima dela incluiremos a anotação `@Controller`. Mas no caso não estamos trabalhando com aplicação web tradicional, e sim com uma API Rest. Por isso, a anotação será `@RestController`.

Outra anotação que vamos incluir é a `@RequestMapping`. Isso para informarmos qual a URL que esse controller vai responder, que será /hello. Assim, ao chegar uma requisição para `localhost:8080/hello` vai cair neste controller.

```kotlin
package med.voll.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/hello")
public class HelloController {

}
```

No controller, é necessário chamarmos algum método. Criaremos o método `public string olaMundo(){}`. Dentro dele, vamos retorna a string `"Hello World!"`.

```kotlin
package med.voll.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/hello")
public class HelloController {

        public String olaMundo(){
            return "Hello World!";

        }
}
```

Agora, precisamos colocar uma anotação, sendo que o método do protocolo HTTP é para chamar este método.

```kotlin
package med.voll.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/hello")
public class HelloController {


        @GetMapping
        public String olaMundo(){
            return "Hello World!";

        }
}
```

Estamos informando para o Spring que essa classe é um controller, com o `RequestMapping("/hello")`. Logo, se chegou uma requisição `/hello` e ela é do tipo `get`, será chamado o método `olaMundo()`.

Podemos salvar essas alterações e voltar para o navegador para acessar o endereço:

```bash
localhost:8080/hello
```

Note que seguimos com o erro 404.

```vbnet
Whitelabel Error Page

This application has no explicit mapping for /error, so you are seeing this as a fallback.

Wed Oct 12 15:03:43 BRT 2022
There was an unexpected error (type=Not Found, status=404).
No message available
```

Vamos verificar no IntelliJ o motivo se tornar _not found_, está tudo certo, temos um `@RequestMapping("/hello")`. No caso, não funcionou porque não reiniciamos o projeto, ou seja, alteramos o código, mas não reiniciamos.

Mas não adicionamos o módulo do DevTools, usado justamente para reiniciar de forma automática? Sim, porém, no IntelliJ precisamos configurar o projeto para o DevTools funcionar.

Para incluir essa configuração, usaremos o atalho "Shift + Shift". Será exibida uma tela, que na parte superior temos um ícone de lupa com um campo de busca que digitaremos "settings". Nesta opção informa que podemos usar o atalho "Ctrl + Alt + S" para abrir a tela de configurações.

Na tela aberta, no menu do lado esquerdo, clicaremos na seta da opção "Build, Execution, Deployment" para expandir. Nela, clicaremos na seção "Compiler", e à direita do menu, temos uma _checkbox_ ("caixa de seleção") chamada "Build project automatically" ("Construir projeto automaticamente").

Marcaremos a opção "Build project automatically" e depois vamos clicar no botão "Apply", no canto inferior direito da tela. Agora, voltando para o menu do lado esquerdo, clicaremos na opção "Advanced Settings" ("Configurações avançadas").

Na página de configurações avançadas, marcaremos a opção "_Allow auto-make to start even if developed application is currently running_" ("Permitir que a criação automática inicie mesmo se o aplicativo desenvolvido estiver em execução no momento"), dentro da seção "Compiler".

Logo após, podemos clicar no botão "Apply" e depois em "Ok", no canto inferior direito.

No IntelliJ vamos parar o projeto e reiniciar só para garantirmos o pleno funcionamento. Para parar o projeto, clicaremos no botão com o ícone de um quadrado vermelho "▆" no canto superior direito. Após isso, vamos selecionar o ícone de play na cor verde "▶", para rodar a aplicação.

Podemos voltar ao navegador e atualizar a página com o endereço `localhost:8080/hello`, clicando no botão "⟳" na parte superior esquerda. Perceba que a mensagem "Hello World!" é exibida na tela.

Será que o DevTools está funcionando? Vamos testar!

Para isso, voltaremos ao IntelliJ e alterar a string que estamos devolvendo no controller.

```kotlin
            return "Hello World Spring!";
```

Salvaremos clicando em "Ctrl + S". Com isso, o DevTool deve detectar essa alteração e reiniciar o projeto. Perceba que no terminal os logs estão sendo gerados novamente e a aplicação está sendo reinicializada.

Vamos ao navegador novamente e atualizar a página. Desta vez a mensagem exibida é a "Hello World Spring!". Assim, sabemos que o DevTools está funcionando conforme o esperado.

Aprendemos que há a classe `ApiApplication` com o método `main` e ela que rodamos para inicializar o projeto, que vai carregar o Tomcat e configurar o projeto.

E criamos um _controller_, disparamos uma requisição direto do navegador para testarmos se está tudo funcionando. Essa parte do controller é um Spring MVC, não há nada do Spring Boot, isso já funcionava antes do Boot.

Exibimos o Hello World e o projeto está configurando. Agora, podemos começar a implementar as funcionalidades na aplicação, em que teremos o CRUD dos médicos e pacientes, com agendamentos e cancelamentos das consultas.

Até a próxima aula!

# Para se aprofundar mais

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/186662/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/186662/question)

### Quer dar um passo além no seu aprendizado?

Se você está curtindo o curso e sente que pode ir além, que tal explorar uma experiência de aprendizado mais dinâmica e imersiva, com um professor ao vivo pronto para tirar sua dúvida, uma turma para trocar experiências e fazer networking e um caminho mais guiado para evoluir com mais confiança?

Para isso, criamos os **Cursos Imersivos**. Com eles, você tem:

- **Aulas 100% ao vivo**, para interagir e tirar dúvidas em tempo real
- **Professores especialistas**, com vasta experiência no mercado
- **Turmas reduzidas**, garantindo mais suporte, troca e uma atenção personalizada

### E melhor: como estudante Alura, você garante um [desconto exclusivo](https://cursos.alura.com.br/compra/curso-imersivo/sx25?turma=java-deep-dive)*

Dê o próximo passo na sua jornada! [Confira agora a próxima turma!](https://carreira.alura.com.br/cursos-imersivos/java-deep-dive)

*Link pessoal e não compartilhável

# Faça como eu fiz: criação do projeto

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116038/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116038/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula. Crie o projeto inicial pelo site [Spring Initializr](https://start.spring.io/), faça o import dele no IntelliJ e por fim crie uma classe Controller como _Hello World_.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116038/opinion)

A classe Controller de exemplo deve ter a seguinte estrutura:

```java
@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public String olaMundo() {
        return "Hello World Spring!";
    }
}
```

## Transcrição

Com a aplicação criada, vamos desenvolver as funcionalidades do projeto. Quais as funcionalidades do projeto? O que vamos precisar implementar? Quais as validações e regras de negócio?

Para facilitar a descrição dessas funcionalidades, criamos um quadro no [Trello](https://trello.com/b/O0lGCsKb/api-voll-med) , com cada cartão contendo a definição de uma funcionalidade.

À esquerda, na coluna "To do", temos o primeiro cartão chamado "Cadastro de médicos". Vamos arrastá-la para a coluna "Doing", para mostrar que essa é a funcionalidade que estamos fazendo no momento. Ao finalizarmos, podemos arrastar para a coluna "Done" ("Feito").

Clicando no cartão "Cadastro de médicos", é aberta uma pop-up com a descrição da funcionalidade:

> Funcionalidade "Cadastro de médicos":

```csharp
O sistema deve possuir uma funcionalidade de cadastro de médicos, na qual as seguintes informações deverão ser preenchidas:

 Nome
 E-mail
 Telefone
 CRM
 Especialidade (Ortopedia, Cardiologia, Ginecologia ou Dermatologia)
 Endereço completo (logradouro, número, complemento, bairro, cidade, UF e CEP)

Todas as informações são de preenchimento **obrigatório**, exceto o número e o complemento do endereço.
```

Temos os campos obrigatórios e a regra de negócio que devem ser aplicados no projeto. Para facilitar o entendimento, dado que vamos desenvolver somente API Back-end (não teremos interface gráfica), vamos disponibilizar os protótipos das telas do aplicativo no Figma.

> [Layout das telas no Figma](https://www.figma.com/file/N4CgpJqsg7gjbKuDmra3EV/Voll.med)

Nesta página, temos os protótipos das telas do nosso aplicativo mobile desta aplicação.

Agora, vamos focar na funcionalidade de cadastrar médicos.

![Protótipo da tela de cadastrar médicos do aplicativo que será trabalhado ao longo deste curso. Nele, há um formulário de cadastro, com os campos que devem ser preenchidos. Os campos, de cima para baixo, são: Nome completo, especialidade, CRM, e-mail, telefone ou celular, logradouro, número, complemento e cidade. No canto superior direito da tela, há um menu com três opções para selecionar: Médicos, Pacientes e Consultas. Na parte inferior central, temos dois botões: "Concluir cadastro" e "Cancelar".](https://cdn1.gnarususercontent.com.br/1/723333/67df69a9-910c-4177-89c7-c971db5eb834.png)

As pessoas que trabalham nessa clínica terão esse aplicativo instalado no celular. Esse aplicativo vai ter um menu para acessar a página para cadastrar um novo médico, com os campos descritos no cartão do Trello.

Ao clicarmos no botão "Concluir cadastro", o aplicativo mobile irá enviar uma requisição para a nossa API. Nela, receberemos, validaremos e salvaremos essas informações em um banco de dados.

Com esse layout, conseguimos visualizar melhor o funcionamento, já que não implementaremos a parte das telas. Com as funcionalidades descritas e os layouts nos auxiliando, vamos iniciar a implementação pela parte de disparar as requisições.

Como não temos um aplicativo mobile e nem aplicação Front-end, como testaremos a API? Como vamos enviar as requisições?

Usaremos uma ferramenta de testes de API, as duas mais usadas são:

- Postman
- Insomnia

Neste curso, utilizaremos a ferramenta Insomnia.

Abrindo o Insomnia, na tela inicial temos um menu no canto superior esquerdo as opções: _Application_, _Edit_, _View_, _Window_, _Tools_ e _Help_. Abaixo, temos o símbolo da ferramenta Insomnia com uma seta para expandir, em que mais à direita dela temos um ícone de engrenagem e outro com a silhueta do rosto de uma pessoa.

Mais abaixo, temos a seção "Dashboard", em que temos um campo de busca à direita e um botão "Create ▼".

Criaremos um projeto para configurarmos as requisições e deixarmos tudo agrupado, de forma mais simples. Para isso, na parte superior esquerda da página, clicaremos em "Insomnia ▼" e depois na opção "_Create new project_" ("+ Criar novo projeto").

Será aberta uma pop-up com o título "Create New Project" com um campo para digitarmos o nome do projeto abaixo e um botão "_Create_", no canto inferior direito. O nome do nosso projeto será "API Voll.med", e após digitar o nome no campo podemos selecionar o botão "Create".

Seremos redirecionados para a página do Dashboard, mas perceba que no lugar que estava escrito "Insomnia" agora está com o nome "API Voll.med", no canto superior esquerdo.

Agora, no canto superior direito vamos clicar no botão "Create ▼". Serão exibidas duas seções, sendo elas `New` e `Import from`. Na primeira, temos as opções "_Design Document_" e "_Request Collection_", já na segunda temos: "_File_", "URL" e "_Clipboard_". Vamos clicar na opção "Request Collection", para criarmos uma coleção de requisições que enviaremos para a API.

Será aberta uma pop-up com o título "_Create New Request Collection_" ("Criar nova coleção de solicitações") com um campo para digitarmos o nome da _request collection_ abaixo e um botão "_Create_", no canto inferior direito. Chamaremos de "Requisições" e depois clicaremos no botão "Create".

Agora, sim, estamos na tela principal do Insomnia. Nela, temos à esquerda, a seção "_No Environment_" ("Sem ambiente") com um campo para filtrarmos informações abaixo e à esquerda deste campo temos um botão com um símbolo de mais e uma seta apontando para baixo (para expandir). E a direita temos as opções com os seguintes atalhos:

- _New Request_ ("Novo pedido"): (Ctrl + N)
- _Switch Requests_ ("Solicitações de troca"): (Ctrl + P)
- _Edit Environments_ ("Editar ambientes"): (Ctrl + E)

E abaixo, mais dois botões:

- _Import from File_ ("Importar do arquivo")
- _New Request_ ("Novo pedido")

Com isso, conseguimos simular uma requisição para a API.

À esquerda, clicaremos no botão com o ícone de mais, à direita do campo de filtrar. As alternativas exibidas são:

- HTTP Request
- Graph Request
- gRPC Request
- New Folder

Selecionaremos "HTTP Request" ou podemos usar o atalho "Ctrl + N". Agora, à esquerda do Insomnia, temos "New Request" e à direita, na parte superior do painel central, um campo para selecionarmos o método e incluirmos um endereço com um botão "Send". Abaixo, temos as opções: _Body_, _Auth_, _Query_, _Header_ e _Docs_.

Dessa forma, conseguimos passar as informações da requisição que desejamos enviar para a API.

Do lado esquerdo, vamos renomear de "New Request" para "Cadastro de Médico", dando dois cliques e digitando o nome desejado. No painel central, precisamos escolher qual o método que vamos disparar essa requisição.

Por ser um cadastro, não é um método `get` - usado para leitura para receber dados da API). O que desejamos fazer é ao contrário, queremos enviar dados para API. Por isso, vamos clicar em "Get ▼" e no menu que será expandido, escolheremos o método `POST`.

Do lado direito do método, precisamos inserir a URL da API. Digitaremos `http://localhost:8080/`, e precisamos ter alguma URL mapeada no projeto. Como estamos trabalhando com as funcionalidades de cadastro de médicos, colocaremos /medicos.

```bash
http://localhost:8080/medicos
```

Assim, temos uma requisição do tipo `post` para a URL `http://localhost:8080/medicos`. Mas falta um detalhe, nesta requisição precisamos enviar os dados para API. Onde passamos esses dados no Insomnia?

Abaixo do método post, temos uma aba chamada "Body ▼", sendo justamente para passarmos o corpo da requisição. Clicando em "Body ▼", escolheremos a opção "JSON". Normalmente, em API Rest, os dados são usados no formato JSON.

Note que foi aberto um campo para digitarmos esses dados, em que digitaremos as seguintes informações:

```perl
{
"nome": "Rodrigo Ferreira",
"email": "rodrigo.ferreira@voll.med",
"crm": "123456",
"especialidade": "ortopedia",
"endereco": {
    "logradouro": "rua 1",
    "bairro": "bairro",
    "cep": "12345678",
    "cidade": "Brasilia",
    "uf": "DF",
    "numero": "1",
    "complemento": "complemento"
    }
}
```

É um JSON que representa os dados da funcionalidade de cadastro de médicos. Note que são os mesmos campos do nosso protótipo e do _card_ do Trello. Com a requisição montada, podemos clicar no botão "Send".

Após selecionar o botão para enviar a requisição, à direita será exibido o erro `404 Not Found` com os seguintes dados na aba "Preview":

```json
{
    "timestamp": "2022-10-13T00:43:01.850+00:00"
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/medicos"
}
```

Isso aconteceu porque estamos enviando uma requisição para o endereço "/medicos" que não está mapeado no controller. Lembrando que temos no projeto somente o "/hello".

Agora que entendemos qual o processo para enviar as requisições para a nossa API usando o Insomnia, podemos começar a escrever os códigos e implementar a funcionalidade no Back-end.

Mas vamos aprender isso na sequência. Até a próxima aula!

# Preparando o ambiente: Trello e Figma

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116043/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116043/question)

Durante o curso eu utilizarei um quadro do Trello contendo cartões que descrevem cada uma das funcionalidades da aplicação. Você pode acessar esse quadro neste link:

- [Trello - Curso de Spring Boot](https://trello.com/b/O0lGCsKb/api-voll-med)

Além disso, também vou exibir o layout mobile da aplicação, que pode ser acessado neste link da ferramenta Figma:

- [Layout mobile da aplicação Voll.med](https://www.figma.com/file/N4CgpJqsg7gjbKuDmra3EV/Voll.med)

Obs: O quadro do trello está disponível como **somente leitura**, ou seja, você não vai conseguir alterar os cards dele. Caso queira, pode fazer uma cópia do quadro para o **seu usuário** no trello, sendo possível com isso alterá-lo da maneira que desejar.

## Transcrição

Na aula anterior aprendemos a enviar requisições pelo Insomnia, mas está retornando erro 404. Isso porque ainda não implementamos o endereço `/medicos` no Back-end.

Neste vídeo, vamos aprender como implementar essa funcionalidade usando o Spring Boot.

Voltando ao IntelliJ, precisamos mapear a URL `/medicos` no projeto. Para isso, é necessário criarmos uma classe controller, seguindo o padrão do Spring MVC, o controller é o arquivo que mapeamos as requisições enviadas para nossa API.

Já temos o arquivo `HelloController`, em que estamos tratando a funcionalidade de médicos e, por isso, vamos gerar outro controller.

Para esse objetivo, à esquerda selecionaremos o pacote `Controller` e usaremos o atalho "Alt + Insert". Será exibido um menu, onde vamos escolher a opção "Java Class", no pop-up seguinte com o título "New Java Class" digitaremos como nome "MedicoController".

> `MedicoController`:

```kotlin
package med.voll.api.controller;

public class MedicoController {
}
```

No momento é uma classe Java que não está associada ao Spring, ele não vai carregar essa classe no projeto. Precisamos incluir a anotação,

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class MedicoController {

}
```

Com isso, estamos comunicando o Spring que esta é uma classe _Restcontroller_ que precisa ser carregada durante a inicialização do projeto. Desse modo, o Spring irá carregar a classe `MedicoController` toda vez que o projeto for inicializado.

Além dessa anotação, incluiremos a `@RequestMapping("")`, passando a URL deste controller, no caso `("medicos")`, `@RequestMapping("medicos")`.

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("medicos")
public class MedicoController {

}
```

Assim, o Spring sabe que esta é uma classe controller devido à anotação `@RestController`, que está mapeando a URL `/medicos`. Isto é, ao chegar uma requisição para `/medicos` o Spring vai detectar que deverá chamar o `MedicoController`.

Dentro do controller precisamos ter métodos que representam as funcionalidades. Vamos declarar um método chamado `cadastrar()` para a funcionalidade de cadastro de médicos, com o retorno `void` (significa que não teremos retorno).

```csharp
//código omitido

public void cadastrar() {
    }

//código omitido
```

Por enquanto está vazio. Acima do método, é necessário especificarmos o verbo do protocolo HTTP que ele vai lidar. No caso, estamos enviando as requisições via verbo `post`, por isso, incluiremos a anotação `@PostMapping`.

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("medicos")
public class MedicoController {

        @PostMapping
         public void cadastrar() {
    }

}
```

Estamos comunicando o Spring que ao chegar uma requisição do tipo `post` para a URL `/medicos`, ele deve chamar o método `cadastrar` da classe `MedicoController`. É isso que acabamos de mapear. Podemos salvar o arquivo clicando em "Ctrl + S".

Voltando ao Insomnia, estamos usando o método `POST` com a URL `http://localhost:8080/medicos`. Em "Body", temos:

```perl
{
"nome": "Rodrigo Ferreira",
"email": "rodrigo.ferreira@voll.med",
"crm": "123456",
"especialidade": "ortopedia",
"endereco": {
    "logradouro": "rua 1",
    "bairro": "bairro",
    "cep": "12345678",
    "cidade": "Brasilia",
    "uf": "DF",
    "numero": "1",
    "complemento": "complemento"
    }
}
```

E na aula anterior, tivemos um erro `404 Not Found`, em que à direita, em "Preview", foi exibido:

```json
{
    "timestamp": "2022-10-13T00:43:01.850+00:00"
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/medicos"
}
```

Após lembrarmos disso, podemos disparar a requisição clicando no botão "Send", à direita da URL. Perceba que agora retornou `200 OK` e, em "Preview", temos a mensagem: "_No body returned for response_" (em português, "Nenhum corpo retornado para resposta"). Isso significa que deu certo e que a requisição foi processada com sucesso!

Porém, nesta requisição, estamos levando um JSON no corpo. Como recebemos esse JSON no método `cadastrar` do `MedicoController`?

Voltando para o IntelliJ, no método `cadastrar` do arquivo `MedicoController`, um método no Java recebe parâmetros e o nosso está vazio.

Vamos inserir no parêntese do método `cadastrar` o`String json` e dentro dele, colocaremos `System.out.println()`, passando o `json` como parâmetro, para verificar se está chegando da forma correta.

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("medicos")
public class MedicoController {

        @PostMapping
         public void cadastrar(String json) {
              System.out.println(json);
    }

}
```

Podemos salvar clicando em "Ctrl + S" e na parte inferior direita do IntelliJ, selecionaremos a aba "Run". Nela, perceba que a reinicialização automática está sendo feita devido ao DevTools.

Agora, voltaremos à Insomnia para enviar a requisição, clicando no botão "Send". À direita, continuamos com o status `200 OK` e a mensagem "_No body returned for responde_".

Vamos verificar se no `system.out.println()` vai chegar o JSON que inserimos no Insomnia, enviado no controller. Para isso, voltaremos ao terminal do IntelliJ.

Na aba "Run", note que ele exibiu `null`. Isso significa que não é bem assim que imprimimos os dados. Logo, como recebemos os dados da requisição?

É dessa forma que fizemos, mas faltou informarmos ao Spring que o parâmetro `string json` do método `cadastrar` é para pegar do corpo da requisição.

Para informarmos isso para o Spring, incluiremos a anotação `@RequestBody` neste parâmetro.

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("medicos")
public class MedicoController {

        @PostMapping
         public void cadastrar(@RequestBody String json) {
              System.out.println(json);
    }

}
```

Agora o Spring sabe que o parâmetro JSON do método `cadastrar` é para ele puxar do corpo da requisição. Salvaremos essa alteração feita no arquivo clicando em "Ctrl + S".

Logo após, voltaremos ao Insomnia e selecionaremos o botão "Send". Seguimos com o status `200 OK` e a mensagem "_No body returned for responde_".

Na aba "Run" do IntelliJ, vamos verificar se o `system.out.println()` vai exibir o JSON de forma correta:

> ```perl
> {
> "nome":"Rodrigo Ferreira",
> "email":"rodrigo.ferreira@voll.med",
> "crm":"123456",
> "especialidade":"ortopedia",
> "endereco":{
>     "logradouro":"rua 1",
>     "bairro":"bairro",
>     "cep:"12345678",
>     "cidade":"Brasilia,
>     "uf":"DF",
>     "numero":"1",
>     "complemento":"complemento",
>     }
> }
> ```

Nos retornou exatamente o JSON que incluímos no corpo da requisição. Assim, as informações chegaram para o método `cadastrar` do controller da forma esperada.

Essa é uma das maneiras de recebermos dados nos métodos dos controllers: declarando como string e anotando como request body, no caso de requisições do tipo `post`.

Porém, essa não é a melhor forma, porque estamos recebendo esses campos **como uma string literal**. Por exemplo, se quisermos imprimir o CEP 12345678, teríamos que fazer um `parse` em cima dessa string para chegar na string do CEP. Seria um processo bem trabalhoso.

Será que conseguimos receber uma `string cep` e renomearmos de `json` para `cep` no `system out`?

```less
        @PostMapping
         public void cadastrar(@RequestBody String cep) {
              System.out.println(cep);
    }
```

Com essas alterações, será que o Spring consegue entender que dentro do JSON há um campo chamado `cep` e que por ele estar recebendo somente este campo, será enviado somente o `12345678`?

Para testar, clicaremos em "Ctrl + S" para salvar. Depois, vamos clicar na aba "Run", na parte inferior do IntelliJ. Perceba que já reiniciou, podemos ir no Insomnia e selecionar o botão "Send", para enviar a requisição.

Voltando novamente para a aba "Run" do IntelliJ, retornou exatamente o JSON completo novamente:

> ```perl
> {
> "nome":"Rodrigo Ferreira",
> "email":"rodrigo.ferreira@voll.med",
> "crm":"123456",
> "especialidade":"ortopedia",
> "endereco":{
>     "logradouro":"rua 1",
>     "bairro":"bairro",
>     "cep:"12345678",
>     "cidade":"Brasilia,
>     "uf":"DF",
>     "numero":"1",
>     "complemento":"complemento",
>     }
> }
> ```

Com isso, percebemos que ao receber uma string no parâmetro do método `cadastrar` do controller e anotá-la com `@RequestBody`, o Spring exibirá o corpo todo do JSON e passará para essa string.

Se quisermos receber os campos separados, não podemos receber como string. Será necessário criarmos uma classe, e nela declarar os atributos com os mesmos nomes que estão sendo recebidos pelo JSON.

Faremos isso, pois queremos trabalhar com cada campo de forma separada.

Vamos aprender como aplicar isso no próximo vídeo, usando recursos do Java. Te espero lá!

# Para saber mais: JSON

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116046/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116046/question)

JSON (_JavaScript Object Notation_) é um formato utilizado para representação de informações, assim como XML e CSV.

Uma API precisa receber e devolver informações em algum formato, que representa os recursos gerenciados por ela. O JSON é um desses formatos possíveis, tendo se popularizado devido a sua leveza, simplicidade, facilidade de leitura por pessoas e máquinas, bem como seu suporte pelas diversas linguagens de programação.

Um exemplo de representação de uma informação no formato XML seria:

```xml
<produto>
    <nome>Mochila</nome>
    <preco>89.90</preco>
    <descricao>Mochila para notebooks de até 17 polegadas</descricao>
</produto>
```

Já a mesma informação poderia ser represetada no formato JSON da seguinte maneira:

```json
{
    "nome" : "Mochila",
    "preco" : 89.90,
    "descricao" : "Mochila para notebooks de até 17 polegadas"
}
```

Perceba como o formato JSON é muito mais compacto e legível. Justamente por isso se tornou o formato universal utilizado em comunicação de aplicações, principalmente no caso de APIs REST.

Mais detalhes sobre o JSON podem ser encontrados no site [JSON.org](https://www.json.org/json-pt.html).

# Para saber mais: lidando com CORS

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116048/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116048/question)

Quando desenvolvemos APIs e queremos que todos os seus recursos fiquem disponíveis a qualquer cliente HTTP, uma das coisas que vem à nossa cabeça é o CORS (_Cross-Origin Resource Sharing_), em português, “compartilhamento de recursos com origens diferentes”. Se ainda não aconteceu com você, fique tranquilo, é normal termos erros de CORS na hora de consumir e disponibilizar APIs.

![alt text: Exemplo de mensagem de erro de CORS exibida no console do navegador Google Chrome. A mensagem é apresentada em cor vermelha e fundo vermelho claro.](https://cdn3.gnarususercontent.com.br/2700-spring-boot/02/Aula2-img1.png)

Mas afinal, o que é CORS, o que causa os erros e como evitá-los em nossas APIs com Spring Boot?

## CORS

O CORS é um mecanismo utilizado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente. Esse tipo de ação é chamada de _requisição cross-origin HTTP_. Na prática, então, ele informa aos navegadores se um determinado recurso pode ou não ser acessado.

Mas por que os erros acontecem? Chegou a hora de entender!

## Same-origin policy

Por padrão, uma aplicação Front-end, escrita em JavaScript, só consegue acessar recursos localizados na mesma origem da solicitação. Isso acontece por conta da política de mesma origem (_same-origin policy_), que é um mecanismo de segurança dos Browsers que restringe a maneira de um documento ou script de uma origem interagir com recursos de outra origem. Essa política possui o objetivo de frear ataques maliciosos.

Duas URLs compartilham a mesma origem se o protocolo, porta (caso especificado) e host são os mesmos. Vamos comparar possíveis variações considerando a URL `https://cursos.alura.com.br/category/programacao`:

|**URL**|**Resultado**|**Motivo**|
|---|---|---|
|[https://cursos.alura.com.br/category/front-end](https://cursos.alura.com.br/category/front-end)|Mesma origem|Só o caminho difere|
|[http://cursos.alura.com.br/category/programacao](http://cursos.alura.com.br/category/programacao)|Erro de CORS|Protocolo diferente (http)|
|[https://faculdade.alura.com.br:80/category/programacao](https://faculdade.alura.com.br:80/category/programacao)|Erro de CORS|Host diferente|

Agora, fica a dúvida: o que fazer quando precisamos consumir uma API com URL diferente sem termos problemas com o CORS? Como, por exemplo, quando queremos consumir uma API que roda na porta 8000 a partir de uma aplicação React rodando na porta 3000. Veja só!

Ao enviar uma requisição para uma API de origem diferente, a API precisa retornar um header chamado **Access-Control-Allow-Origin**. Dentro dele, é necessário informar as diferentes origens que serão permitidas para consumir a API, em nosso caso: `Access-Control-Allow-Origin: http://localhost:3000`.

É possível permitir o acesso de qualquer origem utilizando o símbolo *(asterisco): `Access-Control-Allow-Origin: *`. Mas isso não é uma medida recomendada, pois permite que origens desconhecidas acessem o servidor, a não ser que seja intencional, como no caso de uma API pública. Agora vamos ver como fazer isso no Spring Boot de maneira correta.

## Habilitando diferentes origens no Spring Boot

Para configurar o CORS e habilitar uma origem específica para consumir a API, basta criar uma classe de configuração como a seguinte:

```typescript
@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}
```

**[http://localhost:3000](http://localhost:3000/)** seria o endereço da aplicação Front-end e **.allowedMethods** os métodos que serão permitidos para serem executados. Com isso, você poderá consumir a sua API sem problemas a partir de uma aplicação Front-end.

## Transcrição

> `MedicoController`:

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("medicos")
public class MedicoController {

        @PostMapping
         public void cadastrar(@RequestBody String json) {
              System.out.println(json);
    }

}
```

Conseguimos receber as informações enviadas pelo Insomnia no controller, mas precisamos encontrar uma maneira de não recebermos esses dados como string e sim receber o JSON inteiro como string.

Uma forma de recebermos cada campo isoladamente, é não usar uma string como parâmetro do método `cadastrar` e sim uma classe. Nela, declaramos os atributos com os mesmos nomes que constam no JSON.

Por isso, no método `cadastrar` vamos alterar o parâmetro de `string json` para uma classe que criaremos para representar os dados enviados pela requisição. Chamaremos essa classe de `DadosCadastroMedico`, nomearemos o parâmetro de `dados` e no `system out` ao invés de `json` será `dados`.

```less
public void cadastrar(@RequestBody DadosCadastroMedico dados) 
```

> `MedicoController` completo:

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("medicos")
public class MedicoController {

        @PostMapping
        public void cadastrar(@RequestBody DadosCadastroMedico dados) {
              System.out.println(dados);
    }

}
```

Note que `DadosCadastroMedico` está escrito na cor vermelha, isso significa que está com erro de compilação, porque ainda não criamos essa classe.

Vamos criá-la, para isso podemos selecionar `DadosCadastroMedico` e depois usar o atalho "Alt + Enter". Será exibido um menu com várias opções, em que clicaremos na "create record 'DadosCadastroMedico'".

Esses dados que estão chegando na API, usaremos o recurso de `record` (disponível nas últimas versões do Java). Este recurso funciona como se fosse uma classe imutável, para deixarmos o código simples.

Isso para não usarmos uma classe tradicional, pois seria necessário digitarmos os métodos `getters` e `setters`, criar construtor, e todas as outras verbosidades do Java.

Voltando, após clicarmos na opção "create record 'DadosCadastroMedico'", será aberta uma pop-up com o título "_Create Record DadosCadastroMedico_", com dois campos: "_Destination package_" ("Pacote de destino") e "_Target destination directory_" ("Diretório de destino").

> Create Record DadosCadastroMedico:

- **Destination package**: med.voll.api.controller
- **Target destination directory**: .../src/main/java/med/voll/api/controller

Nessa pop-up é para escolhermos em qual pacote desejamos criar essa classe record. Alteraremos o pacote para a classe não ficar no controller, usaremos médico.

- **Destination package**: med.voll.api.medico

Podemos clicar no botão "Ok", no canto inferior direito. Seremos redirecionados para o arquivo que acabamos de gerar.

> `DadosCadastroMedico`:

```csharp
package med.voll.api.medico;

public record DadosCadastroMedico() {

}
```

No parêntese do método `record`, precisamos inserir os campos enviados pela requisição:

```typescript
package med.voll.api.medico;

import med.voll.api.endereco.DadosEndereco;

public record DadosCadastroMedico(String nome, String email, String crm) {
}
```

Como o campo "especialidade" é fixo (temos quatro opções para a pessoa selecionar), não usaremos string e sim um `enum`. Podemos colocar após o `String crm`, o `Especialidade especialidade`.

Perceba que a palavra "Especialidade" está na cor vermelha, isso significa que não existe esse `enum` especialidade. Selecionando "Especialidade" usaremos o atalho "Alt + Enter", que exibirá um menu com diversas opções. Nele, escolheremos a opção "_Create enum 'Especialidade'_".

No pop-up seguinte, com o título "Create Enum Especialidade", podemos simplesmente clicar no botão "Ok".

> `Especialidade`:

```java
package med.voll.api.medico;

public enum Especialidade {

}
```

Dentro das chaves do `enum`, vamos declarar as constantes, que são as opções do campo especialidade:

```java
package med.voll.api.medico;

public enum Especialidade {

    ORTOPEDIA,
    CARDIOLOGIA,
    GINECOLOGIA,
    DERMATOLOGIA;

}
```

Após isso, voltaremos para o arquivo `DadosCadastroMedico` para incluir os outros campos no parâmetro do método `cadastrar`. No campo "endereço" temos contido diversos campos nele, por isso, criaremos outro `record` para representar os dados do endereço.

```undefined
DadosEndereco endereco
```

Repare que após incluir esse campo no parâmetro, "DadosEndereco" está na cor vermelha porque não existe esse `record`.

Selecionando "DadosEndereco", pressionaremos as teclas "Alt + Enter", que exibirá um menu com diversas opções. Nele, escolheremos a opção "_Create record 'DadosEndereco'_".

No pop-up seguinte, com o título "Create Record DadosEndereco", vamos alterar o pacote de `medico` para `endereco`. Lembrando que o endereço também será usado ao cadastrar pacientes, por isso colocamos em outro pacote isolado.

- **Destination package**: med.voll.api.endereco

Logo após, podemos clicar no botão "Ok". Seremos redirecionados para o arquivo `DadosEndereco` inicial:

```csharp
package med.voll.api.endereco;

public record DadosEndereco() {
}
```

No parêntese, vamos inserir os campos do endereço:

```typescript
package med.voll.api.endereco;

public record DadosEndereco(String logradouro, String bairro, String cep, String cidade, String uf, String complemento, String numero) {
}
```

Salvaremos o arquivo clicando em "Ctrl + S" e voltaremos para o arquivo `DadosCadastroMedico`, em que atualmente está como:

```typescript
package med.voll.api.medico;

import med.voll.api.endereco.DadosEndereco;

public record DadosCadastroMedico(String nome, String email, String crm, Especialidade especialidade, DadosEndereco endereco) {
}
```

Com isso, o Java vai criar uma classe imutável, em que cada um desses campos vai virar atributos com os métodos `getters` e com os construtores, sem precisarmos fazer isso manualmente. O código fica mais simplificado ao usarmos `record` e o Spring cria de forma automática para nós.

Voltando para `MedicoController`, no método `cadastrar` estamos recebendo como parâmetro `DadosCadastroMedico` - sendo um `record`. Em seguida, efetuamos um `system out println` nesses dados.

Vamos salvar o arquivo e depois abrir a aba "Run", ele já reiniciou. No insomnia, clicaremos novamente no botão "Send" para enviar a requisição, assim podemos verificar como chegaram os dados.

Note que à direita, em "Preview", retornou um erro `400 Bad Request` e abaixo os campos _timestamp_, _status_, _error_ e _trace_. Este último possui um grande stack. Isso quer dizer que algum campo foi enviado de forma errada.

Vamos analisar a mensagem do campo _"trace"_ para tentarmos entender o problema.

> Parte do erro selecionado pelo instrutor:

> Cannot deserialize value of type 'med.voll.api.medico.Especialidade' from String "ortopedia"

Isso significa que não foi possível desserializar o campo "Especialidade" da string ortopedia. Criamos o `enum` para especialidade com a constante ortopedia.

Porém, as constantes do `enum` são escritas com letras maiúsculas. À esquerda, no JSON, note que estamos enviando com tudo em letra minúscula. Por isso, vamos alterar de "ortopedia" para "ORTOPEDIA".

```perl
{
"nome": "Rodrigo Ferreira",
"email": "rodrigo.ferreira@voll.med",
"crm": "123456",
"especialidade": "ORTOPEDIA",
"endereco": {
    "logradouro": "rua 1",
    "bairro": "bairro",
    "cep": "12345678",
    "cidade": "Brasilia",
    "uf": "DF",
    "numero": "1",
    "complemento": "complemento"
    }
}
```

Após isso, podemos enviar novamente a requisição clicando no botão "Send". Agora, sim, retornou `200 OK` com a mensagem "No body returned for response", em "Preview".

Vamos voltar ao IntelliJ para verificar se o `system out` exibiu corretamente, na aba "Run".

> DadosCadastroMedico [nome=Rodrigo Ferreira, email=rodrigo.ferreira@voll.med, crm=123456, especialidade=ORTOPEDIA, endereco=DadosEndereco[logradouro=rua 1, bairro=bairro, cep=12345678, cidade=Brasilia, uf=DF, numero=1, complemento=complemento]]

Chegou! Toda vez que aplicarmos `system out` em um objeto do tipo record, por padrão, o Java exibe dessa forma que consta no retorno do terminal.

Os campos "número" e "complemento" são opcionais, vamos remover o "complemento" do JSON no Insomnia para verificarmos o que vai acontecer.

```perl
{
"nome": "Rodrigo Ferreira",
"email": "rodrigo.ferreira@voll.med",
"crm": "123456",
"especialidade": "ORTOPEDIA",
"endereco": {
    "logradouro": "rua 1",
    "bairro": "bairro",
    "cep": "12345678",
    "cidade": "Brasilia",
    "uf": "DF",
        "numero": "1"
    }
}
```

Novamente selecionaremos o botão "Send" e vamos voltar para o IntelliJ, na aba "Run". O campo “complemento” vem como `null`.

> DadosCadastroMedico [nome=Rodrigo Ferreira, email=rodrigo.ferreira@voll.med, crm=123456, especialidade=ORTOPEDIA, endereco=DadosEndereco[logradouro=rua 1, bairro=bairro, cep=12345678, cidade=Brasilia, uf=DF, numero=1, complemento=null]]

Logo, quando não preenchemos um campo que consta no `record`, o Spring insere nulo.

Desse modo, conseguimos receber os dados na API. Mas ao invés de recebermos como string, usamos o `record`. Esse tipo de classe Java ou `record` chamamos de padrão _DTO - Data Transfer Object_ ("Objeto de transferência de dados").

É um padrão usado em APIs para representar os dados que chegam na API e também os dados que devolvemos dela.

Usaremos bastante esse padrão DTO nos pontos de entrada e saída. Isto é, sempre que precisarmos receber ou devolver dados da API, criaremos um DTO - sendo uma classe ou record que contém apenas os campos que desejamos receber ou devolver da API.

Assim, recebemos os dados na nossa API e agora precisamos pegá-los para executarmos as validações, isso para verificar se os campos estão chegando corretamente, e depois salvar essas informações em um banco de dados.

Mas isso é assunto da próxima aula. Te espero lá!

# Para saber mais: Java Record

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116049/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116049/question)

Lançado oficialmente no Java 16, mas disponível desde o Java 14 de maneira experimental, o **Record** é um recurso que permite representar uma classe imutável, contendo apenas atributos, construtor e métodos de leitura, de uma maneira muito simples e enxuta.

Esse tipo de classe se encaixa perfeitamente para representar classes DTO, já que seu objetivo é apenas representar dados que serão recebidos ou devolvidos pela API, sem nenhum tipo de comportamento.

Para se criar uma classe DTO imutável, sem a utilização do Record, era necessário escrever muito código. Vejamos um exemplo de uma classe DTO que representa um telefone:

```java
public final class Telefone {

    private final String ddd;
    private final String numero;

    public Telefone(String ddd, String numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    @Override
    public int hashCode() {
        return Objects.hash(ddd, numero);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (!(obj instanceof Telefone)) {
            return false;
        } else {
            Telefone other = (Telefone) obj;
            return Objects.equals(ddd, other.ddd)
              && Objects.equals(numero, other.numero);
        }
    }

    public String getDdd() {
        return this.ddd;
    }

    public String getNumero() {
        return this.numero;
    }
}
```

Agora com o Record, todo esse código pode ser resumido com uma única linha:

```java
public record Telefone(String ddd, String numero){}
```

Muito mais simples, não?!

Por baixo dos panos, o Java vai transformar esse Record em uma classe imutável, muito similar ao código exibido anteriormente.

Mais detalhes sobre esse recurso podem ser encontrados na [documentação oficial](https://docs.oracle.com/en/java/javase/16/language/records.html).

# Faça como eu fiz: controller de pacientes

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116053/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116053/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, porém, para a funcionalidade de **cadastro de pacientes**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116053/opinion)

Você precisará criar uma classe Controller:

```java
@RestController
@RequestMapping("pacientes")
public class PacienteController {

    @PostMapping
    public void cadastrar(@RequestBody DadosCadastroPaciente dados) {
        System.out.println("dados recebido: " +dados);
    }

}
```

Também precisará criar um DTO:

```java
public record DadosCadastroPaciente(
        String nome,
        String email,
        String telefone,
        String cpf,
        DadosEndereco endereco
) {
}
```

Já o DTO `DadosEndereco` será o mesmo utilizado na funcionalidade de cadastro de médicos.

# Preparando o ambiente: MySQL

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/118919/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/118919/question)

No curso será utilizado o **MySQL** como sistema gerenciador de banco de dados, sendo recomendado que você também o utilize.

Caso você não tenha o MySQL instalado em seu computador, pode seguir o tutorial de instalação disponível nesse artigo: [MySQL: da instalação até a configuração](https://www.alura.com.br/artigos/mysql-instalacao-configuracao)

## Transcrição

Agora que aprendemos a enviar dados para a nossa _API_, podemos continuar o desenvolvimento da funcionalidade do cadastro de médicos.

Podemos seguir com os próximos passos, que são fazer a validação das informações e a persistência no banco de dados.

Para fazer isso, precisaremos adicionar novos módulos do _Spring Boot_. Para fazer isso, vamos abrir o arquivo "target > pom.xml". Vamos rolar a página até a linha 28, onde encontramos as dependências.

Vamos adicionar o driver do banco de dados, o módulo do _Spring Data_, o módulo de validação e alguns outros módulos. Poderíamos fazer todo esse processo manualmente, mas isso não é recomendado.

Para fazer isso, inicialmente, abriremos o site start.spring.io em outra aba. Lá, clicaremos no botão "Add Dependencies", para adicionar dependências. Depois que a _pop-up_ abrir, vamos adicionar as dependências que precisaremos para essa parte de dependência e validação.

Vamos buscar por "Validation", segurar o botão "Ctrl" e clicar na alternativa que aparecerá. Na sequência, buscaremos por "MySQL Driver", que utilizaremos como banco de dados. Segurando "Ctrl" e clicando, também o adicionaremos.

Repetiremos o processo com "Spring Data JPA" e "Flyway Migrations". Agora podemos fechar a _pop-up_. Encontraremos as quatro dependências que selecionamos.

Vamos clicar no botão "Explore", que nos apresentará como o projeto funcionará com as especificações que estão apresentadas na tela. Seremos redirecionados para o arquivo "pom.xml" dessas novas configurações.

Basta procurar as dependências, dentro do código, selecioná-las, copiá-las e levá-la para nosso arquivo "pom.xml", na _IDE_, logo abaixo da última dependência:

```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-mysql</artifactId>
        </dependency>

        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
```

> Obs: Lembre de acessar a aba do _Maven_, à direita da _IDE_, e clicar em "Reload All Maven Projects", para recarregar as dependências do projeto.

Sempre que adicionarmos novas dependências, é interessante pausar o servidor, clicando no ícone do quadrado vermelho, que aparece no canto superior direito.

Depois que o _Maven_ baixar todas as dependências, podemos seguir. Já temos as dependências necessárias para lidar com dependência e validação. Vamos voltar a executar o projeto, clicando sobre o ícone de _play_ verde, também no canto superior direito.

Se executarmos a aba _Run_, perceberemos que um erro foi identificado. Isso faz com que a inicialização do projeto seja parada. No _log_, descobrimos que isso aconteceu porque algumas configurações do _DataSource_ não foram feita.

Vamos fazer isso no arquivo "src > resources > application.properties". Precisamos adicionar três propriedades a ele, a _URL_ de conexão com o banco de dados, o _login_ e a senha do banco de dados.

Como esse arquivo funciona seguindo a lógica chave-valor, vamos passar algumas chaves para configurar _URL, username e password_ no banco de dados.

Para passar a _URL_ de conexão com o banco de dados, vamos inserir o código `spring.datasource.url=jdbc:mysql://localhost:3306/vollmed_api`. Passaremos também `spring.datasource.username=root`, para definir o _username_, e `spring.datasource.password=root`, para definir a senha:

```ini
spring.datasource.url=jdbc:mysql://localhost:3306/vollmed_api
spring.datasource.username=root
spring.datasource.password=root
```

Agora o _Spring Data_ conseguirá se conectar ao banco de dados da aplicação corretamente. No logo, encontraremos a informação de que o database "vollmed_api" não foi encontrado.

O que precisamos fazer é acessar o _MySQL_ e criar o database, porque esse não é um processo automático. Vamos abrir o terminal e logar no _MySQL_ com o comando `mysql -u root -p`. Ele solicitará a senha. Depois de inseri-la, estamos logados.

Agora criaremos o database, com o comando `create database vollmed_api;`. Vamos sair com _MySQL_ com `mysql> exit`.

Depois disso, conseguiremos inicializar o projeto corretamente. Adicionamos as dependências e validação e persistência e aprendemos a fazer algumas configurações.
# Mudança do MySQL no Maven

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/129232/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/129232/question)

Houve uma mudança no Maven em relação à dependência do MySQL, na qual o **group-id** e o **artifact-id** foram alterados.

A partir de agora, você deve adicionar a dependência do driver MySQL no arquivo `pom.xml` da seguinte maneira:

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

Além disso, pode acontecer do Spring Boot não encontrar automaticamente o driver do MySQL no projeto, sendo recomendado que você adicione mais uma propriedade no arquivo **application.properties**:

```ini
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

# Para saber mais: arquivo properties ou yaml?

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116056/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116056/question)

As configurações de uma aplicação Spring Boot são feitas em arquivos externos, sendo que podemos usar arquivo de propriedades ou arquivo YAML. Neste “Para saber mais”, vamos abordar as principais diferenças entre eles.

## Arquivo de propriedades

Por padrão, o Spring Boot acessa as configurações definidas no arquivo `application.properties`, que usa um formato de `chave=valor`:

```ini
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/clinica
spring.datasource.username=root
spring.datasource.password=root
```

Cada linha é uma configuração única, então é preciso expressar dados hierárquicos usando os mesmos prefixos para nossas chaves, ou seja, precisamos repetir prefixos, neste caso, `spring` e `datasource`.

## YAML Configuration

YAML é um outro formato bastante utilizado para definir dados de configuração hierárquica, como é feito no Spring Boot.

Pegando o mesmo exemplo do nosso arquivo `application.properties`, podemos convertê-lo para YAML alterando seu nome para `application.yml` e modificando seu conteúdo para:

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/clinica
    username: root
    password: root
```

Com YAML, a configuração se tornou mais legível, pois não contém prefixos repetidos. Além de legibilidade e redução de repetição, o uso de YAML facilita o armazenamento de variáveis de configuração de ambiente, conforme recomenda o _[12 Factor App](https://12factor.net/)_, uma metodologia bastante conhecida e utilizada que define 12 boas práticas para criar uma aplicação moderna, escalável e de manutenção simples.

## Mas afinal, qual formato usar?

Apesar dos benefícios que os arquivos YAML nos trazem em comparação ao arquivo properties, a decisão de escolher um ou outro é de gosto pessoal. Além disso, não é recomendável ter ao mesmo tempo os dois tipos de arquivo em um mesmo projeto, pois isso pode levar a problemas inesperados na aplicação.

Caso opte por utilizar YAML, fique atento, pois escrevê-lo no início pode ser um pouco trabalhoso devido às suas regras de indentação.

## Transcrição

Agora vamos continuar a implementar a funcionalidade de cadastros de médicos.

Vamos voltar para "MedicoController.java". Nele, estamos recebendo um _DTO_, representado pelo _record_ `DadosCadastroMedico` e dando um `System.out`.

O que precisamos fazer, porém, é pegar o objeto e salvá-lo no banco de dados. O _Spring Data JPA_ utiliza o _JPA_ como ferramenta de mapeamento de objeto relacional. Por isso, criaremos uma entidade _JPA_ para representar um tabela no banco de dados.

Como esse não é o foco do treinamento, vamos apenas utilizar a _JPA_. Acessaremos "src > java > medico". Nessa pasta, criaremos a classe "Medico".

Faremos isso usando o atalho "Alt + Insert", selecionar a opção "Class" e digita seu nome, "Medico". Agora adicionaremos, à classe, os atributos que representam o médico.

Vamos declarar os atributos `private Long id;`, `private String nome;`, `private String email;`, `private String crm;`, `private Especialidade especialidade;` e `private Endereco endereco;`:

```kotlin
package med.voll.api.medico;

public class Medico {

        private Long id;
        private String nome;
        private String email;
        private String crm;
        private Especialidade especialidade;
        private Endereco endereco;
        
}
```

Precisaremos criar a classe `Endereco`, com a ajuda de um "Alt + Enter", substituindo o pacote por "med.voll.api.endereco", para criá-la.

Dentro de "Endereco.java", na classe `Endereco`, passaremos os campos `private String logradouro;`, `private String bairro;`, `private String cep;`, `private String numero;`, `private String complemento`, `private String cidade;` e `private String uf;`:

```typescript
package med.voll.api.endereco;

public class Endereco {

        private String logradouro;
        private String bairro;
        private String cep;
        private String numero;
        private String complemento;
        private String cidade;
        private String uf;
        
}
```

Agora que tudo está mapeado corretamente, vamos voltar à entidade `Medico`, que até o momento é uma classe Java, com nada da _JPA_.

Vamos adicionar as anotações da JPA para transformar isso em uma entidade:

```less
@Table(name = "medicos")
@Entity(name = "Medico")
public class Medico {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String crm;

    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;

    @Embedded
    private Endereco endereco;
    
}
```

Vamos usar _Embeddable Attribute_ da _JPA_ para que `Endereco` fique em uma classe separada, mas faça parte da mesma tabela de `Medicos` junto ao banco de dados.

Para que isso funcione, vamos acessar a classe `Endereco` e adicionar, no topo do código, a anotação `@Embeddable` logo acima da classe.

Vamos importar a biblioteca _Lombok_, para gerar os códigos _Java_ que faltam automaticamente. Adicionaremos `@Getter`, `@NoArgsConstructor`, `@AllArgsConstructor`, `@EqualsAndHashCode(of = "id")`:

```less
@Table(name = "medicos")
@Entity(name = "Medico")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Medico {
```

Faremos a mesma coisa na classe `Endereco`. Junto de `@Embeddable`, adicionaremos as mesmas informações, exceto `@EqualsAndHashCode`:

```less
@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Endereco { 
```

Agora realizamos o mapeamento da _JPA_.

## Transcrição

Para fazer a persistência, pegar o objeto `Medico` e salvar no banco de dados, o _Spring Data_ tem o _Repository_, que são interfaces. O _Spring_ já nos fornece a implementação.

Vamos criar uma nova interface em "java > med.voll.api > Medico". Como o atalho "Alt + Insert" e selecionar a opção "Interface". O nome será "MedicoRepository".

Criaremos uma interface _Java_, sem elementos do _Spring Data_. Vamos herdar de uma interface chamada `JpaRepository`, usando um `extends`. Entre `<>`, passaremos dois tipos de objeto.

O primeiro será o tipo da entidade trabalhada pelo _repository_, `Medico`, e o tipo do atributo da chave primária da entidade, `Long`. A interface está criada:

```kotlin
package med.voll.api.medico;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
}
```

Os métodos da interface `JpaRepository` agora estão presentes na interface que acabamos de criar.

Agora já podemos utilizar o _repository_ no _controller_. Nele, apagaremos `System.out.println(dados):`. Vamos declarar o _repository_ como um atributo da classe `MedicoController`.

Criaremos o atributo `private MedicoRepository repository;`. Precisamos avisar ao _Spring_ que esse novo atributo pelo ser instanciado. Faremos a injeção de dependências inserindo a anotação `@Autowired` acima do atributo.

No método cadastral, vamos inserir o método que fará o _insert_ na tabela do banco de dados, `repository.save(medico);`.

No _controller_, porém, não recebemos o objeto `Medico`. Precisaremos fazer a conversão para transformá-lo em uma entidade _JPA_. Para isso, usaremos o construtor.

No método `save`, vamos criar um construtor para receber `DadosCadastroMedico`. Primeiro, passaremos `repository.save(new Medico(dados));`. Na sequência, daremos um "Alt + Enter" e selecionaremos `Create constructor`.

Agora faremos a atribuição dos atributos, com `this.nome = dados.nome();`, `this.email = dados.email();`, `this.crm = dados.crm();`, `this.especialidade = dados.especialidade();` e `this.endereco = new Endereco(dados.endereco());`:

```kotlin
 public Medico(DadosCadastroMedico dados) {
        this.nome = dados.nome();
        this.email = dados.email();
        this.crm = dados.crm();
                this.especialidade = dados.especialidade();
        this.endereco = new Endereco(dados.endereco());
    }
```

Criaremos o construtor que recebe o objetos `dados.endereco` na classe `Endereco`.

Para resolver isso, vamos criar o construtor usando "Alt + Enter" mais uma vez. No construtor, receberemos `dados` e vamos inserir os atributos `this.logradouro = dados.logradouro();`, `this.bairro = dados.bairro();`, `this.cep = dados.cep();`, `this.uf = dados.uf();`, `this.cidade = dados.cidade();`, `this.numero = dados.numero();` e `this.complementos = dados.complemento();`.

```kotlin
 public Endereco(DadosEndereco dados) {
        this.logradouro = dados.logradouro();
        this.bairro = dados.bairro();
        this.cep = dados.cep();
        this.uf = dados.uf();
        this.cidade = dados.cidade();
        this.numero = dados.numero();
        this.complemento = dados.complemento();
    }
```

Vamos tentar salvar no banco de dados. No _insomnia_, tentaremos disparar a requisição com as informações que temos. Como resposta, receberemos um erro 500.

O problema foi causado porque no _database_ `vollmed_api`, não existe a tabela `.medicos`.

No próximo vídeo, resolveremos o problema da tabela e aprenderemos a alterá-la conforme precisarmos.

# Para saber mais: e as classes DAO?

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116059/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116059/question)

Em alguns projetos em Java, dependendo da tecnologia escolhida, é comum encontrarmos classes que seguem o padrão **DAO**, utilizado para isolar o acesso aos dados. Entretanto, neste curso utilizaremos um outro padrão, conhecido como **Repository**.

Mas aí podem surgir algumas dúvidas: qual a diferença entre as duas abordagens e o porquê dessa escolha?

## Padrão DAO

O padrão de projeto DAO, conhecido também por **Data Access Object**, é utilizado para persistência de dados, onde seu principal objetivo é separar regras de negócio de regras de acesso a banco de dados. Nas classes que seguem esse padrão, isolamos todos os códigos que lidam com conexões, comandos SQLs e funções diretas ao banco de dados, para que assim tais códigos não se espalhem por outros pontos da aplicação, algo que dificultaria a manutenção do código e também a troca das tecnologias e do mecanismo de persistência.

### Implementação

Vamos supor que temos uma tabela de produtos em nosso banco de dados. A implementação do padrão DAO seria o seguinte:

Primeiro, seria necessário criar uma classe básica de domínio `Produto`:

```kotlin
public class Produto {
   private Long id;
   private String nome;
   private BigDecimal preco;
   private String descricao;

   // construtores, getters e setters
}
```

Em seguida, precisaríamos criar a classe `ProdutoDao`, que fornece operações de persistência para a classe de domínio `Produto`:

```java
public class ProdutoDao {

    private final EntityManager entityManager;

    public ProdutoDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    
    public void create(Produto produto) {
        entityManager.persist(produto);
    }

    public Produto read(Long id) {
        return entityManager.find(Produto.class, id);
    }

    public void update(Produto produto) {
        entityManager.merge(produto);
    }

    public void remove(Produto produto) {
        entityManager.remove(produto);
   }

}
```

No exemplo anterior foi utilizado a JPA como tecnologia de persistência dos dados da aplicação.

## Padrão Repository

De acordo com o famoso livro _Domain-Driven Design_, de Eric Evans:

> O repositório é um mecanismo para encapsular armazenamento, recuperação e comportamento de pesquisa, que emula uma coleção de objetos.

Simplificando, um repositório também lida com dados e oculta consultas semelhantes ao DAO. No entanto, ele fica em um nível mais alto, mais próximo da lógica de negócios de uma aplicação. Um repositório está vinculado à regra de negócio da aplicação e está associado ao agregado dos seus objetos de negócio, retornando-os quando preciso.

Só que devemos ficar atentos, pois assim como no padrão DAO, regras de negócio que estão envolvidas com processamento de informações não devem estar presentes nos repositórios. Os repositórios não devem ter a responsabilidade de tomar decisões, aplicar algoritmos de transformação de dados ou prover serviços diretamente a outras camadas ou módulos da aplicação. Mapear entidades de domínio e prover as funcionalidades da aplicação são responsabilidades muito distintas.

Um repositório fica entre as regras de negócio e a camada de persistência:

1. Ele provê uma interface para as regras de negócio onde os objetos são acessados como em uma coleção;
2. Ele usa a camada de persistência para gravar e recuperar os dados necessários para persistir e recuperar os objetos de negócio.

## Por que o padrão repository ao invés do DAO utilizando Spring?

O padrão de repositório incentiva um design orientado a domínio, fornecendo uma compreensão mais fácil do domínio e da estrutura de dados. Além disso, utilizando o repository do Spring não temos que nos preocupar em utilizar diretamente a API da JPA, bastando apenas criar os métodos que o Spring cria a implementação em tempo de execução, deixando o código muito mais simples, menor e legível.

## Transcrição

Vamos fazer com que a tabela seja encontrada pelo banco de dados.

Usaremos _migrations_, ou ferramentas de migrações, para registrar as atualizações no banco de dados. Já registramos o _Flyway_, uma dessas ferramentas suportadas pelo _Spring Boot_.

Vamos acessar o "pom.xml" do projeto. Lá veremos que criamos dependências de duas versões do _Flyway_, o `flyway-core` e o `flyway-mysql`. Vamos usar isso para fazer o controle e modificação de tabelas do banco de dados.

Para cada mudança que quisermos executar no banco de dados, precisamos criar um arquivo `.sql` no projeto e, nele, escrever o trecho do comando _SQL_ que será executado no banco de dados.

Precisamos salvá-los em um diretório específico. Criaremos essa nova pasta em "main > resources". Com "Alt + Insert", vamos escolher a opção "Directory" e digita o nome da pasta: "db/migration".

> Obs: A barra significa que será criada uma subpasta, "migration", dentro da pasta "db".

Dentro da pasta, criaremos um arquivo _SQL_ que servirá como nossa primeira _migration_, responsável por criar a tabela de médicos. Antes disso, é preciso interromper o projeto antes de usar _migrations_.

> Obs: Sempre interrompa o projeto ao usar _migrations_.

Faremos isso clicando no ícone do quadrado vermelho no canto superior direito.

Vamos clicar na pasta "db > migration" e, com o atalho "Alt + Insert", selecionaremos a opção "File". O nome da _migration_ será "V1__create-table-medicos.sql".

> Obs: Esse tipo de arquivo sempre começará com "V", seguido pelo número que repersenta a ordem de criação dos arquivos e, depois de dois _underlines_, um nome descritivo.

Vamos abrir o nome arquivo e digitar o comando _SQL_ para criar a tabela:

```scss
create table medicos(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    crm varchar(6) not null unique,
    especialidade varchar(100) not null,
    logradouro varchar(100) not null,
    bairro varchar(100) not null,
    cep varchar(9) not null,
    complemento varchar(100),
    numero varchar(20),
    uf char(2) not null,
    cidade varchar(100) not null,

    primary key(id)

);
```

Agora vamos inicializar o projeto novamente e ver no _log_ do _Spring_ que a _migration_ foi identificada e executada.

Se logarmos no _MySQL_, acessando o terminal e executando o comando `mysql -u -root -p`, e inserirmos a senha, poderemos ver a tabela após executar, em ordem, os comandos `use vollmed_api` e `show tables;`.

Com o comando `desc medicos`, veremos a descrição da tabela. Ela foi criada conforme descrevemos.

Agora podemos testar se conseguimos salvar um objeto `Medico` no banco de dados. Vamos abrir o arquivo `MedicoController.java`. Acima do método, abaixo da anotação `@PostMapping`, vamos inserir a anotação `@Transactional`.

Como esse é um método de escrita, que consiste em um _insert_ no banco de dados, precisamos ter uma transação ativa com ele.

De volta ao _Insomnia_, vamos tentar rodar a aplicação. Disparando a requisição, receberemos o código 200, que significa OK, e não veremos nenhuma mensagem de erro na _IDE_.

Vamos abrir o terminal para conferir se a nova informação foi salva no banco de dados. Para isso, executaremos `select * from medicos;`. Veremos que o registro foi salvo corretamente, conforme enviamos na requisição.

No próximo vídeo, faremos validações dos campos obrigatórios.

## Transcrição

Como usamos as validações que já adicionamos ao nosso artigo "pom.xml"? No caso, `spring-boot-starter-validation`.

Para isso, vamos acessar nosso _controller_ e observar o método `cadastrar`. Ele recebe o _DTO_ `DadosCadastroMédico` como parâmetro. Se o acessarmos, clicando duas vezes sobre ele com o botão esquerdo, veremos os campos que estão chegando na requisição.

São eles: `String nome`, `String email`, `String crm`, `Especialidade especialidade`, e `DadosEndereco endereco`.

É nele que usaremos o _Bean Validation_, a partir de anotações. Ele vai verificar, no caso, se as informações que chegam estão de acordo com as anotações.

Vamos adicionar uma anotação a cada um dos atributos, começando pelo atributo `nome`, que é obrigatório e não pode ser nulo e que, também, não pode ser vazio: precisa de um texto. Para informar isso ao _Bean Validation_, passaremos a anotação `@NotBlank`.

Também passaremos a anotação `@NotBlank` acima de `String email`. Para dar a formatação de e-mail, passaremos também a anotação `@Email`.

Acima de `String crm`, vamos passar `@NotBlank` e `@Pattern`, porque ele é um número de 4 a 6 dígitos. Dentro da segunda anotação, para esclarecer a quantidade de dígitos passaremos a expressão regular `(regexp = "\\d{4,6}")`.

Como `Especialidade especialidade` é um campo obrigatório, vamos adicionar a anotação `@NotNull`. Por fim, acima de `DadosEndereco endereco`, passaremos a anotação `@NotNull`, porque ele também não pode ser nulo, e `@Valid`, para validar o _DTO_:

```less
public record DadosCadastroMedico(
        @NotBlank
        String nome,
        @NotBlank
        @Email
        String email,

        @NotBlank
        @Pattern(regexp = "\\d{4,6}")
        String crm,
        @NotNull
        Especialidade especialidade,

        @NotNull @Valid DadosEndereco endereco) {
}
```

Agora, vamos dar dois clique com o botão esquerdo sobre `DadosEndereco` e repetir o processo, adicionando anotações do _Bean Validation_.

`logradouro` não pode ser branco ou vazio, então adicionaremos `@NotBlank`. Faremos o mesmo até `String uf`. `String complemento` e `String numero`, por suas vezes, são opcionais. Por isso, não adicionaremos anotações do _Bean Validation_.

Vamos passar `@Pattern` e a expressão regular `(regexp = "\\d{8}")` acima de `String cep`:

```less
public record DadosEndereco(
        @NotBlank
        String logradouro,
        @NotBlank
        String bairro,
        @NotBlank
        @Pattern(regexp = "\\d{8}")
        String cep,
        @NotBlank
        String cidade,
        @NotBlank
        String uf,
        String complemento,
        String numero) {
}
```

Agora vamos acessar "MedicoController.java". Lá, adicionaremos `@Valid`, para solicitar queo Spring se integre ao _Bean Validation_ e execute as validações. Agora só precisamos salvar.

Vamos abrir o _Insomnia_ para executar um teste. Vamos disparar uma requisição, mas deixando o campo `"nome"` em branco. Como resultado, receberemos o erro "400 Bad Request". Isso acontece porque informamos, via _Bean Validation_, que esse campo não pode ser nulo.

Em outras palavras, a validação foi pega corretamente. Se adicionarmos um nome a esse campo, mas removermos a informação do campo `"crm"`, teremos o erro novamente, pelo mesmo motivo.

Tudo está funcionando. No próximo vídeo, ajustaremos uma _migration_ do nosso projeto.

# Para saber mais: anotações do Bean Validation

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116060/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116060/question)

Como explicado no vídeo anterior, o Bean Validation é composto por diversas anotações que devem ser adicionadas nos atributos em que desejamos realizar as validações. Vimos algumas dessas anotações, como a `@NotBlank`, que indica que um atributo do tipo `String` não pode ser nulo e nem vazio.

Entretanto, existem dezenas de outras anotações que podemos utilizar em nosso projeto, para os mais diversos tipos de atributos. Você pode conferir uma lista com as principais anotações do Bean Validation na [documentação oficial](https://jakarta.ee/specifications/bean-validation/3.0/jakarta-bean-validation-spec-3.0.html#builtinconstraints) da especificação.

## Transcrição

No último vídeo, esquecemos de adicionar o campo "Telefone" à entidade médico. Vamos aprender a adicionar uma coluna ao banco de dados quando a _migration_ já existe.

Vamos acessar "MedicoController.java > DadosCadastroMedico". Precisaremos criar um atributo para receber esse novo campo. Vamos adicioná-lo logo após o campo `String email`. Como ele será obrigatório, passaremos a anotação `@NotBlank`:

```less
public record DadosCadastroMedico(
        @NotBlank
        String nome,
        @NotBlank
        @Email
        String email,

        @NotBlank
        String telefone,
        @NotBlank
        @Pattern(regexp = "\\d{4,6}")
        String crm,
        @NotNull
        Especialidade especialidade,

        @NotNull @Valid DadosEndereco endereco) {
}
```

Abaixo disso, passaremos a `String telefone`. Vamos precisar fazer alterações também na entidade _JPA_ "Medico.java". Lá, adicionaremos o atributo abaixo de `private String email;`. Será o atributo `private String telefone;`.

Nesse mesmo arquivo, vamos informar ao construtor `public Medico`, que recebe `DadosCadastroMedico`, desse novo atributo. Faremos isso passando `this.telefone = dados.telefone()`:

```kotlin
public class Medico {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;

    private String telefone;

    private String crm;

    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;

    @Embedded
    private Endereco endereco;

    public Medico(DadosCadastroMedico dados) {
        this.nome = dados.nome();
        this.email = dados.email();
        this.telefone = dados.telefone();
        this.crm = dados.crm();
        this.especialidade = dados.especialidade();
        this.endereco = new Endereco(dados.endereco());
    }
```

Já temos uma _migration_ criada, "V1_create-table-medicos.sql". Porém, não podemos alterá-la, porque _migrations_ executadas no banco de dados não podem mais ser alteradas.

Portanto, para passar o atributo `telefone` para o banco de dados, precisaremos criar uma nova _migration_. Mas, antes disso, precisamos parar o projeto, clicando no ícone do quadrado vermelho, no canto superior direito.

Para isso, criaremos um novo arquivo, chamado "V2__alter-table-medicos-add-column-telefone.sql", dentro da pasta "db.migration".

Nele vamos digitar o código _SQL_ abaixo, para alterar o banco de dados:

```sql
alter table medicos add telefone varchar(20) not null;
```

Vamos verificar no _log_ se o projeto executará essa nova _migration_. Para isso, inicializaremos o projeto e maximizaremos o terminal. Veremos que a tabela foi atualizada corretamente.

Vamos abrir o _Insomnia_ para cadastrar nosso novo registro no banco de dados. Se tentarmos cadastrar um novo médico sem informar o telefone, teremos como resultado o erro _400 Bad Request_, o que significa que tivemos sucesso.

#   
Para saber mais: Erro na migration

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/121056/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/121056/question)

Conforme orientado ao longo dessa aula é importante sempre **parar** o projeto ao criar os arquivos de **migrations**, para evitar que o Flyway os execute antes da hora, com o código ainda incompleto, causando com isso problemas.

Entretanto, eventualmente pode acontecer de esquecermos de parar o projeto e algum erro acontecer ao tentar inicializar a aplicação. Nesse caso será exibido o seguinte erro ao tentar inicializar a aplicação:

```kotlin
Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'flywayInitializer' defined in class path resource [org/springframework/boot/autoconfigure/flyway/FlywayAutoConfiguration$FlywayConfiguration.class]: Validate failed: Migrations have failed validation
```

Perceba na mensagem de erro que é indicado que alguma migration falhou, impedindo assim que o projeto seja inicializado corretamente. Esse erro também pode acontecer se o código da migration estiver inválido, contendo algum trecho de SQL digitado de maneira incorreta.

Para resolver esse problema será necessário acessar o banco de dados da aplicação e executar o seguinte comando sql:

```sql
delete from flyway_schema_history where success = 0;
```

O comando anterior serve para apagar na tabela do Flyway todas as migrations cuja execução falhou. Após isso, basta corrigir o código da migration e executar novamente o projeto.

Obs: Pode acontecer de alguma migration ter criado uma tabela e/ou colunas e com isso o problema vai persistir, pois o flyway não vai apagar as tabelas/colunas criadas em migrations que falharam. Nesse caso você pode apagar o banco de dados e criá-lo novamente:

```sql
drop database vollmed_api;
create database vollmed_api;
```

## Transcrição

Nas aulas anteriores finalizamos a funcionalidade de cadastro de médicos e agora criaremos a funcionalidade de listagem de médicos.

Essa funcionalidade deverá exibir nome, email, _CRM_ e especialidade de cada médico, de maneira ordenada. Começando pelo nome, de maneira crescente, bem como ser paginada, com 10 registros por página.

Vamos acessar "src > main > java > med.voll.api > controller > MedicoController". Até então, havíamos implementado apenas o método `cadastrar`. Agora criaremos o método `public`, responsável pela listagem.

O retorno dele será `List<Medico> listar ()`. Acima do método, vamos adicionar a anotação `@GetMapping`, para informar o verbo do protocolo _HTTP_.

Como precisamos acessar o banco de dados, passaremos a classe `repository.findaAll()` como retorno:

```typescript
@RestController
@RequestMapping("medicos")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
    }

    @GetMapping
    public List<Medico> listar() {
        return repository.findAll();
    }
```

Porém, não podemos devolver uma lista de `Medico`, porque não queremos devolver todos os atributos dela, apenas nome, email, _CRM_ e especialidade.

Por isso, criaremos um _DTO_ que devolverá dados da _API_. Substituiremos `Medico` por `DadosListagemMedico`. Vamos usar o atalho "Alt + Enter e selecionar a opção "Create record 'DadosListagemMedico'". Em "Destination package", informaremos "med.voll.api.medico" e clicaremos em "OK".

Agora precisamos informar as propriedades que serão trabalhadas pelo _DTO_, que serão `String nome`, `String email`, `String crm` e `Especialidade especialidade`:

```typescript
package med.voll.api.medico;

public record DadosListagemMedico(String nome, String email, String crm, Especialidade especialidade) {
```

Vamos salvar e voltar para "MedicoController.java", onde encontraremos um erro de compilação na linha do _return_ do método `listar`. Vamos fazer a conversão de `Medico` para `DadosListagemMedico`.

Faremos isso chamando o método `.stream().map()`. Dentro dos parâmetros de `.map`, passaremos `DadosListagemMedico::new`, chamando o construtor do _DTO_ `DadosListagemMedico`:

```typescript
@RestController
@RequestMapping("medicos")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
    }

    @GetMapping
    public List<DadosListagemMedico> listar() {
        return repository.findAll().stream.map(DadosListagemMedico::new);
    }
```

Vamos voltar para `DadosListagemMedico.java` e declarar um construtor:

```scss
package med.voll.api.medico;

public record DadosListagemMedico(String nome, String email, String crm, Especialidade especialidade) {

    public DadosListagemMedico(Medico medico) {
        this(medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getEspecialidade());
    }

}
```

Vamos voltar para "MedicoController.java", que ainda indica erro, porque precisamos adicionar `.toList()` ao retorno, para converter em uma lista:

```typescript
@RestController
@RequestMapping("medicos")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
    }

    @GetMapping
    public List<DadosListagemMedico> listar() {
        return repository.findAll().stream().map(DadosListagemMedico::new).toList();
    }
```

No próximo vídeo, executaremos um teste no _Insomnia_.

## Transcrição

Vamos acessar o _Insomnia_ para testar nossa _API_.

Como não queremos mais testar o cadastro de médicos, precisaremos criar uma nova requisição. No painel à esquerda, clicaremos em "+ > Http Request". Vamos renomear a nova requisição de "New Request" para "Listagem de médicos".

O verbo será o padrão, "GET". Em seguida, digitaremos a _URL_ da requisição para o mesmo endereço do cadastro: "[http://localhost:8080/medicos"](http://localhost:8080/medicos%22).

> Obs: Não haverá conflito porque os verbos das duas requisições da mesma _URL_ são diferentes.

O _body_ da requisição irá vazio, porque não estamos cadastrando informações. Clicando no botão "Send", vamos disparar a requisição. No painel, receberemos os dados devolvidos pela _API_.

O _Spring Boot_ assumiu automaticamente que queremos converter a lista para um _JSON._ Isso faz com que eles no devolva um arquivo desse tipo, contendo um _array_ listando todos os médicos cadastrados no banco de dados.

No próximo vídeo, aprenderemos a ordenar a lista por nome, paginá-la e fazê-la exibir apenas 10 resultados por página.

# Para saber mais: DTOs ou entidades?

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116068/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116068/question)

Estamos utilizando DTOs para representar os dados que recebemos e devolvemos pela API, mas você provavelmente deve estar se perguntando “Por que ao invés de criar um DTO não devolvemos diretamente a entidade JPA no Controller?”. Para fazer isso, bastaria alterar o método `listar` no Controller para:

```java
@GetMapping
public List<Medico> listar() {
    return repository.findAll();
}
```

Desse jeito o código ficaria mais enxuto e não precisaríamos criar o DTO no projeto. Mas, será que isso realmente é uma boa ideia?

## Os problemas de receber/devolver entidades JPA

De fato é muito mais simples e cômodo não utilizar DTOs e sim lidar diretamente com as entidades JPA nos controllers. Porém, essa abordagem tem algumas desvantagens, inclusive causando vulnerabilidade na aplicação para ataques do tipo [**Mass Assignment**](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html).

Um dos problemas consiste no fato de que, ao retornar uma entidade JPA em um método de um Controller, o Spring vai gerar o JSON contendo **todos** os atributos dela, sendo que nem sempre esse é o comportamento que desejamos.

Eventualmente podemos ter atributos que não desejamos que sejam devolvidos no JSON, seja por motivos de segurança, no caso de dados _sensíveis_, ou mesmo por não serem utilizados pelos clientes da API.

## Utilização da anotação `@JsonIgnore`

Nessa situação, poderíamos utilizar a anotação `@JsonIgnore`, que nos ajuda a ignorar certas propriedades de uma classe Java quando ela for serializada para um objeto JSON.

Sua utilização consiste em adicionar a anotação nos atributos que desejamos ignorar quando o JSON for gerado. Por exemplo, suponha que em um projeto exista uma entidade JPA `Funcionario`, na qual desejamos ignorar o atributo `salario`:

```less
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity(name = "Funcionario")
@Table(name = "funcionarios")
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;

    @JsonIgnore
    private BigDecimal salario;

    //restante do código omitido…
}
```

No exemplo anterior, o atributo `salario` da classe `Funcionario` não será exibido nas respostas JSON e o problema estaria solucionado.

Entretanto, pode acontecer de existir algum outro endpoint da API na qual precisamos enviar no JSON o salário dos funcionários, sendo que nesse caso teríamos problemas, pois com a anotação `@JsonIgnore` tal atributo **nunca** será enviado no JSON, e ao remover a anotação o atributo **sempre** será enviado. Perdemos, com isso, a flexibilidade de controlar quando determinados atributos devem ser enviados no JSON e quando não.

## DTO

O padrão DTO (_Data Transfer Object_) é um padrão de arquitetura que era bastante utilizado antigamente em aplicações Java distribuídas (arquitetura cliente/servidor) para representar os dados que eram enviados e recebidos entre as aplicações cliente e servidor.

O padrão DTO pode (e deve) ser utilizado quando não queremos expor todos os atributos de alguma entidade do nosso projeto, situação igual a dos salários dos funcionários mostrado no exemplo de código anterior. Além disso, com a flexibilidade e a opção de filtrar quais dados serão transmitidos, podemos poupar tempo de processamento.

## Loop infinito causando `StackOverflowError`

Outro problema muito recorrente ao se trabalhar diretamente com entidades JPA acontece quando uma entidade possui algum autorrelacionamento ou relacionamento bidirecional. Por exemplo, considere as seguintes entidades JPA:

```java
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity(name = "Produto")
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private BigDecimal preco;

    @ManyToOne
    @JoinColumn(name = “id_categoria”)
    private Categoria categoria;

    //restante do código omitido…
}
```

```java
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity(name = "Categoria")
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    @OneToMany(mappedBy = “categoria”)
    private List<Produto> produtos = new ArrayList<>();

    //restante do código omitido…
}
```

Ao retornar um objeto do tipo `Produto` no Controller, o Spring teria problemas para gerar o JSON desse objeto, causando uma exception do tipo `StackOverflowError`. Esse problema ocorre porque o objeto produto tem um atributo do tipo `Categoria`, que por sua vez tem um atributo do tipo `List<Produto>`, causando assim um loop infinito no processo de serialização para JSON.

Tal problema pode ser resolvido com a utilização da anotação `@JsonIgnore` ou com a utilização das anotações `@JsonBackReference` e `@JsonManagedReference`, mas também poderia ser evitado com a utilização de um DTO que representa apenas os dados que devem ser devolvidos no JSON.

## Transcrição

Agora vamos cuidar da paginação e da ordenação.

Começaremos pela paginação. Queremos trazer apenas 10 registros por página. Vamos configurar uma requisição para a _API_ para passar de página quando necessário.

Como paginação é algo comum, o _Spring_ já tem um mecanismo para fazer isso. Em "MedicoController.java", no método `listar`, passaremos o parâmetro `Pageable`.

> Obs: Cuidado na hora de importar. Selecione `Pageable org.springframework.data.domain` e não `Pageable java.awt.print`. A segunda não é aplicável ao _Spring Framework_.

Daremos o nome `paginacao` ao parâmetro. Vamos passar o novo parâmetro dentro do método `.findAll`. Com isso, o _Spring_ montará a _query_ automaticamente com o esquema de paginação.

Substituiremos, também, o retorno do método. Não será mais `List`, e sim `Page`. Vamos alterar também o `return`, que agora não precisará mais da chamada do método `.stream()`. `.toList()` também não será mais necessário:

```typescript
    @GetMapping
    public Page<DadosListagemMedico> listar(Pageable paginacao) {
        return repository.findAll(paginacao).map(DadosListagemMedico::new);
    }
```

Agora vamos salvar e voltar ao _Insomnia_ para disparar a requisição. O JSON devolvido, agora, terá o atributo `content`, com o _array_ da lista de médicos dentro dele. Ao final, encontraremos novas informações relacionadas à paginação.

Agora vamos controlar o número de registros exibidos. Para isso, passaremos, na _URL_, o parâmetro `?size`. Se o igualarmos a 1, teremos a exibição de apenas um registro na tela:

```bash
http://localhost:8080/medicos?size=1
```

> Obs: Se não passarmos o parâmetro `size`, o Spring devolverá 20 registros por padrão.

Para trazermos a página, vamos passar outro parâmetro na _URL_, após usar um `&`. Será o parâmetro `page`. Como a primeira página é representada por `page=0`, para trazer o próxima, traremos `page=1`. E assim sucessivamente.

Com esse dois parâmetros, controlamos a paginação.

## Transcrição

Agora vamos cuidar da ordenação.

Para fazer isso, vamos remover os parâmetros `size` e `page`, adicionados por nós na aula anterior. Para mudar a ordenação, também usaremos um parâmetro na _URL_, chamado `sort`.

Junto dele, passamos o nome do atributo na entidade. Se quisermos ordenar pelo nome, por exemplo, passaremos a _URL_ `http://localhost:8080/medicos?sort=nome`.

Se dispararmos a aquisição, veremos que a exibição dos registros será feita em ordem alfabética. Se quiser ordenar por outro parâmetro, basta substituir a informação depois de `sort`.

Por padrão, a ordenação acontece de maneira crescente. Mas é possível inverter isso, ordenando por ordem decrescente. Para isso, basta adicionar `,desc` à _URL_.

É possível combinar com os parâmetro que vimos no vídeo anterior. Basta adicioná-los na _URL_, sempre conectando-os com um `&`, como no exemplo abaixo:

```bash
http://localhost8080/medicos?sort=crm,desc&size=2&page=1
```

Por padrão, o nome dos parâmetros é escrito em inglês. Porém, consguimos customizar esses parâmetros no arquivo "application.properties".

Vamos voltar à _IDE_. O parâmetro `Pageable`, que usamos em `lista`, é opcional. Se voltarmos para o _Insomnia_ e disparmos a requisição sem nenhum parâmetro na _URL_, ela vai carregar todos os registros usando o padrão do _Spring_.

O padrão é 20 resultados por página, e na ordem em que cadastramos a informação no banco de dados. É possível, porém, alterar esse padrão.

Em "MedicoController.java", podemos trocar o padrão da paginação adicionando uma anotação no parâmetro `Pageable`. O nome dela é `@PageableDefault`. Na sequência, abrimos parênteses e passamos os atributos `size`, `page` e `sort`. Podemos escolher o atributo que guiará a ordenação, passando entre chaves duplas.

Por exemplo, se passarmos `lista(@PageableDefault(size = 10, sort = {"nome"})`, isso significa que, caso não passemos parâmetros na _URL_, no _Insomnia_, o novo padrão será a exibição de 10 resultados por página, ordenados a partir do nome.

Vamos salvar e, depois disso, podemos testar no _Insomnia_. Se executarmos sem passar parâmetros na _URL_, veremos que tivemos sucesso em definir o nmovo padrão.

Se adicionarmos parâmetros na _URL_, o _Insomnia_ usará as informações da _URL_.

Caso queiramos saber como a _query_ está sendo feita no banco de dados, podemos configurar para que isso seja exibido para nós. A configuração é feita em "src > main > resources > application.properties".

Lá, vamos adicionar `spring.jpa.show-sql=true`. Com isso, os _SQLs_ disparados no banco de dados serão impressos.

Com isso, conseguiremos ver as informações das queries na _IDE_ após fazermos a requisição no _Insomnia_.

O parâmetro é difícil de ser visualizado, porque é exibido numa linha só. Para facilitar a visualização, vamos adicionar outro parâmetro, que passa as informações com quebras de linha.

De volta a "application.properties", passaremos a propriedade `spring.jpa.properties.hibernate.format_sql=true`.

Depois que salvarmos, veremos que tivemos sucesso.

Conseguimos implementar nossa funcionalidade de listagem de médicos usando paginação, ordenação e usando o _log_ para ver o que está sendo disparado.

A próxima funcionalidade, que veremos no próximo vídeo, será a atualização de médicos.

# Para saber mais: parâmetros de paginação

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116069/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116069/question)

Conforme aprendemos nos vídeos anteriores, por padrão, os parâmetros utilizados para realizar a paginação e a ordenação devem se chamar `page`, `size` e `sort`. Entretanto, o Spring Boot permite que os nomes de tais parâmetros sejam modificados via configuração no arquivo `application.properties`.

Por exemplo, poderíamos traduzir para português os nomes desses parâmetros com as seguintes propriedades:

```ini
spring.data.web.pageable.page-parameter=pagina
spring.data.web.pageable.size-parameter=tamanho
spring.data.web.sort.sort-parameter=ordem
```

Com isso, nas requisições que utilizam paginação, devemos utilizar esses nomes que foram definidos. Por exemplo, para listar os médicos de nossa API trazendo apenas 5 registros da página 2, ordenados pelo e-mail e de maneira decrescente, a URL da requisição deve ser:

```bash
http://localhost:8080/medicos?tamanho=5&pagina=1&ordem=email,desc
```

#   
Faça como eu fiz: listagem de pacientes

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116071/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116071/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, porém, para a funcionalidade de **listagem de pacientes**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116071/opinion)

Você precisará adicionar um novo método no Controller de paciente:

```java
@GetMapping
public Page<DadosListagemPaciente> listar(@PageableDefault(page = 0, size = 10, sort = {"nome"}) Pageable paginacao) {
    return repository.findAll(paginacao).map(DadosListagemPaciente::new);
}
```

Também precisará criar o DTO `DadosListagemPaciente`:

```java
public record DadosListagemPaciente(String nome, String email, String cpf) {
    public DadosListagemPaciente(Paciente paciente) {
        this(paciente.getNome(), paciente.getEmail(), paciente.getCpf());
    }
}
```

E, caso queira ver os comandos SQL disparados no banco de dados, vai precisar adicionar as seguintes propriedades no arquivo `application.properties`:

```ini
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

## Transcrição

Agora vamos apresentar a funcionalidade de atualização.

Quando editarmos os perfis dos médicos, nossa _API_ receberá uma nova requisição com os novos dados. Precisamos, porém, saber qual médico precisa ter seus dados atualizados no banco de dados.

A forma que temos para identificar os registros é o _ID_. O problema é que, por enquanto, o _ID_ não está sendo devolvido na funcionalidade de listagem. Por isso, vamos alterar o _DTO_ de listagem, para que ele inclua o _ID_.

Para isso, voltaremos à _IDE_. Vamos até a funcionalidade de listagem do arquivo "MedicoController.java". Dentro dele, abriremos o _DTO_ "DadosListagemMedico.java". Dentro da `public record`, vamos adicionar `Long id` dentro dos parênteses.

Para que não haja erro de compilação no construtor, vamos passar o _ID_ no `this`, passando `medico.getId()` entre parênteses:

```scss
package med.voll.api.medico;

public record DadosListagemMedico(Long id, String nome, String email, String crm, Especialidade especialidade) {

    public DadosListagemMedico(Medico medico) {
        this(medico.getId(), medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getEspecialidade());
    }

}
```

Agora basta salvar. Se voltarmos ao _Insomnia_, receberemos a _ID_ ao disparar a requisição. Ainda no _Insomnia_, vamos simular a nova requisição, de atualização.

Faremos isso clicando no ícone de "+ > HTTP Request". Passaremos a _URL_ `http://localhost:8080/medicos`. Dessa vez, porém, a requisição será "PUT", a mais comum para atualizações.

> Obs: Como o verbo é diferente do que já usamos, podemos continuar a utilizar a mesma _URL_.

No campo "Body", vamos selecionar a opção "JSON". Depois, vamos inserir os dados do médico. No vídeo, o instrutor insere o _ID_ e telefone.

Quando ele dispara a requisição, recebemos como retorno o erro "405 Method Not Allowed". Isso acontece porque disparamos uma requisição para o endereço "/medicos", que até existe na nossa _API_, mas ainda não vai mapeado para requisições "PUT".

Para isso, vamos implementar um novo método no controller para atender a esse tipo de requisições.

De volta a "MedicoController.java" na _IDE_, vamos adicionar o método `public_void atualizar()`. Acima do método, passaremos as anotações `@PutMapping` e `@Transactional`.

Como método, já que precisamos receber o objeto _DTO_, passaremos `@RequestBody @Valid DadosCadastroMedico dados)`:

```less
    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosCadastroMedico dados) {

    }
```

Porém, não poderemos usar `DadosCadastroMedico`. Precisaremos criar outro _DTO_. É isso que faremos no próximo vídeo.

## Transcrição

Na atualização não poderemos utilizar o mesmo _DTO_ do cadastro, por se tratarem de campos diferentes e com validações distintas.

Ao invés de `DadosCadastroMedico`, usaremos `DadosAtualizacaoMedico`. Com o atalho "Alt + Enter > Create record 'DadosAtualizacaoMedico'", vamos substituir o pacote para "med.voll.api.medico" e clicar no OK.

Receberemos apenas o _ID_ e os dados atualizáveis, nome, telefone e endereço. Passaremos todas como strings, exceto o endereço, para o qual usaremos o _DTO_ `DadosEndereco endereco`. As validações dela, como logradouro e CEP, permanecerão. Reaproveitamos o _DTO_.

No campo _ID_, adicionaremos a anotação `@NotNull`, para informar que ele é obrigatório:

```less
package med.voll.api.medico;

import jakarta.validation.constraints.NotNull;
import med.voll.api.endereco.DadosEndereco;

public record DadosAtualizacaoMedico(
        @NotNull
        Long id,
        String nome,
        String telefone,
        DadosEndereco endereco) {
}
```

De volta a "MedicoController.java", vamos carregar o objeto no banco de dados, criando a variável `medico = repository.getReferenceById(dados.id())`.

Logo abaixo, vamos atualizar os dados criando o método `medico.atualizarInformacoes(dados)`. Vamos registrar o novo método clicando em "Alt + Enter > Create method". Seremos redirecionados para a classe "Medico.java". Lá, será criada a assinatura. Vamos adicionar a implementação dentro das chaves.

Passaremos `this.nome = dados.nome()`. Pegaremos o nome do médico atual e substitui-lo pelo nome que chega via _DTO_. Como queremos atualizar apenas se o campo for enviado, precisaremos adicionar um `if`.

Como parâmetros, passaremos `(dados.nome() != null)`. Faremos a mesma coisa com os outros campos. No endereço, porém, criaremos o método `atualizarInformacoes()` na classe `Endereco,`, passando dentro do `if` e selecionando "Alt + Enter > Create method":

```kotlin
  }

    public void atualizarInformacoes(DadosAtualizacaoMedico dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.telefone() != null) {
            this.telefone = dados.telefone();
        }
        if (dados.endereco() != null) {
            this.endereco.atualizarInformacoes(dados.endereco());
        }

    }
```

Quando formos redirecionados ao método `Endereco.java`, vamos atualizar os dados. Criaremos um `if` com o parâmetro `dados.logradouro() != null`. Faremos o mesmo para os outros campos:

```kotlin
 public void atualizarInformacoes(DadosEndereco dados) {
        if (dados.logradouro() != null) {
            this.logradouro = dados.logradouro();
        }
        if (dados.bairro() != null) {
            this.bairro = dados.bairro();
        }
        if (dados.cep() != null) {
            this.cep = dados.cep();
        }
        if (dados.uf() != null) {
            this.uf = dados.uf();
        }
        if (dados.cidade() != null) {
            this.cidade = dados.cidade();
        }
        if (dados.numero() != null) {
            this.numero = dados.numero();
        }
        if (dados.complemento() != null) {
            this.complemento = dados.complemento();
        }
    }
}
```

Agora vamos voltar para "MedicoController.java". Não precisamos fazer a atualização no banco de dados, isso é automático da _JPA_.

De volta ao _Insomnia_, podemos testar a atualização chamando a listagem de médicos. Removeremos os parâmetros de paginação para que todos sejam carregados.

Poderemos fazer as atualizações usando a requisição "PUT". Basta passar a informação do campo que queremos atualizar. No vídeo, o instrutor altera o nome do médico "João Carlos" para "João Carlos da Silva", informando os campos de _ID_ e nome, assim:

```json
        "id": 2,
        "nome": "João Carlos da Silva"
```

Se dispararmos a requisição de listagem de médicos depois disso, veremos que tivemos sucesso. Nossa requisição funcionou corretamente.

No próximo vídeo, implementaremos a requisição de exclusão.

# Para saber mais: Mass Assignment Attack

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116073/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116073/question)

**_Mass Assignment Attack_** ou Ataque de Atribuição em Massa, em português, ocorre quando um usuário é capaz de inicializar ou substituir parâmetros que não deveriam ser modificados na aplicação. Ao incluir parâmetros adicionais em uma requisição, sendo tais parâmetros válidos, um usuário mal-intencionado pode gerar um efeito colateral indesejado na aplicação.

O conceito desse ataque refere-se a quando você injeta um conjunto de valores diretamente em um objeto, daí o nome atribuição em massa, que sem a devida validação pode causar sérios problemas.

Vamos a um exemplo prático. Suponha que você tem o seguinte método, em uma classe Controller, utilizado para cadastrar um usuário na aplicação:

```java
@PostMapping
@Transactional
public void cadastrar(@RequestBody @Valid Usuario usuario) {
    repository.save(usuario);
}
```

E a entidade JPA que representa o usuário:

```java
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity(name = "Usuario")
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private Boolean admin = false;

    //restante do código omitido…
}
```

Repare que o atributo `admin` da classe `Usuario` é inicializado como `false`, indicando que um usuário deve sempre ser cadastrado como não sendo um administrador. Porém, se na requisição for enviado o seguinte JSON:

```graphql
{
    “nome” : “Rodrigo”,
    “email” : “rodrigo@email.com”,
    “admin” : true
}
```

O usuário será cadastrado com o atributo `admin` preenchido como `true`. Isso acontece porque o atributo `admin` enviado no JSON existe na classe que está sendo recebida no Controller, sendo considerado então um atributo válido e que será preenchido no objeto `Usuario` que será instanciado pelo Spring.

Então, como fazemos para prevenir esse problema?

## Prevenção

O uso do padrão DTO nos ajuda a evitar esse problema, pois ao criar um DTO definimos nele apenas os campos que podem ser recebidos na API, e no exemplo anterior o DTO não teria o atributo `admin`.

Novamente, vemos mais uma vantagem de se utilizar o padrão DTO para representar os dados que chegam e saem da API.

# Para saber mais: PUT ou PATCH?

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java/task/116074/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-3-desenvolva-api-rest-java/116074/question)

Escolher entre o método HTTP PUT ou PATCH é uma dúvida comum que surge quando estamos desenvolvendo APIs e precisamos criar um endpoint para atualização de recursos. Vamos entender as diferenças entre as duas opções e quando utilizar cada uma.

## PUT

O método PUT substitui todos os atuais dados de um recurso pelos dados passados na requisição, ou seja, estamos falando de uma atualização integral. Então, com ele, fazemos a atualização total de um recurso em apenas uma requisição.

## PATCH

O método PATCH, por sua vez, aplica modificações **parciais** em um recurso. Logo, é possível modificar apenas uma parte de um recurso. Com o PATCH, então, realizamos atualizações parciais, o que torna as opções de atualização mais flexíveis.

## Qual escolher?

Na prática, é difícil saber qual método utilizar, pois nem sempre saberemos se um recurso será atualizado parcialmente ou totalmente em uma requisição - a não ser que realizemos uma verificação quanto a isso, algo que não é recomendado.

O mais comum então nas aplicações é utilizar o método PUT para requisições de atualização de recursos em uma API, sendo essa a nossa escolha no projeto utilizado ao longo deste curso.

## Transcrição

Vamos criar a funcionalidade de exclusão.

De acordo com a definição, a exclusão não deve apagar os dados do médico, mas deixá-lo como inativo no sistema. Esse é o conceito de exclusão lógica.

Nesse vídeo, porém, faremos a exclusão tradicional.

Vamos acessar o Insomnia e clicar em "+ > HTTP Request". Vamos renomear a nova requisição para "Excluir Médico". Vamos selecionar o verbo "DELETE". A _URL_ continuará a mesma.

No corpo, passaremos a informação do _ID_, para identificar qual médico será deletado do banco de dados.

Selecionaremos a opção "JSON" no campo "Body". Vamos passar um parâmetro dinâmico na barra de endereços. Vamos adicionar uma barra e o _ID_ do médico à _URL_, depois de `/medicos`. No vídeo, o instrutor passa a _URL_ abaixo:

```bash
http://localhost:8080/medicos/3
```

Se enviarmos a requisição, receberemos o erro "404 Not Found", porque a _URL_ `/medicos/3` não está mapeada. Vamos resolver isso em "MedicoController.java", criando o novo método, para exclusão.

O método se chamará `excluir` e, acima dela, a anotação será `@DeleteMapping`. Para levar o _ID_, Vamos abrir parênteses e aspas após e anotação e passar o complemento da _URL_. Para que seja um parâmetro dinâmico, passaremos `("/{id}")`.

Também passaremos isso como parâmetro do método `excluir`. Faremos isso passando `Long id` como parâmetro e informando ao _Spring_ que ele se trata do `("{/id}")`. Para isso, adicionaremos `@PathVariable` ao parâmetro do método.

Também adicionaremos o método `@Transactional` abaixo de `@DeleteMapping`. Com a ajuda de `repository`, também passaremos `.deleById(id)` para fazer o delete no banco de dados.

Vamos tentar excluir o médico de ID 3, disparando a requisição com a _URL_ `http://localhost:8080/medicos/3`. Dará certo.

Fizemos a exclusão tradicional. No próximo vídeo, aprenderemos a fazer a exclusão lógica.

## Transcrição

Vamos fazer uma exclusão lógica. Em outras palavras, não vamos apagar o médico do banco de dados, mas marcá-lo como inativo.

Vamos criar uma nova _migration_. Antes disso, como de costume, vamos parar o projeto.

Vamos acessar "src > main > resources > db.migration". Nessa pasta, vamos criar a _migration_ "V3__alter-table-medicos-add-column-ativo.sql". Agora vamos abrir a _migration_.

Dentro dela, passaremos o código abaixo:

```sql
alter table medicos add ativo tinyint;
update medicos set ativo =1;
```

Essa nova migration será responsável por alterar a tabela de médicos, adicionando a coluna chamada "ativo", do tipo `tinyint`.

Agora vamos voltar a rodar o projeto. É hora de atualizar a entidade _JPA_. Vamos declarar o atribuito `private Boolean ativo`.

Atualizaremos, também, o construtor que recebe `DadosCadastroMedico`. Nele, adicionaremos `this.ativo = true;`:

```kotlin
    private Boolean ativo;

    public Medico(DadosCadastroMedico dados) {
        this.ativo = true;
        this.nome = dados.nome();
        this.email = dados.email();
        this.telefone = dados.telefone();
        this.crm = dados.crm();
        this.especialidade = dados.especialidade();
        this.endereco = new Endereco(dados.endereco());
    }
```

Vamos voltar à funcionalidade de excluir de "MedicoController.java". Nela, vamos carregar e entidade, inativá-lo, configurar o atributo como "false" e disparar o update no banco de dados. Vamos substituir `depository.deleteById(id);` por `var medico :Medico = repository.getReferenceById(id);`.

Vamos configurar o atributo como inativo, chamando `medico.excluir()`:

```typescript
    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();
    }
```

Com a ajuda de "Alt + Enter > Create method", criaremos o método. Entre as chaves do método, em "Medico.java", passaremos `this.ativo = false`:

```csharp
    }

    public void excluir() {
        this.ativo = false;
    }
}
```

Agora vamos salvar e testar no _Insomnia_. Se dispararmos a requisição de exclusão para inativar o médico de _ID_ 2, passando a _URL_ "[http://localhost:8080/medicos/2](http://localhost:8080/medicos/2)", a requisição será processada.

A listagem, porém, continua apresentando médicos ativos e inativos. Vamos alterar isso, para exibir apenas os ativos. Vamos voltar ao método `lista`, em "MedicoController.java", para atualizar a listagem.

Nesse método, vamos substituir `findAll` por `finAllByAtivoTrue`:

```typescript
    public Page<DadosListagemMedico> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        return repository.findAllByAtivoTrue(paginacao).map(DadosListagemMedico::new);
    }
```

Com a ajuda do "Alt + Enter > Create method", vamos criá-lo no nosso _repository_. Nele, passaremos o código abaixo:

```kotlin
package med.voll.api.medico;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
    Page<Medico> findAllByAtivoTrue(Pageable paginacao);
}
```

Se salvarmos e dispararmos a requisição novamente, veremos que tivemos sucesso.


