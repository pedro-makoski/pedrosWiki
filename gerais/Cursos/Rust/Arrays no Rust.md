Os arrays tem tamanho fixo e definido.
```rust
fn main() {
    let notas: [f32; 4] = [6.5; 4]; // Define um array com 4 valores 6.5 repetidos
    let inteiro: usize = 0; // É usize pois esse é o valor correto para determinar variáveis com o índice para um array, pois a depender do sistema de memória do sistema é variado.

    for indice in 0..notas.len() { // Percorre um iterador apartir da quantidade de items
        println!("A nota {} é {}", indice, notas[indice]);
    }

    matriz();
}

fn matriz() {
    let matriz: [[f32; 3]; 2] = [
        [0.0, 1.2, 5.3],
        [5.4, 0.2, 3.4]
    ];

    for linha in matriz {
        for item in linha {
            println!("Item = {}", item);
        }
    }
}

```