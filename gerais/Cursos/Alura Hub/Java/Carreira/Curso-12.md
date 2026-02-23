## Transcrição

Boas-vindas! Sou a **Gabi Ribeiro** e serei a sua instrutora ao longo deste curso.

> **Audiodescrição:** Gabi Ribeiro se declara uma mulher parda e de cabelo rosa. Veste uma camiseta preta. Está no estúdio da Alura, que possui algumas decorações e está iluminado com luz azul e vermelha.

## Para quem é esse curso?

Este curso é voltado para aqueles que desejam aprender sobre o uso de _Git_ e _GitHub_ no contexto de _DevOps_ (Desenvolvimento e Operações). É imprescindível ter concluído o curso anterior desta formação, que aborda práticas seguras de tráfego.

## O que vamos aprender?

Neste curso, você irá adquirir habilidades para utilizar o _Git_ e o _GitHub_ no versionamento de seus projetos, manipular _branches_ (ramificações) e resolver conflitos, explorar o uso de _issues_ (problemas) e _pull requests_ (solicitações de recebimento), criar um _workflow_ (fluxo de trabalho) de integração contínua com _GitHub Actions_ e garantir a segurança do seu repositório por meio do _Dependabot_.

Exploraremos esses conceitos por meio do projeto _**All Books**_, uma plataforma de comércio eletrônico especializada na **venda de livros**. Para isso, faremos uso da _API_ que sustenta o _back-end_ desta aplicação.

**Aproveite os recursos da plataforma**! Além dos vídeos, temos as atividades e o apoio do _fórum_ e da comunidade do _Discord_.

Bons estudos!

# Preparando o ambiente: instalando o Git e criando conta no GitHub

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149690/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149690/question)

# Instalando o Git

Para realizar esse curso, você precisa ter instalado o Git em seu computador. Caso ainda não tenha feito isso, faça o download e a instalação conforme mostramos a seguir:

