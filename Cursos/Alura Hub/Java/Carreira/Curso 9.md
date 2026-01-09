## Transcrição

Olá, meu nome é João Vitor e serei seu instrutor no _**curso de refatoração utilizando Java**_.

> **Audiodescrição:** João Victor é uma pessoa de pele clara, olhos castanhos e cabelos pretos curtos. Usa bigode e barba. Está com uma camiseta escura e sentado em uma cadeira preta. Ao fundo, uma parede lisa com iluminação em tons de azul.

## Refatorando com Java

Caso deseje aprender a transformar um código onde temos somente a uma função em um código com boas práticas e testes, este é o lugar certo para você.

No exemplo exibido na tela, temos a função `Main()`, na qual se encontra todo o código com todas as regras de negócio e configurações. Nesse curso, transformaremos um código de função única em um código refatorado com organização em classes, pacotes e testes aplicados.

A classe, que antes acumulava todas as regras de negócio e configurações, se tornará mais enxuta e passará a utilizar o _**Switch**_, presente nas versões mais recentes do _Java_.

Veremos a divisão de classes com a utilização do _**Padrão de Projeto Command**_, com o intuito de fazer a requisição para as classes e métodos corretos no código. Também teremos classes específicas para configurações, onde nós utilizaremos uma _**API REST**_, fazendo chamadas GET e POST.

Separaremos classes específicas para cada tipo e faremos _**testes de unidade utilizando JUnit e Mockito**_.

Dessa forma, seremos capazes de aplicar diversos padrões e boas práticas para obter um _**código coeso e de fácil manutenção**_, tornando o seu desenvolvimento uma tarefa mais gratificante.

Se sua curiosidade foi instigada e deseja aprender a aplicar essas boas práticas em seu dia a dia, te esperamos no próximo vídeo.

# Preparando o ambiente

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138295/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138295/question)

Durante o curso vamos usar uma aplicação console, chamada Adopet, em que usuários poderão fazer algumas operações relacionadas a abrigos e pets. Vamos interagir com essa aplicação para adicionar e listar abrigos, além de importar pets através de um arquivo, assim como listá-los.

