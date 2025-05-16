dentro do src coloque a pasta assets, ela será servida pelo Angular com seus arquivos. Por isso é importante colocar a pasta assets com esse nome e dentro de src.
Depois coloque no link da imagem `/assets/`, não precisa colocar /src.
Se não funcionar corretamente no Angular JSON insira em assets:
```json
{

                "glob": "**/*",

                "input": "src/assets",

                "output": "assets"

              },

              {

                "glob": "**/*",

                "input": "src/favicon.ico"

              }
```