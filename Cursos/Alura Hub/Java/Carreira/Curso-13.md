## Transcrição

Olá! Te desejo as **boas-vindas a mais um curso da formação de DevOps**! Meu nome é Lucas Mata e serei seu instrutor nesta jornada.

> **Audiodescrição:** Lucas é uma pessoa branca, de barba e bigode ralos curtos e escuros. Possui cabelo curto e liso, também escuro, e usa óculos de armação redonda na cor preta. Veste uma camiseta branca com um QR Code estampado e está sentado em uma cadeira gamer na cor preta. Ao fundo, uma parede iluminada em tons de azul e roxo, e uma estante com itens decorativos.

Começaremos este curso compreendendo o conceito de _containers_, e como podemos utilizá-los para transferir soluções, como aplicações e softwares, entre diferentes ambientes. Durante o curso, faremos uso da ferramenta Docker.

Abordaremos também a criação de imagens para aplicações e como implantá-las em ambientes de nuvem. Além disso, entenderemos como garantir a persistência de dados utilizando _containers_. Tudo isso será contextualizado através do projeto da aplicação web chamada **Allbooks**.

Não se esqueça de aproveitar os recursos oferecidos pela plataforma. Além dos vídeos, temos atividades disponíveis e você pode contar com o apoio do [fórum](https://cursos.alura.com.br/forum/todos/1) e da [nossa comunidade no Discord](https://discord.com/invite/QeBdgAjXnn). Se você ainda não assistiu aos cursos anteriores desta formação, recomendamos fazê-lo para aproveitar ao máximo o conteúdo.

Nos vemos nos próximos vídeos para darmos mais um passo em nossa jornada de aprendizado em DevOps!

## Transcrição

A integração e a colaboração entre as equipes de desenvolvimento e operações não surgem por acaso. Temos observado a evolução dos softwares em relação à sua complexidade e à diversidade de funcionalidades. Podemos analisar um caso concreto que já conhecemos, que é o da plataforma web _Allbooks_.

## Processo de desenvolvimento

Para que essa plataforma esteja disponível para as pessoas usuárias na web, ela passa por uma série de processos. Na imagem a seguir podemos observar que para desenvolvermos uma plataforma ou mesmo outro software como o _Allbooks_, começamos identificando os requisitos. Ou seja, as principais características que esse produto deve ter.

![Infográfico de processo linear em cinco etapas com ícones e texto em fundo escuro. As etapas são enumeradas de 1 a 6, nomeadas respectivamente como "Identificação das necessidades", "Especificação técnica", "Documentação", "Testes", "Revisão" e "Publicação".](https://cdn1.gnarususercontent.com.br/1/1310269/e9ddba94-f895-4dae-a233-b24302e4dad9.png)A partir daí, saímos com uma lista de especificações técnicas para iniciar o processo de desenvolvimento. Depois, vamos testando essas funcionalidades implementadas e revisamos de acordo com o resultado desses testes, até que chegamos na fase de homologação, quando a solução está pronta para ser disponibilizada e colocada em produção para ser acessada pelas pessoas usuárias.

## Desafios na transição entre ambientes

Ao longo desse processo, notamos que a solução passa por uma variedade de ambientes, cada um com seus próprios sistemas, dependências e bibliotecas específicas. Isso muitas vezes resulta em conflitos dentro da equipe, oriundos geralmente de dilemas em que a aplicação funcionava em determinada máquina.

Como podemos resolver esse problema e garantir consistência entre os diferentes ambientes, como desenvolvimento, teste e produção? Pensando em um software como um produto, como podemos garantir uma transição suave entre esses ambientes? É como transportar um produto da fábrica até a casa do cliente, passando por diferentes meios de transporte e locais geográficos.

## Solução com contêineres

No mundo físico, os contêineres facilitam o transporte de mercadorias, e você provavelmente já ouviu falar de contêineres também no contexto tecnológico. Essa solução é exatamente o que podemos utilizar para resolver o problema de consistência entre diferentes ambientes pelos quais uma solução de software passa. Ao encapsular o software dentro de contêineres, garantimos a consistência e evitamos problemas com pré-requisitos e dependências instaladas em cada ambiente.

O contêiner é uma solução de virtualização. Já vimos algo parecido quando tivemos que usar uma máquina virtual com o Ubuntu Server para explorar o Linux, usando um software de virtualização conhecido como VirtualBox. Mas há diferenças marcantes entre uma máquina virtual e um contêiner.

## Diferenças entre Máquinas Virtuais e Contêineres

Em uma máquina virtual (VM), o funcionamento se dá com o hardware físico, seguido pelo sistema operacional instalado. Acima dessa camada, encontra-se o **hypervisor**, responsável por isolar o funcionamento do software de virtualização do sistema operacional hospedeiro. Dentro desse ambiente, podemos ter diferentes sistemas operacionais, independentes do sistema hospedeiro, e prepará-los com as dependências necessárias, configurando partes do software conforme necessário. Esta é a abordagem típica de virtualização usando máquinas virtuais.

|Frontend|Backend|Bando de Dados|
|---|---|---|
|Dependências|Dependências|Dependências|
|SO 1 Virtualizado|SO 2 Virtualizado|SO 3 Virtualizado|
|Hypervisor|Hypervisor|Hypervisor|
|Sistema Operacional|Sistema Operacional|Sistema Operacional|
|Hardware|Hardware|Hardware|

Por outro lado, os contêineres funcionam de maneira um pouco diferente. Embora também tenhamos as camadas de hardware e sistema operacional, não há uma camada de hypervisor. Em vez disso, os contêineres são executados diretamente sobre o sistema operacional hospedeiro, eliminando a necessidade dessa camada de isolamento. Isso é possível graças aos **namespaces**, que garantem diferentes níveis de isolamento entre os contêineres.

|Frontend|Backend|Bando de Dados|
|---|---|---|
|Dependências|Dependências|Dependências|
|Container 1|Container 2|Container 3|
|Sistema Operacional|Sistema Operacional|Sistema Operacional|
|Hardware|Hardware|Hardware|

Nos contêineres, não é necessário ter um sistema operacional completo instalado. Podemos utilizar apenas as partes necessárias do sistema e acessar o kernel do sistema operacional hospedeiro, aumentando a eficiência e facilitando o uso de recursos. Enquanto nas VMs era preciso alocar recursos específicos para cada VM, nos contêineres, eles são executados como processos isolados dentro da máquina, proporcionando uma gestão eficiente dos recursos por meio dos **cgroups**.

Além disso, os contêineres utilizam diversos namespaces para o isolamento em diferentes níveis:

- **PID**: provê isolamento dos processos rodando dentro do contêiner;
- **NET**: provê isolamento das interfaces de rede;
- **IPC**: provê isolamento da comunicação entre processos e memória compartilhada;
- **MNT**: provê isolamento do sistema de arquivos/pontos de montagem;
- **UTS**: provê isolamento do kernel. Age como se o contêiner fosse outro host.

Então, os contêineres são uma solução prática e eficiente de virtualização, que nos permite fazer esse transporte do software entre diferentes ambientes sem problemas de consistência, evitando qualquer conflito em relação a dependências e bibliotecas que possam ou não estar instaladas nesses diferentes ambientes pelos quais o software vai passar.

## Próximos passos

Agora, podemos começar a explorar como usar os contêineres, na prática. Para isso, na sequência, você encontrará uma atividade para preparar o seu ambiente!

#   
Para saber mais: namespaces e Cgroups

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153376/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153376/question)

Uma das características que destacamos no uso de containers é o seu isolamento em diferentes níveis. Podemos compreender o isolamento como um modo de empacotar uma aplicação incluindo todos os recursos necessários para sua execução, garantindo que o software apresente o mesmo comportamento em diferentes ambientes.

Os namespaces possuem um papel fundamental neste sentido, gerando o isolamento de grupos de processos em seu nível lógico. Assim, os processos dentro do container são completamente isolados dos processos que estão em execução no host.

Alguns exemplos fundamentais de namespaces são:

- PID (Process Identifier Namespace): isolamento de processos que estão em execução dentro do container.
- NET (Network Namespace): isolamento dos recursos de rede, como interfaces de rede, endereços IP e tabelas de roteamento.
- IPC (Inter-Process Communication Namespace): isolamento dos mecanismos de comunicação entre processos, como filas de mensagens e memória compartilhada.
- MNT (Mount Namespace): isolamento do sistema de arquivos e pontos de montagem, garantindo que alterações no sistema de arquivos dentro de um container não afetem o sistema de arquivos fora dele.
- UTS (Unix Timesharing System Namespace): isolamento do kernel, permitindo que o container atue como se fosse outro host.

Por sua vez, o gerenciamento dos recursos físicos compartilhados entre os processos fica sob responsabilidade de um recurso conhecido como Cgroups (grupos de controle). Os Cgroups permitem que o Docker aloque recursos como tempo da CPU, memória do sistema, largura de banda de rede ou combinações destes.


# Preparando o ambiente: instalando o Docker

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153377/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153377/question)

Para realizar esse curso, você precisa ter instalado o Docker em seu computador. Caso ainda não tenha feito isso, faça o download e a instalação conforme detalhamos a seguir.

## Windows

Caso seu sistema operacional seja o Windows, você deve realizar os seguintes passos para instalação do Docker:

