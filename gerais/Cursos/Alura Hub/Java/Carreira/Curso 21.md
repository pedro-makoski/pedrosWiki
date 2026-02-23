## Transcrição

**Rodrigo:** Olá! Boas-vindas ao curso de **Boas Práticas de Programação com Java**. Meu nome é **Rodrigo Ferreira**, sou um dos instrutores da **Escola de Programação** e vou te acompanhar ao longo desse curso.

> **Audiodescrição:** Rodrigo se autodeclara como uma pessoa de pele branca. Tem olhos castanhos, cabelos castanhos e curtos. Está vestindo uma camiseta cinza e usando um headset branco. No ambiente em que está sentado, há uma iluminação azul. Ao fundo, uma parede com alguns quadros.

Não estou sozinho neste curso. Tenho um convidado especial!

**Vinícius:** Oi! Como vai? Meu nome é **Vinícius de Louzada** e faço parte da Escola de Programação e DevOps. Também te acompanharei nessa jornada de Boas Práticas em Programação dos Testes Automatizados com Java.

> **Audiodescrição:** Vinícius se autodeclara como um homem de pele parda. Tem olhos castanhos escuros, barba e cabelo são pretos e curtos. Está utilizando um headset na cor branca e sentado em uma ambiente com iluminação azul.

Rodrigo, o que estudaremos durante esse curso?

**Rodrigo:** Vamos passar pelo conteúdo deste curso, que tem como foco os testes automatizados!

## O que vamos aprender?

Aprenderemos a escrever testes automatizados com Java. Lembrando que esse curso faz parte da formação de Boas Práticas. Continuaremos com o mesmo projeto do curso anterior, cujo foco foi em Boas Práticas, melhorias, _Design Patterns_, _Refactoring_, agora focaremos em testes automatizados.

No curso anterior, fizemos várias modificações no projeto, mas em nenhum momento testamos o código. Isso foi proposital para focarmos, neste terceiro curso, em testes automatizados.

Para escrever esses testes, utilizaremos algumas ferramentas. Uma delas é o **JUnit na versão 5**, a principal biblioteca para Java, usada na escrita de testes automatizados.

Além do JUnit, usaremos também uma ferramenta chamada **Mockito**, que é uma ferramenta que nos auxilia a escrever testes utilizando _mocks_. Vamos aprender o que são esses _mocks_, quando utilizá-los e como fazer isso com o _Mockito_.

Também usaremos o **Spring Boot**, que tem um módulo focado em testes automatizados.

Este curso tem alguns requisitos, não é, Vinícius?

**Vinícius:** Exatamente, Rodrigo. Neste curso, precisamos que você já tenha certa intimidade com a API REST, porque aqui não vamos explicar detalhadamente o que ela é ou como realizar manutenções no código.

Também precisamos que você já tenha certo conhecimento em Spring Boot, _framework_ com o qual trabalharemos durante este curso. Além disso, precisamos que você já tenha conhecimentos em **JPA**, responsável pela parte de persistência do banco de dados.

**Rodrigo:** São os mesmos requisitos do curso anterior. Vamos partir do mesmo projeto, que já tinha esses requisitos, e focar na parte de testes automatizados.

Então, temos muitas informações legais para aprender durante esse curso, não é, Vinícius?

**Vinícius:** Exatamente! Como temos bastante conteúdo para aprender, vamos começar nossa jornada!

# Projeto do curso

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139534/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139534/question)

Neste curso utilizaremos o projeto de uma API Rest desenvolvida utilizando o Spring Boot. Você pode fazer o download do projeto inicial neste link:

- [Projeto inicial](https://github.com/alura-cursos/3349-boas-praticas-java-testes/archive/refs/heads/projeto_inicial.zip)

Após baixar o arquivo zip, descompacte-o em algum diretório do seu computador e na sequência importe o projeto em sua IDE. No curso, utilizaremos o [IntelliJ](https://www.jetbrains.com/idea/download/) como IDE, sendo recomendado que você também utilize essa mesma IDE para facilitar o seu aprendizado.

A aplicação utiliza o **MySQL, na versão 8**, como banco de dados, portanto será necessário que você também o instale em seu computador, caso ainda não o tenha instalado. Caso tenha dificuldades na instalação, você pode seguir o tutorial disponível no artigo [MySQL: da instalação até a configuração](https://www.alura.com.br/artigos/mysql-instalacao-configuracao).

Para realizar os testes na API, utilizaremos a aplicação [Postman](https://www.postman.com/). Temos um artigo aqui na plataforma que ensina como realizar a instalação e utilizar o Postman: [Postman: saiba como instalar e dar seus primeiros passos](https://www.alura.com.br/artigos/postman-como-instalar-dar-seus-primeiros-passos).

Tudo pronto?

Bons estudos!

## Transcrição

**Rodrigo:** Vamos começar o nosso curso. O objetivo é continuarmos com o mesmo projeto que temos desenvolvido ao longo desta formação.

Anteriormente, realizamos diversas modificações e melhorias em nosso código. No entanto, existe um ponto interessante a ser destacado: no curso anterior, trabalhamos intensamente na melhoria do projeto **Adopet API**, realizando várias atualizações no código. Este estava bastante confuso e não seguia nenhuma das boas práticas de programação.

Ao longo do curso, fizemos as refatorações necessárias, aplicamos padrões de projeto e utilizamos uma melhor orientação a objetos. O resultado foi um código bem organizado, fácil de entender e de manter.

Contudo, de propósito, em nenhum momento do curso anterior realizamos testes na aplicação. Por mais que o código esteja funcionando e bem estruturado, se não é possível comprovar que ele continua funcionando após as mudanças, todas as melhorias são em vão.

**Vinícius:** Exatamente por esse motivo que precisamos testar nossa aplicação. Até mesmo para garantir que as melhorias não causaram nenhum problema no código ou geraram algum _bug_. Precisamos **realizar alguns testes**.

Antes de começarmos com os testes, vale a pena relembrar que, nos cursos anteriores, tínhamos uma aplicação console a partir da qual disparávamos algumas requisições via comandos, como solicitar adoção, listar pets. Quando essas requisições eram disparadas através do console, elas eram enviadas à API.

Agora, com o IntelliJ aberto, é possível visualizar as modificações feitas na API. Observe que no canto esquerdo temos um diretório chamado "src". Ao expandi-lo, podemos acessar o diretório "main" e em seguida o diretório "java".

Dentro do diretório "java", há um pacote chamado `br.com.alura.adopet.api`. Nele, há algumas pastas que correspondem às partes do projeto onde as refatorações foram realizadas.

Temos as classes `controller`, `dto`, `exception`, `model`, `repository`. Se clicarmos na pasta `controller` e depois na classe `AdocaoController`, encontraremos um método chamado `solicitar()`. Atualmente ele está bem enxuto, no curso anterior ele continha muitas regras de negócio e era bastante confuso.

Porém, retornando à nossa problemática atual, precisamos testar. Afinal, como nós saberemos se não ocorreu nenhum problema no código? Precisamos garantir com os testes, não é mesmo?

**Rodrigo:** Nossa ideia é focar justamente na questão de testes. Como se trata de uma API, podemos usar ferramentas como **Postman**, **Insomnia** entre outras para realizá-los.

**Vinícius:** Para testar a API, precisamos iniciá-la. No canto superior direito do IntelliJ temos um botão de "Play". Ao clicar nele, podemos ver a opção "Run AdopetAPIApplication". Vamos selecioná-la para subir a API. Ao iniciarmos a API, poderemos realizar disparos a ela.

Ressaltando que, como não temos a aplicação console, utilizaremos outro programa como o **Postman**, para realizar essas requisições. A intenção é verificar se não ocorreu nenhum erro no código, como, por exemplo, se está retornando a lista de _pets_, de tutores. Próximo passo é abrir o _Postman_ e começarmos os teste.

Já estamos com o Postman aberto! Nós disponibilizaremos uma atividade com passo a passo de instalação. Estou conectado à minha conta e sugiro que você também faça iss para que seja possível realizar alguns procedimentos no decorrer da nossa jornada.

Rodrigo, qual é a ideia do Postman? Falamos que vamos realizar disparos para a API e poderíamos criar requisições manualmente, não é mesmo?

**Rodrigo:** Perfeito! O Postman é uma ferramenta para testar APIs e precisamos criar as requisições, definir a URL da API, os endereços que vamos chamar, enviar os _JSONs_ (JavaScript Object Notation) e muito mais.

Contudo, para facilitar sua vida, já temos um arquivo que está no projeto. Se trata de um arquivo JSON que podemos importar no Postman e ele conterá todas as requisições preparadas.

O Vini ensinará como importar esse arquivo no Postman e, com isso, poderemos visualizar todas as requisições e efetuar os disparos pela interface dessa ferramenta.

**Vinícius:** Então, vamos importar nosso arquivo JSON!

No canto superior esquerdo, temos um botão chamado "Import". Ao selecioná-lo, encontraremos duas opções: soltar o arquivo ou clicar em Files para abrir uma janela para o diretório de arquivos do computador. Então, navegamos até a pasta do projeto.

No meu caso, está na área de trabalho, na pasta "Boas Práticas de Java". Dentro dela, há um arquivo chamado `Adopet.postman_collection.json`.

Lembrando que esse arquivo acompanha o projeto inicial que você baixou no curso. Por isso, não deixe de baixar o projeto inicial.

Dando um duplo clique no arquivo, ele começará a carregar. No canto superior esquerdo, é possível conferir que uma pasta chamada "Adopet" foi importada.

Abrindo a pasta, encontraremos outras pastas com os nomes : abrigo; adoção; pet; e tutor. Essas pastas são compostas por várias requisições. Em "abrigo", por exemplo, temos as requisições de "listar abrigos", "cadastrar abrigos", "listar pets do abrigo" e "cadastrar pet do abrigo".

Rodrigo, temos várias requisições. Qual você recomenda escolhermos para testarmos nossa aplicação?

**Rodrigo:** Perfeito! Todas as requisições estão disponíveis neste arquivo. Podemos testar pelo "abrigo" mesmo, já que você expandiu. Clique, por exemplo, em "listar abrigos".

Tem a requisição, tem os parâmetros, está tudo pronto e podemos disparar e simular a chamada na nossa API.

**Vinícius:** Existe um botão do lado direito do nosso visor escrito "Send". Vamos enviar uma requisição do tipo "Get" e queremos recuperar todos os abrigos.

Clicaremos no botão "Send", que é azul. Em seguida, na parte de baixo, teremos um retorno e conseguiremos visualizar todos os abrigos que estão registrados em nossa aplicação.

O abrigo 1 é o "Abrigo feliz", o abrigo 2 é o "Abrigo xpto" e o abrigo 3 é o "Abrigo xptv". Em nenhum caso houve uma quebra no código, não é mesmo, Rodrigo?

**Rodrigo:** Sim, enviamos a requisição, que é para listar abrigos. Ela chamou a API, que foi até o banco de dados. No caso do Vini, no computador dele, o MySQL já tem esses registros cadastrados. A API está retornando corretamente o JSON com a lista de todos os abrigos registrados. A princípio, tudo está funcionando corretamente na requisição de listar abrigos.

**Vinícius:** Imagine um cenário em que Rodrigo fosse criar uma nova funcionalidade para essa nossa aplicação. Teríamos que executar todos esses testes manualmente, o que seria extremamente cansativo e nada prático. É por isso que, neste curso, aprenderemos a realizar testes automatizados. Até mais!!

## Transcrição

**Rodrigo:** Já realizamos os testes usando a ferramenta Postman, que é uma ferramenta útil para testar uma API. No entanto, tais testes são bastante manuais.

Apesar de já termos preparado as requisições JSON para este curso, em um projeto real, seria necessário escrever todo esse código e criar cada uma das requisições.

Isso pode consumir bastante tempo, principalmente nas fases futuras do projeto, quando houver atualizações e modificações. Embora seja possível automatizar alguns pontos com o Postman, o objetivo deste curso é em **testes automatizados ao nível de código**.

Vamos aprender a escrever códigos para testar as classes que criamos no projeto, garantindo que estejam funcionando corretamente e detectando qualquer _bug_ que possa surgir. Esse é o esquema de teste automatizado em Java.

**Vinícius:** Perfeito! Vamos voltar para a IDE IntelliJ. Se analisarmos a estrutura do projeto, vamos verificar que há muitos arquivos e pode surgir a questão "O que vamos testar?".

É ideal testar as áreas do nosso código que contêm regras de negócio. Portanto, vamos abrir as pastas "src > main > java", que contêm o pacote da `br.com.alura.adopet.api`. Nele, há várias classes e pacotes, incluindo `controller`, `DTO`, `exception`, `model`, `service` e `validacoes`.

Temos várias classes de `service` e de `validacao`. Por onde podemos começar?

**Rodrigo:** Queremos escrever testes automatizados e a ideia é testarmos as classes do projeto, garantir que tudo está funcionando. Mas, em um projeto, não temos em torno de 5 classes, mas dezenas ou até mesmo centenas de classes.

Você mencionou algo importante: um bom ponto de partida seria procurar classes que têm validações, regras de negócio, cálculos e algoritmos. Essas são as áreas críticas do sistema, onde geralmente ocorrem erros de digitação ao escrevermos os algoritmos.

Portanto, os pacotes `service` e `validacao` são bons candidatos, pois provavelmente é onde estarão as classes com regras de negócio da aplicação. Podemos escolher algumas delas para entendermos o que elas fazem e como podemos testá-las de forma automatizada com Java.

Por exemplo, no pacote `service`, existe uma classe chamada `CalculadoraProbabilidadeAdocao`, que é uma das classes importantes do projeto. Esta classe tem um algoritmo que calcula a probabilidade de uma pessoa adotar um determinado `pet`, levando em conta suas características.

```kotlin
public class CalculadoraProbabilidadeAdocao {


   public ProbabilidadeAdocao calcular(Pet pet) { 
         int nota = calcularNota(pet);
             
       if (nota >= 8) {
           return ProbabilidadeAdocao.ALTA;
       }
             
       if (nota >= 5) {
           return Probabilidade Adocao.MEDIA;
       }
       return Probabilidade Adocao.BAIXA;
   }

// Código omitido. 
```

Essa é uma ótima classe para testarmos! Será que esse código, com tantos _ifs_, está funcionando conforme o esperado? Será que há algum _bug_?

**Vinícius:** Perfeito, já abrimos a classe `CalculadoraProbabilidadeAdocao`. O nome é bastante descritivo. Essa classe possui um método responsável por calcular a probabilidade de adoção de determinado pet.

Suponhamos que temos um gato que possui um nome, idade e peso. Com base nesses atributos, nossa classe avaliará a probabilidade de adoção desse pet. A probabilidade pode ser alta, média ou baixa, dependendo desses parâmetros. Vamos entender melhor essa nossa classe.

A classe possui um método `calcular()`, que espera receber um pet e retorna uma probabilidade de adoção (alta, média ou baixa). Dentro desse método, existe uma chamada para um método privado que calcula a nota desse pet: `calcularNota(pet)`.

```kotlin
// Código omitido. 

public Probabilidade Adocao calcular(Pet pet) { 
    int nota = calcularNota(pet);
    
        if (nota >= 8) {
        return ProbabilidadeAdocao.ALTA;
    }

    if (nota >= 5) {
        return Probabilidade Adocao.MEDIA;
    }

    return Probabilidade Adocao.BAIXA;
}

// Código omitido. 
```

O código vai analisar o peso, idade e tipo do pet, seja ele cachorro ou gato. Todo pet começa com uma nota 10 e, conforme algumas características, nosso algoritmo analisa e penaliza essa nota.

```java
// Código omitido. 

 private int calcularNota(Pet pet) {
        int peso = pet.getPeso().intValue();
        int idade = pet.getIdade();
        TipoPet tipo = pet.getTipo();

        int nota = 10;

        // penalizando pelo peso muito alto
        if (tipo == TipoPet.CACHORRO && peso > 15) {
            nota -= 2;
        }
        if (tipo == TipoPet.GATO && peso > 10) {
            nota -= 2;
        }

        // penalizando pela idade avançada
        if (idade >= 15) {
            nota -= 5;
        }else if (idade >= 10) {
            nota -= 4;
        }

        return nota;
    }

}
```

Por exemplo, temos penalidades por peso muito alto. Se for um cachorro e o peso for maior que 15 quilos, ele perde dois pontos. Se for um gato e o peso for maior que 10, ele também perde dois pontos.

Outra validação aqui é a penalização pela idade avançada. Caso o cachorro tenha uma idade maior que 15, ele perde cinco pontos. Após esses cálculos, o método retorna uma nota.

Com essa nota, temos uma estrutura para analisar a nota. Se for maior ou igual a 8, retorna uma probabilidade alta. Se a nota for maior ou igual a 5, retorna a média. Se a nota for menor que isso, a probabilidade será baixa.

Portanto, Rodrigo, nós podemos começar por realizar um teste automatizado para essa classe, certo?

**Rodrigo:** Certamente! É interessante notar que, mesmo não sendo um código muito complexo ou extenso, temos um algoritmo que pega um objeto, checa atributos, faz cálculos e há possibilidade de haver bugs.

Pode ser que a pessoa desenvolvedora que escreveu esse código tenha cometido um erro, por exemplo, colocou uma condição errada, um link errado, um sinal de "menor" quando deveria ser "maior" ou "menor ou igual".

A maneira de testar isso poderia ser disparando várias requisições, **simulando cada um dos pets no Postman**, o que seria mais trabalhoso, seria um teste manual. Teríamos que testar cada possibilidade.

Ou podemos **escrever um teste automatizado**, que seria um código para testar o nosso código, para validar e garantir que ele está funcionando de maneira muito mais rápida e prática.

Neste ponto, podem surgir algumas dúvidas: Como fazer isso? Como escrever um teste automatizado para essa classe e esse método?

**Vinícius:** Podemos usar bibliotecas já prontas para realizar testes automatizados, como, por exemplo, JUnit.

**JUnit** é uma biblioteca padrão do Java que serve para realizar esse tipo de teste. Ou seja, escrevemos um teste, avaliamos o que esperamos receber e validamos se o código está certo ou não.

Porém, deve surgir outra pergunta: o que é necessário para usar JUnit? Precisamos baixá-lo? Instalá-lo?

**Rodrigo:** Boa pergunta! Queremos usar uma nova biblioteca no nosso projeto, e esse projeto está utilizando o Maven, então precisamos abrir o arquivo `pom.xml`, que está no diretório raiz da aplicação.

Toda **aplicação Maven**, de arquivo `pom.xml`, tem uma sessão de dependências.

```javascript
// Código omitido. 

  <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

// Código omitido. 
```

Neste caso, o projeto utiliza o Spring Boot, então tem as dependências do Spring, do MySQL, e de todas as outras bibliotecas e _frameworks_ que estamos utilizando no projeto.

Há também uma última dependência, a `Spring-boot-starter-test`. Essa é uma dependência do Spring que já inclui várias outras bibliotecas e dependências para testes.

```javascript
// Código omitido. 

<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    
// Código omitido. 
```

Por isso, não precisaremos alterar nada no projeto, pois já temos essa dependência do Spring. Ela já inclui o JUnit e outras bibliotecas para testes.

**Vinícius:** Vamos voltar agora para nossa calculadora de probabilidade de adoção.

Para criarmos uma classe de teste, podemos clicar diretamente no nome da classe, que nesse caso, é a `CalculadoraProbabilidadeAdocao`. Utilizando o atalho "Alt + Insert", ele abrirá uma janela onde teremos a opção de adicionar um novo teste.

Ao selecionarmos essa opção, o programa perguntará qual biblioteca gostaríamos de utilizar. Nessa situação, utilizaremos o JUnit 5.

Ao criarmos essa nova classe, ela receberá o mesmo nome da classe original, mas com o acréscimo da palavra "Teste" no final: `CalculadoraProbabilidadeAdocaoTest`. Por ora, não nos preocuparemos com as demais opções, apenas clicaremos em "Ok".

Agora, o IntelliJ criou uma nova classe de teste. Se abrirmos o diretório de arquivos do IntelliJ, encontraremos uma pasta no "src" chamada "Test". Nela, encontramos o diretório "java". Então, localizaremos o pacote "AdopetApi" e a pasta "api.service", onde está localizada a nova classe de teste para a `CalculadoraProbabilidadeAdocao`.

Ao trabalharmos com a calculadora de probabilidade de adoção, temos vários cenários para testar. Por exemplo, o cenário de um cão com peso muito alto e idade baixa. Precisamos criar esses cenários para testar. Então, vamos criar um primeiro método chamado `void cenario01()`.

Para sinalizarmos que esse método é um cenário de teste, ou seja, algo que queremos testar com testes automatizados, precisamos adicionar uma anotação antes do método. Usaremos `@Test`, desse modo o IntelliJ nos ajuda, perguntando se queremos importar da biblioteca JUnit Jupiter API. Ao confirmarmos, ele realizará o import desta biblioteca.

```java
package br.com.alura.adopet.api.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Calculadora ProbabilidadeAdocaoTest {

    @Test
    void cenario01(){

   }
}
```

Pronto, agora podemos escrever esse cenário de teste.

**Rodrigo:** Para criar um teste automatizado, criamos uma classe de teste, que é separada da classe original. Ela é armazenada no diretório " src > teste > java", no mesmo pacote da classe que estamos testando.

Dentro dessa classe de teste, criamos métodos para simular os cenários. Porém, essa classe não tem um método `main`, ela não roda como tal. Para sinalizarmos para o JUnit, que é quem rodará a classe, usamos a anotação `@Test`.

Para cada possibilidade, ou seja, cada cenário, criamos um método separado. Aprenderemos como escrever esse tipo de código na sequência!

## Transcrição

**Rodrigo:** Conseguimos criar nossa primeira classe de testes usando JUnit, mas por enquanto ela está vazia, não há nada sendo testado. Agora, a ideia é aprendermos como escrever um teste automatizado.

Os testes visam simular cenários possíveis.

Estamos testando a calculadora, quero simular um determinado cenário. Se houver um gato com 4 anos de idade e pesando 4 quilos, a probabilidade de adoção dele deve ser alta, porque a idade é baixa e o peso também é baixo.

Podemos anotar isso em um comentário para mantermos em mente. Este é o cenário que quero testar. Idade 4 anos, peso 4 quilos, a probabilidade deve ser alta. O teste consiste em instanciarmos a classe que queremos testar e chamar seus métodos. É como se estivéssemos usando essa classe.

**Vinícius:** Como o Rodrigo comentou, vamos instanciar a classe que vamos testar, que é a `CalculadoraProbabilidadeAdocao`. Então, a `calculadora` recebe uma nova `CalculadoraProbabilidadeAdocao`.

Já temos um objeto `calculadora`, e queremos testar o método `calcular()`. Se inserir um ponto após `calculadora` , o IntelliJ nos ajuda e sugere indicando o método `calcular()`.

```java
@Test
    void cenario01(){
        //idade 4 anos e 4kg - ALTA
                
        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        calculadora.calcular();
```

O método `calcular()` espera receber um `pet`. Podemos passar esse `pet` e este método `Calcular` devolve uma probabilidade. Então, podemos nomear isso como `ProbabilidadeAdocao`. Então, isto será o retorno, certo? Resumindo, vamos testar essa classe `CalculadoraProbabilidadeAdocao`. E criamos um objeto `calculadora`. Vamos chamar o método `calcular()` passando um `Pet`.

```java
@Test
    void cenario01(){
        //idade 4 anos e 4kg - ALTA
                
        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);
                
        }
```

**Vinícius:** Mas a IDE está indicando um erro em `calcular(pet)`. O que poderia ser?

**Rodrigo:** Pois é, o método `calcular` recebe como parâmetro um objeto do tipo `pet`. E está dando erro de compilação porque passamos uma variável do tipo `pet` que não existe.

Então, nosso teste não se limita a chamar a classe que queremos testar. Se ela precisa de um parâmetro, temos que passar esse parâmetro.

Agora é necessário instanciar um objeto `pet`, isto é necessário para conseguirmos chamar o método que queremos testar.

**Vinícius:** Então, se começarmos a criar aqui, vamos instanciar um objeto do tipo `Pet`. Criar uma variável `pet` que recebe `new Pet()`. Será que essa classe `Pet` possui dependências? Ela precisaria de outras classes, outros objetos?

```java
@Test
    void cenario01(){
        //idade 4 anos e 4kg - ALTA
                
        Pet pet = new Pet();
                
        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);
                
        }
```

Para saber isso, com o cursor sobre `Pet` vamos pressionar "Ctrl + clique do mouse" e veremos no construtor que espera-se receber dois parâmetros `CadastroPetDto` – que vai ter informações como nome, raça, peso, idade – e também `Abrigo`, que é onde este pet está localizado.

Então, podemos voltar para a classe `CalculadoraProbabilidadeAdocaoTest`.

Para facilitar a criação dos imports, já tenho aqui uma cola, vou pressionar "Ctrl + V" e ir fazendo esses imports usando o atalho "Ctrl + Espaço".

```java
    @Test
    void cenario01(){
        //idade 4 anos e 4kg - ALTA

        Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
                "Abrigo feliz",
                "94999999999",
                "abrigofeliz@email.com.br"
        ));
        Pet pet = new Pet(new CadastroPetDto(
                TipoPet.GATO,
                "Miau",
                "Siames",
                4,
                "Cinza",
                4.0f
        ), abrigo);

        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);
```

**Rodrigo:** Só para reforçar enquanto o Vini faz os imports. Essa é uma parte um pouco chata dos testes automatizados.

Queremos testar uma classe, queremos testar um método dessa classe, mas ela recebe parâmetros. Então, às vezes, não é só instanciar um objeto. Você tem que instanciar esse objeto, mas ele depende de outro objeto que depende de outro objeto. Então, é necessário instanciar todas essas dependências para conseguir chamar o método que realmente queremos testar.

Então, dependendo do seu código ou da classe que você quer testar, serão necessárias várias linhas para criar essas informações; algo equivalente ao que fazíamos no Postman. Se pretendêssemos testar essa funcionalidade, teríamos que cadastrar um pet, cadastrar um abrigo e preencher o JSON com essas informações. Portanto, mesmo ao testar manualmente no Postman, esse passo seria um tanto trabalhoso.

Vinícius: Pronto, imports realizados. Desejo chamar sua atenção para um detalhe de grande importância para nossa calculadora: a idade. Nesse caso, estabeleci a idade em 4 anos, que é a idade que queremos testar para este pet, e também 4 quilos. Portanto, inserimos aqui 4.0, e incluímos o "F", representando um valor do tipo _float_.

Agora, o que precisamos verificar? Se essa probabilidade é alta. Até aqui, utilizamos apenas programação em Java. Ainda não utilizamos nada do JUnit. Portanto, a pergunta é: o JUnit oferece alguma classe ou método para auxiliar com esse teste automatizado?

Rodrigo: Até o momento, só temos a anotação `@Teste` acima do método, apenas para indicar ao JUnit que este é um método de teste automatizado. No entanto, a parte mais importante do teste é verificar se as informações estão sendo retornadas conforme o esperado. Nesse cenário, a variável `probabilidade`, retornada pela função `calculadora.calcular(pet)`, deve ter o valor "alta", já que estamos passando um animal que pesa 4 quilos e tem 4 anos de idade.

Logo após essa chamada, precisamos checar: essa variável `probabilidade` é igual à `probabilidade alta`? Essa é a verificação que preciso para confirmar se tudo está funcionando como esperado. Aqui é onde o JUnit entra.

O JUnit possui uma classe chamada "_**Assertions**_", com vários métodos estáticos para realizar asserções, verificações, checar se uma variável está valendo um valor específico, se é nula ou não, se é _true_ ou _false_. Há vários métodos para fazer essas comparações.

Note que ao começar a escrever "Assert", o IntelliJ sugere várias classes, perguntando se desejo importar de `junit.jupiter.api`. Podemos clicar para fazer o import.

Nessa situação, utilizaremos o `AssertEquals` para verificar o que esperamos: uma probabilidade de adoção alta. Entretanto, de onde esperamos essa alta probabilidade de adoção? Do retorno de nossa calculadora, certo?

```java
CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

Assertions.assertEquals(ProbabilidadeAdocao.ALTA,probabilidade);
```

Portanto, recapitulando, estamos usando o JUnit para validar se o valor proveniente dessa calculadora de probabilidade tenha o valor "alta".

**Rodrigo:** Nesse cenário, é isso que precisamos verificar: se a probabilidade de adoção retornada é "alta".

E agora, surgem mais dúvidas. O teste está pronto, como faço para executá-lo, já que essa classe não tem um método `main`?

**Vinícius:** Aqui no canto esquerdo, logo na linha 17 , ao lado do nome do método, `void cenario01`, temos um botão de "Play" Podemos clicar nele e então teremos uma opção, "Run cenário 01()". Podemos clicar nele, e irá executar o teste.

Observe que já começou a carregar e, pronto! Mostrou aqui um sinal verde de OK, e indicou que o teste passou.

Assim, isso indica que nosso teste foi bem sucedido e nós criamos um teste automatizado.

Podemos forçar uma situação para em vez de retornar "alto",fazer retornar "média". Na classe `CalculadoraProbabilidadeAdocao` vamos substituir `ProbabilidadeAdocao.Alta` por `ProbabilidadeAdocao.Media`.

Vamos criar essa situação para verificar um erro. Será que nosso teste está sendo aprovado? Será que ele foi bem construído? Então, vamos testar. Retornando à calculadora de teste novamente, vamos clicar no pequeno botão de "Play" e selecionar "Run cenário 01".

Note que ao executar, retornou um ícone com um X, indicando que houve um erro.

> org.opentest4j.AssertionFailedError:
> 
> Expected: ALTA
> 
> Actual: MEDIA

Ele deveria retornar "alta", mas retornou "média". Aqui, vemos nosso teste automatizado sendo aprovado com sucesso. Foi bem construído. Não é, Rodrigo?

Rodrigo: Perfeito! Então, forçamos um erro aqui propositalmente para verificar se o teste detectaria tal falha.

Esses são os objetivos dos testes automatizados:

- Detectar bugs na aplicação;
- Validar se o código está funcionando como esperado

E, caso alguém modifique o código sem intenção e cause um erro, o teste deve falhar indicando que há algo errado aqui. Se você estava esperando uma coisa e recebeu outra, esse é o caso que acabamos de simular. Nosso teste consegue detectar falhas caso alguém modifique a calculadora e cause algum dano a este primeiro cenário, pelo menos.

**Vinícius:** Perfeito! Nós criamos apenas um cenário, mas precisamos criar mais cenários de teste. Continuaremos nos próximos vídeos!

#   
Para saber mais: tipos de testes

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139535/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139535/question)

Existem vários tipos de testes automatizados que desempenham papéis fundamentais na garantia da qualidade do software. Desde os **testes unitários**, que verificam pequenas partes do código, até os **testes de aceitação**, que validam as expectativas dos usuários, cada tipo tem seu objetivo bem definido.

Se você quiser saber mais sobre esses tipos de testes e como eles se complementam, confira o artigo [Tipos de testes: quais os principais e por que utilizá-los?](https://www.alura.com.br/artigos/tipos-de-testes-principais-por-que-utiliza-los)

## Transcrição

**Rodrigo:** Já aprendemos a escrever um teste automatizado utilizando o JUnit.

Mas, como mencionamos, esse teste que realizamos foi para apenas um cenário específico: aquele onde um gato tem um peso e uma idade baixos, e a probabilidade de adoção deveria ser alta. No entanto, existem mais possibilidades. Como seria se o pet fosse mais velho e tivesse um peso maior?

Para cada possibilidade, precisamos criar um novo cenário de teste e cada cenário é representado por um método dentro da classe de teste.

Todo aquele trabalho que fizemos para instanciar os objetos, apesar de ser cansativo, só precisamos fazer uma única vez, só para o primeiro cenário. Para os próximos cenários, basta copiar e colar.

**Vinícius:** Exatamente. Já vou copiar nosso cenário, inclusive a anotação do `@Test` para informar para nossa aplicação que este é um método de teste.

Vamos colar esse bloco e código logo abaixo, na mesma classe. O IntelliJ vai alertar que há um erro, pois o nome do método é igual ao anterior, então podemos renomear para "cenário 02".

```java
    @Test
    void cenario02(){
        //idade 4 anos e 4kg - ALTA

        Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
                "Abrigo feliz",
                "94999999999",
                "abrigofeliz@email.com.br"
        ));
        Pet pet = new Pet(new CadastroPetDto(
                TipoPet.GATO,
                "Miau",
                "Siames",
                4,
                "Cinza",
                4.0f
        ), abrigo);

        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

        Assertions.assertEquals(ProbabilidadeAdocao.ALTA,probabilidade);
    }
```

Então, Rodrigo, temos um outro cenário aqui. Qual será o cenário que vamos testar?

**Rodrigo:** Ótimo, fazer outros cenários é simples. Copie o primeiro cenário, cole e adapte. **Lembre-se de adaptar o que você copiou para não ficar com dois cenários iguais**.

Nesse caso, Vini, vamos simular um pet com 15 anos de idade. Então, ele pode ser do mesmo peso, 4 kg, mas se tiver 15 anos de idade, ele é um pet mais idoso, e a probabilidade de adoção não deveria ser alta, deveria ser média.

**Vinícius:** Vamos alterar os parâmetros do nosso `CadastroPetDTO`. Vamos adicionar 15 anos, já que 4 anos era do cenário 01. Isso é tudo? Não.

Agora, precisamos verificar na parte de _assertions_. Agora esperamos uma probabilidade média. Esperamos uma probabilidade média. Então, podemos alterar para média. Perfeito. Acredito que é só isso que podemos fazer.

```java
    @Test
    void cenario02(){
        //idade 15 anos e 4kg - MEDIA

        Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
                "Abrigo feliz",
                "94999999999",
                "abrigofeliz@email.com.br"
        ));
        Pet pet = new Pet(new CadastroPetDto(
                TipoPet.GATO,
                "Miau",
                "Siames",
                15,
                "Cinza",
                4.0f
        ), abrigo);

        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

        Assertions.assertEquals(ProbabilidadeAdocao.MEDIA,probabilidade);
    }
```

Vamos executar esse cenário de teste. Lembrando que, no lado esquerdo ao lado de `void cenario02()` temos um botão de play. Vamos clicar nele e selecionar a opção "Run cenário 02()". Vamos executar e se tudo der certo, esse teste vai passar.

Porém, vejam que temos um erro.

> org.opentest4j.AssertionFailedError:
> 
> Expected: Media
> 
> Actual: Baixa

**Rodrigo:** O teste não passou.

Isto é algo interessante do JUnit. O JUnit já possui uma integração com os IDEs. Ele apresenta uma aba onde mostra o resultado do teste. Quando os testes são bem-sucedidos, ele mostra um ícone verde. Quando o teste falha, ele marca de amarelo com um "X" e o mais importante, ele te diz o que falhou.

Na tela, ele está mostrando que o teste do cenário 02 falhou porque esperávamos uma probabilidade média, mas o que foi retornado pela calculadora foi uma probabilidade baixa. Ele indica qual _assert_ falhou e o que era esperado e o que realmente foi retornado. Facilitando assim a compreensão do que aconteceu.

Entretanto, no nosso caso, o teste falhou indicando que nosso código, mais especificamente, a classe calculadora, o método de calcular, tem um bug.

Nesse cenário específico de um pet com idade avançada e peso baixo, a probabilidade deveria ser média, mas está retornando baixa. Ou seja, foi aquilo que mencionei antes: mesmo que a classe seja simples, pequena, pode existir um erro que cometemos na hora de escrever o código.

Acabamos de detectar esse bug. Na próxima aula, vamos entender com mais calma como analisar o código para identificar onde está esse bug e como corrigi-lo!

# Faça como eu fiz: primeiro teste de unidade

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139541/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139541/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula, criando uma classe de testes para a classe `CalculadoraProbabilidadeAdocao`, com o objetivo de testar o método `calcular`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139541/opinion)

Você vai precisar criar a classe `CalculadoraProbabilidadeAdocaoTest`, dentro do source folder de testes (src/main/test):

```kotlin
class CalculadoraProbabilidadeAdocaoTest {

}
```

Agora, crie o primeiro cenário de teste, que deve validar a probabilidade de adoção alta para um gato de peso e idade baixas:

```java
@Test
void cenario01() {
    //idade 4 anos e 4kg - ALTA

    Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
            "Abrigo feliz",
            "94999999999",
            "abrigofeliz@email.com.br"
    ));
    Pet pet = new Pet(new CadastroPetDto(
            TipoPet.GATO,
            "Miau",
            "Siames",
            4,
            "Cinza",
            4.0f
    ), abrigo);

    CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
    ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

    Assertions.assertEquals(ProbabilidadeAdocao.ALTA, probabilidade);
}
```

Na sequência, crie mais um método de teste para o segundo cenário:

```java
@Test
void cenario02() {
    //idade 15 anos e 4kg - MEDIA

    Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
            "Abrigo feliz",
            "94999999999",
            "abrigofeliz@email.com.br"
    ));
    Pet pet = new Pet(new CadastroPetDto(
            TipoPet.GATO,
            "Miau",
            "Siames",
            15,
            "Cinza",
            4.0f
    ), abrigo);

    CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
    ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

    Assertions.assertEquals(ProbabilidadeAdocao.MEDIA, probabilidade);
}
```

Pronto! Você escreveu sua primeira classe de testes automatizados utilizando a biblioteca JUnit.


## Transcrição

**Rodrigo:** Vamos continuar. Observe que temos dois cenários de teste. O primeiro passou, já o segundo não.

Eventualmente, pode ocorrer de, ao executar o seu teste automatizado, ele falhe, indicando que provavelmente há um bug no seu código, na classe que você está testando.

Entretanto, existe uma observação importante. **Não necessariamente existe um bug na aplicação**. Pode ser que o teste falhou porque o código do teste estava incorreto. Nós estávamos pensando em um cenário, mas ao codificar o teste, transcrevemos o cenário de forma errônea. Aí o teste vai falhar.

Se observarmos agora o `cenario02`, nele temos um pet com 15 anos de idade e 4 quilos. Nesse cenário, de acordo com as regras de negócios da nossa aplicação, a probabilidade deveria ser alta.

**Vinicius:** Mas aqui, deveria ser média, não é mesmo, Rodrigo? Ele deveria retornar média, porém retornou baixo. Seguimos o mesmo fluxo do `cenario01`, todavia, ocorreu esse problema. Sendo assim, acredito que agora temos que analisar o nosso código da Calculadora de Probabilidade.

**Rodrigo:** Perfeito, o cenário de teste está correto, bem como o código de teste. Se é assim, então, significa que o código errado é da classe que estamos testando. No caso da classe _Calculadora_, lá no método `calcular` tem um bug que está retornando baixa quando deveria devolver média. Então, vamos analisar o código e encontrar o bug.

**Vinicius:** Agora eu já tenho aberta a classe `CalculadoraProbabilidadedeAdocao`. Nós vamos observar primeiro essa parte o método `calcular`, sem ser o `calcularNota`. Veja que, para ele estar retornando _baixa_, a nota tem que ser menor que 5.

Então, por que será que ficou menor que 5? Vamos descobrir. Descendo para o método `calcularNota`. Passando com o `pet`, pegou o `peso` que foi de 4 quilos. A idade também foi de 15. Começamos com a nota 10. E lembre que nós passamos um gato.

Então, esse gato que passamos tinha um peso maior que 10? Não. Então, ele permanece com a nota de 10. Mas, vamos analisar agora os pontos descontados pela idade avançada. Então, observemos este cenário.

A idade dele é maior ou igual a 15? Sim. Então ele perde 5 pontos, ficando apenas com 5 pontos agora. E a idade dele também é maior ou igual a 10? Sim, porque neste caso ela é igual a 15. Então, ele perde aqui mais 4 pontos.

Então, ele fica apenas com 1 ponto, retorna essa nota. E aí, cai aqui nessa probabilidade _baixa_. Eu acho que é isso mesmo, não é?

**Rodrigo:** É, esses dois _ifs_ que não estão corretos. Na verdade, o problema é justamente esse que você mencionou. Ele entra no primeiro `if`, mas ele está entrando também no segundo. Não era para entrar nos dois.

Se a idade é maior ou igual a 15, é para tirar 5 pontos. Automaticamente, ela já vai ser maior ou igual a 10 também. Mas, ele não deveria entrar nesse segundo `if`. E aí, ele penalizou duas vezes. Ele deveria entrar ou no primeiro `if`, ou no segundo, não nos dois.

**Vinicius:** Perfeito. Então eu posso colocar aqui o `else if`. Porque dessa forma, ele vai cair na primeira condição ou na de baixo. Então, se a idade dele for maior ou igual a 15, ele tira aqui 5 pontos. E aí ele retorna. Se não for, ele vai tentar verificar nesse nosso `if` de baixo.

```kotlin
// penalizando pela idade avançada
if (idade >= 15) {
        nota -= 5;
}else if (idade >= 10) {
        nota -= 4;
}

return nota;
```

Então, depois de fazer essa correção, vamos realizar o nosso teste. Voltando para a nossa classe de teste, no `cenario02`, vamos rodar esse cenário novamente, clicando no botão com um ícone de círculo vermelho com um ponto de exclamação dentro, na lateral esquerda da interface. Selecionaremos a opção "Run 'cenario02'". E observe que agora passou.

Agora, obtemos a probabilidade média. Por isso que é fundamental realizar testes automatizados. Pois, desta forma, conseguimos descobrir _bugs_ no nosso código. Esses erros podem comprometer os dados do nosso sistema. Rodrigo, realizamos uma correção. Você acha que essa alteração não interferiu no cenário 1?

**Rodrigo:** Isso que você mencionou é muito importante. Para corrigir esse erro, tivemos que modificar o código. Sempre que alteramos o nosso código, corremos o risco de estragar algo que estava funcionando anteriormente. Essa é a nossa realidade na programação.

Corrigimos o cenário 2, mas será que isso não prejudicou o cenário 1? E quanto aos cenários 3, 4 e 5? Ou mesmo os outros testes do projeto?

Portanto, sempre que mexemos no código, **o ideal seria executar todos os testes**. Não apenas um único teste isolado.

Vini, você poderia nos mostrar como executar os dois cenários dessa classe ao mesmo tempo?

**Vinicius:** Perfeito. No canto superior esquerdo do visor, ao lado da classe `CalculadoraProbabilidadeAdocaoTest`, temos um botão verde. Clicando nele, ele mostra o nome dessa classe. Indicando que ele vai executar todos os métodos dessa classe na opção "Run 'CalculadoraProbabilidadeAdocaoTest'".

Selecionaremos essa opção. Agora vejam, ele já executou os dois cenários. Neste caso, os dois passaram. Portanto, os dados não foram comprometidos. Não introduzimos outro erro no código. Aqui, os dois testes passaram.

**Rodrigo:** Acabamos de garantir que essa alteração no código não prejudicou o cenário 1. Pois, conseguimos executar todos os testes da classe. Podemos executar um cenário específico, clicando no botão play verde do cenário ou no botão play da classe, para ele executar todos os cenários dentro daquela classe.

Resolvemos um erro, mas tem algumas coisas neste código que estão me incomodando. Talvez esteja te incomodando também. Como, por exemplo, o nome desses métodos. `cenario01`, `cenario02`… Isso não está muito bom, certo?

**Vinicius:** Vamos aprender uma boa prática para nomear esses métodos. Mas isso será abordado na sequência. Te aguardo lá!

## Transcrição

**Rodrigo:** Conseguimos corrigir o bug e aprendemos a executar todos os testes da classe. Como mencionamos no vídeo anterior, esses nomes de métodos, `cenario01` e `cenario02`, não estão muito claros, porque nós sabemos o que cada um deles representa, mas e outras pessoas que trabalham conosco?

Quando elas abrirem essa classe de teste e criarem novos cenários, será que saberão o que significa `cenario01`? Inclusive, é provável que nós mesmos não nos lembraremos do que é o `cenario01` depois de uma semana. Sendo assim, seria melhor renomearmos e deixar o nome **mais descritivo**.

**Vinicius:** Exato, então podemos começar pelo `cenario01`. Poderíamos nomeá-lo como... Você pode me ajudar aqui, Rodrigo? Acho que deveria retornar algo, não é?

**Rodrigo:** Deixamos um comentário dentro do método para nos auxiliar a lembrar do cenário. O nome do método pode ser algo parecido com o que está escrito no comentário.

O nome deve descrever o cenário que estamos testando, o que esperamos dele e quais informações estamos fornecendo. Então, poderíamos chamá-lo de `DeveriaRetornarProbabilidadeAltaParaPetComPesoBaixoEIdadeBaixa` ou algo assim.

> A ideia é que o nome descreva o que está sendo testado nesse método, sem que tenhamos que ler linha por linha para entender.

Se o próprio nome do método disser isso, a pessoa nem precisará ler cada linha para entender o que este cenário está testando.

**Vinicius:** Perfeito. Renomeamos o método para ser bem descritivo, `DeveriaRetornarProbabilidadeAltaParaPetComIdadeBaixaEPesoBaixo`. Podemos copiar esse nome deste antigo `cenario01`, ir para `cenario02`, colar e aí ele dará um erro porque temos dois métodos com o mesmo nome, então precisamos alterá-lo.

Neste antigo `cenario02`, o pet tem 15 anos, que é uma idade avançada para um pet. Então, acho que podemos chamar de `IdadeAlta` em vez de `IdadeBaixa` A probabilidade neste caso é média, então renomearemos para `DeveriaRetornarProbabilidadeMediaParaPetComIdadeAltaEPesoBaixo`.

**Vinicius:** Agora, uma coisa interessante, se executarmos todos os testes, temos esse botão de 'play' no canto esquerdo, escolheremos a opção "Run 'CalculadoraProbabilidadeAdocaoTest'" e observaremos o retorno no canto inferior. Ele retorna o nome do método. Então, conseguimos identificar facilmente qual teste passou e o que cada um significa. Isso é bem descritivo.

No entanto, pode surgir uma dúvida: "esses nomes de métodos não estão muito grandes? Isso não é uma má prática?"

**Rodrigo:** Bem, uma desvantagem é que o nome do método ficou bastante longo. O Java, no entanto, não tem uma regra de restrição de número de caracteres para o nome do método.

Além disso, quem vai chamar esse método não somos nós - não vamos instanciar essa classe e usar esse nome de método gigantesco. Quem vai chamar esse teste é o JUnit e não importa para ele se o método tem um ou três mil caracteres, ele executará o método de qualquer forma.

Porém, Vini, deixaremos aqui no curso um "_Para Saber Mais_" mostrando uma alternativa a essa abordagem.

Se você não deseja usar nomes de métodos muito extensos, existe uma anotação do JUnit que nós podemos utilizar para reduzir o comprimento do nome do método sem perder sua descrição e legibilidade. Sugerimos que você leia a seção _Para Saber Mais_ onde esse recurso é demonstrado. Está bom? Perfeito.

**Vinicius:** Agora possuímos dois cenários, os antigos cenários 01 e 02. Note que existe um padrão de teste, que será explorado na sequência.

#   
Para saber mais: Display Name

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139550/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139550/question)

Ao escrever testes automatizados em Java, é fundamental que os nomes dos métodos de teste sejam descritivos e reflitam claramente os cenários sendo testados. Nomes adequados tornam os testes mais **legíveis** e ajudam as pessoas desenvolvedoras a entender rapidamente o objetivo de cada caso de teste.

Nessas primeiras aulas escrevemos testes automatizados para a classe `CalculadoraProbabilidadeAdocao`, sendo que os nomes dos métodos de testes que criamos, como `probabilidadeDeveriaSerAltaParaGatosJovensComPesoBaixo` e `probabilidadeDeveriaSerMediaParaGatosIdososComPesoBaixo`, apesar de descritivos, são muito longos e podem prejudicar a legibilidade do código de teste. Lembrando que nomes de métodos no Java seguem a convenção **camelCase**, inclusive nas classes de testes automatizados.

## Utilizando o recurso `@DisplayName` do JUnit

O JUnit oferece uma solução para melhorar a legibilidade dos nomes dos métodos de teste por meio da anotação `@DisplayName`. Essa anotação permite atribuir nomes descritivos diretamente ao método de teste, separando a descrição do cenário da lógica do código. Com o `@DisplayName`, podemos criar nomes concisos e significativos que refletem o objetivo do teste, sem a necessidade de incluir todos os detalhes do cenário no nome do método. Além disso, não ficamos limitados à convenção de nomenclatura de métodos no Java.

Veja um exemplo de utilização da anotação `@DisplayName` no código demonstrado ao longo dessa aula:

```less
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculadoraProbabilidadeAdocaoTest {

    @Test
    @DisplayName("Probabilidade alta para gatos jovens com peso baixo")
    void probabilidadeAltaCenario1() {
        //código de teste omitido. Permanece sem alterações
    }

    @Test
    @DisplayName("Probabilidade média para gatos idosos com peso baixo")
    void probabilidadeMediaCenario1() {
        //código de teste omitido. Permanece sem alterações
    }

    //outros cenários de testes...
}
```

Perceba que a anotação `@DisplayName` recebe uma String como parâmetro, utilizada para descrever de maneira detalhada o cenário sendo testado. Dessa forma, fica mais fácil descrever o cenário sendo testado e não precisamos fazer tal detalhamento nos nomes dos métodos.

## Transcrição

**Rodrigo:** Fizemos um ajuste, uma melhoria nos nomes dos métodos para deixar mais claro o que cada cenário está simulando. Você mencionou que temos dois cenários, mas poderíamos ter três, cinco, cinquenta, vai depender aí da classe que estamos testando.

Ao analisar esses dois cenários, percebemos que o código do teste apresenta uma **estrutura muito parecida**. Primeiro, nós instanciamos os objetos, depois instanciamos a classe que queremos testar e chamamos o método que queremos testar.

Por fim, realizamos o assert, usando aquela classe Assertions do JUnit, para checar se as informações estão conforme o esperado.

Fizemos isso de propósito e essa maneira de organizar o código de teste é um padrão, não é mesmo, Vini?

**Vinicius:** Estamos fazendo várias instâncias, tanto de abrigo quanto de pet. Geralmente, essa parte é chamada de **Arrange**, fazendo uma analogia, é como se estivéssemos arrumando a casa antes de realizar algo.

```java
//ARRANGE
        Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
                "Abrigo feliz",
                "94999999999",
                "abrigofeliz@email.com.br"
        ));
        Pet pet = new Pet(new CadastroPetDto(
                TipoPet.GATO,
                "Miau",
                "Siames",
                4,
                "Cinza",
                4.0f
        ), abrigo);
        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();
```

Logo abaixo, onde executamos alguma ação, geralmente é chamada de **Act**, porque é uma ação que estamos realizando. Na última linha do nosso método, temos o **Assert**, gostaríamos de verificar se dois valores são iguais, se eles correspondem.

```java
        //ACT
        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

        //ASSERT
        Assertions.assertEquals(ProbabilidadeAdocao.ALTA,probabilidade);
```

Assim, temos aqui um padrão **Arrange, Act, Assert**, conhecido como _**Triple A**_ ou os **Três As**. Temos o primeiro A, que é o Arrange, o segundo A de Act, e o terceiro A de Assert.

Se olharmos para o cenário dois, segue esse mesmo padrão: Arrange, Act e Assert.

```java
 @Test
    void deveriaRetornarProbabilidadeMediaParaPetComIdadeAltaEPesoBaixo(){
        //idade 15 anos e 4kg - MEDIA

        Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
                "Abrigo feliz",
                "94999999999",
                "abrigofeliz@email.com.br"
        ));
        Pet pet = new Pet(new CadastroPetDto(
                TipoPet.GATO,
                "Miau",
                "Siames",
                15,
                "Cinza",
                4.0f
        ), abrigo);
        CalculadoraProbabilidadeAdocao calculadora = new CalculadoraProbabilidadeAdocao();


        ProbabilidadeAdocao probabilidade = calculadora.calcular(pet);

        Assertions.assertEquals(ProbabilidadeAdocao.MEDIA,probabilidade);
    }
```

**Rodrigo:** Perfeito, então esse é o padrão chamado de _Triple A_, que é apenas uma maneira de organizar o código dos cenários de teste. Ele deixa separado o que são os dados do teste, a chamada da ação e as assertivas, as verificações que queremos realizar.

É uma forma que fica mais lógica, mais clara e mais simples para entender o que significa cada trecho de código dentro de cada cenário de teste.

Isso facilita a vida, porque criamos um padrão. Portanto, durante o curso, sempre seguiremos esse padrão, em todas as classes de testes que vamos criar, em todos os métodos de cada cenário, dividiremos o código nesses três blocos, para facilitar as entradas de informação, onde está a chamada do método e onde estão as assertivas. Com isso, fica mais fácil de ler e realizar a manutenção nesse código.

**Vinicius:** Agora que já conhecemos bem esse padrão, por enquanto só realizamos testes automatizados nessa calculadora de probabilidade de adoção. Mas, ao abrir o diretório de arquivos do IntelliJ, acessando a pasta "java" e o pacote da nossa AdoPet, existem muitas outras classes para testarmos.

Acredito que será valioso também praticar nessas outras classes, mas isso podemos ver na sequência.

# Para saber mais: padrões de organização de testes

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139553/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139553/question)

Ao escrever testes automatizados é importante pensar em como organizar o código de cada teste, de forma que fique bem fácil de entender cada cenário sendo testado. Para facilitar esse processo, existem alguns padrões de organização do código de cada cenário de teste que podem ser utilizados para ajudar nesse objetivo.

Dois padrões são os mais comuns na organização de testes automatizados: **"Arrange, Act, Assert"** (conhecido como **AAA** ou **Triple A**) e **"Given, When, Then"** (conhecido como **GWT**). Ambos os padrões têm o objetivo de tornar os testes mais legíveis e fáceis de entender, promovendo uma abordagem estruturada na criação de cenários de teste.

## Arrange, Act, Assert (AAA)

O padrão AAA é amplamente utilizado e consiste em três etapas distintas:

**a)** _Arrange_ (Preparar): Nesta etapa, são realizadas todas as configurações iniciais necessárias para que o cenário de teste possa ser executado. Isso pode incluir a criação de objetos, definição de variáveis, configuração de ambiente e qualquer outra preparação necessária para que o teste seja executado em um estado específico.