Para instalar o Git em seu computador, você deve [acessar o site de downloads do Git](https://git-scm.com/downloads). Em seguida, clique no botão referente ao seu sistema operacional.

![Imagem com print da tela do site de downloads do Git. Estão em destaque os botões de download correspondentes a cada sistema operacional, sendo eles macOS, Windows e Linux/Unix.](https://cdn3.gnarususercontent.com.br/3584-devops/img1.png)

## Windows

Caso seu sistema operacional seja o Windows, no site do Git será aberta uma lista com várias opções de download.

Se o seu computador tiver a arquitetura de 64bits, que é a mais comum, clique na opção _64-bit Git for Windows Setup_. Caso seu computador tenha a arquitetura de 32bits, clique na opção _32-bit Git for Windows Setup_.

Assim, baixamos um arquivo com a extensão _.exe_.

Você deve clicar no arquivo baixado para iniciar a instalação. Provavelmente uma janela será aberta perguntando se deseja permitir que esse programa faça alterações em seu computador; caso esse cenário ocorra, clique em _Sim_ para continuar.

Na janela de instalação, prossiga clicando nos botões de _Next_. Neste momento, não é necessário realizar nenhuma alteração nas configurações padrão da instalação do Git.

Após uma série de cliques no botão _Next_, você deve clicar no botão _Install_, para instalar o Git. Por fim, clique no botão _Finish_. Assim, o Git estará instalado em seu computador.

## Distribuições Linux

Caso seu sistema operacional seja alguma distribuição Linux, será aberta uma página com as instruções de instalação por meio do gerenciador de pacotes do seu sistema.

Basta seguir os comandos especificados pelo seu Terminal que o Git será instalado em seu computador.

## macOS

Existem várias opções para instalar o Git no macOS, mas o próprio git indica algumas soluções.

Ao clicar em macOS na [página de download](https://git-scm.com/downloads), você pode conferir a instalação.

O **[Homebrew](https://brew.sh/)** é um gerenciador de pacotes para o macOS que simplifica a instalação de software.

Abra o Terminal e cole o comando que o site oferece para instalar o Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Pressione "Return" para executar o script. O Terminal pode solicitar que você insira sua senha. Digite sua senha e pressione "Return" novamente.

Após a conclusão da instalação, precisamos adicionar o brew no PATH. O terminal fornecerá instruções sobre como adicionar o diretório do Homebrew ao seu PATH. Normalmente, as instruções serão semelhantes a:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/seu_usuario/.zprofile
'eval "$(/opt/homebrew/bin/brew shellenv)"'
```

Copie um de cada vez e execute no terminal.

> Lembre-se de modificar o `seu_usuario` pelo seu nome de usuário!

Para garantir que o Homebrew foi instalado corretamente, digite o seguinte comando:

```css
brew --version
```

Feche o Terminal, abra-o novamente e digite o seguinte comando para instalar o git:

```ruby
$ brew install git
```

Pressione "Return" para iniciar o processo de instalação.

Após a conclusão da instalação, verifique se o Git foi instalado corretamente usando o comando:

```css
git --version
```

Pronto. Você concluiu a instalação do Git no macOS usando o Homebrew!

# Criando sua conta no GitHub

Para realizar esse curso, você precisa ter uma conta no GitHub. Caso ainda não tenha, [acesse o site do GitHub](https://github.com/) e clique no botão _Sign up_.

Isso abrirá um formulário a ser preenchido com suas informações. Também haverá um processo de verificação, para garantir que você não é um robô. :)

Criada a conta, o GitHub **enviará um código para o seu e-mail**. Verifique seu e-mail, inclusive as abas de “Promoções”, “Social” e “Spam”. Após encontrá-lo, informe o código enviado.

Assim, sua conta no GitHub estará criada e pronta para uso.

# Configurando seu usuário do GitHub localmente

Por fim, você precisará configurar seu usuário do GitHub em seu computador. Para isso, abra seu Terminal e execute os seguintes comandos:

```lua
git config --global user.name "SEU NOME"
git config --global user.email EMAIL@exemplo.br
```

Lembre-se de substituir “SEU NOME” pelo seu nome e “EMAIL@exemplo.br” pelo e-mail que você usou na sua conta do GitHub.

# Preparando o ambiente: projeto do curso

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149691/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149691/question)

Neste curso usaremos o projeto da API do AllBooks, uma livraria online. Você pode [fazer o download do projeto inicial](https://github.com/alura-cursos/allbooks/archive/refs/heads/aula-01.zip).

Após baixar o arquivo zip, descompacte-o em algum diretório do seu computador e na sequência abra o projeto em sua IDE. No curso, usaremos o [VSCode](https://code.visualstudio.com/) como IDE, sendo recomendado que você também use essa mesma IDE para facilitar seu aprendizado.

Para instalar as dependências do seu projeto você pode rodar o comando a seguir em seu Terminal:

```undefined
npm install
```

E para rodar o projeto você pode executar o comando:

```sql
npm run start
```

Além disso, em seu computador você deve ter instalado o Git, criado uma conta no GitHub e configurado seu usuário do GitHub localmente. Caso falte alguma dessas etapas, volte na atividade anterior para conferir.

Tudo pronto?

Bons estudos!

## Transcrição

Trabalharemos com o projeto _**All Books**_ explorado anteriormente nesta formação. Atualmente, o projeto reside apenas em nosso computador. Ao abrirmos o _VS Code_, clicamos no primeiro ícone do menu lateral esquerdo do explorador de arquivos ou podemos usar o atalho "Ctrl + Shift + E".

Obtemos a estrutura do nosso projeto:

- src
    - config
    - data
    - middleware
    - routes
    - services
- `JS` server.js
- .gitignore
- `{}` package-lock.json
- `{}` package.json
- README.md

Dentro, encontramos a pasta `src`, comumente denominada _source_ (fonte), contendo outras pastas com diversos códigos em _JavaScript_ que compõem o projeto.

## Compartilhando e Organizando Código com Git e GitHub

Como o código permanece exclusivamente em nossa máquina, vamos carregá-lo em uma ferramenta para **compartilhá-lo** com outras pessoas, viabilizando a colaboração. Isso também contribuirá para manter o código mais organizado. Para isso, faremos uso das ferramentas _Git_ e _GitHub_.

### _Git_ e _GitHub_

O _GitHub_ usa o sistema de versionamento _Git_, que permite rastrear as alterações feitas ao longo do projeto, além de permitir trabalho colaborativo.

**É importante diferenciar _Git_ e _GitHub_.**

> **Git** é um sistema de **versionamento**, enquanto **GitHub** é uma **plataforma** que usa esse sistema para armazenar nosso código.

Vamos subir o código do nosso computador para o _GitHub_.

### Enviando o código para o GitHub

> github.com

Abrimos o navegador, acessamos a página do GitHub e, para isso, precisamos criar uma conta. Já estou autenticada na conta, não detalharemos o processo de criação, mas deixaremos uma atividade, se necessário.

### Criando um repositório

Precisamos **criar um repositório**. Para isso, clicamos no ícone no canto superior direito, selecionamos "_Your Repositories_" ("Seus repositórios") e clicamos no botão verde "_New_" ("Novo") do lado direito.

Isso abrirá opções para a criação do novo repositório em uma página intitulada "_Create a new repository_" ("Crie um novo repositório").

O campo _"Owner"_ ("Proprietário") indica quem é a dona do repositório, e o campo _"Repository Name"_ é o nome do repositório. Chamaremos o repositório de _"allbooks"_.

```undefined
allbooks
```

As demais configurações para o repositório podem ser mantidas como estão. Clicamos no botão verde _"Create Repository"_ ("Criar repositório") no canto inferior direito para criar o **repositório remoto**, sendo o que está na _web_.

O _GitHub_ oferece algumas orientações sobre como podemos enviar o código de nossa máquina para esse repositório remoto.

### Iniciando um repositório Git no projeto local

Agora, retornemos ao _VS Code_. Fechamos o explorador de arquivos do lado esquerdo e, no menu superior do _VS Code_, abrimos um novo terminal. Para isso, clicamos no menu hamburger e depois em "Terminal > Novo Terminal".

Precisamos iniciar um repositório _Git_ em nosso projeto local. Para isso, executamos o comando `git init`.

```csharp
git init
```

Esse comando inicializa o repositório _Git_ localmente, dentro da pasta do nosso projeto, criando uma pasta oculta chamada `.git`.

### Definindo _branch_

Em seguida, definimos um _branch_ com o comando `git branch -M main`.

```css
git branch -M main
```

Não precisamos nos preocupar em entender por completo esse comando, mais adiante entenderemos ele com calma.

### Conectando o repositório local com o do _GitHub_

Agora, vamos **conectar** o repositório que criamos no _GitHub_ com o nosso repositório local em nosso computador. Voltamos ao navegador, para o repositório que criamos e copiamos a _URL_ fornecida no campo "_Quick Setup_" ("Configuração rápida").

> A URL a seguir pertence à instrutora; cada pessoa terá a sua própria. Estamos usando essa apenas como exemplo para ilustrar o procedimento.

```bash
https://github.com/Gabrielle-Ribeiro/allbooks.git
```

De volta ao terminal do _VSCode_, executamos o comando `git remote add`.

```csharp
git remote add
```

Precisamos dar um nome a esse repositório remoto, geralmente chamamos de `origin`. Informamos a _URL_ do repositório.

```bash
git remote add origin https://github.com/Gabrielle-Ribeiro/allbooks.git
```

Com isso, adicionamos o repositório remoto.

Rodamos o comando `cls` para limpar a tela e depois `git remote`.

```undefined
git remote
```

Como retorno, obtemos:

> origin

O terminal indicará que temos um repositório remoto chamado _origin_.

## Conclusão

Estabelecemos a conexão entre o computador e o repositório do _GitHub_. No entanto, ao atualizar a página do projeto no _GitHub_ clicando no ícone “↻” localizado no canto superior esquerdo, notamos que nada foi alterado; o **código ainda não foi enviado**. A seguir, você aprenderá como enviar o código do seu computador para o _GitHub_.

Até mais!

# Para saber mais: erro de autenticação por senha

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149692/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149692/question)

Caso você se depare com a seguinte mensagem ao tentar executar algum comando git, você precisará configurar a autenticação por token em sua conta.

```yaml
Logon failed, use ctrl+c to cancel basic credential prompt.
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: unable to access ‘<repositório Git>’: The request URL returned error: 403 
```

Para fazer essa configuração, você pode seguir este tutorial no nosso [artigo sobre Nova exigência do Git de autenticação por token, o que é e o que devo fazer?](https://www.alura.com.br/artigos/nova-exigencia-do-git-de-autenticacao-por-token-o-que-e-o-que-devo-fazer)

## Transcrição

Já configuramos a conexão entre nosso repositório local e o remoto. Agora, como podemos enviar os arquivos do projeto para o _GitHub_? Abrimos o projeto no _VS Code_.

Ao clicarmos no explorador de arquivos à esquerda (atalho "Ctrl + Shift + E"), observamos que os arquivos estão destacados em uma cor diferente, aparecendo em verde com a letra "U" no final de cada arquivo, indicando algo importante.

**O que isso significa?** Isso indica que os códigos e arquivos do projeto em nosso repositório local **ainda não foram registrados no repositório remoto**. A letra "U" representa "_Untracked_" (não rastreado).

## Adicionando, Registrando e Enviando Alterações no _GitHub_

Fechamos o explorador, abrimos o terminal e executamos alguns comandos. Ao rodarmos o comando `git status`, poderemos visualizar os arquivos que foram modificados ou adicionados em nosso projeto e ainda **não foram incluídos no GitHub** - eles serão destacados em **vermelho**.

```lua
git status
```

Obtemos, como retorno:

> O retorno abaixo foi parcialmente transcrito. Para conferi-lo na íntegra, execute o código na sua máquina

> ```go
> Untracked files:
> 
> (use "git add `<file>`..." to include in what will be committed)
> 
> .gitignore
> 
> README.md
> 
> package-lock.json
> 
> package.json
> 
> src/
> ```

Limpamos a tela com o comando `cls`.

### Adicionando arquivos

Em seguida, utilizaremos o comando `git add` para especificar quais arquivos desejamos adicionar.

```csharp
git add
```

Podemos simplificar o processo de adicionar arquivos ao nosso projeto. Em vez de digitar manualmente o nome de cada arquivo (por exemplo, `git add README.md` e teclar "_Enter_"), podemos usar um atalho chamado `git add .`.

```csharp
git add .
```

Esse comando adiciona **todos os arquivos de uma vez**. Ao rodarmos novamente o comando `git status`, veremos a lista de todos os arquivos que foram adicionados.

> O retorno abaixo foi parcialmente transcrito. Para conferi-lo na íntegra, execute o código na sua máquina

> new file: .gitignore
> 
> new file: README.md
> 
> new file: package-lock.json …

Limpamos a tela novamente com `cls`.

### Criando um _commit_

Agora, criaremos um `commit` para registrar as mudanças realizadas. Utilizamos o comando `git commit`, incluindo a opção "`-m`" para adicionar uma mensagem sobre as alterações feitas no projeto.

```sql
git commit -m
```

Após o espaço, colocamos aspas duplas e escrevemos uma breve descrição das modificações. Como mensagem, optamos por "Adiciona projeto inicial". Fechamos as aspas e pressionamos "Enter".

```sql
git commit -m "Adiciona projeto inicial"
```

O comando de `commit` **registra a alteração** realizada. Podemos limpar a tela de novo com `cls`.

Podemos executar o comando `git log` para visualizar o registro das alterações feitas em nosso projeto.

```bash
git log
```

Como retorno, temos:

> commit 2019f9827c7412e3234031491289f35956ee6c25 (HEAD -> main)
> 
> Author: Gabrielle Ribeiro gabrielleribeiro2010@gmail.com
> 
> Date: Mon Dec 18 17:07:48 2023 -0300
> 
> Adiciona projeto inicial

No entanto, é importante notar que essas modificações estão atualmente disponíveis apenas em nosso computador e ainda não foram enviadas para o _GitHub_.

### Enviando para o _GitHub_

O último passo é utilizar o comando `git push`, especificando o destino como o nosso `origin main`.

```css
git push origin main
```

Teclamos "Enter". Aparentemente ocorreu tudo bem.

### Verificando no GitHub

No navegador, acessamos nosso projeto no _GitHub_, atualizamos a página e todos os arquivos presentes em nosso computador também estão disponíveis no _GitHub_. Observem que temos a _branch_ _main_ na parte superior esquerda, o nome da pessoa proprietária abaixo e os arquivos na sequência.

### Compartilhando o projeto

Se desejarmos compartilhar o projeto, basta fornecer a _URL_ que consta no endereço da página na parte superior, permitindo que outras pessoas visualizem e colaborem no código.

## Conclusão

É evidente que no _GitHub_, o trabalho colaborativo desempenha um papel significativo. Quando várias pessoas trabalham simultaneamente, fazendo alterações no mesmo código, é possível que uma modificação feita por alguém **não seja automaticamente refletida em nosso computador**.

Como podemos incorporar as alterações feitas por outros colaboradores de volta ao nosso projeto local? Abordaremos isso em seguida.

# Para saber mais: baixando o projeto de outras pessoas

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149693/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149693/question)

Neste curso, aprendemos como criar um repositório e como trazer as alterações feitas por outras pessoas para o nosso computador. Mas e se a gente quiser baixar o repositório de outra pessoa em nossa máquina?

Isso é feito através do clone do repositório do GitHub. Para aprender como criar um clone você pode [acessar a documentação do GitHub sobre o tema](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository), que traz uma explicação detalhada do comando usado.

# Para saber mais: mensagens de commits

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149694/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149694/question)

Não existe uma regra universal para a escrita das mensagens de commit, porém, algumas boas práticas podem ser seguidas para garantir que outras pessoas e até mesmo você no futuro entenda que alterações foram feitas e por quê.

As mensagens dos commits devem ser **simples e objetivas**. A seguir, temos alguma orientações que podem ser seguidas com esse objetivo:

- **Mantenha a mensagem curta e concisa:** a primeira linha da mensagem deve conter, no máximo, 72 caracteres. Caso seja necessária uma descrição adicional, você deve pular uma linha e adicionar os detalhes, como o contexto da mudança realizada.
    
- **Uso de verbo no infinitivo:** é comum que a mensagem do commit inicie com um verbo no infinitivo que descreva a alteração feita, como “adicionar”, “corrigir” ou “atualizar”. Em sequência, são adicionados detalhes concisos da mudança. Por exemplo: “Atualizar texto do título da página”.
    
- **Evite detalhes técnicos:** não inclua detalhes técnicos complexos na mensagem de commit. Esses detalhes podem ser adicionados nos comentários de código ou na documentação.
    

É importante ter em mente que a mensagem do commit é uma forma de documentação do **histórico das mudanças** que ocorreram ao longo do código. A pessoa que ler essa mensagem pode não ter conhecimento do contexto original. Assim, garanta que suas mensagens de commit tenham clareza e sejam suficientemente descritivas.

# Para saber mais: sobre o .gitignore

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149695/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149695/question)

Você pode ter reparado que em nosso projeto inicial temos um arquivo chamado `.gitignore`. Qual será a função dele?

O arquivo `.gitignore` é uma ferramenta essencial ao trabalhar com sistemas de controle de versão como o git. Ele é usado para **especificar quais arquivos e diretórios não devem ser rastreados pelo Git**, ou seja, quais arquivos não devem ser incluídos no repositório.

Isso é útil para evitar que arquivos temporários, arquivos de configuração específicos do ambiente, arquivos de compilação, ou qualquer outro tipo de arquivo desnecessário sejam adicionados acidentalmente ao repositório.

A estrutura do arquivo `.gitignore` é bastante simples. Cada linha do arquivo representa um padrão a ser ignorado. Padrões podem ser nomes de arquivos específicos, tipos de arquivos (por exemplo, todos os arquivos `.log`), ou até mesmo diretórios inteiros.

A seguir temos um exemplo básico de arquivo `.gitignore`:

```shell
# Comentários começam com cerquilha (#)

# Ignorar arquivos temporários
*.tmp

# Ignorar arquivos de log
*.log

# Ignorar arquivos de configuração específicos do ambiente
.env
```

Existe um site chamado [gitignore.io](https://www.toptal.com/developers/gitignore) no qual você pode especificar qual é a tecnologia usada em seu projeto e ele gera automaticamente um arquivo `.gitignore` contendo os principais tipos de arquivos e diretórios que devem ser ignorados nesse contexto.

## Transcrição

Estamos trabalhando no projeto do Allbooks. Considere a seguinte situação: um colega realiza modificações no código e agora queremos incorporar essas mudanças ao nosso computador e ao nosso repositório local. Como podemos realizar esse procedimento?

## Integrando Modificações no Projeto Allbooks

Abrimos nosso projeto no [GitHub](https://github.com/Gabrielle-Ribeiro/allbooks) e simulamos a alteração que alguém teria feito.

Nos arquivos, selecionamos o `README.md`e efetuamos a modificação diretamente no _GitHub_. Acima do arquivo, encontramos várias opções e no canto direito, identificamos um botão com um ícone de lápis para editar o arquivo (ao colocarmos o _mouse_ por cima obtemos a mensagem "_Edit this file_"). Clicamos nele e, antes de explicar o que é o _Allbooks_, adicionamos um texto de "Boas-vindas à API do Allbooks".

> README.md

```csharp
// código omitido

# AllBooks

Boas-vindas à API do Allbooks

// código omitido
```

Subimos um pouco na tela e temos esse botão verde na lateral direita de "_Commit Changes_" ("Confirmar alterações"). Clicamos nesse botão para criar um _commit_ diretamente pelo _GitHub_.

Será exibida uma janela intitulada "_Commit changes_" com os campos "_Commit message_" e "_Extended description_" ("Descrição estendida"). Na parte inferior direita, temos um botão "_Cancel_" e outro denominado "_Commit changes_".

Vamos deixar a mensagem que está aqui (_Update README.md_), mas se preferir, você pode alterar essa mensagem e clicamos no botão verde de "_Commit Changes_".

Retornando à pasta raiz do projeto no _GitHub_, clicando em "_Code_" no menu superior esquerdo. Assim, retornamos ao início do projeto no _GitHub_ e abaixo do botão verde "_Code_" do lado direito, encontramos os dois _commits_, indicando a quantidade de modificações realizadas.

Podemos clicar nele para visualizar o histórico de _commits_, assim como fazemos no terminal, acompanhando as alterações realizadas no projeto ao longo do tempo.

> Update README.md
> 
> Adiciona projeto inicial

O _commit_ mais recente está no topo, correspondendo à atualização no `README`. Ao retornarmos ao _VS Code_, abrimos o terminal e executamos o comando `git log`.

```bash
git log
```

Obtemos como retorno:

> commit 2019f9827c7412e3234031491289f35956ee6c25 (HEAD -> main, origin/main)
> 
> Author: Gabrielle Ribeiro gabrielleribeiro2010@gmail.com
> 
> Date: Mon Dec 18 17:07:48 2023-0300
> 
> Adiciona projeto inicial

Enquanto no _GitHub_ temos dois _commits_, no terminal temos apenas um. É necessário **sincronizar** essas alterações em nossa máquina, utilizando o comando `git pull origin main`.

```css
git pull origin main
```

Este comando traz a mensagem, informando que o arquivo `README` foi modificado e podemos rodar novamente o comando `git log`. Agora podemos verificar que temos os dois _commits_ no nosso histórico.

Inclusive, vamos diminuir um pouco o terminal e abrir o explorador de arquivos. Se abrirmos o arquivo `README.md` do lado esquerdo, podemos verificar que aquela alteração realmente veio para a nossa máquina e agora os dois repositórios estão sincronizados.

> README.md

```bash
# AllBooks

Boas-vindas à API AllBooks!
```

Esse é o fluxo de trabalho que geralmente temos quando usamos o _GitHub_: temos um projeto no nosso computador, fazemos alterações no nosso código do nosso projeto, criamos um _commit_, enviamos essas alterações para o nosso _GitHub_, para o nosso repositório remoto com o comando `git push`.

Outras pessoas vão trabalhando colaborativamente no nosso projeto e, caso precisemos atualizar o nosso repositório local com o que está no _GitHub_, usamos o comando `git pull` para trazer essas alterações novamente para a nossa máquina.

## Conclusão

Esse representa o fluxo de trabalho padrão. Em seguida, exploraremos mais detalhadamente alguns conceitos que não foram abordados em profundidade, como o significado de uma _branch_, a função da _main_ e a estruturação do nosso projeto no _Git_.

#   
Faça como eu fiz: criando repositórios e enviando o projeto para o GitHub

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149698/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149698/question)

Nesta aula criamos um repositório remoto no GitHub, além de um repositório git local no projeto no computador próprio. Depois conectamos os dois repositórios e subimos o projeto local para o GitHub.

Você já fez esta atividade? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a prática, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149698/opinion)

Para criar um repositório remoto no GitHub, você deve [abrir o site do GitHub](https://github.com/) e fazer login na sua conta. Depois clique no ícone mais à direita no canto superior da tela.

Isso abrirá um menu lateral. Clique na opção de _Your repositories_ e abrirá uma página na qual serão listados seus repositórios.

Clique no botão verde na lateral direita escrito _New_. Isso vai abrir um menu para a criação de um novo repositório. Você deve preencher o campo de _Repository name_ com o nome do seu projeto, você pode escrever _allbooks_. As demais configurações devem ser deixadas como estão.

Clique no botão verde inferior escrito _Create repository_ e seu repositório remoto será criado.

Para criar um repositório Git localmente em seu computador e fazer as devidas configurações, abra seu projeto no VSCode, abrir o terminal e executar os seguintes comandos:

```csharp
git init
git branch -M main
```

Agora volte no repositório do GitHub e copie a url que se encontra no campo de _Quick setup_.

![Imagem com print do GitHub do campo de Quick setup do repositório. Está marcado com um campo em vermelho a url do repositório.](https://cdn3.gnarususercontent.com.br/3584-devops/img2.png)

De volta ao VSCode, digite no terminal o seguinte comando, substituindo a URL pela que você acabou de copiar:

```csharp
git remote add origin URL
```

Isso conectará o repositório local em seu computador com o remoto do GitHub.

Agora você pode criar um commit para criar um registro do projeto no Git, usando os seguintes comandos:

```sql
git add .
git commit -m “Adicionando projeto inicial”
```

Agora execute o comando a seguir para enviar as alterações para o GitHub:

```css
git push origin main
```

E voilá! O GitHub estará guardando os arquivos do seu projeto.

# Hora da prática

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149699/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149699/question)

Vimos que o Git é um sistema de controle de versão distribuído amplamente adotado por equipes de desenvolvimento de software por permitir o rastreamento preciso de alterações e o trabalho colaborativo. Por sua vez, o GitHub é uma plataforma de hospedagem baseada na web que utiliza o Git para fornecer serviços adicionais, como controle de acesso, rastreamento de problemas e integração contínua.

Em conjunto, Git e GitHub constituem uma ferramenta essencial para a colaboração eficiente e o desenvolvimento de software de alta qualidade, possibilitando que equipes possam atuar de maneira coordenada mantendo um histórico das alterações realizadas no projeto em construção.

Para que você possa praticar ainda mais, preparamos uma lista de atividades (não obrigatórias) sobre os comandos e conceitos que analisamos ao longo dessa aula. Bora avançar nos estudos sobre o Git!?

_Atividades_

1. Crie um diretório chamado "NovoProjeto" e inicie um repositório Git dentro dele.
2. Dentro do repositório criado, crie um arquivo de texto chamado "README.md".
3. Realize o commit e inclua a mensagem “Primeiro commit”.
4. Abra o arquivo "README.md" e adicione algumas linhas de texto.
5. Realize um novo commit com a mensagem "atualização do README".

Caso necessite de ajuda para resolver as atividades, basta clicar na seção “Opinião da pessoa instrutora” para acessar instruções sobre como implementar as soluções.

## Transcrição

Até o momento, nós estamos trabalhando somente com a _branch_ "main", mas ainda não compreendemos muito bem o que _branch_ significa. O sistema de versionamento Git nos apresenta essa ideia de _branches_ que, traduzindo, significa **ramificações**. Isso permite que nós criemos várias linhas de desenvolvimento.

Esse recurso é útil quando trabalhamos com um projeto mais robusto, onde teremos várias funcionalidades e adições que são feitas ao longo desse projeto. E é importante que novas alterações que fazemos nesse projeto sejam feitas de forma isolada, porque na nossa _branch_ principal, a chamada main, normalmente temos um código que já estará pronto para a produção. Isso significa que ele já estará pronto para ser usado pela clientela. Portanto, não podemos alterar aquele código sem ter a garantia de que isso não causará nenhum problema.

As _branches_ fornecem para nós esse recurso, que permite que criemos diversas linhas de desenvolvimento, sem que uma afete o que é feito na outra. Vamos aprender, na prática, como podemos criar uma nova _branch_.

Abrindo nosso projeto no VS Code e abrindo o Terminal, podemos rodar o comando `git branch`. Esse comando mostra para nós quais são todas as ramificações presentes no nosso projeto. No nosso caso, só temos a main, que definimos no início.

Agora, imagine a seguinte situação: queremos adicionar alguns testes na nossa aplicação, e não vamos adicionar isso diretamente na _branch_ principal. Criaremos uma nova _branch_ para adicionar essa parte do projeto.

Para isso, ainda no Terminal usamos o comando `git checkout -b` e passamos o nome da nossa _branch_, que chamaremos de "testes". O `checkout`, altera para essa nova _branch_, e o `-b` cria essa _branch_ com o nome que especificamos.

```css
git checkout -b testes
```

Aparecerá uma mensagem dizendo "_Switched to a new branch 'testes'_" (Mudou para a nova _branch_ 'testes'). Ao rodarmos novamente o comando `git branch`, percebemos que estão listadas duas _branches_: a "main" e a "testes". Agora, vamos adicionar a essa nova _branch_ os nossos arquivos de teste, que estarão disponibilizados em uma atividade.

Podemos abrir o nosso projeto usando o explorador de arquivos do nosso sistema operacional, no meu caso, o Windows. Vamos abrir a pasta "src" (_source_) e, dentro dela, colaremos a pasta "test", que foi disponibilizada na atividade dessa aula.

A próxima etapa é abrir a nossa pasta "data" e colar o arquivo chamado `teste.json`. Feito isso, podemos retornar para o nosso VS Code, diminuir um pouco o tamanho do Terminal e abrir o explorador de arquivos, à esquerda. Nele, notamos que temos a pasta "test" e, dentro da pasta "data", temos o `teste.json`, ambos indicados pelo VS Code em cores diferentes. Fechando o explorador, retornaremos ao Terminal para rodarmos rapidamente esses testes, com o comando `npm test`.

> [Animação de carregamento com sons de circuitos]

Esse processo pode demorar um pouco, mas recebemos alguns dados após rodarmos o comando `npm test`:

> ```markdown
> PASS src/test/userService.spec.js
> 
> **Test Suites:** 1 passed, 1 total
> **Tests:**       11 passed, 11 total
> **Snapshots:**   0 total
> **Time:**        0.413 s, estimated 1 s
> ```

Temos uma suite de teste que passou, com todos os 11 testes passando corretamente. Vamos pressionar "Ctrl + C" para executar o comando para sair dessa parte de informações e, em seguida, vou executar o comando `cls` para limpar a tela.

Agora podemos subir essa nova _branch_ para o nosso GitHub. Então, vamos rodar aqueles mesmos comandos que já estamos acostumados. Começando com o `git status`, que mostra que existem esses dois novos arquivos. Depois rodamos o nosso `git add .`, seguido do `git status` novamente para ver se deu certo. Recebemos a mensagem de commit com os arquivos na cor verde, portanto, deu certo.

Agora, criaremos o nosso commit com o comando `git commit -m "Adiciona testes"`, passando o texto entre aspas, para adicionar o texto do commit. Por fim, podemos rodar o comando `git push origin testes`. Assim, ao invés de mandarmos para o `origin main`, mandamos para uma nova _branch_ que acabamos de criar.

Tudo certo! No final do processo, até aparece uma mensagem no terminal informando que uma nova _branch_ foi criada e recebeu esses arquivos. Agora podemos voltar para o nosso navegador e abrir o nosso projeto no GitHub.

Podemos atualizar a página e, na parte superior, aparece uma mensagem falando que essa _branch_ "testes" teve um _push_ recente alguns segundos atrás. Abaixo dessa mensagem, no canto superior esquerdo da nossa lista de arquivos, onde está escrito "main", podemos clicar para ver a lista de _branches_.

Então, temos a nossa "main", que é a nossa _branch_ principal, e a "testes". Se clicarmos em "testes", abrimos a _branch_ "testes", e podemos abrir a pasta "src" (_source_), onde encontramos a pasta "test", com nossos testes.

## Transcrição

Criamos a nossa nova branch de testes, adicionamos esse código novo no nosso projeto e agora vamos entender um pouco mais, de uma forma mais visual, como é o funcionamento das branches.

![Esquema de representação de uma branch. Sobre um fundo escuro temos a palavra "main" escrita à esquerda. Ao seu lado direito há três círculos azul-turquesa conectados por linhas retas brancas e alinhados horizontalmente.](https://cdn1.gnarususercontent.com.br/1/795715/bd8d4f91-63cc-484a-b550-2b1036c44568.png)

Inicialmente, temos a branch `main`, a nossa branch principal. Na imagem acima, cada círculo ao lado da `main` representa um commit que fizemos no repositório. Trabalhamos na `main`, adicionando commits e, no momento, decidimos criar uma nova branch para adicionar os testes, resultando em uma nova ramificação do projeto.

![Esqueme de representação da criação de uma segunda branch. A imagem anterior foi complementada. Após o terceiro círculo azul da linha "main", sai uma linha para direita que depois sobe e cria uma nova linha horizontal branca à direita, formando um tipo de "Z" ao contrário. Sobre essa nova linha branca estão mais dois círculos azul-turquesa conectados. À esquerda dessa nova linha temos a palavra "testes", indicando o nome dessa nova branch.](https://cdn1.gnarususercontent.com.br/1/795715/8367febe-012c-4f75-8904-8e069c6d901a.png)

Agora, temos duas linhas de desenvolvimento independentes uma da outra. Isso significa que tudo o que fizermos na `main` não vai afetar a branch `testes` e todas as mudanças que adicionarmos em `testes` não afetará diretamente o código que está salvo na `main`. Um detalhe interessante de notar é que a branch `testes`, como foi criada a partir da `main`, trará tudo que veio anteriormente da `main` em seu histórico.

Portanto, os três commits iniciais que tínhamos na `main`, quando estivermos na branch `testes` e dermos um `git log`, eles aparecerão para nós. Dessa forma, podemos continuar trabalhando tanto na branch `testes` quanto na `main`, adicionando nossos commits. E, caso achemos necessário, podemos criar uma nova branch para adicionar uma nova funcionalidade no projeto. Podemos criar quantas ramificações quisermos no nosso projeto, conforme acharmos necessário.

Quais são as **vantagens** de trabalhar com Git e GitHub utilizando as branches? Elas trarão para nós, no nosso trabalho, uma maior **flexibilidade**. O nosso projeto ficará mais **organizado**, porque teremos separado o que estamos trabalhando em cada branch separadamente.

Mesmo quando temos um grupo de pessoas trabalhando em conjunto, cada uma pode ter a sua própria branch para trabalhar na sua própria funcionalidade, facilitando a **colaboração**. Isso trará também uma maior **facilidade para manutenção do nosso código**. Caso apareça algum _bug_ (erro), podemos criar uma nova branch para corrigir esse erro. E o principal benefício é o **isolamento de mudanças**.

> **Vantagens do uso de branches (trabalhando com o Git e GitHub)**
> 
> > Flexibilidade, organização e colaboração;
> 
> > Facilidade de manutenção de código;
> 
> > Isolamento de mudanças.


#   
Para saber mais: se aprofundando em branches

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149702/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149702/question)

As branches são um recurso precioso quando trabalhamos em sistemas de versionamento de código. Em sistemas Git, as ramificações foram implementadas de uma forma leve e que torna sua criação extremamente rápida.

Caso você tenha interesse em entender melhor os detalhes técnicos por trás das branches e do seu funcionamento você pode [acessar a documentação oficial do Git sobre o tema](https://git-scm.com/book/pt-br/v2/Branches-no-Git-Branches-em-poucas-palavras).

## Transcrição

Nós entendemos como funcionam as branches e criamos uma nova branch para adicionar nossos testes. Agora que tudo está funcionando corretamente e finalizamos esse trabalho, queremos trazer novamente esse código que está na branch de testes para integrar esse código com a nossa branch principal.

## Mesclando códigos de duas branches

Com nosso projeto aberto no VS Code, abriremos nosso terminal e faremos essa integração do código da branch de testes para a branch "main". Esse processo é chamado de _**merge**_ (mesclagem), que é a mesclagem do código que está em algum lugar, em alguma branch, para uma branch de destino.

No terminal, rodamos o comando `git branch`. Como ele, percebemos que estamos na branch de testes e precisaremos mudar para a branch que queremos que receba o código. Então, vamos rodar o comando `git checkout main` para mudarmos para a branch "main". Depois limpamos o terminal, com o comando `cls`, e precisamos rodar o comando para realizar esse _merge_, que é o comando `git merge nome-da-branch-origem`, ou seja, passamos o nome da branch de onde vamos trazer esse código, no caso, "testes".

```sql
git merge testes
```

Realizamos nosso _merge_, apareceu a mensagem informando que trouxemos aqueles commits e o código que adicionamos. Inclusive, podemos rodar o comando `git log` para observarmos que agora, na "main", temos aquele commit de adição de testes. Ao abrirmos o explorador de arquivos do VS Code, clicando no ícone superior da barra lateral esquerda (ou com o atalho "Ctrl + Shift + E"), conseguimos reparar que a pasta de "test" está na "main".

### Passando essas alterações para o GitHub

Podemos fechar o explorador e voltar ao terminal para fazermos o _push_ dessas alterações, subindo essa modificação para o GitHub. Para isso, vamos rodar o comando `git push origin main`. Subimos esse commit e podemos abrir nosso projeto na página do GitHub.

Atualizamos a página e trocamos para a branch "main". Portanto, clicamos em "testes", na parte superior esquerda da lista de arquivos, para abrir a lista de branches, e depois selecionamos "main". Ao abrirmos a pasta "src", vemos que a pasta "test" já está nessa branch.

## Excluindo uma branch

Voltamos para o VS Code, onde temos essas duas branches. Porém, não vamos mais usar a branch de testes, porque já finalizamos o trabalho que estávamos fazendo nela. Portanto, uma boa prática que podemos ter é excluir essa branch, já que ela não será mais usada.

Para isso, vamos limpar nosso terminal. Para excluir uma branch localmente, rodamos o comando `git branch -D nome-da-branch`, lembrando de usar o "D" maiúsculo. No caso, rodamos o `git branch -D testes`. Feito isso, aparece uma mensagem informando que a branch de testes foi excluída.

Agora precisamos excluí-la também no nosso repositório remoto, no GitHub. Para isso, usamos o comando `git push nome-do-repositório nome-da-branch --delete`. O nome do nosso repositório é `origin` e da branch que queremos excluir é `testes`, sendo assim, o código fica:

```perl
git push origin testes --delete
```

Apareceu a mensagem falando a branch de testes foi deletada do GitHub. Ao voltarmos para o GitHub, ainda estamos na pasta "src" da branch "main", então clicaremos no botão "Code", que dica no canto superior esquerdo, abaixo da logo do GitHub, voltando para página principal do projeto.

Clicaremos no botão com a lista de branches, no canto superior esquerdo, acima da lista de pastas e arquivos do repositório, onde está escrito "main" no momento. Com a lista de branches aberta, verificamos que a branch de testes já não está mais presente, ela foi excluída.

## Conclusão

Através do _**merge**_, integramos o código de uma branch a outra branch. Vamos entender visualmente o que aconteceu:

![Esquema gráfico de funcionamento da mesclagem (merge) usando como base a imagem do último vídeo. Diferente da imagem anterior, a branch "main", após a criação da branch "testes", continuou em uma linha horizontal branca que passa abaixo da branch "testes". Nessa continuação aparecem mais quatro círculos azul-turquesa, representando quatro commits que foram feitos em "main", totalizando sete commits. Entre o sexto e o sétimo commit da branch "main", acontece a mesclagem com a branch "testes", representado por uma linha branca que liga o final da branch "testes" com o ponto indicado da branch "main".](https://cdn1.gnarususercontent.com.br/1/795715/353ac048-7d9f-46f6-8de5-a2eac89f1fc9.png)

Tínhamos a nossa "main", onde estávamos trabalhando diretamente, e criamos a nossa branch de "testes". Realizamos os commits, representada na imagem por círculos azul-turquesa, ou seja, cada círculo é um commit. Após finalizarmos o trabalho na branch de testes, fizemos o _merge_ para a "main" e podemos continuar nosso trabalho tranquilamente.

## Transcrição

Vimos que o uso de branches é muito comum no desenvolvimento, pois é uma boa prática. Pensando nisso, existem modelos de desenvolvimento padrão que trazem diretrizes de como utilizar essas branches. Vamos falar nesse vídeo de dois modelos populares.

## Entendendo o GitFlow

O primeiro deles é o _**GitFlow**_, usado em projetos de software mais robustos, com equipes maiores. Nesse modelo de desenvolvimento, temos algumas branches específicas, com duas branches principais que existirão ao longo de todo o ciclo de desenvolvimento do software. No caso do All Books, teremos essa branch enquanto estivermos desenvolvendo a nossa API. Vamos entender um pouco mais sobre elas.

![Gráfico de fluxo de versionamento de software utilizando o modelo GitFlow. Na lateral esquerda há uma seta vermelha apontando para baixo com o rótulo "time", ou seja, tempo. Da esquerda para direita há cinco branches, representadas por linhas verticais quase transparentes, são elas: "Feature branches", "Develop", "Release branches", "Hotfixes" e "main". Pontos azuis, verdes e brancos representam commits, com setas indicando a direção do fluxo de desenvolvimento. À direita da branch "main" há tags de versões, mostrando pontos de lançamento no branch principal.](https://cdn1.gnarususercontent.com.br/1/795715/2c3af121-0c3e-44b8-9745-c3a7e45c2d62.png)

A primeira delas é a branch "_"main"_", que traz todo o código estável, pronto para ser produzido e usado pelas pessoas usuárias. A segunda branch que temos é a branch "_**Develop**_" (Desenvolvimento), que contém todo o código-base para o nosso desenvolvimento e para a criação de outras branches.

Supondo que no All Books queremos implementar uma nova _feature_ (funcionalidade): adicionar uma imagem na hora de fazer uma avaliação de um livro. Para isso, criaremos um novo tipo de branch, que é uma **branch de _feature_**. Essa branch de _feature_ será criada a partir da branch "_Develop_" e, nela, criaremos nossos commits para desenvolver essa funcionalidade.

Por exemplo, criaremos um commit que permite fazer um upload da imagem, salvando essa imagem no banco, e outro commit para fazer a requisição na API que trará essa imagem de volta quando necessário. Faremos todo o passo a passo para a implementação dessa funcionalidade.

Podemos ter várias branches de _feature_ existindo em paralelo ao longo do desenvolvimento. Então, temos a funcionalidade que estamos trabalhando, como a de inclusão de imagens, e podemos ter outra pessoa da equipe trabalhando em outra funcionalidade, como reportar algum abuso ou adicionar uma avaliação negativa. Elas serão desenvolvidas em paralelo ao longo do tempo.

Finalizado o desenvolvimento da funcionalidade, vamos passar esse código da branch de _feature_ para ser novamente integrado à "_Develop_". Após desenvolver uma série de funcionalidades, queremos entregar essas funcionalidades para as pessoas usuárias. A partir disso, criamos um novo tipo de branch, que são as **branches de _release_** (liberação).

As branches de _release_ vão realizar testes mais robustos e verificar se, de fato, o nosso código está pronto para ser entregue para as pessoas usuárias. Caso encontremos alguns problemas durante essa avaliação do código na _release_, esse código volta para a "_Develop_", onde corrigimos esses problemas e depois levamos de volta para a branch de _release_.

Assim que está tudo pronto na _release_, teremos uma nova versão do nosso software. Pegamos esse código que está na branch de _release_ e integramos ele na "main", para que a pessoa usuária possa usufruir dessas novas funcionalidades.

A partir daí, temos na "main" toda a questão do versionamento, que no GitHub é feito por _tags_. Podemos marcar as versões do software como, por exemplo, 0.1, 1.0 e assim sucessivamente. Não vou entrar em detalhes em relação a essa questão de _tags_, mas teremos uma atividade nesse curso que trará mais detalhes disso para você.

Caso nossas pessoas usuárias encontrem algum bug crítico em produção, como, por exemplo, não conseguirem usar o All Books e ocorreu um erro de segurança, não conseguimos mais acessar o banco de dados e precisamos corrigir isso rapidamente. Então, criamos um novo tipo de branch, que é uma **branch de _hotfix_**, resolvemos esse erro e depois integramos esse código na "main" e na "_Develop_".

É importante ressaltar que as branches de _hotfix_ são somente para esses erros que impedem a pessoa usuária de usufruir do nosso software. Então, se temos um bug de um botão torto, algo que não impede o uso do software, não criamos essa branch de _hotfix_.

Portanto, esses três tipos de branch, _feature_, _release_ e _hotfix_, são branches de curta duração, que existem somente enquanto resolvemos a questão determinada para elas. E, observando o modelo do GitFlow, temos uma seta vermelha na lateral esquerda escrito "Time", representando o tempo que está correndo enquanto desenvolvemos o nosso projeto.

## Conhecendo o modelo _Trunk Based_

Outro modelo de desenvolvimento muito comum é o _**Trunk Based**_. Nele, a premissa é que teremos uma branch para todo o desenvolvimento do projeto. Todas as pessoas envolvidas vão colocar código direto na branch principal, ou seja, na "main". Eventualmente, podem ser criadas branches de curta duração.

Caso, no All Books, queiramos adicionar uma funcionalidade e julguemos necessário a criação de uma nova branch, podemos fazer isso, mas o comum é que todo o código seja escrito e colocado direto na "main". Para isso funcionar e garantirmos que essa adição de código novo não vai quebrar o código que já existe na "main", precisamos ter uma suite robusta de testes. Isso porque na "main" precisamos de um código estável e pronto para ser entregue à pessoa usuária.

Portanto, toda vez que houver essa integração, nossa suite de testes irá testar nosso código para garantirmos que nada ruim vai acontecer: sem bugs que possam quebrar nada que funciona. Normalmente, esse modelo de desenvolvimento é usado para projetos ou times menores.

Nesse tipo de desenvolvimento, o Trunk Based, aplicamos algumas práticas de DevOps, como a integração contínua e o _deploy_ contínuo.

A escolha entre GitFlow e Trunk Based vai depender das necessidades e do contexto específico do seu projeto e equipe. Vamos explorar brevemente as características principais de cada abordagem:

## GitFlow

- **Modelo de branches:** usa um modelo de ramificações mais complexo, com branches específicas para features, releases, hotfixes, etc.
    
- **Gerenciamento de versão:** facilita o gerenciamento de versões e releases, pois existem branches dedicadas para essas finalidades.
    
- **Isolamento de recursos:** permite o isolamento de recursos em desenvolvimento, o que pode ser útil para projetos grandes ou com múltiplas equipes.
    
- **Ciclo de vida claro:** oferece um ciclo de vida claro para features, com branches dedicadas.
    
- **Estabilidade em Releases:** fornece maior estabilidade nas versões de release, pois o desenvolvimento é mesclado em branches específicas para esse fim.
    

## Trunk Based

- **Branches Simplificadas:** usa um modelo de ramificação mais simples, geralmente com apenas uma branch principal.
    
- **Entregas Contínuas:** favorece a entrega contínua, pois as modificações são integradas diretamente na branch principal.
    
- **Menos sobrecarga:** reduz a sobrecarga associada à criação e manutenção de múltiplas branches.
    
- **Retroalimentação rápida:** proporciona feedback rápido, pois as mudanças são integradas mais frequentemente.
    

## Assim, como escolher?

Para escolher entre os dois modelos de desenvolvimento, você deve levar em consideração os seguintes aspectos:

- **Tamanho do projeto:** para projetos menores, o Trunk Based pode ser mais adequado, enquanto projetos maiores podem se beneficiar da estruturação do GitFlow.
    
- **Estratégia de Release:** se a estratégia de versionamento e lançamento for uma prioridade, o GitFlow pode ser mais apropriado.
    
- **Ciclo de desenvolvimento:** se sua equipe favorece entregas mais frequentes e feedback rápido, o Trunk Based pode ser preferível.
    
- **Complexidade do processo:** o GitFlow fornece uma estrutura mais complexa, enquanto o Trunk Based é mais simples. Leve em consideração a capacidade da sua equipe de lidar com processos mais complexos.
    
- **Colaboração e Comunicação:** considere como a equipe colabora e se comunica. O GitFlow pode fornecer uma estrutura mais clara para colaboração em grandes equipes.
    

Em última análise, muitas equipes optam por **personalizar esses modelos** para atender às suas necessidades específicas, combinando elementos de ambos. **Não há uma abordagem única que seja melhor para todos os casos.**

Experimentar ambas em projetos menores ou em ambientes de desenvolvimento paralelo pode ajudar a determinar qual abordagem funciona melhor para sua equipe e projeto.

# Para saber mais: criando tags no Git

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149704/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149704/question)

No sistema de versionamento Git, temos a funcionalidade de tags. Elas servem para marcar pontos específicos no desenvolvimento do software, sendo normalmente usadas para indicar as releases (v1.0 e assim por diante).

> Relembrando: uma release (em português: lançamento) refere-se a uma versão específica e identificável de um software que é disponibilizada para os usuários finais.

Para criar uma nova tag, por exemplo para a versão 1.4 do seu software, você pode rodar o comando:

```css
git tag -a v1.4 -m “Versão 1.4”
```

Nesse comando, com a tag `-a` você define a versão, e com a tag `-m` você especifica uma mensagem para essa tag.

Normalmente, você precisa enviar explicitamente as tags para o servidor remoto. Para isso execute o comando:

```perl
git push origin v1.4
```

Para listar todas as tags do seu repositório, você pode usar o comando:

```undefined
git tag
```

Caso queira entender mais sobre o uso de tags no Git, você pode [consultar a documentação oficial do assunto](https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Criando-Tags).

#   
Faça como eu fiz: criando uma branch para adição de alterações

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149707/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149707/question)

Criamos uma nova branch chamada `testes`, adicionamos o código de testes disponibilizado e criamos um merge dessa nova alteração na branch `main`. Depois, apagamos a branch `testes`, tanto no repositório local, quanto no remoto.

Você já fez esta atividade? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a prática, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149707/opinion)

Com o projeto AllBooks aberto em seu VSCode, abra o Terminal e rode o seguinte comando para criar e alterar para uma nova branch chamada `testes`:

```css
git checkout -b testes
```

Você pode verificar se está mesmo na branch `testes` rodando o comando:

```undefined
git branch
```

Abra o diretório em que você descompactou os arquivos de teste. Copie a pasta chamada `test`. Dentro do projeto AllBooks, cole essa pasta dentro da pasta `src`.

Agora volte para o diretório em que os arquivos de teste estão descompactados, copie o arquivo chamado `teste.json`. Dentro do projeto AllBooks, abra a pasta `src`, depois a pasta `data` e cole esse arquivo.

Pronto! Para verificar se os testes estão funcionando, você pode voltar para o VSCode, abrir o Terminal e executar o seguinte comando:

```bash
npm test
```

Após executar os testes e com tudo funcionando corretamente, chegou a hora de integrar esse código na branch `main`, através de um merge.

Para isso, você deve voltar para a branch `main` com o comando:

```css
git checkout main
```

Agora execute o seguinte comando, para realizar o merge:

```sql
git merge testes
```

Voilá! Temos os códigos de testes integrados em nossa `main`. Agora podemos apagar a branch `testes` localmente com o comando:

```undefined
git branch -D testes
```

E também apagá-la do repositório remoto com o comando:

```perl
git push origin testes --delete
```

## Transcrição

Ao trabalhar em um contexto de _branches_ e de times colaborativos, pode ocorrer situações em que uma pessoa edita um código ou arquivo e outra pessoa altera o mesmo arquivo. E o que acontece quando tentamos unir essas alterações? Bem, um conflito é gerado. Agora, vamos aprender como lidar com conflitos.

### Alterando um trecho de código

Vamos abrir o nosso projeto no GitHub e fazer uma alteração em um arquivo diretamente por lá. Vamos abrir a pasta `source` e selecionar o arquivo `server.js` e, no canto superior direito, temos um botão com um ícone de lápis para habilitar a edição do arquivo. Vamos clicar nesse botão.

Nesse servidor, descemos até a linha 21 (`console.log("API disponível em http://localhost:8000")` e alteramos o texto de "API disponível". Trocaremos o texto para `"Acesse essa API em http://localhost:8000"`). Criaremos o nosso `commit`, subindo um pouco a tela e clicando no botão verde `Commit changes…` no canto superior direito. Deixaremos a mensagem como está e criaremos o nosso _commit_ clicando no botão `Commit changes`.

Após o _commit_ ser criado, retornamos à raiz clicando em `code`, no menu superior do GitHub. Em seguida, voltamos para o nosso VS Code e alteramos o mesmo arquivo, na mesma linha.

Vamos abrir o Explorador de arquivos no canto superior esquerdo, clicar na pasta `source` e abrir o arquivo `server.js`. Na linha 21 do nosso código, trocamos o texto `"API disponível em"` para `"API disponível através da URL"` e adicionamos um novo `console.log`.

Acima da linha 21, damos um `Enter`, fazemos uma quebra de linha e escrevemos `console.log`, abrimos parênteses e entre aspas, escrevemos `"Boas-vindas à API do AllBooks"`. Após o arquivo ser salvo, fechamos e abrimos o nosso terminal.

```javascript
server.listen(8000, () => {
    console.log("Boas-vindas à API do AllBooks")
    console.log("API disponível através da url http://localhost:8000")
})
```

Vamos tentar realizar um _commit_.

> Lembrando que o nosso repositório remoto tem uma alteração e está **desincronizado** com o nosso repositório no GitHub.

Rodamos `git status`, seguido de `git add .` e `git commit -m "Altera o server.js"`. Tentamos dar o `git push origin main`, mas o GitHub retorna uma **mensagem de erro**, dizendo que falhou para dar o _push_ nas alterações, pois o nosso repositório remoto tem um trabalho que não temos localmente.

Rodamos o comando `git pull origin main` que traz as alterações para a nossa máquina. As alterações que fizemos diretamente pelo GitHub são trazidas, mas aparece uma **mensagem de conflito**, indicando um conflito de merge no arquivo `server.js`.

O GitHub não conseguiu mesclar esse arquivo automaticamente e precisamos consertar esses conflitos e, após, comitar o resultado da resolução desses conflitos.

### Lidando com conflitos

Abrimos o nosso explorador de arquivos e podemos ver que no próprio VS Code, ele indica na cor vermelha e um sinal de exclamação após o nome do arquivo `server.js`, apontando que há algo errado nesse arquivo. Clicamos no arquivo e ele abre diretamente no trecho em que está ocorrendo o erro.

```cpp
<<<<<< HEAD (Alteração Atual)
    console.log("Boas-vindas à API do AllBooks")
    console.log("API disponível através da url http://localhost:8000")
======
    console.log("Acesse essa API em http://localhost:8000")
>>>>>> 94ff596495ff824746b25ceb75cbf23b7f9fb3a2 (Alteração da Entrada)
})
```

Vamos entender o que está acontecendo: Temos o nosso `HEAD` e os sinais de menor que (`<`), indicando a nossa alteração atual, que é o que temos localmente, as alterações que fizemos diretamente pelo VS Code.

Na linha 24 temos a indicação com os sinais de igual (`=`) e ele separa o que temos no GitHub, que foi a alteração de `"Acesse essa API em http://localhost:8000"`. Sempre que aparecer um conflito, temos algumas opções do que fazer com isso:

- Podemos **aceitar a alteração atual**, que é manter o que já temos no nosso computador e excluir o que veio do GitHub.
- Podemos **aceitar a alteração de entrada**, que é o que veio do GitHub, e descartar o que estava no nosso computador.
- Podemos **aceitar as duas alterações** e manter as duas no nosso código.

> Quando você se deparar com um conflito, fica a seu critério analisar a situação para entender qual é a melhor maneira de resolvê-lo.

Às vezes, o mais correto será apagar algum trecho de código, manter outros trechos ou manter tudo. Isto vai variar de caso a caso, uma análise feita pela pessoa que está lidando com o conflito.

Optamos por manter o que trouxemos do GitHub. Clicamos em "Aceitar alteração de entrada", logo acima do `HEAD` e, caso não quiséssemos lidar com isso com essas opções do próprio VS Code, poderíamos apagar aquelas linhas, lembrando sempre de apagar as linhas de indicação do conflito, aquelas com sinais de maior que, menor que e o igual.

Após resolvermos o conflito e o arquivo ser salvo, precisamos criar um _commit_ de resolução. Rodamos no terminal o comando `git commit` sem mensagem e, em seguida, o `git add .` para adicionar essa alteração que fizemos de resolução de conflitos. Rodamos o comando `git commit`, mas sem nenhuma mensagem.

Ao pressionarmos o `Enter`, o próprio GitHub cria automaticamente essa mensagem de _merge_, indicando que fizemos um _merge_ que resolve esses conflitos. Ele traz uma mensagem com comentários.

```bash
# Conflicts:
#       src/server.js
#
# It looks like you may be committing a merge.
# If this is not correct, please run
#       git update-ref -d MERGE_HEAD
# and try again.
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
```

Podemos deixar essa mensagem do jeito que ela está ou, caso seja necessário, alterar a mensagem.

Optamos por mantê-la como está e, para sair desse editor, digitamos ":qa", que nos permite sair do editor e salvar essas alterações. Mas pode ser que esse comando seja diferente no computador usado.

O Git mostra que teve esse _commit_ com essa mensagem de _merge_ e agora podemos, finalmente, rodar o nosso `git push origin main`. Subimos o nosso arquivo e podemos voltar para o navegador, para o nosso projeto, atualizamos a página e entramos no histórico de _commits_ do GitHub, onde está escrito `Commits`, com o número de _commits_ já realizados ao lado de um ícone de relógio.

Ele traz tanto o _commit_ "Altera o servidor" quanto o _commit_ de _merge_ de resolução do conflito.

## Transcrição

Durante o desenvolvimento de um software, como é o caso do nosso `AllBooks`, existem várias tarefas que devem ser realizadas, como:

- Adição de novas funcionalidades
- Resolução de bugs
- Criação de documentações
- Configurações de ambiente

Todas essas tarefas colaboram para a construção do software. E o GitHub fornece uma ferramenta para organizar melhor essa divisão de tarefas, os passos que precisamos seguir e o que precisa ser feito em cada tarefa. Esse recurso é chamado de _Issues_ (Questões ou Problemas).

### Criando uma _Issue_ no GitHub

Vamos abrir nosso projeto no GitHub, e no menu superior do GitHub, existe uma opção chamada `Issues`. Vamos clicar e criar uma nova _issue_ para solicitar a alteração de algo do nosso projeto. No canto direito, há um botão verde chamado `New Issue`, podemos clicar nele. O GitHub apresentará algumas opções que precisamos preencher.

O primeiro campo é um título (`Add a title`), que descreve brevemente a tarefa que queremos realizar. No caso do nosso projeto `AllBooks`, vamos solicitar a **alteração de uma rota**. Queremos alterar a palavra "registrar" para "cadastrar". Então, o título será: "alteração de rota".

O próximo campo é um campo de descrição (`Add a description`), onde fornecemos mais detalhes sobre o que deve ser feito e quais alterações serão realizadas.

Neste caso, escrevemos: "Alteração de rota de registrar para cadastrar". Podemos adicionar diversas outras informações, como critérios de aceitação, que são requisitos que devem ser atendidos para que a _issue_ seja considerada concluída.

No canto lateral direito, temos algumas opções onde podemos atribuir um responsável para resolver a _issue_ (`Assignees`). A Gabrielle vai adicionar a si própria como responsável, mas em um projeto colaborativo, outras pessoas podem ser adicionadas.

Também temos o recurso de `Labels` (rótulos), que descrevem a _issue_ e sua categoria (se é uma funcionalidade, documentação, resolução de bug etc).

O próprio GitHub oferece algumas opções de _labels_, mas vamos criar uma nova. No campo onde está escrito `Filter Labels`, escreveremos "Modificação".

O GitHub sugere a opção de criar uma nova _label_. Clicamos em `Create new label "modificação"`, e temos uma pré-visualização do novo rótulo. Podemos alterar a cor, adicionar uma descrição com mais detalhes do que significa essa _label_. Depois de salvar, a _label_ é selecionada. Caso você queira adicionar alguma das _labels_ da lista, basta clicar nela.

Existem outras opções, mas não vamos entrar em detalhes sobre cada uma delas. Para criar a nossa _issue_, desceremos um pouco na página e clicaremos no botão verde `Submit New Issue`. A nossa _issue_ está criada. Temos o título, um número de identificação da _issue_ que é único, e começa com o símbolo `#`.

Temos a descrição que escrevemos e todos os detalhes que adicionamos. Um recurso muito interessante das _issues_ é a opção de adicionar comentários.

Quando trabalhamos em conjunto com outras pessoas, quem cria a _issue_ nem sempre será quem vai resolvê-la, e podem surgir dúvidas ao longo do caminho.

Caso alguém tenha alguma dúvida em relação a essa _issue_, pode adicionar um comentário (`Add a comment`) fazendo uma pergunta, pedindo uma explicação mais detalhada, gerando um diálogo que fica documentado no GitHub. Teremos todo o registro do que está acontecendo no nosso projeto.

Portanto, esse recurso de _issue_ serve muito como uma forma de **documentar e organizar** tudo o que está sendo feito no projeto. Agora que aprendemos como criar uma nova _issue_, na sequência aprenderemos como resolvê-la.

## Transcrição

Criamos nossa _issue_, a lemos, entendemos o que é para ser feito e agora vamos resolvê-la. Vamos para o VSCode, podemos abrir o terminal e iniciar criando uma nova _branch_. Vamos rodar o comando `git checkout –b altera-rota`. Clicamos em `Enter`, mudamos de branch e agora vamos fazer o que a branch está pedindo.

Vamos abrir `Explorador` de arquivos, dentro da pasta `source`. Podemos ir para a pasta de `routes`, que contém nossas rotas. Vamos abrir o arquivo `publicRoutes.js`.

Vamos descer até a linha 9, onde temos a rota de `/registrar`. A nossa issue pedia para trocar para `cadastrar`. Adicionamos essa mudança e salvamos.

```csharp
server.post('/cadastrar', async (req, res) => {

// Trecho de código suprimido
```

Podemos fechar o arquivo e criar o _commit_. Vamos rodar o `git status`, o `git add .`, limpar o terminal com o comando `cls`, rodar o `git commit –m "Altera rota"`, e agora vamos rodar o `git push origin`. Lembre-se de que estamos trabalhando em uma nova _branch_. Colocamos o nome da nossa _branch_, que é `altera-rota`.

```perl
git push origin altera-rota
```

Subimos o código para o GitHub e podemos retornar para o navegador. Clicamos no botão `code` para voltar para o projeto, e o GitHub já mostra essa mensagem de que a _branch_ `altera-rota` recebeu alterações recentes.

> altera-rota had recent pushes 15 seconds ago

### Usando _pull requests_

Ele sugere comparar e fazer pull request (`Compare & pull request`), mas o que é isso?

Quando estamos trabalhando em um projeto com várias outras pessoas, o que ocorre é que, quando existe uma nova funcionalidade, que está sendo adicionada ao projeto e finalizamos aquela _issue_, antes do código ser juntado à `main`, precisamos fazer uma **revisão**.

Outra pessoa revisará o que foi feito no código e podemos sinalizar que o código está pronto para ser revisado através desse recurso de **pull requests**.

No menu superior do GitHub, temos a opção `Pull requests`, clicamos ali, descemos um pouco na página e clicamos em um botão verde chamado `New pull request`.

Ele traz as opções que precisamos selecionar. A `base` será a _branch_ que **receberá as mudanças**, que no nosso caso é a `main`, que receberá as alterações que fizemos na rota. Na opção de `compare`, colocamos qual é a **_branch_ na qual fizemos as alterações**, selecionamos nas opções `altera-rota`.

Isso é semelhante ao que tínhamos feito manualmente para o _merge_ no terminal, mas é uma solicitação de _merge_ feita pela interface do GitHub.

Ele mostra a mensagem `Able to merge` (capaz de realizar o _merge_), isso significa que não tem conflito entre o que fizemos na nossa máquina e o que já existe na `main`. Ele também mostra o que foi alterado no código e o histórico dos _commits_ que foram feitos. Podemos clicar no botão verde de `Create pull request`, no canto direito.

Assim como na criação de _issues_, o _pull request_ também tem um campo de título e um campo de descrição. Podemos alterar esse título e, caso achemos necessário, adicionar alguma descrição do que foi feito.

Na descrição, escrevemos que alteramos a rota de `registrar` para `cadastrar`. Também temos opções de _assignee_ (atribuição), para apontar quem resolveu esse problema. Podemos adicionar também uma _label_. Selecionamos a _label_ que criamos de `modificação`.

E também tem o campo de _reviews_ (revisões). Caso houvesse outras pessoas colaborando em nosso repositório, poderíamos marcar alguém para revisar o código. Mas, como não é o caso, deixamos esse campo em branco.

### Vinculando um _pull request_ a uma _issue_

Voltando para o campo de descrição, podemos utilizar um recurso muito interessante do GitHub, que vincula o _pull request_ à _issue_ que estamos resolvendo.

Normalmente, quando vamos abrir um _pull request_, que também é chamado de PR, estamos resolvendo alguma _issue_ ou tarefa que foi descrita em nosso repositório.

Podemos fazer isso escrevendo na descrição a palavra-chave `fix`, seguida de um espaço e do símbolo `#`. Com isso, o GitHub nos dá a opção da lista de _issues_ que temos abertas. Nesse caso, como no repositório temos apenas uma _issue_, ele traz apenas ela. Esse vínculo entre o _pull request_ e a _issue_ é feito através da palavra-chave e daquele identificador único da _issue_.

Podemos criar o _pull request_, clicando no botão inferior verde onde está escrito `Create pull request`, e o pull request será aberto. Se tivéssemos outra pessoa trabalhando conosco, essa pessoa revisaria o nosso código e temos a opção de adicionar comentários.

Caso faltasse alguma coisa ou não tivéssemos resolvido bem aquele problema, alguém poderia adicionar um comentário solicitando alguma alteração. Também temos a opção para manter o histórico de comentários sobre o que está sendo feito.

O GitHub informa que a _branch_ não tem conflitos com a _branch_ de base, que é onde queremos levar o nosso código, e que o _merge_ pode ser feito automaticamente.

Para resolver esse _pull request_, a pessoa que revisou o PR, pode clicar no botão de `Merge pull request`, ele cria esse _commit_ de _merge_ do _pull request_, com uma mensagem já padrão.

Podemos deixar essa mensagem padrão ou alterá-la, caso julgarmos necessário, e clicamos no botão de `Confirm merge`, para confirmar o _merge_. Assim, o GitHub realizou o _merge_ e fechou o PR.

Ele já mostra a opção de deletar a _branch_. Então, clicamos em `Delete branch`, e nossa _branch_ de alteração de rota foi fechada. Agora, voltamos ao menu superior `Issues` do GitHub, e veremos que a nossa _issue_ também foi fechada.

Nessa opção, no canto esquerdo, temos a opção `Closed`. Se clicarmos nela, ela nos mostra que a _issue_ foi fechada. Essa _issue_ fechou automaticamente justamente por causa da palavra-chave `fix` que utilizamos para vincular o _pull request_ com a _issue_.

> Assim que o PR é resolvido, o GitHub fecha automaticamente a _issue_, automatizando esse processo para nós.

Esperamos que tenham gostado desse vídeo. Se inscrevam no canal e ativem as notificações para receber novos vídeos. Até a próxima!

# Para saber mais: templates para Issues e Pull Requests

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149722/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149722/question)

No GitHub é possível criar templates personalizados para Issues e Pull Requests. Isso ajuda a padronizar as informações que os colaboradores devem incluir ao abrir as Issues e PRs em seu repositório.

**Templates de Issues**

Para criar templates para Issues você deve:

1. No seu repositório, criar uma pasta chamada `.github` (se ela ainda não existir).
2. Dentro da pasta `.github`, criar uma subpasta chamada `ISSUE_TEMPLATE`. Isso é importante para que o GitHub reconheça os arquivos dentro dessa pasta como modelos para Issues.
3. Dentro da pasta `ISSUE_TEMPLATE`, crie arquivos Markdown para diferentes tipos de issues que você deseja suportar (por exemplo, `bug_report.md`, `feature_request.md`, etc.).
4. Use Markdown para criar um modelo com as seções necessárias, como Descrição, Passos para Reproduzir (no caso de bugs), Comportamento Esperado, Comportamento Atual, etc. Inclua instruções claras para os contribuidores preencherem as informações necessárias.

A seguir temos um exemplo de template para Issues:

```yaml
---
name: Relatar Problema
about: Crie um relatório para nos ajudar a melhorar

---

**Descreva o problema:**
Uma descrição clara e concisa do que é o problema.

**Passos para Reproduzir:**
Passos para reproduzir o comportamento:

**Comportamento Esperado:**
Uma descrição clara e concisa do que você esperava que acontecesse.

**Capturas de Tela:**
Se aplicável, adicione capturas de tela para ajudar a explicar seu problema.

**Contexto Adicional:**
Escreva qualquer contexto adicional sobre o problema aqui.
```

**Templates para Pull Requests**

Para criar templates para Pull Requests você deve:

1. Na pasta `.github`, criar uma subpasta chamada `PULL_REQUEST_TEMPLATE`.
2. Dentro da pasta `PULL_REQUEST_TEMPLATE`, crie um arquivo Markdown (por exemplo, `pull_request_template.md`).
3. Inclua seções como Descrição, Problema Corrigido (referenciando o número da issue, se aplicável), Passos para Testar, Screenshots (se aplicável), etc. Novamente, forneça instruções claras para ajudar os contribuidores a fornecer as informações necessárias.
4. No corpo do PR, você pode usar palavras-chave como "Fixes #123" ou "Resolves #456" para vincular automaticamente o PR à issue correspondente.

A seguir temos um exemplo de template para Pull Requests:

```yaml
---
name: Pull Request
about: Crie um pull request para contribuir com o projeto

---

**Descrição:**
Uma descrição clara e concisa do que este pull request faz.

**Corrige/Resolve:**
# (número da issue)

**Mudanças Propostas:**
Descreva as alterações que você fez.

**Passos de Teste:**
Forneça passos para testar as alterações feitas neste pull request.

**Capturas de Tela:**
Se aplicável, adicione capturas de tela para mostrar as alterações.
```

Para se aprofundar mais no assunto, você pode [ler a documentação oficial](https://docs.github.com/pt/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates).

# Para saber mais: projetos Open Source

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149723/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149723/question)

Projetos Open Source são iniciativas de desenvolvimento de software cujo código-fonte é disponibilizado publicamente, permitindo que qualquer pessoa interessada possa visualizá-lo, modificar e contribuir.

Em projetos Open Source os PRs são usados como forma de propor contribuições específicas feitas por pessoas desenvolvedoras externas ao projeto.

Quando uma melhoria, correção de bug ou possível implementação são detectadas por quem desenvolve o projeto, essa pessoa cria um PR para sugerir tais alterações ao repositório principal. Os maintainers (mantenedores) do projeto revisam o PR e decidem se o incorporam ao código principal.

Além disso, podem ser criadas issues para relatar bugs, propor novos recursos ou discutir ideias relacionadas ao projeto. Nesses projetos as Issues são uma forma de comunicação aberta entre os membros da comunidade, permitindo que colaboradores contribuam com feedback e soluções.

Os projetos Open Source trazem vários benefícios como:

- **Colaboração aberta:** incentivam a colaboração global, permitindo que pessoas de diferentes partes do mundo contribuam para o crescimento e aprimoramento do software.
    
- **Aprimoramento contínuo:** PRs e Issues promovem um ciclo contínuo de melhoria, onde a comunidade pode identificar, discutir e implementar melhorias no código.
    
- **Aprendizado:** participar de projetos Open Source proporciona uma valiosa oportunidade de aprendizado, permitindo que você aprimore suas habilidades ao trabalhar em projetos do mundo real.
    

Caso queira saber mais sobre o tema, recomendamos a [leitura do nosso artigo Open Source - Uma breve introdução](https://www.alura.com.br/artigos/open-source-uma-breve-introducao) e também o [episódio #205 OpenSource do nosso podcast Hipsters](https://www.alura.com.br/podcast/opensource-hipsters-205-a347).

Projetos Open Source são impulsionados por uma comunidade de colaboração que utiliza PRs e issues como ferramentas cruciais para melhorar e inovar continuamente o software de código aberto.

Essa abordagem descentralizada e colaborativa tem se mostrado eficaz na criação de soluções tecnológicas robustas e de alta qualidade.

Assim, você pode usar o GitHub para procurar projetos Open Source que sejam do seu interesse e começar a contribuir! :)

# Para saber mais: palavras-chave em Issues e Pull Requests

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149724/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149724/question)

