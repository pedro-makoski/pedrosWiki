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
# useRef
Permite usar referências entre elementos, para poder utiliza-los. 
![[Pasted image 20250213211245.png]]
Pois no querySelector não funciona. 
Para acessar o elemento em si, pegue objeto current:
```js
audioPlayer.current
```
# Propriedades do audio
Você pode obter o tempo atual de um áudio, assim: 
```js
audioPlayer.current.currentTime
```
# Transformar número em um número de duas casas 
```js
numero.toString().padStart(2, "0")
```
O 2 indica a quantidade caracteres, e 0, o que ele vai colocar no espaço faltante.
# Função setInterval
Executar certa função a cada quantidade de tempo(em milesimos).
O setInterval retorna um ID, a qual você pode usar no clearInterval com o id, para parar.
```js
const idInterval = setInterval(() => {
	
}, TIME)
```
E depois limpar:
```js
clearInterval(idInterval)
```
# Hook useEffect
Cria uma função que é rodada ao ser executado o react. A função do useEffect como primeiro parâmetro retorna a função que deve ser feita, quando o elemento for destruído.
E no segundo parâmetro, tem uma lista que é uma lista que contém as variáveis que quando ela mudar ela vai executar novamente. 
# Alterar variável CSS por JS
![[Pasted image 20250213213920.png]]
O primeiro parâmetro é a variável e o segundo é o novo valor. 
# Split string
Gera uma lista a partir de um delimitador:
![[Pasted image 20250213214120.png]]
# GitHub
```sh
git init
```
Isso cria um ambiente git. 
```sh
git add
```
Adicionada os arquivos no ambiente.
```sh
git commit -m "Nome do commit"
```
Comita todas as modificações. 
# Deploy 
Em caso em uma pasta com duas pastas, uma para o back-end outra pro front-end. É necessário algumas configurações:
Você vai criar um package.json, na pasta onde está as duas pastas. Nela deve conter um scripts build e o scripts start:
```json
"scripts": {
    "build":"npm install --prefix spotify-server && npm install --prefix spotify && npm run build --prefix spotify",
    "start": "npm run start --prefix spotify-server"
}
```
O operador && serve para após um comando no terminal finalizar, executar o próximo. O --prefix, informa que ele vai executar o comando antes definido dentro de uma pasta especifica. Perceba que só é definido o run do servidor, isso pois estamos fazendo um redirecionamento no server:
```js
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../spotify/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../spotify/dist/index.html"))
})
```
Antes do app.Listen, ele serve para redirecionar quando você não está em nenhuma das rotas definida anteriormente. E ele está justamente enviado o dist, que foi criado no ``npm run build --prefix spotify`` que roda o ``vite build``. E o`` __dirname``, pega a pasta atual, para com base nela definir o caminho. Que neste caso é onde está o package.json do server. 