Precisamos armazenar dados em um computador, para que com eles sejam executados, manipulando os dados. Para armazenar os dados temos dois tipos: as variáveis e constantes.
## Variáveis e constantes
### Variáveis
Armazenam dados, mas podem ser substituídos, alterados. O dado pode ser alterados numa variável a qualquer momento. Pois ela é variável. Eles são repositórios para armazenamento temporário. 
### Constantes 
Não é permitido alterar as constantes, elas não variam, elas permanecem as mesmas, durante o fluxo.
## Operadores
### Atribuição
Normalmente usado pelo símbolo do igual, onde um elemento é colocado dentro de uma variável ou constante, ele é atribuído. Uma variável chamado a, tem 2, dentro dela, ou seja a é 2, então a = 2, sempre quando pedir a, vou ter 2, ao menos que ela seja alterada.
### Aritméticos
Fazem operações matemáticas, eles são os conhecidos pela matemática. + é soma, - é subtração, * é multiplicação, / é divisão.
Então por exemplo uma variável a é atribuído `((2+2)/2)*2` Então a é igual a 4. 
``a = ((2+2)/2)*2``. 

E como na matemática, os operadores seguem uma ordem de precedência. Sendo:
1. Parênteses.
2. Potência e Raízes.
3. Multiplicação e divisão.
4. Soma e subtração.
### Operadores relacionais/Operadores de comparação
Feitos para fazer comparações entre dois valores. Veja como exemplo um ponteiro de balança, o verde é o primeiro valor, o vermelho é o segundo, e as áreas vermelhas são as áreas em que o ponteiro vermelho precisa estar, para ser verdadeiro.
#### Igualdade
Os dois valores comparados são iguais. Seu símbolo normalmente é representado por (`"=="`).
![[Pasted image 20240713144532.png]]
#### Diferença ou desigualdade
Sempre dá true, quando são diferentes um do outro, o contrário do igual, pode ser representado por != e <>.
![[Pasted image 20240713144543.png]]
#### Menor
Verifica se um valor é menor que outro. Seu símbolo é <.
![[Pasted image 20240713144551.png]]
#### Maior
Verifica se um valor é maior que outro, representado pelo símbolo >.
![[Pasted image 20240713144558.png]]
#### Menor ou igual
Verifica se um valor é maior **ou** igual a outro. Seu símbolo é <=.
![[Pasted image 20240713144607.png]]
#### Maior ou igual
Verifica se um valor é maior **ou** igual a outro. Representado pelo símbolo >=.
![[Pasted image 20240713144614.png]]
## Linguagem não-tipada
A linguagem não exige que seja definido o tipo de dado, que variável vai receber. A variável se molda a partir do valor atribuído nela.
### Javascript
É um exemplo dela, você pode ver o tipo entendido com função typeof. Tipo ``typeof a``.  Se é inteiro(sem decimal) ou float(com decimal) é number. Se é um texto, ==**que se põe entre aspas duplas ou simples**==, o typeof vai retornar string. Se você multiplicar uma string por um número, ele vai dar certo e retornar um número. Então por exemplo ``"50"*2 = 100``. Esse modificação do texto para o número, para fazer a multiplicação se chama casting, que quando a linguagem modifica o tipo do dado. Mas se você colocar na string texto com letras e não número e fazer uma operação com eles, ele vai dar NaN, que significa not-a-number, não é um número.
## Tipos de dados
- **Int** ou **Inteiro**: Valor Inteiro, sem decimal.
- **Float** ou **Real**: Número com decimal.
Ambos são do tipo number.
- **String**: Texto.
- **Bool** ou **Boolean**: pode ser verdadeiro ou falso, true ou false, por exemplo, 5 == 6 é false, mas 5 == 5 é true.