Aprendemos nessa aula a usar a palavra chave FIX para vincular uma Issue a um Pull Request. Porém, existem outras palavras-chave que podem ser usadas com o mesmo propósito.

Para conferir quais são essas palavras-chave você pode acessar a [documentação oficial do assunto](https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests).

# Faça como eu fiz: resolvendo conflitos e usando Issues e Pull Requests

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149726/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149726/question)

Se mais de uma pessoa fizer uma modificação em um mesmo trecho de código, mas em diferentes branches, pull requests ou commits, temos um conflito. Simulamos um conflito para demonstrar essa situação e depois o resolvemos em nosso computador.

Também criamos uma nova issue para alterar a rota de `registrar` para `cadastrar` no código `publicRoutes.js` que se encontra dentro do diretório `src/Routes`. Depois criamos uma nova branch, resolvemos essa Issue e abrimos um Pull Request para integrar a alteração na branch principal.

Você já fez esta atividade? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a prática, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149726/opinion)

## Simulando e resolvendo um conflito

Em seu repositório no GitHub na branch main, abra o arquivo _server.js_ que se encontra dentro da pasta _src_. Para editá-lo diretamente pelo GitHub clique no botão com um símbolo de um lápis para habilitar a edição.

Na linha 21 altere o código que diz `console.log("API disponível em http://localhost:8000")` pelo trecho de código a seguir:

```cpp
console.log("Acesse essa API em http://localhost:8000")
```

Crie um commit, clicando no botão verde de _Commit changes_.

Agora, abra o projeto em seu VSCode, e abra o mesmo arquivo: _server.js_ que está dentro da pasta _src_. Na linha 21 altere o código que diz `console.log("API disponível em http://localhost:8000")` pelo trecho de código a seguir:

```cpp
console.log("Boas-vindas a API do AllBooks")
console.log("API disponível através da url http://localhost:8000")
```

Com as alterações realizadas, podemos tentar fazer um commit com os comandos a seguir:

```sql
git add .
git commit -m “Altera o server.js”
git push origin main
```

Com isso, o Terminal indicará um erro que diz que não foi possível subir as alterações, pois o repositório remoto possui alterações que ainda não temos em nosso repositório local. Desse modo, vamos trazer as modificações do GitHub para nosso computador com o comando:

```css
git pull origin main
```

As alterações serão baixadas, mas o Terminal traz uma mensagem que indica um conflito no arquivo `server.js`, que o merge automático falhou e os conflitos precisam ser resolvidos e “commitados”.

Vamos a resolução do conflito. Abra o arquivo `server.js`. O VS Code indicará o local do conflito com uma notação semelhante a mostrada na imagem a seguir:

![Imagem com print do VSCode que mostra um conflito. As alterações que estão no repositório local são sinalizadas com um fundo verde e uma série de “<<<<<<<” acima do código. As alterações do repositório remoto são sinalizadas com um fundo azul e uma série de “>>>>>>>” abaixo do trecho de código. As duas alterações são separadas por uma linha que contém uma série de “=======”](https://cdn3.gnarususercontent.com.br/3584-devops/img3.png)

O próprio VSCode traz as três opções possíveis para a resolução do conflito: Aceitar a alteração atual (a que temos em nosso computador), aceitar alteração de entrada (a que veio do GitHub) ou aceitar ambas as alterações.

Após avaliar nosso código, decidimos manter a alteração que veio do GitHub. Assim, basta clicar na opção _Aceitar Alteração de Entrada_.

Conflito resolvido! Agora vamos realizar o commit desse merge de resolução de conflito. Para isso rode os comandos a seguir:

```sql
git add .
git commit
```

Aqui não especificamos uma mensagem para o commit. Por ser uma resolução de conflito o próprio Git abre um editor de texto com uma mensagem padrão, que não vamos alterar. Agora é só salvar o arquivo e sair desse editor de texto, que o commit será criado. Por fim, vamos enviar essas alterações para o GitHub com o comando:

```css
git push origin main
```

## Criando uma Issue e resolvendo com um Pull Request

Em seu repositório no GitHub, clique na opção _Issues_ no menu superior da tela. Depois clique no botão verde no canto direito de _New Issue_. Isso abrirá um formulário para a criação da nova Issue.

Neste formulário preencha o título da Issue no campo _Add a title_ com o texto “Alteração de rota”. Preencha no campo _Add a description_ a descrição da Issue com o texto “Alteração de rota de registrar para cadastrar.”

Agora no menu lateral da criação de Issue, clique na opção de _Assignees_ para atribuir a resolução da Issue a você. Para isso, você pode digitar o seu nome de usuário do GitHub.

No campo abaixo, de Labels, vamos adicionar um rótulo que identifique o tipo da nossa Issue. Clique nessa opção e digite no campo que apareceu o texto “modificação”. Agora clique na opção _Create new label “modificação”_ . Isso abrirá um menu, basta clicar no botão _Save_ para salvar a nova label e adicioná-la a sua Issue.

Com a Issue criada, vamos a sua resolução.

No VSCode, gere uma nova branch a partir da `main`, chamada de `altera-rota`. Abra o arquivo `publicRoutes.js` que se encontra dentro do diretório `src/Routes`. Na linha 9 deste código, altere o texto de “registrar” para “cadastrar” e salve o arquivo.

Em seu Terminal, vamos criar um commit e enviar as alterações para o repositório remoto através dos comandos:

```sql
git add .
git commit -m “Altera rota”
git push origin altera-rota
```

Agora, vamos voltar para o repositório no GitHub e clicar na opção _Pull Request_ no menu superior. Clique no botão verde no canto direito escrito _New pull request_.

Na tela que foi aberta, verifique se no campo _base_ está selecionada a `main`. Já no campo _compare_ selecione a branch `altera-rota`. E clique no botão verde de _Create pull request_. Isso abrirá um formulário.

Neste formulário, preencha o campo de _Add a title_ com o texto “Altera rota” para adicionar o título do Pull Request. Preencha no campo _Add a description_ a descrição do que foi feito no Pull Request com o texto “Alterei a rota de registrar para cadastrar. FIX #1”.

Lembre-se de colocar a numeração que identifica a Issue que estamos resolvendo, dessa forma, assim que o PR for fechado a Issue também será fechada automaticamente.

Agora no menu lateral da criação do PR, clique na opção de _Assignees_ para atribuir a resolução do Pull Request a você. Para isso, você pode digitar o seu nome de usuário do GitHub.

Também adicione a label de “modificação”, clicando na opção _Labels_. Por fim, basta clicar no botão verde de _Create pull request_ no canto inferior direito.

Com o Pull Request criado, agora basta aceitar realizar o merge do PR clicando no botão verde de _Merge pull request_ e depois no botão de _Confirm merge_. Não vamos nos esquecer de apagar a branch que não será mais usada, clicando no botão de _Delete branch_.

## Transcrição

Dentro do contexto de DevOps, temos alguns processos e atividades que são muito importantes e têm como objetivo aprimorar a eficiência e a qualidade da entrega de software.

Um desses processos é o _CI_ (_Continuous Integration,_ ou Integração Contínua em português). A prática de integração contínua garante que, ao integrarmos nosso código em desenvolvimento com o que já funciona na aplicação, alguns processos sejam executados automaticamente para garantir que nossa aplicação principal não quebre.

No contexto do Allbooks, quando integramos algo ou adicionamos algum código à `main`, queremos que esse código seja sempre testado, para termos a garantia de que a adição desse código não vai estragar o que já está funcionando.

Agora, vamos entender como podemos automatizar esse processo de testes através da integração contínua.

Vamos abrir nosso projeto no VS Code. Sempre rodamos esses testes manualmente, através do comando `npm test` no terminal. Mas, não temos a garantia de que sempre que alguém adicionar algo novo no projeto, essa pessoa se preocupará em rodar esses testes. A pessoa pode esquecer. Por isso, vamos criar um _workflow_ de integração contínua no GitHub.

## Workflows

Vamos abrir nosso projeto no GitHub. No menu superior do GitHub, a quarta opção é chamada _Actions_. Vamos clicar em "Actions".

Temos uma série de opções de workflows para automatização de coisas no GitHub. Vamos descer um pouco até a parte de _Continuous Integration_. Nesta sessão, temos algumas opções, incluindo a segunda opção de _Node.js_, que é a tecnologia que estamos usando em nosso projeto.

Caso essa opção não esteja aparecendo para você, pode clicar no botão de "View All", no canto direito, que todas as opções serão listadas e você pode procurar por _Node.js_.

No campo do _Node.js_, vamos clicar no botão "Configure".

O GitHub cria para nós esse arquivo `node.js.yml` e vamos renomear esse arquivo. Vamos escrever `workflow-ci.yml` no lugar de `node.js.yml`. Importante mencionar que não podemos alterar a extensão desse arquivo, então é importante deixar esse `.yml`.

Esse arquivo será criado dentro de uma pasta, na raiz de nosso projeto: `allbooks/.github/workflows`.

Agora, vamos editar o `workflow-ci.yml` e entender quais são as partes de nosso workflow de integração contínua:

O nome do nosso workflow vem por padrão como `node.js-ci`, mas podemos substituir por `Workflow de Integração Contínua`.

```yaml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Workflow de Integração Contínua

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest
     
    strategy:
    matrix:
      node-version: [14.x, 16.x, 18.x]
      # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
            cache: 'npm'
    - run: npm ci
    - run: npm npm build --if-present
    - run: npm test
```

Abaixo do campo de nome, temos a palavra-chave `on`, que define onde esse workflow será **ativado**. Isso funciona como um gatilho, que indica em que situação esse workflow deve ser chamado e rodado.

Em nosso código está configurado que o gatilho seja ativado quando existir um _push_ diretamente na branch `main`, ou se um _pull request_ for aberto na branch `main`.

Podemos apagar a linha desse _push_ na branch `main`, `push:branches: [ "main" ]` e deixar apenas a opção do _pull request_ na branch `main`. Assim, toda vez que um _pull request_ for aberto diretamente para nossa `main`, esse workflow será ativado.

A próxima parte está na linha onde temos os _jobs_. Os _jobs_ são as ações que serão executadas quando nosso workflow for ativado. Em seguida, damos um nome para esse _job_, aqui definido como `build`. Vamos chamar de `testes`.

Em seguida, temos `runs-on: ubuntu-latest`, que especifica em qual tipo de máquina nosso workflow será executado. Vamos manter o Ubuntu, e `latest` significa que é na versão mais recente.

Logo abaixo, temos `strategy`, que não vamos entrar em detalhes sobre o que é isso, podemos apagar esse bloco de `strategy` até `node-version`.

Seguindo, temos os _steps_, que são as ações que serão executadas em nosso workflow.

Temos uma ação definida com a palavra-chave `uses`, que significa que vamos usar uma ação que já existe dentro do GitHub _Actions_, que é a `actions/checkout@v3`. Essa ação clona nosso projeto para a máquina Ubuntu que vai rodar nosso projeto.

Em seguida, temos outra ação definida. Usamos a palavra-chave `name` e especificamos o que ela vai fazer, que é usar o _Node.js_. Vamos alterar tudo que vem depois desse sinal de dólar, vamos apagar o `${{ matrix.node-version }}` e deixar apenas `Use Node.js`.

Depois de definir o nome da nossa ação, vamos chamar outra ação que já existe dentro do GitHub, que é a ação de configurar nosso Node, aqui na versão 3. Vamos manter isso do jeito que está e vamos definir mais algumas coisas, como a versão do Node que vamos usar.

Temos aqui o `with` na linha 19, e na linha 20, o `node-version`. Vamos para o VS Code para checar a versão do nosso Node. No VS Code, vamos abrir o terminal e rodar o seguinte comando:

```css
node --version
```

Ele mostrou que está sendo usada a versão 18.16.0 do Node.

Voltando ao GitHub, vamos apagar tudo que vem depois do sinal de dólar, e colocar um `18.`. Isso significa que queremos usar uma major-version do Node, que é a versão 18, mas a minor-version, que é os números que vem depois, não precisa ser especificada.

Podemos apagar a linha de `cache`, e agora vamos rodar aqueles comandos que rodamos no terminal.

O `run: npm ci`, vamos substituir por `run: npm install`, para garantir que todas as instalações necessárias para nosso projeto serão feitas.

Podemos apagar a linha do `run: npm run build -- if-present`. Vamos deixar apenas `run npm test`, que é o comando que usamos no terminal para rodar nossos testes.

Após as alterações, nosso arquivo `workflow-ci.yml` deve ficar assim:

```yaml
name: Workflow de Integração Contínua

on:
  push:
    branches: [ "main",  "develop"]
  pull_request:
    branches: [ "main",  "develop"]

jobs:
  continuous-integration:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18.
    - run: npm install
    - run: npm test
```

Agora, temos nosso workflow de integração contínua configurado e podemos _commitar_ essa alteração. Vamos clicar no botão verde de "Commit changes" no canto superior direito. Ele traz a mensagem de _create workflow de CI_, vamos deixar essa mensagem e clicar em "Commit changes". Assim, nosso workflow foi criado!

Na sequência, veremos como podemos ativar e verificar se esse workflow está funcionando.

## Transcrição

Já temos o nosso _workflow_ de integração contínua criado e agora vamos verificar se ele está funcionando.

Para isso, no nosso VSCode, vamos realizar uma alteração no projeto.

Vamos limpar o terminal e criar uma nova _branch_ a partir da `main`. Para isso, rodamos o seguinte comando, vamos alterar o nosso arquivo `server.js`. Vamos chamar a _branch_ de `altera-server`.

```css
git checkout -b altera-server
```

Após a troca de _branch_, vamos abrir o nosso explorador de arquivos, acessar a pasta "source" e abrir o arquivo `server.js`.

Vamos alterar novamente o texto que está no `console.log()`. Onde está "Acesse essa API em" deixaremos: "Disponível em". Após salvarmos a alteração, vamos fechar o arquivo, abrir o terminal e executar o seguinte comando:

```lua
git status
```

Em seguida, limpamos a tela e rodamos os comandos:

```csharp
git add .
```

```sql
git commit -m "Altera o server"
```

Em seguida, vamos verificar novamente o nome da nossa _branch_ com o comando `git branch`, a chamamos de `altera-server`.

Após limpar a tela, vamos executar o comando:

```perl
git push origin altera-server
```

Com isso, subimos a alteração para essa nova _branch_.

Agora, vamos voltar para o GitHub, clicar no menu superior, na opção "Pull requests" e abrir um novo _pull request_ clicando no botão verde "New pull request".

Verificamos se a nossa base está selecionada corretamente como `main` e vamos compará-la com a _branch_ `altera-server`. Se tudo estiver certo, clicamos no botão "Create pull request".

Podemos deixar o título e as descrições como estão, descemos um pouco e clicamos no botão "Create pull request".

Com isso, nosso _pull request_ foi aberto.

Podemos clicar em "details" para ver o que está acontecendo e todas as nossas ações do _workflow_ já foram executadas.

Essa etapa pode demorar um pouco, especialmente em um projeto maior, onde teremos uma suíte de testes maior. A etapa de `run npm test` pode levar alguns minutos, mas é normal.

O nosso _workflow_ funcionou, podemos ver o símbolo verde na frente do `altera-server`, indicando que tudo correu bem.

Vamos voltar para a aba de _pull requests_.

O GitHub sinaliza que o nosso _workflow_ foi bem sucedido, com um sinal verde de _check_. Abrindo o nosso _pull request_, podemos fazer o _merge_ do nosso _pull request_, clicando no botão "Merge pull request". Confirmamos o _merge_ e o nosso _pull request_ foi mesclado e fechado. Deletamos a _branch_ e voltamos para o menu de "Code".

## Conclusão

Esse é um dos processos mais importantes que temos em DevOps, que é a integração contínua. Junto com a integração contínua e esse recurso de _actions_ do GitHub, temos o CD, que é a entrega contínua (_Continuous Delivery_).

No GitHub, podemos usar as _actions_ para configurar um _workflow_ de entrega contínua, que vai rodar uma série de passos para garantir que quando o nosso código for entregue na produção, tudo vai estar funcionando corretamente.

Configuramos o nosso _workflow_, temos um CI funcionando, mas até o momento conseguimos colocar código diretamente na _branch_ `main`. Não faz muito sentido termos configurado todo esse _workflow_, mas continuar fazendo alterações no nosso código em uma _branch_ que deveria ter apenas código estável, código que está testado.

Será que o GitHub traz algum recurso que nos permite proteger uma _branch_? Veremos isso na sequência!

#   
Para saber mais: GitHub Student Developer Pack

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149731/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149731/question)

