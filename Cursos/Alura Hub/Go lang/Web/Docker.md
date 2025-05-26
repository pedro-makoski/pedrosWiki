Crie um arquivo:
docker-compose.yml e coloque os dados da sua aplicação. Exemplo de aplicação postgree:
```yml
version: '3'

services:

  postgres:

    image: "postgres"

    environment:

      - POSTGRES_USER=root

      - POSTGRES_PASSWORD=root

      - POSTGRES_DB=root      

    ports:

      - "5432:5432"

    volumes:

      - ./migration/docker-database-initial.sql:/docker-entrypoint-initdb.d/docker-database-initial.sql  

  

  pgadmin-compose:

    image: dpage/pgadmin4

    environment:

      PGADMIN_DEFAULT_EMAIL: "makoski.nivaldo@gmail.com"

      PGADMIN_DEFAULT_PASSWORD: "123456"

    ports:

      - "54321:80"

    depends_on:

      - postgres
```
Sendo o banco de dados, definido na linha após o volume:. Coloque a pasta migration, com o arquivo: docker-database-initial.sql. 
E depois rode o comando:
```bash
sudo docker-compose up
```
E assim você poderá acessar o pelo `localhost:54321` o docker.
# Criando servidor no pgAdmin
Clique com botão direito em server, depois em register, depois em server.
Na aba connection, aonde está escrito host name/Adresss, coloque o valor obtido a partir do resultado de:
```bash
sudo docker-compose exec postgres sh
```
Depois quando aparecer o `#`, digite:
```docker
hostname -i
```
Pegue o valor de resultado e coloque neste campo.
Outra forma de acessar o valor, é:
1. Execute: sudo docker ps -a
2. Procure na tabela, o postgrees, e na coluna CONTAINER ID, pegue os primeiros três caracteres.
3. E rode: sudo docker inspect ``<os-três-primeiros-caracteres-do-container-id>`` | grep IPAddress
Depois perceba que tem um campo chamado maintaince, nele coloque o valor definido, no: POSTGRES_DB, no nosso caso foi o root.

E perceba que as configurações feitas no ./migration/docker-database-initial, já estão lá presentes.
