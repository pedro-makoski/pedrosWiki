Ao escrever testes automatizados é importante pensar em como organizar o código de cada teste, de forma que fique bem fácil de entender cada cenário sendo testado. Para facilitar esse processo, existem alguns padrões de organização do código de cada cenário de teste que podem ser utilizados para ajudar nesse objetivo.

Dois padrões são os mais comuns na organização de testes automatizados: **"Arrange, Act, Assert"** (conhecido como **AAA** ou **Triple A**) e **"Given, When, Then"** (conhecido como **GWT**). Ambos os padrões têm o objetivo de tornar os testes mais legíveis e fáceis de entender, promovendo uma abordagem estruturada na criação de cenários de teste.

## Arrange, Act, Assert (AAA)

O padrão AAA é amplamente utilizado e consiste em três etapas distintas:

**a)** _Arrange_ (Preparar): Nesta etapa, são realizadas todas as configurações iniciais necessárias para que o cenário de teste possa ser executado. Isso pode incluir a criação de objetos, definição de variáveis, configuração de ambiente e qualquer outra preparação necessária para que o teste seja executado em um estado específico.

**b)** _Act_ (Agir): Nesta fase, a ação que se deseja testar é executada. Pode ser a chamada de um método, uma interação com a interface do usuário ou qualquer outra operação que seja o foco do teste.

**c)** _Assert_ (Verificar): Na última etapa, os resultados são verificados em relação ao comportamento esperado. É onde se avalia se o resultado obtido após a ação está de acordo com o que se esperava do teste. Caso haja alguma discrepância entre o resultado real e o esperado, o teste falhará.

## Given, When, Then (GWT)

O padrão GWT também é conhecido como **padrão BDD** (_Behavior-Driven Development_). Ele foi projetado para criar testes com uma linguagem mais próxima da forma como os cenários são discutidos entre as pessoas que fazem parte do projeto, incluindo pessoas técnicas, como desenvolvedores e testadores, além de clientes e usuários da aplicação. O padrão GWT tem as seguintes etapas:

**a)** _Given_ (Dado): Nesta etapa, é descrito o cenário inicial ou o contexto do teste. São definidas as condições iniciais necessárias para a execução do cenário de teste.

**b)** _When_ (Quando): Aqui, a ação específica que está sendo testada é executada. É a etapa em que a ação do usuário ou do sistema acontece.

**c)** _Then_ (Então): Nesta etapa, os resultados esperados são verificados. São definidos os critérios de sucesso para o cenário de teste, e o teste é aprovado ou reprovado com base nesses resultados.

Ambos os padrões tornam os testes mais fáceis de ler e entender, mesmo para pessoas não familiarizadas com o código ou com a lógica de negócios do sistema. Além disso, a estruturação dos testes em etapas claras e definidas torna mais fácil para as pessoas desenvolvedoras localizarem e corrigirem problemas em caso de falha.