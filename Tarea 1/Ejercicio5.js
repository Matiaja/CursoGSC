<<<<<<< HEAD
function zero (parametro) {
    return parametro? parametro(0) : 0;
}

function one (parametro) {
    return parametro? parametro(1) : 1;
}

function two (parametro) {
    return parametro? parametro(2) : 2;
}

function three (parametro) {
    return parametro? parametro(3) : 3;
}

function four (parametro) {
    return parametro? parametro(4) : 4;
}

function five (parametro) {
    return parametro? parametro(5) : 5;
}

function six (parametro) {
    return parametro? parametro(6) : 6;
}

function seven (parametro) {
    return parametro? parametro(7) : 7;
}

function eight (parametro) {
    return parametro? parametro(8) : 8;
}

function nine (parametro) {
    return parametro? parametro(9) : 9;
}

function plus (b) {
    return function(a) {
        return a + b;
    };
}

function minus (b) {
    return function(a) {
        return a - b;
    };
}

function times (b) {
    return function(a) {
        return a * b;
    };
}

function dividedBy(b){
    return function (a) {
        return Math.trunc(a / b);
    }
}

console.log(seven(times(five()))); 
console.log(four(plus(nine()))); 
console.log(eight(minus(three()))); 
=======
function zero (parametro) {
    return parametro? parametro(0) : 0;
}

function one (parametro) {
    return parametro? parametro(1) : 1;
}

function two (parametro) {
    return parametro? parametro(2) : 2;
}

function three (parametro) {
    return parametro? parametro(3) : 3;
}

function four (parametro) {
    return parametro? parametro(4) : 4;
}

function five (parametro) {
    return parametro? parametro(5) : 5;
}

function six (parametro) {
    return parametro? parametro(6) : 6;
}

function seven (parametro) {
    return parametro? parametro(7) : 7;
}

function eight (parametro) {
    return parametro? parametro(8) : 8;
}

function nine (parametro) {
    return parametro? parametro(9) : 9;
}

function plus (b) {
    return function(a) {
        return a + b;
    };
}

function minus (b) {
    return function(a) {
        return a - b;
    };
}

function times (b) {
    return function(a) {
        return a * b;
    };
}

function dividedBy(b){
    return function (a) {
        return Math.trunc(a / b);
    }
}

console.log(seven(times(five()))); 
console.log(four(plus(nine()))); 
console.log(eight(minus(three()))); 
>>>>>>> 02ce516f038ef0fd5df873e7d0d6cd6483a5b1d4
console.log(six(dividedBy(two()))); 