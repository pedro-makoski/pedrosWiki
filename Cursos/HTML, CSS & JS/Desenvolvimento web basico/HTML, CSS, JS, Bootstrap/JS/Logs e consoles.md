# Threads
Tarefa que algum serviço realiza. A maioria dos threads são executados em segundo plano, e muitas vezes não vezes, não sabemos o que ou se está acontecendo. 
# Log e console
Para conseguir identificar o segundo plano que está acontecendo. A linguagem de programação pode enviar para o sistema um Log, que significa registro. E o local a qual recebemos esses logs, registro é chamado de console.
Por isso pedimos para o console fazer um registro, com esse comando:
```js
console.log(“Houve uma falha ao salvar o arquivo”);
```
Mas existe outras formas além do .log, temos:
- Log: mensagem genérica, a mais comumente utilizada.
- Info: faz um log do tipo "informação".
- Debug: registra-se uma depuração do código. 
- Warm: registra-se um log, do tipo "Alerta".
- Error: registra-se um log do tipo erro.
O console do navegador, onde fica registrado os logs, fica na aba console, em inspecionar no Chrome.  
No Chrome, é separado em abas os logs, temos de erro, warnings, info e verbose(Debug).
![[Pasted image 20241005141321.png]]
![[Pasted image 20241005141344.png]]
No console pode ter uma seta para a direita(>) informando que é entrada. E uma seta para a esquerda, informando que é saída. 