- Em primeiro lugar, é interessante [instalar o WSL](https://learn.microsoft.com/pt-br/windows/wsl/install), que significa Windows Subsystem for Linux ou Subsistema Windows para Linux. Este recurso do Windows irá garantir um ambiente no qual o Docker funcionará. Também é indicado [acessar o nosso artigo WSL: como executar programas e comandos Linux no Windows?](https://www.alura.com.br/artigos/wsl-executar-programas-comandos-linux-no-windows) para colaborar na instalação.
    
- [Baixe o Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/).
    
- Após a instalação, [crie uma conta gratuita no Docker Hub] ([https://hub.docker.com/signup](https://hub.docker.com/signup)) e garanta estar logado no Docker Desktop com ela Em alguns casos, o próprio processo de instalação do Docker Desktop irá incluir o cadastro e login.
    
- Para começar com os comandos do Docker, abra o menu de busca do Windows e inicialize o programa denominado "Ubuntu" (instalado junto com o WSL). Isso abrirá um bash de linha de comando no qual o curso todo poderá ser desenvolvido e todos os comandos utilizados durante as aulas funcionarão perfeitamente.
    

É possível utilizar o PowerShell do Windows como um substituto ao "Ubuntu" do WSL. No entanto, vale destacar que alguns dos comandos abordados ao longo do curso podem não ser os mesmos no PowerShell devido à diferença de Sistemas Operacionais.

Além disso, é importante ressaltar que o Docker para Windows pode apresentar algumas restrições de uso, além de ter custos, sendo mais recomendado usar a versão para Linux.

## Linux

Caso seu sistema operacional seja Linux, você deve observar a seguinte documentação para instalação do Docker:

- [Acesse para baixar o Docker Ubuntu](https://docs.docker.com/engine/install/ubuntu/).

Caso esteja utilizando outra distribuição Linux, é possível consultar no menu à esquerda da página outras distribuições possíveis para instalação do Docker.

Após instalar, execute o comando `sudo usermod -aG docker $USER` e reinicie sua sessão para utilizar o Docker. Dessa forma, não será mais necessário lidar com permissões a cada vez que executar um comando.


## Transcrição

O Docker será a ferramenta que utilizaremos para criar, implantar e executar aplicativos usando contêineres. Então, vamos explorar essa ferramenta de conteinerização.

## Preparação do ambiente

Antes, é importante que você tenha realizado com êxito as atividades de preparação do ambiente que antecedem este vídeo. Dependendo do seu sistema operacional, essas atividades variam um pouco. Mas vamos aprender a instalação do Docker tanto no Windows, quanto no Linux.

É importante destacar que **o uso do Docker é altamente recomendado no ambiente Linux**, para podermos tirar o máximo proveito dessa ferramenta em termos de eficiência e produtividade, assim teremos também um ambiente mais estável para o uso e gerenciamento dessa plataforma. Sabemos que a maioria das pessoas utiliza o Windows, que já vem nativo no computador, então também conseguiremos estudar e aprender bastante sobre o Docker e sobre o uso de contêineres usando o ambiente Windows.

No ambiente Windows, especificamente, teremos que adotar uma camada de virtualização, onde usaremos o `WSL2`, _Windows Subsystem for Linux_, que é um subsistema, como o próprio nome sugere, que vai executar um ambiente Linux dentro do ambiente Windows, nos permitindo usar o Docker dentro do ambiente Windows.

## Regras de uso do Docker

É importante também que, ao usarmos o Docker, estejamos atentos em relação às regras de uso, que podem variar ao longo do tempo, sobretudo quando vamos fazer um uso mais econômico, ou seja, construir um software, como um produto. Precisamos estar atentos aos limites de faturamento da empresa para não fazermos o uso do Docker de forma indevida. Para fins educacionais, não temos problema nenhum, podemos seguir tranquilamente.

## Testando a instalação do Docker no ambiente Windows

Para começar, vamos testar se o Docker está bem instalado no ambiente Windows. Então, vamos no menu iniciar, buscamos por "WSL2" e abrimos. Isso abrirá o prompt de comando.

Para testar, vamos usar uma ferramenta comum para o ambiente Docker, que é um contêiner `hello world` (olá mundo), tal qual no mundo da programação, em que costumamos imprimir o `hello world` para dar os primeiros passos em uma determinada linguagem.

Para isso, vamos digitar `docker run`, que vai executar um contêiner usando a ferramenta Docker, e especificar o contêiner `hello-world`.

```undefined
docker run hello-world
```

Ao teclar "Enter", obtemos como retorno uma mensagem dizendo que a instalação aparentemente está funcionando bem, além das etapas necessárias para gerar essa mensagem, introduzindo-nos no Docker.

## Testando a instalação do Docker no ambiente Linux

Se estivermos usando o ambiente Linux para realizar este teste, podemos seguir os seguintes passos: primeiro, instalamos o Ubuntu dentro do WSL. Em seguida, no menu superior, acessamos a opção "Ubuntu" no menu em cascata. Depois, digitamos o comando `docker run hello-world` e pressionamos "Enter". Isso resultará na geração da mesma mensagem.

## Solução para problemas com o comando `sudo`

Se, por acaso, você nunca utilizou o Docker no ambiente Linux e se deparar com um erro, não se preocupe. Não há problema com sua instalação. O Docker às vezes requer o uso do comando `sudo`, então pode ser necessário executar `sudo docker run hello-world`.

Para evitar ter que utilizar o `sudo` toda vez que executar um comando no Docker, podemos adotar uma estratégia alternativa. Essa estratégia envolve a criação de um grupo chamado `docker` no sistema e a inclusão do nosso usuário nele. Dessa forma, não será mais necessário usar o `sudo` sempre que quisermos executar algum comando do Docker.

Para realizar esse procedimento, digitamos `sudo usermod -aG docker $` seguido do usuário. Em nosso caso, o usuário é `alura`, mas você deve utilizar o seu usuário.

```bash
sudo usermod -aG docker $alura
```

Após pressionar "Enter", será solicitada a senha, e o comando será executado. Com isso, o Docker será adicionado ao grupo `docker`, o grupo será criado, e o nosso usuário será inserido nele, permitindo que executemos o Docker sem precisar escalonar privilégios.

## Próximos passos

Com todos esses testes concluídos e o Docker funcional em nosso computador, é hora de explorar mais sobre como utilizar contêineres. Isso nos permitirá, inclusive, executar nossa plataforma web Allbooks de forma conteinerizada.

# Para saber mais: virtualização baseada em containers

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153378/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153378/question)

Assim como o VirtualBox que usamos para criar máquinas virtuais (VMs) com sistemas operacionais específicos (Ubuntu Server, por exemplo) para testes ou análises, o Docker também é um sistema de virtualização. A grande diferença entre eles está no modo de virtualização adotado, já que o Docker está baseado no conceito de containers.

A ideia dos containers surge da necessidade de reduzir divergências entre os diversos ambientes comuns no desenvolvimento de software, tais como desenvolvimento, teste, homologação e produção. O uso do termo “container” para designar o conceito não foi uma escolha ao acaso. Os containers surgiram como uma solução no transporte de cargas para facilitar atividades envolvidas no transporte de mercadorias de seu ambiente de fabricação até consumidores finais (casa, indústria, comércio, dentre outros), passando por diferentes meios de transporte e terminais de carga.

Podemos imaginar o software como um produto que deve ser transportado do ambiente de desenvolvimento para produção. Neste caso, nossa maior preocupação está em garantir que os diferentes ambientes envolvidos neste processo tenham todos os pré-requisitos instalados, de preferência com uma versão do sistema operacional semelhante à adotada no ambiente de desenvolvimento.

O Docker atua justamente nesse sentido. Temos um container com nosso software que pode ser levado de um ambiente para outro sem problemas relacionados aos pré-requisitos necessários no ambiente para sua execução. Assim, conseguimos minimizar eventuais divergências entre ambientes no desenvolvimento de software.

## Transcrição

Agora, vamos examinar como o Docker nos ajuda a criar e executar contêineres. Vamos revisitar um comando que usamos para testar nosso ambiente, que é o `docker run hello-world`.

## Comando `docker run`

Ao executá-lo, recebemos uma mensagem indicando que está tudo certo, mas o que exatamente o comando `docker run` faz? O `docker run` está executando um contêiner, enquanto o `hello-world` é um contêiner de teste projetado para verificar se nosso ambiente está funcionando corretamente. No entanto, podemos usar esse mesmo comando para executar outros contêineres mais sofisticados, contendo aplicações e outras funcionalidades.

## Conceito de imagem no Docker

O `hello-world` é o que conhecemos como imagem. Mas o que é uma imagem no contexto do Docker? Podemos pensar em uma **imagem** como um **arquivo executável independente**, que contém todas as **dependências e arquivos necessários** para o contêiner ser executado como um processo isolado em nossa máquina. Ao longo do curso, vamos explorar mais detalhes sobre imagens e aprender a criar nossas próprias imagens.

## Docker Hub: Repositório Central de Imagens

Mas de onde nosso comando vai obter essa imagem para executar o contêiner? Ele obtém essa imagem do que chamamos de repositório central do Docker, conhecido como Docker Hub. Na verdade, **o Docker Hub funciona como um serviço para registrar, armazenar e compartilhar imagens** no ambiente Docker. Podemos, inclusive, visitar o Docker Hub para verificar quais imagens estão disponíveis e escolher qual imagem queremos usar para criar nossos próprios contêineres.

Então, se acessarmos o site do Docker Hub pelo endereço [hub.docker.com](https://hub.docker.com/) e pesquisarmos por `hello-world` na barra de busca, veremos as informações sobre essa imagem que usamos para executar o contêiner de teste. A primeira informação que encontramos é o selo "Docker Official Image", que indica que essa imagem é oficial. Em outras palavras, ela foi criada por um grupo de desenvolvedores e é reconhecida pela comunidade como uma imagem oficial do Docker.

Se descermos um pouco a página, encontraremos outras informações relacionadas a essa imagem. Veremos algumas tags disponíveis, a forma de uso e o output que obteremos ao executar essa imagem, semelhante ao que vimos em nosso prompt de comando. Além disso, ao clicar em "Official Images", podemos verificar outras imagens oficiais do Docker como, por exemplo, o webserver NGINX, muito utilizado para aplicações web.

## Criando um contêiner com a imagem do Ubuntu

Se quisermos executar um contêiner com um sistema operacional, podemos fazer isso também. Embora um contêiner não necessariamente precise conter um sistema operacional completo, podemos executar um contêiner com uma distribuição do Linux, como o Ubuntu. Portanto, se digitarmos "Ubuntu" na barra de busca e clicarmos na opção correspondente, encontraremos a imagem oficial do Docker do Ubuntu, que podemos usar para criar um contêiner. Que tal criarmos agora um contêiner com essa imagem?

Quando usamos o comando `docker run ubuntu`, primeiro o Docker verifica se essa imagem está disponível localmente em nosso PC. Caso ainda não a tenhamos baixado, ele fará uma busca no registry, que é o Docker Hub, fará o download e criará o contêiner usando essa imagem. Se quisermos apenas baixar a imagem para deixá-la disponível localmente, também podemos fazer isso usando o comando `docker pull ubuntu`.

Com este comando, apenas faremos o download da imagem, sem criar um contêiner. Vamos baixar a última versão dessa imagem, que é a "latest", e o Docker fará todo o processo de busca e download dessa imagem. Assim que o download estiver concluído, a imagem estará pronta para usarmos e criar um contêiner.

Então, se executarmos agora o comando `docker run ubuntu`, o Docker não fará o download novamente, uma vez que a imagem já está disponível localmente. No entanto, aparentemente, nada aconteceu. Por outro lado, quando digitamos o comando `docker run hello-world`, recebemos uma mensagem de output. Diante disso, surge a dúvida: será que tudo ocorreu como esperado? Ou será que ocorreu algum erro? Se algum erro tivesse ocorrido, certamente receberíamos uma mensagem indicando isso.

## Verificando contêineres em execução

Vamos agora utilizar o comando `docker ps`, que mostra todos os processos relacionados ao Docker, ou seja, todos os contêineres em execução em nosso PC. Ao digitar `docker ps`, uma tabela com várias colunas é exibida, e podemos verificar que não há nenhum contêiner em execução. No entanto, acabamos de executar o comando `docker run ubuntu`. Então, o que pode estar acontecendo?

Se executarmos agora `docker ps -a`, teremos uma lista mais completa com todos os contêineres que foram executados em algum momento em nosso PC. Veremos que um contêiner com a imagem Ubuntu foi o último a ser executado, há alguns segundos.

Além disso, teremos algumas informações adicionais, como o "Container ID", a imagem utilizada, o comando executado no momento da criação do contêiner e o status atual dele. Note que o status de todos esses contêineres é "Exited", ou seja, os processos foram encerrados. Isso sugere que o comando `docker run ubuntu` funcionou, mas o contêiner não está mais em execução.

Como podemos manter um contêiner em execução? Quais são as características e o significado do comando que é executado quando o contêiner é iniciado? Vamos explorar isso na sequência.

# Faça como eu fiz: explorando a Docker CLI

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153381/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153381/question)

Ao longo dessa aula, investigamos a criação de containers com o Docker e a importância das imagens nesse processo. Exploramos também o Docker Hub para verificar alguns detalhes sobre as imagens que utilizamos.

Você já criou um container? Visitou o Docker Hub para analisar algumas características das imagens? Então agora é com você! Caso queira consultar os passos que seguimos para realizar a investigação, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153381/opinion)

Primeiro, executamos o comando `docker run hello-world` para verificar se a instalação do Docker está funcionando corretamente. Assim, preparamos o ambiente para realização do curso. Ao executar esse comando, o Docker busca a imagem chamada "hello-world" localmente. Se a imagem não estiver disponível, será realizado o seu download diretamente do Docker Hub. Em seguida, ele cria um container temporário baseado nessa imagem e o inicia. Na sequência, criamos um container com um sistema operacional, a distribuição Ubuntu do Linux. Antes, realizamos uma pesquisa no [Docker Hub](https://hub.docker.com/) para identificar qual imagem deveríamos utilizar nesse processo. Então, executamos o comando `docker run ubuntu`. Constatamos que é possível também realizar o download de imagens, deixando-as disponíveis localmente para criação de containers usando o comando `docker pull ubuntu`. Para obter detalhes sobre os containers que estão em execução em nosso computador, usamos o seguinte comando: `docker container ls` Já para obter também detalhes sobre containers que foram executados e não estão mais em execução no momento, utilizamos o seguinte comando: `docker ps -a` Assim, conseguimos o acesso a várias informações dos containers executados em nosso computador.

## Transcrição

Nossa principal meta é implementar a aplicação do Allbooks usando containers. Para isso, estamos avançando no estudo, explorando como usar containers na ferramenta Docker. Criamos containers, entendemos o conceito dos containers e algumas de suas principais características.

Uma das coisas que observamos quando criamos o container com a distribuição Ubuntu do Linux foi que o container iniciou, mas logo encerrou sua execução.

Precisamos entender o que aconteceu. O que ocorre quando iniciamos esse container e depois ele basicamente encerra a operação sem dar um feedback para nós no nosso CLI.

Vamos digitar aqui, no nosso prompt, o `docker ps` novamente.

```css
docker ps -a
```

Temos aqui o último container que executamos, foi do Ubuntu. E observe que temos aqui essa coluna do comando (_command_).

Já entendemos que quando digitamos o `docker run`, especificamos a imagem e ao especificar essa imagem tem todas as dependências, os arquivos que são necessários para executar aquele container.

Esse comando é o comando padrão que é executado toda vez que executamos um container com essa imagem e não especificamos um comando que será executado quando esse container iniciar na nossa máquina.

Agora, vamos dar um `clear` para limpar nossa tela, e digitar o seguinte comando:

```bash
docker run --help
```

O que teremos? Teremos algumas opções que podemos usar junto do comando `docker run`. Podemos explorar um pouco essas opções aqui.

Uma delas é, por exemplo, iniciar um container usando o `docker run Ubuntu`, e especificar um comando que será executado assim que esse container for criado.

Nesse caso, vamos executar um comando bem específico que é um comando que vai manter esse container em execução durante um dia, que é o comando _sleep one day_ e ao invés de escrever "one day", escrevemos "1d".

```bash
docker run ubuntu sleep 1d
```

Ao executarmos esse comando, o container está sendo criado, a imagem já foi baixada, já baixamos no nosso PC.

E o que observamos é que não apareceu nenhuma mensagem e o nosso terminal ficou meio que travado. E isso não é por acaso, para verificar o que está acontecendo, podemos clicar aqui nessa barra superior, clicar em "Ubuntu" e executar o comando `docker ps` para verificar se de fato está em execução.

|CONTAINER ID|IMAGE|COMMAND|CREATED|STATUS|PORTS|NAME|
|---|---|---|---|---|---|---|
|d05d276d636f|ubuntu|"sleep 1d"|36 seconds ago|Up 35 seconds||jolly_ptolemy|

Observe que agora, esse container que criamos com a distribuição Ubuntu do Linux, ele está em execução e tem um comando aqui, ao invés do `bin/bash`, tem agora o que? O `sleep 1d`, que foi aquele comando que especificamos.

E aqui temos um status, ou seja, ele foi criado há 36 segundos e ele está ativo também por um determinado tempo. E assim, esse container, ele ficará em execução durante 24 horas, a não ser que paremos ou interrompamos a execução dele.

Uma das coisas que tem aqui é um nome um tanto quanto peculiar, certo? `jolly_ptolemy`. Esse nome é um nome atribuído de forma aleatória pelo próprio Docker para esse container. Então, podemos usar esse nome, por exemplo, para enviar um sinal para esse container, um sinal de pausa, um sinal de parada, um sinal de reinicialização, caso ele esteja parado. Podemos enviar um sinal para esse container.

Para isso, podemos, por exemplo, parar a sua execução usando o comando `docker stop`. Mas como especificamos qual container vamos parar? Podemos usar tanto o _container id_, quanto esse nome peculiar que foi atribuído.

Vamos usar esse nome aqui, o `jolly_ptolemy`.

```vbnet
docker stop jolly_ptolemy
```

Após executarmos esse comando, ficou travado aqui. Se viermos no menu superior novamente e selecionarmos "Ubuntu", podemos executar um `docker ps`, observe que agora o container não mais está em execução. Não retornou informações para as colunas de container id, image, command, etc.

Se quisermos retomar esse container, podemos executar o comando `docker start jolly_ptolemy`, que é o nome do container, e vamos lá com o `docker ps`. Ele voltou a ser executado.

```sql
docker start jolly_ptolemy
```

```undefined
docker ps
```

Então, podemos usar tanto o nome do container, como também o _container id_ para enviar um sinal para esse container, um sinal para orientar a execução, se queremos pausar, se queremos interromper.

Com isso, já sabemos um pouco melhor que ao criarmos um container, podemos especificar o comando que será executado assim que esse container for criado.

No entanto, quando criamos uma aplicação, não queremos apenas executar um comando. Queremos um container que esteja em execução e queremos a capacidade de interagir com os processos que estão sendo executados dentro desse container. Como fazer isso? Vamos explorar isso na sequência.

# Para saber mais: imagens

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153385/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153385/question)

Aprendemos que para colocar um container em funcionamento, o Docker precisa ter uma imagem no host. Outro fato é que quando criamos um container Docker, temos uma cápsula de software contendo todas as dependências necessárias para executar uma determinada aplicação. As configurações e instruções para iniciar ou parar containers são estabelecidas pela imagem.

Essas imagens podem ser baixadas de um repositório (cujo nome é registry) ou criadas localmente e compiladas. Por sua vez, o Docker mantém o repositório [Docker Hub registry](https://hub.docker.com/).

Nesse registry podemos ter imagens oficiais e não-oficiais. Além disso, há a opção de criar nossas próprias imagens e realizar o upload em um repositório dentro desse hub.

Para criar uma imagem, podemos usar um arquivo de definição chamado de Dockerfile, no qual utilizamos algumas diretivas para declarar o que teremos em nossa imagem.

Não se preocupe em entender todos esses detalhes agora, vamos explorar esses aspectos no decorrer do curso!

## Transcrição

Vamos retomar a questão de como conseguimos interagir com a imagem, com a aplicação que está dentro de um container.

Temos um container de execução com a imagem do Ubuntu. Ele vai permanecer em execução durante um dia, porque especificamos esse comando, `sleep 1d` (_sleep one day_).

E a nossa dúvida é: como conseguimos interagir com esse sistema operacional que está lá dentro desse container?

Podemos usar um comando que é o `docker exec` seguido de `-it`. O hífen indica que vamos interagir, vamos executar esse comando de forma interativa, e o `t` é do terminal com o qual queremos interagir, que é o `tty`, que é um terminal padrão aqui dessa imagem do Ubuntu.

Agora precisamos especificar para qual container queremos executar esse comando, ou seja, podemos usar tanto o `id` quanto o nome dele.

Podemos copiar o `id` também, usamos na outra vez o nome, vamos fazer diferente. Usaremos o id. Vamos especificar que queremos interagir com o `bash`.

```bash
docker exec -it d05d276d636f bash
```

Ao execurtamos esse comando, observe que já mudou, já entramos diretamente no terminal desse container, no terminal do sistema operacional que está em execução lá dentro. Se observarmos aqui, estamos como usuário _root_, e o `id` dessa máquina é exatamente o mesmo `id` do nosso container.

> root@d05d276d636f:/#

Podemos executar o comando `ls -a`, para verificar o que tem ali dentro da _home_ desse sistema operacional.

Podemos criar um arquivo, usando o comando `touch`:

```bash
touch arquivo_teste
```

Em seguida, podemos executar o comando `ls` para verificar que esse arquivo teste está lá. Foi criado dentro desse sistema operacional que está sendo executado de forma _containerizada_.

Se quisermos sair desse container, basta pressionar o atalho "Ctrl + D". Com esse atalho, paramos a execução desse nosso comando `docker exec` ali, paramos de interagir com esse container.

Poderíamos pausar esse container, poderíamos dar um `docker stop` com o id dele.

```vbnet
docker stop d05d276d636f
```

Lembrando que toda vez que executamos o `docker stop`, por padrão, ele demora 10 segundos para parar o container de forma suave, por isso que demora um tempinho, parece que vai travar o terminal, mas ele não trava, ele só aguarda esses 10 segundos.

Poderíamos inclusive pará-lo de uma forma mais abrupta. Poderíamos especificar o tempo aqui, parar imediatamente o nosso container indicando o `-t=0`.

```vbnet
docker stop -t=0 d05d276d636f
```

Mas vamos apagar esse comando porque a execução desse container já foi parada, não adianta pararmos novamente. Isso é só para mostrar como que faríamos para parar o container de forma mais rápida.

Se quisermos retomá-lo aqui, para verificar se o nosso arquivo continua lá, damos aqui novamente um `docker start` e especificamos aqui o `id` do container.

```sql
docker start d05d276d636f
```

Se viermos aqui no `docker ps`, ele está lá, funcionando, e agora podemos executar o mesmo comando anterior, o `docker exec -it` com o `id` do nosso _container_.

```bash
docker exec -it d05d276d636f bash
```

Se executarmos um `top` para verificar os comandos que estão sendo executados, vamos ter aqui o comando `top`, o comando `sleep` e o comando `bash` que estão sendo executados dentro do nosso container.

Observe que quando executamos o `docker stop`, esses dois comandos, o tempo de execução deles foram resetados. Ou seja, quando damos o `docker stop`, ele para tudo que está ali em execução, toda a árvore de processos, e quando executamos o `docker start`, esses processos são reiniciados.

Será que tem alguma forma de pausar a execução de um container sem paralisar toda a árvore de processos? Ou seja, manter a árvore de processos ativa? Podemos usar um outro comando que é o `docker pause` com o `id` do container. Vamos usar o atalh o"Ctrl + D" para saur da exibição do `top`.

```css
docker pause d05d276d636f
```

Após executar o comando acima, se verificarmos no `docker ps`, ele está com o status de pausado.

Vamos agora dar um `docker unpause` e especificar o container.

```undefined
docker unpause d05d276d636f
```

Ele está agora reativado, vamos executar novamente o `docker exec` com o mesmo `id` do container e verificar lá os processos em execução com o comando `top`.

```bash
docker exec -it d05d276d636f bash
```

```css
top
```

Observe que dessa vez a árvore de processos não foi reinicializada.

Agora, uma coisa que podemos fazer e analisar é o seguinte, como podemos apagar a execução desse container?

Subimos esse container, já cumpriu o seu papel, agora queremos apagar esse container. E queremos criar um novo container aqui usando a mesma imagem, até para verificarmos ali essa questão da persistência dos arquivos, é um ponto interessante.

Mas antes, que tal analisarmos se o arquivo que criamos dentro desse container está, de alguma forma, conectado com a nossa máquina.

Se formos lá no _home_ da nossa máquina, será que esse arquivo está lá?  
Podemos constatar isso para verificar de fato o isolamento dos _containers_.

Vamos clicar no menu superior e selecionar a opção "Ubuntu". Estamos aqui no _home_ da nossa máquina, vamos dar um `ls -a`.

```bash
ls -a
```

> .aws .azure .bash_logout docker profile .bash_history.bashrc .motd_shown . sudo_as_admin_successful

Observe que aqui dentro não temos nenhum vestígio do arquivo que criamos lá dentro do nosso container. O que comprova o seguinte, há um isolamento desse container em relação ao _host_, em relação à máquina que estamos utilizando aqui.

Agora vamos verificar também o isolamento entre diferentes _containers_. Vamos sair aqui, dar um "Ctrl + D", e executar o comando `docker rm`, ou seja, vamos remover esse container que tem ali a distribuição do Linux.

```bash
docker rm d05d276d636f
```

Ele indica um erro e fala o seguinte: você não pode remover porque esse container está em execução.

Vamos ter que dar um comando forçando essa remoção. Usaremos o seguinte comando:

```bash
docker rm --force d05d276d636f
```

Após executar esse comando, se executarmos um `docker ps -a`, vamos ver que esse container estava em execução e foi parado há 59 minutos.

Agora podemos subir novamente um container, usando exatamente a mesma imagem, `docker run ubuntu sleep 1d`.

```bash
docker run ubuntu sleep 1d
```

Agora ele vai travar novamente o terminal, vamos vir aqui, abrir um outro terminal, vamos dar um `docker ps`, ele está em execução.

Agora vamos tentar acessar o terminal desse container.

```bash
docker exec -it 5e3a73e94b0b bash
```

Acessamos aqui, a primeira coisa que vamos ver é o seguinte, vamos ver o que tem aqui na árvore de arquivos dele, no _home_. No _home_ não tem aquele arquivo teste que criamos anteriormente.

Então o que observe que uma vez criado um container, se geramos algum tipo de dado e não tinha nenhum mecanismo para armazenar, para fazer a persistência desse dado, o que acontece é que esse dado simplesmente é **perdido assim que esse container é parado**, ou seja, assim que ele é encerrado e removido da nossa máquina.

Então ele não tem ali nenhum tipo de contato com outro container, mesmo um container que tenha ali uma imagem igual à que foi utilizada para sua criação, nem mesmo com o nosso computador, nem mesmo com o sistema de arquivos do nosso _host_, da nossa máquina.

> Então é importante sempre verificar ali os mecanismos de persistência, porque muitas vezes não queremos perder os dados que estão ali em execução, principalmente quando temos uma aplicação que tem ali dados de usuários, interação, etc.

Vamos dar um "Ctrl + D" para sair da execução do `docker exec`.

Agora temos uma questão mais objetiva. E se desde a criação do container quisermos ter algum mecanismo de interação com o que está ali sendo executado dentro dele? Será que é possível?

Podemos executar o seguinte comando, vamos usar a mesma imagem e especificar o comando `bash`. E especificaremos com o `it` que queremos interagir com esse terminal que está desse Ubuntu aqui em execução dentro do container assim que o container for criado.

```undefined
docker run -it ubuntu bash
```

Agora podemos, por exemplo, executar o comando `ls -a` para verificar o que tem ali dentro, criar um novo arquivo, por exemplo. Então conseguimos interagir com esse container da mesma forma.

Agora, se sairmos, se dermos um "Ctrl + D" e executarmos um `docker ps`, o que verificamos?

O contêiner com o `bash` não está mais em execução. Por que uma vez que esse comando que foi especificado aqui na sua criação, que saímos do `bash`, que saímos lá do terminal, ele não tinha mais comando para ser executado. Logo, a execução dele foi encerrada.

Então só ficamos aqui com aquele container que criamos anteriormente, que tem o comando `sleep 1d`, que vai ficar ali durante um dia, sendo executado sem nenhum processo, mas sendo mantido de forma ativa.

## Próximo passo

Bem, analisamos alguns comandos e como interagir, como criar, remover o container, como pausar, enviar um sinal de forma geral para um container.

Agora vamos investigar como conseguimos subir containers com aplicações. Vamos lá?

## Transcrição

Agora, podemos executar um passo bem interessante, entendendo como executar uma aplicação web dentro de um container e também como acessá-la a partir do nosso navegador.

Para isso, precisamos de uma imagem.

No [site do Docker](https://hub.docker.com/), vamos pesquisar uma imagem que possamos usar. Vamos acessar a `docker/example-voting-app-vote`.

Observe que essa imagem tem um nome bem diferente das que usamos anteriormente. E essa imagem não é uma imagem oficial, embora seja da organização do próprio Docker. O que observamos é um selo dizendo o seguinte: "Verified Publisher". Ou seja, essa organização é uma organização verificada.

Então, sempre recomendamos que sejam utilizadas **imagens oficiais**, que tenham aquele selo, são reconhecida pela comunidade. Nesse caso, é uma imagem de exemplo de uma aplicação web que foi disponibilizada pelo próprio Docker.

Quando a imagem é não oficial, ela tem uma nomenclatura diferente. Temos primeiro o nome da organização ou da pessoa usuária que criou essa imagem. No caso, é o próprio Docker. E temos uma barra e o nome da imagem propriamente dito. Que nesse caso é `example-voting-app-vote`.

Agora, podemos criar um container com essa imagem.

Vamos no nosso terminal. E vou criar usando o `docker run`. Só que dessa vez, vamos fazer diferente. Ao invés de travar o nosso terminal depois que criarmos esse container, podemos inserir a opção `-d`, que não vai travar o nosso terminal. Vai manter nosso terminal ativo.

```bash
docker run -d docker/example-voting-app-vote
```

> Atenção para não errar nenhuma letra. Porque se errar, vai executar um erro na hora de buscar essa imagem no Docker Hub.

Lembra que avisamos anteriormente? Sempre vai fazer a busca localmente. Como ele não encontrou localmente, ele vai fazer o pull lá do Docker Hub.

E aí ele vai fazendo o pull de várias coisas, isso são as camadas da imagem. Vamos entender isso logo, logo.

Foi feito o download da imagem e foi criado também o container.

Se viermos com o `docker ps`, vamos ver que o container foi criado. Ele está em execução.

O comando que está mantendo esse container em execução é esse comando `gunicorn app:app`. E além disso, temos o nosso container com o Ubuntu.

Como tem uma aplicação web dentro desse container, será que se colocarmos um `localhost:80` no nosso navegador conseguimos acessar? Já que esse container está em execução. Vamos testar.

Podemos abrir o navegador e escrever `localhost:80` na barra de endereço.

Tivemos a resposta de que não foi possível acessar, a conexão foi recusada. O que está acontecendo?

Quando criamos um container, vimos que existem diferentes namespaces para isolar esse container em diferentes níveis. Um desses namespaces era relacionado com o isolamento das interfaces de rede desse container.

Logo, o que precisamos é entender melhor em qual porta conseguimos acessar externamente essa aplicação que está rodando dentro desse container. E como fazer isso?

Dei um `clear` na tela. Para que consigamos acessar a aplicação que está rodando internamente nesse container, precisamos entender qual porta desse container será acessível externamente. Precisamos ter um certo mapeamento dessas portas. Precisamos exibir esse mapeamento. E como fazemos isso? Fazemos isso na criação do nosso container.

Para isso, o que vamos fazer? Vamos remover esse container que criamos e recriar um container usando essa mesma imagem para verificar como é isso na prática.

Para não remover de forma abrupta, vou executar os comandos:

```undefined
docker ps
```

```bash
docker rm 10ea83a5f4aa --force
```

Beleza, se executarmos um `docker ps`, o container foi removido e só temos o Ubuntu rodando.

Para que tenhamos a exposição dessa porta que vai fazer com que acessemos externamente essa aplicação, vamos ter que usar uma outra opção. É o `docker run -d -P`. Usaremos o "P" maiúsculo em -`P`. Com isso, vamos exibir o `docker/example-voting-app-vote`.

```bash
docker run -d -P docker/example-voting-app-vote
```

Vamos executar esse comando. Como estamos executando isso a primeira vez nesse PC em específico, o Windows perguntou: você permite que essa aplicação esteja em execução, seja acessível através da rede? Aí eu disse que sim. Isso sempre que executarmos isso pela primeira vez.

Agora vamos executar um `docker ps` para verificar como que conseguimos acessar essa aplicação externamente. Observe que agora a coisa mudou. Temos o mapeamento dessa porta, ou seja, a porta 80 interna do meu container, ela vai estar acessível externamente através dessa porta aqui, a 32768.

> gunicorn app:app - 0.0.0.0:32768->80

Podemos acessar nosso navegador e inserir na barra de endereços:

```makefile
localhost:32768
```

O que vai acontecer? Vamos acessar a aplicação que está rodando lá dentro do container. Então acessamos essa aplicação, que como você está observando, é apenas uma aplicação de exemplo lá do docker, que é meio que uma escolha entre fãs de cachorros e fãs de gatos. O projeto está em inglês.

É bem legal, já conseguimos executar uma aplicação conteinerizada e conseguimos acessar externamente essa aplicação.

Mas essa porta foi definida na criação do container, dentro do próprio docker.

Podemos fazer diferente. Podemos especificar em qual porta vamos acessar externamente essa aplicação que está rodando conteinerizada lá.

Como fazer isso? Vamos voltar no nosso terminal, vou executar um `clear`, vou executar um `docker`, um `remove` novamente nesse container. Antes vou executar um `docker ps`, porque tenho que saber o id desse container.

Vou executar um `docker rm` seguido do id e do `force` para encerrá-lo de forma mais rápida.

```bash
docker rm ff2c007d77c7 --force
```

Vamos novamente criar o container. Só que agora de uma forma diferente. Vamos usar novamente a opção `-d`, para não travar o nosso terminal, e agora um `-p` com "p" minúsculo. E após essa opção de "p” minúsculo, vamos especificar o mapeamento de portas que desejamos.

Nesse caso, vou especificar que quero acessar essa aplicação na porta 3000. Então vou colocar `3000:80` (que é a porta interna lá do container) e especificar a imagem, que é `docker/example-voting-app-vote`.

```bash
docker run -d -p 3000:80 docker/example-voting-app-vote
```

Foi criado, e o que observamos ao executar o `docker ps` é que o mapeamento que especificamos está sendo apresentado corretamente.

> gunicorn app:app - 0.0.0.0:3000->80

Para testar se a aplicação está rodando mesmo, podemos acessar esse localhost no navegador:

```makefile
localhost:3000
```

Conseguimos novamente acessar a aplicação de exemplo no nosso navegador, na porta que escolhemos.

## Remover todos os contêineres

Uma dúvida final para fecharmos por aqui, é: como poderíamos remover todos os containers que estão em execução na nossa máquina?

Podemos usar o comando `docker stop` para parar todos os containers que estão rodando. E vamos especificar o comando que será executado: `$(docker container ls -q)`.

```bash
docker stop $(docker container ls -q)
```

Então toda vez que inserimos esse cifrão com parênteses `$()`é para solicitar que antes de o `docker stop` ser executado, vamos executar o comando `docker container ls -q`, e esse resultado será utilizado como um parâmetro para esse comando `docker stop`.

Ao executarmos o comando acima, ele está parando a execução de todos os containers de uma só vez, ao invés de parar um container de cada vez.

Claro, como demos um `docker stop` sem especificar aquele tempo igual a zero, ele está seguindo o tempo padrão de 10 segundos para parar a execução.

## Próximo passo

Analisamos como acessar externamente uma aplicação conteinerizada, mas estamos usando até agora imagens que estão disponíveis lá no Docker Hub, que foram criadas por outras organizações e pessoas usuárias.

Que tal criarmos agora a nossa própria imagem? Faremos isso na próxima aula!

# Faça como eu fiz: acessando e interagindo com aplicações em containers

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153388/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153388/question)

Analisamos alguns dos principais aspectos envolvidos na criação e execução de containers utilizando a Docker Engine. Na sequência, iniciamos a análise pela criação de containers, compreendendo como podemos interagir com containers em execução. Por fim, investigamos o acesso às aplicações em execução dentro de um container.

Você criou e interagiu com um container em execução? Conseguiu acessar uma aplicação dentro de um container? Agora é a sua vez de explorar na prática essas questões! Caso queira consultar os passos que seguimos para realizar a investigação, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153388/opinion)

Inicialmente, execute o comando `docker run ubuntu sleep 1d` para criar e executar um container com base na imagem do Ubuntu. A ação realizada por este container é executar o comando `sleep 1d`, mantendo-o em execução por um período de 24 horas (no modo sleep, sem executar nenhum processo). Após esse período, ele será encerrado automaticamente.

Para verificar a execução, utilize o comando `docker ps`. É possível interrompê-la usando `docker stop container_ID`. No campo container_ID, inserimos o número de identificação exibido no campo ID da tabela do `docker ps`.

De modo similar, caso seja necessário pausar ou reiniciar um container cuja execução esteja pausada, utiliza-se, respectivamente, os comandos `docker pause container_ID` e `docker start container_ID`.

Você pode interagir com o container criado utilizando o comando `docker exec -it container-ID bash`. Dessa forma, é obtido acesso direto ao shell, sendo possível interagir e executar comandos dentro do ambiente Ubuntu em tempo real.

Caso queira remover o container para criar outro com a mesma imagem, basta digitar o comando `docker rm container_ID`.

Você pode executar um container contendo um aplicação específica criada pelo grupo de usuários Docker Samples sem travar o seu terminal usando:

`docker run -d docker/example-voting-app-vote`

Para acessar a aplicação em execução no container, é preciso compreender o mapeamento de suas portas. Dessa forma, pode-se remover o container criado e criá-lo novamente com o `docker run` com a opção `-P`. Assim, será obtido um mapeamento detalhado na coluna de portas da tabela gerada pelo `docker ps`.

```bash
docker run -d -P docker/example-voting-app-vote
```

Alternativamente, você pode especificar o mapeamento de portas com o `docker run` da seguinte forma:

```bash
docker run -d -p 3000: 80 dockersamples/static-site
```

Repare que a porta 3000 do host está mapeada para a porta 80 do container. Assim, para acessar a aplicação que está em execução dentro dele, basta digitar `localhost:3000` no navegador do seu computador.

## Transcrição

Já sabemos como criar e gerir imagens usando o Docker. Entendemos também que uma imagem contém todos os arquivos, bibliotecas e dependências necessárias para a execução de um contêiner.

Nesse vídeo, precisamos usar o conceito de contêineres no projeto do Allbooks. Para isso, vamos precisar criar a própria imagem.

Antes de criar a imagem propriamente dita, vamos entender melhor e explorar a estrutura interna de uma imagem e entender também qual é a estrutura interna de um contêiner.

## Explorando a Estrutura de Imagens e Contêineres

Para começar, vamos explorar as imagens disponíveis localmente no nosso PC. Para isso, podemos usar o comando abaixo no _prompt_ de comando, que vai exibir uma tabela com todas as imagens disponíveis.

```bash
docker image ls
```

Observaremos no retorno que temos as imagens "ubuntu", "hello-world" e o exemplo de aplicação do Docker "example-voting-app-vote" do qual fizemos o download anteriormente.

|REPOSITORY|TAG|IMAGE ID|CREATED|SIZE|
|---|---|---|---|---|
|ubuntu|latest|fd1d8f58e8ae|13 days ago|77.9MB|
|hello-world|latest|d2c94e258dcb|9 months ago|13.3kB|
|example-voting-app-vote|latest|13d2924e95b4|7 years ago|83.5MB|

Essas imagens são acompanhadas de algumas características, como a tag, o id (o identificador dessas imagens), a data de criação delas no Docker Hub e o seu tamanho.

Fizemos, inclusive, o `pull` da imagem "ubuntu" antes de fazer o `run` para executar um contêiner com essa imagem. Também podemos usar o `docker pull` de uma imagem como a do _Nginx_, um servidor web, para verificar melhor o processo de download da imagem que tem etapas bem demarcadas.

Para isso, utilizaremos o comando abaixo.

```bash
docker pull nginx
```

Vamos pressionar "Enter" para que ele faça o download.

Observaremos que esse processo de download é realizado em etapas. E essas etapas não são assim por acaso. Isso não ocorre porque o arquivo é fracionado, e sim porque **uma imagem é composta por um conjunto de camadas.** Portanto, quando fazemos o `pull` dessa imagem do Docker Hub para o PC, estamos fazendo o download de cada uma dessas camadas, que juntas, formam essa imagem.

Podemos verificar na imagem "ubuntu", que já temos disponível, as camadas que a constituem. Para isso, podemos usar o comando `docker history` junto ao ID dessa imagem.

Para encontrá-lo, voltaremos à tabela de imagens, na qual vamos copiar esse ID e colar no comando.

```bash
docker history fd1d8f58e8ae
```

Ao executar esse comando com "Enter", observaremos no retorno que temos o identificador e o tamanho de cada uma dessas camadas.

|IMAGE|CREATED|CREATED BY|SIZE|COMMENT|
|---|---|---|---|---|
|fd1d8f58e8ae|13 days ago|/bin/sh -c #(nop) CMD ["/bin/bash"]|0B|-|
||13 days ago|/bin/sh -c #(nop) ADD file:99224b1f237763b3o…|77.9MB|-|
||13 days ago|/bin/sh -c #(nop) LABEL org.opencontainers.…|0B|-|
||13 days ago|/bin/sh -c #(nop) LABEL org.opencontainers.…|0B|-|
||13 days ago|/bin/sh -c #(nop) ARG LAUNCHPAD_BUILD_ARCH|0B|-|
||13 days ago|/bin/sh -c #(nop) ARG RELEASE|0B|-|

Há camadas maiores e outras menores. Podemos ver os comandos de cada uma delas e todas as informações da data em que elas foram criadas. Assim, conseguimos analisar quais camadas formam uma determinada imagem disponível localmente.

Vamos rodar o comando `clear` para limpar a tela.

```bash
clear
```

Outra forma de analisar a estrutura de uma imagem é usando o comando `docker inspect`. Vamos executar este comando para inspecionar a imagem "ubuntu", da qual já temos o ID.

```bash
docker inspect fd1d8f58e8ae
```

Observaremos um retorno com várias informações, no qual temos mais detalhes construtivos de cada camada, como as tags, o `Digest` usado na validação dessa imagem, a relação parental dessas camadas com outras imagens, a data de criação, o `ContainerConfig`, e uma série de informações sobre a estrutura interna dessa imagem.

```json
[
  {
    "Id": "sha256:fd1d8f58e8aedc22ec0a3a7ce1a33de54jla596eaac6dcb84f21af7c5e081d453f",
    "RepoTags": [
      "ubuntu:latest"
    ],
    "RepoDigests": [
    "ubuntu@sha256:e9596c25505f33ff72e88b2990887c9dcf230f23259da296eb814fc2b41af999"
    ],
    "Parent": "",
    "Comment": "",
    "Created": "2024-01-25T17:54:41.023950032Z",
    "Container": "fa818c5015167b4ff7ec2713709692c7c2f68360db53ae25e745682be702fd43",
    "ContainerConfig": {
        "Hostname": "fa818c501516",
        "Domainname": "",
        "User": "",
        "AttachStdin": false,
        "AttachStdout": false,
        "AttachStderr": false,
        "Tty": false,
        "penStdin": false,
        "StdinOnce": false,
        // Código omitido
  }
]
```

Essa estrutura peculiar traz uma característica muito importante do conceito dos contêineres: **cada camada não é exclusiva apenas de uma imagem**. Podemos utilizá-las em outras imagens.

Se quisermos utilizar uma imagem indisponível localmente na nossa máquina, quando damos o `docker run` ou `docker pull` e essa imagem possui camadas em comum com outras imagens disponíveis localmente, vamos realizar o download apenas das camadas que não estão disponíveis no PC.

Isso é um mecanismo mais eficiente para não replicar dados de forma desnecessária.

Analisando a estrutura da imagem, surge uma questão: quando interagimos com contêineres, será que não alteramos essas camadas que o constituem e que formam a imagem?

Além disso, como esse processo se dá? Como é a interação com as camadas que compõem o contêiner? Afinal, se uma imagem é formada por camadas, por conseguinte, um contêiner também deve ser formado assim.

Vamos entender a estrutura interna de uma imagem e também de um contêiner.

Uma imagem é formada por camadas. Um contêiner é formado por uma imagem, que tem as suas camadas, e recebe outra camada que fica por cima da pilha de camadas da imagem.

Essa camada extra é uma camada _read and write_ (leitura e escrita), ou seja, com ela, conseguimos interagir, alterar e inserir dados. Já as camadas que formam o núcleo da imagem são _read only_ (somente leitura), ou seja, não conseguimos alterá-las.

Dessa forma, podemos replicar o número de contêineres que estão utilizando determinada imagem e eles vão compartilhar esse mesmo empilhamento específico de camadas.

Um outro detalhe é que se alterarmos, por exemplo, a ordem dessas camadas, podemos dar origem a uma imagem diferente da que estamos utilizando.

Dessa forma, quando criamos vários contêineres na máquina, usando uma mesma imagem, o tamanho de cada contêiner vai ser somente o tamanho da camada de escrita. Não vamos replicar sempre o tamanho completo dessa imagem.

Isso confere um ganho considerável de eficiência e também torna o uso de contêineres mais leve, do ponto de vista de uso de memória e demanda de recursos computacionais.

Mencionamos no início do curso que um dos grandes diferenciais de utilizar um mecanismo de virtualização baseado em contêineres era justamente a leveza e eficiência dessa solução. Agora começa a fazer mais sentido, não é mesmo?

A nossa motivação inicial é utilizar contêineres na aplicação do Allbooks. Após entender melhor sobre a estrutura interna de uma imagem e de um contêiner, podemos dar esse passo.

## Transcrição

Temos uma tarefa: introduzir o conceito de contêineres na aplicação Allbooks. Para isso, analisamos a estrutura de uma imagem e de um contêiner.

Vale lembrar a estrutura usada anteriormente no projeto do Allbooks: utilizávamos o Node.js para emular servidores de back-end e de front-end e conseguíamos acessar e interagir com a aplicação por meio do navegador.

Para começar, precisamos criar a imagem. Vamos dar um `git clone` da pasta do front-end do Allbooks para o computador.

* [Pasta de front-end do projeto Allbooks.](https://github.com/alura-cursos/curso-react-alurabooks/).

Vamos acessar o _prompt_ de comando e começar com o `git clone` dessa pasta para o nosso ambiente. Essa pasta contém o front-end do projeto, e logo conseguiremos acessar esse front-end de forma "contêinerizada".

```bash
git clone https://github.com/alura-cursos/curso-react-alurabooks/
```

Após a execução do comando acima, executaremos um `ls` para verificar que a pasta já está dentro do nosso ambiente. Em seguida, vamos adicionar um `cd ./curso` e pressionar "Tab" para autocompletar com o local da pasta.

```bash
cd ./curso-react-alurabooks/
```

Após a execução acima, já estaremos dentro dessa pasta. A seguir, precisamos construir a imagem do front-end dessa aplicação, especificando como essa imagem será criada, ou seja, quais camadas essa imagem terá. Para isso, vamos construir um documento chamado _Dockerfile_.

## Criando um DockerFile

O Dockerfile contém as instruções para a criação da imagem. Para criar esse arquivo no ambiente Linux, podemos digitar um `nano` para abrir o editor de texto.

```bash
nano
```

Dentro do editor, vamos incluir as instruções para a criação dessa imagem. Depois, vamos salvar esse arquivo com o nome "Dockerfile". Quando realizarmos o `build` para criar essa imagem, veremos que esse arquivo será reconhecido como um arquivo que contém as instruções para esse processo.

No projeto, usamos o Node.js no computador. Será que precisamos construir as camadas do Node.js para usar no contêiner? Não, certo?

Já estudamos anteriormente que podemos reaproveitar as camadas, inclusive reaproveitar uma imagem completa como base para construir nossa própria imagem. E é exatamente isso que vamos fazer.

A primeira instrução que vamos inserir no Dockerfile é `FROM`, que significa "a partir de". Em seguida, adicionaremos `node` para partir da imagem do Node, e inserir dois pontos para especificar a versão dessa imagem que vamos usar no projeto — no caso, a versão 20.

```bash
FROM node:20
```

Vamos pressionar "Enter" para descer uma linha.

O segundo passo será definir o diretório padrão de trabalho, ou seja, o `WORKDIR`. E qual é esse diretório? Vamos nomeá-lo como `/app`.

```bash
FROM node:20
WORKDIR /app
```

Após criar o diretório de trabalho, vamos inserir alguns arquivos e, mais tarde, todo o conteúdo da pasta dentro desse diretório. Primeiro, vamos descer uma linha e inserir um `COPY` para copiar o arquivo `package.json` do nosso projeto front-end, ou seja, da pasta em que estamos nesse momento.

Para onde vamos copiar esse arquivo? Vamos inserir um ponto, indicando que vamos copiar para nosso diretório atual de trabalho, sendo o `app` recém-criado na linha anterior.

```bash
FROM node:20
WORKDIR /app
COPY package.json .
```

Na linha seguinte, vamos executar com `RUN` o comando `npm install`, que faz a instalação das dependências necessárias ao projeto. Esse comando será executado quando a imagem estiver sendo criada.

```bash
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
```

Na próxima linha, vamos copiar todo o conteúdo do diretório `curso-react-alurabooks/` para dentro do diretório de trabalho. Para isso, adicionaremos dois pontos, onde o primeiro que especifica o diretório no qual esse arquivo está, e o segundo especifica o diretório de trabalho, sendo o `app` criado na segunda instrução.

```bash
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
```

Por fim, na linha seguinte, vamos definir o comando que será executado quando essa aplicação for inicializada e que vai manter esse contêiner ativo. Nesse caso, será o `ENTRYPOINT`, que é o `npm start`.

```bash
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT npm start
```

Com isso, já temos todas as instruções necessárias para a criação da imagem e constatamos que esse processo não é tão complexo. Essas instruções estão disponíveis e detalhadas na documentação oficial do Docker. Portanto, podemos consultar sempre que houver dúvidas, e até verificar outras instruções que podem ser utilizadas para a construção de outras imagens, em outros casos e contextos.

Vamos salvar esse arquivo pressionando "Ctrl+X" e "Y" para selecionar a opção "Yes". Em seguida, escreveremos o nome desse arquivo.

Para que seja reconhecido conforme mencionamos antes, ele deve se chamar "Dockerfile".

```bash
Dockerfile
```

Vamos pressionar "Enter", o que fechará o editor de texto. Se fizermos um `ls`, veremos que o "Dockerfile" foi criado.

```bash
Dockerfile          package.json        src
README.md           public              thumbnail.png
package-lock.json   screencapture.png   tsconfig.json
```

Podemos ver também o `package.json`, o arquivo do qual fizemos a primeira cópia para orientar a criação da imagem. Depois copiamos o restante do conteúdo exibido para dentro da imagem.

Construímos o arquivo "Dockerfile" com as instruções para a criação da imagem. A seguir, precisamos é criar a imagem.

## Criando uma Imagem

Vamos executar um `clear` na tela para limpá-la e facilitar a visualização.

Para criar a imagem, vamos executar um `build` dentro da pasta `curso-react-alurabooks/`. É muito importante estar dentro dessa pasta para realizar o `build` de forma correta.

Vamos escrever o comando `docker build` e inserir a opção `-t` para etiquetar essa imagem, ou seja, dar a ela um nome.

Para seguir a nomenclatura do nome, colocamos o nome da organização, a pessoa usuária, uma barra e o nome da imagem. Adicionalmente, podemos inserir dois pontos e dar o versionamento dessa imagem.

Vamos fazer isso agora. O nome do nosso usuário é `lucasrm`. Adicionaremos a barra e o nome dessa imagem, que será `allbooks`. Por fim, adicionaremos dois pontos e a versão 1.1.

Por fim, temos que inserir um ponto, pois estamos especificando que vamos executar o `build` nessa imagem a partir do diretório em que nos encontramos.

```bash
docker build -t lucasrm/allbooks:1.1 .
```

Vamos pressionar "Enter" e, com isso, teremos o processo de construção dessa imagem. Nós não temos a imagem do Node, portanto, ele vai fazer o download dessa imagem, o `pull` no Docker Hub, executar o `copy` do `package.json`, o `npm install`, e depois fazer o `copy` do conteúdo do diretório para dentro dessa imagem.

Esse processo é lento. Na tela do _prompt_, veremos as camadas, o tempo de cada uma, e ele vai fazendo o download.

Após a execução terminar, observaremos nesse processo de `build` que ele seguiu cada passo que inserimos no "Dockerfile". No final do retorno que aparece no _prompt_, veremos que ele criou o diretório de trabalho `app`, fez o `copy` do `package.json` para esse diretório, executou o `npm install` e copiou o diretório `curso-react-alurabooks/` para dentro da imagem.

```bash
=> [2/5] WORKDIR /app              7.4s
=> [3/5] COPY package.json .       0.0s
=> [4/5] RUN npm install          71.9s
=> [5/5] COPY . .                  0.1s
```

Além disso, ele fez um processo de exportação de camadas. E no fim, nomeou a imagem como `lucasrm/allbooks` e a versão 1.1.

Para verificar se essa imagem foi criada, podemos usar o comando abaixo, que verifica todas as imagens disponíveis localmente.

```bash
docker image ls
```

Quais imagens nós temos? As que baixamos — "ubuntu", "nginx", "hello-world", "example-voting-app-vote" e também a que acabamos de criar, `lucasrm/allbooks`.

|REPOSITORY|TAG|IMAGE ID|CREATED|SIZE|
|---|---|---|---|---|
|lucasrm/allbooks|1.1|fa56df1e3665|About a minute ago|1.56GB|
|ubuntu|latest|fd1d8f58e8ae|2 weeks ago|77.9MB|
|nginx|latest|b690f5f0a2d5|3 months ago|187MB|
|hello-world|latest|d2c94e258dcb|9 months ago|13.3kB|
|example-voting-app-vote|latest|13d2924e95b4|7 years ago|83.5MB|

Constatamos que a imagem foi criada com sucesso. O próximo passo é criar um contêiner a partir dessa imagem.

## Criando um Contêiner

Nós já dominamos essa etapa, que é usar o comando `docker run`. Primeiro, vamos executar um `clear`, para limpar a tela e facilitar a leitura e voltar para o diretório inicial com o comando `cd`.

Em seguira, executaremos o `docker run`, com a opção `-d` para não travar o terminal. Também vamos usar a opção `-p`, para fazer o mapeamento de portas, pois queremos acessar essa aplicação externamente.

```bash
docker run -d -p
```

Qual mapeamento de portas vamos usar? Devemos lembrar do front-end do projeto AllBooks, acessado pela porta 3000. Portanto, vamos mapear, por exemplo, a porta 8080 do nosso _host_, para a porta 3000, interna da aplicação.

Por fim, adicionaremos o nome da imagem, `lucasrm/allbooks:1.1`.

```bash
docker run -d -p 8080:3000 lucasrm/allbooks:1.1
```

Agora é só pressionar "Enter" para criar. Em seguida, se usarmos o comando `docker ps`, observaremos que o contêiner foi criado a partir da imagem, e aparentemente está ativo.

```bash
docker ps
```

|CONTAINER ID|IMAGE|COMMAND|CREATED|STATUS|PORTS|NAMES|
|---|---|---|---|---|---|---|
|038000de29b5|lucasrm/allbooks:1.1|"/bin/sh -c 'npm sta…'"|4 seconds ago|Up 3 seconds|0.0.0.0:8080->3000/tcp|vigorous_bassi|

Vamos testar se conseguimos acessar a aplicação externamente?

## Testando a aplicação

Vamos minimizar o terminal, acessar o navegador e acessar o endereço abaixo pela barra de busca superior, de acordo com o mapeamento de portas que utilizamos.

```plaintext
localhost:8080
```

Com isso, veremos que conseguimos acessar o front-end da aplicação, provando que conseguimos "contêinerizar", de forma rápida e simples, o front-end do projeto _AllBooks_.

Já criamos uma imagem localmente, mas se estamos trabalhando com outras pessoas, queremos disponibilizar essa imagem, ou seja, fazer o seu _deploy_ em um repositório ou _registry_ no Docker Hub.

A seguir, vamos verificar como fazer isso.

# Para saber mais: compreendendo o Dockerfile

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153394/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153394/question)

O Dockerfile nada mais é do que um meio disponível para criar nossas próprias imagens. Em outras palavras, ele serve como a receita para construir um container, permitindo definir um ambiente personalizado e próprio para um projeto pessoal ou empresarial.

Uma imagem nada mais é do que uma representação imutável de como será efetivamente construído um container. Por conta disso, não executamos ou inicializamos imagens, fazemos isso com os containers.

Escrevemos um Dockerfile, construímos uma imagem a partir dele executando o comando `docker build`, e, por fim, criamos e rodamos o container com o comando `docker run`. Nesta perspectiva, o container é o fim e a imagem é o meio.

Para entender mais detalhes sobre as principais instruções que podemos adotar na construção de imagens com o Dockerfile, recomendamos a [leitura do artigo Docker: Desvendando o DockerFile](https://www.alura.com.br/artigos/desvendando-o-dockerfile) que apresenta uma síntese prática desse processo.

## Transcrição

Agora que já temos a imagem criada, é hora de fazer seu `push` para o registro do Docker Hub. Para isso, precisamos ter uma conta nesse serviço.

## Criando uma Conta no Docker Hub

Ao acessar o [site do Docker Hub](https://hub.docker.com/), podemos vincular nossa conta do Google ou do GitHub e criar uma conta no Docker Hub. Assim, conseguiremos ter nosso próprio repositório e subir nossas próprias imagens.

Neste vídeo, vamos acessar usando uma conta do Google. Após clicar no botão "_Sign Up_" (cadastro) no canto superior direito da página, selecionaremos a opção "_Continue with Google_" (continuar com Google).

Voltaremos à página inicial do Docker Hub, na qual observaremos um círculo com a inicial da nossa pessoa usuária no canto onde havia o botão "_Sign Up_", indicando que nossa conta já está vinculada.

O nome de usuário nesse vídeo é "lcsrm". Isso será importante, pois também teremos que fazer o login no terminal.

Acessando o terminal, vamos usar o comando `docker login`, com a opção `-u`. Vamos inserir o nome de usuário, que é `lcsrm`.

```bash
docker login -u lcsrm
```

Após pressionar "Enter", ele vai pedir a senha registrada. Após a validação da senha, a mensagem de que o login foi realizado com sucesso será exibida.

> Login succeeded

## Realizando o `push` da Imagem

A seguir, como faremos para realizar o `push`, ou seja, o upload dessa imagem no Docker Hub? Vamos usar o comando `docker push`, especificando qual imagem queremos subir.

Para consultar o nome da imagem, caso tenhamos esquecido, podemos fazer um `docker image ls`. No nosso caso, a imagem é `lucasrm/allbooks`, com a tag `1.1`, que é sua versão.

Vamos limpar o terminal com o comando `clear` para facilitar a visualização do próximo comando, que será o seguinte:

```bash
docker push lucasrm/allbooks:1.1
```

Após executá-lo, ele começará a preparar as camadas da imagem, mas um erro ocorrerá e interromperá esse processo.

> denied: request acces to the resource is denied.

O acesso ao recurso foi negado. Por que isso ocorreu?

Conforme mencionado anteriormente, quando não trabalhamos com imagens oficiais, como "ubuntu" ou "nginx", que têm nomes curtos, precisamos usar uma nomenclatura específica, composta do nome da organização ou da pessoa usuária que criou essa imagem e fez o upload no Docker Hub e do nome da imagem propriamente dito.

No terminal, o nome da pessoa proprietária da imagem é "lucasrm", mas o nome da pessoa usuária no Docker Hub é "lcsrm". Portanto, precisamos **renomear essa imagem** para conseguir subi-la de forma correta.

Para isso, podemos usar o comando `docker tag` para renomear a imagem, no qual vamos especificar o nome atual da imagem, `lucasrm/allbooks:1.1`, e o nome que ela receberá a partir de agora, `lcsrm/allbooks:1.1`.

```bash
docker tag lucasrm/allbooks:1.1 lcsrm/allbooks:1.1
```

Após pressionar "Enter", se executarmos o comando `docker image ls`, veremos que temos outra imagem com o novo nome "lcsrm", além da imagem com o nome antigo e das outras que já existiam.

|REPOSITORY|TAG|IMAGE ID|CREATED|SIZE|
|---|---|---|---|---|
|lcsrm/allbooks|1.1|fa56df1e3665|39 minutes ago|1.56GB|
|lucasrm/allbooks|1.1|fa56df1e3665|39 minutes ago|1.56GB|
|ubuntu|latest|fd1d8f58e8ae|2 weeks ago|77.9MB|
|nginx|latest|b690f5f0a2d5|3 months ago|187MB|
|hello-world|latest|d2c94e258dcb|9 months ago|13.3kB|
|example-voting-app-vote|latest|13d2924e95b4|7 years ago|83.5MB|

Vamos limpar o terminal com o comando `clear` e executar o `push` mais uma vez, agora com o nome atualizado da pessoa usuária, "lcsrm".

```bash
docker push lcsrm/allbooks:1.1
```

Após a preparação das camadas, ele fará o upload de algumas delas. Quando o upload estiver completo, o `push` será encerrado e teremos feito o upload da imagem recém-criada no Docker Hub.

Para conferir, vamos acessar o Docker Hub pelo navegador e verificar as imagens criadas. Para isso clicaremos no botão de pessoa usuária no canto superior direito e selecionar "_My Profile_" (meu perfil).

Na nova tela exibida, veremos a guia de repositórios, na qual temos a imagem que acabamos de subir, com o nome que especificamos, "lcsrm/allbooks".

Já temos nossa própria imagem criada e sabemos como fazer o `push` no Docker Hub, que é o registro do Docker. Contudo, temos uma questão em aberto: quando temos uma aplicação com a qual as pessoas usuárias vão interagir, geramos uma série de dados nesse processo de interação, como preferências da pessoa usuária, por exemplo.

Se temos um site para venda de livros, por exemplo, haverá pessoas com interesses em diversas áreas. Para salvar esses interesses diversos, até mesmo para enviar e-mails informando sobre lançamentos que podem ser do interesse delas, precisamos **salvar esses dados** de interação da aplicação com as pessoas usuárias.

Quando trabalhamos com contêineres, vimos que eles têm uma existência efêmera. Nós o subimos, depois e encerramos. Se não houver nenhum comando ou processo em execução, a sua execução é encerrada.

Se ele for apagado, perdemos todos os dados. Portanto, como próximo passo, vamos analisar como podemos persistir esses dados.

# Faça como eu fiz: construindo uma imagem

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153396/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153396/question)

Compreendemos a composição de imagens por meio de camadas, e observamos a necessidade de criar imagens próprias para construir um ambiente adequado à execução das nossas aplicações. Criamos nosso primeiro Dockerfile para gerar a imagem da aplicação web All Books. Na sequência, subimos nosso primeiro container com imagem própria com o Docker.

Você pode efetuar o [download do Frontend do projeto All Books](https://github.com/alura-cursos/curso-react-alurabooks).

Já criou a imagem no Dockerfile? Conseguiu acessar a aplicação All Books em execução no container? Agora é a sua vez de explorar essas questões na prática! Caso queira consultar os passos que seguimos para realizar a investigação, clique na Opinião da pessoa instrutora.

## Transcrição

Avançamos bastante em nossa jornada de aprendizado sobre containers utilizando o Docker. Já temos nossa própria imagem, já criamos um container a partir dela e temos uma questão em aberto: a **persistência dos dados** quando trabalhamos com containers.

Temos uma aplicação que interage com várias pessoas usuárias e queremos manter alguns dados gerados a partir dessa interação salvos, para que possamos melhorar e oferecer uma melhor experiência para as pessoas usuárias. Como vamos analisar essa persistência?

Já vimos que os containers têm uma existência efêmera, você cria um container, se não tem nenhum processo sendo executado, ele para, e se apagamos esse container, todos esses dados simplesmente serão apagados.

Vamos analisar alguns mecanismos, temos quatro mecanismos diferentes que estão registrados na documentação oficial do Docker, que nos permitem persistir esses dados.

## Mecanismos de persistência de dados

Num primeiro momento, temos três diferentes mecanismos de persistência. Temos o **sistema de arquivos**, o _file system_, dentro da qual existe uma área do Docker (ou _Docker area_). E temos o **container** que está sendo executado como um processo dentro do nosso _host_, da nossa máquina.

Podemos criar, entre esse container e a _Docker area_, um mecanismo bem específico. Ou seja, vamos salvar os nossos arquivos dentro de um espaço que é gerido pelo próprio Docker. Esse mecanismo, que inclusive é o mais recomendado pelo Docker, é conhecido como **volume**.

Mas, podemos criar também um ponto de ligação entre o nosso container, o sistema de arquivos dentro dele, e o sistema de arquivos do nosso host, que é conhecido como _**bind mount**_. E, por fim, temos também o _**tmpfs mount**_, que também é um outro mecanismo de ligação usado para persistência de dados.

## _Bind mount_

Vamos começar nossa análise pelo _bind mount_. Com os _bind mounts_, vamos criar esse ponto de ligação entre um ponto de montagem do nosso sistema operacional, do host, e algum diretório dentro do container.

Vamos criar um novo container para mostrar como esse mecanismo funciona na prática. Nosso primeiro passo será criar um diretório dentro da ROM da nossa máquina com o qual vamos fazer essa ligação com o diretório do container. Para isso, vamos usar o comando `mkdir`, e o nome desse diretório será `volume-docker`.

```bash
mkdir volume-docker
```

Agora vamos criar um container e, no momento da criação com o `docker run`, vamos especificar esse mecanismo de persistência. Para isso, vamos usar `docker run`. Vamos criar um container de forma interativa, por isso vamos usar a opção `-it`, que já usamos anteriormente.

E agora vamos especificar o nosso mecanismo de persistência, que será o `mount`. Vamos especificar o `type` dele, que será `bind`, depois vírgula.

E o que vamos inserir aqui como parâmetro? Será exatamente a `source`, a fonte onde vamos salvar esses arquivos dentro do nosso sistema. Então a nossa `source` será igual ao caminho desse diretório que acabamos de criar. Como criamos na nossa home, será `source=/home/alura/volume-docker`.

E agora inserimos uma vírgula, seguida do `target`, o alvo, ou seja, a pasta dentro do nosso container que estará interligada com esse nosso diretório.

No caso, será igual a `/app`, ou seja, essa pasta será criada no momento da criação do nosso container. Depois vamos especificar a imagem que vamos usar, o `ubuntu`, e vamos abrir aqui o comando `bash`.

```bash
docker run -it --mount type=bind,source=/home/alura/volume-docker,target=/app ubuntu bash
```

O container foi criado, já abriu a linha de terminal de comando desse container que contém o Ubuntu. Vamos usar o comando `ls`. Observe que temos o diretório `app` criado, que especificamos no momento da criação, usando o `docker run`.

Então, todos os dados que forem criados e forem armazenados dentro do diretório `app` desse container serão persistidos, estarão salvos lá no diretório `volume-docker` dentro da nossa máquina.

Vamos testar. Vamos para o nosso diretório `cd ./app`, entramos no nosso diretório, e agora vamos criar um arquivo de teste. `touch teste_arquivo`. Pressionaremos `Enter`e, se dermos um `ls`, está ali dentro o nosso arquivo.

Agora, se sairmos desse container com `docker ps`, quais containers temos em execução no momento? Temos só o container `allbooks`. O container que acabamos de criar com o Ubuntu não está em execução, porque esse container só seria mantido em execução enquanto permanecêssemos interagindo com o terminal de comando. Uma vez que saímos da execução desse `bash`, ele foi encerrado.

Se agora recriarmos esse container, será que vamos ter acesso a esse arquivo que acabamos de criar? Ou melhor, podemos inclusive testar se esse arquivo está aqui dentro do nosso diretório `volume-docker` para começar.

Então, vamos dar um `clear` para limpar a nossa tela, vamos para o nosso diretório `cd ./volume-docker`. Vamos dar um `ls` e o arquivo `teste_arquivo` está salvo dentro desse diretório. Ou seja, já temos essa persistência. Esse container já foi encerrado, mas mantivemos os seus dados salvos na nossa máquina.

Agora vamos recriar o container para verificar se conseguimos também ter acesso a esse arquivo em um novo container. Vamos usar o mesmo comando, `docker run`, usando as opções `-it` para criar de forma interativa, o `mount`, o `type` que é um `bind`, a `source` a mesma coisa, o `target`, vamos criar um diretório `app`, um `ubuntu` e vai executar o `bash`.

Pressionamos `Enter`, vamos dar um `ls`, e está lá o nosso diretório `app`. Vamos lá diretamente para esse diretório, `cd ./app`, vamos dar um `ls` novamente. Identificamos que o arquivo está lá. Com o _bind mount_ temos essa persistência.

## Desvantagem do _bind mount_

Qual é o porém do mecanismo _bind mount_? É que esse mecanismo consiste em salvar todos os dados dentro de um determinado diretório da máquina do nosso host.

> O Docker não tem qualquer tipo de gerência sobre esse diretório.

Então, se alguma pessoa usuária dessa máquina alterar o sistema de arquivos, apagar o diretório, podemos perder esses dados. Então, tem essa vulnerabilidade quando usamos o mecanismo de _bind mount_.

Vamos verificar os outros também para entender melhor as demais características.

## Transcrição

Analisamos o mecanismo de persistência dos _bind mounts_. Agora, vamos dar uma olhada nos **volumes**. Se pensarmos de novo na estrutura de interação entre esses mecanismos de persistência, observamos que, dentro do _File System_ (Sistema de Arquivos), existe uma área do Docker, que é um enclave um pouco mais seguro dentro do nosso host, e essa área está interligada diretamente ao container pelo mecanismo dos volumes.

Isso quer dizer o seguinte: ao contrário dos _bind mounts_, onde criamos uma ligação entre um diretório e outro que criamos no momento de criação do container, no caso dos volumes, vamos **criar uma área para persistência de dados dentro da área do Docker**.

Sendo mais reservada, essa área fica menos vulnerável, mais segura, em relação a diversas pessoas usuárias, que podem estar usando esse host e podem fazer, eventualmente, algum tipo de mudança no sistema de arquivos, movimentação de diretórios, limpeza de diretórios.

Se mudarmos a localização de um diretório, já perdemos esse link com a pasta criada no container. Então, tem essa vulnerabilidade que vimos nos _bind mounts_ e que, no caso dos volumes, não existe.

> Por isso, para ambientes de produção, o Docker recomenda oficialmente que utilizemos o mecanismo dos volumes na persistência de dados.

## Usando volumes na persistência de dados

E como usamos os volumes? Para começar, vamos abrir o nosso terminal, podemos dar um `docker volume ls` e o que vemos? Observamos quais volumes foram criados no nosso sistema com esse comando.

Como não criamos nenhum volume ainda, não apareceu nada. Vamos criar um volume para que criemos essa conexão, essa persistência usando esse mecanismo. Para criar um novo volume, vamos utilizar `docker volume create` e vamos atribuir o seguinte nome para esse novo volume, `novo-volume`.

```lua
docker volume create novo-volume
```

Se dermos agora um `docker volume ls`, já aparece lá o nosso volume criado em um **driver local**. Com o nosso volume criado, vamos testar a persistência criando um container.

Vamos executar aqui o `docker run -it` para criar um container de forma interativa, vamos usar a opção `--mount` também e agora vamos especificar a `source` (fonte),que vai ser o nome do volume que acabamos de criar, que é `novo-volume`.

Inserimos uma vírgula e vamos criar um `target` (alvo) que vai ser um diretório para o qual vamos ter essa persistência. Novamente, vamos usar o `/app` e por fim vamos especificar a imagem que será usada, no caso será o `ubuntu` e o comando que será executado quando esse container for inicializado será o `bash`.

```bash
docker run -it --mount source=novo-volume,target=/app ubuntu bash
```

Vamos dar um `Enter`, nosso container foi criado e agora podemos testar. Podemos criar algum tipo de arquivo, primeiro temos que acessar lá o diretório `./app`, o diretório foi criado, conseguimos acessar, vamos usar o comando `touch teste_volume`, o arquivo foi criado, se dermos um `ls`, ele está aqui dentro.

Agora vamos dar um `ctrl + D` e como fazemos para acessar esse arquivo que acabamos de criar lá dentro? O container foi encerrado, o comando ali para mantê-lo ativo era o `bash`, saímos do `bash`, ele foi encerrado, se dermos um `docker ps`, perceberemos que ele não está sendo mais executado, só tem nossa aplicação `allbooks`.

Como acessamos esse arquivo que acabamos de criar, o `teste_volume`? No caso dos volumes, não temos um acesso direto dentro do nosso sistema de arquivos ao arquivo gerado pelo container. Ele fica lá mantido dentro de uma área que é gerida pelo próprio Docker, de acordo com a pasta onde o Docker estiver no nosso sistema operacional.

Aqui o que faremos será testar essa persistência criando um novo container, para verificar se conseguimos acessar aquele arquivo que acabamos de criar no container que foi encerrado. Para isso vamos usar o mesmo comando usado anteriormente, com o `docker run`, a opção `--mount`, e a `source` vai ser o mesmo volume que utilizamos, o `novo-volume`, e o `target` criando ali um diretório `/app` que vai ter essa ligação com esse volume. E a imagem que vamos utilizar é o `ubuntu` e o comando `bash`.

Vamos dar um `Enter`. Em seguida, vamos entrar no diretório `./app` com o comando `cd ./app`, usaremos o comando `ls` e perceba que o arquivo `teste_volume` está lá.

A principal diferença é que esse arquivo não fica vulnerável a qualquer mudança no sistema de arquivos. O Docker tem total gerência sobre ele. O que podemos fazer é, por exemplo, usar um `docker volume inspect novo-volume`. Assim, ele exibirá todas as informações relativas àquele volume.

Agora, falta abordarmos o mecanismo do TMPFS.

# Para saber mais: vantagens no uso de volumes

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153405/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153405/question)

Na aula destacamos que os volumes são o mecanismo de persistência de dados recomendado pela documentação oficial do Docker. Enquanto os bind mounts dependem da estrutura de diretórios e do sistema operacional do host, os volumes são totalmente gerenciados pelo Docker.

Dentre as principais vantagens que os volumes apresentam em relação aos bind mounts, podemos destacar:

- Facilidade de backup e migração.
- As ações de gerenciamento deles podem utilizar comandos da CLI do Docker.
- Compartilhamento seguro entre vários containers.
- Drivers de volume permitem armazenar volumes em hosts remotos ou provedores de nuvem, criptografar o conteúdo dos volumes ou adicionar outras funcionalidades.
- Novos volumes podem ter seu conteúdo previamente preenchido por um container.
- Não aumentam o tamanho dos containers que o utilizam.
- Existência dissociada do ciclo de vida de um container específico.

Caso o container gere dados de estado não-persistente (informações temporárias que não precisam ser armazenadas por longo tempo), é recomendável a utilização de um ponto de montagem tmpfs para evitar armazenar tais dados de forma permanente e obter um melhor desempenho do container.

## Transcrição

Agora já sabemos como funcionam os volumes. Falta apenas um mecanismo de persistência, o `TMPFS`.

Alguns recursos do Docker funcionam melhor no ambiente Linux, o que nos permite ter o máximo de produtividade.

> O `TMPFS` é altamente recomendado para ser utilizado no ambiente Linux, de forma preferencial.

Portanto, precisamos nos atentar quando estamos usando o Docker, às vezes no Windows, para aproveitarmos em plenitude as funcionalidades e recursos. É importante que utilizemos o `TMPFS` em ambiente Linux.

Vamos testar agora a criação de um container usando o `TMPFS`. Vamos acessar nosso terminal e criar um container semelhante ao que já temos criado para testar os demais mecanismos.

Usaremos o comando `docker run`, com a opção `-it`, de forma interativa. Como segunda opção, vamos colocar o `--tmpfs`. Vamos criar o diretório para o qual teremos a persistência dos dados armazenados. Vamos especificar a imagem que vamos usar e o comando que será executado ao inicializar esse container. Pressionaremos `Enter` em seguida.

```bash
docker run -it --tmpfs=/app ubuntu bash
```

Já estamos executando nosso container. Se dermos um `ls`, o que percebemos? Temos todos os diretórios dentro do nosso usuário root desse container, mas os diretórios `app` e `tmp` estão preenchidos com fundo na cor verde. Isso indica que eles são **diretórios temporários**. O `tmpfs` é um mecanismo de persistência bem peculiar.

Vamos criar um arquivo dentro do diretório `app`. Vamos usar um `touch tesetetmpfs.txt`, por exemplo. Se dermos um `ls`, o arquivo está lá criado.

Agora vou usar o atalho `CTRL + D`. Se sairmos do `bash`, o container deixou de ser executado. Se usarmos um `docker ps`, observaremos que ele não está mais lá. Encontraremos só a nossa aplicação `allbooks`.

Vamos dar um `clear` para limpar o terminal. E agora vamos criar um novo container usando novamente o mecanismo `tmpfs`. Se formos na pasta `app`, com o comando `cd ./app` e dermos um `ls`, observe que o arquivo que criamos não está mais lá.

Você pode estar se perguntando, mas por que usar esse mecanismo de persistência? Esse mecanismo é utilizado quando estamos lidando com **dados sensíveis**: senhas de usuários e dados pessoais. Assim, ele é útil para que não passemos esses dados de um container para o outro.

> A ideia do `tmpfs` é armazenar os dados de forma temporária, para proteger esses dados de acessos externos.

Agora que já conhecemos bem os mecanismos de persistência, é hora de analisarmos como colocamos nossa aplicação `allbooks`, que criamos uma imagem e a partir dela criamos um container, no ambiente de produção, usando a nuvem. Vamos lá?

# Faça como eu fiz: mecanismos de persistência no Docker

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153406/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153406/question)

A expressão “dados são o petróleo do século XXI” ganhou notoriedade, indicando a crescente importância dos dados em uma economia e sociedade cada vez mais digitais. Dessa forma, é essencial que saibamos lidar com os dados gerados pelos usuários ao longo de suas interações com aplicações conteinerizadas, tal como o All Books.

Durante a aula exploramos a persistência de dados no Docker, analisando diferentes mecanismos que nos permitem armazenar e salvar os dados da camada Read/Write dos containers.

Você implementou os mecanismos bind mount, volume e tmpfs? Verificou o modo como cada mecanismo atua na persistência dos dados? Agora é a sua vez de explorar na prática essas questões! Caso queira consultar os passos que seguimos para realizar a investigação, clique na Opinião da pessoa instrutora.

Iniciamos a análise dos mecanismos de persistência de dados no Docker pelo bind mount.

Primeiro, criamos uma nova pasta na home para usar nesse processo de ligação:

```bash
mkdir vol-docker
```

Na sequência, para analisar de forma objetiva, removemos todos os containers que estavam em execução em nossa máquina.

```scss
docker rm $(docker ps -aq) --force
```

Então, criamos um novo container adotando o bind mount como mecanismo de persistência.

```bash
docker run –it --mount type=bind,source=/home/<nome-de-usuario>/volume-docker,target=/app ubuntu bash
```

Testamos a persistência criando arquivos, saindo e executando um novo container utilizando o mesmo bind mount.

Na sequência, verificamos a persistência com os volumes.

Digitamos o comando `docker volume ls`e observamos que não havia nenhum volume criado ainda. Sendo assim, criamos um novo volume:

```sql
docker volume create new-vol
```

Então, criamos um container para analisar o funcionamento desse mecanismo.

```bash
docker run -it --mount source=new-vol,target=/app ubuntu bash
```

Dentro do container, executamos o comando cd /app para acessar o diretório e criar um arquivo.

Saímos do container com `Ctrl + D` e executamos novamente o comando `docker run -it -v new-volume:/app ubuntu bash`. Assim, verificamos a persistência do arquivo criado no diretório `/app`.

Por fim, avaliamos o uso de tmpfs criando um novo container:

```bash
docker run -it --tmpfs=/app ubuntu bash
```

Demos um `ls` dentro do container e constatamos que o diretório `/app` estava marcado com fundo verde indicando seu caráter temporário.

Finalizando a análise do tmpfs, realizamos o teste da criação de um arquivo e, sem seguida, saímos do container com `exit` e executamos um novo container.

## Transcrição

Até agora, discutimos bastante sobre o conceito de **infraestrutura**, que desempenha um papel importante nas operações ao colocar uma aplicação em funcionamento.

## Entendendo a infraestrutura

**Mas o que exatamente entendemos por infraestrutura?** No contexto do _Allbooks_, a infraestrutura se refere aos componentes e recursos essenciais para manter a aplicação operando.

> **Infraestrutura:** componentes necessários para uma aplicação

Isso engloba todos os elementos que garantem o **acesso**, a **eficiência**, a **segurança** e a **escalabilidade** dessa solução.

No caso do _Allbooks_, teremos que hospedar o _front-end_, o _back-end_ e também o banco de dados. O banco de dados é importante para que possamos **armazenar tanto os livros que estarão disponíveis**, como também o **cadastro** das pessoas usuárias, as **preferências**, os **pedidos** que serão encaminhados.

Além disso, é preciso também **toda a estrutura de rede** para garantir o acesso a esses recursos. Por exemplo, o DNS, que permitirá para a pessoa usuária acessar rapidamente um determinado recurso no site da aplicação _Allbooks_.

> **DNS**: permite o acesso de recurso no site

É importante também que sejam incluídas **estratégias de segurança**, como _firewalls_ e monitoramentos, para evitar qualquer tipo de ameaça que comprometa a confiabilidade do serviço. **Estratégias de _backup_** também devem ser implementadas para que tenhamos um mecanismo de proteção para eventuais perdas de dados.

Não basta ter aplicação em execução na infraestrutura. Como já aprendemos, é necessário que também atualizemos e monitoremos o seu funcionamento, para garantir o melhor desempenho possível, garantindo a melhor experiência para a pessoa usuária.

É necessário implementar **boas práticas de integração contínua**, **monitoramento** e **gerenciamento da infraestrutura como código**. Essas práticas são amplamente adotadas no contexto de _DevOps_ e são fundamentais para garantir o bom funcionamento do sistema.

**Como definimos e provisionamos essa infraestrutura?** Você já deve conhecer o termo _cloud_ (nuvem), no contexto da computação, ou _cloud computing_ (computação em nuvem).

> **Cloud**: permite monitoramento da aplicação

É exatamente essa solução que comumente adotamos quando lidamos com um projeto como o _Allbooks_. É muito comum que adotemos a solução de _containers_, de containerizar uma aplicação, uma solução _web_ e subir esses _containers_ na nuvem.

As características do ambiente em nuvem, como **escalabilidade** e **flexibilidade** dos serviços, juntamente com o suporte para monitoramento e atualização de aplicações, permitem a implementação de _pipelines_ automatizados de testes e a adoção de práticas como integração contínua e gerenciamento de infraestrutura como código. Isso facilita a aplicação dessas boas práticas de _DevOps_ no dia a dia de operações.

**Os serviços de computação em nuvem são fornecidos por provedores** especializados que mantêm uma infraestrutura de _datacenter_ distribuídos globalmente. Podemos destacar a _Amazon_, que tem o _Amazon Web Services_, conhecido pela sigla, o AWS; a _Microsoft_, que tem a _Azure_, a _Google_, que tem a _Google Cloud_ também, e outras, a IBM também tem alguma solução de computação em nuvem.

**Vamos utilizar o ambiente da AWS** neste curso para compreender o processo de implantação de uma aplicação containerizada na nuvem. Exploraremos este processo passo a passo.

## Utilizando a AWS

### Criando a conta na AWS

Para começar, é essencial **criar uma conta na AWS**. Durante o processo de criação da conta na AWS, você será solicitado a fornecer os detalhes do seu **cartão de crédito**. Isso se deve ao fato de que existe uma **cota de serviços** que será deduzida do seu saldo inicial. Esse saldo inicial é um bônus fornecido pela plataforma para nos familiarizarmos com ela e aprendermos a utilizá-la.

Assim que o período de teste terminar e os créditos forem utilizados, qualquer atividade realizada nesse ambiente será **tarifada**. Portanto, é importante estar ciente de que pode haver cobranças, dependendo da utilização desse ambiente.

> [Comece a criar na AWS ainda hoje](https://aws.amazon.com/pt/)

Estou na tela na qual você pode criar uma conta na AWS. Para isso, clicamos no botão laranja "Crie uma conta AWS" no canto superior direito e preenchemos suas informações para acessar o serviço.

Como já estou logado, fui direcionado diretamente à **página inicial do console**, onde estão listados alguns serviços que visitei recentemente. Se esta é sua primeira vez, sua página inicial estará vazia, exceto por possíveis ofertas de serviços.

Para subir nosso _container_, utilizaremos um serviço de computação conhecido como _Elastic Beanstalk_.

## Usando o _Elastic Beanstalk_

Para acessá-lo, clicamos na opção de serviços localizada no canto superior esquerdo da tela e digitamos "Elastic Beanstalk" na barra de pesquisa (ou usamos o atalho "Alt + S").

Podemos ir diretamente procurar por _Elastic Beanstalk_, e lá aparecerá esse serviço. Na lista de resultados, encontraremos o _Elastic Transcoder_, mas vamos selecionar o _Elastic Beanstalk_ na segunda opção abaixo.

Ao entrar no _Elastic Beanstalk_, clicaremos novamente no canto superior esquerdo em "Elastic Beanstalk" para acessar a página inicial desse serviço. A página anterior mostrava algumas aplicações que eu tinha subido.

Agora, clicamos na opção "Comece a usar" e selecionamos o botão laranja "Criar aplicação", localizado à direita da nossa tela.

Nesta página, o que encontramos é a **configuração do ambiente**. Ao rolar a página, encontramos seis etapas listadas do lado esquerdo.

- Etapa 1
    - Configurar o ambiente
- Etapa 2
    - Configurar o acesso ao serviço
- Etapa 3 - opcional
    - Definir redes, bancos de dados e etiquetas
- Etapa 4 - opcional
    - Configurar o tráfego e a escalabilidade da instância
- Etapa 5- opcional
    - Configurar atualizações, monitoramento e registros em log
- Etapa 6
    - Analisar

As cinco primeiras etapas são dedicadas à configuração das principais variáveis e parâmetros para criar o ambiente no qual vamos executar nossa aplicação. Na sexta etapa, revisamos todas as definições para garantir que estejam corretas e então criamos o ambiente para executar a aplicação.

**Seguiremos esses passos gradualmente.**

## Etapa 1: Configurar o ambiente

Começamos definindo o **nível do ambiente** que desejamos. Vamos configurá-lo como um servidor _web_ selecionando a opção "Ambiente de serviço Web", pois desejamos que as pessoas acessem nossa aplicação via _web_.

Nessa etapa, também atribuímos informações específicas à aplicação, como um nome, por exemplo, "_allbooks_". Para isso, na seção "Informações da aplicação" digitamos "allbooks" no campo "Nome da aplicação".

Em seguida, encontramos a seção "informações do ambiente" que foram preenchidas automaticamente, incluindo "allbooks" e "env". Observe que no campo "Nome do ambiente" temos "Allbooks-env". Não precisamos adicionar mais nada aqui.

Na seção "Plataforma", iremos escolher "Plataforma Gerenciada" e definir nossa plataforma. Para nosso caso específico, estamos utilizando o Docker. Assim, selecionamos "Docker" no campo "Plataforma".

É importante observar que os campos "Ramificação da plataforma" e "Versão da plataforma" foram preenchidos automaticamente como "Docker running 64bit Amazon Linux 2023" e "4.2.1 (Recommended)", respectivamente.

Manteremos essa ramificação e a versão recomendada, que é `4.2.1`. Neste momento, a aplicação de amostra será iniciada automaticamente na seção "Código da aplicação". Após isso, faremos o _upload_ do nosso código.

Na seção "Predefinições", manteremos uma "instância única(qualificada para o nível gratuito)" e clicaremos no canto inferior direito da tela na opção "Próximo" para passarmos para a segunda etapa.

Aguardaremos um momento.

## Etapa 2: Configurar o acesso ao serviço

Na segunda etapa, configuraremos o **acesso ao serviço**. Primeiramente, teremos a opção de escolher um "Perfil de Serviço" onde optamos por "usar um perfil de serviço existente". É importante ter perfis IAM disponíveis (gestão de identidade e acesso), pois eles permitem a **criação de instâncias EC2** e **autorizam o Elastic Beanstalk a realizar algumas configurações no ambiente**.

Já configuramos um perfil de serviço chamado "Permission_elastic_beanstalk" na seção de "perfis de serviço existentes". Além disso, temos um "perfil de instância do EC2" chamado "permission_ec2" também configurado.

Se clicarmos em "Visualizar Detalhes da permissão" na parte inferior da página, poderemos observar quais operações e serviços estão autorizados por essas permissões. Para criar ou modificar essas permissões, é **necessário acessar o IAM**, que é a plataforma de gestão de identidade e acesso. Vamos avançar clicando em "Próximo" para acessar a terceira etapa de configuração.

## Etapa 3: Definir redes, bancos de dados e etiquetas

Nesta terceira etapa, temos a opção de "Nuvem Privada Virtual", que é a VPC. Selecionamos a padrão "vpc-65b65200e(172.31.0.0/16)". Na "configuração de instâncias", é importante ativar o endereço IP público, porque desejamos acessar externamente essa aplicação. Para tal, clicamos na _checkbox_ "Ativado".

Nas "sub-redes de instância", selecionamos as zonas de disponibilidade. Selecionamos as seguintes sub-redes:

- us-east-2b
- us-east-2c
- us-east-2a

Neste momento, na seção "Banco de Dados", não faremos nenhuma integração com o Banco de Dados. Apenas configuraremos o servidor de _front-end_ da nossa aplicação. Também não haverá etiquetas, portanto, basta clicar em "Próximo" para avançar para a quarta etapa da configuração.

## Etapa 4: Configurar o tráfego e a escalabilidade da instância

Para as opções em "Instâncias", manteremos as configurações padrão. Não faremos alterações aqui. Quanto aos "Grupos de segurança do EC2", que são de grande importância, eu criei um grupo chamado "devops4" para essa finalidade.

Eu vou escolher este grupo e para **criar um grupo de segurança**, tudo que você precisa fazer é acessar a **página inicial do console** e buscar por **EC2**. Ao pesquisar EC2 e clicar no primeiro item que aparece na busca, você será redirecionado para a página correspondente.

Em seguida, descemos a página do lado esquerdo até o canto esquerdo da tela e lá encontrará a opção "Security groups" dentro da seção "Network & Security" ("Rede e segurança").

Ao clicarmos em "_Security Groups_", encontramos a opção "Criar um Grupo de Segurança" no botão laranja. Clicando nesse botão, podemos criar um grupo de segurança definindo tanto as regras de entrada quanto as regras de saída.

Na seção "Regras de entrada", selecionamos "Adicionar regra".

Por exemplo, para o grupo "devops4", adicionei uma regra de entrada do tipo TCP, permitindo qualquer local IPv4 como origem e utilizando o endereço IP 0.0.0.0/0. Quanto às regras de saída, permite todo o tráfego, em qualquer local IPv4 em qualquer porta.

Resumindo, esse foi o procedimento que realizamos ao adicionar a regra "Criar um Grupo de Segurança" durante a configuração do grupo DevOps 4.

Agora, **voltando à nossa tela de configuração**, no item "Capacidade" não faremos alterações, deixaremos como padrão.

Descendo um pouco mais, encontramos o "tipos de instâncias". Os tipos de instância disponíveis para o teste gratuito, que podem ser cobertos pelos créditos iniciais, incluem apenas o "t3.micro". Portanto, vamos remover o "t3.small" da lista. Depois de descer até o final da página, clicaremos novamente em "Próximo" para ir para a quinta e última etapa de configuração.

## Etapa 5: Configurar atualizações, monitoramento e registros em log

Nessa fase final, encontramos os **relatórios de integridade** associados ao monitoramento da aplicação que está sendo implementada. Não faremos alterações nessa configuração; iremos mantê-la como está definida nesta área. Assim, navegaremos até a parte inferior da página.

Notamos que no "_software_ de plataforma", manteremos selecionado o "Nginx" como servidor de proxy, o qual funcionará como servidor HTTP para nós. Em seguida, clicaremos na opção de "Próximo".

## Etapa 6: Analisar

A sexta etapa é basicamente uma **análise de todas as configurações e definições** que fizemos nesse ambiente. Podemos conferir se está tudo conforme o esperado, o nome da aplicação, o _allbooks_, o código da aplicação vai ser uma aplicação de amostra, definimos os perfis de serviços, Permission Elastic Beanstalk, Permission EC2.

Temos o endereço IP público, a subrede da instância, tudo certo. Podemos descer até a parte inferior da página e clicar em "Enviar".

## Conclusão e Próximos Passos

A partir deste ponto, uma nova página será aberta e nela temos uma mensagem na parte superior informando que o Elastic Beanstalk está iniciando o ambiente, o que pode levar alguns minutos. Este procedimento demandará um pouco de tempo, portanto, retornaremos quando o ambiente estiver em processo de criação ou já tiver sido criado.

Nesse momento, iremos analisar os logs que estão sendo enviados conforme a aplicação e o ambiente são configurados, e também acessaremos a aplicação de exemplo que foi instalada junto com o ambiente.

Até mais!

#   
Faça como eu fiz: criando instâncias na nuvem

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153409/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153409/question)

A adoção de soluções de infraestrutura baseadas na computação em nuvem, ou cloud computing, tem transformado profundamente o modo como armazenamos, processamos e acessamos dados e recursos computacionais. Antes, era bem comum a dependência exclusiva de uma infraestrutura física dedicada a uma organização. A evolução das tecnologias de comunicação possibilitou que a computação em nuvem oferecesse uma grande variedade de serviços e recursos por meio da internet.

Você já utilizou a nuvem para hospedar uma aplicação? Analisou a grande variedade de serviços oferecidos? Chegou a sua vez de explorar essas questões! Caso queira consultar os passos que seguimos para realizar a configuração do serviço na nuvem, clique na Opinião da pessoa instrutora.

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153409/opinion)

- Criação de uma conta na AWS
    
    - [Acesse o site da Amazon Web Services (AWS)](https://aws.amazon.com/) e crie uma conta, caso ainda não tenha uma.
    - Siga as instruções para fornecer informações necessárias, como detalhes de contato e informações de pagamento.
    - Muita atenção no uso de serviços! Alguns serviços podem gerar cobranças em seu cartão.
- Acesso ao console da AWS
    
    - Faça login no Console da AWS usando as credenciais da sua conta.
    - No Console da AWS, navegue até o serviço Elastic Beanstalk.
    - Clique em "Get Started" para começar a criar sua aplicação.
- Configuração da aplicação no Elastic Beanstalk
    
    - Escolha um nome para sua aplicação, por exemplo, "all-books".
    - Configure as tags da aplicação conforme necessário.
    - Na seção "Platform", escolha "Docker" como a plataforma para executar sua aplicação.
- Configuração do ambiente
    
    - Escolha um nome para o ambiente, por exemplo, "all-books-environment".
    - Escolha a plataforma Docker e a versão recomendada.
    - Na seção "Application Code", escolha a opção "Sample application" para uma aplicação de exemplo.
- Configurações adicionais
    
    - Clique em "Configure more options" para opções avançadas.
    - Em "Capacity", escolha a instância de acordo com suas necessidades e considere a camada gratuita (free tier) se estiver disponível.
    - Configuração de Segurança:
    - Crie um novo grupo de segurança (Security Group).
    - Dê um nome ao grupo, por exemplo, "books".
    - Configure as regras de entrada para permitir o tráfego na porta 80 (HTTP).
    - Salve as configurações do grupo de segurança.
- Configuração da rede
    
    - Configure a instância para ter um IP público.
    - Escolha uma zona de disponibilidade ou deixe como padrão.
- Criação da aplicação
    
    - Ignore a configuração do banco de dados para manter a simplicidade na demonstração.
    - Na seção "Save", clique em "Create App" para criar a aplicação no Elastic Beanstalk.

Após criar a aplicação, o Elastic Beanstalk iniciará o processo de implantação.

Aguarde até que a implantação seja concluída.

## Transcrição

Agora que nosso ambiente está configurado no _Elastic Beanstalk_, a mensagem na parte superior da página confirma que o ambiente foi iniciado com sucesso.

> O ambiente foi iniciado com êxito.

Ao rolar a página até a seção de "Eventos", podemos verificar todos os logs que detalham o que está acontecendo. Isso inclui as atividades realizadas pelo Elastic Beanstalk desde o momento em que clicamos em "Criar Aplicação".

Nesse registro detalhado, conseguimos verificar se o ambiente foi lançado com sucesso, se as instâncias estão operacionais, a criação de um novo _Security Group_, entre outras ações, como alterações no _status_ do ambiente. Da mesma forma, qualquer erro que ocorra também será relatado nesta seção.

Ao acessarmos o "Domínio" na seção "Visão geral do ambiente" mais acima, encontramos a **aplicação de exemplo**, que é um código de amostra selecionado durante a configuração do ambiente. A página exibe uma mensagem de "_Congratulations_" e também disponibiliza alguns vídeos tutoriais sobre como implantar um container com Docker.

Agora, vamos proceder com a implantação real do nosso _container_ contendo a aplicação _Allbooks_. Antes disso, faremos um pequeno **ajuste na imagem que criamos anteriormente**.

## Ajustando a imagem

Abrimos o _prompt_ de comando e navegamos até a pasta onde trabalhamos com a imagem, que é o diretório curso _React Alura Books_.

```bash
cd ./curso-react-alurabooks/
```

Teclamos "Enter" e entramos no diretório.

Ao listar o conteúdo com o comando `ls`, poderemos acessar o `Dockerfile`, que contém todas as informações necessárias para construir nossa imagem. Para isso, usamos o seguinte comando:

```undefined
nano Dockerfile
```

**O que vamos mudar nesse `Dockerfile`?** Basicamente, expor nossa porta 3000. Isso é uma boa prática. Por exemplo, quando subimos este _container_, se não especificamos o mapeamento de portas, ao darmos um `docker ps`, estará exibido que essa porta 3000 está exposta. **É a porta que o _container_ vai receber solicitações externas**.

Escrevemos "Expose 3000" entre o "Run npm install" e o "COPY".

> ```yaml
> EXPOSE 3000
> ```

Estamos expondo a porta 3000 desse container. Teclamos "Ctrl + X" para sair. Ele pergunta se desejamos salvar essa modificação ("_Save modified buffer?_"). Teclamos "Y" que representa sim. Então, agora já está salvo.

Qual é o próximo passo? **Vamos gerar um novo _build_ desta imagem**.

## Gerando o _build_ da imagem

Para isso, usamos o comando `docker build -t` para atribuir um novo nome a esta imagem. **Vou usar meu nome de usuário do Docker Hub**, que é lcsrm, e o nome da imagem será AllBooks na versão `1.2`.

Por enquanto, temos:

```bash
docker build -t lcsrm/allbooks:1.2
```

Após isso, vamos adicionar um **ponto** para indicar o diretório onde faremos o _build_.

```bash
docker build -t lcsrm/allbooks:1.2 .
```

Agora, vamos aguardar um pouco até que o _build_ esteja completo. Quando estiver pronto, continuaremos.

Agora que o _build_ da nossa imagem foi concluída, qual será o próximo passo? **Vamos atualizar esta imagem no Docker Hub**.

## Atualizando a imagem no Docker Hub

Para fazer isso, usaremos o comando `docker push` e faremos o `docker push` da imagem `lcsrm/allbooks:1.2`.

```bash
docker push lcsrm/allbooks:1.2
```

Neste momento, o sistema está preparando as camadas para serem enviadas e fazer o _upload_. Em breve, a nova versão da imagem _AllBooks_ estará disponível no Docker Hub, em nosso repositório para este projeto.

Qual é o próximo passo para **subir esta imagem em nosso ambiente na AWS**, utilizando o Elastic Beanstalk? Precisamos criar um arquivo chamado `Dockerrun.aws.json`, que é um arquivo JSON específico para a AWS e o Elastic Beanstalk entenderem qual imagem devem buscar no Docker Hub para iniciar este _container_.

Para isso, vou apresentar esse documento para vocês.

> Dockerrun.aws.json

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": 
    }
  ]
}
```

No VS Code, criei um arquivo `Dockerrun.aws.json` seguindo um formato padrão para configurar o Elastic Beanstalk.

A primeira informação que ele contém é a `AWSEBDockerrunVersion`, indicando a **versão do formato** usado, que é a versão `1` neste caso. Logo em seguida, há o campo `image`, onde especificamos o **nome da imagem que vamos utilizar**, que é a que acabamos de fazer o _upload_. Podemos verificar sua presença no Docker Hub para confirmar.

> [Docker Hub](https://hub.docker.com/)

Vamos acessar o Docker Hub e verificar nosso repositório chamado _allbooks_. Observamos que a imagem que acabamos de criar, com a tag `1.2`, foi enviada (_push_) há 4 minutos. Confirmamos, portanto, que ela está no repositório. Agora, retornamos ao VS Code e podemos inserir o nome completo da imagem, que no meu caso é lcsrm/allbooks:1.2.

> Dockerrun.aws.json

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "lcsrm/allbooks:1.2",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": 
    }
  ]
}
```

