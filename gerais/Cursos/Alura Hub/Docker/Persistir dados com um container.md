# Estrutura de um container
- Filesystem 
	- Possui uma docker area
- container
- memory
Entre o container e o docker area, é criado volumes. 
Entre o container e o file system(do host), chamado de bind mount. Usado principalmente em ambiente local, para fazer principalmente hot-reload. E que tem sincronização direta com arquivos locais.
Entre o container e a memory é criado tmpfs mount. Que é basicamente um cache do container.
# Criando um Amount Bind
```bash
docker run -it --mount type=bind,source=/home/makos/alura-docker/volume,targe
t=/app ubuntu bash
```
- --mount indica que vai ser do tipo mount
- type=bind, indica que vai ser bind-mount
- source=indica o local que vai ser salvos os valores do container
- target= indica daonde do container vai pegar e colocar no source.
Os arquivos no bind mount não são geridos pelo docker.

# Gerenciando volumes
```bash
docker volume ls
```
Lista os volumes já criados.
```bash
docker volume create nome-volume
```
Usando o container criado:
```bash
 docker run -it --mount source=novo-volume,target=/app ubuntu bash
```
```bash
docker volume inspect novo-volume
```
O comando acima mostra as informações do volume.
# Vantagens dos volumes
Na aula destacamos que os volumes são o mecanismo de persistência de dados recomendado pela documentação oficial do Docker. Enquanto os bind mounts dependem da estrutura de diretórios e do sistema operacional do host, os volumes são totalmente gerenciados pelo Docker.

Dentre as principais vantagens que os volumes apresentam em relação aos bind mounts, podemos destacar:

- Facilidade de backup e migração.
- As ações de gerenciamento deles podem utilizar comandos da CLI do Docker.
- Compartilhamento seguro entre vários containers.
- Drivers de volume permitem armazenar volumes em hosts remotos ou provedores de nuvem, criptografar o conteúdo dos volumes ou adicionar outras funcionalidades.
- Novos volumes podem ter seu conteúdo previamente preenchido por um container.
- Não aumentam o tamanho dos containers que o utilizam.
- Existência dissociada do ciclo de vida de um container específico.

Caso o container gere dados de estado não-persistente (informações temporárias que não precisam ser armazenadas por longo tempo), é recomendável a utilização de um ponto de montagem tmpfs para evitar armazenar tais dados de forma permanente e obter um melhor desempenho do container.