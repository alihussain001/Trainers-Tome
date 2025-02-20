import { Schema, model } from "mongoose";

export interface IPokemon{
    name: string;
    type: string[];
    level: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    };
    moves: string[];
}

const PokemonSchema = new Schema<IPokemon>({
    name: { type: String, required: true, unique: true},
    type: { type: [String], required: true},
    level: { type: Number, required: true, default: 1},
    abilities: { type: [String], required:true},
    stats: {
        hp: { type: Number, required: true},
        attack: { type: Number, required: true},
        defense: { type: Number, required: true},
        speed: { type: Number, required: true}
    },
    moves: { type: [String], required: true},

});

const Pokemon = model<IPokemon>('Pokemon', PokemonSchema);
export default Pokemon;