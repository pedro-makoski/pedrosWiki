A estrutura try e catch é simples, basicamente no try ele tenta, se der algum erro, ele vai pro catch. O catch pode ter entre parênteses um parâmetro que tem as informações do erro, como a message, passada nas instruções do erro. 
```ts
elementoFormulario.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor preencha todos os campos da transação");
            return;
        }
        const inputTipoTransacao = document.getElementById("tipoTransacao");
        const inputValor = document.querySelector("#valor");
        const inputData = document.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        const novaTranscao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };

        console.log(novaTranscao);
        Conta.registrarTransacao(novaTranscao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    } catch (error) {
        console.error("Erro ao registrar transação:", error);
        alert(error.message);
    }
});
```
Esse é um pequeno exemplo. E caso você queira criar um erro, para parar de seguir o código normal, você pode usar o comando:
```ts
throw new Error("Mensagem")
```
Essa mensagem colocada, é a mesma que é capturada ao usar error.message.