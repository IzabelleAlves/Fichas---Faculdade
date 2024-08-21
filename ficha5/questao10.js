let array = [1, 3, 5, -2]
let arrayPosCopia = [1, 4, 3, 20]
array.reverse()

for (let i = 0; i < array.length; i++){
  arrayPosCopia[i] = array[i]
}

console.log(arrayPosCopia)