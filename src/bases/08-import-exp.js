// import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";


// console.log(owners);

export const getHeroeById = (id) => heroes.find(item=>item.id === id);

// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => heroes.filter(item=>item.owner === owner);

// console.log(getHeroesByOwner('Marvel'));

