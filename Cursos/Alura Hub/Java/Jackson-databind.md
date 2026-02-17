```java
public void listarAbrigo() throws IOException, InterruptedException {  
    var response = ClientHttpConfiguration.dispararRequsisicao("abrigos", "GET", null);  
  
    String responseBody = response.body();  
    var abrigos = Arrays.stream(new ObjectMapper().readValue(responseBody, Abrigo[].class)).toList();  
    System.out.println("Abrigos cadastrados:");  
    for (var abrigo : abrigos) {  
        long id = abrigo.id();  
        String nome = abrigo.nome();  
        System.out.println(id + " - " + nome);  
    }  
}
```