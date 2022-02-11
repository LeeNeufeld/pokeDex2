import { Box, Card, CircularProgress, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PokeCard from "../../components/pokeCard/pokeCard";
import { POKEMON_INIT_URL } from "../../config";
import { getAllPokemon, getPokemon } from "../../services/pokemon";
import { StyledGridContainer } from "./styles";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initUrl = POKEMON_INIT_URL;

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initUrl + "?limit=898");
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <StyledGridContainer container spacing={2}>
            {pokemonData.map((pokemon, i) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <PokeCard key={i} pokemon={pokemon} />
                </Grid>
              );
            })}
          </StyledGridContainer>
        </>
      )}
    </div>
  );
}

export default Home;
