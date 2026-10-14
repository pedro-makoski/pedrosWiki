# Testes de repositories
```java
package med.voll.api.domain.medico;

import med.voll.api.domain.consulta.Consulta;
import med.voll.api.domain.endereco.DadosEndereco;
import med.voll.api.domain.paciente.DadosCadastroPaciente;
import med.voll.api.domain.paciente.Paciente;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest // Indica que deve ser gerado os Autowired com Repositories JPA
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE) // Diz para não trocar o banco de dados para o de memória, caso não tenha pode ser cadastrado o tipo de banco de dados
@ActiveProfiles("test") // Indica o modo que deve ser executado e neste caso ele executará os application-test.properties sobrescrevendo os application.properties
class MedicoRepositoryTest {

    @Autowired
    private MedicoRepository medicoRepository;

    @Autowired
    private TestEntityManager em; // Entity manager que cria qualquer teste


    @Test
    @DisplayName(
            "Deveria devolver null quando o �nico m�dico cadastrado n�o est� dispon�vel na data"
    ) // Realiza uma descrição detalhada do teste
    void escolherMedicoAleatorioLivreNaDataCenario1() {
        var proximaSegundaAs10 = LocalDate.now()
                .with(TemporalAdjusters.next(DayOfWeek.MONDAY))
                .atTime(10, 0);

        var medico = cadastrarMedico("Medico", "medico@voll.med", "123456", Especialidade.CARDIOLOGIA);
        var paciente = cadastrarPaciente("Paciente", "paciente@email.com", "00000000000");
        cadastrarConsulta(medico, paciente, proximaSegundaAs10);

        var medicoLivre = medicoRepository.escolherMedicoAleatorioLivreNaData(
                Especialidade.CARDIOLOGIA, proximaSegundaAs10);

        Assertions.assertThat(medicoLivre).isNull(); // Verifique se o retorno foi nulo
    }

    private void cadastrarConsulta(Medico medico, Paciente paciente, LocalDateTime data) {
        em.persist(new Consulta(null, medico, paciente, data));
    }

    private Medico cadastrarMedico(String nome, String email, String crm, Especialidade especialidade) {
        var medico = new Medico(dadosMedico(nome, email, crm, especialidade));
        em.persist(medico);
        return medico;
    }

    private Paciente cadastrarPaciente(String nome, String email, String cpf) {
        var paciente = new Paciente(dadosPaciente(nome, email, cpf));
        em.persist(paciente);
        return paciente;
    }

    private DadosCadastroMedico dadosMedico(String nome, String email, String crm, Especialidade especialidade) {
        return new DadosCadastroMedico(
                nome,
                email,
                "61999999999",
                crm,
                especialidade,
                dadosEndereco()
        );
    }

    private DadosCadastroPaciente dadosPaciente(String nome, String email, String cpf) {
        return new DadosCadastroPaciente(
                nome,
                email,
                "61999999999",
                cpf,
                dadosEndereco()
        );
    }

    private DadosEndereco dadosEndereco() {
        return new DadosEndereco(
                "rua xpto",
                "bairro",
                "00000000",
                "Brasilia",
                "DF",
                null,
                null
        );
    }
}
```
# Testes de Controller
Será feito teste mocados sem o contexto real.
```java
package med.voll.api.controller;

import med.voll.api.domain.consulta.AgendaDeConsultas;
import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.consulta.DadosDetalhamentoConsulta;
import med.voll.api.domain.medico.Especialidade;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest // Faz o spring boot trabalhar nesta classe com os Autowired, diante de todo o contexto do projeto
@AutoConfigureMockMvc // Configura o Mock para ser usado o MockMvc que faz as req
@AutoConfigureJsonTesters // Permite a criação de JSON com JacksonTester
class ConsultaControllerTest {

    @Autowired
    private MockMvc mvc; // Cria o MockMvc que será necessário para fazer as requisições

    @Autowired
    private JacksonTester<DadosAgendamentoConsulta> dadosAgendamentoConsultaJacksonTester; // Cria um Jacksontester para ser feitos JSONs sobre ele

    @Autowired
    private JacksonTester<DadosDetalhamentoConsulta> dadosDetalhamentoConsultaJacksonTester;

    @MockBean
    private AgendaDeConsultas agendaDeConsultas; // Cria um Mock deste repositorie, ao invés de aplicá-lo de verdade

    @Test
    @DisplayName("Deveria devolver c�digo http 400 quando informa��es est�o inv�lidas")
    @WithMockUser // Informa que será mockado o usuário e não precisará ser feito a autenticação
    void agendar_cenerio1() throws Exception {
        var response = mvc.perform( // Realiza a requisição
                MockMvcRequestBuilders.post("/consultas")) // Indica que é um post para a rota descrita 
                .andReturn().getResponse(); // Obtem retorno

        Assertions.assertThat(response.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST.value()); // Verifique se o código retornado foi 400
    }

    @Test
    @DisplayName("Deveria devolver c�digo http 200 quando informa��es est�o v�lidas")
    @WithMockUser
    void agendar_cenerio2() throws Exception {
        var data = LocalDateTime.now().plusHours(1);
        var espec = Especialidade.ORTOPEDIA;

        Mockito.when(agendaDeConsultas.agendar(Mockito.any()))
                .thenReturn(new DadosDetalhamentoConsulta(null, 2l, 5l, data)); // Indica que quando agendar for chamado ele deve retornar a classe do ultimo parâmetro 

        var response = mvc.perform(
                        MockMvcRequestBuilders.post("/consultas")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(dadosAgendamentoConsultaJacksonTester.write(
                                        new DadosAgendamentoConsulta(2l, 5l, data, espec)
                                ).getJson()) // Indica o conteúdo da resposta
                )
                .andReturn().getResponse();

        Assertions.assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());

        var jsonEsperado = dadosDetalhamentoConsultaJacksonTester
                .write(
                        new DadosDetalhamentoConsulta(null, 2l, 5l, data)
                ).getJson(); // Cria um JSON da resposta esperada

        Assertions.assertThat(response.getContentAsString()).isEqualTo(jsonEsperado);
    }
}
```