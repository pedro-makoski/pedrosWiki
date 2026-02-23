Possibilidade de gravar dados em um arquivo txt, pelo menos neste momento.
Também pode se ler dados em um arquivo txt. Isso é bom pois, por padrão as variáveis são armazenas em uma memória volátil, que se perde, ao fechar o programa. Já os arquivos txt, na manipulação de arquivos, podem ser simplesmente a qualquer momento resgatados.
# Processo do programa
1. Abrir o arquivo.
2. Verificar se funcionar a abertura do arquivo.
	1. Se sim:
		1. Gravo as informações.
		2. Fecho o arquivo.
	2. Se não: mandar uma mensagem de erro.
```c
#include "stdio.h"

void main()
{
    FILE *in; // Tipo de dado FILE, a partir disso se cria o in. 
    in = fopen("arquivo.txt", "w");//Abrir o arquivo. Chamado arquivo.txt. O segundo parâmeto com "w" para escrever, criar, ou gravação de write. O r de read, ler o arquivo. E a de all, que vai fazer os dois anteriores. 
    if(in != NULL) {//Verifica se retornou alguma coisa, por isso diferente de null, se fosse ao contrário deu erro.
        fprintf(in, "Pedro Makoski %d", 5+5);//fprint, grava dados em um arquivo, como primeiro parâmetro o arquivo, e o segundo parâmetro, a mensagem que vai estar lá dentro. Funciona de forma análoga ao printf, só que ele mostra no arquivo. O resultado seria Pedro Makoski 10
        fclose(in);//fecha o arquivo.
    } else {
        printf("Problemas na abertura do arquivo");
    }
}

```
No prompt de comando se colocar o arquivo, ir procurar o arquivo. 
digite dir {nome do arquivo}, ele retornará também a quantidade de bytes, que é a quantidade de letras.
## Tipos de abertura
- W: apenas escreve, toda vez que executa ele sobrescreve um novo.
- R: lê o arquivo. 
- A: Ao invés de sobrescrever o arquivo, ele incrementa mais, podendo fazer os dois.
## Uma melhor forma de escrever o código
```c
#include "stdio.h"

void main()
{
    FILE *in;
    in = fopen("arq.txt", "w");
    if(in == NULL) {
        printf("Problemas na abertura do arquivo");
        return;
    }
    
    fprintf(in, "Pedro Makoski - teste");
    fclose(in);
}
```
## Ler arquivo
```c
#inclide "stdio.h"

void main() 
{
	FILE *in;
	in = fopen("nomedoarquivo.txt", "r");

	if(in == NULL) {
		printf("Problema na abertura do arquivo");
		return; 
	}

	int ret = 0, value; // ret é o valor que vai cuidar quando for o final do arquivo, e o value é o valor do arquivo.
	while(ret != EOF) {//enquanto não for final de arquivo. EOF - end of file
		ret = fscanf(in, "%d", &value); // pega um valor do arquivo, do tipo inteiro e joga para o value, e o ret para ver se dado não é EOF. O fscanf vai identificar como um número até encontrar um \n ou espaço. 
		if(ret != EOF) {
			printf("%d\n", value);//Mostra valor por valor do arquivo. 
		}
	}

	fclose(in);
}
```
# Comando dos cmd
- cd .. : volta uma pasta para trás.
- cd {nome da pasta}: vai para esta pasta, que está depois da atual.
- dir: mostrar os arquivos da pasta. 
- type {nome do arquivo}: mostrar o conteúdo do arquivo.
