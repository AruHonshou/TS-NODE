import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";



export const getPokemon = async( pokemonId: Number): Promise<Pokemon> => {
    
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
    // console.log( resp.data.name );
    

    return data;
};
