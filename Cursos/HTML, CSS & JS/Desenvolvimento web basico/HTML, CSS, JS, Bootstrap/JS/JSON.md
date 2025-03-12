O **JSON** é um acrônimo ou sigla de JavaScript Object Notation (Notação de Objetos JavaScript). O famoso JSON, como o nome diz, é uma forma de escrever (notação) objetos em JavaScript.

Com ele, é possível representar e transferir dados entre clientes e servidores, ou ainda, entre aplicações que precisam se comunicar. Os dados ficam estruturados em hierarquias e armazenados em pares de chave-valor.
# Exemplo de arquivo JSON
- test.json:
	- ![[Pasted image 20241026160913.png]]
# Delimitações do JSON
## {}
As chaves {} delimitam um objeto. Logo, no exemplo anterior, temos um objeto.
## :
Os dois pontos “:” separam chaves e valores.
## ,
As vírgulas separam os pares de chaves/valores.
## []
Os colchetes [] delimitam um array (não tem no exemplo).

Em resumo, a representação dada é um objeto. Este possui atributos e cada atributo possui seu respectivo valor.
# Estrutura
É possível em sua estrutura que atributos tenham como valor outros objetos:
![[Pasted image 20241026161224.png]]
Pode haver também um atributo que não receba não apenas um objeto, mas mais de um, para isso é necessário usar arrays:
![[Pasted image 20241026161346.png]]
# Curiosidade
O **JSON** foi originalmente criado apenas para o JavaScript, tanto que tem o “JS” em seu nome. No entanto, seu formato, estrutura de dados e funcionalidade de manipulação se mostraram tão eficientes que outras linguagens de programação também passaram a adotar o JSON. 

Por isso, o JSON é **_utilizado em todas as linguagens de programação_**, inclusive em bancos de dados.

Para saber mais, clique [aqui](https://www.youtube.com/watch?v=P81dE-tkaaA).
# Converter string em JSON
Para isso utilizamos o método JSON.parse(string):
![[Pasted image 20241026161652.png]]
# JSON para string
Podemos usar o método JSON.stringfy(objeto):
![[Pasted image 20241026161741.png]]
# Outro exemplo
![[Pasted image 20241026161814.png]]
- Ao atribuirmos um JSON a uma variável, transformamos a variável em um objeto.
- Cada objeto JSON, é herdado todos os objetos da classe mãe. 
- Cada atributo JSON torna-se um atributo da variável. 
- Eu posso atribuir funções a esses objetos. Esses são chamados de **métodos**. Os valores acessados são chamados de **atributos.**
- 
# Aprofundamento
Acesse [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)