**b)** _Act_ (Agir): Nesta fase, a ação que se deseja testar é executada. Pode ser a chamada de um método, uma interação com a interface do usuário ou qualquer outra operação que seja o foco do teste.

**c)** _Assert_ (Verificar): Na última etapa, os resultados são verificados em relação ao comportamento esperado. É onde se avalia se o resultado obtido após a ação está de acordo com o que se esperava do teste. Caso haja alguma discrepância entre o resultado real e o esperado, o teste falhará.

## Given, When, Then (GWT)

O padrão GWT também é conhecido como **padrão BDD** (_Behavior-Driven Development_). Ele foi projetado para criar testes com uma linguagem mais próxima da forma como os cenários são discutidos entre as pessoas que fazem parte do projeto, incluindo pessoas técnicas, como desenvolvedores e testadores, além de clientes e usuários da aplicação. O padrão GWT tem as seguintes etapas:

**a)** _Given_ (Dado): Nesta etapa, é descrito o cenário inicial ou o contexto do teste. São definidas as condições iniciais necessárias para a execução do cenário de teste.

**b)** _When_ (Quando): Aqui, a ação específica que está sendo testada é executada. É a etapa em que a ação do usuário ou do sistema acontece.

**c)** _Then_ (Então): Nesta etapa, os resultados esperados são verificados. São definidos os critérios de sucesso para o cenário de teste, e o teste é aprovado ou reprovado com base nesses resultados.

Ambos os padrões tornam os testes mais fáceis de ler e entender, mesmo para pessoas não familiarizadas com o código ou com a lógica de negócios do sistema. Além disso, a estruturação dos testes em etapas claras e definidas torna mais fácil para as pessoas desenvolvedoras localizarem e corrigirem problemas em caso de falha.

## Transcrição

**Rodrigo:** Vamos continuar o nosso projeto.

Vini, nós testamos aquela classe `CalculadoraProbabilidadeAdocao`, mas o projeto não se limita a essa classe. Há várias outras classes que poderíamos testar.

## Testando a Classe de Validações

Se explorarmos os diretórios no explorador à esquerda do _IntelliJ_, temos os mesmos pacotes vistos no curso anterior: "controller", "dto", "validacoes", entre outros. A ideia é descobrir outras classes importantes, com regras de negócio próprias, para podermos continuar escrevendo os testes.

Vini, expanda o pacote "validacoes". Ele já indica pela nomenclatura que precisamos pensar em testes, ou seja, em validações. Em eu interior há várias classes que executam validações. Por exemplo, a classe `ValidacaoPetDisponivel.java`.

**Estrutura de diretórios no explorador:**

- validacoes
    - ValidacaoPetComAdocaoEmAndamento
    - ValidacaoPetDisponivel
    - ValidacaoSolicitacapAdocao
    - ValidacaoTutorComAdocaoEmAndamento
    - Validacao TutorComLimiteDeAdocoes

Vamos abrir essa classe. Essa é uma das classes que criamos no curso anterior, e ela executa uma regra de negócio no projeto.

