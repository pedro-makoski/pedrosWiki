---
Capitulo: 15
Data: Invalid date
Modulo: "2"
tags:
  - CSS
---
# ID

você pode colocar o parâmetro id seguido por um igual e depois entre aspas coloque o nome que você destina para aquele id.

já no CSS você utiliza um cerquilha(hashtag) para falar que está procurando um ID, e colocar o nome que você deu ao id lá em CSS, e você pode antes da cerquilha colocar a tag que utiliza esse id, ou seja se for um h1, você pode colocar o h1\#nome-do-id, assim ele vai editar o h1 que teja o id tal.

tudo que é id em HTML em CSS é #. e tem que ter exatamente o mesmo nome.

> [!important]  
> o ID só pode ser usado uma vez, para poder usar mais de uma vez se usa o class.  

# CLASS

tudo que HTML é class em CSS é ponto.

tudo que é id em HTML em CSS é #. e tem que ter exatamente o mesmo nome.

**dica: não de nome para sua classe de acordo com a forma e sim com sua função.**

outra dica: dá mais não é necessário colocar a especificação na class, antes do ponto.

e você também pode colocar mais de uma classe para dois elementos, só colocando um espaço entre um item e outro.

e você também pode colocar um id e uma classe juntos.

interessante, o id sempre sobrepoem a classe.

# Div

as divs são espaços que se cria no HTML, e que normalmente por padrão vão do inicio até o fim da tela, em largura.

height - define a altura de algo em HTML pelo CSS

width - define a largura de algo em HTML pelo CSS

a propriedade o valor `display: inline-block;` faz com que os itens fiquem tudo na mesma linha.

# Pseudo classe

elas devem estar relacionadas á um elemento ou á uma classe, elas estão relacionadas á um estado de um determinado elemento. por exemplo tem o estádo - pseudo classe hover, que é quando estiver passando o mouse por cima. e coloca para isso o seletor assim `div:hover`. onde temos o objeto, depois : e seu estado.

a propriedade e valor `display:none`, faz com que o elemento que você coloca essa propriedade e valor não apareça. o ao contrario normal disso é o block, que apenas faz com que apareça.

> [!important]  
> Interessante você pode selecionar um elemento que esteja direramente filho daquele item assim por exemplo div > p - isso se coloca no seletor, assim você seleciona todos os paragrafos que são filho da div.  

a propriedade `line-height` - define a altura de cada linha.

interessante links já visitados pelo usuário ficam meio magenta, e os não visitados ficam em azul por padrão.

outra pseudo classe é o `:visited`, que define um estilo para sites que já foram visitados.

e importante o final sempre subscreve então coloque o active antes do hover, para poder funcionar o hover.

outra pseudo-classe é o `:active` que é quando um elemento é clicado. e o active tem que ficar depois do hover que fica depois do visited.

# Pseudo-elementos

enquanto pseudo-classes são apenas 1 vez dois pontos, pseudo-elementos são duas vezes dois pontos.

por exemplo o `::after` que dentro dele você coloca a propriedade content que vai ser o conteúdo que vai acontecer depois daquele elemento que você colocou after.

e enquanto `::after` coloca itens depois o `::before` coloca itens antes dele.

## você pode proucurar itens/simbolos aqui nesse site (HTML entities)

> [!info] Tabela de Símbolos Especiais, Dingbats e Desenhos em HTML | Erika Sarti  
> Tabela de Acentuação e Caracteres Especiais em HTML  
> [https://erikasarti.com/html/dingbats-simbolos-desenhos/](https://erikasarti.com/html/dingbats-simbolos-desenhos/)  

# Portanto

os seletores personalizados:

. = class

# = id

: = pseudo-class

:: = pseudo-element

> = children - filho