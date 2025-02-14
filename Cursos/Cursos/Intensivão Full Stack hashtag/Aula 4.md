![[Pasted image 20250213194019.png]]
# API
Vamos criar uma API para conectar com o banco de dados, e poder usa-la no front-end. 
significa - Aplication Programming Interface 
Serve para comunicar entre dois ou mais lugares. 
## Criando
```sh
npm init -y
```
Inicia um projeto node. 
```sh
npm i express
```
Para facilitar no nosso processo de desenvolvimento. 
## Tipos de requisição
- GET - Read
- POST - Create
- PUT - Update
- DELETE - Delete.
CRUD - Create Read Update Delete. 
## Express
No type do package.js, existe o type que pode ser ``module``, que tem os ES module. Tem outro mais antigo que é o `commom JS`.

Sempre inicia a aplicação com:
```js
const app = express()
```
Para ouvir uma API, você usa o app.listen():
```js
app.Listen(PORTA_QUE_VOCE_VAI_USAR, () => {
	//Função para fazer quando ouvir algo.
})
```
Fora do listen, você cria um endpoint(uma rota para acessar uma API), você pode fazer da seguinte forma:
### Get
```js
app.get("/", (request, response) => {
	response.send("Olá, mundo")
})
```
O primeiro parâmetro é a rota. O segundo é uma função que dois parâmetros:
- request: objeto da requisição feita pelo usuário.
- response: objeto da resposta que você vai dar.
### Deixar atualizado
![[Pasted image 20250213200042.png]]
Usando --watch.
![[Pasted image 20250213200427.png]]
# Mongo db
Em um projeto > create cluster > escolha a opção gratuita. 
Em browse collections > create database(cria dentro do cluster um db) > 
Coloque o
- Database name.
- Collection name(uma database pode ter mais de uma).
Você pode criar novos dados na collection no insert. 
Depois em network acess, e depois add ip adress e depois coloque para que qualquer um possa aceitar.
Depois voltando em clustes, clica connect > depois em drivers > depois driver > node js > 6.7 or later 
Depois instale:
```sh
npm i mongodb
```
Crie um arquivo onde vai conter a URI, troque <db_password> para sua senha, E faça assim:
![[Pasted image 20250213201941.png]]
O db pega o db spotifyAula, depois eu pego a coleção ``songs``, filtra por todos os objetos e transforma num array. 
Perceba que o songCollection retorna uma Promisse. Para esperar que ela seja respondida pelo servidor:
![[Pasted image 20250213202400.png]]
A função assincrona só funciona em funções quando a função é assincrona.
![[Pasted image 20250213202603.png]]
## Inserir valores no Mongo db
![[Pasted image 20250213203556.png]]
O insertMany insere vários valores de uma lista. 
# Deletar valor de uma Key JS
Coloca um delete e depois o elemento com a key que você quer deletar:
![[Pasted image 20250213203150.png]]
# Conectar API no front
Vamos o usar o pacote Axios no frontEnd, para conectar ao invés de front.  
```sh
npm i axios
```
Defina uma URL, padrão, neste caso localhost:3000.
Fazer o get:
```js
const responseArtists = await axios.get(URL)
```
![[Pasted image 20250213204457.png]]
Para obter apenas o dado, pegue a key data.
# Resolver problema do CORS
```sh
npm i cors
```
É um middleware(ação que é feito ao longo de um projeto, no meio do caminho). O cors permite com que seja possível você usar a API em outras portas. 
Coloque no início do projeto:
![[Pasted image 20250213205116.png]]
