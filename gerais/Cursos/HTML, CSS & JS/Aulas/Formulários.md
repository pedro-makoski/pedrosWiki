---
tags:
  - formulários
  - HTML
Modulo: "4"
Capitulo: 24
---
Local onde você pode colocar dados. Onde o visitante do site pode colocar os dados. 
Aqui temos um exemplo básico, e não muito correto, de formulário:
```html
<form>
        <p>Nome: <input type="text" name="nome" id="nome"></p>
        <p>Sobrenome: <input type="text" name="sobrenome" id="sobrenome"></p>
        <input type="submit" value="Enviar">
</form>
```
Com isso percebemos:
 1. O formulário tem que estar entre a tag form. 
 2. O input do tipo text, é uma caixa de texto.
 3. O do tipo submit envia dados.
 4. O name ajuda a ser usado o valor no php e no HTML, o name identifica a entrada para o php e o HTML, já o ID para o javascipt e css.
 5. Quando se faz o submit do formulário, por padrão Vai aparecer a url, do valor do action action e no final um ? que separa o url e os parâmetros e seus valores: http://127.0.0.1:5500/exercicios/ex020/cadastro.php?nome=G&sobrenome=h.
Esse tem alguns problemas como:
1. Falta de propriedades no form.
2. Falta de ligação entre o input e o texto.
## Autocomplet="off"
---
#autcomplete #desligar-completor 
Essa propriedade colocada no form, faz que não haja aquelas funcionalidades de completar automaticamente no navegador.
`autocomplete="off"` 
## Action
---
Propriedade cujo o valor vai indicar o arquivo que vai ser enviado os dados, ao clicar no botão submit.
## Label
---
Relaciona o texto com o campo de entrada, com o input. **No for se coloca o id, lembre-se disso.**
```html
<form autocomplete="off" action="cadastro.php">
        <p><label for="inome">Nome:</label>
            <input type="text" name="nome" id="inome"></p>
        <p><label for="isobrenome">Sobrenome:</label>
            <input type="text" name="sobrenome" id="isobrenome"></p>
        <input type="submit" value="Enviar">
</form>
```
E além disso se ganha um extra da possibilidade de se você clicar no label, o campo de input fica em foco.
## Métodos de envio de formulários
---
Por padrão os dados do formulário aparecem na URL. Você pode até mudar, para não aparecer, mas mesmo assim não de ser inseguro.
Por padrão o método é o GET, que coloca os dados do formulário, dentro da URL.
Você pode colocar assim:
```html
<form autocomplete="off" method="get" action="cadastro.php">
```
O método pode estar tudo em minúscula ou tudo em maiúscula. Isso no HTML, não tem diferença, mas no PHP tem.
Com o POST, não aparece na url, mas ainda esta visível. Para ver:
1. Em inspecionar.(ctrl + shif + I), na página do formulário. 
2. Clique em network. 
3. Ao fazer o submit dos dados, vai aparecer o seu valor do action, na menu all.
4. Depois clique nele, e clique em payload. E lá vai estar seus dados.
Para ele não aparecer será necessário criptografar os dados. Com o https.
### Quando usar o método GET, e quando usar o POST
#### GET
Quando os dados não forem sensíveis. Quando não for tipo uma senha, CPF, E-mail e afins. Você só pode enviar dados pelo GET, se ele for menos que 3 mil bytes. Se ultrapassar tem que ser **post**. 3 mil bytes seriam aproximadamente 3 mil letras. E você não pode usar o GET, para envio de arquivo.
#### POST
Dados sensíveis(tentar criptografar), Se tiverem mais de 3 mil bytes, e envio de arquivos.
***Atualmente o Método GET e POST, não tem muita diferença na velocidade, perceptivelmente.***
## Tipos de input
---
### Senha
`type="password"`, não fica visível os caracteres, eles aparecem em formato de bolas.
```html
<input type="password" name="senha" id="isenha">
```
### Reset
Cria um botão para limpar.
```html
<input type="reset" value="Limpar">
```
### Number
Um número, só aceita números e traços. Você pode definir um min(valor mínimo do número) e max(valor máximo do número).
```html
<input type="number" id="imedia" name="media" min="0" max="10" placeholder="0 a 10" step="0.5">
```
Você pode também colocar o step, que define de quanto em quanto podem ser os números, com 0.5, por exemplo, pode ser 0, 1, 2... mas também 0,5, 1,5, 2,5.... No step se coloca o decimal em ponto.

