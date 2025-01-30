//Dado o nome de um dos integrantes da sua sala,
//imprimir o sobrenome da pessoa (ao menos 3 pessoas).

let nomes: string[] = ["Izabelle Alves", "Rubia Freitas", "Celso Vieira"];

for (let i = 0; i < nomes.length; i++) {
  let nomeCompleto = nomes[i];
  let indiceEspaco = nomeCompleto.lastIndexOf(" ");

  if (indiceEspaco != -1) {
    // ele retornaria -1 se o espaço nao fosse encontado na string
    let sobrenome = nomeCompleto.substring(indiceEspaco + 1); // p/ contar a partir da prox posição
    console.log(sobrenome);
  } else {
    console.log("Nome inexistente");
  }
}
