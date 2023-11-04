class Pila<Elem> {
    elementos: Elem[] = [];

    push(elementos: Elem){
        this.elementos.push(elementos);
    }

    pop(): Elem | undefined{
        return this.elementos.pop();
    }

    size(): number{
        return this.elementos.length;
    }
}

// ejemplo de pilas creadas con alguntos tipos
const pilaNumber = new Pila<number>();
pilaNumber.push(100);
pilaNumber.push(3);

const pilaString = new Pila<string>();
pilaString.push('hola');
pilaString.push('que tal');

const pilaBoolean = new Pila<boolean>();
pilaBoolean.push(true);
pilaBoolean.push(false);

class pilaSinRepetidos<Elem> extends Pila<Elem>{
    push(elemento: Elem){
        if(!this.elementos.includes(elemento)){
            super.push(elemento);
        }
    }

}