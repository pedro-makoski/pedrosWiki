## Transcrição

**Jacqueline**: Olá! Queremos te dar as boas-vindas a mais um curso de **Java**. Eu sou a Jaqueline Oliveira, Engenheira de Software e Instrutora na Alura.

> **Audiodescrição**: Jaqueline é uma mulher de pele clara, olhos castanhos, cabelo louro e longo. Está com uma blusa azul escrita Alura. Ao fundo, escritório com iluminação azul.

Nesse curso, estarei acompanhada da princesa do Java, Iasmin!

**Iasmin**: Eu sou **Iasmin Araújo**, faço parte do _Scuba Team_ na Escola de Programação.

> **Audiodescrição**: Iasmin é uma mulher de pele clara, olhos verdes e longos cabelos castanho-escuros. Está usando uma blusa azul e fone de ouvido. Ao fundo, uma parede sem decorações com iluminação azul.

## Pré-requisitos

**Jacqueline**: Para um melhor aproveitamento deste conteúdo, é muito importante que você já tenha feito a [formação Java: Orientação a Objetos](https://cursos.alura.com.br/formacao-java) e os cursos que antecedem este, que estão detalhados nos pré-requisitos.

## O que vamos aprender?

**Iasmin**: Neste curso, vamos aprender muitos conteúdos. Vamos utilizar o _**Spring Web**_ e aproveitar vários recursos que ele fornece, como criar um servidor web pela primeira vez.

Neste servidor, vamos **mapear várias rotas em um controlador** e **conectar nosso _back-end_ a um _front-end_ existente**.

Também vamos **conhecer e tratar os erros de CORS** (_Cross-Origin Resource Sharing_) e aprender o que significa cada uma dessas quatro letras.

Além disso, vamos fazer tudo isso aplicando **boas práticas dos projetos web** com o uso de _DTOs_ (Data Transfer Objects) e de _services_ (serviços).

**Jacqueline**: Tudo isso vamos aprender através do nosso projeto ScreenMatch, que temos desenvolvido ao longo de outros cursos. O ScreenMatch é um aplicativo para _streaming_ de filmes e séries, que agora será evoluído em uma API.

Vamos fornecer um _front-end_ similar ao apresentado a seguir:

![Interface do aplicativo ScreenMatch. Fundo preto. No topo, cabeçalho com a logotipo do ScreenMath e o menu Categorias alinhados à esquerda. Alinhado à direita, temos os botões de pesquisa com ícone de lupa, notificação com ícone de sino e perfil com ícone de pessoa. Abaixo, título Lançamentos no ScreenMatch com pôster da série Game of Thrones e outro de Gilmore Girls.](https://cdn1.gnarususercontent.com.br/1/795715/2b32d8ef-25d3-42cc-9893-4b178120a0b0.png)

Você vai pegar suas séries cadastradas e vai poder exibi-las, com a informação, o pôster, as temporadas e episódios. Vamos trabalhar com tudo isso ao longo deste curso.

**Iasmin**: Além disso, vamos continuar com o que já temos feito nos cursos anteriores. Vamos continuar praticando nossos conhecimentos em um projeto completamente novo que aplica não só o que vamos aprender no curso, mas também o que exploramos ao longo de toda a formação.

**Jacqueline**: Se animou? Nós estamos animadas. Vamos começar?

## Transcrição

**Jacqueline**: Olá, Iasmin! Vamos começar mais um curso extremamente relevante de **Java**.

## Conhecendo a aplicação web

**Jacqueline**: Para recapitular o que fizemos no último curso, desenvolvemos uma aplicação onde buscávamos séries, episódios e temporadas do **OMDb** e persistíamos essas informações em um banco de dados **PostgreSQL**, um banco relacional.

Portanto, discutimos sobre **JPA** (_Java Persistence API_), entre outros tópicos. Contudo, nosso objetivo é fornecer uma experiência _full stack_.

Portanto, além do que a aplicação já faz, precisamos transformá-la em uma API para que uma aplicação front-end consiga consumir esses dados. Como isso vai aparecer na tela para as pessoas estudantes?

Teremos uma aplicação como o ScreenMatch, onde estarão todas as séries que cada pessoa foi buscando, como Game of Thrones, The Last of Us, Gilmore Girls, entre outras. Para cada estudante, aparecerão as séries que cada pessoa buscou e cadastrou no banco.

**Iasmin**: Agora, cada pessoa terá a sua própria aplicação ScreenMatch. Vamos passar do ScreenMatch sem web para, finalmente, o ScreenMatch com web.

**Jacqueline**: Vamos começar a discutir um pouco do que tínhamos antecipado, que será muito fácil transformar uma aplicação comum de terminal para se tornar uma **aplicação web**.

Para este curso, embora fosse possível executar sem a IDE, vamos pedir que você instale o [Visual Studio Code](https://code.visualstudio.com/), uma IDE muito utilizada quando se trabalha com front-end.

Também precisaremos que você instale a [extensão Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), que usaremos para exibir o front-end no navegador.

> Vamos disponibilizar um guia de preparação do ambiente, mostrando os passos da instalação do VSCode e a extensão, além do link para você baixar o [código-fonte do front-end](https://github.com/jacqueline-oliveira/3356-java-web-front).

O código-fonte estará disponível, com uma estrutura de pastas "css", "img" e "scripts". Vamos abrir o arquivo `index.html`, clicando com o botão direito e selecionando a opção "_Open with Live Server_" (ou atalho "Alt + L + Alt + O").

Ao fazer isso, abre-se automaticamente a aplicação no navegador e é delegada uma porta. Nesse caso, está executando no localhost `127.0.0.1` na porta `5501`.

Toda vez que fizermos uma modificação, a extensão já faz um _Live Reload_, permitindo que visualizemos as alterações sendo feitas. Portanto, quando clicamos ou alteramos algo, conseguiremos visualizar tudo por navegador.

> A atividade inicial é preparar o front-end, baixar o código-fonte e abrir o Visual Studio Code.

No próximo vídeo, começaremos a transformar nossa aplicação em API.

**Iasmin**: Até daqui a pouco! Vamos lá.

# Preparando o ambiente

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146867/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146867/question)

Para poder utilizar o front-end do Screenmatch, você pode baixá-lo [aqui.](https://github.com/alura-cursos/3356-java-web-front) Agradecimento especial à instrutora [Monica Hillman](https://cursos.alura.com.br/user/monicahillman) , que desenvolveu a aplicação front-end do ScreenMatch para ser utilizada nesse curso.

Durante o curso, iremos usar o VSCode para abrir e executar o front. Caso não tenha essa ferramenta instalada, recomendamos a leitura do artigo [VisualStudio Code: instalação, teclas de atalho, plugins e integrações](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes).

No VSCode, utilizaremos uma extensão chamada “LiveServer”. Para instalá-la, vamos no menu lateral esquerdo no quinto ícone, onde há 3 quadradinhos juntos e um separado, com o nome “Extensions”:

![A imagem é um print de tela do Visual Studio Code com o projeto 3356-java-web-front-aberto. Há um menu à esquerda com vários ícones. O primeiro é o dos arquivos, que está selecionado, o segundo é o de pesquisar, o terceiro é o de execução de projeto, o quarto se trata de versionamento de código, o quinto de um explorador remoto e o sexto do WSL. Esses ícones podem variar dependendo das configurações do aplicativo. Ao lado direito dos ícones, aparece outro menu, com a estrutura do projeto. No restante da tela, não há nenhum arquivo aberto.](https://cdn3.gnarususercontent.com.br/3356-java-web-spring-api-front/imagem0.png)

Depois disso, vamos até a barra de pesquisa (também do menu lateral, do lado direito dos ícones) e buscamos por “Live Server”. Clicamos na primeira opção que aparece, e, na nova janela aberta à direita, selecionamos “Install”:

![IA imagem é um print de tela do Visual Studio Code com a opção “Extensions” selecionada. Há os ícones do aplicativo, e do lado direito há uma barra de pesquisa onde está digitado “live server”, e a primeira opção é Live Server, onde está escrito “Launch a development local…”. Abaixo desta, há várias outras opções, mas clicamos na primeira e abre uma aba à direita com detalhes da extensão. Depois do título e da descrição do Live Server, muito parecidos com o que estava no menu lateral, há a opção `Instalar` em um botão azul, que está destacada por um retângulo vermelho.](https://cdn3.gnarususercontent.com.br/3356-java-web-spring-api-front/imagem1.png)

Feito isso, a extensão configurada e podemos rodar o projeto. Voltamos à parte de arquivos do VSCode (primeiro ícone do menu lateral esquerdo). Depois, navegamos até o arquivo `index.html`, clicamos com o botão direito e selecionamos a primeira opção, “Open with Live Server”.

A parte do front-end será aberta no seu navegador da seguinte forma:

![Captura de tela do Screenmatch, aparecendo no navegador. Na parte da URL, aparece “127.0.1:5501/index.html”. Logo abaixo, vem o cabeçalho da tela. À esquerda, aparece o ícone do Screenmatch, que é a própria palavra em azul claro, com o SCREEN escrito na parte cima, e o MATCH na parte de baixo. Do lado direito do ícone, aparece um seletor de categorias. Na outra extremidade da tela, à direita, aparecem ícones de pesquisa, notificação e perfil. Depois, no corpo do texto, aparecem os textos “Lançamentos no Screenmatch”, “Títulos populares no Screenmatch” e “Títulos no Screenmatch”, cada frase em uma linha. Com exceção do ícone, todas as outras coisas estão na cor branca, e se destacam do fundo azul marinho. A página é essa parte em azul. Depois disso, há uma parte em branco que é do próprio navegador e não se relaciona ao arquivo html que estamos executando.](https://cdn3.gnarususercontent.com.br/3356-java-web-spring-api-front/imagem2.png)

Ainda não estarão aparecendo as séries porque nossa API não está configurada para isso, mas vamos atualizar a aplicação back-end para que os resultados também possam aparecer no front. Vamos mergulhar e evoluir mais?
## Transcrição

**Jacqueline**: O que vai acontecer a partir do momento que instalamos o Visual Studio Code, adicionamos a extensão do _Live Server_, abrimos nosso projeto, clicamos com o botão direito no `index.html` e o abrimos com a opção "_Open With Live Server_" (atalho "Alt + L + Alt + O")?

Nesse momento, diferente do projeto completo que mostramos anteriormente, a aplicação vai aparecer vazia.

![Captura de tela da aplicação Screenmatch no navegador. Fundo gradiente do preto ao azul. No topo, cabeçalho com o logotipo do ScreenMath e o menu Categorias alinhados à esquerda. Alinhado à direita, temos os botões de pesquisa com ícone de lupa, notificação com ícone de sino e perfil com ícone de pessoa. No corpo da página, aparecem os títulos “Lançamentos no Screenmatch”, “Títulos populares no Screenmatch” e “Títulos no Screenmatch”, cada um em uma linha.](https://cdn1.gnarususercontent.com.br/1/1319058/77b73c95-db59-4cc8-883c-14243a20ce3b.png)

## Falha de requisição

**Jacqueline**: Então, a pessoa estudante vai clicar e perguntar: onde estão minhas séries? E não vai aparecer nada, porque precisamos buscar essas séries a partir de um endereço.

E como descobrimos onde a aplicação está tentando buscar nossas séries? Podemos clicar com o botão direito no navegador e selecionar a opção "Inspecionar", ou também apertar a tecla "F12".

O que vamos fazer nessa ferramenta? Vamos clicar na opção "Rede". Assim, quando atualizamos a página, podemos observar que ela está tentando fazer algumas requisições.

Podemos observar de imediato, na parte inferior, que existem três requisições que estão sendo acusadas como falhas. Ele está falhando ao tentar buscar o Top 5, os Lançamentos e também as séries.

|Nome|Estado|Tipo|Iniciador|Tamanho|Hora|
|---|---|---|---|---|---|
|top5|(falhou)|fetch|getDados.js:5|0B|2.36s|
|lancamentos|(falhou)|fetch|getDados.js:5|0B|2.37s|
|series|(falhou)|fetch|getDados.js:5|0B|2.37s|

Se clicamos na requisição de "series", o que será mostrado? Há muitos dados aparecendo na tela, pode ser um pouco confuso, mas vamos focar na aba "Cabeçalhos > Geral".

> - URL Do Pedido: [http://localhost:8080/series](http://localhost:8080/series)
> - Política do referenciador: strict-origin-when-cross-origin

No geral, ele está nos dizendo que está tentando buscar as séries através desse endereço `http://localhost8080/series`. Ele espera fazer uma requisição para esse endereço e obter informações para exibir a série.

Depois vamos mostrar a diferença de como aparece na pré-visualização quando funciona, ou seja, quando ele consegue receber os dados. Por enquanto não apareceu nada na aba "Pré-visualização", pois ele falhou para todas essas três requisições.

Ele está tentando buscar as séries Lançamentos, séries Top 5, séries comum e ainda não implementamos nada disso. E aí está a nossa tarefa, precisamos que na API, na aplicação, sirvamos esses dados nesse endereço - para que quando seja feita uma requisição para esse endereço, ele consiga obter todas as séries.

**Iasmin**: Nesse contexto, entendemos exatamente como a HTTP funciona. Temos o front-end que está fazendo uma requisição e está esperando uma resposta de uma API que estaria no `localhost:8080`. Mas ainda não fizemos nada, ainda não existe um `localhost:8080`.

Então, vamos implementá-lo?

## Requisição bem-sucedida

**Jacqueline**: Vamos mostrar como a aplicação deveria se comportar e o que deve mostrar para nós quando essa requisição é bem-sucedida.

Comentamos que está sendo feita uma requisição para aquele endereço `localhost` na porta 8080 e uma rota `/series`, por exemplo. Como estava falhando, não conseguimos visualizar exatamente o que é esperado.

O que ele espera devolver? Como transformar aquela requisição nas repostas com pôster, descrição e avaliação das séries?

Vamos voltar na página inicial. Ao clicar com o botão direito e escolher "Inspecionar", entramos na opção de "Rede". Vamos atualizar novamente a página só para ele fazer a chamada.

Se navegamos por essas requisições que estão na parte inferior, verificamos que o Top 5, os lançamentos e as séries, não estão mais em vermelho. Significa que ele conseguiu fazer a requisição.

|Nome|Estado|Tipo|Iniciador|Tamanho|Hora|
|---|---|---|---|---|---|
|top5|200|fetch|getDados.js:5|2.7kB|1.17s|
|lancamentos|200|fetch|getDados.js:5|2.7kB|860ms|
|series|200|fetch|getDados.js:5|18.9kB|2.75s|

Ao clicar em uma dessas requisições e verificar o cabeçalho geral, vamos encontrar a URL do pedido. Ele fez um pedido para o endereço `http://localhost:8080/series`, e a resposta foi `200 OK`. Além disso, foi uma requisição do tipo `GET`.

> - URL Do Pedido: [http://localhost:8080/series](http://localhost:8080/series)
> - Método de pedido: GET
> - Código de estado: 200 OK
> - Endereço Remoto: [::1]:8080
> - Política do referenciador: strict-origin-when-cross-origin

Já temos várias informações listadas. Fizemos uma requisição do tipo GET, ela foi bem-sucedida para esse endereço. Se entramos na aba de "Pré-visualização", qual resposta vai ser exibida?

Ele vai mostrar séries, temporadas e episódios. Vamos expandir um para exemplificar:

```yaml
{
    atores: "Jared Padalecki, Jensen Ackles, Jim Beaver",
    avaliacao: 8.4,
    genero: "DRAMA",
    id: "65131f31b20ea147e4667430",
    poster: "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    sinopse: "Dois irmãos seguem os passos de seu pai como caçadores, lutando com contra criaturas supernaturais de vários tipos, incluindo monstros, demonios e deuses que vagam pela terra.",
    titulo: "Supernatural",
    totalTemporadas: 15
}
```

Com isso, sabemos quais dados devem ser exibidos sobre o Supernatural.

Para conseguir fazer essa comunicação com o front e o back-end, deve existir essas duas partes. Um front-end fazendo requisições para o endereço específico, esperando receber um tipo de resposta, e um back-end também atuando no endereço, que vai receber essas requisições e fornecer a resposta para o front.

Agora, precisamos transformar a aplicação em uma **API REST**, que tem esses padrões REST que vamos explicar em um material extra, que consiga devolver para o nosso front-end uma resposta.

Então, vamos começar a fazer a nossa API.

## Utilizando Spring Web

**Jacqueline**: Na nossa aplicação, no IntelliJ, para fazer uma API, não vamos mais querer esses menus de 1 a 11. Isso não vai mais ser procedente, já que vamos fornecer dados, o que sugere que já cadastramos as séries.

Será uma aplicação para cadastrar e alimentar os dados, e outra só para fornecer esses novos dados.

Então, vamos encerrar essa aplicação `ScreenmatchApplication.java` que mostramos apenas para relembrar o que tinha sido feito. Para isso, digitamos `0` no terminal.

Na classe principal chamada `ScreenMatchApplication`, não vamos mais ter esse `implements CommandLineRunner`. Precisamos indicar que agora vai ser uma aplicação web, não mais uma aplicação de linha de comando.

Então, qual o primeiro passo para fazer isso acontecer? Antes de alterar essa classe `ScreenMatchApplication`, precisamos acessar o arquivo `pom.xml` e adicionar a dependência que vai permitir que criemos a nossa aplicação web.

No `pom.xml`, já temos algumas dependências incluídas. E a sintaxe da `starter-web`, que é uma dependência do Spring, é exatamente igual a essa primeira dependência, `spring-boot-starter`.

Por isso, vamos simplesmente copiar e colar esse bloco de dependência. E, abaixo dela, vamos incluir o `spring-boot-starter-web`. E, com isso, já conseguiremos criar a nossa API.

> `pom.xml`:

```xml
<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- código omitido… -->
</dependencies>
```

Lembre-se de clicar no ícone de "M" (ou "Ctrl + Shift + O") para carregar as mudanças.

O Spring tem esse recurso dos _starters_ que são muito interessantes e facilitam nosso trabalho.

**Iasmin**: Sim, porque agora só adicionamos essas linhas e já temos várias dependências baixadas listadas em "_External Libraries_" no painel esquerdo.

Antes adicionávamos várias dependências manualmente, mas agora, com a dependência do _starter_, já conseguimos baixar tudo. Por exemplo, ele vai nos dar o Tomcat e várias outras dependências que precisaríamos adicionar manualmente.

**Jacqueline**: Exatamente. Antigamente, tinha essa dificuldade de precisar incluir todas essas dependências manualmente. O Spring já traz essa facilidade de ter os _starters_ para empacotar várias outras dependências.

Quando falamos `starter-web`, ele já sabe a coleção de dependências que vai buscar, adicionar no projeto para desenvolver a API.

Então, nossas dependências já estão preparadas. As dependências _starters_ já foram baixadas para facilitar o nosso trabalho. Só que precisamos alterar a nossa classe principal, que não vai ser mais uma aplicação de linha de comando.

No painel a esquerda, no `ScreenmatchApplication`, vamos fazer um "Ctrl + C" e "Ctrl + V" para duplicar essa classe, assim a teremos como um backup e uma referência de como estava o projeto anteriormente.

Vamos nomeá-la como `ScreenmatchApplicationSemWeb`. Vamos colocar esse nome para especificar que essa classe era a que estava sem web. E aí, vamos adicionar ao GitHub.

Vamos comentar toda essa classe `ScreenmatchApplicationSemWeb` com atalho "Ctrl + ;", porque não vamos mais trabalhar com linha de comando.

> Confira o [arquivo `ScreenmatchApplicationSemWeb.java`](https://github.com/jacqueline-oliveira/3356-java-screenmatch-web/blob/aula01/src/main/java/br/com/alura/screenmatch/ScreenmatchApplicationSemWeb.java).

Em `ScreenmatchApplication`, vamos remover a opção `implements CommandLineRunner` na declaração da classe na linha 11. Do mesmo jeito, podemos apagar todo o `@override` de implementação do `run()`. Ele também não vai mais existir.

E, por fim, vamos tirar o `repositorio`. Não vamos precisar de repositório na classe principal. Isso aí, vamos explorar em outro momento, quando estivermos programando o controlador.

Basicamente, a classe vai ficar enxuta. Será apenas um `public class ScreenMatchApplication` com um `public static void main`, apenas chamando para executar a classe.

> `ScreenmatchApplication.java`:

```java
@SpringBootApplication
public class ScreenmatchApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScreenmatchApplication.class, args);
    }

}
```

E aí, vamos executar a classe para verificar o que vai acontecer agora, clicando no ícone de play à esquerda ou "Ctrl + Shift + F10".

**Iasmin**: Antes estávamos implementando outra interface que fazia com que fosse possível visualizar no terminal o que estava acontecendo. Mas agora, como estamos numa aplicação web, esse método `run()` já está em um método padrão.

Portanto, ele já executa por padrão o ato de subir a porta no _localhost_ 8080 para aparecer algo lá no navegador. Tem certas diferenças quando tiramos a implementação.

**Jacqueline**: Quando vamos criar uma aplicação, uma API, antes de fazer um _deploy_ e colocar isso em produção, testamos em um servidor local. E o Spring Web já faz isso para nós. Ele já sobe um servidor local Tomcat, que vai estar escutando requisições em uma porta específica.

No terminal, aparece a mensagem que o Tomcat subiu na porta 8080. Só que poderíamos mudar essa porta também, mas ele já vai ficar operando na porta 8080 e escutando requisições.

Se nesse momento quisermos chamar esse servidor e verificar o que está acontecendo, devemos abrir o navegador e digitar `http://localhost:8080`.

A primeira tela que aparece é uma página de erro.

> Whitelabel Error Page
> 
> This application has no explicit mapping for /error, so you are seeing this as a fallback.

E aí é muito comum, nesse momento, assim que executa e a pessoa estudante visualiza essa página de erro, pensa que está fazendo algo errado. Só que está tudo certo.

O que está acontecendo? Ele está entendendo que tem um servidor rodando na porta 8080 e está escutando requisição, só que ainda não programamos nada para acontecer quando essa requisição está sendo feita.

Ele indica em inglês que ainda não temos o mapeamento para esse endereço. Não mapeamos o que tem que acontecer quando chamamos esse endereço.

Por isso que está essa página de erro, mas ela está certa, ela está funcionando. Ele está entendendo que tem um servidor rodando na 8080.

Inclusive, se colocássemos 8081, ia dar uma mensagem totalmente diferente.

> Não é possível aceder a este site
> 
> localhost recusou estabelecer ligação.

Não existe esse site, não tem nada acontecendo na 8081. Mas na 8080 está, ele está esperando requisições.

A seguir, vamos mostrar como mapear essas requisições e como mapear aqueles endereços que o front vai consumir, como o `/series` e `/lancamentos`.

**Iasmin**: No próximo vídeo, vamos tirar essa página de erro.
# Para saber mais: erro de portas

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146868/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146868/question)

Ao tentar executar o projeto, você pode obter o seguinte erro:

```markdown

***************************
APPLICATION FAILED TO START
***************************

Description:

Web server failed to start. Port 8080 was already in use.

Action:

Identify and stop the process that's listening on port 8080 or configure this application to listen on another port.

Process finished with exit code 1
```

Esse erro indica que você está tentando acessar a porta 8080, mas ela já está em uso. O Spring Boot já sobe o servidor, por padrão, na porta 8080, mas podemos alterar essa porta para prosseguir sem erros. Para fazer isso, basta adicionar a linha a seguir no arquivo `application.properties`:

```ini
server.port=8081
```

Nesse caso, estamos trocando a porta para 8081, mas você pode tentar utilizar alguma outra também. Assim, seu projeto rodará normalmente e poderemos prosseguir!
# Para saber mais: conhecendo HTTP, API REST e a comunicação web

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146869/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146869/question)

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

## Transcrição

**Jacqueline**: Quando estamos desenvolvendo uma aplicação, é comum utilizar **boas práticas**, principalmente em aplicações web. Frequentemente, baseamos essas práticas no **modelo MVC**, cuja documentação explicativa deixaremos em uma atividade.

> O MVC é uma forma de dividir a aplicação entre _model_, _view_ e _controller_.
> 
> Em resumo, o _**model**_ é onde ficam as regras de negócio e as informações. O _**view**_ é a parte gráfica e visual, enquanto o _**controller**_ é o que recebe as requisições.

Portanto, quando chamamos no navegador `http://localhost:8080/series`, que é o que o front-end está tentando fazer, essa requisição precisa ser recebida por algum lugar. Por padrão, quem faz isso é o controlador, o famoso _controller_.

## Criando um controlador

**Jacqueline**: Vamos criar um novo pacote, que será um pacote _controller_, e criar uma classe `SerieController`, para manter o padrão de nomenclatura que temos usado ao longo da nossa aplicação.

Para criar um novo pacote, clicamos com o botão direito em "br.com.alura.screematch", selecionamos "New > Package", e o nomeamos como "controller".

Nesse momento, teremos apenas um, mas poderíamos ter vários, por exemplo, de séries, filmes e atores. Portanto, é interessante agrupar as classes em comum dentro de um pacote. Dentro do pacote "controller", vamos criar a classe `SerieController`, usando a opção "New > Java Class".

Sabemos que o Spring é ótimo e entende várias coisas. No curso anterior de JPA, falávamos `findByName` e ele resolvia toda a nossa vida. No entanto, somente porque nomeamos a classe como `SerieController`, isso não significa que ele vai entender que esse é um controlador.

Precisamos passar essa informação para ele, informando: "este aqui é o controlador, quando chegar a requisição, procure nessa classe".

**Iasmin**: As **anotações** sempre são muito presentes. Se queremos um repositório, usamos `@repository`. Também vamos explorar outras classes que usarão outras anotações.

Indicamos que a classe está sendo gerenciada pelo Spring, através dessa anotação, indicando que ela é um _controller_.

**Jacqueline**: Portanto, a anotação que vamos usar nesse contexto é `@RestController`. Ele já faz o _autoimport_ de `org.spring.framework`.

Neste caso, estamos usando o padrão REST, cuja explicação também vamos deixar nas atividades. Na Alura, também temos cursos que vão aprofundar sobre Spring.

> `SerieController.java`:

```java
package br.com.alura.screenmatch.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class SerieController {
}
```

Com isso, indicamos que a classe é um controlador REST. Porém, no front-end, ele também faz um tipo de requisição para aquele endereço `/series`.

Analisando o Postman, podemos perceber que existem vários tipos de requisição. Por exemplo, temos `PUT`, `POST`, `DELETE`, e também a requisição do tipo `GET`, que fizemos quando fomos obter nossos dados do OMDb.

Nesse caso, também queremos programar o que deve acontecer quando houver uma requisição do tipo `GET` no navegador. Por isso, vamos usar a anotação `@GetMapping` dentro da classe.

Essa anotação será usada imediatamente acima do método que deve ser chamado no momento que a requisição acontecer.

Além de dizer o tipo da requisição, neste caso, precisamos dizer quem será chamado depois do endereço principal.

Como descobrimos no navegador, se chamamos somente `localhost:8080` não irá acontecer nada. Mas não queremos chamar somente o `8080`, queremos chamar o `8080/series`, que ainda não está fazendo nada, pois não tem nada mapeado.

Por isso, ao lado da anotação `@GetMapping`, colocamos entre parênteses, e entre aspas, `/series`. Para dizer: "quando houver uma requisição nessa rota `/series`, você vai fazer o método abaixo".

E o que vamos fazer no método abaixo? Nossa ideia é devolver um grande JSON com todas as séries, mas vamos fazer um passo de cada vez.

Vamos começar devolvendo um texto. Para isso, faremos um método `public`, indicando que o retorno será uma `String` e o chamaremos de `obterSeries()`.

Nesse método, vamos fazer um `return` e colocar uma frase, por exemplo, "Aqui vão ser listadas as séries". Só para programar essa primeira interação com a requisição e conferir a resposta.

```java
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class SerieController {

        @GetMapping("/series")
        public String obterSeries() {
                return "Aqui vão ser listadas as séries";
        }
}
```

Teremos que parar a aplicação e rodá-la novamente, pois fizemos uma alteração.

Posteriormente, vamos aprender a fazer a aplicação parar e voltar sozinha. Mas, por enquanto, paramos e executamos novamente no botão verde de "Run ScreenmatchApplication" localizado na barra superior da tela (ou "Shift + F10").

Quando executamos novamente, ele sobe aquele Tomcat novamente na porta 8080. Como mapeamos o `localhost:8080/series`, se atualizamos o navegador, ele vai mostrar a frase:

> Aqui vão ser listadas as séries

Conseguimos fazer uma comunicação entre o navegador e a nossa aplicação. Nossa aplicação subiu o servidor local na porta 8080 e mapeamos uma rota.

Desse modo, quando digitamos `/series`, o navegador chega na classe de controlador, verifica que a requisição foi do tipo `GET` e devolve essa mensagem.

Se tiramos o `/series`, mantendo somente o `8080`, ele vai dar aquele erro `Whitelabel Error Page`, dizendo que não tem nada mapeado. Mas, para o `/series`, que foi o que programamos, este, sim, já está mapeado e ele já sabe responder essa requisição.

**Iasmin**: Em outras palavras, tínhamos um padrão, que é esse `localhost:8080`, e quando chamamos o `/series`, conseguimos visualizar um texto aparecendo.

Porém, não queremos um texto - queremos que apareçam séries para poder enviar essas séries para o front-end. Vamos fazer isso em seguida.

**Jacqueline**: Essa foi o primeiro mergulho, mas vamos aprofundar em breve para passar a devolver de fato as nossas séries. Até mais!

# Para saber mais: o padrão MVC

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146871/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146871/question)

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

# Faça como eu fiz: alterando o pom.xml, criando o controlador e mapeando uma rota HTTP

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146877/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146877/question)

Agora é com você! Modifique sua aplicação de linha de comando para web e crie seu primeiro controlador com a rota `localhost:8080/series`. Para isso, você precisará fazer algumas alterações no pom.xml e criar uma nova classe `Controller`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146877/opinion)

No nosso pom.xml, precisaremos adicionar a dependência `starter-web`, deixando o arquivo da seguinte forma:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.1</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>br.com.alura</groupId>
    <artifactId>screenmatch</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>screenmatch</name>
    <description>Primeiro projeto Spring sem web</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.2</version>
        </dependency>

        <dependency>
            <groupId>com.theokanning.openai-gpt3-java</groupId>
            <artifactId>service</artifactId>
            <version>0.14.0</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

Além disso, para mapear nossa primeira rota HTTP, precisaremos de um controlador. Iremos seguir as boas práticas e criar um pacote exclusivo para os controladores, chamado `controller`. Nele, iremos criar a classe `SerieController`. Ela deve ser anotada com `@RestController`, que permite que a classe seja gerenciada pelo Spring e que ele reconheça que ela é um controlador.

Ainda no controller, criaremos o método `obterSeries()`, que deve ser anotado com `@GetMapping(“/series”)`, indicando para qual url nossa aplicação está mapeada. Esse método retornará, por enquanto, uma String: "Aqui vão ser listadas as séries". Dessa forma, a classe controller fica assim:

```kotlin
package br.com.alura.screenmatch.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SerieController {

    @GetMapping("/series")
    public String obterSeries() {
        return "Aqui vão ser listadas as séries";
    }
}
```

Por fim, para que a aplicação realmente rode na web, nossa classe `ScreenmatchApplication` deve ser modificada. Podemos duplicá-la, chamar a antiga classe de ScreenmatchApplicationSemWeb, e comentar o código dela. Iremos modificar a nova classe. Vamos retirar todas as referências à linha de comando, como a implementação do `CommandLineRunner`, a sobrescrita do método `run()` e o uso do repository. Nossa classe `ScreenmatchApplication` fica assim:

```typescript
package br.com.alura.screenmatch;

import br.com.alura.screenmatch.principal.Principal;
import br.com.alura.screenmatch.repository.SerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ScreenmatchApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScreenmatchApplication.class, args);
    }

}
```

Feito isso, realizamos o primeiro passo e já conseguimos visualizar algo acontecendo no navegador! Os próximos passos são visualizar as séries tanto em formato de JSON quanto como imagens no front-end. Vamos lá? :)

## Transcrição

**Iasmin:** O método `obterSeries()` retorna uma _string_, mas queremos que ele retorne nossas séries.

## Devolvendo séries no navegador

Dito isso, no lugar de `String` na linha 13 da classe `SerieController`, vamos colocar uma `List<>` de `Serie`. Precisamos buscar todas as séries que estão no banco de dados e retornar para a API.

> _`SerieController.java`:_

```java
@GetMapping("/series")
public List<Serie> obterSeries() {
    return "Aqui vão ser listadas as séries";
}
```

Também precisaremos importar `List`; para isso, usamos o atalho "Alt + Enter".

```java
import java.util.List;
```

O retorno não vai mais compilar, porque não retornamos mais uma string.

```java
@GetMapping("/series")
public List<Serie> obterSeries() {
    return
}
```

Agora vamos fazer algo bem parecido com o que fizemos na classe `Principal`, onde pegávamos `repository` e chamávamos os métodos dele, como `findAll()`, `findById()` e vários outros métodos.

Porém, na classe `Principal`, tínhamos uma classe que não era gerenciada pelo _Spring_. Então, tivemos que usar uma técnica para passar o `repository` em uma classe que era gerenciada pelo Spring e só depois passar na classe `Principal`.

Agora, já temos uma classe gerenciada pelo Spring. Então, podemos injetar o `repository` diretamente. Vamos digitar na linha 12 a anotação `@Autowired` para instanciar a classe, e em seguida digitamos `private SerieRepository`, que chamaremos de `repositorio`.

```java
@Autowired
private SerieRepository repositorio;
```

Com o `repository` injetado, podemos chamar os métodos dele, que são os do `repositorio`.

Existem muitos métodos, aqueles que criamos ao longo do último curso, mas vamos usar o `findAll()`, que retorna todas as séries que estão no banco.

```java
@GetMapping("/series")
public List<Serie> obterSeries() {
    return repositorio.findAll();
}
```

Feito isso, podemos conferir o que acontece. Vamos rodar a aplicação e verificar qual será o retorno da nossa API.

De volta ao arquivo `SpringmatchApplication.java`, clicaremos para executar. Nossa aplicação será inicializada e na rota "localhost:8080/series" aparece algo.

**Jacqueline:** Está diferente, com muitas séries!

**Iasmin:** Porém, está vindo a mesma série para nós. Temos somente a série "_Friends_".

**Jacqueline:** Provavelmente ocorreu um erro.

**Iasmin:** Vamos voltar no nosso log e verificar o que aconteceu. Se observarmos nossas exceções, percebemos que estourou um tanto de exceção. Há várias coisas relacionadas a um **serializador**, porque o Spring já usa o _Jackson_ para serializar os dados.

Então, ele busca as séries no banco de dados, mas ela é uma entidade. Queremos transformar isso em um **JSON**, porque é assim que as aplicações REST se comunicam. Mas ao tentar transformar em JSON, acontece um problema. Que problema é esse, Jacque?

### Referência circular

**Jacqueline:** Deve ter alguma **referência circular**.

Chegamos a ter esse tipo de erro quando resolvemos o desafio do curso anterior. Chamávamos uma série que chamava um episódio, que chamava a série que chamava o episódio, e entrava em um _loop_ infinito.

Talvez seja um pouco do que acontece nesse caso, ele tenta chamar uma coisa que chama outra que chama ela mesma, e não consegue sair disso.

**Iasmin:** Isso mesmo, porque fizemos um **mapeamento bidirecional**. Então, tínhamos uma série que tinha uma lista de episódios. Mas dentro do episódio tem uma série também. Assim, ao tentar fazer essa serialização, entra em loop e dá errado. Precisamos corrigir isso.

Poderíamos usar `@JsonIgnore`, uma anotação do próprio Jackson. Porém, não é a melhor prática. A melhor prática que podemos usar é criar uma nova classe para devolver esses dados de melhor forma.

## Conclusão

Vamos fazer isso no próximo vídeo!

**Jacqueline:** Exatamente. Vamos conceituar o famoso DTO, e entenderemos o porquê de utilizar ele, não só nesse caso da referência circular, mas em casos que não queremos entregar para a pessoa que faz a requisição, um dado sensível. Suponha que estivéssemos devolvendo produto e tivesse no banco de dados o preço de custo e quem é o fornecedor. Não queremos entregar isso.

Portanto, é muito comum que, do mesmo jeito que criamos classes específicas para ler somente o que queríamos de outra API, também criamos classes específicas para entregar para a pessoa usuária só o que queremos que ela veja da nossa aplicação. Vamos fazer isso em breve!

**Iasmin:** Até daqui a pouco!

# Para saber mais: estruturas de pacotes em projetos Java

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146884/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146884/question)

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

## Transcrição

**Iasmin:** Não queremos mais retornar uma série para a API, mas sim uma classe diferente, outro tipo de objeto. Este outro tipo de objeto é o **DTO** (_Data Transfer Object_, ou Objeto de Transferência de Dados), porque vamos utilizar uma nova classe para retornar esses outros dados para a API.

## Representando séries do banco

### Criando a classe `SerieDTO`

Como temos vários pacotes em "br.com.alura.screenmatch", vamos criar mais um **pacote**, que é o padrão que usamos no dia a dia. Vamos clicar com o botão direito sobre "br.com.alura.screenmatch" e ir até "_New > Package_". Criaremos um pacote chamado "**dto**", e dentro desse pacote, vamos criar mais uma classe seguindo o padrão `SerieDTO`.

> _`SerieDTO.java`:_

```java
package br.com.alura.screenmatch.dto;

public class SerieDTO {

}
```

Na verdade, `SerieDTO` será uma `record`, porque agora temos algo que só retornará dados, não nos preocuparemos com regras de negócio em `SerieDTO`. Então, só vamos declarar atributos, e esses atributos serão retornados. Com essa funcionalidade de `record`, de oferecer _getters_ e _setters_, já conseguimos fazer tudo o que queremos com uma `record`.

```java
// código omitido

public record SerieDTO() {

}
```

Na `SerieDTO`, vamos copiar os atributos de `Serie.java`. No nosso caso, especificamente, vamos querer retornar quase todas as informações, com exceção de `episodios`.

Porém, poderíamos ter alguma regra de negócio que não utilizasse o gênero, por exemplo, ou não quisesse retornar atores. Então, depende muito do que você como pessoa desenvolvedora está trabalhando, qual é o projeto que está executando.

Também poderíamos querer retornar um `id`, porque, às vezes, não é legal mostrar isso como está no banco. Mas, como vamos ter essa conexão com o _front-end_, que precisará do `id`, vamos deixar também.

Após copiar os atributos, vamos colá-los entre os parênteses de `SerieDTO()`. Feito isso, removeremos todos os modificadores, como o `private`.

```java
package br.com.alura.screenmatch.dto;

import br.com.alura.screenmatch.model.Categoria;

public record SerieDTO(Long id,
                       String titulo,
                       Integer totalTemporadas,
                       Double avaliacao,
                       Categoria genero,
                       String atores,
                       String poster,
                       String sinopse) {
}
```

Ao final, teremos todos os getters e setters gerados automaticamente, que é o que vamos precisar para essa classe.

### Ajustando `/series`

Vamos voltar ao arquivo `SerieController.java` e agora, em `/series`, trocaremos o retorno de `List<Serie>` para `SerieDTO`.

> _`SerieController.java`:_

```java
@GetMapping("/series")
public List<SerieDTO> obterSeries() {
    return repositorio.findAll();
}
```

Nesse momento, teremos um erro de compilação, porque retornamos `Serie`, mas queremos retornar uma conversão de `Serie` para `SerieDTO`.

Precisaremos resolver isso de uma forma que já conhecemos no primeiro curso, em que trabalhamos com _Streams_. Então, onde temos `repositorio.findAll()` na linha 20, após `findAll()`, vamos digitar `.stream()`. Dessa forma, iremos mapear.

Para cada série que temos da lista original, vamos criar uma nova `SerieDTO`. Então, vamos usar `.map()`. Para cada série `s`, teremos `new SerieDTO()`, que receberá os atributos.

Primeiro, passaremos `s.getId()`; depois `s.getTitulo()`; em seguida, `s.getTotalTemporadas()`; `s.getAvaliacao()`; `s.getGenero()`; `s.getAtores()`; `s.getPoster()`; e `s.getSinopse()`.

Feito isso, vamos coletar esses novos dados para outra lista. Então, vamos executar um `.collect()` recebendo `Collectors.toList()`. Com isso, removemos o erro de compilação.

```java
@GetMapping("/series")
public List<SerieDTO> obterSeries() {
    return repositorio.findAll()
            .stream()
            .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
            .collect(Collectors.toList());
    }
```

> **Jacqueline:** Uma coisa importante para reforçar tudo que temos falado desde o primeiro curso, é que não adianta pular as bases, como saber modelar uma classe, saber orientação a objetos, saber streams, listas. Não adianta começar direto em um curso de Spring.
> 
> A base é fundamental para você chegar aqui e ter a segurança do que está fazendo. Qualquer pessoa poderia olhar esse erro de compilação e decidir continuar retornando a entidade `Serie`. Porém, sabemos como converter de um para o outro. Então, ter a base da linguagem, do _Java_, da orientação a objeto, é fundamental antes de partir para estudar um _framework_.

### Testando o código

**Iasmin:** Agora podemos voltar à rota "localhost:8080/series" e verificar se o DTO realmente fez essa conversão e trouxe os dados necessários para nós. Para isso, vamos executar novamente o `ScreenmatchApplication.java`. Após iniciar o servidor, poderemos visualizar as mudanças.

Uma vez iniciado o servidor, vamos acessar o endereço. Teremos as séries exibidas de verdade. Temos "Friends" na parte superior, "_Game of Thrones_", "_The Boys_". Todas as séries que estavam no banco foram convertidas para esse DTO. Assim, temos uma aplicação mais segura e rodando com boas práticas.

## Conclusão

Construímos a rota da nossa API. Porém, queremos saber como isso vai acontecer no front-end.

**Jacqueline:** No próximo vídeo, podemos fazer um teste com o front-end, uma vez que o endereço "localhost:8080/serie" está funcionando, para conferir se vai aparecer alguma série nele.

**Iasmin:** Faremos isso na sequência!

## Transcrição

**Iasmin:** Temos o endereço "localhost:8080/series" funcionando e nossa rota já está configurada. Sendo assim, podemos ir ao _front-end_ e verificar o que vai acontecer. Será que se rodarmos nosso front-end agora, todas as séries já vão aparecer?

## Exibindo séries na web

**Jacqueline:** Provavelmente não, porque chamamos três endereços e só programamos um, mas podemos tentar.

**Iasmin:** Então, com o _VS Code_ aberto, vamos clicar com o botão direito sobre o arquivo `index.html` e selecionar "_Open with Live Server_" para abrir o front-end. Não aparece nada ainda.

Note que foi aberto na porta "**5501**" para nós, mas poderia abrir na porta "5500" ou em qualquer outra porta. Precisamos ter essa configuração padrão, porque como estamos trabalhando no mesmo projeto, se as coisas abrem em portas diferentes, teremos problemas.

Para configurar esse padrão, precisamos ir à parte de "_Settings_", no canto inferior esquerdo, e buscar por "live server". Às vezes, o seu Live Server pode abrir em outra porta, então é importante fazer essa alteração.

Na aba "_Live Server Config_", um pouco mais abaixo, temos a seção "_Live Server > Settings: Port_". Podemos clicar em "_Edit in settings.json_" e verificar qual porta está sendo usada. No nosso caso, está "5501", mas se estivesse em outra porta, deveríamos trocar agora para "5501".

> _`settings.json`:_

```json
{
    "liveServer.settings.port": 5501
}
```

Feito esse ajuste, vamos voltar à aplicação. Percebemos que nada aparece. O que está acontecendo? Podemos teclar "F12" para conferir. Primeiro, vamos atualizar a página para verificar as requisições.

Podemos notar que existem algumas diferenças na coluna de status. Temos o `top5` com status "404", assim como `lançamentos`, mas o `series` está com "200".

Se clicarmos em `series`, notamos que em "Cabeçalhos" temos um GET "200 OK", mas a visualização não consegue carregar os dados. Se formos no `top5`, ele também tem uma falha ao carregar, mas temos o erro "_404 Not Found_".

Para visualizar isso, podemos ir à aba "Console". Há uma quantidade de coisas vermelhas, que representam vários acessos bloqueados. Acessos bloqueados por uma política de _**CORS**_.

O que é essa política? É uma política de segurança que fala sobre como acontecem as requisições e respostas entre origens.

Se olharmos o endereço onde a aplicação front-end está subindo, identificamos ser na porta "5501". Porém, nossa aplicação _back-end_ está na porta "8080". O CORS entende que isso são origens diferentes e, por padrão, bloqueia para nós.

### Criando a classe `CorsConfiguration`

Para resolver isso, precisamos configurar na aplicação back-end quais endereços poderão acessar a API. De volta ao _IntelliJ_, vamos configurar isso com mais um pacote, com mais uma classe, que é mais um padrão que vamos utilizar.

No pacote "br.com.alura.screenmatch", criaremos um novo pacote chamado "_**config**_", porque agora queremos trabalhar com configurações da nossa API. Dentro de "config", vamos configurar exatamente como o CORS funciona. Por isso, criaremos uma classe chamada `CorsConfiguration`.

Para essa classe, vamos apenas copiar e colar o código abaixo.

> _`CorsConfiguration.java`:_

```java
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

Vamos analisar o código rapidamente. Temos um `@Configuration` para indicar para o _Spring_ que essa é uma **classe de configuração**. Então, essa é mais uma classe que o Spring está gerenciando para nós.

Essa classe vai implementar a interface `WebMvcConfigurer`, pois como falamos anteriormente, estamos trabalhando com o padrão **MVC**. Precisamos falar como essa comunicação e como o mapeamento de CORS acontecem. Depois, sobrescrevemos o método `addCorsMappings()` e adicionamos todas as URLs que podem acessar o back-end.

Como modificamos, vamos utilizar a porta "5501", que está no endereço "127.0.0.1:5501". Além disso, também configuramos os métodos, isto é, quais tipos de métodos podem acessar o back-end. Usamos `GET`, `POST`, `PUT`, `DELETE`, entre outros. Tudo que quisermos utilizar no front-end, conseguiremos usar através desses métodos nessa origem, que é "5501".

### Testando o código

Agora que adicionamos a classe `CorsConfiguration`, podemos rodar a aplicação de novo e verificar se o erro será corrigido. Então, no arquivo `ScreenmatchApplication.java`, vamos clicar para rodar a aplicação novamente e observar o que será devolvido para nós no front-end.

No navegador, ao atualizar o front-end, já sumiu uma quantidade de coisas. Continuamos tendo os erros "404" para `/lancamentos`, porque não mapeamos essas rotas ainda. Porém, observando `/series`, ele já funciona.

Se formos na aba "Rede", temos as URLs `lancamentos`, `series`, e `top5`. Podemos clicar em `series`, e encontraremos o status "200 OK". Na aba "Visualização", temos uma visualização dos dados, como eles chegam para o front-end.

Temos o `id` 0, que é a série "_Friends_", `id` 1, que é "_The Office_", e assim por diante. Repare que chega para nós em formato JSON, porque é justamente esse o tipo de comunicação que acontece quando trabalhamos com uma API REST. Então, ele vem com todos os dados que estão serializados com o _Jackson_ da forma que o Spring fez para nós.

## Conclusão

**Jacqueline:** Muito bom, Iasmin. Agora falta corrigirmos as outras URLs para visualizar nosso front-end completo, igual mostramos no início. No próximo vídeo, mostraremos uma maneira de evitar parar a aplicação toda hora.

**Iasmin:** Boa ideia. Não queremos rodar isso toda vez, pois dá bastante trabalho!
# Código da classe CorsConfiguration

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146887/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146887/question)

No vídeo anterior, utilizamos a classe `CorsConfiguration` para lidar com o erro de CORS. Copie o código da classe e utilize na sua aplicação com a gente!

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

# Para saber mais: CORS

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146888/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146888/question)

Durante a aula, conversamos sobre CORS. Caso você queira se aprofundar mais sobre esse assunto, recomendamos a leitura do artigo [O que é CORS e como resolver um erro de Cross-Origin Resource Sharing (CORS)?](https://www.alura.com.br/artigos/como-resolver-erro-de-cross-origin-resource-sharing)

Bom mergulho!

## Transcrição

**Iasmin:** Queremos facilitar o nosso desenvolvimento. A cada atualização do nosso projeto, desejamos que o _build_ dele seja feito automaticamente. Então, nós não queremos mais pausar e reiniciar o projeto.

## Configurando o _Live Reload_

O _Spring_ é muito eficaz e já oferece uma função para nós, o _**DevTools**_, que vai nos auxiliar exatamente com isso. Para usar o DevTools no nosso projeto, podemos utilizar uma dependência, que vamos copiar e colar no código do arquivo `pom.xml`.

> _`pom.xml`:_

```xml
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
</dependency>
```

Feito isso, vamos rodar o _Maven_ novamente. Em seguida, precisaremos configurar também o _IntelliJ_, porque o projeto já está configurado para utilizar o DevTools, mas devemos ativar algumas permissões no IntelliJ.

Então, vamos em "_File > Settings… > Build, Execution, Deployment > Compiler_". Marcaremos a opção "_Build project automatically_". Além dessa opção, precisaremos de mais uma. Primeiro, vamos aplicar a alteração anterior clicando em "_Apply_" no canto inferior direito.

Em "_Advanced Settings_", último item do menu lateral esquerdo, vamos marcar a opção "_Allow auto-make to start even if developed application is currently running_", que é a segunda opção da lista. Feito isso, podemos aplicar e clicar em "OK".

Agora vamos reiniciar o projeto para testar essa funcionalidade.

### Testando o código

Deixaremos o projeto rodando e vamos criar mais uma URL para verificar se o _**Live Reload**_ está funcionando. Então, no arquivo `SerieController.java`, criaremos mais um mapeamento, isto é, mais um `@GetMapping`, o qual será `/inicio`.

Na linha abaixo, vamos adicionar `public String retornarInicio()`. Esse método não terá parâmetros. Só precisaremos retornar uma mensagem "Bem-vindo ao Screenmatch!".

> _`SerieController.java`:_

```java
@GetMapping("/inicio")
public String retornarInicio() {
    return "Bem-vindo ao Screenmatch!";
}
```

Feito isso, podemos analisar no terminal a aba "_Run_". Foi inicializado o projeto uma vez e reiniciado. Vamos verificar se a URL está funcionando.

Se formos ao navegador, no endereço "localhost:8080/inicio", notamos que já apareceu a URL. Isso sem precisarmos pausar e reiniciar o projeto. O DevTools Live Reload funcionou conforme esperado.

> Podemos voltar ao projeto e apagar a mudança que fizemos anteriormente em `SerieController.java`, porque não vamos utilizar essa URL `/inicio`. Usaremos apenas a `/series` e as outras URLs que construirmos ao longo das próximas aulas.

## Conclusão

Estamos com tudo preparado para continuar na nossa evolução do Screenmatch!

**Jacqueline:** Exatamente! Só para confirmar, ao atualizar novamente a página "localhost:8080/inicio" no navegador, após apagar as alterações do código, imediatamente o endereço fica indisponível.

Isso nos proporciona um grande ganho de performance. Quando trabalhamos com ferramentas que nos auxiliam a testar rapidamente, erramos mais rápido e corrigimos mais rápido. Então, acelera muito o nosso desenvolvimento.

Agora chegou a hora de complementar e fazer as outras URLs. **Vamos lá?**

# Faça como eu fiz: conectando back-end e front-end da nossa aplicação

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146893/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146893/question)

Agora é com você! Devolva todas as séries do banco de dados no navegador, utilizando o método `obterSeries()` do controller. Também configure sua aplicação para conectá-la ao front-end, lidando com o CORS. Lembre-se de usar as boas práticas com a criação de um DTO para séries. Além disso, inclua o devtools na sua aplicação para utilizar o Live Reload.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146893/opinion)

Para seguir as boas práticas e lidar com nossos dados, iremos criar uma classe `SerieDTO`, em um novo pacote chamado `dto`. Essa classe é uma record, já que ela servirá apenas para lidar com dados da nossa aplicação.

```typescript
package br.com.alura.screenmatch.dto;

import br.com.alura.screenmatch.model.Categoria;

public record SerieDTO(Long id,
                       String titulo,
                       Integer totalTemporadas,
                       Double avaliacao,
                       Categoria genero,
                       String atores,
                       String poster,
                       String sinopse) {
}
```

Agora, o método `obterSeries()` vai ter como retorno uma lista de SerieDTO. Para isso, precisaremos injetar o repository no controller e usar o método `findAll()` para buscar todas as séries do banco. Feito isso, realizamos a conversão de lista de séries para lista de SerieDTO. Com esses passos, nosso controller fica da seguinte forma:

```java
package br.com.alura.screenmatch.controller;

import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.model.Serie;
import br.com.alura.screenmatch.repository.SerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class SerieController {

    @Autowired
    private SerieRepository repositorio;

    @GetMapping("/series")
    public List<SerieDTO> obterSeries() {
        return repositorio.findAll()
                .stream()
                .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
                .collect(Collectors.toList());
    }
}
```

Ao rodarmos nossa aplicação, os dados serão retornados corretamente no navegador. Porém, ao tentar conectar ao front-end, obtemos um erro de CORS. Para lidar com esse erro, precisamos criar uma classe de configuração, chamada `CorsConfiguration`, em um novo pacote, que iremos chamar de `config`. O código da classe segue abaixo:

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

Lembre-se de adicionar, no método `allowedOrigins`, o endereço da porta em que seu front está rodando. Se ela for diferente de 5501, é preciso trocar no método para funcionar corretamente!

Com todas essas configurações, ao conectar ao front-end, se digitar F12, selecionar “Rede” e recarregar a página, poderá ver o JSON das séries aparecendo. Agora iremos trabalhar nas outras URLs da home para ver o front-end funcionando!

Lembre-se também de adicionar a dependência do Devtools ao `pom.xml` e seguir o passo a passo do vídeo 4 para ativar a reinicialização automática do projeto (Live Reload). Logo, o arquivo final fica assim:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.1</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>br.com.alura</groupId>
    <artifactId>screenmatch</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>screenmatch</name>
    <description>Primeiro projeto Spring sem web</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.2</version>
        </dependency>

        <dependency>
            <groupId>com.theokanning.openai-gpt3-java</groupId>
            <artifactId>service</artifactId>
            <version>0.14.0</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

## Transcrição

**Jacqueline:** Vamos continuar o curso e criar os outros _endpoints_ que aplicação Front-End precisa consumir.

## Criando mais _endpoints_

Considerando que focamos sempre nas boas práticas, performance e agilidade no processo de desenvolvimento, já observamos que o _Spring_ trabalha com uma estratégia de _**injeção de dependências**_.

Essa injeção de dependências consiste no próprio _Spring_ gerenciar classes e instâncias e garantir que elas sejam criadas, destruídas ou mantidas no momento em que há necessidade de estarem com esse estado.

Além das anotações que já utilizamos, como `@RestController` e `@Repository`, temos outra anotação, a `@Service`. No desenvolvimento da aplicação, nós criamos pacote "service" que corresponde a classes de serviços que auxiliam na implementação da regra de negócio do _ScreenMatch_. Ele é um pacote específico para isso.

Quando trabalhamos com aplicação web, também costumamos fazer isso, para _**desacoplar o repositório do controlador**_.

Vamos criar uma classe `SerieService` e passar algumas regras para lá. A transformação de strings em `obterSeries()`, por exemplo, deve ser feita nessa classe de serviço. O controlador tem o papel de ser o intermediário, ele recebe uma requisição, delega para alguém e retorna a resposta.

**Iasmin:** O controlador é responsável por lidar com as coisas que acontecem no navegador. Se colocamos muitas regras no controlador, ele acaba tendo várias responsabilidades. Para evitar esse problema, precisamos criar uma classe `Service` para tratar dessas regras de negócio.

**Jacqueline:** Vamos acessar o explorador lateral, clicar no pacote "service" e selecionar "New > Java Class" para criar a classe que nomearemos como `SerieService` em seu interior.

Ao acessar o interior dessa classe, precisamos anotá-la com `@Service`, para que o _Spring_ entenda que é uma classe que ele vai gerenciar, que corresponde, geralmente, a serviços, r que vai ter a lógica de negócios do aplicativo.

> **Dica:** Normalmente, o serviço já entende que faremos o acesso a bancos de dados. Portanto, essa é uma classe adequada para utilizar ao lidar com transações.

```js
package br.com.alura.screenmatch.service;

import org.springframework.stereotype.Service;

@Service
public class SerieService {
}
```

O que vai ter no interior dessa classe de serviço? Justamente o que tinha na `Controller`. Vamos injetar um repositório para que ele pegue as informações no banco e devolva para o controlador.

Voltando ao arquivo, `SerieController.java`, vamos remover as duas linhas de `@Autowired` abaixo e adicioná-la entre as chaves da `SerieService` para injetar o repositório.

> **`SerieController.java`**
> 
> ```js
> @Autowired
> private SerieRepository repositorio;
> ```

> **`SerieService.java`**
> 
> ```js
> @Service
> public class SerieService {
>     @Autowired
>     private SerieRepository repositorio;
> }
> ```

Abaixo dessa anotação, vamos criar um método `public obterTodasAsSeries()` que vai devolver um `List` de `SerieDTO`, exatamente como estávamos fazendo no controlador.

```js
@Service
public class SerieService {
    @Autowired
    private SerieRepository repositorio;
    
    public List<SerieDTO> obterTodasAsSeries() {
        
    }
}
```

Vamos importar o `List`, gerando o código abaixo junto aos outros `import`s.

```js
import java.util.List;
```

Vamos implementar o método `obterTodasAsSeries()` exatamente como estava no controlador. Acessando `SerieController.java`, vamos recortar todo o conteúdo de `return repositorio.findAll()` do interior da `obterSeries()`.

Voltando ao `SerieService.java`, vamos colar esse conteúdo entre as chaves de `obterTodasAsSeries()`.

```js
@Service
public class SerieService {
    @Autowired
    private SerieRepository repositorio;
    
    public List<SerieDTO> obterTodasAsSeries() {
        return repositorio.findAll()
            .stream()
            .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
            .collect(Collectors.toList());
        }
    }
}
```

Voltando ao `SerieController.java`, na linha em que injetávamos o repositório, vamos injetar a classe de serviço. Então, vamos fazer um `@Autowired` e um `private SerieService` e chamar de `servico`.

Abaixo desse trecho, no `@GetMapping`, quando chamarmos a URL `"/series"` e chegar nesse método, o `return` será simplesmente `servico.obterTodasAsSeries()`.

```js
public class SerieController {

    @Autowired
    private SerieService servico;

    @GetMapping("/series")
    public List<SerieDTO> obterSeries() {
        return servico.obterTodasAsSeries();
    }
}
```

Com isso, o método do controlador está limpo e possui apenas uma linha. Todos aqueles `import`s no topo do arquivo, como `Serie` e `SerieRepository`, não precisamos mais. Vamos removê-los pressionando "Ctrl+Alt+O", mantendo somente os `import`s sendo utilizados.

```js
package br.com.alura.screenmatch.controller;

import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.service.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
```

A partir de agora, não chamaremos mais o repositório diretamente no controlador.

Uma das premissas da orientação a objetos é o _**baixo acoplamento e alta coesão**_. Quanto menos classes estivermos importando, mais coesa será a nossa classe.

Após executar a aplicação com "Shift+F10", o terminal será aberto na parte inferior do _VS Code_. Dessa vez, vamos abrir no _Postman_ para visualizar.

No campo de busca, vamos chamar "[http://localhost/series](http://localhost/series)", e ele vai trazer, através da classe de serviço, todas as séries que foram cadastradas.

```plaintext
http://localhost:8080/series
```

**Retorno do _Postman_:**

```perl
[
    {
        "id": 1,
        "titulo: "Gilmore Girls",
        "totalTemporadas": 7,
        "avaliacab": 8.2,
        "genero": "COMEDIA",
        "atores": "Lauren Graham, Alexis Bledel, Keiko Agena",
        "poster": "https://m.media-amazon.com/images/M/MV&BMTQ3NDA1ZWVtYjBxMC@GNmJjLWI1NjgtYjg2N0h=MTY2YWQXkEyXkFqc@deQXVyzA5Njyje._V1_SX300.jpg".
        "sinopse": "Uma comédia dramática centrada na relação entre uma mão solteira de trinta e poucos anos e sua filha adolescente morando em Stars Hollow, Connecticut."
    }
    {
        "id": 2,
        "titulo": "Game of Thrones",
        "totalTemporadas": 8,
        "avaliacao: 9.2,
        "genezo": "ACAO",
        "atores: "Emilia Clarke, Peter Dinklage, Kit Harington",
        "poster": "https://m.media-amazon.com/images/M/MV5BN212Y2810TQ1NGZmM1@@NDISLTExMzMENZEzZjA1Njh10GMxXkEyXkFqcdeQXVyNjANDUXODIC._V1_SX300.jpg".
        "sinopse: "Nove familias nobres lutam pelo controle sobre as terras de Westeros, enquanto un antigo inimigo retorna após ficar adormecido por um milênio."
    }
    // Retorno omitido
]
```

Recuperamos as séries com um controlador da forma mais enxuta possível. Quanto menor o método, ou seja, quanto menos linhas ele possui, mais legível e enxuto ele fica, e mais definida se torna a responsabilidade dele.

Em breve, vamos criar os outros métodos com outros _endpoints_, já utilizando a classe de serviço.

**Iasmin:** A classe ficou limpa, bem definida e seguindo as boas práticas. Nos vemos na próxima aula, continuando com todo esse conteúdo.

# Para saber mais: anotações do Spring Boot

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146904/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146904/question)

O Spring Framework oferece uma ampla gama de anotações para desenvolvimento de aplicações web. Aqui estão algumas das anotações mais comuns e importantes usadas no Spring para aplicações web:

- @Controller: Usada para marcar uma classe como um controlador no padrão MVC (Model-View-Controller). Essa anotação é usada para receber requisições e manipular lógica de negócios.
- @RestController: Uma variação de @Controller, específica para APIs RESTful. Combina as anotações @Controller e @ResponseBody, indicando que cada método retorna um objeto serializado diretamente em JSON ou XML como resposta.
- @RequestMapping: Define mapeamentos entre URLs e métodos de controlador. Especifica as URLs para as quais um método do controlador deve responder e os métodos HTTP correspondentes (GET, POST, PUT, DELETE etc.).
- @GetMapping, @PostMapping, @PutMapping, @DeleteMapping: Atalhos para as operações HTTP GET, POST, PUT e DELETE, respectivamente, em métodos de controlador.
- @RequestParam: Usada para mapear os parâmetros de requisição HTTP para os parâmetros do método do controlador.
- @PathVariable: Usada para vincular variáveis de template de URL a parâmetros de métodos de controlador.
- @RequestBody: Utilizada para mapear o corpo da requisição HTTP para um objeto de entrada do método do controlador.
- @ResponseBody: Indica que o valor retornado pelo método do controlador deve ser usado diretamente como corpo da resposta HTTP.
- @Valid e @Validated: Utilizadas para ativar a validação de entrada no lado do servidor. Geralmente combinadas com anotações de validação, como @NotNull, @Size, @Min, @Max, entre outras.
- @CrossOrigin: Utilizada para configurar permissões de acesso a recursos de diferentes origens (CORS - Cross-Origin Resource Sharing).

Estas são algumas das anotações mais usadas no desenvolvimento de aplicações web com Spring. O uso delas pode variar dependendo das necessidades específicas de sua aplicação e das versões do Spring utilizadas.
## Transcrição

**Jacqueline:** Temos o endpoint "/series", que já está retornando todas as séries, porém o Front-End precisa de três _endpoints_ específicos: "/series", "/lancamentos" e "/top5". Para esses casos, também vamos usar requisições do tipo _GET_ para obter uma lista de séries.

## Implementando o _endpoint_ "/top5"

Começaremos pelo "/top5". No arquivo `SerieController.java`, abaixo do `obterSeries()`, vamos fazer um `@GetMapping()` da mesma maneira que fizemos para o "/series". A definição entre parênteses ficará assim: `"/series/top5"`. Ela especifica que, ao digitar "/top5", o programa direcionará ao método específico, e não ao `obterSeries()`.

Esse "/top5" também retornará uma lista de `SerieDTO`. Então, vamos colocar novamente algo muito parecido com o anterior: `public List<SerieDTO>`, e será chamado de `obterTop5Series()`. Seguindo a prática do serviço, o retorno será: `return servico.obterTop5Series()`.

```js
public class SerieController {

// Código omitido

    @GetMapping("/top5")
    public List<SerieDTO> obterTop5Series() {
        return servico.obterTop5Series();
    }
```

Contudo, temos um erro porque ainda não implementamos o `obterTop5Series()`. Posicionando o cursor em cima dele, vamos clicar na dica da IDE exibida na aba suspensa e selecionar "_Create method 'obterTop5Series' in 'SerieService'_" (criar método `obterTop5Series` na classe `SerieService`). Isso nos direcionará para o arquivo `SerieService.java`, no qual o método foi criado abaixo de `obterTodasAsSeries()`.

```java
@Service
public class SerieService {

    @Autowired
    private SerieRepository repositorio;

    public List<SerieDTO> obterTodasAsSeries() {
        return repositorio.findAll()
            .stream()
            .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
            .collect(Collectors.toList());
    }

    public List<SerieDTO> obterTop5Series() {
    
    }
    // Código omitido
}
```

Vamos recolher a aba do explorador lateral com "Alt+1" para obter mais espaço de visualização.

Como será o retorno desse método? Será muito parecido com o anterior. Vamos copiar o conteúdo entre as chaves de `obterTodasAsSeries()` e colar entre as chaves do método novo.

```java
public List<SerieDTO> obterTop5Series() {
    return repositorio.findAll()
        .stream()
        .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
        .collect(Collectors.toList());
}
```

Mas o que ele fará? Ele não fará um `findAll()`, mas um `find()` das séries do Top 5, ordenadas pela avaliação de forma decrescente, porque queremos do maior para o menor.

Nós temos isso implementado no projeto anterior, no qual criamos vários métodos no repositório.

Vamos acessar o arquivo `SerieRepository.java`, no qual temos métodos como o `findByTituloContainingIgnoreCase()`. Entre eles, temos o `findTop5ByOrderByAvaliacaoDesc()`. É esse que vamos chamar.

Voltando ao arquivo `SerieService.java`, em vez de `findAll()`, adicionaremos o `findTop5ByOrderByAvaliacaoDesc()`.

```java
public List<SerieDTO> obterTop5Series() {
    return repositorio.findTop5ByOrderByAvaliacaoDesc()
        .stream()
        .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
        .collect(Collectors.toList());
}
```

Vamos testar se `obterTop5Series()` está funcionando. Vamos ao _Postman_, no qual já temos todas as séries localizadas. No campo de URL, vamos colocar `/series/top5`.

```plaintext
http://localhost:8080/series/top5
```

Ao pressionar o botão "Send", o "/top5" exibirá as melhores séries: _Game of Thrones_, que é 9.2, _Seinfeld_, com 9, _Friends_, com 10, _Euforia_, com 8.3 e _Gilmore Girls_ com 7.

Então funcionou. Com o método que já tínhamos escrito no curso anterior, conseguimos rapidamente buscar as melhores 5 séries cadastradas, ou seja, as 5 melhores avaliações no banco de dados.

No entanto, se observarmos o código do arquivo `SerieService.java`, estamos repetindo o código. Temos as três linhas abaixo se repetindo em `obterTodasAsSeries()` e em `obterTop5Series()`.

```plaintext
    .stream()
    .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
    .collect(Collectors.toList());
```

Esse trecho é um candidato a obter um método exclusivo para realizar sua tarefa. Não vamos ficar copiando, colando e mudando a forma de busca.

Podemos ter um método específico para pegar, converter de `Serie` para `SerieDTO` e enviar para uma lista. É o que vamos fazer aqui.

Abaixo das chaves de `obterTop5Series()`, vamos criar um método privado, porque será usado somente nesta classe. Será um `private` que vamos chamar de, por exemplo, `converteDados()`. Ele retornará uma lista de `SerieDTO`. Entre parênteses, ele receberá uma lista de `Serie` que vamos chamar de `series`.

```js
private List<SerieDTO> converteDados(List<Serie> series) {

}
```

Por fim, vamos importar o `Serie` pressionando "Alt+Enter" e clicando em "_Import class_", gerando o código abaixo junto aos outros `import`s.

```js
import br.com.alura.screenmatch.model.Serie;
```

Esse novo método fará exatamente o código repetido, mas com as próprias `series`. Portanto, entre as chaves de `converteDados()`, vamos adicionar um `return series`. Em seguida, vamos recortar o código repetido das chaves de `obterTop5Series()`, a partir da linha `.stream()`, e colar à direita de `return series`.

```js
public List<SerieDTO> obterTop5Series() {
    return repositorio.findTop5ByOrderByAvaliacaoDesc()
    
}
    
    private List<SerieDTO> converteDados(List<Serie> series) {
        return series.stream()
            .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
            .collect(Collectors.toList());
    }
```

Com isso, ele fará `Series.stream().map().collect()` e vai devolver a lista.

Esse método `converteDados()` vai receber uma lista de objetos do tipo `Serie` e transformá-la numa lista de objetos do tipo `SerieDTO`. Então, no método `obterTop5Series()`, quando fazemos o `return`, vamos mandar ele fazer um `return converteDados()` do que o repositório enviar para nós — ou seja, envolveremos o `repositorio.findTop5ByOrderByAvaliacaoDesc()` com os parênteses do `converteDados()`.

```js
public List<SerieDTO> obterTop5Series() {
    return converteDados(repositorio.findTop5ByOrderByAvaliacaoDesc());
    
}
```

Com isso, teremos novamente métodos de linha única.

Em `obterTop5Series()`, estamos dizendo "retorne para nós a conversão do que esse repositório te devolver". Ou seja, "busque o que o repositório te entregou e converta para nós". Esse resultado é o que vamos devolver para o controlador.

Isso torna o código mais limpo e coeso. Se, por exemplo, criássemos mais um parâmetro na `SerieDTO`, não teríamos que realizar alterações em inúmeros métodos. Basta acessar o `converteDados()` e alterá-lo.

Poderíamos passar essa responsabilidade, por exemplo, para o próprio `SerieDTO`? Poderíamos. Esse assunto tem vários questionamentos. Como estamos numa classe específica de serviço, pode ser feito por aqui.

Acessando o método `obterTodasAsSeries()` faremos o mesmo. Vamos remover as três linhas de código repetido, e em seu lugar, vamos chamar `return converteDados(repositorio.findAll())`.

```js
public List<SerieDTO> obterTodasAsSeries() {
        return converteDados(repositorio.findAll());
    }
```

**Iasmin:** É realmente muito mais elegante fazer assim, certo? Fica mais bonito e melhor para fazermos a manutenção. Ao refletir sobre extrair coisas repetidas, podemos ver que lá no controlador, repetimos um "/series", não foi?

**Jacqueline:** Sim. Ao acessar o arquivo `SerieController.java`, veremos que nos métodos `obterSeries()` e `obterTop5Series()` ainda estamos usando, "/series" e "/series/top5".

**Iasmin:** Existe outra anotação que podemos usar: o `@RequestMapping`, para não ficar repetindo toda vez esse "/series" e criar uma home com esse endereço.

**Jacqueline:** Exatamente. Quando temos certeza que todos os nossos _endpoints_ vão partir de um substantivo comum — "/series", por exemplo — e só vai mudar a variação que vem depois, podemos fazer justamente o que a Iasmin comentou.

Podemos incluir acima da classe `SerieController` uma anotação chamada `@RequestMapping()` e colocar "/series" entre os seus parênteses.

```js
@RestController
@RequestMapping("/series")
public class SerieController {

// Código omitido
}
```

Dessa forma, não precisamos ter eles novamente nos métodos internos. Vamos esvaziar o `@GetMapping` de `obterSeries()`, removendo o conteúdo entre parênteses e os próprios parênteses. Já o `@GetMapping` de `obterTop5Series()` ficará apenas com o sufixo "/top5".

```js
@RestController
@RequestMapping("/series")
public class SerieController {

   @Autowired
   private SerieService servico;

    @GetMapping
    public List<SerieDTO> obterSeries() {
       return servico.obterTodasAsSeries();
    }

    @GetMapping("/top5")
    public List<SerieDTO> obterTop5Series() {
        return servico.obterTop5Series();
    }
```

E se formos ao _Postman_, para testar, veremos que vai tudo continuar funcionando perfeitamente. Se fizermos um "Send" em "/series/top5" novamente, ele vai continuar trazendo o retorno. No "/series" também. A diferença é que o controlador está mais limpo, não precisamos ficar repetindo o trecho "/series".

Esses pequenos ajustes que vamos fazendo são excelentes para que o código fique mais limpo, legível e mais fácil de dar manutenção.

## Observando o Front-End

Como estávamos focando muito no Front-End, vamos dar uma olhada, novamente, no _ScreenMatch_ do Front-End. Já incluímos "/top5" e "/series". Se voltarmos ao navegador e atualizarmos a aplicação, observaremos que agora, diferentemente de quando implementamos os "/series", ele apareceu os "/top5".

Por que será que agora apareceu o "/top5"? Tínhamos três com erro, agora só temos um com erro e ele mostrou, mas mostrou o "/top5" e não mostrou os outros. O que está acontecendo aqui?

Achamos interessante mostrar isso para quem estiver tendo essa experiência _Full Stack_ conosco. No _VS Code_, todo esse Front-End está sendo implementado com HTML, CSS e JavaScript. Então, temos lógicas e regras de negócio JavaScript envolvidas.

Se olharmos dentro da pasta "scripts", no projeto Front-End, por meio do explorador lateral, veremos um arquivo `index.js`. Ele representa a forma e que as coisas acontecem, ou seja, a ordem que elas vão sendo chamadas quando carregamos a página.

Em seu interior, dentro da linha `criarListaFilmes(elementos.top5, data[0])`, temos a forma com que ele vai chamando as URLs para buscar as séries. O primeiro que ele busca é o "/top5".

```js
.then(data => {
criarListaFilmes(elementos.top5, data[0]);
criarListaFilmes(elementos.lancamentos, data[1]);
criarListaFilmes(elementos.series, data[2]
})
```

Ele conseguiu fazer esse ser bem-sucedido e só o da linha de baixo que começou a dar erro. Por isso que dessa vez ele mostrou e da outra vez ele não mostrou. Da outra vez tentamos fazer logo o último, que é o "/series". Nesse caso, ele deu erro imediatamente, no "/top5", e não mostrou nada.

Mas, dessa vez, o "/top5" está funcionando. Então, ele conseguiu chegar nessa linha.

Se essa é a sua primeira experiência _Full Stack_, observe que _**temos lógicas, regras de negócios e organização dos dois lados, tanto no Back-End quanto no Front-End**_. É importante saber olhar, entender e aos poucos identificar: "Estou com um erro, será que é no Back-End? Será que é no Front-End?" para poder navegar e entender um pouco do que está acontecendo.

Mostramos esse detalhe como uma curiosidade para vermos que, quando implementamos o "/top5", ele passa a mostrar algumas coisas lá no Front-End.

Daqui a pouco vamos implementar também os "/lancamentos" para poder ver tudo lá.

**Iasmin:** Isso mesmo. Até daqui a pouco!

# Método específico para converter de Serie para SerieDTO

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146905/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146905/question)

No vídeo anterior, vimos que em dois métodos houve necessidade de receber uma lista de objetos do tipo `Serie` e transformá-los numa lista de objetos do tipo `SerieDTO`. Para esses casos, é sempre recomendável criar métodos específicos, a fim de evitar redundância de código na classe. Dessa mesma forma, se houver necessidade de alteração, a mesma poderá ser feita num único ponto.

Veja abaixo como ficou nosso método para transformar essa lista:

```scss
 private List<SerieDTO> converteDados(List<Serie> series) {
      return series.stream()
              .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
              .collect(Collectors.toList());
    }
```

## Transcrição

**Jacqueline:** Temos os endpoints `/series` e `/series/top5` implementados. Precisamos listar os últimos lançamentos para a página principal do Front-End. Como estamos trabalhando exclusivamente com séries, teremos que buscar os últimos lançamentos baseados na data de lançamento do episódio.

## Implementando o _endpoint_ `/lancamentos`

**Iasmin:** Quando estávamos trabalhando com dados da API do _OMDB_, não coletamos a data de lançamento da série. Na verdade, esse atributo nem existe lá. Portanto, precisaremos filtrar isso de alguma forma, mas sabemos como fazer isso. Já conhecemos como podemos trabalhar com o `Repository` e obter os dados do banco.

**Jacqueline:** Por meio do `DadosEpisodio`, temos a data de lançamento. Portanto, quando trabalhamos com o `SerieRepository`, sempre retornaremos uma lista de séries ou de episódios. Nesse caso, programaremos nossas _Derived Queries_ (Consultas Derivadas) para buscar pelos episódios da mesma forma feita anteriormente.

No final do arquivo `SerieRepository.java`, entre as chaves de `SerieRepository`, precisaremos retornar uma lista de séries (`List<Serie>`), porque o repositório trabalha persistindo e manipulando a entidade `Serie`, não a `SerieDTO`. Faremos essa busca sempre pensando nos nomes dos atributos que temos na classe `Serie`.

Na pasta "model", o modelo `Serie` tem o atributo `episodios` (uma lista de episódios) e o modelo `Episodio` tem a `dataLancamento`. Precisaremos fazer um `findBy()` juntando o nome desses atributos.

Voltando ao `SerieRepository`, à direita de `List<Serie>`, adicionaremos os seguintes elementos:

- `findTop5`, pois também queremos os cinco últimos lançamentos, do mesmo jeito que usamos para a avaliação;
- `ByOrder`, porque vamos buscar por esse item e ordenar;
- `Episodios`, que é o nome do atributo `episodios` da classe `Serie` e
- `DataLancamento`, que é o atributo dentro de `Episodio`.
- `Desc`, pois queremos ordenar dos mais novos para os mais antigos (ordem decrescente).

Lembrando que devemos utilizar o Camel Case, com iniciais maiúsculas a partir da segunda palavra. O resultado do comando pode ser visto abaixo.

```js
public interface SerieRepository extends JpaRepository<Serie, Long> {

    // Código omitido
    
    List<Serie> findTop5ByOrderByEpisodiosDataLancamentoDesc();
}
```

Apesar de ficar uma linha grande e podermos ter feito diferente (com _Query_, por exemplo), isso atenderá nossa necessidade de buscar os lançamentos.

Acessando o arquivo `SerieController.java`, abaixo das chaves de `obterTop5Series()` criaremos um método `GetMapping` para obter os lançamentos. Faremos `@GetMapping`, passando o sufixo `/lançamentos` entre parênteses e aspas duplas. Esse método será `public`, será uma `List<SerieDTO>` e se chamará `obterLancamentos()`. Entre suas chaves, ele chamará o serviço com `return servico.obterLancamentos()`.

```js
public class SerieController {

    // Código omitido
    
    @GetMapping("/lancamentos")
    public List<SerieDTO> obterLancamentos() {
        return servico.obterLancamentos();
    }
}
```

Precisamos implementar o método `obterLancamentos()` no serviço. Clicaremos na lâmpada vermelha à esquerda da linha `return servico.obterLancamentos()` e clicaremos em "_Create method reference_" para solicitar a implementação em `SerieService.java`.

Seremos direcionados para esse arquivo. Em seu interior, entre as chaves de `public List<SerieDTO> obterLancamentos()`, faremos exatamente o que fizemos nas linhas de cima. Faremos um `return`, `converteDados()`, passando o `repositorio.findTop5OrderByEpisodiosDataLancamentoDesc()`.

```csharp
public class SerieService {

    // Código omitido
    
     public List<SerieDTO> obterLancamentos() {
     return converteDados(repositorio.findTop5ByOrderByEpisodiosDataLancamentoDesc());
    }
}
```

Uma vez que otimizamos determinadas coisas, fica muito simples implementar uma nova funcionalidade. Gastamos uma única linha no controlador e no serviço, pois o que precisamos já está pronto.

Vamos salvar o código para recarregar. Vamos olhar no _Postman_ se ele vai trazer os lançamentos, e depois no Front-End para ver como que ele vai ficar.

No _Postman_, ao realizar um _Get_ em `http:localhost:8080/series/lancamentos`, ele retorna as últimas séries que tiveram episódios lançados, organizadas pela data do episódio.

Com os três _endpoints_ implementados, vamos novamente consultar o _ScreenMatch_ no navegador e ver como ele vai aparecer agora. Ao atualizar a página, teremos três seções, de cima para baixo: "Lançamentos no ScreenMatch", "Títulos populares no ScreenMatch" e todos os títulos na seção "Títulos no ScreenMatch".

O conteúdo se repete entre as seções porque temos poucas séries cadastradas. Quanto mais séries estiverem cadastradas, mais rica será a exibição, porque aparecerão coisas diferentes. Apesar das repetições, as séries são exibidas em ordens diferentes em cada seção: por lançamentos, por popularidade, e por fim, todos os títulos que cadastramos.

Nossa API já está entregando dados para o Front-End. Essa primeira parte, resolvemos. A página está trazendo as nossas séries, porém, se clicarmos em alguma das séries, o que acontece? Uma tela nova é exibida com o texto "undefined" em várias regiões.

> **undefined**
> 
> **Média de avaliações:** undefined
> 
> undefined
> 
> **Estrelando:** undefined
> 
> Escolher temporadas

Essa tela de detalhes não está resolvida. Se abrirmos a aba "Inspecionar", e acessarmos a aba secundária "Rede", veremos que ele tenta buscar pelo ID. Na aba terciária "Nome", veremos o elemento `2` em vermelho com um x à sua esquerda, indicando que ele está tentando pegar um ID 2. Na aba terciária "Cabeçalhos", à direita de "Nome", veremos como está o cabeçalho recuperado: `http://localhost:8080/series/2`.

Devido a isso, precisamos implementar a busca pelo ID para essa página de detalhes. Nela, não queremos trazer uma lista de séries ou todas as séries, queremos trazer uma única série, que é a de número 2, para exibirmos os detalhes. É o que faremos no próximo vídeo.

**Iasmin:** Vamos vivendo e encontrando _bugs_, mas vamos resolvê-los.

**Jacqueline:** Isso aí. Daqui a pouco, faremos essa página aparecer corretamente também.

#   
Para saber mais: retornando registros únicos

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146906/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146906/question)

No vídeo anterior, fizemos uma derived querie para retornar as séries mais recentes do banco, baseado nos episódios mais recentes. Apareceram 5 séries para você, ou apareceram menos registros?

Dependendo das séries que você cadastrou no banco, podem ter aparecido menos registros do que 5. Isso porque a consulta gerada pela JPA era a seguinte:

```sql
select * from series s1_0 
left join episodios e1_0 
on s1_0.id=e1_0.serie_id 
order by e1_0.data_lancamento desc fetch first 5 rows only
```

Ao executar esse código, ele pega os 5 episodios mais recentes e retorna as séries correspondentes a eles, fazendo um `left join`. Porém, se seus episódios mais recentes forem de uma única série, ele retornará apenas essa série, não trazendo 5 resultados diferentes.

No desenvolvimento colaborativo, é muito comum encontrar problemas ao rodar códigos em máquinas diferentes, com registros diferentes. Por isso é importante que sejamos cuidadosos ao testar cada funcionalidade nova.

Para resolver esse problema, precisaremos recorrer às consultas JPQL, usando um inner join, diferente do left join, agrupando os dados por série, a fim de trazer 5 registros diferentes do banco. Abordaremos em vídeo sobre essa correção, mas caso você queira se adiantar, utilize o código a seguir no lugar da derived querie `findTop5ByOrderByEpisodiosDataLancamentoDesc()`.

```less
@Query("SELECT s FROM Serie s " +
            "JOIN s.episodios e " +
            "GROUP BY s " +
            "ORDER BY MAX(e.dataLancamento) DESC LIMIT 5")
    List<Serie> encontrarEpisodiosMaisRecentes();
```

Dessa forma, garantimos que estarão sempre vindo 5 séries distintas, baseado nas datas de lançamento dos episódios.

## Transcrição

**Jacqueline:** Identificamos que no controlador precisamos ter mais um endpoint `/series/id`, onde recuperamos somente a série específica para exibir os detalhes.

Então, no `SerieController.java`, criaremos um novo método, que também será obtido com `GetMapping`. Lembrando que temos cursos na formação Spring, onde exploramos o `POST`, `PUT` e o `DELETE`. Neste curso, mostraremos apenas `GetMapping`, que serve para **obter informações** e não para cadastrar ou alterar.

# Retornando os detalhes da série

Sendo assim, na linha 34, escrevemos `@GetMapping()` para buscar apenas uma série. Nos parênteses, entre aspas duplas, precisamos passar o caminho "localhost:8080/series/" seguido do `id` para carregar somente a série escolhida. Quando precisamos passar um parâmetro na URL que vai variar, adicionamos chaves `{}`, dentro passamos `id`. Dessa forma:

```kotlin
@GetMapping("/{id}")
```

Nosso método, nesse caso, será `public`. Porém, ao invés de devolver uma lista de séries, devolverá somente uma `SerieDTO`, então escrevemos isso, seguido de `obterPorId()`.

Porém, esse método, diferente dos outros, precisa de um parâmetro. Então, nos parênteses passamos `Long id`. Mas, para identificarmos que isso está sendo passado no cabeçalho do endpoint, precisamos de uma notação antes de `Long`. Escrevemos `@PathVariable`, para sinalizar ao Spring que o parâmetro que representa esse `id` chegará no cabeçalho da URL.

Para fazermos a implementação, na linha abaixo, escrevemos `return` seguido de quem buscará a informação, nesse caso `servico.obterPorId()`, passando `id`.

```less
//Código omitido

@GetMapping("/{id}")
public SerieDTO obterPorId(@PathVariable Long id) {
        return servico.obterPorId(id);
}
}
```

Feito isso, em `obterPorId()`, clicamos no ícone de lâmpada vermelha, na lateral esquerda da tela e depois em "Create method" para criarmos esse método.

> `SerieService.java`

Agora, na linha abaixo de `public SerieDTO obterPorID(Long id)`, passamos `return` seguido de `repositorio.findById()`. Nos parênteses, passamos o `id`.

```kotlin
public SerieDTO obterPorID(Long id)
    return repositorio.findById(id)
```

Mas se passarmos o mouse em `findById`, repare que a ferramenta retorna um `Optional`. Anteriormente, aprendemos que o `Optional` é um container que pode ter ou não uma classe. Podemos encontrar esse `id` ou não, nesse caso será devolvido vazio ou nulo.

Sendo assim, precisamos tratar antes de devolver, nesse caso, tratar e depois converter para `SerieDTO`, porque está devolvendo um `Optional` de `Serie`.

Na linha acima de `return`, escrevemos `Optional<Serie>` que receberá o `repositorio.findById(id)`. Clicamos no `Optional` e fazemos a importação, seguindo os mesmos passos já realizados anteriormente.

Agora, trataremos, assim como fizemos anteriormente. Na linha acima de `return` escrevemos `if serie.isPresente()`, significa que a série foi encontrada pelo `id`. Então, se a série está presente, conseguiremos transformá-la em `DTO` e devolver. Senão, não conseguiremos.

Abaixo de `if` passamos um `return new SerieDTO()` passando todas as informações, criadas anteriormente pela Iasmin. Não podemos usar esse método, porque não estamos devolvendo uma lista e sim uma única `SerieDTO`.

Repare que o `s` do código não é reconhecido, então vamos declará-lo. Abaixo de `if (serie.isPresent())`, escrevemos `Serie s` igual à `serie.get()`. Agora, sim, conseguimos converter e devolver o `DTO` da forma como precisamos, com as informações.

Caso não seja encontrado o `id`, não temos nada para devolver. Portando, em `return` passamos `null`. O trecho código fica da seguinte forma:

```kotlin
//Código omitido

            if (serie.isPresent()) {
                    Serie s = serie.get();
                    return new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse());
            }
            return null;
    }
}
```

É assim que o serviço funcionará. Buscaremos pelo `id` e isso retornará, por padrão do método, um `Optional`. Se a série estiver presente, fazemos um `serie.get()`, criamos o `DTO` e devolvemos esse `DTO` para o controlador. Se não foi encontrado, retornamos vazio, porque estamos passando um `id` que não existe.

**Iasmin:** Às vezes, achamos meio feio retornar um nulo. Mas, no front-end, esse dado tem que ser tratado. Então, se vem algo nulo, teremos uma página diferente para isso, esse é o ideal.

Procuraremos uma série. Se ela existir, retornaremos essa série. Mas, se não, existirá algo no front-end que trate isso corretamente.

**Jacqueline:** Agora que fizemos essa implementação, precisamos garantir que no front-end, quando chamarmos uma página de uma série específica, estará funcionando.

Para testar, voltamos para a tela do Screen Match, fechamos as ferramentas desenvolvedoras e voltamos para a página inicial. Se clicarmos agora em Friends, os dados da série já aparecem na tela, como avaliação, sinopse e atores, o mesmo acontece se clicarmos em Game Of Thrones. Isso significa que está funcionando, pois está fazendo a requisição pelo `id`.

Fizemos a correção e fizemos a página funcionar. Se analisarmos, as temporadas ainda não estão funcionando. Isso acontece, pois no inspecionar ainda tem algo errado. Acessamos a aba "Rede" e atualizarmos a página, tem algum método que está buscando as temporadas dessa série que ainda não está implementado.

Esse é outro ponto que precisamos melhorar. Faremos isso na próxima aula.

**Iasmin:** Vamos corrigindo gradualmente, encontrando mais pontos de melhoria e em breve tudo estará pronto e funcionando.

**Jacqueline:** Aproveite para fazer uma pausa. Te esperamos na próxima aula para fazermos as temporadas funcionarem. **Até lá!**
# Faça como eu fiz: utilizando um serviço e mostrando a página inicial

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146907/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146907/question)

Agora é sua vez! Extraia o código relacionado à regra de negócios para uma classe de serviços. Além disso, configure os endpoints relacionados aos top episódios, aos lançamentos e aos detalhes da série. Assim, teremos nossa home funcionando totalmente! :)

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146907/opinion)

Inicialmente, crie uma classe `SerieService` no pacote `service`. Essa classe terá toda a parte de regras de negócio que estava no controller antes. Dessa forma, a service fica responsável por conter o repositório e usar seus métodos, e converter os DTOs. Para que o Spring gerencie a classe, ela deve ser anotada com `@Service`.

Realizando a refatoração, nosso controller fica assim:

```kotlin
public class SerieController {

   @Autowired
   private SerieService servico;

    @GetMapping
    public List<SerieDTO> obterSeries() {
       return servico.obterTodasAsSeries();
    }
}
```

E a classe `SerieService` fica assim:

```kotlin
@Service
public class SerieService {

    @Autowired
    private SerieRepository repositorio;

    public List<SerieDTO> obterTodasAsSeries() {
        return converteDados(repositorio.findAll());
    }
}
```

Feito isso, podemos criar nossas novas rotas. Para retornar as top séries do banco, podemos apenas utilizar o método `findTop5ByOrderByAvaliacaoDesc()` do repository, já existente. Já para os lançamentos, precisaremos criar um novo método:

Classe `SerieRepository`

```csharp
//outros métodos
List<Serie> findTop5ByOrderByEpisodiosDataLancamentoDesc();
```

Para obter os detalhes da série, também podemos utilizar o método `findById()` do repositório. Após criar todos os endpoints no controller e fazer as buscas na service, teremos os códigos:

`SerieService.java`

```java
package br.com.alura.screenmatch.service;

import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.model.Serie;
import br.com.alura.screenmatch.repository.SerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SerieService {

    @Autowired
    private SerieRepository repositorio;

    public List<SerieDTO> obterTodasAsSeries() {
        return converteDados(repositorio.findAll());
    }

    public List<SerieDTO> obterTop5Series() {
        return converteDados(repositorio.findTop5ByOrderByAvaliacaoDesc());
    }

    private List<SerieDTO> converteDados(List<Serie> series) {
      return series.stream()
              .map(s -> new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse()))
              .collect(Collectors.toList());
    }

    public List<SerieDTO> obterLancamentos() {
        return converteDados(repositorio.findTop5ByOrderByEpisodiosDataLancamentoDesc());
    }

    public SerieDTO obterPorId(Long id) {
        Optional<Serie> serie = repositorio.findById(id);

        if (serie.isPresent()) {
            Serie s = serie.get();
            return new SerieDTO(s.getId(), s.getTitulo(), s.getTotalTemporadas(), s.getAvaliacao(), s.getGenero(), s.getAtores(), s.getPoster(), s.getSinopse());
        }
        return null;
    }
}
```

`SerieController.java`

```kotlin
package br.com.alura.screenmatch.controller;

import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.service.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/series")
public class SerieController {

   @Autowired
   private SerieService servico;

    @GetMapping
    public List<SerieDTO> obterSeries() {
       return servico.obterTodasAsSeries();
    }

    @GetMapping("/top5")
    public List<SerieDTO> obterTop5Series() {
        return servico.obterTop5Series();
    }

    @GetMapping("/lancamentos")
    public List<SerieDTO> obterLancamentos() {
        return servico.obterLancamentos();
    }

    @GetMapping("/{id}")
    public SerieDTO obterPorId(@PathVariable Long id) {
        return servico.obterPorId(id);
    }
}
```

Na Service, foi criado o método `converteDados()` para converter uma lista de séries em seriesDto, já que esse código estava sendo repetido algumas vezes. Você notou mais alguma repetição de código? Fique à vontade para extrair novos métodos e usar sempre boas práticas! Compartilhe no fórum os métodos que criar. :)
## Transcrição

**Iasmin:** Nosso projeto no IntelliJ já está rodando, e já clonamos o repositório que Jacque subiu.

Ao rodar o nosso `index.html` com o _Live Server_, verificamos um **problema**. Nosso **Top 2** está aparecendo na aba de lançamentos, sendo as séries The Boys e Never Have I Ever. Mas nós programamos um **Top 5**!

O restante está aparecendo corretamente. Temos várias séries cadastradas no nosso banco, mas ele puxa apenas duas, como se tivéssemos apenas duas séries nesse ranking.

## Investigando o problema

Vamos acessar `localhost:8080/series` no navegador para verificar o que está acontecendo. Ao fazer isso, aparecem várias séries. Mas, se acessarmos `localhost:8080/lancamentos`, ele realmente mostra apenas duas séries: The Boys e Never Have I Ever.

Pelo menos nosso _front-end_ e _back-end_ estão bem conectados, e não se trata de um erro na ponte entre eles. Vamos continuar investigando no IntelliJ o que está acontecendo quando chamamos o `/lancamentos`.

Já no IntelliJ, vamos clicar na aba "**Run**", no canto inferior esquerdo da tela. Se arrastarmos a aba para o lado, entenderemos que a _query_ que ele está fazendo para buscar os últimos episódios é a que tem um `left join` entre a tabela `series` e a tabela `episodios`.

> Query de busca dos últimos episódios

```sql
select s1_0.id,s1_0.atores,s1_0.avaliacao,s1_0.genero,s1_0.poster,s1_0.sinopse,s1_0.titulo,s1_0.total
from
series s1_0
left join episodios el_0 on s1_0.id=e1_0.serie_id
order by e1_0.data_lancamento desc fetch first ? rows only
```

Vamos copiar essa _query_ e abrir no _Postgres_, no para verificar o que está acontecendo.

Colamos nossa _query_ no pgAdmin. A única coisa que vamos fazer será trocar a `?` por `5`, porque estamos usando o _Top 5_ em vez de _Top 2_ ou essa interrogação passada por parâmetro.

> Query atualizada de busca dos últimos episódios

```sql
select s1_0.id,s1_0.atores,s1_0.avaliacao,s1_0.genero,s1_0.poster,s1_0.sinopse,s1_0.titulo,s1_0.total_temporadas
from
series s1_0
left join episodios el_0 on s1_0.id=e1_0.serie_id
order by e1_0.data_lancamento desc fetch first 5 rows only
```

Vamos executar a _query_ atualizada.

São retornados 5 registros, mas o primeiro deles é de The Boys e os outros quatro são de Never Have I Ever.

> Data Output do Postgres (parcialmente transcrito)

|#|...|titulo|
|---|---|---|
|1|...|The Boys|
|2|...|Never Have I Ever|
|3|...|Never Have I Ever|
|4|...|Never Have I Ever|
|5|...|Never Have I Ever|

Isso acontece porque todos os episódios mais recentes do nosso banco são de apenas duas séries. Mas queremos que essas séries sejam **agrupadas** para podermos trazer 5 séries diferentes e não apenas esses episódios mais recentes.

Nossas _derived queries_ não conseguirão cobrir todos esses casos. Portanto, vamos precisar usar o JPQL para conseguir passar a cláusula do `group by`.

**Jacqueline:** Fizemos isso de propósito, justamente para trazer essa discussão:

> Não é porque o _framework_ promove facilidades na hora de criar uma consulta que você deve **confiar completamente** no que ele está fazendo.

A _derived query_ que criamos não atende esse caso, por exemplo. Ele não está pegando as 5 últimas séries que tiveram episódios lançados, mas apenas duas.

Então, em alguns casos, optaremos por não usar a _derived query_, mas efetivamente **montar nossa consulta** para fazer o que precisamos na nossa aplicação.

## Corrigindo o bug com JPQL

**Iasmin:** Na atividade de Explicação da aula anterior, já entendemos por que esse problema está acontecendo. Vamos copiar o JPQL disponibilizado nessa atividade e alterar nosso método na aplicação.

Com o JPQL copiado, vamos até o IntelliJ e abrimos o arquivo `SerieRepository.java`. Vamos trocar o nosso método `findTop5...()` para `lancamentosMaisRecentes()`, que vai receber nosso JPQL logo acima:

> `SerieRepository.java`

```java
@Query("SELECT s FROM Serie s " +
                "JOIN s.episodios e " +
                "GROUP BY s " +
                "ORDER BY MAX(e.dataLancamento) DESC LIMIT 5")
List<Serie> lancamentosMaisRecentes();
```

Esse JPQL está fazendo um `join` com a `series` e `episodios`, mas depois está **agrupando** pelas séries com o `group by`. Agora ele vai pegar a primeira série com o episódio mais recente, depois a segunda e assim por diante. Ele pegará as cinco primeiras, por isso temos o `DESC LIMIT 5`.

Vamos apenas alterar esse nome na nossa _Service_, acessando o arquivo `SerieService.java`. Nosso `findTop5...()` não está mais compilando, então vamos trocar para `repositorio.lancamentosMaisRecentes()`:

> `SerieService.java`

```java
public List<SerieDTO> obterLancamentos() {
    return converteDados(repositorio.lancamentosMaisRecentes());
}
```

Feito isso, esperamos que tudo funcione corretamente!

> Algo muito interessante que podemos notar aqui é que, como temos as classes bem divididas, **alteramos apenas a _Service_**. Portanto, nosso _Controller_ segue sem nenhuma alteração.
> 
> Bastou alterarmos o que queríamos no repositório, para depois alterar na _Service_, porque não queríamos mais usar o método anterior. Com isso, já conseguimos fazer a manutenção corretamente. Essa é a melhor parte de ter classes bem separadas!

Agora, vamos verificar se o _Top 5_ aparece como esperamos.

Esperamos que o nosso _Live Reload_ também esteja funcionando. Então, vamos ao navegador recarregar nossa página.

**Agora funcionou!** Temos um Top 5 de lançamentos recentes: Never Have I Ever, The Mandalorian, The Boys, Game Of Thrones e The Office.

Mas, encontramos outros _bugs_ a serem corrigidos! Caímos no famoso "na minha máquina funciona, mas na sua não"!

Se clicarmos na série The Mandalorian, por exemplo, a parte das temporadas não funciona. Então, vamos seguir nesse desenvolvimento para continuar corrigindo bugs.

**Jacqueline:** Vamos mergulhar e descobrir o motivo disso. Daqui a pouco, vamos implementar nossos episódios.

**Iasmin:** Até lá.

## Transcrição

**Iasmin:** Recapitulando o que aconteceu anteriormente: toda vez que clicamos em uma série, como por exemplo, The Mandalorian, e tentamos escolher uma temporada, **nada aparece em nosso seletor**.

## Entendendo o problema

**Iasmin:** Se pressionarmos F12, um erro 404 é exibido no Console, pois a URL `/series/temporadas/todas` não é encontrada.

Essa URL `temporadas/todas` está se referindo a mostrar todos os episódios de todas as temporadas, algo que já fizemos em cursos anteriores. Mas, naquele momento, mostrávamos no terminal; agora, queremos mostrar no nosso navegador.

Para que essa URL apareça no nosso _front-end_, precisamos voltar ao _back-end_, no Controller, e configurar a URL. Portanto, vamos para o IntelliJ para fazer isso.

## Configurando a URL no back-end

**Iasmin:** Vamos abrir nosso projeto, acessar o arquivo `SerieController.java` e criar a URL `/temporadas/todas`.

Para isso, vamos adicionar ao final do código um `@GetMapping`. Nós queremos todos os episódios de todas as temporadas, mas de uma série específica. Portanto, vamos precisar passar o ID dessa série, de forma muito semelhante ao que fizemos anteriormente com o método `obterPorID`, que utiliza o `@PathVariable`: `"/{id}/"`.

Após a barra, vamos digitar `/temporadas/todas`, conforme a URL verificada na inspeção da nossa página. Isso resulta em: `@GetMapping("/{id}/temporadas/todas")`.

Agora, queremos **retornar os episódios**. Para isso, vamos declarar um `public List<>` de `EpisodioDTO`, a que chamaremos de `obterTodasTemporadas()`. Vamos precisar passar como parâmetro um `Long id` como `@PathVariable`. Isso resulta em:

> `SerieController.java`

```java
@GetMapping("/{id}/temporadas/todas")
public List<EpisodioDTO> obterTodasTemporadas(@PathVariable Long id){

}
```

## Criando `EpisodioDTO`

Nós declaramos um `EpisodioDTO`, mas ainda não temos esse `EpisodioDTO`. Lembrando que não queremos retornar os episódios aqui, pois queremos representar melhor as nossas classes, trazer um pouco mais de segurança e ter objetos que representem o que está no nosso banco. Por isso, utilizaremos um DTO.

Portanto, vamos criar o `EpisodioDTO` também. Vamos clicar nele com o botão direito, selecionar a opção "_Show Context Actions > **Create record 'EpisodioDTO'**_". Ou seja, vamos criar uma classe _record_, da mesma forma que criamos para `serie`. Criaremos no pacote `.dto`, ao invés do `.controller`. Com isso, teremos o arquivo `EpisodioDTO.java`.

**Jacqueline:** Nosso `EpisodioDTO` terá menos dados que nosso `Episodio`, pois nosso `Episodio` é uma entidade e não queremos transportar tudo o que tem nela. Nesse momento, vamos trabalhar com a **representação** para trazer essa segurança.

**Iasmin:** Como será algo que aparecerá na própria página de detalhes da série, vamos trazer apenas o nome do episódio, o número dele na temporada e o número da temporada, como por exemplo: episódio 3 da temporada 5.

Então, em `EpisodioDTO`, vamos declarar esses atributos. Usaremos os mesmos nomes que usamos em `Episodio`: `temporada`, `numeroEpisodio` e `titulo`. Então, teremos um `Integer temporada`, um `Integer numeroEpisodio` e uma `String titulo`.

> `EpisodioDTO.java

```java
public record EpisodioDTO(Integer temporada, Integer numeroEpisodio, String titulo) {
}
```

Agora, com todos os atributos declarados, podemos voltar ao nosso Controller e construir o resto do nosso método.

## Método `obterTodasTemporadas()`

No `SerieController`, chamaremos algum método da nossa Service na nossa função `obterTodasTemporadas()`. Então, vamos digitar `return servico.obterTodasTemporadas()`. Ou seja, nosso serviço será responsável por chamar nosso repositório. Passamos um `id` como parâmetro desse método. Teremos, então:

> `SerieController.java`

```java
@GetMapping("/{id}/temporadas/todas")
public List<EpisodioDTO> obterTodasTemporadas(@PathVariable Long id){
        return servico.obterTodasTemporadas(id);
}
```

Agora, vamos clicar com o botão direito em `obterTodasTemporadas()` e selecionar "_Show Context Actions > Create method 'obterTodasTemporadas' in 'SerieService'_" para **criar o método** na Service.

Novamente, teremos no `obterTodasTemporadas` algo muito parecido com o `obterPorID`. A única diferença será que, ao invés de devolvermos um `SerieDTO`, devolveremos os episódios relacionados àquela série.

Então vamos copiar o que está dentro do `obterPorID` e colar no `obterTodasTemporadas` e realizar os devidos ajustes.

Tínhamos uma série que foi buscada em nosso repositório via ID. Se o `Optional` está presente, não vamos mais retornar um `SerieDTO`. Vamos apagar essa parte e fazer um `return s.getEpisodios().stream()`.

Depois do `stream()`, vamos mapear (`map()`) todos os episódios dessa série para `EpisodiosDTO`. Então, vamos fazer um `e -> new EpisodioDTO()` passando os dados desejados. Serão `e.getTemporada()`, `e.getNumeroEpisodio()` e `e.getTitulo()`.

Vamos pegar esses dados e colocá-los em uma lista, portanto, vamos usar o `.collect()Collectors.toList()`.

Com isso, estamos retornando os episódios caso a série seja encontrada. Mas, caso ela não seja encontrada, retornamos `null`. Então, nosso método ficará assim:

> `SerieService.java`

```java
public List<EpisodioDTO> obterTodasTemporadas(Long id) {
        Optional<Serie> serie = repositorio.findById(id);

        if (serie.isPresent()) {
                Serie s = serie.get();
                return s.getEpisodios().stream()
                                .map(e -> new EpisodioDTO(e.getTemporada(), e.getNumeroEpisodio(), e.getTitulo()))
                                .collect(Collectors.toList());
        }
        return null;
}
```

**Pronto!**

## Teste

Agora, se recarregarmos nossa página do The Mandalorian e clicarmos em "Selecione a temporada > Todas as temporadas", são exibidas as temporadas 1, 2 e 3 da série, com seus respectivos episódios. Está funcionando!

Mas, se clicarmos na temporada 1, por exemplo, no nosso seletor de temporadas, nada muda. Ou seja, **nada acontece quando selecionamos as temporadas específicas**.

Com isso, já começamos a pensar no nosso próximo passo: ao selecionar uma temporada no nosso seletor, queremos retornar apenas os episódios pertencentes a essa temporada.

Acho que podemos fazer uma pausa para o café e, em breve, resolver mais esse problema!
## Transcrição

**Jacqueline:** Quando selecionamos a visualização de todas as temporadas, elas são carregadas corretamente, com todos os episódios, números e títulos. Agora, precisamos exibir **uma única temporada**.

## Investigando o problema

O que acontece quando clicamos, por exemplo, na temporada 1 da série para buscar somente os episódios dessa temporada?

Vamos usar as nossas habilidades de Full Stack para tentar entender o que está acontecendo, ou seja, o que a aplicação **front-end** está esperando da nossa aplicação **back-end**.

**Iasmin:** Com a nossa página aberta no navegador, vamos pressionar a tecla "F12" para abrir o menu de inspeção.

Vamos observar nosso Console. Quando selecionamos a temporada 1 da série The Mandalorian, ele tentou chamar a URL `series/10/temporadas/1`. Ou seja, aqui ele está tentando encontrar uma **URL que ainda não está mapeada**, essa que possui o número da temporada. Então, vamos precisar voltar ao nosso controller para configurar isso também.

## Mapeando a URL

No IntelliJ, acessmos o arquivo `SerieController.java`. Vamos criar mais uma URL, que será um `@GetMapping`. Ao invés de termos o `/todas` como temos em `obterTodasTemporadas()`, teremos um `/{id}/temporadas/{numero}`. Isso resulta em: `@GetMapping("/{id}/temporadas/{numero}")`.

Vamos precisar de dois `@PathVariables`, um para o `id` e um para o `numero`. Então, no nosso método, vamos declarar um `public List<>` de `EpisodioDTO`. Em seguida, declaramos o método: `obterTemporadasPorNumero()`. Vamos passar como parâmetros o `Long id` e o `Long numero`.

> `SerieController.java`

```java
@GetMapping("/{id}/temporadas/{numero}")
public List<EpisodioDTO> obterTemporadasPorNumero(@PathVariable Long id, @PathVariable Long numero){

}
```

**Jacqueline:** Para reforçar: sempre que passamos **parâmetros pela URL**, mapeando-os no `get`, os colocamos entre chaves, como colocamos o `id` e o `numero`. Em seguida, os parâmetros que estamos declarando abaixo, na assinatura do método, devem ter exatamente os mesmos nomes.

Não podemos declarar, por exemplo, `numero` na URL e `temporada` na assinatura do método, ambos para se referir ao número da temporada de uma série. Esses nomes devem corresponder para que tudo dê certo e ele consiga ler e transformar da URL para o parâmetro.

**Iasmin:** Feita essa declaração, vamos chamar nosso serviço novamente com `return servico.obterTemporadasPorNumero()`. Passamos o `id` e o `numero` como parâmetros.

```java
@GetMapping("/{id}/temporadas/{numero}")
public List<EpisodioDTO> obterTemporadasPorNumero(@PathVariable Long id, @PathVariable Long numero){
        return servico.obterTemporadasPorNumero(id, numero);
}
```

## Método `obterTemporadasPorNumero()`

Agora, vamos precisar **criar o método** `obterTemporadasPorNumero()` na nossa service. Clicamos nele com o botão direito e selecionamos "_Show Context Actions > Create method 'obterTemporadasPorNumero' in 'SerieService'_".

Já no arquivo `SerieService.java`, teremos no método `obterTemporadasPorNumero()` algo um pouco diferente do que construímos no método `obterTodasTemporadas()`.

No `obterTodasTemporadas()` conseguimos usar os `streams()` para pegar todos os dados. Mas se quiséssemos pegar todos os dados separando as temporadas pelo número, seria algo mais complicado e que daria um pouco mais de trabalho, porque não temos essas informações tão relacionadas.

No banco, essas informações ficarão "melhor salvas". Então, por conta disso, vamos criar um novo método no `SerieRepository` para separar esses episódios por temporada.

**Jacqueline:** Lembrando que até poderíamos fazer como fizemos antes, filtrando os dados com `stream()` pelo número da temporada. Porém isso não convém para nós no momento, afinal, o nosso foco agora é trabalhar criando controller, mapeando rotas, e não filtrar _streams_ — algo que já fizemos em cursos anteriores.

Sendo assim, optaremos por criar um novo método no `Repository` e implementar essa nova URL.

Precisaremos acessar o `Repository`, criar esse método e utilizar um `JPQL`, disponibilizado abaixo, para filtrar as informações.

> JPQL de busca de episódios por temporada

```kotlin
@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s.id = :id AND e.temporada = :numero")
```

Vamos abrir o arquivo `SerieRepository.java` e, ao final do código, criar um novo método que vai devolver para nós uma `List<>` de `Episodio`. Vamos chamar essa lista de `obterEpisodiosPorTemporada()`.

Esse `obterEpisodiosPorTemporada()` vai precisar receber um `Long id` e um `Long numero`, da mesma forma que fizemos anteriormente. Por fim, colamos o JPQL disponibilizado logo acima do nosso método.

> `SerieRepository.java`

```java
@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s.id = :id AND e.temporada = :numero")
List<Episodio> obterEpisodiosPorTemporada(Long id, Long numero);
```

Esse JPQL está selecionando a série e os episódios, fazendo um `join`, e está pegando os episódios da série com o `id` que passamos e a temporada que também passamos.

Agora, no nosso `SerieService`, vamos precisar chamar esse método. O retorno dele será simplesmente um `return repositorio.obterEpisodiosPorTemporada(Long id, Long numero)`.

> `SerieService.java`

```java
public List<EpisodioDTO> obterTemporadasPorNumero(Long id, Long numero) {
        return repositorio.obterEpisodiosPorTemporada(id, numero);

}
```

Ainda precisamos fazer a conversão do `Episodio` para `EpisodioDTO`, assim como fizemos anteriormente.

O método `obterEpisodiosPorTemporada()` está retornando uma lista de episódios, mas queremos retornar uma lista de `EpisodioDTO`. Então, vamos usar o `.stream()`, o `.map()` e `.collect()`. Podemos copiar e colar essa parte do método `obterTodasTemporadas()`, porque a ideia é a mesma:

```java
public List<EpisodioDTO> obterTemporadasPorNumero(Long id, Long numero) {
        return repositorio.obterEpisodiosPorTemporada(id, numero)
                        .stream()
                        .map(e -> new EpisodioDTO(e.getTemporada(), e.getNumeroEpisodio(), e.getTitulo()))
                        .collect(Collectors.toList());
}
```

Agora, sim, a nossa conversão foi feita e vamos poder visualizar o `EpisodioDTO` no nosso navegador.

## Teste

Com o _Live Reload_ funcionando, só vamos precisar abrir a nossa página de séries no navegador e recarregá-la.

Estamos na página de detalhes da série The Mandalorian. Vamos selecionar a Temporada 1 no nosso seletor. Ao fazer isso, são exibidos apenas os episódios da temporada 1 dessa série!

Conseguimos fazer o nosso repository funcionar corretamente, assim como o nosso controller e todo o resto!

**Jacqueline:** Muito bom!

Vamos reforçar o seguinte: **Essa é a melhor estratégia?** Ter um endpoint que traz todos os dados e ter outro buscando individualmente? Não se sabe! Essa é uma **decisão estratégica** que você e o seu time terão que tomar, a depender da performance da aplicação. No geral, é uma boa estratégia.

Por exemplo, considere a série _Grey's Anatomy_, em que precisaríamos buscar 19 temporadas de episódios todas as vezes! Seria uma busca muito grande. Muitas vezes, a pessoa só quer ver os dados de uma temporada específica, então não seria necessário buscar tantos dados.

Precisamos analisar os ganhos e as perdas, os prós e os contras, para decidir a melhor estratégia. Mas, o fato é que temos mais um endpoint, mais uma rota, funcionando corretamente.

**Iasmin:** Vamos continuar, pois temos mais um bug — ou, como diz Jacqueline, **oportunidade de melhoria** — a resolver!

Nossa página inicial está funcionando. A nossa página de detalhes da série também está funcionando, com todos os endpoints. Mas, se selecionarmos qualquer opção do seletor de **Categorias** de séries na página inicial, como "Comédia", nada aparece. A tela não exibe nenhum dado!

Com paciência, vamos resolver mais essa questão para ter a nossa aplicação completa. Faremos isso no próximo vídeo.

Até lá!
# Código da consulta JPQL

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146923/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146923/question)

No vídeo anterior, filtramos os episódios de uma série por temporada e utilizamos uma consulta JPQL. Para também poder utilizá-la, copie o código a seguir e adicione na classe `SerieRepository`, acima do método `obterEpisodiosPorTemporada`

```kotlin
    @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s.id = :id AND e.temporada = :numero")
```

O método completo, com query e assinatura, deve estar assim:

```kotlin
@Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s.id = :id AND e.temporada = :numero")
    List<Episodio> obterEpisodiosPorTemporada(Long id, Long numero);
```

## Transcrição

**Iasmin:** Vamos investigar nosso problema, ativando nosso modo Full Stack de novo!

## Investigando o problema

Se pressionarmos "F12" e observarmos o que está acontecendo no Console, estamos mapeando uma URL com o erro 404 novamente. Portanto, **está faltando mais uma URL no nosso controller**.

Essa URL é `localhost:8080/series.../com%C3%A9dia`. Está assim porque clicamos no gênero "Comédia" para filtrar as séries no vídeo passado, e esse nome tem um caractere especial no meio. Isso é um sinal de que ele está, de fato, buscando pelo gênero de série.

Mas essa URL não está mapeada e nós precisaremos fazer isso.

**Jacqueline:** Vamos conferir isso melhor selecionando outra categoria no nosso seletor de gênero — por exemplo, "Drama" — para verificar como ficaria essa URL. Ao fazer isso, a URL se torna `localhost:8080/series/categoria/drama`.

Isso facilita a visualização do problema, porque não tem acentuação na palavra "Drama". Quando ele converte o nome para URL, os caracteres especiais viram algo bem diferente.

**Iasmin:** Precisamos passar essa URL para o nosso _controller_ para configurar a funcionalidade no nosso _front-end_ também.

## Mapeando a URL

Vamos voltar para o _IntelliJ_ para configurar o nosso novo _endpoint_, implementar mais uma rota.

No arquivo `SerieController.java`, vamos criar mais um `@GetMapping()`. Na nossa URL, temos `/series/` — que já está configurado pelo `@RequestMapping`, então não precisamos adicionar —, `categoria` e, depois da categoria, temos o **nome da categoria** que estamos buscando.

O `/categoria` vai ser fixo para nós, então o digitamos normalmente. Mas, depois dele, vamos passar parâmetros dinâmicos, ou seja, o nome da categoria que está sendo requisitada. Como ele é dinâmico, vamos usar as chaves. Podemos chamar esse parâmetro de `nomeGenero`, por exemplo, resultando em `/categoria/{nomeGenero}`.

> `SerieController.java`

```java
@GetMapping("/categoria/{nomeGenero}")
```

Agora, precisaremos declarar o nosso **método**, começando com `public List<>` de `SerieDTO`. Vamos chamá-lo de `obterSeriesPorCategoria()`.

Como parâmetro desse método, vamos passar uma `String nomeGenero`, exatamente igual ao nome colocado na URL. Esse `nomeGenero` será um `@PathVariable`, porque vamos passá-lo na nossa URL.

```java
@GetMapping("/categoria/{nomeGenero}")
public List<SerieDTO> obterSeriesPorCategoria(@PathVariable String nomeGenero){

}
```

Agora vamos chamar algum método da nossa _service_ para obter essas séries por categoria. Então, faremos um `return`, novamente, de `servico.obterSeriesPorCategoria()`. Esse método precisará receber o `nomeGenero` que estamos passando como parâmetro.

```java
@GetMapping("/categoria/{nomeGenero}")
public List<SerieDTO> obterSeriesPorCategoria(@PathVariable String nomeGenero){
        return servico.obterSeriesPorCategoria(nomeGenero);
}
```

## Método `obterSeriesPorCategoria()`

Vamos **criar o método** `obterSeriesPorCategoria()` clicando sobre ele com o botão direito e selecionando "_Show Content Actions > Create method..._". Assim, somos redirecionados para o arquivo `SerieService`, que agora conta com esse método:

> `SerieService.java`

```java
public List<SerieDTO> obterSeriesPorCategoria(String nomeGenero) {
}
```

Agora faremos algo que já fizemos anteriormente, em cursos anteriores: **converter** o que está sendo passado no navegador para o que está no nosso domínio.

Isso porque, na nossa _model_, no `enum Categoria`, os nossos dados são passados sem acento, às vezes sem cedilha. A palavra _ação_ está como `ACAO`, por exemplo. Ou seja, temos **diferenças** entre o que está no nosso _enum_ e o português correto. Já sabemos como fazer essa conversão.

Então, no nosso `SerieService`, precisaremos fazer essa conversão também. Nesse arquivo, dentro de `obterSeriesPorCategoria()`, vamos declarar uma `Categoria` chamada `categoria` e importar essa classe com "Alt + Enter".

Em seguida, vamos chamar o `Categoria.fromPortugues()`, passando `nomeGenero` como parâmetro.

Por fim, vamos chamar o método do nosso `Repository`, com `return repositorio.findByGenero()`, passando essa `categoria` que foi convertida, que acabamos de instanciar.

Precisamos **converter esses dados** retornados, chamando o método `converteDados()` do repositório. Então, antes do `repositorio.findByGenero()`, digitamos `converteDados()`, deixando todo o restante entre os parênteses.

```java
public List<SerieDTO> obterSeriesPorCategoria(String nomeGenero) {
        Categoria categoria = Categoria.fromPortugues(nomeGenero);
        return converteDados(repositorio.findByGenero(categoria));
}
```

Temos o repositório que devolve as séries para nós, convertemos os dados em `SerieDTO`, e agora esperamos que, no nosso _front-end_, esses dados sejam atualizados e apareçam as séries por categoria.

## Teste

Vamos voltar ao navegador para verificar o que está acontecendo. Se clicarmos agora em "Categorias > Comédia" no nosso seletor de gêneros, aparecem as quatro séries de comédia que estão no nosso banco: Friends, The Office, Gilmore Girls e Never Have I Ever.

Se clicarmos em "Drama" ou "Crime", não aparece nenhuma série porque não temos nenhuma desses gêneros no nosso banco. Se clicamos em "Ação", aparecem as séries The Mandalorian, Game Of Thrones e The Boys.

Então, o **nosso filtro está funcionando corretamente!** Ele trouxe as exatas séries cadastradas no banco, filtradas conforme seus gêneros.

## Conclusões

Nosso projeto já está bem completo. Temos todas as funcionalidades que queríamos funcionando.

Na nossa página inicial, temos as séries divididas por **Títulos** mais recentes, que é o nosso `/series`; **Títulos populares**, que são os 5 mais bem avaliados; **Lançamentos**, que são os títulos mais recentes.

Sabemos que o seletor de **Categorias** também está funcionando, e quando clicamos para selecionar as temporadas de uma série (seja todas ou uma específica), o filtro também funciona corretamente.

**Aplicação completíssima!** É muito legal lembrar de como estava o nosso projeto no início da formação e comparar com como ele está agora.

Finalizamos por aqui. Sinta-se à vontade para adicionar outras funcionalidades à aplicação.

**Jacqueline:** Agora vamos para o **desafio**! Vamos praticar todos esses conceitos que abordamos no curso: segurança, _cores_, implementar URL, mapear.

Esperamos você lá!


# Mão na massa: retornando os top episódios de uma série

 [Próxima Atividade](https://cursos.alura.com.br/course/java-criando-primeira-api-conectando-front/task/146938/next)

- [](https://cursos.alura.com.br/suggestions/new/java-criando-primeira-api-conectando-front/146938/question)

Para você que chegou até aqui, temos um extra! Nosso front-end recebeu uma modificação: nos detalhes da série, além de exibir todos os episódios de todas as temporadas e os episódios separados por cada temporada, também iremos exibir os top episódios da série. Você pode atualizar o seu front dando um `git checkout` para a branch `mao-na-massa` e executando-o. Ficará assim:

![Imagem de captura de tela de uma parte da aplicação front-end, em que aparece o seletor de temporadas. Há 9 linhas, cada uma uma com um número de de 1 a 9, representando as temporadas da série selecionada, seguidas da opção “Todas as temporadas” e da opção “Top 5 episódios”, que aparece destacada em azul, e é a opção que iremos trabalhar no desafio.](https://cdn3.gnarususercontent.com.br/3356-java-web-spring-api-front/imagem3.png)

Sua missão é configurar o endpoint `”/series/id/temporadas/top”`. Feito isso, ao atualizar o front, aparecerão os top 5 episódios da série. No exemplo abaixo estão os top episódios da série “The Office”:

![Imagem da captura de tela da página de detalhes da série “The Office”. No canto superior esquerdo, há o poster da série. Do lado direito desse poster, há as informações da série, e na parte inferior há a instrução “Escolher temporada”. Abaixo dela, há um seletor, em que está selecionada a opção “Top 5 episódios” e abaixo do seletor há uma lista com os top episódios de “The Office”](https://cdn3.gnarususercontent.com.br/3356-java-web-spring-api-front/imagem4.png)
