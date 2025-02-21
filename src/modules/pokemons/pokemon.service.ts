 import { Request, Response } from "express";
import { ICreatePokemon } from "./dto/pokemons.dto";
import Pokemon, { IPokemon } from "../../models/pokemons.model";
import { pokemonRouter } from "./pokemon.controller";

// export const getPokemon = async (req: Request, res: Response) =>{
//     try{
//         const pokemonList: IPokemon[] = await Pokemon.find();
//         res.status(200).json(pokemonList);
//     } catch(error){
//      res.status(500).json({ message: 'Error fetchig Pokemons'});
//     }
// };

// Create Pokemon
export const createPokemon = async (req: Request, res: Response) => {
  const { name, type, level, abilities, stats, moves } = req.body;

  const existingPokemon = await Pokemon.findOne({ name });
  if (existingPokemon) {
    res.status(400).json({ message: "Pokemon with this name already" });
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
  try {
    const pokemonList: IPokemon[] = await Pokemon.find({isDeleted: null});
    res.status(200).json({ length: pokemonList.length, 
        data: pokemonList,  
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching Pokemons" });
  }
};

// GET POKEMON BY ID
export const getPokemonById = async (req: Request, res: Response) => {
  const pokemonId = req.params.id;

  const pokemon = await Pokemon.findOne({_id:pokemonId, isDeleted: null});
  if (pokemon) {
    res.status(200).json({pokemon});
  }else{
    res.status(404).json({ message: "Pokemon not found or has been deleted"});
  }

  res.status(200).json(pokemon);
};

// UPDATE POKEMON
export const updatePokemon = async (req: Request, res: Response) => {
  const pokemonId = req.params.id;
  const updateData = req.body;

  const updatedPokemon: IPokemon | null = await Pokemon.findByIdAndUpdate(
    pokemonId,
    updateData,
    { new: true }
  );
  if (!updatedPokemon) {
    res.status(404).json({ message: "Pokemon not found" });
    return;
  }

  res.status(200).json(updatedPokemon);
};

export const deletePokemon = async (req: Request, res: Response) =>{
    const pokemonId = req.params.id;
    
    const   deletedPokemon: IPokemon | null = await Pokemon.findByIdAndUpdate(
        {_id: pokemonId, isDeleted: null},
        {isDeleted: new Date()},
        {new: true},
    );

    if(!deletedPokemon){
        res.status(404).json({ message: "Pokemon not found"});
        return;
    }
    res.status(200).json({ message: "Pokemon deleted successfully", deletedPokemon});
}