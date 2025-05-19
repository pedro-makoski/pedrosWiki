Conexão entre o input e uma variável. Permitindo criar elementos reativos. Para funcionar isso, importe o FormsModule do @angular/forms:
```ts
import { FormsModule } from '@angular/forms';
```
E coloque nos imports do código. E então defina uma variável na classe do componente e depois disso coloque no input:
```ts
[(ngModel)]="variavel"
```
Como se fosse uma propriedade
Bora falar sobre uma das estrelas do Angular, o `[(ngModel)]`, também conhecido como "banana in a box" (banana na caixa). Mas por que esse nome engraçado? Vem comigo que você vai entender tudo sobre esse poderoso recurso e como ele resolve um problema comum em aplicações web.

Vamos começar com o conceito de **two-way data binding**, ou "vinculação bidirecional de dados". Imagine isso como uma via de mão dupla entre o seu modelo de dados (no seu componente TypeScript) e a sua view (o template HTML). O `[(ngModel)]` é o mago por trás dessa mágica. Ele sincroniza automaticamente os dados entre o modelo e a view. Se você alterar algo no input do seu formulário, essa mudança reflete imediatamente no modelo de dados, e vice-versa.

Agora, sobre o "banana in a box". Esse apelido vem da própria sintaxe do `[(ngModel)]`. O `[]` é como uma "caixa", representando o binding do modelo para a view (one-way data binding). Já o `()` é como uma "banana", simbolizando o event binding da view para o modelo. Junte os dois, e você tem a "banana in a box" – uma maneira fácil de lembrar que o **[(ngModel)]** faz o two-way data binding!

Falando em one-way data binding, ele é como uma via de mão única. Com ele, ou você atualiza a view a partir do modelo de dados (usando []) ou atualiza o modelo a partir da view (usando ()), mas não ambos simultaneamente.

Mas atenção: para usar o [(ngModel)], você precisa importar o FormsModule no seu módulo Angular. Sem ele, nada de banana in a box!

E qual o problema que o [(ngModel)] vem resolver? Imagine que você tem um formulário com vários campos. Sem o [(ngModel)], você teria que sincronizar manualmente cada campo com seu modelo de dados e vice-versa. Com o [(ngModel)], essa sincronização é automática, economizando seu tempo e evitando erros.

E não para por aí! O [(ngModel)] não é só para inputs de texto. Ele funciona maravilhosamente com outros elementos de formulário, como select e checkbox. Por exemplo:

### Select:

```html
<select [(ngModel)]="selecaoAtual">
  <option *ngFor="let opcao of opcoes" [value]="opcao">{{ opcao }}</option>
</select>
```

### Checkbox:

```html
<input type="checkbox" [(ngModel)]="estaSelecionado">
```

Com esses exemplos, você pode ver como o [(ngModel)] torna o trabalho com diferentes tipos de inputs uma brisa.

E aí, pronto para usar o poder do [(ngModel)] nos seus projetos Angular e fazer mágica com seus formulários?

E então você pode criar métodos com essa variável, e automaticamente todos os componentes que usam essa variável vão alterar quando ela for alterada. 