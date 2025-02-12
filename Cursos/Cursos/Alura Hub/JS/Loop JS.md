# While
Verifica uma condição, e faz enquanto aquela expressão for verdadeira. Quando for false, vai parar.
![[Pasted image 20250212153225.png]]
# For
Versão mais enxuta em relação ao while, quando o objetivo é iterar por uma lista, ou iterar por uma certar quantidade. Onde no primeiro parâmetro é passado a criação ou atribuição da variável contador(só executa na primeira iteração), depois a condição que é passada, para quando a condição (no inicio de cada interação), onde verifica se a condição deve continuar, e depois o que deve ser feito no final de cada iteração. 
```js
for(let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i]
    const intrumentoIdentifier = tecla.classList[POS_OF_IDENTIFIER_SOM_IN_CLASS_LIST]
    const idAudio = `#som_${intrumentoIdentifier}`
    teclas[i].onclick = () => tocaSom(idAudio)
}
```