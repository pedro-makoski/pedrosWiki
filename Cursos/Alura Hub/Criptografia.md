Inicialmente ela era vulnerável por ataques como:
- Interceptação da requisição, e mandar uma resposta falsa
- Man-in-the-middle(MITM): verificar o que você está enviando, e verificar as informações que você manda e as informações que você recebe.
- Phishing: site parecido com outro site, porém não é o mesmo.
- Inject: informações que são enviadas para o servidor de maneira maliciosa.
# Protocolo de criptografia - TLS/SSL - No HTTPS
- TLS(Transport Layer Security): que cuida do transporte das informações, com alguns mecanismos de segurança, que trabalha para que a requisição esteja criptografada, assim como a resposta.
- SSL(Secure Sockets Layer)
- Combinação de criptografia simétrica e assimétrica: 
	- Simétrica: mais rápida e eficiente que requer o compartilhamento das chaves
	- Assimétrica: mais segura, mais lenta e menos eficiente
# Certificados digitais
Autoridade certificadora, que garante que algo é realmente seguro.
# HTTPs
O **HTTPS (Hypertext Transfer Protocol Secure)** é a versão segura do protocolo HTTP, amplamente utilizado na web para garantir que a comunicação entre navegador e servidor seja confidencial e protegida contra ataques. Ele adiciona uma camada de segurança baseada em **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**.

### Como funciona o HTTPS

1. **Conexão inicial (handshake TLS)**  
    Quando um cliente (como o navegador) acessa um servidor via HTTPS, ocorre o chamado _handshake_. Nesse processo, as partes negociam algoritmos de criptografia e o servidor envia um **certificado digital** para comprovar sua identidade.
    
2. **Verificação do certificado**  
    O navegador verifica se o certificado foi emitido por uma **Autoridade Certificadora (CA)** confiável. Isso assegura que o site realmente é quem diz ser, evitando ataques de falsificação (como phishing ou man-in-the-middle).
    
3. **Troca de chaves**  
    Durante o handshake, o cliente e o servidor trocam informações para gerar uma **chave de sessão**. Essa chave será usada para criptografar toda a comunicação de forma simétrica, garantindo velocidade e segurança.
    
4. **Transmissão segura de dados**  
    Com a chave de sessão estabelecida, todas as informações trocadas (como logins, senhas e dados pessoais) são criptografadas. Assim, mesmo que alguém intercepte o tráfego, não conseguirá ler os dados.
    

### Benefícios do HTTPS

- **Confidencialidade**: dados transmitidos não podem ser lidos por terceiros.
- **Integridade**: evita que informações sejam alteradas durante a transmissão.
- **Autenticidade**: confirma que o servidor acessado é realmente o correto.
- **SEO e confiança**: navegadores modernos marcam sites sem HTTPS como inseguros, e buscadores dão preferência a sites seguros nos resultados.