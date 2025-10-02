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