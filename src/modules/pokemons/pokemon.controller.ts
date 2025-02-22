import { Router } from "express";
import{
    getPokemon,
    getPokemonById,
    getPokemonByType,
    createPokemon,
    updatePokemon,
    deletePokemon,

} from "./pokemon.service";

const router = Router();


router.get("/", getPokemon);
router.get("/:id", getPokemonById);
router.get("/poke/type", getPokemonByType);
router.post("/:id", createPokemon);
router.patch("/:id", updatePokemon);
router.delete("/:id", deletePokemon);

export { router as pokemonRouter};