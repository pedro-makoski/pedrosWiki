# Props - parâmetros
São propriedades passadas nos parâmetros dos componentes. O props é um objeto onde vai estar todos os parâmetros. 
![[Pasted image 20250211195633.png]]
![[Pasted image 20250211200458.png]]
Você pode passar as propriedades com chave e valor entre aspas.
```jsx
<Compo elemento="ban"/>
```
Ou passando um código JS, colocando entre chaves:
```jsx
<Compo elemento={5}>
```
# Strict mode
Repete a renderização duas vezes, para facilitar a identificação de erros. 
![[Pasted image 20250211195841.png]]
Ou seja, por exemplo, se você colocar um console.log no app, ele vai aparecer duas vezes.
# Desestruturação 
![[Pasted image 20250211200233.png]]
Se trata de obter um elemento de um objeto. Agente viu isso nos imports.  
![[Pasted image 20250211200516.png]]
# Usar JS dentro do retorno componente
Você pode fazer isso colocando o código JS dentro de chaves.
# Operador ternário
![[Pasted image 20250211201322.png]]
No primeiro caso agente tem um código padrão mais avançada, e mais complexa. No segundo caso é usado a operação ternária. Onde ele pergunta com interrogação, se é verdadeiro ele realiza a ação após o ? e depois no :, caso seja falso, ele executa o que está depois do :.

Em alguns casos, você pode verificar se ele existe se existir coloca ele mesmo, se não coloca outro valor.
Então faça assim:
```js
elemento ?? "Caso seja undefined"
```
Ao invés de assim:
```js
elemento ? elemento : "Caso seja undefined"
```
# Map 
Passar por todos os elementos de um array. Recebe como parâmetro uma função, que tem como parâmetro o current value e o index. A função de parâmetro, retorna um valor que vai estar no retorno do map referente aquela posição da lista. Ou seja, o map retorna uma lista com os valores de retorno a partir de cada retorno de cada iteração. 
# Criar lista com valores vázios
Você pode criar uma lista:
```js
Array(5)
```
Mas isso vai retornar uma lista vázia, que não pode ser iterada. Para que funcione faça:
```js
Array(5).fill() 
```
Onde cada valor vai ser undefined. 
# Resolvendo o erro:
![[Pasted image 20250211204432.png]]
Quando existe uma repetição de elementos é necessário colocar um key, para identificar o elemento, organizando melhor o react. ==O key deve ser único, mesmo em relação a outros keys de outros componentes. Isso é uma boa prática, não necessário, normalmente não dá erro==
# Filter
![[Pasted image 20250211210341.png]]
O filter cria um filtro a partir de uma lista. E retorna a lista com apenas os indíces com os valores que correspondem a condição. 
# Spread operator
Cria um cópia do elemento. Porque se você apenas atribuir uma cópia, ele vai passar o endereço conjuntamente, ou seja se você muda o objeto novo você muda o objeto antigo. 
![[Pasted image 20250211211500.png]]
O spread operator é os ``...``
Você pode aplicar isso em um cenário de componentização, colocando todos os parâmetros no props, diretamente, adicionando props:
![[Pasted image 20250211212050.png]]
# react-router-dom
```sh
npm i react-router-dom
```
Permite a criação de rotas.
![[Pasted image 20250211213137.png]]
O browseRouter cuida das rotas. Fazendo com que toda as trocas de router ocorram no componente dentro dele. 
![[Pasted image 20250211213216.png]]
Deixando tudo mais simples e rápido.
O routes engloba todas as rotas que o browseRouter vai cuidar. 
E o route cria uma rota específica(path), e coloca um elemento dento dele(element), que vai aparecer na rota. 
![[Pasted image 20250211213655.png]]
Você pode colocar query Param, que você pode acessar em uma página:
![[Pasted image 20250211213900.png]]
Com algo, por exemplo, :id. E o quert Param vai ser o id, e vai poder ser acessado no elemento. 

E também tem o link, que é ancora do react-router-do, mas ao invés de a é Link e o href é DOM.
![[Pasted image 20250211214156.png]]