Caso você seja estudante em uma instituição de ensino, você pode aproveitar os **benefícios de uma conta Pro do GitHub** (conta paga) e também o acesso gratuito a diversas ferramentas pagas de desenvolvimento de software. Além disso, você pode conseguir crédito para usar em ferramentas de Integração Contínua e Deploy, por meio da **licença para estudantes do GitHub** (a _GitHub Student Developer Pack_).

Para obter essa licença, você precisará do seu e-mail institucional e do comprovante de matrícula. Basta [preencher o formulário disponível no site GitHub Education](https://education.github.com/discount_requests/application) e aguardar a aprovação.

Para mais informações, você pode [acessar o site do GitHub Student Developer Pack](https://education.github.com/pack?ref=producthunt).

## Transcrição

Normalmente, todo o código que temos na `main` representa uma versão estável do nosso software. No caso do Allbooks, queremos manter todo o código na `main`, que seja o código funcional da nossa API, um código pronto para ser entregue em produção.

No entanto, até o momento, ainda conseguimos realizar _merge_, efetuar _commits_ diretamente na `main`, sem a necessidade de passar por um _pull request_.

Aprendemos que o _pull request_ é uma boa prática, tanto para outras pessoas revisarem nosso código, quanto pela configuração de integração contínua que fizemos anteriormente, para garantir que todo o código será testado antes de ser integrado ao código principal.

Então, como proteger a nossa `main`? Existe uma forma de fazer isso?

O GitHub fornece uma opção de adicionar uma regra de proteção de _branch_. Vamos aprender como podemos fazer isso.

Abrimos o nosso projeto no navegador, no GitHub e, no menu superior, a última opção que temos é a opção de _settings_ (configurações). Clicamos em "Settings".

No menu lateral esquerdo, temos a parte de código e automação. Vamos clicar na primeira opção: "Branches".

Na tela de Branches temos a opção de adicionar uma regra de proteção de _branch_. Podemos clicar no botão "Add branch protection rule" para efetuar essa criação. Inclusive, o GitHub fornece uma explicação do que isso significa, essa opção irá desabilitar opções de colocar esse código diretamente na `main`, sem antes passar por um processo de revisão por _pull request_.

Ao clicarmos no botão "Add branch protection rule" ele abre uma série de opções para a configuração. O primeiro campo é o _branch name pattern_, que é o padrão do nome da nossa _branch_. Escrevemos `main`, que é a _branch_ que queremos proteger.

Em seguida, temos uma série de opções que podemos marcar para realizar essa configuração.

Vamos selecionar a primeira opção: "_Require a pull request before merging_", ou seja, será necessário a realização de um _pull request_ antes de realizar um _merging_ nessa _branch_

E já vem marcado com esse _require approvals_, podemos desmarcá-la por enquanto. Depois, clique em "Create".

Pronto, agora a nossa `main` já está protegida. Todo o código que for para lá, precisaremos abrir um _pull request_ antes de integrá-lo.

Isso é uma prática muito importante em DevOps, pois garante que o nosso código que vai para a produção seja um código que terá passado por todas as avaliações. Tanto se o código está seguindo o padrão correto, se os testes estão passando, e que o novo código não vai quebrar tudo que já funciona na nossa aplicação.

Ainda no assunto de segurança, será que existem outras configurações, outras coisas que podemos fazer para manter o nosso projeto mais seguro? Veremos mais sobre isso na próxima aula!

# Faça como eu fiz: aplicando a integração contínua e protegendo a branch principal

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149732/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149732/question)

Aprendemos como configurar um workflow de Integração Contínua usando o GitHub actions, para acionar a suíte de testes toda vez que um Pull Request for aberto para integração de código na main. Também protegemos a branch principal (main), para que ela só receba alterações através de Pull Requests.

Você já fez esta atividade? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a prática, clique na Opinião da pessoa instrutora.

# Hora da prática

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149733/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149733/question)

