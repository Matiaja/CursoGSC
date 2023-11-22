function miFilter(array, condicion) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (condicion(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

const producto = [
    {nombre: "Leche", stock: "40"},
    {nombre: "Lata Atun", stock: "20"},
    {nombre: "Huevo", stock: "48"},
    {nombre: "Cerveza", stock: "0"},
    {nombre: "Aceite", stock: "25"},
    {nombre: "Rollo de cocina", stock: "0"},
    {nombre: "Huevo", stock: "0"},
];

function HayStock(prod){
    return prod.stock > 0; 
}

const resultado = miFilter(producto, HayStock);

console.log(resultado);
