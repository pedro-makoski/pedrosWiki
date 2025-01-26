---
Capitulo: 5
Data: Invalid date
Modulo: "1"
tags:
  - HTML
---
# Quebra de linha

```HTML
<br>
```

br - significa break-row, ou seja em paragrafo, não adianta para pular linha, no editor de código pois ela não vai ter pulado no site, na verdade você precisa usar o br, para quebrar a linha.

  

# Caracteres especiais

são caracteres como >(greater-than), <(less-than), e etc.

Para colocarmos esse tipo de coisa no HTML, utilizamos os HTML entities.

![[notion-bakcup/02/Captura_de_tela_2024-01-12_165150.png|Captura_de_tela_2024-01-12_165150.png]]

Normalmente eles sempre começam com e-comercial(&) e terminam com um ponto e virgula(;).

# Emoji

Para colocarmos emojis da maneira correta no nosso site, nos precisamos primeiramente ir procura-los, na Emojipedia:

  

> [!info] 📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍  
> 🐰 Chinese New Year  
> [https://emojipedia.org/](https://emojipedia.org/)  

Escolhemos um, e clicamos depois vamos para a opção Technical Information.

na opções abaixo vamos ter a opção Codepoints, que vai ter esse código por exemplo: **U+1F385**, e para colocar no HTML agente tirar a parte que está escrito como U+, e coloca um &\#x no inicio(o x é minúsculo), e termina com um ponto e virgula, ficando assim: **&\#x1F385;**