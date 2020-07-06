import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { useQuery } from "@apollo/react-hooks";

import PokemonsList from "../../components/pokemonsList";
import Loader from "../../components/loader";
import SearchBar from "../../components/searchBar";

import { GET_POKEMON_TYPES } from "../../apollo/queries/pokemonTypes";
import { GET_FAVORITE_POKEMONS } from "../../apollo/queries/favoritePokemons";
import { GET_ALL_POKEMONS } from "../../apollo/queries/pokemons";

import { Container } from "./styles";

import arrowBack from "../../assets/images/arrow-back.svg";

const Search = () => {
  const history = useHistory();

  const [pokemonTypesList, setPokemonTypesList] = useState([]);

  const pokemonTypesResult = useQuery(GET_POKEMON_TYPES);
  const favotitePokemonsResult = useQuery(GET_FAVORITE_POKEMONS);

  useEffect(() => {
    setPokemonTypesList(pokemonTypesResult.data.pokemonTypes.list);
  }, [setPokemonTypesList, pokemonTypesResult]);

  const pokemonsFiltered = useCallback(
    (data) => {
      // eslint-disable-next-line no-restricted-globals
      const { type, favorites } = queryString.parse(location.search);

      if (type) {
        return data.filter((pokemon) => pokemon.types.includes(type));
      }
      if (favorites) {
        const pokemons = favotitePokemonsResult.data.favoritePokemons.map(
          (pokemon) => {
            return {
              ...pokemon,
              bgColor: pokemonTypesList.find((typ) =>
                pokemon.types.includes(typ.name)
              )?.color,
            };
          }
        );
        return pokemons;
      }
      return data;
    },
    [favotitePokemonsResult, pokemonTypesList]
  );

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const pokemons = data.pokemons.map((pokemon) => {
    return {
      ...pokemon,
      bgColor: pokemonTypesList.find((type) =>
        pokemon.types.includes(type.name)
      )?.color,
    };
  });

  return (
    <Container>
      <div className="header">
        <button
          className="header__back-button"
          type="button"
          onClick={() => history.goBack()}
        >
          <img src={arrowBack} alt="arrow back icon" />
        </button>
      </div>
      <h1>Pokedéx</h1>
      <SearchBar />
      <PokemonsList pokemons={pokemonsFiltered(pokemons)} />
    </Container>
  );
};

export default Search;
