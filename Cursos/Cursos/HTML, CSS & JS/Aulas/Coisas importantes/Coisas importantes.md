---
Capitulo: 2
Data: Invalid date
Modulo: "1"
tags:
  - Definições
---
# Estrutura de uma URL

[https://blog.google/products/android/android-auto-new-features-ces24/](https://blog.google/products/android/android-auto-new-features-ces24/) - isso é uma URL completa.

- Nesse caso ==https://== é um **protocolo.**
- ==blog.== é um **sub-domínio.**
- ==google== é o domínio.
- [/android/android-auto-new-features-ces24/](https://blog.google/products/android/android-auto-new-features-ces24/) - é um caminho.

  

E em outros caso como por exemplo: [https://www.google.com/](https://www.google.com/)

- ==www== - é o **sub-domínio principal.**
- e o .com é o **TLD** naverdade um **GTLD** que são como por exemplo .com, .so, .io, .gov e etc, mas temos CCTLDs que são são basicamente TLDs de cada região:

![[Untitled 18.png|Untitled 18.png]]

  

# Frontend + Backend = FullStack

- **Frontend**: a parte que roda na parte do cliente, o client-side, normalmente focada em parte estética como por exemplo textos prontos, imagens prontas, cores e etc,que são levados para o cliente, e rodadas no navegador, ou no sistema operacional dele. é visivel na frente do usuário que esta acontecendo.
- **Backend:** Rodado na parte do servidor, também chamado de server-side, capaz de fazer coisas como por exemplo, rodar o algoritmo para saber o que mostrar e etc. não é visível na frente do usuário o que está acontecendo.

> [!important]  
> Não existe programo em HTML e nem programo em CSS, pois o HTML e o CSS, não são linguagens de programação e sim de marcação. então eu desenvolvo em HTML, eu desenvolvo em CSS.  
  
> [!important]  
> o certo é falar HTML e as CSS pois na tradução HTML é linguagem marcativa de hypertexto, e CSS é folhas de estilo em cascata.  

# Domínio x hospedagem

- **Domínio**: nome único, a qual a partir dele vai ser buscado nos DNS. que obtém o IP do servidor e traz para o usuário de forma partida em diferentes pacotes num caminho até chegar ao usuário.
- **Hospedagem**: o local onde fica hospedado os dados no site(arquivos como HTML, CSS, PHP, JavaScript e etc.), basicamente a hospedagem é o servidor onde são executadas as partes back-end e obtida as partes front-end.

# Ocultar scroll-bar por css
```css
::-webkit-scrollbar {
	width: 0;
	height: 0;
}
```
