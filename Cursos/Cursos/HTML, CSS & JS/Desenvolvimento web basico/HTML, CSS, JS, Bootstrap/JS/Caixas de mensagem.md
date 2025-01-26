O JS possui 3 tipos de caixa de mensagem, sendo elas: alert, prompt e confirm. 
# Alert
Alerta o usuário de algo. Para fazer isso se usa o código:
```js
alert("O que vai aparecer no alert")
```
Com isso, vai aparecer uma tela, a qual deve ser clicada em OK, que aparecera também, para sair do popup. Também se diz em cima da mensagem, {link do site} diz.
# Prompt
```js
let nome = prompt("Qual o seu nome?");
```
Vai aparecer um popup pedindo o que colocar algo em uma caixa de texto, o que será pedido vai ser definido pelo parâmetro na função prompt. O que for digitado, será adicionar a variável a qual está o prompt.

Você pode inclusive:
```js
alert(prompt("Banana"))
```
Nesse código acima, ele executará, o prompt primeiro, e depois o alert. 
# Confirm 
```js
let opcao = confirm("Deseja encerrar?");
```
Aparecerá uma caixa, no mesmo estilo do alert, só que agora terá um botão de sim ou não, ok ou cancelar..., se você clicar em "ok", opção será true, agora se você clicar em cancelar, esc ou sair do popup clicando por fora, será false.
>[!info] Informação Util.
>Sempre quando você coloca vários alerts, prompts e confirms em sequência, os mesmos são executados em ordem, um após o outro, esperando para ir para o próximo, após o atual ser concluído.

Não é possível, fazer nada no site, até você finalizar a caixa de mensagem.