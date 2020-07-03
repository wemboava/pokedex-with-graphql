import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { GET_POKEMON_TYPES } from "../../apollo/queries/pokemonTypes";

import { Container, List, Item } from "./styles";

const PokemonsList = () => {
  const [pokemonTypesList, setPokemonTypesList] = useState([]);
  const pokemonTypesResult = useQuery(GET_POKEMON_TYPES);

  useEffect(() => {
    setPokemonTypesList(pokemonTypesResult.data.pokemonTypes.list);
  }, [setPokemonTypesList, pokemonTypesResult]);

  return (
    <Container>
      <List>
        {pokemonTypesList.map((type) => (
          <Link key={type.name} to={`/search?type=${type.name}`}>
            <Item bgColor={type.color} key={type.name}>
              {type.name}
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default PokemonsList;
