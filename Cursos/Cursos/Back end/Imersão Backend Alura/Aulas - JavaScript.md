# Node.JS
Ambiente do JavaScript fora do navegador. 
## Verificar versão
``node --version``
ou ``node -v``
Execute isso no terminal.
## Iniciar projeto
O comando: ``npm init es6 -y``
Prepara o ambiente para que possa ser reconhecido como um projeto node. 
Se você estiver usando um powersheel, que devido a medidas de segurança bloqueia esse comando mude para comand prompt.
### O que é NPM
Gerenciador de muitas coisas que auxiliam o node. Ele gerência um grande repositório. E também alguns comandos que se dá no terminal, como esse que vimos acima.
### O que é ES6
É uma versão mais moderna do Node. Dizendo que o nosso projeto será baseado nele.
### O que é -y 
Usado para não precisar dizer sim, e autorizar, ele vai direto no sim em todas.
### O que esse comando faz 
Ele gera o arquivo package.json, onde está descrito todos os detalhes do projeto, e suas dependências, as bibliotecas/frameworks que são feitas por outros desenvolvedores e podem ser usadas no nosso projeto.

Inclusive as dependências a serem instaladas, os pacotes, serão colocados no package.json, e quando for usado por outro PC isso, será feito o dowload também das dependências.
## Instalar pacote
``npm install nomedopacote`` ou ``npm i nomedopacote´´
Ao ser executado esse comando instalando por exemplo o #express, é feito a instalação de vários pacotes, de desenvolvimento que já foram programador por outras pessoas.
# Express
Para importar você pode:
`import express from 'express'` esse comando importa o objeto express(import), da pasta do node_modules> express(from).
```js
const app = express();//Inicaliza o Express. 

app.listen(3000/*Escuta as entradas de uma porta especifica, nesse caso a 3000, a qual e muito comum em banco de dados e afins*/, () => {

    console.log("Servidor Escutando..."); // ao comecar a escutar a porta 3000, realiza esta função. 
});
```

