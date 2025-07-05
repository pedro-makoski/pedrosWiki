# Fazendo o deploy - tornando disponível através de um link o container
## Instale o CLI do gcloud para poder subir o docker.
Veja como aqui: https://cloud.google.com/sdk/docs/install#rpm 
## Configure o gcloud
gcloud auth login - aparecerá uma janela para realizar o login.
## Altere o projeto do gcloud
gcloud config set project ID_DO_PROJETO
Para ver o ID encontre na tabela de projetos do GCP.
## Subindo o projeto
gcloud run deploy --port=8000
Isso sobe para o Cloud Run que é menos custoso que ter uma maquina virtual pois ela só é ativada quando está em uso. Após isso configure
1. Verifique se o caminho esteja correto, caso esteja clique em enter e continue.
2. Dê um nome ao serviço.
3. Clique sim, para iniciar o servidor.
4. Escolha a região a partir do número ao seu lado. Escolhe a mais próxima do seu cliente e a mais barata.
5. Escreva sim.
6. Faça o mesmo que o 5 novamente.

O link será posto aqui:
Service [api] revision [api-00001-xz8] has been deployed and is serving 100 percent of traffic.
Service URL: ROTA
Agora você pode usar essa rota para sua API.
# Artifact registry
Biblioteca onde você vai encontrar seus containers/imagens.
# Clod run
Onde é o rodado o serviço.