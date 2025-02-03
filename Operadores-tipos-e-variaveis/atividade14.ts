//Computar a distância entre dois pontos tridimensionais;

//Para o primeiro ponto 1,2,3)
let x1: number = 1;
let y1: number = 2;
let z1: number = 3;
//Para o segundo ponto
let x2: number = 4;
let y2: number = 5;
let z2: number = 6;
let par1: number = (x2 - x1) ** 2;
let par2: number = (y2 - y1) ** 2;
let par3: number = (z2 - z1) ** 2;

let distancia: number = Math.sqrt(par1 + par2 + par3);

console.log(distancia.toFixed(3));
