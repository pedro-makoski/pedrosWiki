---
Capitulo: 22
Modulo: "4"
tags:
  - iframes
---
## O que são iframes
---
Tem gente que pensa que o i do iframes é de improved, ou seja um frame melhorado. Mas o i é de in-line. Ou seja, é um frame in-line. Ou um quadro(frame) em linha.

A tag iframe é assim:
```html
<iframe src="" frameborder="0"></iframe>
```
O iframe é in-line ou seja ela pode ficar no paragrafo junto ao texto sem quebrar a linha. O frameborder determina se vai ter uma sombrinha, se estiver em 0 não vai ter, se for qualquer outro número vai ter, a borda.
Dentro do source você pode colocar um site, esse site vai aparecer dentro dessa janela do iframe, tipo uma aba nova do navegador, mas no seu site.
Alguns sites podem não deixar você coloca-los no iframe, por problemas de segurança, talvez o iframe não seja muito seguro, em alguns casos.

Dentro das tags do iframe você coloca para caso o iframe não funcione em um dispositivo, coisa que pode acontecer no celular por exemplo.
## Tamanho iframes
---
Por padrão um iframe tem um tamanho padrão de 300x150 pixels. 
Você pode fazer no HTML:
```html
<iframe src="" frameborder="0" width="500" height="500"></iframe>
```
E se depois você colocar no CSS, um width e um height, As CSS vão prevalecer.
## Scrolling no iframe
---
Você pode colocar o parâmetro scrolling no iframe, ele pode ser auto, ou seja se exceder o tamanho ele tem uma barra de scroll, se não não, tem o yes, que vai ter sempre a barra de scroll. E também o no, que não vai scrollar, por mais de não funcionar em alguns navegadores.
## Links para iframes
---
No iframe coloque um name assim, por exemplo:
```html
<iframe src="paginas-extras/pagina003.html" id="tela" name="frame">Infelizmente o seu computador não é compátivel com isso.</iframe>
```
Depois coloque no link no target, o name que você colocou:
```html
<a href="paginas-extras/pagina001.html" target="frame">Primeira página</a>
```
Assim quando você clicar no link vai aparecer a página no iframe.
## Iframe padrão no proprio HTML
---
Você pode usar o srcdoc, uma propriedade HTML, e dentro das aspas coloque o HTML padrão, isso é para caso você não queira colocar uma página externa por padrão direto do src. Caso um elemento HTML exija aspas, coloque simples, pois as aspas duplas já estão sendo usadas no srcdoc.
```html
<iframe id="tela" name="frame" srcdoc="<p>Escolha uma das opções:</p><ul>
        <li><a href='paginas-extras/pagina001.html' target='frame'>Primeira página</a></li>
        <li><a href='paginas-extras/pagina002.html' target='frame'>Segunda página</a></li>
        <li><a href='paginas-extras/pagina003.html' target='frame'>Terceira página</a></li>
    </ul><img src='imgs/image001.webp'>">Infelizmente o seu computador não é compátivel com isso.</iframe>
```
## Incovenientes dos iframes em alguns casos
---
### Não confunda iframe com frame
Frame não é mais utilizado, por padrão, por mais de ainda ser possível utiliza-las, ela está bem defasada.
### Mecanismos de busca
Normalmente o Google Bot não consegue entrar em um iframe, fazendo com que talvez o Google não indexe seu site, se boa parte dele estiver em um iframe.
### Acessibilidade - leitores de tela
Leitores de tela não conseguem ler muito bem iframes.
### Usabilidade
O navegador e o usuário pode as vezes se confundir, com iframes.
1. Os navegadores podem se confundir em relação ao voltar da página, se eles voltam no iframe ou em relação a página, que o usuário está.
2. Alguns navegadores não conseguem entender se no ``target="_blank"`` ele deve abrir uma nova aba no iframe, ou no navegador.
3. Se o site não for responsivo, o site vai aparecer todo quebrado dentro do iframe, já que o mesmo é pequeno.
4. **Segurança**: quando um site foi hackeado, e está com problemas de segurança, o seu site começa a ter eles também. Então tome cuidado com isso. A partir de iframes pode acontecer ataques como crosssites e ataques XSS.
## Configurações de segurança
---
### Sandbox
No iframe coloque `sandbox="sandbox"`, assim será praticamente impossível o site do iframe capturar informações do usuário, em formulário, enquanto ele estiver no iframe.

Você pode colocar outros parâmetros para permitir como, o allow-same-origin - permite entradas da mesma origem. allow-forms que permite quando é formulários, e você pode colocar quantos você quiser, a partir do que você precisa.

Allow-scripts será possível utilizar scripts no iframe.

```html
<iframe src="paginas-extras/pagina004.html" sandbox="allow-same-origin allow-forms" referrerpolicy="no-referrer">
        Ahh!!! Seu navegador não tem compatibilidade à isso, entre <a href="paginas-extras/pagina004.html" target="_blank" rel="external">Aqui</a>
 </iframe>
```
### Referrerpolicy
Coloque assim `referrerpolicy="no-referrer"`, para o site não coletar dados para propaganda. 
