Sempre colocar enums e tipos em arquivos diferentes. E perceba que tipos eles retornam arquivos vázios, pois eles são usados apenas em tempo de transpilação. 
E outro ponto é que para converter uma string/int e afins num tipo da enum é só colocar um as e depois o tipo que você quer, e ele será convertido.
Para tipos e enums criar no formato do PascalCase.
# Problemas ao não usar módulos
- Problema de ordem de importação dos arquivos JS no html, gerando problemas de referência por não achar nomes.
- Conflitos de variáveis com nomes iguais em arquivos diferentes. 
- Falta de demonstração de onde vem um arquivo. 
## Módulos ES6
Ao usar os módulos você necessita de apenas um arquivo centralizador. Esse arquivos centralizador pode chamar de App.ts ou main.ts
Para que funcione, você precisa informar para o navegador tratar o arquivo, como um módulo, assim:
```html
<script src="./js/main.js" type="module"></script>
```
O type module, indica que o arquivo segue o tipo módulo. 
Para importar no typescript, você pode:
```ts
import "./components/nova-transcao-component.js"
```
Veja que importamos o js, não o ts, isso pois quando for transpilado, o arquivo TS não existirá mais. 
Ao fazer isso ele trás todo o código do arquivo para rodar dentro do atual. Você pode chamar variáveis específicas do código assim:
```ts
import {funcaoDoArquivo} from "./components/nova-transcao-component.js"
```
Para que isso funcione é necessário exportar no arquivo, a função, assim:
```ts
export funcaoDoArquivo; 
```
Precisa do chaves para fazer a separação dos objetos que vem no arquivo. Se você quiser não usar as chaves você pode colocar export default, e então a variável do export default, poderá ser usada sem chaves, e poderá tomar qualquer nome. 