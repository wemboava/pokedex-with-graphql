import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import PokemonsList from "../../components/pokemonsList";
import Loader from "../../components/loader";

import { GET_FAVORITE_POKEMONS } from "../../apollo/queries/favoritePokemons";

import { Container, InputWrapper } from "./styles";

import search from "../../assets/images/search.svg";

const GET_POKEMONS = gql`
  {
    pokemons(first: 150) {
      id
      number
      name
      image
      weaknesses
      types
      attacks {
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
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

const Search = () => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState("");

  const types = [
    {
      name: "Grass",
      color: "#49D0B1",
    },
    {
      name: "Bug",
      color: "#3de651",
    },
    {
      name: "Water",
      color: "#58A9F4",
    },
    {
      name: "Electric",
      color: "#FFCE4C",
    },
    {
      name: "Fighting",
      color: "#FF4747",
    },
    {
      name: "Ice",
      color: "#57ebf4",
    },
    {
      name: "Fairy",
      color: "#ff91cd",
    },
    {
      name: "Fire",
      color: "#F7776A",
    },
    {
      name: "Psychic",
      color: "#7E528C",
    },
    {
      name: "Ground",
      color: "#B0736E",
    },
    {
      name: "Flying",
      color: "#84d6ff",
    },
    {
      name: "Rock",
      color: "#bdbdbd",
    },
    {
      name: "Normal",
      color: "#ccc",
    },
    {
      name: "Dragon",
      color: "#f7ac3c",
    },
    {
      name: "Poison",
      color: "#BE7CF3",
    },
  ];

  const favotitePokemonsResult = useQuery(GET_FAVORITE_POKEMONS);

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
              bgColor: types.find((typ) => pokemon.types.includes(typ.name))
                ?.color,
            };
          }
        );
        return pokemons;
      }
      return data;
    },
    [favotitePokemonsResult, types]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`pokemon/${searchValue}`);
    },
    [searchValue, history]
  );

  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const pokemons = data.pokemons.map((pokemon) => {
    return {
      ...pokemon,
      bgColor: types.find((type) => pokemon.types.includes(type.name))?.color,
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
          <svg
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L2 7.5M2 7.5L8 14M2 7.5H12.25H22.5"
              stroke="#555"
              strokeWidth="3"
            />
          </svg>
        </button>
      </div>
      <h1>Pokedéx</h1>
      <form onSubmit={handleSubmit} className="search">
        <InputWrapper>
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search for pokémon names"
          />
          <button type="button" onClick={handleSubmit}>
            <img className="search-image" src={search} alt="search" />
          </button>
        </InputWrapper>
      </form>
      <PokemonsList pokemons={pokemonsFiltered(pokemons)} />
    </Container>
  );
};

export default Search;
