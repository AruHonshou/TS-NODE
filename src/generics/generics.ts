
export const printObject = ( argumen: any ) => {
    console.log( argumen );
    
};

//tradicional
export function genericFunction<T>(argument:T):T{//T es el estandar de tipo generico
    return argument;
}


//fat arrow
export const genericFunctionArrow = <T>(argument: T ) => argument;
