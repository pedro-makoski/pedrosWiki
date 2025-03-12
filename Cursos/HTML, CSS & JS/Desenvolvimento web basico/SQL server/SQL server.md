Em todas as nossas aplicações, durante o desenvolvimento, utilizamos variáveis e imutáveis durante a codificação para a manipulação e armazenamento dos dados.

Além das variáveis e constantes simples, temos as estruturas que armazenam um ou mais valores, chamados **arrays**, estruturas essas que podem ter uma ou mais dimensões, sendo essa última chamada de **matriz**.

Estas estruturas, funcionam muito bem para que tenhamos o controle das informações durante a execução das aplicações, porém as mesmas ficam armazenadas na **memória RAM**, memória essa que tem suas informações apagadas ao desligarmos o computador/servidor e na finalização e/ou reinicialização da aplicação, pois não há nenhuma persistência dos dados, ou seja, ao retornar a aplicação nenhum dos dados trabalhados permanecem.
  
A **RAM** (que significa memória de acesso aleatório) e a **ROM** (que significa memória somente leitura) estão presentes no seu computador. RAM é a memória volátil que armazena temporariamente os arquivos com os quais você está trabalhando. ROM é a memória não volátil que armazena permanentemente as instruções no seu computador.

Para que não ocorra essa perda de dados no encerramento do programa ou desligamento do computador, se faz necessária a realização da persistência desses dados, para que possam ser recuperados e utilizados posteriormente.

As primeiras aplicações faziam a persistência dos dados em arquivos de texto comum, tais aplicações utilizavam eram escritas em linguagens como **Cobol**, **Fortran** e **C**. Em função da forma como eram construídas, sem necessidade de nenhuma outra tecnologia para o seu funcionamento, eram classificadas como **aplicações monolíticas**.

Com a evolução dos negócios e a necessidade da distribuição dos acessos para mais de um ponto e perfil, a estrutura monolítica deixou de ser interessante, pois não atendia tal requisito, pois os dados precisam estar centralizados para que estejam acessíveis a todos os "clientes" do sistema. Para isso, se faz necessária a criação de uma estrutura **"cliente-servidor"** e, dessa forma as aplicações e os dados ficam concentrados no servidor e os "clientes" distribuídos.

![[Pasted image 20241128132840.png]]
Na arquitetura em 3 camadas, os dados ficam em um Servidor exclusivo de BD (banco de dados), sem exposição a qualquer outro servidor que não seja o servidor de aplicação, garantindo assim a segurança dos dados.
# Os sistemas de db mais usados
veja aqui:
https://db-engines.com/en/ranking.
![[Pasted image 20241128133136.png]]
# SQL server
Em nosso curso, iremos trabalhar com o **Sql Server**, desenvolvido e fornecido pela **Microsoft**.
  
A versão atual do Sql Server é a 2019 e além das versões pagas, temos as versão Desenvolvedor (edição gratuita completa, licenciada para uso como banco de dados de desenvolvimento e teste em um ambiente de não produção) e Express (ideal para desenvolvimento e produção de aplicações de área de trabalho, Web e pequenos servidores) Fonte: Microsoft.
Faça a instalação aqui: https://www.microsoft.com/pt-br/sql-server/sql-server-downloads.

**Vamos nos concentrar no modelo relacional, especificamente no SGBD Microsoft Sql Server.**
O **SGBD**, pode gerenciar múltiplos bancos de dados. Um exemplo seria um sistema de gestão empresarial com módulos de Marketing, Recursos Humanos, Contabilidade e Financeiro. Os dados dessa forma, podem ser distribuídos em diferentes bancos de dados que se relacionam entre si, conforme abaixo.
![[Pasted image 20241128142746.png]]
## Tabelas, linhas e colunas
Os **bancos de dados** são estruturados de forma semelhante às linguagens de programação, onde temos variáveis e tipos de dados. Vamos nos aprofundar no funcionamento e estrutura dos bancos de dados, fazendo analogias com a lógica de programação que já conhecemos.
Para iniciar, vamos falar da estrutura do array de armazenamento com 3 informações diferentes: nome, idade e peso.

```java
string[] nome = {“Luiza”, “Anna”, “Mallu”}

int[] idade = {39,16,7}

int[] peso = {80,64,34}
```

