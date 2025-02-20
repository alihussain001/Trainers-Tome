import { Request, Response } from "express";
import { ICreatePokemon } from "./dto/pokemons.dto";
import Pokemon, { IPokemon } from "../../models/pokemons.model";

// export const getPokemon = async (req: Request, res: Response) =>{
//     try{
//         const pokemonList: IPokemon[] = await Pokemon.find();
//         res.status(200).json(pokemonList);
//     } catch(error){
//      res.status(500).json({ message: 'Error fetchig Pokemons'});
//     }
// };

// Create Pokemon
export const createPokemon = async (req: Request, res: Response) =>{
    const { name, type, level, abilities,stats, moves } = req.body;

    const existingPokemon = await Pokemon.findOne({name});
    if(existingPokemon){
        res.status(400).json({ message: "Pokemon with this name already"});
        return;
    }

    const newPokemon = await Pokemon.create({
        name, 
        type,
        level,
        abilities,
        stats,
        moves,
    });

    const savedPokemon = await newPokemon.save();
    
    res.status(200).json(savedPokemon);

};

// GET ALL POKEMON
export const getPokemon = async (req: Request, res: Response) => {
    try{
        const pokemonList: IPokemon[] = await Pokemon.find();
    res.status(200).json(pokemonList);
    }catch(error){
        res.status(500).json({ message: "Error fetching Pokemons"});
    }

};

