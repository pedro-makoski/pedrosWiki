Como o TS não é renderizado no navegador. Colocamos a parte do navegador em uma pasta chamada dist, de distribuição. E os arquivos TS em uma pasta chamada src. E para não ter que compilar toda hora, você pode criar na pasta raiz do projeto, o arquivo `tsconfig.json`, com o seguinte comando:
```json
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "./dist/js/",
        "noEmitOnError": true
    },
    "include": [
        "./src/**/*"
    ]
}
```
O target informa para que versão será convertido. O outDir, é para onde será levado os resultados. A que pasta ficará os resultados. O noEmitOnError é para não fazer o build quando tem um erro. E o include fica com todas as pastas que deve ser olhado por alteração. E então na pasta raiz, no terminal insira:
```sh
tsc -w
```
E assim ele olhará alterações sempre que o terminal estiver rodando, e fazerá o build, e levando para as pastas. 
