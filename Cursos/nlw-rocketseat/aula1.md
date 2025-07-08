# Definição do projeto
- instale TS e @type/node
- Crie o tsconfig com npx tsc --init 
- Procure o tsconfig certo a partir da versão em: https://github.com/tsconfig/bases?tab=readme-ov-file
- Adicione "noEmit": true, no tsconfig para não realizar o build
- "allowImportingTsExtensions": true, para poder entender os pacotes TS
- execute npm i fastify @fastify/cors fastify-type-provider-zod zod
# Crie um arquivo server.ts em src/
```ts

import {fastify} from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider//Informa que é um tipo para não dar erro ao converter pro JS.
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>() //Instância o type provider com o zod

app.register(fastifyCors, {
    origin: "http://localhost:5173"//Define que só esta rota possa ser aceito a API
})

app.setSerializerCompiler(serializerCompiler)//Diz que tipo de conversão será a string da API
app.setValidatorCompiler(validatorCompiler)//Cria um validador de padrão do JSON que será inputado

app.listen({process.env.PORT ? Number(process.env.PORT) : 3333}).then(() => {//O process.env obtem as chaves do .env
    console.log("Rodando servidor HTTP")//Quando começar a servir execute tal comando
})
```
Para poder rodar coloque nos scripts do package.json:
"start": "node --env-file .env --experimental-strip-types --no-warnings src/server.ts",
"dev": "node --env-file .env --experimental-strip-types --no-warnings --watch src/server.ts"
Esse #env-file serve para carregar as variáveis de ambiente do env 

# Alternativa ao usar o process.env
O zod oferece uma possibilidade para configurar .envs, informando seus devidos tipos e seus valores padrãos
```ts
import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333)//Informa que deve ser convertido para number e seu default será o número 3333
})

export const env = envSchema.parse(process.env)
```
# Exemplo:
app.get("/health", () => {
    return 'OK'
})
Essa rota realth mostrará um OK de resposta.
# Extensões de vs code obrigatórias
- biome: permite formatar o código deixando o padronizado. Baixe também: npm i @biomejs/biome -D e também incie com npx ultracite init
- rest client
- Tailwind CSS IntelliSense
# Docker com vetores 
Vamos usar a imagem https://hub.docker.com/r/pgvector/pgvector, mas o que é isso de banco de dados vetorizado?
Explicando de forma simples, o banco de dados vetorizado, é um vetor feito a partir dos significados de uma palavra. Cada elemento dentro de um vetor é chamado de embeddings, são números pequenos que indicam uma característica pelo nome. Os embeddings seria o mesmo de parâmetros da IA. Uma busca semântica é exatamente uma busca de comparação entre significados dos parâmetros.
```yml
services:
  nlw-agents-pg:
    image: pgvector/pgvector:pg17 # Chama o pgvector da versão 18
    environment:
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports:
      - "5432:5432" # Na porta 5432 do meu computador, vai redirecionar para porta 5432 do docker
    volumes:
      - ./docker/setup.sql:/docker-entrypoint-initdb.d/setup.sql # Diz que esse setupsql vai para dentro do setup.sql da imagem pgvector.
```

Execute docker compose up -d, coloque -d para ficar na parte do fundo e não ficar incomodando no terminal

No setup.sql coloque:
CREATE EXTENSION IF NOT EXISTS vector; para colocar a extensão no db.

Adicione no .env
DATABASE_URL = "postgresql://docker:docker@localhost:5432/agents" # a porta e o valor depois do ultimo / vai depender das suas configurações no YAML.
Crie uma pasta DB e coloque um arquivo chamado connection, com o seguinte conteúdo:
import postgres from 'postgres';
import { env } from '../env.ts';

export const sql = postgres(env.DATABASE_URL);

const result = await sql`SELECT 'Hello' as message`;
console.log(result);

Essas ultimas duas linhas só serve para testar tire-elas posteriormente.

# Usando o drizzle-orm para o banco de dados
Instale:
npm i drizzle-orm
npm i drizzle-kit

## Crie a tabela 
Para criar uma tabela agente cria uma pasta chamada schema, e dentrol dela podemos definir as nossas tabelas:
Num estilo semelhante a este:
```ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),//Gera o id randomicamente é único
  name: text().notNull(),
  description: text(),
  createAt: timestamp().defaultNow().notNull(),
});
```
Nesta pasta schema crie um index que chama todas estas tabelas:
```ts
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
};
```
Para funcionar corretamente na pasta de db que crie a pasta migrations(onde será salvo o banco de dados)· 
No arquivo config do db embaixo da definição da constante sql, faça:
```ts
export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
});
```
O snake_case indica que os nomes estarão no formato snake_case, você também pode colocar camelCase.
E para funcionar no root do projeto crie um arquivo drizzle.config.ts:
```ts
import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

export default defineConfig({
  dialect: 'postgresql',//Define o provedor do banco de dados
  casing: 'snake_case',//O formato das palavras snake_case/camelCase
  schema: './src/db/schema/**.ts',//Aonde está os schemas, no caso todos os arquivos TS
  out: './src/db/migrations',//Salva na pasta migrations que você criou aquela hora
  dbCredentials: {
    url: env.DATABASE_URL,//Define a url credêncial criada no env
  },
});
```

