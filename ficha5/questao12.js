let array1 = [5, 8, 9, 10, 22]
let array2 = [5, 8, 9, 10, 22]
let array3 = [] 

for (let i = 0; i < array1.length; i++){
  array3[i] = array1[i] + array2[i]
}

console.log(array3)