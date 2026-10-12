```rust
#[allow(dead_code)]
enum Color { // Cria um enum de cores
    Red,
    Green,
    Blue,

    RgbColor(u8, u8, u8), // Define um tipo que pode ter variações dentro dele
    CymkColor{cyan: u8, magenta: u8, yellow: u8, black: u8} // Um tipo com parâmetros nomeados.
}

fn cores() {
    let cor = Color::CymkColor { cyan: 100, magenta: 50, 
            yellow: 70, black: 200 };

    println!("Cor = {}", match cor {
        Color::Red => "Vermelho",
        Color::Blue => "Azul",
        Color::Green => "Verde",
        Color::RgbColor(0, 0, 0) => "Preta",
        Color::RgbColor(_, _, _) => "RGB desconhecido",
        Color::CymkColor { cyan: _, magenta: _, yellow: _, black: _ } => "CYMK desconhecido"
    });
}
```