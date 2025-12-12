![[Pasted image 20251212161100.png]]
![[Pasted image 20251212161422.png]]
![[Pasted image 20251212162705.png]]
Uma informação é passada por um conjunto de paradas até chegar no local.
A internet é um dos tipos de rede. A internet é um modelo global de rede. 
# Diferença de Lan, Wan e internet
Lan - nivel residencial 
Wan - Rede ampla que conecta várias LANs, podendo ser privada (corporativa) ou pública.  
Internet - nivel global
# Resumo 1
## **Conceitos-Chave**

|Conceito|Explicação|
|---|---|
|**Aplicação Web**|Programa acessível via navegador pela internet, em vez de rodar apenas localmente.|
|**Cliente e Servidor**|Modelo em que o navegador (cliente) solicita dados e o servidor responde com os recursos pedidos.|
|**Protocolo HTTP**|Linguagem padrão que permite a troca de informações entre cliente e servidor.|
|**LAN (Local Area Network)**|Rede local e privada, de pequeno alcance (ex.: escritório, escola).|
|**WAN (Wide Area Network)**|Rede de longa distância, interligando diversas LANs (ex.: rede corporativa global).|
|**Internet**|Rede mundial pública que conecta milhões de dispositivos.|
|**Latência**|Tempo entre o envio de uma solicitação e o recebimento da resposta.|
|**Cache**|Mecanismo de armazenamento temporário que acelera o carregamento de páginas já acessadas.|

---

## **Mapa Conceitual (ASCII)**

```less
        [Aplicações Web]
                |
      +---------+---------+
      |                   |
 [Infraestrutura da Web]  [Redes de Comunicação]
      |                           |
  [Cliente <-> Servidor]       [LAN] - [WAN] - [Internet]
      |                           |
 [Solicitação HTTP]         [Privada] [Semi-pública] [Pública]
      |
 [Resposta: HTML, JSON, PDF...]
```

---

## **Desmembramento Detalhado**

### 1. Do Local ao Global

Antes, as aplicações eram testadas localmente. Para torná-las acessíveis ao mundo, utilizamos a **internet**, uma rede global que conecta milhões de dispositivos e servidores.

### 2. O Funcionamento das Solicitações na Web

Quando digitamos uma URL no navegador:

- O **cliente HTTP** (navegador) envia uma **requisição** ao **servidor**.
- A requisição percorre diversos **intermediários** até chegar ao destino.
- O **servidor** processa o pedido e envia uma **resposta** (HTML, imagem, JSON etc.).
- O **navegador** interpreta e exibe o conteúdo ao usuário.

### 3. Origem e Estrutura da Internet

A internet nasceu como um projeto de **interconexão acadêmica** entre universidades, visando compartilhar pesquisas e dados globalmente.  
Seu funcionamento depende de **pontos intermediários** — como “escala técnica” em uma viagem — que retransmitem as informações até o destino.

### 4. LAN vs. WAN

- **LAN (Local Area Network):**  
    Rede privada e limitada a um espaço físico (ex.: prédio, laboratório).  
    Vantagem: baixa latência e alta velocidade.
    
- **WAN (Wide Area Network):**  
    Rede ampla que conecta várias LANs, podendo ser privada (corporativa) ou pública.  
    Exemplo: rede entre filiais de uma empresa ou campus universitários.
    

### 5. Internet – A Rede Global

A **internet** é uma **WAN pública** de alcance mundial.  
Pode veicular tanto informações públicas (como um site aberto) quanto privadas (restritas a logins ou intranets).

### 6. Público x Privado

- **LAN/WAN:** normalmente restritas a membros internos.
- **Internet:** aberta, mas com possibilidade de controle por autenticação.  
    Exemplo: uma universidade pode divulgar o **calendário escolar** publicamente e manter as **notas dos alunos** restritas à rede interna.

### 7. Latência, Custo e Confiabilidade

- **Latência:** menor em LAN, maior na internet devido à distância e intermediários.
- **Custo:** LANs são baratas; WANs e internet demandam infraestrutura global.
- **Confiabilidade:** LANs são mais estáveis; internet depende de múltiplos fatores e locais de acesso.

---

## **Resumo Final**

