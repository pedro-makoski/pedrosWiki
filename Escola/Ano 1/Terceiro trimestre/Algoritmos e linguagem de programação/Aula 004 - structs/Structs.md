Estruturas são uma forma para criar uma estrutura a partir de uma entidade, uma variável que pode receber vários dados, com várias propriedades. Para criar uma estrutura você pode fazer assim:
```c
struct nomeDaEstrutura {
	propriedade1 int;// nome da propriedade seguido pelo tipo
	propriedade2 float;
	propriedade3 char[40];
	propriedade4 char;
	propriedade6 int[5];
	propriedade7 float[7][5];
}
```
Então você instanciar uma estrutura por exemplo, eu criei a seguinte estrutura:
```c
struct user {
	name char[40];
	id int; 
}

struct user user1;//cria um user chamado user1. 
void main() {
	gets(user1.name);//Espero do teclado o valor de user1 
	user1.id = 0; //insiro o id como 0; 
}
```
Eu posso fazer isso com vetores também:
```c
struct user {
	name char[40];
	id int; 
}

struct user users[3];//cria um user chamado user1. 
void main() {
	gets(users[0].name);//esperar do teclado o nome do primeiro usuário 
	user1.id = 0; //insiro o id como 0 do primeiro usuario
	//voce pode fazer isso com um loop também.  
}
```
Depois você pode usar essa ideia para por exemplo criar um banco de dados e usar [[Manipulação de arquivos]] para registrar com um ``fprintf(in, "%02d, "%s"", user[0].id, user[0].name)``.