**É importante não esquecer da _tag_ especificada.** Também habilitamos a opção _update_ `true` para garantir que a imagem seja **atualizada** sempre que uma nova versão estiver disponível.

Abaixo, podemos observar o item portas. **Mas o que são exatamente as portas?** Elas são os pontos de **comunicação** com o _container_ que estamos prestes a implantar. Como mencionado anteriormente, acabamos de expor a porta do container, que será a porta `3000`. Portanto, devemos inserir o valor 3000.

> Dockerrun.aws.json

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "lcsrm/allbooks:1.2",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": 3000
    }
  ]
}
```

## Conclusão e Próximos Passos

Com isso, nosso arquivo de configuração, o `Dockerrun.aws.json`, está pronto para ser implantado no Elastic Beanstalk. Pressionamos "Ctrl + S" para salvar essas configurações.

Em seguida, **faremos o _upload_ deste documento para o Elastic Beanstalk** e veremos nossa aplicação em funcionamento.

# Faça como eu fiz: configurando a aplicação na nuvem

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153411/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153411/question)

Vimos que o arquivo `Dockerrun.aws.json` é utilizado para especificação da configuração do ambiente no AWS Elastic Beanstalk no caso de aplicativos executados em containers Docker. Esse arquivo fornece detalhes específicos sobre como os containers Docker devem ser configurados e como o ambiente do Elastic Beanstalk deve ser provisionado para sua execução.

Você criou o arquivo `Dockerrun.aws.json` para subir a aplicação no Elastic Beanstalk? Explorou a sintaxe e os procedimentos necessários? Então, agora é a sua vez de analisar essas questões! Caso queira consultar os passos que seguimos no vídeo, clique na Opinião da pessoa instrutora.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153411/opinion)

Abra seu editor de texto preferido ou uma IDE e crie um novo arquivo chamado `Dockerrun.aws.json`.

No início do arquivo, adicione a chave "AWSEBDockerrunVersion" com o valor "1". Isso informa ao Elastic Beanstalk qual versão do formato `Dockerrun.aws.json` estamos utilizando.

Em seguida, adicione a chave "Image" com um objeto contendo a chave "Name" com o valor do nome da imagem Docker. Em nosso caso, a imagem é "lcsrm/allbooks:1.2". Adicione também a chave "Update" com o valor "true" para garantir que a imagem seja atualizada sempre que houver uma nova versão disponível.

Por fim, adicione a chave "Ports" com uma matriz de objetos contendo as portas que serão expostas pelo container Docker. Cada objeto deve conter a chave "ContainerPort" com o valor da porta que o contêiner está ouvindo. Neste caso, a porta é 3000.

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "lcsrm/allbooks:1.2",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": 3000
    }
  ]
}
```

