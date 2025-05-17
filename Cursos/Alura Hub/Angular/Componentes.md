Crie componentes assim:
```bash
ng generate component <pasta-com-nome-do-componente>
```
Ou:
```bash
ng g c <pasta-com-nome-do-componente>
```
Perceba que ele tem um html, um CSS e um TS. Neste TS temos:
```ts
import { Component } from '@angular/core';

  

@Component({

  selector: 'app-container',//Nome que identifica o container no HTML

  imports: [],//Imports de outros componentes

  templateUrl: './container.component.html',//Lugar onde o template será executado

  styleUrl: './container.component.css'//Lugar com o estilo CSS

})

export class ContainerComponent {//Classe com dados do componente
}
```
Quando você quiser chamar esse componente em outro componente, você pode, onde esse nome se dá através do selector 
```html
<app-container>
```
Mas isso resultará num erro, para resolve-lo coloque nos imports do lugar onde você importou a classe do componente, também não se esqueça de colocar o import para essa classe.