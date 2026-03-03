Nessa aula, escrevemos os testes de um controller utilizando a classe `MockMvc` do Spring, que simula requisições para a API. Essa abordagem é válida e muito utilizada nos projetos, porém, ela utiliza um objeto mock para simular requisições, sem de fato disparar requisições reais para a API.

É possível escrever o mesmo teste utilizando uma outra abordagem, na qual são disparadas requisições reais para a API, utilizando a classe `TestRestTemplate` do Spring, ao invés de utilizar a classe `MockMVC`.

Veja um exemplo do mesmo teste escrito dessa outra forma:

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AdocaoControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void deveriaDevolverCodigo400ParaSolicitacaoDeAdocaoComErros() {
        // ARRANGE
        String json = "{}";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // ACT
        ResponseEntity<Void> response = restTemplate.exchange(
                "/adocoes",
                HttpMethod.POST,
                new HttpEntity<>(json, headers),
                Void.class
        );

        // ASSERT
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    @Test
    void deveriaDevolverCodigo200ParaSolicitacaoDeAdocaoSemErros() {
        // ARRANGE
        String json = """
                {
                    "idPet": 1,
                    "idTutor": 1,
                    "motivo": "Motivo qualquer"
                }
                """;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // ACT
        ResponseEntity<Void> response = restTemplate.exchange(
                "/adocoes",
                HttpMethod.POST,
                new HttpEntity<>(json, headers),
                Void.class
        );

        // ASSERT
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
```

Como serão disparadas requisições reais para a API, ela precisa estar em execução em alguma porta. No código anterior, a anotação `@SpringBootTest` está com o argumento `webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT`, que configura o teste para usar uma porta aleatória para realizar as chamadas HTTP reais. Isso é útil, pois evita que tenhamos que escolher uma porta que já pode estar em uso no sistema operacional.

O `TestRestTemplate` é uma classe que faz parte do módulo de teste do Spring Boot e permite que você realize solicitações HTTP para a API em execução durante os testes. Observe que, o método `perform()` do `MockMvc`, foi substituído pelo método `exchange()` do `TestRestTemplate` para realizar as chamadas HTTP reais. As asserções dos códigos de status de resposta também foram adaptadas para usar os valores de `HttpStatus`.

Repare que poucas mudanças foram necessárias para adaptar o código, facilitando a troca da abordagem a ser utilizada ao executar os testes de controllers da API.