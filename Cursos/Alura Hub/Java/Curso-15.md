## Transcrição

Boas-vindas ao curso de **Spring Boot 3: aplique boas práticas e proteja uma API Rest!**

Me chamo Rodrigo Ferreira e serei o seu instrutor ao longo deste curso, em que vamos aprender como usar as ferramentas do Spring Boot, sendo um framework do Java.

> **Rodrigo Ferreira** é uma pessoa de pele clara, com olhos castanhos e cabelos castanhos e curto. Veste camiseta rosa lisa, e está sentado em uma cadeira preta. Ao fundo, há uma parede lisa com iluminação azul gradiente.

### No curso anterior...

Este é o segundo curso, é importante que você tenha concluído o anterior [Curso de Spring Boot 3: desenvolva uma API Rest em Java](https://cursos.alura.com.br/course/spring-boot-3-desenvolva-api-rest-java?preRequirementFrom=spring-boot-aplique-boas-praticas-proteja-api-rest). Nele, iniciamos o projeto que daremos continuidade.

Recapitulando, no primeiro curso aprendemos como funciona o **Spring Boot**, a criar um projeto usando **Spring initializr** e começamos a desenvolver a **API Rest**.

No caso, fizemos o **CRUD** (_Create, Read, Update e Delete_), implementamos a funcionalidade de cadastro, listagem, remoção e atualização. Aprendemos, também, a fazer validações de formulários utilizando o _bean validation_. Por fim, focamos na **paginação e ordenação**.

- Desenvolvimento de uma API Rest
- CRUD (Create, Read, Update e Delete)
- Validações
- Paginação e ordenação

Tudo isso foi desenvolvido no curso anterior, e a ideia deste presente curso é dar continuidade ao projeto iniciado. Partiremos do ponto que paramos no curso passado, e aprenderemos novos recursos do framework.

A seguir, vamos relembrar o _layout_ do aplicativo mobile da nossa aplicação:

![Protótipo do aplicativo que será trabalhado ao longo deste curso. Nele, há três telas mostradas lado a lado, da esquerda para direita. A primeira tela é a tela inicial, em que há a logo do aplicativo no canto superior direito. Abaixo há três botões retangulares grandes e azuis que ocupam o resto da tela para escolher as seções. De cima para baixo, a ordem dos botões é: Médicos(as), Pacientes e Consultas. A segunda tela é para pesquisar na seção escolhida anteriormente. No caso, mostra os resultados da seção "Médicos(as)". Se não houver um filtro, todos os resultados aparecerão em ordem alfabética. A terceira e última tela é um formulário de cadastro, com os campos a serem preenchidos. Os campos, de cima para baixo, são: Nome completo, especialidade, CRM, e-mail, telefone ou celular, logradouro, número, complemento e cidade.](https://cdn1.gnarususercontent.com.br/1/723333/72e3cd44-04da-4da3-aa8d-023c87ff16d0.png)

Lembrando que focamos na parte de back-end, na API Rest, e continuaremos trabalhando nesse projeto da clínica médica. Desenvolvemos o CRUD de médicos e pacientes, e daremos prosseguimento neste curso.

### Objetivos

- Boas práticas na API
- Tratamento de erros
- Autenticação/Autorização
- Tokens JWT

Os objetivos deste segundo curso são: **aprender boas práticas na API** referente ao protocolo HTTP. Faremos ajustes na classe controller, para seguir as boas práticas do protocolo HTTP quanto ao retorno dos códigos HTTP e das respostas que a API devolve.

Logo após, realizaremos **tratamento de erros**. Eventualmente, pode ocorrer um erro na API, e precisamos entender o que o Spring faz ao ocorrer uma _exception_ enquanto o programa é executado, o que é devolvido como resposta para o cliente da API.

Assim, vamos **personalizar** esses retornos para tratar esses erros da melhor forma possível.

Após isso, focaremos na segurança, no **controle de autenticação e de autorização** da API. No curso anterior não abordamos isso, logo a nossa API está pública - qualquer pessoa pode enviar requisições para remover, atualizar ou alterar informações da API.

Mas não é dessa forma que desejamos, precisamos ter um controle. Isso será feito na aplicação front-end, porém, na API precisamos ter um código que permite o usuário se **autenticar**, e também ter um controle de acesso de informações públicas e privadas.

Aprenderemos a aplicar isso com o **Spring Security**, sendo um módulo do Spring responsável por monitorar esse controle.

No caso, usaremos a autenticação fundamentada em tokens com o padrão **JSON Web Token (JWT)**.

São esses os objetivos do segundo curso, focaremos em boas práticas, tratamento de erros e no controle de acesso, autenticação e autorização, usando tokens.

Gostou? Caso, sim, te espero na próxima aula!

## Transcrição

Nesta aula faremos alguns ajustes no código do projeto, para melhorarmos algumas questões referentes às boas práticas.

No Insomnia, temos as requisições CRUD feitas na API, tanto de médicos quanto de pacientes. É justamente o que fizemos no curso anterior.

Pelo Insomnia disparamos as requisições para a API, isso para simular o aplicativo mobile ou aplicação front-end se comunicando com a API back-end.

Temos algumas considerações importantes: lembre-se que estamos desenvolvendo uma **API Rest seguindo o protocolo HTTP**. Logo, precisamos seguir às boas práticas relacionadas ao protocolo.

Uma dessas boas práticas já estamos aplicando: cada requisição que temos no Insomnia (excluir, atualizar, cadastrar e remover médico e pacientes), usamos os verbos do protocolo HTTP conforme a requisição.

Para excluir usamos o verbo `delete`, para cadastrar um médico ou paciente utilizamos o método `post`, para listar usamos o `get` e para atualizar utilizamos o `put`.

- Remover: `delete`
- Cadastrar: `post`
- Listar: `get`
- Atualizar: `put`

Porém, não são somente os verbos do protocolo HTTP e a URL que consideramos importantes, precisamos ter um **tratamento do retorno da API nas requisições**.

Por exemplo, na requisição `DEL` de excluir um médico do lado esquerdo do Insomnia. Perceba que a requisição disparará um método `delete` com a URL `http://localhost:8080/medicos/2`, sendo o ID 2.

> Requisições no Insomnia:

|**DEL**|Excluir Médico|
|---|---|
|**PUT**|Atualizar Médico|
|**GET**|Listagem de médicos|
|**POST**|Cadastro de Médico|
|**POST**|Cadastro de Paciente|
|**GET**|Listagem de pacientes|
|**PUT**|Atualizar Paciente|
|**DEL**|Excluir Paciente|

Se clicarmos no botão "_Send_" para enviar à requisição, repare que ele nos devolve um código `200 OK`, contido em uma caixa na cor verde, do lado direito. Isso significa que a requisição foi feita com sucesso.

**O código `200` é o código do protocolo HTTP que significa "OK"**. No corpo da resposta, na aba "_Preview_", temos uma mensagem "_No body returned for response_" (em português, "Nenhum corpo retornou para resposta"). Está vazio.

Na requisição `PUT` de atualizar médico, temos algo semelhante:

> `PUT`: `http://localhost:8080/medicos`

```json
{
    "id": 2,
    "telefone": "1100009999"
}
```

Perceba que disparamos a requisição levando o JSON com os dados do médico que desejamos atualizar. Ao clicarmos no botão "Send", nos devolve o código `200 OK` e com o corpo da resposta vazio. Igual ao caso anterior.

Será que precisamos retornar `200` em todas as requisições? Ou há outros códigos no protocolo HTTP mais adequados? É justamente nesse detalhe que faremos os ajustes.

**O protocolo HTTP possui diversos códigos para vários cenários** e não estamos usando esse recurso de forma adequada.

Estamos devolvendo `200` quando dá certo ("OK"), ou `500` que o Spring devolve de forma automática, ou erro `400` caso ocorra um erro de validação do _bean validation_.

Vamos analisar tudo isso no projeto.

Abriremos o IntelliJ, com o projeto já importado, sendo o mesmo que finalizamos no curso anterior. Do lado esquerdo, clicamos em "src > main > java > med.voll.api > controller > MedicoController".

Lembre-se que toda requisição chega no arquivo `MedicoController`.

Se analisarmos o método excluir, repare que colocamos o retorno como `void`.

```typescript
//código omitido

 @DeleteMapping("/{id}")
 @Transactional
    public void excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();
}
```

Não colocamos nenhum retorno no método de atualizar e de cadastrar. Devolvemos algo somente no método de listar, porque precisamos retornar algo, no caso, estamos usando a paginação do Spring Boot.

Porém, os outros métodos estão devolvendo um `void`. Isso é um problema!

Ao usarmos o `void`, não informamos o que o Spring precisa devolver. Por isso, por padrão, ele retorna o código `200 OK`, se a requisição for processada com sucesso.

Porém, há outros códigos HTTP mais customizados dependendo do cenário. Por exemplo, no método excluir, o mais adequado seria devolver o código `204`, que se refere à requisição processada e sem conteúdo.

Para devolver o código `204`, começaremos a padronizar esses métodos. Ao invés de usarmos o `void`, **utilizaremos uma classe do Spring** chamada `ResponseEntity`, sendo uma classe que conseguimos controlar a resposta devolvida pelo framework.

```kotlin
// código omitido

 @DeleteMapping("/{id}")
 @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();
}
```

Assim, o retorno não será mais vazio ("_void_") e sim um objeto do tipo `ResponseEntity`. Esse método terá erro de compilação, ainda precisamos incluir o `return`.

Na última linha do método excluir, após a exclusão, adicionaremos o `return`. Contudo, como instanciamos o objeto `ResponseEntity`? Na classe `ResponseEntity` há métodos estáticos, que podemos usar neste caso.

Logo, colocaremos `return ResponseEntity`, sendo a classe, e digitamos um ponto ("."): `return ResponseEntity.`.

Perceba que será exibido uma caixa com vários métodos que podemos devolver conforme o que desejamos, como `ok`, `badRequest`, `noContent`, `notFound`, etc.

Clicaremos no método `noContent` para o método excluir, com isso, ficaremos com: `return ResponseEntity.noContent();`.

Perceba que aparece um sublinhado na cor vermelha no retorno, isso significa que o método `noContent` não devolve um `ResponseEntity`. Na sequência, chamaremos o `.build()`.

```kotlin
// código omitido

return ResponseEntity.noContent().build();
```

O `noContent()` cria um objeto e chamamos o `build()` para construir o objeto `ResponseEntity`.

```kotlin
//código omitido

@DeleteMapping("/{id}")
@Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();

        return ResponseEntity.noContent().build();
    }
```

Podemos salvar clicando em "Ctrl + S".

Agora, voltaremos à Insomnia para enviarmos uma requisição para excluir um médico. Ele nos devolvia o código `200 OK`, como podemos visualizar no lado direito.

Ao dispararmos a requisição clicando no botão "Send", o código se torna `204 No Content`. Colocando o mouse por cima, é exibida uma mensagem explicando o que significa esse código.

Esse erro faz parte da categoria `200`, que são os códigos de requisição que obtiveram sucesso, porém, é específico. O `204 No Content' significa que foi processado com sucesso, mas não possui conteúdo para ser mostrado na resposta.

Para remover, essa é uma boa prática, usar o código `204` e não o `200`. Faremos essa mesma alteração nos outros métodos do arquivo `MedicoController`, para padronizarmos o controller e termos **todos** os métodos retornando um objeto `ResponseEntity`.

Nos métodos `atualizar`, `cadastrar` e `listagem`, alteramos de `void` para `ResponseEntity`.

> Método atualizar

```typescript
//código omitido

@PutMapping
@Transactional
public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoMedico dados) {
        var medico = repository.getReferenceById(dados.id());
        medico.atualizarInformacoes(dados);
    }
```

> Método cadastrar

```less
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
}
```

No método de listar, incluiremos o `ResponseEntity` e no `Page<DadosListagemMedico>`, colocaremos mais um "<>" mas entre o `page` e o `DadosListagemMedico`: `public <Page<DadosListagemMedico>>`.

> Método listagem

```less
//código omitido

@GetMapping
public ResponseEntity<Page<DadosListagemMedico>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
   return repository.findAllByAtivoTrue(paginacao).map(DadosListagemMedico::new);
    }
```

Vamos padronizar, todos os métodos usaram a classe `ResponseEntity` do Spring Boot.

Como esperado, será exibido o erro de compilação (sublinhado na cor vermelha do método), isso acontece porque precisamos alterar para devolver o objeto `ResponseEntity`. Faremos esses ajustes agora.

No método de listar, alteramos o `return`. Isto é, ele não devolverá diretamente o _page_ e vamos colocar o `repository.findAllByAtivoTrue(paginacao)` em uma variável chamada `page`.

```typescript
//código omitido

@GetMapping
public ResponseEntity<Page<DadosListagemMedico>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemMedico::new);
    }

//código omitido
```

Na linha seguinte, faremos o `return ResponseEntity.ok()`, porque queremos devolver o código `200`. No parênteses do `ok()`, passamos o objeto "page".

```typescript
//código omitido

@GetMapping
public ResponseEntity<Page<DadosListagemMedico>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemMedico::new);
        return ResponseEntity.ok(page);
    }

//código omitido
```

Com isso, no método de listar será devolvido o código `200`, e junto na resposta vem o objeto de paginação com os dados dos médicos.

Nos métodos de cadastrar e atualizar, como funcionaria?

Analisaremos, primeiro, o método `atualizar`.

> Método atualizar

```typescript
//código omitido

@PutMapping
@Transactional
public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoMedico dados) {
        var medico = repository.getReferenceById(dados.id());
        medico.atualizarInformacoes(dados);
    }

//código omitido
```

Neste método, usávamos `void`, ou seja, não tínhamos retorno nenhum. Porém, diferente do método de excluir, no de atualizar não podemos devolver um código `204`.

O mais interessante no método de atualizar é devolver a informação atualizada. Como é para atualizar o registro do médico, no final devolveremos os dados do médico atualizado.

No final do método digitaremos `return ResponseEntity.ok()` e dentro dos parênteses precisamos passar o objeto.

Contudo, **não podemos passar o objeto médico**, porque é uma entidade JPA ("Java Persistence API") e **não é recomendado devolver e receber entidades JPA no controller**.

Logo, precisamos devolver um DTO ("_Data Transfer Object_"). Por exemplo, temos o `DadosAtualizacaoMedico` que é o nosso DTO. Clicando em "DadosAtualizacaoMedico", conseguimos visualizar o código.

Porém, esse DTO está incompleto, ele possui somente o `id`, `nome`, `telefone` e `endereço`. Sendo o DTO que representa os dados da atualização de um médico, isto é, os dados que o aplicativo mobile enviará para atualizar as informações.

No caso, queremos devolver **todas as informações do médico**. Por isso, criaremos outro DTO para representar esses dados do médico que estão sendo atualizados.

Voltando ao arquivo `MedicoController`, dentro do parênteses do `ok.()` colocaremos `new DadosDetalhamentoMedico()`. Agora, sim, passamos o objeto médico: `new DadosDetalhamentoMedico(medico)`.

```typescript
//código omitido

@PutMapping
@Transactional
public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoMedico dados) {
        var medico = repository.getReferenceById(dados.id());
        medico.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DadosDetalhamentoMedico(medico));
    }

//código omitido
```

Perceba que `DadosDetalhamentoMedico` está escrito em uma cor vermelha bem forte, isso significa que ocorreu erro de compilação. Para ajustar isso, selecionaremos "Alt + Enter" no teclado, será exibido um _pop-up_ com diversas opções, escolheremos a "`Create record 'DadosDetalhamentoMedico'`". Isso para ele criar esse DTO para nós.

Na caixa exibida, temos o título "_Create Record DadosDetalhamentoMedico_", com os campos "_Destination package_" e "_Target destination directory"_.

No primeiro campo "_Destination package_" consta "med.voll.api.controller", alteraremos para "med.voll.api.medico", para mudar o pacote. Logo após, clicaremos no botão "Ok", no canto inferior direito.

Será criado o arquivo `DadosDetalhamentoMedico`:

```csharp
package med.voll.api.medico;

public record DadosDetalhamentoMedico(Medico medico) {

}
```

Porém, teremos um `record` não recebendo o objeto médico e sim as informações do médico.

```typescript
package med.voll.api.medico;

public record DadosDetalhamentoMedico(Long id, String nome, String email, String crm, String telefone, Especialidade especialidade, Endereco endereco) {

}
```

No método estamos instanciando um objeto médico, logo podemos criar um construtor que recebe um objeto do tipo `medico`. Esse construtor chama o construtor principal do `record` passando os parâmetros.

```scss
package med.voll.api.medico;

import med.voll.api.endereco.Endereco;

public record DadosDetalhamentoMedico(Long id, String nome, String email, String crm, String telefone, Especialidade especialidade, Endereco endereco) {
        public DadosDetalhamentoMedico (Medico medico) {
            this(medico.getId(), medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getTelefone(), medico.getEspecialidade(), medico.getEndereco());

        }
}
```

Com isso, temos o `record` que recebe como parâmetro os dados do médico, e um construtor para passarmos o médico como parâmetro, que será usado no controller.

O método de cadastrar será um pouco diferente, porque existe o código `201` do protocolo HTTP que **significa que a requisição foi processada e o novo recurso foi criado**. Esse código possui um tratamento especial.

E usaremos o objeto `DadosDetalhamentoMedico`. Inclusive, podemos criar um novo _endpoint_ (ou método) no controller, dado que temos somente os quatro métodos do CRUD (_Create_, _Read_, _Update_ e _Delete_). Porém, faltou o método para detalhar.

Na listagem estamos devolvendo somente algumas informações dos médicos, mas e se quisermos detalhar trazendo todos os dados de um médico específico? Faltou esse método no controller.

No método de cadastrar, usaremos o código HTTP `201`, o mais adequado. E usaremos esse DTO, também.

Mas aprenderemos isso na sequência. Te espero na próxima aula!

## Transcrição

Na aula anterior, começamos a realizar as alterações no controller, nos métodos de excluir, atualizar e listar, para padronizar os retornos para responder `ResponseEntity`. No entanto, faltou o método cadastrar.

O método de cadastrar possui um detalhe a mais devido ao protocolo HTTP, e faremos mais uma requisição para detalhar o médico.

Conforme o protocolo HTTP, ao cadastrarmos uma informação ou recurso em uma API, o código HTTP que deve ser devolvido, neste cenário, é o código `201` chamado _created_. Esse código significa que um registro foi criado na API.

> **Código 201**: devolve no corpo da resposta os dados do novo recurso/registro criado e um cabeçalho do protocolo HTTP (Location).

Porém, esse código `201` possui algumas regras. Na resposta, devemos colocar o código `201` e no corpo da resposta os dados do novo registro criado e, também, um cabeçalho do protocolo HTTP.

Esse cabeçalho mostra o endereço para que o front-end, ou aplicativo mobile consiga acessar o recurso cadastrado. Logo, no cadastro não devolvemos apenas o código `200 OK` e nem apenas o `201`.

Precisa ser o código `201`, com os dados no formato JSON e um cabeçalho, na resposta. Para fazer isso, usaremos alguns recursos do Spring Boot.

```less
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
}

//código omitido
```

No método de cadastrar do arquivo `MedicoController`, note que ele já aponta um erro de compilação, já que alteramos o retorno de `void` para `ResponseEntity`.

Após chamarmos o `repository.save`, como fazemos para acionar o código `201`? Incluiremos `return ResponseEntity` com o método `.created()`, que passaremos como parâmetro a `uri`: `return ResponseEntity.created(uri)`.

Essa `uri` representa o endereço, e o Spring cria o cabeçalho _location_ de forma automática conforme a `uri` que passamos como parâmetro. Ainda vamos criar essa URI.

```less
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));

                return ResponseEntity.created(uri)
}

//código omitido
```

Na sequência colocamos `.body()`, para incluir as informações que queremos devolver no corpo da resposta, como parâmetro colocamos `dto`. Assim, ele cria o objeto `ResponseEntity`.

```less
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));

                return ResponseEntity.created(uri).body(dto);
}

//código omitido
```

Temos o erro de compilação em `uri` e `dto`, isso porque essas variáveis não existem neste método cadastrar.

Para criarmos o objeto `uri`, na linha de cima do `return`, vamos criar a variável, `var uri =`. **A `URI` deve ser o endereço da API**, no caso é o `http://localhost:8080/medicos/id`, sendo o ID do médico que acabou de ser criado no banco de dados.

Lembrando que está rodando local e ainda faremos o `deploy` para rodar no servidor. Logo, não será mais `http://localhost:8080`, será alterado.

Para não precisarmos ter que dar muita atenção para esse ponto no controller, o Spring possui uma classe que **encapsula o endereço da API**. Essa classe realiza a construção da URI de forma automática.

Para usarmos essa classe, incluiremos mais um parâmetro no método cadastrar.

Atualmente, estamos recebendo o `DadosCadastroMedico`. Colocaremos uma vírgula (",") e, na sequência, um objeto do tipo `UriComponentsBuilder`, sendo a classe que gera a URI. Chamaremos essa classe de `uriBuilder`.

```typescript
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados, UriComponentsBuilder uriBuilder) {
        repository.save(new Medico(dados));

                var uri =

                return ResponseEntity.created(uri).body(dto);
}

//código omitido
```

Basta recebermos a classe como parâmetro no método controller, que o Spring fica responsável por passar esse parâmetro de forma automática.

Voltando para a variável `uri`, após o sinal de igual podemos colocar `uriBuilder.`, e chamaremos o método `path` para passarmos o complemento da URL: `var uri = uriBuilder.path()`. Isso porque ele cria somente a URI `localhost:8080`, e precisamos incluir o complemento `/medicos/id`.

Portanto, no parênteses do método `path` vamos passar `"/medicos/{id}"`. O `id` entre chaves é um parâmetro dinâmico.

```typescript
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados, UriComponentsBuilder uriBuilder) {
        repository.save(new Medico(dados));

                var uri = uriBuilder.path("/medicos/{id}")

                return ResponseEntity.created(uri).body(dto);
}

//código omitido
```

Perceba que é semelhante ao que fizemos no método de excluir: `@DeleteMapping("/{id}")`. O Spring sabe que o `/{id}` é um parâmetro dinâmico.

Voltando ao método de cadastrar, na sequência do `path`, precisamos substituir esse ID pelo ID do médico que foi criado no banco de dados.

Para isso, digitamos `.buildAndExpand()`. Nele, precisamos passar, como parâmetro, o ID do médico criado no banco de dados. Esse ID está na linha anterior, no `repository.save` que chamamos para salvar no banco de dados.

```cpp
repository.save(new Medico(dados));
```

Contudo, passamos como parâmetro o `new Medico` para o método `save`. Vamos precisar desse médico na linha seguinte, por isso, criaremos uma variável para o médico: `var medico =`.

Em seguida, vamos extrair a linha que estamos passando como parâmetro para o método `save` e colaremos na variável `medico`.

```csharp
var medico = new Medico(dados)
repository.save();
```

No `repository.save()` passamos o `medico` como parâmetro, e no `buildAndExpand()` o `medico.getId()`. O ID será gerado pelo banco de dados na linha anterior de forma automática. Logo após o _build and expand_, colocamos `.toUri()` para criar o objeto URI.

```typescript
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados, UriComponentsBuilder uriBuilder) {
                var medico = new Medico(dados)
                repository.save(medico);

                var uri = uriBuilder.path("/medicos/{id}").buildAndExpand(medico.getId()).toUri();

                return ResponseEntity.created(uri).body(dto);
}

//código omitido
```

Criamos o objeto URI. Agora, no `return`, perceba que o parâmetro `dto` está na cor vermelha, significa que precisamos criá-lo. Usaremos o mesmo `dto` que utilizamos no método de atualizar, o `new DadosDetalhamentoMedico(medico)`.