A Integração Contínua (CI) desempenha um papel crucial no ciclo de desenvolvimento de software, sendo uma prática fundamental no DevOps. E a integração nativa com GitHub Actions eleva ainda mais essa prática.

O GitHub Actions oferece uma abordagem integrada para automatizar o processo de CI, permitindo que desenvolvedores definam fluxos de trabalho personalizados para testar, construir e implantar suas aplicações de maneira contínua.

Ao integrar CI com GitHub Actions, os devs beneficiam-se de um ciclo de desenvolvimento mais ágil, melhorando a confiabilidade do código e acelerando a entrega de software de alta qualidade.

A proteção de branches desempenha um papel crucial na segurança e estabilidade do desenvolvimento de software. Ao configurar restrições em determinadas branches, como a branch principal, as organizações podem garantir que apenas alterações revisadas e aprovadas possam ser mescladas, prevenindo inadvertidos erros ou alterações indesejadas.

Essa prática não apenas protege o código-fonte de modificações não autorizadas, mas também promove um ambiente colaborativo mais seguro, onde as contribuições são submetidas a revisões adequadas antes de serem incorporadas à base de código principal

_Atividades_

1. Escolha um projeto de sua preferência (pode ser o AllBooks, ou qualquer outro projeto seu que esteja no GitHub), que tenha uma suíte de testes e crie um novo repositório no GitHub com o projeto.
2. Crie uma nova branch chamada `develop` a partir da `main`.
3. Crie workflow no GitHub Actions para automatizar o processo de testes quando um Pull Request para a `main` e `develop` for aberto ou um push for enviado para a `main` ou `develop`.
4. Configure a proteção de branches para evitar que código seja integrado a `main` e a `develop` sem a abertura de um Pull Request.

Caso necessite de ajuda para resolver as atividades, basta clicar na seção “Opinião da pessoa instrutora” para acessar instruções sobre como implementar as soluções.

## Transcrição

Nos projetos de _software_, é comum termos um grande número de dependências. No nosso projeto da API _AllBooks_, apesar de ser uma API de porte reduzido, já possui um número significativo de dependências. Estas dependências podem trazer várias **vulnerabilidades** que afetam a segurança do nosso projeto. Assim, surge a pergunta: existe uma maneira de manter o nosso repositório seguro em relação a essas vulnerabilidades de dependências?

