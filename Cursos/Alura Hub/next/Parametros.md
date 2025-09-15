Ao navegar pela internet, você já deve ter acessado páginas nas quais a URL possuía o caractere `?` seguido de algum texto. Esse texto é chamado de Search Params, ou parâmetros de busca.

Por exemplo, ao fazer uma busca no Google por "Next.js”, a URL muda de "[https://www.google.com/"](https://www.google.com/%22) para "[https://www.google.com/search?q=Next.js&texto-aleatorio-enorme"](https://www.google.com/search?q=Next.js&texto-aleatorio-enorme%22).

A parte "/search" indica qual recurso estamos utilizando de "[https://www.google.com"](https://www.google.com"/) e tudo que vem depois do "?" é considerado um parâmetro de busca, que possui uma estrutura de chave-valor. Neste caso, o "q" é a chave e "Next.js" é o valor.

O texto aleatório enorme depois de "Next.js" são os outros parâmetros que o Google usa para nos apresentar os melhores resultados. Os parâmetros são separados pelo caractere "&" e respeitam a estrutura "chave=valor".