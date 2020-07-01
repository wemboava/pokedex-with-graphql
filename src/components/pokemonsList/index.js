import React from "react";

import { useHistory, Link } from "react-router-dom";

import { Container, List, Item, Types, TypeName } from "./styles";

const TypesList = ({ pokemons }) => {
  const history = useHistory();

  return (
    <Container>
      <List>
        {pokemons.slice(0, pokemons.length / 2).map((type) => (
          <Link to={`/pokemon/${type.name}`}>
            <Item
              onClick={() => history.push(`/pokemon/${type.name}`)}
              bgColor={type.bgColor}
              key={type.name}
            >
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
          </Link>
        ))}
      </List>
      <List>
        {pokemons.slice(pokemons.length / 2, pokemons.length).map((type) => (
          <Link to={`/pokemon/${type.name}`}>
            <Item
              onClick={() => history.push(`/pokemon/${type.name}`)}
              bgColor={type.bgColor}
              key={type.name}
            >
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
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default TypesList;
