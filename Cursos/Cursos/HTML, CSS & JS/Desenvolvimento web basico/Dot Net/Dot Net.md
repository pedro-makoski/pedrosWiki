# C# ou C sharp
---
O processamento "por trás do site", feito de forma oculta e protegida, é realizado por essas tecnologias. E o C#, objeto de nosso estudo, é uma tecnologia Back-End.

Todos os dados utilizados em nossas aplicações, sejam elas Web, App ou Desktop, precisam ser armazenados/persistidos em um local para que possamos manipulá-los e apresentá-los aos nossos usuários e um dos principais recursos para esse fim é o Banco de Dados.   Durante este curso, aprenderemos os conceitos, a instalação e configuração, sua estrutura, armazenamento e a manipulação de dados.

O **C# (C-Sharp)** é uma linguagem de programação, orientada a objetos, mantida e desenvolvida pela Microsoft, e é cada vez mais utilizada no mundo.

O **C#** é compilado para Common Intermediate Language (CIL) em seguida é interpretado pela máquina virtual Common Language Runtime (CLR). Esta é uma linguagem de programação multi-paradigma fortemente tipada.
## Características da linguagem
- Linguagem visual.
- A extensão do código C# é ".cs".
- Dirigida por eventos.
- Possui os diversos paradigmas de programação como funcional, genérica, declarativa, orientada a objetos e imperativa.
- Em função da utilização de uma máquina virtual, é possível executar a aplicação do C# independente do sistema operacional. O Common Language Runtime (CLR) isola a aplicação do sistema operacional.
- Permite intercâmbio entre linguagens, através do uso de componentes.
- **Como ele é server side, tudo acontece ainda no servidor. Com isso, o programa C# pode determinar como a página vai se comportar, de acordo com os dados do usuário ou qualquer outra variável manipulando o HTML e o retornando ao final do processamento.**
- A linguagem C# Foi desenvolvida na Microsoft por uma equipe liderada por Anders Hejlsberg (responsável também pelo desenvolvimento do Delphi e Turbo Pascal), que inicialmente a denominou como linguagem Cool. O desenvolvimento iniciou em 1999 e a linguagem foi lançada em 2002 como parte da plataforma .NET.
## Como funciona
  O **C-Sharp** utiliza, para sua execução, a sua máquina virtual. Chamada de **CLR**(Common Language Runtime), uma espécie de computador virtual que gerencia a execução de programas que utilizam a plataforma “.net”.
### Processo de execução
- Um código gerado pelo C-Sharp é transmitido por um compilador de linguagem que o transforma em uma linguagem intermediária;
- Em seguida, o CRL captura esse código e, utilizando o compilador JIT (Just in Time), o converte em código de máquina;
	- **Somente após isso é que o código é efetivamente executado.**
  
Apesar de parecer um processo grande, burocrático e demorado, o desempenho da execução do código escrito em C-Sharp é excelente, além de seguro e eficiente.
### Net Core x Net framework
A **.NET Core** é a plataforma para desenvolvimento criada e mantida pela Microsoft como um projeto de código aberto.
Sendo uma solução mais leve e modular que o .NET Framework e pode ser usada em diferentes sistemas operacionais como Windows, Mac e Linux.
Assim, atualmente podemos desenvolver aplicações usando a .NET Core ou o .NET Framework, sendo o segundo, apenas suportado no Windows.
- Net Core: 
	- Tem suporte a windows, mac e linux.
	- Desenvolvimento baseado em microserviços(abordagem da programação que divide em partes menores com códigos e responsabilidades independentes).
	- Caso esteja usando conteiners Docker. 
	- Foco em alto desempenho e sistemas escalonáveis.
- Net Framework:
	- Caso sua aplicação já seja NET framework.
	- Sua aplicação usa bibliotecas de terceiros. 
	- Utiliza tecnologias que não estão disponíveis no NET core. 
	- Sua aplicação usa uma ferramenta que não está disponível ao NET core.
Em nosso texto, trabalharemos com o **.net core** como plataforma e como IDE o Visual Studio Code, principalmente pela característica de plataforma cruzada, funcionando nos diferentes sistemas operacionais.
## Sintaxe ``C#``
---
**A sintaxe do C Sharp** é bem semelhante à da **Linguagem C** em alguns aspectos, pois foi baseada em C.
  
Para que o seu código funcione, os arquivos devem ser finalizados com a extensão ".cs".

