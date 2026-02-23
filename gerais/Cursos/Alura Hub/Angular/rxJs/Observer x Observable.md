Observable - objeto que contem eventos futuros, que vão acontecer.
Observer - objeto que cuida dos eventos, para caso eles sejam acionados.
# Inscrição em observable
Você pode se increver na resposta do observable. 
```ts
.subscribe(

        (retornoApi) => {

          console.log(retornoApi)

    })
```
Essa segunda função é o callback do observable. Quando o evento é realizado o observable aciona essa opção. 
Este método também tinha uma função que recebia os possíveis erros, porém essa função está obsoleto atualmente. O mesmo para o parâmetro complete.
Para colocar os estados do next, error e complete, use um objeto:
```ts
this.livroService.buscar(this.campoBusca).subscribe({

      next: retornoApi => console.log(retornoApi),

      error: erro => console.error(erro),

      complete: () => console.log("Observable completado")

    })
```
O next é quando a API retorna sucesso. Error é quando é encerrado o subscribe com erro, e o complete é quando o observable encerra o ciclo, e para de existir.
# Unsubscribe
Para evitar perda de recursos e vazamento de memória, é recomendável sempre encerrar o subscribe.
É comum fazer isso no ciclo de vida onDestroy:
```ts
ngOnDestroy() {

    this.subscription.unsubscribe()

  }
```