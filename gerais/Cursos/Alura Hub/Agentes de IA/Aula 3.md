# Criando grafos para guiar o agente
## Instale o langgraph
```bash
!pip install -q --upgrade langgraph
```
## Montando esquema
![[Pasted image 20250913110854.png]]
## Criando o estado passado entre os nós
```python
from typing import TypedDict, Optional

  

class AgentState(TypedDict, total = False):

  mensagem: str

  triagem: dict

  resposta: Optional[str]

  citacoes: List[dict]

  rag_sucesso: bool

  acao_final: str
```
## Criando os nós
```python
def node_triagem(state: AgentState) -> AgentState:

  print("Executando nó triagem...")

  return {"triagem": triagem(state["mensagem"])}
  
def node_auto_resolver(state: AgentState) -> AgentState:

  print("Executando nó auto resolver...")

  resposta_rag = perguntar_politica_RAG(state["mensagem"])

  

  update: AgentState = {

      "resposta": resposta_rag["resposta"],

      "citacoes": resposta_rag.get("citacoes", []),

      "rag_sucesso": resposta_rag["contexto_encontrado"]

  }

  

  if resposta_rag["contexto_encontrado"]:

    update["acao_final"] = "AUTO_RESOLVER"

  

  return update
  
def node_pedir_info(state: AgentState) -> AgentState:

  print("Executando nó de pedir info...")

  faltantes = state["triagem"].get("campos_faltantes", [])

  detalhe = ",".join(faltantes) if faltantes else "Tema e contexto específico"

  return {

      "resposta": f"Para avançar, preciso que detalhe: {detalhe}",

      "citacoes": [],

      "acao_final": "PEDIR_INFO"

  }

def node_abrir_chamado(state: AgentState) -> AgentState:

  print("Executando nó de abrir chamado...")

  triagem = state["triagem"]

  

  return {

      "resposta": f"Abrindo chamado com urgência {triagem['urgencia']}. Descrição: {state['mensagem']}",

      "citacoes": [],

      "acao_final": "ABRIR_CHAMADO"

  }
```
## Criando arestas
Que passam de um lugar pro outro. Neste caso esse aresta em baixo envia para qual agente passar de triagem:
```python
KEYWORDS_ABRIR_TICKET = ["aprovação", "exceção", "liberação", "abrir ticket", "abrir chamado", "acesso especial"]

  

def decidir_pos_triagem(state: AgentState) -> str:

  print("Decidindo apóos a triagem...")

  decisao = state["triagem"]["decisao"]

  

  if decisao == "AUTO_RESOLVER":

    return "auto_resolver"

  elif decisao == "PEDIR_INFO":

    return "pedir_info"

  elif decisao == "ABRIR_CHAMADO":

    return "abrir_chamado"

  
  

  raise ValueError(f"Decisão inválida: {decisao}")
```
E este de baixo, indica qual é a decisão após o auto_resolver.
```python
def decidir_pos_auto_resolver(state: AgentState) -> str:

  print("Decidindo pós auto resolver...")

  

  if state.get("rag_sucesso"):

    print("RAG Com sucesso, finalizando o fluxo")

    return "ok"

  

  state_da_pergunta = (state["mensagem"] or "").lower()

  

  if any(k in state_da_pergunta for k in KEYWORDS_ABRIR_TICKET):

    print("Chamado aberto, mesmo com o RAG falhado")

    return "abrir_chamado"

  

  print("RAG falhou, indo pedir mais informações")

  return "pedir_info"
```
## Conectando os nós e compilando-os
```python
from langgraph.graph import StateGraph, START, END

  

workflow = StateGraph(AgentState) # Inicializa a partir do estado passado dos agentes.

  

workflow.add_node("triagem", node_triagem) # Adiciona o nó triagem que tem a função node_triagem

workflow.add_node("auto_resolver", node_auto_resolver)

workflow.add_node("pedir_info", node_pedir_info)

workflow.add_node("abrir_chamado", node_abrir_chamado)

  

workflow.add_edge(START, "triagem") # Adiciona conexão entre o nó START e o nó triagem

# Adiciona nós condicionais. Onde começa no nó triagem, e o próximo é decidido pela função do segundo parâmetro. E o terceiro parâmetro é um dicionário onde a chave indica o resultado da função, e o valor indica que nó será levado o agente para quando a sua key for usada.
workflow.add_conditional_edges("triagem", decidir_pos_triagem, { 

 "auto_resolver": "auto_resolver",

 "pedir_info": "pedir_info",

 "abrir_chamado": "abrir_chamado"

})

  

workflow.add_conditional_edges("auto_resolver", decidir_pos_auto_resolver, {

    "pedir_info": "pedir_info",

    "abrir_chamado": "abrir_chamado",

    "ok": END

})

  

workflow.add_edge("pedir_info", END)

workflow.add_edge("abrir_chamado", END)

  

app = workflow.compile() # Compila o workflow
```
## Gerando uma imagem do agente
```python
from IPython.display import display, Image

  

graph_bytes = app.get_graph().draw_mermaid_png()

  

display(Image(graph_bytes))
```
## Testando agente
```python
testes_3 = [

    "Posso rembolsar a internet",

    "Posso ter mais cinco dias de trabalho remoto",

    "É possível reembolsar certificações do Google Cloud",

    "Posso obter o Google Gemini de graça",

    "Qual é a palavra chave de hoje?",

    "Quantas Capivaras tem em Colombo, PR, Brasil"

]

for teste in testes_3:

  print("-"*100)

  resposta_final = app.invoke({"mensagem": teste})

  triagem_result = resposta_final.get("triagem", {}) # Renamed the variable here

  print(f"Decisão: {triagem_result.get('decisao')}")

  print(f"Urgencia: {triagem_result.get('urgencia')}")

  print(f"Ação Final: {resposta_final.get('acao_final')}") # Accessing acao_final from resposta_final

  print(f"\nPergunta: {teste}\nResposta:\n{resposta_final['resposta']}") # Accessing answer from resposta_final

  

  if resposta_final.get("citacoes"):

    print("Citações")

    for c in resposta_final.get("citacoes", []):

      print(f" - Documento: {c['documento']}, Página: {c['pagina']}")

      print(f"   Trecho: {c['trecho']}")

  print("-"*100)
```