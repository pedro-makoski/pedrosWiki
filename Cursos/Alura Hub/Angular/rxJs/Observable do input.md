Você pode ter um observable em um input usando o FormControl. 
```ts
campoBusca: FormControl = new FormControl()
```
```html
<input

      type="search"

      [formControl]="campoBusca"

    >
```
Depois você pode criar um observable da seguinte forma:
```ts
 <seu-nome>$ = this.campoBusca.valueChanges

    .pipe(

      switchMap(valorDigitado => this.livroService.buscar(valorDigitado)),

      map((items: Item[]) => {

         return this.livrosResultadoParaLivros(items)

      })

    )
```
O $ indica que é um observable. 
Depois deste código temos um um switch map dentro do pipe
# Switch Map
Tem como parâmetro uma outra função que retorna um observer, e caso este evento atual que chama o outro evento, crie um novo evento por algum motivo, ele cancela o anterior e cria um novo.
# Async
Para conectar os items do observable, é necessário usar o pipe async, que já faz o binding corretamente.
Exemplo:
```html
<div class="container-card" *ngIf="livrosEncontrados$ | async as listaLivros, else telaInicial">

  <div *ngFor="let livro of listaLivros">

    <app-livro [livro]="livro"></app-livro>

  </div>

</div>
```
Aqui ele já faz a inscrição diretamente e relaciona com o componente.
O uso do **as** é para indicar que vai receber um outro nome o resultado desta inscrição a qual será colocado na variável lisraLivros.