Inclusive com o step, quando você clica em subir ou descer ele sobe e desce de .5 e .5.
### Month
Entrada de mês e ano. A saída que esse valor toma e no formato de data assim (Número do ano)-(Número do mês), exemplo, 2010-10, 2023-05.
Você pode colocar um valor padrão, nesse mesmo formato, com a propriedade **value***.
```html
<input type="month" name="mes" id="imes" value="2024-06">
```
### Date
O mês só que agora tem a possibilidade colocar o dia também, o formato de output fica: (ano)-(mês)-(dia).
```html
<input type="date" name="dia" id="idia">
```
**Interessante**: se você coloca uma data inexistente, ele não você enviar.
### Time
Um horário, o output dele é: **(hora)%3A(minuto)**, o %3A significa dois pontos, mesmo se o valor PM ou AM, ele já converte para o que começa da 0 as 23:59.
```html
<input type="time" name="hora" id="ihora">
```
### E-mail
O diferencial dele, é que ele não permite enviar sem ter um @, e caracteres antes e depois deles. O @ é representado no output como %40, na url.
```html
<input type="email" name="email" id="iemail" required autocomplete="email">
```
### Tel
Compatibilidade com dispositivos moveis que puxam os números de telefone da lista de contatos(em alguns dispositivos).
#para-aprender
Você pode definir um padrão no input com **expressões regulares.**, Ou RegEx. Você coloca essas expressões regulares dentro de uma propriedade chamada pattern(padrão). Toda expressão regular começa com um ^ e termina com um $.
#### Pattern
- `(contra barra)d` ou [0-9] - dígitos.
- {quantidade de dígitos}.
Por exemplo:
`pattern="^[0-9]{4}-[0-9]{4}$"`. Isso vai fazer com que o input tenha 4 dígitos numéricos seguidos por um traço e depois 4 dígitos numéricos.
Com o pattern, só será possível enviar com o padrão exigido. Se pode ser 4 ou 5 dígitos pode colocar uma vírgula: `pattern="^[0-9]{4,5}-[0-9]{4}$"`
Abrir parênteses é assim \( - {contrabarra}( e fecha parênteses é (contra-barra)) - \). 
### Checkbox
A famosa caixa de seleção. O formato de output são os labels/inputs que foram marcados, com o valor on. Colocado depois do name e o igual.
```html
<fieldset>
            <legend>Esportes favoritos</legend>
            <input type="checkbox" name="esfut" id="iesfut"> <label for="iesfut">Futebol</label><br>
            <input type="checkbox" name="esbas" id="iesbas"> <label for="iesbas">Basquete</label><br>
            <input type="checkbox" name="esvol" id="iesvol"> <label for="iesvol">Volei</label><br>
            <input type="checkbox" name="esnat" id="iesnat"> <label for="iesnat">Na tação</label><br>
</fieldset>
```
### Radio
Apenas uma opção pode ser marcado, um um input radio serão sempre agrupados a partir de um mesmo name, esse name tem que ser igual, para apenas um daqueles ser marcado.
```html
<fieldset>
            <legend>Sexo</legend>
            <input type="radio" name="sexo" id="isxmas" value="M"> <label for="isxmas">Masculino</label><br>
            <input type="radio" name="sexo" id="isxfem" value="F"> <label for="isxfem">Feminino</label>
</fieldset>
```
Quando você quer que fique um marco por padrão, você coloca checked que é marcado, no input. Assim: 
```html
<input type="radio" name="sexo" id="isxmas" checked>
```
No radio você não pode colocar o checked em mais de um, se colocar ele só vai deixar marcado o último, já no **checkbox** sim.

