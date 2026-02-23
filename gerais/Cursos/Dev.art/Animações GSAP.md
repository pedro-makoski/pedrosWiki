# Deixar scrolls mais suaves
Você pode usar ferramentas como a Lenis ou Gsap.
Iremos usar GSAP.
## Baixando o GSAP com os plugins necessários
- ScrollSmother
	- ScrollTrigger
- SplitText
Lembre de usar a função de RegisterPlugin.
## Deixando o scroll smoth
```js
ScrollSmoother.create({
	smooth: 1, // indica o quão suave
	effects: true, // Ajuda a funcionar outros efeitos como data-speed
	smoothTouch: 0.1 // Não recomendado. Mas serve para dispositivos moveis.
})
```
Para funcionar o seu conteudo completo precisa estar dentro de um div#smooth-wrapper>#smooth-content.
## Efeito parallax - desacelerando elementos no scroll
Coloque no HTML o atributo data-speed. 1 é normal, > 1 é mais rapido, < 1 é mais lento.
# Animações de entrada no Scroll
Temos o gsap.to() e o gsap.from().
	To indica ao estado que vai se tornar. E From indica de onde veio.
## gsap.to, gsap.from
O primeiro parâmetro é o seletor. E o segundo a animação que você quer fazer. Com parâmetro do segundo objeto atributos CSS, além de x, y, duration(indica a duração em segundos), stagger(permite animação intercalada, intervalo entre a animação dos elementos), immediateRender: false(só realiza as ações depois de pegar todas as propriedades). Você pode colocar uma função onCompelete, que indica quando a animação é finalizada.
Acontecem quando a página é carregada. 
## Fazendo que aconteça quando apareça no Scroll
Dentro do objeto coloque: scrollTrigger que recebe outro objeto.
```js
{
	trigger: "", // div que quando aparece é colocada.
	markers: true,// Mostra as marcações do scrollTrigger.
	start: "0% 100%", // Indica onde fica o start em relação ao container trigger, assim como o scroller-start está para o container body.
	invalidateOnRefresh: true, //  Se verdadeiro , o método [invalidate()](https://gsap.com/docs/v3/GSAP/Tween/invalidate\(\)) da animação associada ao ScrollTrigger será chamado sempre que ocorrer um refresh() (normalmente ao redimensionar a tela). Isso elimina quaisquer valores iniciais registrados internamente.`true`

}
```
Para a animação ocorrer o scroller-start deve bater no start.
## Fazendo que o elemento resete as animações quando sair do scroll 
Passe no atributo de scrollTrigger:
```js
{
	scrub: true, // Faz com que a animação ocora ao longo do scroll. Ele finaliza quando o scroller-end bate no end. Pode ser um valor começando em 1, que indica o quão sutil o elemento vai andar, e quando ele parar pelo scroll ele vai frear lentamente. 
	end: "100% 0%"
}
```

# Efeito de letras surgindo - animação de cada caractere
Usando o SplitText.
```js
const split = SplitText.create("seletor-do-texto", {
	type: "words" | "chars" | "words, chars" | "lines" | "lines, words, chars",
	mask: "lines" // mascara a partir da linha
})

gsap.from(split.chars, {
	y: 40,
	durattion: 0.1,
	stagger: .2,
})
```
# Criando preloadoers 
Fora do smooth-wrapper. Coloque uma div com id preloader, com o svg.
Propriedades CSS do SVG.
```css
stroke-dasharray: 0px; /* Indica o tamanho de cada traço do dashed do svg. */
stroke-dashoffset: 0px; /* Indica do traçejado a movimentação que ele vai ficar em relação ao tamanho total dele */
```
# Criando uma timeline - sequência de animações
```js
const tl = gsap.timeline({
	onComplete() {
		// Quando a timeline acabar.
	}
})

tl.to()
tl.from()
// e assim por diante
```

