import React from "react";
import useAxios from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  const [pokemonData, addPokemonData] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const addPokemon = async name => {
    await addPokemonData(name);
    // The useAxios hook will update pokemonData directly
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemonData.map(cardData => (
          <PokemonCard
            key={cardData.id || cardData.name} // Use a unique key
            front={cardData.sprites?.front_default}
            back={cardData.sprites?.back_default}
            name={cardData.name}
            stats={cardData.stats?.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
