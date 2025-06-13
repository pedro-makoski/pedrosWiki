Quando você instancia um formValue, depois dos parâmetros do valor padrão, você também pode passar, os validators, que pode ser um valor um array. 
Primeiro importe Validators, da biblioteca @angular/forms. 
Aqui temos um exemplo:
```ts
this.contatoForm = new FormGroup({

      nome: new FormControl('', Validators.required),

      telefone: new FormControl('',   Validators.required),      

      email: new FormControl('', [Validators.required, Validators.email]),      

      aniversario: new FormControl(''),      

      redes: new FormControl(''),      

      observacoes: new FormControl(''),    

    })
```
E quando for fazer o submit você pode, verificar se é valido, por exemplo:
```ts
if(this.contatoForm.valid) {

      console.log(this.contatoForm.value);

    }
```
A classe Validators no Angular é uma parte fundamental do sistema de validação de formulários. Ela fornece uma variedade de métodos estáticos que podem ser usados para impor regras específicas nos campos de um formulário reativo.

Abaixo estão alguns dos principais métodos dessa classe:

- 1 - required:

**Descrição**: garante que um campo seja preenchido.

**Uso**: Validators.required

- 2 - minLength:

**Descrição**: especifica o comprimento mínimo de uma string.

**Uso**: Validators.minLength(min: number)

- 3 - maxLength:

**Descrição**: especifica o comprimento máximo de uma string.

**Uso**: Validators.maxLength(max: number)

- 4 - pattern:

**Descrição**: aplica uma expressão regular para validar o formato de uma string.

**Uso**: Validators.pattern(pattern: string | RegExp)

- 5 - email:

**Descrição**: verifica se um campo contém um endereço de e-mail válido.

**Uso**: Validators.email

- 6 - min:

**Descrição**: define um valor mínimo para campos numéricos.

**Uso**: Validators.min(min: number)

- 7 - max:

**Descrição**: define um valor máximo para campos numéricos.

**Uso**: Validators.max(max: number)

- 8 - nullValidator:

**Descrição**: um validador nulo, que pode ser útil para desabilitar outros validadores temporariamente.

**Uso**: Validators.nullValidator

Esses métodos podem ser combinados e utilizados em conjunto ao criar instâncias de `FormControl` ou `FormGroup` no Angular. A aplicação desses validadores proporciona uma maneira robusta de garantir a integridade e validade dos dados em formulários reativos, contribuindo para a construção de aplicações mais confiáveis e seguras.
# Tratando erros e mostrando pro usuário
```ts
@if (contatoForm.get('email')?.errors && contatoForm.get('email')?.touched) {

            <div class="mensagem-erro">

                Campo obrigatório

            </div>

        }
```
?.erros é caso o elemento possua erros, e ?.touched é caso o elemento já foi tocado. E caso os dois estejam errados, ele mostra a menssagem com uma div.
## Verificando erros específicos
```html
@if (contatoForm.get('email')?.errors?.['required'] && contatoForm.get('email')?.touched) {

            <div class="mensagem-erro">

                Campo obrigatório

            </div>

        }

        @if (contatoForm.get('email')?.errors?.['email'] && contatoForm.get('email')?.touched) {

            <div class="mensagem-erro">

                Formato de e-mail inválido

            </div>

        }
```
Perceba que verificamos na primeira diretiva se é o erro required, e na segunda se é o erro por causa do email mal formatado.
## Diretiva @if
Renderiza o elemento caso uma condição seja verdadeira.
# Adicionando classes em casos específicos
```ts
[ngClass]="contatoForm.valid ? 'botao-salvar' : 'botao-desabilitado'"
```
Para isso funcionar corretamente você precisa colocar nos imports o `CommonModule`. 
```ts
<!-- Componente de Lista de Produtos →
@for(produto of listaProdutos; track produto.id)
<div>
    <h3>{{ produto.nome }}</h3>
    <p>{{ produto.descricao }}</p>
  
  <!-- Aplicar ngClass para destacar visualmente a disponibilidade -->
  <div [ngClass]="{'disponivel': produto.disponivel, 'indisponivel': !produto.disponivel}">
    {{ produto.disponivel ? 'Disponível' : 'Indisponível' }}
  </div>
</div>
```