# Para saber mais: coordenando containers com Docker Compose

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153412/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153412/question)

Analisamos o processo de criação e gerenciamento de containers de modo manual até aqui. Quando lidamos, na prática, com a implementação de um projeto completo como o All Books, temos de configurar e executar aplicações compostas por vários serviços.

E o que fazemos em casos assim?

Usamos uma solução prática e eficiente conhecida como `Docker Compose` que nos permite definir o ambiente de toda a aplicação de forma declarativa, por meio de um arquivo YAML, o `docker-compose.yml`. Nesse arquivo incluímos informações detalhadas sobre cada serviço necessário para o funcionamento da aplicação, tais como imagens Docker que serão usadas, portas expostas, variáveis de ambiente e dependências.

O Docker Compose atua na coordenação de múltiplos containers, permitindo definir, gerenciar e conectar serviços por meio de um único arquivo de configuração YAML. Assim, as pessoas desenvolvedoras podem descrever a infraestrutura necessária em um arquivo como código, tornando o processo de deployment mais eficiente, replicável e menos propenso a erros.

Para conhecer mais detalhes sobre como usar o Docker Compose de modo prático, recomendamos a leitura de um breve artigo: [Docker Compose para compor uma aplicação](https://www.alura.com.br/artigos/compondo-uma-aplicacao-com-o-docker-compose)

# Desafio: usando Docker Compose no All Books

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153413/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153413/question)

