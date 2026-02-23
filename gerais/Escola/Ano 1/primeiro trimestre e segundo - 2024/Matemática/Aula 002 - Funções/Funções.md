Grandezas mensuráveis e a relação entre elas. 
# Receita
Pode-se calcular uma receita, considerando que x seria a quantidade vendida, y seria o preço total, e z seria o preço de cada quantidade. 
$$
y = x.z
$$
# A noção de função como relação entre conjuntos
Uma função de relação, a qual todo elemento tem uma função que leva a outro conjunto, ou seja, se a está em função a B. Todo o elemento de A tem uma função que liga com algum elemento de B. Perceba que não é possível um elemento A ter ligação com mais de um elemento de B. E que para estar em função, é necessário que todos os elementos de A estejam ligados ao de B, mas não o contrário. 

Para todos elementos de A sem exceção, existe um único elemento a B, onde ele corresponde.

Se eu não tenho correspondente não é uma função. 
F: A -> B
Função de A em B.
Essa função pode ser descoberta através de uma formula, que se aplique aos conceitos de função, onde todo elemento de A colocado na fórmula vira um elemento de B, que deve sempre existir.
# Domínio, contra domínio e imagem 
Domínio seria onde temos o conteúdo que todos deveram ter ligação com algum elemento do contra domínio, que não precisa ter ligação com todos os elementos do domínio. A imagem, por sua vez, são os elementos do contra domínio que fazem ligação com o domínio. Uma observação que as vezes o contra domínio pode ser o mesmo que a imagem. 
# Gráficos
Usado para representar o x e o y nas retas do plano cartesiano. Só se pode criar uma linha se for uma reta, e que preencha todos os valores. SE usa uma bolinha quando um valor é finito, mas quando passa os limites do plano cartesiano não se usa uma bolinha. 
# Funções de segundo grau
São as que tem um valor elevado ao quadrado. A raiz de um gráfico é quando o ponto está na coordenada 0. Podemos ter lados crescentes ou seja aumenta x aumenta y, e decrescente: aumenta x diminui y. 

O ponto mínimo é o menor ponto gráfico de segundo grau. Funções de segundo grau tem um lado que a partir de determinado número x começa a ser positivo no y, e no lado negativo o mesmo.
# Taxa media de variação de função 
Feita para descobrir o quanto varia o y, enquanto x aumenta em média. 

| X1  | X2  | DeltaX = X2 - X1 | Y1 = f(X1) | Y2  | DeltaY = Y2 - Y1 |
| --- | --- | ---------------- | ---------- | --- | ---------------- |
| -4  | -3  | 1                | 16         | 9   | -7 |     
| -3  | -2  | 1                | 9          | 4   | -5 |     
| -2  | -1  | 1                | 4          | 1   | -3 |     
| -1  | 0   | 1                | 1          | 0   | -1 |     
| 0   | 1   | 1                | 0          | 1   | 1 |     
| 1   | 2   | 1                | 1          | 4   | 3 |     
| 2   | 3   | 1                | 4          | 9   | 5 |    
| 3   | 4   | 1                | 9          | 16  | 7 |     
# Funções afim
Com o seguinte formato:$$y= ax+b$$
Elas são lineares, ou seja uma reta. 
O b é o valor de y, quando o x é 0, o b é chamado de coeficiente linear. E o a é o coeficiente angular, que indica o quanto vária entre dois y, quando a variação entre dois x é igual a 1.
# Funções quadráticas
$$
f(x) = ax^2+bx+c
$$
Quando o a é positivo é um U, uma cara feliz, quando é negativo ele é uma boca triste, veja na imagem:
![[Pasted image 20241025151021.png]]
Para calcular a raiz(quando o y é 0), você usa a formula baskhara:
$$
x = \frac{-b\pm \sqrt{b^2-4ac}}{2a}
$$
Quando o x é 0, o y vai ser c. 
## Além da formula de Bhaskara temos também a soma e produto das raizes
onde
$$
x_1+x_2 =\frac{-b}{a}
$$
$$
x_1x_2= \frac{c}a{}
$$
Assim usando um pouco de lógica podemos identificar as raízes. 
## Forma fatorada da equação quadrática
$$
y = ax^2+bx+c =a(x-x_1)(x-x_2)
$$
Isso ajuda a deixar mais fácil e simples a função quadrática. 
## Quando o c é 0 
Você pode colocar em evidência, e fazer cada termo da multiplicação como 0. Assim, por exemplo:
$$
ax^2+bx = x(ax+b) \rightarrow x^{I} = o~\&\&~x^{II} = \frac{-b}{a}
$$
## Vértice
O ponto máximo ou ponto mínimo do gráfico da equação quadrática. Se a < 0 ponto máximo, já se a > 0 vai ser ponto mínimo. 

