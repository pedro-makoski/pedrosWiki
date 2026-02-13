Você precisa da dependência a seguir:
```xml
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-web</artifactId>  
</dependency>
```
# O que é REST, HTTP?
Ao trabalhar com o Spring Web estamos subindo um servidor em uma porta do nosso computador. Mas o que é um servidor?

Servidor é justamente algo que oferta recursos aos clientes. No nosso caso, o recurso ofertado serão as séries que estão no nosso banco de dados. Ofertamos esses recursos com o uso da nossa API, ou “Interface de Programação de Aplicações”, traduzindo a sigla.

Para que isso seja possível, precisamos usar o Spring Web como dependência da nossa aplicação. Com isso, ao contrário de como era feito anteriormente, o Spring “starta” automaticamente um servidor TomCat na porta 8080, o que facilita o trabalho da pessoa desenvolvedora.

Estamos desenvolvendo uma API que irá se comunicar com o mundo externo através do protocolo HTTP. Caso queira se aprofundar mais nesse protocolo, recomendamos o curso [HTTP: entendendo a web por baixo dos panos](https://cursos.alura.com.br/course/http-entendendo-web-por-baixo-dos-panos).

Uma vez que entendemos a relação entre servidor e cliente e conhecemos o HTTP, precisamos pensar em como os nossos dados serão transmitidos.

Durante o curso, trabalharemos com uma API REST(Representational State Transfer, ou Transferência de Estado Representacional). Quando falamos desse conceito, estamos nos referindo a um conjunto de princípios de arquitetura que especificam como solicitações e respostas devem ser construídas em uma API.

Os dados em uma API REST são geralmente enviados e recebidos no formato JSON (JavaScript Object Notation). No entanto, eles também podem ser enviados em outros formatos, como XML.

A arquitetura REST sugere o uso de métodos HTTP padronizados para executar tarefas específicas, incluindo:

- GET para obter dados,
- POST para enviar novos dados,
- PUT para atualizar dados existentes,
- DELETE para remover dados.

Tendo um padrão, a comunicação fica muito mais eficiente. Além disso, as APIs REST devem ser stateless, o que significa que as solicitações do cliente podem ser processadas independentemente umas das outras. Isso as torna altamente escaláveis, facilitando a vida dos desenvolvedores que trabalham em grandes projetos web, pois facilita o gerenciamento, a manutenção e o teste do software.

Ao longo do curso falaremos mais sobre todos esses conceitos e os veremos na prática. Assim, vamos nos aprofundar cada vez mais! :D

# MVC
O MVC é um conceito muito importante no mundo da programação. Esta é uma sigla que significa Model-View-Controller, ou Modelo-Visualização-Controlador, em português. Ele é usado para organizar o código de muitos tipos de software, facilitando o desenvolvimento e tornando o programa mais fácil de ser mantido e atualizado. Vamos entender melhor como isso tudo funciona.

## Por que o Modelo MVC é importante?

Imagine que você está construindo uma casa. Se você simplesmente começar a construir sem um plano, pode acabar com cômodos estranhos ou estruturas mal posicionadas. Mas, se você definir bem os projetos antes de começar, sua casa será melhor organizada e será mais fácil de viver. O mesmo se aplica ao código de um programa, onde a casa é equivalente ao seu aplicativo e o plano é o modelo MVC.

Ao seguir o modelo MVC, dividimos o código do nosso aplicativo em três partes:

1 - O Modelo, que é onde todos os dados e as regras de negócio são processados.

2 - A Visualização, que é a interface de usuário, onde você vê os resultados das operações.

3 - E o Controlador, que é como o cérebro que opera as outras duas partes, recebendo entradas do usuário e enviando comandos para o Modelo e a Visualização.

## Como o Modelo, a Visualização, e o Controlador interagem?

Vamos utilizar um simples exemplo de um site de cadastro de livros para explicar como o MVC funciona.

No caso do Modelo, pense nele como o repositório de todos os livros que estão cadastrados no site. Ele guarda todas as informações, como título, autor e gênero do livro. Ele também tem todas as regras, como verificar se o livro já está cadastrado ou não.

A Visualização é a página que você vê em seu navegador. Ela apresenta um formulário para adicionar um novo livro e uma lista de todos os livros já cadastrados.

E finalmente, temos o Controlador. Digamos que você quer adicionar um novo livro. Você digita as informações no formulário e clica em 'Enviar'. Aqui é onde o Controlador entra em ação. Ele “pega” a informação que você digitou, verifica com o Modelo se o livro já existe (se for a regra) e, se tudo estiver certo, pede para o Modelo adicionar o novo livro. Em seguida, instrui a Visualização para mostrar a nova lista de livros com o que você acabou de adicionar.

Vê como tudo trabalha junto? Cada parte faz um trabalho específico, mas todas se comunicam para manter as coisas funcionando perfeitamente.

## Como o Modelo MVC ajuda na organização do código e na manutenção do aplicativo?

Quando o código é bem organizado, é muito mais fácil identificar problemas, fazer atualizações e adicionar novas funcionalidades. Por exemplo, se um dia você decidir que quer mudar a cor de fundo do seu site, você só precisa ir na _Visualização_ e fazer a mudança. Se decidir mudar as regras para adicionar um novo livro, vai direto para o _Modelo_.

Essa organização também facilita muito a vida de qualquer outra pessoa que possa trabalhar no seu código no futuro. E se você decidir oferecer seu site em diferentes linguagens, por exemplo, você pode simplesmente adicionar uma nova _Visualização_, sem precisar mexer no _Modelo_ ou no _Controlador_.

Então, o Modelo MVC é um grande aliado na hora de desenvolver um aplicativo. Além de facilitar o entendimento e a manutenção do código, ajuda a prepará-lo para as mudanças e melhorias que sempre surgem ao longo do tempo.

## MVC em Java

Em Java, o padrão MVC era comumente aplicado utilizando as tecnologias JSP ou Thymeleaf. Com o JSP (Java Server Pages), é possível misturar códigos Java e HTML para criar páginas web dinâmicas. Já no Thymeleaf, os códigos não se misturam, mas temos páginas HTML dentro da pasta `resources` do projeto. Essas páginas se comunicam com o código Java e fazem com que possamos visualizar as informações no navegador.

Essas tecnologias faziam com que a View do MVC estivesse dentro da aplicação Java. Porém, atualmente o mais comum no mercado é ter uma separação entre front-end e back-end. No back-end, temos a Model e o Controller. O back-end fornece informações que serão utilizadas pelo front-end, que será responsável pela parte da View.

Agora que você sabe a teoria, é hora de colocar a mão na massa e começar a praticar. E lembre-se: cada novo conceito aprendido é um passo à frente em sua jornada como desenvolvedor. Boa sorte!
# Criando um controller
Dentro da pasta controllers, crie:
```java
package br.com.alura.screenmatch.controller;  
  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  // Indica que é uma API rest
public class SerieController {  
    @GetMapping("/series")   // Indica que o GET vai ser na rota séries 
    public String obterSeries() {  
        return "Aqui vão ser listadas as series";  
    }  
}
```
# Organizando o projeto
Durante as nossas aulas, estamos utilizando uma divisão de pacotes bem específica: para cada parte do projeto, ou camada, criamos um pacote diferente. Por isso trabalhamos com `controller`, `model`, `repository` e outros pacotes. Esse estilo de organização é chamado de **Package by Layer**, ou pacotes por camadas.

O Package by Layer é uma abordagem que diz que você deve dividir seu código com base em suas responsabilidades funcionais. Isso pode incluir coisas como 'model', 'view', 'controller', e 'repository'. Cada camada tem uma responsabilidade específica. Por exemplo, a camada 'view' manipula a interface do usuário, enquanto a camada 'controller' lidará com a lógica de negócio.

Vamos considerar um exemplo simples. Digamos que estamos construindo um aplicativo de blog. Com a abordagem 'Package by Layer', poderíamos ter pacotes assim:

```markdown
com.myblog
    .controller
        .PostController
        .CommentController
    .model
        .Post
        .Comment
    .repository
        .PostRepository
        .CommentRepository
```

Neste exemplo, todas as classes relacionadas aos posts do blog estão espalhadas por diferentes pacotes, baseados na função que desempenham. O mesmo se aplica às classes de comentários.

Porém, existe um outro tipo de organização, utilizado, por exemplo, na formação Spring Boot. Ele é chamado **Package by Feature**, ou pacotes por funcionalidades. Ele sugere que você deve organizar seu código com base nos recursos individuais do seu aplicativo. Em vez de dividir seu código com base em sua função, você divide com base no recurso que ele implementa.

Usando o mesmo exemplo do blog, com 'Package by Feature', teríamos algo assim:

```markdown
com.myblog
    .post
        .Post
        .PostController
        .PostRepository
    .comment
        .Comment
        .CommentController
        .CommentRepository
```

Neste exemplo, todas as classes relacionadas aos posts estão no mesmo pacote. O mesmo se aplica aos comentários. Cada pacote é autossuficiente e contém tudo o que precisa para implementar um recurso específico.

## Quando usar cada um

Então, qual abordagem você deve usar? Depende. 'Package by Layer' pode ser útil se você tiver uma equipe grande e complexa, na qual muitas pessoas podem estar trabalhando em diferentes camadas ao mesmo tempo. Ele separa as responsabilidades claramente, portanto, é menos provável que as pessoas pisem nos pés umas das outras.

No entanto, 'Package by Feature' é muitas vezes preferido para projetos menores e mais ágeis. Ele mantém todas as classes relacionadas a um recurso juntas, tornando mais fácil para um desenvolvedor entender completamente um recurso. Também é mais fácil de manter, porque quando um recurso é adicionado ou removido, você sabe exatamente onde todas as classes relacionadas estão.

Aqui, optamos por utilizar o Package by Layer, mas é interessante que você analise todas as condições para ver a estrutura que melhor se adequa a seu projeto.
# DTOs
Data transfer object, são os objetos que são tranferidos para o usuário. 
# CORS
Cross-Origin Resource Sharing é um erro que indica que pelo fato de você não estar na mesma rota, você não é permitido de participar.
## Como configurar
```kotlin
package br.com.alura.screenmatch.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:5501")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}
```