A internet é uma rede global que permite o compartilhamento de aplicações web além dos limites locais.  
Quando acessamos um site, o navegador (cliente) envia uma solicitação a um servidor, que responde com os dados correspondentes.  
LANs e WANs representam diferentes escalas de conexão — da local à global — e variam em velocidade, custo e privacidade.  
A internet, por ser pública, exige mecanismos de segurança e controle de acesso, mas é o principal meio para disponibilizar aplicações mundialmente.
# Como se comunicam
## Protocolo TCP/IP
### Camadas
- Camada de aplicação: protocolo HTTP, iniciando a transmissão de dados.
- Camada de transporte: Pode ser usado o TCP/UDP.  Você pode testar o TCP usando o telnet.
- Camada de rede: roteia pacotes de dados através da rede. É tipo um GPS para onde os dados devem ir até chegarem no local.
- Camada de interface de rede: A parte física, enviando dados como sinais elétricos ou opticos. 
## CURL
Comunicação HTTP. Exemplo de comando:
No comando `curl`, a flag **`-I`** (i maiúsculo) significa **"Fetch Header Only"** (Buscar apenas o cabeçalho).
```bash
curl -v https://www.rantool.com
```
É usado -v para ser mais descritivo.
## Comandos
O **TCP/IP** é a base da comunicação em redes modernas, incluindo a internet. Ele é formado por uma pilha de protocolos que garante desde a identificação de dispositivos até a entrega confiável de pacotes de dados. Para estudar e entender como o TCP/IP funciona na prática, o Linux e o Bash oferecem diversos comandos que permitem inspecionar conexões, interfaces e fluxos de rede.

### Principais comandos

- **`ifconfig` ou `ip addr`**  
    Exibe informações sobre interfaces de rede, endereços IP atribuídos e status da conexão.  
    Exemplo:
    
    ```bash
    ip addr show
    ```
    
- **`ping`**  
    Testa a conectividade entre o host local e outro dispositivo, usando o protocolo **ICMP**.  
    Exemplo:
    
    ```bash
    ping google.com
    ```
    
- **`traceroute`**  
    Mostra o caminho percorrido pelos pacotes até um destino, revelando cada roteador intermediário.  
    Exemplo:
    
    ```bash
    traceroute google.com
    ```
    
- **`netstat` ou `ss`**  
    Exibe conexões ativas, portas abertas e estatísticas de rede. O `ss` é mais moderno e recomendado.  
    Exemplo:
    
    ```bash
    ss -tulnp
    ```
    
- **`tcpdump`**  
    Captura pacotes em tempo real, permitindo analisar tráfego detalhado no nível TCP/IP.  
    Exemplo (capturando pacotes na porta 80):
    
    ```bash
    sudo tcpdump -i any port 80
    ```
    
- **`curl`**  
    Realiza requisições HTTP/HTTPS e pode ser usado para inspecionar cabeçalhos e verificar protocolos.  
    Exemplo:
    
    ```bash
    curl -I https://www.example.com
    ```
    
- **`nmap`**  
    Scanner de rede usado para descobrir hosts ativos e verificar portas abertas.  
    Exemplo:
    
    ```bash
    nmap -Pn 192.168.1.1
    ```
    

# Diferença de TCP e UDP
## TCP
Entrega dos pacotes de forma ordenada. Estabelece a conexão. Detecta e corrige os erros. São usado em aplicações web.
## UDP
Não estabelece a conexão. Entrega não ordenada. Sem detecção ou correção de erros.

### Referências