Faça o download do projeto inicial do curso [neste link](https://github.com/alura-cursos/3149-boas-praticas-java/archive/refs/heads/projeto_inicial.zip)

A aplicação será integrada com uma API externa, que será a responsável por salvar pets e abrigos da aplicação console, assim como retorná-los quando fizermos a requisição através da aplicação console. Essa API está incluída no formato `.jar` no nosso projeto que vamos utilizar para o curso. E para testar a aplicação console precisamos iniciar o arquivo `.jar`. Para isso, podemos usar o seguinte comando:

```undefined
java -jar api.jar
```

Uma vez feito isso, a aplicação Spring vai iniciar e tudo estará pronto para fazer o curso.

> Um ponto importante: quando quiser "desligar" a API, basta pressionar `Ctrl + C`.

Bons estudos!

## Transcrição

Precisamos conhecer a aplicação em que vamos trabalhar ao longo deste curso.

## Conhecendo a Aplicação

A ideia desta aplicação é ser a ferramenta que as pessoas usuárias de nosso controle de adoção utilizarão para cadastrar abrigos, registrar animais para adoção e listá-los. Ou seja, é uma aplicação console voltada para a pessoa que trabalha manuseando o sistema de cadastro de animais e abrigos.

Acessando o IntelliJ e abrindo o arquivo do projeto, veremos no explorador de arquivos à esquerda que a aplicação é composta de uma única classe, chamada `AdopetConsoleApplication`, dentro do caminho de pastas "src > main > java > br.com.alura".

Vamos minimizar esse explorador clicando no ícone "-" chamado "Hide" (Esconder), localizado acima dele, alinhado à direita. Assim, podemos focar mais no código.

Após abrir o arquivo, veremos uma aplicação console tem uma função principal, ou `main()`. É por meio dela que iniciamos a função e a utilizamos para interagir com o sistema através do console.

Entre as chaves dessa função, temos um bloco `while` com algumas opções para interação:

- Opção 1: Listar abrigos cadastrados;
- Opção 2: Cadastrar novo abrigo;
- Opção 3: Listar pets do abrigo.
- Opção 4: Importar pets do abrigo;
- Opção 5: Sair.

Abaixo dessas opções, temos um `if` para quando selecionamos a opção 1, que faz o sistema realizar uma chamada para uma API externa utilizando um método `get()` para buscar e mostrar os abrigos cadastrados. Com isso, estamos consumindo uma API.

Abaixo dessa, temos outras opções. Em algumas delas, faremos uma requisição do tipo `post()`. Com isso, quando a pessoa usuária cadastrar um abrigo, na verdade, não estaremos registrando na nossa aplicação console, pois o sistema não tem um banco de dados. Em vez disso, faremos uma requisição `post()` para uma API responsável pelo controle de todos os dados.

Quando quisermos buscar dados, faremos um `get()` para a API e quando quisermos registrar dados, faremos um `post()` para a API.

Neste arquivo, as várias funções no código representam as várias opções de interação na aplicação console e formam o código completo da aplicação.

Para iniciar a aplicação console, no caso do IntelliJ que utilizado no curso, basta clicar no ícone de "Play" ou "Start" na cor verde, à esquerda da linha inicial do `public static void main()`. Outras IDEs possuem funcionalidades semelhantes.

Vamos clicar nesse ícone para selecionar a opção "Run AdopetConsoleApplication" na lista suspensa e iniciar a aplicação.

O resultado é a abertura do terminal na aba inferior da IDE com a solicitação abaixo:

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

Para interagir com a aplicação, basta selecionar uma opção. Neste momento não temos nenhum abrigo cadastrado, portanto digitaremos "5" para fechar a aplicação e fecharemos o terminal.

A aplicação precisa da inserção de dados para cadastro na API. Dessa forma, quando realizarmos uma requisição, buscaremos nela os dados cadastrados.

[Bloco de código completo do arquivo `AdopetConsoleApplication.java` no Github.](https://raw.githubusercontent.com/rcaneppele/3149-boas-praticas-java/main/src/main/java/br/com/alura/AdopetConsoleApplication.java)

Encerrando o programa, podemos ver que temos um `else if` para cada opção. No caso da importação de pets (animais de estimação), por exemplo, é necessário passar o nome do abrigo e o nome do arquivo CSV.

Verificando o explorador lateral, temos um arquivo `pets.csv` disponível na pasta raiz, mas poderia ser qualquer outro. Com essas informações, a aplicação fará a leitura do arquivo e cadastrará esses pets na API, associando-os ao abrigo que informamos.

Percebemos que a aplicação está funcionando, mas o que importa mesmo é o código por trás dela. Se formos analisar, temos uma única função, um único método `main()` que contém muitas linhas de código. Navegando pelo código, podemos ver que ele é longo e dificulta a identificação dos blocos de código.

Neste cenário, se quiséssemos incrementar a aplicação com uma nova função, teríamos que adicionar mais um bloco `else if`, dificultando ainda mais a manutenção e a melhoria do código.

Assim, o que vamos começar a fazer é refatorar esse código. _**A refatoração (refactor) consiste em técnicas de melhoria para o nosso código.**_ Existem várias maneiras de fazer, diversos padrões e técnicas que podemos aplicar. Neste projeto, vamos aplicar apenas algumas delas, porque realmente o nosso código está difícil de ser trabalhado.

## Iniciando a Refatoração: Criando a Função de Listagem

Uma das abordagens é dividir esse método `main()` em pequenas funções. Por exemplo, por que não termos _**um método para cada opção**_, em vez de possuir todo o código e lógica dentro de condições `if`? Dessa forma, todo o código que atualmente manipulamos com `HttpClient`, `response` e um laço `for`, ficaria dentro do seu próprio método.

Portanto, podemos criar uma função chamada `listarAbrigos()` porque, de fato, a opção que executa essa lógica será a função de listar os abrigos.

Vamos acessar o final do código do programa, à direita do fechamento da penúltima chave, pressionar "Enter" duas vezes para descer duas linhas e adicionar um espaço após essa chave. Em seguida, criaremos uma função privada (`private`).

Vale lembrar que essa chave se refere à função `main()`, enquanto a última chave é usada para finalizar o programa e encerrar o bloco da classe.

Então, o que será essa função? Será designada como `private void`, como a função chamada `cadastrarAbrigo()`. À sua direita, abriremos e fecharemos chaves para delimitá-la.

```java
private void cadastrarAbrigo() {

}
```

Agora, voltaremos para o código da função `main()`. Observamos que `cadastrarAbrigos()` funcionará como a opção 1. Em outras palavras, a opção 1 inicia no primeiro `if`, logo abaixo de `opcaoescolhida = Integer.parseInt(textoDigitado)`.

```java
if (opcaoEscolhida == 1) {
    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create(uri))
                            .method("GET", HttpRequest.BodyPublishers.noBody())
                            .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Abrigos cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String nome = jsonObject.get("nome").getAsString();
        System.out.println(id +" - " +nome);
    }
}
```

Portanto, se a opção escolhida for igual a 1, todo o código dentro do `if` será executado. Quando clicamos à direita da abertura de chaves desse `if`, é possível ver em qual parte do código essa seção é encerrada. Todo o código dentro desse `if` é o que será movido para o novo método.

Assim, vamos recortar com "Ctrl+X" todo o trecho contido entre as chaves desse `if`, que se inicia a partir da linha do `HttpClient client` e termina na chave que fecha o `for`. Voltando para a função `private` que acabamos de criar, colamos o conteúdo recortado entre as chaves de `cadastrarAbrigo`.

```java
private void cadastrarAbrigo() {
    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create(uri))
                            .method("GET", HttpRequest.BodyPublishers.noBody())
                            .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Abrigos cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String nome = jsonObject.get("nome").getAsString();
        System.out.println(id +" - " +nome);
    }
}
```

O sistema aponta um erro em `send`, porque precisa indicar que esse método pode gerar uma exceção Java `IOException` ou uma `InterruptedException`. Precisamos explicitar que esse erro pode ocorrer — tratando com um bloco `try catch`, por exemplo — para demonstrar que podemos lidar com essa exceção (caso ocorra) ou podemos deixar claro que, neste método, haverá um passo — neste caso, o `send()` — que pode gerar estas duas exceções.

Ou seja, nessas _Checked Exceptions_, precisamos deixar evidente que as exceções podem ocorrer.

Por isso, vamos incorporar um `throws` no `send(request, HttpResponse.BodyHandlers.ofString())`. Para isso, clicaremos na opção "Add exceptions to method signature" (Adicionar exceções à assinatura do método), dentro da janela desse erro apontado pelo sistema. Não trabalharemos com `try catch`.

```java
private void cadastrarAbrigo() throws IOException, InterruptedException {
    // Código omitido
}
```

O próximo passo é copiar o nome da função `cadastrarAbrigo()`, e inseri-lo entre as chaves do `if`.

```java
if (opcaoEscolhida == 1) {
    cadastrarAbrigo()
}
```

Um erro será apontado nessa função porque, enquanto trabalhamos na função `main()` como uma função estática, precisamos tratar sempre no contexto estático. Então, a função `cadastrarAbrigo()` precisa ser designada como `private static void`.

```java
private static void cadastrarAbrigo() throws IOException, InterruptedException {
    // Código omitido
}
```

Ao retornarmos para a parte superior do código, verificamos que a função está sendo chamada com sucesso, sem o erro de compilação, que seria indicado por uma linha vermelha abaixo do método.

A ideia é separar todas as funções em métodos para diminuir o código da função `main()` e deixar responsabilidades e comportamentos em métodos separados.

Neste vídeo, introduzimos o contexto da aplicação e iniciamos a refatoração, vamos concluir esses passos no próximo vídeo. Esperamos você lá!

## Transcrição

Agora que extraímos o primeiro método para tornar nosso código um pouco mais legível, precisamos continuar extraindo todos os blocos de código da função `main()` que podem se tornar métodos.

Porém, antes disso, gostaria que corrigíssemos uma pequena coisa em nosso código.

Anteriormente, nós criamos o método `cadastrarAbrigo()`, que será a opção número 1. Na verdade, a opção 1 não é `cadastrarAbrigo()`, e sim `listarAbrigo()`. Se olharmos no bloco `while`, dentro da função `main()`, no `System.out.println()`, a opção 1 é `"Listar abrigos cadastrados"`.

Para resolver esse problema, precisamos rolar a tela até a nossa função de `cadastrarAbrigo()` e mudaremos o seu nome de `cadastrar` para `listar`.

```java
private static void listarAbrigo() throws IOException, InterruptedException {
    // Código omitido
}
```

Feito isso, vamos copiar o `listarAbrigo()` com "Ctrl+C" e referenciá-lo lá em cima, onde adicionaremos `cadastrarAbrigo()`, porque agora o nosso código parou de compilar, ele não encontra essa função.

```java
if (opcaoEscolhida == 1) {
    listarAbrigo();
}
```

## Extraindo os Métodos

Agora, precisamos criar o método para a opção 2 que é, de fato, `cadastrarAbrigo()`. Voltaremos ao fim do arquivo e, abaixo da função `listarAbrigo()`, criaremos a `cadastrarAbrigo()`.

Sabemos que precisamos criar uma função privada (`private`), pois estamos trabalhando no mesmo arquivo. Dentro do mesmo arquivo, podemos usar o modificador `private` para referenciar na mesma classe. Este método precisa ser estático (`static`), pois estamos chamando através de uma função `main()` que é estática.

Ela não tem retorno, então será `void`. Por fim, adicionaremos o nome `cadastrarAbrigo`, abriremos um bloco de parênteses (`()`)e também um bloco de chaves (`{}`).

```java
private static void cadastrarAbrigo(){
    
}
```

Agora, vamos voltar à função `main()` para extrair o código do `else if` que contém a `opcaoEscolhida == 2`, recortando o trecho que se inicia no `System.out.println()` da frase `"Digite o nome do abrigo"`, e termina no fechamento das chaves do bloco `else if` que devolve a mensagem `"Erro ao cadastrar o abrigo"`.

```java
}else if (opcaoEscolhida == 2) {
    System.out.println("Digite o nome do abrigo:");
    String nome = new Scanner(System.in).nextLine();
    System.out.println("Digite o telefone do abrigo:");
    String telefone = new Scanner(System.in).nextLine();
    System.out.println("Digite o email do abrigo:");
    String email = new Scanner(System.in).nextLine();

    JsonObject json = new JsonObject();
    json.addProperty("nome", nome);
    json.addProperty("telefone", telefone);
    json.addProperty("email", email);

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()                            .uri(URI.create(uri))
         .header("Content-Type", "application/json")
         .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
         .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    int statusCode = response.statusCode();
    String responseBody = response.body();
    if (statusCode == 200) {
        System.out.println("Abrigo cadastrado com sucesso!");
        System.out.println(responseBody);
    } else if (statusCode == 400 || statusCode == 500) {
        System.out.println("Erro ao cadastrar o abrigo:");
        System.out.println(responseBody);
    }
}
```

Voltaremos à função `cadastrarAbrigo()` que criamos no final da nossa classe e colaremos o conteúdo recortado entre suas chaves.

```java
private static void cadastrarAbrigo(){
    System.out.println("Digite o nome do abrigo:");
    String nome = new Scanner(System.in).nextLine();
    System.out.println("Digite o telefone do abrigo:");
    String telefone = new Scanner(System.in).nextLine();
    System.out.println("Digite o email do abrigo:");
    String email = new Scanner(System.in).nextLine();

    JsonObject json = new JsonObject();
    json.addProperty("nome", nome);
    json.addProperty("telefone", telefone);
    json.addProperty("email", email);

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()                            .uri(URI.create(uri))
         .header("Content-Type", "application/json")
         .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
         .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    int statusCode = response.statusCode();
    String responseBody = response.body();
    if (statusCode == 200) {
        System.out.println("Abrigo cadastrado com sucesso!");
        System.out.println(responseBody);
    } else if (statusCode == 400 || statusCode == 500) {
        System.out.println("Erro ao cadastrar o abrigo:");
        System.out.println(responseBody);
    }
}
```

Notaremos que o `send()`, do nosso método não está compilando, ou seja, está com uma linha vermelha embaixo dele.

O método `send()` pode lançar uma exceção checada (_Checked Exception_). Conforme vimos anteriormente, esta é uma exceção que precisamos tratar através de um `try catch` ou deixar explícito na assinatura do método que ela pode ser lançada. Se não fizermos isso, nossa classe não vai compilar.

Vamos colocar o cursor sobre o `send()`, a IDE - nesse caso, o IntelliJ — exibir uma caixa dde diálogo com a opção de adicionar as exceções checadas na assinatura do método ("_Add exceptions to method signature_").

Ao selecioná-la, ele vai adicionar um `throws IOException, InterruptedException` para deixar explícito na primeira linha do método `cadastrarAbrigo()` que este pode lançar uma exceção `IOExceptional` ou `InterruptedExceptional` que não estamos tratando através de um `try-catch`.

```java
private static void cadastrarAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o nome do abrigo:");
    String nome = new Scanner(System.in).nextLine();
    System.out.println("Digite o telefone do abrigo:");
    String telefone = new Scanner(System.in).nextLine();
    System.out.println("Digite o email do abrigo:");
    String email = new Scanner(System.in).nextLine();

    JsonObject json = new JsonObject();
    json.addProperty("nome", nome);
    json.addProperty("telefone", telefone);
    json.addProperty("email", email);

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()                            .uri(URI.create(uri))
         .header("Content-Type", "application/json")
         .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
         .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    int statusCode = response.statusCode();
    String responseBody = response.body();
    if (statusCode == 200) {
        System.out.println("Abrigo cadastrado com sucesso!");
        System.out.println(responseBody);
    } else if (statusCode == 400 || statusCode == 500) {
        System.out.println("Erro ao cadastrar o abrigo:");
        System.out.println(responseBody);
    }
}
```

Por fim, vamos referenciar o `cadastrarAbrigo()` no método `main()`, entre as chaves da `opcaoEscolhida == 2`.

```java
public class AdopetConsoleApplication {

    public static void main(String[] args) {
        // Código omitido

                if (opcaoEscolhida == 1) {
                    listarAbrigo();
                } else if (opcaoEscolhida == 2) {
                    cadastrarAbrigo();
                }
        // Código omitido

}
```

Com isso, temos mais uma função. Agora temos uma função para a opção 1 e outra para a opção 2.

Vamos prosseguir, extraindo todo o código que está dentro do `else if` da opção 3 para uma nova função. Nesse caso, a função é `"Listar pets do abrigo"`. Portanto, o nome da nossa função será `listarPetsDoAbrigo()`.

Voltaremos ao final da nossa classe para criar a nova função `private static void listarPetsDoAbrigo()` sem nenhum parâmetro. à sua direita, abriremos e fecharemos chaves.

```java
private static void listarPetsDoAbrigo(){
    
}
```

Voltando à função `main()`, extrairemos com "Ctrl+C" o código do bloco `else if` da opção 3 para migrá-lo para a nova função. O bloco inicia no `System.out.println()` da mensagem `"Digite o id ou nome do abrigo"` e termina antes do `else if` da opção 4.

Voltaremos para a função `listarPetsDoAbrigo()` que acabamos de criar e pressionaremos _Ctrl V_ para colar o código.

```java
private static void listarPetsDoAbrigo(){
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos/" +idOuNome +"/pets";
    HttpRequest request = HttpRequest.newBuilder()
           .uri(URI.create(uri))
           .method("GET", HttpRequest.BodyPublishers.noBody())
           .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    int statusCode = response.statusCode();
    if (statusCode == 404 || statusCode == 500) {
        System.out.println("ID ou nome não cadastrado!");
    }
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Pets cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String tipo = jsonObject.get("tipo").getAsString();
        String nome = jsonObject.get("nome").getAsString();
        String raca = jsonObject.get("raca").getAsString();
        int idade = jsonObject.get("idade").getAsInt();
        System.out.println(id +" - " +tipo +" - " +nome +" - " +raca +" - " +idade +" ano(s)");
    }
}
```

Vamos notar que o `send()` exibirá o mesmo erro acusado pela IDE com um traço vermelho abaixo do código. Para evitar isso, adicionaremos as exceções na assinatura do método.

```java
private static void listarPetsDoAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos/" +idOuNome +"/pets";
    HttpRequest request = HttpRequest.newBuilder()
           .uri(URI.create(uri))
           .method("GET", HttpRequest.BodyPublishers.noBody())
           .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    int statusCode = response.statusCode();
    if (statusCode == 404 || statusCode == 500) {
        System.out.println("ID ou nome não cadastrado!");
    }
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Pets cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String tipo = jsonObject.get("tipo").getAsString();
        String nome = jsonObject.get("nome").getAsString();
        String raca = jsonObject.get("raca").getAsString();
        int idade = jsonObject.get("idade").getAsInt();
        System.out.println(id +" - " +tipo +" - " +nome +" - " +raca +" - " +idade +" ano(s)");
    }
}
```

Copiaremos o nome da nossa função, `listarPetsDoAbrigo()`, subiremos ao interior das chaves do `else if` que continha o código recortado e configuraremos a opção 3 pela referência à função.

```java
public class AdopetConsoleApplication {

    public static void main(String[] args) {
        // Código omitido

                if (opcaoEscolhida == 1) {
                    listarAbrigo();
                } else if (opcaoEscolhida == 2) {
                    cadastrarAbrigo();
                } else if (opcaoEscolhida == 3){
                    listarPetsDoAbrigo()
                }
        // Código omitido

}
```

Estamos encurtando a função `main()`, que estava muito longa e cheia de código. Para isso, damos comportamentos específicos para a nossa classe: uma para listar pets, outra para listar abrigos e outra para cadastro. Esse é o nosso objetivo.

Por último, temos a opção 4, `"Importar pets do abrigo"`. Essa função lê o arquivo `pets.csv`, mas poderíamos referenciar outros. Ao importar esse arquivo, o sistema lerá todo o seu conteúdo e registrará na nossa API.

Vamos criar uma nova função, `private static void importarPetsDoAbrigo()` sem parâmetros, abaixo das funções anteriores.

```java
private static void importarPetsDoAbrigo() {

}
```

Copiaremos todo o código do `else if` da opção 4 e colaremos entre as chaves da nova função `importarPetsDoAbrigo()`. Esse bloco se inicia no `System.out.println()` da frase `"Digite o id ou nome do abrigo"` e termina na linha `reader.close()` antes do bloco da opção 5.

```java
private static void importarPetsDoAbrigo() {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    System.out.println("Digite o nome do arquivo CSV:");
    String nomeArquivo = new Scanner(System.in).nextLine();

    BufferedReader reader;
    try {
        reader = new BufferedReader(new FileReader(nomeArquivo));
    } catch (IOException e) {
        System.out.println("Erro ao carregar o arquivo: " + nomeArquivo);
        continue;
    }
    String line;
    while ((line = reader.readLine()) != null) {
        String[] campos = line.split(",");
        String tipo = campos[0];
        String nome = campos[1];
        String raca = campos[2];
        int idade = Integer.parseInt(campos[3]);
        String cor = campos[4];
        Float peso = Float.parseFloat(campos[5]);

        JsonObject json = new JsonObject();
        json.addProperty("tipo", tipo.toUpperCase());
        json.addProperty("nome", nome);
        json.addProperty("raca", raca);
        json.addProperty("idade", idade);
        json.addProperty("cor", cor);
        json.addProperty("peso", peso);

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        int statusCode = response.statusCode();
        String responseBody = response.body();
        if (statusCode == 200) {
            System.out.println("Pet cadastrado com sucesso: " + nome);
        } else if (statusCode == 404) {
            System.out.println("Id ou nome do abrigo não encontrado!");
            break;
        } else if (statusCode == 400 || statusCode == 500) {
            System.out.println("Erro ao cadastrar o pet: " + nome);
            System.out.println(responseBody);
            break;
        }
    }
    reader.close();
}
```

Temos a mesma questão anterior com o método `close()`, ele pode lançar uma exceção do tipo `IOException`. Vamos selecionar a opção "Add exception to method signature" para adicionar essa exceção à assinatura do método.

O `send()` também pode causar erro, conforme observamos na função anterior. Portanto, adicionaremos também as duas exceções que podem ser exibidas nele.

```java
private static void importarPetsDoAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    System.out.println("Digite o nome do arquivo CSV:");
    String nomeArquivo = new Scanner(System.in).nextLine();

    BufferedReader reader;
    try {
        reader = new BufferedReader(new FileReader(nomeArquivo));
    } catch (IOException e) {
        System.out.println("Erro ao carregar o arquivo: " + nomeArquivo);
        continue;
    }
    String line;
    while ((line = reader.readLine()) != null) {
        String[] campos = line.split(",");
        String tipo = campos[0];
        String nome = campos[1];
        String raca = campos[2];
        int idade = Integer.parseInt(campos[3]);
        String cor = campos[4];
        Float peso = Float.parseFloat(campos[5]);

        JsonObject json = new JsonObject();
        json.addProperty("tipo", tipo.toUpperCase());
        json.addProperty("nome", nome);
        json.addProperty("raca", raca);
        json.addProperty("idade", idade);
        json.addProperty("cor", cor);
        json.addProperty("peso", peso);

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        int statusCode = response.statusCode();
        String responseBody = response.body();
        if (statusCode == 200) {
            System.out.println("Pet cadastrado com sucesso: " + nome);
        } else if (statusCode == 404) {
            System.out.println("Id ou nome do abrigo não encontrado!");
            break;
        } else if (statusCode == 400 || statusCode == 500) {
            System.out.println("Erro ao cadastrar o pet: " + nome);
            System.out.println(responseBody);
            break;
        }
    }
    reader.close();
}
```

Precisamos resolver outro problema. Dentro do `while` do nosso novo método, o `reader()` não está sendo reconhecido. Se posicionarmos o cursor em cima dele, veremos uma mensagem da IDE informando que precisamos inicializar a variável `reader`, declarada com o tipo `BufferedReader`, abaixo da linha `String nomeArquivo`.

Com a mudança do método `main()`, precisaremos instanciar a variável `reader`. Vamos inicializá-la como nula, porque quando o `try`abaixo dela for acionado, o `reader` será instanciado e dentro do `while`, teremos esse objeto.

```java
BufferedReader reader = null;
```

O bloco `catch` abaixo da variável `reader` não está compilando, pois o `continue` está indicado pelo sublinhado vermelho. Vamos verificar o que está acontecendo.

Quando esse código estava dentro do `main()`, estava dentro de um _loop_ (laço) `while`. A ideia era que, se ocorresse qualquer erro no momento da importação de um arquivo, ele registraria um erro ao carregar o arquivo e continuaria nas opções.

Porém, após extrairmos o código do laço, o `continue` perdeu o seu sentido, já que não estamos mais dentro de um ciclo. Portanto, vamos removê-lo, mas ainda precisamos pensar em uma estratégia para corrigir isso, já que se caírmos no `catch`, não voltaremos para o menu.

```java
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader(nomeArquivo));
} catch (IOException e) {
    System.out.println("Erro ao carregar o arquivo: " + nomeArquivo);
}
```

O código completo da função `importarPetsDoAbrigo()` pode ser vista abaixo.

```java
private static void importarPetsDoAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    System.out.println("Digite o nome do arquivo CSV:");
    String nomeArquivo = new Scanner(System.in).nextLine();

    BufferedReader reader = null;
    try {
        reader = new BufferedReader(new FileReader(nomeArquivo));
    } catch (IOException e) {
        System.out.println("Erro ao carregar o arquivo: " + nomeArquivo);
    }
    String line;
    while ((line = reader.readLine()) != null) {
        String[] campos = line.split(",");
        String tipo = campos[0];
        String nome = campos[1];
        String raca = campos[2];
        int idade = Integer.parseInt(campos[3]);
        String cor = campos[4];
        Float peso = Float.parseFloat(campos[5]);

        JsonObject json = new JsonObject();
        json.addProperty("tipo", tipo.toUpperCase());
        json.addProperty("nome", nome);
        json.addProperty("raca", raca);
        json.addProperty("idade", idade);
        json.addProperty("cor", cor);
        json.addProperty("peso", peso);

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        int statusCode = response.statusCode();
        String responseBody = response.body();
        if (statusCode == 200) {
            System.out.println("Pet cadastrado com sucesso: " + nome);
        } else if (statusCode == 404) {
            System.out.println("Id ou nome do abrigo não encontrado!");
            break;
        } else if (statusCode == 400 || statusCode == 500) {
            System.out.println("Erro ao cadastrar o pet: " + nome);
            System.out.println(responseBody);
            break;
        }
    }
    reader.close();
}
```

Esse não é o nosso objetivo atual, mas é algo que precisamos considerar. O foco era extrair todos os métodos e códigos do `main()`, e nisso fomos bem sucedidos.

Agora, vamos inicializar a aplicação e conferir se está tudo correto.

No explorador lateral, veremos na pasta do projeto que temos a API `api.jar` que executa todas as operações através do nosso console público. Podemos instanciá-la utilizando o nosso terminal.

Abriremos o terminal na aba inferior do IntelliJ, na qual digitaremos e rodaremos o comando abaixo, onde `api.jar` é o nome do arquivo. Com isso, ele vai instanciar e inicializar a nossa API. Agora, posso minimizar esse terminal, clicando no ícone de minimizar no canto superior direito da aba.

```plaintext
java -jar api.jar
```

Voltando à função `main()`, vamos clicar no ícone de "Play" à esquerda para inicializar o projeto. Com isso, veremos que mesmo com todas as mudanças e extraindo métodos, o comportamento da aplicação não mudou.

Por exemplo, se quisermos listar um abrigo cadastrado, selecionando a opção "1" no terminal e pressionar "Enter", ele retornará a mensagem "Abrigos cadastrados" e um campo vazio. Esse é o mesmo comportamento que tínhamos anteriormente.

Se escolhermos a opção 3, ele solicitará o ID ou o nome do abrigo. Como não temos nenhum abrigo cadastrado, vamos fornecer o ID '1', como exemplo. A resposta será nula, pois não temos nenhum animal de estimação cadastrado.

A seguir, precisamos tratar nossa aplicação para que estes comportamentos sejam normalizados, no sentido de termos dados para trabalhar. Por exemplo, toda vez que listarmos os animais de estimação, ele deve retornar os animais cadastrados.

Vimos em um momento que ele não retornou dados e consequentemente, exibiu uma exceção. Este não é um comportamento que desejamos em nossa aplicação.

Como podemos criar um comportamento que seja mais amigável e comum na nossa aplicação? Isso será feito à medida que avançarmos nas aulas e refatorarmos nosso código.

## Transcrição

No último vídeo, discutimos como dividir nosso código de uma única função (que, neste caso, era `main()`) para vários métodos, cada um com suas próprias responsabilidades. Mesmo que o código ainda pareça extenso dentro da nossa classe, ao menos, tudo está mais legível, especialmente os comandos `if` e `else`.

Porém, no vídeo anterior, esquecemos de apontar a função `importarPetsDoAbrigo()` que criamos na opção 4. Precisamos referenciá-la dentro do `else if`.

```java
public class AdopetConsoleApplication {

    public static void main(String[] args) {
        // Código omitido

                if (opcaoEscolhida == 1) {
                    listarAbrigo();
                } else if (opcaoEscolhida == 2) {
                    cadastrarAbrigo();
                } else if (opcaoEscolhida == 3){
                    listarPetsDoAbrigo()
                } else if (opcaoEscolhida == 4){
                    importarPetsDoAbrigo()
                }
        // Código omitido

}
```

Com isso, o código das quatro opções se tornou mais nítido e cada função tem sua própria responsabilidade.

## Removendo Códigos Duplicados

Ainda observamos alguns "_bad smells_" (indícios que sinalizam a necessidade de refatoração) em nosso código. Por exemplo, se olharmos para o interior da nossa função `listarAbrigo()`, há uma requisição para uma API que usamos para registrar abrigos e pets, entre outras coisas.

```java
private void listarAbrigo() {
    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create(uri))
                            .method("GET", HttpRequest.BodyPublishers.noBody())
                            .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Abrigos cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String nome = jsonObject.get("nome").getAsString();
        System.out.println(id +" - " +nome);
    }
}
```

No primeiro trecho, temos uma seção que contém a URL de abrigos, um método `HTTPRequest` que realiza um `send()`, recolhe o `response.body()` e faz algo com ele.

Visualizando a função `listarPetsDoAbrigo()`, notamos um comportamento muito parecido. Embora a URL seja diferente, o código realiza um `HTTPRequest`, faz um `send()`, e lida com o `response.body()` de outra maneira.

Essa duplicação de código é prejudicial porque, se quisermos alterar um trecho de um código duplicado e esquecermos de fazer a alteração no outro, acabamos com inconsistências em nosso código.

Então, como solucionamos isso? _**Removemos a duplicação e reutilizamos o código**_. No nosso caso, podemos criar uma função chamada `dispararRequisiçãoGet()` e referenciá-la nos locais necessários.

Pode surgir uma dúvida: "Como lidar com o fato de as URLs serem diferentes?". A resposta é que _**podemos passar a URL como parâmetro.**_ Vamos demonstrar isso agora.

Abaixo da última função, no final do arquivo, criaremos a função `private static void dispararRequisicaoGet()`. Entre os parênteses, receberemos uma `String uri`.

```java
private static void dispararRequisicaoGet(String uri){

}
```

Vamos acessar a função `listarAbrigo()`. Em seu interior, abaixo da linha que declara a string `uri` com o endereço `http://localhost:8080/abrigos`, instanciamos o `HTTPRequest`, onde criamos um `newbuilder()`. Abaixo dela, passamos a URI que queremos acessar na API, indicando que o método será um `get()` e, em seguida, rodamos o `build()`.

Com essa `request`, enviamos a requisição para a API por meio do `HTTPClient`. Esse `HTTPClient` é que vai realmente enviá-la. Então, criamos um `client.send()` e informamos essa `request` que criamos, que é do tipo `get()`. Se observarmos, toda essa parte é responsável pela requisição `get`.

```java
// Código omitido
        HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create(uri))
                            .method("GET", HttpRequest.BodyPublishers.noBody())
                            .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        // Código omitido
```

Portanto, levaremos todo esse código para a nossa função `dispararRequisicaoGet()`. Para isso, vamos recortar esse conteúdo, a partir da linha da linha do `newbuilder()` do `HttpRequest` até a linha do `HTTPResponse<String> response` e colar entre as chaves de `dispararRequisicoesGet()`.

```java
private static void dispararRequisicaoGet(String uri){
    HttpRequest request = HttpRequest.newBuilder()
               .uri(URI.create(uri))
               .method("GET", HttpRequest.BodyPublishers.noBody())
               .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

A variável `response` não está mais sendo referenciada porque o `response` será utilizado somente na classe onde estamos fazendo a requisição `get()`. Vamos alterar esse trecho para que essa função retorne esse `response`, substituindo o `HttpResponse<String> response` por um `return`.

Com o `return client.send()` o tipo da função não será mais `void`, e sim um `HTTPResponse`.

```java
private static HTTPResponse dispararRequisicaoGet(String uri){
    HttpRequest request = HttpRequest.newBuilder()
               .uri(URI.create(uri))
               .method("GET", HttpRequest.BodyPublishers.noBody())
               .build();
    return client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

A função não está compilando porque não temos o `HTTPClient` nela, responsável por realizar a requisição para a API.

Para corrigir isso, podemos receber como parâmetro um `HTTPClient` e chamar ele de `client`, à esquerda da `String uri`.

```java
private static HTTPResponse dispararRequisicaoGet(HTTPClient client, String uri){
    HttpRequest request = HttpRequest.newBuilder()
               .uri(URI.create(uri))
               .method("GET", HttpRequest.BodyPublishers.noBody())
               .build();
    return client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

Agora, nosso método passa a compilar, contudo, apontará outro erro que já conhecemos, proveniente da função checada `send()`. Para corrigi-lo, selecionaremos a opção "Add exceptions to method signature" fornecida pelo sistema para adicionar as exceções ue esse método `send` pode lançar na função `dispararRequisicaoGet()`.

```java
private static HTTPResponse dispararRequisicaoGet(HTTPClient client, String uri) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
               .uri(URI.create(uri))
               .method("GET", HttpRequest.BodyPublishers.noBody())
               .build();
    return client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

Com tudo isso, recebemos o `client` que faz a requisição HTTP, instanciado anteriormente, preparamos a requisição `request` do tipo `get` que esse `client` precisa fazer e recebemos a `uri` informada como parâmetro. Em seguida, realizamos essa requisição e retornamos o `response`.

Vamos buscar o `response` acima, na nossa função `listarAbrigo()`. Em seu interior, abaixo da `String uri`, vamos referenciar a `dispararRequisicaoGet()`. Entre os parênteses dela, adicionaremos o `client` e a `uri` como parâmetros. É importante que o `client` seja adicionado antes da `uri`.

Ele retornará um `HTTPResponse` de `<String>`, que chamaremos de `response`, portanto, vamos adicionar o comando `HTTPResponse<String> response` à sua esquerda junto a um sinal de mais.

```java
private void listarAbrigo() {
    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
        HTTPResponse<String> response = dispararRequisicaoGet(client, uri);
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Abrigos cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String nome = jsonObject.get("nome").getAsString();
        System.out.println(id +" - " +nome);
    }
}
```

Removemos todo o código do `HTTPRequest` da função `listarAbrigo()`. A seguir, acessaremos o código da função `listarPetsDoAbrigo()` e substituiremos toda a parte de `HTTPRequest` pela linha de comando recém-criada. Bem interessante, não é?

Assim como nas outras, temos um `client` que sempre instanciamos ao usar esta função e que possui uma URL específica. Abaixo dessa parte, podemos eliminar toda a seção de `HTTPResponse` e `HTTPRequest`e adicionar a linha `HTTPResponse<String> response = dispararRequisicaoGet(client, uri)`.

```java
private static void listarPetsDoAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos/" +idOuNome +"/pets";
        HTTPResponse<String> response = dispararRequisicaoGet(client, uri);
    int statusCode = response.statusCode();
    if (statusCode == 404 || statusCode == 500) {
        System.out.println("ID ou nome não cadastrado!");
    }
    String responseBody = response.body();
    JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
    System.out.println("Pets cadastrados:");
    for (JsonElement element : jsonArray) {
        JsonObject jsonObject = element.getAsJsonObject();
        long id = jsonObject.get("id").getAsLong();
        String tipo = jsonObject.get("tipo").getAsString();
        String nome = jsonObject.get("nome").getAsString();
        String raca = jsonObject.get("raca").getAsString();
        int idade = jsonObject.get("idade").getAsInt();
        System.out.println(id +" - " +tipo +" - " +nome +" - " +raca +" - " +idade +" ano(s)");
    }
}
```

Agora, vamos realizar o mesmo processo para lidar com o tipo `post()`. Abaixo da função `dispararRequisicaoGet()`, criaremos uma `private static` que por enquanto será `void`. Chamaremos essa função de `dispararRequisicaoPost()`.

```java
private static void dispararRequisicaoPost() {

}
```

Acessando a função `importarPetsDoAbrigo()`, vamos copiar com "Ctrl+C" a parte que se inicia no `HTTPRequest request` e termina na linha do `HTTPResponse`.

```java
// Código omitido
    HttpRequest request = HttpRequest.newBuilder()
           .uri(URI.create(uri))
           .header("Content-Type", "application/json")
           .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
           .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
// Código omitido
```

Em seguida, colaremos esse trecho no interior da função `dispararRequisicaoPost()`.

```java
private static void dispararRequisicaoPost() {
    HttpRequest request = HttpRequest.newBuilder()
           .uri(URI.create(uri))
           .header("Content-Type", "application/json")
           .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
           .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

Para essas ações, precisaremos receber entre os parênteses da função o `HTTPClient client`, a `String uri`. Além disso, temos um objeto _JSON_ para receber, que é uma biblioteca usada para transformar nossa string em JSON (formato aceito pela API).

No caso do `post()`, teremos uma diferença em relação ao `get()`. Se observarmos a função `importarPetsDoAbrigo()`, vamos ver que passamos o `JsonObject json` como um parâmetro da nossa função. Portanto, `dispararRequisicaoPost()` receberá entre parênteses um `JsonObject json` à direita da `String uri`.

O `JsonObject` é um objeto da biblioteca externa _JSON_ que transforma nosso objeto Java em _JSON_, pois nossa API espera como entrada um _JSON_.

Precisamos adicionar as exceções à assinatura do método para sanar o problema do `send()`, assim como fizemos antes, bem como modificar o retorno de `void` para `HTTPResponse String`.

Além disso, na linha do `client.send()` ao final do método, substituiremos o `HttpResponse<String> response` e o sinal de igual por um `return`, assim como feito nas outras funções.

Por fim, modificaremos o retorno do método de `void` para `HttpResponse<String>`.

```java
private static HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create(uri))
      .header("Content-Type", "application/json")
      .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
      .build();

    return client.send(request, HttpResponse.BodyHandlers.ofString());

}
```

Subindo o arquivo, acessaremos as funções `importarPetsDoAbrigo()` e `cadastrarAbrigo()`. Em ambas, substituiremos a seção que se inicia na linha `HTTRequest request` e termina na linha do `HTTPResponse<String> response` pela função `dispararRequisicaoPost()`.

Entre os parênteses da função colada, precisaremos fornecer o `client`, a `uri` e o `json` do tipo _JSON Object_.

```java
dispararRequisicaoPost(client, uri, json);
```

Por fim, à esquerda desse comando, configuraremos o retorno com um sinal de igual para receber um `HTTPResponse<String>`, que chamaremos de `response`.

```java
HTTPResponse<String> response = dispararRequisicaoPost(client, uri, json);
```

**Código da função `importarPetsDoAbrigo()`:**

```java
private static void importarPetsDoAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o id ou nome do abrigo:");
    String idOuNome = new Scanner(System.in).nextLine();

    System.out.println("Digite o nome do arquivo CSV:");
    String nomeArquivo = new Scanner(System.in).nextLine();

    BufferedReader reader = null;
    try {
        reader = new BufferedReader(new FileReader(nomeArquivo));
    } catch (IOException e) {
        System.out.println("Erro ao carregar o arquivo: " + nomeArquivo);
    }
    String line;
    while ((line = reader.readLine()) != null) {
        String[] campos = line.split(",");
        String tipo = campos[0];
        String nome = campos[1];
        String raca = campos[2];
        int idade = Integer.parseInt(campos[3]);
        String cor = campos[4];
        Float peso = Float.parseFloat(campos[5]);

        JsonObject json = new JsonObject();
        json.addProperty("tipo", tipo.toUpperCase());
        json.addProperty("nome", nome);
        json.addProperty("raca", raca);
        json.addProperty("idade", idade);
        json.addProperty("cor", cor);
        json.addProperty("peso", peso);

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
                HTTPResponse<String> response = dispararRequisicaoPost(client, uri, json);
        int statusCode = response.statusCode();
        String responseBody = response.body();
        if (statusCode == 200) {
            System.out.println("Pet cadastrado com sucesso: " + nome);
        } else if (statusCode == 404) {
            System.out.println("Id ou nome do abrigo não encontrado!");
            break;
        } else if (statusCode == 400 || statusCode == 500) {
            System.out.println("Erro ao cadastrar o pet: " + nome);
            System.out.println(responseBody);
            break;
        }
    }
    reader.close();
}
```

**Código da função `cadastrarAbrigo()`:**

```java
private static void cadastrarAbrigo() throws IOException, InterruptedException {
    System.out.println("Digite o nome do abrigo:");
    String nome = new Scanner(System.in).nextLine();
    System.out.println("Digite o telefone do abrigo:");
    String telefone = new Scanner(System.in).nextLine();
    System.out.println("Digite o email do abrigo:");
    String email = new Scanner(System.in).nextLine();

    JsonObject json = new JsonObject();
    json.addProperty("nome", nome);
    json.addProperty("telefone", telefone);
    json.addProperty("email", email);

    HttpClient client = HttpClient.newHttpClient();
    String uri = "http://localhost:8080/abrigos";
        HTTPResponse<String> response = dispararRequisicaoPost(client, uri, json);
        int statusCode = response.statusCode();
    String responseBody = response.body();
    if (statusCode == 200) {
        System.out.println("Abrigo cadastrado com sucesso!");
        System.out.println(responseBody);
    } else if (statusCode == 400 || statusCode == 500) {
        System.out.println("Erro ao cadastrar o abrigo:");
        System.out.println(responseBody);
    }
}
```

Se tratam de _JSONs_ com conteúdos diferentes, mas que são o mesmo _JSON Object_.

Portanto, agora, conseguimos deixar nosso código um pouco mais enxuto. Separamos em funções para organizar o código em responsabilidades, reduzir a duplicidade e o tamanho de um método.

Essas são técnicas aparentemente simples, mas que promovem uma grande melhoria no código. Agora, sabemos exatamente onde precisamos realizar alterações para, por exemplo, trabalhar com as requisições POST ou GET.

Quando quisermos alterar a função `listarAbrigo()`, por exemplo, nos dirigiremos a uma função específica. Portanto, a leitura do código se tornou muito mais fácil.


# Instanciando classe AdopetConsoleApplication e usando referência para acessar métodos não estáticos

 [Próxima Atividade](https://cursos.alura.com.br/course/java-refatoracao-melhorando-codigos-boas-praticas/task/138297/next)

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138297/question)

Foi visto durante a aula que para acessar os métodos que criamos na classe `AdopetConsoleApplication` precisávamos transformá-los em métodos estáticos. Isso significa que se trata de um método de classe que não depende de uma instância. Dessa maneira, podemos acessá-lo de forma direta entre métodos estáticos:

```csharp
private static void listarAbrigos() {
        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();
        JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
        System.out.println("Abrigos cadastrados:");
        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            long id = jsonObject.get("id").getAsLong();
            String nome = jsonObject.get("nome").getAsString();
            System.out.println(id +" - " +nome);
        }
    }

