const producto = [
    {nombre: "Leche", stock: "40"},
    {nombre: "Lata Atun", stock: "20"},
    {nombre: "Huevo", stock: "48"},
    {nombre: "Cerveza", stock: "0"},
    {nombre: "Aceite", stock: "25"},
    {nombre: "Rollo de cocina", stock: "0"},
    {nombre: "Huevo", stock: "0"},
];

function esHuevo(prod){
    return prod.stock > 0; 
}

console.log(producto.filter(esHuevo));