O formatou de output vai ser o name seguido por igual e o value marcado.
### Color
Mostra um seletor de cores, abrangente, o output é assim %23(cor em hexadecimal), o %23 significa #. Por padrão a primeira cor é preta. Para mudar o valor padrão basta colocar a cor hexadecimal no value, do input.
```html
<p>
	<label for="icor">Cor: </label>
	<input type="color" name="cor" id="icor" value="#ffffff">
</p>
```
### Range
É basicamente aquilo que vai de um valor até outro, e você pode puxar para aumentar ou diminuir. Por padrão o valor vai de 0 a 100, mas com as propriedades min e max, você define os valores mínimos e os máximos. Para colocar o valor inicial defina usando value.
<input type="range" name="nivel" id="inivel" min="1" max="5" value="1">
```html
<p>
	<label for="inivel">Seu nivel de insatisfação: </label>
	<input type="range" name="nivel" id="inivel" min="1" max="5" value="1">
</p>
```
### File
O usuário escolhe qual arquivo mandar, E se tiver no método post, ele envia a foto, pelo header. Precisar estar no método POST.
```html
<p>
	<label for="ifoto">Foto do perfil: </label>
	<input type="file" id="ifoto" name="foto">
</p>
```
## Atributos input
---
### Required
É necessário ter o campo preenchido, se não, não é feito a submissão.
```html
<input type="password" name="senha" id="isenha" required>
```
### minlength e maxlength 
Definem o comprimento mínimo(min-length) e comprimento máximo(max-length), que um input tem que ter para ser enviado.
```html
<input type="password" name="senha" id="isenha" required minlength="8">
```
```html
<input type="text" name="usu" id="iusu" required minlength="5" maxlength="15">
```
```html
<input type="text" name="usu" id="iusu" required maxlength="15">
```
### Size
Define quantas letras vai ser mostradas dentro de um input. Quantas letras cabem na visualização do input. Mas não é totalmente preciso, pois as letras podem ter tamanhos diferentes.
```html
<input type="password" name="senha" id="isenha" required minlength="8" maxlength="30" size="30">
```
### Placeholder
Dá uma dica em um input, essa dica desaparece quando você começa a digitar.
```html
<input type="password" name="senha" id="isenha" required minlength="8" maxlength="30" size="30" placeholder="Senha" autocomplete="current-password">
```
### Autocomplete
No form você pode colocar on e off, se vai aparecer ou não. Se tiver on no form, no input você pode colocar o tipo de entrada daquele input, por exemplo,  usuário(username), current-password(senha de que já existe), new-password(vai ser cirado uma senha nova).
```html
<form action="cadastro.php" method="post" autocomplete="on">
        <p>
            <label for="iusu">Usuário:</label>
            <input type="text" name="usu" id="iusu" required minlength="5" maxlength="30" size="30" placeholder="Nome do usário" autocomplete="username">
        </p>
        <p>
            <label for="isenha">Senha:</label>
            <input type="password" name="senha" id="isenha" required minlength="8" maxlength="30" size="30" placeholder="Senha" autocomplete="current-password">
        </p>
        <p>
            <input type="submit" value="Enviar">
            <input type="reset" value="Limpar">
       </p>
    </form>
```