Podemos criar aplicações de linha de comando e aplicações web, por exemplo, com o VS Code, C Sharp e .net core.
### Impressão 
![[Pasted image 20241223111802.png]]
```c#
// See https://aka.ms/new-console-template for more information

//Console.WriteLine("Hello, World!");

  

using System;

  

namespace helloWorld

{

    class program {

        static void main(string[] args) {// Uma função static é uma função que pode ser executada, sem instaciar a classe. 

            Console.WriteLine("Olá, mundo");//Imprime na tela olá mundo e pula a linha. 

        }

    }

}
```
## Iniciar projeto
Insira no terminal:
```
dotnet new console
```
## Rodar projeto
Insira no terminal:
```
dotnet run
```
## Tipos
O tipo da variável deve vir antes do nome dela em sua declaração, conforme abaixo:
```c#
{
int primeironumero = 50;
string primeirotexto = “Olá Mundo”;
float primeironumerofloat = 50.32;
}
```
Para definir mais de uma variável do mesmo tipo você pode:
```c#
int var1 = 10, var2 = 20, var3 = 30;
```
### Os tipos são
- Int: armazena números inteiros. 
- String: armazena cadeias de caracteres ou textos. Em aspas duplas. 
- Float: armazena variáveis com pontos flutuantes, com casas decimais. Os valores terminam com f, ao ser definido.
	- Double: termina com d(não é necessário).
		- Decimal: termina com m.
- Char: armazena valores de apenas um caractere. Em aspas simples.
- Bool: valores lógicos, true ou false.
## Comentários 
Os comentários são linhas ou trechos de código que não são executados nas aplicações e servem para documentar informações como por exemplo o autor do código, data de criação, motivo da criação entre outros.

Na linguagem C Sharp, podem ser realizados na mesma linha, chamados de inline e em bloco, chamados de multilines.

### Inline(Utilizado // para iniciar)
```c#
//o que estiver a frente barra-barra é ignorado
```
### Multiline (com `/*` para iniciar o bloco e `*/` para encerrar o bloco)
```c#
/*
    esse aqui
    é um comentário
    de várias linhas
*/
```
## Operadores
Durante nossos programas, precisamos fazer operações, atribuições, comparações e para isso, utilizamos os operadores.
### Aritméticos 
Operadores unários ++ (incremento), -- (decrementar), + (além)e - (menos). Operadores binários * (multiplicação), / (divisão), % (restante), + (adição) e - (subtração)

|   |   |   |
|---|---|---|
|A + B|Adição|Soma de A e B|
|A - B|Subtração|Subtração de A e B|
|A * B|Multiplicação|Multiplicação de A e B|
|A / B|Divisão|Divisão de A e B|
|A % B|Resto|Resto da divisão de A e B|
|A++|Incremento pós-fixado|Incremento da variável ao final da operação, em caso de impressão da instrução o resultado é o valor antes do incremento|
|++A|incremento pré-fixado|Incremento da variável ao final da operação, em caso de impressão da instrução o resultado é o valor após o incremento|
|A--|Decremento pós-fixado|Decremento da variável ao final da operação, em caso de impressão da instrução o resultado é o valor antes do decremento|
|--A|Decremento pré-fixado|Decremento da variável ao final da operação, em caso de impressão da instrução o resultado é o valor após o decremento|
```c#
int i = 3;
Console.WriteLine(i);   // saída: 3
Console.WriteLine(i++); // saída: 3
Console.WriteLine(i);   // saída: 4

double a = 1.5;
Console.WriteLine(a);   // saída: 1.5
Console.WriteLine(++a); // saída: 2.5
Console.WriteLine(a);   // saída: 2.5

int i = 3;
Console.WriteLine(i);   // saída: 3
Console.WriteLine(i--); // saída: 3
Console.WriteLine(i);   // saída: 2

double a = 1.5;
Console.WriteLine(a);   // saída: 1.5
Console.WriteLine(--a); // saída: 0.5
Console.WriteLine(a);   // saída: 0.5

Console.WriteLine(+4);     // saída: 4
Console.WriteLine(-4);     // saída: -4
Console.WriteLine(-(-4));  // saída: 4

Console.WriteLine(13 / 5);    // saída: 2
Console.WriteLine(-13 / 5);   // saída: -2
Console.WriteLine(13 / -5);   // saída: -2
Console.WriteLine(-13 / -5);  // saída: 2

Console.WriteLine(13 / 5.0);       // saída: 2.6
int a = 13;
int b = 5;
Console.WriteLine((double)a / b);  // saída: 2.6

Console.WriteLine(5 % 4);   // saída: 1
Console.WriteLine(5 % -4);  // saída: 1
Console.WriteLine(-5 % 4);  // saída: -1
Console.WriteLine(-5 % -4); // saída: -1

Console.WriteLine(5 + 4);       // saída: 9
Console.WriteLine(5 + 4.3);     // saída: 9.3

Console.WriteLine(47 - 3);      // saída: 44
Console.WriteLine(5 - 4.3);     // saída: 0.7
```
### Comparação 
| Exemplo | Nome               | Resultado                 |
| ------- | ------------------ | ------------------------- |
| A < B   | Menor que          | A é menor que B?          |
| A > B   | Maior que          | A é maior que B?          |
| A <= B  | Menor ou igual que | A é menor ou igual que B? |
| A >= B  | Maior ou igual que | A é maior ou igual que B? |
```c#
Console.WriteLine(7.0 < 5.1);   // saída: False
Console.WriteLine(5.1 < 5.1);   // saída: False
Console.WriteLine(0.0 < 5.1);   // saída: True

Console.WriteLine(double.NaN < 5.1);   // saída: False
Console.WriteLine(double.NaN >= 5.1);  // saída: False

Console.WriteLine(7.0 > 5.1);   // saída: True
Console.WriteLine(5.1 > 5.1);   // saída: False
Console.WriteLine(0.0 > 5.1);   // saída: False

Console.WriteLine(double.NaN > 5.1);   // saída: False
Console.WriteLine(double.NaN <= 5.1);  // saída: False

Console.WriteLine(7.0 <= 5.1);   // saída: False
Console.WriteLine(5.1 <= 5.1);   // saída: True
Console.WriteLine(0.0 <= 5.1);   // saída: True

Console.WriteLine(double.NaN > 5.1);   // saída: False
Console.WriteLine(double.NaN <= 5.1);  // saída: False

Console.WriteLine(7.0 >= 5.1);   // saída: True
Console.WriteLine(5.1 >= 5.1);   // saída: True
Console.WriteLine(0.0 >= 5.1);   // saída: False

Console.WriteLine(double.NaN < 5.1);   // saída: False
Console.WriteLine(double.NaN >= 5.1);  // saída: False
```
### Operadores lógicos
Os operadores a seguir executam operações lógicas com operandos bool.
1. Operador unário ! (negação lógica).
2.  Operadores Binary & (and lógico), | (OR lógico) e ^ (exclusivo lógico). **Esses operadores sempre avaliam os dois operandos.**
3. Operadores Binary && (and lógico condicional and) e || (OR lógico condicional) . **Esses operadores avaliam o operando à direita apenas se for necessário.****

