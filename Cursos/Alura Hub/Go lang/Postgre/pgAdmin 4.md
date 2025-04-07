Controle do admin do postgree. 
Criar novo DB - aonde está escrito Databases, como o botão direito clique em create>database.
# Crie tabelas
Usando em tool > Query tool. Cole um código semelhante a isso:
```sql
create table <nome> (
	id serial primary key,
	nome varchar,
	descricao varchar,
	preco decimal,
	quantidade integer
)
```
Deve sempre-se ter o nome, o id que é do tipo serial, ou seja auto-incremental e como primary key que é um identificador único. 
Varchar é o equivalente a string.
# Inserir valores
INSERT INTO `<nome-tabela>` (``<campos-tabela>``) VALUES (`<valores-1>`), (`<valores-2>`), (`<valores-3>`); 
Não se esqueça do ;.