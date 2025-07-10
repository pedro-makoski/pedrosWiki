# Criando referência no banco a uma chave primária usando o drizzle
Use o metodo .references a partir do tipo do id, exemplo:
```ts
roomId: uuid().references(() => rooms.id),
```
# Defina para que uma chave estrangeira que usa o atual possuam tais para cada parte:
```ts
await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum()
            },
            with: {
                questions: 5//5 questions para cada um dos 20 rooms
            }
        },
    }
});
```

# Exemplo de método POST
```ts
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import z from "zod/v4"
import { db } from "../../db/connection.ts"
import { schema } from "../../db/schema/index.ts"

export const createRoomRoute: FastifyPluginCallbackZod= async (app) => {
    app.post('/rooms', {
        schema: {//Define o modo que deve ser preenchido. Só possível graças ao ZOD
            body: z.object({//Informa o modo do body, de como ele deve ser preenchido no formato JSON
                name: z.string().min(1),//Define o name deve ser uma string e ter no mínimo 1 char
                description: z.string().optional()//Define que a descrição é uma string e é opcional
            })
        }
    }, async (request, reply) => {//Obtem o request e o reply
        const { name, description } = request.body//Obtem a partir do que que foi preenchido anteriormente o name e a description
        
        const result = await db.insert(schema.rooms).values({
            name,
            description
        }).returning()// Insere na tabela em shcema.rooms os valores da name e description numa nova linha. Normalmente o db.insert não retorna a linha preenchida, por isso colocamos o .returning() para obter a linha prenchida

        const insertedRoom = result[0]

        if(!insertedRoom) {//Se houve um erro emite a falha
            throw new Error("Falha ao criar sala")
        }

        return reply.status(201).send({ roomId:  insertedRoom.id})//Faz um reply com o status 201, e envia um JSON com o novo id da sala.
    })  
}
```

# Fazendo o método POST da sala no REST CLIENT
```http
POST {{baseUrl}}/rooms
Accept: application/json
Content-Type: application/json

{
    "name": "Sala 1",
    "description": "Esta é a sala 1"
}
```
É necessário colocar o Content-type como application/json para informar que você está enviando um JSON
# Criando um GET com parâmetros e filtros do DB
```ts
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import z from "zod/v4"
import { db } from "../../db/connection.ts"
import { schema } from "../../db/schema/index.ts"
import { desc, eq } from "drizzle-orm"

export const getRoomQuestions: FastifyPluginCallbackZod= async (app) => {
    app.get('/rooms/:roomId/questions', {
        schema: {
            params: z.object({//Define o formato que deve ser os params 
                roomId: z.string()//O params deve conter um roomId do tipo string
            })
        }
    }, async (request) => {
        const { roomId } = request.params
        
        const result = await db.select({
            id: schema.questions.id,
            question: schema.questions.question,
            answer: schema.questions.answer,
            createdAt: schema.questions.createAt
        }).from(schema.questions).where(
            eq(schema.questions.roomId, roomId)//Pega todos os que seja igual o roomId do schema e o roomId atual. Esse eq é operador de igual
        ).orderBy(desc(schema.questions.createAt))//Coloca em ordem decrescente pela data
        
        return result
    })
}
```

# Usando client REST com variáveis
```http
# Variables
@baseUrl= http://localhost:3333

# Health check
GET {{baseUrl}}/health

###

# Get Rooms
# @name GetRoom//Nomeia para podermos usar depois
GET {{baseUrl}}/rooms

###

# Create Room
# @name createRoom
POST {{baseUrl}}/rooms
Accept: application/json
Content-Type: application/json

{
    "name": "Sala 1",
    "description": "Esta é a sala 1"
}

###

@roomId = {{GetRoom.response.body.$.[0].id}} # Pega o primeiro id que está na resposta

###

# Get Rooms Questions
# @name GetQuestion
GET {{baseUrl}}/rooms/{{roomId}}/questions # Pega o roomId obtido
```

# Criando uma contagem de elementos que possuem na foreign key a atual
```ts
export const getRoomsRoute: FastifyPluginCallbackZod= async (app) => {
    app.get('/rooms', async () => {
        const result = await db.select({
            id: schema.rooms.id,
            name: schema.rooms.name,
            createAt: schema.rooms.createAt,
            questionsCount: count(schema.questions.id)//Conta o schema.questions.id colocado no groupBy
        })
            .from(schema.rooms)
            .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))//Junta a partir das questões todas que tem o mesmo id
            .groupBy(schema.rooms.id, schema.rooms.name)//Agrupa pessoas com mesmo id
            .orderBy(schema.rooms.createAt)//Agrupa a ord

        return result
    })
}
```