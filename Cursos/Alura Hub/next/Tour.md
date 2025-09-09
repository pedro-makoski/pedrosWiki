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
# Paginas dinâmicas a partir da URL
Para receber nomes dinâmicos na URL você pode colocar entre colchetes(``[]``) o nome do parâmetro, isso direto no arquivo.
Por exemplo:
![[Pasted image 20250906174352.png]]
Dai você pode acessar usando o hook useRouter, por exemplo:
```jsx
import { useRouter } from 'next/router'

import Link from 'next/link'

  

export default function Post() {

    const router = useRouter();

    return (

        <div>

            <p>Página de post: {router.query.slug}</p>

            <Link href="/">Ir para home</Link>

        </div>

    )

}
```
Você também pode colocar um parâmetro entre colchetes em pastas, e colocar um index.js para a página direta.
# Link - navegação
Permitem fazer âncoras de forma mais simples, permitindo a SPA, que são aplicações de apenas uma página, permitindo carregar outras páginas, alterando apenas aquilo que precisa.
O Link está na biblioteca: 'next/link', ex: import Link from 'next/link'

Para usa-lo basta, usar a tag Link, com o parâmetro href: 
```jsx
import { useRouter } from 'next/router'

import Link from 'next/link'    

  

export default function Post() {

    const router = useRouter();

    return (

        <div>

            <p>Página de post: {router.query.slug}</p>

            <Link href="/">Ir para home</Link>

        </div>

    )
}
```
# Next Static Export
Gerar um conjunto estatico de arquivo HTML, CSS, JS e afins. Sem necessidade de rodar scripts específicos no lado do servidor.
# Exportando de forma estática uma página
Crie na root do projeto um arquivo chamado `next.config.js`, este arquivo deve conter algo como:
```js
const nextConfig = {
  output: 'export',
};

export default nextConfig
```
Isso indica que o build será feito de maneira estática. Portanto npm run build ou npx next build constroem um conjunto de arquivos estáticos na pasta out.
Para rodar em servidor estes arquivos rode: `npx http-server ./out -c-1`.
## Definindo rotas estáticas para páginas variáveis
Algumas páginas podem ter um problema, quando são feitas a partir de um parâmetro de função, e só a partir dele que existe. Por isso usa-se o getStaticPaths e o getStaticProps para gerar as páginas estaticas:
```js
export async function getStaticPaths() {

  const paths = dados.posts.map((postAtual) => {

    return { params: { id: `${postAtual.id}` } };//Define os parâmetros específicos desta rota.

  })

  

  return {

    paths: paths,//Retorna os caminhos possíveis a partir desta rota, desta página específica

    fallback: false // Se for false, ele faz com que bloqueie em páginas não existentes.

  };

}

  

export async function getStaticProps(context) {// Retorna as props que serão passadas ao componente a partir da rota específica.

  console.log('Contexto', context.params.id);

  const id = context.params.id;//Obtem o id dos parâmetros estaticos

  

  const post = dados.posts.find((currentPost) => {

    return currentPost.id === id

  })

  

  console.log(post);

  

  return {

    props: {

      id: post.id,

      title: post.title,

      date: post.date,

      content: post.content,

    },

  }

}
```