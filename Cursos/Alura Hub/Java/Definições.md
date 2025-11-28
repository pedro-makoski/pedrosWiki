# Diferença de JDK e JRE
- JRE: Para consumidores
- JDK: para programadores. Kit de desenvolvimento em Java.
# O que é JVM - Java Virtual Machine
Para seguir o principio WORE(Escreva uma vez, rode em qualquer lugar)
## Processo para rodar um arquivo
1. Código chava
2. Compilador Java
3. Gera um Bytecode/.class
4. Java Virtual Machine recebe o bytecode/.class, e roda de acordo com o sistema operacional.
# Operador de pré incremento e de pos incremento
O operador de pré-incremento (++variavel) aumenta o valor da variável em 1 antes de usar a variável em uma expressão. Aqui está um exemplo:
Já o operador de pós-incremento (variavel++) aumenta o valor da variável em 1 depois de usar a variável em uma expressão. Aqui está um exemplo:
# Convenções Java
A convenção de código do Java é um conjunto de regras recomendadas para escrever código Java que é fácil de ler, entender e manter. Essas regras foram definidas pela Oracle, a empresa que mantém a linguagem Java, e são amplamente seguidas pela comunidade de desenvolvedores Java.

Aqui estão algumas das principais convenções de código do Java:

- Nomes de classes devem começar com letra maiúscula e usar a convenção PascalCase (também conhecida como Upper CamelCase).
    
    - Exemplo: `MinhaClasse`.
- Nomes de métodos devem começar com letra minúscula e usar a convenção camelCase.
    
    - Exemplo: `meuMetodo()`.
- Nomes de constantes devem ser totalmente em letras maiúsculas, separadas por underline.
    
    - Exemplo: `MINHA_CONSTANTE`.
- Nomes de variáveis devem começar com letra minúscula e usar a convenção camelCase.
    
    - Exemplo: `minhaVariavel`.
- Todas as linhas de código devem ter no máximo 80 caracteres de largura para facilitar a leitura.
    
- Recomenda-se usar espaços em branco para separar operadores, palavras-chave e elementos de controle de fluxo.
    
    - Exemplo: `if (condicao) {`.
- Use comentários para documentar seu código, explicando o que ele faz e por que ele faz isso. Comentários devem ser claros e concisos.
    

Esse ponto anterior, referente aos comentários, é polêmico, pois muitas pessoas desenvolvedoras consideram que um bom código deve ser autoexplicativo. Se você utiliza nomes intuitivos e descritivos para suas variáveis e métodos, fica mais claro de entender o que está acontecendo no código, dispensando a necessidade de uso de comentários.

Essas são apenas algumas das convenções de código mais comuns no Java. Seguir essas regras pode tornar seu código mais fácil de ler e entender, o que pode economizar tempo e esforço no longo prazo.

É importante lembrar que as convenções de código são apenas `recomendações`, e não regras obrigatórias. No entanto, seguir essas convenções pode ajudar a criar um padrão consistente em todo o seu código Java e também torná-lo mais fácil de compartilhar e colaborar com outros desenvolvedores.
# Tipos
Em Java, assim como na maioria das linguagens de programação, existem os **tipos primitivos**, que são os tipos de dados mais básicos e fundamentais da linguagem. Eles são utilizados para representar valores simples e são definidos pela própria linguagem.

Java possui oito tipos primitivos diferentes: boolean, byte, char, short, int, long, float e double. Cada um desses tipos possui suas próprias características e faixa de valores permitidos, conforme será descrito a seguir.

### **boolean**

O tipo boolean é utilizado para representar valores lógicos, podendo assumir apenas dois valores: true ou false. É utilizado em expressões condicionais, loops e outros casos onde se deseja avaliar se uma determinada condição é verdadeira ou falsa.

### **byte**

O tipo byte é utilizado para representar valores numéricos inteiros de 8 bits. Ele possui uma faixa de valores de -128 a 127.

### **char**

O tipo char é utilizado para representar caracteres individuais. Ele pode armazenar qualquer caractere Unicode e é representado por aspas simples ('').

### **short**

O tipo short é utilizado para representar valores numéricos inteiros de 16 bits. Ele possui uma faixa de valores de -32.768 a 32.767.

### **int**

O tipo int é utilizado para representar valores numéricos inteiros de 32 bits. É um dos tipos de dados mais utilizados para representar números inteiros em Java e possui uma faixa de valores de -2.147.483.648 a 2.147.483.647.

### **long**

O tipo long é utilizado para representar valores numéricos inteiros de 64 bits. Ele é utilizado para representar valores inteiros muito grandes e possui uma faixa de valores de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807.

### **float**

O tipo float é utilizado para representar valores numéricos de ponto flutuante, ou seja, valores com casas decimais, sendo que ocupa 32 bits de memória. Ele pode representar números decimais com até sete dígitos e tem uma precisão limitada, o que significa que ele pode arredondar os números se eles forem muito grandes ou muito pequenos.

### **double**

O tipo double é similar o float, entretanto ele ocupa 64 bits de memória e pode representar números decimais com até 15 dígitos.
# Text Blocks
No Java 15. São Strings que estão entre três aspas duplas, e que funcionam assim como pre.