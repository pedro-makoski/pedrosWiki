---
Capitulo: 12
Data: Invalid date
Modulo: "1"
tags:
  - CSS
---
# Estilos inline

estilos que estão na linha do HTML:

```HTML
<a style="color:blue;">aaa</a>
```

ruim pois bagunça o código, e fica difícil de mudar tudo caso queira mudar.

# Estilos internos

estilos que estão na mesma página, do HTML, porem estão em uma parte separada no header.

```HTML
<style>
	a {
		color:blue;
	}
</style>
```

fica com linhas muito grandes dentro do HTML e quando quero colocar o mesmo estilo em outro arquivo não dá.

# Estilos externos

estilos que estão em um arquivo separado e no HTML tem um link á esse arquivo.

```HTML
<link rel="stylesheet" href="style.css">
```

no style.css

```CSS
a {
	color:blue;
}
```