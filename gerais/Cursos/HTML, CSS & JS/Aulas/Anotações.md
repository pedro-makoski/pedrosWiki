## Float
Posiciona um elemento em relação ao pai, pode ter valor left, por exemplo, e fica a esquerda, pode ter right e ficar a direita.
## Atributo no seletor
(tag)[atributo="valor"] ou (tag)[atributo=valor]
Por exemplo:
```css
input[type="number"] {
	background-color: blue;
}
```
Assim todos os inputs do tipo number, definido no HTML, vai ter uma cor de fundo azul. 
## Calc
Método CSS que pode calcular valor entre medidas diferentes.
```css
width: calc(100%-500px);
```
## Transformação - ultima linha
Sempre deixe na última linha a transformação e transição, da propriedade transform e transition.
## Focus-within
Quando o usuário selecionar um campo, o que está dentro dessa pseudo-classe vai acontecer.
```css
input:focus-within {
	color:black;
}
```
A fonte ficara preta quando o input estiver em foco.