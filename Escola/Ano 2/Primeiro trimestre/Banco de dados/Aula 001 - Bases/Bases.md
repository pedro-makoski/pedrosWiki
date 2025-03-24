# O que é banco de dados?
Estrutura para guardar dados, em uma estrutura avançada que permite maior controle sobre os dados. Em um banco de dados tem-se várias informações para cada entidade, cada informação possui um tipo. Por exemplo o Aluno tem o nome, data de nascimento e responsável, cada informação possui um tipo de dado, o nome é uma string(vários char), o segundo é do tipo data, e o terceiro também do tipo string. 
# Serviços de bancos de dados
- MySQL.
- Postgre. 
- SQL server da Microsoft. 
- Oracle.
- MongoDB.
Cada banco de dados em sua maioria possui dados em tabelas. MongoDB em JSON. 
# Dados x informações x conhecimento
## Dados
São tudo que podemos inferir ou coletar sobre uma situação especifica. 
## Informação 
Quando o dado pertence a um contexto, e é util a alguma coisa. 
## Conhecimento
Quando consigo comparar as informações, produzir algo que produza um ganho.
# Termos
- **Base de dados:** Uma base de dados é um local ou espaço onde informações são armazenadas e de onde são recuperadas. A base de dados possui um nome que identifica ela.
- **Sistema de banco de dados:** é uma ferramenta que será utilizada para armazenar informações. Essa ferramenta possui 3 principais características:
	- São elas:
		- Armazenar os dados.
			- Significa que a ferramenta possui um repositório onde as informações são gravadas. Esse repositório permite centralizar os dados, evitando que eles fiquem espalhados em vários arquivos. 
		- Relacionar os dados armazenados.
			- É de muita importância, pois assim permite obter o conhecimento de forma mais coerente. Os dados armazenar devem estar relacionados coeretemente, para que você consiga criar sistemas mais eficientes e seguros. 
		- Recuperar os dados rapidamente.
			- Por meio de consultas é possível obter os dados rapidamente. Isso pode ser feito, no caso do MySQL pela linguagem SQL.
# O que é um SGBD(sistema gerenciador de banco de dados)
Uma ferramenta bem mais completa que um sistema de banco de dados. SGBD disponibiliza uma série de funcionalidades que permitem controlar e acompanhar melhor os dados armazenados. As principais características de um SGBD são:
- Permitir o acesso concorrente nas bases de dados. 
	- Ou seja mais de uma pessoa pode acessar um banco de dados ao mesmo tempo. 
- Realizar o gerenciamento de transações. 
	- Tipos de transações possíveis de um banco de dados:
		- Criar
		- Ler
		- Alterar
		- Deletar
	- Essas transações ocorrem com uma segurança. Caso aconteça alguma falha no processo, as alterações são desfeitas. 
- Permitir criar e aplicar regras de segurança as bases de dados.
	- Você pode definir que pessoas/aplicações podem acessar um banco de dados. E que funções do banco elas tem acesso.  
- Permitir criar regras que garantem a integridade das bases de dados. 
	- Criar regras do que pode ou não pode ser feito num banco de dados. Uma faixa de valores para um número. Valores que podem ser atribuídos. 
	- Ou até mesmo, não permitir deletar um item de uma tabela, quando outras tabelas dependem desse valor. 
## Relação de pai e filho 
O elemento pai só depende dele para existir. Já os filhos dependem dos seus pais e afins. 
As relações podem ser feitos por colunas que recebem o id de outra tabela, para relacionar os dados. 
Um pai tem vários filhos, mas um filho tem um pai. 
ID_{CAMPO_DO_PAI}, conecta o banco de dados do pai, colocando seu ID.

## Detalhe interessante
É comum entre os bancos de dados, que demore mais a consulta do que a inserção. 
# Iniciando a prática
1. No aplicativo XAMPP. Ative o Apache(servidor PHP que ajudara a manipular) e depois ative o MySQL(o servidor de banco de dados).
2. Depois acesse o `localhost/phpmyadmin`.
3. Clique em SQL, e depois execute um comando como esse, para quando quiser criar uma base de dados:
	1. `CREATE DATABASE <nome-da-base-de-dados>`.
	2. A DB é criada no painel do lado, clique nela.
4. Para criar tabelas:
	1. Forma fácil:
		1. Na seção criar tabela, escolha o nome da tabela e a quantidade de colunas.
		2. Defina para cada coluna seu nome e tipo. Na primeira coloque o ID, e selecione o checkbox A.I, para a cada nova inserção adicionar 1 no ID, em relação ao anterior. 
			1. CHAR é para textos com quantidade de caracteres fixa. E varchar com quantidade variável, a partir do máximo.
 
## Inserir valores numa variável:
```sql
INSERT INTO <nome-da-tabela> (<nome-dos-campos-da-tabela-separado-por-virgula) VALUES (<valores-da-primeira-linha-a-ser-adicionada), (<se-quiser-voce-pode-adicionar-mais-linhas>);
```
## Selecione campos de um banco de dados
```sql
SELECT * FROM <nome-da-tabela>
```
Esse código acima, mostra todas as colunas da tabela.
# Quem usa um banco de dados
1. Administrador do banco de dados(DBA): é o responsável por monitorar e gerenciar todas as bases de dados no SGBD, também é quem controla as permissões e os usuários, garante que os usuários tenham acesso aos dados, realiza backups, recupera os dados, em caso de falhas garante o melhor desempenho para o banco de dados, monitora serviços, jobs, os usuários no banco de dados, etc. Normalmente, um DBA é responsável pelo SGBD específico, e deve ter estudado e feito cursos para aquele SGBD, por exemplo: DBA oracle, DBA SQL server. 
2. Analista de sistemas e programadores de aplicações: são responsáveis por modelar a base de dados, implementa-los no SGBD escolhido. Também são responsáveis por desenvolver a aplicação(programa escrito em uma das linguagens Java, C++, C# e etc). E conectar essas aplicações à base de dados do sistema, esse usuário precisa conhecer a área de banco de dados, e também conhecer a linguagem SQL.
3. Usuários finais: os usuários finais são aquelas pessoas que vão trabalhar diariamente, com as aplicações desenvolvidas. São eles os responsáveis pela entrada de dados no banco de dados, e pelas alterações dos dados armazenados, esse usuários não precisam ter nenhum conhecimento sobre banco de dados, ou saber qual foi o SGBD utilizado. Para eles o banco de dados é transparente, e só interessas se as informações estejam sendo sendo salvas, e possam ser recuperadas. 
