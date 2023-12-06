import powers from "../data/powers";


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(){//return string
        // el signo de ? es null check, pero el ! obliga a typescript correr el codigo
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';





    }

};



