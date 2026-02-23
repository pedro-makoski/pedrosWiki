# Diferença de Git e Github
O Github hospeda repositórios git.
No github você pode:
- Hospedar os códigos
- Distribuir os códigos
- Compartilha-los
- Envia alterações de código.
# Slug de um repositório
Slug é um nome único, e que para o github deve ser um nome único e memorável.
# Diferença de função e estética
Função - função que algo pode oferecer.
Estética - como é organizado e mostrado. Geralmente casa maior briga.
# Codespaces
Sistema de edição de código online. Pode ser executado, entrando em Código>Codespaces>Create Codespace on Main.
# Como fazer no windows
# Windows

## 1. Introdução

Para configurar o ambiente de desenvolvimento no Windows, precisamos ter instaladas as duas ferramentas principais para rodar o nosso projeto clone do **TabNews**, que são o Node.js e o Docker. Neste tutorial nós iremos detalhar como fazer isso, além de sugerir algumas outras ferramentas adicionais para otimizar o trabalho.

|🔴 Atenção! Essa é uma aula com conteúdo de nível avançado. Caso você seja iniciante, recomendamos que siga com o desenvolvimento do projeto no ambiente do [Codespaces](https://curso.dev/web/ambiente-de-desenvolvimento-codespaces). Mais pra frente, quando estiver mais confortável, você pode voltar aqui e configurar o seu ambiente local, sem prejuízo algum.|
|---|

## 2. Docker no Windows

O Docker é um recurso fantástico e nós teremos a oportunidade de nos aprofundarmos mais nele ao chegarmos no `Dia 17`, quando formos configurar o nosso banco de dados local. Mas, por enquanto, basta dizer que ele nos permite executar programas em ambientes isolados e padronizados, conhecidos como _contêineres_, com a garantia de que esses programas funcionarão da exata mesma maneira em qualquer máquina, independentemente das configuração de hardware ou software desta.

No Windows, existem três maneiras de se instalar e usar o Docker:

1. **Docker Desktop** com a base no **Hyper-V**;
2. **Docker Desktop** com a base no **WSL**;
3. **Docker Engine** diretamente dentro do **WSL**;

Mas qual a diferença entre elas, e qual devo escolher? A fim de tomar uma decisão bem informada vamos primeiro esclarecer brevemente alguns termos para ao final chegar à solução mais adequada ao nosso contexto. Vamos começar pelo **Hyper-V** e **WSL**, que dizem respeito à camada base (ou backend) que oferece o suporte para o Docker, e em seguida explicar os termos **Docker Engine** e **Docker Desktop** que dizem respeito à aplicação em si, e à forma de interação com o usuário.

### 2.1 Esclarecendo o que é Hyper-V e WSL: o _backend_ do Docker no Windows

A "casa" do Docker é o Linux. É onde foi projetado originalmente, e onde também estão os recursos nativos dos quais depende, como nós veremos mais na frente no curso. Portanto, para que ele possa funcionar no Windows, é preciso que haja "por baixo" dele uma camada adicional que simule o seu ambiente original. E é aí que entram o **Hyper-V** e o **WSL**, as "pontes" entre o Docker e o Windows.

De modo bem simples, tanto o **Hyper-V** como o **WSL** são programas que utilizam a tecnologia de máquinas virtuais (as famosas **VM**'s). Essa tecnologia permite que você simule, dentro do seu sistema operacional, um computador virtual com seus recursos de hardware e sistema operacional próprios. A diferença é que, enquanto o **Hyper-V** é uma plataforma de virtualização completa, que permite a criação de várias máquinas virtuais com diferentes sistemas operacionais (Windows ou Linux), incluindo o gerenciamento manual dos recursos de hardware dessas máquinas, o **WSL** consiste em apenas uma máquina virtual que roda o kernel do Linux, e cujo gerenciamento dos recursos de hardware é feito automaticamente e de modo abstraído do usuário.

Ok, mas qual devo escolher? Bem, como o nosso objetivo é rodar apenas o Docker, o **Hyper-V** é muito mais do que nós precisamos, e, além de adicionar uma complexidade a mais no processo, está disponível [apenas nas versões PRO do Windows](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/about/#system-requirements) 10 ou 11. Portanto, o **WSL** é a solução mais apropriada, pois nos oferece uma máquina virtual pré-configurada, leve, e integrada ao Windows.

### 2.2 Esclarecendo o que é **Docker Engine** e **Docker Desktop**

Agora que já definimos como nós iremos fornecer o ambiente Linux para o Docker no Windows, vamos entender quais são as outras duas formas de se instalar e utilizar o Docker.

Novamente, de modo bem simples, o **Docker Engine** é o núcleo da ferramenta e o responsável pelo trabalho de criação, execução, e gerenciamento dos _contêineres_. É o motor que faz as coisas se mexerem. Por isso o nome "_engine_". Já o **Docker Desktop** é uma solução mais completa, que inclui o **Docker Engine**, mas oferece também uma interface gráfica para facilitar as configurações. Aproveitando a analogia, seria como a lataria do carro, com vários acessórios opcionais.

Por conta dos recursos adicionais, naturalmente o **Docker Desktop** é mais pesado e consome mais recursos da máquina hospedeira[1](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fn-1). Por esse motivo, e porque a nossa interação com o Docker durante as aulas será exclusivamente via linha de comando no terminal do Linux[2](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fn-2), o caminho recomendado será instalar o **Docker Engine** diretamente dentro do **WSL**.

### 2.3 Instalando o WSL 2

Agora com o nosso caminho de instalação definido, vamos colocar a mão na massa de fato, primeiramente instalando o **WSL 2**.

Os passos descritos abaixo são baseados na documentação oficial da Microsoft, sendo necessária a execução de apenas um comando para desencadear o processo automático. O requisito para a instalação é ter o Windows 11, ou o Windows 10 na versão 20H1 e superior (Build 19041 e superior)[3](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fn-3).

#### Passo 1: Habilitar recursos e instalar Ubuntu

Com o PowerShell (ou o Prompt de Comando do Windows) aberto no modo de administrador, executar o comando `wsl --install`. Esse comando habilitará os recursos necessários para executar o WSL e irá instalar a distribuição Ubuntu do Linux. Para que a instalação seja concluída será necessário reiniciar o computador.

![Comando wsl --install](https://i.imgur.com/isO9AlG.png)

![Finalização da instalação](https://i.imgur.com/HXpe7Pn.png)

#### Passo 2: Criar usuário no Ubuntu

Após reiniciar o computador, caso uma janela de terminal do Ubuntu não abra automaticamente, vá no menu iniciar e busque por "Ubuntu". Clicando no ícone será aberto o terminal da distribuição. Após aberto, a distribuição será inicializada, solicitando a criação de um usuário e senha. _**Obs**_.: ao digitar a senha, nada será exibido. Isso é um recurso de segurança padrão do terminal.

![Criação de usuário no Ubuntu](https://i.imgur.com/7ISSTd8.png)

### 2.4 Instalando o Windows Terminal

Antes das próximas etapas é recomendável a instalação do Windows Terminal, que é uma interface moderna, unificada, e customizável para vários shells. Ele irá facilitar a nossa vida na hora de colar e executar os comandos de múltiplas linhas durante o processo de instalação do Docker. No Windows 11 ele já está presente nativamente, mas no Windows 10 é preciso instalá-lo via Microsoft Store.

![Windows Terminal](https://i.imgur.com/bZ8mOZt.png)

Ao abrir o Windows Terminal, o PowerShell será iniciado por padrão, mas você pode selecionar o terminal do Ubuntu clicando na seta ∨, ao lado do botão de +:

![Windows Terminal - Ubuntu](https://i.imgur.com/QL4rKd8.png)

### 2.5 Instalando o Docker Engine no Ubuntu

Com a nossa distribuição Linux devidamente instalada, a próxima etapa é colocar o Docker para rodar dentro dela. Para isso, basta seguir os passos da [documentação oficial](https://docs.docker.com/engine/install/ubuntu/) do Docker para o Ubuntu, que estão reproduzidos abaixo.

#### Passo 1: Adicionar a chave GPG oficial do Docker

Estes comandos, em conjunto, configuram o sistema para adicionar um novo repositório de pacotes (neste caso, o Docker), e garantir que o sistema possa validar a autenticidade dos pacotes baixados desse repositório.

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

![Adicionar a chave GPG oficial do Docker](https://i.imgur.com/E1g0AKv.png)

#### Passo 2: Adicionar o repositório do Docker à lista de fontes de pacotes do APT

Este comando adiciona o repositório do Docker à lista de fontes de pacotes do APT (o gerenciador de pacotes do Ubuntu), configurando-o para a arquitetura do sistema e verificando os pacotes com a chave GPG armazenada.

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

![Adicionar o repositório do Docker à lista de fontes de pacotes do APT](https://i.imgur.com/1lo4kPd.png)

#### Passo 3: Instalar os pacotes do Docker

Este comando instala o Docker Community Edition, a CLI do Docker, o runtime containerd, além dos plugins Docker Buildx e Docker Compose, equipando o sistema com todas as ferramentas essenciais para criar, gerenciar e executar os contêineres.

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

![Instalar os pacotes do Docker](https://i.imgur.com/qnfxmcj.png)

#### Passo 4: Dar permissão ao usuário atual para rodar o Docker

Este comando adiciona o usuário atual ao grupo docker, permitindo que ele execute comandos Docker sem precisar de privilégios de superusuário (sudo).

```bash
sudo usermod -aG docker $USER
```

![Dar permissão ao usuário atual para rodar o Docker](https://i.imgur.com/1WPjQuB.png)

#### Passo 5: Reiniciar o WSL

Fechar o terminal do Ubuntu, e de volta ao PowerShell, executar o comando `wsl --shutdown` para que a mudança tenha efeito.

![Reiniciar o WSL](https://i.imgur.com/5tmL8Gh.png)

#### Passo 6: Verificar Instalação do Docker

Por fim, abrir novamente o terminal do Ubuntu, e executar o comando `docker ps` para verificar que o Docker está rodando com sucesso. O retorno deve ser semelhante ao da imagem abaixo.

![Verificar Instalação do Docker](https://i.imgur.com/RhMgnr9.png)

## 3. Preparando o caminho para o Node.js com o NVM

Com o Docker pronto para uso, vamos partir agora para a instalação do Node Version Manager (NVM), que é a ferramenta que nos ajudará a instalar e gerenciar diferentes versões do Node.js. E isso nós faremos também dentro do WSL, que, daqui pra frente será a nossa "casa" para o desenvolvimento do projeto. O processo é simples e consiste basicamente na execução de um único comando.

#### Passo 1: Baixar e executar o script oficial

Executar o comando abaixo, disponível no [repositório oficial do NVM](https://github.com/nvm-sh/nvm), para fazer o download e execução do script de instalação.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

![Baixar script do NVM](https://i.imgur.com/M3o2qm6.png)

#### Passo 2: Verificar a Instalação

Executar o comando `command -v nvm` a fim de verificar se a instalação foi feita com sucesso. Caso o comando não retorne `nvm`, como na imagem abaixo, fechar e abrir o terminal novamente.

![Verificar instalação do NVM](https://i.imgur.com/e1hnkJR.png)

## 4. Instalando o editor de código

Como editor de código, nós recomendamos a utilização do VSCode. Mas caso você tenha algum outro que seja da sua preferência, sinta-se à vontade para usá-lo.

Para fazer o download do VSCode, basta acessar o [site oficial](https://code.visualstudio.com/) e clicar no botão `Download for Windows`. Após isso, basta executar o arquivo e seguir os passos do instalador.

![VSCode](https://i.imgur.com/gOlfhGB.png)

Você pode abrir a pasta do seu projeto no VSCode diretamente do WSL usando o comando `code <nome-da-pasta>` (Obs: vamos ensinar na próxima seção como você pode clonar o repositório do seu projeto no WSL):

![Abrindo VSCode](https://i.imgur.com/tp1Xj95.png)

Isso irá abrir uma janela do VSCode. E para ter uma experiência mais integrada com o WSL, você deve instalar a extensão chamada WSL. Ao abrir o VSCode pela primeira vez, aparecerá um pop up já recomendando a instalação dela. Mas caso não apareça, você pode clicar no ícone de Extensões no menu lateral e buscar por "WSL".

![Extensão WSL](https://i.imgur.com/DqnaeT7.png)

## 5. Configurando o Git e GitHub

Como o Git já vem instalado por padrão na distribuição Ubuntu, não precisamos nos preocupar em fazer isso. Mas, para que o nosso ambiente fique 100% preparado para realizar os _commits_, é preciso configurar o usuário do Git localmente, e cadastrar as credenciais em nossa conta do GitHub para que possamos enviar as modificações facilmente para o repositório remoto.

### 5.1 Identificando usuário local do Git

No Git, os commits precisam ser identificados com um nome e um endereço de email. Nós precisamos fazer essa configuração apenas uma vez, e é um processo simples. Basta executar os seguintes comandos:

```bash
git config --global user.name "Seu Nome"
```

```bash
git config --global user.email "seu_email@exemplo.com"
```

![Identificando usuário local do Git](https://i.imgur.com/qUFyJVo.png)

### 5.2 Configurando o editor padrão do Git

Algumas operações no Git requerem a abertura de um editor de texto. Vamos configurá-lo para que ele use o VSCode como o editor padrão. Para isso, basta executar o seguinte comando:

```bash
git config --global core.editor "code --wait"
```

### 5.3 Se conectando com o GitHub com SSH

O protocolo **Secure Shell** (SSH) é uma forma de nos conectarmos a um servidor remoto de modo seguro, usando criptografia. A autenticação da conexão é feita através de um par de chaves (ou senhas), onde uma fica armazenada na máquina do cliente que está buscando a conexão, e a outra no servidor a ser contactado. A vantagem de usar esse sistema é que não precisamos inserir o nosso login e senha sempre que quisermos nos conectar ao GitHub.

Estou assumindo uma instalação zerada do WSL, e portanto que nenhuma chave SSH esteja presente. Caso esse não seja o seu caso, verifique se você já possui uma chave seguindo [essas instruções](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys). Se sim, você poderá usá-la ou gerar uma nova seguindo os passos abaixo.

#### Passo 1: Gerando uma nova chave SSH

Execute o comando abaixo no terminal do Ubuntu, substituindo o email de exemplo pelo que você usa na sua conta do GitHub. Ele irá gerar uma nova chave SSH associada ao email passado.

```bash
ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
```

Será retornada uma mensagem avisando que a chave está sendo gerada, e uma outra solicitando um caminho e nome para o arquivo da mesma. Basta apertar Enter para aceitar a localização padrão.

```bash
Generating public/private ed25519 key pair.
Enter a file in which to save the key (/home/usuario/.ssh/id_ed25519):
```

Em seguida, será solicitada uma frase secreta que serve como uma camada de proteção adicional. Você pode ignorar a criação dela apertando Enter duas vezes. Se quiser adicionar uma mais tarde, siga [essas instruções](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#adding-or-changing-a-passphrase).

```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Pronto! Par de chaves gerado!

#### Passo 2: Adicionando a chave ao ssh-agent

O ssh-agent é o programa que irá gerenciar a nossa chave SSH. Com o comando abaixo nós iremos inicializá-lo e deixá-lo pronto para que o terminal possa utilizá-lo para conectar-se ao servidor do GitHub. A mensagem `Agent pid XXXXX` será exibida indicando que o programa foi iniciado com sucesso, sendo que o número representado por `XXXXX` é um identificador único do mesmo.

```bash
eval "$(ssh-agent -s)"
```

Em seguida, execute o comando abaixo para adicionar a chave ao ssh-agent (Obs.: caso a chave tenha sido criada com um nome diferente do padrão, é necessário substituir `id_ed25519` por ele):

```bash
ssh-add ~/.ssh/id_ed25519
```

Será retornada a mensagem `Identity added: /home/usuario/.ssh/id_ed25519 (seu_email@exemplo.com)`.

#### Passo 4: Adicionando chave SSH ao GitHub

Primeiro, execute o comando `cat ~/.ssh/id_ed25519.pub` a fim de exibir a sua chave no terminal. Depois selecione ela, e copie para a área de transferência.

Em seguida, entre em sua conta do GitHub, e clique na sua foto de perfil no ícone superior direito. No menu aberto clique em `Settings`.

Na seção "Access" da barra lateral esquerda, clique em `SSH and GPG keys`. Em seguida clique no botão `New SSH key` ou `Add SSH key`. Então, no campo "Title" basta adicionar um título para a sua chave (pode ser uma referência ao computador do qual você está acessando), e no campo "Key" colar o conteúdo da chave que foi copiado do terminal. No campo "Key Type" você pode deixar selecionada a opção "Authentication Key". Por fim, clique em `Add SSH key`, e confirme o seu login, caso seja solicitado.

Com isso, você pode agora clonar o seu projeto para a sua máquina local (no WSL) usando o protocolo SSH, através do comando `git clone`.

![git clone ssh](https://i.imgur.com/PgGp6k3.png)

Tomando como exemplo o endereço SSH do repositório na imagem acima, o comando a ser executado seria:

```sh
git clone git@github.com:andrei-alves/meu-projeto.git
```

Mas atenção: Na sua primeira conexão, será exibida uma mensagem como a abaixo:

```bash
The authenticity of host 'github.com (IP ADDRESS)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
Are you sure you want to continue connecting (yes/no)?
```

Isso acontece porque o GitHub ainda não é um host conhecido pela nossa máquina. E para garantir a autenticidade da chave retornada na mensagem, você pode comparar com a que é disponibilizada na [página oficial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) (compare com a do tipo Ed25519). Você pode usar [essa ferramenta](https://www.diffchecker.com/) para comparar as duas chaves, e ao copiar a que é retornada no terminal não inclua o ponto final (por exemplo, na messagem acima você copiaria `SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU`).

Ao confirmar a autenticidade, digite `yes` no terminal e aperte Enter. E pronto! Agora você pode fazer os seus commits localmente e enviá-los para o seu repositório remoto com facilidade.

![git clone](https://i.imgur.com/MNjpCRL.png)

## Para Saber Mais

### Documentação Oficial da Microsoft

- [Introdução ao Hyper-V no Windows](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/about/)
- [Documentação do Subsistema Windows para Linux](https://learn.microsoft.com/pt-br/windows/wsl/)
- [O que é o Subsistema do Windows para Linux?](https://learn.microsoft.com/pt-br/windows/wsl/about)
- [Configurar seu ambiente de desenvolvimento](https://learn.microsoft.com/pt-br/windows/wsl/setup/environment)

### Documentação Oficial do Docker

- [Instale o Docker Engine no Ubuntu](https://docs.docker.com/engine/install/ubuntu/) (em inglês)

## Footnotes

1. A documentação oficial coloca como requisito apenas [4GB de memória RAM](https://docs.docker.com/desktop/install/windows-install/#:~:text=Address%20Translation%20\(SLAT\)-,4GB%20system%20RAM,-Enable%20hardware%20virtualization), o que é relativamente pouco. Todavia, levando em consideração o uso de memória por outros programas, especialmente no processo de desenvolvimento, com editor de código e navegador abertos, essa quantidade é bem limitada. [↩](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fnref-1)
    
2. Para ser justo, é preciso dizer que, como o **Docker Desktop** possui o **Docker Engine** por debaixo dos panos, ele também permite rodar o Docker via terminal, inclusive no PowerShell. Todavia, usar a linha de comando do Linux para rodar os nossos scripts e outros utilitários garante o máximo de consistência entre os ambientes de desenvolvimento, Integração Contínua, e produção, o que é fundamental na hora de investigar bugs. [↩](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fnref-2)
    
3. Essa versão mínima requerida para a instalação é de 2020. Caso você possua uma versão ainda inferior é necessário prosseguir com a instalação manual do WSL, que pode ser conferida [nesse tutorial](https://learn.microsoft.com/pt-br/windows/wsl/install-manual). [↩](https://curso.dev/web/ambiente-de-desenvolvimento-windows#andrei-content-fnref-3)