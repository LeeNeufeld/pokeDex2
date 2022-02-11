import React, { useEffect, useState } from "react";
import { POKEMON_INIT_URL } from "../../config";
import { getAllPokemon, getPokemon } from "../../services/pokemon";

function PokemonDetails(props) {
  const { match } = props;
  const { params } = match;
  const { id, name } = params;

  return (
    <div>
      this is id # {id}, name is {name}
    </div>
  );
}

export default PokemonDetails;
