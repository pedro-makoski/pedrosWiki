Execute o comando:
```bash
npx create-react-app  nomeDoProjeto
```
O npx é o executor dos pacotes. Ao executar o comando, ele já instala o react.
O react é uma biblioteca, para usar algo mais completo, é recomendável usar o next.JS, que é um framework, baseado na biblioteca react.
Perceba-se que criou uma nova pasta, nesta pasta tem:
- Node modules: onde estão todos os códigos dos pacotes. 
- Public: onde contém os itens da página estática, ou seja lá você vai ter, por exemplo o index.html, onde vai estar o código base, que vai obter os componentes. 
- src: contém os arquivos para componentização, como, por exemplo, o app.js e o app.css, onde vai conter o elemento em que vai estar o root. 
No index.js, é chamado app da seguinte forma, e colocado no root:
```js
import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
```
E no app.js, tem o seguinte:
```js
import logo from './logo.svg';

import './App.css';//Importa e aplica o estilo css. 

  

function App() {

  return (

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>

          Edit <code>src/App.js</code> and save to reload.

        </p>

        <a

          className="App-link"

          href="https://reactjs.org"

          target="_blank"

          rel="noopener noreferrer"

        >

          Learn React

        </a>

      </header>

    </div>

  );

}

  

export default App;
```
Para rodar o programa, faça o seguinte:
```bash
npm start
```
Caso aconteça algum erro, relacionado ao web-vitals, você pode executar o comando:
```bash
npm install --save-dev web-vitals
```
Perceba que em react, o class não é usado igual no HTML, e sim é usado o className ao invés. 

E também para imagens deve ser importado o caminho, ao invés de colocar no src direto, e depois passa o nome do caminho entre chaves no elemento, ao invés de aspas. 

```js
import imagem from "../src/imgs/imagem.png"
```
E depois na imagem:
```js
<img src={imagem} />
```
E importante, em tags sem tag de fechamento, é necessário colocar um /> no final. 