Copiaremos esse método e colaremos no parâmetro do método `.body().`.

```cpp
return ResponseEntity.created(uri).body(new DadosDetalhamentoMedico(medico));
```

Dessa forma, temos:

```typescript
//código omitido

@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroMedico dados, UriComponentsBuilder uriBuilder) {
                var medico = new Medico(dados)
                repository.save(medico);

                var uri = uriBuilder.path("/medicos/{id}").buildAndExpand(medico.getId()).toUri();

                return ResponseEntity.created(uri).body(new DadosDetalhamentoMedico(medico));
}

//código omitido
```

O método de cadastrar possui diversos detalhes, porque precisamos devolver o código `201`, o cabeçalho _location_ com a URI e no corpo da resposta é necessário ter uma representação do recurso recém criado.

Agora, vamos testar o cadastro, listagem, atualização e exclusão!

Alteramos para retornar o `ResponseEntity` nos métodos e salvamos essas modificações. Como o projeto já estava sendo executado, ele detecta as alterações de forma automática devido ao _DevTools_.

Voltando ao Insomnia, no método excluir médico, clicaremos no botão "Send" para disparar a requisição. Note que retornou o código `204 No Content`, deu certo.

Agora, clicamos do lado esquerdo do IntelliJ em "`PUT` atualizar médido". Neste método, alteraremos no corpo do JSON o ID de "2" para "1", porque desejamos atualizar o médico que contém o ID 1 e o telefone:

> `PUT`: `http://localhost:8080/medicos`

```json
{
    "id": 1,
    "telefone": "2111112222"
}
```

Logo após, clicamos no botão "Send". Antes nos devolvia o código `200 OK`, sem um corpo no retorno. Agora, temos o código `200 OK`, mas com o seguinte corpo na resposta:

> Preview

