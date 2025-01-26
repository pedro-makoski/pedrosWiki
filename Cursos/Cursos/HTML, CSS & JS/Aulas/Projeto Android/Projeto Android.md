---
Capitulo: 17
Data: Invalid date
Modulo: "2"
tags:
  - CSS
  - HTML
---
# Planejar site

para planejar um site você pode usar o mockflow

> [!info] MockFlow - Wireframe Tools, Prototyping Tools, UI Mockups, UX Suite  
> Online whiteboard for brainstorming user interfaces with your team.  
> [https://mockflow.com/](https://mockflow.com/)  

feito para fazer a estrutura do site.

- clique em create new para criar um projeto.
- escolha o tipo de projeto - nesse caso web.
- coloque um nome pro seu proejeto.
- para criar um browserframe, pesquise onde tá um cubo - components, depois arraste.

# Cores

- cor do android: 3DDB84

![[Untitled 17.png|Untitled 17.png]]

# Fontes

vamos usar as fontes

- Idroid
- Bebas Neue

# Variáveis em CSS

> Toda linguagem de programação tem variáveis, mas nem tudo que tem variável é uma linguagem de programação, tipo CSS que não é de programação é de marcação.

## Por que usar variáveis

Facilitam a nossa vida porque guardam valores, que vão ser usados mais para frente, então não preciso mais usar a mesma cor toda hora, e sim a variável dela que pode ser alterada na raiz, e tudo será alterado depois.

## :root

usa-se para definir as variáveis, define as propriedades raiz do projeto, as propriedades raizes, do projeto. lá que se coloca as variáveis.

## Criar variáveis

coloque dois traços no inicio da variável, e coloque um nome, depois um : é depois o que você que dentro da variável. e não se esqueça do ;.

```CSS
:root {
	--cor-0: \#fff;
}
```

## Usar variáveis

no valor de uma propriedade utilize um metódo var() e dentro dele o nome da variável.

```CSS
background-color: var(--cor-0);
```

se você tiver no visual studio code, se você rolar até embaixo você encontra todas as suas variáveis.

# Responsividade

é importante para poder ser usada em telas menores ou maiores, sem ter problemas.

## Extensão para testar responsividade

> [!info]  
>  
> [https://chromewebstore.google.com/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh](https://chromewebstore.google.com/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh)  

clicando no i, você consegue obter as informações do tamanho da tela, você precisa para isso funcionar dar a permissão no permitir acesso aos URLs do arquivo.

## Limitando o tamanho mínimo com o tamanho máximo

min-width define o menor valor de largura possível, e max-width o valor máximo que ele vai poder ir.

320 px é um tamanho de largura de celulares mais antigos.

# Sombra no texto

funciona igual quando é no box-shadow, mas usa se o text-shawdow para isso.

```CSS
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.335);
```

# Transição - animação - transition duration

cria uma animação num hover por exemplo, ele define a duração que a transição, por exemplo do hover acontecer, entre um estado e outro.

```CSS
transition-duration: 1s;
```

## Interessante

para quando você quiser usar por exemplo 0.5 segundo de transição entre estados, você pode também colocar .5s.

```CSS
transition-duration: .5s;
```

ou

```CSS
transition-duration: 0.5s;
```

# Line Height

define a altura entre as linhas de um parágrafo.

```CSS
line-height: 10px;
```

nesse exemplo a altura entre as linhas do parágrafos é de 10px.

# List-style-position

define se as bolinhas, os tipos que começam a lista. está para dentro(inside) ou para fora(outside - padrão), se está para fora a lista pode vazar.

```CSS
list-style-position: inside;
```

não vaza nesse caso.

# List-style-type

define o icone que vai estar na lista.

se colocar por exemplo

```CSS
list-style-type: '\1F5F8\00A0\00A0';
```

o \ serve para dizer que é unicode, o 1F5F8 é o código unicode de um certinho, \00A0 serve para colocar um espaço.

> [!important]  
> O list-style-type não é compatível com todos os navegadores.  

# Margem negativa

crie uma margem para dentro, fazendo com que de para estourar.

# Vídeo responsivo

acontece que ele já vem com uma largura e altura pronta fazendo com que seja difícil de fazer com que fique 16:8, sempre.

## Position: absolute

quando temos um position-absolute podemos mexer com duas propriedades o top e o left, onde top seria a distancia do topo do elemento ao topo do elemento pai, e o left a distancia da esquerda do elemento pai para esquerda do elemento filho.