```java
@Component
public class ValidacaoPetDisponivel implements ValidacaoSolicitacaoAdocao {

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

Para uma solicitação de adoção, temos um algoritmo que verifica se aquele _pet_ pode ou não ser adotado. Ela lança uma exceção quando aquele _pet_ não pode ser adotado.

Essa é uma classe importante no projeto e tem uma regra de negócio. Portanto, faz sentido criar uma classe de testes para essa classe também, certo?

**Vinicius:** Vamos criar mais essa classe de teste.

Lembrando que, como estávamos testando outra classe, criamos uma classe de teste especificamente para ela. Agora, vamos criar uma outra classe de teste para a classe `ValidacaoPatchDisponivel`.

Clicando sobre o nome dessa classe, pressionando o atalho "Alt+Insert", uma lista suspensa será exibida com algumas opções. Vamos clicar na opção "Test" (teste).

Na janela modal exibida, haverá as mesmas opções que vimos anteriormente. Vamos utilizar o JUnit 5, e o nome da nossa classe `ValidacaoPetDisponivelTest` onde iremos testar de forma automatizada. Ela possui o nome da nossa classe mais o sufixo de teste.

Ao clicar no botão "OK", criaremos a classe de teste que terá o código abaixo.

```java
package br.com.alura.adopet.api.validacoes;

import static org.junit. Jupiter.api.Assertions.*;

class ValidacaoPetDisponivelTest {

}
```

Vamos criar entre suas chaves o nosso primeiro cenário. Utilizaremos a anotação `@Test`, para que o JUnit seja importado automaticamente no topo do arquivo.

Abaixo de `@Test`, escreveremos o nome do nosso primeiro cenário: o método `void deveriaPermitirSolicitacaoDeAdocaoPet()`.

```java
package br.com.alura.adopet.api.validacoes;

import static org.junit.Jupiter.api.Assertions.*;

class ValidacaoPetDisponivelTest {
    
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
    
    }
}
```

Este nome faz referência à nossa classe `ValidacaoPetDisponivel` dentro da qual temos um método `validar()` para a solicitação de adoção. Neste método, passamos um `dto` com o parâmetro `idPet` para verificar se esse pet foi adotado ou não.

**Rodrigo:** Com esse cenário, queremos checar se aquela classe de validação permite a adoção de um pet que ainda está disponível.

**Vinicius:** Vamos fazer a instância dessa classe entre as chaves de `deveriaPermitirSolicitacaoDeAdocaoPet()`. Para criá-la, podemos chamar `ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel()`.

Dentro do objeto `validacao`, temos o método `validar()`, onde passamos o `dto` de solicitação de adoção entre parênteses.

Acima da instância de validação, precisamos realizar a instância desse `dto`. Para não perdermos tempo, temos uma cola na área de transferência, cujo conteúdo está disponível abaixo.

```plaintext
SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
    7l,
    2l,
    "Motivo qualquer"
);
```

Basta copiá-lo e colar no local indicado.

```java
package br.com.alura.adopet.api.validacoes;

import static org.junit.Jupiter.api.Assertions.*;

class ValidacaoPetDisponivelTest {
    
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
    
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
    
        ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel();
        
        validacao.validar(dto);
    }
}
```

**Rodrigo:** Para relembrar, estamos criando um novo cenário de teste para outra classe, contudo, vamos seguir o mesmo padrão AAA (_Triple A_). Esse padrão consiste em três partes: _Arrange, Act e Assert_.

No caso do _**Arrange**_, temos que passar o objeto `SolicitacaoAdocaoDto` que acabamos de colar, porque o método `validar()` da classe `ValidacaoPetDisponivel` que estamos testando na parte do _**Act**_ recebe não o objeto `pet`, mas sim o `dto`. Portanto, seguimos o mesmo padrão da aula anterior.

**Vinicius:** Vamos comentar as seções "ARRANGE" e "ACT" para que fiquem evidentes no código.

```java
class ValidacaoPetDisponivelTest {
    
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel();
        
        // ACT
        validacao.validar(dto);
    }
}
```

Agora que temos o Arrange e o Act, precisamos fazer o _**Assert**_. Para isso, abaixo da linha `validacao.validar(dto)`, vamos chamar nossa classe `Assertions` do Jupiter API, acrescentar um ponto e verificar seus métodos.

Neste caso, não queremos verificar se um valor é igual a outro, então o que precisamos verificar aqui?

**Rodrigo:** Temos uma diferença interessante neste método. Diferente do método da calculadora, o método `validar()` é `void`, ou seja, não tem retorno.

O método da calculadora retornava um objeto do tipo `ProbabilidadeAdocao` o qual guardávamos e utilizávamos `assertEquals()` para verificar o valor retornado. Porém, neste caso, o método `validar()` não retorna nada. Ele lança uma exceção se houver algo inválido e não lança nenhuma exceção se tudo estiver correto.

No nosso teste, estamos testando um cenário onde tudo está bem e o pet está disponível. Para este caso, queremos verificar se não foi lançada uma exceção. Nesta classe de Assertions do JUnit, deve haver um método para verificar se uma exceção não foi lançada.

**Vinicius:** Se digitarmos "assertTh" após `Assertions.`, veremos e selecionaremos na lista suspensa o método `assertDoesNotThrow()`. Ele precisa receber como argumento uma ação que pode lançar uma exceção.

Podemos recortar nosso act `validacao.validar(dto)` e colá-lo dentro do `AssertDoesNotThrow()`. Desta forma, podemos verificar se uma exceção foi lançada ao executar o ato.

Vamos identificar o novo trecho de código com o comentário `// ASSERT + ACT`.

```java
class ValidacaoPetDisponivelTest {
    
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel();
        
        //ASSERT + ACT
Assertions.assertDoesNotThrow(validacao.validar(dto));
    }
}
```

No entanto, temos um erro ao colar essa validação. O que será que falta?

**Rodrigo:** Este método para verificar se uma exceção não foi lançada deve receber o formato de expressão _lambda_ do Java 8. Portanto, temos que passar o método na forma de uma expressão _lambda_, adicionando um par de parênteses, uma seta (`->`) e só depois chamando o método `validação.validar()`.

Com esse Assert, queremos verificar se uma exceção não é lançada quando chamarmos esse método.

```java
class ValidacaoPetDisponivelTest {
    
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel();
        
        //ASSERT + ACT
Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

**Vinicius:** Agora que já escrevemos nosso primeiro cenário de teste para esta classe, vamos executá-lo. No canto esquerdo do código, onde temos a numeração das linhas, clicaremos em "Run", localizado ao lado da linha `void deveriaPermitirSolicitacaoDeAdocaoPet()`.

No entanto, temos um erro no terminal: um `NullPointerException`.

**Rodrigo:** Parece que o teste falhou, mas não foi isso que ocorrei. Não é o caso de esperar uma exceção e ela não ser lançada, mas sim, um erro que ocorreu durante a execução do programa.

Uma exceção foi lançada durante a execução do teste, porém, não foi a que queríamos (lançada na classe de validação). Ele retornou outra exceção não relacionada ao que estávamos testando aqui no programa.

Contudo, no próximo vídeo, Vini, vamos entender por que isso aconteceu e como podemos solucionar.

## Transcrição

**Rodrigo:** Ótimo, Vini. Nós criamos o teste para a segunda classe. Contudo, ao executá-lo, ocorreu uma falha, não por conta de um bug no código, mas sim porque ocorreu um `NullPointerException`.

## Utilizando o Mockito

Agora, vamos nos deparar com um novo desafio, algo que não havíamos precisado na classe `CalculadoraProbabilidadeAdocao`.

Vini, por favor, abra a classe `ValidacaoPetDisponivel`. Essa é a classe que estamos testando agora no projeto.

```java
@Component
public class ValidacaoPetDisponivel implements ValidacaoSolicitacaoAdocao {

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

No entanto, essa classe tem algo distinto da classe de probabilidade de adoção o atributo `petRepository`. Esta classe, então, depende de outras classes. Além disso, ela possui a anotação `@Autowired` do _Spring_ e a anotação `@Component`.

Ou seja, ela contém dependências do _Spring_ e injeção de dependências. Logo, contém toda essa infraestrutura do Spring.

Porém, no nosso teste, não desejamos executar um teste de integração e sim um teste de unidade. Ao rodar o teste, não queremos passar um repositório verdadeiro, acessar o banco de dados e iniciar o servidor, e sim testar a classe de validação de maneira isolada do restante do projeto.

Com isso, surge a questão: como nós vamos testar essa classe de maneira unitária, para um teste de unidade, sendo que ela contém dependências? Vamos precisar usar alguma biblioteca para nos auxiliar, certo?

**Vinicius:** Perfeito, exatamente. Neste caso, queremos simular algo, não é mesmo? Então, se fizermos uma analogia, queremos simular que fomos ao banco de dados e obtemos algum resultado.

Se fizermos uma comparação com cinema, em alguns filmes, possuímos os famosos dublês, certo? Eles estão lá para poder simular que são um ator ou atriz principal. Há cenas altamente perigosas, e não é a pessoa protagonista que as realiza, certo?

Nesse cenário, vamos utilizar a biblioteca _**Mockito**_, que faz exatamente isso: simular algo.

Algumas pessoas podem estar se perguntando: já que vamos usar outra biblioteca, precisamos baixá-la e instalá-la?

**Rodrigo:** Perfeito, mais uma biblioteca. Além do _JUnit_, vamos usar o _Mockito_, uma das bibliotecas para fazer _mocks_, caracterizados por esse conceito de dublê.

Contudo, não precisamos baixá-la porque ela já está no projeto. A dependência do _Spring Boot_ que estamos usando, além de incluir o JUnit, já inclui também o Mockito.

O Vini abriu o arquivo `pom.xml` para nos mostrar essa dependência que já inclui o JUnit junto com o Mockito e outras coisas.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

Logo, vamos aprender a usar essa ferramenta de _mocks_ para simular comportamentos nos testes automatizados.

## Simulando Comportamentos com o Mockito

**Vinicius:** Perfeito. Vamos fechar todas as guias das outras classes que não estamos utilizando no momento e manter aberta somente as guias `ValidacaoPetDisponivel.java` e `ValidacaoPetDisponivelTeste.java`.

Vamos acessar a classe de `ValidacaoPetDisponivel`. Devemos lembrar que queremos utilizar a `PetRepository` para fazer um _mock_ ou dublê dela.

Para isso, podemos copiar o atributo `private PetRepository petRepository` com o atalho "Ctrl+C".

```java
private PetRepository petRepository;
```

Vamos acessar o arquivo de teste e colá-lo entre as chaves da classe de teste `ValidacaoPetDisponivelTeste`, acima do método `deveriaPermitirSolicitacaoDeAdocaoPet()`.

Adicionando-a como um atributo, podemos adicionar uma anotação. Assim como adicionamos a anotação `@Test` acima do nosso método, podemos adicionar uma anotação denominada `@Mock`.

```java
class ValidacaoPetDisponivelTest {
    
        @Mock
        private PetRepository petRepository;
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel();
        
        //ASSERT + ACT
Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

Com isso, o IntelliJ nos pergunta se queremos importar essa anotação da `org.mockito`. Vamos fazer isso, pressionando "Enter" na opção "Mock org.mockito".

O `import` será realizado conforme abaixo.

```java
import org.mockito.Mock;
```

Com isso, estamos sinalizando para a aplicação que a classe `PetRepository` será um _mock_ (simulação).

No entanto, na parte inferior do nosso cenário de teste, estamos instanciando nossa `ValidacaoPetDisponivel` manualmente. Se fizermos isso manualmente, ele não realizará um _mock_. Precisamos transformar a `ValidacaoPetDisponivel` em um atributo.

Podemos adicioná-lo na linha acima da notação `Mock` por meio de um `private ValidacaoPetDisponivel`, que será chamado de `validacao`. Acima dessa linha, podemos adicionar a anotação `@InjectMocks`.

Podemos excluir a linha `ValidacaoPetDisponivel validacao = new ValidacaoPetDisponivel()` na parte inferior do código.

```java
class ValidacaoPetDisponivelTest {
    
        @InjectMocks
        ValidacaoPetDisponivel validacao;
        
        @Mock
        private PetRepository petRepository;
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        
        //ASSERT + ACT
Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

Com esta anotação, estamos sinalizando para a aplicação que, na classe `ValidacaoPetDisponivel`, temos algumas classes que serão _mocks_.

Após criar o `PetRepository` com um _mock_ indicado pela anotação `@Mock`, e a `ValidacaoPetDisponivel` com a anotação `@InjectMocks`, precisamos adicionar algo mais, Rodrigo?

**Vinicius:** Vamos realizar a última etapa para utilizar o Mockito.

Declaramos o atributo `PetRepository`, o objeto que queremos transformar em um dublê com a anotação `@Mock` e declaramos o validador como um atributo, adicionando o `@InjectMocks`. Com isso, o Mockito sabe que deve pegar esse _mock_ e injetá-lo automaticamente no validador.

Mas nada disso funcionará se não dissermos para o Mockito que ele deve rodar junto ao JUnit nesta classe. Para isso, acima da classe `ValidacaoPetDisponivelTest`, precisamos adicionar a anotação `@ExtendsWith()` do JUnit para dizer: "JUnit, você vai rodar essa classe de teste, mas queremos adicionar uma extensão".

O Vini passará como parâmetro entre parênteses uma classe do Mockito, o `MockitoExtension.class`.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {
    // Código omitido
}
```

Isso serve para dizer: "Mockito, intercepte essa classe". O Mockito lerá os atributos, verificará o que precisa ser _mock_ pelas anotações, verificará o que está com `@InjectMock`, preencherá a nossa classe de validação e injetará os _mocks_ automaticamente, mas só faz isso se tiver a anotação `@ExtendsWith` no topo da classe.

**Vinicius:** Com essas modificações, teoricamente, o código deve funcionar. Com o botão à esquerda da linha `void deveriaPermitirSolicitacaoDeAdocaoPet()`, vamos rodar novamente esse teste para ver se ele passará.

Novamente, ocorreu um erro. Podemos ver no terminal que na chamada do método `Pet.getAdotado()`, ocorreu um `NullPointerException` porque o `pet` está nulo. E agora?

> FailedError: Unexpected exception thrown: java.lang.NullPointerException: Cannot invoke "br.com.alura.adopet.api.model.Pet.getAdotado()" because "pet" is null

**Rodrigo:** Continuamos recebendo o erro, contudo, o `NullPointerException` que ocorreu agora não é o mesmo que foi explicado no vídeo anterior.

Ele ocorreu porque o código ainda está incompleto. Configuramos os _mocks_, mas há um detalhe a mais que precisamos fazer, Vini.

Entretanto, nós mostraremos isso na sequência.

## Transcrição

**Rodrigo:** Vamos continuar. Rodamos o teste, mas ele continua falhando, mesmo após as configurações do _Mockito_, pois esquecemos um detalhe importante.

Gostaria de retomar a analogia que Vini utilizou, que se mostrou muito esclarecedora: o _mock_ é como uma pessoa dublê, contratada para executar uma cena perigosa que o ator ou atriz não querem realizar, evitando o risco de se machucar, certo?

Contratamos um dublê e procedemos da seguinte forma: declaramos o atributo `petRepository` e o anotamos com `@Mock`. Ele é nosso dublê, é o nosso repositório fictício. Portanto, quando chamarmos nossa classe de validação, o repositório que está sendo injetado não será o verdadeiro que irá ao banco de dados, mas sim o repositório dublê.

No entanto, não indicamos o que ele deveria fazer. Ao traçarmos um paralelo com a situação do filme, é como se tivéssemos contratado o dublê, mas não informamos qual cena deveria ser realizada. Portanto, a pessoa ficará parada sem saber o que fazer.

Dessa forma, Vini, será necessário modificarmos o código do nosso cenário de teste. Devemos indicar ao Mockito o que nosso _mock_ deve fazer antes da chamada do método `validacao.validar()`.

## Configurando o Mock no Cenário de Teste

**Vinicius:** Voltando à nossa classe `ValidacaoPetDisponivel`, e relembrando a analogia do dublê, precisamos definir para o nosso dublê o que ele deve fazer ao chegar no código do `petRepository`.

Voltando à nossa classe de teste, surge a questão: assim como o JUnit, o Mockito também possui classes e métodos para que possamos realizar nossas validações e testes?

A resposta é _**sim**_. Há uma classe chamada `BDDMockito`. Se digitarmos esse nome abaixo do bloco de Arrange, o sistema abre uma lista suspensa e sugere a importação via `org.mockito`. Apertaremos "Enter" e assim a importaremos.

```java
import org.mockito.BDDMockito;
```

Se digitarmos um ponto, encontraremos nessa classe um método chamado `given()`. Com ele, podemos dizer: "dada uma determinada situação, você vai retornar algo".

Voltando para a classe `ValidacaoPetDisponivel`, vemos que ele chama o método `getReferenceById()` dentro do método `validar()`. Portanto, configuraremos o `given()` para agir a partir da chamada do `petRepository.getReferenceById()`, passando entre parênteses um `id`.

Dado esse cenário no qual simulamos que o sistema foi ao banco de dados e buscou essa informação, devemos retornar um `pet`. Para isso, adicionaremos um ponto à direita de `BDDMockito.given()` seguido de um `willReturn(pet)`.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    @InjectMocks
    ValidacaoPetDisponivel validacao;
        
    @Mock
    private PetRepository petRepository;
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        BDDMockito.given(petRepository.getReferenceById(id)).willReturn(pet);
        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

Aqui, porém, encontramos alguns erros nos parâmetros. O que será que aconteceu, Rodrigo?

**Rodrigo:** Fizemos um acordo com nosso _mock_ `petRepository` para que, quando o método `getReferenceById()` for chamado, ele deve devolver algo. Porém, esses métodos recebem parâmetros. Ou seja, precisamos passar um `id` e um `pet`.

Logo, precisaremos criar mais objetos na etapa do _Arrange_. Além do `dto`, precisaremos criar também um `pet` e um `id`, pois precisamos dessas informações no teste.

Visto que estamos utilizando o _Mockito_ e precisaremos de um objeto `pet`, vamos instanciar esses atributos utilizando-o em vez de fazer isso da maneira que já sabemos e que envolve instanciar uma série de outras coisas.

Vamos declarar os atributos `pet` do tipo `Pet` e `dto` do tipo `SolicitacaoAdocaoDto` abaixo do atributo `petRepository`. Para utilizar o _Mockito_, adicionaremos `@Mock` nesses atributos e fingiremos que criamos objetos.

Para este teste, não precisamos de um `pet` real. Basta fingir que acessamos o banco e estamos devolvendo um objeto `pet`.

Vamos anotá-los com `@Mock` para que o _Mockito_ também crie objetos fictícios para esses objetos. Dessa forma, o código de nosso teste diminui um pouco, pois podemos utilizar o _Mockito_ para simular esses objetos.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    @InjectMocks
    ValidacaoPetDisponivel validacao;
        
    @Mock
    private PetRepository petRepository;

    @Mock
    private Pet pet;

    @Mock
    private SolicitacaoAdocaoDto dto;
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(
            7l,
            2l,
            "Motivo qualquer"
        );
        
        BDDMockito.given(petRepository.getReferenceById(id)).willReturn(pet);
        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

**Vinicius:** Adicionamos mais dublês para esse filme de testes que estamos executando. Contratamos o dublê `pet` e o dublê `dto`. Podemos retirar essa etapa de instanciação manual do Arrange, porque contratamos um dublê para executar esse procedimento.

Já na linha da chamada do ID pelo `petRepository.getReferenceById()`, podemos colocar entre parênteses o `dto.idPet()` no lugar de `id`.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    @InjectMocks
    ValidacaoPetDisponivel validacao;
        
    @Mock
    private PetRepository petRepository;

    @Mock
    private Pet pet;

    @Mock
    private SolicitacaoAdocaoDto dto;
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
}
```

Com isso, ele chamará o nosso `pet`.

Relembrando: dado o cenário em que o `petRepository` tentará buscar o ID desse _pet_, ele retornará um _pet_, ou seja, fingirá que acessou o banco e encontrou esse _pet_.

Será que é só isso, Rodrigo? Precisamos combinar mais alguma coisa aqui olhando para a nossa validação de _pets_?

**Rodrigo:** Ao examinar o código, à primeira vista, parece que é só isso. Analisando o método `validar()`, a única coisa que ele faz é pegar o `petRepository`, chamar o `getReferenceById()` e passar o ID que está dentro do `dto`. Em seguida, temos um `if pet.getAdotado()`. Então, ele verifica se esse _pet_ que veio do banco de dados tem um atributo `adotado` que vale `true`.

Como transformamos o _pet_ em um _mock_, ele não é um verdadeiro _pet_, mas sim um objeto dublê. Por isso, precisamos fazer outro acordo. Quando o método `getAdotado()` for chamado, devemos devolver `false`, pois no cenário que estamos testando a exceção não é lançada.

**Vinicius:** Perfeito. Retornando ao arquivo da validação de teste, podemos chamar novamente `BDDMockito.given(pet.getAdotado()).willReturn()` abaixo do anterior, para que, quando o `pet.getAdotado()` for chamado, seja retornado um `false`.

Retornaremos `false` porque não queremos que nenhum erro seja lançado. Estamos fazendo um `assertDoesNotThrow()`, a chamada ao método `validar()`, e, então, deve retornar `false` para que nenhuma exceção seja lançada.

```java
//ARRANGE
BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
BDDMockito.given(pet.getAdotado()).willReturn(false);
```

**Rodrigo:** Agora vamos rodar o teste e ver se está funcionando corretamente.

**Vinicius:** Clicaremos no botão à esquerda, selecionaremos "Run", e veremos no terminal que o teste passou.

> Tests passed: 1 of 1 test - 1 sec 115ms

Rodrigo, fizemos um cenário. Precisamos fazer mais um, não é mesmo?

**Rodrigo** Conseguimos simular um cenário que não lança exceção, agora falta simular o cenário que lança a exceção.

**Vinicius:** Para isso, vamos copiar o método `deveriaPermitirSolicitacaoDeAdocaoPet()`, colá-lo abaixo de si, e modificar o nome da cópia para `naoDeveriaPermitirSolicitacaoDeAdocaoPet()`.

Na seção de _Assert_, vamos agora utilizar o método `.assertThrows()` no lugar do `assertDoesNotThrow()`, porque queremos garantir que uma exceção foi lançada.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    // Código omitido
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
    
