Uso de spring, sem colocar nada no backend.
Para iniciar um projeto spring boot configure no initializr: https://start.spring.io/
Selecione:
- Maven como gerenciador de dependências
- Java como linguagem.
- Selecione a versão
- Escreva o group da aplicação
- Escreva o artifact da aplicação(nome).
- Escolha packagin como Jar
- E coloque a ultima versão Java LTS.
- Clique em generate
- Coloque a pasta gerada na sua pasta e inicie o intellij
# Ententendo o arquivo ...Aplication
É lá que está o código main, e que vai ser executado primeiro.
Ao rodar a função main percebe-se alguns detalhes de acontecimentos que foi iniciado.
# Criando um sistema no terminal
Você precisa implementar a interface CommandLineRunner, que deve ter a função:
```java
@Override  
public void run(String... args) throws Exception {  
    System.out.println("Primeiro projeto Spring sem web");  
}
```
```java
package br.com.alura.screenmatch;  
  
import org.springframework.boot.CommandLineRunner;  
import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;  
  
@SpringBootApplication  
public class ScreenmatchApplication implements CommandLineRunner {  
  
    public static void main(String[] args) {  
        SpringApplication.run(ScreenmatchApplication.class, args);  
    }  
  
    @Override  
    public void run(String... args) throws Exception {  
        System.out.println("Primeiro projeto Spring sem web");  
    }  
}
```
