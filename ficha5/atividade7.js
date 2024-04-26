//Receber três números como parâmetros e imprimi-los em ordem crescente;

function ordem(a, b, c) {
    let crescente = [a, b, c];
    crescente.sort((a, b) => a - b); 
    console.log("Números em ordem crescente:", crescente);
}
ordem(22, 13, 44);
