# Inserção 
```SQL
INSERT INTO aluno(nome, endereco, numero, complemento) VALUES ("Pedro Makoski", "Rua da Pedreira, Colombo, Paraná, Brasil", 49, "Casa 51")
```
# Deleção
```SQL
DELETE FROM aluno where id=1
```
Não se esqueça de colocar where, se não ele deletará todos os dados.
# Atualização
```SQL
update aluno set nome="Pedro M", numero=50 where id=1
```
Não se esqueça de colocar where, se não ele atualizará todos os dados.
# Consulta na tabela
```SQL
select * from aluno
```
