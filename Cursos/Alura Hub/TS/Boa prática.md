Sempre colocar enums e tipos em arquivos diferentes. E perceba que tipos eles retornam arquivos vázios, pois eles são usados apenas em tempo de transpilação. 
E outro ponto é que para converter uma string/int e afins num tipo da enum é só colocar um as e depois o tipo que você quer, e ele será convertido.
Para tipos e enums criar no formato do PascalCase.
# Problemas ao não usar módulos
- Problema de ordem de importação dos arquivos JS no html, gerando problemas de referência por não achar nomes.
- Conflitos de variáveis com nomes iguais em arquivos diferentes. 
- Falta de demonstração de onde vem um arquivo. 