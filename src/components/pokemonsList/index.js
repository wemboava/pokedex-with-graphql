import React, { useState, useEffect } from "react";
import gql from "graphql-tag";

import { useQuery } from "@apollo/react-hooks";

import { Container, List, Item, Types, TypeName } from "./styles";

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

const TypesList = () => {
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

  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const pokemons = data.pokemons.map((pokemon) => {
    return {
      ...pokemon,
      bgColor: types.find((type) => pokemon.types.includes(type.name))?.color,
    };
  });

  console.log("pokemons", pokemons);

  return (
    <Container>
      <List>
        {pokemons.slice(0, pokemons.length / 2).map((type) => (
          <Item bgColor={type.bgColor} key={type.name}>
            <stroke>{type.name}</stroke>
            <div>
              <Types>
                {type.types.map((item) => (
                  <TypeName bgColor={type.bgColor}>{item}</TypeName>
                ))}
                <li />
              </Types>
              <img src={type.image} alt={type.name} />
            </div>
          </Item>
        ))}
      </List>
      <List>
        {pokemons.slice(pokemons.length / 2, pokemons.length).map((type) => (
          <Item bgColor={type.bgColor} key={type.name}>
            <stroke>{type.name}</stroke>
            <div>
              <Types>
                {type.types.map((item) => (
                  <TypeName bgColor={type.bgColor}>{item}</TypeName>
                ))}
                <li />
              </Types>
              <img src={type.image} alt={type.name} />
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default TypesList;
