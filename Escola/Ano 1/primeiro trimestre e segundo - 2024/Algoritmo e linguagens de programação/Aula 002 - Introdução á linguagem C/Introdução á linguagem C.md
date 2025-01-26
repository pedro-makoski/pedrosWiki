## Usando c na maquina

dowload do CodeBlock para windows:

[Code Blocks](https://www.fosshub.com/Code-Blocks.html?dwl=codeblocks-20.03mingw-setup.exe)

versão online - podemos usar o replit:

[Replit: The software creation platform. IDE, AI, and Deployments](https://replit.com/)

Google Playstore utilizando o replit:

[replit - Android Apps on Google Play](https://play.google.com/store/search?q=replit&c=apps)

Apple store utilizando o Replit:

[‎Replit: Idea to software, fast](https://apps.apple.com/us/app/replit-idea-to-software-fast/id1614022293)

lembrando que no replit é necessario criar uma conta, e falar que você quer criar usando c, depois clicar em novo projeto.

## O que é um compilador

Traduz a linguagem de programação(código fonte) para a de programa para a de computador(0 e 1), caso tenha nenhum erro. no caso do c, você pode compilar um projeto pelo Codeblock clicando na engrenagem. onde caso você passe o mouse vai aparecer escrito build, ao compilar, fazer o build clicando engrenagem, vai ser gerado o arquivo compilado com a extensão .o .
![[Captura de tela 2024-02-23 145823(2).png]]
## O que é Linkeditor

depois de ter compilado e gerado o arquivo o, o link editor talvez não seja necessário isso caso só for um arquivo com a extensão .o, mas caso tenha mais de um arquivo, o linkeditor vai juntar e gerar .exe - executavel, de acordo com todos os .o gerado.

## Rodar e gerar o .exe

Para rodar o código feito clica-se no botão verde em formato de triangulo, que vai gerar o .exe, de acordo com .o.
![[Captura de tela 2024-02-23 145823(1).png]]
## Código fonte e instrução

Código fonte é basicamente o código que você está escrevendo em C, já as instruções, são basicamente as instruções que da para o programa, fazer tipo imprima olá, mundo! `printf(”olá, mundo!”)` , ou inclua tal lib - `include`.

## Processo para rodar um programa

- Linguagem C - código fonte.
    - Compilador - gera arquivo .o
        - linkeditor
            - Gerar o .exe - software.

## Código da aula de hoje e suas devidas explicações

```c
#include "stdio.h"

void main()
{
    printf("Nome: Seu nome");
    printf("\nTurma: Info24");
    printf("\nData de Nascimento: 10/11/2009");
    printf("\nRua: Sua rua, numero da rua");
    printf("\nCidade: Colombo \t UF:PR");
    printf("\nCidade: Curitiba \t UF:PR");
    printf("\nCidade: Sao Jose dos pinhais \ UF:PR");
    getche();
}
```

## #include "stdio.h"

essa parte de código é basicamente responsável por incluir, uma das bibliotecas, mais importantes do C, o stdio.h ele basicamente na tradução seria standart input and output - padrão de entrada e saída, onde com essa função podemos construir, programas envolvendo entrada e saída, como por exemplo o printf que ele dá a saída, imprimindo na tela o que está nele.

### Void main()

Tudo que está dentro dessa função sem retorno tipado digamos assim(vamos entender isso melhor depois). Com o nome main, vai ser sempre executada é ali que vai estar tudo á ser executado, para colocar instruções dentro dela você coloca dentro dessas {} - chaves. o parênteses depois do main também é necessário ser colocado, mas por enquanto não trabalhamos nisso, isso vai ser trabalhado depois, coloque dentro das chaves, o que vai ser executado.

### printf(””);

imprimi na tela o que está dentro das aspas. não se esqueça de colocar o ponto e virgula no final.

### \\n

coloca se dentro das aspas, quando você quiser pular a linha.

### \\t

cria uma tabulação, colocando um espaço padrão para que fique o mais igual possível entre os itens abaixo dele, ficando de forma alinhada, ao menos que o espaço não deixe.

### Getche();

fala que o programa .exe, vai ser finalizado apenas quando for clicado em enter. não se esqueça do ponto e virgula - ;.

<aside style="background-color: rgba(0, 100, 100); padding:10px; border-radius:10px;"> ⚠️ Precisamos configurar mais uma coisa para podermos colocar acento, coisa que não aprendemos ainda, por isso seria bom não colocar acento na string porque se não vai dar erro.
</aside>

### Resultado

Nome: Seu nome 
Turma: Info24 
Data de Nascimento: 10/11/2009 
Rua: Sua rua, numero da rua 
Cidade: Colombo  UF:PR 
Cidade: Curitiba    UF:PR 
Cidade: São Jose dos pinhais UF:PR.

