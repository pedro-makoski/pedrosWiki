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
# Obter pesquisa
Use a query param name_like. Assim:
```
 http://localhost:3000/artists?name_like=searchTerm
```
Onde search term é o elemento que você está procurando. E a URL é especifica do especificado anteriormente
O problema é que as versões mais recentes do JSON server não tem a opção like, então é necessário
```bash
npm uninstall -g json-server
```
Desinstalar e depois instalar uma versão mais recente:
```bash
npm i -g json-server@0.17.4
```

