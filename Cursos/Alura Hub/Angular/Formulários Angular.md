Existem dois tipos:
# Tipos de formulários
- Reativos(orientado a dados): focados principalmente no typescript. 
- Orientados a template: focados principalmente no template. Esse é o famoso banana in a box: [(ngModel)]
# Formulários reativos
## Colocando na prática
Importe a biblioteca "@angular/forms", e nela o objeto: ReactiveFormsModule. Adicione esse objeto nos imports. 
Na sua classe defina, o formulário do tipo FormGroup, para isso funcionar, importe formGroup em '@angular/forms'. Caso esteja dando erro por não ter sido instanciado coloce um `!` antes do `:`.
Agora defina o valor do formulário, com a instância do FormGroup, preenchendo cada campo com o nome do campo e depois a instância do FormControl, colocando como parâmetro o valor padrão.
### Exemplo
```ts
import { Component } from '@angular/core';

import { ContainerComponent } from "../../container/container.component";

import { SeparadorComponent } from '../../separador/separador.component';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

  

@Component({

  selector: 'app-formulario-contato',

  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule],

  templateUrl: './formulario-contato.component.html',

  styleUrl: './formulario-contato.component.css'

})

export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor() {

    this.contatoForm = new FormGroup({

      nome: new FormControl(''),

      telefone: new FormControl(''),      

      email: new FormControl(''),      

      aniversario: new FormControl(''),      

      redes: new FormControl(''),      

      observacoes: new FormControl(''),      

    })

  }

}
```