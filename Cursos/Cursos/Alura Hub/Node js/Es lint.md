É um pacote JS. Que pode ser configurado pelo npm ou node package manager. Você pode iniciar com o comando 
```sh
npm init @eslint/config@latest
```
Para ter configurado para colocar esse pacote no seu projeto. Coloque:
```js
npm init
```
Que configurará o ambiente. 
![[Pasted image 20250220174128.png]]
Configure da seguinte forma. O @latest que ele pergunta depois dessa imagem significa a ultima versão.
# O que são devDepedencies e dependencies  no package.json
Isso é basicamente as dependências do projeto. O que ele necessita para funcionar. As dev dependencies, serve para que o código de desenvolvimento apenas necessita para funcionar. 
# O que é .eslintrc.json
Um arquivo de configuração do es lint. 
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },

    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```
# Usar o eslint
Execute o comando:
```sh
npx @eslint/migrate-config .eslintrc.json
```
Para evitar erros.
E depois execute o comando:
```sh
npx eslint .
```
O ponto significa todos os arquivos js da pasta atual, mas você pode especificar entre pastas e arquivos JS. Após executar se não tiver nenhum erro retorna nada, mas tiver retorna o erro e a linha que ele está. 
# O que é npx
Ao invés de node package manager, o npx é node package execute. Que ajuda no processo de execução do código. 