    @Test
    void NaoDeveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertThrows(() -> validacao.validar(dto));
    }
}
```

Rodrigo, percebemos que está dando um erro no novo método, por que será que ele ocorreu?

**Rodrigo:** Agora estamos usando outro método, portanto, a expressão _lambda_ será um pouco diferente. Temos que fazer o ajuste para não ser da mesma forma que era no `assert.doesNotThrow()`.

**Vinicius:** Ou seja, precisamos dizer qual é a exceção (_Exception_) que foi lançada. Voltando ao arquivo `ValidacaoPetDisponivel.java`, podemos ver que ele vai lançar uma `ValidationException`.

```java
if (pet.getAdotado()) {
    throw new ValidacaoException("Pet já foi adotado!");
}
```

Voltando ao arquivo de teste, podemos informar para esse `assertThrows()` que esperamos receber essa exceção. Então, entre seus parênteses, adicionaremos um `ValidacaoException.class`. Vamos separá-lo da função _lambda_ com uma vírgula.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    // Código omitido
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
    
    @Test
    void NaoDeveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertThrows(ValidacaoException.class,() -> validacao.validar(dto));
    }
}
```

Com isso, o primeiro parâmetro, à esquerda, é o que esperamos receber e o segundo parâmetro, à direita, é de onde esperamos receber, ou seja, isso viria dessa chamada específica.

Parece que está tudo correto agora, podemos prosseguir.

**Rodrigo:** Contudo, há um detalhe importante. Precisamos alterar a linha `BDDMockito.given(pet.getAdotado()).willReturn(false)` que faz a combinação com nosso _mock_ do `pet`.

O `willReturn()` do método `NaoDeveriaPermitirSolicitacaoDeAdocaoPet()` tem que retornar `true`, porque neste cenário, queremos simular que acessamos o banco de dados e encontramos esse `pet` como se já estivesse adotado.

Então, quando o nosso código chamar aquele `if` para verificar se o `pet` já está adotado, nesse cenário nós devolveremos `true` e iremos verificar se o código lança uma exceção dizendo que esse `pet` já foi adotado, portanto, a pessoa não poderá adotá-lo.

```java
@ExtendWith(MockitoExtension.class)
class ValidacaoPetDisponivelTest {

    // Código omitido
        
    @Test
    void deveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertDoesNotThrow(() -> validacao.validar(dto));
    }
    
    @Test
    void NaoDeveriaPermitirSolicitacaoDeAdocaoPet() {
        
        // ARRANGE
        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        BDDMockito.given(pet.getAdotado()).willReturn(false);

        
        
        //ASSERT + ACT
        Assertions.assertThrows(ValidacaoException.class,() -> validacao.validar(dto));
    }
}
```

**Vinicius:** Perfeito. Alteramos para `true` e deixaremos uma observação: _**quando estiver copiando e colando código, redobre a sua atenção**_.

Vamos rodar novamente o teste `NaoDeveriaPermitirSolicitacaoDeAdocaoPet()`. E pronto, vemos no terminal que o teste passou.

> Tests passed: 1 of 1 test - 1 sec 56 ms

Mais um teste concluído. Conseguimos realizar os testes automatizados para a classe `ValidaçãoPetDisponivel`. E agora, Rodrigo?

**Rodrigo:** Ótimo. Aprendemos a utilizar o Mockito quando temos uma classe que depende de outras classes, mas que não queremos testar, nem ter que criar toda a estrutura dessas dependências.

No caso, essa classe depende de um repositório e este acessa o banco de dados. Não queremos acessar o banco de dados, mas sim fazer um teste de unidade. Por isso, aprendemos a utilizar o Mockito para fingir que acessamos o banco e fazer esse acordo com nosso dublê.

Entretanto, Vini, há outras classes no projeto, além das classes de validação. Por exemplo, as classes Service e as classes Controller, que também são importantes para testarmos. A seguir, veremos com calma qual abordagem utilizaremos para testar essas outras classes.

# Para saber mais: outras bibliotecas de Mock

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139563/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139563/question)

O uso de bibliotecas de mocks é uma prática essencial no desenvolvimento de testes automatizados, permitindo isolar componentes e simular comportamentos para garantir testes independentes. Embora o **Mockito** seja a principal biblioteca de mocks em Java, existem outras alternativas que oferecem recursos similares e complementares.

## EasyMock

O EasyMock é outra biblioteca popular para criação de mocks em testes automatizados. Ele oferece uma abordagem de expectativa e verificação, na qual os comportamentos esperados são definidos antes da execução do código de teste e depois são verificados durante a verificação dos mocks. O EasyMock é fácil de aprender e usar, mas pode ser menos expressivo que o Mockito em alguns cenários mais complexos.

