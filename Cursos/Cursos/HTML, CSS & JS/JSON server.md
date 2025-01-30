Existe uma biblioteca node, que a partir de um JSON sobe o banco de dados, e ainda te dá algumas funções. 
# Instalação
Para instalar execute o comando:
```bash
npm install json-server -g
```
O -g serve para instalar globalmente.
# Rodar
```bash
json-server --watch spotify-html/src/jsons/artists.json --port 3000
```
O --watch é para verificar se há alterações. Depois se passa o caminho onde está o JSON e depois se passa a porta aonde vai estar o server. 
