//Converter o dia da semana (string) em um valor numérico (“domingo” -> 0, “segunda” -> 1, etc.);

let semana: string[] = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
let diaDaSemana: string = "quinta";
diaDaSemana = diaDaSemana.toLowerCase();
let indice: number = -1;

for (let i = 0; i < semana.length; i++) {
  if (semana[i].toLowerCase() == diaDaSemana) {
    indice = i;
    break;
  }
}

if (indice != -1) {
  //// p verificar se encontrou o dia da semana no array e immprimir o valor numérico
  console.log("O índice do dia", diaDaSemana, "na semana é:", indice);
} else {
  console.log(diaDaSemana, "não é um dia válido da semana.");
}
