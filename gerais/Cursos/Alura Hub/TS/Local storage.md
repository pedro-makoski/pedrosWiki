Ao abrir o devTool e depois clicar em Aplication haverá dois itens:
- Local storage - armazena as informações para sempre.
- Session storage: armazena as informações até o usuário fechar o navegador.
Você pode obter um item da seguinte forma:
```ts
localStorage.getItem("transacoes")
```
Ele retorna a string da transações, mas como é uma string para transformar num objeto você deve usar:
```ts
JSON.parse(localStorage.getItem("transacoes")) || []
```
Isso significa que ele vai converter para um objeto, ao menos que seja null e então retorna uma lista vázia.
Porém, vamos supor que você algo do tipo data, e não uma string normal, então você pode adicionar na parte do reviewer, que vai passa para cada objeto com key e value um parâmetro:
```ts
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if(key === "data") {
       return new Date(value)
    }
    return value
}) || [];
```
Ele recebe a key e o value, e depois caso o key seja a data, nome da key que demos para a data, ele converte o objeto pro tipo date. Caso contrário ele retorna apenas o valor.