import React from "react";

import { useHistory, Link } from "react-router-dom";

import { Container, List, Item, Types, TypeName } from "./styles";

const TypesList = ({ pokemons }) => {
  const history = useHistory();

  return (
    <Container>
      <List>
        {pokemons.slice(0, pokemons.length / 2).map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <Item
              onClick={() => history.push(`/pokemon/${pokemon.name}`)}
              bgColor={pokemon.bgColor}
            >
              <strong>{pokemon.name}</strong>
              <div>
                <Types>
                  {pokemon.types.map((type) => (
                    <TypeName key={type} bgColor={pokemon.bgColor}>
                      {type}
                    </TypeName>
                  ))}
                  <li />
                </Types>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            </Item>
          </Link>
        ))}
      </List>
      <List>
        {pokemons.slice(pokemons.length / 2, pokemons.length).map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <Item
              onClick={() => history.push(`/pokemon/${pokemon.name}`)}
              bgColor={pokemon.bgColor}
            >
              <strong>{pokemon.name}</strong>
              <div>
                <Types>
                  {pokemon.types.map((type) => (
                    <TypeName key={type} bgColor={pokemon.bgColor}>
                      {type}
                    </TypeName>
                  ))}
                  <li />
                </Types>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default TypesList;
