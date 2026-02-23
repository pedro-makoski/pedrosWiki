# Trabalhando com áudio na web

Como usamos ts instale primeiro: @types/dom-speech-recognition nas dependências de desenvolvimento

```ts
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSuported = !!navigator.mediaDevices 
    && typeof navigator.mediaDevices.getUserMedia === "function"
    && typeof window.MediaRecorder === "function" // Verifica se tudo que precisamos esta disponível

type RoomParams = {
    roomId: string
}

export function RecordRoomAudio() {
    const params = useParams<RoomParams>()
    
    const [ isRecording, setIsRecording ] = useState(false)
    const recorder = useRef<MediaRecorder | null>(null) // Cria um REF para o JS guardar a referência e não perder quando for recarregado a página

    function stopRecording() {
        setIsRecording(false)

        if(recorder.current && recorder.current.state !== 'inactive') {
            recorder.current.stop()//Para a gravação apenas se existir gravação e se ela não estiver inativa
        }
    }

    async function uploadAudio(audio: Blob) {
        const formData = new FormData()//Instancia o formData

        formData.append('file', audio, 'audio.webm')//Adiciona o áudio em blob ao FormData, permitindo uma qualidade e um peso melhor do que usar base64

        const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
            method: "POST",//Indica que o método é POST
            body: formData
        })

        const result = await response.json()

        console.log(result)
    }

    async function startRecording() {
        if(!isRecordingSuported) {
            alert("O seu navegador não suporta gravação")
            return 
        }
        setIsRecording(true)

        const audio = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100,
            }
        })//Configura o formato do audio, sample rate = bite rate

        recorder.current = new MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 64100
        })//Atribui ao recorder o audio, junto com o tipo de saída(webm) e também os bits por segundo

        recorder.current.ondataavailable = event => {
            if(event.data.size > 0) {
                uploadAudio(event.data)//Quando a data está avaliable, ele faz o upload do audio caso o tamanho seja maior que 0
            }
        }

        recorder.current.onstart = () => {
            console.log('Gravação Iniciada')//Quando o audio começar ele dá um log
        }

        recorder.current.onstop = () => {
            console.log("Gravação encerrada/pausada")//Quando o áudio parar ele dá um log
        }

        recorder.current.start()//Ele inicia a gravação
    }

    if (!params.roomId) {
      return <Navigate replace to="/" />
    }

    return (
        <div className="h-screen flex items-center justify-center gap-3 flex-col">
            {isRecording 
            ? <Button onClick={stopRecording}>Pausar gravação</Button>
            : <Button onClick={startRecording}>Gravar Audio</Button>}
            {isRecording ? <p>Gravando</p> : <p>Pausado</p>}
        </div>
    )
}
```

