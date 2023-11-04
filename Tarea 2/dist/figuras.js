"use strict";
class figuras {
    constructor(tipo) {
        this.tipo = tipo;
    }
    perimetro() { return 0; }
    area() { return 0; }
}
class cuadrado extends figuras {
    constructor(lado) {
        super("cuadrado");
        this.lado = lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
    area() {
        return this.lado * this.lado;
    }
}
class circulo extends figuras {
    constructor(radio) {
        super("circulo");
        this.radio = radio;
    }
    perimetro() {
        return 2 * Math.PI * this.radio;
    }
    area() {
        return Math.PI * (this.radio) ** 2;
    }
}
const nuevoCirculo = new circulo(4);
console.log(nuevoCirculo.perimetro());
console.log(nuevoCirculo.area());
const nuevoCuadrado = new cuadrado(10);
console.log(nuevoCuadrado.perimetro());
console.log(nuevoCuadrado.area());
