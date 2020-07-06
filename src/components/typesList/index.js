import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { GET_POKEMON_TYPES } from "../../apollo/queries/pokemonTypes";

import { Container, List, Item } from "./styles";

const PokemonsList = () => {
  const [pokemonTypesList, setPokemonTypesList] = useState([]);
  const pokemonTypesResult = useQuery(GET_POKEMON_TYPES);

  useEffect(() => {
    setPokemonTypesList(pokemonTypesResult.data.pokemonTypes?.list);
  }, [setPokemonTypesList, pokemonTypesResult]);

  return (
    <Container>
      <List>
        <Link to="/search">
          <Item bgColor="linear-gradient(400deg, rgba(73,208,177,1) 0%, rgba(61,230,81,1) 16%, rgba(88,169,244,1) 33%, rgba(87,235,244,1) 51%, rgba(255,206,76,1) 68%, rgba(255,71,71,1) 84%, rgba(176,115,110,1) 100%)">
            All Types
          </Item>
        </Link>
        {pokemonTypesList.map((type) => (
          <Link key={type.name} to={`/search?type=${type.name}`}>
            <Item withBgImage bgColor={type.color}>
              {type.name}
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default PokemonsList;