Os dados no arrays ficam posicionados em índices que sempre iniciam por zero, com isso, os dados na posição zero de nome, idade e peso são, respectivamente, "Luiza", 39 e 80. Já os dados na posição 1 são "Anna", 16 e 64, assim sucessivamente. Organizando essas variáveis de uma forma mais visual, teríamos:
![[Pasted image 20241128143140.png]]
Esta estrutura é constituída de colunas e cada coluna pode ser considerada uma variável array, com o índice respectivo pelo posicionamento, e cada um com seu tipo de dado (texto, número, booleano etc.).
Cada array possui seu índice, porém, podemos ver que **tem a mesma sequência numérica**, ou seja, cada posição do índice representa uma linha, onde temos todos os dados respectivos de uma mesma pessoa, tendo a relação entre os dados de acordo com os quais estão associados ("idade" e "peso" referente ao "nome" da pessoa).
Quando agruparmos as colunas dos dados de forma otimizada, temos uma tabela, onde é representada essa estrutura de linhas e colunas. Nesse caso, temos a tabela que chamamos de "**pessoa**".
**Nas linguagens de programação, temos os mais diversos tipos de variáveis, essencialmente, os mais simples são os textos (string), números (number) e lógico (booelan), além dos tipos especiais, claro.**
Como o objetivo do banco de dados é **guardar** e **gerenciar** os dados das aplicações, os 3 principais tipos se subdividem em outros, tendo cada um tamanho definido em **bytes** para armazenar a informação correta com o menor tamanho possível, com maior eficiência e economia de espaço no servidor para o armazenamento, bem como a economia financeira.

|bits|bytes|Variações|
|---|---|---|
|8|1|256|
|16|2|65.536|
|32|4|4.294.967.296|
|64|8|18.446.744.073.709.600.00|
Vamos, agora, conhecer alguns dos tipos de dados do **Sql Server** e detalhar as informações de tamanho e armazenamento. Para os tipos de dados para representar números, os nossos simples tipos "**number**" e "**string**" não existem no **Sql Server**. Cada um desse tipo é representado por vários outros tipos.
### Tipos de dados numéricos
Os tipos de dados numéricos no **Sql Server** são divididos em 2 grupos: os **exatos** (números redondos, sem uso de vírgulas e com até duas casas decimais) e **aproximados** (números com uso de vírgulas com maior número de casas decimais).
#### Exatos
| Tipo de dados | Intervalo                                                                             | Armazenamento |
| ------------- | ------------------------------------------------------------------------------------- | ------------- |
| **Bigint**    | -2^63 (-9.223.372.036.854.775.808)  <br>**a**  <br>2^63-1 (9.223.372.036.854.775.807) | 8 bytes       |
| **Int**       | -2^31 (-2.147.483.648)  <br>**a**  <br>2^31-1 (2.147.483.647)                         | 4 bytes       |
| **Smallint**  | -2^15 (-32.768) **a** 2^15-1 (32.767)                                                 | 2 bytes       |
| **Tinyint**   | 0 **a** 255                                                                           | 1 byte        |
**SQL Server** não promove automaticamente outros tipos de dados inteiros (**tinyint**, **smallint** e **int**) para **bigint**.
O tipo de dados escolhido nesse caso, deve ser de acordo com o dado a ser armazenado, por exemplo, caso seja relacionado a idade, podemos utilizar o **tinyint**, case seja para armazenagem de quantidade de pessoas no mundo, precisaremos do **bigint**.
##### Decimal/Numeric
Tipos de dados numéricos com precisão e escala fixos. **Decimal** e **numeric** são sinônimos e podem ser usados intercambiavelmente.
decimal[ ( p[ , s] ) ] e numeric[ ( p[ , s] ) ]
Números de precisão e escala fixos. Quando a precisão máxima for usada, os valores válidos serão de - 10^38 +1 a 10^38 - 1. Os sinônimos ISO para decimal são dez e dec( p, s ) . numeric é funcionalmente equivalente a decimal.
- O p é de precisão: O número total máximo de dígitos decimais a ser armazenados. Esse número inclui o que está à direita e à esquerda do ponto decimal. A precisão deve ser um valor de 1 até a precisão máxima de 38. A precisão padrão é 18.
- o s é de escala: O número máximo de dígitos decimais que são armazenados à direita do ponto decimal. Esse número é subtraído de p para determinar o número máximo de dígitos à esquerda do separador decimal. A escala deve ser um valor de 0 a p, e só poderá ser especificada se a precisão for definida. A escala padrão é 0; portanto, 0 <= s <= p. Os tamanhos máximos de armazenamento variam, com base na precisão.

|Precisão|Bytes de armazenamento|
|---|---|
|1 – 9|5|
|10–19|9|
|20–28|13|
|29-38|17|
##### smallmoney / money
Tipos de dados que representam valores monetários ou de moeda.

