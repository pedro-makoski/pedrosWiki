Surgido no CSS 3, se trata do CSS Flexible Box Module Level 1.
O flex box, cria layout flexíveis, dependendo do tamanho do container e dentro dele tem os itens. 
O display flex só vai no pai que é o flex-container. 
# flex: auto
Colocado no item, isso indica para ele expandir, dividindo em tamanhos iguais todos os itens, e expandindo para que cumpra todo o tamanho do container a junção deles. 
# Direções e eixos
flex-direction -> feito no pai, e pode ser
	row: em linha, da esquerda para direita
	column: em coluna, de cima para baixo
	row-reverse: em linha, da direita para esquerda
	column: em coluna, de baixo para cima.
## Eixos
em row ->
	main-axis: na mesma direção em linha. Quando é reverso inverte o sentido da linha.
	cross-axis: na transversal. No eixo contrário a direção da linha.
em column ->
	main-axis: na vertical, quando reverte, inverte o sentido.
	cross-axis: da esquerda para direita.

main-start, main-end -> os ponto do eixo que indica o incio e o fim da main-axis
cross-start, cross-end -> os ponto do eixo que indica o inicio e o fim da crosss-axis.
# Empacotamento dos elementos - flex-wrap
wrap -> encapsulamento, empacotamento.
valores do flex-wrap
	nowrap -> não quebra, e espreme o conteúdo o máximo possível
	wrap -> quebra os ultimos elementos, quando não cabem na cross-axis, levando os para o sentido normal.
	wrap-reverse -> quebra os ultimos elementos, quando não cabem, no sentido oposto da cross-axis.

# flex-flow
Shorthand que consiste na junção do flex-direction e o flex-wrap.
# Alinhamento nos dois eixos
## main-axis - propriedade justify-content 
Lembre-se do main-start e o main-end que indicam a posição inicial e final do main-axis.
Valores:
- flex-start: representa que o primeiro item vai ficar exatamente no main-start
- flex-end: o ultimo item vai ficar grudado no main-end
- center: ele calcula o centro main-axis, e coloca o elemento do meio na metade.
- space-between: O primeiro item no main-start e o ultimo item no main-end. Os outros são distribuidos com espaçamento igual
- space-evenly: ele não coloca o primeiro item no main-start e o ultimo no main-end, ele coloca um espaçamento igual entre os elementos, incluindo antes do elemento e depois do ultimo;
- space-around: Ele divide o container em partes iguais, e coloca cada item no centro deles.
![[Pasted image 20260207093256.png]]

## cross-axis - propriedade align-items
Lembre-se do cross-start e do cross-end.
Valores:
- stretch: esticar os elementos do cross-start até o cross-end.
- flex-start: no início do cross-start
- flex-end: no fim do cross-end
- center: no meio do cross-axis
# Centralizando elementos usando flex
```css
display: flex;
justify-content: center;
align-items: center;
```
# Alinhando elementos no conteúdo wrapped(enpacotado) - align-content
Alinha os elementos no cross-axis, quando estão empacotados. 
Valores:
- stretch(*padrão*) -> Divide o elemento pela quantidade de filas na cross-axis e faz com que cada elemento cresça sobre ele
- flex-start: ele vai colocar os elementos grudados em cima. 
- flex-end: os elementos vão ficar na parte inferior.
- center: os itens ficam alinhados no centro do cross-axis
- space-between: os primeiros elementos no cross-start os ultimos elementos no cross-end e o resto com espaçamento igual.
- space-evenly: espaço simétrico entre os elementos e no inicio e no fim
- space-around: divide o cross-axis em partes iguais pelo números de filas. E vai centralizar os elementos dentro do space-around.
# Propriedades relacionados aos flex-itens
## Propriedade order
- Valores:
	- 0(*padrão*): indica a ordem sequencial, relacionado a ordem da posição.
	- (n): Qualquer número pertencente ao conjunto dos números inteiros
Ele ordena os elementos em ordem crescente 
## Propriedade align-self
Alinhamento do item atual.
Funciona no cross-axis.
Valores:
- auto: herda a característica de alinhamento do elemento pai
- flex-start: faz o alinhamento no cross-start
- flex-end: alinha o elemento no cross-end
- center: alinha o elemento no centro
- stretch: expande o elemento por todo o cross-axis.
## flex-basis
Tamanho máximo dos itens no main-axis.
- Valores:
	- auto(*padrão*): definido pelo tamanho do conteúdo.
	- (tamanho)(unidade): define o tamanho máximo que os elementos podem ter
## flex-grow - crescer - pode aumentar?
Valores:
- 0(*Padrão*): não pode crescer 
- > 0 : pode crescer
	- Determina a proporção de quanto ele vai crescer em relação aos outros flex-grow.

## flex-shrink - encolher - pode encolher:
Valores:
- 1(*Padrão*) ou maior - indica que pode escolher? Todo valor > 0 dos números naturais indica que pode encolher.
	- Determina o quanto vai diminuir em relação aos outros.
- 0 - não pode encolher
## Importante sobre flex-grow e shrink
Valores maiores ou iguais a 1, indicam proporcionalidade. Ou seja, não importa se um for 9999 e os outros for 0, que vai ser a mesma que 1, agora se outro for flex-grow 1, dai ele vai crescer/diminuir 9999 vezes mais.
Além disso se tratam não da mudança absoluta, mas sim quanto a diferença de tamanho que mudou tantas vezes mais.
### Substituição em uma linha
```css
flex: [grow] [shrink] [basis]
flex: 1 0 150px
```
O flex também pode assumir os valores:
- initial -> flex: 0 1 auto - padrão
- none -> 0 0 auto
-  auto -> 1 1 auto
- (any value) -> o flex grow vai ser (any value)
