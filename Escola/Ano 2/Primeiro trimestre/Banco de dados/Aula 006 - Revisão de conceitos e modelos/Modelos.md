# MER - modelo conceitual - modelo de entidade e relacionamento
# Descritivo
Toda entidade vira uma tabela.
Caso tenha atributos compostos eles devem ser decompostos.
Caso tenha atributos multi-valorados cria-se uma nova tabela
Quando tiver uma entidade fraca é criado uma tabela com os atributos da entidade, mais a chave primária da entidade, com a qual elas se relacionam.
Todo relacionamento N-N vira uma tabela.
Todo relacionamento 1-N cria-se uma chave primária na que possui a cardinalidade N.
Relacionamento 1-1 - deve-se escolher uma das entidades para colocar a chave primária

Exemplo:
tbProfessor(<ins>matricula</ins>, cpf, telefone, nome, codigo_escola)
	codigo_escola relaciona com tbEscola
Lembre-se de colocar os relacionamentos
# Modelo lógico
Transformar cada entidade em tabela, com seus atributos e respectivos tipos de dados:
- Inteiro
- Real
- Varchar
- Booleano
Para representar uma chave primária coloque um `*` antes, já para chave estrangeira coloque um ``#`` antes.
# Dicionário de dados
Tem como objetivo descrever as propriedades de uma tabela com as restrições de  cada atributo. 
Você deve colocar os seguintes campos:
- Nome: nome do atributo
- Descrição: descrição do atributo
- Tamanho: para varchar, é importante definir o tamanho máximo possível.
- Tipo: tipo do atributo
- Restrições: regras de restrições do atributo
- Valor nulo: indica se pode ou não ser nulo
- Chave: se é primária, estrangeira ou não é
- Valor default: valor padrão caso não seja definido 
- Unique: se o valor pode ser único
- Domínio: define quais valores será permitido cadastrar no atributo