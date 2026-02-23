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
Desinstalar e depois instalar uma versão mais velha que tenha possibilidade:
```bash
npm i -g json-server@0.17.4
```
# Concurently
Talvez você esteja trabalhando além do JSON server, com react por exemplo. E você pode facilitar a vida das pessoas que vão rodar seu projeto adicionando no ``package.json``, algumas propriedades usando concurently, as vezes é necessário iniciar com npm init, para aparecer o `package.json`, feito isso, baixe o concurently: 
```bash
npm install --save-dev concurrently
```
E depois no package.json, no valor da key scripts, escolha opção que você deseja que rode se é no npm start, no key start ou npm build na key build, e assim vai, no valor dessa key coloque o seguinte
```bash
"concurrently \"comando1\" \"comando2\ \"comando 3\"""
```
E assim vai, com isso você faz com que os pacotes rodem sincronizadamente. 
