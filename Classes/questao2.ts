class Quadrado {
  lado: number;

  constructor(lado: number) {
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado
  }
}

const quadrado1 = new Quadrado(4)

console.log(`O lado do quadrado é ${quadrado1.lado}`)
console.log(quadrado1.calcularArea())