# Modelo cliente/servidor
Cliente - solicita recursos
Servidor - disponibiliza recursos 
## Processo
- Usuário digita URL
- Navegador envia solicitação 
- Servidor processa solicitação
- Servidor envia resposta para cliente de volta.
# Protocolo HTTP
Meio de comunicação funcional. De como a requisição e as respostas devem serem feitas entre servidores.

![[Pasted image 20251213170350.png]]
# Requisições e respostas no HTTP
Exemplo de requisição:
![[Pasted image 20251213171252.png]]
O primeiro item é o método HTTP, que pode ser além de várias outras: GET/POST/PUT/DELETE. 
O segundo item é uma URL: específica o recurso que o cliente está solicitando. Ele coloca o path da requisição.
![[Pasted image 20251213172143.png]]
Cada item pode ter um corpo de requisição, chamado de payload.
![[Pasted image 20251213172417.png]]
## Métodos HTTP
- GET: recuperação de conteúdo
- POST: formulários, criar conteúdos
- PUT: substitui um recurso completamente
- PATCH: substitui apenas uma parte do conteúdo
- DELETE: deletar um recurso
- OPTIONS: apresenta opções de comunicação. Quais métodos você pode usar numa página.
- HEAD: retorna o cabeçalho.
# Diferença de URI e URL
A diferença principal é que ==**[URI](https://www.google.com/search?q=URI&rlz=1C1FKPE_pt-BRBR1179BR1179&oq=qual+a+diferen%C3%A7a+de+URI+e+URL&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBwgFEAAY7wUyBwgGEAAY7wXSAQg0MTE4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwjj3e6QsLuRAxWor5UCHY1ZFMgQgK4QegYIAQgAEAQ) (Identificador Uniforme de Recurso) é um termo mais amplo**, sendo um identificador para qualquer recurso, enquanto **URL (Localizador Uniforme de Recurso) é um tipo específico de URI que especifica a localização** (endereço) desse recurso na rede, como uma página da web==. Pense assim: **todo URL é um URI, mas nem todo URI é um URL**; URIs também podem ser nomes (URNs) que identificam recursos de forma única, sem indicar onde encontrá-los.
# user-agent
## Origem e Propósito

O cabeçalho **User-Agent** é responsável por informar ao servidor qual cliente (navegador, ferramenta ou outro agente) está efetuando a requisição. Essa informação permite que o servidor adapte suas respostas de acordo com o agente que está solicitando os dados. Por exemplo, é comum que servidores enviem recursos otimizados para diferentes navegadores ou mesmo ofereçam versões mobile quando o user-agent indica um dispositivo móvel.

## Funcionamento na Prática

Ao realizar uma requisição HTTP, o cliente inclui o cabeçalho _User-Agent_ junto com outros dados da requisição. Esse cabeçalho contém uma cadeia de caracteres que normalmente especifica o nome, a versão e, em alguns casos, o sistema operacional do cliente. Um exemplo comum em uma requisição pode ser:

```sql
GET /exemplo HTTP/1.1
Host: www.exemplo.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
```

Com esses dados, o servidor pode identificar que o pedido vem de um navegador específico em um sistema Windows e enviar respostas compatíveis com esse ambiente.

## Aplicações e Considerações Técnicas

A utilização do _User-Agent_ vai além da simples identificação do cliente:

- **Adaptação de Conteúdo:** Servidores podem oferecer conteúdos customizados, selecionando estilos, scripts ou até mesmo versões diferentes de uma página de acordo com o agente identificado.
    
- **Análise e Métricas:** Dados sobre os user-agents podem ajudar desenvolvedores e equipes de operação a entender a diversidade de clientes acessando um serviço, permitindo otimizações direcionadas.
    
- **Segurança:** Em alguns cenários, a informação do _User-Agent_ é utilizada para filtrar requisições suspeitas ou automatizadas. No entanto, é importante ter em mente que esse cabeçalho pode ser facilmente manipulado ou falsificado, o que limita seu uso como única camada de segurança.
    

## Variações e Impacto na Experiência do Usuário

Embora o _User-Agent_ seja amplamente utilizado, há algumas variações a serem consideradas:

- **Atualizações Constantes:** Com a rápida evolução dos navegadores e dispositivos, as cadeias de caracteres dos _user-agents_ mudam com frequência. Isso pode exigir atualizações nos sistemas que dependem dessa informação para oferecer conteúdo adaptado.
    
- **Falsificação de Dados:** O _User-Agent_ pode ser alterado programaticamente, o que permite que clientes enviem dados incorretos. Essa característica deve ser levada em conta em aplicações que tentam aplicar restrições ou personalizações rigorosas baseadas nesse cabeçalho.
    

Em resumo, o _User-Agent_ é uma ferramenta valiosa para personalizar a experiência de uso e coletar informações sobre os clientes que acessam um serviço. Contudo, seu uso deve ser complementado por outras práticas de detecção e segurança, considerando que a informação repassada pode não ser plenamente confiável.

# Cabeçalho HTTP
Separados os itens por \n, no formato Chave: valor
## Alguns parâmetros na requisição
- Accept: os dados que são aceitos pelo servidor.
- Authorization: contem as credenciais de autenticação do cliente.
- User-Agent: Identifica o navegador ou aplicativo cliente que está fazendo a requisição.
- Accept-Language: Informa ao servidor quais idiomas o cliente prefere.
- Content-length: indica o tamanho do corpo em bytes.
- Content-Type: tipo de requisição que está sendo enviada.
- Date: contem a data e hora em que menssagem foi enviado.
- Server: identifica o servidor que está respondendo a requisição.
- Expires: quando vai ter uma atualização, para não poder reusar o cache.
# Status Codes
Indica um status de como foi resolvida aquela operação. 
- 1xx: Indica que a resposta deve ser informativa. Informação daquele recurso. Exemplo: continue(que uma informação pode ser continuada), 102(processe - indica que ainda está em processamento).
- 2xx: Indica que a resposta teve sucesso. Exemplos: 200(Ok, indica a requisição GET foi corretamente realizada). 
- 3xx: Indica redirecionamento. Indica que que a página vai ser redirecionada. 
- 4xx: Indica erros relacionados ao cliente. Exemplo: 404(página não encontrada). 
- 5xx: Indica ao erros relacionados ao servidor. 
## Exemplos
- 100 - Continue. Continue para a próxima etapa.
- 101 - Switching protocols - que deve ser mudado de protocolo.
- 102(processe - indica que ainda está em processamento)
- 103 - Early hints - possíveis respostas, para o Status 200 - mas não algo final.
- 200 - OK - A solicitação foi bem sucedida - geralmente usado em métodos GET
- 201 - Created - a solicitação foi bem sucedida e um recurso foi criado.
- 204 - No content - a solicitação foi bem sucedida, porém não tem conteúdo de resposta.
- 206 - Partial Content - apenas parte do recurso está sendo devolvido. Quando você está fazendo o download e está sendo feito em partes.
- 301 - Movido permanentemente - Algum elemento que foi movido internamente de lugar.
- 302 - Found - Foi encontrado, porém em outro local. E retorna o content nas próximas etapas do outro conteúdo.
- 304 - Not Modified - é uma resposta do servidor para o navegador, indicando que o recurso solicitado (como uma imagem ou página) não mudou desde a última vez que foi acessado, instruindo o navegador a usar a versão que já tem em seu cache local
- 400 - Bad request - você fez uma solicitação mal feita, ou por um erro de sintaxe na requisição, ou por dados mal colocados.
- 401 - Unauthorized - O cliente não foi autenticado corretamente.
- 403 - Forbidden - Mesmo com autenticação correta você não tem acesso a página.
- 404 - Not found - o servidor não conseguiu encontrar o recurso solicitado.
- 405 - Method Not Alowed - o método HTTP usado não é permitido para um recurso específico.
- 408 - Request Timeout - O servidor excedeu o tempo limite esperado pela solicitação do cliente.
- 413 - Payload to large - O corpo da solicitação é muito grande
- 429 - Too many request - O cliente enviou muitas solicitações em um determinado periodo de tempo.
- 500 - Internal server error - o servidor encontrou um erro inesperado atender a solicitação.
- 501 - Not implement - o servidor não suporta a funcionalidade necessária para atender a solicitação.
- 502 - Bad Gateway - O servidor recebeu uma resposta invalida de outro servidor.
- 503 - Service Unavailable - O servidor está temporariamente indisponível.
- 