São operadores que realizam operações com data bindings no Angular.
Como slice:
```html
<p class="titulo">{{ livro.title | slice:0:30 }}</p>
```
Ou como o date:
```html
<p class="resultado">{{ livro.publishedDate | date:'dd/MM/yyyy'}}</p>
```
# Criando PIPEs customizados
```bash
ng g pipe <caminho-para-o-pipe>
```
```ts
import { Pipe, PipeTransform } from '@angular/core';

  

@Pipe({

  name: 'autoria'

})

export class AutoriaPipe implements PipeTransform {

  

  transform(autoria: string[], ...args string[]): string {

    if(autoria) {

      return autoria[0]

    }

  

    return ""

  }

  

}
```
Deve sempre ter esse método transforms, o primeiro parâmetro é o valor antes do pipe, e o args é os valores de parâmetro que podem ou não existir.
Depois de criar o seu PIPE ***coloque o objeto como um dos parâmetro de declarations do arquivo app.module.ts.***

# Exemplos
De acordo com a [documentação do Angular](https://angular.io/guide/pipes-overview), os pipes podem ser usados para transformar strings, valores monetários, datas e outros dados para exibição.

Pipes são funções simples que aceitam um valor de entrada e retornam um valor transformado para ser usado em expressões no template. Os pipes são úteis porque você pode usá-los em toda a sua aplicação, enquanto declara cada pipe apenas uma vez.

O Angular possui vários pipes prontos para uso, conheça alguns deles:

- **DatePipe**: formata um valor de data de acordo com as regras de localidade.
- **UpperCasePipe**: transforma o texto em letras maiúsculas.
- **LowerCasePipe**: transforma o texto em letras minúsculas.
- **CurrencyPipe**: transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.
- **DecimalPipe**: transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.
- **PercentPipe**: transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.