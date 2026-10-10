Variáveis em si são imutáveis, entretanto você pode criar globalmente as constantes e static que são imutáveis e podem ser globais.
O static possui local na memoria, enquanto o const é simplesmente substituído em todos os lugares em que é chamado.
O const e o static só recebem valores literais.

O static pode ser mutável, porém isso é inseguro e deve ficar dentro de unsafe. E pode nem sempre funcionar.
```rust
const PI: f32 = 3.14;
static GLOBAL:u8 = 1;

fn main() {
    println!("PI = {}", PI);

    let variavel: i32 = 300;

    println!("Variável = {}, Tamanho = {}", variavel, std::mem::size_of_val(&variavel));

    let decimal: f32 = 2.5;

    println!("Decimal = {}, Tamanho = {}", decimal, std::mem::size_of_val(&decimal));

    let booleana: bool = true;

    println!("Boleana = {}, Tamanho da booleana = {}", booleana, std::mem::size_of_val(&booleana));

    let letra: char = 'C';
    println!("Tamanho do char = {}", std::mem::size_of_val(&letra));
}

```