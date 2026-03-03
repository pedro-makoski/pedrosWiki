Ao escrever testes automatizados para uma classe Controller precisamos simular uma requisição para a API, sendo comum o envio de informações no formato JSON. Nessa aula, foi demonstrado como utilizar o recurso de _Text Block_ do Java, disponível desde a versão 15 da linguagem, para montar o JSON a ser enviado nas requisições.

Embora a utilização de text block simplifique bastante esse processo, não havendo a necessidade de ficar realizando concatenações de Strings manualmente, existe um recurso do Spring que pode ser utilizado como alternativa.

## JacksonTester

Ao invés de utilizar uma String para representar o JSON a ser enviado na requisição, podemos utilizar um objeto DTO que criamos para representar os dados que chegam na requisição no formato JSON. No caso da requisição de solicitar uma adoção, temos o record `SolicitacaoAdocaoDto`, que representa o JSON enviado na requisição:

```python
String json = """
    {
        "idPet": 1,
        "idTutor": 1,
        "motivo": "Motivo qualquer"
    }
    """;

//Objeto dto representando o JSON anterior:
SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(1l, 1l, "Motivo qualquer");
```

Mas não podemos enviar esse objeto DTO diretamente na requisição, sendo necessário antes convertê-lo para uma String no formato JSON. Isso pode ser feito de maneira automática pelo Spring, com a utilização do recurso conhecido como **JacksonTester**:

```java
@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
class AdocaoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdocaoService adocaoService;

    @Autowired
    private JacksonTester<SolicitacaoAdocaoDto> jsonDto;

    @Test
    void deveriaDevolverCodigo200ParaRequsisicaoDeSolicitarAdocaoComDadosValidos() throws Exception {
        //ARRANGE
        SolicitacaoAdocaoDto dto = new SolicitacaoAdocaoDto(1l, 1l, "Motivo qualquer");

        //ACT
        MockHttpServletResponse response = mockMvc.perform(
                post("/adocoes")
                        .content(jsonDto.write(dto).getJson())
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn().getResponse();

        //ASSERT
        assertEquals(200, response.getStatus());
        assertEquals("Adoção solicitada com sucesso!", response.getContentAsString());
    }

    // outros testes omitidos
}
```

Repare que foi injetado na classe um novo atributo do tipo `JacksonTester`, sendo que nele passamos nos generics o tipo de classe que vai trabalhar, que no exemplo será o record `SolicitacaoAdocaoDto`. Repare também que a classe de teste foi anotada com `@AutoConfigureJsonTesters`, para que a injeção do objeto `JacksonTester` funcione corretamente.

Por fim, no método de teste, a String que representa o JSON foi substituída por um objeto do tipo `SolicitacaoAdocaoDto`, sendo que tal objeto foi convertido para uma String no formato JSON utilizando `jsonDto.write(dto).getJson()`, antes de ser passado como parâmetro para o método `content()`.

Dessa forma, é possível utilizar objetos DTO para representar as informações que são enviadas e recebidas pela API, ao invés de utilizar Strings e concatenações manuais.