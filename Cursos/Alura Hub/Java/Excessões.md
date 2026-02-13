Excessões que ocorrem a partir de um erro. 
# Pilha de execução no erro
Indica exatamente onde o erro ocorreu até a camada mais a cima de onde foi chamado.
# Try-catch
Sem eles o erro estora a camada, e vai estorando até não ter mais um try-catch. 
# Response Entity
Retorno do Controller que pode indicar mais algumas coisas.
```java
public ResponseEntity<String> aprovar(@RequestBody @Valid AprovarAdocaoDTO dto) {  
    try {  
        this.service.aprovar(dto);  
    } catch (EntityNotFoundException e) {  
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Adoção não encontrada");  // Status Not Found com body do tipo string.
    }  
    return ResponseEntity.ok().build();  
}
```
# Operador pipe no Catch de erros
Permite a múltipla captura de diferentes erros.
```java
@PostMapping  
@Transactional  
public ResponseEntity<String> solicitar(@RequestBody @Valid SolicitacaoDeAdocaoDTO dados) {  
    try {  
        this.service.solicitar(dados);  
    } catch (IllegalStateException | UnsupportedOperationException e) {  
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());  
    }  
    return ResponseEntity.ok("Adoção solicitada com sucesso!");  
}
```
# Excessão personalizada
```java
package adopet.api.exceptions;  
  
public class AdocaoException extends RuntimeException {  
    public AdocaoException(String message) {  
        super(message);  
    }  
}
```
Usa-se o Runtime exception para definir que uma excessão em tempo de execução.
# Tipos de excessão 
- unchecked exceptions -> não verificadas pelo compilador.
- checked exceptions -> verificadas pelo compilador. Ou seja, não vai permitir se você não tratar; Normalmente são herdada diretamente da Exception, nada de RuntimeException.
Para não precisar de tratar as exceptions neste momento, você pode colocar no final do cabeçalho da função o throw e o nome do erro.
```java
public String upload(MultipartFile imagem) throws IOException {  
  
    String novoNome = this.gerarNovoNome(imagem.getOriginalFilename());  
  
    String caminhoCompletoDoArquivo = PASTA_UPLOAD + novoNome;  
  
    imagem.transferTo(new File(caminhoCompletoDoArquivo));  
  
    return novoNome;  
}
```
# Controllers Advice - GlobalExceptionHandler
```java
package adopet.api.exceptions;  
  
import org.springframework.http.HttpStatus;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.ExceptionHandler;  
import org.springframework.web.bind.annotation.RestControllerAdvice;  
  
@RestControllerAdvice  
public class GlobalExceptionHandler {  
  
    @ExceptionHandler(AdocaoException.class)  
    public ResponseEntity<String> handleException(AdocaoException e) {  
	    // Retorna uma menssagem de erro, quando é emitido um adoção exception
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());  
    }  
}
```
# Padrão de objetos de erro
Durante o vídeo, citamos que há um padrão de respostas de erro para garantir a confiabilidade e robustez da nossa aplicação. A `RFC 7807` define uma estrutura de resposta de erros em APIs, contendo: tipo de erro, título, detalhes e assim por diante.

Caso queira saber mais, você pode acessar o site do [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807).
# Remover StackTrace para o cliente
Durante nossa jornada, vimos que não é uma boa prática retornar a **stack trace** para o usuário que está consumindo nossa API, pois isso expõe detalhes internos da nossa aplicação. Podemos mudar essa configuração no arquivo `application.properties`.

Para isso, você deve adicionar a seguinte propriedade:

```ini
server.error.include-stacktrace=never
```

Pronto! Agora podemos garantir que essas informações não sejam reveladas por este recurso.