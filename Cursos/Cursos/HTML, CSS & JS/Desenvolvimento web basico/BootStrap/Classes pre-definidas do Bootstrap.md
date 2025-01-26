# Container
Ele é o responsável por  definir um **layout estrutural, proporcionalmente alinhado na página**. Ele não é nada mais, e nada menos, do que uma classe CSS com propriedades pré-definidas, que podemos usar normalmente em um elemento da mesma forma que faríamos como se fosse uma classe CSS que criamos em nosso projeto.
Código:
![[Pasted image 20241125144536.png]]
Resultado: 
![[Pasted image 20241125144551.png]]
Ao utilizar a classe **_container_**, temos um container de largura fixa porque ele é baseado em breakpoints*****. Eles são pontos de interrupção, ou seja, eles possuem uma largura definida para cada tamanho de tela.** Em outras palavras, é um código diferente para cada breakpoint ou seja um ponto de diferença entre um e outro. Já vimos algo assim antes em [[Mediaqueries]].
![[Pasted image 20241125144703.png]]
Existe um outro tipo de **_container_** que ocupa toda a tela. Para isso, usamos a classe "**_container-fluid_**".  Ela define um layout que considera a largura total da página que será visualizada. Esse tipo de container é considerado fluido, pois utiliza a porcentagem de 100% ao invés de breakpoints.
![[Pasted image 20241125144928.png]]
# Grid 
No **CSS**, temos diversas formas de compor um layout em nossas páginas, entre elas estão os sistemas **CSS Grid** e o **Flexbox**, onde temos linhas e colunas formando áreas para que possamos organizar, de maneira mais precisa, nossos elementos.
![[Pasted image 20241125145026.png]]
O **Bootstrap** também possui classes para facilitar a criação de layouts responsivos que implementam o sistema de grids, mas de uma forma bem mais simples. Vamos aprender?
![[Pasted image 20241125145116.png]]
Por padrão, utilizamos sempre um elemento pai com a classe **_container_**, seja uma **_div_** ou uma **_section_**, onde iremos colocar os demais elementos. No exemplo acima, além de utilizar a classe **_container_** para agrupar os elementos, temos também as classes **_row_** e **_col-sm_** para definir que os elementos irão ter os comportamentos de linha e de coluna, respectivamente.

Neste exemplo, poderia ter sido usado a classe apenas com o nome "**_col_**", sem o "**_-sm_**". Este "-sm" após o nome da classe define a largura máxima do container e é a sigla de Small (pequeno).
![[Pasted image 20241125145259.png]]
![[Pasted image 20241125145435.png]]![[Pasted image 20241125145442.png]]
Esse mesmo código em telas menores, como de smartphones, você verá que esse layout irá se ajustar, sem haver quebras:
![[Pasted image 20241125145528.png]]
# Cores
Neste tópico, iremos aprender como trabalhar com cores utilizando **classes** do **Bootstrap**. O **Bootstrap** tem como padrão cores que estão bastante relacionadas à experiência do usuário. Logo, as cores e os nomes das classes dessas cores resultam em algum sentido.
![[Pasted image 20241125145736.png]]
Para aplicar cor nos textos e links, utilizamos a classe "text-" seguida do nome da cor que aprendemos anteriormente.
![[Pasted image 20241125145831.png]]
![[Pasted image 20241125145840.png]]
Para aplicarmos cores de fundo dos elementos, utilizamos a classe "**_bg-_**" (de background) seguida dos nomes das cores. Além disso, pode ser necessário aplicar, além da classe para plano de fundo, as classes para alterar a cor do texto e assim não haver conflito.
![[Pasted image 20241125145905.png]]
![[Pasted image 20241125145943.png]]
# Mais
- **Border:** define as bordas do elemento.
- **Border-danger:** define as bordas com a cor vermelha.