```json
{
        "id": 1,
        "nome": "Rodrigo Ferreira",
        "email": "rodrigo.ferreira@voll.med",
        "crm": "123456",
        "telefone": "2111112222",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "numero": "1",
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Esses são os dados atualizados do médico. Perceba que retorna **todos** os dados, não somente o `id` e o `telefone` - que foram os que alteramos.

Do lado esquerdo do IntelliJ, selecionaremos "`GET` Listagem de médicos" e depois o botão "Send". Perceba que este método não mudou, continua devolvendo o código `200 OK` com JSON no corpo da resposta com os dados da paginação.

Ou seja, alteramos para `ResponseEntity` mas não alterou nada. Isso era esperado.

Vamos verificar se foi feita a alteração no cadastro. Para isso, clicaremos em "`POST` Cadastro de Médico" e no JSON, alteraremos os campos com as informações do "Renato" para "Juliana Queiroz".

> Antes:

```json
{
        "nome": "Renato Amoedo",
        "email": "renato.amoedo@voll.med",
        "crm": "233444",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

> Depois

```json
{
        "nome": "Juliana Queiroz",
        "email": "juliana.queiroz@voll.med",
        "crm": "233444",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Após essas alterações, clicamos no botão "Send". Antes o código estava `500 Internal Server Error`, agora está como `201 Created`, com as seguintes informações no corpo da resposta em formato JSON:

```json
{
        "id": 6,
        "nome": "Juliana Queiroz",
        "email": "juliana.queiroz@voll.med",
        "crm": "233444",
        "telefone": "2111112222",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "numero": null,
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Do lado direito da aba "_Preview_", temos a aba "_Header_", sendo os cabeçalhos que foram devolvidos. Ao clicarmos na aba "Header", temos:

|**Name**|**Value**|
|---|---|
|Location|[http://localhost:8080/medicos/6](http://localhost:8080/medicos/6)|
|Content-Type|application/json|
|Transfer-Encoding|chunked|
|Date|Thu, 20 Oct 2022 19:49:00 GMT|

Dessa forma, temos o cabeçalho _location_ com o endereço `http://localhost:8080/medicos/6`, sendo o número 6 o ID do médico que acabamos de cadastrar no banco de dados.

Se tentarmos entrar no endereço `/medicos/6`, será devolvido o código `404`. Isso porque **não configuramos uma requisição para detalhar os dados de um médico**.

Por enquanto, temos somente o CRUD (Create, Read, Update e Delete), mas em uma API geralmente temos uma quinta funcionalidade para detalhar as informações de um médico.

Na próxima aula, vamos aprender a criar essa funcionalidade.

Te espero no próximo vídeo!

# Para saber mais: códigos do protocolo HTTP

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117176/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117176/question)

O **protocolo HTTP** (_Hypertext Transfer Protocol_, RFC 2616) é o protocolo responsável por fazer a comunicação entre o cliente, que normalmente é um _browser_, e o servidor. Dessa forma, a cada “requisição” feita pelo cliente, o servidor responde se ele obteve sucesso ou não. Se não obtiver sucesso, na maioria das vezes, a resposta do servidor será uma sequência numérica acompanhada por uma mensagem. Se não soubermos o que significa o código de resposta, dificilmente saberemos qual o problema que está acontecendo, por esse motivo é muito importante saber quais são os códigos HTTP e o que significam.

## Categoria de códigos

Os códigos HTTP (ou HTTPS) possuem três dígitos, sendo que o primeiro dígito significa a classificação dentro das possíveis cinco categorias.

**1XX:** _Informativo_ – a solicitação foi aceita ou o processo continua em andamento;

**2XX:** _Confirmação_ – a ação foi concluída ou entendida;

**3XX:** _Redirecionamento_ – indica que algo mais precisa ser feito ou precisou ser feito para completar a solicitação;

**4XX:** _Erro do cliente_ – indica que a solicitação não pode ser concluída ou contém a sintaxe incorreta;

**5XX:** _Erro no servidor_ – o servidor falhou ao concluir a solicitação.

## Principais códigos de erro

Como dito anteriormente, conhecer os principais códigos de erro HTTP vai te ajudar a identificar problemas em suas aplicações, além de permitir que você entenda melhor a comunicação do seu navegador com o servidor da aplicação que está tentando acessar.

### Error 403

O código 403 é o erro “Proibido”. Significa que o servidor entendeu a requisição do cliente, mas se recusa a processá-la, pois o cliente não possui autorização para isso.

### Error 404

Quando você digita uma URL e recebe a mensagem _Error 404_, significa que essa URL não te levou a lugar nenhum. Pode ser que a aplicação não exista mais, a URL mudou ou você digitou a URL errada.

### Error 500

É um erro menos comum, mas de vez em quando ele aparece. Esse erro significa que há um problema com alguma das bases que faz uma aplicação rodar. Esse erro pode ser, basicamente, no servidor que mantém a aplicação no ar ou na comunicação com o sistema de arquivos, que fornece a infraestrutura para a aplicação.

### Error 503

O erro 503 significa que o serviço acessado está temporariamente indisponível. Causas comuns são um servidor em manutenção ou sobrecarregado. Ataques maliciosos, como o DDoS, causam bastante esse problema.

**Uma dica final:** dificilmente conseguimos guardar em nossa cabeça o que cada código significa, portanto, existem sites na internet que possuem todos os códigos e os significados para que possamos consultar quando necessário. Existem dois sites bem conhecidos e utilizados por pessoas desenvolvedoras, um para cada preferência: se você gosta de gatos, pode utilizar o [HTTP Cats](https://http.cat/); já, se prefere cachorros, utilize o [HTTP Dogs](https://http.dog/).

## Transcrição

Padronizamos os retornos para `ResponseEntity` no controller, e para cada operação do CRUD devolver o código HTTP adequado.

> _Header_ do método Cadastro de médico:

|**Name**|**Value**|
|---|---|
|Location|[http://localhost:8080/medicos/6](http://localhost:8080/medicos/6)|
|Content-Type|application/json|
|Transfer-Encoding|chunked|
|Date|Thu, 20 Oct 2022 19:49:00 GMT|

Temos o CRUD e ficamos com a funcionalidade de detalhes de um médico pendente.

O cabeçalho _location_, ao cadastrarmos um médico, ele nos devolve o endereço para acessarmos o recurso criado na API, sendo o `http://localhost:8080/medicos/6`.

No entanto, se criarmos uma nova requisição no Insomnia disparando para esse endereço, vai retornar erro. Vamos simular isso no Insomnia.

Para isso, do lado esquerdo, criaremos mais uma requisição clicando no botão "+". Será exibido uma caixa com as seguintes opções:

- HTTP Request (Ctrl + N)
- Graph Request
- gRPC Request
- New Folder (Ctrl + Shift + N)

Clicaremos na primeira opção "HTTP Request". Perceba que do lado esquerdo foi gerado uma nova aba "`GET` New Request". Como estamos trazendo registros da API, é uma requisição do tipo `GET`.

Na aba "`GET` New Request", digitaremos `"http://localhost:8080/medicos/1"` no campo de endereço, sendo o número 1 o ID.

```bash
http://localhost:8080/medicos/1
```

Se dispararmos essa requisição, por não termos mapeado esse endereço no controller, vai gerar algum problema. Isto é, não temos `/medicos/1` mapeado como requisição do tipo `get`.

Clicando no botão "Send" para testar, perceba que o código devolvido é o `405 Method Not Allowed`. Isso significa que essa URL pode existir, está mapeada no controller.

Voltando ao arquivo `MedicoController`, descendo a página do código, conseguimos visualizar que está mapeado para o método de excluir: `@DeleteMapping("/{id}")`.

```kotlin
// código omitido

**@DeleteMapping("/{id}")**
@Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();

        return ResponseEntity.noContent().build();
    }
```

Por isso, no Insomnia, devolveu o código `405` e não `404`, justamente porque o endereço está mapeado. Porém, para a requisição do tipo `delete`, disparamos a requisição do tipo `get`.

Esse código `405` nos informa que ele aceita somente a requisição do tipo `delete` e não `get` para esse disparo.

Agora, implementaremos a funcionalidade de detalhar os registros dos médicos. Será esse endereço, porém, o tipo da requisição será `get` e não `delete`.

Voltando ao IntelliJ, antes do último fechamento de chaves do arquivo `MedicoController` criaremos o nosso método de detalhar. Podemos até copiar o método `delete` e colar mais para baixo para fazer os ajustes, já que será bem semelhante.

> Método `delete` para fazermos os ajustes.

```kotlin
//código omitido


@DeleteMapping("/{id}")
@Transactional
public ResponseEntity excluir(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();

        return ResponseEntity.noContent().build();
    }
```

Ao invés de `@DeleteMapping` usaremos `@GetMapping` com o complemento `/{id}`. Vamos remover o `@Transactional`, porque é um método de leitura, e alteramos o nome do método para `detalhar`.

```kotlin
//código omitido

@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        medico.excluir();

        return ResponseEntity.noContent().build();
    }
```

Na implementação, precisamos carregar o médico do banco de dados e, por isso, a linha com a variável `medico` permanece e a linha `medico.excluir()` podemos remover.

```kotlin
//código omitido

@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);

        return ResponseEntity.noContent().build();
    }
```

Por fim, no `return` precisamos devolver um conteúdo. Em razão disso, alteramos de `.noContent()` para `.ok()` e removeremos o `.build()`.

```kotlin
//código omitido

@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        return ResponseEntity.ok();
    }
```

Como parâmetro do método `ok()`, criamos um DTO, sendo o mesmo de detalhamento: `new DadosDetalhamentoMedico()`. Em `DadosDetalhamentoMedico()` vamos passar como parâmetro o médico que acabamos de carregar no banco de dados.

```kotlin
//código omitido

@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
        var medico = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoMedico(medico));
    }
```

Já tínhamos tudo implementado, até o DTO `DadosDetalhamentoMedico`. Logo, tivemos somente que usar o mesmo DTO utilizado no cadastro e na atualização.

Note que, eventualmente, podemos reaproveitar um DTO, podendo ser usado em diversos métodos no controller.

Salvaremos essas alterações e voltaremos ao Insomnia. Podemos alterar o nome do arquivo de "_New Request_" para "Detalhar Médico". Basta clicar duas vezes em cima do nome da pasta que deseja alterar.

Em seguida, clicamos no botão "Send" para enviar uma requisição para detalhar o médico. O código devolvido foi o `200 OK`, com os seguintes campos no corpo da resposta:

```json
{
        "id": 1,
        "nome": "Rodrigo Ferreira",
        "email": "rodrigo.ferreira@voll.med",
        "crm": "123456",
        "telefone": "2111112222",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "numero": "1",
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

No caso, se trata sobre os dados do médico que corresponde ao ID número 1.

No endereço, vamos alterar o ID de número 1, para o número 6 após a última barra "/":

```bash
http://localhost:8080/medicos/6
```

Logo após alterarmos, clicaremos no botão "Send". Temos como retorno o código `200 OK` e no corpo da resposta as informações sobre a Juliana.

```json
{
                "id": 6,
        "nome": "Juliana Queiroz",
        "email": "juliana.queiroz@voll.med",
        "crm": "233444",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": null,
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

A funcionalidade de detalhar está funcionando!

Podemos aplicar a mesma lógica para a funcionalidade de pacientes. Inclusive, é uma atividade que vamos deixar para vocês.

Voltaremos ao IntelliJ, no arquivo do controller. Conseguimos fazer as alterações necessárias para a melhoria do nosso código, todos os métodos estão padronizados retornando o `ResponseEntity`.

Além disso, em cada método devolvemos o código HTTP mais adequado para aquela determinada situação. Por exemplo, o código `201` para o cadastro, o código `200` para o método de listagem, atualizar e detalhar e `204` para o método de excluir.

Em cada um desses códigos, podemos ter um corpo da resposta e cabeçalhos do protocolo HTTP.

Deixaremos um [Para saber mais: códigos do protocolo HTTP](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117176), para você ler com mais detalhes sobre esses códigos HTTP.

Assim, conseguimos aplicar a primeira melhoria no código do nosso projeto. Na sequência, faremos outras melhorias.

Te espero no próximo capítulo!

# Faça como eu fiz: ResponseEntity

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117177/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117177/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, implementando o `ResponseEntity`, porém, para as funcionalidades do **CRUD de pacientes**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117177/opinion)

Você precisará alterar todos os métodos da classe `PacienteController` para que eles retornem o objeto `ResponseEntity`, da mesma forma que foi demonstrado na aula para a classe `MedicoController`:

```java
@PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroPaciente dados, UriComponentsBuilder uriBuilder) {
    var paciente = new Paciente(dados);
    repository.save(paciente);

    var uri = uriBuilder.path("/pacientes/{id}").buildAndExpand(paciente.getId()).toUri();
    return ResponseEntity.created(uri).body(new DadosDetalhamentoPaciente(paciente));
}

@GetMapping
public ResponseEntity<Page<DadosListagemPaciente>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
    var page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemPaciente::new);
    return ResponseEntity.ok(page);
}

@PutMapping
@Transactional
public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoPaciente dados) {
    var paciente = repository.getReferenceById(dados.id());
    paciente.atualizarInformacoes(dados);

    return ResponseEntity.ok(new DadosDetalhamentoPaciente(paciente));
}

@DeleteMapping("/{id}")
@Transactional
public ResponseEntity excluir(@PathVariable Long id) {
    var paciente = repository.getReferenceById(id);
    paciente.excluir();

    return ResponseEntity.noContent().build();
}
```

Além disso, você deverá criar mais um método nesse controller, que será responsável por devolver os detalhes de um paciente:

```java
@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
    var paciente = repository.getReferenceById(id);
    return ResponseEntity.ok(new DadosDetalhamentoPaciente(paciente));
}
```

E também precisará criar o DTO `DadosDetalhamentoPaciente`:

```java
public record DadosDetalhamentoPaciente(String nome, String email, String telefone, String cpf, Endereco endereco) { 
    public DadosDetalhamentoPaciente(Paciente paciente) { 
        this(paciente.getNome(), paciente.getEmail(), paciente.getTelefone(), paciente.getCpf(), paciente.getEndereco()); 
    }
} 
```

	## Transcrição

Fizemos as alterações no controller, para devolver os códigos do protocolo HTTP de forma adequada, conforme a funcionalidade. E, também, padronizamos para retornar `Response Entity` nos métodos do controller.

Continuaremos com as melhorias referente à questão do protocolo HTTP e dos códigos HTTP devolvidos. Contudo, agora, vamos analisar outros cenários.

No Insomnia, temos a requisição "Detalhar médico" em que disparamos uma requisição do tipo `get` para o endereço `http://localhost:8080/medicos/6`, passando como parâmetro o ID.

Por exemplo, no caso, temos a médica Juliana Queiroz como sendo a médica correspondente ao ID número 6 do banco de dados. Logo, se dispararmos essa requisição `/medicos/6`, nos retorna o JSON com as informações da Juliana, em "Preview".

```json
{
        "id": 6,
        "nome": "Juliana Queiroz",
        "email": "juliana.queiroz@voll.med",
        "crm": "233444",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": null,
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Porém, e se passarmos um ID que não possui registro no banco de dados após o `medicos/`? Por exemplo, vamos alterar o ID para `6999`.

```bash
http://localhost:8080/medicos/6999
```

Em seguida, clicamos no botão "Send". Note que o código devolvido foi o `500 Internal Server Error` e, em "Preview", temos uma mensagem com os campos `timestamp`, `status`, `error` e `trace`.

```swift
{
    "timestamp": "2022-10-21T17:59:29.080+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "trace":
"jakarta.persistence.EntityNotFoundException: Unable to find med.voll.api.medico.Medico with id 6999\n\tatorg.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderimpl$JpanEntityNoFoundDelegate"

//retorno omitido
}
```

> **Código ou erro 500**: Erro no servidor interno.

No caso, seria um erro na API back-end. Contudo, o que o Spring faz quando ocorre um erro no código do back-end? Por padrão, ele retorna essas informações em formato JSON que podemos visualizar na aba "Preview".

Nas informações do JSON há um objeto com algumas propriedades. A primeira é o `timestamp` que comunica data e hora do erro, o `status` que é o código HTTP `500` e o `error` é o nome do erro referente ao código.

Por fim, a propriedade `trace`, sendo a _stack trace_ do erro - sendo a mesma exibida no console, informando qual a _exception_ que ocorreu. Nesta propriedade, temos a mensagem "_Unable to find med.voll.api.medico.Medico with id 6999_", que significa que o ID que digitamos não existe no banco de dados.

Esse é o JSON devolvido. Porém, não é uma boa prática retornarmos um _stack trace_ para o usuário da API, seja em uma aplicação front-end ou aplicativo mobile que está consumindo a nossa API.

Isso porque estamos expondo informações sensíveis e desnecessárias, o que pode se tornar uma brecha de segurança.

Neste caso da requisição `get`, poderíamos informar somente o status e qual o erro. Vamos aprender a fazer esse tratamento no retorno.

Desejamos padronizar as mensagens devolvidas pela API quando ocorre erro. Há diversas situações de erro que podem ocorrer da nossa API, nem sempre tudo funcionará conforme o esperado.

Por isso, em situações de erros é uma boa prática colocar respostas mais apropriadas para esses cenários.

Para ajustar isso, voltaremos ao Insomnia para analisarmos uma coisa. Perceba que o próprio tratamento do Spring já traz as informações que desejamos, porém, a propriedade `trace` nos devolve dados desnecessários e sensíveis.

O JSON devolvido no Insomnia é o padrão do Spring Boot, mas podemos configurar no projeto para não retornar os dados do campo `trace`.

Voltando ao IntelliJ, no arquivo `application.properties` em "src > main > resources".

> application.properties

```ini
spring.datasource.url=jdbc:mysql://localhost/vollmed_api
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

Neste arquivo, temos as propriedades que configuramos de banco de dados e de gerar o SQL toda vez que a API vai ao banco de dados. Agora, incluiremos mais uma propriedade para o Spring não enviar a _stack trace_ em caso de erro.

Para sabermos quais as propriedades do Spring Boot, **basta consultar a documentação**.

> [Common Application Properties](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)

Na documentação, do lado esquerdo, temos um menu com o agrupamento das propriedades conforme a categoria, como propriedade Web, JPA, TomCat, etc.

Por exemplo, em "_Data properties_", são as propriedades do Spring Data, as propriedades de banco de dados, de controle de transação, entre outras tecnologias referente a dados.

No nosso caso, a propriedade que desejamos está relacionada com **o servidor**. Por isso, clicaremos no item 11 em "_Server Properties_", do lado esquerdo da documentação.

Em "_Server Properties_", temos uma tabela com os campos: _name_, _description_ e _default value_. Nela, temos a propriedades ideal para o nosso caso, sendo a`server.error.include-stacktrace`.

|**Name**|**Description**|**Default Value**|
|---|---|---|
|server.error.include-stacktrace|When to include the "trace" attribute.|never|

Após copiar essa propriedade, voltaremos ao IntelliJ. Nele, colaremos o `server.error.include-stacktrace` com o valor padrão "never", na última linha do arquivo `application.properties`.

> application.properties

```ini
spring.datasource.url=jdbc:mysql://localhost/vollmed_api
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.error.include-stacktrace=never
```

Salvaremos essa configuração e abriremos a aba "Rund", no canto inferior esquerdo. Perceba que ele reiniciou a execução, tudo certo, por enquanto.

Vamos voltar ao Insomnia, na requisição detalhar médico e clicar no botão "Send". Lembrando que no endereço estamos passando o ID de um médico que não existe: `http://localhost:8080/medicos/6999`.

Após clicarmos no botão, note que retornou o código `500 Internal Server Error`, mas que em "Preview" não temos mais o campo `trace`:

```json
{
    "timestamp": "2022-10-21T18:06:01.320+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "message": "Unable to find med.voll.api.medico.Medico with id 6999",
    "path": "/medicos/6999"
}
```

Assim, conseguimos aplicar um tratamento mais apropriado para esse cenário. Caso dê erro `500` na API, devolvemos um JSON (sendo que o próprio Spring fez isso, não escrevemos nenhum código) e somente informamos para não ser exibido o _stack trace_.

O usuário da API precisa saber somente que ocorreu um erro, qual o erro, o endereço que ocorreu e uma mensagem informando o motivo.

Desse modo, configuramos uma melhoria na devolutiva desse erro. Porém, na verdade, esta situação não deveria gerar um código `500`. Se estamos disparando uma requisição com um número de ID inexistente, o código HTTP mais adequado é o `404`.

> **Código ou erro 404:** Recurso não encontrado.

O código `500` ocorreu porque estamos usando o Spring Data, e fazendo uma consulta no banco de dados com a interface _repository_. E o padrão do _Spring Data JPA_ ao passar um ID inexistente é retornar uma _exception_. Assim, ao gerar uma excepction, nos retorna o código ou erro `500`.

Podemos configurar isso no nosso projeto. Em casos de determinadas _exceptions_, não retornar erro `500` e sim o `404`. Vamos personalizar o tratamento de erros na API.

Na sequência, vamos aprender como fazer essa personalização.

Te espero no próximo vídeo!

# Para saber mais: propriedades do Spring Boot

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117179/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117179/question)

Ao longo dos cursos, tivemos que adicionar algumas propriedades no arquivo `application.properties` para realizar configurações no projeto, como, por exemplo, as configurações de acesso ao banco de dados.

O Spring Boot possui centenas de propriedades que podemos incluir nesse arquivo, sendo impossível memorizar todas elas. Sendo assim, é importante conhecer a documentação que lista todas essas propriedades, pois eventualmente precisaremos consultá-la.

Você pode acessar a documentação oficial no link: [Common Application Properties](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html).

## Transcrição

Na aula anterior, tiramos a _stack trace_ do erro `500` que o Spring é responsável pelo tratamento. Porém, neste cenário em específico deveria devolver o código `404`.

Para ajustar isso, voltaremos ao IntelliJ no arquivo `MedicoController`. O método que está sendo chamado nessa requisição é o `detalhar`.

```kotlin
//código omitido

@GetMapping("/{id}")
public ResponseEntity detalhar(@PathVariable Long id) {
       var medico = repository.getReferenceById(id);
       return ResponseEntity.ok(new DadosDetalhamentoMedico(medico));
    }
```

Neste método, ele chama o `repository.getReferenceById(id)`. É justamente nesta linha que está o problema. O método `getReferenceById()`, ao passarmos um ID inexistente na tabela do banco de dados, ele envia uma _exception_ do tipo _EntityNotFoundException_.

E perceba que não fizemos o tratamento, não temos o `try-catch`. Assim, a _exception_ aconteceu nessa linha e foi lançada para o Spring. O Spring, por padrão, se ocorrer uma _exception_ que não foi tratada no código, ele trata como uma exceção gerando o erro `500`.

> Por padrão, exceções não tratadas no código são interpretadas pelo Spring Boot como erro 500.

No caso, não desejamos esse comportamento padrão, queremos que ao dar essa _exception_ em específico, seja devolvido o erro `404`. Uma forma de lidar com essa situação, seria isolar o código do método de detalhar, dentro de um `try-catch`. Faremos a captura da _exception_, e devolveremos o código `404`.

Ao fazermos isso, estamos tratando o erro somente no método de detalhar da classe `MedicoController`. Porém, essa exceção pode acontecer em outros métodos e controllers.

Por isso, ao invés de duplicarmos o `try-catch` no código, podemos usar outro recurso do Spring para isolar esse tipo de tratamento de erros.

A ideia é criarmos uma classe e nela termos o método responsável por tratar esse erro em específico.

Antes disso, faremos um ajuste. No pacote `med.voll.api`, temos quatro sub-pacotes: `controller`, `endereco`, `medico` e `paciente`.

Os sub-pacotes `endereco`, `medico` e `paciente` são referentes ao domínio da aplicação. Portanto, vamos isolar esses três pacotes em um único chamado `domain`.

Para isso, vamos selecionar os três pacotes segurando a tecla "Ctrl" e clicar com o botão direito do mouse. Nas caixas seguintes exibidas, escolhemos as opções "Refactor > Move packages or directories".

Será exibido um pop-up, em que vamos escolher para onde desejamos mover esses três pacotes que selecionamos. Para mover, no final do caminho vamos alterar de "endereco" para "domain".

```bash
/home/rodrigo/Desktop/api/src/main/java/med/voll/api/domain
```

Após isso, podemos clicar no botão "Refactor", no canto inferior direito. Assim, ficamos com as seguintes pastas do lado esquerdo do IntelliJ:

- `med.voll.api`
    - `controller`
    - `domain`

Se clicarmos em "domain", temos:

- `domain`
    - `endereco`
    - `medico`
    - `paciente`

Perceba que o arquivo `MedicoController` está com um sublinhado na cor vermelha. Isso significa que ocorreu um erro no Refactor, nos controllers ele não conseguiu renomear nos _imports_. Perceba que na linha 7 do `import`, ele ainda está apontando para o pacote antigo:

> `MedicoController`

```cpp
import med.voll.api.medico.*;
```

Vamos alterar para:

```cpp
import med.voll.api.domain.medico.*;
```

Faremos o mesmo ajuste no arquivo `PacienteController`.

> `PacienteController`

```cpp
import med.voll.api.paciente.*;
```

Modificaremos para:

```cpp
import med.voll.api.domain.paciente.*;
```

Pronto! Agora a estrutura está mais organizada. No pacote principal temos os pacotes `controller` e o `domain`. Além desses dois pacotes, criaremos um terceiro chamado "infra", em que ficarão os códigos relacionados à infraestrutura.

Para isso, clicamos com o botão direito do mouse na pasta `med.voll.api` e escolhemos a opção "Package". Na caixa exibida digitaremos o nome "infra", que ficará: `med.voll.api.infra` .

Selecionando o pacote `infra`, usaremos o atalho "Alt + Insert" e escolheremos a opção "Java Class". No pop-up exibido, digitaremos "TratadorDeErros", sendo a classe que vai fazer o isolamento do tratamento de erros.

> TratadorDeErros

```kotlin
package med.voll.api.infra;

public class TratadorDeErros {

}
```

Por enquanto, é uma classe em Java e não há nada em Spring. Isto é, o Spring não irá carregar essa classe automaticamente quando recarregarmos o projeto. Para ele carregar essa classe, é necessário termos à anotação `@RestControllerAdvice`.

> TratadorDeErros

```kotlin
package med.voll.api.infra;

import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

}
```

Nesta classe, criaremos um método responsável por lidar com a exceção `EntityNotFoundException`. Para criar o método digitaremos `public void`, que chamaremos de `tratarErro404()` e, depois, abrimos e fechamos chaves ("{}").

> TratadorDeErros

```java
package med.voll.api.infra;

import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        public void tratarErro404() {

        }

}
```

Uma linha anterior ao método, precisamos informar ao Spring para **qual exceção esse método será chamado**. No caso, usaremos à anotação `@ExceptionHandler`.

> TratadorDeErros

```kotlin
package med.voll.api.infra;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler
        public void tratarErro404() {

        }

}
```

Acrescentaremos um abre e fecha parênteses "()" na anotação e dentro vamos especificar a classe exception:

```python
@ExceptionHandler(EntityNotFoundException.class)
```

Código completo até o momento:

> TratadorDeErros

```kotlin
package med.voll.api.infra;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public void tratarErro404() {

        }

}
```

Dessa forma, o Spring sabe que se em qualquer controller do projeto for lançado uma exceção `EntityNotFoundException`, é para chamar o método `tratarErro404()`. E o que devolvermos, é o que será devolvido como resposta na requisição.

Por isso, vamos alterar de `void` para `ResponseEntity`:

> TratadorDeErros

```kotlin
package med.voll.api.infra;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro404() {

        }

}
```

No método `tratarErro404()`, colocaremos um `return ResponseEntity.notFound()`. No final, incluiremos um `.buil()` para ele criar o objeto `Response Entity`.

> TratadorDeErros

```kotlin
package med.voll.api.infra;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro404() {
            return ResponseEntity.notFound().build();
        }

}
```

Note que é simples criar uma classe com métodos que trataram exceções não tratadas no controller. Logo, esse código fica isolado e não precisamos ter `try-catch` nos controllers. Estes nem percebem que há uma classe externa tratando o erro.

Salvaremos o arquivo, e o _DevTools_ já reiniciou a execução. Agora, vamos testar. Para isso, voltaremos ao Insomnia para disparar a requisição de detalhar médico com um ID inexistente, clicando no botão "Send".

> Endereço da requisição detalhar médico: [http://localhost:8080/medicos/6999](http://localhost:8080/medicos/6999)

Perceba que o código devolvido é o `404 Not Found`, escrito em uma caixa na cor laranja do lado direito do botão "Send". Funcionou!

Disparamos a requisição para detalhar o médico, a requisição chamará o `MedicoController`, vai cair na linha `repository.getReferenceById()` e será lançada a _exception_.

Contudo, essa _exception_ não será mais tratada pelo Spring e, sim, na classe `TratadorDeErros` no método `tratarErro404()`. Neste método, comunicamos que é para devolver o código `404`.

É simples termos uma classe para tratar exceções no Spring Boot, deixando o código do controller enxuto. Sem nenhum tratamento de erros.

Assim, temos o tratamento do erro `500` - feito pelo próprio Spring, nós somente configuramos no `application.properties` - e a classe que trata o erro `404`. Podemos ter mais métodos tratando outros códigos de erros.

Na próxima aula, faremos o tratamento do erro `400`, usado quando disparamos uma requisição para cadastrar um médico ou paciente com erros na validação.

Aprenderemos como no próximo vídeo. Te espero lá!

## Transcrição

Por fim, o último erro que vamos tratar na API será o erro `400`. Este código ocorre quando o cliente da nossa API dispara uma requisição com dados inválidos.

> **Código ou erro 400:** indica que o servidor não conseguiu processar uma requisição por erro de validação nos dados enviados pelo cliente.

Voltando ao Insomnia, isso pode acontecer tanto no cadastro de médicos quanto de pacientes.

Vamos clicar em "Cadastro de médico" do lado esquerdo. Neste método temos o endereço `http://localhost:8080/medicos` com o verbo `post`, e no corpo do JSON os seguintes dados:

```perl
{
        "nome": "Renato Amoedo",
        "email": "renato.amoedo@voll.med",
        "crm": "333444",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "cidade": "Brasilia",
            "uf": "DF"
        }
}
```

Estamos usando o _bean validation_ na API para realizar as validações dos campos obrigatórios, entre outros dados.

Logo, se removermos os campos `nome`, `email`, `crm` e `telefone` do JSON e dispararmos a requisição com os campos de `especialidade` e `endereco`, deveria retornar o código `400`.

Isso porque todos os campos excluídos são obrigatórios, como _not null_.

```json
{
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "cidade": "Brasilia",
            "uf": "DF"
        }
}
```

Após essa remoção, clicaremos no botão "Send". Note que foi devolvido o erro `400 Bad Request`. Por padrão, ao acontecer um erro `400`, o Spring faz a integração com o _bean validation_, e roda as validações.

Caso ocorra alguma falha, é devolvido o código 400 e no JSON da resposta nos envia vários campos, como `timestamp`, `status`, `error`, `message`, entre outros campos. Há, também, um objeto chamado `errors`, que contém o array com cada erro de validação ocorrido.

No entanto, esse _array_ possui um objeto complexo com várias informações.

```json
// Retorno omitido

{
        "codes": [
                "NotBlank.dadosCadastroMedico.telefone",
                "NotBlank.telefone",
                "NotBlank.java.lang.string",
                "NotBlank"
        ],

// Retorno omitido

}
```

Temos os nomes das anotações do _bean validation_, o que chegou, qual a mensagem padrão, o código, entre outras informações. Contudo, esse retorno poderia ser mais simplificado.

Podemos retornar um JSON com uma lista dos campos que geraram erro e, para cada campo, devolver qual o campo e a mensagem de erro. Por exemplo: "campo nome é obrigatório", "o e-mail está com formato inválido", etc.

Esses dados bastam para o usuário da nossa API, já que ele saberá qual o campo inválido e o motivo. Esse será o tratamento que faremos na API.

Voltando ao IntelliJ, incluiremos um novo método na classe `TratadorDeErros`.

> `TratadorDeErros`

```kotlin
package med.voll.api.infra;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro404() {
            return ResponseEntity.notFound().build();
        }

}
```

Após o penúltimo fecha chaves do `return` do método `tratarErro404()`, criaremos mais um método chamado `tratarErro400()`.

> `TratadorDeErros`

```typescript
//código omitido

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro404() {
            return ResponseEntity.notFound().build();
        }
        
        public ResponseEntity tratarErro400() {

        }
}
```

Acima do método precisamos ter uma anotação, copiaremos a que consta no método da anotação anterior.

> `TratadorDeErros`

```java
//código omitido

@RestControllerAdvice
public class TratadorDeErros {

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro404() {
            return ResponseEntity.notFound().build();
        }
        
        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity tratarErro400() {

        }
}
```

Agora, qual a exceção que o método `tratarErro400()` vai tratar? Qual a _exception_ que é lançada pelo Spring ou _bean validation_?

Há uma específica para esse erro, do _bean validation_, o `MethodArgumentNotValidException.class`.

> `TratadorDeErros`

```csharp
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400() {

}
```

Essa é a exceção que o _bean validation_ lança quando há campo inválido. Assim, o Spring já sabe que se em alguma requisição ou controller ocorrer uma _exception_ do tipo `Method Argument Not Valid Exception`, é para cair no erro `400`.

No retorno, colocaremos `return ResponseEntity.badRequest().build()`.

> `TratadorDeErros`

```csharp
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400() {
    return ResponseEntity.badRequest().build();

}
```

Bem semelhante ao que montamos no método anterior. Contudo, vamos testar para visualizar o que o Spring nos devolve se deixarmos assim.

Para testar, salvaremos o arquivo e voltaremos ao IntelliJ. No canto inferior esquerdo, clicamos na aba "Run" para verificar se reiniciou. Caso, sim, voltaremos ao Insomnia.

No Insomnia, na requisição "Cadastro de Médico", selecionaremos o botão "Send". Lembrando que removemos alguns campos do JSON para fazermos alguns testes.

Ao dispararmos, nos é devolvido o código `400 Bad Request`. No entanto, em "Preview", não retornou nenhum dado, somente a mensagem "_No body returned for response_". Conseguimos fazer o tratamento personalizado, mas faltou o corpo da resposta.

Isso porque quando o cliente recebe o erro da API, é exibido o erro `400` informando que é um dado inválido, mas não especificamos qual. Neste erro, nós precisamos retornar alguns dados no corpo.

Para isso, voltaremos ao IntelliJ. Para levar um corpo com as informações, no método `tratarErro400()`, precisamos passar o objeto que desejamos retornar no parênteses do `bad request()`.

Porém, diferente do código `404`, no `400` é necessário sabermos quais erros ocorreram. Portanto, precisamos capturar a exceção lançada, pois é nela que teremos acesso a quais campos estão inválidos conforme as regras do _bean validation_.

Para isso, na assinatura do método `tratarErro400()`, receberemos como parâmetro a _exception_ lançada. Essa exceção deve ser a mesma da anotação, podemos copiá-la.

Logo após, colaremos no parênteses do método `tratarErro400()` e depois nomearemos o parâmetro de `ex` (abreviação de exception).

> `TratadorDeErros`

```java
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {

    return ResponseEntity.badRequest().build();

}
```

Se quisermos, podemos receber a _exception_ lançada no método que estamos tratando o erro, basta declarar como parâmetro na assinatura do método.

Para capturar os erros que ocorreram no _bean validation_,

Esse objeto _exception_ possui um método que retorna a lista com os campos inválidos. Vamos colocar isso em uma variável chamada `erros` dentro do método, antes do `return`.

> `TratadorDeErros`

```java
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {
    var erros = ex.getFieldErrors();
    return ResponseEntity.badRequest().build();

}
```

O `get field errors()` lista cada erro ocorrido em cada campo. E esse é o objeto que desejamos retornar no corpo da resposta. Porém, vamos verificar o que acontece se devolvermos esse objeto de forma direta.

Guardamos o `getFieldErrors` na variável `erros`, e para enviar um corpo na resposta incluímos o `.body()` no `return`. No método `body()` passamos a lista de `erros`, e podemos remover o `.build()`, já que o _body_ nos retorna o objeto `ResponseEntity`.

> `TratadorDeErros`

```java
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {
    var erros = ex.getFieldErrors();

    return ResponseEntity.badRequest().body(erros);

}
```

Após essas alterações, salvaremos o arquivo. Se devolvermos essa lista no corpo da resposta, ele nos devolve o código 400 com um JSON na resposta.

Para testar, voltaremos ao Insomnia e clicaremos no botão "Send", do método "Cadastro de Médico". Note que nos retornou o código `400 Bad Request`, com um corpo em "Preview".

> Preview

```json
[
    {
    "codes": [
    "NotBlank.dadosCadastroMedico.nome",
    "NotBlank.nome",
    "NotBlank.java.lang.String",
    "NotBlank"
    ],
    
    //retorno omitido
    
    }
]
```

Todavia, é o mesmo JSON que foi devolvido anteriormente, com informações desnecessárias. No caso, desejamos retornar somente o nome do campo e a mensagem.

Para isso, vamos personalizar aquela lista, transformando-a em um DTO. Assim como fizemos na listagem de médicos, precisaremos criar um DTO que contém somente os campos e as mensagens. E teremos que converter a lista do _bean validation_, para a lista do nosso DTO.

> DTO: _data transfer object_, em português, objeto de transferência de dados.

Voltaremos ao IntelliJ para criar o DTO _record_. Contudo, ao invés de criarmos em um arquivo separado, montaremos dentro da classe `TratadorDeErros`.

Isso porque vamos usar o DTO somente dentro dessa classe. Logo, podemos criar como um _record_ interno. Para isso, após o fechamento de chaves do método `tratarErro400`, vamos declarar o _record_ chamado `DadosErroValidacao()`.

> `TratadorDeErros`

```csharp
//código omitido

private record DadosErroValidacao() {

}
```

No caso, o DTO terá somente dois parâmetros: campo e mensagem.

> `TratadorDeErros`

```csharp
//código omitido

private record DadosErroValidacao(String campo, String mensagem) {

}
```

Agora, no `body` do método `tratarErro400` não passaremos mais a lista de `erros`, precisamos convertê-la para uma lista de dados, erro e validação.

No parêntese do `body` passaremos `erros.stream().map()`, vamos chamar os recursos do Java 8 para convertemos uma lista para outra. Essa parte solicita para erros me dê um _stream_ e mapeie cada objeto `FieldError` para um objeto `DadosErroValidacao`.

Em `DadosErroValidacao` acrescentamos `::new` para chamar o construtor. Por fim, usaremos o método `.toList()` para convertermos para uma lista.

> `TratadorDeErros`

```java
//código omitido

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {
    var erros = ex.getFieldErrors();

    return ResponseEntity.badRequest().body(erros.stream().map(DadosErroValidacao::new).toList());

}
```

Perceba que abaixo de "DadosErroValidacao" do retorno, temos uma linha na cor vermelha. Isso quer dizer que tivemos um erro de compilação, isso acontece porque no nosso DTO `DadosErroValidacao` precisaremos incluir outro construtor que receberá o objeto `FieldError`.

Para isso, vamos declarar um construtor em `record`. Na linha seguinte colocaremos `public DadosErroValidacao()` que vai receber um objeto do tipo `FieldError` chamado `erro`.

```csharp
//código omitido

private record DadosErroValidacao(String campo, String mensagem) {
        public DadosErroValidacao(FieldError erro) {
        
        }
}
```

Na próxima linha, chamaremos o construtor padrão do `record` passando `erro.getField()` e `erro.getDefaultMessage()`.

- **erro.getField()**: nos devolve o nome do campo
- **erro.getDefaultMessage()**: nos devolve a mensagem para um campo específico.

```scss
//código omitido

private record DadosErroValidacao(String campo, String mensagem) {
        public DadosErroValidacao(FieldError erro) {
            this(erro.getField(), erro.getDefaultMessage());
        }
}
```

Perceba que o método `tratarErro400` está compilando, agora.

Deste modo, conseguimos converter a lista de `FieldError` para uma lista de `DadosErroValidacao`. Podemos salvar e voltar ao Insomnia para disparar uma requisição no método "Cadastro de Médico".

Note que temos o código `400 Bad Request`, com o seguinte corpo na resposta:

```json
[
    {
    "campo": "telefone",
    "mensagens": "must not be blank"
    },
    {
    "campo": "email",
    "mensagens": "must not be blank"
    },
        {
    "campo": "nome",
    "mensagens": "must not be blank"
    },
        {
    "campo": "crm",
    "mensagens": "must not be blank"
    }
]
```

Temos um array com cada campo inválido e sua respectiva mensagem.

Vamos tentar cadastrar um médico, incluindo os campos que removemos anteriormente e alterando os campos nome, email e crm para:

```perl
{
        "nome": "Bruna Silva",
        "email": "bruna.silva@voll.med",
        "crm": "124580",
        "telefone": "61999998888",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Agora, clicaremos no botão "Send". Foi devolvido o código `201 Created`, com o seguinte corpo da resposta:

```json
{
        "id": 7,
        "nome": "Bruna Silva",
        "email": "bruna.silva@voll.med",
        "crm": "124580",
        "telefone": "2111112222",
        "especialidade": "ORTOPEDIA",
        "endereco": {
            "logradouro": "rua 1",
            "bairro": "bairro",
            "cep": "12345678",
            "numero": null,
            "complemento": null,
            "cidade": "Brasil",
            "uf": "DF"
        }
}
```

Pronto! Tudo certo.

Se removermos o campo `crm` do JSON e clicarmos no botão "Send", temos:

```json
[
    {
    "campo": "crm",
    "mensagens": "must not be blank"
    }
]
```

Tudo funcionou conforme o esperado.

Conseguimos aplicar mais um tratamento de erro, em que devolvemos um JSON simplificado para facilitar a leitura do usuário da nossa API.

O usuário dispara a requisição, e se tiver algum dado inválido ele recebe o erro `400`, com o campo e a mensagem na resposta.

Na sequência, seguiremos desenvolvendo o nosso projeto.

Até mais!

# Para saber mais: mensagens em português

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/122117/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/122117/question)

Por padrão o Bean Validation devolve as mensagens de erro em inglês, entretanto existe uma tradução dessas mensagens para o português já implementada nessa especificação.

No protocolo HTTP existe um cabeçalho chamado **Accept-Language**, que serve para indicar ao servidor o idioma de preferência do cliente disparando a requisição. Podemos utilizar esse cabeçalho para indicar ao Spring o idioma desejado, para que então na integração com o Bean Validation ele busque as mensagens de acordo com o idioma indicado.

No Insomnia, e também nas outras ferramentas similares, existe uma opção chamada **Header** que podemos incluir cabeçalhos a serem enviados na requisição. Se adicionarmos o header **Accept-Language** com o valor **pt-br**, as mensagens de erro do Bean Validation serão automaticamente devolvidas em português.

![Aba Header no Isomnia contendo os cabeçalhos da requisição, incluindo o cabeçalho Accept-Language](https://cdn1.gnarususercontent.com.br/1/4341/6edf91fb-3e5d-4b24-97bb-e93052438bb0.png)

Obs: O Bean Validation tem tradução das mensagens de erro apenas para alguns poucos idiomas.

# Para saber mais: personalizando mensagens de erro

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117181/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117181/question)

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

# Faça como eu fiz: RestControllerAdvice

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117182/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117182/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, criando uma classe responsável por tratar as _exceptions_ que podem ocorrer nas classes Controller.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117182/opinion)

Você precisará criar uma classe similar a esta:

```java
@RestControllerAdvice
public class TratadorDeErros {

@ExceptionHandler(EntityNotFoundException.class)
public ResponseEntity tratarErro404() {
    return ResponseEntity.notFound().build();
}

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {
    var erros = ex.getFieldErrors();
    return ResponseEntity.badRequest().body(erros.stream().map(DadosErroValidacao::new).toList());
}

private record DadosErroValidacao(String campo, String mensagem) {
    public DadosErroValidacao(FieldError erro) {
        this(erro.getField(), erro.getDefaultMessage());
    }
}
}
```

Além disso, você também deve adicionar a seguinte propriedade no arquivo `application.properties`, para evitar que a stacktrace da exception seja devolvida no corpo da resposta:

```ini
server.error.include-stacktrace=never
```

## Transcrição

Agora que implementamos algumas boas práticas na API, continuaremos com o estudo de outras funcionalidades que realizaremos no projeto.

O foco desta aula será na parte de **segurança**. Até o momento, não lidamos com essa questão de controle de acesso, autenticação, autorização, entre outras funcionalidades.

Vamos apresentar alguns conceitos e diagramas antes de iniciarmos a parte do código.

### Spring Security

O Spring contém um módulo específico para tratar de segurança, conhecido como **Spring Security**.

Para usarmos no Spring Boot, também vamos utilizar esse mesmo módulo, que já existia antes do Boot, o Spring Security, sendo um módulo dedicado para tratarmos das questões relacionadas com segurança em aplicações.

Essas aplicações podem ser tanto Web quanto uma API Rest, este último sendo o nosso caso. Portanto, esse módulo é completo e contém diversas facilidades e ferramentas para nos auxiliar nesse processo de implementar o mecanismo de autenticação e autorização da aplicação ou API.

Vamos entender o que é o **Spring Security**.

### Objetivos

- Autenticação
- Autorização (controle de acesso)
- Proteção contra-ataques (CSRF, clickjacking, etc.)

Em suma, o Spring Security possui três objetivos. Um deles é providenciar um serviço para customizarmos como será o controle de **autenticação** no projeto. Isto é, como os usuários efetuam login na aplicação.

Os usuários deverão preencher um formulário? É autenticação via token? Usa algum protocolo? Assim, ele possui uma maior flexibilidade para lidar com diversas possibilidades de aplicar um controle de autenticação.

O Spring Security possui, também, a **autorização**, sendo o controle de acesso para liberarmos a requisição na API ou para fazermos um controle de permissão.

Por exemplo, temos esses usuários e eles possuem a permissão "A", já estes usuários possuem a permissão "B". Os usuários com a permissão "A" podem acessar as URLs, os que tiverem a permissão "B", além dessas URLs, podem acessar outras URLs.

Com isso, conseguimos fazer um controle do acesso ao nosso sistema.

Há, também, um mecanismo de proteção contra os principais ataques que ocorre em uma aplicação, como o CSRF (_Cross Site Request Forgery_) e o clickjacking.

São esses os três principais objetivos do Spring Security, nos fornecer uma ferramenta para implementarmos autenticação e autorização no projeto e nos proteger dos principais ataques. Isso para não precisarmos implementar o código que protege a aplicação, sendo que já temos disponível.

No caso da nossa API, o que faremos é o controle de autenticação e autorização, o **controle de acesso**.

Até o momento, não nos preocupamos com essas questões de segurança. Logo, a nossa API está pública. Isso significa que qualquer pessoa que tiver acesso ao endereço da API, consegue disparar requisições, assim como fizemos usando o Insomnia.

Sabemos o endereço da API, no caso é `localhost:8080` - dado que está rodando local na máquina. Porém, após efetuarmos o _deploy_ da aplicação em um servidor, seria o mesmo cenário: caso alguém descubra a endereço, conseguirá enviar requisição para cadastrar um médico ou paciente, etc.

O projeto não deveria ser público, somente os funcionários da clínica deveriam ter acesso. Claro que eles utilizarão o front-end ou aplicativo mobile, mas essas aplicações de clientes irão disparar requisições para a nossa API back-end, e esta deve estar protegida.

A API back-end não deve ser pública, ou seja, receber requisições sem um controle de acesso. A partir disso, entra o Spring Security para nos auxiliar na proteção dessa API no back-end.

> **ATENÇÃO!**

> Autenticação em aplicação Web (Stateful) **!=** Autenticação em API Rest (Stateless)

Um detalhe importante é que no caso dos cursos de Spring Boot, estamos desenvolvendo uma API Rest, não uma aplicação Web tradicional.

Essas aplicações desenvolvidas em Java usando o Spring, com o Spring MVC (_Model-View-Controller_) ou JSF (_JavaServer Faces_). A nossa ideia é desenvolvermos só o back-end, o front-end é separado e não é o foco deste curso.

O processo de autenticação em uma aplicação Web tradicional **é diferente** do processo de autenticação em uma API Rest. Em uma aplicação Web, temos um conceito chamado de _stateful_.

Toda vez que um usuário efetua o login em uma aplicação Web, o servidor armazena o estado. Isto é, cria as sessões e, com isso, consegue identificar cada usuário nas próximas requisições.

Por exemplo, esse usuário é dono de determinada sessão, e esses são os dados de memória deste usuário. Cada usuário possui um espaço na memória. Portanto, o servidor armazena essas sessões, espaços em memória e cada sessão contém os dados específicos de cada usuário.

Esse é o conceito de **_Stateful_**, é mantido pelo servidor.

Porém, em uma API Rest, não deveríamos fazer isso, porque um dos conceitos é que ela seja **_stateless_**, não armazena estado. Caso o cliente da API dispare uma requisição, o servidor processará essa requisição e devolverá a resposta.

Na próxima requisição, o servidor não sabe identificar quem é que está enviando, ele não armazena essa sessão. Assim, o processo de autenticação funciona um pouco diferente, caso esteja acostumado com a aplicação Web.

Como será o processo de autenticação em uma API? Temos diversas estratégias para lidarmos com a autenticação. Uma delas é usando **Tokens**, e usaremos o _JWT - JSON Web Tokens_ como protocolo padrão para lidar com o gerenciamento desses tokens - geração e armazenamento de informações nos tokens.

![Diagrama de autenticação intitulado "Autenticação". À esquerda, temos um protótipo de uma tela de login no celular com os campos "Login" e "Senha" e um botão "Entrar", na parte inferior central. Este está acompanhado do texto "APP Cliente Front-end/Mobile", abaixo. No centro, um quadrado com o texto "API Rest Backend" acompanhado da numeração 3 e do texto "Gerar Token JWT" abaixo e, à direita, um ícone de banco de dados, com o texto "Banco de dados" contido nele. Os elementos ligam-se entre si com setas e possuem numeração: a tela de login liga-se e aponta para "API Rest", referente a seta número 1 nomeada "HTTP Request". "API Rest Backend" aponta para a tela de login, referente a seta número 4, nomeada "Devolver Token JWT". "API Rest Backend" se liga e aponta para o "Banco de dados", referente a seta número 2 acompanhada do texto "SQL Select". Entre as setas número 1 e 4 há um trecho de um código com os campos login e senha: {"login":"fulano@email.com" "senha": "12345678"}.](https://cdn1.gnarususercontent.com.br/1/723333/8fbad164-5b03-4efc-914a-d6736307788d.png)

Esse diagrama contém um esquema do processo de autenticação na API. Lembrando que estamos focando no back-end, e não no front-end. Esta será outra aplicação, podendo ser Web ou Mobile.

No diagrama, o cliente da API seria um aplicativo mobile. Assim, quando o funcionário da clínica for abrir o aplicativo, será exibida uma tela de login tradicional, com os campos "Login" e "Senha" com um botão "Entrar", para enviar o processo de autenticação.

O usuário digita o login e senha, e clica no botão para enviar. Deste modo, a aplicação captura esses dados e dispara uma requisição para a API back-end - da mesma forma que enviamos pelo Insomnia.

Logo, o primeiro passo é a requisição ser disparada pelo aplicativo para a nossa API, e no corpo desta requisição é exibido o JSON com o login e senha digitados na tela de login.

O segundo passo é capturar esse login e senha e verificar se o usuário está cadastrado no sistema, isto é, teremos que consultar o banco de dados. Por isso, precisaremos ter uma tabela em que vamos armazenar os usuários e suas respectivas senhas, que podem acessar a API.

Da mesma maneira que temos uma tabela para armazenar os médicos e outra para os pacientes, teremos uma para guardar os usuários. Logo, o segundo passo do processo de autenticação é: a nossa API capturar esse login e senha, e ir ao banco de dados efetuar uma consulta para verificar a existência dos dados desse usuário.

Se for válido, a API gera um Token, que nada mais é que uma string. A geração desse Token segue o formato JWT, e esse token é devolvido na resposta para a aplicação de cliente, sendo quem disparou a requisição.

Esse é o processo de uma requisição para efetuar o login e autenticar em uma API Rest, usando tokens. Será esse processo que seguiremos neste curso.

Isto é, teremos um controller mapeando a URL de autenticação, receberemos um DTO com os dados do login e faremos uma consulta no banco de dados. Se tiver tudo certo, geramos um token e devolvemos para o front-end, para o cliente que disparou a requisição.

Esse token deve ser armazenado pelo aplicativo mobile/front-end. Há técnicas para guardar isso de forma segura, porque esse token que identifica se o usuário está logado.

Assim, nas requisições seguintes entra o processo de autorização, que consta no diagrama a seguir:

![Diagrama de autorização intitulado "Autorização". À esquerda, temos um protótipo de uma tela no celular com os campos "Login" e "CRM" e um botão "Salvar", na parte inferior central. Este está acompanhado do texto "APP Cliente Front-end/Mobile", abaixo. À direita, temos um quadrado com o texto "API Rest Backend". A tela de celular liga-se ao quadrado "API Rest Backend" por uma seta com a numeração 1 e o texto "HTTP Request". "API Rest Backend" liga-se à tela com uma seta. Entre essas setas há um trecho do header e do body. Sendo o header: authorization: Bearer Token_JWT, e body: {"nome":"Fulano Silva" "crm":"000111"}. Abaixo de "API Rest Backend" temos a numeração 2 e o texto "Validar Token JWT", que possui uma seta apontando para um fluxograma estruturado por um losango de decisão com o escrito "3 Token validado?". Esse losango possui duas setas, uma apontando para a direita e outra para a esquerda. A seta direcionada para a esquerda possui o texto "Não" e aponta para um retângulo com o escrito "Bloquear requisição". A seta direcionada para a direita contém o texto "Sim" e aponta para um retângulo com o texto "Liberar requisição".](https://cdn1.gnarususercontent.com.br/1/723333/b60aa0dd-bdaa-4dfa-bb3d-469ff5220ec7.png)

Na requisição de cadastrar um médico, o aplicativo exibe o formulário de cadastro de médico - simplificamos no diagrama, mas considere que é um formulário completo - e após preenchermos os dados, clicamos no botão "Salvar".

Será disparada uma requisição para a nossa API - da mesma forma que fizemos no Insomnia. No entanto, além de enviar o JSON com os dados do médico no corpo da resposta, a requisição deve incluir um cabeçalho chamado _authorization_. Neste cabeçalho, levamos o token obtido no processo anterior, de login.

A diferença será essa: todas as URLs e requisições que desejarmos proteger, teremos que validar se na requisição está vindo o cabeçalho _authorization_ com um token. E precisamos validar este token, gerado pela nossa API.

Portanto, o processo de autorização é: primeiro, chega uma requisição na API e ela lê o cabeçalho authorization, captura o token enviado e valida se foi gerado pela API. Teremos um código para verificar a validade do token.

Caso não seja válido, a requisição é interrompida ou bloqueada. Não chamamos o controller para salvar os dados do médico no banco de dados, devolvemos um erro `403` ou `401`. Há protocolos HTTP específicos para esse cenário de autenticação e autorização.

Pelo fato do token estar vindo, o usuário já está logado. Portanto, o usuário foi logado previamente e recebeu o token. Este token informa se o login foi efetuado ou não. Caso seja válido, seguimos com o fluxo da requisição.

O processo de autorização funciona assim justamente porque a nossa API deve ser _Stateless_. Ou seja, não armazena estado e não temos uma sessão informando se o usuário está logado ou não. É como se em cada requisição tivéssemos que logar o usuário.

Todavia, seria incomum enviar usuário e senha em todas as requisições. Para não precisarmos fazer isso, criamos uma URL para realizar a autenticação (onde é enviado o login e senha), e se estiver tudo certo a API gera um token e devolve para o front-end ou para o aplicativo mobile.

Assim, nas próximas requisições o aplicativo leva na requisição, além dos dados em si, o token. Logo, não é necessário mandar login e senha, somente o token. E nesta string, contém a informação de quem é esse usuário e, com isso, a API consegue recuperar esses dados.

Essa é uma das formas de fazer a autenticação em uma API Rest.

Caso já tenha aprendido a desenvolver uma aplicação Web tradicional, o processo de autenticação em uma API Rest é diferente. Não possui o conceito de sessão e cookies, é stateless - cada requisição é individual e não armazena o estado da requisição anterior.

Como o servidor sabe se estamos logados ou não? O cliente precisa enviar alguma coisa para não precisarmos enviar login e senha em toda requisição. Ele informa o login e a senha na requisição de logar, recebe um token e nas próximas ele direciona esse mesmo token.

Nas próximas aulas adicionaremos o Spring Security, e implementar esse conceito de autenticação e autorização analisando cada detalhe no Spring Boot.

Até mais!

#   
Para saber mais: tipos de autenticação em APIs Rest

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117184/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117184/question)

Existem diversas formas de se realizar o processo de autenticação e autorização em aplicações Web e APIs Rest, sendo que no curso utilizaremos **_Tokens JWT_**.

Você pode conferir as principais formas de autenticação lendo este artigo: [Tipos de autenticação](https://www.alura.com.br/artigos/tipos-de-autenticacao).

## Transcrição

Agora que entendemos como funciona o processo de autenticação e autorização, começaremos a utilizar o Spring Security.

Com o projeto aberto no IntelliJ, a primeira etapa que precisamos fazer é adicionar o Spring Security no projeto. Ao criá-lo no site do Spring Initializr, não adicionamos as dependências do Spring Security.

À esquerda do IntelliJ, clicaremos no arquivo `pom.xml`. Perceba que não consta nenhuma dependência referente ao Spring Security, para adicioná-la abriremos o navegador no site do [Spring Initializr](https://start.spring.io/) .

Em "_Project_" estamos com "_Maven Project_" selecionado, na seção "_Language_" estamos com "Java" e em "Spring Boot" estamos com a versão "3.0.0(RCI)". Pode ser que no momento em que estiver assistindo a este vídeo, a versão `3.0.0` esteja finalizada.

Não preencheremos os outros campos do lado esquerdo. À direita, em "_Dependencies_", clicaremos no botão "_Add dependencies_" ou podemos usar o atalho do teclado "Ctrl + B". Será mostrada uma pop-up, em digitaremos "_security_" na caixa de texto, na parte superior. Selecionaremos a opção "Spring Security".

Perceba que a pop-up fechou e a dependência já foi adicionada em "_Dependencies_". Após isso, clicaremos no botão "_Explore_" na parte inferior central, ou podemos usar o atalho "Ctrl + Space".

É exibido o arquivo `pom.xml` do projeto que estamos criando agora. Descendo o código até a parte de dependências, note que foi incluída duas dependências: o `spring-boot-starter-security` e o `spring-security-test`.

> pom.xml

```javascript
//código omitido

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-test</artifactId>
    <scope>test</scope>
</dependency>

//código omitido
```

Precisaremos das duas, copiaremos primeiro a `spring-boot-starter-security` completa, voltaremos ao IntelliJ e colaremos após a última dependência `mysql-connector-java`. Isso antes de fechar a tag `dependencies`.

Após isso, voltaremos ao site do Spring Initializr e copiaremos a dependência `spring-security-test`. Em seguida, vamos voltar ao IntelliJ, selecionaremos "Enter" para dar um espaço antes de fechar a tag e colaremos a dependência.

Podemos salvar o arquivo `pom.xml` do projeto.

Como estamos alterando as dependências do projeto, o ideal é pararmos de rodar a aplicação. Para isso, clicaremos no botão vermelho "■" na parte superior direita ou podemos usar o atalho "Ctrl + F12".

Para garantir que as dependências do Maven foram baixadas com sucesso, selecionaremos "Maven" no canto superior direito, escrito verticalmente.

Será exibida uma aba, em que clicaremos no primeiro ícone de _reload_ "⟳" no canto superior esquerdo, para recarregarmos todos os projetos do Maven.

É sempre bom fazer esse processo para garantir que o Maven baixou as dependências corretamente no projeto.

Agora, iniciaremos o projeto clicando no botão com um ícone de play "▶", na parte superior. Vamos verificar se algo foi alterado após incluirmos o módulo de segurança abrindo a aba "Run", no canto inferior esquerdo.

Analisando os logs, perceba que no final foi gerado uma linha que antes não era exibida no retorno.

> Linha selecionada pelo instrutor:

> _Using generated security password_: 520dbc8a-b02a-44dq-a259-0afdb628a93c

Ele nos informa que gerou uma senha aleatória: "Usando a senha de segurança gerada". E em seguida nos passa a senha.

Na linha seguinte é comunicado que essa senha gerada é somente para ambiente de desenvolvimento, e que não devemos usar em ambiente de produção:

> Linha selecionada pelo instrutor:

> _This generated password is for development use only. Your security configuration must be updated before running your application in production_ ("Essa senha gerada é apenas para uso de desenvolvimento. Sua configuração de segurança deve ser atualizada antes de executar seu aplicativo em produção")

Mais para frente vamos entender qual é esse usuário e senha gerado para nós usarmos em ambientes de desenvolvimento.

Ao adicionarmos o Spring Security como dependência do projeto, ele gera uma configuração padrão, criando um usuário e senha e exibindo no log. E, também, faz uma alteração no projeto, bloqueando todas as requisições.

Se tentarmos enviar qualquer requisição na API, ela será bloqueada e será gerado um erro. Além disso, seremos redirecionados para uma tela de login do Spring Security. Vamos verificar isso acontecendo?

Voltaremos ao Insomnia para disparar a requisição de listagem de médicos. No endereço, temos:

```bash
http://localhost:8080/medicos
```

Após verificar o endereço, clicaremos no botão "Send". Nos devolveu o código `401 Unauthorized`, e em "Preview", temos a mensagem: "_No body returned for response_" ("Nenhum corpo retornou para resposta").

Isto é, tentamos disparar uma requisição para a URL `/medicos`, mas está tudo bloqueado e não estamos logados. Por isso, não temos autorização para disparar essa requisição.

Isso acontece com qualquer URL. Por exemplo, na requisição "Detalhar Médico", se clicarmos no botão "Send", também, nos retorna o código `401 Unauthorized`.

Todas as requisições estão sendo bloqueadas pelo Spring Security. Portanto, esse é o comportamento padrão do Spring Security ao adicioná-lo como dependência no projeto, ele bloqueia tudo e gera uma senha aleatória.

Onde podemos usar essa senha gerada? Vamos disparar a requisição pelo navegador, agora. Por ele conseguimos analisar melhor.

> URL do navegador:

```bash
http://localhost:8080/medicos
```

Ao clicarmos na tecla "Enter" é exibida uma tela de Login, com a frase "_Please sign in_" ("Por favor, inscreva-se") e os campos username e password. Abaixo, um botão azul "_Sign in_", centralizado.

Somos redirecionados para esse formulário, sendo do próprio Spring Security. Assim, esse é o padrão: bloquear todas as URLs e se tentarmos acessar do navegador, ele bloqueia e nos redireciona para o formulário de login.

Para efetuar esse login, vamos voltar ao IntelliJ e copiar a senha gerada no console, usando o atalho "Ctrl + C".

> Linha selecionada pelo instrutor para copiar a senha:

> _Using generated security password_: 520dbc8a-b02a-44dq-a259-0afdb628a93c

Após copiarmos a senha, colaremos no campo _password_ do formulário. Por padrão, o Spring gera um usuário chamado `user`, por isso, no campo _username_ digitamos "user".

> Please sign in

- Username: user
- Password: 520dbc8a-b02a-44dq-a259-0afdb628a93c

Esse é o usuário padrão para acessarmos o formulário. Já a senha, cada vez que o projeto for reiniciado, será gerada uma nova senha no console.

Clicaremos no botão "_Sign in_". Ao entrarmos no sistema, percebemos que a lista de médicos foi liberada e exibida em um JSON. Tivemos que nos autenticar previamente .

> JSON exibido após efetuar o login:

```less
content:

0:

    id: 7
    nome: "Bruna Silva"
    email: "bruna.silva@voll.med"
    crm: "1234580"
    especialidade: "ORTOPEDIA"
    
1:

    id: 6
    nome: "Juliana Queiroz"
    email: "juliana.queiroz@voll.med"
    crm: "233444"
    especialidade: "ORTOPEDIA"
    
//retorno omitido
```

Portanto, esse é o comportamento padrão do Spring Security: ele bloqueia todas as URLs, disponibiliza um formulário de login - que e possui um usuário padrão chamado _user_ e a senha devemos copiar do console ao inicializar o projeto.

Contudo, no nosso projeto não é exatamente isso que desejamos. Esse comportamento padrão funciona para aplicações Web, que trabalha no modelo de _stateful_. Porém, estamos trabalhando com uma API Rest, em que a autenticação será feita no modelo _stateless_.

Não teremos esse formulário de login no back-end, isso é responsabilidade do front-end ou do aplicativo mobile.

Portanto, vamos precisar realizar algumas configurações, e alterar esse mecanismo padrão do Spring Security. Isso para implementarmos o nosso mecanismo de autenticação personalizado no projeto.

Na sequência, iniciaremos essas mudanças. Até mais!

## Transcrição

Na aula anterior, entendemos o comportamento padrão do Spring Security ao ser adicionado no projeto. Neste vídeo, vamos implementar as alterações que desejamos nesse comportamento padrão.

São diversas coisas que precisamos implementar, conforme o diagrama que vimos anteriormente do processo de autenticação e autorização, usando tokens.

Para autenticar o usuário na API, precisamos ter uma tabela no banco de dados em que serão armazenados os usuários e suas respectivas senhas. Essa é uma das modificações que vamos fazer no projeto.

Além da tabela de médicos e pacientes, incluiremos uma de usuário. Precisamos representar esse conceito de usuário no código, como estamos usando a JPA, criaremos uma entidade JPA para simbolizar esse usuário e temos que gerar a tabela no banco de dados. Faremos isso usando as **_migrations_** já existentes no projeto.

Para criarmos a entidade JPA, vamos em "src > main > java > med.voll.api > domain", na pasta `domain` ficam os dados relacionados ao domínio da aplicação.

para criar um pacote para guardar essas classes e conceitos referentes ao usuário.

Agora, criaremos um pacote para guardar essas classes e conceitos referentes ao usuário.

Para isso, vamos selecionar o pacote `domain`, e depois usamos o atalho "Alt + Insert". Será exibida uma aba com algumas opções, dentre elas escolheremos a "_Package_" e na aba seguinte digitaremos "usuario". Assim, ficamos com o seguinte pacote: `med.voll.api.domain.usuario`.

Selecionaremos a tecla "Enter", para salvar. Agora, dentro do pacote `usuario` criaremos uma classe. Com esse objetivo, selecionamos o pacote `usuario` e depois as teclas "Ctrl + Insert".

Na aba exibida, vamos clicar na opção "_Java Class_". Após isso, será mostrado um pop-up em que digitaremos o nome da classe, no caso será somente "Usuario". Podemos selecionar "Enter" novamente, para criar.

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

public class Usuario {

}
```

A classe foi criada, por ser uma entidade JAP terá as mesmas anotações e atributos. Da mesma forma quando mapeamos a entidade médico.

No caso do usuário, será necessário somente três atributos: `id`, `login` e `senha`. Toda tabela possui um ID (chave primária) e, portanto, devemos incluir na entidade também.

Por esse motivo, dentro da classe `Usuario` colocaremos: `private Long id;`. O usuário possui somente duas informações: login e senha. Ambos são _strings_, ou seja, texto.

Para adicionarmos esses campos, na linha seguinte do `id` digitaremos `private String login;` e na próxima linha colocamos a senha: `private String senha;`.

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

public class Usuario {

    private Long id;
    private String login;
    private String senha;

}
```

São esses os atributos necessários para o objeto usuário. Agora, vamos inserir as anotações do JPA e do Lombok, para gerarmos os _getters_ e _setters_, construtores, entre outras coisas.

Para facilitar, clicaremos no arquivo `Medico` que se encontra em "src > main > java > med.voll.api > domain > medico". Nele, copiaremos as anotações nas linhas iniciais:

> `Medico:`

```less
//código omitido

@Table(name = "medicos")
@Entity(name = "Medico")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

//código omitido
```

Após copiar, voltaremos ao arquivo `Usuario` e colocaremos em cima da classe. Perceba que apareceram diversos `imports` no início do código.

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "medicos")
@Entity(name = "Medico")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Usuario {

    private Long id;
    private String login;
    private String senha;

}
```

Porém, ainda precisamos adaptar. Na anotação `@Table`, no parâmetro `name` não colocaremos a tabela de médicos e sim de usuários.

```kotlin
@Table(name = "usuarios")
```

Na anotação `@Entity` o parâmetro `name` também será "Usuario", porém, com a letra inicial maiúscula (nome da classe). Não vamos alterar as anotações restantes, trocamos somente o nome da tabela e da entidade.

```kotlin
@Entity(name = "Usuario")
```

Por enquanto, temos:

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Usuario {

    private Long id;
    private String login;
    private String senha;

}
```

Voltaremos à entidade `medico` e copiaremos a anotação acima do ID:

> `Medico`:

```less
//código omitido

@Id 
@GeneratedValue(strategy = GenerationType.IDENTITY)

//código omitido
```

Em seguida, voltamos ao arquivo `Usuario` e colaremos acima do atributo `id`.

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

import jakarta.persistence.*
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Usuario {

        @Id 
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;

}
```

Com isso, mapeamos a entidade JPA.

Essa entidade está representando uma tabela no banco de dados e, por isso, essa tabela precisa ser criada no banco de dados.

Portanto, criaremos uma _migration_ para fazer a evolução do _schema_ do banco de dados. Toda vez que precisarmos alterar algum dado no banco de dados (excluir coluna, incluir linha, etc), geramos uma nova _migration_.

> **ATENÇÃO**: sempre interrompa o projeto ao codificar as migrations!

Por isso, no IntelliJ, clicaremos no botão vermelho "■", para interromper o projeto. Logo após, à esquerda, vamos em "src > main > resources > db.migration". Note que temos quatro pastas, sendo elas:

- `db.migration`
    - `V1__create-table-medicos.sql`
    - `V2__alter-table-medicos-add-column-telefone.sql`
    - `V3__alter-table-medicos-add-column-ativo.sql`
    - `V4__create-table-pacientes.sql`

Vamos criar uma quinta _migration_. Para isso, selecionaremos a primeira _migration_ `V1__create-table-medicos.sql`, e clicaremos nas teclas "Ctrl + C" e depois em "Ctrl + V".

Será aberta uma pop-up _copy_, com os campos "_new name_" e "_to directory_". No campo "New name" alteraremos para `V5__create-table-usuarios.sql`.

```css
V5__create-table-usuarios.sql
```

Seremos redirecionados para o arquivo:

> `V5__create-table-usuarios.sql`:

```scss
create table medicos(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    crm varchar(6) not null unique,
    especialidade varchar(100) not null,
    logradouro varchar(100) not null,
    bairro varchar(100) not null,
    cep varchar(9) not null,
    complemento varchar(100),
    numero varchar(20),
    uf char(2) not null,
    cidade varchar(100) not null,

    primary key(id)

);
```

No entanto, precisamos alterar esse código. No comando `create table`, não usaremos "medicos" e sim "usuarios".

```lua
create table usuarios
```

Nos campos, podemos incluir "login" no lugar de "nome" e "senha" ao invés de "email". Após essas alterações, podemos remover os outros campos, dado que não usaremos para o usuário. Podemos excluir o `unique` da senha e aumentar de 100 para 255 caracteres.

> `V5__create-table-usuarios.sql`:

```sql
create table usuarios(

    id bigint not null auto_increment,
    login varchar(100) not null,
    senha varchar(255) not null,

    primary key(id)

);
```

Com isso, temos a estrutura da nossa tabela de usuários.

Ao inserir um usuário, no campo "login" digitamos o e-mail do usuário (informação única) e em "senha", não vamos armazenar na tabela "123456", isto é, em texto explícito. Usaremos um algoritmo de _hash_, aprenderemos mais adiante e com calma.

Podemos salvar o arquivo da quinta _migration_.

Desse modo, temos a entidade usuário e a _migration_. Podemos rodar o projeto clicando no botão verde de play "▶", na parte superior direita do IntelliJ.

Ao rodarmos o projeto, o _flyway_ detecta a nova _migration_ e executar esse script no banco de dados.

Será exibida a aba "_Run_", procuraremos por algo que nos informe que uma nova versão subiu.

> Linhas selecionadas pelo instrutor:

> _Current version of schema 'vollmedapi': 4_

> _Migrating schema 'vollmedapi' to version "5 - create-table-usuarios"_

Nessas linhas, ele nos comunica a versão atual do projeto, depois que rodou uma _migration_ e subiu à quinta versão. Na linha seguinte, nos informa que foi executado com sucesso e estamos na versão 5:

> Linha selecionada pelo instrutor:

> _Successfully applied 1 migration to schema 'vollmedapi', now at version v5_

Isso significa que a tabela de usuários foi criada!

Com isso, concluímos o primeiro passo: criamos uma entidade JPA simbolizando o usuário e depois geramos uma _migration_ no projeto, para criar a tabela no banco de dados.

Na sequência, seguiremos implementando as novas alterações para termos o controle de autenticação do nosso projeto.

# Para saber mais: hashing de senha

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117185/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117185/question)

Ao implementar uma funcionalidade de autenticação em uma aplicação, independente da linguagem de programação utilizada, você terá que lidar com os dados de login e senha dos usuários, sendo que eles precisarão ser armazenados em algum local, como, por exemplo, um banco de dados.

**Senhas são informações sensíveis e não devem ser armazenadas em texto aberto**, pois se uma pessoa mal intencionada conseguir obter acesso ao banco de dados, ela conseguirá ter acesso às senhas de todos os usuários. Para evitar esse problema, você deve sempre utilizar algum algoritmo de **_hashing_** nas senhas antes de armazená-las no banco de dados.

_Hashing_ nada mais é do que uma _função matemática_ que converte um texto em outro texto totalmente diferente e de difícil dedução. Por exemplo, o texto _Meu nome é Rodrigo_ pode ser convertido para o texto _8132f7cb860e9ce4c1d9062d2a5d1848_, utilizando o algoritmo de _hashing MD5_.

Um detalhe importante é que os algoritmos de _hashing_ devem ser de _mão única_, ou seja, não deve ser possível obter o texto original a partir de um _hash_. Dessa forma, para saber se um usuário digitou a senha correta ao tentar se autenticar em uma aplicação, devemos pegar a senha que foi digitada por ele e gerar o _hash_ dela, para então realizar a comparação com o _hash_ que está armazenado no banco de dados.

Existem diversos algoritmos de _hashing_ que podem ser utilizados para fazer essa transformação nas senhas dos usuários, sendo que alguns são mais antigos e não mais considerados seguros hoje em dia, como o MD5 e o SHA1. Os principais algoritmos recomendados atualmente são:

- **Bcrypt**
- **Scrypt**
- **Argon2**
- **PBKDF2**

Ao longo do curso utilizaremos o algoritmo BCrypt, que é bastante popular atualmente. Essa opção também leva em consideração o fato de que o _Spring Security_ já nos fornece uma classe que o implementa.

## Transcrição

Na aula anterior, criamos a entidade JPA e a _migration_. Agora, criaremos outras classes no projeto, por exemplo, o _repository_. Isso porque, em geral, cada entidade JPA terá uma interface _repository_, sendo quem faz o acesso ao banco de dados.

Para criarmos o _repository_ do usuário, vamos em "src > main > java > med.voll.api > domain > usuario". Com o pacote `usuario` selecionado, usaremos o atalho "Alt + Insert", e na aba exibida escolheremos a opção "Java Class".

Na aba "_New Java Class_" digitaremos o nome "UsuarioRepository" e deixaremos a segunda opção "_Interface_" marcada. Logo após, clicaremos na tecla "Enter", para criar a _interface_.

> `UsuarioRepository`

```kotlin
package med.voll.api.domain.usuario;

public interface UsuarioRepository {
}
```

Por ser um _repository_ precisamos herdar, por isso, acrescentaremos `extends JpaRepository`, após o nome da interface. Sendo `JpaRepository` a interface do Spring Data.

> `UsuarioRepository`

```kotlin
package med.voll.api.domain.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository {
}
```

Logo após a interface `JpaRepository`, vamos abrir e fechar um sinal de menor que ("<") e outro sinal de maior que (">"), os _generics_. Dentro dos _generics_ passaremos os dois tipos: quem é a entidade e o tipo de chave primária.

No caso, a entidade é o `Usuario` e o tipo da chave é `Long`, para representar os IDs.

> `UsuarioRepository`

```kotlin
package med.voll.api.domain.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
```

Sempre que precisarmos consultar a tabela de usuários no banco de dados, usaremos o `UsuarioRepository`. Além disso, vamos criar algumas classes de configurações para o Spring Security.

Nessa parte de autenticação, o Spring Security detecta algumas coisas de forma automática no projeto. Por exemplo, a classe que vai ter a lógica de usar o _repository_ e acessar o banco de dados para realizar a consulta.

O Spring possui um comportamento padrão, ele procura por uma classe específica no projeto. Portanto, precisamos criar essa classe seguindo o padrão do Spring e, com isso, ele consegue identificá-la no projeto e usá-la para fazer o processo de autenticação.

Para isso funcionar, vamos criar uma classe dentro do pacote `usuario`. Com a pasta `usuario` selecionada, utilizamos o atalho "Alt + Insert", e depois escolhemos a opção "Java Class". No pop-up seguinte, digitamos o nome "AutenticacaoService" e selecionamos "Enter".

> `AutenticacaoService`

```kotlin
package med.voll.api.domain.usuario;

public class AutenticacaoService {

}
```

Esta classe terá o código com a lógica de autenticação no projeto.

Até o momento é uma classe Java tradicional, não contém nenhuma anotação e, portanto, o Spring não a reconhece. Para o Spring identificar essa classe, usamos a anotação `@Service` em cima da classe.

A anotação `@Service` serve para o Spring identificar essa classe como um componente do tipo serviço. Isto é, ela executará algum serviço no projeto, no caso, será o de autenticação. Assim, o Spring carrega a classe e executa o serviço ao inicializarmos o projeto.

> `AutenticacaoService`

```kotlin
package med.voll.api.domain.usuario;

import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService {

}
```

O Spring Security também precisa ser informado que esta classe é a responsável pelo serviço de autenticação. Para isso, teremos que implementar uma interface.

Portanto, na assinatura da classe, antes de abrir as chaves vamos digitar `implements UserDetailsService`. Sendo `UserDetailsService` uma interface do Spring Security.

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

}
```

Com isso, o Spring será o responsável por chamar essa classe. Não injetaremos a classe `AutenticacaoService` em nenhum controller, o Spring consegue identificá-la e chamá-la quando ocorrer o processo de autenticação.

Isso desde que ela possua a anotação `@Service` e implemente a interface `UserDetailsService`, própria do Spring Security.

Perceba que está dando erro de compilação na linha da classe, está sublinhado na cor vermelha. Isso acontece porque ao implementarmos uma interface, **precisamos implementar os métodos dessa interface**.

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

}
```

Clicando na interface `UserDetailsService`, e usando o atalho "Atl + Enter", será exibido um pop-up com algumas opções. Dentre elas, escolheremos a "_Implement methods_" ("Implementar métodos").

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
```

Precisamos detalhar somente um método na classe dessa interface. No caso, o `load User By Username`, sendo o método que o Spring chama de forma automática ao efetuarmos o login.

Com isso, quando o usuário efetuar o login, o Spring busca pela classe `AutenticacaoService` - por ser a responsável por implementar a `UserDetailsService` - e chama o método `loadUserByUsername`, passando o `username` digitado no formulário de login.

Em suma, essa é a lógica deste método.

Precisamos devolver alguma coisa, no caso, precisamos acessar o banco de dados, ou seja, usaremos o _repository_. Logo, vamos injetar o _repository_ como uma dependência da classe.

Para isso, acima do método `loadUserByUsername` vamos declarar o atributo `private UsuarioRepository` nomeando como _repository_.

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
```

Para injetarmos a dependência na classe, usaremos a anotação `@Autowired` ou podemos usar o Lombok para gerar um construtor com esse atributo. Usaremos a primeira opção.

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
```

Agora, no método `loadUserByUsername` vamos alterar o retorno de _null_ para _repository_. Na sequência colocamos um ponto ("."), e incluímos o método `findByLogin()` (nome do nosso atributo que representa o login), passando como parâmetro o `username`.

> `AutenticacaoService`

```java
package med.voll.api.domain.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByLogin(username);
    }
}
```

Teremos um erro de compilação em `findByLogin`, porque não existe esse método na interface `UsuarioRepository`. Para ajustar isso, selecionamos o método, usamos o atalho "Alt + Enter" e escolhemos a opção "_Create method 'findByLogin' in 'UsuarioRepository'_".

Após clicarmos nesta opção, seremos redirecionados para o arquivo:

> `UsuarioRepository`

```java
package med.voll.api.domain.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    UserDetails findByLogin(String username);
}
```

Foi criado na nossa interface `UsuarioRepository` com o método `findByLogin()`. Neste método, vamos alterar o parâmetro de `username` para `login`.

> `UsuarioRepository`

```java
package med.voll.api.domain.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    UserDetails findByLogin(String login);
}
```

O `findByLogin()` é o método responsável por realizar a consulta do usuário no banco de dados. Portanto, será usado em `AutenticacaoService`.

Assim, criamos a entidade JPA que representa o usuário; temos a _migration_ que gerou a tabela no banco de dados; a interface `repository` responsável pelo acesso na tabela de usuários; a classe `AutenticacaoService` que simboliza o serviço de autenticação, será chamada pelo Spring automaticamente quando efetuarmos a autenticação no projeto.

Na sequência, continuaremos com as implementações no projeto.

Te espero na próxima aula!

# Para saber mais: documentação Spring Data

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117186/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117186/question)

Conforme aprendido em vídeos anteriores, o Spring Data utiliza um padrão próprio de nomenclatura de métodos que devemos seguir para que ele consiga gerar as _queries SQL_ de maneira correta.

Existem algumas palavras reservadas que devemos utilizar nos nomes dos métodos, como o `findBy` e o `existsBy`, para indicar ao Spring Data como ele deve montar a consulta que desejamos. Esse recurso é bastante flexível, podendo ser um pouco complexo devido às diversas possibilidades existentes.

Para conhecer mais detalhes e entender melhor como montar consultas dinâmicas com o Spring Data, acesse a sua [documentação oficial](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html).

## Transcrição

A próxima alteração é configurar o Spring Security para ele não usar o processo de segurança tradicional, o _stateful_. Como estamos trabalhando com uma API Rest, o processo de autenticação **precisa ser _stateless_**.

Por ser uma configuração, provavelmente tenha pensado no arquivo `application.properties`. No entanto, não é uma configuração de chave/valor, é sim uma configuração mais complexa e dinâmica que envolve classes, entre outros recursos do Spring e do projeto.

Vamos fazer essa configuração via código Java, e não usando propriedades no arquivo `application.properties`.

No IntelliJ, vamos em "src > main > java > med.voll.api > infra". Dentro do pacote `infra`, já que é uma configuração de infraestrutura de segurança, vamos criar uma classe.

Para organizarmos esse pacote de `infra` e não ficarmos com várias classes misturadas, vamos criar sub-pacotes. Por enquanto, temos somente a classe `TratadorDeErros`.

Clicaremos com o botão direito do mouse em `TratadorDeErros` e, na aba exibida vamos escolher as opções "Refactor > Move Class...". Será mostrado um pop-up, em que no campo "_To package_" vamos criar um sub-pacote.

Em "To package" estamos com `med.voll.api.infra`, no final incluiremos `.exception`. Isso porque a classe `TratadorDeErros` tem haver com exceções que podem acontecer no projeto. Assim, ficamos com: `med.voll.api.infra.exception`.

Logo após, vamos clicar no botão "_Refactor_", no canto inferior direito. Será exibida uma aba "_Move_", em que selecionaremos o botão "_Yes_". Com isso, a classe `TratadorDeErros` foi movida para o pacote `infra.exception`.

Com o pacote `infra.exception` selecionado, usaremos o atalho "Alt + Insert" e escolheremos a opção "Package". Na aba seguinte, temos `med.voll.api.infra.exception`. Removeremos o 'exception' e adicionaremos `security`, e depois apertamos "Enter".

No sub-pacote `security`, vamos criar as classes e configurações relacionadas à segurança.

Do lado esquerdo do IntelliJ, ficamos com o seguinte pacote e sub-pacotes:

- infra
    - exception
    - security

Agora, vamos criar a classe de configurações de segurança. Selecionando o pacote `security`, usamos o atalho "Alt + Insert" e escolheremos a opção "Java Class".

Na aba seguinte, intitulado "_New Java Class_", digitaremos "SecurityConfigurations".

```undefined
SecurityConfigurations
```

Podemos clicar na tecla "Enter", para salvar. Seremos redirecionados para o arquivo `SecurityConfigurations`:

```kotlin
package med.voll.api.infra.security;

