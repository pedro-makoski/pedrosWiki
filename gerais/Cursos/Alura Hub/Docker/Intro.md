# Entendendo os containers
Para o desenvolvimento de um sistema, este é passado por diversos ambientes diferentes, que tem dependências diferentes, podendo causar conflitos de versões. Então para resolver o problema é criado um container que garante a consistência em diferentes ambientes.
![[Pasted image 20260317202628.png]]
Diferente de um virtual boot, que tem uma camada de hipervisor, entre o OS real e o virtual, os containers tem um outro tipo de isolamento chamado namespaces. Permitindo que um sistema operacional não seja totalmente usado.
Com os namespaces:
- PID -> isolamento dos processos rodando dentro do container
- NET -> provê o isolamento das interfaces de rede
- IPC -> provê isolamento da comunicação entre processos e memória compartilhada
- MNT -> provê isolamento de arquivos/pontos de montagem
- UTS -> provê isolamento do kernel. Age como o container fosse outro host
## Namespaces e CGroups
Uma das características que destacamos no uso de containers é o seu isolamento em diferentes níveis. Podemos compreender o isolamento como um modo de empacotar uma aplicação incluindo todos os recursos necessários para sua execução, garantindo que o software apresente o mesmo comportamento em diferentes ambientes.

Os namespaces possuem um papel fundamental neste sentido, gerando o isolamento de grupos de processos em seu nível lógico. Assim, os processos dentro do container são completamente isolados dos processos que estão em execução no host.

Alguns exemplos fundamentais de namespaces são:

- PID (Process Identifier Namespace): isolamento de processos que estão em execução dentro do container.
- NET (Network Namespace): isolamento dos recursos de rede, como interfaces de rede, endereços IP e tabelas de roteamento.
- IPC (Inter-Process Communication Namespace): isolamento dos mecanismos de comunicação entre processos, como filas de mensagens e memória compartilhada.
- MNT (Mount Namespace): isolamento do sistema de arquivos e pontos de montagem, garantindo que alterações no sistema de arquivos dentro de um container não afetem o sistema de arquivos fora dele.
- UTS (Unix Timesharing System Namespace): isolamento do kernel, permitindo que o container atue como se fosse outro host.

Por sua vez, o gerenciamento dos recursos físicos compartilhados entre os processos fica sob responsabilidade de um recurso conhecido como Cgroups (grupos de controle). Os Cgroups permitem que o Docker aloque recursos como tempo da CPU, memória do sistema, largura de banda de rede ou combinações destes.
# Fazendo com que não seja necessário usar sudo sempre

```bash
sudo usermod -aG docker $user
```
# O que é uma imagem
- Arquivo executável indempendente, que contém todos os arquivos e dependências necessárias para rodar um container.
Aprendemos que para colocar um container em funcionamento, o Docker precisa ter uma imagem no host. Outro fato é que quando criamos um container Docker, temos uma cápsula de software contendo todas as dependências necessárias para executar uma determinada aplicação. As configurações e instruções para iniciar ou parar containers são estabelecidas pela imagem.

Essas imagens podem ser baixadas de um repositório (cujo nome é registry) ou criadas localmente e compiladas. Por sua vez, o Docker mantém o repositório [Docker Hub registry](https://hub.docker.com/).

Nesse registry podemos ter imagens oficiais e não-oficiais. Além disso, há a opção de criar nossas próprias imagens e realizar o upload em um repositório dentro desse hub.

Para criar uma imagem, podemos usar um arquivo de definição chamado de Dockerfile, no qual utilizamos algumas diretivas para declarar o que teremos em nossa imagem.

Não se preocupe em entender todos esses detalhes agora, vamos explorar esses aspectos no decorrer do curso!
# DockerHub
Plataforma com um conjunto de containers disponíveis para uso.
## Baixando imagem do DockerHub
```bash
docker pull nome-da-imagem
```
Você pode colocar depois mais comandos que serão especificados para a imagem.
## Rodando imagem do DockerHub
```bash
docker run nome-da-imagem
```
-d -> fala para que o container vai rodar de plano de fundo.
-P -> indica que as portas serão públicas para fora do isolamento do sistema
bash - indica que vai ser rodado no bash.
-p -> porta que será no computador:porta que será rodado no container. Exemplo `-p 3000:80`, onde 3000 é a porta que será usada e 80 é a porta interna do docker.
Digite **ctrl+D** para parar de interagir com o container.
-it -> indica que vai ter um terminal usável, no final também deve ser colocado bash.
## Vendo containers em execução
```java
docker ps
```
Você pode colocar no final `-a` que indica todos os containers já iniciados antes.
## Parar container
```java
docker stop nome|id
```
Pode ter o comando -t=tempo, que indica o tempo para parar. É recomendável 10s, que é o padrão, para evitar problemas.
## Reiniciando o container
```java
docker start nome|id
```
## Como interagir com um container
```bash
docker exec -it id|nome bash
```
i - interage
t - terminal padrão tty
## Pausar sem ter que reiniciar todos os processos quando abrir de volta
Pausar:
```bash
docker pause nome|id
```
Voltar: 
```bash
docker unpase nome|id
```
## Remover container Docker
```bash
docker rm nome|id
```
Pode ter o atributo --force, que força o container caso esteja ainda em execução.
## Parar todos os containers
```bash
docker stop $(docker container ls -q)
```
# Detalhe importante
Quando o container é encerrado ele tem seus dados removidos totalmente. Sem persistência.