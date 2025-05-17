Para passar valores entre componentes pai e filho, você pode colocar como atributos HTML normais, como:
```html
<app-contato nome="Zacarias" telefone="00 0000-0000"></app-contato>
```
E depois para obter, na classe do contato esses objetos, coloque: 
```ts
export class ContatoComponent {
  @Input() nome: string = '';
  @Input() telefone: string = '';
}
```
O que está dentro das aspas é o valor padrão. E esse decorator @Input, vem da biblioteca que deve ser importada: @angular/core.
```ts
import { Input } from '@angular/core';
```
Para usar, como a variável nome, você pode colocar no template, por exemplo:
```html
{{ nome }}
```
Esse é o segredo para conectar a parte visual da UI, criada a partir de um template (elemento DOM, diretiva ou componente) com o modelo (a instância do componente a que o template pertence). Essa conexão é usada para sincronizar a visualização com o modelo, notificar o modelo sobre eventos ou ações do usuário na visualização, ou ambos.

Vamos ver alguns exemplos de binding:

## Interpolações de texto:

```html
<h4>{{ recomendado }}</h4>
<img alt="item 2" [src]="itemImageUrl2">
```

## Binding de propriedade:

```html
<img [src]="caminhoDaImagem">
```

## Binding de evento:

```html
<button (click)="funcaoDeClick()">Clique aqui</button>
```

Os bindings sempre têm duas partes: um alvo que receberá o valor vinculado, e uma expressão de template que produz um valor a partir do modelo.

Vamos falar agora do **contexto das expressões**. Normalmente, o contexto é a instância do componente. Por exemplo, `recomendado` e `itemImageUrl2` se referem a propriedades do `AppComponent`. Uma expressão também pode se referir a variáveis de entrada do template ou variáveis de referência do template.

> Mas atenção: as expressões do template não podem se referir a nada no **namespace global**, exceto `undefined`. Elas não podem acessar **window** ou **document**, nem chamar `console.log()` ou `Math.max()`.

E, por fim, as melhores práticas para expressões de template: use expressões curtas e evite efeitos colaterais visíveis. Uma expressão de template não deve alterar o estado da aplicação além do valor da propriedade alvo.

> Lembre-se: o Angular executa uma expressão de template após cada ciclo de detecção de mudança, então elas devem ser rápidas para manter a experiência do usuário eficiente, especialmente em dispositivos mais lentos.


Entendido! Vamos descomplicar essa explicação sobre templates e binding no Angular para que fique mais claro.

Pense no seu aplicativo Angular como um show de marionetes.

1. **O Palco (Template):** É a parte que você vê na tela – o HTML, os botões, as imagens, o texto. É o que a audiência (o usuário) interage.
2. **O Manipulador (Componente):** É quem está por trás do palco, controlando as marionetes. Ele tem os dados (o "modelo") – tipo, qual texto a marionete vai falar, qual imagem ela vai mostrar, ou o que fazer quando alguém aplaude (clica).

**O que é Binding? É a Conexão Mágica!**

O binding é a forma como o "Palco" (o que você vê) e o "Manipulador" (os dados e a lógica por trás) conversam entre si. Essa conversa tem duas direções:

- **Do Manipulador para o Palco:** Mostrar na tela os dados que o manipulador tem.
- **Do Palco para o Manipulador:** Avisar o manipulador quando algo acontece na tela (tipo, o usuário clicou em um botão).

Essa conexão garante que a tela esteja sempre mostrando as informações corretas do seu aplicativo e que o aplicativo reaja quando você interage com ele.

**Tipos de Conversa (Exemplos de Binding):**

- **Colocando Texto na Tela (Interpolação):**
    
    - Imagine que o manipulador tem uma informação como "O filme recomendado é..."
    - Você usa `{{ recomendado }}` no palco.
    - O Angular pega o valor de `recomendado` do manipulador e coloca ele bem ali no texto do palco.
    - `<h4>{{ recomendado }}</h4>` -> Vai mostrar `<h4>O filme recomendado é...</h4>` (se esse for o valor).
