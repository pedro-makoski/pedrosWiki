  *As funções são blocos de código nomeados que podem ser executados de qualquer outro ponto do código, bastando invocar seu nome.*
# Objeto Date
![[Pasted image 20241026143914.png]]
![[Pasted image 20241026143944.png]]![[Pasted image 20241026144029.png]]
# Funções 
Veja um exemplo abaixo
![[Pasted image 20241026144203.png]]
Esse código imprime o horário duas vezes. 
**Agora sim!** Com o uso de funções, repare que podemos executar o mesmo bloco de códigos em qualquer lugar, quantas vezes forem necessárias. Para isso, basta usar o nome da função seguido de parêntesis “**_( )_**”.
Em toda linguagem de programação, todos os termos finalizados com parêntesis representam uma função, um método (que é uma função da classe) ou uma classe de objeto, como o Date() que usamos.
## Estrutura
![[Pasted image 20241026144400.png]]
## Parâmetros de entrada
A função está sempre acompanhada dos parêntesis, que representam a “porta de entrada” dos parâmetros, mesmo se a função não possuir nenhum parâmetro.   
Os **parâmetros** são a forma de enviar dados para dentro da função.
Por exemplo: A função **console.log()** requer um valor de entrada para executar seu código de forma satisfatória. Este “valor de entrada” é chamado de parâmetro. Portanto, quando usamos **console.log(“Um texto qualquer”)**, a string “Um texto qualquer” é o parâmetro de entrada da função que recebe este valor e o processa de acordo com o qual foi programado, que é exibi-lo no console.
![[Pasted image 20241026144726.png]]
Primeiro resultado: 
Um texto Qualquer:14:47:52
![[Pasted image 20241026144924.png]]
## Parâmetros de saída
Assim como temos os parâmetros para representar os valores de entrada da função, podemos ter também um valor de saída, que é retornado pela **função**.
O return é geralmente usado ao final da função, representando o retorno do valor após todo seu processamento. Porém, ele tem mais de uma utilidade na função:
- Encerrar a execução da função. 
- Retorna uma saída. Um resultado.
![[Pasted image 20241026145207.png]]
### Exemplo
![[Pasted image 20241026145227.png]]
Aquele if lá a cima, é para verificar se o parâmetro veio vázio se sim retorna ..., e encerra a função. 
![[Pasted image 20241026145548.png]]
## Outras formas de função
A que vimos até agora, se chama função **nomeada.** Vamos ver outros exemplos:
### Função anônima - sem nome
Você pode com elas armazenar em um variável, passar como um parâmetro para outra função, ou ser executada sem nome. 
![[Pasted image 20241026145940.png]]
Repare que para copiar a função na variável fm, eu não coloquei parêntesis. 
Esse exemplo foi usando uma função nomeada, pois eu só coloco o parênteses quando eu for executar uma função, o mesmo se repete com .on{event}=fm, sem parêntesis, quando for atribuir uma função nomeada. Mas uma função anônima é assim: ![[Pasted image 20241026150150.png]]
Assim a variável passa a funcionar como se fosse uma função nomeada.
### Arrow functions ou funções de seta
Essa forma de armazenar uma função em variáveis permitiu a evolução da estrutura da função e sua otimização, como a nova forma de estruturação com _**arrow**_ **_functions_**. Que foi trazida na ultima versão do Ecma Script trazido em 2015. 
![[Pasted image 20241026150513.png]]
Nesse novo formato é tirado a parte que diz: function e é colocado uma seta =>, entre o bloco dos parâmetros e as chaves. 
Para arr function que apenas retornam pode sair de assim:
```js
let fc = (num) => {
	return num*num
} 
```
Para assim: 
```js
let fc = (num) = num*num
```
As chaves podem ser removidas e a expressão return também.
![[Pasted image 20241026150953.png]]
# Refatoração
**Refatoração** é o processo de modificar um sistema de software para melhorar a estrutura interna do código sem alterar seu comportamento externo. Para conhecer mais sobre refatoração, clique [aqui](https://pt.wikipedia.org/wiki/Refatora%C3%A7%C3%A3o).
# Funções internas do JS
O **JavaScript** possui diversas funções internas para tratar de aspectos matemáticos, arrays e demais tipos de dados. Os tipos de dados que conhecemos também podem se comportar como “**Objeto**”.
# String
Por exemplo:
![[Pasted image 20241026155957.png]]
A propriedade new, seria o instanciamento de uma string, de um novo objeto.
Os métodos são:
![[Pasted image 20241026160158.png]]Veja mais [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#Inst%C3%A2ncias_de_String.)
## toUpperCase() e toLowerCase()
- **_toUpperCase()_** (que significa “para maiúsculo”)
- **_toLowerCase()_** (que significa “para minúsculo).
## Propriedade Length
Retorna a quantidade de elentos de uma string. 
![[Pasted image 20241026160518.png]]
## split()
Divide e retorna um array. Ela pode ser baseada em qualquer caractere. 
![[Pasted image 20241026160703.png]]
O parâmetro que você coloca é o valor que divide entre dois ou mais valores de um array.
## Substring 
Retorna apenas uma parte da string:
![[Pasted image 20241026162429.png]]
# Array
## Map
Para listas, ela recebe uma função, com um parâmetro, esse parâmetro é o valor de cada iteração.
# Math
## Math.round(valor)
Arredonda um valor para nenhuma casa decimal. Podendo ser para cima ou para baixo, a mesma regra da matemática.
## Math.abs(valor)
Retorna o módulo, o valor absoluto. O negativo vai para positivo, e o positivo também para o positivo. 
## Math.floor(valor)
Arredonda para baixo. 
## Math.pow(base, potencia)
Potenciação. Eleva a potência na base. 

Veja mais [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String.)

