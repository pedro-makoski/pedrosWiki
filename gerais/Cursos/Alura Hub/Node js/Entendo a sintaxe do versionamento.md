```sh
x.y.z
```
O z seria a atualização de correção, de resolução de bugs, por exemplo, também é chamado de patch version. O y além de correção de bugs, também são de pequenas atualizações do projeto, o y também é chamado de versão menor. O x é a versão maior, quando ele muda tende a haver alterações na sintaxe de uso do projeto. Isso é chamado de **versionamento semântico**.

No package.json, perceba que algumas versões começam com ^, isso indica que a pessoa que instalar os pacotes, vão obter o maior número menor. Ou seja se está documentado 7.0.0, e tiver 7.32.0 e 8.0.0, então a versão vai ser que vai ser instalado no npm install, vai ser a 7.32.0. Se você deixar o ^, pode haver problemas de incompatibilidade, do código. Então é uma boa prática tirar. 