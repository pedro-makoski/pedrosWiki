Tem tamanho dinâmico.
```rust
fn vectors() {
    let mut notasSized: Vec<f32> = Vec::with_capacity(4); // Cria um vetor que cabem 4 elementos

    notasSized.push(5.2); // Adiciona no final
    notasSized.push(3.2);
    notasSized.push(6.5);

    let mut notas: Vec<f32> = Vec::new(); // Instância um novo vetor
    let mut notas2: Vec<f32> = vec![0.2, 0.5, 32f32]; // Cria um vetor com base em valores na mesma linha
    println!("Capacidade = {}", notas2.capacity()); // Imprime a capacidade do vetor

    notas2.push(5.5);
    notas.push(10f32);
    notas.push(8.8);

    println!("Capacidade = {}", notas2.capacity());

    println!("{:?}", notas); // Imprime o vetor inteiro
    println!("{:.2}", notas2[0]); // Obtem um elemento do vetor
    println!("{:?}", match notas.get(1) { // Obtem um Option do valor a partir de seu valor e existência
        Some(n) => *n, // Retorna um ponteiro, por isso é desreferenciado
        None => 0.0
    });

    let ultimo_valor = notas2.pop(); // Remove o ultimo elemento

    for nota in &notas {
        println!("{}", nota)
    }

	    while let Some(nota) = notas.pop() { // Enquanto tiver ultimo elemento faça
        println!("{:?}", nota)
    }

    println!("{:?}", notas)
}
```