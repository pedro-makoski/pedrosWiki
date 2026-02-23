1) Explique, com suas palavras, a diferença entre classe e objeto.
Classe é um modelo, com seus atributos e métodos. Enquanto um objeto é uma instancia de um modelo, com valores próprios para cada atributo.
2) O que são atributos de uma classe?
Atributos são características de um objeto, definida no modelo(classe). 
3) O que são métodos de uma classe?
São ações a qual um objeto pode realizar, também definida na classe. Essa ação pode ou não estar relacionada com os atributos do objeto.
4) Explique, com suas palavras, o que é um construtor em Python
Tem o papel de construir um objeto, é nesta função que é geralmente inicializado os atributos da classe com os valores para o objeto.
5) O que é herança simples em Python?
Capacidade de uma classe, chamada classe filha, herdar atributos e métodos de uma classe pai. 
6) Em herança simples, qual palavra-chave é usada para acessar métodos da
classe base?
super(), a qual é uma função e deve ser executada através dos parênteses.
7) O que caracteriza a herança múltipla em Python?
Quando existem um conjunto de classes com tamanho maior que 1 como classes herdadas. Se fosse herança multipla, seria: class classe_filha(classe_pai_1, clase_pai_2).
8) Qual é o propósito do método super()?
Acessar métodos da classe pai. Funciona corretamente apenas quando a herança é simples.
9) Qual é a sintaxe para criar uma classe que herda de outra em Python?
``class <nome_classe_filha>(<nome-das-classes-pais-separadas-por-virgula>)``
10) `Qual é o principal benefício da herança em Python?`
Permite reduzir o código, quando se tem um conjunto de classes com atributos e métodos em comum. 
11) O que é polimorfismo em programação orientada a objetos?
Capacidade de criar funções, chamadas de funções polimorficas, que não dependem de objetos específicos mas sim de contratos. Assim um conjunto de objetos, com funções que realizam funções diferentes, porém com a mesma assinatura pode ser executada pela mesma função.
12) Explique como o polimorfismo se relaciona com a herança em Python. É possível implementar polimorfismo sem herança?
Através da sobrescrita de métodos com a mesma assinatura. É possível, sim, implementar polimorfismo sem herança, pois o polimorfismo depende apenas de um contrato em comum, que pode ou não ser realizado usando herança.
13) O que são métodos sobrescritos e como eles ajudam no polimorfismo em
Python?
Métodos sobrescritos são métodos da classe filha, que sobrescrevem alguma função da classe pai, mantendo a mesma assinatura. 
14) Cite uma vantagem de utilizar a Sobrescrita.
Reusabilidade: a classe pode usar um método da classe pai, mas ainda assim fornecer uma implementação própria do método.
15) Cite uma vantagem de utilizar o Polimorfismo
Extensabilidade: Permite com que o código se adapte de forma mais rápida, com implementações de outros objetos que seguem o mesmo contrato.
16) Defina encapsulamento
Capacidade de ocultar ou não ocultar métodos para acessos de fora do escopo da classe. 
17) Como realizar encapsulamento em Python?
Ocultando atributos iniciando com dois underscores(``__``). E depois se necessário, criando métodos get e set para trabalhar com esses atributos de forma pública.
18) Explique @property e ``@<attr>.setter`` em python:
São decorators com o objetivo de alterar o comportamento do método que fica abaixo dos mesmos. Enquanto o @property altera o comportamento da função para que ela seja executada quando acessada como atributo, e o ``@<attr>.setter`` altera o comportamento da função para que seja executada quando alterada como atributo.  
