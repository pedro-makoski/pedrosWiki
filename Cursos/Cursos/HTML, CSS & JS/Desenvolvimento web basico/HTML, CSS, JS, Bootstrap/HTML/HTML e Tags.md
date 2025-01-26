Entenda como usamos as tags para formatar, estruturar e dar semântica a um texto, em HTML.
![[Pasted image 20240722142622.png]]
Nesta imagem vemos que o conteúdo, está dentro da tag p, de paragrafo, ou seja esta formatando como um parágrafo. E assim juntado tudo isso tanto conteúdo quantos as tags, temos o elemento em si.
![[Pasted image 20240722143042.png]]
Essa imagem mostra como funciona a estrutura básica, de uma página HTML, tirando o que está dentro da tag body, e title, que podem variar. Dentro da tag **html** definimos a página HTML em si, tudo dentro dele será parte da página. E o lang também pode variar de acordo com a língua da sua página.

A tag html é a raiz, depois temos as tags head e body, em uma cadeia, onde tags podem ou não ter outras tags dentro. A tag head define dentro de si, as configurações da página, tipo as configurações de caracteres, como UTF-8. E na tag body, o que de fato vai aparecer na página.

## Vamos entender cada tag um pouco.
### <!DOCTYPE html>
Índica que estamos usando a versão mais recente do HTML, no nosso caso o HTML 5.
### `<html lang="pt-BR"> e </html>`
Envolve todos os elementos da página e as configurações. Perceba que se tem a propriedade lang, com o valor pt-BR, que faz com que a página HTML tenha location da língua português do Brasil. 
### `<head></head>`
Leva ao navegador configurações sobre a página, o que está dentro dela não aparece para o usuário final.
### `<meta charset="UTF-8"/>`
Garante que a página possa ter caracteres especiais, e letras com acentuação. 
### `<title>Título</title>`
Define o título da página que será exibido na aba do navegador. 
![[Pasted image 20240722144134.png]]
### `<body></body>`
Ele contem todos os elementos que serão visíveis para o usuário final. 
### `<h1></h1>  <h2></h2>  <h3></h3>  <h4></h4>  <h5></h5>  <h6></h6>`
Definem os títulos, os header das páginas, onde o h1 contém o título principal, e as demais abaixando o nível de título. Não existem h2 sem h1, ou h6 sem h5, por exemplo.
### `<p></p>`
Principal tag de texto, ela compõe uma parágrafo. 
### `<strong></strong>`
Deixa o texto em **negrito**, ou melhor forte, em destaque.
### `<em></em>`
Frase em *itálico*, ou em *ênfase*.
### `<ins></ins>`
Palavras que ficam sublinhadas, ou inseridas. 
### `<small></small>`
Deixa as palavras pequenas, tipo as letras pequenas. 
### `<sup></sup>`
Palavra sobrescrita. <sup>Olá</sup>. 
### `<sub></sub>`
Palavra subscrita, <sub>Olá</sub>.
### `<del></del>
Deixa os seu conteúdo riscado ou deletado. <del>Olá</del>
### `<hr>`
Cria uma linha horizontal. Como essa abaixo: 
<hr>
Essas tags são semânticas, tem outras que formatam do mesmo jeito mas não são. A semântica permite que o computador leia melhor a página HTML. 
# Propriedade Style
Pode definir estilo você coloca os valores dentro das aspas, cada configuração é separada por ponto e vírgula. 
![[Pasted image 20240722152349.png]]
Veja o resultado, de colocar uma cor de fundo(background-color), como amarelo(yellow), a cor de texto(color) como vermelho(red), e outras propriedades. Cada propriedade e valor é feita assim: propriedade:valor;
- Use **background-color** para mudar a cor de fundo (colocamos yellow/amarelo).
- Use **font-face** para mudar o tipo de fonte (usamos Verdana).
- Use color para mudar a cor do texto (usamos red/vermelho).
- Use **font-size** para mudar o tamanho do texto (usamos 30px). 
- Use **text-align** para mudar o alinhamento do texto entre a esquerda, direita ou centralizado (usamos center/centro).
# index.html
A página principal de um site, isso é como os navegadores reconhecem a página index. E a primeira a ser executada em um caminho especifico. 

