```java
package med.voll.api.controller.infra;

  

import org.springframework.http.ResponseEntity;

import org.springframework.validation.FieldError;

import org.springframework.web.bind.MethodArgumentNotValidException;

import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.RestControllerAdvice;

  

import jakarta.persistence.EntityNotFoundException;

  

@RestControllerAdvice

public class TratadorDeErros {

    @ExceptionHandler(EntityNotFoundException.class)

    public ResponseEntity<?> tratarError404() {

        return ResponseEntity.notFound().build();

    }  

    @ExceptionHandler(MethodArgumentNotValidException.class)

    public ResponseEntity<?> tratarError400(MethodArgumentNotValidException methodArgumentNotValidException) {

        var erros = methodArgumentNotValidException.getFieldErrors(); // Obtem os campos incorretos

        return ResponseEntity.badRequest().body(

                erros.stream().map(DadosErrosValidacao::new).toList()

            );

    }  

  

    private record DadosErrosValidacao(String campo, String menssagem) {

        public DadosErrosValidacao(FieldError fieldError) {

            this(fieldError.getField(), fieldError.getDefaultMessage());

        }

    }

}
```
# Obtendo campos em português
Por padrão o Bean Validation devolve as mensagens de erro em inglês, entretanto existe uma tradução dessas mensagens para o português já implementada nessa especificação.

No protocolo HTTP existe um cabeçalho chamado **Accept-Language**, que serve para indicar ao servidor o idioma de preferência do cliente disparando a requisição. Podemos utilizar esse cabeçalho para indicar ao Spring o idioma desejado, para que então na integração com o Bean Validation ele busque as mensagens de acordo com o idioma indicado.

No Insomnia, e também nas outras ferramentas similares, existe uma opção chamada **Header** que podemos incluir cabeçalhos a serem enviados na requisição. Se adicionarmos o header **Accept-Language** com o valor **pt-br**, as mensagens de erro do Bean Validation serão automaticamente devolvidas em português.

![Aba Header no Isomnia contendo os cabeçalhos da requisição, incluindo o cabeçalho Accept-Language](https://cdn1.gnarususercontent.com.br/1/4341/6edf91fb-3e5d-4b24-97bb-e93052438bb0.png)

Obs: O Bean Validation tem tradução das mensagens de erro apenas para alguns poucos idiomas.
# Personalizando menssagem de erro
Você deve ter notado que o _Bean Validation_ possui uma mensagem de erro para cada uma de suas anotações. Por exemplo, quando a validação falha em algum atributo anotado com `@NotBlank`, a mensagem de erro será: **_must not be blank_**.

Essas mensagens de erro não foram definidas na aplicação, pois são mensagens de erro **padrão** do próprio _Bean Validation_. Entretanto, caso você queira, pode personalizar tais mensagens.

Uma das maneiras de personalizar as mensagens de erro é adicionar o atributo `message` nas próprias anotações de validação:

```java
public record DadosCadastroMedico(
    @NotBlank(message = "Nome é obrigatório")
    String nome,

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Formato do email é inválido")
    String email,

    @NotBlank(message = "Telefone é obrigatório")
    String telefone,

    @NotBlank(message = "CRM é obrigatório")
    @Pattern(regexp = "\\d{4,6}", message = "Formato do CRM é inválido")
    String crm,

    @NotNull(message = "Especialidade é obrigatória")
    Especialidade especialidade,

    @NotNull(message = "Dados do endereço são obrigatórios")
    @Valid DadosEndereco endereco) {}
```

Outra maneira é isolar as mensagens em um arquivo de propriedades, que deve possuir o nome **_ValidationMessages.properties_** e ser criado no diretório `src/main/resources`:

```ini
nome.obrigatorio=Nome é obrigatório
email.obrigatorio=Email é obrigatório
email.invalido=Formato do email é inválido
telefone.obrigatorio=Telefone é obrigatório
crm.obrigatorio=CRM é obrigatório
crm.invalido=Formato do CRM é inválido
especialidade.obrigatoria=Especialidade é obrigatória
endereco.obrigatorio=Dados do endereço são obrigatórios
```

E, nas anotações, indicar a chave das propriedades pelo próprio atributo `message`, delimitando com os caracteres `{` e `}`:

```java
public record DadosCadastroMedico(
    @NotBlank(message = "{nome.obrigatorio}")
    String nome,

    @NotBlank(message = "{email.obrigatorio}")
    @Email(message = "{email.invalido}")
    String email,

    @NotBlank(message = "{telefone.obrigatorio}")
    String telefone,

    @NotBlank(message = "{crm.obrigatorio}")
    @Pattern(regexp = "\\d{4,6}", message = "{crm.invalido}")
    String crm,

    @NotNull(message = "{especialidade.obrigatoria}")
    Especialidade especialidade,

    @NotNull(message = "{endereco.obrigatorio}")
    @Valid DadosEndereco endereco) {}
```