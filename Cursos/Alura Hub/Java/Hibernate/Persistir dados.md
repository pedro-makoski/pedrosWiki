# Para saber mais: diferentes tipos de bancos de dados
Os bancos de dados são como grandes armários onde guardamos todas as informações que uma aplicação precisa para funcionar bem: informações sobre usuários, produtos, vendas, etc.

Mas os bancos de dados são todos iguais? Não! Há diferentes tipos de bancos de dados e eles são definidos pela forma como organizam essas informações. Imagine, por exemplo, que há armários com diferentes tamanhos de gavetas e tipo de compartimentos. Vamos entender mais sobre dois tipos: bancos de dados relacionais e bancos de dados orientados a documentos.

## O que são bancos de dados relacionais?

Bancos de dados relacionais (RDBMS) são como armários com muitas gavetas de tamanhos específicos que armazenam informações organizadas em tabelas com linhas e colunas.Cada linha representa um registro único e cada coluna representa um campo desse registro. É como se você organizasse suas roupas separando-as por cor e tipo: camisas brancas em uma gaveta, calças jeans em outra, etc.

A principal característica de um RDBMS é que ele permite estabelecer relações entre as tabelas, ou seja, é possível associar registros de uma tabela com registros de outra. Por exemplo, uma tabela de "Clientes" poderia se relacionar com uma tabela de "Pedidos", exibindo todos os pedidos feitos por um cliente específico.

Um exemplo de código em SQL, a linguagem utilizada em RDBMS:

```sql
CREATE TABLE clientes (
   id INT PRIMARY KEY,
   nome VARCHAR(100),
   email VARCHAR(100)
);

CREATE TABLE pedidos (
   id INT PRIMARY KEY,
   id_cliente INT,
   produto VARCHAR(100),
   FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);
```

## O que são bancos de dados orientados a documentos?

Bancos de dados orientados a documentos são como armários com compartimentos flexíveis que permitem que você guarde objetos de tamanhos diferentes em um mesmo lugar. Eles armazenam as informações em formato de documentos, geralmente em JSON, que é um formato de dados leve, fácil de ler e trabalhar, capaz de representar estruturas de dados complexas.

Os documentos podem conter diferentes campos e estruturas de dados, e os campos podem conter diferentes tipos de dados. O conjunto de documentos é flexível, ou seja, documentos no mesmo banco de dados não precisam ter a mesma estrutura.

Por exemplo, você poderia ter um documento para um usuário que tem um campo de endereço, e outro documento para um usuário que não tem.

Um exemplo de código em MongoDB - um banco de dados orientado a documentos:

```javascript
var meuCliente = {
   nome: "João",
   email: "joao@email.com",
   pedidos: [
      { produto: "Camiseta", quantidade: 2 },
      { produto: "Calça", quantidade: 1 },
   ]
}

db.clientes.insert(meuCliente);
```

Ao trabalhar com bancos de dados é importante entender as diferenças entre os modelos para escolher a opção que melhor se adapta às necessidades do seu projeto. Bancos de dados relacionais são ótimos para dados estruturados e relações complexas, que é o nosso caso. Por isso, optamos por um tipo de RDBMS, o Postgres.

Já os bancos de dados orientados a documentos são excelentes para armazenar dados semi estruturados ou não estruturados, que oferecem escalabilidade e flexibilidade.

