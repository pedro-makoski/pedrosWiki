Vamos usar:
- JUnit 5
- Mockito 
- Spring Boot
# JUnity
Biblioteca padrão para os testes em Java. O spring-boot-starter-test já incorpora o JUnity como uma biblioteca.
## Assert Equals
```java
Assertions.assertEquals(ProbabilidadeAdocao.ALTA, probabilidadeAdocao);
```
Esse código acima compara no teste automatizado.
Toda função de teste tem o decorator @Test.
## AssertDoesNotThrow
Verifica se não lança nenhuma exceção.  
```java
Assertions.assertDoesNotThrow(() -> validacaoPetDisponivel.validar(dto));
```
# Mockito
Utiliza-se para criar mocks, que permite simular classes com retornos ficitícios.
O spring-boot-starter-test já incluem o mockito no projeto.
```java
package br.com.alura.adopet.api.validacoes;

  

import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.BDDMockito;

import org.mockito.InjectMocks;

import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;

  

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;

import br.com.alura.adopet.api.exception.ValidacaoException;

import br.com.alura.adopet.api.model.Pet;

import br.com.alura.adopet.api.repository.PetRepository;

  

@ExtendWith(MockitoExtension.class) // Deixa como middleware mockito

public class ValidacaoPetDisponivelTest {

    @Mock // Indica que vai ser mockado, ou seja tem valores fictícios 

    private PetRepository petRepository;

  

    @Mock

    private Pet pet;

  

    @Mock

    private SolicitacaoAdocaoDto dto;

  

    @InjectMocks // Indica que os mocks vão ser injetados neste

    private ValidacaoPetDisponivel validacaoPetDisponivel;

  

    @Test

    void shouldAllowSolicitationOfAdoption() {

        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet); // Quando for requerido ao petRepository o getReferenceById do idPet do DTO, retorne o pet.

        BDDMockito.given(pet.getAdotado()).willReturn(false); // Quando for pedido se for adotado pet, retorne sempre false

  

        Assertions.assertDoesNotThrow(() -> validacaoPetDisponivel.validar(dto)); 

    }

  

    @Test

    void notShouldAllowSolicitationOfAdoption() {

        BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);

        BDDMockito.given(pet.getAdotado()).willReturn(true);

  

        Assertions.assertThrows(ValidacaoException.class, () -> validacaoPetDisponivel.validar(dto)); // Verifica se emite o erro do primeiro parâmetro ao executar a função do segundo parâmetro.

    }

}
```