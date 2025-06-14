No local onde acontecerá a renderização das rotas, coloque `<router-outlet></router-outlet>`, normalmente é colocado no app.component.html, para isso funcionar importe RouterOutlet da biblioteca routes:
```ts
import { RouterOutlet } from '@angular/router';
```
Para definir as rotas você pode encontrar o arquivo, `app.routes.ts`, nele terá uma lista de objetos Routes, que pode ser tanto uma rota para um componente, exemplo:
```ts
{

        path: 'formulario',

        component: FormularioContatoComponent

    },
```
Neste ele colocará no /formulario o componente FormularioContatoComponent. 
Ou você pode definir também um redirect, por exemplo:
```ts
{

        path: '',

        redirectTo: '/lista-contatos',

        pathMatch: 'full'

    }
```
Neste caso path é vázio, por isso devemos colocar o pathMatch como full.
# O que é o pathMatch
A propriedade `pathMatch` é uma configuração fundamental ao trabalhar com rotas em uma aplicação Angular. Ela está associada à definição de rotas e tem como objetivo determinar como o Angular deve corresponder uma URL fornecida com o padrão definido em uma rota específica.

Aqui está um resumo das principais características dessa propriedade:

**Definição da propriedade:**

A propriedade `pathMatch` é utilizada dentro de uma configuração de rota no Angular.

**Valores Possíveis:**

'prefix': Indica que a rota deve ser correspondida se a URL começa com o padrão definido na rota.

'full': Indica que a rota deve ser correspondida somente se a URL completa corresponder ao padrão definido na rota.

**Exemplo Prático:**

```lua
// Exemplo do arquivo de rotas (app-routing.module.ts)
const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent, pathMatch: 'full' },
  { path: 'detalhes', component: DetalhesComponent },
  { path: '**', component: NotFoundComponent },
];
```

Neste exemplo, a rota 'produtos' só será acionada se a URL completa corresponder exatamente a '/produtos', devido ao uso de `pathMatch`: 'full'.

**Importância da configuração:**

A configuração correta da propriedade `pathMatch` é crucial para garantir um roteamento preciso e evitar conflitos indesejados entre diferentes rotas.

**Evitando conflitos:**

Ao escolher entre 'prefix' e 'full', é importante considerar como a rota deve ser acionada e se deve corresponder à URL completa ou apenas a uma parte específica.

Em resumo, a propriedade `pathMatch` desempenha um papel vital na configuração de rotas, permitindo um controle preciso sobre como as URLs são correspondidas aos padrões de rota, o que é essencial para uma navegação eficiente e sem ambiguidades em uma aplicação Angular.
# Redicionando links
No local onde você colocara o link, adicione aos imports o routerLink:
```ts
import { RouterLink } from '@angular/router';
```
```TS
@Component({

  selector: 'app-formulario-contato',

  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule, RouterLink],

  templateUrl: './formulario-contato.component.html',

  styleUrl: './formulario-contato.component.css'

})
```
No botão ou ancora que você deseja colocar o link adicione a propriedade routerLink, e coloque a rota nela. Por exemplo:
```html
<button routerLink="/lista-contatos" class="botao-voltar">

        <img src="/assets/arrow-left.png" alt="Voltar">

        <span>Voltar</span>

    </button>
```