Para gerar os arquivos do db execute: npx drizzle-kit generate
Para executar coloque e forma a tabela use: npx drizzle-kit migrate
Para ver o resultado num site use: npx drizzle-kit studio

## Criando seed - Criando dados aleatoriamente
Instale: npm i drizzle-seed -D
Execute:
```ts
import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema );
await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),//Descrição em nome de usuário
                description: f.loremIpsum()//Descrução em lorem ipsum
            }
        }
    }
});

await sql.end()//Fecha o banco de dados

console.log('Foi feito o seed do database');
```
Num arquivo de seed em db
Você pode colocar um script rodando este arquivo.

# Criando rotas
Crie um arquivo da sua rota /http/routes, E faça o seguinte:
```ts
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"

export const getRoomsRoute: FastifyPluginCallbackZod= async (app) => {
    /*Sua rotas*/
    //Exemplo:
    app.get('/rooms', () => {
        return 'Hello World'
    })
}
```
Depois chame esse arquivo colocando num app.register
app.register(getRoomsRoute)]
# Exemplo de rota obtendo de um banco de dados
```ts
app.get('/rooms', async () => {
    const result = await db.select({
        id: schema.rooms.id,
        name: schema.rooms.name,
    }).from(schema.rooms).orderBy(schema.rooms.createAt)//Ele mostra apenas os campos filtrados do select, ele vai pegar do schema.rooms, e vai colocar em ordem de adição.

    return result
})
```
# Crie um arquivo para a extensão: rest client
O arquivo deve ser um client.http
Você pode definir variáveis e criar seções e executar gets:
Exemplo:
```
# Variables
@baseUrl= http://localhost:3333

# Health check
GET {{baseUrl}}/health

###

# Get Rooms
GET {{baseUrl}}/rooms
```

# Usando o tailwind
Baixe em: npm i tailwindcss @tailwindcss/vite
Deixe seu vite.config.ts assim:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

```

No index.css coloque:
```css
@import "tailwindcss";
```

# Usando o shadcn ui - componentes já estilizados
https://ui.shadcn.com/docs/installation/vite - Siga as instruções
Para funcionar corretamente coloque no HTML body com a class black.
Você pode criar componentes assim:
npx shadcn@latest add button - exemplo para adicionar button, ele criará um componente que você pode usar em qualquer lugar.
E por exemplo no botão existem várias variantes, você pode alterar em:
<Button variant="a-variante">Hello World</Button>
Você pode também definir o size.
Você também fazer botões com icones usando lucid-react:
import './App.css';
import { Wand } from 'lucide-react';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <Button size="icon">
        <Wand />
      </Button>
    </>
  );
}

export { App };
# React-router-dom
Instale usando o npm i
```ts
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/room';

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route element={<CreateRoom />} index />// Index seria de principal a root
      <Route element={<Room />} path="/room" />
    </Routes>
    </BrowserRouter>
  );
}

export { App };
//////


import { Link } from 'react-router-dom';

export function CreateRoom() {
  return (
    <div>
      <Link className="underline" to="/room">//Melhor que uma âncora para não dar problemas de carregar tudo novamente.
        Acessar sala
      </Link>
    </div>
  );
}
```

# Usando o react query - a maneira certa de usar APIs no React
npm i @tanstack/react-query
```ts
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/room';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export { App };
```
```ts
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type getRoomsApiResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const data: getRoomsApiResponse = await response.json();

      return data;
    },
  });//Data é o dado e isLoading é um booleano que diz se está ou não carregando

  return (
    <div>
      <h1>Create Room</h1>
      {isLoading && <p>Loading...</p>}//Esse operador && é o equivalente ao ?, só que sem a necessidade do else(:)
      <pre>
        {data?.map((room) => {
          return <p key={room.id}>{room.name}</p>;// Essa key é necessária para melhorias de eficiencia
        })}
      </pre>
      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}

```

# UseParams
import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
    roomId: string;
}

export function Room() {
  const params = useParams<RoomParams>()//Deve ser do tipo RoomParams. Os parâmetro vem do path da rota "/room/:roomId"

  if(!params.roomId) {
    return <Navigate to="/" replace/>//Caso o id seja nulo, ele deve redirecionar para o root. E ele não salva o local atual no histórico
  }

  return <div>Room Details</div>;
}

