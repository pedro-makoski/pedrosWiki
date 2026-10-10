As funções são especificadas da seguinte forma:
```rust
fn sombra() {
    let a = 123;

    let essa_string: &'static str = "meu nome";

    {
        let b = 32;
        println!("Bom dia = {}", b);
    }

    println!("a = {}", a);
}

fn sum(a: i32, b: i32) -> i32 { // Definido os tipos de parâmetros e os tipos de retornos
    a + b // Retorno implicito; Sem ponto e vírgula.
    // Pode ser explicito com return a + b;
}

fn main() {
    sombra();
    println!("Hello, world!");
    println!("Soma: {}", sum(2, 2));
}

```