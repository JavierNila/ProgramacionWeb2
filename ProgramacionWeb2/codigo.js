let nombre = prompt("Dime tu nombre");
console.log(nombre);
let edad = prompt("Dime tu edad");
console.log(edad);
let estatura = prompt("Dime tu estatura");
console.log(estatura);
let peso = prompt("Dime tu peso");
console.log(peso)

peso = parseFloat(peso);
estatura = parseFloat(estatura) / 100; 

let masaCorporal = peso / (estatura ** 2);

console.log("Tu IMC es de: " + masaCorporal);