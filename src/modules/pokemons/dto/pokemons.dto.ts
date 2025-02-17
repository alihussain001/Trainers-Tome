export interface ICreatePokemon{
    name: string, 
    type: string,
    level: number,
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    };
}