# O conceito de API
Front-end: lado do cliente.
Back-end: lado do servidor.
A aplicação backend não está relacionada com uma interface gráfica, ela precisa de alguma forma para se comunicar com o front-end, é essa forma é chamada de API.
Uma API(Interface de programação de aplicações) é um conjunto de definições e protocolos que permite que diferentes softwares se comuniquem e troquem dados entre si.
## Tipos de APIs
- APIs Rest/Restful: principal protocolo para comunicação de serviços WEB, e mais simples.
- APIs Soap: Transmissão feita entre, geralmente, XML.
- APIs GraphQL: criado pelo Facebook, mais flexível, personalizando uma consulta para cada requisição.
- APIs WebSocket: funcionam em tempo real, jogos online, bolsas de valores, informações autoatualizáveis. Criado um canal de comunicação que pode ser do cliente para o servidor ao mesmo tempo que servidor para cliente.
- APIs GRPC: informação binária, e mais performática. 
## Mais
As **APIs (Application Programming Interfaces)** são fundamentais para a comunicação entre sistemas, permitindo a integração de serviços, dados e funcionalidades. Existem diferentes protocolos de API, cada um com características próprias, que influenciam no desempenho, segurança e facilidade de implementação.

- **REST (Representational State Transfer)**  
    Baseado no protocolo HTTP, é o padrão mais popular atualmente. Utiliza recursos identificados por URLs e operações baseadas em métodos HTTP (GET, POST, PUT, DELETE). É simples, escalável e amplamente suportado.
    
- **SOAP (Simple Object Access Protocol)**  
    Mais antigo e formal, utiliza XML para troca de mensagens. É orientado a contratos (WSDL) e conhecido pela robustez em ambientes corporativos, mas também pela maior complexidade em comparação ao REST.
    
- **GraphQL**  
    Criado pelo Facebook em 2015, permite ao cliente definir exatamente quais dados deseja receber, evitando overfetching (trazer dados em excesso) ou underfetching (trazer dados insuficientes). É altamente flexível para aplicações modernas.
    
- **gRPC (Google Remote Procedure Call)**  
    Desenvolvido pelo Google, utiliza **Protocol Buffers (Protobuf)** para serialização de dados binários, o que garante alta performance e baixo consumo de rede. É muito usado em microsserviços e comunicação em tempo real.
    
- **WebSockets**  
    Não é um protocolo de API no sentido clássico, mas um padrão para comunicação **bidirecional em tempo real** entre cliente e servidor. Ideal para chats, jogos online e sistemas de monitoramento.
    
## APIs públicas
https://github.com/public-apis/public-apis

