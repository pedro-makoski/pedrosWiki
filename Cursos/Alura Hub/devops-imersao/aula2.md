# Docker compose
Um YAML que busca criar automatizações no processo. Ele crias os containers.
A identação deve ser de dois espaços.
Ajuda na criação de múltiplos containers.
O arquivo é escrito assim: `docker-compose.yml`.
## Comado app:, nele contem todas as propriedades do docker.
### version: 'numero-versao'
Define o número da versão que você está usando não é mais obrigatório.
### build: .
Faz o build a partir do dockerfile do local especificado. Neste caso na pasta atual espera-se que ela tenha o Dockerfile.
### container_name: <nome-do-container>
Define o nome do container.
### volumes: 
Define quais pastas podem ser atualizadas, sem precisar reiniciar o container novamente.
```yml
volumes:
      - .:/app
```
## Subir dockercompose
Para subir você pode executar:
```bash
docker compose up
```
E caso você queira que quando sem aparecer os logs no cmd atual. 
```bash
docker compose up -b
```

## jobs:
Vários trabalhos configurados ao mesmo tempo.

# Github actions
Permite criar instruções para o github fazer automaticamente no git.
