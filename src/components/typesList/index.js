import React from "react";

import { Container, List, Item } from "./styles";

const TypesList = () => {
  const types = [
    {
      name: "Glass",
      color: "#49D0B1",
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
  ];

  return (
    <Container>
      <List>
        {types.map((type) => (
          <Item bgColor={type.color} key={type.name}>
            {type.name}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default TypesList;
