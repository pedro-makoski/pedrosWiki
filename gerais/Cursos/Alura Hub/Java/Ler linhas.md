````java
import java.util.Scanner;  
  
public class Ex004 {  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  // Istancia um scanner, a partir da entrado do sistema, geralmente do terminal.
  
        System.out.print("Digite seu filme favorito: ");  
        String filme = sc.nextLine(); // Lê até o final linha(\n) e atribui em filme  
        System.out.print("Qual o ano de lançamento?: ");  
        int anoDeLancamento = sc.nextInt();  // Le o valor inteiro e atribui na variavel.
        System.out.print("Diga sua avaliação para o filme: ");  
        double avaliacao = sc.nextDouble();  // Le o valor double e coloca na avaliação.
  
        System.out.println(filme);  
        System.out.println(anoDeLancamento);  
        System.out.println(avaliacao);  
    }  
}
````
A classe Scanner do Java é utilizada para ler dados de entrada em um programa Java. Esses dados podem ser lidos a partir de várias fontes de entrada, como arquivos, fluxos de entrada, Strings e até mesmo a entrada do usuário através do teclado, como vimos em aula.

Ela oferece uma série de métodos para ler dados de diferentes tipos, como inteiros, números de ponto flutuante, strings e caracteres.

Para utilizar a classe Scanner, primeiro é necessário importá-la no início do seu programa. Provavelmente ao incluir a mesma no código, a IDE já vai sugerir o import. Esse import ficará como descrito abaixo:

```java
import java.util.Scanner;
```

Veja um exemplo básico de como utilizar a classe Scanner para ler dados distintos:

```csharp
public class ExemploScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();
        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();
        System.out.print("Digite o valor que pretende investir esse mês: ");
        double valor = scanner.nextDouble();

        System.out.println(nome + " que tem " + idade + " anos, irá investir R$ " + valor + " esse mês.");

        scanner.close();
    }
}
```

Nesse exemplo, primeiro importamos a classe Scanner e, em seguida, criamos uma instância dela passando o objeto `System.in`' como parâmetro para indicar que queremos ler a entrada do usuário pelo teclado.

Depois, usamos o método `nextLine()` para ler uma linha de texto. Além desse, utilizamos também o `nextInt()` para ler um número inteiro e o `nextDouble()` para ler um número decimal.

Você pode encontrar a lista completa de métodos na [documentação oficial do Java](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html).