Você pode conferir a documentação da biblioteca no [site oficial do EasyMock](https://easymock.org/).

## PowerMock

O PowerMock é uma extensão do Mockito e do EasyMock, projetada para lidar com casos complexos, como testar código legado ou classes finais, que geralmente não podem ser facilmente testados com o Mockito sozinho. O PowerMock permite a mockagem de métodos estáticos, construtores privados e métodos finais, ampliando as capacidades do Mockito e proporcionando mais flexibilidade em cenários difíceis de testar.

Você pode conferir a documentação dessa biblioteca no [repositório do PowerMock no GitHub](https://github.com/powermock/powermock).

## JMockit

O JMockit é uma biblioteca abrangente para testes de integração e mocks em Java. Ele permite a criação de mocks e spies (mocks parciais) com uma sintaxe simples e intuitiva. Além disso, o JMockit oferece recursos avançados, como gravação/reprodução de invocações de métodos, captura de argumentos passados para os mocks e muito mais. Essa flexibilidade faz do JMockit uma escolha poderosa para cenários de testes avançados.

Você pode conferir a documentação da biblioteca no [site do JMockit](https://jmockit.github.io/).

## Transcrição

**Vini:** Agora que já começamos a realizar testes automatizados em uma classe de validação e em uma classe que calcula a probabilidade, precisamos explorar outras classes.

Até porque são classes importantes para o nosso código e precisamos nos certificar de que estão cumprindo seu papel conforme foi projetado, não é mesmo, Rodrigo?

**Rodrigo:** Perfeito, Vini. Já testamos duas classes mas, analisando aqui o projeto, percebemos que temos vários pacotes, diversos tipos de classes e, para algumas delas, utilizaremos novos recursos do JUnit e do Mockito para realizar os testes.

Então, fecharei a classe de teste da classe de validação. E aqui, Vini, na estrutura de diretórios de pacotes da aplicação, há um pacote chamado `service`. Além das classes de validação, nós temos classes _service_, bastante comuns em aplicações que seguem esse padrão: possuem um controller, que chama uma service, que por sua vez chama um _repository_. E a classe `service` também tem regras de negócio.

Por exemplo, vou abrir a classe que nós refatoramos no curso anterior: `AdocaoService`. Essa classe tem a lógica de solicitar uma adoção, aprovar e cancelar uma adoção. Esse código já conhecemos.

E essa classe tem o método `solicitar()`, que é o método que faz todo o algoritmo para realizar uma solicitação de adoção. Essa classe realiza todo esse algoritmo, chamando classes de validação, cria objetos da JPA, salva no banco de dados e envia um e-mail. Todo esse processo está no `solicitar()`.

Portanto, Vini, essa é uma regra de negócio, uma etapa importante da aplicação. Acredito que é importante nós testarmos isso, certo?

**Vini:** Exato, e aí apenas lembrando que, para centralizar todos os cenários dessa classe. Sim, com certeza devemos realizar os testes automatizados.

**Rodrigo:** Então essa será a nova classe na qual realizaremos os testes automatizados. Seguirei aquela mesma ideia: clicando no nome da classe `AdocaoService`, usarei o atalho "Alt + Insert", escolherei a opção "Test". Ele abrirá um pop-up, o IntelliJ já identifica que é JUnit5, então só precisamos clicar em "OK".

Pronto, ele criou aqui a classe `AdoçãoServiceTest` no diretório `src/test/java`.

Agora vamos escrever o teste automatizado, seguindo o mesmo padrão que estávamos fazendo.

Se voltarmos para a classe `AdocaoService`, existem três métodos nessa classe - `solicitar()`, `aprovar()` e `reprovar()`. Focaremos os testes no método `solicitar()` primeiro. Queremos testar se esse método está funcionando conforme esperado.

No `solicitar()` precisamos garantir que:

- as validações desse método estão sendo disparadas;
- a adoção está sendo salva no banco de dados;
- um e-mail está sendo disparado ao final do processo.

São três verificações que precisamos realizar para nos certificar de que essa classe está funcionando conforme o esperado.

Na classe de teste, poderíamos criar um único método que realiza essas três verificações. No entanto, o padrão que costuma ser utilizado é separar cada assertiva em um método distinto. Assim, teremos um método para verificar se salvou no banco, um método para verificar se disparou o e-mail e outro método para verificar se chamou as validações. Desta forma, os testes ficam menores e mais segmentados.

Utilizarei essa estratégia e criarei um método chamado `deveriaSalvarAdocaoAoSolicitar()`. Nele, quero verificar se o método `solicitar` está salvando a adoção usando o Repository para salvar no banco de dados. Lembre-se, o método deve ter a anotação `@Test`, como já vimos antes. Agora iremos começar a escrever nosso código e continuaremos usando aquele mesmo padrão `Triple A`.

**Vini:** Perfeito, primeiro precisamos colocar o Arrange, depois o Act e, por fim, o Assert para verificarmos se os valores coincidem.

**Rodrigo:** A ideia aqui será parecida com as outras: precisaremos instanciar a nossa classe de serviço, fazer as preparações, criar os objetos, assim como fizemos na classe de validação.

Entretanto, se voltarmos para a classe `AdocaoService`, encontraremos a mesma situação da classe de validação. A classe `AdocaoService` não trabalha sozinha. Ela injeta e possui várias dependências, utiliza vários repositórios, usa o `EmailService`, injeta a lista de validações e, portanto, se instanciarmos a classe de serviço e chamarmos o método `solicitar()`, precisaremos passar esses parâmetros, esses repositórios.

Porém, não queremos fazer um teste de integração. Não queremos ir ao banco de dados de verdade, logo, precisamos simular todas essas dependências. Ou seja, precisaremos usar o **Mockito**.

**Vini:** Exatamente, além de utilizar o Mockito, nós precisamos estabelecer o que esperamos desse mock que vamos criar. Não queremos um mock que vai ficar simplesmente parado, então precisamos estabelecer algo, precisamos simular uma ação.

**Rodrigo:** Aqui existe uma diferença em relação à classe de validação que abordamos na aula anterior. Ela tinha uma única dependência, que era um repositório, mas a classe de serviço possui várias dependências. Portanto, todas elas terão que se transformar em mocks.

Retornando à classe de teste, nós já sabemos como é que fazemos esse uso do Mockito. Aqui, na classe de teste, precisamos ter os atributos, declarar essas dependências como atributos e anotá-los com `@Mock`. Eu já deixei preparado aqui para não perder muito tempo, copiei o código e vou colá-lo:

```kotlin
class AdocaoServiceTest {

    @InjectMocks
    private AdocaoService service;

    @Mock
    private AdocaoRepository repository;

    @Mock
    private PetRepository petRepository;

    @Mock
    private TutorRepository tutorRepository;

    @Mock
    private EmailService emailService;

    @Mock
    private List<ValidacaoSolicitacaoAdocao> validacoes;

    @Mock
    private Pet pet;

    @Mock
    private Tutor tutor;

    @Mock
    private Abrigo abrigo;

    private SolicitacaoAdocaoDto dto;
```

Dessa forma, todas as dependências da classe estão aqui. Analisando, são todas as dependências que aquela classe possui: repositórios, `EmailService`, validadores e os objetos que precisamos criar para simular uma chamada de solicitação de nossa classe de serviço.

Então usando `@Mock` e a classe principal, AdocaoService, que é a classe que queremos testar, está com aquele `@InjectMock` para o Mockito injetar todos esses mocks automaticamente lá.

Está faltando uma anotação em cima da classe, que é `@ExtendWith(MockitoExtension.class)`, senão o Mockito não intercepta essa classe e não faz a injeção automática.

```kotlin
@ExtendWith(MockitoExtension.class)
class AdocaoServiceTest {
// código omitido
```

Agora, sim, no `Act`, eu já consigo pegar a _service_ e chamar o método `solicitar()` passando um DTO como parâmetro.

```scss
        //ACT
        service.solicitar(dto);
```

Este método `solicitar()` também é _void_, assim como na classe de validação, ele não tem retorno. Ele simplesmente executa um fluxo de regras de negócio, cria esse objeto, chama o validador, faz isso, faz aquilo, mas ele não envia nada.

Então, no nosso teste, como vou verificar? Precisamos verificar algo. Nesse teste quero verificar apenas se ele está salvando no banco. Salvar no banco significa chamar o `AdocaoRepository`, o meu mock. Portanto, preciso verificar se o `AdocaoRepository` foi chamado.

Então, depois que chamamos o _Act_, precisamos fazer o _Assert_. Mas quero fazer uma assertiva não em um objeto do Java, mas no mock do Mockito.

Vamos usar aqui alguns métodos do Mockito. Usaremos o método `then()`. Podemos colocar uma chamada estática ou colocar diretamente assim, usar o atalho "Alt + Enter", escolher a opção "Import static method" e o IntelliJ faz a sugestão.

E aqui, preciso verificar o quê? Se o `petRepository` teve um método chamado. Qual método?

Ao analisarmos o código que está sendo testado, para salvar no banco, o método `save()` precisa ser chamado. Portanto, quero verificar se o `petRepository` teve o método `save()` chamado.

```scss
//ASSERT
then(petRepository).shold().save();
```

Porém, está indicando um erro de compilação no método `save()`. Por que está dando esse erro de compilação?

**Vini:** Está dando erro porque precisamos informar que algo será salvo. Como podemos fazer isso?

**Rodrigo:** No `AdocaoService`, o método `save()` recebe o parâmetro `adocao` em `repository.save(adocao)`. Porém, esse objeto `adocao` está sendo instanciado na classe de teste e não é um mock. Portanto, na hora de chamar o `save()`, é necessário passar algo. Deveria passar um objeto `adocao`, mas esse `adocao` não será um mock, já que ele é criado internamente no método.

Aqui chamarei outro método estático do mockito chamado `any` e, então, colocarei `any()` e usarei "Alt + Enter" para fazer o _import_. Farei a importação do pacote do mockito.

```scss
//ASSERT
then(petRepository).shold().save(any());
```

Assim, estou dizendo: "Mockito, verifica se o `petRepository` teve um método `save()` chamado com qualquer parâmetro, não importa qual seja. É aqui que o método `any()`, para dizer que não importa o parâmetro, pode ser qualquer coisa.

Agora a estrutura de teste está pronta. Mas um detalhe importante é que, caso eu execute o teste, é provável que ele passe. Contudo, aqui estou checando se o `repository` foi chamado, se o `save` foi chamado. Mas o problema neste `any` é que estou dizendo: verifica se o `save()` foi chamado para qualquer coisa. Posso, por exemplo, criar uma adoção com tudo nulo. Uma adoção que não tem pet, não tem tutor e não tem motivo.

```java
Adocao adocao = new Adocao ( null, null, null);
repository.save(adocao);
```

Portanto, esse código está errado. Estou salvando uma adoção que tem todos os parâmetros errados, mas aquele teste não detectará isso, porque estou dizendo: verifique se salvou qualquer coisa.

Mas, não é qualquer coisa que deve ser aceita. Nós precisamos verificar se ele está salvando de acordo com os parâmetros esperados, correto?

**Vini:** Exatamente, Rodrigo. Afinal, se salvamos com parâmetros errados, esse método estará errado. Precisamos garantir também que esses valores estão sendo passados corretamente.

**Rodrigo:** Mas esse detalhe, como verificar um objeto que está sendo criado no método, aprenderemos no próximo vídeo!

## Transcrição

**Vini:** Já iniciamos os testes automatizados nas classes de serviço.

Na última aula, terminamos com uma dúvida relacionada à geração de uma expectativa com o Mockito. Estamos invocando um repositório e esperamos que ele acione o método de salvar. Porém, ele está salvando qualquer coisa e não queremos isso.

Queremos que ele salve, mas com os dados válidos. Então, precisamos, de alguma forma, capturar esse objeto que está sendo passado para esse método salvar.

Rodrigo, você chamou o `petRepository`, mas na verdade deveria ser o `adocaoRepository`, não é mesmo?

**Rodrigo:** Bem observado. No _assert_ não é o `PetRepository`, devemos colocar o `AdocaoRepository`. Na verdade o `AdocaoRepository` está no `@Mock` como `repository` apenas.

```scss
//ASSERT
then(repository).shold().save(any());
```

Aqui, o que estamos fazendo nesse cenário de teste é verificar se o _repository_ de adoção foi chamado, se o método `save()` foi chamado. Porque esse é um dos objetivos da nossa service. Quando chamarmos o solicitar na classe service, a adoção tem que ser salva no banco de dados.

Ainda precisamos substituir esse "any", pelo objeto `adocao`, e então fazer outros _asserts_ para ver se a adoção que está sendo salva no banco é a adoção correta, conforme os parâmetros que passamos desse objeto DTO, `service.solicitar(dto)`.

Se olharmos novamente na classe service, na linha em que ele chama o save, na linha de cima ele cria um objeto `Adocao`.

```java
Adocao adocao = new Adocao ( tutor, pet, dto.motivo());
repository.save(adocao);
```

Este é o código correto. Ele tem que criar um objeto adoção com o tutor, que está vindo, o ID dele no DTO, o pet que está vindo, o ID do DTO, e o motivo que está vindo do DTO. E essa adoção, com essas informações, é que tem que ser salva no banco de dados.

Mas esse objeto adoção, que está sendo passado como parâmetro para o método `save()` do repositório, ele não é um atributo da classe, ele está sendo instanciado localmente no método.

Vini, deve ter alguma forma no Mockito de conseguirmos capturar um objeto que está sendo passado como parâmetro para um mock.

**Vini:** Sim, é possível. Será que temos uma anotação para isso, Rodrigo?

**Rodrigo:** Claro. Como tudo no Mockito, existem essas anotações como `@Mock` e `@InjectMocks`, entre outras. E aqui nesse cenário, onde precisamos capturar um objeto que é passado como parâmetro para um mock, podemos declarar uma classe e fazer uma anotação do Mockito para nos ajudar.

Então, na nossa classe de teste, vou declarar mais um atributo, `private`, e o Mockito tem uma classe que se chama `ArgumentCaptor`, que é para capturar um argumento que é passado para o mock.

E esse Argument Capture tem o _generics_ do Java, tenho que dizer qual é o tipo do objeto que ele vai capturar, no nosso caso é um objeto do tipo `Adocao`. Vou nomeá-lo aqui de `AdocaoCapture`.

E em cima desse atributo, temos que colocar uma anotação para o Mockito saber que é ele que vai gerenciar esse objeto. Tem uma anotação que é a `@Capture`.

```swift
    @Captor
    private ArgumentCaptor<Adocao> adocaoCaptor;
```

Esse não é um `@Mock`. Então, esse aqui não é um mock, não é um objeto simulado. Aqui eu só estou dizendo que o Mockito terá uma classe que sabe capturar um objeto `Adocao`. `@Capture`. Ele é um captador de `Adocao`, digamos assim.

Usaremos esse objeto no lugar do "any". Então, na hora de eu verificar se o repositório foi chamado, eu não passo qualquer objeto. Aqui eu vou passar o `adocaoCaptor.capture()`. como se disséssemos para o Mockito: "o método `save()`vai ser chamado com um objeto que está lá na service. Captura para mim esse objeto que foi chamado".

```scss
//ASSERT
then(petRepository).shold().save(adocaoCaptor.capture());
```

E na linha de baixo, conseguimos recuperar este objeto `Adocao`, que foi passado como parâmetro para o mock.

```java
//ASSERT
then(petRepository).shold().save(adocaoCaptor.capture());
Adocao adocaoSalva = adocaoCaptor.getValue();
```

Desse modo, conseguimos obter o objeto que foi passado como parâmetro para o mock do repository.

Agora sim, temos o objeto. Por mais que esse objeto tenha sido criado internamente no método em que estamos testando, conseguimos capturar esse objeto que foi instanciando localmente usando esse recurso de `capture()`.

Contudo, é preciso realizar mais verificações. Não podemos apenas verificar se o método `save()` foi chamado, mas também se o objeto foi salvo corretamente.

Assim, é preciso checar se essa `adocaoSalva` tem o `pet`, que é o nosso mock, o `tutor`, que também é um mock, tudo conforme o nosso `DTO`. Portanto, será necessário fazer algumas assertivas. Vamos fazer aqueles `assertEquals` conforme fizemos anteriormente.

```java
        //ASSERT
        then(repository).should().save(adocaoCaptor.capture());
        Adocao adocaoSalva = adocaoCaptor.getValue();
        Assertions.assertEquals(pet, adocaoSalva.getPet());
        Assertions.assertEquals(tutor, adocaoSalva.getTutor());
        Assertions.assertEquals(dto.motivo(), adocaoSalva.getMotivo());
```

Nesse trecho, estamos garantindo que não só o repositório salvou, mas também que foram salvas as informações corretas.

A princípio, o teste está finalizado. Vamos executar e observar o que acontecerá.

Ele executará o teste com o JUnit e o Mockito, e o resultado será mostrado abaixo. Obtivemos um erro `NullPointerException`. Isso ocorreu porque o `pet` está nulo.

Portanto, está faltando coisas no teste.

**Vini:** Exato, Rodrigo.

Foi contratado um dublê, mas agora precisamos combinar com ele. Quando ocorrer determinada chamada, queremos que você execute essa ação, retorne isso. Como vimos nos vídeos anteriores.

**Rodrigo:** Perfeito. O Arrange ficou vazio em nosso teste. Não combinamos o que esses mocks, o `pet`, o `tutor`, os outros repositórios farão. Portanto, eles estão todos retornando nulo por padrão e nosso teste falha.

Faltou a parte do _Arrange_. Precisamos configurar esses mocks antes de executar aqui, antes de chamar o método `solicitar()` e fazer as assertivas.

Iremos usar os métodos `given` do Mockito para fazer uma configuração específica em um determinado mock. Como fizemos na aula anterior.

Na nossa classe `Service`, as duas primeiras linhas estão carregando o `pet` e o `tutor` do banco de dados de acordo com o `ID` do `DTO`. E `petRepository` e `tutorRepository`, em nosso teste, são mocks.

Precisamos especificar o que esses mocks devem fazer, qual deve ser o retorno quando algum método for chamado. É isso que precisamos definir no teste.

```cpp
        //ARRANGE
        given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
        this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
```

Acho que agora está tudo configurado.

**Vini:** Só precisamos prestar atenção a um detalhe, quando fomos executar o teste, ocorreu um `NullPointerException`, e houve uma dica avisando que ocorreu um `NullPointerException` quando foi chamar o `Pet.getAbrigo()`.

**Rodrigo:** Internamente ele vai pegar o `pet`, que é um mock, e chamar o `getAbrigo()`, e não configuramos o que esse método retorna. Então vamos tomar um `NullPointerException` aqui se não configurarmos isso. Então, tem mais um `given` aqui que precisamos fazer.

```cpp
        //ARRANGE
        given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
        given(pet.getAbrigo()).willReturn(abrigo);
        this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
```

Então agora está tudo configurado, acho que podemos rodar o teste. Vamos lá.

Ao executarmos o código, o teste falhou.

No terminal, está indicando uma `NullPointerException`, não conseguiu invocar `SolicitacaoAdocaoDto.idPet()` porque o dto está nulo.

**Vini:** Ao analisarmos o uso do `given` na combinação de operações, percebemos que a ordem importa muito. Nós inserimos o `this.dto` abaixo do `given`,o correto é posicioná-lo antes da chamada do given para que o código funcione corretamente.

```cpp
        //ARRANGE
        this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
        given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
        given(pet.getAbrigo()).willReturn(abrigo);
```

**Rodrigo:** Foi justamente essa inversão de ordem de declaração que causou o erro. Primeiro, instanciamos o objeto DTO para que, em seguida, possamos utilizá-lo nos given. Ao chamar o given sem ter instanciado o objeto DTO, obtivemos um erro.

Ao corrigirmos a ordem das configurações, o teste foi executado novamente e, agora, o resultado foi positivo. Excelente trabalho!

Com isso, conseguimos verificar se a nossa implementação de serviço, ao chamar o método `solicitar()`, está corretamente persistindo a solicitação de adoção no banco de dados.

No entanto, é importante salientar que o nosso repositório é apenas um mock, ou seja, não estamos acessando o banco de dados de fato. Estamos apenas simulando e verificando se as informações da solicitação de adoção que supostamente foram salvas estão corretas.

Há ainda outros aspectos do método `solicitar()` que precisamos garantir que estejam funcionando.

O método realiza algumas validações e envia um e-mail, portanto, precisamos testar todas essas funcionalidades também. Mais detalhes sobre esses testes serão apresentados no próximo vídeo!
## Transcrição

**Vini:** Vamos dar continuidade aos testes automatizados.

Verificamos que o método `solicitar()`, além de poder realizar essa operação no banco de dados, também faz uma chamada para os validadores, o que é crucial, pois precisamos executar essas validações. Se não estiver realmente chamando, isso seria um problema, dados inválidos poderiam ser cadastrados e muito mais. Mas isso vamos descobrir aqui. Certo, Rodrigo?

**Rodrigo:** Exatamente. Nosso método `solicitar()` na classe de serviço realiza diversas operações e, voltando à nossa classe de teste, estamos usando essa abordagem de cada método verificar apenas uma única coisa. No vídeo anterior, aprendemos como verificar se o _repository_ está sendo chamado e agora precisamos garantir que os validadores estão sendo chamados.

Vale lembrar que já conduzimos os testes dos validadores, então não quero verificar se a validação está sendo executada.

Só queremos verificar se todos os validadores da lista estão sendo executados e o método `validar()` está sendo chamado para cada um, mas não quero testar se o validador em si está funcionando, pois já temos testes para isso.

Vamos lá, aqui na classe de teste, a ideia é criar um novo método parecido com o anterior, o que vai mudar são as assertivas, porque não quero mais verificar se o _repository_ está sendo chamado, quero checar se a lista de validadores está sendo percorrida.

Então, mesma ideia, fez o primeiro teste, os próximos podemos copiar o que já foi feito e fazer as alterações necessárias. Copia e cola, e adapta.

O código em si será bastante semelhante ao cenário anterior. Preciso instanciar um DTO, preciso combinar os mocks, os _repositories_, sem acessar o banco de dados real, preciso fazer todas as configurações, vamos chamar o `service.solicitar(dto)`.

O que vai mudar aqui são as assertivas, pois agora não quero verificar se o _repository_ está sendo chamado, isso o método anterior já fez, então vou apagar todo esse código. O que tenho que fazer aqui é verificar, voltando à classe de serviço, se a lista de validadores que está sendo injetada na nossa service, se o for está sendo percorrido e o método validar está sendo chamado para cada um dos validadores, isso que eu quero garantir.

O problema é, como vamos fazer para verificar se uma lista que declaramos como sendo um mock está sendo chamada. Deve haver uma maneira no Mockito para fazer esse tipo de verificação, configurar uma lista, verificar se ela está sendo chamada. O Mockito pode nos ajudar com isso?

**Vini:** Sim, Rodrigo. Temos um detalhe importante: usamos a anotação `@Mock`, mas neste caso queremos mais do que um único dublê, precisamos de um dublê que mantém os comportamentos originais do ator principal. Então, acredito que deve haver uma anotação quase igual a `@Mock`, certo?

Rodrigo: Sim, a anotação `@Mock` é o que estamos usando até agora. Mas existem outros tipos de mocks, existem o **Mock**, o **Spy** e o **Stub**.

Quase sempre utilizamos o Mock, mas existem situações onde o Mock não vai funcionar - e este é exatamente o nosso caso. Vamos substituir essa anotação `@Mock` por `@Spy`.

A diferença está em que, com o Spy, ainda estou simulando um objeto, porém, este será um objeto real que será de fato instanciado, e os métodos funcionarão normalmente. Ainda assim, conseguimos controlar esse objeto.

Nós conseguimos dizer: "Olha, você vai manter os métodos normalmente, mas quando determinado método for chamado, quero alterar o seu comportamento. Se o comportamento original era para fazer X, agora quero que faça Y."

Já o Mock é um objeto que não faz nada por si só; ele apenas registra que foi chamado. Com o Spy é possível controlar o objeto.

Mas se deixarmos apenas `@Spy`, o Mockito criará uma implementação de lista, já que list em Java é uma interface. Mas eu não preciso de uma implementação do Mockito, eu quero uma implementação do próprio Java. Portanto, posso instanciar um objeto aqui como `new ArrayList<>()`.

```swift
    @Spy
    private List<ValidacaoSolicitacaoAdocao> validacoes = new ArrayList<>();
```

Estou instanciando o objeto com uma classe específica, mas ele está anotado com `@Spy`, então o Mockito ainda consegue controlar esse objeto. Consigo manipular esse objeto para alterar os comportamentos conforme o esperado. Então, agora sim, essa lista não é um Mock, é um Spy.

Existe algo interessante a ser verificado agora. Queremos checar essa lista `List<ValidacaoSolicitacaoAdocao>`, mas, como acabo de instanciar com `new ArrayList`, essa lista está vazia, não possui nenhum validador dentro dela. Então, precisamos criar alguns validadores para simular essa lista.

**Vini:** Exatamente. Nós podemos criar dois objetos validadores, dois atributos, no caso, como se fosse um Mock, e então adicioná-los a essa lista.

**Rodrigo:** Boa. Estamos fazendo Spy da lista, mas preciso dos objetos para adicionar dentro dessa lista e eu não preciso dos objetos reais. Então, esses objetos podem ser Mocks. Vamos declará-los assim:

```java
     @Mock
    private ValidacaoSolicitacaoAdocao validador1;

    @Mock
    private ValidacaoSolicitacaoAdocao validador2;
```

Se a lista tiver dois validadores, quero testar se estão chamando os dois. Poderia ser 3, 5, 10, não importa. Mas estes dois são Mocks, são objetos que o Mockito vai criar, ao contrário da lista que instanciamos.

Vou precisar configurar isso no Arrange.

**Vini:** Será que o nosso atributo anotado com `@Spy` possui algum método para adicionar?

**Rodrigo:** Como é uma lista do próprio Java, vamos escrever `validacoes.add()`. É uma lista, então tem o método `add`. Aqui é o Java puro mesmo. Vamos passar `validacoes.add(validador1)` e `validacoes.add(validador2)`.

Então, isto faz parte das configurações do Arrange. Pegamos essa lista, adicionamos dois validadores.

```csharp
        //ARRANGE
        this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
        given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
        given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
        given(pet.getAbrigo()).willReturn(abrigo);
        validacoes.add(validador1);
        validacoes.add(validador2);
```

Agora no Assert, o que precisamos garantir? Precisamos garantir que, quando chamar o método `solicitar()`, estes dois validadores estão sendo chamados.

Porque na minha classe de serviço, existe uma linha onde ele percorre a lista de validadores e, para cada um, chama o `validar()` passando o DTO como parâmetro. É isso que nós precisamos checar no teste.

Então, a assertiva vai ser se o `validador1` e o `validador2` tiveram o método `validar()` chamado. Como eles são Mocks, vou fazer essa verificação usando o Mockito. Vou usar o `Mockito.verify(validador1).validar`, quero ver se `validador1` teve o método `validar` chamado.

```scss
//ASSERT
BDDMockito.then(validador1).should().validar(dto);
BDDMockito.then(validador2).should().validar(dto);
```

Portanto, estamos pedindo para o Mockito, verificando se os dois validadores tiveram o método `validar()` passando o DTO como parâmetro. É isso que desejamos verificar, não importando o número de elementos na lista. Se adicionamos 2, esses dois devem ter o método `validar()` chamado.

É isso que nós precisamos verificar aqui. Certo, Vini?

**Vini:** Sim, planejamos e colocamos em código. Acredito que agora é só executar e verificar se vai funcionar.

**Rodrigo:** Perfeito, vamos executar o teste.

Passou, então ele chamou os dois validadores. Conseguimos garantir que os validadores estão sendo chamados.

Lembra daquele exercício importante. Será que se alguém alterar o código e causar um erro, o nosso teste detectará? Nós podemos simular isso.

**Vini:** Exato, você pode realizar a alteração, comentar a linha de `validar(dto)` na classe de serviço e executar novamente o teste para verificar se realmente esses método foi chamado.

Vou comentar a linha que chama os validadores na classe _service_. Esse código está incorreto. O _service_ está chamando o _repository_ para salvar no banco, mas ele não está mais chamando os validadores.

Então o cenário que verifica o _repository_ deveria passar, mas o cenário que verifica os validadores deveria falhar. Vamos executar o teste novamente.

Agora, executarei o teste pela classe. Vou clicar no botão com ícone verde de play "Executar" na classe `AdocaoServiceTest`, escolhendo a opção "Run AdocaoServiceTest" para que todos os testes sejam executados.

E veja só, ele detectou o bug.

**Vini:** Boa! Nós escrevemos um bom teste, Rodrigo, porque ele detectou esse erro.

**Rodrigo:** O teste do _repository_ funcionou. O segundo teste falhou e até mostra uma mensagem no terminal.

> Wanted but not invoked:
> 
> validador1.validar (
> 
> SolicitacaoAdocaoDto[idPet=10, idTutor=28, motivo-motivo qualquer]
> 
> );

Ele diz: "você esperava que algo fosse chamado, que no caso é o método `validar` do validador 1, mas ele não foi chamado". Então, existe um erro no seu código.

Essa é a ideia, então, vamos remover aquele comentário na linha do `validar(dto)`. Vamos executar novamente o teste da classe, para verificar se todos os cenários passaram. E passou.

Perceba que conseguimos testar uma classe _service_, mesmo que ela tenha várias dependências.

Se for uma lista, conseguimos usar um `@Spy`. Conseguimos usar o ArgumentCapture se quisermos pegar um objeto que está sendo passado para um mock, para verificar se ele está sendo criado corretamente, etc.

O Mockito é uma ferramenta muito útil para nos ajudar com esse tipo de teste.

**Vini:** Exatamente. E assim como nós realizamos também esse teste da classe _service_, agora precisamos focar em outras classes. Mas, isso veremos em seguida!

#   
Para saber mais: diferenças entre Mock e Spy

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139568/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139568/question)

Ao desenvolver testes automatizados para aplicações Java, é comum usar frameworks e bibliotecas que facilitam a criação de testes mais eficientes e confiáveis. O Mockito é uma dessas bibliotecas amplamente utilizadas para testes em Java. Ele fornece recursos poderosos para criar objetos simulados (_mocks_) e objetos espiões (_spies_) que ajudam a isolar o código sob teste e verificar seu comportamento.

Embora os conceitos de mocks e spies sejam semelhantes no Mockito, eles diferem em alguns aspectos importantes.

## Mock

Um mock é um objeto **simulado** que substitui um objeto real durante a execução dos testes. Ele é criado usando o Mockito e permite definir comportamentos esperados e verificar interações com o objeto simulado. Os mocks são úteis quando você deseja isolar o código sob teste de suas dependências, fornecendo respostas predefinidas para os métodos chamados durante os testes.

Ao usar um mock, você especifica quais métodos do objeto simulado devem ser chamados e qual será a resposta. Por exemplo, você pode configurar um mock para retornar um valor específico quando um determinado método for chamado. Isso permite que você simule cenários diferentes e verifique como o código reage a eles. Além disso, os mocks fornecem métodos para verificar se determinados métodos foram chamados e quantas vezes foram chamados durante a execução do teste.

## Spy

Um spy, por outro lado, é um objeto **real** que é usado durante os testes, mas também permite a observação de seu comportamento. Ao contrário dos mocks, os spies mantêm o comportamento original do objeto sendo espionado, a menos que seja especificamente substituído.

Ao criar um spy usando o Mockito, você está usando uma instância real do objeto em questão, mas também pode definir comportamentos específicos para seus métodos. Isso significa que o código original do objeto será executado, a menos que você especifique uma substituição para um determinado método.

Os spies são úteis quando você deseja testar partes específicas de um objeto real sem perder o comportamento original do objeto. Você pode substituir apenas os métodos relevantes para seus testes, enquanto o restante do objeto continua funcionando normalmente. Os spies também permitem verificar interações reais com o objeto sob teste, como quantas vezes um método foi chamado.

Ao utilizar o Mockito para testes automatizados em Java, você pode escolher entre mocks e spies, dependendo das necessidades específicas do seu teste. Ambas as abordagens são úteis e têm seus usos adequados. A escolha entre mock e spy depende do cenário de teste e dos requisitos específicos.

#   
Para saber mais: testes de mutação

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139570/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139570/question)

Ao longo do curso estamos fazendo alterações propositais nos códigos testados, forçando bugs para avaliar se os testes são capazes de detectá-los. Tais modificações que estamos fazendo são conhecidas como **mutações**.

Quando se trata de garantir a integridade do código em testes automatizados, muitas vezes surge a necessidade de identificar tais mutações, ou seja, alterações indesejadas no código que podem impactar seu comportamento. No entanto, identificar essas mutações manualmente é um processo complexo e propenso a erros. É aí que entra o teste de mutação como solução.

O teste de mutação envolve a introdução de pequenas alterações no código-fonte original, simulando erros comuns que as pessoas podem cometer. Em seguida, os testes automatizados são executados contra essas versões mutantes do código, procurando falhas nos casos de teste.

Se os testes não detectarem bugs com as mutações introduzidas, isso indica uma falha nos casos de teste, alertando sobre lacunas em sua cobertura de testes e possíveis vulnerabilidades no código.

Em Java existe uma biblioteca chamada [Pitest](https://pitest.org/) que consegue automatizar esse processo de realizar mutações nos códigos para avaliar se os testes automatizados estão sendo efetivos.

Para aprofundar seus conhecimentos no assunto, recomendamos o Alura+ [Testes de Mutação - Testando seus testes](https://cursos.alura.com.br/extra/alura-mais/testes-de-mutacao-testando-seus-testes-c186), que traz a descrição de um cenário real de testes de mutação.

# Faça como eu fiz: testes com mais recursos do Mockito

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139575/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139575/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula para realizar os testes de uma classe service. Escreva uma classe de teste automatizado para a classe `AdocaoService`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139575/opinion)

Você vai precisar criar a classe `AdocaoServiceTest`, dentro de `src/test/java`:

```kotlin
package br.com.alura.adopet.api.service;

@ExtendWith(MockitoExtension.class)
class AdocaoServiceTest {

}
```

Nessa classe de testes, você vai precisar adicionar os atributos e anotá-los com as anotações do Mockito:

```scss
@InjectMocks
    private AdocaoService service;

    @Mock
    private AdocaoRepository repository;

    @Mock
    private PetRepository petRepository;

    @Mock
    private TutorRepository tutorRepository;

    @Mock
    private EmailService emailService;

    @Spy
    private List<ValidacaoSolicitacaoAdocao> validacoes = new ArrayList<>();

    @Mock
    private ValidacaoSolicitacaoAdocao validador1;

    @Mock
    private ValidacaoSolicitacaoAdocao validador2;

    @Mock
    private Pet pet;

    @Mock
    private Tutor tutor;

    @Mock
    private Abrigo abrigo;

    private SolicitacaoAdocaoDto dto;

    @Captor
    private ArgumentCaptor<Adocao> adocaoCaptor;
```

Agora, será necessário escrever um método para validar se a adoção está sendo salva no banco de dados:

```java
@Test
void deveriaSalvarAdocaoAoSolicitar() {
    //ARRANGE
    this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
    given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
    given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
    given(pet.getAbrigo()).willReturn(abrigo);

    //ACT
    service.solicitar(dto);

    //ASSERT
    then(repository).should().save(adocaoCaptor.capture());
    Adocao adocaoSalva = adocaoCaptor.getValue();
    Assertions.assertEquals(pet, adocaoSalva.getPet());
    Assertions.assertEquals(tutor, adocaoSalva.getTutor());
    Assertions.assertEquals(dto.motivo(), adocaoSalva.getMotivo());
}
```

Por fim, escreva mais um método para garantir que os validadores estão sendo chamados:

```csharp
@Test
void deveriaChamarValidadoresDeAdocaoAoSolicitar() {
    //ARRANGE
    this.dto = new SolicitacaoAdocaoDto(10l, 20l, "motivo qualquer");
    given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
    given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
    given(pet.getAbrigo()).willReturn(abrigo);
    validacoes.add(validador1);
    validacoes.add(validador2);

    //ACT
    service.solicitar(dto);

    //ASSERT
    BDDMockito.then(validador1).should().validar(dto);
    BDDMockito.then(validador2).should().validar(dto);
}
```

Pronto! Rode os testes e verifique se eles estão funcionando conforme o esperado, garantindo com isso que o método `solicitar` da classe `AdocaoService` foi implementado corretamente.

## Transcrição

**Vinícius**: Vamos dar continuidade com os testes de classes do projeto da _API Adopet_. Rodrigo, será que podemos examinar também as classes de _controller_?

## Testando classe _controller_

**Rodrigo**: Boa ideia! Já aprendemos a testar _service_ e validadores, mas os _controllers_ são outro tipo de classe importante no projeto que é uma API REST.

Por exemplo, vamos abrir o `AdocaoController.java`. Essa é uma classe muito importante no projeto, ela é o ponto de entrada da API.

> Confira o [código completo da classe AdocaoController no GitHub](https://github.com/alura-cursos/3349-boas-praticas-java-testes/blob/aula_5/src/main/java/br/com/alura/adopet/api/controller/AdocaoController.java).

Todas as requisições terminam nas classes _controller_ e a classe _controller_ chama a classe _service_, que por sua vez chama a _repository_ e inicia o fluxo da requisição.

Considerando isso, poderíamos pensar em realizar alguns **testes de unidade** nesta classe também. Gostaríamos de testar a classe _controller_ de forma isolada do resto do sistema.

Esta classe tem apenas uma dependência, a `AdocaoService` - diferentemente da _service_ que tinha várias dependências.

Ela está injetando uma _service_, mas não queremos chamar a _service_ realmente porque já fizemos os testes da _service_. Talvez seja preciso fazer um _mock_.

> `AdocaoController.java`:

```java
@RestController
@RequestMapping("/adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoService adocaoService;

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

// código omitido…
}
```

Também queremos testar se, ao disparar uma requisição e os dados estiverem inválidos, ela retorna o código 400 de `badRequest()`? Se disparar uma requisição e tudo estiver certo, será que a classe nos devolve o código 200?

Queremos fazer o teste pensando na API. Ou seja, pensando em códigos HTTP, requisição GET, POST, parâmetros válidos e inválidos, apenas nesta parte de API.

Ótimo ponto, Vini. Vamos aprender a realizar um teste de uma classe _controller_.

Já estamos com a classe `AdocaoController` aberta e utilizaremos o mesmo procedimento que realizamos anteriormente. Damos "Alt + Insert", escolhemos a opção "Test", clicamos em "OK" no _pop-up_.

Pronto, a classe _controller_ foi criada. Agora vamos criar o primeiro método de teste. Vamos colocar a anotação `@Test`, do pacote JUnit, seguido de um método `void`.

Como queremos testar o método `solicitar()`, que possui dois cenários possíveis:

1. pode retornar o código 200, se a requisição for processada com sucesso;
2. pode retornar o código 400, em caso de erro de validação.

Vamos começar testando este segundo cenário.

### Testando se houve erro de validação

**Rodrigo**: No arquivo de `AdocaoControllerTest.java`, continuamos a criação de um método `void` chamado `deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros()`.

> `AdocaoControllerTest.java`:

```java
package br.com.alura.adopet.api.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AdocaoControllerTest {

    @Test
    void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() {

    }

}
```

Ou seja, se fizermos uma solicitação de adoção com um erro, como não enviar o ID do pet ou ID do tutor, ele deveria retornar código 400, indicando que a solicitação não foi processada corretamente.

Vini, isso se pareceria com o teste que fizemos no Postman, correto?

**Vinícius**: Exato, é como se estivéssemos disparando uma requisição. Lembre-se, em nossa rota, estamos lidando com uma requisição POST já que recebemos dados.

Portanto, também teríamos que **enviar um corpo para essa requisição**, do mesmo modo que fizemos no Postman, onde já tínhamos configurado um JSON.

**Rodrigo**: Perfeito. Então, vamos adicionar alguns comentários para separar as etapas do teste: **arrange**, **act** e **assert**.

No _arrange_, definimos quais são os dados que temos para testar essa classe, nesse caso, o _controller_. Como mencionado, vai ser um JSON.

Um JSON nada mais é do que uma _string_. Portanto, digitamos `String json` é igual à `{}` entre aspas. Nesse cenário, imagina que estamos disparando uma requisição com um JSON vazio.

Ou seja, não estamos enviando o ID do pet, o ID do tutor e nenhum motivo da solicitação. Em outras palavras, essa requisição está inválida. Tem campos obrigatórios que não estou enviando.

Desse modo, ao disparar a requisição, deveria retornar o código 400.

**Vinícius**: Exato. Precisamos fazer um _assert_ para garantir que estamos esperando o código 400 como resposta de algo. Isso é o que veremos parte por parte.

**Rodrigo**: Então, nas assertivas, verificaremos se o código 400 é igual ao código retornado pela API. Mas, onde está o código retornado pela API? Vamos colocar uma interrogação.

```java
import org.junit.jupiter.api.Assertions;

class AdocaoControllerTest {

    @Test
    void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() {
        //ARRANGE
        String json = "{}";

        //ACT

        //ASSERT
        Assertions.assertEquals(400, ?);
    }

}
```

É justamente nesse ponto que entra _act_ e surge uma questão interessante: como faremos para disparar uma requisição para a nossa API?

Será que precisamos instanciar o _controller_ ou apenas disparar uma requisição? Como será isso?

**Vinícius**: Realmente, pode ser um pouco complicado, né? Porque, pelo menos, eu não me lembro de ficarmos instanciando _controllers_. No entanto, veremos a solução para essa questão logo a seguir.

## Transcrição

**Vinícius**: Vamos retomar onde paramos anteriormente, verificando disparos de uma requisição. Neste caso, esperamos receber um _Bad Request_, um código 400.

Mas, no passo do _act_, surgiu a questão de como instanciar um _controller_.

Não foi preciso colocar um `new Controller`, no que diz respeito ao roteamento, pois isso foi feito pelo _Spring_. No entanto, isso acontece nos bastidores e tem seu próprio mecanismo.

Mas, como poderíamos fazer para instanciar essa classe já que não depende de nós?

**Rodrigo**: Exatamente, o _Spring_ é quem instancia os _controllers_. Nós não instanciamos nem injetamos um _controller_ em outra classe.

Então, o teste que vamos escrever agora é diferente. Não vamos instanciar o _controller_, nem declará-lo como um atributo ou usar o Mockito. Afinal, o _controller_ é a porta de entrada da API.

Não queremos instanciar a classe, queremos chamar a API e disparar uma requisição para a API. Então, esse tipo de teste acaba sendo diferente por isso e há duas maneiras de escrever esse código:

1. Podemos subir o servidor e disparar uma requisição real. Isso dá um pouco mais de trabalho e o teste será mais lento.
2. Ou podemos simular uma requisição na API.

Mesmo sendo uma simulação, conseguimos chamar o _controller_ e verificar se está tudo funcionando conforme o esperado.

Vamos usar a segunda abordagem e deixar uma atividade de "Para saber mais", mostrando como seria caso quiséssemos realmente subir um servidor e disparar uma requisição real.

## Simular uma requisição na API

**Rodrigo**: Como queremos simular uma requisição e não vamos subir o servidor de verdade, precisamos de alguma forma ter uma ferramenta que consiga disparar requisições. É aqui que entra o _Spring_: ele tem algumas classes que nos ajudam a escrever esse tipo de teste, quando precisamos simular uma requisição.

> O _Spring_ tem uma **classe chamada MockMvc** - note que tem a palavra _Mock_ no nome, porque essa é justamente uma classe _mock_ que **simula requisições**.

Portanto, precisaremos injetar e utilizar essa classe no código.

**Vinícius**: Portanto, precisamos definir esse atributo para esta classe e fazer uma autoinjeção.

**Rodrigo**: Assim, vamos declarar `mvc` como um atributo privado da nossa classe, não um _controller_, mas essa classe chamada `MockMVc` do _Spring_.

Para o _Spring_ conseguir injetar essa classe, temos que colocar uma anotação antes do atributo. É a mesma anotação que usamos nas classes do projeto, chamada `@Autowired`. Assim como quando queremos injetar uma _service_ ou um _repository_.

> `AdocaoControllerTest.java`:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

class AdocaoControllerTest {

    @Autowired
    private MockMvc mvc;

   // código omitido…
}
```

Mas temos um problema: não basta simplesmente colocar o `@Autowired`. Provavelmente precisamos colocar uma anotação acima da classe para que o _Spring_ conseguir injetar o `MockMvc`.

**Vinícius**: Será que quando pegamos o projeto pelo _Spring Initializr_, ele não tem uma anotação `@SpringBootTest` para nos auxiliar quando vamos usar testes automatizados?

**Rodrigo**: Tem sim, mostramos em aulas anteriores aquela dependência do _Spring_ e falamos que ela já inclui o _JUnit_, o _Mockito_ e ela também inclui classes do próprio _Spring_.

Portanto, o _Spring_ tem classes e anotações para testes automatizados que ainda não tínhamos utilizado. Agora, precisaremos utilizá-las. Acima classe de teste, colocaremos a **anotação `@SpringBootTest`**.

Com isso, quando essa classe for executada, o _Spring_ irá conversar com o _JUnit_, subindo o contexto, carregando algumas classes do _Spring_ e da nossa aplicação, como _controller_, _service_, etc. Com essa anotação, conseguimos fazer a injeção de dependências com o `@Autowired` dentro da classe de testes.

No entanto, essa anotação sozinha não nos auxilia a injetar o `MockMvc`.

Poderíamos injetar um _service_ ou um _repository_ normalmente, mas para injetar o `MockMvc`, **este objeto específico requer uma anotação adicional na classe, que é a `@AutoConfigureMockMvc`**.

Este é um detalhe super importante. Se não incluir essa anotação, não conseguiremos injetar o `MockMvc`.

```java
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@AutoConfigureMockMvc
class AdocaoControllerTest {
    // código omitido…
}
```

Ótimo, temos duas anotações na classe e declaramos o `MockMvc`, anotado com `@AutoWired`.

Agora, no _act_ de `deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros()`, vamos usar essa classe `mvc`. Deve haver algum método que dispara requisições.

**Vinícius**: Perfeito, talvez você possa incluir este objeto `mvc` seguido de ponto para conferir. O primeiro método que a IDE sugere é um `perform()`, que espera receber um `RequestBuilder` como primeiro parâmetro.

**Rodrigo**: Então, este objeto `mvc` tem um método `perform()` para realizar uma requisição. Este é o método que queremos chamar. Vamos colocar um ponto e vírgula no final. Esse método recebe algumas informações como parâmetro.

Estamos simulando uma requisição, devemos passar algumas informações. Precisamos dizer qual é a URL que vamos chamar? Essa requisição vai vir via método GET, POST, PUT, DELETE? Tem algum cabeçalho? Qual é o corpo da requisição, que é este JSON?

Portanto, lembre-se, é como se estivéssemos no Postman, disparando uma requisição, só que nesse caso precisamos configurar todos esses detalhes.

O método `perform()` tem alguns parâmetros que devemos passar e alguns métodos que devemos chamar. Existe um método chamado `post()`.

Vamos usar o atalho "Alt + Enter", o VS Code sugere _import static method_, mas tem algumas opções para importar esse método. Vamos importar do Spring no pacote `org.springframework.test.web.servlet.request`. Este é o método `post()` que devemos importar.

E este método `post()` recebe uma _string_ como parâmetro, que é a URL da requisição que queremos chamar. É necessário saber qual é a URL do _controller_ que queremos chamar.

**Vinícius**: Exato, podemos até voltar ao _controller_ e conferir como está mapeado: com a `/adocoes`. Inserindo isso, também precisamos passar no `perform()` o _body_ (corpo) e de que maneira esse _body_ está indo - em JSON ou em outro formato?

**Rodrigo**: Com isso, informamos que queremos disparar uma requisição POST. Qual é a URL? Será `/adocoes`, porque queremos que caia no `AdocaoController` que tem essa URL.

Importante perceber, não estamos chamando o _controller_ diretamente com `new`, mas estamos disparando uma requisição que cai neste _controller_. Então, conseguimos chamar o _controller_ sem instanciar diretamente a classe.

Contudo, não basta passar a URL e o método HTTP. Depois do `post()`, digitamos `.content()` para informar o conteúdo que vamos enviar nessa requisição. No nosso caso, é a variável `json`.

Nesse cenário de teste, queremos enviar essa variável `json` que é um JSON vazio já que isso deveria retornar o código 400.

Além do `content()`, vamos apertar "Enter" e acrescentar `.contentType()`. Precisamos levar o cabeçalho _content type_ para indicar que estamos disparando uma requisição do tipo JSON.

Esse `contentType()` recebe como parâmetro um objeto `MediaType.APPLICATION_JSON`.

Porém, ainda está dando um erro de compilação, porque este método `perform()` lança uma _exception_. Portanto, temos que fazer um `try/catch` ou colocar um `throws`. Isso é uma peculiaridade do Java.

Vamos clicar em `perform()`, dar um "Alt + Enter" e pedir para colocar _add exception to method signature_. Pronto, automaticamente é colocado um `throws` na assinatura do método.

```java
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

// código omitido…

@Test
void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() throws Exception {
    //ARRANGE
    String json = "{}";

    //ACT
    mvc.perform(
            post("/adocoes")
                    .content(json)
                    .contentType(MediaType.APPLICATION_JSON)
    );

    //ASSERT
    Assertions.assertEquals(400, ?);
}
```

Ótimo, nosso teste está compilando agora.

## Verificar a resposta da requisição

**Rodrigo**: Já implementamos o _act_, isto é, já conseguimos disparar a requisição. Agora só falta conseguir pegar a resposta dessa requisição para verificar se está retornando o código 400.

**Vinícius**: Exato, podemos verificar até que este método `perform()` vai nos retornar uma resposta. E aí, será que através dessa respota conseguimos recuperar o _status_ que foi retornado dessa nossa requisição?

**Rodrigo**: Se passarmos o mouse sobre o `perform()`, é exibida a documentação desse método. Ele devolve um objeto `ResultActions`. Mas não queremos pegar esse `ResultActions`, queremos a resposta (_response_).

Por isso, no final, depois que chamamos o `perform()`, antes do ponto e vírgula, podemos encadear `.andReturn()`, aí queremos pegar o retorno de fato e `.getResponse()`.

Agora, sim, conseguimos a resposta da requisição e essa resposta é um objeto do tipo `MockHttpServletResponse`. Vamos atribuir isso a uma variável. Vamos usar o `var` do Java, que é mais simples.

Para isso, digitamos que `var response` será igual à `mvc.perform().andReturn().getResponse()`. Agora essa variável `response` representa a resposta devolvida da requisição.

Com isso, no _assert_, conseguimos pegar a `response.getStatus()`. Assim, ele vai nos devolver qual é o _status code_. E aí queremos checar se nessa requisição está vindo o 400, que é o esperado, já que estamos enviando um JSON inválido.

```java
@Test
void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() throws Exception {
    //ARRANGE
    String json = "{}";

    //ACT
    var response = mvc.perform(
            post("/adocoes")
                    .content(json)
                    .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    //ASSERT
    Assertions.assertEquals(400, response.getStatus());
}
```

Agora, finalizamos nosso teste, certo? Podemos executar?

**Vinícius**: Vamos executá-lo e conferir o que vai acontecer.

**Rodrigo**: A princípio, configuramos todo o passo a passo do teste. Se temos esse JSON vazio e disparamos uma requisição para essa URL com esse JSON vazio, com esse cabeçalho e pegar a `response`, o _status_ deveria ser 400.

Vamos clicar no botão verde de "play" à esquerda e escolher a opção "Run" (ou "Ctrl + Shift + F10").

Agora, abaixo na aba "Run", percebemos que ele está inicializando o Spring, carregando módulos do Spring, como se estivesse subindo o servidor, mas ele não dispara uma requisição de verdade, ele simula uma requisição.

No caso, o teste falhou. Ele mostra uma mensagem gigantesca com a explicação. Vamos entender o que está acontecendo:

> SQL State: 28000
> 
> Error Code: 1045
> 
> Message: Access denied for user 'root@localhost' (using password: YES)

Ele deu acesso negado para o banco de dados. Ou seja, esse teste está indo no banco de dados de verdade, mas não queremos isso.

**Vinícius**: Exato, precisamos combinar algo para ele não ir lá no banco de dados.

**Rodrigo**: Perfeito. Queremos, por mais que esteja testando o _controller_, que seja um teste de unidade, não um teste de integração. Só que vamos entender isso com calma na sequência.

## Transcrição

**Vinícius**: Realizamos o teste automatizado para a classe de _controller_ e, ao tentar rodar nosso teste, ocorreu uma falha. Essa falha indicou que o acesso foi negado ao banco de dados.

Isso ocorreu porque o Rodrigo transferiu este projeto, que estávamos desenvolvendo anteriormente em minha máquina, e esqueceu de fazer as configurações necessárias.

Esse incidente serve para nos lembrar de que, nesse caso, estava sendo realizado um teste de integração, mas nosso objetivo é realizar um **teste de unidade**. Portanto, precisamos simular ações no banco de dados.

**Rodrigo**: Exato, o teste tentou acessar o meu MySQL e falhou porque a senha estava incorreta. Porém, não queremos um teste de integração, mas, sim, um teste de unidade.

Isso aconteceu porque estamos disparando uma requisição simulada. No vídeo anterior, quando rodou o projeto, te mostramos como o _Spring_ gerou um registro no log. Subiu o servidor como se estivesse subindo o contexto da aplicação, chamou o _controller_ e nosso _controller_ está injetando uma classe _service_.

Com isso, chamou a _service_ de verdade e nossa classe _service_ está injetando diversos repositórios que acessam o banco de dados realmente.

No entanto, não queremos o banco de dados de verdade, queremos apenas simular que estamos chamando esses objetos porque queremos fazer um teste de unidade.

## Mockando a _service_

**Rodrigo**: No `AdocaoController`, temos a `AdocaoService`, mas precisamos informar ao _Spring_ que quando chamar este _controller_, não deve usar a _service_ real, é necessário usar um _mock_.

Por isso, queremos fazer um _mock_ dessa _service_ para informar ao _Spring_ que não deve chamar a _service_ real.

Portanto, precisamos declarar esse atributo na nossa classe de teste. Além do `MockMvc`, vamos declarar um atributo privado, `AdocaoService`, denominado `service`.

Acima desse atributo usaremos uma notação `@MockBean`. Seria o `@Mock` do _Mockito_, mas tem o _mock_ do _Spring_, que é o `@MockBean`, para que o _Spring_ possa configurar esse objeto e injetá-lo no _controller_ automaticamente. Logo, é um _Mockito_, mas está oculto pelo _Spring_.

> `AdocaoControllerTest.java`:

```java
import br.com.alura.adopet.api.service.AdocaoService;
import org.springframework.boot.test.mock.mockito.MockBean;

class AdocaoControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private AdocaoService service;

    // código omitido…

}
```

Agora, quando o _Spring_ chamar o _controller_, saberá que tem uma _service_ nele. No entanto, em nosso teste, configuramos essa _service_ com _MockBean_, então ele não usará a _service_ real, usará essa _service mock_.

Agora, deveria ser um teste de unidade, certo?

**Vinícius**: Exato, vamos rodar novamente o teste para conferir se passará.

**Rodrigo**: Estou rodando o teste. Agora ele não deveria tentar acessar o meu banco de dados, mas o teste ainda falhou.

Ele continuou tentando acessar o banco de dados. Na verdade, talvez ele não esteja tentando acessar o banco. Quando ele tentou iniciar a aplicação, ele apenas tentou estabelecer uma conexão com o meu banco de dados. Porém, o usuário e a senha estão incorretos no arquivo de propriedades.

Vamos abrir o arquivo `application.properties`, usaremos o atalho "Shift + Shift", digitando "application" para filtrar.

No meu computador, o usuário do meu banco de dados é `root` e a senha também é `root`. Embora o _Spring_ leia este arquivo de configuração, ele não necessariamente tentará acessar o banco de dados.

> `application.properties`:

```ini
spring.datasource.username=root
spring.datasource.password=root
```

Após configurar o usuário corretamente, vamos tentar rodar o teste novamente. Agora, o teste deu certo e a execução foi bem sucedida.

Ele conseguiu simular uma requisição. O `@MockBean` indica ao _Spring_ para não utilizar a _service_ real, mas usar esse _mock_ quando chamar o _controller_. Portanto, conseguimos o resultado esperado para este cenário de teste.

**Vinícius**: No primeiro momento, realizamos o cenário que visava obter um _status_ 400, que ocorreria caso encontrássemos um problema ao disparar uma requisição para esse _controller_.

No entanto, agora precisamos também trabalhar no cenário onde tudo ocorre como esperado, isto é, o _status_ 200. Dessa forma, vamos aproveitar o mesmo método utilizado anteriormente, copiá-lo e adaptá-lo para a nova situação.

## Testando código 200

**Rodrigo**: Vou copiar e colar o método utilizado no cenário do status 400. Iremos renomeá-lo para `deveriaDevolverCodigo200ParaSolicitacaoDeAdocaoSemErros()`. Agora, vamos adaptá-lo.

Neste novo cenário, o JSON não pode ser inválido, precisa conter o ID do pet, o ID do tutor e o motivo da adoção. Portanto, na variável `json` do _arrange_, precisaremos criar um JSON com todas essas informações.

Como inserir essas informações diretamente poderia ser um processo cansativo de concatenação devido às aspas do JSON, usaremos o recurso de _template string_ (ou textblock) do Java. Abrindo e fechando três aspas duplas, colocaremos o JSON entre elas.

Entre as aspas, vamos colar o seguinte JSON:

```json
{
        "idPet": 1,
        "idTutor": 1,
        "motivo": "Motivo qualquer"
}
```

Com isso, obtemos um JSON válido, contendo os IDs do pet e do tutor, além do motivo da adoção. Assim, não temos mais erros de validação neste JSON.

A requisição permanecerá a mesma: via `post()` na mesma URL.

**Vinícius**: A parte do _act_ (ação) não precisa ser alterada. Precisamos apenas atualizar nossas assertivas. Não esperamos mais receber um código 400, já que estamos enviando um JSON correto. Desta vez, esperamos receber um código `200`, de OK.

**Rodrigo**: Perfeito. Em `assertEquals()`, vamos trocar para `400` para `200`.

> `AdocaoControllerTest.java`:

```java
@Test
void deveriaDevolverCodigo200ParaSolicitacaoDeAdocaoSemErros() throws Exception {
    //ARRANGE
    String json = """
            {
                "idPet": 1,
                "idTutor": 1,
                "motivo": "Motivo qualquer"
            }
            """;

    //ACT
    var response = mvc.perform(
            post("/adocoes")
                    .content(json)
                    .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    //ASSERT
    Assertions.assertEquals(200, response.getStatus());
}
```

Os cenários de teste subsequentes costumam ser mais tranquilos. O primeiro é sempre o mais complicado, mas o restante envolve apenas copiar, colar e adaptar. Simples, não?

Portanto, vamos rodar estes testes. Ao clicar no botão verde de "play" (ou "Ctrl + Shift + F10"), vamos verificar se o segundo cenário está funcionando corretamente.

Passou! Quando enviamos um JSON correto, a API retorna o _status_ 200, que era esperado. Enquanto isso, ao enviar um JSON inválido, faltando algum campo obrigatório, a API retorna 400 - também o esperado.

Assim, confirmamos que o código de nossa classe _controller_ está se comportando conforme o esperado.

## Conclusão

**Rodrigo**: Vale lembrar que, apesar de termos testado apenas o _status code_ até agora, poderíamos testar muitos outros aspectos. Por exemplo, poderíamos testar o JSON que está sendo retornado.

Além do método `getStatus()`, o objeto `response` possui vários outros métodos que também poderiam ser testados, como o `getContentAsString()`. Com ele, poderíamos verificar se o JSON devolvido pela API está correto. Também podemos confirmar se está retornando um cabeçalho com `constainsHeader()`, entre outras informações.

Ou seja, não precisamos testar apenas o _status code_. É possível também verificar se outras informações estão sendo devolvidas conforme o esperado.

Dessa forma, conseguimos cumprir nossa missão e testar a classe _controller_ nos dois cenários possíveis.

**Vinícius**: Testamos diversos cenários, desde a classe de validação até a classe de serviços. Mas, agora, chegou a hora de você colocar a mão na massa. A seguir, iremos te apresentar alguns desafios!

# Para saber mais: gerando JSON com JacksonTester

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139579/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139579/question)

Ao escrever testes automatizados para uma classe Controller precisamos simular uma requisição para a API, sendo comum o envio de informações no formato JSON. Nessa aula, foi demonstrado como utilizar o recurso de _Text Block_ do Java, disponível desde a versão 15 da linguagem, para montar o JSON a ser enviado nas requisições.

Embora a utilização de text block simplifique bastante esse processo, não havendo a necessidade de ficar realizando concatenações de Strings manualmente, existe um recurso do Spring que pode ser utilizado como alternativa.

## JacksonTester

Ao invés de utilizar uma String para representar o JSON a ser enviado na requisição, podemos utilizar um objeto DTO que criamos para representar os dados que chegam na requisição no formato JSON. No caso da requisição de solicitar uma adoção, temos o record `SolicitacaoAdocaoDto`, que representa o JSON enviado na requisição:

```python
String json = """
    {
        "idPet": 1,
        "idTutor": 1,
        "motivo": "Motivo qualquer"
    }
    """;

//Objeto dto representando o JSON anterior:
SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(1l, 1l, "Motivo qualquer");
```

Mas não podemos enviar esse objeto DTO diretamente na requisição, sendo necessário antes convertê-lo para uma String no formato JSON. Isso pode ser feito de maneira automática pelo Spring, com a utilização do recurso conhecido como **JacksonTester**:

```java
@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
class AdocaoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdocaoService adocaoService;

    @Autowired
    private JacksonTester<SolicitacaoAdocaoDto> jsonDto;

    @Test
    void deveriaDevolverCodigo200ParaRequsisicaoDeSolicitarAdocaoComDadosValidos() throws Exception {
        //ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(1l, 1l, "Motivo qualquer");

        //ACT
        MockHttpServletResponse response = mockMvc.perform(
                post("/adocoes")
                        .content(jsonDto.write(dto).getJson())
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn().getResponse();

        //ASSERT
        assertEquals(200, response.getStatus());
        assertEquals("Adoção solicitada com sucesso!", response.getContentAsString());
    }

    // outros testes omitidos
}
```

Repare que foi injetado na classe um novo atributo do tipo `JacksonTester`, sendo que nele passamos nos generics o tipo de classe que vai trabalhar, que no exemplo será o record `SolicitacaoAdocaoDto`. Repare também que a classe de teste foi anotada com `@AutoConfigureJsonTesters`, para que a injeção do objeto `JacksonTester` funcione corretamente.

Por fim, no método de teste, a String que representa o JSON foi substituída por um objeto do tipo `SolicitacaoAdocaoDto`, sendo que tal objeto foi convertido para uma String no formato JSON utilizando `jsonDto.write(dto).getJson()`, antes de ser passado como parâmetro para o método `content()`.

Dessa forma, é possível utilizar objetos DTO para representar as informações que são enviadas e recebidas pela API, ao invés de utilizar Strings e concatenações manuais.

# Para saber mais: devo testar interfaces Repository?

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139580/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139580/question)

As interfaces Repository encapsulam a lógica de acesso e manipulação de dados em um banco de dados, proporcionando uma abstração conveniente para as operações CRUD (_Create, Read, Update, Delete_). No entanto, surge a dúvida: devo testar as interfaces Repository?

A resposta para essa pergunta não é uma regra absoluta, pois depende do contexto e dos objetivos do projeto. Existem situações em que escrever testes para interfaces Repository pode não ser recomendado, bem como situações em que é recomendado.

## Quando evitar testes de interfaces repository?

**Operações CRUD simples:** Se a interface Repository contém apenas operações CRUD básicas e não há lógica de negócio adicional, pode ser desnecessário escrever testes para essas operações. As implementações do Spring Data JPA já são amplamente testadas e confiáveis, o que reduz a necessidade de testes adicionais em nível de interface.

**Código gerado automaticamente:** Em alguns casos, as interfaces Repository podem ser geradas automaticamente pelo Spring Data JPA com base nas entidades do domínio. Se esse for o caso, o código gerado é altamente confiável e coberto por testes automatizados no próprio Spring Data JPA. Nesse cenário, não é necessário escrever testes adicionais para as interfaces Repository geradas automaticamente.

## Quando escrever testes de interfaces repository?

**Queries personalizadas:** Se a interface Repository contém métodos de consultas adicionais, além das operações CRUD básicas, é recomendado escrever testes para tais métodos. Testar tais métodos garante que o código esteja funcionando corretamente e que as consultas estão trazendo os dados que são esperados.

## E os testes das outras classes do projeto?

A mesma regra mencionada anteriormente, para as interfaces repository, também são válidas para as outras classes do projeto, como entidades JPA e as classes/records que seguem o padrão DTO, ou seja, somente é recomendado escrever testes automatizados no caso delas possuírem métodos com alguma lógica, como validações, regras de negócio, etc.

Se forem classes simples contendo apenas atributos, construtores e métodos getters/setters, não faz sentido escrever testes automatizados para elas.

# Para saber mais: testando controllers com requisições reais

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139581/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139581/question)

Nessa aula, escrevemos os testes de um controller utilizando a classe `MockMvc` do Spring, que simula requisições para a API. Essa abordagem é válida e muito utilizada nos projetos, porém, ela utiliza um objeto mock para simular requisições, sem de fato disparar requisições reais para a API.

É possível escrever o mesmo teste utilizando uma outra abordagem, na qual são disparadas requisições reais para a API, utilizando a classe `TestRestTemplate` do Spring, ao invés de utilizar a classe `MockMVC`.

Veja um exemplo do mesmo teste escrito dessa outra forma:

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AdocaoControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() {
        // ARRANGE
        String json = "{}";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // ACT
        ResponseEntity<Void> response = restTemplate.exchange(
                "/adocoes",
                HttpMethod.POST,
                new HttpEntity<>(json, headers),
                Void.class
        );

        // ASSERT
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    @Test
    void deveriaDevolverCodigo200ParaSolicitacaoDeAdocaoSemErros() {
        // ARRANGE
        String json = """
                {
                    "idPet": 1,
                    "idTutor": 1,
                    "motivo": "Motivo qualquer"
                }
                """;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // ACT
        ResponseEntity<Void> response = restTemplate.exchange(
                "/adocoes",
                HttpMethod.POST,
                new HttpEntity<>(json, headers),
                Void.class
        );

        // ASSERT
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
```

Como serão disparadas requisições reais para a API, ela precisa estar em execução em alguma porta. No código anterior, a anotação `@SpringBootTest` está com o argumento `webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT`, que configura o teste para usar uma porta aleatória para realizar as chamadas HTTP reais. Isso é útil, pois evita que tenhamos que escolher uma porta que já pode estar em uso no sistema operacional.

O `TestRestTemplate` é uma classe que faz parte do módulo de teste do Spring Boot e permite que você realize solicitações HTTP para a API em execução durante os testes. Observe que, o método `perform()` do `MockMvc`, foi substituído pelo método `exchange()` do `TestRestTemplate` para realizar as chamadas HTTP reais. As asserções dos códigos de status de resposta também foram adaptadas para usar os valores de `HttpStatus`.

Repare que poucas mudanças foram necessárias para adaptar o código, facilitando a troca da abordagem a ser utilizada ao executar os testes de controllers da API.

# Faça como eu fiz: testando requisições na API

 [Próxima Atividade](https://cursos.alura.com.br/course/boas-praticas-programacao-testes-java/task/139584/next)

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139584/question)

Agora é com você! Faça os mesmos procedimentos que foram demonstrados ao longo dessa aula para realizar os testes de uma classe controller. Escreva uma classe de teste automatizado para a classe `AdocaoController`.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/boas-praticas-programacao-testes-java/139584/opinion)

Você vai precisar criar a classe `AdocaoControllerTest`, dentro de `src/test/java`:

```kotlin
package br.com.alura.adopet.api.controller;

@SpringBootTest
@AutoConfigureMockMvc
class AdocaoControllerTest {

}
```

Declare os atributos `MockMvc` e `AdocaoService`, lembrando de anotá-los com `@Autowired` e `@MockBean`:

```java
@Autowired
private MockMvc mvc;

@MockBean
private AdocaoService service;
```

Agora implemente os métodos que vão simular os cenários de código 400 e código 200 em requisições:

```java
@Test
void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() throws Exception {
    //ARRANGE
    String json = "{}";

    //ACT
    var response = mvc.perform(
            post("/adocoes")
                    .content(json)
                    .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    //ASSERT
    Assertions.assertEquals(400, response.getStatus());
}

@Test
void deveriaDevolverCodigo200ParaSolicitacaoDeAdocaoSemErros() throws Exception {
    //ARRANGE
    String json = """
            {
                "idPet": 1,
                "idTutor": 1,
                "motivo": "Motivo qualquer"
            }
            """;

    //ACT
    var response = mvc.perform(
            post("/adocoes")
                    .content(json)
                    .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    //ASSERT
    Assertions.assertEquals(200, response.getStatus());
}
```

Pronto! Rode os testes e verifique se eles vão passar, indicando que o código do método `solicitar`, da classe `AdocaoController`, está implementado corretamente.

> **ATENÇÃO:** Cuidado com os imports das classes utilizadas na escrita dos testes. Confira os imports necessários e corretos a seguir:

```cpp
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilder
```

