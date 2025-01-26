# Pacotes
Os programas Go são organizados em pacotes. Um pacote é uma coleção de arquivos de origem no mesmo diretório que são compilados juntos. Funções, tipos, variáveis ​​e constantes definidas em um arquivo de origem são visíveis para todos os outros arquivos de origem dentro do mesmo pacote.
# Módulos
Um repositório contém um ou mais módulos. Um módulo é uma coleção de pacotes Go relacionados que são lançados juntos. Um repositório Go normalmente contém apenas um módulo, localizado na raiz do repositório. Um arquivo chamado `go.mod`lá declara o caminho do módulo : o prefixo do caminho de importação para todos os pacotes dentro do módulo. O módulo contém os pacotes no diretório que contém seu `go.mod`arquivo, bem como subdiretórios desse diretório, até o próximo subdiretório que contém outro `go.mod`arquivo (se houver).

Note que você não precisa publicar seu código em um repositório remoto antes de poder compilá-lo. Um módulo pode ser definido localmente sem pertencer a um repositório. No entanto, é um bom hábito organizar seu código como se você fosse publicá-lo algum dia.

Para criar um módulo execute o comando `go mod init nome/do/modulo`
# Colocando no PATH o módulo
Execute o comando 
```
go install nomeDoModulo
```
Caso você esteja no mesmo local do arquivo, esses comandos serão equivalentes juntamente com o visto antes:
```
go install .
go install
```
Ele colocará na variável de ambiente path padrão do go em um pacote. Se quiser mudar em qual lugar fica os pacotes instalados defina aqui
```
go env -w GOBIN=/somewhere/else/bin
```
Se quiser voltar ao padrão o lugar dos pacotes em Go, escreva:
```
go env -u GOBIN
```
# Importação do pacote
Você pode informar o nome do módulo:
```go
import "exemplo/usuario/hello"
```
Ou se o pacote estiver dentro de uma pasta:
```go
import "exemplo/usuario/hello/nomedapasta"
```
# Go mod tidy 
Quando você tem uma dependência em um módulo externo, você precisa baixar esse módulo e registrar sua versão no seu `go.mod`arquivo. O `go mod tidy`comando adiciona requisitos de módulo ausentes para pacotes importados e remove requisitos em módulos que não são mais usados.
# Excluir todos os módulos instalados
Use o comando:
```go
go clean -modcache
```
Ele limpará todos os módulos disponíveis no caminho Go. 

