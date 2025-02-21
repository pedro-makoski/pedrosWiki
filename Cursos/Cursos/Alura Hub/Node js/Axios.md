Permite fazer requisições HTTP. Você pode tanto instalar com npm, quanto com um a CDN, colocando num script HTML parecido com isso: 
```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
```
e você pode usar funções do axios, como:
```js
axios.get(url)
```
que retorna um objeto, com informações, incluindo o data, que possui a resposta http já convertida em objeto JS.