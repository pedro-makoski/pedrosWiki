# Observables e Oberservers
Os observables são um fluxo de dados que obtem os dados, e os observers são os que recebem os dados desses observables.
## Criando Observables e Observers do verbo get
Num serviço, importe:
```ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
```
O http client conecta com requisições.
O constructor deve ter a injeção do HttpClient:
```ts
constructor(private http: HttpClient) {

 }
```
Depois disso, use o método get do http, por exemplo:
```ts
obterContatos(): Observable<Contato[]> {

    return this.http.get<Contato[]>(this.API);

  }
```
Ele espera que o resultado da API retorne o tipo de lista de contatos. E a partir disso ele retorna o tipo Observable com a generics desse valor.
### Consumindo
```ts
this.contatoService.obterContatos().subscribe(listaContatos => {
      this.contatos = listaContatos;
});
```
O subscribe serve para dentro de um componente receber quando a API ter uma resposta, e coloca dentro da variável contatos.
## Resolvendo o erro de provide do HTTP
Possivelmente você encontrará um erro do provider do HTTP sendo nulo. Isso acontece pois devemos definir nas configurações que o sistema usa o HTTP.
Para resolver isso, coloque no `app.config.ts`, na lista de providers o seguinte: `provideHttpClient()`, para isso resolver, deve-se colocar nos imports:
```ts
import { provideHttpClient } from '@angular/common/http';
```
## Entenda mais
Os observables fazem parte da biblioteca [RxJS](https://rxjs.dev/) e são coleções de valores ou eventos que podem ser emitidos ao longo do tempo. Eles representam uma fonte de dados que pode ser observada conforme novos valores ou eventos são produzidos.

Os observables operam em um padrão de assinatura, onde um "observador" se inscreve para receber notificações sempre que um novo valor ou evento é emitido. Essas notificações podem incluir novos valores, erros ou a sinalização de conclusão.

Em aplicações Angular, os observables são frequentemente utilizados para lidar com operações assíncronas, como requisições HTTP ou eventos da pessoa usuária. O HttpClient, por exemplo, retorna Observables para lidar com respostas HTTP assíncronas.

Compreender e aplicar Observables em Angular é fundamental para lidar com dados assíncronos e eventos de forma eficiente e reativa, proporcionando uma melhor experiência em aplicações web modernas.

Se você deseja aprofundar seu conhecimento sobre como utilizar Observables no Angular, recomendamos o curso [RxJS e Angular: programando de forma reativa](https://cursos.alura.com.br/course/rxjs-angular-programando-forma-reativa), onde você aprenderá a utilizar o poderoso RxJS em conjunto com o Angular para criar aplicações reativas e elegantes.
# Requisição POST
```ts
this.http.post<Contato>(this.API, contato)
```
O segundo parâmetro é o body da resposta. Essa função também retornam um observable com o subscribe.