|Tipo de dados|Intervalo|Armazenamento|
|---|---|---|
|**Money**|-922.337.203.685.477,5808 **a**  <br>922.337.203.685.477,5807 (-922.337.203.685.477,58 a 922.337.203.685.477,58 para o Informatica. O Informatica dá suporte apenas a dois decimais, não quatro.)|8 bytes|
|**smallmoney**|-214.748,3648  <br>**a** 214.748,3647|4 bytes|
#### bit
O Mecanismo de Banco de Dados do SQL Server otimiza o armazenamento de colunas bit. Se houver 8 ou menos colunas bit em uma tabela, as colunas serão armazenadas como 1 byte. Se houver de 9 a 16 colunas bit, as colunas serão armazenadas como 2 bytes, e assim por diante.

Os valores de cadeia de caracteres **TRUE** e **FALSE** podem ser convertidos em valores bit: TRUE é convertido em 1 e FALSE é convertido em 0.
### Tipos numéricos aproximados
O **float [ ( n ) ]** em que n é o número de bits usado para armazenar a mantissa do número float na notação científica e, portanto, exige a precisão e o tamanho do armazenamento. Se n for especificado, ele precisará ser um valor entre 1 e 53. O valor padrão de n é 53.

|Valor de n|Precisão|Tamanho de armazenamento|
|---|---|---|
|**1-24**|7 dígitos|4 bytes|
|**25-53**|15 dígitos|8 bytes|
**O tipo de dados SQL Server float[ (n) ] está em conformidade com o padrão ISO para todos os valores de n de 1 a 53. O sinônimo de double precision é float(53).**

| Tipo de dados | Intervalo                                                       | Armazenamento         |
| ------------- | --------------------------------------------------------------- | --------------------- |
| **Float**     | - 1,79E+308 **a** -2,23E-308, 0 e 2,23E-308 **a** 1,79E+308     | Depende do valor de n |
| **Real**      | - 3,40E + 38 **a** -1,18E - 38, 0 e 1,18E - 38 **a** 3,40E + 38 | bytes                 |
### Cadeias de Caracteres
#### char e vachar
Tipos de dados de caractere que sejam de tamanho fixo, char ou de tamanho variável, varchar. A partir do SQL Server 2019 (15.x), quando uma ordenação habilitada por UTF-8 é usada, esses tipos de dados armazenam o intervalo completo de dados de caractere Unicode e usam a codificação de caracteres UTF-8. Se uma ordenação não UTF-8 for especificada, esses tipos de dados armazenarão apenas um subconjunto de caracteres compatíveis com a página de código correspondente dessa ordenação.
### Data e hora
#### Datetime
Define uma data combinada com uma hora do dia que inclui frações de segundos e se baseia em um período de 24 horas.
#### Smalldatetime
Define uma data que é combinada com uma hora do dia. A hora se baseia em um dia de 24 horas, com segundos sempre zero (:00) e sem frações de segundo.
<hr>
Veja mais aqui: https://learn.microsoft.com/pt-br/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15.
# Modelos de bancos de dados
Revisitando o ranking dos bancos de dados, podemos analisar suas classificações por "**modelos**":
![[Pasted image 20241128142313.png]]
Em aplicações monolíticas, a guarda dos dados era realizada em arquivos normais, como já vimos. Em um sistema de supermercado, por exemplo, as estruturas eram armazenadas em diferentes arquivos para cada objetivo. A relação de clientes poderia ser armazenada no arquivo **clientes.txt**, por exemplo. Já a lista de produtos no arquivo **produtos.txt** etc.
- Não relacional: É o exemplo do uso de arquivos, pois sua estrutura não possui qualquer relação entre eles, com total independência uns dos outros.
- **Relacional**: Sua estrutura possui relação entre si, ou seja, um tipo de dado possui uma ligação ou interligação entre eles. Este modelo é o tipo da grande maioria dos bancos de dados, como o **Microsoft SQL Server**, **Oracle**, **MySQL**, **PostgreSQL** etc.
- Documentos: O banco de dados do modelo documento utiliza a estrutura de dados do **JSON** para armazenamento dos dados. Este modelo é usado pelo **MongoDB**, **Google Firebase**, **Google Cloud**, **Firestone**, entre outros.
- Key value: Este modelo utiliza a estrutura de dados de chave-valor. Como exemplo, temos o **Redis**, **Oracle**, **NoSQL**, **Amazon** **SimpleDB**, entre outros.
- Search Engine: São bancos de dados específicos usados como mecanismos de busca e acesso rápido a dados de grande volume. Como exemplo, temos  **Elastic** **Search**, **Microsoft** **Azure** **Search**, **Amazon** **Cloud** **Search**, entre outros.
# Prática
A ferramenta principal para o SQL é o SSMS, disponível somente para windows.
## Funcionamento das tabelas
As tabelas possuem um índice, que seriam as linhas, e cada linha tem um valor, que pode ser descrito por uma variável. Então seria como se fosse múltiplos arrays com seus respectivos índices. 

