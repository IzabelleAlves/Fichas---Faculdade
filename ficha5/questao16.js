let array1 = [2, 5, 7, 9]
let array2 = [2, 5, 7, 9]

  if (array1.length != array2.length) {
    console.log(`false`)
  } else if (array1.every((a, i) => a == array2[i])){
      console.log(`true`)
    } else {
      console.log(`false`)
    }
