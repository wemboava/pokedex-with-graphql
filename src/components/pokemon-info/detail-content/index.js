import React from "react";

import { Container, Types, TypeName } from "./styles";

const DetailContent = ({ pokemon }) => {
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
    {
      name: "Steel",
      color: "#B2B4B5",
    },
  ];

  return (
    <Container>
      <ul>
        <li>
          <span>Species</span>
          <span>{pokemon.classification}</span>
        </li>
        <li>
          <span>Height</span>
          <span>
            {pokemon.height.minimum} - {pokemon.height.maximum}
          </span>
        </li>
        <li>
          <span>Weight</span>
          <span>
            {pokemon.weight.minimum} - {pokemon.weight.maximum}
          </span>
        </li>
      </ul>
      <div className="info">
        <h4>Types</h4>
        <Types>
          {pokemon.types.map((item) => (
            <TypeName bgColor={types.find((type) => type.name === item)?.color}>
              {item}
            </TypeName>
          ))}
          <li />
        </Types>
      </div>
      <div className="info">
        <h4>Resistant</h4>
        <Types>
          {pokemon.resistant.map((item) => (
            <TypeName bgColor={types.find((type) => type.name === item)?.color}>
              {item}
            </TypeName>
          ))}
          <li />
        </Types>
      </div>
      <div className="info">
        <h4>Weaknesses</h4>
        <Types>
          {pokemon.weaknesses.map((item) => (
            <TypeName bgColor={types.find((type) => type.name === item)?.color}>
              {item}
            </TypeName>
          ))}
          <li />
        </Types>
      </div>
    </Container>
  );
};

export default DetailContent;