Nos bancos de dados, cada linha dessas é chamada de **registro**. Os índices, tem como principal responsabilidade, **organizar seu conteúdo**, além disso, são responsáveis por **agilizar a busca e localização dos dados**.
### Índices primários e secundários
Pode-se ter índices secundários que indicam outras coisas, mas tem que ter a primary key(PK), ou chave primaria. Esse índice é normalmente colocado na primeira coluna.

Ela tem função igual ao índice de um array, único. Ela organiza os dados em linhas de registro. Diferente do índice do array, ele sempre começa em 1 e não em 0. E é incrementando automaticamente. Quando for usado o PK também deve ser colocado o auto-increment(AI), que faz com que automaticamente ao ser inserido algum registro no banco de dados, seja 1 a mais no id.

Se inserirmos na tabela as primeiras 4 linhas, então veremos que as linhas 3 e 4 estavam erradas, então temos que excluir para inserir novamente. Ao inserir novamente, o próximo índice criado é o "5". Isso demonstra o controle e segurança da chave, mostrando que os índices 3 e 4 existiam, mas foram removidos, não podendo ser reutilizados.
### Unique key(UK)
Não pode-se repetir ao longo da coluna o mesmo valor para isso é usado a UK, para não se repetir valores dentre uma coluna. Pode ser usado para coisas como:
- CPF.
- E-mail.
- RG.
- E etc. 
Definindo um campo como **UK**, o banco de dados passa a controlar seu conteúdo, **não permitindo que outro valor semelhante** seja adicionado na mesma coluna. Ao tentar inserir um valor que já existe, o banco de dados emite um erro informando que está ocorrendo uma **violação** da propriedade **unique key** da coluna, **cancelando** a tentativa de salvar a informação.

 A coluna "id" está definida como **primary key (PK)** e **auto increment (AI)**, sendo de controle do banco de dados. Portanto, não precisamos definir a chave "id" como UK, pois temos a garantia de que terão apenas valores únicos, visto que removemos um registro e inserimos novamente e ele não reaproveitou os índices removidos (ids 3 e 4).
### NOT NULL(NN)
Não permite valores vazios nos campos da coluna.
Quando um campo não tem a propriedade **NOT NULL** ativada, significa que seu campo é **NULL**, ou seja, permite valores vazios. Já os índices, como são de controle do banco de dados, esta propriedade já está embutida em seu contexto de **chave primária (PK)**. Portanto, também não precisamos definir o campo "id" como **NN**.
## Organização das tabelas
Como vimos, um sistema gerenciador de bancos de dados (**SGBD**) pode conter diversos BDs(Databases - banco de dados) diferentes.
Cada banco de dados, tem o chamado de schema no SQL server, que serve para diferir as tabelas do banco de dados. 
Se nossa tabela "pessoa" foi criada no **schema** "**cadastros**", por exemplo, seu endereço completo é "**cadastros.pessoa**". Com isso, o **Sql Server** sabe exatamente onde encontrar o objeto que pretendemos manipular ou onde criá-lo.
## Prática
![[Pasted image 20241221142856.png]]
Não se deve manipular os bancos de dados do sistema. Por riscos de segurança.
### Criando banco de dados
Na opção banco de dados clique com o botão direito e clique em novo, coloque ali o nome do banco de dados.
Clique em OK.
### Criando esquema 
Em segurança, clique em esquemas e depois com o botão direito clique em novo, digite seu nome. E depois de clicar em OK, clique duas vezes no esquema em segurança, para verificar se está como DBO.
### Criando tabela
Em tabelas, clique em novo, depois em tabela. Defina os nomes os tipos e se é nulo para cada coluna. Com o botão direito clique em propriedades e defina o nome e o esquema. Depois selecionando a coluna id, na primeira parte clique com o botão direito e clique em definir como chave primária, depois em propriedades da coluna clique em especificação de identidade, defina como sim, coloque como incremento 1(para subir de 1 em 1), e depois coloque a semente de identidade como 1, para começar com 1. 

