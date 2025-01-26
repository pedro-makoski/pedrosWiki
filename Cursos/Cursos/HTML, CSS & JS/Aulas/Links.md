---
Capitulo: 10
Data: Invalid date
Modulo: "1"
tags:
  - HTML
  - Links
---
# Links a sites externos

acessam itens de outros sites

```HTML
<a href="https://www.google.com" rel="external" target="_blank" hreflang="pt-br">Google</a>
```

o **href** serve para mostrar o caminho do local.

o rel serve para ajudar o navegador á entender melhor o que você quer do link.

e o **target** serve para mostrar o que o navegador vai fazer ao clicar no link no caso do **_blank**, boa para itens externos, serve para abrir em outra página.

e o **hreflang** serve para mostrar a lingua da página

# Links a páginas internas

acessar itens a páginas do mesmo site.

```HTML
<a href="outraspaginas/pagina.html" rel="next" target="_self">Segunda página</a>
```

o rel como next, significa que vai para outra página a partir da principal.

e o target self, que já está por padrão nos navegadores serve para falar que a proxima página vai ser mostrada na página atual.

você pode também voltar para a página principal(index):

```HTML
<a href="../index.html" rel="prev" target="_self">Primeira página</a>
```

o prev serve para mostrar pro navegador que você está voltando.

e o ../ serve para voltar na página anterior.

# Links para dowload

Ao clicar no link faz um dowload

```HTML
<a href="assets/audio.mp3" dowload="audio.mp3" type="audio/mpeg">baixar áudio</a>
```

o href mostra o caminho do arquivo á fazer dowload, a opção dowload serve para falar qual arquivo fazer dowload, e o type fala o tipo á fazer dowload, que você pode pesquisar aqui:

> [!info] Media Types  
>  
> [https://www.iana.org/assignments/media-types/media-types.xhtml](https://www.iana.org/assignments/media-types/media-types.xhtml)