import React from "react";

import { useHistory, Link } from "react-router-dom";

import { Container, List, Item, Types, TypeName } from "./styles";

const TypesList = ({ pokemons }) => {
  const history = useHistory();

  return (
    <Container>
      <List>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <Item
              onClick={() => history.push(`/pokemon/${pokemon.name}`)}
              bgColor={pokemon.bgColor}
            >
              <strong>{pokemon.name}</strong>
              <div>
                <img src={pokemon.image} alt={pokemon.name} />
                <Types>
                  {pokemon.types.map((type) => (
                    <TypeName key={type} bgColor={pokemon.bgColor}>
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