E depois de tudo não se esqueça de clicar em salvar. E depois clique com o botão direito do mouse em tabelas e depois em atualizar, para ver o novo {nome-do-esquema}.{nome-da-tabela}.
![[Pasted image 20241221144415.png]]
#### Foreign key(FK) - chave estrangeira
Você pode criar uma chave estrangeira, que conecta com outra tabela. Você pode para fazer clicar com o botão direito na chave primária, depois em Relações, depois em nova, depois defina o (Nome) da chave estrangeira, depois em especificações da tabela clique nos ... e depois defina o campo em que vai ser a chave primária que você está buscando, para colocar no campo especificado na segunda parte.
![[Pasted image 20241221145120.png]]![[Pasted image 20241221145220.png]]
### Via código
Clique com o botão direito no banco de dados, depois em Tarefas depois em gerar scripts, depois clique em próximo, espere:
![[Pasted image 20241221145532.png]]E selecione a primeira opção caso queira modificar tudo, ou selecione a segunda opção caso queira apenas modificar uma parte.
### Criar banco de dados
```sql
CREATE DATABASE [Nome]
```

```sql
USE [master]
GO
/****** Object:  Database [empresa]    Script Date: 21/12/2024 14:56:43 ******/
CREATE DATABASE [empresa]/
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'empresa', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVERDEV20241\MSSQL\DATA\empresa.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'empresa_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVERDEV20241\MSSQL\DATA\empresa_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [empresa] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [empresa].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [empresa] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [empresa] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [empresa] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [empresa] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [empresa] SET ARITHABORT OFF 
GO
ALTER DATABASE [empresa] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [empresa] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [empresa] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [empresa] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [empresa] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [empresa] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [empresa] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [empresa] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [empresa] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [empresa] SET  DISABLE_BROKER 
GO
ALTER DATABASE [empresa] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [empresa] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [empresa] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [empresa] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [empresa] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [empresa] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [empresa] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [empresa] SET RECOVERY FULL 
GO
ALTER DATABASE [empresa] SET  MULTI_USER 
GO
ALTER DATABASE [empresa] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [empresa] SET DB_CHAINING OFF 
GO
ALTER DATABASE [empresa] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [empresa] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [empresa] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [empresa] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'empresa', N'ON'
GO
ALTER DATABASE [empresa] SET QUERY_STORE = ON
GO
ALTER DATABASE [empresa] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO/*Aqui termina  a criação do banco de dados*/
USE [empresa]/*Cria o esquema*/
GO
/****** Object:  Schema [Cadastros]    Script Date: 21/12/2024 14:56:43 ******/
CREATE SCHEMA [Cadastros]
GO
/****** Object:  Table [Cadastros].[Clientes]    Script Date: 21/12/2024 14:56:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO/*Termina a criação do esquema*/
CREATE TABLE [Cadastros].[Clientes](
	[idCliente] [int] IDENTITY(1,1) NOT NULL,
	[idPessoa] [int] NULL,
	[UltimaVisita] [datetime] NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[idCliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [Cadastros].[Pessoa]    Script Date: 21/12/2024 14:56:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Cadastros].[Pessoa](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](250) NULL,
	[CPF] [varchar](11) NULL,
	[Logradouro] [varchar](250) NULL,
	[Numero] [int] NULL,
	[DataCadastro] [datetime] NULL,
 CONSTRAINT [PK_Pessoa] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/*Cria chave primária*/
ALTER TABLE [Cadastros].[Clientes]  WITH CHECK ADD  CONSTRAINT [FK_Clientes_Pessoa] FOREIGN KEY([idPessoa])
REFERENCES [Cadastros].[Pessoa] ([id])
GO
ALTER TABLE [Cadastros].[Clientes] CHECK CONSTRAINT [FK_Clientes_Pessoa]
GO
USE [master]
GO
ALTER DATABASE [empresa] SET  READ_WRITE 
GO

```

Quando você seleciona apenas uma parte do código e clica em executa, ele executa apenas a parte selecionada.
## Excluir
![[Pasted image 20241221145948.png]]

