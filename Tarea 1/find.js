function miFind(array, condicion) {
    for (let i = 0; i < array.length; i++) {
        if (condicion(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

const producto = [
    {nombre: "Leche", stock: "40"},
    {nombre: "Lata Atun", stock: "20"},
    {nombre: "Huevo", stock: "48"},
    {nombre: "Cerveza", stock: "0"},
    {nombre: "Aceite", stock: "25"},
    {nombre: "Rollo de cocina", stock: "0"},
    {nombre: "Huevo", stock: "0"},
    //pongo dos veces huevo para mostar que find solo devuelve
    //el primer elemento que coincida, en este caso huevo con 48 de stock
];

function esHuevo(prod){
    return prod.nombre === "Huevo"; 
}

console.log(miFind(producto, esHuevo));