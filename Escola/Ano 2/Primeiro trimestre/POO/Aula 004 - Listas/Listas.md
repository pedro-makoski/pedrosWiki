- Semelhante aos vetores em C
- A lista possui diversos valores de tipos diversos
- Coleção ordenada de elementos
- É sempre mantido a ordem, o tipo da lista não precisa ser especificado. 
# Exemplo
```python
lista = [1, 2, 3 ,4, 5, "Bom dia"]
```
# Operações com lista
## Acessar valor da lista
```
lista[POS_DA_LISTA_QUE_COMECA_DO_ZERO]
```
## Alterar valor da lista
``` 
lista[POS_DA_LISTA_QUE_COMECA_DO_ZERO] = NOVO_VALOR
```
## Adicionar
```
lista.append(VALOR_A_SER_ADICIONADO_NO_FINAL_DA_LISTA)
```
## Remover
```
lista.remove(VALOR_A_SER_REMOVIDO)
```
## Concatenar
```
lista_concatenada = lista1 + lista2
```
# Loop for
```python
for elemento in lista:
	# para cada elemento da lista faça isso
```
Essa lista também pode ser uma range(QUANTIDADE_DE_VALORES)
Ou também range(VALOR_INICIAL, VALOR_FINAL)
