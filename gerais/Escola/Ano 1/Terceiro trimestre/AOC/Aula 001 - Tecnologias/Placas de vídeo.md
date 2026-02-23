As GPUs, _Graphics Processing Unit,_ unidade de processamento gráfico em tradução livre, tem como função ajudar no processo de renderização de cenas 2D e 3D. A placa de vídeo é especializada em operações como:

- cálculo de geometria
- mapeamento de texturas
- transformação de pixels
- entre outros. ****

# Como Funciona - Pedro Makoski

---

## Resumo

Dado as coordenadas, a placa calcula as conexões entre esses pontos(vértices), e junto com isso aplica texturas, sombra, iluminações e vários outros detalhes. Depois de tudo a placa realiza o processo de **rasterização,** onde é convertido as cenas em pixels.

Em outras palavras, a placa de vídeo recebe as informações(coordenas) do software, ou melhor da CPU. E renderiza uma imagem, sabendo como representar os pontos na tela do monitor, retornando ao monitor esse resultado final.

A placa de vídeo consegue realizar esse processo rapidamente, algumas conseguem renderizar mais de 60 frames por segundo.

## Componentes da placa de vídeo

Cada marca cria sua própria estrutura para a qual se acha melhor para seus clientes.

<aside> ⚠️

GPU é o processador da placa de vídeo, que contem outras coisas como a VRAM.

</aside>

### Conexão com a placa mãe

Para os dados de energia. Cria uma conexão entre a CPU e a GPU. Além de também dar energia á GPU.

### Processador ou GPU

para decidir o que vai fazer com cada pixel na tela. Muitos processadores possuem uma quantidade transistores maior que a própria CPU. Empresas criadoras de GPUs, como a NVIDIA e a ATI, utilizam seus próprios métodos para melhorar as GPUs pelos processadores, como:

- FSAA(_Full Scene Anti Aliasing, Anti-aliasing_ de cena completa em tradução livre): tem o papel de suavizar bordas de objetos 3d.
- AF(_Anisotropic Filtering, Filtragem Anisotrópica em tradução livre_): Proporciona maior nitidez às imagens.

A GPU ela é dividida em vários outras unidades de processamento com funções semelhantes, afim de realizar o processamento paralelo, podendo realizar várias ações ao mesmo tempo. Dependendo da marca, eles recebem instruções diferentes para unidades de processamento diferentes.

- Para a NVIDIA, por exemplo, existem os CUDA cores, ou Arquitetura de dispositivo unificado de computação. Eles são unidades de processamento paralelo da NVIDIA. É necessário para o desenvolvedor criar um programação especializada ao CUDA, quando for necessário usar um placa de vídeo no seu programa.
- E para a AMD, existem os Stream Processors, com ideia semelhante dos CUDA cores. Porém é necessário fazer uma outra programação focada para essas unidades de processamento, pois não é compatível com o código do CUDA core.

### Memoria - VRAM

Para memorizar as informações dos pixels. E memorizar também as cenas já renderizadas. Nela é armazenada a posição e a cor de cada pixel. Ela também tem um papel de **buffer** para telas já renderizadas, onde é armazenado os quadros já prontos nessa memoria RAM.

### Conexão com a tela

Feita para enviar o resultado final para a tela.

### Ventoinhas

Devido a alta de calor, causada pela grande quantidade de processamento. A maioria das placas de vídeos, possuem ventoinhas para resfriar a placa.

## Definições

### Onboard o placa de vídeo embarcada

Integradas no circuito da CPU. Eles utilizam não só o processamento da CPU, mas também a memoria RAM do próprio PC.

### Offboard ou placas de vídeo dedicada

É instalado em um PCB próprio. A placa de vídeo dedicada, tem sua própria RAM e seu próprio processamento.

# Diferença de CPU e GPU

---

|CPU(Unidade central de processamento)|GPU(Unidade de processamento de gráfico)|
|---|---|
|Foco em atividades padrões do sistemas. Como planilhas, navegação, manipular arquivos e etc.|Foco em atividades mais pesadas, que envolvem grande quantidade de dados. Principalmente utilizadas para processamento gráfico.|
|Foco em operações mais leves|Foco em operações mais pesadas.|
|Bom em processamento em serie(sequencial, uma atividade após a outra)|Bom para processamento paralelo. Isso pois a GPU é dividida em várias unidades de processamento menores.|

# Ray-tracing ou Ray-Casting

---

