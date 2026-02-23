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

    fallback: false // Cuida de como ele vai reagir. Se for false, ele vai realizar apenas se já tiver carregado, se for true, ele vai responder com um JS e vai reponder depois, e se for 'blocking' ele vai segura até ter todo o conteúdo da requisição.

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
   validate: 60, // Tempo para ver se deve ser alterado alguma página estática específica do cache. 
  }

}
```
# Rodando props no servidor
Você pode gerar as props do lado do servidor, assim:
```js
export async function getServerSideProps(context) {

  const cookies = nookies.get(context); // Obtem os cookies a partir do contexto

  

  const SENHA_SECRETA = '123456';

  const senhaInformadaPeloUsuario = cookies.SENHA_SECRETA; // Obtem o dado específico do cokies. 

  const isAutorizado = SENHA_SECRETA === senhaInformadaPeloUsuario;

  if(!isAutorizado) {

    console.log('NÃO Autorizado!!!');

    return {

      redirect: {// Redireciona para a raiz do projeto, com o status=401 como parâmetro

        permanent: false,

        destination: '/?status=401',

      }

    };

  }

  

  console.log('Autorizado!!!');

  return {

    props: {}

  }

}
```
Você pode atualizar/criar um cookie da seguinte forma:
```js
nookies.set(null, 'SENHA_SECRETA', senha, { 

              maxAge: 30 * 24 * 60 * 60, // Define por quanto tempo vai existir esse cookies.
 
              path: '/', // Define a rota minima acessível para este cookie

            });
```
Para remover um cookies, use:
```ts
nookies.destroy(null, 'SENHA_SECRETA');
```
Sendo SENHA_SECRETA o nome do parâmetro do cookies. 
# Incremental Static Generation
Gera a partir do uso, e salvar no cache pacotes estaticos. 
# Prever o comportamento - prefetch
Em um link do next, o prefetch pode ser true ou false, quando é true, ele carrega todas estas páginas no momento que o usuário entra num site. Quando é false ele carrega quando é feito o hover no link.
# Dinamic Import
Você pode fazer importações dinâmicas no Next, que serão carregadas apenas quando forem realmente usadas.
Para fazer isso importe:
```js
import dynamic from 'next/dynamic';
```
E depois faça o dinamic import do devidos componentes no escopo principal.
```js
const YouTubeVideo = dynamic(() => import('../components/DynamicVideo'));
```
# Iniciar projeto ts
```bash
npx create-next-app@latest --typescript
```
# Como converter
Basta trocar as extensões para tsx. E depois rodar normalmente.
# Babel
Conversor de linguagens, também converte JS recente para mais compatibilidade em navegadores mais antigos.
# Componente React Tipo
```tsx
JSX.Element
```
# BFF
No Next você pode criar espécies de backends para frontend, normalmente. Como funções como essa:
```js
export default function capturadorDeRequest(req, res) {

  res.status(200).json({ name: 'Pedro Makoski' })

}
```
Isso é bom para fazer o BFF, onde você cria backends focados para o seu frontend, para disponibilizar contratos importantes com o servidor.

# Glossário do NextJS

  

- **Static**

  - Por padrão

  - Só vai usar o `next export`, em casos onde TUDO é pré-renderizado

  - `getStaticProps`: versão com menos recursos

  

- **SSG(Static Site Generation)**:

  - `getStaticProps`

    - `revalidate`: true [npm run build && npm start]

  - **Incremental Static Generation** [npm run build && npm start]

    - fallback: true || 'blocking' e o getStaticPaths vem vazio ou com somente alguns itens

  
  

- **SSR(Server Side Render)**:

  - `getServerSideProps`

  - Se tiver dentro da pasta `/api` é uma API Route e é SSR