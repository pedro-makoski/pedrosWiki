# HTML Input
```html
<div class="imagem-contato" role="button">

            <i class="material-icons">add</i>

            <label for="avatar">Adicione a imagem do contato</label>

            <input type="file" accept="image/*" id="avatar" required (change)="aoSelecionarArquivo($event)">>

        </div>
```
O #role define o papel daquela div, neste caso mesmo sendo uma div ela tem papel de botão, em outras palavras ela é clicável.
A propriedade #accept possui o que se espera do tipo do arquivo, neste caso queremos imagem, que pode ser qualquer tipo.
O evento change é colocado, e é passado como parâmetro da função o evento, que por convenção é colocado com um cifrão inicial.
# Carregando imagem
```ts
aoSelecionarArquivo(event: any) {

    const file: File = event.target.files[0]//Obtenho o primeiro arquivo do input

    if(file) {

      this.lerArquivo(file)//Se existir file eu executo a função de ler arquivo

    }

  }

  

  lerArquivo(file: File) {

    const reader = new FileReader();//Instancio um FileReader que permite a leitura de arquivo

    reader.onload = () => {//Adiciono um evento para quando o arquivo for carregado

      if(reader.result) {//Se houver resultado

        this.contatoForm.get('avatar')?.setValue(reader.result)//Eu altero o campo usando o setValue para colocar como campo

      }

    }

    reader.readAsDataURL(file)//Relaciono o reader com o file recebido como parâmetro

  }
```
O `reader.result` terá como tipo de saída: ``string | ArrayBuffer``. 
# Entenda a Base64
O formato Base64 é uma representação de dados binários em ASCII, onde os dados binários são convertidos em uma sequência de caracteres ASCII. Isso torna os dados seguros para transmissão como texto, sendo comumente utilizado para incorporar imagens diretamente em documentos HTML, folhas de estilo ou códigos JavaScript.

Na codificação ASCII, cada caractere é representado por um número inteiro entre 0 e 127. Por exemplo, o caractere 'A' é representado pelo número 65, 'a' pelo número 97, '1' pelo número 49, e assim por diante. Essa codificação permite que os computadores representem e manipulem caracteres de maneira consistente, independentemente do hardware ou do sistema operacional.

O formato Base64 é amplamente utilizado em várias aplicações, incluindo transmissão de dados pela internet, armazenamento de dados binários em arquivos de texto e codificação de imagens para exibição em páginas da web. Ele oferece uma maneira eficiente e confiável de representar dados binários em formato de texto, tornando-os acessíveis e interoperáveis em diferentes plataformas e sistemas.

Em suma, o formato Base64 desempenha um papel fundamental na transmissão segura de dados binários como texto, sendo especialmente útil para a incorporação de imagens em documentos web. Se desejar aprofundar seus conhecimentos sobre sistemas binários e sua relevância na computação moderna, não deixe de conferir o artigo [Entenda o sistema de Código Binário](https://www.alura.com.br/artigos/sistema-codigo-binario), que oferece uma explanação detalhada sobre o tema.
# Representando código Base64 usando img
Basta colocar o formato Base64, como string mesmo dentro como propriedade do src da imagem.