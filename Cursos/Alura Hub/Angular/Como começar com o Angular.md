# História do Angular
![[Pasted image 20250207141800.png]]
# O que é o Angular
Basicamente, o Angular é um ecossistema de desenvolvimento de interfaces. Ele tem o **framework**, bibliotecas adicionais para o desenvolvimento, ferramentas para fazer o build, atualizar e testar um projeto. 
# Como que funciona o Angular 
Ele funciona através de componentes escritos em TypeScript, HTML e CSS. E esses componentes geralmente são os utilizados como parte da interface do usuário. Para testar esses componentes, existe a Jasmine, utilizada como padrão no Angular CLI, e ela vai ser integrada ao Web Test runner. 
![[Pasted image 20250207142728.png]]O primeiro é o HTML, depois temos o TypeScript, depois o CSS e depois a ferramenta de testes: Jasmine.

O HTML possui propriedades especiais como diretivas e interpolação que permitem construir conteúdo dinâmico, usando comportamentos e valores definidos na classe do componente escrita em TypeScript.

Os componentes, podem se comunicar. Isso acontece através de uma relação, onde um elemento pode ter vários outros, e esses outros podem ter outros elementos. 
# Pré-requisitos 
HTML, CSS e JS. Mesmo não sendo usada o JavaScript diretamente no código, ele é usado para outras coisas. 

Como o Angular é muito verboso e bem automatizado, a leitura de código se torna importante. Entender o que o framework fez, o que compõe um artefato e perceber padrões como injeção de dependências são pontos importantes para o aprendizado.
# Estruturas
Todo componente Angular, segue uma estrutura básica, e no inicio talvez seja difícil de saber de cor todos os comandos usados. Para isso você pode usar tanto o Angular CLI ou seguir o padrão do primeiro componente criado.

Mas é bom, sempre dar uma estudada, e entendida no que realmente aconte, por isso é bom prestar atenção nos seguintes comandos TS:
- Classes, interfaces e herança (extends e implements);
- Métodos, atributos e construtores;
- Decorators;
- Sintaxe de declaração de tipos;
- Injeção de dependência.
```ts
import { Component, OnInit } from ‘@angular/core’;
@Component({ // Decorator 
	selector: ‘botao’,
	templateUrl: ‘./botao.component.html’,
	styleUrls: [‘./botao.component.css’], 
}) 
export class BotaoComponent implements ngOnInit {
	constructor(private exemploService: ExemploService) { // injeção de dependência 
}
ngOnInit { // método } }

```
## Exemplos e onde ver
Itens importantes de se ter em mente no início são:
- Components - [Seção na documentação oficial](https://angular.dev/guide/components)
- Templates - [Seção na documentação oficial](https://angular.dev/guide/templates)
- Diretivas Embutidas - [Seção na documentação oficial](https://angular.dev/guide/directives)
	- São colocadas como atributos HTML no template. E funciona como se fosse um tipo de lógica, para o componente, permitindo componentes mais dinâmicos.  
	- Você pode criar suas próprias diretivas. Mas você pode ter algumas bem padrões, por meio da biblioteca: `@angular/common`, por exemplo você pode obter condições e laços:
```html
@if (usuarioLogado) {
	<ul> 
		@for (transacao of extrato; track $index) {
		<li>{{ transacao.valor }}</li> 
		} 
	</ul> 
}
@else { O usuário precisa fazer login! }
```
Acima, se a variável `usuarioLogado` for verdadeira, a lista será mostrada e para cada item de `extrato` teremos uma `li`, usando o laço `for` com o `@for`. O track $index, permite controlar as interações que você está. 
- Injeção de Dependências - [Seção na documentação oficial](https://angular.dev/guide/di)
	- É uma maneira refinada, de receber as dependências do componente, através de parâmetros. 

Os quatro itens acima são muito comuns de se usar porque todos estão relacionados à criação de componentes. Components e Templates, juntos, geram componentes funcionais e visualizáveis. Enquanto Diretivas e Injeção de Dependências permitem operações mais sofisticadas.
# Formações do Angular CLI e DevTools 
## Angular CLI
Uma ferramenta no terminal, que ajuda na praticidade enquanto você está desenvolvendo. Ela não faz parte do framework, mas faz parte do ecossistema Angular. 
## Dev tools 
Extensão do Chrome: [Baixe o Angular DevTools na Chrome Web Store](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh). Afim de que possa te ajudar, a achar e encontrar problemas no projeto, ele te mostra toda a arquitetura do projeto por trás. 

A funcionalidade mais interessante em um primeiro momento é a aba Components. Nela é possível verificar toda a árvore de componentes renderizados no momento, e em cada componente ver suas propriedades, dados provenientes do componente-pai, eventos, etc.
# Programação reativa
Quando estiver pronto assistir:  [O que é Programação Reativa?](https://www.youtube.com/watch?v=ifA-57jTk7Y&ab_channel=Alura). 
# Guia de cursos Angular
- [Formação Angular: crie aplicações web ágeis](https://www.alura.com.br/formacao-angular-crie-aplicacoes-web-ageis);
- [Formação Explore o Framework Angular](https://www.alura.com.br/formacao-angular-14);
- [Desenvolva Aplicações Escaláveis com Angular](https://www.alura.com.br/formacao-aplicacoes-escalaveis-angular).