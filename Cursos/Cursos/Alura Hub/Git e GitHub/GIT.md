# O que é GIT
Tem como função registrar as alterações e ajudar na colaboração.
# Comandos
- ``git log`` - vê as ultimas alterações.
- ``git log --inline`` faz o git log com cada mensagem em uma linha. 
- ``git init`` - diz que o projeto atual, da pasta atual vai usar o git. Ele cria uma pasta que configura o git na pasta.
- ``git add .`` adiciona a pasta atual para ele olhar as alterações. Você pode selecionar arquivos específicos. 
- `git commit -m "Nome do Commit"`: cria uma versão das alterações feitas. 
- ``git restore --source hash-que-identifica-a-versao``: altera para a versão especificada. 
# Significado das cores vs code
- Arquivos verde(U): o git não está olhando para estes arquivos da pasta.
- Arquivos verde(A): foram adicionados para que eu poça comitar, ele olha as alterações desse arquivo, mas não foi comitado. 
- Amarelo(M): foi modificado o arquivo, em relação ao commit anterior. 