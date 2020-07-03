import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { UPDATE_FAVORITE_POKEMONS } from "../../apollo/mutations/favoritePokemons";
import { UPDATE_CURRENT_POKEMON_TYPES } from "../../apollo/mutations/pokemonTypes";
import { GET_FAVORITE_POKEMONS } from "../../apollo/queries/favoritePokemons";
import { GET_POKEMON_TYPES } from "../../apollo/queries/pokemonTypes";

import { Container, HeartButton } from "./styles";
import PokemonInfo from "../../components/pokemon-info";

const GET_POKEMON = gql`
  query GetPokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
      classification
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      resistant
      weaknesses
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
        classification
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
      }
    }
  }
`;

const PokemonDetail = () => {
  const params = useParams();
  const router = useHistory();

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

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container bgColor={pokemonType.color}>
      <div className="header">
        <button
          className="header__back-button"
          type="button"
          onClick={() => router.goBack()}
        >
          <svg
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L2 7.5M2 7.5L8 14M2 7.5H12.25H22.5"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
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
      <PokemonInfo pokemon={data.pokemon} bgColor={pokemonType.color} />
    </Container>
  );
};

export default PokemonDetail;
