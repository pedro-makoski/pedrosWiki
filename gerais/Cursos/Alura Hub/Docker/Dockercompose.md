Para realizar a comunicação entre os containers, podemos utilizar uma ferramenta do próprio [**Docker**](https://www.alura.com.br/artigos/desvendando-o-dockerfile) chamada de [**Docker Compose**](https://docs.docker.com/compose/overview/). Com o Docker Compose podemos criar um arquivo e especificar as propriedades de cada container, como comandos, **variáveis de ambiente**,…

Estou com um **container** com uma aplicação PHP que se comunica com um **banco de dados** para efetuar alguns testes antes de ir para produção. Então, fui rodar o container, porém quando realizei o login me deparei com os seguintes erros:

![](https://cdn-wcsm.alura.com.br/2025/04/image_0-2-6.png)

![](https://cdn-wcsm.alura.com.br/2025/04/image_1-2-4.png)

A aplicação precisa de um banco de dados para rodar, como [estamos utilizando o Docker](https://www.alura.com.br/artigos/comecando-com-docker),vamos fazer esses dois containers se comunicarem.

## Conhecendo o Docker Compose

O Docker Compose já vem instalado por padrão quando instalamos o Docker no Windows ou no Mac, porém no Linux, [precisamos realizar sua **instalação**](https://docs.docker.com/compose/install/#install-compose).

Com o docker compose instalado, podemos dizer como queremos subir esses dois containers.

[![Banner da Imersão Front-end com IA da Alura convidando para aprender front-end com inteligência artificial gratuitamente. A proposta é desenvolver na prática uma página de streaming funcional para portfólio, com botão “Saber mais”. Curso online voltado para quem quer iniciar ou evoluir na carreira em desenvolvimento front-end com IA.](https://cdn-wcsm.alura.com.br/2026/03/02134924/imersao-fron-end-iii-banner-corpo-mobile.png)](https://www.alura.com.br/imersao-front-end-iii?utm_source=blog&utm_medium=banner&utm_campaign=imersao-front-end-iii_inscricoes)

## O arquivo YAML

Queremos falar para o Docker Compose como ele deve subir nosso containers, para isso, temos que criar um arquivo com a [**extensão YAML**](https://pt.wikipedia.org/wiki/YAML), neste caso, vou chamar de `aplicacao.yaml`.

A primeira coisa que devemos informar no arquivo é a versão do Docker Compose que estamos utilizando. Nesse caso, vou utilizar a versão `3.4` que é a mais recente.

```sql

version: '3.4'
```

Já dissemos qual versão estamos utilizando, agora precisamos indicar quais containers vamos criar, ou seja, quais serão os **serviços (`services`) que o Compose vai subir**.

Temos dois serviços que queremos subir, o banco de dados e a aplicação web. Então vamos começar especificando o serviço da nossa aplicação.

Neste caso, vou nomeá-la como `app`.

```sql

version: '3.4'
services:
    app:
```

Nossa aplicação está baseada na **imagem** (`image`) `yuri/web`, e podemos dar o nome (`container_name`) de `app` por exemplo:

```sql

version: '3.4'
services:
    app:
    image: yuri/web
    container_name: app
```

Nós precisamos também mapear as **portas** (`ports`) que nosso container vai usar. Neste caso, vou mapear a porta `8080` do nosso host, para a porta `80` do nosso container:

```sql

version: '3.4'
services:
    app:
        image: yuri/web
        container_name: app
        ports:
          - 8080:80
```

Bom, nosso **container depende (`depends_on`) de um banco de dados**, então vamos falar isso em nosso arquivo do Compose. Neste caso, vou falar que ele depende do serviço `db`:

```sql

version: '3.4'
services:
    app:
        image: yuri/web
        container_name: app
        ports:
          - 8080:80
        depends_on:
          - db
```

Mas o que é esse `db`?

**`db`** é o nome do nosso serviço de banco de dados. Ele nada mais é do que outro container, logo, podemos especificar no mesmo arquivo `.yaml` do serviço de aplicação.

```sql

version: '3.4'
services:
    app:
        image: yuri/web
        container_name: app
        ports:
          - 8080:80
        depends_on:
          - db
    db:
```

Se ele também é um container, então é igualmente baseado em uma imagem. Neste caso, nosso banco de dados será baseado na [**imagem do MySQL**](https://store.docker.com/images/mysql). E vou nomeá-lo de `db`

```sql

#Restante da configuração
db:
    image: mysql
    container_name: db
```

Mas como conseguiremos acessar nosso banco de dados? Ele precisa de um usuário, correto?

Quando a imagem do MySQL está subindo como um container, ela lê algumas **variáveis de ambiente (`environment`)**. Essas variáveis definem algumas informações como usuário, senha, entre outras. Podemos especificar essas variáveis no próprio arquivo do Compose.

Neste caso, por se tratar de um teste, vou utilizar o usuário **root **(`MYSQL_USER=root`) e não vou alocar nenhuma senha (`MYSQL_ALLOW_EMPTY_PASSWORD=yes`). Mas lembrando, nunca devemos usar isso em produção por motivos de segurança:

```sql

#Restante da configuração
db:
    image: mysql
    container_name: db
    environment:
      - MYSQL_USER=root
      - MYSQL_ALLOW_EMPTY_PASSWORD=yes
```

Também podemos falar para o Compose criar o banco de dados automaticamente quando ele subir o container. Neste caso, vou criar o banco de dados `loja`:

```sql

#Restante da configuração
db:
    image: mysql
    container_name: db
    environment:
      - MYSQL_USER=root
      - MYSQL_ALLOW_EMPTY_PASSWORD=yes
      - MYSQL_DATABASE=loja
```

Pronto! Configurações terminadas. E agora como conseguimos fazer o Docker subir esses dois containers?

No terminal conseguimos falar para o `docker-compose` baseado no arquivo (`-f`, file) `aplicacao.yaml`, subir (`up`) os containers especificados:

![](https://cdn-wcsm.alura.com.br/2025/04/image_2-1-3.png)

![](https://cdn-wcsm.alura.com.br/2025/04/image_3-1-4.png)

Aplicação rodando! Vamos tentar fazer login e ver se obtemos sucesso:

![](https://cdn-wcsm.alura.com.br/2025/04/image_4-11.png)

Hum… não obtemos sucesso. :( Será que o Docker Compose não criou nosso banco de dados?

Na verdade ele criou! Porém, como não existem tabelas, a aplicação não funcionou.

Para resolver esse problema basta falar para o `docker` **executar (`exec`)** um **terminal (`-t`) interativo (`-i`)** com o nosso container, `db` no caso. Mas qual terminal vamos executar?

Neste caso, podemos executar o **`bash`**:

`docker exec -it db bash`

![](https://cdn-wcsm.alura.com.br/2025/04/image_5-7.png)

Agora, basta executar o `mysql` com o usuário (`-u`) `root` que teremos acesso ao banco de dados.

Nele, nós podemos criar nossas tabelas.

Agora se tentarmos logar em nossa aplicação, obteremos sucesso:

![](https://cdn-wcsm.alura.com.br/2025/04/image_6-8.png)

## Para saber mais

Neste caso, as informações contidas no container do banco de dados não são persistidas, ou seja, caso o container pare de funcionar, essas informações serão perdidas.

Caso for necessário persistir essas informações, podemos criar um **`volume`** entre nossa máquina local e o container. Dessa forma, todas as informações salvas no container serão salvas na nossa máquina local.

Neste caso utilizamos o Docker Compose para subir nossos dois containers e realizar a comunicação entre eles.

Porém nós podíamos utilizar o próprio Docker para isso. Basta criar uma rede **(`network`)** e atribuir nossos container a ela. Contudo, com o Docker Compose, temos mais facilidade para a orquestração desses containers.

Aqui na **Alura** temos uma [**formação DevOps**](https://www.alura.com.br/formacao-devops) que nos mostra como utilizar o Docker Compose, como criar nossas imagens, entre muitas outras coisas.
