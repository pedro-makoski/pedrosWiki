Node version manager.
Ajuda a trabalhar com versões do node.
nvm ls : lista as versões disponíveis.
# Versões LTS
Versões com suporte para patchs de segurança de longo prazo. Elas normalmente tem um códinome.
# Como instalar uma versão no NVM
```
nvm install <versao>
```
Exemplo:
````
nvm install lts/hydrogen
````
# Alias default
Define uma versão padrão para o terminal. Exemplo
```bash
nvm alias default lts/hydrogen
```
# .nvmrc
`rc` significa run comands, ou seja comandos para inicialização.
O .nvmrc possui o nome da versão do node, e deve ter uma linha vázia no final.