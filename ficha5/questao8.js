let notas = [7, 8, 2, 9, 1, 5, 7]
let media = (notas.reduce((a, b)=> a + b) / notas.length).toFixed(2)
let contador = 0

for (let i of notas) {
  if (i > media){
    contador++
  }
}

console.log(contador)