```java
Collections.sort(lista);
```
Depende do pacote: java.util.Collections.
Para que uma lista de objetos tenha a possibilidade de comparar elementos, ela precisa implementar a interface ``Comparable<TipoComQueCompara>``. A qual tem um método: compareTo(outro TipoComQueCompara) que retorna -1 para que o elemento atual fique atrás, 0 para que empate e 1 para ir na frente.
# Definindo a partir de um atributo
```java
lista.sort(Comparator.comparing(Titulo::getNome));
```
Aqui ele faz a ordenação a a partir do atributo nome, mas pode ser diversos tipos de atributos.