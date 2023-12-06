import { Hero } from './classes/Hero';//Manera 1
// import { Hero as SuperHero } from "./classes/Hero";// Manera 2
// import * as HeroClasses from "./classes/Hero";// manera 3, esta manera toda todos los export existentes de ese archivo
// import powers from './data/powers';//Ventaja de portaciones por defecto, podemos llamarlo como queramos


const ironman = new Hero('Ironman', 1, 50);

console.log( ironman );
console.log( ironman.power );







