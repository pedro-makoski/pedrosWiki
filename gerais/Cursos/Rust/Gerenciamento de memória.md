A memoria de uma linguagem de programação é gerenciada em diferentes partes:
- Stack:
	- Memória pequena
	- Qualquer necessidade de espaço maior resultado em stack overflow
	- Basicamente a memória é dividia em frame stack que são colocada em formato de stack mesmo
	- Quando o processo encerra a stack destroi todos os espaços alocados na frame stack
	- É muito performática, pois insere a partir de um ponteiro na memória que vai da direita para a esquerda
- Heap
	- Dados maiores e que necessitam de compartilhamento
	- Mais pesado e lento
	- Necessita de controle para ser excluído
	- O heap é trabalhada diante de uma tabela com a posição inicial e a quantidade de bytes subsequentes
- Unintialized
	- Variáveis criadas sem valor
- Data
	- Dados simples, puros e estaticos
- Text/Code
	- Código em si que roda o programa

Existem, diante disso, linguagens de extremo baixo nível que exige total gerenciamento(como C), linguagens meio termo que dão ainda controle, porém facilitam a vida e linguagens extremamente abstraídas que configuram tudo sozinhas numa thread separada. Essas ferramentas usam o: 
# Garbage Collector
Ele gerencia os espaços da memória que podem ser removidos. Existem dois algoritmos base para isso acontecer:
- **ARC:** cria uma subvariavel que indica o índice da referência e quando o índice vai para 0, o local é destruído. O problema é que em casos de referências ciclicas pode ser causado um vazamento de memória(memória ultrapassando o necessário). Essa é uma estratégia performática
- **Mark-And-Sweep**: define arvores que indicam as variáveis em suas diferentes referências e os locais em que são utilizados, quando uma função para os elementos que estão a cima dela, as quais está dentro de seu escopo são destruídas.
# Ownership e Borrow
- **Ownership**: o espaço aramazenado só pode pertencer a apenas uma variável. Se essa variável parar de existir o espaço é destruído
- **Borrow**: é passado para outro escopo uma referência que pode ser mutável ou não do espaço armazenado, permitindo emprestar a variável por um momento
```rust
fn ownership() {
    let mut uma_string = String::from("Pedro Makoski"); // Cria um espaço que referência para uma string no heap

    rouba(&mut uma_string); // passa uma referência mutável

    println!("{}", uma_string);
}

fn rouba(string: &mut String) { // Recebe uma referência mutável
    string.push_str(" 2"); 
    println!("{}", string);
}
```