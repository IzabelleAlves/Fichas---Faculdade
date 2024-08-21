let array = [3, 8, 9, 12, 4, 7, 17]
let contadorPar = 0
let contadorImpar = 0

for (let i of array){
  if (i % 2 == 0){
    contadorPar++
  } else {
    contadorImpar++
  }
}

console.log(`${contadorPar} números pares e ${contadorImpar} números ímpares`)