# Linguagem SQL
Agora que aprendemos a criar as tabelas no **Sql Server**, vamos aprender como manipular seu conteúdo, inserindo ou removendo registros, consultando ou apagando seus dados.
O nome disso é CRUD, um acrônimo para criar, ler, mudar e deletar. 
![[Pasted image 20241221155410.png]]
Atualmente, o **SQL** é o padrão adotado em banco de dados mundialmente, usada nos principais sistemas de banco de dados existentes, como **Sql Server**, **Oracle**, **MySQL**, **PostgreSQL**, **SQL** **Server** entre outros. O SQL é uma linguagem declarativa, com a qual podemos especificar as consultas dos dados e outras atividades no banco de dados.
Todos os bancos de dados devem executar os comandos de acordo com o **SQL Ansi**, padrão transversal e, além disso, cada banco de dados possui uma linguagem específico, no caso do **Sql Server**, a **T-SQL (Transact SQL)**.
## 5 grupos dos recursos e comandos do SQL
- DML(Data Manipulation Language): "Linguagem de manipulação de dados" que nos permite utilizar os principais comandos do CRUD: SELECT, INSERT, UPDATE, DELETE (selecionar, inserir, atualizar e remover, respectivamente). Grande parte dos comandos que usamos diariamente são desse grupo.
- DQL(Data Query language): "Linguagem de Consulta de Dados", é um subconjunto do DML que contém apenas o comando SELECT. Esta subdivisão ocorreu pois o SELECT não manipula os dados, apenas consulta, por mais que o SELECT ainda continue no grupo do DML.
- DDL(Date Definition Language): "Linguagem de Definição de Dados" que nos permite definir estruturas do banco, tais como criar as tabelas, seus tipos de dados e propriedades usando apenas comandos, como fizemos de forma visual usando as IDEs.
- DCL(Data Control Language): "Linguagem de Controle de Dados" que nos permite usar comandos para conceder e revogar acessos aos objetos.
- DTL(Data Transaction Language): "Linguagem de Transação dos Dados", são os comandos que nos permitem criar transações das operações. 
## DQL - SELECT
O comando **SELECT** permite ao usuário especificar uma consulta ("**query**") como uma descrição do resultado desejado. Esse comando pode ser composto de várias cláusulas e opções de filtro, possibilitando elaborar consultas das mais simples às mais elaboradas.
### Select All
**select * from pessoa** 
Esse comando pode ser lido da seguinte forma: 

| Parte do comando | Significado          |
| ---------------- | -------------------- |
| **Select**       | **Selecione**        |
| *****            | **Todas as colunas** |
| **From**         | **Da origem**        |
| **Pessoa**       | **Pessoa**           |
**Pronto!** Executando este comando, o **SGBD** retorna todos os dados da tabela, sem qualquer "filtro".
### Selecionar a partir de filtro
Em relação a filtros, também é muito simples, apenas adicionamos o comando **WHERE** (onde) e colocamos a condição desejada, da seguinte forma:

As condições do filtro **WHERE** são as mesmas que conhecemos, vamos revê-las agora e conhecer suas características específicas na linguagem SQL.
Como vimos, os operadores condicionais funcionam no SQL da mesma forma que em qualquer linguagem de programação. Vamos rever cada operador e sua característica no SQL:
- Igualdade(=): Usa apenas um sinal de igual ("=") e retorna todos os valores iguais ao valor de comparação. Este filtro é o uso mais comum, como para encontrar os dados de uma chave/índice específico. Por exemplo: select * from pessoa where id = 3.
- Diferença(<>): Usa os símbolos de maior-menor juntos (“<>”) e retorna todos os valores diferentes do valor de comparação. Por exemplo, retorne todos os pessoas, exceto o "Pedro": select * from pessoa where nome <> "Pedro".
- Menor(<): Funciona da mesma forma, usando o símbolo de menor mesmo (“<”) e retorna todos os valores que são menores que a condição. Por exemplo, para retornar todas as pessoas com menos de 20 anos: select * from pessoa where idade < 20.
- Maior(>): Funciona da mesma forma, usando o símbolo de maior mesmo (“>”) e retorna todos os valores que são maiores que a condição. Por exemplo, para retornar todos as pessoas com mais de 20 anos: select * from pessoa where idade > 20.
- Menor ou igual(<=): Funciona de forma semelhante, usando o sinal de menor seguido de uma igualdade (“<=”) e retorna todos os valores que são menores ou iguais à condição. Por exemplo, para retornar todos as pessoas com 20 anos ou menos: select * from pessoa where idade <= 20.
- Maior ou igual(>=): retorna todos os valores que são maiores ou iguais à condição. Por exemplo, para retornar todos as pessoas com 20 anos ou mais: select * from pessoa where idade >= 20.
- LIKE Além dos operadores de comparação que já conhecemos, o **SQL** possui um outro comando para realizar comparações, estamos falando do comando **LIKE**. O comando "**LIKE**" (que significa "**igual**") funciona da mesma forma que o operador de igualdade. Ou seja, os comandos abaixo executam a mesma busca com filtro:
```SQL
select * from pessoa where nome = "Luiza"

select * from pessoa where nome like "Luiza"
```
O comando **LIKE**, quando usado com outros caracteres coringa(caracteres substituídos), se torna uma ferramenta extremamente poderosa e versátil.
#### Caracteres coringa
%: O caractere % é um coringa que desconsidera qualquer caractere, não importando a quantidade. Por exemplo, o comando a seguir busca apenas a primeira e a última letra do nome:
```SQL
select * from pessoa where nome like "A%a".
```

