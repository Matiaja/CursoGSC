const numeros = [1,2,3,4,5,6,7,8,9,10]

const valorInicial = 0;
const suma = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, valorInicial);

console.log(suma);