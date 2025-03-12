---
Capitulo: 6
Data: Invalid date
Modulo: "1"
tags:
  - HTML
  - Imagens
---
# Imagens

> [!important]  
> Sempre mude o tamanho da Imagem via apps como Gimp e Photoshop, para diminuir o tamanho da imagem, tanto no tamanho do arquivo, tanto no tamanho que vai ficar no seu site.  

## Para mudar o tamanho de imagem no Gimp

clique no menu de cima na opção **imagem**, clique em **redimensionar imagem**, e coloque **na opção de tranca** para seguir numa proporção, e é sempre bom exportar numa versão diferente, onde a imagem original, pode ser chamada de Full, e as outras podem ser por exemplo de 200px, 500px, por exemplo. portanto nunca cliquem em sobrescrever imagem, e sim como salvar numa cópia.

## Diferentes tipos de Imagem

- **JPG ou JPEG**: a que melhor faz a compreensão, e compacta, portanto ela tem grandes chances de ser a mais econômica de armazenamento.
- **PNG**: permite transparência de uma imagem, além disso ela um pouco menos compactada que JPG.

## Colocar imagens dentro do site

```JavaScript
<img src="aqui/você/coloca/o/local/da/sua/imagem" alt="e aqui você coloca um local alternativo para caso a imagem não apareça, ou quem não consegue ver.">
```

você pode colocar as Imagens de três formas no src:

- **na mesma pasta**: quando você coloca na mesma pasta que está o seu index.html.
- **dentro de uma pasta**: quando você coloca as imagens numa pasta que está dentro da pasta que está o seu arquivo HTML, ela pode ser chamada imgs, imagens e assim vai, e dentro pasta vai ficar as suas imagens.
- **a partir de um link**: quando você coloca o link de uma imagem externa, que está disponível na web, você pode achar uma imagem no google, clicar com o botão direito, e depois em abrir imagem em uma nova guia, selecione o link inteiro(dica: para você selecionar rapidamente clique nas teclas ctrl + L), e coloque no seu source.

## Cuidado com os direitos autorais 🚨.

As imagens podem possuir direitos autorais, portanto veja se está como licença no Google: Creative commons se sim você pode usar, ou procure em sites como:

> [!info] LibreShot.com - Beautiful Photos. Totally Free.  
> Download images with Public Domain license: No copyright, No attribution.  
> [https://libreshot.com/](https://libreshot.com/)  

> [!info] Mais de 1 milhão de imagens grátis para você - Pixabay - Pixabay  
> Encontre imagens gratuitas para baixar e usar para qualquer coisa.  
> [https://pixabay.com/pt/](https://pixabay.com/pt/)  

> [!info] Public Domain | rawpixel  
> <p style="text-align:center">We are&nbsp;sourcing and digitally enhancing thousands of&nbsp;antique books and chromolithographic plates to unlock the inspirational design treasures of&nbsp;the past.  
> [https://www.rawpixel.com/category/53/public-domain?filter=all&sort=trending](https://www.rawpixel.com/category/53/public-domain?filter=all&sort=trending)  

> [!info] Freepik | Crie designs excelentes, mais rapidamente  
> Milhões de recursos gráficos grátis ✓ Vídeos ✓ Vetores ✓ Fotos ✓ PSD ✓ Ícones.  
> [https://br.freepik.com/](https://br.freepik.com/)  

> [!info] Main Page  
>  
> [https://commons.wikimedia.org/wiki/Main_Page](https://commons.wikimedia.org/wiki/Main_Page)  

> [!info] Fotos profissionais gratuitas, imagens profissionais livres de royalties e fotos sem direitos autorais  
> Fotos e vídeos profissionais para você usar onde quiser.  
> [https://www.pexels.com/pt-br/](https://www.pexels.com/pt-br/)  

> [!info] Lindas imagens e fotos gratuitas | Unsplash  
> Imagens e fotos incríveis e gratuitas que você pode baixar e usar para qualquer projeto.  
> [https://unsplash.com/pt-br](https://unsplash.com/pt-br)  

> [!important]  
> É sempre bom olhar para as licenças, pois alguns desses sites podem também oferecer imagens com licenças pagas.  

# Favicons

são os ícones dos sites, que ficam do lado dos títulos que já vimos antes.

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

o nome do arquivo é favicon.ico, com a terminação de .ico.

para criar esses ícones você pode usar esses sites:

> [!info] favicon.ico Generator  
> favicon.  
> [https://www.favicon.cc/](https://www.favicon.cc/)  

> [!info] Favicon.io - The Ultimate Favicon Generator (Free)  
> With Favicon.  
> [https://favicon.io/](https://favicon.io/)  

> [!info] Icon Archive - 800,000+ free icons & stickers, PNG, SVG Downloads  
> Discover 800,000+ free icons.  
> [https://www.iconarchive.com/](https://www.iconarchive.com/)  

**.ico** é um formato voltado para ícones que coloca no lado do título assim fica na seguinte estrutura:

```JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```