- Guia da **GNU/Linux iproute2** (substituto do ifconfig): [https://man7.org/linux/man-pages/man8/ip.8.html](https://man7.org/linux/man-pages/man8/ip.8.html)
- Manual do **tcpdump**: [https://www.tcpdump.org/manpages/tcpdump.1.html](https://www.tcpdump.org/manpages/tcpdump.1.html)
- Documentação do **ss/netstat**: [https://man7.org/linux/man-pages/man8/ss.8.html](https://man7.org/linux/man-pages/man8/ss.8.html)
- Projeto **nmap**: [https://nmap.org](https://nmap.org/)
- Tutorial de redes Linux no DigitalOcean: [https://www.digitalocean.com/community/tutorials](https://www.digitalocean.com/community/tutorials)
# Resumo 2
## Conceitos-Chave

|Conceito|Explicação Simplificada|
|---|---|
|**Protocolo**|Conjunto de regras que permite a comunicação entre computadores.|
|**TCP/IP**|Conjunto de protocolos que define como os dados são enviados e recebidos na internet.|
|**Camada de Aplicação**|Onde ocorre a comunicação direta com o usuário (ex: HTTP, HTTPS).|
|**Camada de Transporte**|Garante a entrega dos dados (TCP — confiável, UDP — rápido, sem verificação).|
|**Camada de Rede**|Define o caminho que os dados percorrem até o destino (ex: roteamento).|
|**Camada de Interface de Rede**|Responsável pela comunicação física (cabos, Wi-Fi, sinais elétricos, MAC address).|
|**HTTP/HTTPS**|Protocolos da camada de aplicação que controlam como páginas web são transferidas.|
|**Telnet e Curl**|Ferramentas para testar e visualizar comunicações nas camadas de transporte e aplicação.|

---

## Mapa Conceitual (ASCII)

```lua
          +--------------------------------------+
          |          INTERNET (TCP/IP)           |
          +-----------------+--------------------+
                            |
        +--------------------------------------+
        |        Camada de Aplicação (HTTP)    |
        | Ex: Navegador -> HTTPS -> Servidor   |
        +--------------------------------------+
                            |
        +--------------------------------------+
        |       Camada de Transporte (TCP/UDP) |
        | Ex: Telnet usa TCP                   |
        +--------------------------------------+
                            |
        +--------------------------------------+
        |        Camada de Rede (IP)           |
        | Roteamento dos pacotes               |
        +--------------------------------------+
                            |
        +--------------------------------------+
        |  Camada de Interface de Rede (MAC)   |
        | Comunicação física - Sinais elétricos|
        +--------------------------------------+
```

---

## Desmembramento Detalhado

### 1. A importância dos protocolos

Para que diferentes computadores e servidores possam “falar a mesma língua”, é necessário um conjunto padronizado de regras — os **protocolos**.  
Na internet, o mais usado é o **TCP/IP**, que organiza a comunicação em **camadas hierárquicas**.

---

### 2. Camada de Aplicação

- Responsável pela **interação com o usuário**.
- Exemplo: quando acessamos `https://alura.com.br`, o navegador usa o **HTTP/HTTPS**, que pertence a essa camada.
- Podemos visualizar as trocas dessa camada com ferramentas como **“Inspecionar → Rede”** no navegador.

**Ferramenta prática:**

- `curl -v https://alura.com.br` → mostra a comunicação HTTP detalhada.

---

### 3. Camada de Transporte

- Gere o **envio e recebimento confiável dos dados**.
    
- Pode usar:
    
    - **TCP (Transmission Control Protocol)** – garante que os dados cheguem completos e na ordem certa.
    - **UDP (User Datagram Protocol)** – mais rápido, mas sem garantia de entrega.

**Atenção:**

> TCP/IP é o conjunto de camadas.  
> TCP é **apenas uma parte** desse conjunto.

**Ferramenta prática:**

- `telnet alura.com.br` → testa a comunicação via TCP.

---

### 4. Camada de Rede

- Define **para onde os dados devem ir** — faz o papel de **roteador** ou “GPS da internet”.
- Trabalha principalmente com **endereços IP**.

---

### 5. Camada de Interface de Rede

- É o nível mais próximo do **hardware** (placas de rede, cabos, Wi-Fi).
- Usa o **endereço físico (MAC address)** para identificar dispositivos.

**Ferramenta prática:**

- `ipconfig /all` → mostra detalhes da rede e o endereço físico.

---

## Resumo

O **modelo TCP/IP** organiza a comunicação na internet em **camadas complementares**:

|Camada|Função Principal|Exemplo|
|---|---|---|
|Aplicação|Interação com usuário|HTTP/HTTPS|
|Transporte|Transmissão confiável dos dados|TCP/UDP|
|Rede|Roteamento e endereçamento|IP|
|Interface|Comunicação física|MAC address|

Essas camadas garantem que, ao digitar um site no navegador, a mensagem viaje de forma ordenada e eficiente desde o computador até o servidor, e volte com a página carregada.