//Desestructuración
//Asignación desesctructurante

const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


//le cambié el nombre a useContext por la nueva versión de react
const uzeContext = ({clave, nombre, edad, rango='Capitan'})=> {
    // console.log(nombre, edad, rango)

    return{
        nombreClave:clave,
        anios: edad,
        latlng:{
            lat:13.2423,
            lng:33.5432
        }
    }
}



const {latlng:{lat, lng},nombreClave, anios} = uzeContext(persona);

console.log(nombreClave,anios)
console.log(lat,lng)