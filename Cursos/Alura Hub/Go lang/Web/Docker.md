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