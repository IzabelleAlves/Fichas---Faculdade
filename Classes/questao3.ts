class Cubo {
  lado: number;

  constructor(lado: number) {
    this.lado = lado;
  }

  calcularVolume(): number {
    return this.lado ** 3;
  }
}

const cubo = new Cubo(3);
console.log(cubo.calcularVolume());