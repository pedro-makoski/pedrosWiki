Ao desenvolver testes automatizados para aplicações Java, é comum usar frameworks e bibliotecas que facilitam a criação de testes mais eficientes e confiáveis. O Mockito é uma dessas bibliotecas amplamente utilizadas para testes em Java. Ele fornece recursos poderosos para criar objetos simulados (_mocks_) e objetos espiões (_spies_) que ajudam a isolar o código sob teste e verificar seu comportamento.

Embora os conceitos de mocks e spies sejam semelhantes no Mockito, eles diferem em alguns aspectos importantes.

## Mock

Um mock é um objeto **simulado** que substitui um objeto real durante a execução dos testes. Ele é criado usando o Mockito e permite definir comportamentos esperados e verificar interações com o objeto simulado. Os mocks são úteis quando você deseja isolar o código sob teste de suas dependências, fornecendo respostas predefinidas para os métodos chamados durante os testes.

Ao usar um mock, você especifica quais métodos do objeto simulado devem ser chamados e qual será a resposta. Por exemplo, você pode configurar um mock para retornar um valor específico quando um determinado método for chamado. Isso permite que você simule cenários diferentes e verifique como o código reage a eles. Além disso, os mocks fornecem métodos para verificar se determinados métodos foram chamados e quantas vezes foram chamados durante a execução do teste.

## Spy

Um spy, por outro lado, é um objeto **real** que é usado durante os testes, mas também permite a observação de seu comportamento. Ao contrário dos mocks, os spies mantêm o comportamento original do objeto sendo espionado, a menos que seja especificamente substituído.

Ao criar um spy usando o Mockito, você está usando uma instância real do objeto em questão, mas também pode definir comportamentos específicos para seus métodos. Isso significa que o código original do objeto será executado, a menos que você especifique uma substituição para um determinado método.

Os spies são úteis quando você deseja testar partes específicas de um objeto real sem perder o comportamento original do objeto. Você pode substituir apenas os métodos relevantes para seus testes, enquanto o restante do objeto continua funcionando normalmente. Os spies também permitem verificar interações reais com o objeto sob teste, como quantas vezes um método foi chamado.

Ao utilizar o Mockito para testes automatizados em Java, você pode escolher entre mocks e spies, dependendo das necessidades específicas do seu teste. Ambas as abordagens são úteis e têm seus usos adequados. A escolha entre mock e spy depende do cenário de teste e dos requisitos específicos.