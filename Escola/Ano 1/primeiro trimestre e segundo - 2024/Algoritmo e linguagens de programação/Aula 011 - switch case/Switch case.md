Feito para fazer operações condicionais, para verificar cada caso que um valor pode ser igual. Em c só é possível saber com valores inteiros ou chares com 1 casa. Veja a estrutura básica:
```c
switch(variavel) {
	case 1:
		printf("1");
		break;
	case 2:
	case 22:
		printf("dois dois");
		break;
	default:
		printf("Não consigo responder isso");
}
```
Nesse caso o break serve para não acontecer todos os outros cases abaixo, quando uma condição for verdadeira. Quando tem 2 ou mais cases um em cima do outro serve como se fosse um ou. E o default serve para mostrar caso nenhum caso aconteça. 
