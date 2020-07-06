import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/react-hooks";

import { UPDATE_FAVORITE_POKEMONS } from "../../apollo/mutations/favoritePokemons";
import { UPDATE_CURRENT_POKEMON_TYPES } from "../../apollo/mutations/pokemonTypes";
import { GET_FAVORITE_POKEMONS } from "../../apollo/queries/favoritePokemons";
import { GET_POKEMON_TYPES } from "../../apollo/queries/pokemonTypes";
import { GET_POKEMON } from "../../apollo/queries/pokemons";

import { Container, HeartButton } from "./styles";
import PokemonInfo from "../../components/pokemon-info";
import Loader from "../../components/loader";
import NotFound from "../../components/notFound";

import arrowBack from "../../assets/images/arrow-back-white.svg";

const PokemonDetail = () => {
  const params = useParams();
  const history = useHistory();

  const [pokemonType, setPokemonType] = useState({});

  const favotitePokemonsResult = useQuery(GET_FAVORITE_POKEMONS);
  const pokemonTypesResult = useQuery(GET_POKEMON_TYPES);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: params.id },
  });

  const [updateFavoritePokemon] = useMutation(UPDATE_FAVORITE_POKEMONS);
  const [updateCurrentPokemonType] = useMutation(UPDATE_CURRENT_POKEMON_TYPES);

  useEffect(() => {
    if (data) {
      updateCurrentPokemonType({
        variables: {
          typeName: data?.pokemon?.types[0],
        },
      });
    }
  }, [updateCurrentPokemonType, data]);

  useEffect(() => {
    setPokemonType(pokemonTypesResult.data.pokemonTypes.current);
  }, [setPokemonType, pokemonTypesResult]);

  const handleFavorite = useCallback(
    (pokeNumber) => {
      return !!favotitePokemonsResult.data.favoritePokemons?.find(
        (poke) => poke.number === pokeNumber
      );
    },
    [favotitePokemonsResult]
  );

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  if (!data.pokemon) return <NotFound pokemon={params.id} />;

  return (
    <Container bgColor={pokemonType.color}>
      <div className="header">
        <button
          className="header__back-button"
          type="button"
          onClick={() => history.goBack()}
        >
          <img src={arrowBack} alt="arrow back icon" />
        </button>
        <HeartButton
          onClick={() =>
            updateFavoritePokemon({
              variables: {
                pokemon: {
                  id: data.pokemon.id,
                  number: data.pokemon.number,
                  name: data.pokemon.name,
                  image: data.pokemon.image,
                  types: data.pokemon.types,
                },
              },
            })
          }
        >
          <input
            defaultChecked={handleFavorite(data.pokemon.number)}
            type="checkbox"
            className="toggle"
          />
          <div className="heart" />
        </HeartButton>
      </div>
      <div className="pokemon-name">
        <h2>{data.pokemon.name}</h2>
        <span>#{data.pokemon.number}</span>
      </div>
      <PokemonInfo pokemon={data.pokemon} bgColor={pokemonType.color} />
    </Container>
  );
};

export default PokemonDetail;
