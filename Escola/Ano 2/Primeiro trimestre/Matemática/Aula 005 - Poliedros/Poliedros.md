# Definição
É todo sólido formado por poligonos que:
- Não possui dois ou mais poligonos no mesmo plano
- Tem dois e semente dois poligonos na mesma aresta.
# Elementos dos poliedros
f - face - conexão entre vértices
v - vértice - um ponto no espaço
a - aresta - conexão entre dois pontos
# Poliedro convexo e não convexo
## Convexo
Quando todas conexões entre dois pontos está contida no poligono.
### Relação de Euler
Somente para convexos.
$$
V+F=A+2
$$
ou
$$
V+F-A =2
$$
## Não convexo
O contrário do convexo.
# Prisma
Tem sempre duas bases paralelas(polígonos iguais). E suas faces laterais são quadrilateras. 
## Prismas espéciais
Apenas o cubo ou hexaedro e paralelepipido.
Obs: o nome do primeiro se dá em função do nome da base.
### Diagonal
#### Do cubo
$$
d = a\sqrt{3}
$$
#### Do paralelepipido 
$$
d = \sqrt{a^2+b^2+c^2}
$$
## Prisma regular
Quando sua base é um poligono regular.
## Planificação do prisma
Também pode funcionar para outros poliedros.
Permite visualisar o poliedro em um plano.
## Cálculo da área do prisma
É a soma das áreas de todos os lados.
Ab -> área da base
Al  -> área lateral
At  -> área total
OBS: Ab depende do polígono
$$
Al = b*h
$$
$$
Ab = 2*a*b
$$
## Volume do prisma
Medido em cm3 ela é o quanto cabe dentro do poliedro.
$$
V = Ab*h
$$
Área da base depende do polígono e h é altura do prisma.
# Pirâmides
Definição: pirâmide é a região do espaço limitada pelos segmentos com extremidade em V e outros no poligonos situados num plano. 
## Medidas da pirâmide
h - altura
V - vértice(aonde todos os pontos se encontram)
b  - base
a - aresta da pirâmide - a conexão entre o plano da base e o V
apôtema da pirâmide - altura da face da pirâmide
f - face da pirâmide(não da base)
apotema da base - apenas em bases regulares

## Classificação da pirâmide
- Depende do polígono da base
- Por exemplo, se a base é um triângulo chama-se de pirâmide triangular. 
- Pirâmide regulares - pirâmide de base regular
## Área da pirâmide
Al - Área lateral
Ab - Área da base
At - Área total
$$
At = Ab+Al*nº~de~faces
$$
## Volume da pirâmide
$$
Vp = \frac{Ab*h}{3}
$$
Pirâmide obliqua - pirâmide inclinada
## Tronco da pirâmide
![[Pasted image 20250724162718.png]]
Seja alpha um plano e beta um plano paralelo a alpha, que conta a pirâmide P numa altura h
Se separarmos a pirâmide obtemos o tronco da pirâmide.
![[Pasted image 20250724162251.png]]
### Relações validadas
$$
\frac{aresta'~base}{aresta~base}=\frac{h'}{h}
$$
Esse ' presente no primeiro termo indica que se fala da pirâmide superior.
$$
\frac{Ab}{AB}=\begin{pmatrix}
\frac{h'}{h}
\end{pmatrix}^2
$$
Sendo Ab a área da base menor e AB a área da base maior. 
$$
\frac{V'}{V}=\begin{pmatrix}
\frac{h'}{h}
\end{pmatrix}^3
$$
Sendo V o volume.
### Área do tronco
$$
Al = \frac{(b+B)*h}{2}*nº~de~faces
$$A área da base depende do polígono. 
$$
At = Ab+AB+Al
$$
### Volume do tronco
$$
V = \frac{h}{3}*(AB+Ab)+\sqrt{AB*Ab}
$$