public static void main(String… x) { 
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

                if (opcaoEscolhida == 1) {
                    listarAbrigos();
                }
}
```

Também há a opção de criarmos uma instância da nossa classe e referenciar métodos não estáticos, pois os métodos passam a ser de instância. Vamos ver como isso fica na Opinião do instrutor.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/java-refatoracao-melhorando-codigos-boas-praticas/138297/opinion)

A primeira mudança será a criação da instância `AdopetConsoleApplication`:

```java
AdopetConsoleApplication adopetConsoleApplication = new AdopetConsoleApplication();
```

Com a instância em mãos, podemos mudar o método `listarAbrigos( )` para não estático:

```java
private void listarAbrigos() {
        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();
        JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
        System.out.println("Abrigos cadastrados:");
        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            long id = jsonObject.get("id").getAsLong();
            String nome = jsonObject.get("nome").getAsString();
            System.out.println(id +" - " +nome);
        }
    }
```

E, assim, usar a instância para referenciar o método `listarAbrigos()`:

```csharp
public static void main(String… x) { 
    System.out.println("##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####");
            AdopetConsoleApplication adopetConsoleApplication = new AdopetConsoleApplication();
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

                if (opcaoEscolhida == 1) {
                    adopetConsoleApplication.listarAbrigos();
                }
}
```

## Transcrição

Extraímos toda a lógica que estava na função `main()` para métodos específicos, melhorando a organização da nossa classe. Cada ação ou comportamento do nosso programa tem agora um método associado.

Entretanto, como a nossa aplicação pode adquirir mais comportamentos ao longo do tempo, o aumento de funções específicas pode se tornar um problema.

Se tivermos, por exemplo, uma opção de excluir abrigos, precisaríamos criar mais uma função que excluísse abrigos da API. Se precisássemos alterar algo, faríamos o mesmo, criando funções adicionais, e isso pode gerar um _code smell_.

"**Code smell**" é um termo usado na programação para descrever um sintoma no código que pode indicar um problema mais profundo. No nosso caso, ao adicionar comportamentos dentro da mesma classe, criamos outros code smell, pois acabamos por ter uma única classe com todos os comportamentos. Essa situação acaba ferindo um dos princípios do SOLID.

**SOLID** é um acrônimo em que cada letra representa um princípio de boas práticas do nosso código, e o "S" se refere ao _Single Responsibility Principle_ (Princípio da Responsabilidade Única). Este princípio declara que uma classe deve ter um, e apenas um, motivo para mudar; ou seja, deve ter apenas uma responsabilidade.

No nosso código, temos uma mistura de responsabilidades: tudo que é relativo a pet e a abrigo, está junto na mesma classe com o menu. Assim, nossa classe fica muito desorganizada.

Em orientação a objetos, isso é chamado de "_**God Class**_" (Classe Deus), uma classe que "sabe demais" ou "faz demais", o que é o nosso caso atual.

De volta à IDE, para listar abrigos cadastrados existe uma função; cadastrar novo abrigo é outro comportamento; passando para pets, temos outras responsabilidades. Com tudo isso misturado, além da parte do menu, nossa classe se torna grande e tende a crescer ainda mais.

A solução é **definir nossas classes**. Por exemplo, quais classes, além da `AdopetConsoleApplication.java`, fazem sentido na nossa aplicação para ser cumprido o princípio da responsabilidade única?

## Criando a classe `AbrigoService`

No caso da nossa aplicação, precisamos de pelo menos duas novas classes: uma para interagir com a parte de abrigo e outra para interagir com a parte de pets.

Normalmente, as classes usadas para estabelecer regras de negócio, como a que temos, por exemplo, para listar um abrigo (`listarAbrigo()`), temos que executar algumas operações para conseguir listá-los de fato. Se for para cadastrar (`cadastrarAbrigo()`), também precisamos executar algumas ações para registrar um abrigo.

Essas classes são geralmente chamadas de **classes de serviço**, que são classes que executam alguma operação ou determinada regra de negócio para alcançar um objetivo específico.

Então, precisaremos de duas classes de serviço: `AbrigoService` e `PetService`.

> É sempre bom colocar em inglês ou em português. Então, se quisermos usar `AbrigoService`, tudo bem, mas caso você prefira `AbrigoServico`, também está certo. Neste caso, usaremos `AbrigoService` e `PetService`.

Dentro de "br.com.alura", na aba do projeto à esquerda da interface, vamos criar um novo pacote chamado "service" clicando com o botão direito e indo até "_New > Package_". No pacote de serviço criado, vamos clicar com o botão direito novamente e ir até "_New > Java Class_" para criar uma nova classe chamada `AbrigoService`.

Faremos o mesmo processo para a classe `PetService`.

Agora, todo o código de `cadastrarAbrigo()` e `listarAbrigo()` não estará mais na classe `AdopetConsoleApplication`, mas sim na classe `AbrigoService`. Então, vamos recortar ("Ctrl + X") todo o bloco desses métodos e levar para o arquivo `AbrigoService.java`.

> _`AbrigoService.java`:_

```java
package br.com.alura.service;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class AbrigoService {

    private static void listarAbrigo() throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = dispararRequisicaoGet(client, uri);
        String responseBody = response.body();
        JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
        System.out.println("Abrigos cadastrados:");
        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            long id = jsonObject.get("id").getAsLong();
            String nome = jsonObject.get("nome").getAsString();
            System.out.println(id +" - " +nome);
        }
    }

    private static void cadastrarAbrigo() throws IOException, InterruptedException {
        System.out.println("Digite o nome do abrigo:");
        String nome = new Scanner(System.in).nextLine();
        System.out.println("Digite o telefone do abrigo:");
        String telefone = new Scanner(System.in).nextLine();
        System.out.println("Digite o email do abrigo:");
        String email = new Scanner(System.in).nextLine();

        JsonObject json = new JsonObject();
        json.addProperty("nome", nome);
        json.addProperty("telefone", telefone);
        json.addProperty("email", email);

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = dispararRequisicaoPost(client, uri, json);
        int statusCode = response.statusCode();
        String responseBody = response.body();
        if (statusCode == 200) {
            System.out.println("Abrigo cadastrado com sucesso!");
            System.out.println(responseBody);
        } else if (statusCode == 400 || statusCode == 500) {
            System.out.println("Erro ao cadastrar o abrigo:");
            System.out.println(responseBody);
        }
    }
}
```

Na classe `AbrigoService`, os métodos `listarAbrigo()` e `cadastrarAbrigo()` não serão mais estáticos, porque não os chamamos mais dentro de uma função `main()` que antes chamava `static`, então podemos retirar esta palavra da declaração dos métodos.

Além disso, eles não podem mais ser privados, porque agora enxergaremos esse método de outra classe, ou seja, a classe `AdopetConsoleApplication`, de alguma forma, enxergará os métodos dentro da classe `AbrigoService`.

Usamos `private` apenas quando as informações estão na mesma classe, então vamos substituir este modificador por `public`.

> _Linha de código 15:_

```java
public void listarAbrigo() throws IOException, InterruptedException {
```

> _Linha de código 30:_

```java
public void cadastrarAbrigo() throws IOException, InterruptedException {
```

Agora, ao verificar o código, ele reclama apenas na linha 45, em que não há a compilação devido aos métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`.

Para corrigir isso, vamos retornar à classe `AdopetConsoleApplication` e ir até o final do código, onde possuímos os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`. Vamos copiá-los por enquanto e colar na classe `AbrigoService`, após a declaração dos métodos `listarAbrigo()` e `cadastrarAbrigo()`.

```java
// código omitido

private static HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(uri))
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
    return client.send(request, HttpResponse.BodyHandlers.ofString());
}

