```rust
fn conteudo_opcional() {
    let conteudo = ler_arquivo(String::from(""));

    match &conteudo {
        Some(content) => println!("Conteúdo do arquivo"),
        None => println!("Arquivo vázio")
    }

    if let Some(valor) = &conteudo { // O if let faz uma especie de match só que um caso apenas

    }

    println!("{:?}", conteudo)    // Só apresenta se tiver presente
}

fn ler_arquivo(path: String) -> Option<String> { // Retorna um valor que pode ser String ou nulo
    Some(String::from("Conteúdo do arquivo")) // Retorna String, caso seja nulo, deve ser usado: None
}
```
