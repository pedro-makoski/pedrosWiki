---
Capitulo: 11
Data: Invalid date
Modulo: "1"
tags:
  - HTML
  - Imagens
  - vídeos
  - áudios
---
# Audio

```HTML
<audio preload="metadata" controls  >
        <source src="midia/guanacast-33.mp3" type="audio/mpeg"> <!-- - mp3 = mpeg -->
        <source src="midia/guanacast-33.ogg" type="audio/ogg">
        <source src="midia/guanacast-33.wav" type="audio/wav">
        <p>Infelizmente seu navegador não consegue reproduzir áudio. <a href="midia/guanacast-33.mp3" download="guanacast-33.mp3" type="audio/mpeg">Clique aqui para baixar o arquivo MP3</a></p> 
</audio>
```

coloca audio no site

o preload como metadata fala para fazer dowload ao carregar página apenas dos dados, e quando for clicado ai ele faz dowload.

o controls serve para colocar controles de áudio no HTML, definidos como padrão para cada navegador.

e você pode colocar dentro da tag audio um src que você coloca o arquivo do áudio, porém é mais recomendável, que você coloque vários sources dentro de áudio para casa um tipo de arquivo não funcione tente o de baixo, e caso nunca consiga mostre um parágrafo, avisando que não conseguiu, e para fazer dowload manualmente.

# Imagens dinâmicas

```HTML
<picture>
	  <source media="(min-width: 1050px)" srcset="imgs/foto-g.png" type="image/png">
	  <source media="(min-width:750px)" srcset="imgs/foto-m.png" type="image/png">
	  <img src="imgs/foto-p.png" alt="Imagem flexivel">
</picture>
```

```HTML
<picture>
	  <source media="(max-width: 750px)" srcset="imgs/foto-p.png" type="image/png">
	  <source media="(max-width:1050px)" srcset="imgs/foto-m.png" type="image/png">
	  <img src="imgs/foto-g.png" alt="Imagem flexivel">
</picture>
```

Define que quando o tamanho da tela for um ele define a imagem de acordo, onde dentro da picture faz um ordem de tentativa de cima até em baixo por isso á ordem é bem importante com max-width em media, você faz do menor até o maior, e no min-width você faz maior para o menor.

e no final você coloca a imagem no final com a tag img e é só nela que se coloca o alt, e para fazer de forma correta no media coloca o tamanho maximo ou minimo, no srcset o arquivo daquele tipo correpondente, e no type coloque o tipo da imagem.

# Vídeos

```HTML
<video controls width="560" poster="imgs/capa-de-video.jpg" loop>
        <source src="midia/videoagua-menor.mp4" type="video/mp4">
        <source src="midia/videoagua.webm" type="video/webm">
        <source src="midia/videoagua.mp4" type="video/mp4">
        <source src="midia/videoagua.m4v" type="video/mp4">
        <source src="midia/videoagua.ogv" type="video/ogg">
        <p>Seu navegador não tem compatibilidade com reprodução de videos, <a href="midia/videoagua.mp4" download="videoagua.mp4" type="video/mp4">faça o dowload aqui para assistir o conteudo</a></p>
</video>
```

controls - coloca os controles do vídeo de acordo com cada navegador.

width define uma largura para cada item.

poster cria um poster para o vídeo uma capa.

por ordem tentativa se coloca os arquivos de cima para baixo para ver qual funciona(os sources com arquivos de vídeo em src)caso nenhum funciona vai aparecer um texto com um link para você fazer dowload.

você pode mudar a qualidade e conter vídeo utilizando o aplicativo para desktop **HandBrake:**

> [!info] HandBrake: Open Source Video Transcoder  
> HandBrake is an open-source, GPL-licensed, multiplatform, multithreaded video transcoder.  
> [https://handbrake.fr/](https://handbrake.fr/)  

você também pode adiconar vídeos usando os iframes do youtube e do vimeo, só clicando em compartilhar e depois em incorporar, e colocar o que ele deu no seu HTML

exemplo de Yotube:

```HTML
<iframe width="560" height="315" src="https://www.youtube.com/embed/otNh9bTjXWg?si=7fPCqZI1x0YRLlAl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

exemplo do Vimeo:

```HTML
<iframe src="https://player.vimeo.com/video/325910798?h=bfb53b3db6&color=ff0179" width="560" height="235" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
```

O Youtube permite que você coloque conteúdos, mas caso seja necessário colocar apenas para quem tem acesso ver e necessário o Vimeo, pois o Youtube, pode ser compartilhado via link.

> [!important]  
> Tome sempre cuidado com os direitos autorais.