private static HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(uri))
            .header("Content-Type", "application/json")
            .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
            .build();

    return client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

Vamos remover novamente o `static` das linhas 59 e 67.

> _Linha de código 59:_

```java
private HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
```

> _Linha de código 67:_

```java
private HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
```

Nesse caso, podemos deixar os métodos como `private`, pois copiamos ambos para a classe `AbrigoService` e eles não serão vistos fora dela.

Os únicos métodos que não podemos deixar como `private` são `cadastrarAbrigo()` e `listarAbrigo()`, pois precisaremos acessá-los fora da classe `AbrigoService`, em `AdopetConsoleApplication`.

Agora que mudamos o código de `AdopetConsoleApplication`, devemos nos perguntar como acessaremos `listarAbrigo()` e `cadastrarAbrigo()`. Para isso, dentro da função `main()`, quando ela for chamada, iremos instanciar a classe `AbrigoService`.

Criaremos na linha 20 do arquivo `AdopetConsoleApplication.java` uma variável chamada `abrigoService` e, em seguida, iremos instanciá-la.

> _`AdopetConsoleApplication.java`:_

```java
AbrigoService abrigoService = new AbrigoService();
```

Agora, no escopo da função `main()`, temos uma variável `abrigoService`. Se copiarmos essa variável, podemos chamar `abrigoService.listarAbrigo()` e `abrigoService.cadastrarAbrigo()` na condição `if` iniciada na linha 36.

