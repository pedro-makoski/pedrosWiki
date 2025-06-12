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
Porém para funcionar corretamente no Angular, você precisa conectar os inputs com o formControl, e formulário com o formGroup, você pode fazer assim, por exemplo:
```html
 <form [formGroup]="contatoForm">

        <label for="nome">Nome</label>

        <input type="text" id="nome" name="nome" placeholder="Digite o nome do contato" required formControlName="nome">

        <label for="telefone">Telefone</label>

        <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone do contato" required formControlName="telefone">

        <label for="email">E-mail</label>

        <input type="email" id="email" name="email" placeholder="Digite o e-mail do contato" required formControlName="email">

        <app-separador></app-separador>

        <label for="aniversario">Aniversario</label>

        <input type="date" id="aniversario" name="aniversario" placeholder="Digite o aniversario do contato" formControlName="aniversario">

        <label for="redes">Redes sociais</label>

        <div class="input-container">

            <span class="span-http">https://</span>

            <input type="url" id="redes" name="redes" placeholder="Digite a URL da página" formControlName="redes">

        </div>

        <label for="observacoes">Observações</label>

        <textarea name="observacoes" id="observacoes" placeholder="Coloque observações neste espaço" formControlName="observacoes"></textarea>

        <section class="botoes">

            <button type="button" class="botao-cancelar">Cancelar</button>

            <button type="submit" class="botao-salvar">Salvar Contato</button>

        </section>

    </form>
```
