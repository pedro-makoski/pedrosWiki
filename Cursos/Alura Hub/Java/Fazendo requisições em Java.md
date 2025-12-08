```java
package pedro.makoski.screenmatch.src.principal;  
  
import java.io.IOException;  
import java.net.URI;  
import java.net.http.HttpClient;  
import java.net.http.HttpRequest;  
import java.net.http.HttpResponse;  
  
public class BuscarFilmes {  
    public static void main() throws IOException, InterruptedException {  
        HttpClient client = HttpClient.newHttpClient();  // Inicia um cliente Java de HTTP
        HttpRequest request = HttpRequest.newBuilder()  
                .uri(URI.create("http://www.omdbapi.com/?t=divertidamente&apikey=7139c6aa"))  
                .build();  // Inicia um builder de Requsições, pois como são muitos parâmetros são necessários muitos parâmetros, e por isso segue esse padrão, para passar os parâmetros corretamente.
  
        HttpResponse<String> response = client  
                .send(request, HttpResponse.BodyHandlers.ofString());  // Envia um requisição a partir da requisição, através do Http Client, e diz que a resposta vai ser formatada em String.
  
        System.out.println(response.body());  
    }  
}
```