```java
if (opcaoEscolhida == 1) {
    abrigoService.listarAbrigo();
} else if (opcaoEscolhida == 2) {
    abrigoService.cadastrarAbrigo();
}
```

## Conclusão

Podemos concluir que, se desejarmos fazer qualquer coisa em relação ao abrigo, seja cadastrar, alterar ou deletar, teremos uma classe de serviço que nos fornecerá métodos para isso.

Para pets, teremos de fazer o mesmo procedimento, mas por enquanto, vamos parar neste ponto. No próximo vídeo, continuaremos com a refatoração do nosso programa, extraindo funções que estavam na God Class `AdopetConsoleApplication` para classes específicas, cada uma com seus comportamentos próprios. **Te encontramos lá!**

## Transcrição

Agora precisamos continuar extraindo os métodos referentes a pets da classe `AdopetConsoleApplication` para a classe criada anteriormente: a `PetService`.

## Criando a classe `PetService`

Ao acessar o arquivo `PetService.java`, notamos que ainda não há nada. Logo, os métodos `listarPetsDoAbrigo()` e `importarPetsDoAbrigo()` que estão em `AdopetConsoleApplication.java` precisam ser movidos para a classe `PetService`.

> _`PetService.java`:_

```java
package br.com.alura.service;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class PetService {

    private static void listarPetsDoAbrigo() throws IOException, InterruptedException {
        System.out.println("Digite o id ou nome do abrigo:");
        String idOuNome = new Scanner(System.in).nextLine();

        HttpClient client = HttpClient.newHttpClient();
        String uri = "http://localhost:8080/abrigos/" +idOuNome +"/pets";
        HttpResponse<String> response = dispararRequisicaoGet(client, uri);
        int statusCode = response.statusCode();
        if (statusCode == 404 || statusCode == 500) {
            System.out.println("ID ou nome não cadastrado!");
        }
        String responseBody = response.body();
        JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
        System.out.println("Pets cadastrados:");
        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            long id = jsonObject.get("id").getAsLong();
            String tipo = jsonObject.get("tipo").getAsString();
            String nome = jsonObject.get("nome").getAsString();
            String raca = jsonObject.get("raca").getAsString();
            int idade = jsonObject.get("idade").getAsInt();
            System.out.println(id +" - " +tipo +" - " +nome +" - " +raca +" - " +idade +" ano(s)");
        }
    }

    private static void importarPetsDoAbrigo() throws IOException, InterruptedException {
        System.out.println("Digite o id ou nome do abrigo:");
        String idOuNome = new Scanner(System.in).nextLine();

        System.out.println("Digite o nome do arquivo CSV:");
        String nomeArquivo = new Scanner(System.in).nextLine();

        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(nomeArquivo));
        } catch (IOException e) {
            System.out.println("Erro ao carregar o arquivo: " +nomeArquivo);
        }
        String line;
        while ((line = reader.readLine()) != null) {
            String[] campos = line.split(",");
            String tipo = campos[0];
            String nome = campos[1];
            String raca = campos[2];
            int idade = Integer.parseInt(campos[3]);
            String cor = campos[4];
            Float peso = Float.parseFloat(campos[5]);

            JsonObject json = new JsonObject();
            json.addProperty("tipo", tipo.toUpperCase());
            json.addProperty("nome", nome);
            json.addProperty("raca", raca);
            json.addProperty("idade", idade);
            json.addProperty("cor", cor);
            json.addProperty("peso", peso);

            HttpClient client = HttpClient.newHttpClient();
            String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
            HttpResponse<String> response = dispararRequisicaoPost(client, uri, json);
            int statusCode = response.statusCode();
            String responseBody = response.body();
            if (statusCode == 200) {
                System.out.println("Pet cadastrado com sucesso: " + nome);
            } else if (statusCode == 404) {
                System.out.println("Id ou nome do abrigo não encontado!");
                break;
            } else if (statusCode == 400 || statusCode == 500) {
                System.out.println("Erro ao cadastrar o pet: " + nome);
                System.out.println(responseBody);
                break;
            }
        }
        reader.close();
    }
}
```

Da mesma forma que fizemos anteriormente na classe `AbrigoService`, esses métodos não serão mais estáticos (`static`) nem privados (`private`), mas públicos (`public`), porque agora precisamos que eles sejam visíveis fora da classe `PetService`.

