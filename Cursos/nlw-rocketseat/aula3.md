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