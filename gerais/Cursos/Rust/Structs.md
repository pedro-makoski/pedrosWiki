```rust
struct Titular { // Cria uma struct
    nome: String,
    sobrenome: String
}

struct Conta {
    titular: Titular,
    saldo: f64
}

impl Conta { // Implementa métodos para a struct
    fn sacar(&mut self, valor: f64) { // O self é uma referência mutável, pode ser apenas self também
        self.saldo-=valor;
    }
}

fn conta_corrente() {
    let titular = Titular{ nome: String::from("Bom"), sobrenome: String::from("dia") }
    let mut conta: Conta = Conta{
        titular // Pode ser apenas o nome do atributo, quando é o mesmo da variável
        saldo: 50.2        
    };

    conta.sacar(50.0);
}
```
