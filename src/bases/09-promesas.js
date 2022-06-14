import {getHeroeById} from "./bases/08-import-exp";


//Nota Iña: El resolve manda el argumento al .then, y el reject al .catch

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         //Tarea
//         //Importen el 
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el héroe');
//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe)
// })
// .catch(err=>console.warn(err))

const getHeroeByIdAsync=(id)=>{

 return new Promise((resolve, reject)=>{

    setTimeout(()=>{

        const p1 = getHeroeById(id);
        if(p1){
            resolve(p1)
        }else{
            reject('No se pudo encontrar el héroe');
        }
    },2000)
});

}

getHeroeByIdAsync(3)
//no hace falta poner el argumento como heroe=>console.log(heroe), pero está bien
.then(console.log)
.catch(console.warn)