## Select
Mostra várias opções onde apenas uma pode ser selecionada, dentro da tag datalist coloca os options para uma opção onde vai ter a propriedade value, que vai ser o valor que vai sair no output, e dentro da tag vai ficar o que vai aperecer. Pode ser também um grupo de options com o optgroup, que vai ter um label que vai ser tipo um título para uma parte de dados. Para definir um option selecionado por padrão coloque selected na tag option, que você deseja ficar selecionada por padrão.
```html
<p>
            <label for="iestado">Estado</label>
            <select name="estado" id="iestado">
                <option value="" selected>--- Escolha ----</option>
                <optgroup label="Região Nordeste">
                    <option value="AL">Alagoas</option>
                    <option value="BH">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="MA">Maranhão</option>
                    <option value="PA">Paraiba</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="SG">Sergipe</option>
                </optgroup>
                <optgroup label="Região Norte">
                    <option value="AC">Acre</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="RO">Rôndonia</option>
                    <option value="PA">Pará</option>
                    <option value="RR">Roraima</option>
                    <option value="TO">Tocantins</option>
                </optgroup>
                <optgroup label="Região Sudeste">
                    <option value="ES">Espírito Santo</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                </optgroup>
                <optgroup label="Região Centro Oeste">
                    <option value="GO">Goias</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                </optgroup>
                <optgroup label="Região Sul">
                    <option value="PR">Paraná</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="SC">Santa Catarina</option>
                </otpgroup>
            </select>
</p>
```
## Datalist
Cria um input com algumas sugestões, você define um input e embaixo dele coloca-se uma datalist, com os options. Coloque um id para o datalist, e coloque na propriedade list do input, o id do mesmo. Assim vai se criar um menu com algumas sugestões que você definiu pelo option.
Você pode ou não colocar o value no option, se você colocar o value vai aparecer em destaque e é que ele vai ficar no input. E se você tirar o value, o item dentro do option, vai sair no output.
```html
<p>
            <label for="iprof">Profissão: </label>
            <input type="text" name="prof" id="iprof" list="listprof">
            <datalist id="listprof">
                <option>Administrador</option>
                <option>Contador</option>
                <option>Desenvolvedor</option>
                <option>Professor</option>
            </datalist>
</p>
```
## Text Area
Recomendado usa-lo com o método POST. Funciona para colocar texto mais grande, com um número de coluna(caracteres na horizontal) e linhas(caracteres na vertical), columns e rows, Mas dá para o usuário fazer um resize. 
Dentro das tags você pode colocar o que aparece por padrão quando você começa.
```html
<p>
     <label for="imensagem">Mensagem: </label><br>
	<textarea name="mensagem" id="imensagem" cols="30" rows="10"></textarea>
</p>
```
## Tipos de input - com visuais diferentes, em diferentes navegadores e sistemas operacionais, por quê?
Os navegadores podem apresentar visuais diferentes. E pode não ser compatível em alguns sistemas operacionais ou navegadores, certos tipo de input. E é preciso haver atualizações dos desenvolvedores, para resolver esses problemas.
**Guanabara mandou verificar na maioria dos navegadores.**
## Fieldset
Agrupamento de entradas, um conjunto de campos. Você pode definir um nome para ele com a tag legend, assim é definido um nome para esse grupo de campos.
```html
<fieldset>
            <legend>Dados Pessoais</legend>
            <p>
                <label for="inome">Nome:</label>
                <input type="text" name="nome" id="inome" required minlength="5" maxlength="20">
            </p>
            <p>
                <label for="iemail">Email:</label>
                <input type="email" name="email" id="iemail" required autocomplete="email">
            </p>
            <p>
                <label for="itel">Telefone:</label>
                <input type="tel" name="tel" id="itel" autocomplete="tel" required pattern="^\(\d{2}\)\d{4,5}-[0-9]{4}$" placeholder="(xx)xxxx-xxxx">
            </p>
</fieldset>
```
## Output
Um resultado a partir de inputs, por exemplo. Usado para mostrar resultado de alguma coisa. O output não é enviado no submit.
```html
<form action="cadastro.php" method="get">
        <p>
            <label for="in1">Número 1: </label>
            <input type="number" name="n1" id="in1" min="0" max="50" required oninput="isoma.innerHTML = Number(in1.value) + Number(in2.value)">
        </p>
        <p>
            <label for="in2">Número 2: </label>
            <input type="number" name="n1" id="in2" min="0" max="50" required oninput="isoma.innerHTML = Number(in1.value) + Number(in2.value)">
        </p>
        <p>
            <label for="isoma">Soma dos números: </label>
            <output id="isoma" name="soma">0</output>
        </p>
        <p>
            <input type="submit" value="Enviar">
            <input type="reset" value="Limpar">
        </p>
</form>
```
Esse código de cima calcula a soma entre os dois inputs e mostra no output, quando é feito a alteração no input.
# Propriedades no estilo:
## Text-overflow 
O text overflow trata o que acontece quando o texto excede o tamanho do espaço. Mas o que seria o text-overflow: elipsis

Em CSS, `text-overflow: ellipsis;` é uma propriedade que controla como o conteúdo oculto é sinalizado aos usuários quando o texto transborda de seu contêiner. Especificamente, ele faz com que o texto excedente seja truncado e substituído por reticências (...).

Para que funcione o text overflow é necessário do overflow:hidden. 
## White-space: nowrap
Deixa continuo numa linha e não não quebra. `white-space: nowrap;` 