Vamos usar:
- JUnit 5
- Mockito 
- Spring Boot
# JUnity
Biblioteca padrão para os testes em Java. O spring-boot-starter-test já incorpora o JUnity como uma biblioteca.
## Assert Equals
```java
Assertions.assertEquals(ProbabilidadeAdocao.ALTA, probabilidadeAdocao);
```
Esse código acima compara no teste automatizado.
Toda função de teste tem o decorator @Test.