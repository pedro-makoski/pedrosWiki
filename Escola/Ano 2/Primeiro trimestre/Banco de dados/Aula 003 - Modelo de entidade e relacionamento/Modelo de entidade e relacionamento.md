É um modelo conceitual e deve estar mais próximo da visão que o usuário tem os dados. Não se preocupando em representar como este dados estarão armazenados. 
Este modelo tem por objetivo descrever quais dados devem ser armazenados pela aplicação e quais dados se relacionam. 
Exemplo: suponha que uma escola precisa armazenar informações sobre seus alunos, professores e disciplinas. O modelo de base de dados deve informar quais dados sobre os alunos, professores e disciplinas são importantes para serem armazenados. Assim sobre os alunos pode-se armazenar informações como: nome, data de nascimento e matricula. Sobre os professores pode armazenar informações como nome, telefone e matricula. A respeito das disciplinas pode-se armazenar como código da disciplina, nome da disciplina, além dessas informações é necessário saber qual é o professor responsável por qual disciplina e qual aluno faz a disciplina. 
![[WhatsApp Image 2025-05-17 at 13.56.49 1.jpeg]]
Essa coordenada indica (a cada desse, possui o valor conectado)
# O que é entidade
Uma entidade representa um conjunto de objetos do mesmo tipo do mundo real e sobre os quais se pretende armazenar dados, por exemplo, ao desenvolver um sistema de informações para uma escola, as possíveis entidades desse sistema serão para professores, alunos, disciplinas, turmas e cursos.
Uma entidade é representada graficamente por um retângulo, como nome da entidade dentro do retângulo.
# O que são Atributos?
Além de uma entidade representar objetos do mundo real, ela também deve possuir um conjunto de propriedades que a caracterize e a descreva. Bem como aos seus objetos. A esse conjunto de propriedades da se o nome de atributos. 
Os tipos desses atributos pode depender do SGBD que o desenvolvedor está utilizando, de forma geral todos os SGBD disponibilizam, tipos de dados como: inteiro, caractere, real(ou float), data, hora e conjunto de caracteres.
Também pode se definir o tamanho de um atributo, por exemplo o tamanho de um varchar de nome. 
## Tipos de atributos
Podem ser divididos em 6 categorias.
- **Atributo simples:** é o atributo indivisível que não pode ser decomposto. Exemplo "CPF", "Número de matricula"
- **Atributo Composto:** O atributo que pode ser decomposto em outros atributos simples, por exemplo o atributo "endereço" que pode ser decomposto em "Nome da Rua", "Número" e "Complemento".
- **Atributo Monovalorado**: é o atributo que permite apenas o armazenamento de um valor, por vez, por exemplo, o atributo "CPF".
- **Atributo Multivalorado(Não recomendado)**: É o atributo que permite o armazenar mais de um valor ao mesmo tempo no mesmo campo. Por exemplo, o atributo email que pode ter vários emails que a pessoa pode possuir.
- **Atributo Nulo**: é o atributo que permite que seja inserido como valor nulo.
- **Atributo derivado**: é o atributo que o valor é derivado de outro atributo.
	- Por exemplo: valor da compra, valor da parcela será calculado a partir da quantidade de parcelas. 
![[WhatsApp Image 2025-05-17 at 14.17.30.jpeg]]
O atributo chave é a chave primária.
# Chave primária
Um conceito importante para no modelo de entidade e relacionamento. É o conceito de chave primária(ou primary key ou pk). Uma chave primária é um atributo que identifica apenas um objeto dessa entidade. Portanto o valor de uma chave primária não poderá se repetir e também não poderá ser nulo. 
## Tipos de chave primária
Uma chave primária pode ser simples ou composta, uma chave primária simples é aquela que será formada apenas por um atributo e uma chave primária composta que é formada por dois ou mais atributos. 
# Entidade fraca
É uma entidade que não possui chave primária, por si só. Isso significa que não é possível definir entidade simples nem fraca para a entidade. 