- **Mudando Algo na Tela (Binding de Propriedade):**
    
    - Imagine que o manipulador sabe qual o "caminho" de uma imagem que deve ser mostrada.
    - Você usa `[src]="caminhoDaImagem"` em uma tag `<img>`.
    - O Angular pega o valor de `caminhoDaImagem` do manipulador e usa ele para definir o atributo `src` da imagem na tela.
    - `<img [src]="itemImageUrl2">` -> Se `itemImageUrl2` for `assets/imagem1.png`, a imagem mostrada será `assets/imagem1.png`. O colchete `[]` indica que você está ligando uma **propriedade** do elemento HTML (`src`) a um dado do seu componente (`itemImageUrl2`).
- **Reagindo a Algo na Tela (Binding de Evento):**
    
    - Imagine que você tem um botão no palco.
    - Você usa `(click)="funcaoDeClick()"` no botão.
    - O parênteses `()` indica que você está ouvindo um **evento** do elemento HTML (o `click`).
    - Quando o usuário clica no botão na tela, o Angular avisa o manipulador para executar a função `funcaoDeClick()` que ele possui.
    - `<button (click)="funcaoDeClick()">Clique aqui</button>` -> Clicar no botão executa a função `funcaoDeClick` no seu componente.

**Como Funciona a Conversa (Alvo e Expressão):**

Todo binding tem duas partes:

1. **Onde Vai (Alvo):** É o lugar na tela que vai receber a informação ou de onde a informação veio. Pode ser um texto, um atributo de um elemento HTML (`[src]`), ou um evento que aconteceu (`(click)`).
2. **De Onde Vem o Valor (Expressão de Template):** É o código que o Angular vai "rodar" para descobrir o valor ou a função. Geralmente, é o nome de uma propriedade ou função do seu componente (`recomendado`, `caminhoDaImagem`, `funcaoDeClick()`).

**De Onde o Angular Pega a Informação (Contexto):**

Normalmente, quando você escreve algo como `{{ nomeDaPropriedade }}` ou `[atributo]="outraPropriedade"`, o Angular procura `nomeDaPropriedade` ou `outraPropriedade` dentro do componente que está controlando aquela parte da tela. É como se o manipulador estivesse dizendo "olha nos meus bolsos por essa informação".

**O Que NÃO Pode Fazer nas Expressões (Regras de Segurança):**

O código que você escreve dentro das chaves `{{ }}` ou depois do `=` nos bindings (`[src]="issoAqui"`) é um pouco limitado por segurança e para manter as coisas organizadas.

- Você não pode acessar coisas que estão "fora" do Angular, como a janela do navegador (`window`), o documento inteiro (`document`), ou usar comandos para imprimir coisas no console (`console.log()`).
- Você também não deve fazer cálculos muito complexos ou que mudem outros dados ali dentro.

É como se o palco só pudesse pedir as informações básicas diretamente ao manipulador, sem tentar controlar o mundo exterior ou bagunçar os outros dados.

**Dicas Para a Conversa Ser Boa (Melhores Práticas):**

- **Seja Direto:** Mantenha as expressões dentro dos bindings curtas e simples. Se precisar de lógica complexa, faça isso DENTRO do seu componente (no arquivo `.ts`) e apenas exponha o resultado final para o template usar.
- **Não Crie Confusão:** Uma expressão no template deve apenas MOSTRAR um valor ou chamar uma função para reagir a algo. Ela NÃO deve mudar outros dados do seu aplicativo diretamente.

**Por Que a Velocidade Importa?**

O Angular é muito eficiente, mas ele precisa checar de tempos em tempos se algum dado do seu componente mudou para atualizar a tela (isso se chama "detecção de mudança"). Ele faz essa checagem _depois de cada ação_ que pode mudar dados.

Se as expressões nos seus templates forem lentas ou complexas, o Angular vai levar mais tempo para fazer essa checagem e atualizar a tela, deixando seu aplicativo lento, especialmente em celulares ou computadores mais antigos. Por isso, mantenha as expressões rápidas!

Em resumo, o binding é a ponte essencial que permite que a interface visual do seu aplicativo (o template) e a lógica/dados por trás (o componente) se comuniquem de forma segura e eficiente.

Espero que essa explicação tenha facilitado o entendimento, Pedro Nivaldo Makoski! Qualquer dúvida, é só perguntar.