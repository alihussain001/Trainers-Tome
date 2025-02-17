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
router.get("/", getPokemonById);
router.post("/", createPokemon);
router.patch("/", updatePokemon);
router.delete("/", deletePokemon);