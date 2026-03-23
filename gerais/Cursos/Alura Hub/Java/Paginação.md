```java
@GetMapping

    public Page<DadosListagemMedico> listar(@PageableDefault(size = 10, page = 0, sort = {"nome"}) Pageable pageable) { // Define a formatação da página padrão, e coloca o parâmetro do Pageable para pegar as configurações da URL, e caso não tenha usar o default

        return medicoRepository.findAll(pageable) // Procupa todos medicos em função do pageable

            .map(DadosListagemMedico::new); // Realiza um map

    }
```