public class SecurityConfigurations {
}
```

É nesta classe que vamos concentrar as informações de segurança do Spring Security. Por enquanto, é uma classe Java e o Spring não carrega essa classe no projeto, dado que não temos nenhuma anotação nela.

Por ser uma classe de configurações, usaremos a anotação `@Configuration`.

> `SecurityConfigurations`

```kotlin
package med.voll.api.infra.security;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfigurations {

}
```

Desse modo, o Spring identifica a classe e a carrega no projeto.

Como faremos as configurações de segurança, personalizando o processo de autenticação e autorização, adicionaremos mais uma anotação.

No caso, usaremos uma do Spring Security, sendo a `@EnableWebSecurity`. Isso para informarmos ao Spring que vamos personalizar as configurações de segurança.

> `SecurityConfigurations`

```kotlin
package med.voll.api.infra.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

}
```

Dentro da classe, vamos incluir a configuração do processo de autenticação, que precisa ser _stateless_. Para isso, criaremos um método cujo retorno será um objeto chamado `SecurityFilterChain`, do próprio Spring.

O objeto `SecurityFilterChain` do Spring é usado para configurar o processo de autenticação e de autorização.

Por isso, no bloco da classe, vamos digitar o método `public SecurityFilterChain` nomeado `securityFilterChain()`. Logo após o nome, vamos abrir e fechar chaves.

> `SecurityConfigurations`

```kotlin
package med.voll.api.infra.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain() {

    }

}
```

Neste método, precisamos devolver um objeto `securityFilterChain`, contudo, não vamos instanciar esse objeto. Nos parênteses do método receberemos a classe `HttpSecurity`, do Spring, e o chamaremos de http.

> `SecurityConfigurations`

```kotlin
package med.voll.api.infra.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) {

    }

}
```

Agora, dentro deste método colocaremos um `return http`, esse parâmetro http é o Spring que nos fornece. Perceba que ao digitarmos "http" aparece um pop-up com algumas opções, os métodos.

Na última opção, temos o método `http.build()`, sendo quem cria o objeto `securityFilterChain`.

Precisamos fazer algumas configurações, no `return` digitaremos `http.csrf().disable()`. Serve para desabilitarmos proteção contra-ataques do tipo CSRF (_Cross-Site Request Forgery_).

Estamos desabilitando esse tipo de ataque porque vamos trabalhar com autenticação via tokens. Nesse cenário, o próprio token é uma proteção contra esses tipos de ataques e ficaria repetitivo.

> `SecurityConfigurations`

```kotlin
package med.voll.api.infra.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        return http.csrf().disable();
    }

}
```

Após o `disable()` selecionamos "Enter", para melhorar a visualização e quebrar a linha. O próximo método será responsável por configurar a autenticação para ser _stateless_.

Digitaremos um ponto (".") e o método `sessionManagement()`, para mostrar o gerenciamento da sessão. Na sequência, mais um ponto e o método `sessionCreationPolicy()`, qual a política de criação da sessão.

```scss
.sessionManagement().sessionCreationPolicy()
```

No método `sessionCreationPolicy()`, passamos como parâmetro um objeto. Temos um atributo estático na própria classe `SessionCreationPolicy`, que ao digitarmos no parâmetro virá com `.ALWAYS`, e alteramos para `.STATELESS`.

```scss
.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
```

Assim, ficamos com:

> `SecurityConfigurations`

```less
//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

}
```

Após finalizar essa linha, clicamos na tecla "Enter". Na linha seguinte, iniciamos com um ponto `and().build(`) sendo para ele criar o objeto `SecurityFilterChain`.

> `SecurityConfigurations`

```less
//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }

}
```

Note que na chamada do método `csrf()` temos um sublinhado na cor vermelha. Isso acontece porque esse método lança _exception_ e não colocamos `try-catch`. Na verdade, não trataremos isso e, sim, lançaremos no método.

Por isso, na assinatura do método `securityFilterChain` antes de abrirmos as chaves, vamos inserir `throws Exception`. Ou seja, se der alguma exceção é para lançar.

> `SecurityConfigurations`

```less
//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }

}
```

Pronto! Essa é a primeira configuração que aplicamos nesta classe.

Estamos desabilitando o tratamento contra-ataque CSRF e, na sequência, desabilitando o processo de autenticação padrão do Spring. Isso porque estamos usando uma API Rest, e queremos que seja _stateless_.

Só faltou um detalhe. O Spring não lê o método de forma automática, precisamos incluir uma anotação. No caso, o `@Bean`, que serve exibir o retorno desse método, que estamos devolvendo um objeto `SecurityFilterChain`.

Para devolvermos um objeto para o Spring, usamos a anotação `@Bean`.

> `SecurityConfigurations`

```less
//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }

}
```

Com isso, criamos a nossa classe de configuração!

Por enquanto, configuramos somente a desabilitação do CSRF e habilitamos a autenticação _stateless_ do Spring. Podemos salvar as alterações feitas e abrir a aba "Run", do lado inferior esquerdo.

Perceba que ele está subindo de forma automática, tudo certo.

Voltando ao código, o que muda com essa configuração que fizemos no arquivo `SecurityConfigurations`? Com essa configuração o Spring Security não tem mais aquele comportamento padrão.

Agora, configuramos para o processo de autenticação ser _stateless_. Não será mais gerado o formulário de login e senha, quem faz isso é a nossa aplicação _mobile_, no front-end. E, também, não bloqueará mais a URL.

Nós precisamos configurar como será o processo de autenticação e autorização.

Para testar, voltaremos ao Insomnia. Note que todas as requisições estavam devolvendo o código `401 Unauthorized`, devido ao fato de não estarmos logados no Insomnia.

Agora, o esperado é que a requisição seja liberada, porque desabilitamos o bloqueio padrão. Para testar, clicamos no botão "Send" do método Detalhar Médico.

Perceba que foi devolvido o código `401 Not Found`, porque digitamos um ID inexistente no endereço: `http://localhost:8080/medicos/6999`.

