class figuras{
    tipo:string

    constructor(tipo:string){
        this.tipo = tipo
    }

    perimetro():number {return 0}

    area(): number{return 0}
    
}

class cuadrado extends figuras{
    lado: number

    constructor(lado: number){
        super("cuadrado");
        this.lado = lado;
    }

    perimetro(): number {
        return 4*this.lado;
    }

    area(): number{
        return this.lado * this.lado
    }
}

class circulo extends figuras{
    radio: number

    constructor(radio:number){
        super("circulo");
        this.radio = radio;
    }

    perimetro(): number {
        return 2* Math.PI * this.radio;
    }

    area(): number{
        return Math.PI * (this.radio) ** 2
    }

}

const nuevoCirculo = new circulo(4);
console.log(nuevoCirculo.perimetro());
console.log(nuevoCirculo.area());

const nuevoCuadrado = new cuadrado(10);
console.log(nuevoCuadrado.perimetro());
console.log(nuevoCuadrado.area());