Um projeto de banco de dados compreende as seguintes fases:
# Modelo conceitual 
A modelagem conceitual refere-se ao desenvolvimento de um modelo inicial da base de dados, que reflita as necessidades do usuário. Essa modelagem preocupa-se em descrever quais dados são armazenados na base de dados e quais dados se relacionam. Para fazer o modelo conceitual é necessário entender o que o usuário final espera que o sistema disponibilize(como, por exemplo, relatórios).
Para obter as informações necessárias para desenvolver a modelagem conceitual do sistema, deve-se realizar entrevistas com o usuário para entender os objetivos do sistema e as expectativas que o usuário tem em relação a ele. Um dos principais modelos desta etapa é o de **relacionamento e entidade**
- Relacionamento e entidade: como as entidades/objetos se relacionam entre si.
É necessário a entrevista para obter o que o usuário precisa de algum sistema, afim de extrair todos os dados. 
## Palavras chave
- As Necessidades do usuário
- Reflita
- O que o Usuário final espera
- O sistema que armazene 
- Esperar um sistema que disponibilize 
- Entrevista com o usuário 
# Modelagem lógica
A modelagem lógica compreende os processo de descrever como os dados serão armazenados no sistema e como irão se relacionar. Isso significa: transformar o modelo atual obtido na primeira fase, num modelo próximo da implementação. Para bancos de dados relacionais, o modelo utilizado nessa fase é o modelo relacional. Também é necessário descrever o dicionário de dados numa base de dados, nesta etapa. Antes da implementação é necessário, ainda verificar se o modelo está respeitado e em caso negativo, deve-se normalizar o poder.
## Dicionário de dados
Cada coluna recebe uma explicação(descrição), tipo e tamanho se houver. 
## ID - inteiro
Forma única de representar um registro na tabela, chave primária. 
## Diferença de char e varchar
- CHAR: ele vai sempre ocupar um tamanho fixo na memória, definido no seu tamanho
- VARCHAR: ele vai ocupar um tamanho variável a cada valor com tamanho diferente. Definindo apenas um tamanho máximo.
## Normalizar dados
- Normalização - padronizar o banco de dados, relacionando palavras chaves que relacionam a tabela atual com a pai.
- Para colocar palavras chaves repetidas é ideal colocar o id relacionado a uma tabela pai. Para se manter um padrão.