Vamos testar no método Listagem de médicos, clicando nele do lado esquerdo do Insomnia. Logo após, podemos selecionar o botão "Send". Foi devolvido o código `200 OK` com as informações da Bruna Silva, Juliana Queiroz e Renato Amoedo, em "Preview".

Voltando ao método Detalhar Médico, vamos alterar o ID no final do endereço para `7`.

```bash
http://localhost:8080/medicos/7
```

Depois da alteração do ID, clicamos no botão "Send". O código devolvido foi o `200 OK`, com as informações referentes ao médico de ID número 7.

Com isso, o Spring Security não bloqueia mais todas as requisições e não exibe o formulário de login.

Vamos testar no navegador, usando o seguinte endereço na URL:

```bash
localhost:8080/medicos
```

Note que foi devolvido o JSON com as informações da Bruna Silva, Juliana Queiroz e Renato Amoedo, sem redirecionar para o formulário de login conforme vimos em vídeos anteriores.

Desse modo, desabilitamos o processo padrão de autenticação do Spring Security. Agora o nosso processo é _stateless_ e desabilitamos o processo que o Spring nos fornecia.

Isto é, se desabilitamos os recursos do Spring, precisamos configurar como será o processo de autenticação no projeto.

Mas vamos aprender isso no próximo vídeo. Até mais!

