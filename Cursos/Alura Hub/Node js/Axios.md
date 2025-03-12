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
## Build e preview para ver o build rodando
```sh
npm run build
```
Isso roda o build do programa, ou seja constroi os arquivos, e compacta eles o máximo possível aumentando a performace, além disso agora também é possível executar os arquivos sem node.
Mas você pode ainda usar o node executar o dist, que foi criado no build, assim:
```sh
npm run preview
```
### Criando script que faz o build e já joga pro preview a casa alteração
Para fazer isso adicione o seguinte script:
```json
"build-preview": "vite build --watch",
```
E assim ele atualizará a cada nova mudança. 
## Variável de ambiente do vite
É disponibilizado algumas variáveis de ambientes no vite, uma delas é a PROD, que permite saber se nosso código está em produção ou não. Isso ajuda a fazer com que possamos usar links e URLs diferentes em diferentes meios, permitindo que não criemos nenhum erro no servidor de produção.
Essa variável retorna true, quando o projeto está em build e false para quando está em desenvolvimento. 
Use o assim:
```js
import.meta.env.PROD
```
### Melhorando processo
Você pode melhorar a repetição desse processo de forma muito simples, com o vite. Você pode criar um arquivo chamado `.env.development`, nele vai ser criado variáveis de ambiente que serão usadas apenas no processo de desenvolvimento.
Nos arquivos env, você segue essa estrutura, como exemplo:
```env
VITE_URL_VIDEOS=http://localhost:3000/videos
```
O arquivo deve ser criado na raiz do projeto.
Para esses arquivos do Vite, devemos seguir a sintaxe `VITE_VARIAVEL=valor`. Os nomes das variáveis devem ser iniciados com `VITE_`.
E da mesma forma crie outro arquivo chamado .env.production
Depois chame a variável igual chamamos antes:
```js
import.meta.env.VITE_URL_VIDEOS
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
