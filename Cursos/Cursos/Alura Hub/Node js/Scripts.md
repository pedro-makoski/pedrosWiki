Scripts estão no package.json. E eles permitem que possamos rodar comandos JS, chamando o script, e não executando todo o comando. Por exemplo:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "api-local":"json-server --watch ./backend/videos.json",
    "lint":"eslint ."
},
```
Perceba que comandos como json-server e eslint não precisam do npx no prefixo, pois já subentendido. E depois para executar você pode usar ``npm run  <nome do comando>``. Por exemplo npm run api-local e npm run lint. O lint é um nome padrão para quando for usar algo relacionado ao eslint. 