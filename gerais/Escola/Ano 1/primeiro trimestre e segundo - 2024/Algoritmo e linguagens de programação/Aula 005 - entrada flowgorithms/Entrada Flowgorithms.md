## Entrada
serve para pedir um valor ao cliente, sem que se mecha nas entranhas do código.
### Como fazer no flow
- clique na flecha, aonde você quer colocar.
- clique em entrada, perto de saída.
- atribua uma variável para o input no campo de texto, a variável deve estar definida.
## Raiz quadrada no flow
apenas coloque dentro da função SQRT em maiúsculo exemplo: SQRT(4), mas você também pode fazer assim: 2^(1/2).
## Valor invertido de um valor que fica de 10 á 99.
o que fica na unidade vai para dezena, e o que fica na dezena vai para unidade.
<hr>
supondo que a seja o valor.
resto = a%10 - isso vai nos ajudar á obter a unidade.
resultadodiv = a/10 - vai nos ajudar á obter o primeiro termo, lembrando que para isso os valores tem que ser **inteiros**.
ainvertido = resto x 10 + resultado.
por exemplo.
a = 95
resto = 5
resultadodiv = 9 - pois por mais de 9,5, como valor é inteiro, ele só fica o valor antes da virgula.
ainvertido = 5x10 + 9 = 50 + 9 = 59.
## Teste de mesa
vamos supor que em um código você tenha criado as variáveis **x** , **y** e **soma**, do tipo inteiro, x fica como 5(supondo) e y como 10, a soma é x+y, portanto.

| linha | x   | y   | soma |
| ----- | --- | --- | ---- |
| 1     | 5   |     |      |
| 2     | 5   | 10  |      |
| 3     | 5   | 10  | 15   |
perceba que temos que colocar o valor do número da linha, e o que acontece, isso não é obrigatório, pode ser tudo numa linha só, cada linha seria uma instrução, sem considerar os que define.

| x   | y   | soma |
| --- | --- | ---- |
| 5   | 10  | 15   |

