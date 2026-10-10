Você pode usar IFs no Rust.
```rust
fn main() {
    sombra();
    println!("Hello, world!");
    println!("Soma: {}", sum(2, 2));

    let idade: i8 = 24;
    let responsavel_autorizou = false;

    if idade > 18 {
        println!("Você é obrigado a votar");
    } else if idade > 16 && responsavel_autorizou {
        println!("Vocẽ não é obrigado a votar")
    }

    let a: &'static str = if idade > 18 {"maior"} else {"menor"};

    println!("a = {}", a);
}
```
- Não é obrigatório os parênteses na condição
- O && precede o ||
- If's podem ser expressões e podem dar valores as variáveis
# Match
Você pode testar diferentes casos de um valor. O `_` significa desconhecido.
```rust
let linguagem = "PHP";
let proposito = match linguagem {
	"PHP" => "Web",
	"Kotlin" => "Android",
	"Python" => "Data Sicence",
	_ => "Desconhecido",
};

println!("{}", proposito);
```
Você pode passar configurações mais interessantes para pattern matching mais rigorosos:
```rust
fn pattern_matching() {
    for x in 1..=20 {
        println!("{}: {}", x, match x {
            1 => "Pouco",
            2 | 3 => "Um pouqinho",
            4..=10 => "Um bocado",
            _ if x % 2 == 0 => "Uma boa quantidade",
            _ => "Muito",
        })
    }
}
```
