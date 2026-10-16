- Coloque o application-prod.properties as chaves para o .env conectar e ser flexível
- Faça o build no maven>api>life cycle>package
- Para fazer rodar, chame o comando

```java
java -Dspring.profiles.active=prod -DDATASOURCE_URL=teste -DDATASOURCE_username=root -DDATASOURCE_PASSWORD=root -jar target/arquivo-jar.jar
```
- O -D permite adicionar configurações
- O -jar é obrigatório para rodar o jar.