//Computar a distância entre dois pontos tridimensionais;

//Para o primeiro ponto 1,2,3)
let x1 = 1
let y1 = 2
let z1 = 3
//Para o segundo ponto 
let x2 = 4
let y2 = 5
let z2 = 6
let par1 = (x2 - x1) **2
let par2 = (y2 - y1) **2
let par3 = (z2 - z1) **2

let distancia = Math.sqrt(par1 + par2 + par3)

console.log(distancia.toFixed(3))