|Filtro de Consulta|Posição|Exemplo|
|---|---|---|
|**select * from pessoa**  <br>**where nome** like "A%a"|Coringa no meio|Busca os nomes que iniciam e terminam com o trecho informado ("Anna", "Ana", "Adriana", “Angela" etc).|
|**select * from pessoa**  <br>**where** **nome** like "An%"|Coringa no fim|Busca os nomes que iniciam com o trecho informado ("Anna", "Ana", “Angela" etc)|
|**select * from pessoa  <br>**|Coringa no início|Busca os nomes que finalizam com o termo informado ("Anna", "Ana", "Adriana" etc)|
|**select * from pessoa**  <br>**where nome** like "%nn%"|Coringa no início e no fim|Busca os nomes que contenham as letras "TT" em qualquer parte do texto ("Anna" etc.)|
`_` (underline): O caractere "``_``" (underline) funciona de forma semelhante ao "**%**" (percento), com uma única diferença: enquanto o "**%**" considera qualquer coisa de qualquer tamanho, o "**``_``**" usa como coringa apenas um único caractere.

#### Operadores lógicos
Os **operadores lógicos** também funcionam da mesma forma no **SQL**. A única diferença é que aqui no SQL são usados os **nomes** em vez de símbolos. 
- AND: Todas as condições da expressão devem ser verdadeiras.
- OR: Apenas uma das condições precisam ser verdadeiras.
- NOT: Nega a condição. Pode ser usado com o o like, dai fica NOT LIKE, para que não seja igual.
#### Operador IS
Para saber se um valor é nulo, podemos usar o IS NULL, com o where:
```sql
SELECT * FROM pessoas where peso is NULL 
```
Obtem todos os registros em que a coluna peso dá um valor NULL.
Também podemos o NOT deles. 
```sql
SELECT * FROM pessoas where peso is not NULL 
```
Todos os **comandos**, **operadores de** **comparação**, **operadores lógicos**, **LIKE** e **NULL** que foram abordados para uso na condição **WHERE** funcionam da mesma forma para as demais operações (**INSERT**, **DELETE** e **UPDATE**), que veremos a seguir.
#### Join
![[Pasted image 20241221165709.png]]
##### Inner Join
O Inner Join é o método de junção mais conhecido e, como ilustra a **Figura 2**, retorna os registros que são comuns às duas tabelas.
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
INNER JOIN TabelaB as B
                on a.Nome = b.Nome
```
![[Pasted image 20241221170037.png]]
##### Left Join
O Left Join, tem como resultado todos os registros que estão na tabela A (mesmo que não estejam na tabela B) e os registros da tabela B que são comuns à tabela A.
```SQL
SELECT a.Nome, b.Nome
FROM TabelaA as A
LEFT JOIN TabelaB as B
                on a.Nome = b.Nome
```
![[Pasted image 20241221170024.png]]
##### Right Join
Usando o Right Join, teremos como resultado todos os registros que estão na tabela B (mesmo que não estejam na tabela A) e os registros da tabela A que são comuns à tabela B.
![[Pasted image 20241221170108.png]]
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
RIGHT JOIN TabelaB as B
  on a.Nome = b.Nome
```
##### Outer Join
O Outer Join (também conhecido por Full Outer Join ou Full Join), tem como resultado todos os registros que estão na tabela A e todos os registros da tabela B.
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
FULL OUTER JOIN TabelaB as B
    on a.Nome = b.Nome
```
![[Pasted image 20241221170253.png]]
##### Left Excluding Join
Retorna como resultado todos os registros que estão na tabela A e que não estejam na tabela B.
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
LEFT JOIN TabelaB as B
                on a.Nome = b.Nome
WHERE b.Nome is null
```
![[Pasted image 20241221170505.png]]
##### Right Excluding Join
retorna como resultado todos os registros que estão na tabela B e que não estejam na tabela A. 
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
RIGHT JOIN TabelaB as B
    on a.Nome = b.Nome
WHERE a.Nome is null
```
![[Pasted image 20241221170559.png]]
##### Outer Excluding Join
teremos como resultado todos os registros que estão na tabela B, mas que não estejam na tabela A, e todos os registros que estão na tabela A, mas que não estejam na tabela B.
```sql
SELECT a.Nome, b.Nome
FROM TabelaA as A
FULL OUTER JOIN TabelaB as B
    on a.Nome = b.Nome
WHERE a.Nome is null or b.Nome is null
```
![[Pasted image 20241221170704.png]]
## DML
### Insert
As **inserções** ou **inserts** são a forma como inserimos novos registros na tabela.
Pode ser usada da seguinte forma:
```SQL
INSERT INTO <campos>, <...> VALUES (<valores>, <...>)
```
```SQL
INSERT INTO cadastros.pessoa (nome, idade, peso, cpf) 

VALUES ('José', '32', '66', ' 02595783041');
```
Mais de uma linha:
```SQL
INSERT INTO cadastros.pessoa (nome, idade, peso, cpf) 

VALUES  ('José', '32', '66', ' 79628734008'), 

                 ('João', '31', '67', ' 10508414091'),

                 ('Mario', '30', '68', ' 94773387025');
```
### Delete
Deleta a(s) linha(s).
Deleta todos os registro da tabela:
```sql
delete from pessoa;
```
Seu uso pode estar sempre acompanhado da cláusula **WHERE**, para se definir qual ou quais os registros devem ser removidos. A cláusula **WHERE** funciona exatamente como abordado para a cláusula **SELECT**. Para removermos apenas um registro específico, por exemplo, usuários da seguinte forma:
```SQL
delete from pessoa where id = 5;

delete from pessoa where nome = "Pedro";
```
Sempre confirme antes de remover os registros. Uma forma simples de verificação é trocar o "**delete**" por "**select**", e certifique-se que os dados retornados são apenas aqueles no qual você realmente quer excluir.
### Update
Atualiza uma informação especifica em um ou mais campos.
```sql
update pessoa

set campo = "valor"

where <condição>;
```
**Seu uso requer o mesmo cuidado do comando DELETE, isto porque, quando não informado a cláusula WHERE, todos os registros da tabela serão alterados.**
Para mudar mais de alguns valores do registro:
```sql
 update pessoa

set nome = "Ana Luiza", peso = 44, idade = 19

where id = 1;
```
# Comando getdate()
Obtem a data atual, da inserção do banco. 
```sql
insert into Cadastros.Clientes (IdPessoa, UltimaVisita) Values (10,getdate())
```
# Código
```sql
--Definindo o Banco de Dados
use Empresa/*Indica que vamos usar o banco empresa*/

-- Trabalhando com Insert Pessoa
insert into Cadastros.Pessoa (Nome,CPF,Logradouro,Numero,DataCadastro) Values ('Anna','23970731291','Rua Teste 01',85,getdate())

insert into Cadastros.Pessoa (Nome,CPF,Logradouro,Numero,DataCadastro) Values ('Mallu','57626342135','Estrada Teste 02',987,getdate())

insert into Cadastros.Pessoa (Nome,CPF,Logradouro,Numero,DataCadastro) Values ('Ana','19084287754','Alameda Teste 5',8547,getdate())

insert into Cadastros.Pessoa (Nome,CPF,Logradouro,Numero,DataCadastro) Values ('Tania','70734746881','Av Teste 06',127,getdate())

-- Verificando os registros Pessoa
select * from Cadastros.Pessoa

-- Trabalhando com Insert Cliente

insert into Cadastros.Clientes (IdPessoa, UltimaVisita) Values (1,getdate())

insert into Cadastros.Clientes (IdPessoa, UltimaVisita) Values (2,getdate())

insert into Cadastros.Clientes (IdPessoa, UltimaVisita) Values (10,getdate())

-- Verificando os registros inseridos Cliente
select * from Cadastros.Clientes

-- Verificando os registros Pessoa
select * from Cadastros.Pessoa

-- Trabalhando com update
update Cadastros.Pessoa Set Numero = 1857 Where Id = 2

update Cadastros.Clientes Set UltimaVisita = getdate() where IdCliente = 2

-- Trabalhando com Delete

Delete From Cadastros.Pessoa Where Id = 4

Delete From Cadastros.Pessoa Where Id= 3

Delete From Cadastros.Pessoa Where Id = 2


```