| Exemplo       | Nome                   | Resultado |
| ------------- | ---------------------- | --------- |
| !true         | Negação lógica         | false     |
| true & true   | Lógico condicional and | true      |
| true I false  | Lógico condicional or  | true      |
| false ^ false | Exclusivo lógico       | true      |
| true && false | Lógico condicional and | false     |
| true II false | Lógico condicional or  | true      |
```c#
bool passed = false;
Console.WriteLine(!passed);  // output: True
Console.WriteLine(!true);    // output: False

bool SecondOperand()
{
    Console.WriteLine("Second operand is evaluated.");
    return true;
}

bool a = false & SecondOperand();
Console.WriteLine(a);
// Output:
// Second operand is evaluated.
// False

bool b = true & SecondOperand();
Console.WriteLine(b);
// Output:
// Second operand is evaluated.
// True

Console.WriteLine(true ^ true);    // output: False
Console.WriteLine(true ^ false);   // output: True
Console.WriteLine(false ^ true);   // output: True
Console.WriteLine(false ^ false);  // output: False
```
### Operadores de igualdade
| Exemplo | Nome         | Resultado          |
| ------- | ------------ | ------------------ |
| A == B  | Igualdade    | A é igual a B      |
| A !=  B | Desigualdade | A é diferente de B |
## Estruturas de controle
Nossas aplicações têm seus comportamentos definidos pelas regras de negócio, e essas regras são traduzidas por meio das estruturas de controle.

No C Sharp temos duas estruturas de controle no C Sharp, a primeira IF ELSE, onde temos duas possibilidades de caminho de acordo com o atendimento ou não da restrição definida no IF e a outra, o Switch, onde de acordo com o valor da restrição definida, temos os diversos caminhos definidos nos Cases, conforme veremos em seguida.

