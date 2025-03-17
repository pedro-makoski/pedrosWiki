Em Go você pode criar vários pacotes, cada pacote deve ter sua pasta própria. Você pode criar módulos em Go, para gerenciar os pacotes:
```go
go mod init <nome-do-pacote>
```
E depois importe, o outro pacote no main, ou em outro pacote assim:
```go
import (
"nomedoPacote/caminho/do/pacote"
)
```
Perceba que tudo, campos de uma estrutura, funções variáveis e afins são apenas obtidos no import, quando começa com maiúsculo o nome. 
E você também pode ao importar colocar outro nome para o pacote, colocando assim, por exemplo:
```go
import (
 p "nomedoPacote/caminho/do/pacote"
)
```
	É comum chamar o pacote o mesmo nome da pasta que ele está. 