## Abstração
Nessa parte entendemos o que é uma entidade, pode fazer, suas características, por meio de métodos e atributos. Focando apenas no essencial.
## Encapsulamento
Os métodos e atributos ficam encapsulados numa classe, e existem formas de visibilidade podendo ser:
- **Publico**(*public*): Acessível para todos os desenvolvedores, podendo ser acessada e executada por qualquer um. 
- **Protegido**(*protected*): Só pode ser acessada pelas classes filhas, ou a classe mesmo.
- **Privado**(*private*): os atributos e métodos só são acessíveis pela própria classe.
O encapsulamento permite com que você coloque classes em outros arquivos, e até mesmo arquivos criptografados, que podem ser acessados e instanciados, em outros arquivos.
## Herança
Por exemplo, uma entidade, uma classe de uma pessoa com seus atributos, pode dar herança a seus filhos, por exemplo contador, que tem todos os atributos de uma pessoa, e mais alguns. Ou por exemplo, pessoa que dá herança aos filhos: aluno e professor, veja no diagrama de classes:

![[Pasted image 20240716161256.png]]
Perceba-se que a herança vai de pai para filho, não ao contrário, como podemos afirmar que todo professor é uma pessoa, mas nem toda pessoa é professor.
## Polimorfismo 
Significa muitas formas. As vezes é preciso que alguns comportamentos sejam diferentes dos definidos pela classe pai, para isso usamos o polimorfismo, para modificar. Podendo acontecer por meio de:
### Sobrescrita
É sobrescrito, estamos descartando aquele método ou propriedade, e escrevendo de novo, do zero.
![[Pasted image 20240716161843.png]]
### Sobrecarga
A sobrecarga de métodos, é executada da mesma forma, só que com dados(parâmetros) diferentes, que recebem. Onde criamos dois métodos, com o mesmo nome, só que com ações diferentes, e tipos de entrada diferentes.
## Exemplo código JS
```js
class Pessoa {
  constructor(nome) {
  	this.nome = nome
  }
  
  falar(frase) {
  	console.log(this.nome + " disse: " + frase)
  }
}

class Aluno extends Pessoa{
   estudar(disciplina) {
  	console.log(this.nome + " estuda " + disciplina)
  }  	
}

class Professor extends Pessoa {
   ensinar(disciplina) {
  	console.log(this.nome + " ensina " + disciplina)
  } 
}

const p1 = new Professor("Pedro")

p1.falar("Oi, tudo bem?")
p1.falar("Como vai?")
p1.ensinar("Matemática")
```
Para uma classe herdar o elemento pai, é usado extends, assim é só necessário chamar o professor ou aluno, e as propriedades no constructor do elemento já vão estar lá. Caso você queira colocar outro constructor é necessário, chamar um super, e pedir as propriedades de novo, para obtelas de volta, por exemplo. 
```js
class Professor extends Pessoa {
	constructor(nome, area) {
		super(nome)
		this.area = area
	}
}
```
