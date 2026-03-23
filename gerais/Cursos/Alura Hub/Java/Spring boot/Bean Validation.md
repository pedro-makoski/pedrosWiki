Permite validar os atributos de uma classe.
```java
package med.voll.api.controllers;

  

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

  

import jakarta.validation.Valid;

import med.voll.api.dtos.DadosCadastroMedico;

import med.voll.api.model.Medico;

import med.voll.api.repositories.MedicoRepository;

  

@RestController

@RequestMapping("medicos")

public class MedicosController {

    @Autowired

    private MedicoRepository medicoRepository;

  

    @PostMapping

    @Transactional

    public void cadastrar(@RequestBody @Valid DadosCadastroMedico dadosCadastroMedico) { // Diz que o parâmetro recebido deve ser valido

        medicoRepository.save(new Medico(dadosCadastroMedico));

    }

  

}
```
```java
package med.voll.api.dtos;

  

import jakarta.validation.Valid;

import jakarta.validation.constraints.Email;

import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.NotNull;

import jakarta.validation.constraints.Pattern;

import jakarta.validation.constraints.Size;

  

public record DadosCadastroMedico(

        @NotBlank @NotNull String nome, // Diz que a string não pode ser vazia nem nula

  

        @NotBlank @Email String email, // Diz que o email não pode ser vazio, muito menos não estar em formato de email

  

        @NotBlank @Pattern(regexp = "\\d{4,6}") String crm, // Diz que o CRM não pode ser vazio, nem sair do regexp estabelecido

  

        @NotNull Especialidade especialidade, // Diz que especialidade não pode ser nulo

  

        @NotNull @Valid DadosEndereco endereco) { // Diz que dados endereço deve ter seus atributos válidso também

  

}
```