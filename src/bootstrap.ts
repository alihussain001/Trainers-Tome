import { Express } from "express";
import { pokemonRouter } from "./modules/pokemons/pokemon.controller";


function bootstrap(app: Express){
app.use("/pokemon", pokemonRouter);
}

export {bootstrap};