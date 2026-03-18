# Vendo todas as imagens
```bash
docker image ls
```
# Estrutura de uma imagem
- Composta por um conjunto de camadas
- Para ver as camadas de uma imagem use: `docker history nome-imagem`
- Cada camada pode ser usada em outras imagens
# Estrutura de um container
- O container possui uma imagem(read-only), ele tem outra camada chamada read-and-write, que permite salvar, alterar, deletar e obter dados
# Vendo detalhes de uma imagem
```bash
docker inspect nome-imagem
```
# Criando a imagem
- Para fazer isso usa-se a criação de um Dockerfile
- Digite ``nano`` terminal para editar um arquivo
- Coloque o código do Dockerfile
- Aperte ctrl+x, clique em yes, e depois de o nome ao arquivo.