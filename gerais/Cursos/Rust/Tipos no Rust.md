Os tipos podem ser inferidos no Rust:
```rust
fn main() {
    let variavel: i32 = 300; // Define uma variável inteira com 32 bits

    println!("Variável = {}, Tamanho = {}", variavel, std::mem::size_of_val(&variavel)); // Imprime a variável e seu tamanho

    let decimal: f32 = 2.5; // Define um float com 32 bits

    println!("Decimal = {}, Tamanho = {}", decimal, std::mem::size_of_val(&decimal));

    let mut booleana: bool = true; // Coloca mut para informar que a variável pode ser alterada;

    println!("Boleana = {}, Tamanho da booleana = {}", booleana, std::mem::size_of_val(&booleana));

    let letra: char = 'C';
    println!("Tamanho do char = {}", std::mem::size_of_val(&letra));
}

```