#   
Mudanças na versão 3.1

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/130016/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/130016/question)

**ATENÇÃO!**

A partir da versão **3.1** do Spring Boot algumas mudanças foram realizadas, em relação às **configurações de segurança**. Caso você esteja utilizando o Spring Boot nessa versão, ou em versões posteriores, o código demonstrado no vídeo anterior vai apresentar um aviso de **deprecated**, por conta de tais mudanças.

A partir dessa versão, o método **securityFilterChain** deve ser alterado para:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf(csrf -> csrf.disable())
            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
}
```

## Transcrição

Estamos quase finalizando o processo de autenticação, é um pouco mais complexo e são muitas mudanças que precisamos fazer no código.

Vamos relembrar o processo de autenticação na nossa API. Para isso, vamos analisar o seguinte diagrama (já visto em aulas anteriores):

![Diagrama de autenticação intitulado "Autenticação". À esquerda, temos um protótipo de uma tela de login no celular com os campos "Login" e "Senha" e um botão "Entrar", na parte inferior central. Este está acompanhado do texto "APP Cliente Front-end/Mobile", abaixo. No centro, um quadrado com o texto "API Rest Backend" acompanhado da numeração 3 e do texto "Gerar Token JWT" abaixo e, à direita, um ícone de banco de dados, com o texto "Banco de dados" contido nele. Os elementos ligam-se entre si com setas e possuem numeração: a tela de login liga-se e aponta para "API Rest", referente a seta número 1 nomeada "HTTP Request". "API Rest Backend" aponta para a tela de login, referente a seta número 4, nomeada "Devolver Token JWT". "API Rest Backend" se liga e aponta para o "Banco de dados", referente a seta número 2 acompanhada do texto "SQL Select". Entre as setas, número 1 e 4 há um trecho de um código com os campos login e senha: {"login":"fulano@email.com" "senha": "12345678"}.](https://cdn1.gnarususercontent.com.br/1/723333/b40d1532-73e0-482c-aad9-8175f5ba2655.png)

Temos o cliente da nossa API, no caso um aplicativo mobile, e neste aplicativo consta o formulário de login. Ao efetuar o login clicando no botão "Entrar" do aplicativo, uma requisição é enviada para a nossa API, levando no corpo da requisição um JSON com o usuário e senha digitado na tela de login.

Com isso, a nossa API recebe essa requisição e a valida no banco de dados. Caso o usuário esteja cadastrado, é gerado o token como resposta. Esse é o fluxo de autenticação que precisamos implementar no projeto.

Portanto, a próxima alteração que faremos no projeto é implementar o **tratamento dessa requisição**. Precisamos ter um controller para receber essas requisições, responsável por autenticar o usuário no sistema.

Ainda não construímos esse controller para receber o JSON e disparar o processo de autenticação. Esse será o nosso próximo passo!

> O instrutor corrige o nome da classe de `AutenticaoService` para `AutenticacaoService`. Para isso, clicamos com o botão direito no nome, escolhemos as opções "Refactor > Rename" e digitamos o nome correto.

Para criarmos um controller responsável por disparar o processo de autenticação, do lado esquerdo do IntelliJ selecionamos o pacote `controller` e usamos o atalho "Alt + Insert".

Na aba exibida, escolhemos a opção "Java Class", e no pop-up seguinte digitamos o nome "AutenticacaoController". Logo após, podemos clicar na tecla "Enter", para criar.

Seremos redirecionados para o arquivo `AutenticacaoController`:

```kotlin
package med.voll.api.controller;

public class AutenticacaoController {

}
```

Agora, precisamos incluir alguma anotação para o Spring reconhecer essa classe. No caso, é uma classe controller, portanto, usaremos a anotação `@RestController`.

> `AutenticacaoController`

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutenticacaoController {

}
```

Após incluirmos a anotação, selecionaremos "Enter" e na linha seguinte vamos colocar mais uma, sendo a `@RequestMapping()`. Nesta, precisamos passar qual a URL que o controller vai tratar, no caso será `/login`.

Portanto, ao chegar uma requisição na nossa API para `/login`, o Spring identifica que deve chamar este controller.

> `AutenticacaoController`

```kotlin
package med.voll.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

}
```

Dentro da classe precisamos construir um método chamado `efetuarLogin` para receber essa requisição. Os métodos são geralmente públicos, e o retorno padronizamos para receber um objeto do tipo `ResponseEntity`: `public ResponseEntity efetuarLogin`.

Após o nome do método, vamos abrir e fechar parênteses e abrir e fechar chaves.

> `AutenticacaoController`

```csharp
//código omitido

public ResponseEntity efetuarLogin() {

}
```

Precisamos incluir uma anotação no método, informando qual o verbo do protocolo HTTP. Por ser uma requisição que estamos recebendo informações, usaremos o verbo `post` e a anotação será o `@PostMapping`.

> `AutenticacaoController`

```kotlin
package med.voll.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @PostMapping
    public ResponseEntity efetuarLogin() {

    }
}
```

No parênteses do método `efetuarLogin()`, vamos receber um DTO com os dados que serão enviados pelo aplicativo front-end: `DadosAutenticacao dados`.

Lembrando que esse parâmetro precisa ser anotado com `@RequestBody`, já que virá no corpo da requisição. E, também, o `@Valid` para validarmos os campos com o _bean validation_.

> `AutenticacaoController`

```less
package med.voll.api.controller;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {

    }
}
```

Perceba que "DadosAutenticacao" está escrito na cor vermelha, isso significa que ocorreu um erro de compilação. Isso porque ainda não criamos a classe `DadosAutenticacao`.

Para criarmos essa classe, selecionamos `DadosAutenticacao` e usamos o atalho "Alt + Enter". Será exibido um pop-up em que escolheremos a opção "_Created record 'DadosAutenticacao'_".

Na aba seguinte, intitulada "_Create Record DadosAutenticacao_", vamos alterar o pacote que consta no campo "_Destination package_". Atualmente estamos com `med.voll.api.controller`, modificaremos para o pacote `usuario`.

Para isso, clicamos no botão de reticências ("...") e selecionamos "domain > usuario". Logo após, apertamos o botão "Ok", no canto inferior direito.

Assim, ficamos com o seguinte caminho no campo "Destination Package": `med.voll.api.domain.usuario`. Tudo certo, podemos selecionar o botão "Ok", no canto inferior direito. Seremos redirecionados para o arquivo que acabamos de criar.

> `DadosAutenticacao`

```csharp
package med.voll.api.domain.usuario;

public record DadosAutenticacao() {
}
```

No parêntese do `record`, incluiremos dois campos: login e senha. Ambos sendo strings.

> `DadosAutenticacao`

```csharp
package med.voll.api.domain.usuario;

public record DadosAutenticacao(String login, String senha) {
}
```

Desse modo, concluímos o DTO que representa o JSON que o aplicativo mobile nos envia na requisição de autenticação. Podemos salvar este arquivo, clicando em "Ctrl + S".

Vamos voltar ao arquivo `AutenticacaoController`. Note que agora está compilando, ou seja, o `DadosAutenticacao` não está mais escrito na cor vermelha.

Assim, recebemos o DTO com o login e senha enviados pelo aplicativo mobile. Agora, precisamos consultar o banco de dados e disparar o processo de autenticação.

O processo de autenticação está na classe `AutenticacaoService`. Precisamos chamar o método `loadUserByUsername`, já que é ele que usa o `repository` para efetuar o `select` no banco de dados.

Porém, não chamamos a classe `service` de forma direta no Spring Security. Temos outra classe do Spring que chamaremos e é ela que vai chamar a `AutenticacaoService`.

No arquivo do controller, precisamos usar a classe `Authentication Manager` do Spring, responsável por disparar o processo de autenticação.

Vamos declarar o atributo na classe `AutenticacaoController`. Será privado, e chamaremos de `manager`. Acima, incluiremos a anotação `@Autowired`, para solicitar ao Spring a injeção desse parâmetro. Não somos nós que vamos instanciar esse objeto, e sim o Spring.

```java
@Autowired
private AuthenticationManager manager;
```

Para usarmos o objeto, utilizamos o método `.authenticate()` chamando o objeto `manager`, isso dentro de `efetuarLogin()`. No método `authenticate()`, precisamos passar um objeto do tipo _username authentication token_.

```scss
manager.authenticate(token);
```

Logo após, vamos guardar o retorno do objeto `token` em uma variável.

```csharp
var authentication = manager.authenticate(token);
```

Este método devolve o objeto que representa o usuário autenticado no sistema.

> `AutenticacaoController`

```kotlin
package med.voll.api.controller;

//código omitido

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
        var authentication = manager.authenticate(token);
    }
}
```

Perceba que está dando erro de compilação no parâmetro `token`, isso acontece porque não existe a variável token. Precisamos criá-la na linha de cima.

```csharp
var token = new 
```

Esse token é o login e a senha, e já está sendo representado no DTO `DadosAutenticacao`. No entanto, esse DTO não é o parâmetro esperado pelo Spring, ele espera uma classe dele próprio - e não uma classe do projeto.

Portanto, na variável `token` criaremos a classe que representa o usuário e a senha. Após o `new`, vamos instanciar um objeto do tipo `UsernamePasswordAuthenticationToken()` passando como parâmetro o DTO, sendo `dados.login()`, e `dados.senha()`.

```csharp
var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
```

Temos o nosso DTO e o Spring contém um próprio, também. O método `authenticate(token)` recebe o DTO do Spring. Por isso, precisamos converter para `UsernamePasswordAuthenticationToken` - como se fosse um DTO do próprio Spring.

> `AutenticacaoController`

```java
package med.voll.api.controller;

//código omitido

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
        var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha())
        var authentication = manager.authenticate(token);
    }
}
```

No fim, precisamos retornar um `.ok().build()`. Isso para recebermos um código `200 OK` quando a requisição for efetuada com sucesso.

```kotlin
return ResponseEntity.ok().build();
```

Assim, ficamos com o seguinte código:

> `AutenticacaoController`

```kotlin
package med.voll.api.controller;

//código omitido

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
        var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha())
        var authentication = manager.authenticate(token);

        return ResponseEntity.ok().build();
    }
}
```

Com isso, temos o nosso controller responsável pelo processo de autenticação. Podemos salvar o arquivo e abrir a aba "Run". Perceba que ele deu erro ao tentar iniciar o projeto.

> Parte do erro selecionada pelo instrutor:

```markdown
***************
APPLICATION FAILED TO START
***************
```

Em seguida, nos informa o motivo da falha:

> **Description**: Field manager in med.voll.api.controller.AutenticacaoController required a bean of type 'org.springframework.security.authentication.AuthenticationManager' that could not be found.*

Isso significa que o campo `manager` na classe `Autenticacao Controller` requer um bean do tipo `Authentication Manager`, que não pôde ser encontrado.

Isto é, no momento de carregar o `AutenticacaoController`, ele não encontrou o `Authentication Manager`. Não conseguiu injetar o atributo `manager` na classe controller.

A classe `AuthenticationManager` é do Spring. Porém, ele não injeta de forma automática o objeto `AuthenticationManager`, precisamos configurar isso no Spring Security. Como não configuramos, ele não cria o objeto `AuthenticationManager` e lança uma exceção.

Faremos essa configuração.

Por ser uma configuração de segurança, faremos essa alteração na classe `SecurityConfigurations`.

> `SecurityConfigurations`

```scss
package med.voll.api.infra.security;

//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }

}
```

Vamos criar mais um método após o fecha chaves do `SecurityFilterChain`. Será um método público, cujo retorno é o objeto `AuthenticationManager` e o nome será `authenticationManager`.

```csharp
public AuthenticationManager authenticationManager()
```

No parêntese deste método, receberemos um objeto do tipo `AuthenticationConfiguration` chamado `configuration`.

```typescript
public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) {

}
```

No retorno, teremos `configuration.getAuthenticationManager()`.

```typescript
public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) {
    return configuration.getAuthenticationManager();
}
```

A classe `AuthenticationConfiguration`, possui o método `getAuthenticationManager()` que cria o objeto `AuthenticationManager`. Portanto, usaremos essa classe.

Note que está gerando um erro de compilação em `getAuthenticationManager()`, isso acontece porque esse método precisa lançar uma _exception_. Portanto, na assinatura do método `AuthenticationManager` incluiremos o `throws Exception`, antes de abrir as chaves.

> `SecurityConfigurations`

```java
package med.voll.api.infra.security;

//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }
                
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

}
```

Note que sumiu o sublinhado na cor vermelha abaixo de `getAuthenticationManager()`, isso significa que compilou.

Esse é o método que estamos informando ao Spring como injetar objetos. Portanto, acima dele incluiremos a anotação `@Bean`.

> `SecurityConfigurations`

```java
package med.voll.api.infra.security;

//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }
                
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

}
```

> A anotação `@Bean` serve para exportar uma classe para o Spring, fazendo com que ele consiga carregá-la e realizar a sua injeção de dependência em outras classes.

Desse modo, informamos ao Spring como criar um objeto `AuthenticationManager`. Podemos salvar o arquivo e abrir a aba "Run", do lado inferior esquerdo. Agora, sim, foi inicializado corretamente.

Com isso, criamos o nosso controller de autenticação, e já conseguimos disparar uma requisição para efetuar o login no sistema. Vamos testar no Insomnia.

Porém, criaremos uma nova requisição. No painel do lado esquerdo do Insomnia, clicamos no sinal de mais ("+"). Será exibido quatro opções:

- HTTP Request
- GraphQL Request
- gRPC Request
- New Folder

Selecionaremos a primeira opção "HTTP Request". Perceba que à esquerda será mostrada uma aba "_New Request_", clicaremos duas vezes nela para renomearmos para "Efetuar Login".

No painel central, vamos configurar a requisição. No verbo, ao invés de `get` será `post` e a URL vai ser `http://localhost:8080/login`, sendo a URL que configuramos na classe `AutenticacaoController`.

> URL da requisição Efetuar Login:

```bash
http://localhost:8080/login
```

Abaixo do verbo, na aba "_Body_", selecionaremos para expandir. Será exibida uma seção "_Structured_" e outra "_Text_", nesta última clicaremos na opção "JSON".

Note que ao invés de "Body", agora a aba se chama "JSON". Nela, incluímos os dados de login e senha para enviar o JSON.

> JSON

```perl
{
    "login": "ana.souza@voll.med",
    "senha": "123456"
}
```

Logo após, clicaremos no botão "Send", para disparar a requisição.

Perceba que o retorno foi o código `403 Forbidden`, ou seja, o Spring Security não bloqueou a requisição. A requisição foi processada, porém devolveu o código `403`.

No corpo na resposta, temos:

> Preview

```json
{
    "timestamp": "2022-10-25T19:30:40.428+00:00",
    "status": 403,
    "error": "Forbidden",
    "message": "Access Denied",
    "path": "/login"
}
```

Vamos analisar o que aconteceu no IntelliJ, na aba "Run". Perceba que o `select` foi disparado.

> Retorno na aba "Run" do IntelliJ:

```vbnet
Hibernate:
        select
            v1_0.id,
            v1_0.login,
            v1_0.senha
        from
            usuarios v1_0
        where
            v1_0.login=?
```

Portanto, no arquivo `AutenticacaoController`, quando chamamos o `manager.authenticate(token)`, o próprio Spring encontrou a classe `AutenticacaoService`. Depois, chamou o método que usa o `repository` e fez a consulta no banco de dados

Assim, o processo de autenticação está sendo disparado corretamente. Isso significa que ele fez a consulta no banco de dados, mas não encontrou nenhum registro com o login e senha informados.

No Insomnia, passamos as seguintes informações:

```perl
"login": "ana.souza@voll.med",
"senha": "123456"
```

Isto é, não temos esse registro cadastrado no banco de dados. Isso acontece porque a nossa tabela de usuários está vazia. Por isso, precisamos incluir um usuário na tabela.

Na aba inferior do IntelliJ, abriremos um terminal. Nele, logaremos no MySQL, para isso usaremos o seguinte comando:

```css
mysql -u root -p vollmed_api
```

- **vollmed_api**: nome do banco de dados.

Ao selecionarmos a tecla "Enter", será solicitada uma senha. Digitaremos "root".

> Enter password: root

Com isso, entramos no banco de dados. Vamos efetuar um `select` na tabela de usuários, utilizando o comando `select * from usuarios;`.

```csharp
select * from usuarios;
```

Como retorno, temos:

> Empty set (0,00 sec)

Isso significa que a tabela está vazia. Precisamos incluir um usuário na tabela do banco de dados, e para isso, usaremos o comando `insert`:

```sql
insert into usuarios values (1, 'ana.souza@voll.med', '123456');
```

Porém, em vídeos anteriores, aprendemos que deixar a senha explícita não é uma boa prática de segurança. Por isso, não vamos armazenar `123456`, e sim, algum **algoritmo de _hashing_ de senhas**.

Isso para gerarmos o _hashing_ da senha 123456, e salvá-la na coluna "senha" da tabela. Neste curso, usaremos o **algoritmo BCrypt**.

> No caso do instrutor, ele já tem anotado o que se refere a senha 123456, no formato do algoritmo BCrypt.

Para colar, usamos o atalho "Ctrl + Shift + V".

```sql
insert into usuarios values (1, 'ana.souza@voll.med', '$2a$10$Y50UaMFOxteibQEYLrwuHeehHYfcoafCopUazP12.rqB41bsolF5.');
```

Essa é a boa prática, salvar a senha em _hashing_ e não em texto aberto. Podemos selecionar "Enter", para inserir.

Como retorno, obtemos:

> Query OK, 1 row affected (0,01 sec)

Agora, podemos efetuar o login. Contudo, no banco de dados estamos usando o formato BCrypt de hashing da senha. Como o Spring identifica que estamos usando o BCrypt? Não configuramos isso ainda.

Por ser uma configuração de segurança, voltaremos ao arquivo `SecurityConfigurations`.

> `SecurityConfigurations`

```java
package med.voll.api.infra.security;

//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }
                
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

}
```

Criaremos mais um método usando a anotação `@Bean`. Será público e devolve um objeto do tipo `PasswordEncoder`, sendo a classe que representa o algoritmo de _hashing_ da senha.

```typescript
//código omitido

@Bean
public PasswordEncoder passwordEncoder() {
        
}
```

O método não receberá nenhum parâmetro, somente retornaremos um novo `BCryptPasswordEncoder()`, sendo uma classe do Spring para instanciarmos como se fosse uma classe Java.

```typescript
//código omitido

@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

Com isso, configuramos o Spring para usar esse algoritmo de _hashing_ de senha.

> Código do arquivo `SecurityConfigurations` completo:

```java
package med.voll.api.infra.security;

//código omitido

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().build();
    }
                
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

Podemos salvar o arquivo e voltar ao IntelliJ. Na aba "Run", conseguimos observar que foi reiniciado e não foi encontrado nenhum erro.

Agora, podemos simular a requisição de login novamente. No Insomnia, vamos alterar a senha do JSON antes de disparar a requisição. Acrescentaremos "78" no final da senha.

> JSON do método Efetuar Login:

```perl
{
    "login": "ana.souza@voll.med",
    "senha": "12345678"
}
```

> URL do método Efetuar Login:

```bash
http://localhost:8080/login
```

Logo após, clicamos no botão "Send", à direita do endereço. Note que o código devolvido foi o `500 Internal Server Error` e no corpo na resposta, obtemos:

> Preview:

```json
{
    "timestamp": "2022-10-25T19:30:40.428+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "message": "Invalid property 'accountNonLocked' of bean class [med.voll.api.domain.usuario.Usuaio]: Could not find field for property during fallback access",
    "path": "/login"
}
```

Isso aconteceu porque precisamos implementar uma interface para o Spring Security na classe usuário. Para fazer essa configuração voltaremos ao IntelliJ, no arquivo `Usuario.java`.

> `Usuario.java`:

```kotlin
package med.voll.api.domain.usuario;

import jakarta.persistence.*
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;

}
```

Para o Spring Security identificar a classe usuário do nosso projeto, precisamos informar. Por exemplo, como ele vai saber que o atributo login é o campo login? A forma para identificarmos isso é usando uma interface.

Portanto, precisamos implementar uma interface chamada `UserDetails` (própria do Spring Security) na classe que representa o usuário.

> `Usuario.java`:

```less
package med.voll.api.domain.usuario;

//código omitido

public class Usuario implements UserDetails {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;

}
```

Por ser uma interface, precisamos implementar os métodos. Note que já até gerou erro de compilação. Para isso, usaremos o atalho "Alt + Enter" e na caixa de opções escolheremos a primeira "_Implement methods_".

Na aba seguinte, será solicitado para selecionarmos os métodos que desejamos incluir no projeto. Deixaremos todos selecionados e clicaremos no botão "Ok".

No projeto, serão exibidos os métodos que deixamos selecionados.

> `Usuario.java`:

```typescript
//código omitido

@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
}

@Override
public String getPassword() {
    return null;
}

@Override
public String getUsername() {
    return null;
}

@Override
public boolean isAccountNonExpired() {
    return false;
}

@Override
public boolean isAccountNonLocked() {
    return false;
}

@Override
public boolean isCredentialsNonExpired() {
    return false;
}

@Override
public boolean isEnabled() {
    return false;
}
```

Note que há alguns objetos que devolvem dados do tipo `boolean`, todos estão com o retorno como `false`. Alteraremos todos para "true", que significa verdadeiro.

> `Usuario.java`:

```typescript
//código omitido

@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
}

@Override
public String getPassword() {
    return null;
}

@Override
public String getUsername() {
    return null;
}

@Override
public boolean isAccountNonExpired() {
    return true;
}

@Override
public boolean isAccountNonLocked() {
    return true;
}

@Override
public boolean isCredentialsNonExpired() {
    return true;
}

@Override
public boolean isEnabled() {
    return true;
}
```

No `isCredentialsNonExpired()`, é só caso quisermos controlar a conta do usuário: se há uma data de expiração ou se pode ter as credenciais bloqueadas. No caso, não faremos esse controle de conta, portanto, vamos devolver tudo como verdadeiro.

Isso para comunicar ao Spring que o usuário não está bloqueado, está habilitado e a conta não expirou. Assim, retornamos tudo `true`. Caso queira controlar isso, basta criar os atributos e retornar os atributos específicos que representam essas informações.

No método `getUsername()`, devolvemos qual atributo da classe representa o `Username`. Por isso, ao invés de retornar `null`, vamos devolver o `login`. Aplicaremos a mesma lógica no método `getPassword()`.

```typescript
@Override
public String getPassword() {
    return senha;
}

@Override
public String getUsername() {
    return login;
}
```

Assim que informamos ao Spring que o usuário é o atributo login, e que o `getPassword` é o atributo senha.

No primeiro método criado, precisamos devolver um objeto do tipo `Collection` chamado `getAuthorities`. Caso tenhamos um controle de permissão no projeto, por exemplo, perfis de acesso, é necessário criar uma classe que represente esses perfis.

No nosso caso, não controlamos os perfis. Se o usuário estiver cadastrado, pode acessar qualquer tela sem restrições. Mas precisamos devolver para o Spring uma coleção representando os perfis.

Para isso, vamos simular uma coleção para compilarmos o projeto. Não usaremos, mas devolveremos um objeto válido para o Spring.

No retorno, ao invés de `null`, vamos inserir `List.of()`. Dentro do parêntese, criaremos um objeto do tipo `new SimpleGrantedAuthority()`, sendo a classe do Spring que informa qual o perfil do usuário.

Passaremos um perfil estático, em `SimpleGrantedAuthority()`. Por padrão, os perfis do Spring possui um prefixo, `ROLE_`, e o nome do perfil. No caso, será `USER`.

