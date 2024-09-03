function dividir (numero: number, ...vetor: number[]): number[]{

  return vetor.map((vetor) => vetor / numero)
}

console.log(dividir(10, 33, 14, 27, 94))