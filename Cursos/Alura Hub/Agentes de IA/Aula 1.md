# O que é um Agente
Realiza uma atividade específica. Uma ferramenta ou várias ferramentas conectadas com um modelo de IA.
O modelo interpreta. 
# Iniciando ambiente
Usaremos o Google Colab. Para iniciar execute: `http://colab.new/`.
Instale colocando o seguinte comando numa célula:
```bash
!pip install -q --upgrade langchain langchain-google-genai google-generativeai
```
# Conectando google AI no collab
Entre no AI Studio, clique em Get API Key, selecione seu projeto e gere. Copie e salve a chave de API.
Cole a API nos secrets(símbolo da chave), e clique em adicionar segredo.
Rode em outra célula:
```python
from google.colab import userdata

from langchain_google_genai import ChatGoogleGenerativeAI

  

GEMINI_API_KEY = userdata.get('GEMINI_API_KEY')
```
Considerando que o nome da chave é GEMINI_API_KEY.
Crie uma instancia em outra célula, para conectar com o modelo de IA:
```python
llm = ChatGoogleGenerativeAI(

    model="gemini-2.5-flash",

    temperature=0,

    api_key=GEMINI_API_KEY,

)
```
## Fazendo o chat responder algo
```python
resp_text = llm.invoke("Quem é Pedro Makoski")
```
O resp_text contém um objeto, com um dos seus campos, o content que possui a resposta da pergunta.
# Criando um sistema mais avançado
## Criar o prompt
Criaremos primeiramente um prompt de instrução para o modelo. Não o prompt do usuário, mas o prompt de instrução para o modelo.
```python
TRIAGEM_PROMPT = (

    "Você é um triador de Service Desk para políticas internas da empresa Carraro Desenvolvimento. "

    "Dada a mensagem do usuário, retorne SOMENTE um JSON com:\n"

    "{\n"

    '  "decisao": "AUTO_RESOLVER" | "PEDIR_INFO" | "ABRIR_CHAMADO",\n'

    '  "urgencia": "BAIXA" | "MEDIA" | "ALTA",\n'

    '  "campos_faltantes": ["..."]\n'

    "}\n"

    "Regras:\n"

    '- **AUTO_RESOLVER**: Perguntas claras sobre regras ou procedimentos descritos nas políticas (Ex: "Posso reembolsar a internet do meu home office?", "Como funciona a política de alimentação em viagens?").\n'

    '- **PEDIR_INFO**: Mensagens vagas ou que faltam informações para identificar o tema ou contexto (Ex: "Preciso de ajuda com uma política", "Tenho uma dúvida geral").\n'

    '- **ABRIR_CHAMADO**: Pedidos de exceção, liberação, aprovação ou acesso especial, ou quando o usuário explicitamente pede para abrir um chamado (Ex: "Quero exceção para trabalhar 5 dias remoto.", "Solicito liberação para anexos externos.", "Por favor, abra um chamado para o RH.").'

    "Analise a mensagem e decida a ação mais apropriada."

)
```
## Criar o modelo de resposta
```python
from pydantic import BaseModel, Field # O BaseModel cria um modelo base para o sistema, já o field é de campo. 

from typing import Literal, List, Dict

  

class TriagemOut(BaseModel):

  decisao: Literal["AUTO_RESOLVER", "PEDIR_INFO", "ABRIR_CHAMADO"]

  urgencia: Literal["BAIXA", "MEDIA", "ALTA"]

  campos_faltantes: List[str] = Field(default_factory=list)
```
## Conectando LLM
```python
llm_triagem = ChatGoogleGenerativeAI(

    model="gemini-2.5-flash",

    temperature=0,

    api_key=GEMINI_API_KEY,

)
```
## Criando função, para responder pergunta
```python
from langchain_core.messages import SystemMessage, HumanMessage# O SystemMessage é o sistema de prompt, já o HumanMessage é o prompt do usuário.

  

triagem_chain = llm_triagem.with_structured_output(TriagemOut) # Relaciona o output de saída com o modelo da classe.

  

def triagem(menssagem: str) -> Dict:

  saida: TriagemOut = triagem_chain.invoke([# Faz um chamado para a LLM com o prompt do usuário e o prompt do sistema.

      SystemMessage(content=TRIAGEM_PROMPT),

      HumanMessage(content=menssagem)

  ])

  

  return saida.model_dump()# Transforma em um dicionario do dado.
```
# Projeto final
![[Pasted image 20250909181134.png]]

# O que é uma temperatura de um modelo
Quanto menor a temperatura, o modelo é menos criativo, mais correto. Quanto maior a temperatura, mais criativo ele é.
# O que é RAG
Retrieval Augmented Generation. Ele gera a partir de um conhecimento, a partir de um banco de dados.