Para descobrir as coordenas x e y do vértice você pode:
$$
Vx = \frac{-b}{2a}
$$
$$
Vx = \frac{-\Delta}{4a}
$$
Então 
$$
V = \left(\frac{-b}{2a};\frac{-\Delta}{4a}\right)
$$
# Função mista ou função definida por mais de uma sentença
---
Essa função pode ter diferentes coeficientes angulares, em diferentes períodos de tempo. 
Pode ser representada assim, por exemplo:
$$
f(x) = \begin{cases}
1,~se~~x>5 \\
-1,~se~~x\le 5
\end{cases}
$$
O resultado seria tipo um gráfico, onde antes do 5, seria -1, constante, depois do 5, mudaria repentinamente, para o 1. 
Importante: a função não pode retornar dois y, para o mesmo x. Ou seja, quando x>5 ou x<=6, não pode pois quando for 6, daria dois y, para o mesmo x.
# Funções modulares
## Módulo de um número real
$$
\sqrt{(-3)^2} = \sqrt{9} = 3
$$
$$
qdo~x\ge 0 \rightarrow \sqrt{x^2} = x
$$
$$
qdo~x< 0 \rightarrow \sqrt{x^2} = -x
$$
$$
|x| = \begin{cases}
x, se~x\ge0\\
-x, se~x<0
\end{cases}
$$
O módulo de um número real não negativo é igual ao próprio número. O módulo de um número real negativo é igual ao oposto desse número. O módulo de um número real qualquer é maior ou igual a 0.
$$
|-2| =2;|0| =0;|3|=3;|3-\pi|=-(3-\pi)=\pi-3
$$
Obs:
$$
\sqrt{x^2}=|x|
$$
## Propriedades
### Propriedade 1
$$
\forall x \in R, |x| =0
$$
$$
se~x>0, |x| = x >0
$$
$$
se~x<0, |x|= -x>0
$$
### Propriedade 2
$$
|x|^2 = x^2, \forall x\in R
$$
Se x>=0, então |x| = x, então 
$$
|x|^2=|x|.|x|=x.x=x^2
$$
Se x < 0, |x| = -x, então
$$
|x|^2=|x|.|x|=(-x).(-x)=x^2
$$
### Propriedade 3
$$
se~a\in R_+ e~|x|\le a\rightarrow -a \le x \le a; |x|\le a \rightarrow |x|^2 \le a^2 \rightarrow x^2 \le a^2\rightarrow x^2-a^2\le0
$$
E
$$
se~a\in R_+ e~|x|\ge a\rightarrow x \le -a~e~x\ge a; |x|\ge a \rightarrow |x|^2 \ge a^2 \rightarrow x^2 \ge a^2\rightarrow x^2-a^2\ge0
$$
## Função modular
Quando um valor é negativo ele retorna para um valor positivo, e quando é positivo aponta para outro negativo. 
### Como fazer um gráfico
#### 1º passo
f(x) = x a parte que x>=0. 
#### 2º passo
f(x) = -x, só a parte em que x < 0.
#### 3º passo
Unir os dois gráficos.
f(x) = |x|
![[Pasted image 20241216181655.png]]
### Translação Vertical
$$
y = |x|+k
$$
f(x) = |x|+1
Se x>=0, então |x| = x => f(x) = x+1(gráfico 1).
Se x<0, então |x| = -x => f(x) = -x+1(gráfico 2).
### Translação Horizontal
$$
y = |x+k|
$$
f(x)=|x-2|
$$
como~|x-2| =\begin{cases}
x-2, se~x\ge 2\\
-x+2, se~x<2
\end{cases}
$$

1) y = x-2, quando x >=2
2) y = -x+2, quando x<2
O módulo vai ser o contrário sempre quando o valor é menor que 0, por isso, verificamos a partir de
x-2<0 então x<2. Usando as inequações.  
# Importante
$$
\forall~signfica~para~todo
$$
# Função exponencial
Dado por:
$$
f(x) = a^x
$$
Quando o a é 0 < a < 1, a reta é decrescente, pois valores com casas decimais ao ser multiplicado por eles mesmos fica menor. e quando o a > 1, a reta é para cima. Quando o valor é negativo pode não funcionar, pois em casos quebrados como x = 1/2 ou 1/4, vai ser feito a raiz quadrada de um valor negativo, então não é muito convencional usar a como valor negativo, e nem a como 0, pois quando o x for negativo ele vai dividir por 1/0, e quando o a for 0 ele pode ser qualquer valor. 

Também podemos fazer translação vertical:
$$
y = a^x+k
$$
Assim ele se movera a partir de cá pela vertical ou seja para cima ou para baixo. 
## Juros compostos
Dados pela função:
$$
montanteFinal = valorInicial*(1+taxaDeAumento)^{tempo}
$$

# Função logarítmica  
Supondo um caminhão de 100.000,00 reais, sobre uma depreciação de 10% ao ano(a.a). Depois de quanto tempo o valor do caminhão será de 20.000 reais? 

Ano 1: 90% x 100.000 = 90.000
Ano 2: 90% x 90.000 = 81.000
O valor do veículo evolui da seguinte forma:
- Ano 1: 100.000*(0,9) 
- Ano 2: 100.000*(0,9^2)
- Ano 3: 100.000*(0,9^3)
Para responder a pergunta de cima, devemos resolver a equação:
$$
10000*(0,9)^x = 20000 \rightarrow 0,9^x = 0,2 \rightarrow x = log_{0,9}0,2
$$
## Definição
Sendo a e b números reais positivos, com **a diferente de 1** chama se logaritmo de na base a. O expoente x ao qual se deve elevar a base de modo que a potência a^x seja igual a b.
$$
x = Log_ab \Longleftrightarrow a^x = b
$$
Dizemos que a é a base, b é o logaritmando e x é o logaritmo. 
Exemplos:
$$
Log_28 = 3 \longleftrightarrow 2^3 = 8
$$
$$
Log_39 = 2 \longleftrightarrow 3^2 = 9
$$
$$
Log_2\frac{1}{4} = -2 \longleftrightarrow 2^{-2} = \frac{1}{4}
$$
$$
Log_55 = 1 \leftrightarrow 5^1 = 5
$$
$$
Log_41 = 0 \leftrightarrow 4^0 = 1
$$
## Convenções importantes
Base omitida é 10.
$$
Log~~x = Log_{10}x
$$
Cuidado:
$$
Log_a1=0 \longleftrightarrow a^0 = 1
$$
$$
Log_aa=1 \longleftrightarrow a^1 = a
$$
$$
a^{Log_ab}=b 
$$

