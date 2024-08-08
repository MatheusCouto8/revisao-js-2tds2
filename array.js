let carro1 = "Fuscao";
let carro2 = "Brasilia";
let carro3 = "Fiesta";

const carro = [];
carro[0] = "Celta"
carro[1] = "Corsa"

console.log(carro);
console.table(carro);
console.log(carro.length);
console.clear();

let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro.length);
console.log(carro == carroCopia1)

let carroCopia2 = carro.slice();
let carroCopia3 = 