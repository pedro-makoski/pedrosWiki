- É importante para padronizar o que é aceito pela equipe toda e evitar a impressão digital dos programadores
# Settings Sync
Para sincronizar as configurações em todas as instâncias do **code spaces**, clique no perfil e depois em Turn On Settings Sync.

# Configurando o EditorConfig
- O editor config é um sistema que permite a definição de regras no editor de código
- Para usar-lo no VS Code é necessário da extensão
Exemplo de código `.editorconfig`:
```
root = true

[*]
indent_style = space
indent_size = 4
```

O comando `root = true` define que não é necessário procurar arquivos superiores para a alteração do estilo. 

O comando `[*]` define que é para todos os arquivos. O indent_style define o estilo de identação e o indent_size o tamanho da indentação.

# Usando o prettier
- Formato os códigos anteriores e garante o código todo formatado
- Para baixar o prettier use `npm i prettier -D`, o -D indica que é uma dependência de desenvolvimento
- Baixe, também a extensão do **prettier** para funcionar enquanto faz o código
- Depois nas configurações, coloque o **DefaultFormatter** como Prettier, e coloque o Format on Save como átivo
- Adicione o .prettierignore para colocar arquivos que você não quer adicionar na validação do prettier.