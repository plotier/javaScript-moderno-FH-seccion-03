
const persona = {
    nombre:'Toni',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 55321321,
        lat:13.2133,
        lng:34.546549
    }
};

// console.table(persona);


const persona2 ={...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)