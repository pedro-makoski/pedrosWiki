Biblioteca de serialização e desserialização de JSON.
```url
https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind
```
# Indicando para o conversor do Jackson os nomes que ele deve usar
O Jackson tem duas anotações para isso o @JsonAlias e o @JsonProperty, onde o primeiro só funciona no processo de leitura do JSON, e o segundo funciona tanto para leitura quanto saída.
```java
package br.com.alura.screenmatch.model;  
  
import com.fasterxml.jackson.annotation.JsonAlias;  
  
public record Serie(  
        @JsonAlias("Title")  
        String title,  
        @JsonAlias("totalSeasons")  
        String avaliacao,  
        @JsonAlias("imdbRating")  
        Integer totalTemporadas  
) {  
}
```