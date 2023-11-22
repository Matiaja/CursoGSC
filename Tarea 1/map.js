<<<<<<< HEAD
function miMap(arreglo, funcion) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
      nuevoArreglo.push(funcion(arreglo[i]));
    }
    return nuevoArreglo;
  }
  
  let usuarios = [
      {id: 1, nombre: "Juan"}, 
      {id: 2, nombre: "Maria"},
      {id: 3, nombre: "Pedro"},
      {id: 4, nombre: "Ana"}
  ];
  
  let IdyUsuario = miMap(usuarios, function(user){
    return `El id de ${user.nombre} es ${user.id}`;
  });
  
  console.log(IdyUsuario);
  
=======
function miMap(arreglo, funcion) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
      nuevoArreglo.push(funcion(arreglo[i]));
    }
    return nuevoArreglo;
  }
  
  let usuarios = [
      {id: 1, nombre: "Juan"}, 
      {id: 2, nombre: "Maria"},
      {id: 3, nombre: "Pedro"},
      {id: 4, nombre: "Ana"}
  ];
  
  let IdyUsuario = miMap(usuarios, function(user){
    return `El id de ${user.nombre} es ${user.id}`;
  });
  
  console.log(IdyUsuario);
  
>>>>>>> 02ce516f038ef0fd5df873e7d0d6cd6483a5b1d4
