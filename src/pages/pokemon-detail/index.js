import React from "react";
import { useParams, useHistory } from "react-router-dom";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: params.id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("params", data);

  return (
    <Container
      bgColor={
        types.find((type) => data.pokemon.types.includes(type.name))?.color
      }
    >
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
        <HeartButton>
          <input type="checkbox" className="toggle" />
          <div className="heart" />
        </HeartButton>
      </div>
      <PokemonInfo
        pokemon={data.pokemon}
        bgColor={
          types.find((type) => data.pokemon.types.includes(type.name))?.color
        }
      />
    </Container>
  );
};

export default PokemonDetail;
