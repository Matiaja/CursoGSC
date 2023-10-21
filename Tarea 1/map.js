let usuarios = [
    {id: 1,nombre: "Juan"}, 
    {id: 2,nombre: "Maria"},
    {id: 3,nombre: "Pedro"},
    {id: 4,nombre: "Ana"}
];

let IdyUsuario = usuarios.map(function(user){
    return `El id de ${user.nombre} es ${user.id}`;
});

console.log(IdyUsuario);
