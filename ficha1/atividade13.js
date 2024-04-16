//Computar as raízes de uma equação do segundo grau; Formato da equação: ax² + bx +c.

let a = 2
let b = -5
let c = 2
let delta = (b ** 2) - (4 * a * c)
let x1 = (-b + Math.sqrt(delta)) / (2 * a)
let x2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log('x1 é =', x1, 'e x2 é =', x2)