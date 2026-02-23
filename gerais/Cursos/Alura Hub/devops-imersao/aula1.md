# Containers do Docker
Empacotar seu código + as dependências dele afim de subir para um sistema de núvem.

# O que é Docker
Trabalha com containers. Com os container é mais barato do que um servidor. 
Dentro do container posssui o minimo do minimo para que a aplicação aconteça.

# Maquina virtual x container
Na maquina virtual tem muitas coisas e aplicátivos que podem ser supérfulos. Porém no container ele serve a um objetivo, e pode ser desintegrado e integrado e manter os mesmos conceitos.

# docker-file
Arquivo de definição do que vai ser rodado quando instalar o docker. O nome deve ser exatamente: `Dockerfile`. Define como que a imagem deve ser construída.

## Importar do docker hub
``FROM <nome-do-pacote, ex: python>:<versão, exemplo: 3.13.5-alpine3.22>``
## O que é WORKDIR /app
Informa que você vai trabalha na pasta app. 
## O que faça o comando RUN
Executa comando no terminal.
## O que é o comando copy
Copia uma pasta do local atual para o local da imagem. Normalmente isso é feito em `.`.
## O que o o comando CMD faz
Executa um comando no terminal a partir de uma lista.

# Docker HUB 
Vários containers já feitos.

# Gerar imagem a partir de dockerfile
Execute
```
docker build -t <nome-da-imagem> .
```

# Rodar docker
``docker run -p 8000:8000 <nome-da-imagem>``
São dois 8000 pois um é da imagem e outro é da porta do computador geral.

# docker images
Lista todas as imagens do docker.