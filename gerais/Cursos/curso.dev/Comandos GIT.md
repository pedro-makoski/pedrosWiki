# Entendendo o versionamento de código - história
Com o passar do tempo, duplicar pastas com números de versões, foi percebi como algo nada escalonável. Principalmente para trabalhar em equipe.
- 1972: SCCS
- 1982: RCS
- 1986: CVS
- 2000: SVN
- 2005 - Git - criado inicialmente para vercionar o linux
## Centralizado x Distribuido
Os primeiros antes do linux eram centralizados, onde um arquivo quando falado que o desenvolvedor iria mexer, ele não poderia ser usado por mais ninguém até que ele informe como concluído. Isso era assim, para evitar o MERGE, que é a junção da edição de um arquivos que foram editado por pessoas diferentes.
# Mostrar arquivos ocultos
```bash
ls # list - lista os arquivos
ls -l # lista os arquivos em formato de coluna
ls -la # Lista TODOS os arquivos. Inclusive os ocultos que iniciam com .
```
# Entendendo o diff de "fotos do código" ou diferença
Antigamente, os versionadores salvam apenas a diferença (alterações e remoções), porém o git não faz isso pois isso demoraria muito para reconstruir um arquivo.
O git não armazena um diff, mas calcula quando precisa.
## Como o .git salva as versões
Ele coloca um identificador em cada arquivo, relacionando com seu conteúdo. Formando um blob(binary Large OBject), e então em outra versão o git cria outro blob, que pode conter apontamentos para versões antigas. 
Uma foto é um conjunto de apontamentos para alguns blobs.
# Git log
Mostra todos os logs(registros), todas as versões do código.
``--stat`` - indica para o log ser mais detalhado.

# Git status
Compara a versão de agora com o ultimo commit. 
# 3 estágios que um arquivo passa no controle de versão
- *Untracked - não é visto pelo git* 
- Modified - todos os arquivos alterados.
- Staged - quando for tirar a foto, o que tiver neste estágio vai participar.
- Commit - Tirado a foto, da versão do código.
# Gitignore
O git não consegue ver nenhum arquivo ai listado.
# git diff
Comando para ver as diferenças do arquivo atual para com o ultimo commit.
Perceba que o git nota até o \n que indica uma linha nova, ou até um fim de uma linha que não seja a ultima.
É convenção terminar o arquivo com uma linha vázia.
# git ammend
```bash
git commit --amend
```
O git ammend rescreve o commit anterior, deletando-o e colocando outros.
Os comits são imutáveis por isso cria outro commit para colocar no lugar.
# Branchs 
São linhas do tempo. Ramificações do código.
# origin/main x local/main
- origin/main -> no github
- local/main -> no computador atual
# git push
Empurra as branchs locais para a origin.
# git pull
Puxa os commits da origin para a origin.
# Problemas do push após um --amend
Quando você faz um commit --amend, o ultimo commit é apagado e fica outro no local. Porém para fazer o push vai entrar em conflito, com o da origem, pois um commit desapareceu dali. Por isso, ilegalmente você precisar usar um git push --force para forçar que o commit seja sobrescrito.
