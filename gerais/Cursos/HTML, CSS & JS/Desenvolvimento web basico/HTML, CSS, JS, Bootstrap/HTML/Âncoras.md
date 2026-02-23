São basicamente os links, que são as bases para uma para a navegação entre os sites e páginas da internet. Os links podem fazer referência a uma outra página, um documento, um endereço de correio eletrônico (e-mail) e até mesmo para um número de WhatsApp. Você também pode fazer ligação para elemento de um mesmo documento. 

O link ou melhor, âncora é representado pela tag a, `<a></a>`. Com propriedades obrigatórias ou não. A unica propriedade obrigatória da âncora é o href, a referência de hipertexto, podendo ser externa(site terceiro) ou interna(do mesmo site). 

Title é outra propriedade ele é usado para quando é passado o monteiro do mouse aparecer o texto, dentro dessa propriedade. Também temos o target, o alvo, onde que vai ser colocado o site. `_self` o link é aberto na mesma página, esta é a opção padrão. `_blank` abre o link em outra aba do navegador.
```html
<a href="https://www.youtube.com" target="_blank" title="Site do Youtube" rel="external">Clique aqui!</a>
```
Resultado: 
<a href="https://www.youtube.com" target="_blank" title="Site do Youtube" rel="external">Clique aqui!</a>
As âncoras por padrão são inline ou seja eles não reservam a linha toda para ela. Os elementos inline são dispostos um do lado do outro. 