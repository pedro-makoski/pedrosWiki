Hospedador de código. Permitindo trabalho em equipe e afins. 
# O que é repositório
Lugar onde uma pasta, um arquivo com git, pode ser armazenado. Local na nuvem a qual posso subir seu código.
# Comandos
- ```git remote add origin link-do-git```: vincula o código com o servidor remoto. Sem adicionar o código.
- ``git push -u origin``: leva os commits para o GitHub. 
- ``git pull origin main``: pega as atualizações dos outros, da branch main.
- `git push origin nova_branch`
# Colaborators 
Permite com que outras pessoas trabalhem no projeto. 
Quando você coloca alguém no git, ambos podem comitar no projeto.
Para alguém que é colaborador aceitou o convite. Você pega o SSH que indentífica o repo. E o usuário pode fazer:
```sh
git clone codigo-ssh
```
Quando um colaborador faz uma atualização. O não dono, cria uma branch que coloca um código não na base atual, mas num código auxiliar. 
E você pode fazer o git push origin em outra branch, colocando depois de origin. 
# O que são pull request
Solicitações de atualização. 
# Trocar entre banches 
```sh
git checkout nome_da_outra_branch
```
E nela você pode ir criando as versões no pull request, numa branch auxiliar, e aprovar o pull request, para depois fazer o merge do pull request da branch não principal na principal. Se um arquivo é alterado duas vezes num mesmo arquivo, onde um modificou algo e outro também na mesma linha, isso que acontece é chamado de conflito.
# Palavra chave
- Git Drama