Tecnica para deixar ambientes virtuais mais realistas, com traçados dos raios, onde é criado efeitos com luzes mais realistas. Esses método pode ser usado em Jogos ou animações. O sistema consegue prever como a luz deve se comportar a partir do ambiente tridimensional.

Ele consegue se comportar bem em texturas reflexivas, como a água e o espelho, texturas transparentes fazendo a refração, e com objetos que bloqueiam a luz, criando as sombras.

O ray-trancing é algo já antigo, presente desde 1970. Ela foi usada em filmes como Carros e Jurassic Park.

O Ray-trancing envolve muitos cálculos sendo quase inutilizável em processadores mais simples.

De uso domestico a primeira placa de vídeo a utilizar o Ray-tracing foi a da NVIDIA Geforce RTX, com suas RT cores ou ray tracing cores, que utiliza uma microarquitetura chamada Turing. Mas antes as GTX executavam ray-tracing com emulação(sem unidades de processamento dedicadas a isso). Mais para frente outras marca como a AMD, PlayStation e Xbox também lançaram produtos com Ray-Tracing.

# História - Pedro Henrique Saviski

---

Em 1981, a **NEC** foi uma das primeiras empresas a produzir semicondutores, e também a produzir um controlador de vídeo, o **μPD7220**. Mesmo sendo considerada o primeiro processador gráfico independente, surgiram outros juntos como o **ANTIC** do console **Atári** e o **MDA** era uma **placa 8-bits dedicada da IBM**.

![i893987.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/26ad7d42-1e8c-4ae2-a03e-88fb3bc1f6ce/42619a96-e628-4f5f-84c7-1e4a7bf0d21a/i893987.webp)

```
Apesar da IBM, ser a primeira ter a placa de vídeo discreta, a mesma não tinha compartilhamento do endereço dos pixels. Podendo ter apenas textos sem suporte gráfico.

As primeiras placas de vídeo destas para o suporte do **gráfico 2D** foi a **8514 da IBM**, em 1987, tendo nesse momento a utilização do cabo padrão VGA (**Video Graphics Matrix**). 

 Em 1996, a empresa **3dfx Interactive**, trazendo consigo o lançamento a placa **3dfx Voodoo**, a primeira GPU dedicada ao processamento **gráfico 3D** em jogos.

  Em 1999, a NVIDIA lançou a **GeForce 256**, a primeira a primeira placa de vídeo considerada como um p**rocessador gráfico (GPU).** Também estabelecendo a **IA generativa** que temos hoje.

  Em 2020, começou a utilização do **Ray Tracing** (Tecnologia que simula o comportamento da luz no mundo real) com a placa de vídeo **NVIDIA GeForce RTX 3000** e as **AMD Radeon RX 6000.**
```

# Exemplos de Placas de Vídeo dedicada - Pedro Makoski

---

- ASUS Placa gráfica para jogos TUF GeForce RTX® 4090 OC Edition (PCIe 4.0, 24GBd de VRAM GDDR6X, HDMI 2.1a, DisplayPort 1.4a)**:** R$ **17.956,**10. Resolução 8K a 60 FPS. Tem DLSS(tecnologia da NVIDIA, que usa IA para melhorar a qualidade de jogos em tempo real), e também Ray-Tracing.
- AMD Radeon RX 7900 XTX 20GB ~7.699, resolução 4k, Ray-Acelerator(Unidades de processamento para Ray-tracing), infinity cache(Uma tecnologia da AMD, que permite que permite um armazenamento mais próximo da GPU, sem precisar a todo momento ficar gastando banda pedindo a VRAM as informações).
- NVIDIA GeForce RTX 4060 Ti 8GB. R$ 2.749,00. Modelo intermediário, para jogos em 1080 p e 1440 p. Possui IA, DLSS e Nvidia Reflex(Tecnológia para diminuir as latências dos jogos).
- AMD Radeon RX 7600 8GB, R$ 2.548,90. Mais acessível para resolução Full HD(1080 p). Tem tecnologia Ray-Tracing.
- NVIDIA GeForce RTX 4070 Ti 12GB, R$ 6.700. Bom para edição de vídeos e modelagens 3D. Possui DLLS 3.
- NVIDIA GeForce RTX 3060 12GB, R$ 2.395,00. Acessível, Ray-Tracing.

# Curiosidades - Pedro Henrique Saviski

---