Há outros tipos de bancos de dados, por isso, convidamos você a pesquisar sobre o assunto caso queira se aprofundar mais no tema!

 [](https://cursos.alura.com.br/forum/curso-java-persistencia-dados-consultas-spring-data-jpa/exercicio-para-saber-mais-diferentes-tipos-de-bancos-de-dados/142169/novo)
# Para saber mais: JPA e Hibernate
Ao trabalhar com programação Web, frequentemente é necessário utilizar bancos de dados para armazenar os dados da aplicação desenvolvida, sejam estes dados de usuários, endereços ou quaisquer dados que precisem ser guardados para o funcionamento do programa.

Sendo assim, é muito interessante que as linguagens de programação que são voltadas para Web tenham maneiras de se conectar com o banco de dados para que seja possível cadastrar, deletar, consultar e atualizar registros guardados no banco. Ou seja, que possibilitem fazer um **CRUD** diretamente a partir da linguagem.

Com isso, a maioria das linguagens passou a adotar soluções nativas para lidar com conexões em bancos de dados, como é o caso do **JDBC** (Java DataBase Connector) no Java. No entanto, a utilização desse tipo de solução começou a ser um pouco maçante, uma vez que a configuração não era simples, nem pequena e tinha de ser feita repetidas vezes de forma idêntica.

Por este motivo, passaram a aparecer alternativas ao uso dessas soluções nativas, que ao invés de apresentarem uma conexão "crua" com o banco de dados, isso é, que exija a escrita de consultas e comandos SQL na mão, passaram a apresentar código encapsulado que já apresenta grande parte do que fazemos no dia a dia utilizando banco de dados de maneira pronta, com funções disponibilizadas na própria linguagem, sem a necessidade de misturá-la com SQL a cada nova conexão com o banco de dados. A esse tipo de ferramenta, damos o nome de **ORM**, em português: Mapeamento Objeto-Relacional:

Dentro do ecossistema Java, a ferramenta ORM mais conhecida é a JPA, ou Java Persistance API, que é uma especificação criada com o intuito de simplificar a conexão de banco de dados em aplicações Java, a partir da definição de uma interface comum a ser utilizada para persistência de dados na linguagem.

O JPA surge, justamente com o objetivo de oferecer uma maneira mais fácil e padronizada e mapear objetos e tabelas de um banco de dados relacional, e fornecer uma API para realizar as operações **CRUD**, utilizando o Java.

Para entender melhor seu funcionamento, é importante familiarizar-se com alguns conceitos-chave da especificação, como:

- Entidade: é uma classe Java criada para representar um objeto armazenado em um banco de dados. Cada entidade é mapeada para uma tabela do banco.
- EntityManager: é a interface central do JPA, que é usada para realizar as operações de persistência, ou seja, o CRUD. É a EntityManager que gerencia o ciclo de vida das entidades dentro de uma aplicação Java.
- JPQL: é a linguagem de consulta da JPA, que permite escrever consultas customizadas se aproveitando da orientação a objetos, ou seja, é como se fosse uma mistura de Java e SQL, ou uma linguagem SQL orientada a objetos. A utilização da JPQL é interessante pois ela encapsula a chamada real para o banco de dados, e permite inclusive a troca do banco de dados da aplicação sem a necessidade de alteração no código-fonte.

É importante observar, no entanto, que a JPA é apenas uma especificação entregue pela linguagem e não uma implementação real de conexão a banco de dados, isto é, a JPA fornece uma interface que deve ser seguida para conexões de banco de dados utilizando ORMs, de maneira que esteja encapsulada a conexão com o banco de dados para reduzir o acoplamento do código.

Existem, portanto, várias implementações da JPA, que fazem conexões com bancos de dados baseando-se na especificação e que tornam a vida da pessoa desenvolvedora mais fácil, pois basta se preocupar em entender a JPA, e não necessariamente como funciona cada detalhe de todas as suas implementações.

Uma das implementações mais populares da JPA é o **Hibernate**, que será utilizada durante o decorrer deste curso. O Hibernate fornece uma biblioteca baseada no JPA e que permite o acesso ao banco de dados de forma simplificada, o que melhora a produtividade no ciclo de desenvolvimento, além de oferecer recursos avançados para modelagem de dados complexos e gerenciamento de persistência, como o suporte à herança e associações e a integração com o projeto Spring.

Além disso, o Hibernate é distribuído em Open Source, e conta com uma grande comunidade de pessoas desenvolvedoras que mantém a ferramenta, além de muita [documentação](https://hibernate.org/orm/documentation/6.3/) disponível para consulta.
# Anotações do hibernate
O Hibernate é uma das especificações mais utilizadas da JPA, e fornece diversas anotações para a utilização do Mapeamento Objeto-Relacional.

Vamos conhecer as principais delas?

### @Entity

Essa anotação é usada para marcar uma classe como uma entidade que deve ser mapeada para uma tabela de banco de dados. Cada entidade corresponde a uma tabela no banco de dados.

### @Table

Por padrão, o Hibernate usa o nome da classe como o nome da tabela no banco de dados, fazendo apenas a conversão de padrão de nomenclatura do PascalCase para o SnakeCase, que é o padrão utilizado no banco de dados, no entanto, caso seja necessário que o nome da classe seja diferente do nome da tabela no banco de dados, é possível utilizar esta anotação que permite personalizar o mapeamento entre a classe de entidade e a tabela de banco de dados. Com ela, você pode especificar o nome da tabela, o esquema e as restrições de chave primária.

```less
@Entity
@Table(name = "minha_tabela")
public class MinhaEntidade { ... }
```

### @Id

Marca um campo como a chave primária da entidade. O Hibernate usa essa anotação para identificar exclusivamente os registros no banco de dados.

### @GeneratedValue

Usada em conjunto com @Id, essa anotação especifica como a chave primária é gerada automaticamente. Pode ser usada com estratégias como AUTO, IDENTITY, SEQUENCE ou TABLE, dependendo do banco de dados.

```less
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

### @Column

Similar ao que acontece na anotação @Table, o Hibernate utiliza o nome dos atributos e os converte como sendo idênticos aos nomes das colunas no banco de dados, e caso seja necessário utilizar nomes diferentes,você pode configurar o nome da coluna, bem como seu tipo, e se ela é obrigatória.

```typescript
@Column(name = "nome_completo", nullable = false)
private String nome;
```

### @OneToMany e @ManyToOne

Usadas para mapear relacionamentos de um-para-muitos e muitos-para-um entre entidades. Elas definem as associações entre as tabelas no banco de dados.

```less
@Entity
public class Autor {
    @OneToMany(mappedBy = "autor")
    private List<Livro> livros;
}

@Entity
public class Livro {
    @ManyToOne
    @JoinColumn(name = "autor_id")
    private Autor autor;
}
```

### @ManyToMany

A anotação @ManyToMany é usada para mapear relacionamentos muitos-para-muitos entre entidades.

### @OneToOne

A anotação @OneToOne é usada para mapear relacionamentos um-para-um entre entidades.

### @JoinColum

A anotação @JoinColumn é usada para especificar a coluna que será usada para representar um relacionamento entre entidades. É frequentemente usada em conjunto com @ManyToOne e @OneToOne.

```less
@ManyToOne
@JoinColumn(name = "autor_id")
private Autor autor;
```

### @JoinTable

A anotação @JoinTable é usada para mapear tabelas de junção em relacionamentos muitos-para-muitos. Ela especifica a tabela intermediária que liga duas entidades.

```less
@Entity
public class Estudante {
    @ManyToMany
    @JoinTable(name = "inscricao",
               joinColumns = @JoinColumn(name = "estudante_id"),
               inverseJoinColumns = @JoinColumn(name = "curso_id"))
    private List<Curso> cursos;
}
```

### @Transient

A anotação @Transient é usada para marcar uma propriedade como não persistente. Isso significa que a propriedade não será mapeada para uma coluna no banco de dados.

```java
@Transient
private transientProperty;
```

### @Enumerated

A anotação @Enumerated é usada para mapear campos enumerados (enum) para colunas do banco de dados.

```java
@Enumerated(EnumType.STRING)
private Status status;
```

### @NamedQuery

Essa anotação é usada para definir consultas JPQL nomeadas que podem ser reutilizadas em várias partes do código.

```less
@Entity
@NamedQuery(name = "Cliente.findAll", query = "SELECT c FROM Cliente c")
public class Cliente { ... }
```

### @Cascade

A anotação @Cascade é usada para especificar o comportamento de cascata das operações de persistência, como salvar e excluir, em relacionamentos. Por exemplo, você pode configurar para que as operações de salvar em cascata afetem entidades relacionadas.

```less
@OneToMany(mappedBy = "departamento")
@Cascade(CascadeType.SAVE_UPDATE)
private List<Funcionario> funcionarios;
```

### @Embeddable e @Embedded

Essas anotações são usadas para representar tipos incorporados (embeddable types) que podem ser usados como componentes em entidades.

```less
@Embeddable
public class Endereco { ... }

@Entity
public class Cliente {
    @Embedded
    private Endereco endereco;
}
```

Além dessas anotações, há muitas outras que podem ser consultadas na [documentação de anotações do Hibernate](https://docs.jboss.org/hibernate/stable/annotations/reference/en/html/), e que facilitam muito o dia a dia de pessoas desenvolvedoras que usam o ORM.

# Properties do resource
```
spring.datasource.url=jdbc:postgresql://localhost/alura_series  
spring.datasource.username=postgres  
spring.datasource.password=12345678  
spring.datasource.driver-class-name=org.postgresql.Driver  
hibernate.dialect=org.hibernate.dialect.HSQLDialect  
  
spring.jpa.hibernate.ddl-auto=update // Indica que vai criar uma tabela e fazer o update.
```
# Tipos de geração de IDs
Ao trabalharmos com tabelas em bancos de dados, as chaves primárias são essenciais. Geralmente, criamos um identificador único ou ID para representar essas chaves da melhor forma possível.

As chaves primárias servirão para que cada entidade seja salva de forma única. Se quando trabalhamos com Java a JVM se encarrega de separar cada objeto em um lugar da memória, no banco de dados isso precisa ser configurado. E utilizar um ID costuma ser uma boa forma de fazer isso.

Temos várias formas de gerar IDs no banco de dados, e a JPA também nos ajuda com isso. Basta utilizar a anotação `GeneratedValue` e escolher a estratégia de geração do ID. Posteriormente vamos falar sobre essas diversas estratégias existentes, ok?!

Confira:

## Estratégia AUTO

A estratégia AUTO é a estratégia padrão de geração de ID JPA. Quando esta estratégia é utilizada, é a JPA que determina a melhor estratégia a ser usada, baseando-se no banco de dados específico que você está utilizando.

Aqui está um exemplo de como implementar a estratégia AUTO em um código:

```java
@Entity
public class Entidade {
 
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

}
```

Esta estratégia é bem prática, pois a JPA se encarrega de toda a lógica de geração de ID. No entanto, pode ser pouco flexível se você precisar de um maior controle sobre a geração de ID.

## Estratégia SEQUENCE

A estratégia SEQUENCE utiliza um banco de dados de sequência para gerar IDs. Com essa estratégia, a sequência é incrementada cada vez que um ID é gerado, garantindo que cada ID seja único.

Aqui está um exemplo de como implementar a estratégia SEQUENCE:

```java
@Entity
public class Entidade {
 
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private Long id;

}
```

Essa estratégia é particularmente útil para bancos de dados que suportam sequências, pois é muito eficiente e evita a possibilidade de colisões de ID.

## Estratégia IDENTITY

A estratégia IDENTITY faz uso de colunas de auto incremento disponibilizadas por alguns bancos de dados. Cada vez que uma nova entidade é inserida no banco de dados, a coluna de ID auto incrementada é atualizada para gerar um novo ID.

Exemplo de implementação desta estratégia:

```java
@Entity
public class Entidade {
 
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

}
```

Esta estratégia é útil se você estiver usando um banco de dados que suporta colunas de auto incremento, como MySQL ou SQL Server.

## Estratégia TABLE

Por último, temos a estratégia TABLE. Essa estratégia utiliza uma tabela de banco de dados separada para gerar IDs. Ela é menos eficiente do que as outras estratégias, mas tem a vantagem de ser portátil entre diferentes provedores de banco de dados.

Exemplo de implementação desta estratégia:

```java
@Entity
public class Entidade {
 
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE)
    private Long id;

}
```

Compreender essas estratégias e saber quando usar cada uma delas permitirá que você use a JPA de maneira mais eficiente, garantindo que seus dados sejam persistidos de maneira confiável e segura. Lembre-se, a escolha da estratégia de ID correta pode ter um grande impacto na eficiência da sua aplicação!
# Criando um repository
Trabalha com as principais operações do CRUD.
```java
public interface SerieRepository extends JpaRepository<Serie, Long> {  
}
```
