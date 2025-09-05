# Web Vitals
![[Pasted image 20250905180351.png]]
LCP - Toda a tela do usuário carregada corretamente.
FID - Quanto tempo demora para algo ser clicável ou interativo no seu site.
CLS - Demora para carregar popups, fazendo com que pessoas cliquem nos lugares errados.
# Iniciando
```bash
npm init -y
npm install next react react-dom
```
Adicione nos scripts do package.json os seguintes: 
```json
{
    "build": "next build",

    "dev": "next dev",

    "start": "next start",

    "lint": "next lint"
}
```
# Pasta pages
Nela contem todos as páginas que seu site terá. Algumas especiais são:
`_app.js`: é o componente que engloba toda página:
Exemplo:
```jsx
import "./app.css"

  

function MyApp({Component, pageProps}) {

    return (

        <>

            <p>Texto em todas as páginas</p>

            <Component {...pageProps}/>

        </>

    )

}

  

export default MyApp
```
`_document.jsx`: Define a estrutura HTML de renderização:
```jsx
import Document, {Html, Head, Main, NextScript} from "next/document";

  

class MyDocument extends Document {

    static async getInitialProps(ctx) {

        const initialProps = await Document.getInitialProps(ctx)

        return {...initialProps}

    }

  

    render() {

        return (

            <Html lang="pt-br">

                <Head />

                <body>

                    <Main />

                    <NextScript />

                </body>

            </Html>

        )

    }

}

  

export default MyDocument
```