- Fabricar uma GPU é um processo extremamente complexo e caro. As placas de vídeo de última geração são feitas utilizando processos de fabricação de **nanômetros** muito pequenos (7nm, 5nm, etc.), exigindo máquinas especializadas para criar os circuitos e transistores em escalas tão pequenas.
- Durante o boom das criptomoedas em 2017 e 2020, as placas de vídeo se tornaram muito populares entre os mineradores de **Bitcoin** e **Ethereum**. A alta demanda por placas de vídeo causou escassez e aumento nos preços, já que os mineradores usavam o poder de processamento das GPUs para resolver cálculos complexos e minerar moedas
- A nova tecnologia da Nvidia é a DLSS que renderizar a imagem nativa do game em uma resolução baixa e depois reconstruir os pixels com auxílio da IA para melhorar a qualidade e reduzir o trabalho dos componentes, aumentando o FPS.
- Hoje em dia estão fazendo o processo de aumentar a velocidade de operação padrão de uma GPU (ou CPU) para obter um desempenho maior do que o especificado pelo fabricante. Isso é chamado de Overclocking
- GPUs aceleram tarefas de IA processando cálculos em paralelo, tornando o treinamento de redes neurais muito mais rápido. Elas lidam com grandes volumes de dados eficientemente, essenciais para aprendizado profundo e inferência.

# Roteiro

---

**Pedro Makoski:** Olá, senhores, hoje estamos com mais um [narrador fictício: pelo fato de poucas unidades não temos um nome para esse quadro], onde eu, Pedro Makoski e Pedro Henrique Saviski, iremos falar sobre algo da tecnologia, e hoje vamos falar sobre placas de vídeo. Mas antes de tudo, vamos fazer um pequeno sumário com cada conteúdo:

- Primeiro vamos falar o que é uma placa de vídeo
- depois falaremos sobre a história das placas de vídeos, como elas surgiram.
- Depois explicaremos sobre como funciona uma placa de vídeo
    - e seus componentes.
- As diferenças de placas de vídeo embarcadas e dedicada
- a diferença de GPU e CPU
- o que é Ray-tracing.
- E não podemos nos esquecer de comentar alguns exemplos de placas de vídeo para você _torrar a sua grana_ digo comprar.
- E por ultimo e não menos importante, falaremos sobre algumas curiosidades como: Uso das placas de vídeo para mineração de criptomoedas e treinamento de IA, além de processos da placa de vídeo como o overclocking e afins.

[Para tudo meme]

- Ah me esqueci também tem as referência finais.

Então vamos começar:

_GPUs ou graphic Processing Unity, unidade de processamento gráfico em tradução livre._ Ela tem como função principal ajudar no processo de renderização de cenas 2d e 3d. Ela pode fazer:

- cálculo de geometria
- mapeamento de texturas
- transformação de pixels
- entre outros. ****