Vamos abrir o projeto em nosso navegador, no _GitHub_, e acessar a aba de "_Insights_" no menu superior. Selecionamos a opção "_Dependency Graph_" ("Gráfico de Dependência") no menu lateral esquerdo.

O _GitHub_ **listará todas as dependências do nosso projeto**. Podemos verificar que é uma lista extensa, contendo 23 páginas, mesmo sendo um projeto pequeno. Imagine um projeto maior, a quantidade de dependências que podem estar trazendo vulnerabilidades para o nosso _software_.

Como podemos lidar com essa situação? Vamos à opção de "_Settings_" no menu superior, a última opção. Descemos a página até a parte de "_Security_" ("Segurança") no menu lateral esquerdo e clicamos na opção "_Code Security and Analysis_" ("Segurança e análise de código").

Descemos um pouco até a parte do _Dependabot_ do lado direito.

> O _Dependabot_ é uma ferramenta do _GitHub_ que serve justamente para manter as nossas **dependências atualizadas e seguras**.

Aqui, temos uma opção chamada "_Dependabot Alerts_". Quando ativada, ela nos avisa sobre possíveis problemas de segurança nas coisas que nosso projeto depende. Vamos ativar essa opção, clicando no botão "_Enable_" do lado direito. Com isso, nosso alerta de dependências estará funcionando.

Agora, vamos até a aba "_Security_" no menu superior e, no menu lateral esquerdo, procuramos a seção de alertas de vulnerabilidade (em inglês, "_Vulnerability alerts_"). Clicamos em "_Dependabot_" e você verá alertas sobre possíveis problemas de segurança encontrados pelo _Dependabot_ em nosso projeto. Cada alerta traz uma descrição do problema e indica o nível de risco, se é moderado ou alto.

Podemos clicar na primeira opção, e o _Dependabot_ vai descrever como podemos corrigir este alerta. Podemos corrigir isso manualmente, indo ao trecho do nosso código onde se encontra essa dependência e atualizar esse valor manualmente.

## Conclusão

No entanto, considere a seguinte situação em que nos deparamos com uma extensa lista de alertas; corrigir isso manualmente se torna um processo entediante. Dentro do contexto de _DevOps_ (Desenvolvimento e Operações), a automação desempenha um papel importante. Podemos automatizar o procedimento de correção dessas vulnerabilidades? Vamos explorar isso a seguir.

## Transcrição

Aprendemos que o _Dependabot_ gera nossos alertas de vulnerabilidade e que é possível corrigi-los manualmente, embora essa não seja a abordagem ideal. **Como automatizar esse processo?**

Abrimos nosso projeto no _GitHub_ no navegador, acessamos "_Settings_" ("Configurações") no menu superior e descemos até a seção de segurança (em inglês, "_Security_"), onde selecionamos "_Code Security Analysis_" ("Análise de segurança de código").

Voltamos à área do _Dependabot_ e encontramos a segunda opção, "_Dependabot Security Updates_", que indica que, ao ativá-la, o _Dependabot_ tentará **automaticamente** criar um `pull request` para resolver cada alerta de segurança.

Ativamos essa opção, clicando no botão "_Enable_" ("Habilitar") do lado direito, e agora vamos para a seção de "_Pull requests_" no menu superior. Lá, encontramos alguns _pull requests_ que abordam os problemas de segurança. Ao analisar um desses _pull requests_, notamos que foi gerado pelo _Dependabot_ e possui a _label_ de dependência. Vamos abrir o primeiro pull request denominado "Bump jsonwebtoken from 8.5.1 to 9.0.0".

Na parte superior, temos uma mensagem em inglês que indica que esse _pull request_ resolve três alertas do _Dependabot_, que estão relacionados ao _JSON Web Token_. Ele também informa qual é o grau de severidade do alerta, que neste caso é moderado.

> Merging this pull request will resolve 3 Dependabot alerts on jsonwebtoken including a moderate severity alert.

Descemos até a parte com o botão verde _"merge pull request"_. Clicamos no botão verde para realizar o nosso _merge_. Clicamos em "_confirm merge_" para confirmar esse _merge_.

Inclusive, foi criada uma nova _branch_ para realizar esse processo de correção de dependências. Podemos retornar à aba de _pull requests_ e aceitar os demais _pull requests_ que foram abertos.

Voltando para a aba de _pull requests_, podemos aceitar esse outro _pull request_ que foi aberto denominado "_Bump the npmandwarn group with 1 update_". Clicamos nele e descemos, posteriormente selecionamos o botão verde _"merge pull request"_, e em "_confirm merge_".

## Conclusão

Dessa forma, resolvemos todos os nossos problemas de segurança que o _Dependabot_ alertou.

# Para saber mais: automatizando o Dependabot com GitHub Actions

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149737/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149737/question)

O Dependabot pode ser usado em conjunto com o GitHub Actions para configurar a execução de tarefas automatizadas quando Pull Requests forem criados pelo Dependabot, por exemplo, adicionar etiquetas, executar testes e até mesmo modificar o PR.

Para entender como isso pode ser feito, você pode [acessar a documentação oficial do assunto](https://docs.github.com/pt/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions).

## Transcrição

Aprendemos como corrigir as vulnerabilidades das nossas dependências do projeto. Contudo, outro tipo de problema que pode surgir nos projetos de _software_ são as questões relacionadas à **versão dessas dependências**.

## Configurando o Dependabot para Atualizações Automáticas de Versões de Dependências

O _Dependabot_ oferece um recurso para manter essas versões sempre atualizadas. Portanto, vamos aprender a configurar isso.

Abriremos o projeto no navegador. No nosso repositório, clicaremos na opção de _"Settings"_ no menu superior. Vamos até a parte de _"Security"_, clicando em _"Code Security Analysis"_. Na opção do "_Dependabot_", podemos ativar a última opção dele, que é o _"Dependabot Versions Updates"_.

Aqui, ele descreve que isso fará com que o _Dependabot_ abra automaticamente _pull requests_ que manterão nossas dependências sempre atualizadas com as novas versões disponíveis. Então, vamos clicar no botão de _"Enable"_ do lado direito.

O _GitHub_ abre um arquivo `.yml` chamado `dependabot.yml`. Precisamos fazer algumas configurações. Vamos entender o que está acontecendo neste documento.

> dependabot.yml

```yaml
# To get started with Dependabot version updates, you'll need to specify which 
# package ecosystems to update and where the package manifests are located. 
# Please see the documentation for all configuration options:
# https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
- package-ecosystem: "" # See documentation for possible values
directory: "/" # Location of package manifests
schedule:
    interval: "weekly"
```

Ele mostra um número de versão que não precisamos alterar. A seção `updates` está disponível. A primeira opção nos permite escolher o ecossistema de pacotes com o qual desejamos lidar para gerenciar os pacotes do nosso projeto.

Na linha 4, há um comentário que contém uma _URL_ com mais informações e **documentação**. Vamos copiar essa _URL_, abrir uma nova guia no navegador, colar a _URL_ e examinar o que está explicado na documentação.

> [Opções de configuração para o arquivo `dependabot.yml`](https://docs.github.com/pt/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

Encontraremos várias descrições e opções que podem ser configuradas no arquivo mencionado.

Precisamos entender a parte do `package-ecosystem` para saber o que precisamos colocar naquela opção. Na tabela, na coluna "_Package manager_", informa qual é o gerenciador de pacotes e qual a palavra (coluna "_YAML value_") que deve ser utilizada para adicionar naquele arquivo.

Na tabela, temos o _Package Manager_. No caso do nosso projeto, estamos usando como gerenciador de pacotes o **NPM**. Desceremos até onde está escrito NPM e copiaremos esse valor da segunda coluna da nossa tabela, que é o `npm` escrito com letra minúscula.

```undefined
npm
```

Voltaremos para o _GitHub_ e naquele arquivo, entre aspas, na linha do `package-ecosystem`, na linha 8, adicionaremos esse `npm`.

> dependabot.yml

```yaml
# To get started with Dependabot version updates, you'll need to specify which 
# package ecosystems to update and where the package manifests are located. 
# Please see the documentation for all configuration options:
# https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
- package-ecosystem: "npm" # See documentation for possible values
directory: "/" # Location of package manifests
schedule:
    interval: "weekly"
```

Aqui, temos outras configurações. Em relação ao diretório desse pacote, podemos deixar essa configuração como está. Na linha 10, temos um _schedule_, que é a agenda que definirá com que frequência essa verificação das versões será feita.

Por padrão, ele traz o intervalo semanal, com a palavra _weekly_, mas caso queira, pode ser alterado para diário, mensal, conforme a necessidade. Basta verificar na documentação qual a palavra certa para inserir aqui. No caso, deixaremos que essa verificação seja feita semanalmente e realizaremos um _commit_ dessa alteração.

Clicaremos no botão verde na lateral direita da tela denominado _"commit changes"_. Ele vai criar uma mensagem automática de _commit_, que no caso temos "_Create dependabot.yml_".

Lembramos que tínhamos configurado a questão da proteção de _branch_ e que não podemos comitar mais diretamente na _main_? Ele já oferece a opção marcada de criar uma nova _branch_ para esse _commit_ e abrir um _pull request_.

> Create a new branch for this commit and start a pull request

Seguiremos essa boa prática. Podemos deixar essa opção do nome da _branch_ da forma que está e clicaremos no botão verde de _"Propose Changes"_ no canto inferior direito para abrir esse _pull request_.

Ele abrirá a tela que já estamos acostumados intitulada "_Comparing chances_" e selecionará quais são as duas _branches_ na parte superior esquerda. Podemos voltar para a aba de _"Code"_ no menu superior.

O _GitHub_ já traz uma notificação falando que essa nova _branch_ teve alterações recentes:

> Gabrielle-Ribeiro-patch-1 had recent pushes 1 minute ago

Podemos clicar no botão verde do lado direito da mensagem escrito _"compare_ & _pull request"_. Agora, abrimos o _pull request_, verificando se as _branches_ selecionadas estão corretas.

A nossa base é a _`main`_ e a _branch_ de comparação é a nova _branch_ que criamos. Ele já traz um título para a criação do arquivo `dependabot.yml`, ou seja, no campos "_Add a title_" temos "_Create dependabot.yml_" .

Podemos criar esse _pull request_ clicando no botão _"Create pull request"_ no canto inferior direito.

Agora, com o nosso _pull request_ criado, podemos descer um pouco e clicar no botão de _"Merge pull request"_. Confirmaremos o _merge_ clicando no botão verde "_Confirm merge_". Agora, podemos selecionar a opção para deletar essa _branch_ (botão "_Delete branch_") que não vamos mais precisar dela.

Voltaremos para a parte de _"code"_, no menu superior e dentro da pasta `.github` temos o nosso arquivo `dependabot.yml`.

## Conclusão

Agora, semanalmente, o _Dependabot_ verificará se as versões das dependências do nosso projeto estão atualizadas e se houver a necessidade de uma atualização de versão, ele já abrirá automaticamente um _pull request_ que podemos ir lá e aceitar, mantendo o projeto sempre atualizado.

# Para saber mais: opções de configuração para o dependabot.yml

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149738/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149738/question)

Caso você queira explorar mais as opções de configuração do arquivo `dependabot.yml`, para personalizar ainda mais as suas atualizações de versão automatizadas, você pode [acessar a documentação oficial do tema](https://docs.github.com/pt/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file).

# Faça como eu fiz: configurando o Dependabot

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-trabalhando-repositorios-github/task/149739/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149739/question)

Aprendemos como configurar o Dependabot para gerar alertas de vulnerabilidades nas dependências do nosso projeto, como automatizar a resolução desses alertas para que o próprio Dependabot abra PRs com a resolução e como configurar a atualização de versões das dependências.

Você já fez esta atividade? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a prática, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-trabalhando-repositorios-github/149739/opinion)

## Ativando alertas de vulnerabilidades

No repositório do projeto no GitHub, clique na opção _Settings_ no menu superior. Nesta página, desça até as opções de _Security_ no menu lateral esquerdo e clique na opção de _Code security and analysis_.

Vá até a parte de _Dependabot_ e para habilitar os alertas de vulnerabilidades clique no botão de _Enable_ na opção de _Dependabot Alerts_. Assim os alertas serão ativados.

Para visualizar estes alertas você pode clicar na opção de _Security_ no menu superior do repositório no GitHub. E depois no menu lateral esquerdo, nas opções de _Vulnerability alerts_ clique na opção de _Dependabot_.

Essa página mostrará quais as vulnerabilidades nas dependências do projeto e o grau de severidade delas.

## Automatizando a resolução de alertas

No repositório do projeto no GitHub, clique na opção _Settings_ no menu superior. Nesta página, desça até as opções de _Security_ no menu lateral esquerdo e clique na opção de _Code security and analysis_.

Vá até a parte de _Dependabot_ e ative a opção de _Dependabot security updates_ clicando no botão de _Enable_. Assim, o Dependabot vai tentar resolver os alertas de segurança através de PRs.

## Configurando atualização de versões

No repositório do projeto no GitHub, clique na opção _Settings_ no menu superior. Nesta página, desça até as opções de _Security_ no menu lateral esquerdo e clique na opção de _Code security and analysis_.

Vá até a parte de _Dependabot_ e ative a opção de _Dependabot version updates_ clicando no botão de _Enable_.

O GitHub criará dentro da pasta `.github` um arquivo chamado `dependabot.yml`. Na linha 8 deste arquivo, adicione o gerenciador de pacotes usado no projeto, no nosso caso é o “npm”. Essa linha ficará da seguinte maneira:

```go
    - package-ecosystem: “npm”
```

As demais configurações podem ser deixadas como estão.

Clique no botão superior direito verde de _Commit changes_. O commit será criado em uma nova branch e abrirá um PR. Aceite o PR e assim as atualizações de segurança estarão configuradas.