Na atividade anterior vimos que o Docker Compose é uma ferramenta utilizada na coordenação de múltiplos containers, possibilitando a definição, gerenciamento e conexão de serviços por meio de um único arquivo de configuração YAML.

Que tal explorar na prática como usar o Docker Compose no projeto de frontend do All Books?

Caso queira consultar os passos necessários para isso, clique na Opinião da pessoa instrutora.

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153413/opinion)

Primeiro, verifique se o Docker Compose está instalado no seu sistema.

No Windows, ele geralmente vem junto com a instalação do Docker. No Linux, pode ser necessário instalá-lo separadamente. Utilize o comando docker-compose no terminal para verificar.

Caso seja necessário instalar o Docker Compose em seu computador, [acesse a documentação oficial](https://docs.docker.com/compose/install/) para obter instruções específicas de instalação no seu sistema operacional.

- Criação do Arquivo Docker Compose
    
    - Navegue até a pasta da aplicação All Books no seu sistema de arquivos.
    - Utilize um editor de texto, como o nano, para criar um novo arquivo chamado “docker-compose.yml”: `nano docker-compose.yml`.
- Arquivo Docker Compose (YML)
    
    - No arquivo docker-compose.yml, adicione o seguinte conteúdo:
    
    ```yaml
    version: "3.9"
    services:
      server:
        build: .
        container_name: allbooks
        ports:
          - 8080:3000
    ```
    
    - Assim, definimos um serviço chamado “server” que construirá um container a partir do Dockerfile no diretório atual. O nome do container foi definido como 'allbooks' e a porta 3000 do container foi mapeada para a porta 8080 do host.
- Utilizando o comando `docker compose up`
    
    - Depois de termos criado o arquivo `docker-compose.yml`, podemos utilizar o comando `docker compose up` para iniciar os serviços especificados.
    - No diretório do projeto All Books, execute o comando `docker compose up`.
    - O Docker Compose iniciará a construção dos containers conforme as instruções do arquivo YAML. Serão exibidas mensagens no terminal indicando o progresso da construção e inicialização de cada serviço.
    - Quando o processo estiver concluído, poderemos acessar a aplicação All Books no navegador web, utilizando o endereço `localhost:8080`.
    - Para interromper a execução dos serviços, basta pressionar `Ctrl + C` no terminal em que o `docker compose up` está sendo executado.
## Transcrição

Com o arquivo de configuração `Dockerrun.aws.json` pronto, estamos prontos para **configurar o ambiente no Elastic Beanstalk** e **subir nossa aplicação**.

## Subindo a aplicação na nuvem

Para isso, clicamos no botão laranja localizado no canto superior direito da página, onde encontramos a opção "Fazer Upload e Implantar". Ao clicar nesse botão, **escolheremos o arquivo** necessário, que é exatamente o arquivo JSON que criamos anteriormente.

Clicamos no botão "Escolher arquivo". Após selecioná-lo na pasta de _downloads_, a versão será automaticamente rotulada como "allbooks-version-1". Em seguida, basta clicar no botão "Implantar" no canto inferior direito da janela.

Esperamos um pouco, pois esse processo levará um certo tempo. Vamos acompanhar os **eventos que ocorrem nesse processo de implantação**, de fazer o _deploy_ (implantação) da nossa aplicação nesse ambiente de nuvem, pelos _logs_, pelos detalhes de cada um dos eventos que estão ocorrendo.

A primeira mensagem que temos na parte superior é que o Elastic Beanstalk está atualizando o ambiente. Se quisermos cancelar, é só clicar em "Ações", onde podemos, por exemplo, reconstruir e encerrar o ambiente. É importante que, após terminar o curso, você explore um pouco também como é esse processo de _deploy_ e encerre esse ambiente para não ter nenhuma instância ligada na sua conta na AWS.

Voltaremos assim que o ambiente estiver configurado e disponível para acessarmos nossa aplicação. **Quando o nosso ambiente for atualizado com êxito** e a nossa aplicação for implantada, poderemos acessar a nossa aplicação pelo link e visualizar os livros que estão no _front-end_.

> Link do instrutor: teste-env.eba-5whbwxbp.us-east-2.elasticbeanstalk.com

Com isso, temos a aplicação AllBooks, containerizada, operando na nuvem e disponível na _web_.

Exploramos apenas uma fração das possibilidades oferecidas pelos _containers_ e pelos serviços de computação em nuvem. Foi evidente que o processo não é tão complexo quanto inicialmente pode parecer.

Ao lidarmos com _containers_, nos deparamos com diversas partes da nossa aplicação. No contexto do _AllBooks_, incluiríamos o _front-end_, _back-end_ e banco de dados, cada um em seu respectivo _container_. Como poderíamos simplificar o processo de implantação desses _containers_, evitando a necessidade de executar manualmente comandos como `docker build` e `docker run` um por um? A resposta está em uma solução conhecida como **docker compose**.

E no ambiente de nuvem, como faríamos para fazer o escalonamento, ter toda essa flexibilidade, fazer o gerenciamento desses _containers_, a orquestração disso? Usaríamos ferramentas como o **Kubernetes**.

## Conclusão

Portanto, o uso de _containers_ abre um mundo de possibilidades bem interessantes, vale muito a pena para quem deseja se especializar nessa abordagem DevOps, explorar bastante essas possibilidades que a containerização de soluções oferece.


# Para saber mais: arquivos de configuração YAML

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153415/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153415/question)