> _Linha de código 17:_

```java
public void listarPetsDoAbrigo() throws IOException, InterruptedException {
```

> _Linha de código 42:_

```java
public void importarPetsDoAbrigo() throws IOException, InterruptedException {
```

No entanto, teremos o mesmo problema: os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()` não compilam, porque não estão mais dentro da classe.

A pergunta que surge é: vamos duplicar o código em `AbrigoService` e `PetService`? Sim, vamos duplicar. Refatorar é um processo que ocorre passo a passo. Às vezes, podemos até adicionar um _bad smell_, mas ao longo do tempo, com as refatorações, ajustamos tudo.

Por enquanto, teremos essa duplicação em `AbrigoService` e `PetService`, mas, futuramente, vamos trabalhar para melhorar isso também.

O importante agora é **separar responsabilidades**, definindo classes distintas para que cada uma tenha realmente a sua própria responsabilidade. Portanto, copiaremos os métodos `dispararRequisicaoPost()` e `dispararRequisicaoGet()` de `AdopetConsoleApplication.java` para o final do código de `PetService.java`.

> _`PetService.java`:_

```java
// código omitido

private static HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(uri))
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
    return client.send(request, HttpResponse.BodyHandlers.ofString());
}

private static HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(uri))
            .header("Content-Type", "application/json")
            .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
            .build();

    return client.send(request, HttpResponse.BodyHandlers.ofString());
}
```

Os métodos não serão mais estáticos, então vamos remover o termo `static` das linhas 94 e 102, mas podemos mantê-las como privadas (`private`), porque `PetService` só precisa enxergá-los internamente e não precisamos deles em nenhum outro lugar.

> _Linha de código 94:_

```java
private HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
```

> _Linha de código 102:_

```java
private HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
```

Feito isso, de volta à classe `AdopetConsoleApplication`, podemos deletar todo o código referente a `dispararRequisicaoPost()` e `dispararRequisicaoGet()`. Com isso, a nossa _God Class_ fica mais enxuta, basicamente com a função de mostrar o menu.

> _`AdopetConsoleApplication.java`:_

```java
// código omitido

public class AdopetConsoleApplication {

