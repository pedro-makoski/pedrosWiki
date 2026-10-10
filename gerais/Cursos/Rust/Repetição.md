# While e Loop
While faz enquanto a afirmação for verdadeira. E loop é um loop infinito. O break para o loop e continue vai direto para a próxima interação:
```rust

fn repeticao() {
    let multiplicador: u8 = 5;

    let mut contador: u8 = 0;

    while contador < 10 {
        contador+=1;
        println!("{} x {} = {}", contador, multiplicador, contador*multiplicador);
    }

    contador = 0;
    loop {
        contador+=1; 
        println!("{} x {} = {}", contador, multiplicador, contador*multiplicador);


        if(contador == 10) {
            break;
        }
    }
}
```
# For Loops
```rust
for i in 1..=10 { // O mesmo que i in 1..11 - É um for que vai do 1 até 0 10
    println!("{} x {} = {}", i, multiplicador, i*multiplicador);
}
```
