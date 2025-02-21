import { Router } from "express";
import{
    getPokemon,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon,

} from "./pokemon.service";

const router = Router();


router.get("/", getPokemon);
router.get("/:id", getPokemonById);
router.post("/:id", createPokemon);
router.patch("/:id", updatePokemon);
router.delete("/:id", deletePokemon);

export { router as pokemonRouter};