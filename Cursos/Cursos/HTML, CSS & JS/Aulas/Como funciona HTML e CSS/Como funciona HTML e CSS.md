---
Capitulo: 3
Data: Invalid date
Modulo: "1"
tags:
  - CSS
  - HTML
---
# HTML

arquivo que termina com .html.

---

## estrutura básica do HTML.

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

## Define que estamos usando o HTML 5(o mais recente)

```HTML
<!DOCTYPE html>
```

## Define a língua do site

---

```HTML
<html lang="pt-br">
</html>
```

Na nossa língua utilizamos o pt-br, que é português, se você deixar em inglês como “en”, o navegador vai ficar traduzindo do português da sua pagina, para português, por que ele acha, que está em inglês.

Inclusive nesse caso a tag HTML tem que ser fechada, e dentro da **tag HTML, fica todo as configurações tanto de head, quanto de body** que define o que você vai ver de fato no site.

## No HTML temos tags que fecham e que não fecham

### Fecham

```HTML
<body>
    
</body>
```

inclusive quando uma tag é fechada ela tem uma barra no incio, depois do colchete angular(<).

### Não fecham

```HTML
<meta charset="UTF-8">
```

```HTML
<img src="" alt="">
```

não possui barra nesse caso.

## Head

define as configurações da página HTML.

---

```HTML
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

  

### Meta charset

---

define o modo de letras, nesse caso na nossa lingua é necessario o modo UTF-8 que basicamente incorpora os acentos, e o ç.

![[notion-bakcup/02/Untitled 5.png|Untitled 5.png]]

```HTML
<meta charset="UTF-8">    
```

  

### Meta

---

basicamente define, na parte da viewport, que vai acontecer tudo isso em tela, e depois em content, que o zoom vai ser em 100%

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Title

---

Define o titulo da página HTML.

```HTML
<title>Document</title>
```

Nesse caso o nome da página, vai ser Document.

  

## Body

---

Define o que você vai ver no site, os textos, os inputs, e assim vai.

```HTML
<body>
    
</body>
```

  

# CSS

arquivo que termina com .css.

---

dentro de um estilo temos:

```CSS
h1 {
    background-color: blue;
    color:white;
}
```

Dentro disso temos:

- o h1 que é um **seletor**, basicamente ele seleciona uma tag neste caso a tag h1 de HTML que é o titulo principal digamos assim.
- Dentro das chaves temos as **linhas**.
- e dentro dela temos as **propriedades,** que são nesse caso o background-color e o color.
- depois das propriedades temos um dois pontos e depois o valor, que nesse caso são os valores blue e white.
- E termina, nunca se esqueça do ponto e virgula no final.