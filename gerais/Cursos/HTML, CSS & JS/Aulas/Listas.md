---
Capitulo: 9
Data: Invalid date
Modulo: "1"
tags:
  - HTML
---
# Listas ol

possuem uma ordem, por exemplo:

1. t
2. e
3. s
4. t
5. e

1. t
2. e
3. s
4. t
5. e

1. t
2. e
3. s
4. t
5. e

```HTML
<ol type="a" start="2">
	<li>t</li>
	<li>e</li>
	<li>s</li>
	<li>t</li>
	<li>e</li>
</ol>
```

pelo parâmetro **type** podemos definir como vai funcionar a lista em ordem se vai ser em letras minúsculas(a), maiúsculas(a), números romanos minúscula(i), ou maiúscula(I) ou se vai ser em números(1), e você também pode definir o **start**, que basicamente define quando vai começar a lista(sempre em números).

Para definir os itens usamos o li onde definimos os itens da lista, e você pode abrir e fechar como no exemplo de cima ou só abrir assim:`<li>item 1`.

# Listas ul

  

Não possui ordem é essa daqui:

- t
- e
- s
- t
- e

  

  

Onde você pode definir como type em:

- circle
- disk
- square

e podemos juntar listas tipo colocar uma lista ol dentro de uma ul que está dentro de outra ul.

```HTML
<ol type="a" start="2">
	<li>t</li>
	<ul type="disk">
		<li>1
		<li>2
		<li>3
	</ul>
	<li>e</li>
	<li>s</li>
	<li>t</li>
	<li>e</li>
</ol>
```

esse exemplo fica assim:

1. t
    - 1
    - 2
    - 3
2. e
3. s
4. t
5. e

# Lista de definição

basicamente é uma lista para a definição de coisas tipo a do dicionário:

onde o **dl** - é a lista

o **dt** - é o termo

e o **dd** é a descrição

```HTML
<dl>
	<dt>pedro</dt>
	<dd>é um nome</dd>
</dl>
```

pedro

é um nome