# npm
Node packet maneger. Uma das maiores bibliotecas de bibliotecas/frameworks do mundo.
# vite
Biblioteca do NPM, que transforma todos os arquivos de um projeto node front end, em arquivos HTML, CSS e JS. Fazendo o build do projeto. 
Execute então o comando:
```bash
npm create vite@latest .
```
Cria uma estrutura com a ultima versão do vite, na pasta atual. Depois insira o nome do pacote, o framework a usar(react) e depois a linguagem. 
Depois insira o ``npm install`` ou ``npm i``, para instalar todas as dependências a qual estará no node_modules. A qual não deve ser enviado, e sim as depêndencias no package.json.

No package JSON tem scripts e dentro o dev. Que é o comando que vai ser executado quando for digitado: `npm run dev`. 

Vai vim alguns arquivos padrão, pode deletar public, assets, app.css, os itens já feitos no index.css, os imports no app.jsx e no mesmo arquivo tire o return. 

No main.jsx, contem a chada do app.jsx, ele é o arquivo principal onde vai pegar o HTML e colocar o app no root. 
# React
Tudo é baseado em componentes. 
## Componentes
Itens que se repetem com a mesma estrutura, mas com informações diferentes. 
![[Pasted image 20250210200906.png]]
O main.jsx visto antes, é onde chama o app componente. E onde é importado o index.css e app.jsx. 
Ele cria no root, uma root e renderiza o seguinte código jsx. Que é como se fosse um JS com a possibilidade de incrementar a sintaxe HTML juntamente. 
![[Pasted image 20250210203120.png]]
**Correção:** o Certo é getElementById, não getElementIById
E chama o App componente colocando dentro da página. Que é renderizado, tipo pintado no elemento com id root, dentro do HTML.
## RAFCE
React arrow function component element. Pode ajudar com certas extensões criando a estrutura da arrow function para o React.
## Import
```js
import "./caminho/do/arquivo"
```
## Criar componentes
Para criar componentes segue a mesma estrutura do App. E os nomes devem ser em **pascal case** onde a toda primeira letra das palavras no nome é maiúscula. Você pode criar cada componente e colocar lá o jsx do componente.
## default ou não default
O export default permite com que você possa importar com qualquer nome sem precisar de colocar entre chaves. Mas sem o default precisa colocar entre chaves o import e precisa ser exatamente o mesmo nome. 
## self-closing-tag
Quando você cria o componente é comum fazer com self-closign, pois você não vai passar os elementos dentro deles. E sim vai apenas chama-lo. 
## nomeação de variáveis e função
camelCase - a primeira letra da primeira palavra deve ser em minúscula, e as próximas primeiras letras de cada palavra devem ser em maiúsculas. 
## Chamar imagens no React
Não se passa no src entre aspas com o caminho da imagem. Você importa e depois coloca entre chaves o nome que se deu para a imagem.
![[Pasted image 20250210205331.png]]
O caminho vem depois do from que está após o logoSpotify. 
## className
Ao invés de class no HTML, tem o className pois o class já é um palavra reservada no JS.
![[Pasted image 20250210211802.png]]

## Tag-vazia que se chama fragmento
Serve para agrupar em um elemento, permitindo o retorno do react em um único elemento. Veja ela aqui:
```jsx
<>
</>
```
# CSS
## Importância do reset - css
Defina para todos os elementos no CSS, a remoção do espaçamento e a inclusão do border na altura/largura. 
Para selecionar todos use o seletor: `*`.
## Box-model
Veja: [[Modelo de caixas ou box-model|Box Model]]
## Box-sizing
- Content-box: o tamanho do elemento(conteúdo) é o tamanho do width.
- Border-box: o tamanho do conteúdo é o width menos o padding menos o tamanho da borda. 
## inherit como valor
Herda do elemento pai, que tem um valor para isso, você pode usar o inherit, que pega o valor herdado, sem necessidade de repetir. 
```css
color:inherit;
```
## Problema com o align-items:stretch
O align-items:stetch, que é o padrão, ele estica de canto a canto o elemento. Ou seja ocupa todo o espaço. 
## Nomeação de classes em CSS
Metodologia BEM. 
- Blocks: bloco
- Elements(elemento de bloco): bloco__elemento.
- Modifiers: bloco__elemento--modificador. 
Nomes compostos são separador por -.
![[Pasted image 20250210213025.png]]
## Instalar font-awesome
![[Pasted image 20250210215337.png]]
![[Pasted image 20250210220047.png]]

## Margin e padding com três valores
Cima depois os dois lados, e depois em baixo.
## flex propriedade
Ao inserir 1, o elemento vai ocupar o maior tamanho possível. 
# json
Javascript object notation.
# Função estruturas diferentes
```js
const app = () => {}
```
Quando você quer retorna um arrowFunction apenas. Você pode executar o seguinte comando:
```js
const app = () => retorno
```
```js
function app() {

}
```
# Atalhos VS code
- shift + alt + seta para cima - copia para cima.
- alt + seta para cima - leva para cima.
- Ctrl + ; - comenta, cria um comentário. 
# Lembre-se
![[Pasted image 20250210212617.png]]