```js  
//get obtem várias função de servidor.
//rota do tipo get, fazer requisição/resposta do tipo get
app.get("/"/*Define o local em que sera ativado as funções do get*/, (req, res) => {// req é requisicao, algo foi requerido à essa rota. O res é de resposta, função para responder algo na rota.
    res.status(200).send("Boas vindas à imersão!");//Manda a rota, a mensagem "Boas vindas à imersão" Já o comando res.status(valor) é para indicar que status é o atual ou HTTP, nesse caso é o de 200, com o res.status(200) eu estou afirmando que o status é 200, que seria de ok, pode ser vários você pode ver mais códigos: https://http.cat/, e o .send, envia no status 200 que a requisição foi bem sucedida. 
 // Em resumo res.status(200), dá a resposta ao cliente que funcionou com sucesso. E o send, envia ao front isso, pelo servidor.
});
```
```js
app.use(express.json());//Faz com que todos os valores a serem obtidos pelo express, que tenham cara de JSON sejam convertidos em JSON.
```
```js
app.get("/posts", (req, res) => {

    res.status(200).json(posts); // Ao invés de enviar um texto, eu envio um JSON. Com isso é feito a conversão, como vimos acima no app.use(express.json()).

});
```
A rota obtida no localhost, é uma API que retorna uma interface, essa interface tem esse nome, pois está vendo as duas faces, no caso o do front e dos dados. 
```js
  function buscarPostsPorID(ID) {
    return posts.findIndex((post) => {
        return post.id === Number(ID);//Retorna a posição em que id do post, seja igual ao id procurado.
    });
}  

app.get("/posts/:id", (req, res) => {//Um valor apos a rota /post/ vai ser memorizado como parâmetro id.

    const index = buscarPostsPorID(req.params.id);//Procura o index, do id.  Que se encontra em req.params.id, o id, vem da rota. Já o req.param, obtem todos os parâmetros de requisição.

    res.status(200).json(posts[index]);

});
```
# MongoDB
Ferramenta de Banco de dados por meio do JSON. Existe um serviço de nuvem.
https://cloud.mongodb.com/
Precisa-se instalar no projeto também: 
```
npm install mongodb
```
Cluster - espaço >
Database - Banco de dados. >
Collection - Coleção da database.
Para conectar em um arquivo DBconfig:
```js
import { MongoClient } from "mongodb";

  

export default async function conectarAoBanco(stringConexao) {

    let mongoClient;

  

    try {

        mongoClient = new MongoClient(stringConexao);

        console.log("Conectando ao servidor");

        await mongoClient.connect();

        console.log("Conectado ao Mongo DB atlas com sucesso");

  

        return mongoClient;

    } catch(erro) {

        console.log("Falha na conexão ao banco ", erro);

        process.exit();

    }

}
```
![[Pasted image 20241120112643.png]]
Depois você pode importar:
```js
import express from 'express';

import conectarAoBanco from './src/config/dbconfig.js'; // Importa a função que vimos lá em cima, uma vez que ela tem um export.

  

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);//Obtem o cluster

  

const app = express();

app.use(express.json());

  

app.listen(3000, () => {

    console.log("Servidor Escutando...");

});

  

async function getAllPosts() {

  const db = conexao.db("imersao-insta-byte");//Obtem a database

  const colecao = db.collection("posts");//Obtem a coleção

  

  return colecao.find().toArray();//Retorna um array, dos posts.

}

  

app.get("/posts", async (req, res) => {//Precisa de assync pois de outro jeito nao funciona

    const posts = await getAllPosts();// Obtem todos os posts.

    res.status(200).json(posts); // Retorna um JSON com os Posts.

});

  

function buscarPostsPorID(ID) {

    return posts.findIndex((post) => {

        return post.id === Number(ID);

    });

}

  

app.get("/posts/:id", (req, res) => {

    const index = buscarPostsPorID(req.params.id);

    res.status(200).json(posts[index]);

});
```
Só tome cuidado, em deixar o servidor ligado, e ser identificado com um atacador, por estar chamando muitas vezes.
# Put
Já vimos o verbo post e o get. E agora veremos o verbo put, que altera algo do banco de dados. 
```js
export async function atualizarPost(id, novoPost) {

    const db = conexao.db("imersao-insta-byte");

    const colecao = db.collection("posts");

    const objectId = ObjectId.createFromHexString(id)//Obtem o id do objeto com o seu respectivo formato

  

    return colecao.updateOne({_id: new ObjectId(objectId)/*Define o id a ser alterado no banco*/}, {$set: novoPost/*Altera o valor do banco com o valor novoPost*/});

}
```
```js
export async function atualizarNovoPost(req, res) {

    const id = req.params.id;

    const urlImagem = `http://localhost:3000/uploads/${id}.png`;

    try {

        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)//Ler um buffer da imagem que foi feito o upload. 

        const descricao = await gerarDescricaoComGemini(imgBuffer);//Gera uma descrição com o buffer da imagem. Essa função está em outro arquivo. 

  

        const postAtualizado = {

            imagemUrl: urlImagem,//coloca a imagem no objeto

            descricao: descricao,//coloca a descrição no objeto.

            alt: req.body.alt//Coloca o alt, que vai ser passado como formato JSON no corpo da página.  

        }

  

        const postCriado = await atualizarPost(id, postAtualizado);

        res.status(200).json(postCriado);

    } catch(error) {

        console.error(error.message);

        res.status(500).json({

            "Erro": "Falha na requisição"

        })

    }

}
```
```js
import cors from "cors"

  

