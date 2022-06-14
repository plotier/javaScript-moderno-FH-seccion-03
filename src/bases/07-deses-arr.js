const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p3] = personajes; 
console.log(p3)

const retornaArreglo = ()=>{
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre
const uzeState = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const arr = uzeState('Goku')

const [nombre, zetNombre] = arr;
console.log(nombre);
zetNombre();