Arquivos de configuração YAML (YAML Ain't Markup Language) são utilizados para representar dados de forma estruturada e legível por humanos. YAML é uma linguagem de marcação leve, frequentemente usada em contextos de configuração de software e dados estruturados. Aqui estão alguns pontos chave sobre arquivos de configuração YAML:

- **Sintaxe simples:** YAML utiliza uma sintaxe simples, baseada em espaçamento e indentação para estruturar dados. Isso o torna fácil de ler e escrever.
- **Hierarquia por indentação:** a hierarquia dos dados é representada por meio de espaços ou tabs. A indentação é crucial para definir a estrutura aninhada dos elementos.
- **Tipos de dados:** YAML suporta vários tipos de dados, como strings, números, listas e mapas (chaves e valores). Os tipos de dados são inferidos automaticamente.
- **Chaves e valores:** os dados em YAML são organizados em pares de chave e valor. Chaves são seguidas por dois pontos, e os valores podem ser simples (como uma string) ou complexos (como uma lista ou mapa).
- **Comentários:** comentários são permitidos em arquivos YAML e são precedidos pelo caractere "#" (cerquilha).
- **Inclusão de outros arquivos:** é possível incluir outros arquivos YAML em um arquivo principal, o que facilita a modularização e reutilização de configurações.
- **Extensivamente utilizado:** YAML é comumente usado em configurações de aplicativos, ferramentas de automação (como Ansible e Kubernetes), e em muitos outros contextos onde é necessário representar dados de forma legível e estruturada.

Você pode se aprofundar mais no assunto [acessando a documentação oficial do YAML](https://yaml.org/).

#   
Para saber mais: entendendo Kubernetes

 [Próxima Atividade](https://cursos.alura.com.br/course/devops-construindo-gerindo-containers-docker/task/153416/next)

- [](https://cursos.alura.com.br/suggestions/new/devops-construindo-gerindo-containers-docker/153416/question)

Kubernetes, em grego, significa timoneiro ou piloto de navio. Logo, o sistema faz jus ao nome e é perfeito para navegar com nossos containers para qualquer ambiente que precisarmos. Porém, construir um conjunto de containers pode não ser uma tarefa fácil se não tivermos a ferramenta adequada.

Quando necessitamos ter o controle de um conjunto de containers, utilizamos orquestradores. O Kubernetes é um orquestrador de containers que facilita bastante nessas tarefas, pois consegue gerenciar um cluster com várias máquinas e, por conta da sua arquitetura, se torna uma ferramenta muito interessante.

Para compreender melhor as múltiplas funcionalidades do Kubernetes e como os recursos desse orquestrador podem auxiliar no cuidado dos containers, recomendamos que você [leia o artigo Kubernetes: conhecendo a orquestração de containers](https://www.alura.com.br/artigos/kubernetes-conhecendo-orquestracao-containers).