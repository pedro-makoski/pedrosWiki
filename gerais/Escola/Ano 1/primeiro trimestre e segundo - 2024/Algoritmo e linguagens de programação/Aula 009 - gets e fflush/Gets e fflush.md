## Gets 
Metodo em c, de entrada string, ela não joga para a memória reserva(buffer) caracteres depois do espaço, como faz o scanf. 
```c
gets(nome);
```
O valor que está dentro de gets, é onde é colocado o valor de entrada. 
## Fflush(stdin)
Joga a memoria reserva(buffer) fora, isso e útil para quando um enter, por exemplo, ele vai para um scanf, sendo que é um char, que só pode ter uma caractere. 
```c
fflush(stdin);
```
