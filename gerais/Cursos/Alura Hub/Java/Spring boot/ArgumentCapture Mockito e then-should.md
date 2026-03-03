```java
BDDMockito.then(classe).should().metodo(params...); // Faz uma assertiva para que o método seja chamado
```
```java
any() // Valor passado em mocks, para indicar qualquer parâmetro
```
# Sistema de captura de parâmetros
Imagine que você queira verificar se uma função foi chamada com determinados parâmetros, e depois testar os valores. Você pode usar o captor.
```java
package br.com.alura.adopet.api.service;

  

import static org.mockito.ArgumentMatchers.any;

  

import java.util.List;

  

import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.ArgumentCaptor;

import org.mockito.BDDMockito;

import org.mockito.Captor;

import org.mockito.InjectMocks;

import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;

  

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;

import br.com.alura.adopet.api.model.Abrigo;

import br.com.alura.adopet.api.model.Adocao;

import br.com.alura.adopet.api.model.Pet;

import br.com.alura.adopet.api.model.Tutor;

import br.com.alura.adopet.api.repository.AdocaoRepository;

import br.com.alura.adopet.api.repository.PetRepository;

import br.com.alura.adopet.api.repository.TutorRepository;

import br.com.alura.adopet.api.validacoes.ValidacaoSolicitacaoAdocao;

  

@ExtendWith(MockitoExtension.class)

public class AdocaoServiceTest {

    @InjectMocks

    private AdocaoService adocaoService;

  

    @Mock

    private AdocaoRepository repository;

  

    @Mock

    private PetRepository petRepository;

  

    @Mock

    private TutorRepository tutorRepository;

  

    @Mock

    private EmailService emailService;

  

    @Mock

    private List<ValidacaoSolicitacaoAdocao> validacoes;

  

    @Mock

    private Pet pet;

  

    @Mock

    private Tutor tutor;

  

    @Mock

    private Abrigo abrigo;

  

    @Captor

    private ArgumentCaptor<Adocao> adocaoCapture; // Indica um captor que será usado pelo mocks

  

    @Test

    void shouldSaveAdocaoOnSolicitated() {

        var dto = new SolicitacaoAdocaoDto(10L, 20L, "motivo qualquer");

  

        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);

        BDDMockito.given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);

        BDDMockito.given(pet.getAbrigo()).willReturn(abrigo);  

  

        adocaoService.solicitar(dto);

  

        BDDMockito.then(repository).should().save(adocaoCapture.capture()); // Cria uma captura do parâmetro quando for chamada

        var adocaoSalva = adocaoCapture.getValue(); // Pega o valor captura do na função quando chamada

        Assertions.assertEquals(pet, adocaoSalva.getPet());

        Assertions.assertEquals(tutor, adocaoSalva.getTutor());

        Assertions.assertEquals(dto.motivo(), adocaoSalva.getMotivo());

    }

}
```