### Estrutura IF/ELSE
```c#
bool condition = true;

if (condition)
{
    Console.WriteLine("The variable is set to true.");
}
else
{
    Console.WriteLine("The variable is set to false.");
}

Exemplos:

Ex 1.:

int m = 12;
int n = 18;

if (m > 10)
    if (n > 20)
    {
        Console.WriteLine("Result1");
    }
    else
    {
        Console.WriteLine("Result2");
    }

Ex 2.:

int m = 12;
int n = 8;

if (m > 10)
{
    if (n > 20)
        Console.WriteLine("Result1");
}
else
{
    Console.WriteLine("Result2");
}
```
## Switch case
```c#
  
public class Example
{
   public static void Main()
   {
      int caseSwitch = 1;

      switch (caseSwitch)
      {
          case 1:
              Console.WriteLine("Case 1");
              break;
          case 2:
              Console.WriteLine("Case 2");
              break;
          default://Caso nenhum case seja atendido.
              Console.WriteLine("Default case");
              break;
      }
   }
}
// The example displays the following output:
//       Case 1
```
```c#
using System;

public enum Color { Red, Green, Blue }

public class Example
{
   public static void Main()
   {
      Color c = (Color) (new Random()).Next(0, 3);
      switch (c)
      {
         case Color.Red:
            Console.WriteLine("The color is red");
            break;
         case Color.Green:
            Console.WriteLine("The color is green");
            break;
         case Color.Blue:
            Console.WriteLine("The color is blue");
            break;
         default:
            Console.WriteLine("The color is unknown.");
            break;
      }
   }
}
```
## Estrutura de repetição
Quando falamos de estruturas ou laços de repetição**,** temos o **for, while, do while** e o **for each.**
### for
A instrução for é definida com as seções de **inicializador**, **condição** e **iterador**:
```c#
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

Resultado da execução:

0
1
2
3
4
```
### While
A instrução **while** executa uma instrução ou um bloco de instruções enquanto uma expressão booliana especificada é avaliada como true. Como essa expressão é avaliada antes de cada execução do loop, um loop while é executado zero ou mais vezes.
```c#
int n = 0;
while (n < 5)
{
    Console.WriteLine(n);
    n++;
}

Saída
0
1
2
3
4
```
**A qualquer momento dentro do bloco de instruções while, interrompa o loop usando a instrução break.**
```c#
int n = 0;
while (n < 5)
{
    if (n>2)
        break;
    Console.WriteLine(n);
    n++;
}

Saída

0
1
2
```
Você pode seguir diretamente para a avaliação da expressão while usando a instrução continue. Se a expressão for avaliada como true, a execução continuará na próxima instrução do loop. Caso contrário, a execução continuará na primeira instrução após o loop.
```c#
while (n < 5)
{
    if(n==2)
    {
        n++;
        continue;
    }
    Console.WriteLine(n);
    n++;
}

Saída

0
1
3
4
```
### Do...while...
O **Do While**, tem quase o mesmo objetivo do While, somente com a diferença de que a validação da repetição, ocorre somente ao final da primeira execução, e com isso, independente da restrição utilizada, a primeira vez, sempre é executada. Todas as demais funcionalidades como break e continue, funcionam da mesma forma como no While.
```c#
int n = 0;
do
{
    Console.WriteLine(n);
    n++;
} while (n < 5);

Saída

0
1
2
3
4
```
### For Each
**A instrução for each executa uma instrução ou um bloco de instruções para cada elemento em um conjunto de informações, como uma lista.**
```c#
var fibNumbers = new List<int> { 0, 1, 1, 2, 3, 5, 8, 13 };//List<tipo>. 
int count = 0;
foreach (int element in fibNumbers)//int element é cada elemento da interação
{
    Console.WriteLine($"Elemento #{count}: {element}");
    count++;
}
Console.WriteLine($"Número de elementos: {count}");

Saída
Elemento #0: 0
Elemento #1: 1
Elemento #2: 1
Elemento #3: 2
Elemento #4: 3
Elemento #5: 5
Elemento #6: 8
Elemento #7: 13
Número de elementos: 8
```
## CRUD
Para que nossos dados sejam persistidos e que possamos acessá-los sempre que quisermos, sem a preocupação de encerrarmos a aplicação, precisamos persisti-los em bancos de dados.

Uma característica interessante do dot net core, é o code first, onde criamos inicialmente os modelos no código em C# e depois, com base nesses códigos, o Entity Framework Core cria os objetos na base de dados, atendendo assim os requisitos da aplicação.

![[Pasted image 20241223160518.png]]
execute: 
```terminal
dotnet tool install --global dotnet-ef
```
![[Pasted image 20241223161058.png]]

https://www.youtube.com/watch?v=RL0zqw6CqfA
![[Pasted image 20241223161544.png]]
database    Commands to manage the database.
dbcontext   Commands to manage DbContext types.
migrations  Commands to manage migrations.

Adicionar migration.
dotnet ef migrations add Inicial
Adiciona propriedades, inclusive de todos os valores da coluna, adicionados no arquivo, e adicionado no arquivo AppDbContext.
```c#
public class Produto {

    public int ProdutoId {get; set;}

    public string Nome {get; set;}

    public decimal Preco {get; set;}

    public int Estoque {get; set;}

}
```
```c#
//Arquivo AppDbContext. 
using Microsoft.EntityFrameworkCore;

  

namespace dbcodefirst {

    public class AppDbContext:DbContext {

        public DbSet<Produto> Produtos {get;set;}

  

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        {

            optionsBuilder.UseSqlServer("Data Source=DELLG15PEDRO;" + "Initial Catalog=Produtos;Integrated Security=True; TrustServerCertificate=True;");//No source se coloca o nome do servidor, no Catalog se coloca o nome da database. 

        }

    }

}
```
Rodar:
dotnet ef database update: estabelece a tabela do migrations no banco de dados. 

