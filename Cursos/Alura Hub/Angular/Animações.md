Nome do pacote: BrowserAnimationsModule
# Adicionando o modulo
Entre no arquivo `app.module.ts`. Adicione o seguinte import: `import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`.
E coloque nos imports esse modulo importado.
# Por que usar o pacote
Aprendemos que o uso das animações pode ser um grande destaque em nossos projetos. No entanto, é importante saber que nem todas as propriedades CSS podem ser animadas. O MDN mantém uma lista com as propriedades animáveis, que você pode conferir [clicando aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

Além disso, as animações em Angular são baseadas nas funcionalidades de animação do CSS, portanto, qualquer coisa que possa ser estilizada ou transformada em CSS pode ser animada da mesma maneira no Angular. Por isso, recomendamos a leitura do artigo [CSS: animações com Transition e Animation](https://www.alura.com.br/artigos/css-animacoes-com-transitions-animations), no qual você poderá conhecer algumas técnicas de animação com CSS.
# Criando animação
Para criar um animação, precisamos entender o que é um trigger, um trigger é um conector entre estados, a qual a partir dele é possível, gerar as animações entre estados.
Exemplo:
```ts
trigger('highlightedState', [

    state('default', style({

      border: '2px solid #B2B6FF',

    })),

    state('highlighted', style({

      outline: '4px solid #B2B6FF',

      filter: "brightness(92%)"

    }))

  ])
```
O primeiro parâmetro das funções trigger e state são os indificadores deles. 
Todos estes métodos estão no pacote `@angular/animations`. E para colocar essas animações para funcionar coloque dentro do array do atributo `animations:` do @Component.
Para alterar um estado, colamos no template HTML ``[@<nome-do-trigger>]="<nome-do-estado>"``.
Exemplo:
```html
<div

      class="lista-tarefas card-{{ tarefa.categoria }}"

      *ngFor="let tarefa of listaTarefas; let i = index"

      (mouseover)="indexTarefa = i"

      [@highlightedState]="indexTarefa === i ? 'highlighted' : 'default'"

    >
```
# Criando transições entre states
No array de items do segundo parâmetro do trigger, adicione o seguinte método:
```ts
transition('default => highlighted', [

      style({

        transform: 'scale(1.02)',

      }),

      animate(200)

    ])
```
O primeiro parâmetro indica de qual para qual está indo, através da seta =>, e depois tem se uma lista de Metadados, um que indica os estilo após a transição, e outro que indica o tempo da animação através do método `animate`, em milisegundos, essa função também pode receber uma string no mesmo formato que um CSS normal, com três items ``'<tempo> <delay> <funcao>' ``, esse ultimo de função você pode dar uma olhada aqui: https://easings.net/  . O segundo parâmetro do animate pode ser um metadados de estilo.

O operador => indica o lado da transição. Caso seja vice e versa, você pode usar o operador <=>.
## Estado void
Quando uma transição ocorre com um elemento que não existe ainda no DOM, é importante colocar no estado o modo void. Que é e o estado de não existência. Você pode colocar tanto antes do operador => quando depois.
## Estado coringa
Quando o item está presente no dom. Representado pelo asterrisco, ele pode ser colocado antes ou depois do operador =>.

Para ativar este estado coringa, basta apenas colocar a animação no componente. `@<nome-animacao>`.
## Eventos  na animação do trigger
Você pode colocar ao invés de ``void => *`` ou `* => void`, você pode substituir respectivamente por: `:enter` e `:leave`.
# Funções de animação
As funções de temporização nos permitem ajustar a velocidade com que a animação é executada ao longo do tempo. Em animações curtas, de 200 ou 300 milissegundos talvez não haja um grande impacto visual, mas quanto mais demorada a animação, mais importante se torna a easing function.

Quando você deixa cair algo no chão, esse movimento não ocorre de forma linear, a velocidade aumenta ao longo do tempo, conforme a lei da gravidade; de forma similar, as easing functions ditam o comportamento da animação, para que seja o mais próximo da realidade possível.

[Nesta página](https://easings.net/#easeInExpo), você poderá ver vários exemplos e escolher a função correta para sua necessidade.
# Boas praticas com animações
Crie um arquivo separado com a lista de animações, e triggers, e depois apenas importe.
# Resumo
Abaixo estão listados os métodos vistos no curso e sua respectiva função, de acordo com a [documentação](https://angular.io/guide/animations). Consulte sempre que precisar.

**trigger()** - inicia a animação e serve como um contêiner para todas as outras chamadas de função de animação. O template é vinculado ao nome do trigger, que é declarado como primeiro argumento da função. Usa sintaxe de matriz.

**style()** - define um ou mais estilos CSS para usar em animações. Controla a aparência visual dos elementos HTML durante as animações. Usa sintaxe de objeto.

**state()** - cria um conjunto nomeado de estilos CSS que devem ser aplicados na transição bem-sucedida para um determinado estado. O estado pode então ser referenciado pelo nome dentro de outras funções de animação.

**animate()** - especifica as informações de tempo para uma transição. Valores opcionais para delay e easing function. Pode conter métodos `style()`.

**transition()** - define a sequência de animação entre dois estados nomeados. Usa sintaxe de matriz.