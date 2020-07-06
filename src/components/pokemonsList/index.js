import React from "react";

import { Link } from "react-router-dom";

import { Container, List, Item, Types, TypeName } from "./styles";

const TypesList = ({ pokemons }) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <Item bgColor={pokemon.bgColor || "#c4c4c4"}>
              <strong>{pokemon.name}</strong>
              <div>
                <img src={pokemon.image} alt={pokemon.name} />
                <Types>
                  {pokemon.types.map((type) => (
                    <TypeName key={type} bgColor={pokemon.bgColor || "#c4c4c4"}>
                      {type}
                    </TypeName>
                  ))}
                </Types>
              </div>
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default TypesList;
