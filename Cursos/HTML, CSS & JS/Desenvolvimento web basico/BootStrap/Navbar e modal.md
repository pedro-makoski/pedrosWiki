Neste módulo iremos conhecer outros componentes do Bootstrap. Existe uma grande diversidade de componentes, pois não se limita aos que estão expostos em sua documentação oficial.
Existem muitos outros componentes que são desenvolvidos pela comunidade de desenvolvedores, disponibilizados gratuitamente também. Não iremos abordar todos os componentes que existem, mas saiba que você pode explorar e usar facilmente, da mesma forma como fizemos até agora, sobretudo os que fazem parte da documentação oficial.
# Navbar
O **navbar** é uma forma de estruturar e estilizar uma barra de navegação, que podemos utilizar como o menu principal de um site. Vamos ver como funciona:
![[Pasted image 20241125155853.png]]
![[Pasted image 20241125155559.png]]
- navbar: Define o elemento como uma navbar.
- **navbar {-dark -light}**: Define a cor dos itens textuais inclusos na navbar. Logo, se sua navbar tiver o plano de fundo escuro, o ideal é utilizar o "navbar-dark", pois a cor do texto e nome dos itens, por exemplo, serão brancos.
- **bg-primary**: Define a cor do plano de fundo da navbar.
- **nav-link**: link do nav. Pode também ter a classe active, para uma cor de destaque, e disabled para cor de desligado.
- justify-content-center, coloca todos os elementos do nav no centro.
-  justify-content-end, coloca todos os elementos do nav na direita.
A barra de navegação do Bootstrap nos permite definir um logotipo ou o nome da nossa marca e também adicionar um ícone de menu que é exibido em telas pequenas, como de celular, para que possamos navegar utilizando um layout responsivo. 

Com isso, o menu pode assumir diferentes formas, dependendo do tamanho da tela do dispositivo. Já sua visualização em telas menores, como tablet e smartphones, os items de menu seriam ocultados e exibido o "botão de menu", que volta a exibir os itens após clique.
Para criar um menu responsivo, com menu hamburguer é necessário:![[Pasted image 20241125160032.png]]
A tag ``<a>``: de âncora, necessária para adicionar o logotipo ou marca, como em nosso caso. Para isso, é usada a classe "navbar-brand", exibindo nossa marca ("Recode Pro").

A tag button:
A tag de botão, necessária para criar o botão de menu quando estiver em tela pequena, para criar o efeito de toggle (alternância), exibindo e ocultando os itens de menu. Para isso, é usada a classe "navbar-toggler". Além da classe navbar-toggler, outras propriedades precisam ser informadas, para que o botão saiba quem ele precisa alternar e de que forma:

|   |   |
|---|---|
|**data-toggle="collapse"**|Esta propriedade informa que a alternância será feita na forma "**collapse**" (colapso, abrindo e fechando).|
|**data-target="#navbarNav"**|Esta propriedade informa qual o elemento será alvo do efeito de **collapse**. Seu conteúdo é o **id** do elemento alvo.|
|**aria-controls="navbarNav"**|Esta propriedade é opcional e funciona basicamente da mesma forma que o **data-****target**, criando uma compatibilidade com o projeto ARIA. Isso significa que podemos adicionar recursos de acessibilidade, permitindo que pessoas com deficiência visual possam navegar e usar o site. Com esta propriedade, o recurso ARIA sabe qual elemento está sendo alvo da ação, tornando o site acessível e navegável por aplicações que "falam“ o que está acontecendo. Para saber mais, clique [aqui](https://www.youtube.com/watch?v=g9Qff0b-lHk&list=PL_gUZt7pGoe2OI___PQDlQUJ8CbUxHWmO).|
|**area-expanded e aria-label**|Estas propriedades, assim como o aria-controls, são relacionadas à acessibilidade com o ARIA.|
Div:
A tag div atua como um bloco para a lista de itens do menu. Como seu conteúdo será colapsado, são usadas as classes "collapse" e "navbar-collapse". Dentro desta estrutura, a lista não numerada (``<ul>``) recebe a classe "navbar-nav" e seus itens (``<li>``) recebem a classe "nav-item".

Nesses li, você pode colocar uma classe chamada dropdown, isso significa que tem duas subcategorias a partir daquele li. Assim a ancora deve ter como classe também dropdown-toggle, e o id que identifique o dropdown. E dentro do li se coloca uma div com classe dropdown-menu, e dentro delas coloca-se os submenus com os chamados dropdown-itens, esse é a classe do link
# Modal
O **modal** é um elemento que pode ser utilizado para exibir uma janela no site, como os pop-ups que encontramos em sites de lojas, por exemplo. Vale ler algumas descrições colocadas na documentação oficial:
- **Modals** são feitos com **HTML**, **CSS** e **JavaScript**.
- Eles são posicionados acima de todas as coisas do documento e removem rolagem do **``<body>``** para que o conteúdo do modal role.
- Clicar na tela atrás do modal vai fazer com que ele seja fechado, automaticamente.
Assim como todas as estruturas do **HTML**, o modal possui as estruturas de **header**, **body** e **footer** (cabeçalho, corpo e rodapé, respectivamente). O exemplo de código para criar um modal é o seguinte:
![[Pasted image 20241125160744.png]]
As classes "**modal**", "**modal-dialog**" e "**modal-content**" criam a estrutura inicial utilizada antes mesmo de chegarmos na parte de inclusão do conteúdo que queremos mostrar no modal. Em seguida, teremos a estrutura que mencionamos:
## Modal header
Define a estrutura do cabeçalho do modal. Neste cabeçalho são adicionados o título (tag ``<h5>`` com a classe "modal-title") e um botão de fechar com a classe "close" e a propriedade data-dismiss="modal".
## modal-body
Define a estrutura do conteúdo do modal. Aqui é inserido o conteúdo do corpo, podendo ser textos de notificação ou formulários.
## modal-footer
Define a estrutura do rodapé do modal e, no exemplo, incluímos os botões para fechar e salvar mudanças. Neste rodapé são inseridos os botões de ação do modal, como o botão de fechar (que tem a mesma ação do botão do cabeçalho) e o botão de salvar.
## Fadding de modal
Um botão com as propriedades:
data-toggle: "modal",
data-target: "#{id do modal}"
Para criar um efeito de transição, você pode colocar na div uma classe chamada fade. E quando ela for aparecer ou sumir ela faça uma transição.
## Centralizar modal
Junto com a classe modal-dialog colocar também modal-dialog-centered, coloca o modal no centro.
## Tamanho do modal
Junto com o modal dialog, você pode colocar modal-dialog-sm para ficar pequeno.