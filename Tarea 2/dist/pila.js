"use strict";
class Pila {
    constructor() {
        this.elementos = [];
    }
    push(elementos) {
        this.elementos.push(elementos);
    }
    pop() {
        return this.elementos.pop();
    }
    size() {
        return this.elementos.length;
    }
}
// ejemplo de pilas creadas con alguntos tipos
const pilaNumber = new Pila();
pilaNumber.push(100);
pilaNumber.push(3);
const pilaString = new Pila();
pilaString.push('hola');
pilaString.push('que tal');
const pilaBoolean = new Pila();
pilaBoolean.push(true);
pilaBoolean.push(false);
class pilaSinRepetidos extends Pila {
    push(elemento) {
        if (!this.elementos.includes(elemento)) {
            super.push(elemento);
        }
    }
}
