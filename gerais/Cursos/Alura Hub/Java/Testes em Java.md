Use JUnity para fazer os testes e mockito para fazer os mocks:
```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>6.0.3</version>
    <scope>test</scope>
</dependency>
<dependency>  
    <groupId>org.mockito</groupId>  
    <artifactId>mockito-core</artifactId>  
    <version>5.21.0</version>  
    <scope>test</scope>  
</dependency>
```
# Criando diretório de testes
Em src clique no botão direito > new > directory > test\java.
E isso vai ficar em src/test/java. Geralmente dai replica estrutura parecida com a versão normal. Crie dai os arquivos de test, com o sufixo Test no final.
# Exemplo de teste
```java
package br.com.alura.services;  
  
import br.com.alura.client.ClientHttpConfiguration;  
import br.com.alura.domains.Abrigo;  
import com.google.gson.Gson;  
import org.junit.jupiter.api.Assertions;  
import org.junit.jupiter.api.Test;  
  
import java.io.ByteArrayOutputStream;  
import java.io.IOException;  
import java.io.PrintStream;  
import java.net.http.HttpResponse;  
import java.util.List;  
  
import static org.mockito.ArgumentMatchers.anyString;  
import static org.mockito.ArgumentMatchers.eq;  
import static org.mockito.Mockito.mock;  
import static org.mockito.Mockito.when;  
  
public class AbrigoServiceTest {  
    private ClientHttpConfiguration client = mock(ClientHttpConfiguration.class); // Cria um mock, baseado nos métodos do ClientHttpConfiguration  
    private AbrigoService abrigoService = new AbrigoService(client); 
    private HttpResponse<String> response = mock(HttpResponse.class);  
    private Abrigo abrigo = new Abrigo("Teste", "61981880392", "abrigo_alura@gmail.com", 0L, List.of());  
  
    @Test  // Indica que é um teste
    public void deveVerificarSeDispararRequisicaoGetSeraChamado() throws IOException, InterruptedException {  
        String expectedAbrigosCadastrados = "Abrigos cadastrados:";  
        String expectedIdENome = "0 - Teste";  
  
        ByteArrayOutputStream baos = new ByteArrayOutputStream();  // Cria um obtedor de arrays do terminal
        PrintStream printStream = new PrintStream(baos); // Armazena num sistema de print 
        System.setOut(printStream);  // Altera o print do terminal para PrintStream
  
        when(response.body()).thenReturn(new Gson().toJson(List.of(abrigo)));  // Quando for rodado a função response.body(), retorne o seguinte: 
        when(client.dispararRequsisicao(anyString(), eq("GET"), eq(null))).thenReturn(response);  // Quando for retornado o dispararRequisicao, com os seguintes parâmetros, retorne o response. 
  
        abrigoService.listarAbrigo();  // Executa no abrigo service
  
        String[] lines = baos.toString().split(System.lineSeparator());  
        String actualAbrigosCadastrados = lines[0];  
        String actualIdENome = lines[1];  
  
        System.out.println(actualAbrigosCadastrados);  
        Assertions.assertEquals(expectedAbrigosCadastrados, actualAbrigosCadastrados);  // Verifica se o output foi igual o esperado.
        Assertions.assertEquals(expectedIdENome, actualIdENome);  
    }  
}
```