[Narrador fictício: Atenção, por mais das placas de vídeo terem essa função como principal ela pode ser usada para outras coisas, nem sempre relacionadas a processamento gráfico.

**Pedro Henrique:** Agora…

[meme senta que lá vem história]

Em 1981 a NEC, uma empresa que produziu os primeiros semicondutores, construiu também o primeiro controlador de vídeo, Que pode ser chamado de [aparecer na tela: **μPD7220** Este, com nome estranho, foi o primeiro processador gráfico independente, mas logo após surgiram outros como ANTIC do console Atari, e o MDA, uma placa de 8-bits dedicada da IBM.

Essa MDA da IBM, por mais de ter sido a primeira placa de vídeo discreta(eficiente para imagens), ela não tinha compartilhamento de endereço dos pixel[Musica de erro/triste], podendo ter apenas textos, sem suporte gráfico[Meme de musica triste].

A primeira placa de vídeo a ter suporte para gráficos 2d foi o 8514 da IBM, lançado em 1987[Meme do wow], tendo nesse momento a utilização do cabo padrão VGA(Vídeo Graphics Matrix).

**Pedro Makoski:** Parou parou parou, e em 3d, não tem não.

**Pedro Henrique:** Calma ai, em 1996 a empresa 3dfx interactive, inaugura a placa 3dfx Voodoo, a primeira GPU dedicada a processamento gráfico 3d em jogos. [aplausos].

Em 1999 a NVIDIA lançou a GeForce 256, a primeira placa de vídeo realmente considerada como processador gráfico ou GPU. Que também estabelece a IA dentro dela.

Em 2020 começou a utilização nas placas de vídeo o Ray-Tracing, a qual iremos falar já já.

**Pedro Makoski:** [Uma placa de vídeo aparece espontaneamente]. Ahh placas de vídeo, um exemplo claro de tecnologia de ponta. Isso porque a placa de vídeo, consegue fazer processamento paralelo podendo renderizar várias coisas em paralelo, a GPU consegue obter uma grande quantidade de coordenadas e transformar em uma malha, e junto com isso adicionar texturas, iluminações, sombras e vários outros detalhes, e depois rasterizar, transformando tudo isso em pixels. E tudo isso em um tempo incrível, algumas placas de vídeo conseguem renderizar mais 60 quadros por segundo. Por isso a placa de vídeo é incrivel.

[Meme do no, no, no]

Olá eu vim do futuro. [Entrar em modo pensativo] que na verdade é o passado de vocês, para dizer a diferença de placa de vídeo e GPU, a GPU é a unidade de processamento da placa de vídeo, já a placa de vídeo além de ter a GPU tem outras coisas como a VRAM, as ventoinhas, uma conexão com a placa mãe e outra com a tela.

[Meme do nice]

Agora fique de volta para o eu do passado, [modo pensativo] que é mais passado que o passado do presente de vocês. Para falar sobre esses componentes da placa de vídeo.

- Processador ou GPU, dividido em várias unidades de processamento menores, [Parecer que está contando um segredo] alguns até com mais transistores que uma CPU. Essas unidades de processamento menores podem ser chamadas de CUDA cores para GPUs da NVIDIA ou Stream Processors para as GPUs da AMD, ambos com programações diferentes, que cada programador(sim estamos falando de nós), deve criar o seu código próprio para cada GPU.
- VRAM. Uma memoria RAM propria da placa de vídeo, ela consegue memorizar a cor e a posição de cada pixel. Ela funciona também como uma espécie de Buffer, memorizando também os quadros já renderizados.
- Conexão com a placa mãe. Cria uma conexão entre a CPU e a GPU. Ela também recebe a energia para dar à GPU.
- Conexão com a tela. Ela manda os dados para o monitor. [Meme do é tá bom].
- Ventoinhas. Devido ao alto calor criado pela GPU[Meme do tá pegando fogo bixo], as ventoinhas recebem o papel de resfriar a placa.

E esses são os componentes da placa de vídeo. [meme do ou será que não], na verdade esses componentes podem não apenas ser diferente no seu interior dentre as várias marcas de placas vídeo, mas também a estrutura da placa em si pode variar entre as várias marcas.

**Pedro Henrique:** Legal, recentemente eu estava pesquisando, e encontrei dois termos Onboard e Offboard, o que seria esses termos.

**Pedro Makoski:** bem onboard ou placa de vídeo embarcada, é integrada no circuito da CPU, e utiliza a memoria RAM do próprio PC. Isso é ruim, pois a CPU não consegue lidar muito bem com muitas quantidades de dados. Por isso existe a placa de vídeo dedicada, ou Offboard, que é instalada num PCB próprio, e tem sua próprio memoria RAM.

[Meme do empolgante]

Espera um pouco.

[Meme do para aqueles que não entenderam vamos usar a magia do replay imediato]

[Voltar a cenas que é falado CPU e GPU]

[Musica do Iluminatti]

**Pedro Henrique:** CPU e GPU são coisas diferentes, CPU é a unidade central de processamento, já a GPU é a unidade de processamento gráfico. Em um combate:

De um lado temos CPU, foco em atividades padrões do sistema, como planilhas, navegação, manipular arquivos e afins. A CPU tem foco em operações mais leves e é ótima em processamento em serie, ou seja uma atividade após a outra.

Do outro lado temos a GPU, com focos em atividades mais pesadas, que envolvem grande quantidades de dados, principalmente utilizadas para processamento gráfico. Ela consegue realizar processamento paralelo, graças a suas várias unidades de processamento menores.

[Meme do Noice]

Voltando para trás, lembra que falamos sobre Ray-Tracing, mas o que é isso. De forma simples, o Ray-tracing também chamado de Ray-Casting, ele consegue calcular o comportamento da luz, em vários ambientes diferentes. Por mais de ser antigo, presente em filmes como Jurassic Park e Carros, o uso domestico dela foi introduzido apenas depois pela NVIDIA com o Geforce RTX, com seus próprios RT cores, ou ray-tracing cores. Utilizando para si uma micro arquitetura chamada Turing. Antes no uso domestico era feito o ray-tracing apenas de forma emulada, sem um RT core para isso. Mais para frente, outras empresas como a AMD, [Meme do PlayStation] e XBOX, lançaram também seus próprios produtos com ray-tracing.

**Pedro Makoski:** Legal, placas de vídeo dedicadas são incriveis, mas agora quais são os modelos delas.

**Pedro Henrique:** Existem várias delas, aqui vai alguns exemplos:

- ASUS Placa gráfica para jogos TUF GeForce RTX® 4090 OC Edition (PCIe 4.0, 24GBd de VRAM GDDR6X, HDMI 2.1a, DisplayPort 1.4a): ****Custa apenas R$ **17.956,**10. Resolução 8K a 60 FPS. Tem DLSS 3, que falaremos sobre isso depois, e também Ray-Tracing.
- AMD Radeon RX 7900 XTX 20GB custa aproximadamente R$ 7.699, resolução 4k, Ray-Acelerator que seria as Unidades de processamento para Ray-tracing da AMD, Infinity cache Uma tecnologia da AMD, que permite um armazenamento mais próximo da GPU, sem precisar a todo momento ficar gastando banda pedindo a VRAM as informações.
- NVIDIA GeForce RTX 4060 Ti 8GB. Custa R$ 2.749,00. Modelo intermediário, para jogos em 1080 p e 1440 p. Possui IA, DLSS 3 e Nvidia Reflex: Tecnologia para diminuir as latências dos jogos.
- AMD Radeon RX 7600 8GB, custa R$ 2.548,90. Mais acessível para resolução Full HD(1080 p). Tem tecnologia Ray-Tracing.
- NVIDIA GeForce RTX 4070 Ti 12GB, custa aproximadamente R$ 6.700. Bom para edição de vídeos e modelagens 3D. Possui DLLS 3.
- NVIDIA GeForce RTX 3060 12GB, custa R$ 2.395,00. Uma versão mais acessível, tem Ray-Tracing.

**Pedro Makoski:** Placas de vídeo são perfeitas para jogos, modelagem 3d e edição de vídeo, mas elas podem ajudar em coisas além desses nichos, por exemplo:

- Mineração de Criptomoedas, inclusive durante o seu boom em 2017 a 2020, as placas de vídeo se tornaram muito conhecidas entre mineradoras de Bitcoin e Ethereum, gerando uma alta demanda, tão alta demanda que causou uma escassez [meme do sumiu], gerando um aumento dos preços.
- Além disso, as placas de vídeo podem ser usadas para o treinamento de IA, devido a facilidade de processamento de cálculos de forma paralela. Elas conseguem lidar com grandes volumes de dados eficientemente, otimizando o processo de treinamento de IAs.
    - Inclusive a NVIDIA recebeu um aumento da suas ações neste boom das IAs, graças a suas placas serem perfeitas para treinamento de modelos.

As placas de vídeo, podem ter processos para ser otimizadas como:

- A nova tecnologia da Nvidia, a DLSS que renderiza a imagem nativa do game em uma resolução baixa e depois reconstruí os pixels com auxílio da IA para melhorar a qualidade e reduzir o trabalho dos componentes, aumentando o FPS.
- E também temos o processo de Overclocking, tecnica para aumentar a velocidade de operação padrão de uma GPU ou CPU, afim de obter um desempenho maior do que o especificado pela fabricante.

Tudo que vimos aqui é muito legal[Musica triste começa] mas a construção de GPUs é um processo bem caro, a construção dessas de ultima geração envolve uma fabricação em nanômetros de espessura, podendo ser 7nm ou 5nm. Exigindo maquinas especializadas em criar circuitos e transistores em escalas muito pequenas.

**Pedro Henrique:** Bem é isso espero que você tenha gostado do conteúdo, te vejo na próxima tchau.

**Pedro Makoski:** Ah e aqui estão as referências.

# Referências

---

- [https://canaltech.com.br/hardware/como-surgiram-as-placas-de-video/](https://canaltech.com.br/hardware/como-surgiram-as-placas-de-video/) 05/11/2024
- [https://pt.wikipedia.org/wiki/IBM_8514](https://pt.wikipedia.org/wiki/IBM_8514) 05/11/2024
- [https://www.meupositivo.com.br/doseujeito/tecnologia/o-que-e-placa-de-video-gpu/](https://www.meupositivo.com.br/doseujeito/tecnologia/o-que-e-placa-de-video-gpu/) Acessado em 05/11/2024.
- [https://avell.com.br/blog/como-funciona-uma-placa-de-video/](https://avell.com.br/blog/como-funciona-uma-placa-de-video/) Acessado em 05/11/2024.
- [https://tecnoblog.net/responde/o-que-sao-stream-processors-amd/](https://tecnoblog.net/responde/o-que-sao-stream-processors-amd/) Acessado em 06/11/2024
- [](https://tecnoblog.net/responde/o-que-e-ray-tracing/)[https://tecnoblog.net/responde/o-que-e-/ray-tracing/](https://tecnoblog.net/responde/o-que-e-/ray-tracing/) Acessado em 06/11/2024.
- [](https://techinter.com.br/hardwares/placas-de-video/melhores-placas-de-video/?utm_source=Google&utm_medium=CPC&utm_campaign=Din%C3%A2mica&utm_content=AD_703742657991&utm_term=&gad_source=1)[https://techinter.com.br/hardwares/placas-de-video/melhores-placas-de-video/?utm_source=Google&utm_medium=CPC&utm_campaign=Dinâmica&utm_content=AD_703742657991&utm_term=&gad_source=1](https://techinter.com.br/hardwares/placas-de-video/melhores-placas-de-video/?utm_source=Google&utm_medium=CPC&utm_campaign=Din%C3%A2mica&utm_content=AD_703742657991&utm_term=&gad_source=1) Acessado em 06/11/2024.
- [https://tecnoblog.net/responde/o-que-e-a-dlss-da-nvidia-5-jogos-que-aproveitam-a-tecnologia/](https://tecnoblog.net/responde/o-que-e-a-dlss-da-nvidia-5-jogos-que-aproveitam-a-tecnologia/) Acessado em 06/11/2024
- [https://www.reddit.com/r/Amd/comments/jk7k28/how_does_the_infinity_cache_work_and_why_does/?tl=pt-br](https://www.reddit.com/r/Amd/comments/jk7k28/how_does_the_infinity_cache_work_and_why_does/?tl=pt-br) Acessado em 06/11/2024
- [https://www.nvidia.com/en-us/geforce/news/reflex-over-100-games-released-more-to-come-in-2024/](https://www.nvidia.com/en-us/geforce/news/reflex-over-100-games-released-more-to-come-in-2024/) Acessado em 06/11/2024.
- [https://epraja.com.br/a-fascinante-jornada-das-placas-de-video-dos-primordios-a-realidade-virtual/](https://epraja.com.br/a-fascinante-jornada-das-placas-de-video-dos-primordios-a-realidade-virtual/) Acessado em 07/11/2024.
- [](https://www.hp.com/br-pt/shop/tech-takes/tres-razoes-pelas-quais-voce-deve-sempre-ter-um-adaptador-hdmi-para-vga#:~:text=O%20conector%20VGA%20)[https://www.hp.com/br-pt/shop/tech-takes/tres-razoes-pelas-quais-voce-deve-sempre-ter-um-adaptador-hdmi-para-vga#:~:text=O](https://www.hp.com/br-pt/shop/tech-takes/tres-razoes-pelas-quais-voce-deve-sempre-ter-um-adaptador-hdmi-para-vga#:~:text=O) conector VGA [.](https://blog.nvidia.com.br/blog/first-gpu-gaming-ai/) Acessado em 07/11/2024.
- [https://blog.nvidia.com.br/blog/first-gpu-gaming-ai/](https://blog.nvidia.com.br/blog/first-gpu-gaming-ai/). Acessado em 07/11/2024.
- [https://canaltech.com.br/games/o-que-e-ray-tracing/](https://canaltech.com.br/games/o-que-e-ray-tracing/). Acessado em 07/11/2024.
- [](https://search.app/?link=https%3A%2F%2Fcanaltech.com.br%2Fhardware%2Fo-que-e-tecnologia-nvidia-dlss%2F&utm_campaign=aga&utm_source=agsadl1%2Csh%2Fx%2Fgs%2Fm2%2F4)[https://search.app?link=https%3A%2F%2Fcanaltech.com.br%2Fhardware%2Fo-que-e-tecnologia-nvidia-dlss%2F&utm_campaign=aga&utm_source=agsadl1%2Csh%2Fx%2Fgs%2Fm2%2F4](https://search.app?link=https%3A%2F%2Fcanaltech.com.br%2Fhardware%2Fo-que-e-tecnologia-nvidia-dlss%2F&utm_campaign=aga&utm_source=agsadl1%2Csh%2Fx%2Fgs%2Fm2%2F4) Acessado em 09/11/2024.