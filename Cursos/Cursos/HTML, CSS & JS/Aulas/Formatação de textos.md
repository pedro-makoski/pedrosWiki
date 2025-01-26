---
Capitulo: 8
Data: Invalid date
Modulo: "1"
tags:
  - HTML
  - semântica
---
# Tags para formatação no HTML

| Não use | Use    | Para                                                                                        | como usar                                           |
| ------- | ------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| b       | strong | para dar **destaque**(bold).                                                                | `<strong>seu texto para ficar em destaque</strong>` |
| i       | em     | para dar _ênfase_(itálico)                                                                  | `<em>seu texto para ficar em ênfase</em>`           |
|         | del    | para demonstrar que não é mais ~~aquilo~~, e sim outra coisa                                | `<del>seu texto para ficar deletado</del>`          |
|         | ins    | para demonstrar que o texto esta inserido naquele lugar, que tem que estar ali.             | `<ins>seu texto para ficar inserido<ins>`           |
|         | mark   | Deixa texto marcado, por padrão em amarelo                                                  | `<mark>texto que vai ficar marcado</mark>`          |
|         | small  | Deixar texto pequeno, informação importante. como se fosse as letras pequenas do contrato.  | `<small>seu texto para ficar pequeno</small>`       |
| big     |        | para deixar seus textos grandes                                                             | `<big>seu texto grande</big>`                       |
|         | sup    | deixar texto sobrescrito.                                                                   | `<sup>o texto sobrescrito</sup>`                    |
|         | sub    | deixar texto subscrito                                                                      | `<sub>o texto subscrito</sub>`                      |
|         | code   | deixar frases, ou melhor código mono espaçadas, ou seja letras com a mesma largura          | `<code>sua frase monoespassada</code>`              |
|         | pre    | Utilizada para deixar com a mesma a quantidade de espaços e Enters, ou seja sem formatação. | `<pre>sua escrita não formatada</pre>`              |

- **abbr**: `<abbr title=”Curso em vídeo”>CeV</abbr>`: define que o texto dentro da tag é uma abreviação onde o parametro title define qual é o nome completo da abreviação, tipo o nome completo de CeV é curso em vídeo.
- **q**: `<q>é uma citação</q>`: é uma citação ele coloca a escrita entre aspas demonstrando que é uma citação, só que simples.
- **blockquote**: `<blockquote cite=”fonte.da/citação”>é uma citação<blockquote>`: define que é uma citação de algum lugar onde no parâmetro da cite, você coloca de onde você tirou a informação.
- **bdo**: ela pode inverter algum texto caso você coloca no parâmetro dir como rtl - direita para esquerda então por exemplo `<bdo dir=”rtl”>leon</bdo>` isso vai ficar no site como noel, pois inverteu.