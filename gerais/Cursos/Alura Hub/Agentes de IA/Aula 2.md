# Criando o RAG
## Baixar as dependências
```bash
!pip install -q --upgrade langchain_community faiss-cpu langchain-text-splitters pymupdf
```
O langchain_community ajuda a manter as conexões. O faiss-cpu gera os vetores semânticos, o langchain-text-splitters divide o texto em parte e o pymupdf trabalha com PDFs.
## Conectando com os arquivos
Carregue os arquivos, no simbolo da pasta do collab.
```python
from pathlib import Path

from langchain_community.document_loaders import PyMuPDFLoader

  

docs = []

  

for n in Path("/content/").glob("*.pdf"): # Percorre por todos os PDFs da pasta /content/

  try:

    loader = PyMuPDFLoader(str(n)) # Carrega o PDF

    docs.extend(loader.load()) # Adiciona a versão carregada do documento

    print(f"Carregado arquivo {n.name}")

  except Exception as e:

    print(f"Erro ao carregar {n}: {e}") # Informa se tem um erro ao carregar

  

print(f"Total de documentos carregados: {len(docs)}")
```
## Dividindo os dados em pedaços
```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

  

splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=30)

chunks = splitter.split_documents(docs)
```
O chunk_size indica a quantidade caracteres que ele obterá para cada chunk. Já o chunk_overlap indica a quantidade que terá do chunk anterior, para manter um contexto.
## Criando o sentence embedding
O significado semântico da frase inteira, da sentença inteira. Neste caso do chunk inteiro.
### Conecte com o modelo de embedding
```python
from langchain_google_genai import GoogleGenerativeAIEmbeddings

  

embeddings = GoogleGenerativeAIEmbeddings(

    model="models/gemini-embedding-001",

    google_api_key=GEMINI_API_KEY

)
```
### Criando os vetores a partir dos chunks
```python
from langchain_community.vectorstores import FAISS

  

vectorstore = FAISS.from_documents(chunks, embeddings) # Gera os vetores dos chunks

retriever = vectorstore.as_retriever(

    search_type="similarity_score_threshold", # Define o tipo de busca

    search_kwargs={"score_threshold": 0.3, "k": 4} # Define que ele buscara no máximo 4 items, que tenha pelo 0.3 pontos de proximidade com o original.

)
```
## Gerando respostas
### Defina o prompt
```python
from langchain_core.prompts import ChatPromptTemplate

from langchain.chains.combine_documents import create_stuff_documents_chain

  

prompt_rag = ChatPromptTemplate.from_messages([

    ("system",

    "Você é um Assistente de Políticas Internas (RH/IT) da empresa Carraro Desenvolvimento. "

    "Responda SOMENTE com base no contexto fornecido."

    "Se não houver base suficiente, responda apenas 'Não sei'.",

    ),

    ("human", "Pergunta: {pergunta}\n\nContexto:\n{context}")

])

  

document_chain = create_stuff_documents_chain(llm_triagem, prompt_rag) # Conecta o prompt com o llm
```
Perceba os elementos entre chaves, eles serão substituídos depois.
### Fazendo função de pergunta do modelo
```python
def perguntar_politica_RAG(pergunta: str) -> Dict:

  docs_relacionados = retriever.invoke(pergunta) # Faz uma busca semântica conectando o prompt com o banco de dados vetorial. 

  

  if not docs_relacionados:

    return {"answer": "Não sei", "citacoes": [], "contexto_encotrado": False}

  

  answer = document_chain.invoke({"pergunta": pergunta, "context": docs_relacionados # Coloca os parâmetro do prompt, e pede uma resposta

  

  txt = (answer or "").strip()

  

  if txt.rstrip(".!?") == "Não sei":

    return {"answer": txt, "citacoes": [], "contexto_encotrado": False}

  

  return {"answer": txt, "citacoes": formatar_citacoes(docs_relacionados, pergunta), "contexto_encotrado": True}
```