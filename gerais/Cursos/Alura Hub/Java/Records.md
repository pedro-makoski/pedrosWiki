Lançado oficialmente no Java 16, mas disponível desde o Java 14 de maneira experimental, o **Record** é um recurso que permite representar uma classe imutável, contendo apenas atributos, construtor e métodos de leitura, de uma maneira muito simples e enxuta.

Esse recurso se encaixa perfeitamente quando precisamos criar um objeto apenas para representar **dados**, sem nenhum tipo de comportamento.

Para se criar uma classe imutável, sem a utilização do Record, era necessário escrever muito código. Vejamos um exemplo de uma classe que representa um telefone:

```java
public final class Telefone {

    private final String ddd;
    private final String numero;

    public Telefone(String ddd, String numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    @Override
    public int hashCode() {
        return Objects.hash(ddd, numero);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (!(obj instanceof Telefone)) {
            return false;
        } else {
            Telefone other = (Telefone) obj;
            return Objects.equals(ddd, other.ddd)
              && Objects.equals(numero, other.numero);
        }
    }

    public String getDdd() {
        return this.ddd;
    }

    public String getNumero() {
        return this.numero;
    }
}
```

Agora com o Record, todo esse código pode ser resumido com uma única linha:

```java
public record Telefone(String ddd, String numero){}
```

Muito mais simples, não?!

Por baixo dos panos, o Java vai transformar esse Record em uma classe imutável, muito similar ao código exibido anteriormente.

Mais detalhes sobre esse recurso podem ser encontrados na [documentação oficial do Java](https://docs.oracle.com/en/java/javase/16/language/records.html).