# Conectando com o gemini
```ts
import { GoogleGenAI } from '@google/genai'

import { env } from '../env.ts'

  

const gemini = new GoogleGenAI({

    apiKey: env.GEMINI_API_KEY

})

  

const model = 'gemini-2.5-flash'

  

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {

    const response = await gemini.models.generateContent({

        model,

        contents: [

            {

                text: "Transcreva o áudio para português do Brasil. Seja preciso e natural na transcrição. Mantenha a pontuação adequada e divida o texto em parágrafos quando for apropriado."

            },

            {

                inlineData: {//Dados de áudio do tipo string

                    mimeType,

                    data: audioAsBase64

                }

            }

        ]

    })

/*

const audio = await request.file()

  

        if(!audio) {

            throw new Error("Audio is required")

        }

  

        const audioBuffer = await audio.toBuffer()

        const audioAsBase64 = audioBuffer.toString("base64")//Convete no formato base64

  

        const transcription = await transcribeAudio(audioAsBase64, audio.mimetype)

*/

    if(!response.text) {//Caso deu errado ao enviar menssagem

        throw new Error("Não foi possível converter o áudio")

    }

  

    return response.text

}

  

export async function generateEmbeddings(text: string) {

    const response = await gemini.models.embedContent({//Use o modelo de embedding para gerar os vetores

        model: "text-embedding-004",

        contents: [{text}],

        config: {

            taskType: 'RETRIEVAL_DOCUMENT'

        }

    })

  

    if(!response.embeddings?.[0].values) {

        throw new Error("Não foi possível gerar os embeddings")

    }

  

    return response.embeddings[0].values

}

  

export async function generateAnswer(question: string, transcriptions: string[]) {

    const context = transcriptions.join("\n\n")

  

    const prompt = `

        Com base no texto fornecido abaixo como contexto, responda a pergunta de forma clara e precisa em português do Brasil

  

        CONTEXTO:

        ${context}

  

        PERGUNTA

        ${question}

  

        INSTRUÇÕES

        - Use apenas informações contidas no contexto enviado.

        - Se a resposta não foi encontrada no contexto, apenas responda que não foi possível encontrar a resposta

        - Seja objetivo

        - Mantenha um tom educativo e profissional

        - Cite trechos relevantes do contexto se apropriado

        - Se for citar o contexto, utilize o termo "conteúdo da aula"

  

    `.trim()

  

    const response = await gemini.models.generateContent({

        model,

        contents: [

            {

                text: prompt

            }

        ]

    })

  

    if(!response.text) {

        throw new Error("Falha ao gerar resposta pelo Gemini")

    }

  

    return response.text

}
```
# Fazendo uma query com comparação de embeddings
```ts
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"

import z from "zod/v4"

import { db } from "../../db/connection.ts"

import { schema } from "../../db/schema/index.ts"

import { generateAnswer, generateEmbeddings, transcribeAudio } from "../../services/gemini.ts"

import { and, eq, sql } from "drizzle-orm"

  

export const createQuestionRoute: FastifyPluginCallbackZod= async (app) => {

    app.post('/rooms/:roomId/questions', {

        schema: {

            params: z.object({

                roomId: z.string()

            }),

            body: z.object({

                question: z.string().min(1)

            })

        }

    }, async (request, reply) => {

        const { roomId } = request.params

        const { question } = request.body

        const embeddings = await generateEmbeddings(question)

  

        const embeddingsAsString = `[${embeddings.join(",")}]`  

        const chunks = await db

            .select({

                id: schema.audioChunks.id,

                transcription: schema.audioChunks.transcription,

                similarity: sql<number>`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector)`,// O operador <=> calcula a similaridade entre vetores embedding. É necessário o formato [1, 2, 3]::vector

            })

            .from(schema.audioChunks)

            .where(

            and(

                eq(schema.audioChunks.roomId, roomId),

                sql`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector) > 0.7`// Calcula a proximidade entre os vetores, e vê se tem mais de 70% de funcionalidade

            )

            )

            .orderBy(

            sql`${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector`

            )

            .limit(3)

        let answer: string | null = null

        if(chunks.length > 0) {

            const transcriptions = chunks.map(chunk => chunk.transcription)

  

            answer = await generateAnswer(question, transcriptions)

        }

  

        const result = await db.insert(schema.questions).values({

            roomId,

            question,

            answer

        }).returning()

  

        const insertedQuestion = result[0]

  

        if(!insertedQuestion) {

            throw new Error("Falha ao criar a questão")

        }

  

        return reply.status(201).send({ questionId:  insertedQuestion.id, answer})

    })  

}
```
# Fazendo uma falsa esperança pro usuário adicionando um status de carregando
```ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { CreateQuestionRequest } from "./types/create-question-request";

import type { CreateQuestionResponse } from "./types/create-question-response";

import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

  
  

export function useCreateQuestion(roomId: string) {

    const queryClient = useQueryClient()

  

    return useMutation({

        mutationFn: async (data: CreateQuestionRequest) => {

            const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`, {

                method: "POST",

                headers: {

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify(data)

            })

  

            const result: CreateQuestionResponse = await response.json()

  

            return result

        },

  

        onMutate({ question }) {

            const questions = queryClient.getQueryData<GetRoomQuestionsResponse>(['get-questions', roomId])

  

            const questionsArray = questions ?? []

  

            const newQuestion = {

                    id: crypto.randomUUID(),

                    question,

                    answer: null,

                    createdAt: new Date().toISOString(),

                    isGeneratingAnswer: true

                }

  

            queryClient.setQueryData<GetRoomQuestionsResponse>(['get-questions', roomId], [

                newQuestion,

                ...questionsArray

            ] )//Altera os dados da resposta do get-questions, para para uma questão falsa.

            return { newQuestion, questions }

        },

  

        onSuccess(data, _variables, context) {

            if (context?.questions) {

                queryClient.setQueryData<GetRoomQuestionsResponse>(['get-questions', roomId], questions => {

                    if(!questions || !context.newQuestion) {

                        return questions

                    }

  

                    return questions.map(question => {

                        if(question.id === context.newQuestion.id) {

                            return { ...context.newQuestion, answer: data.answer, id: data.questionId, isGeneratingAnswer: false}//Quando dá sucesso ele coloca na função criada, a resposta

                        }

  

                        return question

                    })

                } )

            }

        },

  

        onError(error, variables, context) {

            if (context?.questions) {

                queryClient.setQueryData<GetRoomQuestionsResponse>(['get-questions', roomId], context.questions )//Quando da erro ele remove a questão criada

            }

        },

    })

}
```