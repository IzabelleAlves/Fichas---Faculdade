function intervalo (n1: number, n2: number): number[]{

  let intervalo: number[] = []
  
  for (let i: number = n1 + 1; i < n2; i++){
    intervalo.push(i)
  }
  return intervalo
}

console.log(intervalo(1, 10))