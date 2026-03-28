Ao adicionar a dependência do Spring Boot:
```xml
<dependency>

      <groupId>org.springframework.boot</groupId>

      <artifactId>spring-boot-starter-security</artifactId>

    </dependency>
```
O Spring vai automaticamente bloquear todas as requisições, e vai gerar uma senha aleatória para usá-las.
Se você ver no navegador vai ser criado uma página de login, e que deve ser colocado o usuário(user) e a senha(gerada no terminal).