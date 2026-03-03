```java
package br.com.alura.adopet.api.controller;

  

import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.extension.ExtendWith;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.http.MediaType;

import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

  

import br.com.alura.adopet.api.service.AdocaoService;

  

@SpringBootTest // Indica que é um teste que o SpringBoot cuida

@AutoConfigureMockMvc // Indica que vai ser configurado o MockMvc dentro do teste

public class AdocaoControllerTest {

  

    @Autowired

    private MockMvc mvc; // É instanciado o MockMvc

  

    @MockBean

    private AdocaoService service; // É gerado um mock baseado no spring, que é injetados no controllers.

  

    @Test

    void shouldReturn400ForAdoptionSolicitationWithErrors() throws Exception {

        String json = "{}";

  

        var response = mvc.perform( 

                MockMvcRequestBuilders.post("/adocoes") // Faz um post para a rota /adocoes

                        .content(json) // Com o conteúdo JSON 

                        .contentType(MediaType.APPLICATION_JSON)) // Com o tipo JSON de entrada

                .andReturn().getResponse();// Retorna com a resposta

  

        Assertions.assertEquals(400, response.getStatus());

    }

  

    @Test

    void shouldReturn400ForAdoptionSolicitationWithoutErrors() throws Exception {

        String json = """

                {

                        "idPet": 1,

                        "idTutor": 1,

                        "motivo": "Motivo qualquer"

                }

        """;

  

        var response = mvc.perform(

                MockMvcRequestBuilders.post("/adocoes")

                        .content(json)

                        .contentType(MediaType.APPLICATION_JSON))

                .andReturn().getResponse();

  

        Assertions.assertEquals(200, response.getStatus());

    }

}
```