```typescript
@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_USER"));
}
```

Com isso, informamos ao Spring que o perfil desse usuário é fixo, e se chama _role user_.

Deste modo, ficamos com o seguinte arquivo `Usuario.java`:

```typescript
package med.voll.api.domain.usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```

Podemos salvar o arquivo. Assim, a classe usuário está seguindo o padrão do Spring.

Vamos voltar ao Insomnia, e clicar no botão "Send" da requisição Efetuar Login, novamente. Lembrando que estamos com a senha `12345678`. Foi devolvido o código `403 Forbidden`, porque fornecemos a senha errada.

Vamos ajustar a senha para `123456`:

> JSON do método Efetuar Login:

```perl
{
    "login": "ana.souza@voll.med",
    "senha": "123456"
}
```

Agora, sim, vamos clicar no botão "Send". Foi devolvido o código `200 OK`, e no corpo da resposta não temos nada.

> Preview:

> No body returned for response

Com isso, conseguimos implementar o processo de autenticação. Porém, neste caso, deveríamos retornar um token.

Se voltarmos ao arquivo `AutenticacaoController`, no método `efetuarLogin`, solicitamos que se o usuário for logado com sucesso, devemos retornar um token na resposta. No `ResponseEntity.ok()`, devolvemos um JSON com o token.

> `AutenticacaoController`

```typescript
//código omitido

@PostMapping
public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
    var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
    var authentication = manager.authenticate(token);

    return ResponseEntity.ok().build();
}
```

Essa parte de token e do JSON Web Token (JWT), aprenderemos na próxima aula. Neste vídeo, o nosso objetivo era fazer as configurações básicas do Spring Security e implementar todo processo de autenticação.

Na sequência, vamos entender como funciona o token e como é esse processo no projeto. Após entendermos o conceito, vamos implementar o passo a passo.

Até mais!

# Faça como eu fiz: autenticação na API

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117188/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117188/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, implementando o processo de autenticação na API.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117188/opinion)

Primeiramente, você precisará adicionar o _**Spring Security**_ no projeto, incluindo essas dependências no `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-test</artifactId>
    <scope>test</scope>
</dependency>
```

Depois disso, você precisará criar as classes `Usuario`, `UsuarioRepository` e `AutenticacaoService` no projeto, conforme demonstrado a seguir:

```typescript
@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```

```csharp
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    UserDetails findByLogin(String login);
}
```

```java
@Service
public class AutenticacaoService implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByLogin(username);
    }
}
```

Você também deve criar uma nova _migration_ no projeto para a criação da tabela de usuários (**IMPORTANTE:** lembre-se de parar o projeto antes de criar a nova _migration_!):

```sql
create table usuarios(
    id bigint not null auto_increment,
    login varchar(100) not null,
    senha varchar(255) not null,

    primary key(id)
);
```

Além disso, você também vai precisar criar a classe com as configurações de segurança da API:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

Por fim, você precisará criar uma classe Controller e um DTO para lidar com as requisições de autenticação na API:

```kotlin
@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
        var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        var authenticaon = manager.authenticate(token);

        return ResponseEntity.ok().build();
    }
}
```

```csharp
public record DadosAutenticacao(String login, String senha) {
}
```

Para testar a autenticação, você precisará inserir um registro de usuário em seu banco de dados, na tabela de usuários:

```sql
insert into usuarios values(1, 'ana.souza@voll.med', '$2a$10$Y50UaMFOxteibQEYLrwuHeehHYfcoafCopUazP12.rqB41bsolF5.');
```

## Transcrição

A requisição de _login_ chega na classe `AutenticacaoController.java`. Nela, criamos o método `efetuarLogin`, recebendo o _DTO_ `DadosAutenticacao`.

Usamos, além disso, as classes do _Spring Security_ para disparar o processo de autenticação. O _DTO_ do _Spring Security_ é `UsernamePasswordAuthenticationToken`. Neles, passamos o _login_ e a senha que chegam ao _DTO_.

Usamos, também, a classe `AuthenticationManager`, do _Spring Security_, para disparar o processo de autenticação.

Nosso foco da aula será ter o _token_ como retorno no _Insomnia_.

De volta à classe `AutenticacaoController.java`, vamos remover `.build()` de `return` e adicionar o _token_ entre os parênteses do parâmetro `.ok`

Vamos adicionar a biblioteca _Auth0_ ao projeto. Ela será utilizada para gerar o _token_, seguindo o padrão _JWT_.

Para pegarmos a biblioteca, acessaremos o site [https://jwt.io/](https://jwt.io/). Clicaremos na segunda opção do menu superior do site, "Libraries". Lá, encontraremos uma lista com várias bibliotecas que geram _tokens_ no padrão _JWT_.

À direita da tela, na parte superior, encontramos uma _combo box_ que pode ser usada para filtrar as linguagens de programação. Nela, selecionaremos "Java". Serão exibidos todos os projetos que geram tokens para projetos _JWT_.

Selecionaremos a primeira, a biblioteca em _Java_ para gerar _tokens_ em _JWT_ do _Auth0_. Vamos clicar no link "View Repo", no canto inferior direito. Com isso, seremos redirecionados para o repositório da biblioteca no _Github_.

Para instalar a biblioteca, vamos levar uma dependência para o _Maven_. Vamos copiar a _tag_ de _dependency_ abaixo da seção "Installation"

> Obs: No momento de gravação do vídeo, a biblioteca está na versão 4.2.1. Recomendamos que você a utilize, para que consigamos fazer tudo que o instrutor faz no treinamento.

Vamos adicioná-la ao nosso projeto, pela _IDE_. Vamos parar o servidor antes de prosseguir. Depois disso, vamos acessar o arquivo "pom.xml". Abaixo da última dependência, passaremos o código abaixo:

```xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>4.2.1</version>
</dependency>
```

A biblioteca que fará a geração dos _tokens_ foi importada com sucesso.

> Obs: É preciso inserir o trecho de código entre as tags `<dependencies>`.

Depois, no _Maven_, clicaremos no botão de _Reload_

# Para saber mais: JSON Web Token

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117190/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117190/question)

**_JSON Web Token_**, ou JWT, é um padrão utilizado para a geração de _tokens_, que nada mais são do que Strings, representando, de maneira segura, informações que serão compartilhadas entre dois sistemas. Você pode conhecer melhor sobre esse padrão em seu [site oficial](https://jwt.io/introduction).

Aqui na Alura temos o artigo [O que é JSON Web Tokens?](https://www.alura.com.br/artigos/o-que-e-json-web-tokens) e o Alura+ [O que é Json Web Token (JWT)?](https://cursos.alura.com.br/extra/alura-mais/o-que-e-json-web-token-jwt--c203), que também explicam o funcionamento do padrão JWT.

## Transcrição

Agora faremos a geração do token para inclui-lo na resposta.

Faremos isso criando uma nova classe no projeto, para que possamos isolar o token, uma boa prática em programação. Vamos acessar "infra > security". É nessa pasta que criaremos o token.

Apertaremos "Alt + Insert" e selecionaremos a primeira opção, "Java Class". O nome dela será "TokenService".

Ela fará a geração, a validação e o que mais estiver relacionado aos tokens. No arquivo "TokenService.java", passaremos a anotação `@Service`, já que a classe representará um serviço.

Dentro disso, declararemos o método `public`, com `String` como retorno, que representa o token a ser gerado. O nome do método será `gerarToken`. Dentro dela, usaremos a biblioteca que adicionamos ao projeto na aula anterior.

Vamos copiar o trecho de código da seção "Create a JWT", para gerar nosso token. Vamos copiá-lo e colá-lo dentro do método `gerarToken`, fazendo algumas alterações.

A mais importante delas será a substituição do algoritmo padrão por `HMAC256`. Como parâmetro dela, passaremos a senha `12345678`.

Em breve, aprenderemos a ocultar a senha, para que ela não fique exposta em código aberto.

> Obs: O ideal é que os tokens da API tenham data de validade.

Vamos gerar a validade chamando o método `.withExpiresAt()`, passando como parâmetro `dataExpiracao()`. Precisamos criar esse método privado clicando em "Alt + Enter".

Substituiremos `Date` por `Instant` e configuraremos o tempo de expiração:

```typescript
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.springframework.stereotype.Service;

@Service
public class TokenService {

    public String gerarToken(Usuario usuario) { 
        try {
            var algoritmo = Algorithm.HMAC256("12345678");
            return JWT.create()
                .withIssuer("API Voll.med")
                .withSubject(usuario.getLogin())
                .withExpiresAt(dataExpiracao())
                .sign(algoritmo);
        } catch (JWTCreationException exception){
            throw new RuntimeException("erro ao gerrar token jwt", exception);
        }		
    }

    private Instant dataExpiracao() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
```

Agora o token estará criado.

Vamos acessar "AutenticacaoController.java" e, logo abaixo do atributo `AuthenticationManager`, passaremos `@Autowired`, e, logo abaixo, `private TokenService`.

E também `Response.Entity.ok(tokenService.gerarToken((usuario) authentication.getPrincipal()));`:

```typescript
@Autowired
private TokenService tokenService;

@PostMapping
public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
    var token = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
    var authentication = manager.authenticate(token);
        
    return ResponseEntity.ok(tokenService.gerarToken((Usuario) authentication.getPrincipal()));
}
```

Se voltarmos a executar a aplicação e dispararmos a requisição de login no Insomnia, teremos o tolken devolvido com sucesso.

## Transcrição

Vamos copiar o _token_ que foi devolvido como resultado no _Insomnia_. De volta ao navegador, acessaremos novamente o [https://jwt.io](https://jwt.io/).

No site, acessaremos a seção "Debugger", na qual colaremos o _token_ na caixa de texto abaixo de "Encoded". Em "Decoded", receberemos o _token_ dissecado. Assim, descobriremos as informações que estão presentes nele.

A parte vermelha é o cabeçalho, onde descobrimos o algoritmo utilizado para fazer a geração do _token_, que foi o _HS256_.

A parte roxa tem as informações adicionadas dentro do _token_, _issuer_, que é "API Voll.med", a data de expiração, programada para duas horas à frente, e o _subject_, onde passamos o login do usuário que se autenticou.

Vamos voltar à IDE e acessar a classe "AutenticacaoController.java". Vamos criar um _DTO_ para encapsular o _token_ e não devolvê-lo solto, como fazemos no corpo da resposta.

Vamos selecionar `tokenService.gerarToekn((Usuario) authentication.getPrincipal())`. Com um "Ctrl + X", levaremos essa linha de código para antes da linha do _return_, onde criaremos outra variável, `var tokenJWT =`. Depois do `=`, colaremos a linha de código que antes estava abaixo.

Passaremos como parâmetro do `return` `(new DadosTokenJWT(tokenJWT))`. Como a classe `DadosTokenJWT` ainda não foi criada, vamos nos deparar com um erro de compilação.

Criaremos, portanto, com "Alt + Enter > Create Record DadosTokenJWT". Trocaremos o "Destination package" (pacote de destino) de `med.voll.api.controller` para `med.voll.api.infra.security`.

> Obs: No _DTO_, substitua `(String tokenJWT)` por `(String token)`.

Agora nosso _controller_ chama a classe `tokenService`, responsável por gerar o _token_, recebe o _token_ de volta e devolve isso em um _DTO_:

```typescript
@PostMapping
public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
    var authenticationToken = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
    var authentication = manager.authenticate(authenticationToken);

    var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());

    return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
}
```

Vamos voltar ao _Insomnia_ para testar. Antes, quando disparávamos a requisição, recebíamos o _token_ solto como resposta. Agora, ao dispararmos, perceberemos que ele virá dentro de um _JSON_, com um campo chamando "token" e a _string_ representando o _token_.

Agora voltaremos à classe "TokenService.java" na IDE. Nela, precisamos passar uma senha secreta na linha de criação do algoritmo, o que é indispensável para fazer a assinatura do _token_.

Nas aulas anteriores, havíamos passado "12345678" como senha. Como passar a senha em texto dentro do código não é uma boa prática de segurança, vamos fazer a leitura dessa senha de algum lugar.

O primeiro passo será remover o "12345678" do código. No lugar dela, passaremos um atributo chamando `secret`. Vamos declarar o atributo dentro da classe `TokenService`, com a linha de código `private String secret;`.

Com o atalho "Shift + Shift", buscaremos por "application.properties". Nele, criaremos uma nova propriedade: `api.security.token.secret=`. Depois do `=`, pediremos para que o _Spring_ leia essa informação a partir de uma variável de ambiente.

Para isso, passaremos `api.security.token.secret=${JWT_SECRET}`. Logo depois, passaremos, ainda dentro das chaves, `12345678`.

Com isso, caso o sistema não consiga acessar a variável de ambiente, ele utilizará "12345678" como senha secreta.

Se dispararmos a requisição no _Insomnia_, receberemos o erro 500 como retorno. O erro aconteceu porque, em "TokenService.java", nós declaramos o atributo `secret` mas não falamos para o _Spring_ que ele deve buscá-lo em "application.properties".

Na linha acima de `private String secret;`, passaremos a anotação `@Value`.

> Obs: Cuidado ao importar! Há o _Value_ do _Lombok_ e o value do _Spring_ _Framework_. O que nos interessa é o segundo.

Entre aspas, como parâmetro, passaremos `"${api.security.token.secret}"`.

Para garantir que a leitura está sendo feita da maneira correta, vamos até o método `gerarToken`. Antes do `try/catch` passaremos `System.out.println(secret);`:

```typescript
@Value("${api.security.token.secret}")
private String secret;

public String gerarToken(Usuario usuario) {
    System.out.println(secret);
```

Salvando o projeto e voltando ao _Insomnia_, vamos disparar a requisição. O _token_ será gerado e, de volta à IDE, em "TokenService.java", veremos que foi impressa a senha "12345678", o que significa que a leitura foi feita corretamente na classe "TokenService.java", no atributo `secret`.

Como tudo deu certo, podemos remover o `System.out.println(secret);`.

Conseguimos fazer a geração correta do _token_.

# Para saber mais: Outras informações no token

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/120940/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/120940/question)

Além do Issuer, Subject e data de expiração, podemos incluir outras informações no token JWT, de acordo com as necessidades da aplicação. Por exemplo, podemos incluir o _id_ do usuário no token, para isso basta utilizar o método `withClaim`:

```java
return JWT.create()
    .withIssuer("API Voll.med")
    .withSubject(usuario.getLogin())

    .withClaim("id", usuario.getId())

    .withExpiresAt(dataExpiracao())
    .sign(algoritmo);
```

O método `withClaim` recebe dois parâmetros, sendo o primeiro uma String que identifica o nome do claim (propriedade armazenada no token), e o segundo a informação que se deseja armazenar.

# Faça como eu fiz: geração de Tokens

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117192/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117192/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, implementando a geração de **_tokens JWT_** quando um usuário se autenticar na API.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117192/opinion)

Primeiramente, você precisará adicionar a biblioteca **_Auth0 java-jwt_** no projeto, incluindo essa dependência no `pom.xml`:

```xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>4.2.1</version>
</dependency>
```

Na sequência, será necessário criar a classe responsável pela geração dos _tokens_:

```typescript
@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String gerarToken(Usuario usuario) {
        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.create()
                    .withIssuer("API Voll.med")
                    .withSubject(usuario.getLogin())
                    .withExpiresAt(dataExpiracao())
                    .sign(algoritmo);
        } catch (JWTCreationException exception){
            throw new RuntimeException("erro ao gerar token jwt", exception);
        }
    }

    private Instant dataExpiracao() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

}
```

Você também vai precisar adicionar a seguinte propriedade no arquivo `application.properties`:

```ini
api.security.token.secret=${JWT_SECRET:12345678}
```

Por fim, será necessário criar o DTO `DadosTokenJWT` e alterar a classe `AutenticacaoController`:

```csharp
public record DadosTokenJWT(String token) {}
```

```typescript
@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        var authentication = manager.authenticate(authenticationToken);

        var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());

        return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
    }

}
```

## Transcrição

Hoje nosso foco será a liberação de requisições da _API_.

No _Insomnia_, podemos ver que o processo de liberação é relativamente simples: consiste em uma nova requisição, com a _URL_ "[http://localhost:8080/login"](http://localhost:8080/login%22).

O corpo de requisição consiste em um arquivo _.json_ com login e senha da pessoa.

O _token_ precisa ser armazenado pelo aplicativo mobile do cliente. E, nas próximas requisições, o _token_ precisará ser enviado junto a elas.

De volta à _IDE_, acessaremos "src > main > java > med.voll.api > controller > MedicoController". É nesse arquivo que mapeamos a URL "/medicos".

Quando dispararmos a requisição, é por _MedicoController_ que ela passará primeiro. Em `@GetMapping`, poderíamos criar a variável `token` e passar o `if (token ==null)`. Levaríamos a variável `ResponseEntity` e seu _return_ para dentro da chaves.

E, por fim, fora das chaves, construiremos um _else_ para devolver o bloqueio da requisição. Porém, teríamos que passar esse código em todos os métodos e em todos os _controllers_. Portanto, não faz sentido aplicar esse método.

Para otimizar o código e evitar código repetido, criaremos uma classe separada para validar o token. Assim, o _Spring_ conseguirá chamá-la automaticamente antes de acessar os métodos dos _controllers_.

> Obs: Será preciso chamar a nova classe antes da requisição do controller.

O _Spring_ tem uma classe chamada `DispatcherSevlet`, responsável por receber todas as requisições do projeto. Ela descobre qual controller será preciso chamar em cada requisição.

Depois que a requisição passa pelo `DispatcherSevlet`, os _Handler Interceptors_ são executados. Com ele, identificamos o _controller_ a ser chamado e outras informações relacionadas ao _Spring_.

Já os _filters_ aparecem antes mesmo da execução do _Spring_, onde decidimos se a requisição será interrompida ou se chamaremos, ainda, outro _filter_.

Portanto, precisaremos criar um _filter_ ou um _interceptor_ no nosso projeto, para que o código, com a validação do _token_, sejam colocado dentro deles. Ele terá, então, o papel de ser executado como o "interceptador" da requisição.

Em outras palavras, a requisição passará pelo filtro antes de cair no _controller_.

# Para saber mais: Filters

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117194/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117194/question)

_Filter_ é um dos recursos que fazem parte da especificação de Servlets, a qual padroniza o tratamento de requisições e respostas em aplicações Web no Java. Ou seja, tal recurso não é específico do Spring, podendo assim ser utilizado em qualquer aplicação Java.

É um recurso muito útil para isolar códigos de infraestrutura da aplicação, como, por exemplo, segurança, logs e auditoria, para que tais códigos não sejam duplicados e misturados aos códigos relacionados às regras de negócio da aplicação.

Para criar um _Filter_, basta criar uma classe e implementar nela a interface `Filter` (pacote jakarta.servlet). Por exemplo:

```java
@WebFilter(urlPatterns = "/api/**")
public class LogFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("Requisição recebida em: " + LocalDateTime.now());
        filterChain.doFilter(servletRequest, servletResponse);
    }

}
```

O método `doFilter` é chamado pelo servidor automaticamente, sempre que esse _filter_ tiver que ser executado, e a chamada ao método `filterChain.doFilter` indica que os próximos _filters_, caso existam outros, podem ser executados. A anotação `@WebFilter`, adicionada na classe, indica ao servidor em quais requisições esse _filter_ deve ser chamado, baseando-se na URL da requisição.

No curso, utilizaremos outra maneira de implementar um _filter_, usando recursos do Spring que facilitam sua implementação.

## Transcrição

Vamos criar um filtro no projeto, para interceptar requisições. O que queremos é fazer a validação do _token_ antes que ele caia no _controller_. Para isso, voltaremos à _IDE_.

Vamos criar o projeto dentro da pasta "med.voll.api > infra > security". Vamos usar o atalho "Alt + Insert" e escolher a opção "Class". O nome da classe será "SecurityFilter".

Como o _Spring_ não conseguirá carregar a classe automaticamente no projeto, precisaremos passar a anotação `@Component` no código. Vamos implementar `Filter`, de `jakarta.servlet`, passando `implements`.

Passaremos também `extends OncePerRequestFilter`. Com o atalho "Alt + Enter", vamos implementar o método `doFilterInternal`.

Para garantir que o método está sendo passado adequadamente, passaremos `System.out.printlin("FILTRO CHAMADO")`:

```java
package med.voll.api.infra.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("FILTRO CHAMADO");
    }
}
```

Para garantir que tudo está funcionado, abriremos a abra "run" e limparemos tudo, clicando em "botão direito do mouse > Clear All".

Vamos até o _Insomnia_ disparar uma requisição para a nossa _API_. Se chamarmos, lá, a requisição "Listagem de médicos", teremos o código 200 como retorno, mas não receberemos o arquivo _.json_.

Após isso, se verificarmos a _IDE_, veremos que o filtro foi chamado. Então, o erro acontece porque o próximo filtro não foi chamado pelo filtro que criamos.

De volta ao arquivo "SecurityFilter.java", vamos apagar `System.out.println("FILTRO CHAMADO");`. No lugar dele, passaremos o código `filterChain.doFilter(request, response)`, para seguir o fluxo da requisição:

```java
package med.voll.api.infra.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        filterChain.doFilter(request, response);
    }
}
```

Voltando ao console e reiniciando-o, podemos disparar a requisição no _Insomnia_ novamente. Depois dessas alterações, teremos o arquivo _.json_ como retorno. Portanto, aprendemos a criar o nosso filtro com sucesso!

 [Discutir no Fórum](https://cursos.alura.com.br/forum/curso-spring-boot-aplique-boas-praticas-proteja-api-rest/exercicio-criando-o-filter-de-seguranca/117168/novo) [Próxima Ativ](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117168/next)
## Transcrição

Agora vamos implementar a lógica do nosso filtro, recuperando o _token_ para fazer sua validação.

No _Insomnia_, se acessarmos a aba "Auth", conseguiremos acessar as configurações referentes à autorização. Clicaremos na seta à direita da aba e vamos escolher a opção "Bearer".

Vamos deixar a _checkbox_ de "Enabled" selecionada. No primeiro campo de texto, à direita de "Token", vamos passar o texto do _token_. Se dispararmos o _token_, nada acontecerá ainda, porque ele ainda não está sendo recuperado.

De volta à _IDE_, vamos recuperá-lo em "SecurityFilter.java". Em `@Override`, logo abaixo de `protected void`, passaremos `var tokenJWT = recuperarToken(request)`. Com o método `recuperarToken`, recuperaremos o _token_.

Vamos nos deparar com um erro de compilação, porque esse método ainda não existe. Vamos criá-lo com o atalho "Alt + Enter".

No retorno do novo método, substituiremos `void` por `String`. Dentro dele, abriremos a variável `authorizationHeader = request.getHeader("Authorization");`.

Depois disso, faremos a validação com `if (authorizationHeader == null)`. Abaixo, passaremos `throw new RuntimeException("Token JWT não enviado no cabeçalho Authorization!")`. Fora do `if`, passaremos `return authorizationHeader;`.

Abaixo de `var tokenJWT`, passaremos `System.out.println(tokenJWT);`.

No método `recuperarToken`, na última linha do código, adicionaremos `.replace("Bearer ", ""):`

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    var tokenJWT = recuperarToken(request);

    System.out.println(tokenJWT);

    filterChain.doFilter(request, response);
}