const corsOption = {

    origin: "http://localhost:8000",

    optionsSuccessStatus: 200

}
app.use(cors(corsOption))//Permite cruzamento de dados. Ou seja usar as funções get/post/put de outro lugar. 
```
```js
app.use('/uploads', express.static("uploads"));//Define a pasta uploads do segundo parâmetro, estatica, permitindo estar na rota uploads suas imagens, ou seja seus arquivos. 
```
# Atalhos visual Studio Code
Ctrl + J - abre/fecha terminal.
Ctrl + B - abre/fecha o explorer.
# Comandos terminal
Ctrl + C - derruba o servidor.
Node --watch main.js - Executa de novo sempre quando houver alguma alteração.
# Git-ignore
Arquivos que você não quer levar à internet, pelo GitHub.
![[Pasted image 20241118180951.png]]
# .env
Formato de arquivo para criar variáveis de ambiente. Tipo uma senha por exemplo, dai você pode colocar no gitignore, e então não é mais levado para nuvem esse arquivo, pelo GitHub.

Para o Node pode obter o env. Você pode colocar no package JSON na parte do dev em scripts:
![[Pasted image 20241120110933.png]]
Com esse comando ele vai sempre executar assim, quando rodar o script.
Para rodar esse comando dev. Você pode usar:
```
npm run dev
```
Para obter o código env no JS, você pode:
```js
process.env.STRING_CONEXAO
```
Nesse caso eu estou pegando a variável STRING_CONEXAO lá do .env.
# Função assincrona
Muito usado em APIs.
```js
async function test() {//Funcao que não faz tudo passo a passo. 
	await realizarFuncao(); // Continua fazendo o resto do código até este retorna algo
}
```
# Estrutura comum de API
![[Pasted image 20241120120926.png]]
# Verbos HTTP
4 principais.
![[Pasted image 20241121134407.png]]
```js
app.post("/posts", postarNovoPost); Verbo HTTP post, onde você pode adicionar algo ao banco. 
```
```js
export async function postarNovoPost(req, res) {    
	const novoPost = req.body;//Pega o body da requisição, o conteúdo. 

    try { // Comando usado para que caso de algum erro ele vai para o catch. 

        const postCriado = await criarPost(novoPost);// Chama a função criar post, para enviar o post no banco de dados. 

        res.status(200).json(postCriado); // Retorna o que foi retornado pelo post criado. 

    } catch(error) { // Se foi para cá, significa que deu algum tipo de erro. 

        console.error(error.message); // Imprime o erro na tela. 

        res.status(500).json({//Envia um JSON, com o status 500 - erro no servidor. 

            "Erro": "Falha na requisição"

        })

    }

}
```
```js
export async function criarPost(conteudo) {

    const db = conexao.db("imersao-insta-byte");// Define que está sendo usado o banco de dados imersao-insta-byte.

    const colecao = db.collection("posts");//Cria uma coleção chamada posts. 

  

    return colecao.insertOne(conteudo);//Insere um elemento ao banco, e este é o da requsição. Isso retorna o acknowlodge se for true signficia que incorporou com sucesso. E o insertedID, que é o ID do campo que foi adicionado, pois agente não tinha definido o ID.

}
```
# Multer
Vamos adicionar imagens na rota.
```js
const storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, "./uploads");

    },

    filename: function(req, file, cb) {

        cb(null, file.originalname);

    }

}) //Especificaçãos para não dar problema no windows. 

  

const upload = multer({dest:"./uploads", storage}); // Define a localização do arquivo. 

app.post("/upload", upload.single("imagem"), uploadImagem) // O upload.single("imagem"), obtem da requsição um campo que será chamado de imagem, que ficará na pasta. 
```
```js
export async function uploadImagem(req, res) {

    const novoPost = {//Define uma estrutura para quando a imagem for importada. 

        descricao: "",

        imagemUrl: req.file.originalname,//Obtem o nome do arquivo obitdo pela requisição. 

        alt: ""

    };

    try {

        const postCriado = await criarPost(novoPost);  // Chama a função vista lá em cima.

        const fotoAtualizada = `uploads/${postCriado.insertedId}.png` // Define a localização da imagem.

	  fs.renameSync(req.file.originalname, fotoAtualizada) // Atualiza aquele caminho definido objeto pela nova localização, a partir do id. 

        res.status(200).json(postCriado); 

    } catch(error) {

        console.error(error.message);

        res.status(500).json({

            "Erro": "Falha na requisição"

        })

    }

}
```
# Código para fazer deploy no Gcloud
(Para fazer upload é necessário o arquivo estar no gitHub, para fazer um gitclone). Depois na pasta você coloca um services.sh, que pode ser assim neste caso: 
```bash
gcloud services enable run.googleapis.com

gcloud services enable cloudbuild.googleapis.com

gcloud services enable artifactregistry.googleapis.com
```
Depois você roda bash services.sh, no terminal. Para preparar o ambiente, também apague o gitignore e coloque aspas duplas no valores das variáveis. E depois você esse comando gcloud.
![[Pasted image 20241123112756.png]]
Para fazer um deploy o cloud run. O --source ., fala para fazer deploy do arquivo atual. Já o --port=3000, define como porta padrão a 3000. 
