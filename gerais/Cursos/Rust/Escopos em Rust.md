```rust
fn sombra() {
    let a = 123;

    let essa_string: &'static str = "meu nome"; // A string é sempre uma referência estática

    { // Você pode criar escopos assim
        let b = 32;
        println!("Bom dia = {}", b);
    }

    println!("a = {}", a);
}

fn main() {
    sombra();
    println!("Hello, world!");
}

```
- **Shadowing:** a variável de dentro do escopo com mesmo nome que é declarada dentro e fora não são a mesma.
- Você pode criar variáveis duplicadas, a diferença é que a anterior é simples banalizada para os códigos seguintes.