private String recuperarToken(HttpServletRequest request) {
    var authorizationHeader = request.getHeader("Authorization");
    if (authorizationHeader == null) {
        throw new RuntimeException("Token JWT não enviado no cabeçalho Authorization!");
    }

    return authorizationHeader.replace("Bearer ", "");
}
```

Depois que salvarmos, voltaremos ao _Insomnia_. Lá, vamos disparar a requisição outra vez. Se checarmos o _console_, veremos que o _token_ foi impresso sem prefixo.

## Transcrição

Vamos apagar `System.out.println(tokenJWT)` do método `@Override`. Nosso próximo passo será fazer a validação do _token_.

Faremos isso acessando "TokenService.java". Nesse arquivo, criaremos o método "getSubject", que receberá como parâmetro `String tokenJWT`.

Dentro das chaves, passaremos o código de validação de _token_. Vamos encontrá-lo na biblioteca [https://github.com/auth0/java-jwt](https://github.com/auth0/java-jwt). O código poderá ser encontrado na seção "Verify a JWT". Vamos substituir o algoritmo padrão pelo algoritmo do método "gerarToken", do mesmo arquivo.

Faremos algumas adaptações. Se a requisição cair em `catch`, lançaremos uma exceção, com o código `throw new` RuntimeException("Token JWT inválido ou expirado!"):

```typescript
public String getSubject(String tokenJWT) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.require(algoritmo)
                        .withIssuer("API Voll.med")
                        .build()
                        .verify(tokenJWT)
                        .getSubject();
    } catch (JWTVerificationException exception) {
        throw new RuntimeException("Token JWT inválido ou expirado!");
    }
}
```

Agora voltaremos à classe "SecurityFilter.java", para chamar o método "TokenService.java". Vamos declará-la como atributo, abaixo de `@Component`. Vamos pedir que o _Spring_ injete essa classe para nós.

A anotação do atributo será `@Autowired`. Vamos importar com `private TokenService tokenService;`:

```java
@Autowired
private TokenService tokenService;
```

> Obs: Cuidado na hora de importar. Precisa ser o "TokenService" do nosso projeto, e não o do Spring.

No método `doFilterInternal`, já recuperamos o _token_ do cabeçalho na primeira linha. Agora, precisaremos validar se o _token_ está correto.

Faremos isso chamando o método `getSubject` e criando também a variável `var subject = tokenService.getSubject(tokenJWT);`.

Logo, abaixo, passaremos um `System.out`, para ver se tudo está funcionando:

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    var tokenJWT = recuperarToken(request);

    var subject = tokenService.getSubject(tokenJWT);
    System.out.println(subject);

    filterChain.doFilter(request, response);
}
```

Depois de salvar, vamos até o _Insomnia_ para disparar uma requisição.

Vamos disparar a requisição "Detalhar Médico". O _token_ não será enviado e nós receberemos um erro 500 como resultado, porque nós não configuramos o _token_.

Vamos selecionar, agora, a opção "Listagem de médicos". Lá, clicaremos na caixa de seleção à direita de "Enabled". Com isso, habilitaremos o cabeçalho, que é o responsável pelo envio do _token_.

Se dispararmos a requisição, ela será processada com sucesso. Como retorno, teremos um arquivo _.json_ com os dados do médico.

Se dermos uma olhada no console da _IDE_, veremos que o e-mail foi impresso.

Com isso, conseguimos recuperar o _token_, que vem de dentro do cabeçalho "Authorization", na requisição.

Podemos remover o `System.out`, porque verificamos que a autenticação está funcionando:

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    var tokenJWT = recuperarToken(request);

    var subject = tokenService.getSubject(tokenJWT);

    filterChain.doFilter(request, response);
}
```

No próximo vídeo, veremos o que pode substituir o `System.out` no _Spring_.

## Transcrição

Agora vamos fazer as configurações, no _Spring_, que substituirão o `System.out` que removemos no vídeo anterior.

Para que o _Spring_ controle a liberação, ou não, das requisições, precisaremos fazer algumas adaptações.

Lembrando que, como estamos construindo uma _API Rest_, precisamos efetuar login novamente a cada requisição. Por isso que enviamos o _token_, que funciona como a garantia de que o usuário se conectou previamente.

Vamos acessar a classe "SecurityConfigurations.java" para trabalhar em algumas alterações. No método `SecurityFilterChain`, vamos dar um enter antes de `.and().build()`. Nessa linha em branco, passaremos `.and().authorizeRequests()`.

Com o método `authorizeRequest`, configuramos a autorização das requisições. Vamos dar um enter e, na nova linha em branco, passaremos `antMatchers(HttpMethod.POST, "/login").permitAll()`. Essa definição diz para o _Spring_ que a única requisição que deve ser liberada é a de login.

Abaixo, passaremos `.anyRequest().authenticated()`. Com essa duas linhas, definimos o controle de acesso na _API_.

Todas as requisições que não forem de login, não passarão. O controle disso será feito pelo próprio _Spring_:

> Obs: Devido a mudanças no Spring Security, o código abaixo não funciona mais. Na atividade "authorizeRequests deprecated", localizada logo depois desse vídeo, o instrutor deixou uma explicação sobre o novo código.

```scss
@Bean
public SecurityFilterChain (HttpSecurity http) throws Exception {
    return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .anyRequest().authenticated()
                .and().build();
}
```

Vamos salvar e volta ao _Insomnia_, para executar um teste. Se tentarmos disparar a requisição "Listagem de médicos", teremos como retorno o erro "403 Forbidden", mesmo enviando o _token_.

Isso acontece porque, para o _Spring_, ainda não estamos logados. Porém, quando tentamos executar a requisição "Efetuar login", recebemos o mesmo código como retorno, indicando erro.

Vamos voltar para o código da classe "SecurityFilter.java", para entender porque todas as requisições estão sendo bloqueadas.

Em `recuperarToken`, vamos remover o `if` e passar `if (authorizationHeader != null)`. Entre as chaves, diremos que `return authorizationHeader.replace("Bearer ", "");`.

Fora das chaves, passaremos `return null`.

Em `@Override`, logo abaixo de `var tokenJWT`, passaremos um `if (tokenJWT != null)`. Dentro das chaves, passaremos `var subject = tokenService.getSubject(tokenJWT)`:

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    var tokenJWT = recuperarToken(request);

    if (tokenJWT != null) {
        var subject = tokenService.getSubject(tokenJWT);
    }

    filterChain.doFilter(request, response);
}
                
private String recuperarToken(HttpServletRequest request) {
    var authorizationHeader = request.getHeader("Authorization"):
    if (authorizationHeader != null) {
            return authorizationHeader.replace("Bearer ", "");
    }

    return null;
} 
```

Depois de salvar, vamos disparar a requisição novamente no _Insomnia_. A requisição de login será permitida e, como retorno, receberemos um _token_.

Se tentarmos disparar qualquer outra requisição, elas não serão liberadas, mesmo com o token. Isso acontece porque configuramos para que só requisições autenticadas sejam liberadas pelo _Spring_.

Para dizer que as outras requisições estão autenticadas, em outras palavras, para pedir para que o _Spring_ considere que a pessoa está logada, acessaremos outra vez "SecurityFilter.java".

Para acessar o banco de dados, porém, precisamos do _repository_. Por isso, vamos declarar e injetar mais um atributo, abaixo de `private TokenService`. Passaremos `@Autowired` e, abaixo, `private UsuarioRepository repository`.

Dentro do `if (tokenJWT != null)`, vamos passar `var usuario = repository.findByLogin(subject);`, para passar uma autenticação forçada.

Também precisaremos chamar a classe `SecurityContextHolder`, que traz consigo o método estático `getContext().setAuthentication(authentication)`.

Na linha de cima, criaremos a variável `authentication`, igualando-a à classe `UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities())`:

```java
@Autowired
private TokenService tokenService;

@Autowired
private UsuarioRepository repository;

@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    var tokenJWT = recuperarToken(request);

    if (tokenJWT != null) {
        var subject = tokenService.getSubject(tokenJWT);
        var usuario = repository.findByLogin(subject);

        var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    filterChain.doFilter(request, response);
}
```

Agora a autenticação está feita. O _Spring_ considerará que o usuário está logado.

#   
authorizeRequests deprecated

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/119206/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/119206/question)

**Atenção!**

Na versão 3.0.0 final do Spring Boot uma mudança foi feita no Spring Security, em relação aos códigos que restrigem o controle de acesso.

Ao longo das aulas o método `securityFilterChain(HttpSecurity http)`, declarado na classe **SecurityConfigurations**, ficou com a seguinte estrutura:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and().authorizeRequests()
            .antMatchers(HttpMethod.POST, "/login").permitAll()
            .anyRequest().authenticated()
            .and().build();
}
```

Entretanto, desde a versão **3.0.0** final do Spring Boot o método **authorizeRequests()** se tornou **deprecated**, devendo ser substituído pelo novo método **authorizeHttpRequests()**. Da mesma forma, o método **antMatchers()** deve ser substituído pelo novo método **requestMatchers()**:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and().authorizeHttpRequests()
            .requestMatchers(HttpMethod.POST, "/login").permitAll()
            .anyRequest().authenticated()
            .and().build();
}
```

## Mudanças na versão 3.2

Outra mudança, em relação ao código da classe de configurações de segurança, ocorreu a partir da versão **3.2**. Agora, o código deve ficar assim:

```scss
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return 
        http.csrf(csrf -> csrf.disable())
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(req -> {
            req.requestMatchers("/login").permitAll();
            req.anyRequest().authenticated();
        })
    .build();
}
```

## Transcrição

Vamos executar alguns testes no _Insomnia_, para saber se tudo está funcionando corretamente.

Para simular o login na _API_, vamos disparar a requisição "Efetuar Login". A requisição não será bloqueada e, como retorno, receberemos o _token_.

Se dispararmos a requisição "Detalhar Médico" sem levar o _token_, ela não estará autenticada. Por isso, teremos como resposta o código "403 Forbidden".

Agora vamos tentar disparar essa mesma requisição, mas levando o _token_. Vamos acessar a aba "Auth" e clicar na seta à direita do nome. Selecionaremos a opção "Bearer Token".

Vamos colar o _token_ da requisição "Efetuar Login" no espaço de texto à direita de "Token". Com isso, deveríamos receber o código "200", porque a requisição deveria passar. Porém, quando disparamos a requisição, continuamos recebendo o código "403 Forbidden".

Vamos voltar à IDE para entender o que aconteceu. Isso acontece porque o _Insomnia_ não consegue acessar o `if` em "SecurityFilter.java". O _filter_ não está funcionando.

Isso acontece porque há um segundo filtro, do _Spring_, sendo chamado na aplicação. Precisaremos, portanto, determinar a ordem de aplicação dos filtros.

Se não fizermos isso, por padrão, o _Spring_ executará primeiro o filtro dele. Precisamos que ele chame primeiro o que configuramos, para verificar se o _token_ está vindo e autenticar o usuário.

Faremos essa alteração na classe "SecurityConfigurations.java". Abaixo de `.anyRequest().authenticated()`, passaremos `.and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)`

Vamos injetar a classe, passando, acima de `@Bean`, `private SecurityFilter securityFilter`. Passaremos `@Autowired` acima desse atributo.

Vamos remover o `.and()` da última linha:

```scss
@Autowired
private SecurityFilter securityFilter;

@Bean
public SecurityFilterChain (HttpSecurity http) throws Exception {
    return http.csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and().authorizeHttpRequests()
            .requestMatchers(HttpMethod.POST, "/login").permitAll()
            .anyRequest().authenticated()
            .and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
}
```

Depois que salvarmos, vamos limpar o console e disparar a requisição novamente. Agora deu certo. Teremos como retorno o código "200".

Se quisermos disparar as outras requisições, precisaremos clicar na seta para baixo da aba "Auth", selecionar "Bearer Token" e informar um token válido no campo de texto à direita da opção "Token".

Conseguimos implementar autorização e autenticação usando _tokens_.

#   
Ainda com erro 403?

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/130894/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/130894/question)

**Atenção!**

A utilização do Spring Security para implementar o processo de autenticação e autorização via JWT exige bastante mudanças no código, com a criação de novas classes e alteração de algumas já existentes no projeto. Tais mudanças devem ser feitas com muita atenção, para que o processo de autenticação e autorização na API funcione corretamente.

É bem comum receber **erro 403** nas requisições disparadas no Insomnia, mesmo que você tenha implementado todo o código que foi demonstrado ao longo das aulas. Tal erro vai ocorrer somente no caso de você ter cometido algum descuido ao realizar as mudanças no projeto. Entretanto, existem diversas possibilidades que podem causar o erro 403 e veremos a seguir quais podem estar causando tal erro.

1) Erro ao recuperar o token JWT

Na classe `SecurityFilter` foi criado o método `recuperarToken`:

```typescript
private String recuperarToken(HttpServletRequest request) {
    var authorizationHeader = request.getHeader("Authorization");
    if (authorizationHeader != null) {
        return authorizationHeader.replace("Bearer ", "");
    }

    return null;
}
```

Na linha do return, dentro do if, utilizamos o método **replace** da classe String do Java para apagar a palavra **Bearer**. Repare que existe um **espaço em branco** após a palavra Bearer. Um erro comum é esquecer de colocar esse espaço em branco e deixar o código assim:

```kotlin
return authorizationHeader.replace("Bearer", "");
```

Verifique se você cometeu esse erro no seu código! Uma dica é utilizar também o método **trim** para apagar os espaços em branco da String:

```kotlin
return authorizationHeader.replace("Bearer ", "").trim();
```

2) Issuer diferente ao gerar o token

Na classe `TokenService` foram criados os métodos `gerarToken` e `getSubject`:

```typescript
public String gerarToken(Usuario usuario) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.create()
                .withIssuer("API Voll.med")
                .withSubject(usuario.getLogin())
                .withExpiresAt(dataExpiracao())
                .sign(algoritmo);
    } catch (JWTCreationException exception){
        throw new RuntimeException("erro ao gerar token jwt", exception);
    }
}

public String getSubject(String tokenJWT) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.require(algoritmo)
                .withIssuer("API Voll.med")
                .build()
                .verify(tokenJWT)
                .getSubject();
    } catch (JWTVerificationException exception) {
        throw new RuntimeException("Token JWT inválido ou expirado!");
    }
}
```

Repare que nos dois métodos é feita uma chamada ao método **withIssuer**, da classe `JWT`:

```bash
.withIssuer("API Voll.med")
```

Tanto no método `gerarToken` quanto no `getSubject` o issuer deve ser **exatamente o mesmo**. Um erro comum é digitar o issuer diferente em cada método, por exemplo, em um método com letra maiúscula e no outro com letra minúscula.

Verifique se você cometeu esse erro no seu código! Uma dica é converter essa String do issuer em uma constante da classe:

```typescript
private static final String ISSUER = "API Voll.med";

public String gerarToken(Usuario usuario) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.create()
                .withIssuer(ISSUER)
                .withSubject(usuario.getLogin())
                .withExpiresAt(dataExpiracao())
                .sign(algoritmo);
    } catch (JWTCreationException exception){
        throw new RuntimeException("erro ao gerar token jwt", exception);
    }
}

public String getSubject(String tokenJWT) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.require(algoritmo)
                .withIssuer(ISSUER)
                .build()
                .verify(tokenJWT)
                .getSubject();
    } catch (JWTVerificationException exception) {
        throw new RuntimeException("Token JWT inválido ou expirado!");
    }
}
```

Também é possível deixar essa String declarada no arquivo application.properties e injetá-la em um atributo na classe, similar ao que foi feito com o atributo **secret**.

3) Salvar a senha do usuário em texto aberto no banco de dados

Na classe `SecurityConfigurations` ensinamos ao Spring que nossa API vai utilizar o BCrypt como algoritmo de hashing de senhas:

```typescript
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

Com isso, ao inserir um usuário na tabela do banco de dados, sua senha deve estar no formato BCrypt e não em texto aberto:

```sql
mysql> select * from usuarios;
+----+--------------------+--------------------------------------------------------------+
| id | login              | senha                                                        |
+----+--------------------+--------------------------------------------------------------+
|  1 | ana.souza@voll.med | $2a$10$Y50UaMFOxteibQEYLrwuHeehHYfcoafCopUazP12.rqB41bsolF5. |
+----+--------------------+--------------------------------------------------------------+
1 row in set (0,00 sec)
```

Verifique se a senha do usuário que você inseriu na sua tabela de usuários está no formato BCrypt! Um erro comum é inserir a senha em texto aberto. Por exemplo:

```sql
mysql> select * from usuarios;
+----+--------------------+--------+
| id | login              | senha  |
+----+--------------------+--------+
|  1 | ana.souza@voll.med | 123456 |
+----+--------------------+--------+
1 row in set (0,00 sec)
```

Se esse for o seu caso, execute o seguinte comando sql para atualizar a senha:

```swift
update usuarios set senha = '$2a$10$Y50UaMFOxteibQEYLrwuHeehHYfcoafCopUazP12.rqB41bsolF5.';
```

Obs: No json enviado pelo Insomnia, na requisição de efetuar login, a senha deve ser enviada em **texto aberto** mesmo, pois a conversão para BCrypt, e também checagem se ela está correta, é feita pelo próprio Spring.

No caso do erro 403 ainda persistir, alguma exception pode estar sendo lançada mas não sendo capturada pela classe `TratadorDeErros` que foi criada no projeto. Isso acontece porque o Spring Security intercepta as exceptions referentes ao processo de autenticação/autorização, antes da classe `TratadorDeErros` ser chamada.

Você pode alterar a classe `AutenticacaoController` colocando um try catch no método `efetuarLogin`, para conseguir ver no console qual exception está ocorrendo:

```typescript
@PostMapping
public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados) {
    try {
        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        var authentication = manager.authenticate(authenticationToken);

        var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());

        return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
```

Outra dica é também imprimir no console o token que está chegando na API, para você ter a certeza de que ele está chegando corretamente. Para isso, altere o método `getSubject`, da classe `TokenService`, modificando a linha que lança a `RuntimeException` dentro do bloco catch:

```typescript
public String getSubject(String tokenJWT) {
    try {
        var algoritmo = Algorithm.HMAC256(secret);
        return JWT.require(algoritmo)
                .withIssuer(ISSUER)
                .build()
                .verify(tokenJWT)
                .getSubject();
    } catch (JWTVerificationException exception) {
        throw new RuntimeException("Token JWT inválido ou expirado: " +tokenJWT);
    }
}
```

Agora será mais fácil identificar qual exception de fato está ocorrendo na API, causando o erro 403 nas requisições.

#   
Para saber mais: controle de acesso por url

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117196/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117196/question)

Na aplicação utilizada no curso não teremos perfis de acessos distintos para os usuários. Entretanto, esse recurso é utilizado em algumas aplicações e podemos indicar ao _Spring Security_ que determinadas URLs somente podem ser acessadas por usuários que possuem um perfil específico.

Por exemplo, suponha que em nossa aplicação tenhamos um perfil de acesso chamado de **ADMIN**, sendo que somente usuários com esse perfil possam excluir médicos e pacientes. Podemos indicar ao _Spring Security_ tal configuração alterando o método `securityFilterChain`, na classe `SecurityConfigurations`, da seguinte maneira:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().authorizeHttpRequests()
        .requestMatchers(HttpMethod.POST, "/login").permitAll()
        .requestMatchers(HttpMethod.DELETE, "/medicos").hasRole("ADMIN")
        .requestMatchers(HttpMethod.DELETE, "/pacientes").hasRole("ADMIN")
        .anyRequest().authenticated()
        .and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
        .build();
}
```

Repare que no código anterior foram adicionadas duas linhas, indicando ao _Spring Security_ que as requisições do tipo `DELETE` para as URLs `/medicos` e `/pacientes` somente podem ser executadas por usuários autenticados e cujo perfil de acesso seja **ADMIN**.

# Para saber mais: controle de acesso por anotações

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/120939/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/120939/question)

Outra maneira de restringir o acesso a determinadas funcionalidades, com base no perfil dos usuários, é com a utilização de um recurso do Spring Security conhecido como **Method Security**, que funciona com a utilização de anotações em métodos:

```java
@GetMapping("/{id}")
@Secured("ROLE_ADMIN")
public ResponseEntity detalhar(@PathVariable Long id) {
    var medico = repository.getReferenceById(id);
    return ResponseEntity.ok(new DadosDetalhamentoMedico(medico));
}
```

No exemplo de código anterior o método foi anotado com `@Secured("ROLE_ADMIN")`, para que apenas usuários com o perfil **ADMIN** possam disparar requisições para detalhar um médico. A anotação `@Secured` pode ser adicionada em métodos individuais ou mesmo na classe, que seria o equivalente a adicioná-la em **todos** os métodos.

**Atenção!** Por padrão esse recurso vem desabilitado no spring Security, sendo que para o utilizar devemos adicionar a seguinte anotação na classe `Securityconfigurations` do projeto:

```java
@EnableMethodSecurity(securedEnabled = true)
```

Você pode conhecer mais detalhes sobre o recurso de method security na documentação do Spring Security, disponível em: [https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html](https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html)


# Para saber mais: Tratando mais erros

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/125341/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/125341/question)

No curso não tratamos todos os erros possíveis que podem acontecer na API, mas aqui você encontra uma versão da classe `TratadorDeErros` abrangendo mais erros comuns:

```java
@RestControllerAdvice
public class TratadorDeErros {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity tratarErro404() {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity tratarErro400(MethodArgumentNotValidException ex) {
        var erros = ex.getFieldErrors();
        return ResponseEntity.badRequest().body(erros.stream().map(DadosErroValidacao::new).toList());
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity tratarErro400(HttpMessageNotReadableException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity tratarErroBadCredentials() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity tratarErroAuthentication() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha na autenticação");
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity tratarErroAcessoNegado() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acesso negado");
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity tratarErro500(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: " +ex.getLocalizedMessage());
    }

    private record DadosErroValidacao(String campo, String mensagem) {
        public DadosErroValidacao(FieldError erro) {
            this(erro.getField(), erro.getDefaultMessage());
        }
    }
}
```

#   
Faça como eu fiz: autorizando requisições

 [Próxima Atividade](https://cursos.alura.com.br/course/spring-boot-aplique-boas-praticas-proteja-api-rest/task/117197/next)

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117197/question)

Agora é com você! Faça o mesmo procedimento que eu fiz na aula, implementando os códigos necessários para realizar o **controle de acesso na API**.

Ver opinião do instrutor

### Opinião do instrutor

- [](https://cursos.alura.com.br/suggestions/new/spring-boot-aplique-boas-praticas-proteja-api-rest/117197/opinion)

Você precisará criar uma classe `Filter`, responsável por interceptar as requisições e realizar o processo de autenticação e autorização:

```java
@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioRepository repository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var tokenJWT = recuperarToken(request);

        if (tokenJWT != null) {
            var subject = tokenService.getSubject(tokenJWT);
            var usuario = repository.findByLogin(subject);

            var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    private String recuperarToken(HttpServletRequest request) {
        var authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null) {
            return authorizationHeader.replace("Bearer ", "");
        }

        return null;
    }

}
```

Você precisará também atualizar o código da classe `SecurityConfigurations`:

```scss
@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Autowired
    private SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .anyRequest().authenticated()
                .and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

E, por fim, vai precisar atualizar o código da classe `TokenService`:

```typescript
@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String gerarToken(Usuario usuario) {
        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.create()
                    .withIssuer("API Voll.med")
                    .withSubject(usuario.getLogin())
                    .withExpiresAt(dataExpiracao())
                    .sign(algoritmo);
        } catch (JWTCreationException exception){
            throw new RuntimeException("erro ao gerar token jwt", exception);
        }
    }

    public String getSubject(String tokenJWT) {
        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.require(algoritmo)
                    .withIssuer("API Voll.med")
                    .build()
                    .verify(tokenJWT)
                    .getSubject();
        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Token JWT inválido ou expirado!");
        }
    }

    private Instant dataExpiracao() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

}
```

