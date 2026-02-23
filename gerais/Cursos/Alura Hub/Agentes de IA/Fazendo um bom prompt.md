A engenharia de prompt como a prática de projetar e aprimorar comandos de texto para guiar a IA. Apresenta os três pilares de um prompt eficaz:
- Clareza e Estrutura: Use uma linguagem direta, sem ambiguidades. Exemplo: Em vez de "Fale sobre viagens", use "Liste os 5 melhores destinos para uma viagem em família no Brasil, focando em segurança e atividades ao ar livre."
- Contexto: Defina um papel ou cenário para a IA. Exemplo: "Atue como um chef renomado e crie uma receita de bolo de chocolate sem glúten."
- Especificidade e Detalhe: Forneça informações detalhadas para evitar respostas vagas. Exemplo: "Crie um roteiro de 3 dias para a cidade de São Paulo para um turista interessado em arte e gastronomia, incluindo os horários de funcionamento dos museus e a média de preço dos restaurantes."
# Tecnicas
Técnicas que multiplicam a eficiência e precisão dos prompts.
- Few-shot Prompting: Insere vários exemplos no prompt para orientar a IA. Exemplo: "Classifique o humor do texto: 'O dia está cinzento' → Tristeza. 'Achei a piada hilária' → Alegria. Classifique: 'Tenho uma reunião importante amanhã'."
- Chain of Thought (CoT): Aprimora o raciocínio complexo ao pedir para a IA "mostrar seu trabalho". Exemplo: "Para a seguinte questão matemática, mostre o passo a passo da resolução antes de dar a resposta final: 15 * 3 + 10/2 "
- Prompt Chaining: Quebra tarefas complexas em uma sequência de prompts menores e mais simples. Exemplo: 1. "Liste 5 tópicos para um artigo sobre produtividade." 2. "Para o tópico 'Pomodoro', crie um esboço detalhado com introdução, 3 seções principais e conclusão."
# Estrutura
A importância de solicitar saídas formatadas da IA para tornar as respostas mais úteis. A estruturação garante que o resultado possa ser facilmente integrado a outros sistemas ou lido por humanos.
- Exemplo com Tabela: "Crie uma tabela com 3 colunas (País, Capital, População) e preencha com dados para o Brasil, Argentina e Chile."
- Exemplo com JSON: "Gere um objeto JSON com uma chave 'receita' que contém um array de objetos para os ingredientes de um bolo de cenoura, com as chaves 'ingrediente' e 'quantidade'."