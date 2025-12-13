Significado de multiplexação: alta quantidade de requisições feitas por uma mesma pessoa ao mesmo tempo.
![[Pasted image 20251213183720.png]]
O protocolo **HTTP (Hypertext Transfer Protocol)** é a base da comunicação na web, permitindo a transferência de documentos e dados entre navegadores e servidores. Desde sua criação, ele passou por diversas evoluções para lidar com as crescentes demandas de desempenho, segurança e escalabilidade da internet.

- **HTTP/1.0 e HTTP/1.1**  
    O HTTP/1.0 surgiu em 1996 como a primeira padronização formal, porém cada requisição exigia uma nova conexão TCP, tornando-o ineficiente para páginas mais complexas. Em 1999, o **HTTP/1.1** introduziu conexões persistentes e melhorias como o pipeline de requisições, que reduziram a latência, mas ainda apresentavam limitações com múltiplos recursos carregados simultaneamente.
    
- **HTTP/2**  
    Lançado em 2015, trouxe mudanças significativas, como **multiplexação de streams**, compressão de cabeçalhos (HPACK) e priorização de requisições. Essas melhorias diminuíram a sobrecarga das conexões e tornaram a navegação muito mais rápida, especialmente em sites com muitos elementos (imagens, scripts, folhas de estilo).
    
- **HTTP/3**  
    Baseado no protocolo **QUIC** (desenvolvido inicialmente pelo Google), o HTTP/3 substitui o TCP pelo UDP, reduzindo a latência e aumentando a resiliência em redes instáveis. Além disso, incorpora de forma nativa **TLS 1.3**, trazendo maior segurança. Hoje, grandes provedores de conteúdo e navegadores já oferecem suporte a esse padrão, que está se tornando a nova base para a web moderna.
    

---

### Referências

- RFC 1945 e RFC 2616 – documentos oficiais sobre **HTTP/1.0** e **HTTP/1.1**.
- **RFC 7540** – especificação do **HTTP/2**.
- **RFC 9114** – especificação do **HTTP/3**.
- Site oficial do **IETF (Internet Engineering Task Force)**: [https://www.ietf.org](https://www.ietf.org/).
- Cloudflare Learning Center: [https://www.cloudflare.com/learning](https://www.cloudflare.com/learning) – guias introdutórios sobre protocolos da web.