Você pode usar operadores para trabalhar com diversos tipos de observables.
Você pode fazer isso, através do pipe, que é uma função que passa diversos operadores que acontece no processo do observable.

Um Operador é uma função que cria um novo Observable com base no Observable atual. Esta é uma operação pura: o Observable anterior permanece inalterado. O pipe agrupa operadores, não modifica o fluxo inicial de dados retornados.
# Tap
Debugador da resposta da API
```ts
this.http.get<LivrosResultado>(this.API, { params }).pipe(

      tap((retornoApi) => console.log(retornoApi))

    )
```
# Map
Serve para transformar o resultado.
```ts
this.http.get<LivrosResultado>(this.API, { params }).pipe(

      tap((retornoApi) => console.log(retornoApi)),

      map(resultado => resultado.items),

      tap(resultado => console.log(resultado))

    )
```
Neste exemplo o resultado é transformado resultado.items. 
# Filter
Só permite a sequência apenas se o retorno da função determinada, pelo parâmetro da entrada do observable retornar true. 
```ts
filter((valorDigitado) => valorDigitado.length >= 3),
```
# Debounce time
Recebe como parâmetro um tempo de espera em milisegundos, que será esperado para terminar o fluxo. 
# distinctUntilChanged
Os valores recebidos ao longo do tempo (a-0, a-1, a-2) são comparados. Se forem iguais, nada acontece. Se forem diferentes, é feita uma nova requisição e o valor muda.
Basicamente ele verifica se a resposta anterior for igual ao atual, e evita uma requisição repetida.
# CatchError e Throw error
O catchError recebe como parâmetro o erro, e pode realizar uma operação sobre isso. O catchError retorna um observable novo, e aqui entra o operador throw error que recebe como parâmetro uma função que emite algum erro, ou algo assim.
```ts
catchError(erro => {

        console.log(erro)

        return throwError(() => new Error("Ops, ocorreu um erro"))

      })
```
# Of 
Retorna os parâmetro da função em um novo observable. 
# Resumo
**switchMap** - Operador de Transformação. Cancela requisições de observables anteriores, emitindo valores apenas do Observable projetado mais recentemente.

**filter** - Operador de filtragem. Filtra os itens emitidos pelo Observable de origem, permitindo apenas aqueles que satisfaçam uma condição especificada.

**debounceTime** - Operador de filtragem. Retorna um Observable que atrasa as emissões do Observable de origem pelo tempo especificado.

**distinctUntilChanged** - Operador de filtragem. Retorna um Observable que emite todos os valores enviados pelo observable de origem se forem distintos em comparação com o último valor emitido pelo observable de resultado.

**catchError** - Operador de Tratamento de Erros. Captura erros no observable manipulado retornando um novo observable ou lançando um erro.

**throwError** - Operador de Criação. Cria um observable que criará uma instância de erro e a enviará ao consumidor como um erro imediatamente após a assinatura.

**EMPTY** - Operador de Criação. Cria um Observable simples que não emite itens para o Observer e imediatamente emite uma notificação de complete.

**of** - Operador de Criação. Converte os argumentos em observable. Um Observable que emite os argumentos descritos e depois conclui.