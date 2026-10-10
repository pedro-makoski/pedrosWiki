Erros irrecuperáveis que finalizam o sistema, use a macro panic!("Msg de erro").
Para controlar os erros do seu sistema use a estrutura Result:
```rust
fn erros() {
    match resultado() {
        Ok(s) => println!("{}", s), // Caso de ok faça
        Err(numero) => println!("{}", numero) // Caso de erro faça
    }
}

fn resultado() -> Result<String, u8> { // Indica o tipo de entrada do texto e do erro
    Err(42) // Ou Ok(String::from("Mensagem de ok"))
}
```