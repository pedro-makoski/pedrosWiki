Na pasta raiz do seu usuário, deve existir uma pasta chamada Go. E ela deve ter a seguintes pastas
```
├───bin
├───pkg
└───src
```
No bin tem os códigos binários, os executáveis gerados dos nossos códigos. No pkg tem os pacotes, ou seja bibliotecas, que vamos instalando ao longo do processo. E no src vai estar os seus códigos. 

Lembrando que o local em que fica esta pasta, pode ser alterada usando comandos:
Enquanto o terminal estiver aberto: 
```sh
set GOPATH=C:\meu\caminho\go
```
Isso só funciona enquanto o terminal está aberto. 
Mas se quiser alterar permanentemente, mude o caminho do Path em Go. 
