Classe para escrita de arquivos, não se esqueça de fechar usando o método close.
```java
FileWriter escrita = new FileWriter("filmes.txt");  
escrita.write(movie.toString());  
escrita.close();
```