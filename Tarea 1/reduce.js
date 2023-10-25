function miReduce(array, funcionReductora, valorInicial) {
    let acumulador = valorInicial === undefined ? array[0] : valorInicial;

    for (let i = valorInicial === undefined ? 1 : 0; i < array.length; i++) {
        acumulador = funcionReductora(acumulador, array[i]);
    }

    return acumulador;
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valorInicial = 0;

const suma = miReduce(numeros, (acumulador, valorActual) => acumulador + valorActual, valorInicial);

console.log(suma);
