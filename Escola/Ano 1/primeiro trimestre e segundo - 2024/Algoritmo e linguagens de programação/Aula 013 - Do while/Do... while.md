É como se fosse um [[Loop while em C ou flow]]. Porém a primeira iteração é feita sem verificar a condição do while, caso a condição do while seja verdadeira ele repete a iteração. Você pode usar isso por exemplo pedindo para usuário falar s para continuar e n para não continuar, e a variável ser definida no final da primeira iteração. 
![[Pasted image 20240924160327.png]]
No lugar do faça, você coloca a condição, se for verdadeira vai repetir o do, se for falsa, ele continua. 
# Em c
```c
do{
	//código de cada iteração 
} while(/*Condiçao, se for verdadeira volta para cima, se for falsa termina o do*/);
```
Não se esqueça do ponto e vírgula no while, depois dos parênteses. 