    public static void main(String[] args) {
        AbrigoService abrigoService = new AbrigoService(client);
        PetService petService = new PetService(client);
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

                if (opcaoEscolhida == 1) {
                    abrigoService.listarAbrigo();
                } else if (opcaoEscolhida == 2) {
                    abrigoService.cadastrarAbrigo();
                } else if (opcaoEscolhida == 3) {
                    listarPetsDoAbrigo();
                } else if (opcaoEscolhida == 4) {
                    importarPetsDoAbrigo();
                } else if (opcaoEscolhida == 5) {
                    break;
                } else {
                    System.out.println("NÚMERO INVÁLIDO!");
                    opcaoEscolhida = 0;
                }
            }
            System.out.println("Finalizando o programa...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

Com este código, quando selecionamos uma opção do menu, a classe sabe qual função e de que classe deve chamar, mas de uma forma que ela não tenha essa responsabilidade, ela apenas redireciona. Trata-se de uma **classe controladora** (_controller_) que recebe uma requisição e sabe para quem enviá-la: se para `AbrigoService` ou para `PetService`.

Ela não conhece os detalhes dessas classes, mas sabe para quem enviar. Então, temos uma classe muito mais enxuta, mais limpa, e assim, começamos a trabalhar de forma mais orientada a objetos e seguindo boas práticas.

No entanto, o código ainda não está compilando, pois os métodos `listarPetsDoAbrigo()` e `importarPetsDoAbrigo()` agora são da classe `PetService`, então precisaremos criar uma instância de `PetService`, da mesma forma que criamos uma instância de `AbrigoService`.

Para isso, dentro da função `main()`, abaixo da variável `abrigoService` que instanciamos, criaremos uma variável do tipo `PetService` chamada `petService`, que recebe a instância `new PetService()`.

> _Linha de código 23:_

```java
PetService petService = new PetService();
```

Feito isso, vamos copiar a variável `petService` e chamá-la nas opções 3 e 4 do bloco condicional `if`, localizado a partir da linha 42.

```java
} else if (opcaoEscolhida == 3) {
    petService.listarPetsDoAbrigo();
} else if (opcaoEscolhida == 4) {
    petService.importarPetsDoAbrigo();
```

Agora nosso código referencia corretamente as classes. Analisando as importações ao início do código, conseguimos notar o tanto de informações que limpamos da nossa aplicação. Todos os `import` que estão em cinza, ou seja, que não têm referência na classe, podem ser apagados.

> _Trecho a ser removido do arquivo `AdopetConsoleApplication.java`:_

```java
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
```

Isso mostra que nossa refatoração está dando certo conforme esperado, pois agora, de fato, usamos somente o necessário para a classe `AdopetConsoleApplication` funcionar.

### Testando o código

Se quisermos testar, podemos executar a classe `AdopetConsoleApplication` e obter o seguinte resultado no console:

```console
##### BOAS VINDAS AO SISTEMA ADOPET CONSOLE #####

DIGITE O NÚMERO DA OPERAÇÃO DESEJADA:
1 -> Listar abrigos cadastrados 
2 -> Cadastrar novo abrigo
3 -> Listar pets do abrigo
4 -> Importar pets do abrigo
5 -> Sair
```

Ao digitar "1", por exemplo, para listar os abrigos cadastrados, teremos um resultado vazio. Estamos com o mesmo comportamento anterior de quando iniciamos o programa, mas agora eles estão alocados em suas respectivas classes. Se quisermos alterar algo referente a pets, temos uma classe específica para isto; se quisermos mudar em relação a abrigos, também temos uma classe.

## Conclusão

Nosso código já está um pouco mais organizado, mas ainda temos muita coisa para fazer! O objetivo deste vídeo era te mostrar o que já temos na classe `AbrigoService` e construir a classe `PetService`.

No próximo vídeo, daremos continuidade ao que podemos refatorar e trazer como boas práticas para o nosso código. **Te esperamos lá!**

## Transcrição

Embora nosso código esteja mais organizado com as classes `AbrigoService` e `PetService`, precisamos resolver agora a duplicação que notamos nas classes previamente criadas. Ambas precisam usar os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`.

Quando migramos da classe `AdopetConsoleApplication` os métodos de abrigo para `AbrigoService`, levamos os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`, e o mesmo ocorreu para a classe `PetService`.

O processo de refatoração funciona dessa maneira. Às vezes, refatoramos para um bem maior e acabamos acrescentando algum _bad smell_ (problema no código) que precisaremos resolver posteriormente. Por isso, a refatoração é uma atividade contínua e sempre temos que repensar e melhorar nosso código.

Entretanto, além de estarem duplicados, os métodos fazem com que a classe não esteja de acordo com o princípio do "S" de SOLID: o da **responsabilidade única**.

A classe `AbrigoService` deveria ter a responsabilidade somente de abrigo, mas, na verdade, ela tem a responsabilidade de disparar requisições POST e GET, assim como a classe `PetService`, que deveria ter somente responsabilidades de pets.

Portanto, precisamos realmente isolar os códigos de `dispararRequisicaoGet()` e `dispararRequisicaoPost()` em algum lugar, para depois usá-lo como referência nas classes que precisam destes métodos.

## Criando a classe `ClientHttpConfiguration`

Para isolar e reaproveitar, podemos **criar uma classe** que terá a responsabilidade de fazer as requisições GET e POST. Com isso, o método que precisar chamar essas requisições, vai referenciar a classe que terá essa função.

Na aba "Project" à esquerda, temos um pacote "service" contendo as classes `AbrigoService` e `PetService`. Criaremos um novo pacote chamado "client"; para isso, clicamos com o botão direito sobre "br.com.alura" e vamos até "_New > Package_".

Neste pacote, criaremos a classe que terá os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`, e chamaremos ela de `ClientHttpConfiguration`, uma classe de configuração.

Feito isso, o próximo passo é levar os métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()` para dentro da nova classe. Para isso, vamos acessar a classe `AbrigoService.java` e recortar ambos para o arquivo `ClientHttpConfiguration.java`.

> _`ClientHttpConfiguration.java`:_

```java
// código omitido

public class ClientHttpConfiguration {

    private HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    private HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(json.toString()))
                .build();

        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }
}
```

Agora temos uma questão: esses dois métodos não podem mais ser privados, pois serão referenciados de fora da classe `ClientHttpConfiguration`. Então, vamos alterar o modificador de `private` para `public`.

> _Linha de código 13:_

```java
public HttpResponse<String> dispararRequisicaoGet(HttpClient client, String uri) throws IOException, InterruptedException {
```

> _Linha de código 21:_

```java
public HttpResponse<String> dispararRequisicaoPost(HttpClient client, String uri, JsonObject json) throws IOException, InterruptedException {
```

A classe `AbrigoService` parou de compilar, porque agora não tem referência de `dispararRequisicaoPost()` e `dispararRequisicaoGet()`. Da mesma forma, `PetService` deixará de compilar, pois vamos apagar esses dois métodos que estavam repetidos.

Nesse momento, ainda temos a instância de `HttpClient` na linha de código 18, no escopo do método `listarAbrigo()` da classe `AbrigoService`.

A variável `client` é passada na linha 20 para o método `dispararRequisicaoGet()` como parâmetro, então ele é usado para fazer a requisição.

> _`AbrigoService.java`:_

```java
HttpClient client = HttpClient.newHttpClient(); 
String uri = "http://localhost:8080/abrigos"; 
HttpResponse<String> response = dispararRequisicaoGet(client, uri);
```

Fazemos o mesmo no escopo do método `cadastrarAbrigo()`, da linha 45 à 47.

```java
HttpClient client = HttpClient.newHttpClient(); 
String uri = "http://localhost:8080/abrigos"; 
HttpResponse<String> response = dispararRequisicaoPost(client, uri, json);
```

Da mesma forma, na classe `PetService`, temos essa instância no escopo dos métodos `listarPetsDoAbrigo()` e `importarPetsDoAbrigo()`.

Sendo assim, precisamos instanciar diretamente na classe `ClientHttpConfiguration`, para evitar a repetição de `HttpClient` em vários arquivos. Para isso, vamos colar o trecho a seguir acima de `HttpRequest` no escopo do método `dispararRequisicaoGet()`, na linha 15.

Faremos o mesmo na linha 24, no escopo do método `dispararRequisicaoPost()`.

> _`ClientHttpConfiguration.java`:_

```java
HttpClient client = HttpClient.newHttpClient();
```

Dessa forma, não precisamos mais receber `HttpClient client` como parâmetro em nenhum dos métodos, então podemos apagar este trecho.

> _Linha de código 13:_

```java
public HttpResponse<String> dispararRequisicaoGet(String uri) throws IOException, InterruptedException {
```

> _Linha de código 23:_

```java
public HttpResponse<String> dispararRequisicaoPost(String uri, JsonObject json) throws IOException, InterruptedException {
```

Agora o método `dispararRequisicaoGet()` recebe como parâmetro apenas a `uri` que será chamada, e o método `dispararRequisicaoPost()` recebe a `uri` e o objeto `json` que queremos disparar para a API.

Feito isso, vamos retornar à classe `AbrigoService` e remover a instância de `client` do método `listarAbrigo()`, bem como o `client` passado como parâmetro para `dispararRequisicaoGet()`.

> _`AbrigoService.java`:_

```java
HttpResponse<String> response = dispararRequisicaoGet(uri);
```

Faremos o mesmo no método `cadastrarAbrigo()`:

```java
HttpResponse<String> response = dispararRequisicaoPost(uri, json);
```

Na classe `PetService`, o procedimento será o mesmo: remover as instâncias de `client` e também `client` como parâmetro dos métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`.

Após esses ajustes, o código ainda não funciona. Para solucionar isso, poderíamos instanciar `ClientHttpConfiguration` em cada classe e chamar os métodos através da variável criada a partir da instância. Porém, há uma forma mais interessante.

Ao iniciar a aplicação, precisaremos de uma instância de `ClientHttpConfiguration` que possa ser compartilhada com `PetService` e `AbrigoService`. Não há necessidade de uma instância para cada classe. É importante evitar instanciar objetos desnecessariamente.

Nesse caso, podemos passar o `ClientHttpConfiguration` por meio de **construtor**, tanto para `PetService` quanto para `AbrigoService`, instanciando uma única vez no arquivo `AdopetConsoleApplication.java`. Dessa forma, teremos uma instância que passaremos para as duas classes e, assim, conseguiremos referenciar os métodos.

De volta à classe `AdopetConsoleApplication`, na função `main()`, antes das instâncias de `abrigoService` e `petService`, vamos instanciar a nova classe `new ClientHttpConfiguration()`. Ela ficará contida em uma variável chamada `client`, na linha de código 11.

> _`AdopetConsoleApplication.java`:_

```java
ClientHttpConfiguration client = new ClientHttpConfiguration();
```

Feito isso, vamos copiar a variável `client` instanciada na função `main()` e passar como parâmetro de `AbrigoService()` e `PetService()` nas linhas 12 e 13, ou seja, vamos passar para o construtor.

```java
AbrigoService abrigoService = new AbrigoService(client);
PetService petService = new PetService(client);
```

Sempre que instanciarmos a classe `AbrigoService` ou `PetService`, precisaremos passar `client`. Para passar este `client`, é necessário receber um `client` no construtor. Portanto, precisamos criar um construtor que receba um `client` e faça algo com ele.

Vamos até `AbrigoService.java` e criar o construtor da classe para receber este `client`. Para criar um construtor público, basta digitar `public` seguido do nome da classe (`AbrigoService()`) e de uma abertura de chaves. Faremos isso a partir da linha 17.

Entre os parênteses, é preciso receber `ClientHttpConfiguration`, que chamaremos de `client`.

> _`AbrigoService.java`:_

```java
public AbrigoService(ClientHttpConfiguration client) {

}
```

Para receber o valor do `client` e configurar para `AbrigoService` utilizar com seus métodos, é necessário uma variável do tipo `ClientHttpConfiguration` na classe `AbrigoService`. Podemos criar esta variável como privada (`private`) logo acima, na linha 18:

```java
private ClientHttpConfiguration client;
```

> Agora trabalhamos bem com a orientação a objetos, encapsulando o objeto `ClientHttpConfiguration` para referenciar um objeto usando o construtor, e aplicando várias boas práticas para melhorar nosso código.

Entre as chaves do construtor, vamos digitar `this.client = client`, sendo `this.client` referente à variável, e o `client` após o sinal de igual referente ao valor passado via construtor da classe `AdopetConsoleApplication`.

```java
public AbrigoService(ClientHttpConfiguration client) {
    this.client = client;
}
```

Agora, ao utilizar `client.dispararRequisicaoGet()` na linha 26, no escopo do método `listarAbrigo()`, nosso código compilará conforme esperado.

```java
HttpResponse<String> response = client.dispararRequisicaoGet(uri);
```

Da mesma forma, se chamarmos `client.dispararRequisicaoPost()`, a classe também começará a compilar corretamente.

```java
HttpResponse<String> response = client.dispararRequisicaoPost(uri, json);
```

Nossa classe agora compila como esperado e não temos mais erros. Observe também que as partes de `HttpClient`, `URI`, `HttpRequest` desapareceram das importações e ficaram em cinza, o que significa que não são mais referenciadas. Nesse caso, podemos deletar.

> _Trecho a ser removido do arquivo `AbrigoService.java`:_

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
```

Podemos perceber que, na classe `AbrigoService`, agora temos apenas o que é referente a abrigos, isto é, os métodos `cadastrarAbrigo()` e `listarAbrigo()`.

Faremos o mesmo para a classe `PetService`. Começaremos criando o construtor abaixo da definição da classe, na linha de código 19.

Criaremos um construtor público que receberá `ClientHttpConfiguration` chamado de `client`. Logo acima, vamos declarar uma variável do tipo `ClientHttpConfiguration` com o nome `client`. No escopo do construtor, vamos adicionar `this.client = client`.

> _`PetService.java`:_

```java
private ClientHttpConfiguration client;

public PetService(ClientHttpConfiguration client) {
    this.client = client;
}
```

Feito isso, podemos chamar `client` nos métodos `dispararRequisicaoGet()` e `dispararRequisicaoPost()`. Dessa forma, a classe começará a compilar corretamente.

> _Linha de código 31:_

```java
HttpResponse<String> response = client.dispararRequisicaoGet(uri);
```

> _Linha de código 82:_

```java
HttpResponse<String> response = client.dispararRequisicaoPost(uri, json);
```

É importante sempre lembrar de excluir os `import` que não são mais utilizados na classe; essa também é uma boa prática para código limpo.

> _Trecho a ser removido do arquivo `PetService.java`:_

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
```

## Conclusão

Agora a classe `PetService` tem um comportamento apenas referente a pets, assim como nas classes `AbrigoService` e `ClientHttpConfiguration`.

Dessa forma, a classe `AdopetConsoleApplication` fica cada vez mais enxuta, apenas controlando para qual classe a requisição será enviada e qual função deve ser chamada!

## Transcrição

Agora, vamos focar na nossa classe `PetService`.

Atualmente, basicamente temos duas funções nessa classe: `listarPetsdoAbrigo()` e `importarPetsdoAbrigo()`. Analisando também a classe `AbrigoService`, temos algo semelhante, só que para abrigos: `listarAbrigo()` e `cadastrarAbrigo()`.

Estamos trabalhando com abrigos, porém, toda vez que recebemos uma resposta da API, seja por uma requisição GET ou enviando um abrigo para disparar uma requisição, não estamos tratando as informações de abrigo como objeto.

Nós até instanciamos um `JsonObject()`, onde declaramos que este JSON terá uma propriedade nome, e passamos o nome que foi digitado pela pessoa usuária no terminal, assim como o telefone e o e-mail. Em seguida, passamos este objeto JSON, que construímos com as propriedades, como parâmetro para disparar a requisição POST.

A mesma coisa fazemos no GET. Quando recebemos o `responseBody`, pegamos esse JSON, parseamos para um `jsonArray`... São elementos que não representam o que desejamos, que seriam os abrigos; assim como no caso dos pets.

Na orientação a objeto, dizemos que os objetos são feitos para representar, no nosso programa, objetos do mundo real.

Então, se queremos um abrigo, precisamos ter um objeto `Abrigo` com as propriedades de abrigo. Se queremos pet, precisamos ter um objeto `Pet` com as propriedades de pet. E sempre que precisarmos adicionar ou excluir qualquer propriedade daquele objeto, fazemos em um único local.

Pense na bagunça que seria se começássemos a espalhar por aqui: se em outra classe precisamos listar abrigos, e então precisamos adicionar uma nova propriedade, se apenas adicionarmos em uma classe e esquecermos nessa, já ficará divergente, e entramos em um problema que já vimos ocorrer.

Portanto, nós isolamos isso em uma **classe de domínio**, uma classe de modelo. Um modelo que define o pet ou um modelo que define o abrigo.

## Criando classes de domínio

Agora, vamos criar essas classes.

Já sabemos como fazer, vamos criar um novo pacote para separar as classes corretamente. Então, teremos algumas classes de domínio que representam os nossos objetos pet e abrigo. Teremos o pacote "client", que é a configuração do cliente, e o "service", que contém as regras de negócio. Assim, nossos pacotes ficam mais distribuídos e melhor organizados.

No pacote "br.com.alura", clicaremos com o botão direito, "New > Package"e nomearemos este novo pacote como "domain": `br.com.alura.domain`.

Dentro deste pacote "domain", criaremos duas classes: `Pet` e `Abrigo`.

Agora, elas precisam de propriedades.

Quando um usuário quer cadastrar abrigo, precisa passar nome, telefone e e-mail. Com essas informações criamos um abrigo para disparar uma requisição POST para API.

Primeiro, na classe `Abrigo`, que acabamos de criar, adicionaremos as propriedades aqui, utilizando boas práticas, fazendo uso do encapsulamento e da orientação a objetos. Começaremos com as propriedades que um abrigo tem: um nome, um telefone e um e-mail. Todos são do tipo string.

Então, na classe `Abrigo`, faremos o seguinte:

```typescript
package br.com.alura.domain;

public class Abrigo {
    private String nome;
    private String telefone;
    private String email;

}
```

Agora, o que precisamos fazer é que toda vez que um usuário cadastrar um abrigo, em vez de criar um objeto JSON para enviar com a requisição POST, vamos criar um objeto `Abrigo`.

Portanto, para passar as informações do `cadastrarAbrigo()` para o objeto que será criado, precisamos criar um construtor em `Abrigo`.

Vamos criar aqui um método público chamado `Abrigo()` que vai receber uma string nome, uma string telefone, e uma string e-mail.

Então, dentro desse método, teremos: `this.nome = nome`, que define que o nome que eu receber no construtor será o nome que será configurado em nossa propriedade. `this.telefone = telefone` para o telefone e `this.email = email` para o email.

```typescript
package br.com.alura.domain;

    public Abrigo(String nome, String telefone, String email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

public class Abrigo {
    private String nome;
    private String telefone;
    private String email;

}
```

Com isso feito, voltaremos à classe `AbrigoService` e removeremos todo o código de criação do objeto JSON. Vamos apagar o seguinte trecho:

```java
        JsonObject json = new JsonObject();
        json.addProperty("nome", nome);
        json.addProperty("telefone", telefone);
        json.addProperty("email", email);
```

Agora, no local onde apagamos o código acima, vamos criar um novo objeto `Abrigo()`, vamos importar a classe e passaremos as três strings. Em seguida, vamos setar essa instância com uma variável chamada `abrigo`.

```java
Abrigo abrigo = new Abrigo(nome, telefone, email);
```

Vamos pegar esse `abrigo` e, em vez do JSON, passar `abrigo` para disparar a requisição POST, `client.dispararRequisicaoPost(uri, abrigo)`.

```java
        Abrigo abrigo = new Abrigo(nome, telefone, email);

        String uri = "http://localhost:8080/abrigos";
        HttpResponse<String> response = client.dispararRequisicaoPost(uri, abrigo);
                
// código omitido
```

Mas aqui surge um detalhe: `dispararRequisicaoPost` espera um objeto JSON, e nós estamos passando um objeto `Abrigo`.

Precisaremos fazer essa alteração. Assim, vamos acessar o código de `dispararRequisicaoPost`, em `ClientHttpConfiguration.java`. Em vez de recebermos um `JsonObject`, vamos receber um `Object` no segundo parâmetro.

```typescript
    public HttpResponse<String> dispararRequisicaoPost(String uri, Object object) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
```

Agora, estamos recebendo qualquer tipo de objeto nesse `dispararRequisicaoPost`.

No corpo do método `dispararRequisicaoPost`, dentro do `HttpRequest`, quando enviamos essa informação de `object` para a API, ele não está reconhecendo, ele está retornando um `json.toString`.

O que precisaremos fazer é transformar esse `object` em um JSON. E como fazer isso?

Nós temos em nosso `pom.xml` a biblioteca GSON que usamos para fazer transformações.

Então, através do objeto que estamos passando, que no nosso caso, o `dispararRequisicaoPost` vai receber um `Pet`, um `Abrigo`, e pode receber outros no futuro, precisamos transformar o conteúdo desse objeto em um JSON.

E para isso, vamos utilizar a nossa biblioteca GSON.

Então, vamos chamar `new Gson().toJson(object)`:

```csharp
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(new Gson().toJson(object)))
                .build();
```

Fazendo isso, nossa classe `ClientHttpConfiguration` volta a compilar. Se retornar à classe `AbrigoService`, ela também compilará.

Agora, nossa classe `AbrigoService` tem um objeto que representa o abrigo.

Já temos um objeto que representa o `Pet`, mas ainda não temos as propriedades, e precisaremos criar as propriedades de `Pet`, e substituir todo esse `JsonObject` com o nosso objeto `Pet`.

## Desafio

Vou deixar isso como desafio para você. Use sua criatividade e conhecimento para modificar o nosso código. Quero que você crie aqui, substituindo todo o código do `PetService`, do `importarPetsDoAbrigo` para utilizar o objeto `Pet` com suas respectivas propriedades.

Vamos ter uma atividade de correção, mas quero ver como a sua criatividade será aplicada para refatorar o código. Está bem?

Então, nos encontramos no próximo vídeo para continuarmos aprimorando nosso código. Até lá!

## Transcrição

No vídeo anterior, propus um desafio para você criar em nossa classe `PetService` um domínio com propriedades e substituir todo o código que nós fazemos hoje com o `JsonObject` por esse domínio que nós criamos. Se você conseguiu, parabéns!

Agora, vamos ver como vai ficar esse método de `importarPetsDoAbrigo`, utilizando a nossa classe `Pet`. Podemos ver que um `Pet` possui um tipo, um nome, uma raça, uma idade, uma cor e um peso. Precisamos entender quais são os tipos correspondentes: o tipo é uma String, o nome é uma String, a raça é uma String, a idade é um Int, a cor é uma String e o peso é um Float.

Tudo isso nós estamos tratando dentro da classe `PetService`, onde já estamos lidando com esses dados ao chamar a API. Porém, agora queremos substituir o `JsonObject` pelo nosso objeto. Então, vamos lá. Vamos começar definindo as nossas propriedades.

No arquivo `Pet.java`, criaremos as propriedades como Private e instanciaremos o objeto através do construtor. Essas são as boas práticas para a orientação a objetos:

```kotlin
package br.com.alura.domain;

public class Pet {

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

}
```

Criamos o nosso objeto `Pet` com o seu construtor.

Agora precisamos ir até `PetService`, e onde temos o nosso `JSON`, que sabemos que vamos excluir o bloco de código onde instanciamos o `jsonObject`. Vamos excluir o seguinte bloco:

```java
 JsonObject json = new JsonObject();
 json.addProperty("tipo", tipo.toUpperCase());
 json.addProperty("nome", nome);
 json.addProperty("raca", raca);
 json.addProperty("idade", idade);
 json.addProperty("cor", cor);
 json.addProperty("peso", peso);
```

E vamos criar um `new Pet()` e, quando eu crio aqui o `new Pet()`, que eu mando importar, a nossa classe passa a não compilar mais, pois ela vai esperar no construtor os campos para instanciar o objeto `Pet`. Vamos precisar passar para o `Pet` um tipo, um nome, a raça, a idade, a cor e o peso.

Em seguida, definimos o valor dentro de uma variável do tipo `Pet`, que vamos chamar de `pet`.

```java
 Pet pet = new Pet(tipo, nome, raca, idade, cor, peso);
```

E em vez de passar para o `DispararRequisicaoPost` o `json`, que não existe mais, passamos aqui o `pet`, que é um objeto. `Pet` é um objeto, e o `DispararRequisicaoPost`, no segundo parâmetro, espera um Object.

Object é a classe pai de todos os objetos, e `Pet` é um objeto, então ele aceita a nossa variável.

```java
String uri = "http://localhost:8080/abrigos/" + idOuNome + "/pets";
HttpResponse<String> response = client.dispararRequisicaoPost(uri, pet);
int statusCode = response.statusCode();
String responseBody = response.body();
```

Pronto! Nosso código está muito melhor. Já estamos trabalhando com objetos, diminuímos a quantidade de linhas de código que tínhamos que criar com o `JsonObject`.

O que precisamos ajustar agora é neste `JsonObject` de quando fazemos a requisição. Quando chamamos a API, o que ela retorna e que precisamos transformar para o objeto `Pet` e para o objeto `Abrigo`.

Neste vídeo, meu objetivo era demonstrar como criar e tratar a classe `PetService` utilizando nosso objeto `Pet`.

Conseguimos atingir nosso objetivo deste vídeo e, no próximo vídeo, vamos continuar com as refatorações.

## Transcrição

Agora, precisamos tratar a busca. Basicamente, no serviço `Abrigo`, temos os métodos `listarAbrigo()` e `cadastrarAbrigo()`. O cadastro de abrigo, nós já estamos executando, pois já transformamos toda a tratativa de criação de um objeto abrigo para enviar para a requisição POST, que cria um abrigo na API. Agora, precisamos tratar aqui no `listarAbrigo()` e, consequentemente, no `PetService`, `listarPetsdoAbrigo()`.

Basicamente, o que vamos precisar agora, em vez de trabalhar com esse formato aqui, JsonArray, que basicamente é quando fazemos uma requisição para a API, pegamos o retorno e o transformamos em JSON, pois nossa API retorna um JSON.

O que estamos fazendo aqui é um _parse_ do JSON que está retornando para nós aqui no body, então pegamos o `responseBody` e transformamos para um `JsonArray`. E a partir desse `JsonArray` aqui, fazemos um _for each_ e acabamos criando duas informações para gerar uma saída. Quando buscar o abrigo, ele vai mostrar aqui o ID e o nome do abrigo.

Nós já temos um objeto para representar esses elementos, então não precisamos mais trabalhar com esses objetos mais genéricos, podemos trabalhar de fato agora com nosso domínio `Abrigo`.

O que precisamos observar aqui é o seguinte, quando busco aqui o `responseBody`, de fato ele é um JSON, isso não pode mudar. Então, quando quisermos, a partir do JSON, criar um objeto abrigo, teria que fazer toda essa transformação manual.

Mas graças a algumas pessoas desenvolvedoras que existem pelo mundo, existem hoje diversas bibliotecas que nos auxiliam com essa atividade. Acabamos adicionando uma biblioteca aqui no nosso projeto e essa transformação do JSON para um objeto do nosso sistema é feita por debaixo dos panos. É preciso configurar algumas coisas, mas o grosso, digamos assim, acaba sendo realizado pela biblioteca.

Existem várias bibliotecas, mas nesse curso, vamos usar a Jackson DataBind. Para adicionar uma nova biblioteca, usamos o Maven em nossa aplicação, temos um `pom.xml` onde adicionamos essas dependências.

Então, vamos buscar no Maven Repository a dependência do Jackson DataBind para adicionar à nossa aplicação e realizar essa transformação do JSON para nosso objeto `Abrigo`.

Vamos abrir a janela do navegador e acessar o site [Maven Repository](https://mvnrepository.com/), que é onde buscamos dependências para adicionar na aplicação. No campo de busca do Maven Repository, vamos pesquisar por "jackson".

A primeira opção que aparece é o Jackson DataBind então clique nele que vai exibir as versões do Jackson DataBind disponíveis. A versão mais recente, enquanto gravamos esse vídeo, é a 2.15.2. É ela que vamos utilizar. Se tiver uma versão mais recente quando você estiver fazendo, sem problemas, pode usar.

Ao clicar na 2.15.2 vai uma aba na área inferior intitulada "Maven", onde temos as tags da dependência, clique em cima que já vai selecionar tudo. Copie.

Vamos voltar para a aplicação, pois precisamos adicionar essa dependência ao nosso `pom.xml`.

Dentro do `pom.xml` temos as tags de dependências. Dentro das dependências, já temos a dependência do GSON, que estamos usando para transformar nosso objeto para um JSON. Agora, precisaremos fazer o contrário. Portanto, vamos adicionar uma nova dependência abaixo do GSON, que é a `faster.xml.jackson.core`, que é o Jackson DataBind.

```xml
  <dependencies>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.1</version>
        </dependency>
    </dependencies>
```

Podemos recarregar o arquivo `pom.xml`, agora essa dependência que adicionamos está na aplicação.

E como faço, então, para usar isso na `AbrigoService`?

A primeira coisa que vamos precisar fazer é excluir a linha `JsonParser.parseString(responseBody).getAsJsonArray()`.

Vamos excluir essa linha e notaremos que nosso código para de compilar, porque, antes, usávamos esse JsonArray para fazer um for e obter as informações como ID e nome.

Por que fazemos um for? Porque quando procuramos por abrigos, pode haver mais de um abrigo. Portanto, a ideia aqui é mostrar todos os abrigos disponíveis na pesquisa. Por isso é uma lista.

Então, como vou trabalhar com aquele objeto? Vamos inserir um `new ObjectMapper`. Esse é o objeto que usaremos para ler o JSON do retorno de nossa API, que é o `ResponseBody`, e transformá-lo em um Array de abrigos.

Então, basicamente, o que faremos é informar qual será o tipo para o qual desejamos converter os dados. Portanto, `Abrigo[].class`. Vamos receber isso em um array que chamaremos de `abrigos`.

```cpp
Abrigo[] abrigos = new ObjectMapper().readValue(responseBody, Abrigo[].class);
```

Então, ótimo. Este ObjectMapper vai transformar o `responseBody`, que é um JSON que contém um Array de abrigos. Estou pegando aqui o abrigo. Mas para facilitar o nosso trabalho, podemos usar o stream do Java.

Vamos inserir o `Arrays.stream()` passando `abrigos` e transformar em uma lista com o `toList()`.

Agora, o que faço aqui é criar uma variável que será do tipo `List<abrigo>`, onde colocarei `abrigo-list`.

Agora, podemos pegar essa `abrigoList` que criamos e colocá-lo no for.

E agora, o que faço é, em vez de pegar um JsonObject aqui, transformar aquele objeto JSON para um JsonObject, sabemos que agora estamos trabalhando com nosso objeto-abrigo. Então, só substituo aqui, onde quero pegar o `longId`, vou pegar aqui um `abrigo.getId()` .

Não temos esse método em nossa classe, mas não tem problema, podemos criá-lo. Sabemos que quando queremos acessar algum dado, pensando em orientação a objetos, de um objeto, não acessamos diretamente pela propriedade ou pela variável.

Temos algum método de acesso ali, que geralmente são métodos `get`, para obter essa informação. Como ainda não criamos nenhum método de acesso no nosso abrigo, ele não vai estar compilando, mas não tem problema.

Então, dentro da string nome, eu também vou pegar `abrigo.getNome`.

O código final fica:

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
```

Agora, o que precisamos fazer? Precisamos retornar à classe `Abrigo` e criar os dois métodos _get_ que estão lá para buscar no `AbrigoService`.

Veja só, quando gravamos na API, ela gera um ID no banco de dados e é esse ID que estamos pegando. Esse é um objeto que nós não tínhamos mapeado na classe `Abrigo`, pois no momento do cadastro do abrigo, não preciso passar o ID, pois ele é gerado automaticamente no banco.

Portanto, na classe `Abrigo`, além de criar o `getNome` que já se encontra na classe `Abrigo`, teremos que criar aqui um `private long id`. Não precisamos incluir no construtor, porque quando for construir esse objeto o id é autogerado pelo banco.

```typescript
    public Abrigo(String nome, String telefone, String email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    private Long id;
    private String nome;
    private String telefone;
    private String email;
```

Após definir as propriedades, precisamos criar os métodos `getId()`.

```typescript
    private Long id;
    private String nome;
    private String telefone;
    private String email;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
```

'Ao fazer isso, nosso código, automaticamente, passa a compilar no `listarAbrigo()`.

Agora, nós estamos utilizando a nossa classe `Abrigo` e usando uma biblioteca para transformar o JSON que recebemos da API em um objeto abrigo, e usar os métodos de acesso aqui para obter as informações do abrigo do nosso objeto.

Agora, o que precisamos fazer é a tarefa de alterar o `PetService` para também trabalhar com o Jackson e, consequentemente, transformar esse resultado da API em um objeto pet.

Mas vou deixar para fazer isso no próximo vídeo. Então, vejo você lá.

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

Fizemos diversas alterações desde o início, então, agora, será que consigo cadastrar um pet? Será que consigo listar, cadastrar um abrigo, etc? Vamos verificar se as modificações estão sendo bem sucedidas.