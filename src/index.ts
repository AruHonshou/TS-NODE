// PARA LAS CLASES DE HERO Y LA DATA DE POWERS
// import { Hero } from './classes/Hero';//Manera 1
// import { Hero as SuperHero } from "./classes/Hero";// Manera 2
// import * as HeroClasses from "./classes/Hero";// manera 3, esta manera toda todos los export existentes de ese archivo
// import powers from './data/powers';//Ventaja de portaciones por defecto, podemos llamarlo como queramos



// const ironman = new Hero('Ironman', 1, 50);

// console.log( ironman );
// console.log( ironman.power );

// PARA LOS GENERICS
// import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';



// printObject( 123 );
// printObject( new Date() );
// printObject( {a:1, b:2, c:3} );
// printObject( [1,2,3,4,5,6] );
// printObject( 'Hola Mundo' );

// console.log( genericFunctionArrow(3.23453).toFixed(2) );
// console.log( genericFunctionArrow('Hola Mundo').toUpperCase() );
// console.log( genericFunctionArrow(new Date()).getDate() );


//PARA LOS INTERFACES y GENERICS

// import { genericFunctionArrow } from "./generics/generics";
// import { Villain, Hero } from "./backs/genericos";

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade Winston Wilson',
//     dangerLevel: 2354231465
// };

// console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );


import { getPokemon } from "./generics/getPokemon";

getPokemon(4)
    .then( pokemon => console.log( pokemon.sprites.front_default ))
    .catch( error => console.error( error))
    .finally( () => console.log( 'Fin de getPokemon' ))
