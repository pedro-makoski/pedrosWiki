Ajuda a seguir boas práticas no código, quando você as esquece. 
# Instalação 
```sh
npm install --save-dev --save-exact prettier
```
Esse processo de instalação, tem dois comandos interessantes de notar. O primeiro é o save-dev, que salva apenas no estágio de desenvolvimento. E o save-exact, que para quem instalar o projeto instale exatamente a mesma versão.
# Extensão do VS code 
Uma forma de facilitar o processo é usar a extensão do VS code. Instale o prettier. E depois siga os passos:
- ctrl+shift+p
- >Open settings json 
- E depois pegue na página da extensão a primeira linha na parte do default formatter, começando assim: "editor.defaultFormatter".
- E coloque essa linha com chave e valor nas configurações do VS code, pode colocar no final do arquivo.
## Formatar documento
Com o botão direito, clique em formatar documento, ou shift+alt+f, isso formatará o documento segundo os padrões. Você pode fazer com que o documento sempre mude quando você salve colocando mais uma linha naquelas configurações:
```json
"editor.formatOnSave": true
```
# Help no node
sempre quando tiver em duvida, use o`` npm <comando> --help`` ou `` npm <comando> -h``. 
Primeiro, ele dá uma descrição rápida do que o comando faz: “Instala um pacote”. Ele também dá a sintaxe de uso e as opções que você pode adicionar ao comando.

Note que ele também informa os “**aliases”** do comando, que são os **atalhos** ou **apelidos**. No caso desse comando, em vez de usar `npm install`, você também pode escrever `npm i`, `npm add`, etc.

O comando `npm help <comando>` irá abrir uma página no navegador com a documentação completa do comando, o que também pode ser mais prático do que buscar pela página manualmente, além de ser disponível offline.