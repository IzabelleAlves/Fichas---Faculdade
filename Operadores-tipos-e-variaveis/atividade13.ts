//Computar as raízes de uma equação do segundo grau; Formato da equação: ax² + bx +c.

let a: number = 2;
let b: number = -5;
let c: number = 2;
let delta: number = b ** 2 - 4 * a * c;
let x1: number = (-b + Math.sqrt(delta)) / (2 * a);
let x2: number = (-b - Math.sqrt(delta)) / (2 * a);

console.log("x1 é =", x1, "e x2 é =", x2);
