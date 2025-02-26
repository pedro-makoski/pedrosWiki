Permite fazer requisições HTTP. Você pode tanto instalar com npm, quanto com um a CDN, colocando num script HTML parecido com isso: 
```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
```
e você pode usar funções do axios, como:
```js
axios.get(url)
```
que retorna um objeto, com informações, incluindo o data, que possui a resposta http já convertida em objeto JS.
# Instalando pela npm
```sh
npm install axios
```
Ao fazer isso, algo importante é que quando estamos usando HTML, CSS e JS não consiguiremos importar o Axios em produção, pois ele não vai estar instalado. 
Então para resolver isso podemos usar o vite. Que permite fazer build dos projetos, compilando os arquivos sem precisar ter problema de depêndencias. 
# Vite
Então inicie o vite numa pasta separada:
```sh
npm create vite@latest
```
Depois escolha o nome do projeto, depois defina para o modo Vanilla(HTML, CSS e JS) e depois escolha JavaScript. 
Depois execute o comando:
```sh
npm i
```
Ao instalar o vite, com uma versão especifica, é possível que a versão instalada seja diferente da versão definida. Pois ao executar aquele comando lá em cima, o pacote create é que está naquela versão não o vite em si.
E agora é possível executar:
```js
import axios from "axios";
```
Que só é possível em ambientes node, e não navegador direito. 
## precaução a erro
Caso dê esse erro:
```bash
Uncaught SyntaxError: Cannot use import statement outside a module
```
Quando for adicionar o script com um import, adicione na tag script, a propriedade e valor type="module", e assim não dará o erro.
```html
<script src="script.js" type="module"></script>
```
# Algo a mais sobre desestruturação 
Quando for usar algo do tipo:
```js
const dataInfo = obj.data
``` 
Você pode usar a desestruturação e ainda colocar um outro nome para o objeto data.
```js
const {data:dataInfo} = obj 
```
Assim ele vai pegar objeto data do obj, e colocara como nome a ele dataInfo.