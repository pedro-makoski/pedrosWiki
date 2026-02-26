Ao escrever testes automatizados em Java, é fundamental que os nomes dos métodos de teste sejam descritivos e reflitam claramente os cenários sendo testados. Nomes adequados tornam os testes mais **legíveis** e ajudam as pessoas desenvolvedoras a entender rapidamente o objetivo de cada caso de teste.

Nessas primeiras aulas escrevemos testes automatizados para a classe `CalculadoraProbabilidadeAdocao`, sendo que os nomes dos métodos de testes que criamos, como `probabilidadeDeveriaSerAltaParaGatosJovensComPesoBaixo` e `probabilidadeDeveriaSerMediaParaGatosIdososComPesoBaixo`, apesar de descritivos, são muito longos e podem prejudicar a legibilidade do código de teste. Lembrando que nomes de métodos no Java seguem a convenção **camelCase**, inclusive nas classes de testes automatizados.

## Utilizando o recurso `@DisplayName` do JUnit

O JUnit oferece uma solução para melhorar a legibilidade dos nomes dos métodos de teste por meio da anotação `@DisplayName`. Essa anotação permite atribuir nomes descritivos diretamente ao método de teste, separando a descrição do cenário da lógica do código. Com o `@DisplayName`, podemos criar nomes concisos e significativos que refletem o objetivo do teste, sem a necessidade de incluir todos os detalhes do cenário no nome do método. Além disso, não ficamos limitados à convenção de nomenclatura de métodos no Java.

Veja um exemplo de utilização da anotação `@DisplayName` no código demonstrado ao longo dessa aula:

```less
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculadoraProbabilidadeAdocaoTest {

    @Test
    @DisplayName("Probabilidade alta para gatos jovens com peso baixo")
    void probabilidadeAltaCenario1() {
        //código de teste omitido. Permanece sem alterações
    }

    @Test
    @DisplayName("Probabilidade média para gatos idosos com peso baixo")
    void probabilidadeMediaCenario1() {
        //código de teste omitido. Permanece sem alterações
    }

    //outros cenários de testes...
}
```

Perceba que a anotação `@DisplayName` recebe uma String como parâmetro, utilizada para descrever de maneira detalhada o cenário sendo testado. Dessa forma, fica mais fácil descrever o cenário sendo testado e não precisamos fazer tal detalhamento nos nomes dos métodos.
