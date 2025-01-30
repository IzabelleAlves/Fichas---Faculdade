//A- Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s e else’s);

let d: number = 24;

if (d % 3 === 0 && d % 4 === 0) {
  console.log(`${d} é divisível por 3 e por 4.`);
} else {
  console.log(`${d} não é divisível por 3 e por 4 ao mesmo tempo.`);
}

//B- Testar se um número é divisível por 3 mas não por 4;
let e: number = 18;

if (e % 3 == 0 && e % 4 != 0) {
  console.log(e, "é divisível por 3, mas não é divisível por 4.");
} else {
  console.log("Inválido");
}

//C- Testar se um número é divisível por 2 ou por 7

let c: number = 23;

if (c % 2 == 0 || c % 7 == 0) {
  console.log(c, "é divisível por 2 ou por 7");
} else {
  console.log("Não é divisível");
}
