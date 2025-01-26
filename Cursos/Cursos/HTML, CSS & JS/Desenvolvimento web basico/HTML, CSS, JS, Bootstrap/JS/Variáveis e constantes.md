![[Pasted image 20241005151316.png]]
>[!info] Importante
>No JS, todo final de instrução deve conter “**;**” (ponto e vírgula). Isso é obrigatório. Porém, caso você se esqueça, o JS tenta inserir de forma automática.
>Este processo (inserção automática do ponto e virgula)  é chamado de **ASI** (_Automatic Semicolon Insertion_). Mas isso não é uma boa prática e pode causar alguns erros. Por isso, lembre-se sempre de inserir o ponto e vírgula sempre que ele for necessário.
# Var
Uma variável, pode ser definida e depois atribuída, ou definida e atribuída juntamente.
```js
var nome;
nome = "Pedro";
var idade = 14; 
```
A var é antiga, é ultrapassada agora o EcmaScript 6 temos o Let e o Const. 
# Let
Resolve problemas de escopo e segurança. A variável let, só pode ser usadas dentro do scopo, a qual ela está presente. E diferente do let, ela não pode ser lida ou atribuída antes de definida. 
# Const
Mesma segurança, e funcionalidade de escopo do let. Porém, ela é constante, apenas pode ser lida. Ela não consegue mudar para outro valor, diante do código mais de uma vez. Variáveis const, podem ser nomeadas, **==apenas com letras maiúsculas.==**  

Um fato interessante é que se uma variável const, receber um objeto, ao modificar uma variável secundária desse objeto, ou seja um elemento, ela funcionará corretamente, pois é uma variável secundária. Mas de qualquer forma é impossível modificar a estrutura. 
![[Pasted image 20241005152812.png]]
**Algumas estruturas de variáveis como objetos e arrays, mesmo quando declaradas como constantes, podem ainda ter seu conteúdo modificado, mas não sua estrutura.**

Isso acontece porque a variável do tipo constante controla apenas o seu nível primário de dados, que é sua própria estrutura. Portanto, os valores de cada item da estrutura primária podem ser modificados sem problema.
# CamelCase
Trata-se da ideia de definir a variável quando é composta por duas palavras, com a primeira letra da segunda palavra Maiúscula. 
- Caracteres especiais, como cedilha, til e acento
- Palavras reservadas, como “while” ou “console”
- Iniciar o nome com um número, como “9aluno” (os números são permitidos em qualquer outra posição, menos no início)


